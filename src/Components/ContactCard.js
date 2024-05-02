import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import '../Styles/Styles.css';
import Text from "./Text";

const ContactCard = ({ responce }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    function formatCrewName(crewName) {
        return crewName
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
    const handleClickCall = (number) => {
        window.location.href = `tel:${number}`;
    }
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text successfully copied to clipboard');
            alert('Copied to clipboard!');
        }).catch(err => {
            console.error('Unable to copy text to clipboard', err);
        });
    };
    return (
        <>
            {/* <div style={{ width: '70%', height: "200px", background: "#FF9130", borderRadius: '10px', margin: '5px', marginLeft: '10px', padding: '5px' }}>


            </div> */}
            {responce.map((item, index) => (
                <div key={index} style={{ width: '95%', height: "auto", background: (theme === 'light') ? ("none") : ('#B0A695'), border: (theme === 'light') ? ('1px solid gray') : ('1px solid gray'), borderRadius: '5px', margin: '5px', marginLeft: '10px', padding: '10px', boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", marginTop: '15px', marginRight: '0px' }}>
                    {Object.keys(item).map((key, idx) => {
                        if (key !== 'id') { // Check if the key is not 'id'
                            return <Text key={idx} text={`${formatCrewName(key)}: ${item[key]}`} />;
                        }
                        return null; // Return null if the key is 'id'
                    })}
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        <button onClick={() => handleClickCall(item.mobile_number)} style={{ border: 'none', color: 'red', cursor: 'pointer', padding: '10px 25px', marginRight: '10px' }} className="callButton">Call</button>
                        <button onClick={() => copyToClipboard(item.mobile_number)} style={{ border: 'none', color: 'blue', cursor: 'pointer', padding: '10px 25px' }} className="callButton">Copy</button>
                    </div>
                </div>
            ))}

        </>
    )
}
export default ContactCard;