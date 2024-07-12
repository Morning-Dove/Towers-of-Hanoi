import { useDroppable } from '@dnd-kit/core';

import Disc from './Disc';
import styles from "./Tower.module.css"
import Stand from './assets/stand.svg';


function Tower({ towerId, discs }) {
  const { setNodeRef } = useDroppable({
    id: towerId,
  });

  return (
    <div>
        <div className="Tower">
            <section ref={setNodeRef} className={styles.tower}>
                {/* <div className="AlignDiscs"> */}
                    {discs.map((disc, i) => (
                    <Disc key={i} disc={disc} isTopDisc={i === discs.length - 1} className={styles.discs} />
                    ))}
                {/* </div> */}
                {/* <img src={Stand} alt="Stand" className="Stand" draggable={false}/> */}
            </section>
        </div>
    </div>
  );
}

export default Tower;

