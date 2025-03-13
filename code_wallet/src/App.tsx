
import { Router } from "./lib/electron-router-dom";
import { Route } from 'react-router-dom'

import Fragments from "./Pages/Fragments/Fragments";
import Tags from "./Pages/Tags/Tags";
import Info from "./Pages/Info/Info";
import NewFragments from "./Pages/NewFragments/NewFragments";
export default function App() {
return (
    <>
    <Router
      main={
          <>
            <Route path="/" element={<Fragments />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/info" element={<Info />} />
            <Route path="/newfragments" element={<NewFragments />}>
              <Route path="/newfragments/:id" element={<NewFragments />} />
            </Route>
          </>
    }
    /></>
)
}