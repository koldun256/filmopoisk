import FeedPage from "./pages/FeedPage/FeedPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedPage />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
