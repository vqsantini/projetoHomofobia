import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Pesquisa } from "./Pesquisa";


export const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
}, 
{
  path: '/pesquisa',
  element: <Pesquisa />
},
]);