import db from "../../mongo";
export default async function handler(req, res) {
 
    console.log(req.body)
    db.collection('books').insertOne(req.body)
    res.status(200).json(req.body)
  }
 