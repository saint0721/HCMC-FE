import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import "./App.css";
import Main from "./views/Main";
import HomeView from "./views/HomeView";
import PlannedView from "./views/PlannedView";
import Login from "./views/Login";
import Plan from "./views/Plan";
import SignUp from "./components/SignUp";
import PlandetailFree from "./views/Plandetail_free";
import PlandetailPremeditated from "./views/Plandetail_premeditated";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
// import NotAuthRoutes from "./appointment/NotAuthRoutes";
// import ProtectedRoutes from "./appointment/ProtectedRoutes";
// import { authUser } from "./redux/thunkFunctions";

function Layout({ children }) {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      <Header />
      {children}
    </div>
  );
}

const App = () => {
  // const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.user?.isAuth);
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(authUser());
  //   }
  // }, [dispatch, pathname, isAuth]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Main />} />
              {/* 로그인 한 사람은 갈 수 없는 경로 */}
              {/* <Route element={<ProtectedRoutes isAuth={isAuth} />}> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {/* </Route> */}

              {/* 로그인 한 사람만 갈 수 있는 경로 */}
              {/* <Route element={<NotAuthRoutes isAuth={isAuth} />}> */}
              <Route path="/free" element={<HomeView />} />
              <Route path="/planned" element={<PlannedView />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/plandetail_free" element={<PlandetailFree />} />
              <Route
                path="/plandetail_premeditated"
                element={<PlandetailPremeditated />}
              />
              {/* </Route> */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;