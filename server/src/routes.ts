import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

// routes: complete address of the requesting
// source: which system entity we are accessing
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// controllers standard: index, show, create, update, delete
routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;

// TRANSFERED TO POINTSONTROLLER.TS
// routes.post("/points", async (req, res) => {
//   const {
//     name,
//     email,
//     whatsapp,
//     latitude,
//     longitude,
//     city,
//     uf,
//     items,
//   } = req.body;

//   const trx = await knex.transaction(); // if one query fails nothing is executed

//   const insertedIds = await trx("points").insert({
//     image: "image-fake",
//     name,
//     email,
//     whatsapp,
//     latitude,
//     longitude,
//     city,
//     uf,
//   });

//   const point_id = insertedIds[0];

//   const pointItems = items.map((item_id: number) => {
//     return {
//       item_id,
//       point_id,
//     };
//   });

//   await trx("point_items").insert(pointItems);

//   return res.json({ success: true });
// });

// ****************
// FEW EXAMPLES
// ****************

// const users = ["Samuel", "teste", "teste2", "polisvaldo"];

// app.get("/users", (req, res) => {
//   const search = String(req.query.search);

//   const filteredUsers = search
//     ? users.filter((user) => user.includes(search))
//     : users;
//   // JSON
//   return res.json(filteredUsers);
//   //res.send('hello world')
// });

// app.get("/users/:id", (req, res) => {
//   // ":id" = parameter
//   const id = Number(req.params.id);

//   const user = users[id];

//   return res.json(user);
// });

// app.post("/users", (req, res) => {
//   const data = req.body;

//   const user = {
//     name: data.name,
//     email: data.email,
//   };

//   return res.json(user);
// });
