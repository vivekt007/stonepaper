import React from "react";
import "../styles/AboutUs.css";
import Collection from "../components/Collection.jsx";
import ColorContainer from "../components/ColorContainer.jsx";
import Footer from "../components/Footer.jsx";

function About() {
    return (
        <section className="About-section">
            <section className="about-row1">
                <h1>About StonePaper</h1>
                <span>
                    <p>
                        Welcome to StonePaper, where we believe that style and
                        sustainability go hand in hand.
                    </p>
                    <p>
                        Our mission is simple to create premium clothing that
                        not only looks good but feels good, too.
                    </p>
                </span>
            </section>
            <section className="about-row2">
                <div className="about-r2-col1">
                    <div className="about-r2-c1-row1">
                        <h1>Eco-Friendly Commitment</h1>
                    </div>
                    <div className="about-r2-c1-row2">
                        <p>
                            "We are dedicated to making a positive impact on the
                            environment. All our products and packaging are 100%
                            biodegradable. Each purchase comes with seed balls,
                            a gesture to raise awareness about pollution and the
                            importance of planting trees."
                        </p>
                    </div>
                </div>
                <div className="about-r2-col2"></div>
            </section>

            <section className="about-row3">
                <div className="about-r3-row1">
                    <h1>Our Collection</h1>
                    <p>
                        At StonePaper, we specialize in premium cotton clothing,
                        currently offering a selection of formal shirts and
                        pants.
                    </p>
                </div>
                <div className="about-r3-row2">
                    <Collection />
                </div>
            </section>

            <section className="about-row4">
                <div className="about-r4-row1">
                    <h1>Colors</h1>
                    <p>We offer our clothing in three timeless colors:</p>
                </div>
                <div className="about-r4-row1">
                    <div className="collection-section">
                        <ColorContainer
                            colorName="Obsidian Black"
                            bgColor="#000000"
                            shopLink="/shop/obsidian-black"
                        />
                        <ColorContainer
                            colorName="Snowflake White"
                            bgColor="#ffffff"
                            shopLink="/shop/snowflake-white"
                        />
                        <ColorContainer
                            colorName="Shadow Grey"
                            bgColor="#808080"
                            shopLink="/shop/shadow-grey"
                        />
                    </div>
                </div>
            </section>

            <section className="about-row5">
                <div className="about-r5-col1"></div>
                <div className="about-r5-col2">
                    <div className="about-r5-c1-row1">
                        <h1>BUY BACK POLICY</h1>
                    </div>
                    <div className="about-r5-c1-row2">
                        <p>
                            " We stand by the quality and durability of our
                            products. That’s why we offer a unique buy-back
                            policy. After <span>3 years</span>, you can return
                            your StonePaper clothing, and in return, you’ll
                            receive a voucher with{" "}
                            <span>
                                <a href="#">terms & conditions</a>
                            </span>
                            . This initiative not only supports sustainability
                            but also rewards our loyal customers.
                            <br />
                            <br />
                            Join us in our journey to make the world a better
                            place, one garment at a time. Thank you for choosing
                            StonePaper – where you truly OWN TO FEEL."
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </section>
    );
}

export default About;
