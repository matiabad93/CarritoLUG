import { Router } from "express";
import { productsController } from '../../../controllers/products'

// se instancia un nuevo router el cual se utilizara para nestear rutas.
const router = Router();
// cuando la url coincida con esta ruta, se ejecuta el codigo dentro de la funcion.
// en este caso la url deberia ser --> localhost:PORT/api/blogs/ con un metodo GET.
router.post("/newProduct", productsController.newProduct);

router.get("/getAllProducts", productsController.getAllProducts);


// se exporta el router para poder enlazarlo con las rutas que estan dentro de /api.
export default router;