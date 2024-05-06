import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import PricingPlans from '../components/PricingPlans';
import Register from '../components/Register';
import PayAndContract from '../components/PayAndContract';

const BuyNow = () => {
  const [step, setStep] = useState('pricing');

  useGSAP(() => {
    animateWithGsap('.g_fadeIn', {
      delay: 0.3,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  const handleButtonClick = () => {
    if (step === 'pricing') {
      setStep('register');
    } else if (step === 'register') {
      setStep('pay');
    }
  };

  let Component;
  if (step === 'pricing') {
    Component = <PricingPlans onButtonClick={handleButtonClick} />;
  } else if (step === 'register') {
    Component = <Register onButtonClick={handleButtonClick} />;
  } else if (step === 'pay') {
    Component = <PayAndContract onButtonClick={handleButtonClick} />;
  }

  return (
    <section id="buynow" className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center">
          <h2 className="buynow-title">
            Remind.
            <br /> mobile & web
          </h2>

          <p className="buynow-subtitle">
          A solução descomplicada para comunicação.
          </p>
        </div>

        <div className="mb-10">
          <div className="relative h-full flex-center">
            
            {Component}
            
          </div>
              <div className="top-0 flex-1 flex justify-center flex-col g_fadeIn mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                  <p className="font-semibold text-gray text-xs">
                    Não encontrou um plano para a sua empresa? {' '}
                    <span className="underline text-purple-400">
                    Fale conosco {' '}
                    </span>
                    e peça um orçamento personalizado.
                  </p>
                  <p className="font-semibold text-gray text-xs">
                    Ou ligue grátis 0800-341-1966
                  </p>
                </div>
              </div>
          </div>

          <div className="buynow-text-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="buynow-text g_fadeIn">
                    Faça como centenas de empresas e escolha hoje a melhor solução de comunicação 
                    profissional para equipes. Melhore o engajamento e a produtividade. Perfeito 
                    para todos os tamanhos de empresas.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="buynow-bigtext">Remind</p>
                <p className="buynow-text mx-2">mobile & web.</p>
              </div>
              </div>
            </div>
    </section>
  );
};

export default BuyNow;
