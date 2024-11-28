// CRUD
// Create
// Read
// Update
// Delete

import mongoose from "mongoose"

type TPost = {
    title: string,
    author: string,
    body: string,
    date: Date,
    hidden: boolean
}

const postSchema = new mongoose.Schema<TPost>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    hidden: { type: Boolean, required: true },
});

export const Post = mongoose.model<TPost>("Post", postSchema, "posts");

// DTO: Data Transfer Object
export type PostDTO = {
    title: string,
    author: string,
    body: string,
    hidden: boolean
}