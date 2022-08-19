import { Router } from "express";
import { getOrder, getOrders, postOrder } from "../controllers/ordersController.js";
import dateQueryValidator from "../middlewares/dateQueryValidator.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import dateSchema from "../schemas/dateSchema.js";
import orderSchema from "../schemas/orderSchema.js";

const ordersRouter = Router();

ordersRouter.post("/order", schemaValidator(orderSchema), postOrder);
ordersRouter.get("/orders", dateQueryValidator(dateSchema), getOrders);
ordersRouter.get("/orders/:id", getOrder);

export default ordersRouter;