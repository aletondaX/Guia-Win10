import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Intro from "./pages/Intro.jsx";
import PreInstall from "./pages/PreInstall.jsx";
import PostInstall from "./pages/PostInstall.jsx";
import Extras from "./pages/Extras.jsx";
import Fixes from "./pages/Fixes.jsx";
import AcercaDe from "./pages/AcercaDe.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/intro",
    element: <Intro />
  },
  {
    path: "/preinstall",
    element: <PreInstall />
  },
  {
    path: "/postinstall",
    element: <PostInstall />
  },
  {
    path: "/extras",
    element: <Extras />
  },
  {
    path: "/troubleshooting",
    element: <Fixes />
  },
  {
    path: "/acerca",
    element: <AcercaDe />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}