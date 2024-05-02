import React, { useContext, useState } from "react";
import Card from "../Components/Card";
import SearchByCrewId from "./SearchByCrewIdScreen";
import SearchByName from "./SearchByName";
import SearchByNumber from "./SearchByNumber";
import HotelsContacts from "./HotelContacts";
import StationContacts from "./StationContacts";
import CliContacts from "./CliContacts";
import CCContacts from "./CCContacts";

import NameIcon from '../Asserts/NameIcon.png';
import NumberIcon from '../Asserts/NumberIcon.png';
import CrewIdIcon from '../Asserts/CrewIdIcon.png';
import CCIcon from '../Asserts/ccIcon.png';
import CliIcon from '../Asserts/CliIcon.png';
import StationIcon from '../Asserts/Stationiconn.png';
import HotelsIcon from '../Asserts/HotelsIconnn.png';
import MainText from "../Components/MainHeading";
import { ThemeContext } from "../Components/ThemeContext";
import TrainMangers from "./TrainManagers";
import TrainingManger from '../Asserts/Trainmanger.png';



const ContactsScreen = ({ user }) => {
    const [activeScreen, setActiveScreen] = useState("");

    const { theme, toggleTheme } = useContext(ThemeContext);

    const cardData = [
        { text: 'Search by Crew Name', action: 'SearchByName', path: NameIcon },
        { text: 'Search by Crew Id', action: 'SearchById', path: CrewIdIcon },
        { text: 'Search by Phone Numbers', action: 'SearchByPNum', path: NumberIcon },
        { text: 'Chief Loco Inspector Numbers', action: 'SearchCli', path: CliIcon },
        { text: 'CC Numbers', action: 'SearchByCC', path: CCIcon },
        { text: 'Train Managers Numbers', action: 'SearchByTrainManagers', path: TrainingManger },
        { text: 'Station Numbers', action: 'SearchByStation', path: StationIcon },
        { text: 'Hotels Numbers', action: 'SearchByHotel', path: HotelsIcon }
    ];

    const cardDataTrainManagers = [
        { text: 'Train Managers Numbers', action: 'SearchByTrainManagers', path: TrainingManger },
        { text: 'Search by Phone Numbers', action: 'SearchByPNum', path: NumberIcon },
        { text: 'Search by Crew Name', action: 'SearchByName', path: NameIcon },
        { text: 'Search by Crew Id', action: 'SearchById', path: CrewIdIcon },
        // { text: 'Chief Loco Inspector Numbers', action: 'SearchCli', path: CliIcon },
        // { text: 'CC Numbers', action: 'SearchByCC', path: CCIcon },
        { text: 'Station Numbers', action: 'SearchByStation', path: StationIcon },
        { text: 'Hotels Numbers', action: 'SearchByHotel', path: HotelsIcon }
    ];

    const handleCardClick = (screenName) => {
        setActiveScreen(screenName);
    };

    const handleBackButtonClick = () => {
        setActiveScreen("");
    };

    return (
        <>
            <div>
                {activeScreen === "" ? (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {((user === 'RUNNING STAFF BRANCH') ? cardData : cardDataTrainManagers).map((card, index) => (
                                <Card
                                    key={index}
                                    Text={card.text}
                                    onClick={() => handleCardClick(card.action)}
                                    imagePath={card.path}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <button onClick={handleBackButtonClick} className='backButton' style={{ border: "none", padding: "5px 25px", color: (theme === 'light') ? ('black') : ('white'), fontSize: "12px", fontWeight: '600' }}>Back</button>
                        </div>
                        <div>
                            {activeScreen === 'SearchById' && (
                                <>
                                    <SearchByCrewId />
                                </>
                            )}
                            {activeScreen === 'SearchByName' && (
                                <>
                                    <SearchByName />
                                </>
                            )}
                            {activeScreen === 'SearchByPNum' && (
                                <>
                                    <SearchByNumber />
                                </>
                            )}
                            {activeScreen === 'SearchByHotel' && (
                                <>
                                    <HotelsContacts />
                                </>
                            )}
                            {activeScreen === 'SearchByStation' && (
                                <>
                                    <StationContacts />
                                </>
                            )}
                            {activeScreen === 'SearchCli' && (
                                <>
                                    <CliContacts />
                                </>
                            )}
                            {activeScreen === 'SearchByCC' && (
                                <>
                                    <CCContacts />
                                </>
                            )}
                            {activeScreen === 'SearchByTrainManagers' && (
                                <>
                                    <TrainMangers />
                                </>
                            )}
                        </div>

                    </div>
                )}
            </div>

        </>
    )
}
export default ContactsScreen;