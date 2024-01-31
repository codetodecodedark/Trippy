import React from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";

const flights = () => {
    return (
        <>
            <div class="flight-background-image">
                <section>
                    <form>
                        <div class="flight-details">
                            {/* header section*/}
                            <div class="flight-header-class">
                                <p id="flight-header">BOOK FLIGHTS</p>
                            </div>



                            {/* body section*/}
                            <div>
                                <div class="body-section">
                                    <div>
                                        <div class="radio-buttons">
                                            <div class="radio-button">
                                                <input type="radio" />
                                                <p id="radio-button-paragraph">Round trip</p>
                                            </div>
                                            <div class="radio-button">
                                                <input type="radio" />
                                                <p id="radio-button-paragraph">One way</p>
                                            </div>
                                            <div class="radio-button">
                                                <input type="radio" />
                                                <p id="radio-button-paragraph">Multi city</p>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>




                                    {/* departure-section */}
                                    <div>
                                        <div>
                                            <div class="flying-from-class">
                                                <p id="flying-from">FLYING FROM</p>
                                                <select id="flying-from-select">
                                                    <option>--Select Airport--</option>
                                                    <option>Delhi</option>
                                                    <option>Mumbai</option>
                                                </select>
                                                <FaPlaneDeparture id="faplanedepartureicon" />
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>



                                    {/* arrival-section */}
                                    <div>
                                        <div>
                                            <div class="flying-from-class">
                                                <p id="flying-from">FLYING TO</p>
                                                <select id="flying-from-select">
                                                    <option>--Select Airport--</option>
                                                    <option>Delhi</option>
                                                    <option>Mumbai</option>
                                                </select>
                                                <FaPlaneArrival id="faplanedepartureicon" />
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>





                                    {/* date section*/}
                                    <div class="date-section">
                                        <div class="date-section-item">
                                            <div>
                                                <div class="flying-from-class">
                                                    <p id="flying-from">DEPARTURE DATE</p>
                                                    <input type="date" class="departure-date-input" />
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>

                                        <div class="date-section-item">
                                            <div>
                                                <div class="flying-from-class">
                                                    <p id="flying-from">RETURN DATE</p>
                                                    <input type="date" class="departure-date-input" />
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* passenger section */}


                                    <div class="passenger-section">
                                        <div class="passenger-item">
                                            <div class="flying-from-class">
                                                <p id="flying-from">adults(18+)</p>
                                                <select id="passenger-select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div></div>
                                        </div>

                                        <div>
                                            <div class="flying-from-class">
                                                <p id="flying-from">children(0-17)</p>
                                                <select id="passenger-select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>




                                    {/* class-section */}


                                    <div class="class-section">
                                        <div id="class-section-item">
                                            <div class="flying-from-class">
                                                <p id="flying-from">Class</p>
                                                <select id="class-select">
                                                    <option>Economy</option>
                                                    <option>Business</option>
                                                </select>
                                            </div>
                                            <div></div>
                                        </div>

                                        <div>
                                            <div class="flying-from-class">
                                                <p id="flying-from">Price</p>
                                                <select id="class-select">
                                                    <option>1000$</option>
                                                </select>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>

                                    <button id="search-flight-button">
                                        <p>Search Flight</p></button>
                                </div>
                            </div>
                        </div>

                    </form>
                </section >
            </div>
        </>
    )
}

export default flights