import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import "./index.css";
import DesktopLayout from "./layouts/Desktop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DesktopLayout />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
