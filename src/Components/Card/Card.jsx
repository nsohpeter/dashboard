
import React, { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import './Card.css';
 
 import CompactCard from '../CompactCard/CompactCard';
 import ExpandedCard from '../ExpandedCard/ExpandedCard';
 //import Chart from '../Rechart/Chart';

const Card = ({...item}) => {
    const [expanded, seTExpanded] = useState(true)

  return (
    <LayoutGroup>
      {expanded?(
       <ExpandedCard
       expanded = {expanded} 
       seTExpanded = {seTExpanded}  {...item} />
      ):(
        <CompactCard
       expanded = {expanded}  
       seTExpanded = {seTExpanded}  {...item} /> 
     ) 
      }
    </LayoutGroup> 
  )
}

export default Card;
