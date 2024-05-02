import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from '../Components/ThemeContext';
import HeadingText from '../Components/Heading';

function ImpDocScreen() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [docs, setDocs] = useState([]);
    const [detailView, setDetailView] = useState(false);
    const [loader, setloader] = useState(true);

    useEffect(() => {
        setloader(true);
        // Replace with your API endpoint
        fetch('https://ecorsuexpressapp.vercel.app/docUpload')
            .then(response => response.json())
            .then(data => {
                // Assuming 'data' is an array of documents
                setDocs(data);
                setloader(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredDocs = docs.filter(doc =>
        doc.doc_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <HeadingText text='Useful Documents' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: "5px" }}>
                <p style={{ margin: '0px', fontSize: "12px" }}>Detail View</p>
                <input type='checkbox' style={{ width: '15px', height: '15px' }} onClick={() => setDetailView(!detailView)} />
            </div>
            {loader && (
                <>
                    <div style={{ display: 'flex', justifyContent: "center", height: "100vh", alignItems: 'center' }}>
                        <div class="Docloader"></div>
                    </div>
                </>
            )}
            {detailView ? (<>
                <div style={{ marginLeft: '10px', marginTop: '20px', height: '600px', overflowY: 'scroll' }}>
                    {docs
                        .sort((a, b) => a.doc_title.localeCompare(b.doc_title))
                        .map((doc, index) => (
                            <div className={`card FontFamily ${theme === 'light' ? '' : 'text-bg-dark'}`} key={index} style={{ margin: "10px 5px" }}>
                                <h5 className="card-header FontFamily" style={{ fontSize: "15px" }}>{doc.doc_title}</h5>
                                <div className="card-body FontFamily">
                                    <p className="card-text FontFamily">Description:-<br /><p style={{ fontSize: "12px" }}>{doc.doc_description}</p></p>
                                    <p className="card-text FontFamily" style={{ fontSize: '10px' }}>uploaded by: {doc.doc_uploaded_by}</p>
                                    {doc.doc_link !== '' && <a href={doc.doc_link} target='_blank' className="btn btn-primary FontFamily" style={{ fontSize: '10px' }}>Go To Document</a>}
                                </div>
                            </div>
                        ))}

                </div>
            </>) : (<>
                <div style={{ marginLeft: '10px', marginTop: '20px' }}>

                    {/* Search Input */}
                    <div className={`form-floating mb-3 ${theme === 'light' ? '' : 'text-bg-dark'} `}>
                        <input className={`form-control FontFamliy ${theme === 'light' ? '' : 'text-bg-dark'}`} id="floatingInput" type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ marginBottom: '10px' }} />
                        <label for="floatingInput">Search Document</label>
                    </div>

                    <div style={{ height: "550px", overflowY: "scroll" }}>
                        <ul className={`list-group ${theme === 'light' ? '' : 'text-bg-dark'}`}>
                            {filteredDocs.sort((a, b) => a.doc_title.localeCompare(b.doc_title)).map((doc, index) => (
                                <li className={`list-group-item ${theme === 'light' ? '' : 'text-bg-dark'}`}><a href={doc.doc_link} target="blank" style={{ color: (doc.doc_link === '') ? "gray" : "" }}>{doc.doc_title}</a></li>
                            ))}
                        </ul>
                    </div>


                </div>
            </>)}

        </>
    );
}

export default ImpDocScreen;
