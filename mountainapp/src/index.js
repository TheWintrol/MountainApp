import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

import reportWebVitals from "./reportWebVitals";

import { Mountains } from "./mountains";
import { mountains } from "./mountainsList";
import { MountainDetails } from "./MountainDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mountains mountains={mountains} />,
  },
  {
    path: "/mountains/:slug",
    element: <MountainDetails mountains={mountains} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
