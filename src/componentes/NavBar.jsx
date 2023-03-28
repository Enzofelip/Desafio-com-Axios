import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import "./NavBar.css";
import { useState } from "react";
const NavBar = () => {
    const [dados, setDados] = useState(false);
    const handleIcons = () => {
        setDados(true);
    };

    const btnClose = (e) => {
        e.preventDefault();
        setDados(false)
    }
    const homeBtn = () => {
        setDados(false)
    }
    const newBtn = () => {
        setDados(false);
    }
    const geBtn = () => {
        setDados(false);
    }
    const bloBtn = () => {
        setDados(false);
    }
    return(
        <div className="navbar">
            <div className="nav-texto">
                <h2><Link onClick={bloBtn} to={"/"}>Blog</Link></h2>

                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/new"} className="newbtn">New Post</Link></li>
                    <li><Link to={"/admin"}>Gerenciar</Link></li>
                </ul>
            </div>



           {!dados === true ? (
             <div className="navrespon" style={{width: "0"}}>
                {/* <a href="">&times;</a>

                <div className="overlay-text">
                    <h2><Link to={"/"}>Blog</Link></h2>

                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/new"} className="newbtn">New Post</Link></li>
                        <li><Link to={"/admin"}>Gerenciar</Link></li>
                    </ul>
                </div>        */}
            </div>
           ): (
            <div className="navrespon" style={{width:"100%"}}>
                <a href="" onClick={(e) => btnClose(e)} className="close-btn">&times;</a>

                <div className="overlay-text">
                    <h2><Link to={"/"}>Blog</Link></h2>
                    <div className="ullist">
                        <ul>
                            <li><Link to={"/"} onClick={homeBtn}>Home</Link></li>
                            <li><Link to={"/new"} onClick={newBtn} className="newbtn">New Post</Link></li>
                            <li><Link to={"/admin"} onClick={geBtn}>Gerenciar</Link></li>
                        </ul>
                    </div>
                   
                </div>        
            </div>
           )}
            <button className="btn-icon" onClick={handleIcons}>
                <AiOutlineMenu/>
            </button>
                
        </div>
    )
}

export default NavBar;