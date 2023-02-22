import React from 'react';
import './CompactCard.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CompactCard = ({png, value, barValue, color,title, expanded, seTExpanded})=>{

    return(
        <div className="CompactCard"
        style={{background:color.backGround,
            boxShadow:color.boxShadow
        }}
        onClick = {()=>seTExpanded(!expanded)}
        >
            <div className="radialbBar">
                <CircularProgressbar 
                 value={barValue}
                 text = {`${barValue}%`}
                />
                <span style={{fontSize:"2rem",fontWeight:700}}>{title}</span>
            </div>
            <div className="details">
             {png}
             <span>${value}</span>
             <span>the last 24 hours</span>
            </div>
        </div>
    )
}

export default CompactCard;
