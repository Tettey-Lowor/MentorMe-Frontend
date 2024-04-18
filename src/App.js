import BookAppointmentPage from "./pages/BookAppointmentPage";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenteeRegisterPage from "./pages/MenteeRegisterPage";
import AllMentorsPage from "./pages/AllMentorsPage";


const router = createBrowserRouter([
  {path: "/", element: <Homepage/>},
  {path: "/BookAppointmentPage", element: <BookAppointmentPage/>},
  {path: "/MenteeRegisterPage", element: <MenteeRegisterPage/>},
  {path: "/AllMentorsPage", element: <AllMentorsPage/>},

])
function App() {
  return (
    <>
  <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
