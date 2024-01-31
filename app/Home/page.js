import React from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";


const page = () => {
    return (
        <main>
            <div className="main-heading">Find out</div>
            <div>
                <ul class="navigation-items-2">
                    <li><Link href='/Things-to-do' id="things-to-do">Things-to-do</Link></li>
                    <li><Link href='/Holiday-homes' id="holiday-homes">Holiday-homes</Link></li>
                    <li><Link href='/Packages' id="packages">Packages</Link></li>
                </ul>
            </div>
            <div class="search">
                <FaSearch id="FaSearch-icon" />
                <input type="text" name="" id="search-bar" placeholder="Places to go, hotels..."></input>
                <button class="search-button">Search</button>
            </div>
            <div>
                <div class="home-page-background-image">

                </div>
            </div>
        </main >)
}

export default page