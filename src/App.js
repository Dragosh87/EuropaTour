import React from "react";
import {ThemeProvider} from "@material-tailwind/react";
import { LocalProvider } from "./Context";
import {RouterProvider} from "react-router-dom";
import router from "./routes";

export default function App() {
    const [user, setUser] = React.useState(false)

    return (
        <React.StrictMode>
            <ThemeProvider>
                <LocalProvider>
                    <RouterProvider router={router}/>
                </LocalProvider>
            </ThemeProvider>
        </React.StrictMode>
    )

}
