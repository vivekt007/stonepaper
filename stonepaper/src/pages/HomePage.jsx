import React from "react";
import Footer from "../components/Footer.jsx";
import "../styles/HomePage.css";

import Arrow from "../assets/Icons/Arrow_Right-white.svg";
import BlackArrow from "../assets/Icons/Arrow-Right-Black.svg";

function HomePage() {
    return (
        <main className="home-page">
            <section className="hero-section">
                <div className="hero-col1">
                    <h1>OWN TO FEEL</h1>
                    <p>Premium Cotton Clothing, Crafted with Purpose.</p>
                </div>
                <div className="hero-col2">
                    <button className="hero-cta">
                        Explore the collection
                        <img src={Arrow} alt="arrow" />
                    </button>
                </div>
            </section>
            <section className="home-journey-row1">
                <div className="home-journey-r1-col1"></div>
                <div className="home-journey-r1-col2">
                    <div className="home-journey-r1-c2-row1">
                        <h3>THE STONE PAPER JOURNEY</h3>
                        <hr />
                    </div>
                    <div className="home-journey-r1-c2-row2">
                        <h1>BORN FROM NATURE, DESIGN FOR YOU.</h1>
                    </div>
                    <div className="home-journey-r1-c2-row3">
                        <p>
                            “At StonePaper, our journey began with a simple
                            question: How can we create clothing that feels as
                            good as it looks, while giving back to the Earth?
                            The answer lies in <span>Nature</span>. Our premium
                            cotton fabrics are sourced sustainably, and every
                            step in our process honors the environment.”
                        </p>
                    </div>
                </div>
            </section>

            <section className="home-journey-row2">
                <div className="home-journey-r2-col1">
                    <div className="home-journey-r2-c1-row1">
                        <h1>A STORY OF ELEGANCE & RESPONSIBILITY.</h1>
                    </div>
                    <div className="home-journey-r2-c1-row2">
                        <p>
                            “We believe true elegance comes from simplicity.
                            That’s why our designs focus on timeless styles –
                            black, white, and grey – because{" "}
                            <span>fashion</span> should never be wasteful, nor
                            fleeting. Each piece in our collection is an
                            expression of understated <span>luxury</span>,
                            crafted for those who value quality and longevity.”
                        </p>
                    </div>
                </div>
                <div className="home-journey-r2-col2"></div>
            </section>

            <section className="home-journey-row3">
                <div className="home-journey-r3-col1"></div>
                <div className="home-journey-r3-col2">
                    <div className="home-journey-r3-c2-row1">
                        <h1>LEAVING A LASTING IMPACT.</h1>
                    </div>
                    <div className="home-journey-r3-c2-row2">
                        <p>
                            “Beyond just looking good, we want to leave a
                            positive impact. That’s why every purchase includes
                            seed balls – a small step towards restoring the
                            green in our world. And with our
                            <span>Buy-Back Policy</span>, we ensure that the
                            journey doesn’t end with your garment, but is part
                            of a sustainable cycle.”
                        </p>
                    </div>
                </div>
            </section>

            <section className="collections">
                <div className="collections-row1">
                    <div className="collections-r1-col1">
                        <h3>Our Collections</h3>
                        <hr />
                    </div>
                    <div className="collections-r1-col2">
                        <button className="collections-cta">
                            Shop the collection
                            <img
                                className="cta-arrow"
                                src={Arrow}
                                alt="arrow"
                            />
                        </button>
                    </div>
                </div>
                <div className="collections-row2">
                    <div className="collections-r2-col1">
                        <button className="collections-btn">
                            OBSIDIAN BLACK <img src={Arrow} alt="arrow" />
                        </button>
                    </div>
                    <div className="collections-r2-col2">
                        <button className="collections-btn">
                            SNOWFLAKE WHITE <img src={BlackArrow} alt="arrow" />
                        </button>
                    </div>
                    <div className="collections-r2-col3">
                        <button className="collections-btn">
                            SHADOW GREY <img src={BlackArrow} alt="arrow" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="joinStonepaper">
                <div className="joinStonepaper-row">
                    <h1>JOIN STONE PAPER</h1>
                    <p>
                        When you wear StonePaper, you’re wearing more than
                        clothes. You’re embracing a movement towards sustainable
                        luxury. Own to feel.
                    </p>
                    <button className="join-btn">Become Member</button>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default HomePage;
