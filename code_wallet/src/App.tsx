// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'

import { Router } from "./lib/electron-router-dom";
import { Route } from 'react-router-dom'

import Fragments from "./Pages/Fragments/Fragments";
import Tags from "./Pages/Tags/Tags";
import Info from "./Pages/Info/Info";
import NewFragments from "./Pages/NewFragments/NewFragments";
import Header from './Components/Header/Header';
import NewRoute from './Pages/newRoute';
// import Header from "./Components/Header/Header";

export default function App() {
return (
    <>
    <Router
      main={
          <>
            {/* <Header /> */}
            <Route path="/" element={<Fragments />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/info" element={<Info />} />
            <Route path="/newfragments" element={<NewFragments />}>
              <Route path="/newfragments/:id" element={<NewFragments />} />
            </Route>
            {/* <Route path="/newroute" element={<NewRoute />}>
              <Route path="/newroute/:id" element={<NewRoute />} />
            </Route> */}
          </>
    }
    // about={<Route path="/" element={<AboutScreen />} />}
    /></>
)
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Tags />,
//     children: [
//       {
//         path: "/tags",
//         element: <Tags />,
//       },
//       {
//         path: "/info",
//         element: <Info />,
//       },
//       // {
//       //   path: "newtag",
//       //   element: <Parametres />, // Utiliser le composant Parametres
//       // },
//       {
//         path: "/newfragment",
//         element: <NewFragments />,
//       },
//     ],
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router}>
//     {/* <Header /> */}
//   </RouterProvider>;
// }
