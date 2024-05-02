import React, { useEffect, useState } from "react";
import HeadingText from "../Components/Heading";

const Gallery = () => {

    const [images, setImages] = useState([]);
    const [loader, setloader] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        setloader(true);
        try {
            const response = await fetch('https://ecorsuexpressapp.vercel.app/GelleryUpload');
            const data = await response.json();
            setImages(data); // Adjust according to the API response structure
            setloader(false);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    function convertToDirectGoogleDriveLink(shareableLink) {
        const fileIdMatch = shareableLink.match(/\/d\/(.+?)\//);
        if (fileIdMatch && fileIdMatch.length > 1) {
            return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
        } else {
            return null; // or handle the error as you prefer
        }
    }

    const handleOpenImage = (link) => {
        return () => {
            if (link) {
                window.open(link, '_blank');
            } else {
                alert("Invalid image link");
            }
        };
    };

    const photourl = 'https://drive.google.com/uc?export=download&id=1YcozTtYbBz8OUyLsLQ0Uaf_e0slIuKV2';

    return (

        <>

            <div style={{ display: "flex", justifyContent: 'center', margin: '10px' }}>
                <HeadingText text='Gallery' />
            </div>

            {loader && (
                <>
                    <div style={{ display: 'flex', justifyContent: "center", height: "100vh", alignItems: 'center' }}>
                        <div class="Docloader"></div>
                    </div>
                </>
            )}

            <div className="image-gallery" style={{ margin: "5px" }}>
                {/* {images.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.img_link} alt={image.img_title} />
                    </div>
                ))} */}


                {images.map((image, index) => (
                    <div className="card" style={{ width: "8rem", cursor: 'pointer' }} onClick={handleOpenImage(image.img_link)}>
                        <img src={convertToDirectGoogleDriveLink(image.img_link)} className="card-img-top" alt={image.img_title} style={{ maxHeight: "150px" }} />
                        <div className="card-body" style={{ padding: '5px' }}>
                            <p className="card-text FontFamliy" style={{ fontSize: "10px", margin: "0px" }}>{image.img_title}</p>
                            <p className="card-text FontFamliy" style={{ fontSize: "8px", margin: "0px" }}>{image.img_uploaded_by}</p>
                        </div>
                    </div>
                ))}
                <img src={photourl} style={{width:"100px", height:"100px"}}/>

            </div>
        </>
    );
}
export default Gallery;