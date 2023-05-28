import { createRoutesFromElements } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import AdminRouter from "./AdminRouter";

const router = createRoutesFromElements(
	[
		PublicRouter,
		AdminRouter
	]
);

export default router;