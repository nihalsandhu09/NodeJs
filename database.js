const { MongoClient } = require("mongodb");

//  password = nihal@1234

// const url = mongodb+srv://nihalsandhu:nihal12345@nodejs.ciembsu.mongodb.net/
// install mongodb compass

const url = "mongodb+srv://nihalsandhu:Nihal12345@nodejs.ciembsu.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";
async function main() {
  await client.connect();
  console.log("Connected successfully to serever ");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Sam",
    lastName: "Kumar",
    City: "Una",
    State: "Himachal Pradesh ",
    Phone: "8580522817",
  };
  const datatwo = {
    firstName: "Nihal",
    lastName: "Sandhu",
    City: "Una",
    State: "Himachal Pradesh ",
    Phone: "8580522817",
  };
  const insertResult = await collection.insertMany([datatwo]);
  console.log("iserted documents", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("found documents ", findResult);

  const countResult = await collection.countDocuments({});
  console.log("count of documents in the User collection", countResult);

  // const deleteResult = await collection.deleteOne({});
  // console.log(deleteResult);

  // const findAllDocuments = await collection
  //   .find({ firstName: "Sam" })
  //   .toArray();

  const findOneDocument = await collection.findOne({ firstName: "Sam" });
  console.log("documents", findOneDocument);
  const updatedocument = await collection.updateOne(
    { firstName: "Nihal" },
    { $set: { City: "Chandigarh" } }
  );
  console.log("documented updated ", updatedocument);
  // console.log("result is ", findAllDocuments);
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
