import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./views/RootLayout";
import { Blog } from "./views/Blog";
// import { Sobre } from "./views/Sobre";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Blog/>
            }
            // },
            // {
            //     path: "/sobre",
            //     element: <Sobre/>
            // }
        ]
    }
])