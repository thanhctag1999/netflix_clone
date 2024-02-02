import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import Register from "../Pages/Register";
const publicRoutes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

export { publicRoutes };
