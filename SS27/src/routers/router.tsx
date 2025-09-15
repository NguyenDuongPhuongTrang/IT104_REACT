import { createBrowserRouter } from "react-router-dom";
import { BlogLayout } from "../components/Ex05/BlogLayout";
import { Post } from "../components/Ex05/Post";
import { PostDetail } from "../components/Ex05/PostDetail";
import { Register } from "../components/Ex08/Register";
import { Login } from "../components/Ex08/Login";
import { ProductList } from "../components/Ex02/ProductList";
import { ProductDetail } from "../components/Ex02/ProductDetail";
import { Task } from "../components/Ex03/Task";
import { TaskDetail } from "../components/Ex03/TaskDetail";
// import { Home } from "../components/Ex07/Home";
// import { About } from "../components/Ex07/About";
import { Ex01 } from "../components/Ex01/Ex01";
import { Home } from "../components/Ex01/Home";
import { About } from "../components/Ex01/About";
import { Contact } from "../components/Ex01/Contact";

export const router = createBrowserRouter([
	// Bài 1
	{
		path: "/",
		element: <Ex01></Ex01>,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
		],
	},
	// Bài 2
	{
		path: "/product",
		element: <ProductList></ProductList>,
	},
	{
		path: "product/:id",
		element: <ProductDetail></ProductDetail>,
	},
	// Bài 3
	{
		path: "/task",
		element: <Task></Task>,
	},
	{
		path: "/task/:id",
		element: <TaskDetail></TaskDetail>,
	},
	// Bài 4
	// {
	// 	path: "/product",
	// 	element: <ProductList></ProductList>,
	// },
	// Bài 5
	{
		path: "/blog",
		element: <BlogLayout></BlogLayout>,
		children: [
			{
				path: "post",
				element: <Post></Post>,
			},
			{
				path: "post/:id",
				element: <PostDetail></PostDetail>,
			},
		],
	},
	// Bài 7
	// {
	// 	path: "/home",
	// 	element: <Home></Home>,
	// },
	// {
	// 	path: "/about",
	// 	element: <About></About>,
	// },
	// Bài 8
	{
		path: "/register",
		element: <Register></Register>,
	},
	{
		path: "/login",
		element: <Login></Login>,
	},
]);