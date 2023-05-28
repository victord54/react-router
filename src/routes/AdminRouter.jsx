import { Route } from "react-router-dom";
import Layout from "../pages/admin/Layout";
import ErrorPage from "../pages/public/error-page/ErrorPage";
import Dashboard from "../pages/admin/dashboard/Dashboard";

const router = (
	<Route path="/admin" element={<Layout />} errorElement={<ErrorPage />}>
		<Route index element={<Dashboard />} />
	</Route>
);

export default router;