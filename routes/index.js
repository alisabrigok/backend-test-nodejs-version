import express from "express";
import IndexController from "../controllers/index_controller";

const router = express.Router();;

router.get("/", IndexController.index);

export default router;