import React, { useContext } from 'react';
import '../Styles/Styles.css';
import HomeIcon from '../Asserts/homeIcon.png';
import PhoneIcon from '../Asserts/phoneIconEcorsu.png';
import SunIcon from '../Asserts/Sunicon.png';
import StarIcon from '../Asserts/starIcon.png';
import MainText from '../Components/MainHeading';
import { ThemeContext } from '../Components/ThemeContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ContactsScreen from './ContactsScreen';

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div style={{
                display: 'flex',
                backgroundColor: `var(--background-color-${theme})`,
                color: `var(--text-color-${theme})`
            }}>
                <Router>
                    <div style={{ width: '10%', background: (theme === 'light') ? ("#E0F4FF") : ('#020617'), display: 'flex', justifyContent: 'center' }}>
                        <div style={{ height: '100vh' }}>
                            <div>
                                <p style={{ color: 'white' }}>logo</p>
                            </div>
                            <Link to="/">
                                <div className='menuTab'>
                                    <img src={HomeIcon} className='menuTabIcon' />
                                </div>
                            </Link>
                            <Link to="/Contacts">
                                <div className='menuTab' >
                                    <img src={PhoneIcon} className='menuTabIcon' />
                                </div>
                            </Link>
                            <Link to="/screen2" >
                                <div className='menuTab' >

                                </div>
                            </Link>
                        </div>

                    </div>
                    <div style={{ width: '85%' }}>
                        <div style={{ width: "100%", display: 'flex', justifyContent: "center", background: (theme === 'light') ? ('#E0F4FF') : ('#020617'), borderRadius: "10px", margin: "10px" }}>
                            <MainText text="East Cost Railway" />
                            <button onClick={toggleTheme} style={{ border: "none", background: "none" }}>{(theme === 'light') ? (<><img src={SunIcon} style={{ width: "30px", height: "30px" }} /> </>) : (<><img src={StarIcon} style={{ width: "30px", height: "30px" }} /> </>)}</button>
                        </div>
                        <div>
                            {/* Route Configuration */}
                            <Routes>
                                <Route path="/" element={<HomeScreen />} />
                                <Route path="/Contacts" element={<ContactsScreen />} />
                            </Routes>
                        </div>
                    </div>
                </Router>

            </div>
        </>
    )
}
export default Home;