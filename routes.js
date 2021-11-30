const router = require("express").Router();
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");

router.post("/", (req, res) => {
  const { name, username } = req.body;

  if (!name || !username) {
    return res.status(400).send({
      message: "Empty field provided",
    });
  }

  res.status(200).send({
    name,
    username,
    message: "Response sent successfully",
  });
});

router.get("/second/:id", (req, res) => {
  const id = req.params.id;
  const town = req.query.town;

  if (!id || !town) {
    return res.status(400).send({
      message: "Empty field provided",
    });
  }

  res.status(200).send({
    id,
    town,
    message: "Response sent successfully.",
  });
});

router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

module.exports = router;
