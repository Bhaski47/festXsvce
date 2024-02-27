import "./App.css";
import Events from "./page/Events";
import DepartmentsPage from "./page/Departments";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventInfo from "./page/EventInfo";
import Location from "./page/Location";
import About from "./page/About";
import Login from "./page/Login";
import Signup from "./page/Signup";
import FestXsvce from "./components/BottomText";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import bg from "./assets/images/newBackground.png";
// import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";
import React from "react";
import GetPass from "./page/GetPass";
import Sponsers from "./page/Sponsers";
import ReactGA from "react-ga";
import Footer from "./components/Footer";

ReactGA.initialize("G-EGQRVRM8QK");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/location",
    element: (
      <>
        <Location />
        <Footer />
      </>
    ),
  },
  {
    path: "/departments",
    element: (
      <>
        <DepartmentsPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/departments/:department",
    element: (
      <>
        <Events />
        <Footer />
      </>
    ),
  },
  {
    path: "/departments/:department/:eventId",
    element: <EventInfo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/getPass",
    element: <GetPass />,
  },
  {
    path: "/sponsors",
    element: (
      <>
        <Sponsers />,
        <Footer />
      </>
    ),
  },
]);

function App() {
  // const AnimatedCursorMemo = React.memo(AnimatedCursor);
  // const [screenWidth, setScreenWidth] = useState<number>(0);
  // useEffect(() => {
  //   setScreenWidth(window.innerWidth);
  //   window.addEventListener("resize", () => {
  //     setScreenWidth(window.innerWidth);
  //   });
  // }, []);

  return (
    <>
      {/* {screenWidth > 770 ? (
        <AnimatedCursorMemo
          innerSize={5}
          outerSize={30}
          innerScale={0}
          outerScale={2}
          outerStyle={{
            mixBlendMode: "difference",
            // backgroundColor: "#4d291a90",
            backgroundColor: "#d0c19c",
          }}
          innerStyle={{
            backgroundColor: "white",
            mixBlendMode: "difference",
          }}
        />
      ) : null} */}
      <div className="background-container">
        <img src={bg} alt="Background Image" className="background-image" />
      </div>
      <ToastContainer position="top-center" theme="dark" />
      <RouterProvider router={router} />
      {/* <FestXsvce /> */}
    </>
  );
}

export default App;
