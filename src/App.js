
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenteeRegisterPage from "./pages/MenteeRegisterPage";
import AllMentorsPage from "./pages/AllMentorsPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import DashBoard from "./pages/DashBoard";
import LoginPage from "./Components/Logn";
import MentorProfileDasboard from "./Components/MentorProfileDasboard";
import MenteesDetails from "./Components/MenteesDetails";
import Calender from "./Components/Calender";
import MentorRegisterPage from "./pages/MentorRegisterPage";
import MentorLogin from "./pages/MentorLogin";

const router = createBrowserRouter([
  {path: "/", element: <Homepage/>},
  {path: "/BookAppointmentPage", element: <BookAppointmentPage/>},
  {path: "/MenteeRegisterPage", element: <MenteeRegisterPage/>},
  {path: "/AllMentorsPage", element: <AllMentorsPage/>},
  {path: "/Dashboard", element: <DashBoard/>},
  {path: "/login", element: <LoginPage/>},
  {path: "/MentorProfileDasboard", element: <MentorProfileDasboard/>},
  {path: "/MenteesDetails", element: <MenteesDetails/>},
  {path: "/Calender", element: <Calender/>},
  {path: "/MentorRegisterPage", element: <MentorRegisterPage/>},
  {path: "/MentorLogin", element: <MentorLogin/>}



])
function App() {
  return (
    <>

  <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
