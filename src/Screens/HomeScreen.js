import React, { useContext, useEffect, useState } from "react";
import '../Styles/Styles.css';
import LandingPageText from "../Components/LandingPageText";
import { ThemeContext } from "../Components/ThemeContext";
import GSImage from '../Asserts/gs.png';
import Zonal from '../Asserts/zonal.png';
import COB from '../Asserts/COB.jpg'
import AIRFGenl from '../Asserts/AIRFGenl.png';
import Raju from '../Asserts/raju.png';
import Patsahani from '../Asserts/Patsahani.png';
import ZonalBW from '../Asserts/zonalBW.png';
import OfficeBarers from '../Asserts/OFFICEBARRRER.jpg';
import Ecorsulogo from '../Asserts/ecorsulogo.png';
import bcm from '../Asserts/bcm.png';
import youth from '../Asserts/youth.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import operatingbranchworkingcomittee from '../Asserts/operatingbranchworkingcommittee.png';
import operatingYouth from '../Asserts/youthoperating.jpg';
import BranchSecoratoryes from '../Asserts/branchsecretary.png'


const HomeScreen = ({ user }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const text1 = 'Welcome to the digital dairy application, a one-stop solution for all your daily work-related needs. Our platform is designed to make your working hours more productive and efficient. With our user-friendly interface, you can easily access essential information at your fingertips.';
    const text2 = 'Looking for contact details of employees working in the East Coast Railway Waltair Division? We got you covered. You can search for employees by their crew ID or name, ensuring you can connect with the right person hassle-free. Need an employees contact number? No problem, you can find that too!';
    const text3 = ' But thats not all. We go beyond employee information. You can also access contact details for hotels, CCs, CLIs, and stations.'
    const text4 = 'We understand that sometimes, you just need quick answers. Thats why we integrated a chatbot that delivers information in the most user-friendly and efficient manner possible. Its like having a virtual assistant to assist you anytime you need it.';
    const text5 = 'Were constantly evolving to meet your needs. Explore our new section, where you can stay updated with the latest news and find important documents with ease. We believe that access to essential documents should be straightforward, saving you valuable time.'
    const text6 = 'Experience a new level of convenience and productivity with our innovative application. Your workday just got easier!'

    const data = {
        "festivals": [{
            "Happy New Year": "2024-01-01",
            "Makar Sankranti": "2024-01-14",
            "Republic Day": "2024-01-26",
            "Maha Shivaratri": "2024-03-08",
            "Holi": "2024-03-25",
            "Ram Navami": "2024-04-18",
            "Mahavir Jayanti": "2024-04-23",
            "Good Friday": "2024-03-29",
            "Eid ul-Fitr": "2024-04-10",
            "Raksha Bandhan": "2024-08-19",
            "Independence Day": "2024-08-15",
            "Janmashtami": "2024-09-07",
            "Ganesh Chaturthi": "2024-09-09",
            "Navaratri begins": "2024-10-05",
            "Dussehra": "2024-10-14",
            "Diwali": "2024-11-01",
            "Guru Nanak Jayanti": "2024-11-15",
            "Christmas": "2024-12-25"
        }]
    };

    function findNearestFestival(currentDate, festivals) {
        let nearestFestival = '';
        const current = new Date(currentDate);

        let smallestDiff = Number.MAX_SAFE_INTEGER;

        for (const festival of festivals) {
            const [name, dateString] = Object.entries(festival)[0];
            const festivalDate = new Date(dateString);

            const diff = (festivalDate - current) / (1000 * 3600 * 24); // Difference in days

            // Check if the festival is within the next 5 days or occurred in the last 5 days
            if (Math.abs(diff) <= 5 && Math.abs(diff) < Math.abs(smallestDiff)) {
                smallestDiff = diff;
                nearestFestival = name;
            }
        }

        return nearestFestival;
    }


    const [today] = useState(new Date()); // Current date
    const [nearestFestival, setNearestFestival] = useState('');

    useEffect(() => {
        const nearest = findNearestFestival(today, data.festivals);
        setNearestFestival(nearest);
    }, [today]);



    // images // from google drive https://drive.google.com/uc?export=view&id=FILE_ID_2

    const jsonData = [
        {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 1",
            "subheading": "Subheading 1"
        },
        {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 2",
            "subheading": "Subheading 2"
        }, {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 2",
            "subheading": "Subheading 2"
        }, {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 2",
            "subheading": "Subheading 2"
        }, {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 2",
            "subheading": "Subheading 2"
        }, {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 2",
            "subheading": "Subheading 2"
        }, {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 2",
            "subheading": "Subheading 2"
        }, {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 2",
            "subheading": "Subheading 2"
        }, {
            "url": "https://drive.google.com/uc?export=view&id=1wYa7HnzEZ1-R2gAw3LFixyY1YEz7cdoV",
            "title": "Title 2",
            "subheading": "Subheading 2"
        },
    ];

    const imageUrls = [
        COB,
        OfficeBarers,
        bcm,
    ];

    return (
        <>
            <div style={{ marginLeft: '2%', marginRight: '-2%', marginTop: '10px' }}>
                <div style={{ margin: '10px 0px', fontFamily: "sans-serif", background: 'red', borderRadius: '10px', paddingBottom: '15px' }}>
                    <div>
                        <div>
                            <p style={{ display: 'flex', justifyContent: 'center', fontSize: '40px', fontWeight: '800', color: 'white', textShadow: "2px 2px 4px #000000", marginBottom: '5px' }}>ECoRSU</p>
                            <div style={{ background: 'yellow' }}>
                                <p style={{ display: 'flex', justifyContent: 'center', fontSize: '13px', padding: '5px', fontWeight: "800", color: '#2e2661', textAlign: 'center' }}>EAST COAST RAILWAY SHRAMIK UNION</p>
                            </div>
                            <div>
                                <p style={{ display: 'flex', justifyContent: 'center', fontSize: '15px', margin: '0px', fontWeight: "700", textAlign: 'center', color: (theme === 'light' ? ('white') : ('black')) }}>DIVISIONAL {user}</p>
                                {/* <p style={{ display: 'flex', justifyContent: 'center', fontSize: '12px', margin: '0px', fontWeight: "700", textAlign: 'center', color: (theme === 'light' ? ('white') : ('black')) }}>DIVISIONAL RUNNING STAFF BRANCH</p> */}
                                <p style={{ display: 'flex', justifyContent: 'center', fontSize: '12px', color: (theme === 'light' ? ('white') : ('black')) }}>WALTAIR DIVISION</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>

                            <div style={{ width: "50%" }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={Zonal} style={{ width: "80px", height: "80px" }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div>
                                        <p style={{
                                            margin: '0px', fontSize: "12px", color: "white", fontWeight: "800", marginLeft: "5px",
                                            // textShadow:
                                            //     " -1px -1px 0 #fff, 1px -1px 0 #fff,-1px 1px 0 #fff, 1px  1px 0 #fff"
                                        }}>R V S S RAO</p>
                                        <p style={{
                                            display: "flex", justifyContent: "center", color: "rgb(46, 38, 97)", margin: "0px", fontSize: "10px", fontWeight: "800",
                                            // textShadow:
                                            //     " -1px -1px 0 #fff, 1px -1px 0 #fff,-1px 1px 0 #fff, 1px  1px 0 #fff"
                                        }}>Zonal President</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={Ecorsulogo} style={{ width: "60px", height: "60px" }} />
                            </div>
                            <div style={{ width: "50%" }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={GSImage} style={{ width: "80px", height: "80px" }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div>
                                        <p style={{
                                            margin: '0px', fontSize: "12px", fontWeight: "800", color: "white",
                                            // textShadow:
                                            //     " -1px -1px 0 #fff, 1px -1px 0 #fff,-1px 1px 0 #fff, 1px  1px 0 #fff"
                                        }}>PK PATSAHANI</p>
                                        <p style={{
                                            display: "flex", justifyContent: "center", color: "rgb(46, 38, 97)", margin: "0px", fontSize: "10px", fontWeight: "800",
                                            //  textShadow:
                                            //     " -1px -1px 0 #fff, 1px -1px 0 #fff,-1px 1px 0 #fff, 1px  1px 0 #fff"
                                        }}>GS/ECoRSU</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style={{ display: 'flex', justifyContent: 'center', fontSize: '15px', color: (theme === 'light' ? ('white') : ('black')), margin: '0px', marginTop: "10px" }} className="FontFamliy">{nearestFestival}</p>
                            <p style={{ display: 'flex', justifyContent: 'center', fontSize: '60px', textShadow: "2px 2px 4px #000000", color: 'yellow', fontWeight: '800' }}>2024</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', background: '#2490c1', color: 'white', fontWeight: '700', fontSize: '20px' }}>
                            <p style={{ color: 'white', margin: '0px' }}>DIGITAL DIARY</p>
                        </div>
                        <div>
                            <p style={{ display: 'flex', justifyContent: 'center', margin: '2px', fontSize: '12px', color: (theme === 'light' ? ('white') : ('black')) }}>EAST COAST RAILWAY SHRAMIK UNION</p>
                            <p style={{ display: 'flex', justifyContent: 'center', margin: '2px', fontSize: '12px', color: (theme === 'light' ? ('white') : ('black')) }}>(AFFILIATED TO AIRF, HMS & ITF)</p>
                            <p style={{ display: 'flex', justifyContent: 'center', margin: '2px', fontSize: '12px', color: (theme === 'light' ? ('white') : ('black')) }}>REGD.NO.769</p>
                            <p style={{ display: 'flex', justifyContent: 'center', margin: '2px', fontSize: '12px', color: (theme === 'light' ? ('white') : ('black')) }}>CHANDRASEKHARPUR - BHUBANESWAR</p>
                        </div>
                    </div>
                    {/* <hr style={{ margin: "5px", color: "rgb(36, 144, 193)" }} /> */}
                    <div style={{borderTop:"1px solid rgb(36, 144, 193)"}}>
                        <p className='FontFamliy' style={{ fontSize: "12px", margin: '0px', marginLeft: "10px", marginTop: "0px", display: 'flex', justifyContent: "center", color: "yellow", fontWeight: '600' }}>Developed by :-  <i>&nbsp;&nbsp;Nagendra Yakkaladevara</i></p>
                        <p style={{ fontSize: '10px', margin: '0px', display: 'flex', justifyContent: 'center', color: 'white', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16" style={{ marginRight: "3px" }}>
                                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
                            </svg>
                            All rights are reserved.</p>
                    </div>
                </div>

                {/* <div className="parallax"></div> */}
                <div style={{ height: 'auto', padding: '20px', fontSize: '20px', border: (theme === 'light') ? ("2px solid rgb(224, 244, 255)") : ("2px solid rgb(11, 36, 71)"), borderRadius: '10px', marginBottom: '25px' }}>
                    <LandingPageText text={text1} />
                    <LandingPageText text={text2} />
                    <LandingPageText text={text3} />
                    <LandingPageText text={text4} />
                    <LandingPageText text={text5} />
                    <LandingPageText text={text6} />
                </div>
                <hr />
                {/* <Carousel images={imageUrls} /> */}
                {/* <hr /> */}

                <div>
                    <img src={COB} style={{ width: "-webkit-fill-available" }} />
                </div>

                <hr />
                <div>
                    <img src={BranchSecoratoryes} style={{ width: "-webkit-fill-available" }} />
                </div>
                <hr />
                {user === 'RUNNING STAFF BRANCH' ? (<>
                    <div>
                        <img src={OfficeBarers} style={{ width: "-webkit-fill-available" }} />
                    </div>

                    <hr />

                    <div>
                        <img src={bcm} style={{ width: "-webkit-fill-available" }} />
                    </div>

                    <hr />

                    <div>
                        <img src={youth} style={{ width: "-webkit-fill-available" }} />
                    </div>

                    <hr />
                </>) : (<>
                    <div>
                        <img src={operatingbranchworkingcomittee} style={{ width: "-webkit-fill-available" }} />
                    </div>
                    <hr />
                    <div>
                        <img src={operatingYouth} style={{ width: "-webkit-fill-available" }} />
                    </div>
                </>)}


                <div style={{ border: '3px double black', margin: '5px' }}>
                    <p style={{ fontSize: '15px', fontWeight: '500', display: 'flex', justifyContent: 'center', margin: '10px' }}>AIRF Genl. Secretary's Message</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div>
                            <img src={AIRFGenl} style={{ width: "80px", height: "100px" }} />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p style={{ margin: '0px', fontSize: '12px', fontWeight: "500", color: "red" }}>Shiva Gopal Mishra</p>
                            <p style={{ margin: '0px', fontSize: '10px' }}>General Secretary/AIRF</p>
                            <p style={{ margin: '0px', fontSize: '10px' }}>9717647594</p>
                        </div>
                    </div>

                    <div style={{ margin: "10px" }}>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>I am very much delighted to know that the ECORSU is releasing pocket diary well in advance for the year 2024 with all relevant information and guidance to the Rly. Men under the able leadership of Com. P.K. Patsahani, GS / ECORSU and his team.</p>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>It is not out of place to mention that ECORSU is always stood on front line to raise up to the occasion by all means for the cause of working class and taken up agitational programmes on the call of AIRF.</p>
                        <p style={{ display: 'flex', justifyContent: 'center', fontSize: "12px" }}>Wish you all a happy new year 2024</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', margin: '10px' }}>
                        <div>
                            <p style={{ margin: '0px', fontSize: '12px', fontWeight: "500" }}>Shiva Gopal Mishra</p>
                            <p style={{ margin: '0px', fontSize: '12px' }}>General Secretary/AIRF</p>
                            <p style={{ margin: '0px', fontSize: '12px' }}>New Delhi.</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div style={{ border: '3px double black', margin: '5px' }}>
                    <p style={{ fontSize: '15px', fontWeight: '500', display: 'flex', justifyContent: 'center', margin: '10px' }}>Genl. Secretary's Message</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div>
                            <img src={Patsahani} style={{ width: "80px", height: "100px" }} />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p style={{ margin: '0px', fontSize: '12px', fontWeight: "500", color: "red" }}>P.K. Patsahani</p>
                            <p style={{ margin: '0px', fontSize: '10px', }}>Genl. Secy./ECORSU</p>
                            <p style={{ margin: '0px', fontSize: '10px', }}>Vice President/AIRF / NDLS <br />  Member JCM (DC&NC)/ NDLS<br />8455887635</p>
                        </div>
                    </div>

                    <div style={{ margin: "10px" }}>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>I am very much thankful to the leaders and cadre of our union with huge co-operation and dedication, the pocket digital diary for the year 2024 is releasing well in advance.</p>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>I am also grateful to Com. R.V.S.S.Rao, Zonal President/ECoRSU and three Divl. Co-ordinators Sri P.V.J. Raju, DC/WAT, Sri Ranjit Kumar Das, DC/KUR and Sri Sunil Kumar, DC/SBP and the entire cadre for the devotion and dedication at all times due to which could able to conduct Rallys, Dharma's, Agitational programmes for restoring OPS.</p>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>The Three Divisional leadership is also working Day & Night for the betterment of Union and Workers.</p>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>Once again, I, be one among us to express my thanks, gratitude for the unity and dedication and co-operation without which could not able to run this union in a befitting manner and am expecting the same in the years to come.</p>

                        <p style={{ display: 'flex', justifyContent: 'center', fontSize: "12px" }}>Wish you all a happy new year 2024</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', margin: '10px' }}>
                        <div>
                            <p style={{ margin: '0px', fontSize: '12px', fontWeight: "500" }}>-P.K. Patsahani</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div style={{ border: '3px double black', margin: '5px' }}>
                    <p style={{ fontSize: '15px', fontWeight: '500', display: 'flex', justifyContent: 'center', margin: '10px' }}>Zonal President's Message</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div>
                            <img src={ZonalBW} style={{ width: "80px", height: "100px" }} />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p style={{ margin: '0px', fontSize: '12px', fontWeight: "500", color: "red" }}>RVS Srinivasa Rao</p>
                            <p style={{ margin: '0px', fontSize: '10px', }}>Zonal President/ECORSU</p>
                            <p style={{ margin: '0px', fontSize: '10px', }}>8978080143</p>
                        </div>
                    </div>

                    <div style={{ margin: "10px" }}>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>It is an immense pleasure for me that our union is publishing a pocket digital diary for the year 2024 which is useful for referring important establishment matters.</p>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>I extend my gratitude to each and every one of you for your commitment and active participation in our recent agitation programs, including rallies and dharnas demanding OPS. Your dedication has been instrumental in highlighting our issues at national level.</p>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>Thank you once again for your invaluable contribution. Your dedication and involvement makes our union stronger, together and we can achieve more in the future.</p>

                        <p style={{ display: 'flex', justifyContent: 'center', fontSize: "12px" }}>Wish you all a happy new year 2024</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', margin: '10px' }}>
                        <div>
                            <p style={{ margin: '0px', fontSize: '12px', fontWeight: "500" }}>-RVS Srinivasa Rao</p>
                        </div>
                    </div>
                </div>


                <hr />


                <div style={{ border: '3px double black', margin: '5px' }}>
                    <p style={{ fontSize: '15px', fontWeight: '500', display: 'flex', justifyContent: 'center', margin: '10px' }}>Divl. Co-Ordinator/WAT Message</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div>
                            <img src={Raju} style={{ width: "80px", height: "100px" }} />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p style={{ margin: '0px', fontSize: '12px', fontWeight: "500", color: "red" }}>P.V.J. Raju</p>
                            <p style={{ margin: '0px', fontSize: '10px', }}>Divisional Co-Ordinator</p>
                            <p style={{ margin: '0px', fontSize: '10px', }}>ECORSU/WAT <br /> 8978281073, 8978080631</p>
                        </div>
                    </div>

                    <div style={{ margin: "10px" }}>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>It is delightful in publishing the Pocket Digital Diary with certain important establishment rules and information. Our Railway employees are suffering with various problems in day to day working in addition to the repercussions from various angles such as indiscriminate surrender of posts and redeployments which were obviously the resultants of privatisation which effects the safe working. We under the dynamic leadership of our beloved leader Com. PK Patsahani are restraining tooth and nail. (eg. redeployment of Telecom staff).</p>
                        <p style={{ fontSize: "12px", textAlign: "justify", textIndent: '20px' }}>Hence we have to build a united mass platform, by organising all public sector, organised and Un-Organised sector workers against the immense suppression of the working class.</p>
                        <p style={{ display: 'flex', justifyContent: 'center', fontSize: "12px" }}>Wish you all a happy new year 2024</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', margin: '10px' }}>
                        <div>
                            <p style={{ margin: '0px', fontSize: '12px', fontWeight: "500" }}>-P.V.J. Raju</p>
                        </div>
                    </div>
                </div>

                <hr />





            </div>
        </>
    )
}
export default HomeScreen;