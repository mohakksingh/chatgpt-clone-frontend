import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage.jsx";
import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx";
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import RootLayout from "./layouts/RootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout.jsx";
import SignInpage from "./routes/signInPage/SignInpage.jsx";
import SignUpPage from "./routes/signUpPage/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/",element:<Homepage/>
      },
      {
        path:"/sign-in/*",element:<SignInpage/>
      },
      {
        path:"/sign-up/*",element:<SignUpPage/>
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",element:<DashboardPage/>
          },
          {
            path:'/dashboard/chats/:id',
            element:<ChatPage/>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
