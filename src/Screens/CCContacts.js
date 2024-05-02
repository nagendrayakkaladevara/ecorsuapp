import React, { useContext, useState } from "react";
import CCIcon from '../Asserts/ccIcon.png';
import MainText from "../Components/MainHeading";
import CCData from '../Services/CC.json';
import ContactCard from "../Components/ContactCard";
import NoResultsImage from '../Asserts/Personwithbinocular.png';
import { ThemeContext } from "../Components/ThemeContext";


const CCContacts = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCli = searchTerm === ""
        ? CCData.cc
        : CCData.cc.filter(cc =>
            cc.crew_name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={CCIcon} alt="CLI" style={{ width: '100px', height: '100px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <MainText text='CC Contacts' />
                </div>

                <div className={`form-floating mb-3 ${theme === 'light' ? '' : 'text-bg-dark'} `} style={{ margin: '10px' }}>
                    <input className={`form-control FontFamliy ${theme === 'light' ? '' : 'text-bg-dark'}`} id="floatingInput" type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Search by CC Name..."
                        style={{ marginBottom: '10px' }} />
                    <label for="floatingInput">Search CLI</label>
                </div>
                <div>
                    {filteredCli.map(cli => (
                        <ContactCard key={cli.id} responce={[cli]} />
                    ))}
                    {filteredCli.length === 0 &&
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                            <img src={NoResultsImage} alt="No Results Found" style={{ width: '90px', height: '90px' }} />
                            <p>No results found</p>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default CCContacts;
