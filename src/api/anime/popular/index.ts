import express, { Request, Response, Router } from "express";
import { getPopular } from "animu-desu";

const router: Router = express.Router();

router.get("/:page", async (req: Request, res: Response) => {
  const { page } = req.params;

  if (isNaN(parseInt(page))) {
    res.status(404).json({ error: "Parameter type must be integer." });
  } else {
    await getPopular(parseInt(page))
      .then((populars) => res.json(populars))
      .catch((err) => res.status(404).json(err));
  }
});

export { router };
