import db from "../../mongo";
export default async function handler(req, res) {
 
    let books = await db.collection("books").find().toArray();
    res.status(200).json(books)
  }
 