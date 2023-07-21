import { Routes, Route} from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/userContext"
import { useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/auth';
import User from "./pages/UserLandingPage"
import MyTicket from './pages/UserTicketPage';
import AddTicket from "./pages/adminAddTicket"
import AdminLandingPage from './pages/AdminLandingPage';
import { API, setAuthToken } from "./config/api";
import {
  PrivateRouteAdmin,
  PrivateRouteLogin,
  PrivateRouteUser,
} from "./components/PrivateRoute";
import TicketDetail from "./components/ticketDetail"
import Payment from "./pages/userPayment"
import Navbar from "./components/navbar"

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(null);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("Check user success : ", response);

      let payload = response.data.data;

      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("Check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/auth");
      }
    }
  }, [isLoading]);

  return (
    <>
      <Navbar />
        {isLoading ? null : (
        <Routes>
          <Route path="/auth" element={<Home />} />
          <Route element={<PrivateRouteLogin />}>
            <Route element={<PrivateRouteUser />}>
              <Route exact path='/' element={<User />} />
              <Route path='/userTicket' element={<MyTicket />} />
              <Route path='/ticketDetail' element={<TicketDetail />} />
              <Route path='/payment' element={<Payment />} />
            </Route>
            <Route element={<PrivateRouteAdmin />}>
              <Route path='/admin' element={<AdminLandingPage />} />
              <Route path='/addTicket' element={<AddTicket />} />
            </Route>
          </Route>
        </Routes>
        )}     
    </>
  );
}

export default App;
