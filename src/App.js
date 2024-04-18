
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenteeRegisterPage from "./pages/MenteeRegisterPage";
import AllMentorsPage from "./pages/AllMentorsPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import DashBoard from "./pages/DashBoard";
import LoginPage from "./Components/Logn";

const router = createBrowserRouter([
  {path: "/", element: <Homepage/>},
  {path: "/BookAppointmentPage", element: <BookAppointmentPage/>},
  {path: "/MenteeRegisterPage", element: <MenteeRegisterPage/>},
  {path: "/AllMentorsPage", element: <AllMentorsPage/>},
  {path: "/Dashboard", element: <DashBoard/>},
  {path: "/login", element: <LoginPage/>},

])
function App() {
  return (
    <>

  <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
