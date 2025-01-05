import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Fragments from "./Pages/Fragments/Fragments";
import Tags from "./Pages/Tags/Tags";
import Info from "./Pages/Info/Info";
import NewFragments from "./Pages/NewFragments/NewFragments";
// import Header from "./Components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Fragments />,
    children: [
      {
        path: "/tags",
        element: <Tags />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      // {
      //   path: "newtag",
      //   element: <Parametres />, // Utiliser le composant Parametres
      // },
      {
        path: "/newfragment",
        element: <NewFragments />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}>
    {/* <Header /> */}
  </RouterProvider>;
}
