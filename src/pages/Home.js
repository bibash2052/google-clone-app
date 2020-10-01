import React from "react";
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Google from "../google-main.png";
import Search from "./Search";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_header_left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home_header_right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="home_body">
                <img src={Google} alt="Google Logo"/>
                <div className="home_input_container">
                    <Search hideButtons/>
                </div>
            </div>
        </div>
    );
}

export default Home;