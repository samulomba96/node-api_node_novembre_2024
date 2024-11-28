import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Benvenuti sul server.");
});

router.get("/docs", (req: Request, res: Response) => {
    res.send("Documentazione.");
});

export default router;