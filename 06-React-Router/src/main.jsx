import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Home, About, Contact, Project } from "./components/";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Project1 from "./components/Project1.jsx";
import Github, { getData } from "./components/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="project" element={<Project />}>
        <Route path=":projectId" element={<Project1 />} />
      </Route>
      <Route path="github" element={<Github />} loader={getData} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
