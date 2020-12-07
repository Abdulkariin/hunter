import React from 'react';

import {Card} from '../card/card.component'
import './card-list.styles.css'
export const Cardlist = props =>(

   <div className='card-list'>
    {props.robot.map(robot =>(
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
 
);