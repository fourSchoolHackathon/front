import React from 'react';
import * as N from "./NavBar.style"

import home from "../../static/footer/home.svg"
import filledHome from "../../static/footer/filledHome.svg"
import profile from "../../static/footer/profile.svg"
import filledProfile from "../../static/footer/filledProfile.svg"
import { Link, useLocation } from 'react-router-dom';

const Index = () => {
    const location = useLocation().pathname;

    return (
        <N.Wrapper>
            <N.Item isFull={location === "/"} >
            <Link to="/">
                {location === "/" ? <img src={filledHome} alt="home" />:<img src={home} alt="home" />}
                <div>홈</div>
            </Link>
            </N.Item>
            <N.Item isFull={location === "/profile"} >
            <Link to="/profile" >
                {location === "/profile" ? <img src={filledProfile} alt="profile" />:<img src={profile} alt="profile" />}
                <div>내정보</div>
            </Link>
            </N.Item>
        </N.Wrapper>
    );
};

export default Index;