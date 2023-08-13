import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MainPage from "./MainPage"
import AttestPage from "./AttestPage"
import Callback from "./Callback"



export function App() {


  const router = createBrowserRouter([
		{
			path: "/",
			element: <MainPage />,
		},
    {
			path: "/callback",
			element: <Callback />,
		},
		{
			path: "/Attest/callback",
			element: <AttestPage />,
		},
	])


  return (
    <>

       <div className="selection:bg-red-500/100 selection:text-slate-100/100">
					<RouterProvider router={router} />
				</div>

    </>
  );
}
