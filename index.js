const express = require("express");
const userRoute = require("./routes/users");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use("/api/v1/users", userRoute);

// ejs
app.set("view engine", "ejs");

// get all users
app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.render("index", { users });
});

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening to port:", port);
});
