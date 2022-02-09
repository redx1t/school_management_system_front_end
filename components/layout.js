import Meta from "./meta";
import Nav from "./nav";
import Bootstrap from "./../styles/Bootstrap.module.css";
import axios from "axios"
const Layout = (props) => {
    return ( 
    <>
        <Meta/>
        <Nav user={props.user}/>
        <div className={Bootstrap.container}>
            {props.children}
        </div>
    </>
     );
     
}
 
export default Layout;