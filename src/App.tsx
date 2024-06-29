import FeedPage from "./pages/FeedPage/FeedPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedPage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetailsPage />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
