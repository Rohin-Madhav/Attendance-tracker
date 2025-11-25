import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home ";
import StudentsList from "./pages/StudentsList";
import StudentDetails from "./pages/StudentDetails";
import AddNew from "./pages/AddNew";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="addStudents" element={<AddNew />} />
            <Route path="studentsList" element={<StudentsList />} />
            <Route path="studentDetails" element={<StudentDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
