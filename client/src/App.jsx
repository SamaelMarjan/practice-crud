import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";
import DeleteBlog from "./pages/DeleteBlog";
import Error from "./pages/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateBlog />} />
      <Route path="/edit" element={<UpdateBlog />} />
      <Route path="/delete" element={<DeleteBlog />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
