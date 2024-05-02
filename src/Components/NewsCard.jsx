import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from './ThemeContext';

const NewsCard = ({ item }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const { title, updatedAt, discription, link, uploaded_by } = item;

    function formatISODateToDateTime(isoDateString) {
        const date = new Date(isoDateString);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }


    return (
        <div className={`card ${theme === 'light' ? '' : 'text-bg-dark'}`} style={{ width: "18rem", margin: '10px' }}>
            <div className="card-body FontFamliy ">
                <h5 className="card-title FontFamliy" style={{ fontSize: '15px' }}><b>{title}</b></h5>
                <h6 className="card-subtitle mb-2 text-muted FontFamliy" style={{ fontSize: '10px' }}>Upload Date: {formatISODateToDateTime(updatedAt)}</h6>
                {discription !== '' && <p className="card-text FontFamliy" style={{ fontSize: '13px' }}><b>Description :- </b><br />{discription}</p>}
                {link !== '' && <a href={link} target="blank" className="btn btn-primary FontFamliy" style={{ fontSize: "12px" }}>Go To Document</a>}
                <p className="card-link FontFamliy" style={{ margin: "0px", fontSize: '10px' }}>Uploaded By : {uploaded_by}</p>
            </div>
        </div>
    )
}

export default NewsCard;
