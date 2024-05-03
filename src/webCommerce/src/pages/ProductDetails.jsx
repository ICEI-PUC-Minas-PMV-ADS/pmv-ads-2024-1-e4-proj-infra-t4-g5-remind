'use strict';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VideoCarousel from '../components/VideoCarousel';

const ProductDetails = () => {

  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  },[])
  
  return (
    <section id='ProductDetails' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full items-end md:flex justify-between'>
          <h1 id='title' className='section-heading' >O Produto.</h1>
        </div>

        <VideoCarousel/>

      </div>
    </section>
  )
}

export default ProductDetails
