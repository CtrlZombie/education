import React from 'react';
import './ContentBlock.css';

const ContentBlock = ({ title, onTitleClick, currentPage}) => {
    return (
        <div className="content-block">
            <div className="banner">
                <img src="./banner" alt="banner"/>
            </div>
            <div className="page-title">
                <h1 onClick={onTitleClick} style={{ cursor: 'pointer' }}>{title}</h1>
                <p>Home / {currentPage}</p>
            </div>
        </div>
    );
};

export default ContentBlock;