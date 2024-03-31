import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
//create category routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category routes
router.put("/update-category/:id", requireSignIn, isAdmin, updateController);
//get all category
router.get("/get-category", categoryControlller);
//single category
router.get("/single-category/:slug", singleCategoryController);
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);
export default router;
