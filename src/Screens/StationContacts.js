import React, { useContext, useState } from "react";
import MainText from "../Components/MainHeading";
import ContactCard from "../Components/ContactCard";
import StationContactsData from '../Services/Stations.json';
import StationIcon from '../Asserts/StationIcon.png';
import NoResultsImage from '../Asserts/Personwithbinocular.png';
import { ThemeContext } from "../Components/ThemeContext";


const StationContacts = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredStations = searchTerm === ""
        ? StationContactsData.stations
        : StationContactsData.stations.filter(station =>
            station.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={StationIcon} alt="Station" style={{ width: '130px', height: '130px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <MainText text='Station Contacts' />
                </div>

                <div className={`form-floating mb-3 ${theme === 'light' ? '' : 'text-bg-dark'} `} style={{ margin: '10px' }}>
                    <input className={`form-control FontFamliy ${theme === 'light' ? '' : 'text-bg-dark'}`} id="floatingInput" type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Search by Station Name..."
                        style={{ marginBottom: '10px' }} />
                    <label for="floatingInput">Search Station Name...</label>
                </div>
                <div>
                    {filteredStations.map(station => (
                        <ContactCard key={station.id} responce={[station]} />
                    ))}
                    {filteredStations.length === 0 &&
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                            <img src={NoResultsImage} alt="No Results Found" style={{ width: '100px', height: '100px' }} />
                            <p>No results found</p>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default StationContacts;
