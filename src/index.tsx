import { API } from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import awsconfig from "./aws-exports";
import { App } from "./Components/App/App";
import "./indexS.scss";
API.configure(awsconfig);

const router = createBrowserRouter([
    {
        path: "*",
        element: <App />,
        children: [],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
