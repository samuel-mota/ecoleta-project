import { Request, Response } from "express";
import knex from "../database/connection";

// controllers standard: index, show, create, update, delete
class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex("items").select("*"); // always use 'await' when get a query in the DB

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.1.62:3333/uploads/${item.image}`, //expo address
        //image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return res.json(serializedItems);
  }
}

export default ItemsController;