import { Router } from "express";
import { CreateCategoryController } from "./Controllers/CreateCategoryController";
import { CreateVideoController } from "./Controllers/CreateVideoController";
import { DeleteCategoryController } from "./Controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./Controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./Controllers/GetAllVideosController";
import { UpdateCategoryController } from "./Controllers/UpdateCategoryController";

const routes = Router();

/*
  * [X] C - CREATE - POST
  * [X] R - READ - GET
  * [X] U - UPDATE - PUT
  * [X] D - DELETE - DELETE
*/

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };
 