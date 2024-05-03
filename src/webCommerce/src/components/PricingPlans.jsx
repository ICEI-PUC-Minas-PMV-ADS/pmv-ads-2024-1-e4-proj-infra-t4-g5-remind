import { pricingPlans } from '../constants';

const PricingPlans = () => {
  return (
    <div className='mx-auto grid max-w-7xl grid-cols-3 gap-8 py-12 px-4 sm:px-6 lg:px-8'>
      {pricingPlans.map((plan) => (
        <div 
          key={plan.title}
          className='relative flex flex-col rounded-2xl border border-purple-500 bg-zinc text-neutral-100 p-8 shadow-lg'
        > 
          <h3 className='text-2xl font-semibold text-neutral-100 leading-5'>{plan.title}</h3>
          {plan.mostPopular && (
            <p className='absolute top-0 -translate-y-1/2 rounded-full bg-purple-600 
            px-3 py-0.5 text-sm font-semibold tracking-wide text-neutral-200 shadow-md'>
              Mais Popular
            </p>
          )}
          <p className='mt-4 text-sm leading-6 text-neutral-200'> {/* Ajuste: Corrigido o tamanho do texto para 'text-sm' */}
            {plan.description}
          </p>
          <div className='-mx-6 mt-4 rounded-lg bg-black p-6'>
            <p className='flex items-center text-sm font-semibold text-neutral-200'>
              <span>{plan.currency}</span>
              <span className='ml-3 text-4xl text-neutral-200'>${plan.price}</span>
              <span>{plan.frequency}</span>
            </p>
          </div>

          <ul className='mt-6 space-y-4 flex-1'>
            {plan.features.map((features) => (
                <li key={features} className='text-sm leading-6 text-neutral-200'>
                    * {features}
                </li>
            ))}
          </ul>

          <a href='#'
          className={`mt-8 block rounded-lg  px-6 py-4 text-center text-sm font-semibold leading-4 
          ${
            plan.mostPopular
            ? 'btn-buynow-popular'
            : 'btn-buynow'
          }
          `}
          >
            {plan.cta}
          </a>

        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
