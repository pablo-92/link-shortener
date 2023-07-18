/* eslint-disable react-hooks/exhaustive-deps */
import "./styles/app.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Result from "./components/Result";
import Footer from "./components/Footer";

export default function App() {
    const [short, setShort] = useState("");
    const [long, setLong] = useState("");
    const [component, setComponent] = useState([]);
    const [response, setResponse] = useState();

    const submit = (data) => {
        setLong(data.link);
        fetch(`https://api.shrtco.de/v2/shorten?url=${data.link}`)
            .then((response) => response.json())
            .then((response) => {
                setResponse(response),
                    setShort(response.result.full_short_link);
            });
    };

    useEffect(() => {
        if (!response) return;
        setComponent([
            ...component,
            <Result key={short} long={long} short={short} />,
        ]);
    }, [response]);

    return (
        <>
            <section className="app first-part">
                <div className="max-width">
                    <Nav />
                    <section className="hero">
                        <div className="img-container">
                            <img
                                src="src/assets/images/illustration-working.svg"
                                alt="hero-image"
                            />
                        </div>
                        <div className="hero-description">
                            <h1>More than just shorter links</h1>
                            <p>
                                Build your brand&apos;s recognition and get
                                detailed insights on how your links are
                                perfoming.
                            </p>
                            <button
                                className="cyan-btn get-started"
                                type="button"
                                title="Get started">
                                Get Started
                            </button>
                        </div>
                    </section>
                </div>
            </section>

            <section className="second-part">
                <div className="max-width">
                    <Form submit={submit} />
                </div>
            </section>

            <section className="third-part">
                <div className="max-width">
                    <div
                        className="results-container"
                        style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            alignItems: "center",
                            gap: "20px",
                        }}>
                        {component}
                    </div>

                    <section className="statistics">
                        <div className="statistics-description">
                            <h2>Advanced Statistics</h2>
                            <p>
                                Track how your links are performing across the
                                web with our advanced statistics dashboard.
                            </p>
                        </div>
                        <div className="cards-container">
                            <div className="card brand-recognition">
                                <div className="icon-container">
                                    <img
                                        src="src/assets/images/icon-brand-recognition.svg"
                                        alt="card icon"
                                    />
                                </div>

                                <h3>Brand Recognition</h3>
                                <p>
                                    Boost your brand recognition with each
                                    click. Generic links don&apos;t mean a
                                    thing. Branded links help instill confidence
                                    in your content.
                                </p>
                            </div>
                            <div className="card detailed-records">
                                <div className="icon-container">
                                    <img
                                        src="src/assets/images/icon-detailed-records.svg"
                                        alt="card icon"
                                    />
                                </div>
                                <h3>Detailed records</h3>
                                <p>
                                    Gain insights into who is clicking your
                                    links. Knowing when and where people engage
                                    with your content helps inform better
                                    decisions.
                                </p>
                            </div>
                            <div className="card fully-customizable">
                                <div className="icon-container">
                                    <img
                                        src="src/assets/images/icon-fully-customizable.svg"
                                        alt="card icon"
                                    />
                                </div>

                                <h3>Fully Customizable</h3>
                                <p>
                                    Improve brand awareness and content
                                    discoverability through customizable links,
                                    supercharging audience engagement.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <div className="boost-container">
                <h2>Boost your links today</h2>
                <button
                    className="cyan-btn get-started"
                    type="button"
                    title="Get started">
                    Get Started
                </button>
            </div>
            <Footer />
        </>
    );
}
