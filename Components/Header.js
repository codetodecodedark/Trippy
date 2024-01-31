import React from "react";
import Link from "next/link";
import Login_Signup from "./Login-Signup/Login-Signup";
import Image from "next/image";
import home_button from "./Assets/home-button.png"


const Header = () => {

    return (
        <div class="header">
            <div class="h2"><h2>Trippy</h2></div>
            <div class="home-icon">
                <Link href="/Home"><Image src={home_button} width="48" height="40"></Image></Link>
            </div>
            <div class="navbar">
                <ul class="navigation-items">
                    <li><Link href='/Discover' id="discover">Discover</Link></li>
                    <li><Link href='/Flights' id="flights">Flights</Link></li>
                    <li><Link href='/Hotels' id="hotels">Hotels</Link></li>
                    <li><Link href='/Restaurants' id="restaurants">Restaurants</Link></li>
                    <li><Link href='/Contact' id="contact">Contact</Link></li>
                </ul>
            </div>
            <div class="Sign-in">
                <Link href='/Sign-in'>Sign in</Link>
            </div>
        </div>
    )
}

export default Header