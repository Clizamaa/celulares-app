import { createBrowserRouter } from "react-router-dom";

import FormAssignCell from "../components/FormAssignCell";
import FormRegisterCell from "../components/FormRegisterCell";
import FormRegisterSim from "../components/FormRegisterSim";
import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <FormAssignCell />,
      },
      {
        path: "/registercell",
        element: <FormRegisterCell />,
      },
      {
        path: "/registersim",
        element: <FormRegisterSim />,
      },
    ],
  },
]);
