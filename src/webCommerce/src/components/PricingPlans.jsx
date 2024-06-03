import { pricingPlans } from '../constants';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { animateWithGsap } from '../utils/animations';

const PricingPlans = ({ onButtonClick }) => {
  // Estado para verificar a largura da tela
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Função para verificar a largura da tela e definir o estado de isSmallScreen
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640 && window.innerHeight > window.innerWidth);
    };

    // Adicionando event listener para resize da janela
    window.addEventListener('resize', handleResize);

    // Chamando a função handleResize ao montar o componente
    handleResize();

    // Removendo event listener no cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    onButtonClick(plan);
  };

  return (
    <div className={isSmallScreen ? 'buynow-card-list' : 'buynow-card-grid-3'}>
      {pricingPlans.map((plan) => (
        <div 
          key={plan.id}
          className='buynow-card-border animate'
        > 
          <h3 className='buynow-card-title animate'>{plan.title}</h3>
          {plan.mostPopular && (
            <p className='buynow-card-border-popular'>
              Mais Popular
            </p>
          )}
          <p className='mt-4 buynow-card-text-sm animate'> 
            {plan.description}
          </p>
          <div className='mt-4 buynow-card-inside-black animate'>
            <p className='buynow-card-sale animate'>
              <span>{plan.currency}</span>
              <span className='ml-3 text-4xl text-neutral-200 animate'>${plan.price}</span>
              <span>{plan.frequency}</span>
            </p>
          </div>

          <ul className='buynow-card-ul mt-6 animate'>
            {plan.features.map((features) => (
                <li key={features} className='buynow-card-text-sm animate'>
                    * {features}
                </li>
            ))}
          </ul>

          <button href='#'
          onClick={() => handleButtonClick(plan)}
          className={`mt-8 block  
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
