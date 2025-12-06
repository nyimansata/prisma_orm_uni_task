const express = require("express");
const userRoute = require("./routes/users");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api/v1/users", userRoute);

// ejs
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.render("home", { users });
});

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening to port:", port);
});
