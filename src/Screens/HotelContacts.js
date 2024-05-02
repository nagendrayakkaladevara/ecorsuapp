import React, { useContext, useState } from "react";
import HotelsIcon from '../Asserts/hotelsicon.png';
import MainText from "../Components/MainHeading";
import HotelData from '../Services/Hotels.json';
import ContactCard from "../Components/ContactCard";
import { ThemeContext } from "../Components/ThemeContext";

const HotelsContacts = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredHotels = searchTerm === ""
        ? HotelData.hotels
        : HotelData.hotels.filter(hotel =>
            hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={HotelsIcon} style={{ width: '100px', height: '100px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <MainText text='Hotel Contacts' />
                </div>
                <div className={`form-floating mb-3 ${theme === 'light' ? '' : 'text-bg-dark'} `} style={{ margin: '10px' }}>
                    <input className={`form-control FontFamliy ${theme === 'light' ? '' : 'text-bg-dark'}`} id="floatingInput" type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Search by Hotel Name..."
                        style={{ marginBottom: '10px' }} />
                    <label for="floatingInput">Search Hotel Name...</label>
                </div>
                <div>
                    {filteredHotels.map(hotel => (
                        <ContactCard key={hotel.id} responce={[hotel]} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default HotelsContacts;