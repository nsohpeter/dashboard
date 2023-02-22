
import React from "react";
import './ExpandedCard.css';

import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Chart from "../Rechart/Chart";

const ExpandedCard  = ( {color, title, series, expanded, seTExpanded}) =>{

    return(
      <div className="expandedCard"
       style={{background:color.backGround,
            boxShadow:color.boxShadow
        }}
      >
        <div className='icon'>
         <DisabledByDefaultIcon  onClick = { () => seTExpanded(!expanded)}/>
        </div>
         <span>{title}</span>
         <div className="chartContainer">
           <Chart />
         </div>
         <span>last 24 hours</span>
      </div>
    );
}

export default ExpandedCard;