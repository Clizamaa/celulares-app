import {createBrowserRouter} from "react-router-dom";

import FormAssignCell from "../components/FormAssignCell";
import FormRegisterCell from "../components/FormRegisterCell";
import FormRegisterSim from "../components/FormRegisterSim";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FormAssignCell />,
    },
    {
        path: "/registercell",
        element: <FormRegisterCell />,
    },
    {
        path: "/registersim",
        element: <FormRegisterSim />,
    }
])
