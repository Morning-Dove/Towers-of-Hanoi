import { useDroppable } from '@dnd-kit/core';

import Disc from './Disc';
import styles from "./Tower.module.css"
import Stand from './assets/stand.svg';


function Tower({ towerId, discs }) {
  const { setNodeRef } = useDroppable({
    id: towerId,
  });

  return (
    <section ref={setNodeRef} className={styles.tower}>
        {discs.map((disc, i) => (
        <Disc key={i} disc={disc} isTopDisc={i === discs.length - 1} className={styles.discs} />
        ))}
    </section>
  );
}

export default Tower;

