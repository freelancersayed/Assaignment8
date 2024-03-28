import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";
import BookDetails from "./component/BookDetails/BookDetails";
import ListedBooks from "./component/ListedBooks/ListedBooks";
import ReadFilter from "./component/ReadDashbord/ReadFilter";
import PageToRead from "./component/PageToRead/PageToRead";
import WishList from "./component/WishList/WishList";
// import BookFetch from './component/Book/BookFetch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: '/read',
      //   element: <PageToRead></PageToRead>,
      //   loader:()=>fetch('../public/Json.json'),
      // },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../public/Json.json"),
      },
      {
        path: "/chart",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("../public/Json.json"),
      },
      {
        path: "/redFilter",
        element: <ReadFilter></ReadFilter>,
        children: [
          {
            path: "onlyread",
            element: <PageToRead></PageToRead>,
            loader: () => fetch("../public/Json.json"),
          },
          {
            path: "wish",
            element: <WishList></WishList>,
            loader: () => fetch("../public/Json.json"),
          },
        ],
      },

      // {
      //   path: '/book',
      //   element: <BookFetch></BookFetch>
      // },
    ],
  },
  // {
  //   path: '/red',
  //   element: <PageToRead></PageToRead>
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
