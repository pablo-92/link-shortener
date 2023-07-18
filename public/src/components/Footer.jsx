/* eslint-disable react/prop-types */
import "../styles/footer.css";
import footerData from "../data/footerData.json";

export default function Footer() {
    let footerMenu = Object.entries(footerData.Menu).map(([title, link]) => (
        <div key={title}>
            <p>{title}</p>
            <ul>
                {link.map((element) => (
                    <li key={element}>{element}</li>
                ))}
            </ul>
        </div>
    ));

    let social = Object.entries(footerData.Social).map(
        ([name, { icon, web }]) => (
            <a key={name} href={web} target="_blank" rel="noreferrer">
                <img src={`/${icon}`} alt={`${name} icon`} />
            </a>
        )
    );

    return (
        <footer>
            <div className="max-width footer-container">
                <img
                    className="logo"
                    src="/public/images/logo-light.svg"
                    alt="Shortly logo"
                />
                <section className="footer-menu-container">
                    {footerMenu}
                </section>

                <section className="social">{social}</section>
            </div>
        </footer>
    );
}
