// import {DndContext} from '@dnd-kit/core';
// import {useDroppable} from '@dnd-kit/core';

import React from 'react';
import Disc from './Disc';
import Stand from './assets/stand.svg';

const Tower = ({ discs }) => {
    return (
        // <DndContext>
            <div className="Tower">
                {discs.map((order, index) => (
                <Disc key={index} order={order} position={index + 1}/>
                ))}
                <img src={Stand} alt="Stand" className="Stand"/>
            </div>
        // </DndContext>
    );
}

export default Tower;
