import { Request, Response, Router } from "express";
import * as db from "../db";
import { PostDTO } from "../models/post";

//in questo esercizio stiamo provando a collegare il front end con il back end, il frontend è l esercizio NODE e ANGUALR

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Ciao sono il server" });
});

router.get("/posts", async (req: Request, res: Response) => {
    try {
        const posts = await db.getPosts();
        res.json(posts);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
});

router.post("/posts", async (req: Request, res: Response) => {

    const p: PostDTO = req.body;

    try {
        const r = await db.addPost(p.title, p.author, p.body, p.hidden);
        res.status(201).json(r);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
});

router.delete("/posts/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const r = await db.deletePost(id);
        res.json(r);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
});



export default router;