import React, { useContext, useState } from "react";
import HeadingText from "../Components/Heading";
import ContactCard from "../Components/ContactCard";
import userData from '../Services/UserData.json';
import Cli from '../Services/Cli.json';
import CC from '../Services/CC.json';
import Hotels from '../Services/Hotels.json';
import Stations from '../Services/Stations.json';
import trainMangers from '../Services/TraineMangers.json';
import { ThemeContext } from "../Components/ThemeContext";
import NoResultsImage from '../Asserts/Personwithbinocular.png';


const SearchByNumber = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [matchedUser, setMatchedUser] = useState(null);

    const handleInputChange = (e) => {
        const newPhoneNumber = e.target.value;
        setPhoneNumber(newPhoneNumber);
        searchUserByPhoneNumber(newPhoneNumber);
    };

    const searchUserByPhoneNumber = (phone) => {
        // Normalize the input phone number
        const normalizedInput = phone.replace(/\D/g, ''); // Remove non-digit characters

        const datasets = [userData.users, Cli.cli, CC.cc, Hotels.hotels, Stations.stations,trainMangers.users];
        const match = datasets
            .flat()
            .find(user => {
                // Normalize the phone number in each dataset
                const normalizedNumber = String(user.mobile_number).replace(/\D/g, '');
                return normalizedNumber === normalizedInput;
            });

        setMatchedUser(match);
    };

    return (
        <>
            <div>
                <div style={{ height: "auto", borderRadius: "10px", marginLeft: "5%", paddingBottom: '20px' }}>
                    <div style={{ margin: "10px", display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                        <HeadingText text='Search with Phone Number' />
                    </div>
                    <div className={`form-floating mb-3 ${theme === 'light' ? '' : 'text-bg-dark'} `}>
                        <input className={`form-control FontFamliy ${theme === 'light' ? '' : 'text-bg-dark'}`} id="floatingInput" type="tel"
                            value={phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Please enter phone number.."
                            style={{ marginBottom: '10px' }} />
                        <label for="floatingInput">Search phone number..</label>
                    </div>
                </div>
                <div>
                    {matchedUser ? (
                        <ContactCard responce={[matchedUser]} />
                    ) : (phoneNumber !== '' && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                            <img src={NoResultsImage} alt="No Results Found" style={{ width: '90px', height: '90px' }} />
                            <p>No results found</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default SearchByNumber;