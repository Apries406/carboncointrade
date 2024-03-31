import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
interface Iprops {
  children?: ReactNode
}


const Private: FC<Iprops> = (props) => {
  const token = sessionStorage.getItem('token');
  const location = useLocation();
  if (token) {
    return <>{props.children}</>
  } else {
    return <Navigate to={"/?redirect=" + location.pathname}></Navigate>
  }
}

export default Private;