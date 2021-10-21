const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    name: "sabana",
    email: "sabana@email.com",
    phone: "012515215154154",
  },
  {
    id: 2,
    name: "sabnoor",
    email: "sabana@email.com",
    phone: "012515215154154",
  },
  {
    id: 3,
    name: "awishaira",
    email: "sabana@email.com",
    phone: "012515215154154",
  },
  {
    id: 4,
    name: "catrina",
    email: "sabana@email.com",
    phone: "012515215154154",
  },
  {
    id: 5,
    name: "luba",
    email: "sabana@email.com",
    phone: "012515215154154",
  },
  {
    id: 6,
    name: "juba",
    email: "sabana@email.com",
    phone: "012515215154154",
  },
];

app.get("/", (req, res) => {
  res.send("This is Node js Project");
});

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const filteredUser = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(search);
    });
    res.send(filteredUser);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  res.send(users.find((user) => user.id === parseInt(req.params.id)));
});

// app post

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(JSON.stringify(newUser));
});

app.listen(port, () => {
  console.log("Listening port ", port);
});
