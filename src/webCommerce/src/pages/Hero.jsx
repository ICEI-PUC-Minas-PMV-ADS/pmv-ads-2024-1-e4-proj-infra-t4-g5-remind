'use strict';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PurpleMessage from '../components/purpleMessage';
import { messages } from '../constants';


const Hero = () => {

  useGSAP(() => {
    const timeline = gsap.timeline({});
  
    const ids = [
      '#purple-message-first', 
      '#purple-message-second', 
      '#purple-message-third', 
      '#purple-message-fourth', 
      '#purple-message-fifth', 
      '#purple-message-sixth', 
      '#purple-message-seventh',
    ]; 
  
    gsap.to('#hero', { opacity: 1, y: -50, delay: 4.1 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 4.3 });
 
    ids.forEach(id => {
      gsap.set(id, { opacity: 0 });
    });
  
    timeline.to({}, { delay: 1 });
  
    ids.forEach((id, index) => {
      const initialPosition = index;
      
      timeline.to(id, {
        opacity: 0.7,
        y: initialPosition,
        scale: 20,
        duration: 0,
        ease: 'power2.in',
      });
  
      timeline.to(id, {
        opacity: 0.7,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    timeline.to({}, { delay: 0.4 });
  
    function moveLeft(id) {
      gsap.to(id, { x: '-1000%', duration: 0.5, ease: 'power2.inOut' });
    }
    
    function moveRight(id) {
      gsap.to(id, { x: '1000%', duration: 0.5, ease: 'power2.inOut' });
    }
    
    function moveMessagesUp() {
      ids.forEach((id, index) => {
        if (index !== 0) {
          gsap.to(id, { y: '-=100%', duration: 0.1, ease: 'power2.inOut' });
        }
      });
    } 
  
    function selectMessage(id) {
      gsap.fromTo(id, 
        { borderRadius: '10%',backgroundColor: 'rgba(68, 51, 104, 0)' }, 
        { borderRadius: '10%',backgroundColor: 'rgba(68, 51, 104, 1)', duration: 0.3 }
      ).yoyo(true).repeat(1);
    }
    
    const resetMessages = () => {
      ids.forEach((id) => {
        gsap.set(id, { x: 0, opacity: 0 });
      });
    };
  
    ids.forEach((id, index) => {
      const nextId = ids[index + 1];
    
      timeline.call(selectMessage, [id])
              .call(() => {
                if (index == 0) {
                  return moveLeft(id);
                } else if (index % 2 == 0) {
                  return moveLeft(id);
                } else {
                  return moveRight(id);
                }
              })
              .to({}, { delay: 0.1 }) 
              .call(moveMessagesUp)
              .to({}, { delay: 0.1 }); 

      if (!nextId) {
        timeline.call(resetMessages)
                .to({}, { delay: 0.3 }) 
                .call(() => {
                  timeline.restart();
                });
      }
    });
    
  }, []);
  
  
    
  return (
    <section className='w-full nav-height relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        {Object.keys(messages).map(id => (
          
          <PurpleMessage 
            key={id}
            id={id} 
            title={messages[id].title} 
            message={messages[id].message} 
            initials={messages[id].initials} 
          />
        ))}
        <div className='absolute top-48'>
          <p id="hero" className='hero-title' style={{color: '#443368'}}>Remind</p>
          <div className='md:w-10/12 w-9/12'></div>
        </div>
      </div>
      <div className='absolute top-68 left-1/2 transform -translate-x-1/2'>
        <div id='cta' className=' flex flex-col items-center opacity-0 translate-y-20'>
          <a href='#buynow' className='btn'>Compre</a>
          <p className='font-normal text-xl whitespace-nowrap'>À partir de $19,<span className='text-sm align-top '>90 </span>/mês</p>
        </div>
      </div>
    </section>
  );
};


export default Hero
