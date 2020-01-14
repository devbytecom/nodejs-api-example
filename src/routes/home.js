import { Router } from "express";

const HomeRouter = Router();

HomeRouter.get("/", (req, res) => {
  if (parseInt(req.query.id) === 1337) {
    res.json({ testing: true });
  } else {
    res.json({ potato: "gonna potate" });
  }
});

export default HomeRouter;
