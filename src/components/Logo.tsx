import LogoIcon from "../assets/kylobyte-logo.svg";
import { css } from "../../styled-system/css";

type Props = {
    realm?: string;
};

export function Logo({ realm }: Props) {
    return (
        <div
            className={css({
                fontFamily: "Nuito, sans-serif",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "black",
                p: "2",
                fontSize: "1.8rem"
            })}
        >
            <img
                src={LogoIcon}
                alt="Kylobyte.dev Logo"
                className={css({
                    width: "46px",
                    height: "46px"
                })}
            />
            <span
                className={css({
                    fontWeight: 600
                })}
            >
                kylobyte
                <span
                    className={css({
                        color: "#ff8502"
                    })}
                >
                    .dev
                </span>
            </span>
            {realm && (
                <span className="realm">
                    {" "}
                    <span
                        className={css({
                            fontSize: "1rem",
                            verticalAlign: "middle"
                        })}
                    >
                        &#x00D7;
                    </span>{" "}
                    {realm}
                </span>
            )}
        </div>
    );
}
