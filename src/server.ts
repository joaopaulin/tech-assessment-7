import "@/config/dotenv";
import { discountsRoutes } from "@/modules/discounts/routes";
import express from "express";
import helmet from "helmet";

const server = express();
server.use(helmet());
server.use(express.json());
server.use(express.json({ limit: "1b", type: ["application/json", "text/plain"] }));
server.use(express.urlencoded({ extended: true, limit: "1b" }));
server.get("/", function (req, res) {
  res.status(200).send("Testing API is up and running");
});
server.use(discountsRoutes);
server.get("*", function (req, res) {
  res.status(404).send("");
});

export { server };
