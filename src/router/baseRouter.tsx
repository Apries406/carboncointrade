import LoginView from "../views/LoginView";
import AdminView from "../views/admin/AdminView";
import Private from "../utils/Private";
import LoginSelectView from "../views/loginselect/LoginSelect";
import LazyLoad from '../utils/LazyLoad';
import RegisterView from "../views/register/register";

const baseRouter = [
  {
    path: "/",
    element: <LoginSelectView></LoginSelectView>
  },
  {
    path: "/login",
    element: <LoginView></LoginView>
  },
  {
    path: "/register",
    element: <RegisterView></RegisterView>
  },
  {
    path: "/admin",
    element: <Private><AdminView></AdminView></Private>,
    children: [
      { path: '', element: LazyLoad('/admin/DashView') },
    ]
  }
]
export default baseRouter;