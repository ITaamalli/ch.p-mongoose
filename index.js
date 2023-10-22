const person = require("./models/person");
require("./config/database");

const savePerson = () => {
  //create instance person
  const newPerson = new person({
    name: "shady",
    age: "27",
    favoriteFoods: [],
  });
  newPerson
    .save()
    .then(() => console.log("added"))
    .catch(() => console.log("err"));
};

const saveMultiple = () => {
  const tab = [
    { name: "shady1", age: "272", favoriteFoods: ["pasta"] },
    { name: "zied", age: "30", favoriteFoods: ["koskos"] },
  ];

  person
    .create(tab)
    .then(() => console.log("added"))
    .catch(() => console.log("err"));
};

const find1 = () => {
  person
    .find({ name: "ziedsdfsdtfdgsdf" })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const find2 = () => {
  person
    .findOne({ favoriteFoods: "pasta" })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const find3 = () => {
  person
    .findById("644ac215814384552a7d0314")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const method1 = () => {
  person
    .findById("644ac215814384552a7d0314")
    .then((data) => {
      data.favoriteFoods.push("hamburger");
      data
        .save()
        .then(() => console.log("added"))
        .catch(() => console.log("err"));
    })
    .catch(() => console.log("err"));
};

const method2 = () => {
  person
    .findOneAndUpdate(
      { name: "shady" },
      { favoriteFoods: ["ddsd0", "dqsdqs"] },
      { new: true }
    )
    .then(() => console.log("updated"))
    .catch(() => console.log("error"));
};

const removebyID = () => {
  person
    .findByIdAndRemove("644ac215814384552a7d0314")
    .then(() => console.log("deleted"))
    .catch(() => console.log("error"));
};

const remove2 = () => {
  person
    .findOneAndDelete({ name: "shady1" })
    .then(() => console.log("deleted"))
    .catch(() => console.log("error"));
};

const lastfind = () => {
  person
    .find({ favoriteFoods: "koskos" })
    .sort({ name: -1 })
    .limit(3)
    .select(["name", "age"])
    .exec()
    .then((data) => console.log(data))
    .catch(() => console.log("error"));
};

lastfind();
