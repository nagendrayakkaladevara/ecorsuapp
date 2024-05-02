import React, { useState, useEffect, useContext } from "react";
import HeadingText from "../Components/Heading";
import ContactCard from "../Components/ContactCard";
import UserData from '../Services/TraineMangers.json';
import { ThemeContext } from "../Components/ThemeContext";
import NoResultsImage from '../Asserts/Personwithbinocular.png';
import * as XLSX from 'xlsx';

const TrainMangers = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [crewNameInput, setCrewNameInput] = useState("");
    const [crewType, setCrewType] = useState("");
    const [matchedUsers, setMatchedUsers] = useState([]);
    const [crewTypes, setCrewTypes] = useState([]);

    useEffect(() => {
        const types = new Set(UserData.users.map(user => user.crew_type));
        setCrewTypes([...types]);
    }, []);

    const handleCrewNameChange = (e) => {
        setCrewNameInput(e.target.value);
        filterUsers(e.target.value, crewType);
    };

    const handleCrewTypeChange = (e) => {
        setCrewType(e.target.value);
        filterUsers(crewNameInput, e.target.value);
    };

    // const filterUsers = (name, type) => {
    //     const filtered = UserData.users.filter(user =>
    //         user.crew_name.toLowerCase().includes(name.toLowerCase()) &&
    //         (type === "" || user.crew_type === type)
    //     );
    //     setMatchedUsers(filtered);
    // };
    const filterUsers = (name, type) => {
        const formattedInputName = name.replace(/\s/g, '').toLowerCase();
        const filtered = UserData.users.filter(user =>
            user.crew_name.replace(/\s/g, '').toLowerCase().includes(formattedInputName) &&
            (type === "" || user.crew_type === type)
        );
        setMatchedUsers(filtered);
    };

    const downloadExcel = () => {
        const ws = XLSX.utils.json_to_sheet(UserData.users);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, `TrainManager.xlsx`);
    };


    return (
        <>
            <div>
                <div style={{ height: "auto", borderRadius: "10px", marginLeft: "5%", paddingBottom: '20px' }}>
                    <div style={{ margin: "10px", display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                        <HeadingText text='Train Managers' />
                    </div>
                    <button onClick={downloadExcel} type="button" style={{ display: 'none' }}>excel</button>
                    <div className={`form-floating mb-3 ${theme === 'light' ? '' : 'text-bg-dark'} `}>
                        <input className={`form-control FontFamliy ${theme === 'light' ? '' : 'text-bg-dark'}`} id="floatingInput" type="text"
                            value={crewNameInput}
                            onChange={handleCrewNameChange}
                            placeholder="Please Enter Crew Name.."
                            style={{ marginBottom: '10px' }} />
                        <label for="floatingInput">Search Crew Name..</label>
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: '10px' }}>
                        <select onChange={handleCrewTypeChange} value={crewType} style={{ /* Styles */ }}>
                            <option value="">Select Crew Type</option>
                            {crewTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div >
                    {(matchedUsers.length === 0 && crewNameInput !== '') ? (

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                            <img src={NoResultsImage} alt="No Results Found" style={{ width: '90px', height: '90px' }} />
                            <p>No results found</p>
                        </div>

                    ) : (
                        matchedUsers.map(user => <ContactCard key={user.id} responce={[user]} />)
                    )}
                </div>
            </div>
        </>
    )
}
export default TrainMangers;