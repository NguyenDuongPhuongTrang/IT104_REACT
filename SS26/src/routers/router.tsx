import { createBrowserRouter } from "react-router-dom";
import { Account } from "../components/Ex05/Account";
import { PrivateRouter } from "../components/Ex05/PrivateRouter";
import { Login } from "../components/Ex06/Login";
import { Teams } from "../components/Ex07/Teams";
import { TeamsIndex } from "../components/Ex07/TeamsIndex";
import { Team } from "../components/Ex07/Team";
import { lazy } from "react";
import { withSuspense } from "../routers/withSuspense";


const LazyLoadComp = lazy(
	() => import("../components/Ex08/LazyLoadComp")
);

export const router = createBrowserRouter([
	// Bài 1
	// {
	// 	path: "/product/:id",
	// 	element: <ProductDetail></ProductDetail>,
	// },
	// Bài 2
	// {
	// 	path: "/student/:name",
	// 	element: <Student></Student>,
	// },
	// Bài 3
	// Bài 5
	// {
	// 	path: "/login",
	// 	element: <Login></Login>,
	// },
	// {
	// 	path: "/account",
	// 	element: (
	// 		<PrivateRouter>
	// 			<Account></Account>
	// 		</PrivateRouter>
	// 	),
	// },
	// Bài 6
	{
		path: "/login",
		element: <Login></Login>,
	},
	{
		path: "/account",
		element: (
			<PrivateRouter>
				<Account></Account>
			</PrivateRouter>
		),
	},
	// Bài 7
	{
		path: "/teams",
		element: <Teams></Teams>,
		children: [
			{
				index: true,
				element: <TeamsIndex></TeamsIndex>,
			},
			{
				path: ":id",
				element: <Team></Team>,
			},
		],
	},
	// Bài 8
	{
		path: "/ex08",
		element: withSuspense(<LazyLoadComp />),
	},

]);