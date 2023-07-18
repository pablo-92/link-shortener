/* eslint-disable react/prop-types */
import "../styles/result.css";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Result(props) {
    const [copied, setCopied] = useState(false);

    return (
        <article>
            <p className="long-link">{props.long}</p>
            <div className="container">
                <p className="short-link" onChange={() => setCopied(true)}>
                    {props.short}
                </p>
                <CopyToClipboard
                    text={props.short}
                    onCopy={() => {
                        setCopied(true),
                            setTimeout(() => {
                                setCopied(false);
                            }, 1500);
                    }}>
                    <button
                        className="cyan-btn copy"
                        style={{
                            backgroundColor: copied
                                ? "var(--dark-violet)"
                                : "var(--cyan)",
                            color: copied
                                ? "var(--white)"
                                : "var(--very-dark-violet)",
                        }}>
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </CopyToClipboard>
            </div>
        </article>
    );
}
