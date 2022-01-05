const express = require("express");
const app = express();
require("dotenv").config();

const data = [
  {
    id: 1,
    artiste: "Les requins du zouglou",
    musique: "zouglou",
    zone: "Abidjan",
    lieu: "L'acoustic, 2 plateaux vallon des jardins",
    contacts: {
      tel: "2250505050505",
      twitter: "@test",
      "instagram:": "@kjdkj",
      whatsapp: "2250789387111",
      facebook: "https://www.facebook.com/LesRequins",
    },
    a: 2021,
    m: 1,
    d: 10,
    url: "./assets/img/a.jpg",
    annule: false,
  },
  {
    id: 2,
    artiste: "Les requins du zouglou",
    musique: "zouglou",
    zone: "Abidjan",
    lieu: "L'acoustic, 2 plateaux vallon des jardins",
    contacts: {
      tel: "2250505050505",
      twitter: "@test",
      "instagram:": "@kjdkj",
      whatsapp: "2250789387111",
      facebook: "https://www.facebook.com/LesRequins",
    },
    a: 2021,
    m: 1,
    d: 10,
    url: "./assets/img/a.jpg",
    annule: true,
  },
  {
    id: 3,
    artiste: "Les requins du zouglou",
    musique: "zouglou",
    zone: "Abidjan",
    lieu: "L'acoustic, 2 plateaux vallon des jardins",
    contacts: {
      tel: "2250505050505",
      twitter: "@test",
      "instagram:": "@kjdkj",
      whatsapp: "2250789387111",
      facebook: "https://www.facebook.com/LesRequins",
    },
    a: 2021,
    m: 1,
    d: 11,
    url: "./assets/img/a.jpg",
    annule: false,
  },
  {
    id: 4,
    artiste: "Les requins du zouglou",
    musique: "zouglou",
    zone: "Abidjan",
    lieu: "L'acoustic, 2 plateaux vallon des jardins",
    contacts: {
      tel: "2250505050505",
      twitter: "@test",
      "instagram:": "@kjdkj",
      whatsapp: "2250789387111",
      facebook: "https://www.facebook.com/LesRequins",
    },
    a: 2021,
    m: 2,
    d: 1,
    url: "./assets/img/a.jpg",
    annule: false,
  },
];
app.get("/", function (req, res) {
  console.log("appel");
  res.json(data);
});

app.listen(process.env.PORT);
