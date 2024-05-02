import React, { useContext, useState, useEffect } from 'react';
import '../Styles/Styles.css';
import HomeIcon from '../Asserts/homeIcon.png';
import PhoneIcon from '../Asserts/phoneIconEcorsu.png';
import SunIcon from '../Asserts/lightModeICon.png';
import StarIcon from '../Asserts/darkmodeIcon.png';
// import MainText from '../Components/MainHeading';
import updateIcon from '../Asserts/updateicon.png';
import DocIcon from '../Asserts/docicon.png';
import { ThemeContext } from '../Components/ThemeContext';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ContactsScreen from './ContactsScreen';
import UpdatesScreen from './UpdatesScreen';
import ImpDocScreen from './AdminScreen';
import ChatWindow from './ChatBot';
import BotMenuIcon from '../Asserts/botimagesicon.png'
import NewYearWelcome from '../Components/NewYearWelcome';
import MainText from '../Components/MainHeading';
import HeadingText from '../Components/Heading';
import galleryIcon from '../Asserts/galleryicon.png'
import Gallery from './Gallery';
// import PostForm from './AdminScreen';

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [openbot, setOpenbot] = useState(false);

    const [route, setRoute] = useState('home');

    const handleCloseBot = () => {
        setOpenbot(false);
    }

    const [isVisible, setIsVisible] = useState(true);

    const listenToScroll = () => {
        let heightToHideFrom = 50;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, []);


    const [user, setUser] = useState('');
    console.log(route);
    return (
        <>

            <div style={{
                display: 'flex',
                backgroundColor: `var(--background-color-${theme})`,
                color: `var(--text-color-${theme})`
            }}>
                {user === '' && (
                    <>
                        <div>
                            <div className="popup-overlay" >
                                <div className="popup-content" >
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: "center" }}>
                                            <button style={{ background: "blue", border: "none", borderRadius: '3px', padding: '5px 15px', color: 'white', fontSize: '15px', margin: "5px", width: "100px" }} className='FontFamliy' onClick={() => setUser('RUNNING STAFF BRANCH')}>Loco</button>
                                            <button style={{ background: "blue", border: "none", borderRadius: '3px', padding: '5px 15px', color: 'white', fontSize: '15px', margin: "5px", width: "100px" }} className='FontFamliy' onClick={() => setUser('OPERATING BRANCH')}>Operating</button>

                                        </div>
                                        <p style={{ fontSize: "12px", margin: '15px', marginBottom: "0px" }}>Developed by :- Nagendra Yakkaladevara</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div style={{ width: '20%', background: (theme === 'light') ? ("#E0F4FF") : ('#0B2447'), display: 'flex', justifyContent: 'center' }}>
                    <div style={{ height: '100vh' }}>
                        <div style={{ marginTop: '20px' }}>
                            <button title='Click to change Mode' onClick={toggleTheme} style={{ border: "none", background: "none" }}>{(theme === 'light') ? (<><img src={StarIcon} style={{ width: "50px", height: "50px", marginBottom: '10px' }} /></>) : (<><img src={SunIcon} style={{ width: "50px", height: "50px", marginBottom: '10px' }} /> </>)}</button>
                            {/* <p style={{margin:'0px', fontSize:'5px', padding:'1px'}}>Click to toggle the Mode</p> */}
                        </div>


                        <div className='menuTab' style={{ background: route === 'home' ? "#9BB8CD" : "" }} onClick={() => setRoute('home')}>
                            <img src={HomeIcon} className='menuTabIcon' />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <p className='FontFamliy' style={{ margin: '0px', fontSize: "8px", textAlign: "center" }}>Home</p>
                        </div>

                        <div className='menuTab' style={{ background: route === 'Contacts' ? "#9BB8CD" : "" }} onClick={() => setRoute('Contacts')} >
                            <img src={PhoneIcon} className='menuTabIcon' />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <p className='FontFamliy' style={{ margin: '0px', fontSize: "8px", textAlign: "center" }}>Contacts</p>
                        </div>


                        <div className='menuTab' style={{ background: route === 'News' ? "#9BB8CD" : "" }} onClick={() => setRoute('News')}>
                            <img src={updateIcon} className='menuTabIcon' />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <p className='FontFamliy' style={{ margin: '0px', fontSize: "8px", textAlign: "center" }}>Union<br />Updates</p>
                        </div>


                        <div className='menuTab' style={{ background: route === 'ImpDoc' ? "#9BB8CD" : "" }} onClick={() => setRoute('ImpDoc')}>
                            <img src={DocIcon} className='menuTabIcon' />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <p className='FontFamliy' style={{ margin: '0px', fontSize: "8px", textAlign: "center" }}>Usefull<br />Documents</p>
                        </div>

                        <div style={{ display: 'none' }}>

                            <div className='menuTab' style={{ background: route === 'Gallery' ? "#9BB8CD" : "" }} onClick={() => setRoute('Gallery')}>
                                <img src={galleryIcon} className='menuTabIcon' />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <p className='FontFamliy' style={{ margin: '0px', fontSize: "8px", display: 'flex', justifyContent: "start" }}>Gallery</p>
                            </div>
                        </div>


                        <div style={{ display: (isVisible && route === 'home') ? "block" : "none", position: "absolute", top: "90%", left: "80%" }}>
                            <div className='menuTab' style={{ border: "1px solid red", background: (theme === 'light' ? '' : '#2B2A4C') }}>
                                <img src={BotMenuIcon} className='menuTabIcon' onClick={() => setOpenbot(true)} />
                            </div>
                        </div>
                        {openbot && route === 'home' && (
                            <>
                                <div>
                                    <ChatWindow handleCloseBot={handleCloseBot} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div style={{ width: '75%' }}>
                    {route !== 'home' &&
                        <div style={{ width: "100%", display: 'flex', justifyContent: "center", background: (theme === 'light') ? ('#E0F4FF') : ('#0B2447'), borderRadius: "10px", margin: "10px", padding: '10px' }}>
                            <MainText text="ECoRSU" />
                        </div>
                    }
                    <div>
                        {/* Route Configuration */}
                        {route === 'home' && <HomeScreen user={user} />}
                        {route === 'Contacts' && <ContactsScreen user={user} />}
                        {route === 'News' && <UpdatesScreen />}
                        {route === 'ImpDoc' && <ImpDocScreen />}
                        {route === 'Gallery' && <Gallery />}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;