'use strict';

import gsap from 'gsap';

export function moveLeft(id) {
  gsap.to(id, { x: '-1000%', duration: 1.2, ease: 'power2.inOut' });
}

export function moveRight(id) {
  gsap.to(id, { x: '1000%', duration: 1.2, ease: 'power2.inOut' });
}

export function moveMessagesUp(ids) {
  ids.forEach((id, index) => {
    if (index !== 0) {
      gsap.to(id, { y: '-=100%', duration: 1, ease: 'power2.inOut' });
    }
  });
}

export function selectMessage(id) {
  gsap.fromTo(id, 
    { borderRadius: '10%',backgroundColor: 'rgba(68, 51, 104, 0)' }, 
    { borderRadius: '10%',backgroundColor: 'rgba(68, 51, 104, 1)', duration: 0.3 }
  ).yoyo(true).repeat(1);
}

export function resetMessages(ids) {
  ids.forEach((id) => {
    gsap.set(id, { x: 0, opacity: 0 });
  });
}
