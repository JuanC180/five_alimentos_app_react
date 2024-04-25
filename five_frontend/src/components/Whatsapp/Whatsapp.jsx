import React from "react";

const WhatsappIcon = ({Whatsapp}) => {
    const {img,url} = Whatsapp;
    
    return (
        <div className="tbn-whatsapp">
            <a href={url} target="_blank">
            <div className={img}></div>
            </a>
        </div>
    );
};

export default WhatsappIcon;