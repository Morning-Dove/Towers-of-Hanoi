import React from 'react';
// import {DndContext} from '@dnd-kit/core';
// import {useDraggable} from '@dnd-kit/core';

import Disc1 from './assets/1.png';
import Disc2 from './assets/2.png';
import Disc3 from './assets/3.png';
import Disc4 from './assets/4.png';
import Disc5 from './assets/5.png';
import Disc6 from './assets/6.png';


const discImages = {
    1: Disc6,
    2: Disc5,
    3: Disc4,
    4: Disc3,
    5: Disc2,
    6: Disc1,
  };

const Disc = ({ order, position }) => {


    return (
        // <DndContext>
            <img
                src={discImages[order]}
                alt={`Disc ${order}`}
                className="Disc"
                data-position={position}
            />
    //   </DndContext>
    );
  };


export default Disc;



