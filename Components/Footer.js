import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-nav-cards">
                <div>
                    <h2 class="footer-card-heading"><Link href='/About' id='about'>About</Link></h2>
                    <ul>
                        <li><h4><Link href='/About-us' id="about-us">About us</Link></h4></li>
                        <li><h4><Link href='/Resources-and-Policies' id='resources-and-policies'>Resources and Policies</Link></h4></li>
                        <li><h4><Link href='/Trust-and-safety' id='trust-and-safety'>Trust and safety</Link></h4></li>
                    </ul>
                </div>
                <div>
                    <h2 class="footer-card-heading"><Link href='/Explore' id='explore'>Explore</Link></h2>
                    <ul>
                        <li><h4><Link href='Write-a-review' id='write-a-review'>Write a review</Link></h4></li>
                        <li><h4><Link href='Add-a-place' id='write-a-place'>Add a place</Link></h4></li>
                        <li><h4><Link href='Travel-Articles' id='travel-articles'>Travel Articles</Link></h4></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 Trippy LLC All rights reserved.</p>
            </div>
        </div>

    )
}

export default Footer