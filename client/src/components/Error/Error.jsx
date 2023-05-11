import { useLocation } from "react-router-dom";
import style from "./Error.module.css"

const Error = () => {

    const {pathname} = useLocation();

    return(
       <div className={style.container}>
           <p>Error 404: This path {pathname} does not exist.</p>
       </div>
    );
}
export default Error;