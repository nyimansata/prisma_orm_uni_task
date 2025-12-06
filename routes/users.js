const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

// get all users
router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
});

// adding a user
router.post("/", async (req, res) => {
  const newUser = await prisma.user.create({
    data: req.body,
  });
  res.send(newUser);
});

// update user
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const updateUser = await prisma.user.update({
    where: { id: id },
    data: req.body,
  });
  res.send(updateUser);
});

// deleting a user
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const deleteUser = await prisma.user.delete({ where: { id } });

  res.send(deleteUser);
});

module.exports = router;
