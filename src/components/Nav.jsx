import { useState } from "react";
import "../styles/nav.css";

export default function Nav() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <nav>
                <div className="max-width">
                    <section className="nav-section">
                        <a href="#">
                            <img
                                src="src/assets/images/logo-dark.svg"
                                alt="Shortly logo"
                            />
                        </a>
                        <button
                            className="menu-btn"
                            onClick={() => setOpened(!opened)}
                            type="button"
                            title="Open menu">
                            <img src="src/assets/images/icon-menu.svg" alt="" />
                        </button>

                        <menu className="menu-desktop">
                            <div>
                                <li className="menu-desktop-li">Features</li>
                                <li className="menu-desktop-li">Pricing</li>
                                <li className="menu-desktop-li">Resources</li>
                            </div>
                            <div className="account-desktop">
                                <li className="menu-desktop-li">Login</li>
                                <li className="cyan-btn">Sign Up</li>
                            </div>
                        </menu>
                    </section>
                </div>
            </nav>

            <menu
                className="menu-mobile"
                style={{
                    top: opened ? "53px" : "-200px",
                    position: opened ? "fixed" : "absolute",
                }}>
                <div>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </div>
                <div className="account">
                    <li>Login</li>
                    <li className="cyan-btn">Sign Up</li>
                </div>
            </menu>
        </>
    );
}
