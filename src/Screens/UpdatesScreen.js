import React, { useContext, useEffect, useState } from 'react'
import NewsCard from '../Components/NewsCard'
import HeadingText from '../Components/Heading';
import '../Styles/Styles.css';
import { theme, ThemeContext } from '../Components/ThemeContext';

const UpdatesScreen = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [reload, setreload] = useState(false);

    // setTimeout(() => {
    //     setreload(!reload);
    // }, 5000);

    useEffect(() => {
        setLoading(true);
        fetch('https://ecorsuexpressapp.vercel.app/newUpload')
            .then(response => response.json())
            .then(data => setData(data),
                setTimeout(() => {
                    setLoading(false)
                }, 2000))
            .catch(error => console.error('Error fetching data:', error));
    }, [reload]);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <HeadingText text='Union Updates' />
            </div>
            <div style={{ display: 'flex', justifyContent: "end" }}>
                <button type="button" class="btn btn-warning FontFamliy" onClick={() => setreload(!reload)} style={{ fontSize: '12px', margin: "5px" }}>Refresh</button>
            </div>

            {loading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}><span class="loader123"></span></div>}

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', height: '600px', overflowY: 'scroll' }}>


                {[...data].reverse().map((item, index) => (
                    <NewsCard key={index} item={item} />
                ))}
            </div>


        </>
    )
}

export default UpdatesScreen