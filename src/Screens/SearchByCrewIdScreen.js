import React, { useContext, useState } from "react";
import HeadingText from "../Components/Heading";
import ContactCard from "../Components/ContactCard";
import UserData from '../Services/UserData.json';
import { ThemeContext } from "../Components/ThemeContext";

const SearchByCrewId = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [crewIdInput, setCrewIdInput] = useState("");
    const [matchedUser, setMatchedUser] = useState(null);

    const handleInputChange = (e) => {
        setCrewIdInput(e.target.value);
    };

    const searchUserByCrewId = () => {
        const foundUser = UserData.users.find(user => user.crewid.toLowerCase() === crewIdInput.toLowerCase());
        setMatchedUser(foundUser);
    };

    return (
        <>
            <div>
                <div style={{ height: "auto", borderRadius: "10px", marginLeft: "5%", paddingBottom: '20px' }}>
                    <div style={{ margin: "10px", display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                        <HeadingText text='Search with Crew Id ' />
                    </div>
                    <div className={`form-floating mb-3 ${theme === 'light' ? '' : 'text-bg-dark'} `}>
                        <input className={`form-control FontFamliy ${theme === 'light' ? '' : 'text-bg-dark'}`} id="floatingInput" type="text"
                            value={crewIdInput}
                            onChange={handleInputChange}
                            placeholder="Please enter Crew Id.."
                            style={{ marginBottom: '10px' }} />
                        <label for="floatingInput">Search Crew Id..</label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={searchUserByCrewId} type="button" class="btn btn-outline-primary" >Search</button>
                    </div>
                </div>
                <div>
                    {matchedUser && <ContactCard responce={[matchedUser]} />}
                </div>
            </div>
        </>
    )
}
export default SearchByCrewId;