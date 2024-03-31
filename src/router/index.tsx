import { useRoutes } from "react-router-dom";
import baseRouter from "./baseRouter";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
function RouterView() {
  const routes = useSelector((state: RootState) => state.auth.routes)
  useEffect(() => {
    baseRouter[3].children = routes
  }, [routes])
  // console.log("baseRouter", baseRouter)
  const element = useRoutes(baseRouter)
  return (<>{element}</>);
}
export default RouterView;