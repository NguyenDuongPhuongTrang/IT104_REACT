import { Routes } from "react-router-dom";
import "./App.css";
// import Home from "./components/ex1/Home";
// import About from "./components/ex1/About";
// import Contact from "./components/ex1/Contact";
// import Login from "./components/ex3/Ex3";
// import Register from "./components/ex4/Ex4";
// import NotFound from "./components/ex5/NotFound";
// import ListUser from "./components/ex8/ListUser";
// import UserDetail from "./components/ex8/UserDetail";
function App() {
  return (
    <>
      <Routes>
        {/* Bài 1 */}
         {/* <Route path="/" element={<Home />} /> 
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/about" element={<About />} />  */}
        {/* Bài 3 */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* Bài 4 */} 
       {/* <Route path="/register" element={<Register />} />  */}
        {/* Bài 5 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
        {/* Bài 6 */}
      {/* <Route element={<MainLayout />}> ... </Route>  */}
        {/* Bài 8 */}
       {/* <Route path="/users" element={<ListUser />} />
      <Route path="/users/:id" element={<UserDetail />} />  */}
       
    </>
  );
}

export default App;