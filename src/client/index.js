import "./index.css";

import SPARouter from "@kodnificent/sparouter"; // if you are hosting locally

import mealsRouter from "./pages/meals";
import mealsIdRouter from "./pages/mealsId";
import homeRouter from "./pages/home";
import notFoundRouter from "./pages/notFound";

const options = {
  historyMode: true // set this to true if you use the HTML5 history mode API
};
const router = new SPARouter(options);

router.get("/", homeRouter);
router.get("/meals", mealsRouter);
router.get("/meals/{id}", mealsIdRouter);
router.notFoundHandler(notFoundRouter);

router.init();
