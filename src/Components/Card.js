import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import '../Styles/Styles.css';

const Card = ({ Text, onClick, imagePath }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div onClick={onClick} className="conactsmenucard" style={{ background: (theme === 'light') ? ('rgb(224, 244, 255)') : ('#0B2447') }}>
                <div style={{ height: '90px', display: 'flex', justifyContent: 'center', marginBottom: "5px" }}>
                    <img src={imagePath} style={{ width: '100px', height: '100px' }} />
                </div>
                <div style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <p style={{ margin: "0px", fontSize: "12px" }} className="FontFamliy">{Text}</p>
                </div>
            </div>
        </>
    )
}
export default Card;