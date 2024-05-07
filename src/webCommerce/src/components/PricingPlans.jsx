// PricingPlans.jsx

import { pricingPlans } from '../constants';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { animateWithGsap } from '../utils/animations';

const PricingPlans = ({onButtonClick}) => {
  useEffect(() => {
    animateWithGsap('.animate', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  const handleButtonClick = (plan) => {
    console.log("Plano selecionado em PricingPlans:", plan);
    onButtonClick(plan); // Passando o plano selecionado em vez do evento
  };

  return (
    <div className='mx-auto grid max-w-full grid-cols-3 gap-8 py-12 px-4 sm:px-6 lg:px-8'>
      {pricingPlans.map((plan) => (
        <div 
          key={plan.id}
          className='relative flex flex-col rounded-2xl border border-purple-500 bg-zinc text-neutral-100 p-8 shadow-lg animate'
        > 
          <h3 className='text-2xl font-semibold text-neutral-100 leading-5 animate'>{plan.title}</h3>
          {plan.mostPopular && (
            <p className='absolute top-0 -translate-y-1/2 rounded-full bg-purple-600 
            px-3 py-0.5 text-sm font-semibold tracking-wide text-neutral-200 shadow-md'>
              Mais Popular
            </p>
          )}
          <p className='mt-4 text-sm leading-6 text-neutral-200 animate'> 
            {plan.description}
          </p>
          <div className='-mx-6 mt-4 rounded-lg bg-black p-6 animate'>
            <p className='flex items-center text-sm font-semibold text-neutral-200 animate'>
              <span>{plan.currency}</span>
              <span className='ml-3 text-4xl text-neutral-200 animate'>${plan.price}</span>
              <span>{plan.frequency}</span>
            </p>
          </div>

          <ul className='mt-6 space-y-4 flex-1 animate'>
            {plan.features.map((features) => (
                <li key={features} className='text-sm leading-6 text-neutral-200 animate'>
                    * {features}
                </li>
            ))}
          </ul>

          <button href='#'
          onClick={() => handleButtonClick(plan)} // Passando o plano selecionado quando o botão é clicado
          className={`mt-8 block rounded-lg  px-6 py-4 text-center text-sm font-semibold leading-4 
          ${
            plan.mostPopular
            ? 'btn-buynow-popular'
            : 'btn-buynow'
          }
          animate`}
          >
            {plan.cta}
          </button>

        </div>
      ))}
    </div>
  );
};

PricingPlans.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default PricingPlans;
