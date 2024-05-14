
//App.jsx
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import UserStories from './pages/UserStories';
import ProductDetails from './pages/ProductDetails';
import BuyNow from './pages/BuyNow';
import Footer from './pages/Footer';

import * as Sentry from '@sentry/react';


const App = () => {

  return (
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <UserStories/>
        <ProductDetails/>
        <BuyNow/>
        <Footer/>
      </main>
  )
}

export default Sentry.withProfiler(App);
