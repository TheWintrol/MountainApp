import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Mountains } from "./mountains";
import { mountains } from "./mountainsList";
import { MountainDetails } from "./MountainDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mountains mountains={mountains} />,
  },
  {
    path: "/mountain/:id",
    element: <MountainDetails mountains={mountains} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export const App = () => {
  return (
    <div className="App">
      <Mountains mountains={mountains} />
    </div>
  );
};
