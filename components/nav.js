import Link from "next/link";
import { Component } from "react"

export default class Nav extends Component {
    render(){
        let logout;

        if(this.props.user){
            logout = (
                <li className="nav-item">
                    <Link href="/" onClick={()=>localStorage.clear()} className="nav-link">Logout</Link>
                </li>
            )
        }
        return (
        <>
        {logout}
        </>
    )};
}