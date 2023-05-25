import db from "../../mongo";
export default async function handler(req, res) {
    console.log(req.body)
    const filter = { pid:req.body.pid};
    const update = { $set: { ...req.body} };
    const result = await  db.collection("books").updateOne(filter, update);
    console.log(result);
    res.status(200).json('er')
  }