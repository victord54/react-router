import { Route } from "react-router-dom";
import Layout from "../pages/admin/Layout";
import ErrorPage from "../pages/public/error-page/ErrorPage";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Users from "../pages/admin/users/Users";
import AuthGuard from "./AuthGuard";

const router = (
	<Route
		path="/admin"
		element={
			<AuthGuard user={true}>
				<Layout />
			</AuthGuard>
		}
		errorElement={<ErrorPage />}
	>
		<Route index element={<Dashboard />} />
		<Route path="users" element={<Users />} />
	</Route>
);

export default router;
