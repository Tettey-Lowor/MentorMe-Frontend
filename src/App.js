
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
import MentorProfileDetails from "./pages/MentorProfileDetails";
import InboxPage from "./pages/inboxPage";
import Messages from "./Components/Messages";
import SettingsPage from "./pages/SettingsPage";
import FirstDashBoard from "./pages/FirstDashBoard";
import SuccesMessage from "./pages/SuccesMessage";
import CVSample from "./pages/CVSample";
import LogoutPage from "./pages/LogoutPage";
import MentorsBlog from "./Components/MentorsBlog";
import ContactForm from "./pages/ContactForm";
import MentorsResume from "./pages/MentorsResume";


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
  {path: "/MentorLogin", element: <MentorLogin/>},
  {path: "/MentorProfileDetails", element: <MentorProfileDetails/>},
  {path: "/InboxPage", element: <InboxPage/>},
  {path: "/Messages", element: <Messages/>},
  {path: "/SettingsPage", element: <SettingsPage/>},
  {path: "/FirstDashBoard", element: <FirstDashBoard/>},
  {path: "/SuccesMessage", element: <SuccesMessage/>},
  {path: "/CVSample", element: <CVSample/>},
  {path: "/LogoutPage", element: <LogoutPage/>},
  {path: "/MentorsBlog", element: <MentorsBlog/>},
  {path: "/ContactForm", element: <ContactForm/>},
  {path: "/MentorsResume", element: <MentorsResume/>}


  



])
function App() {
  return (
    <>

  <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
