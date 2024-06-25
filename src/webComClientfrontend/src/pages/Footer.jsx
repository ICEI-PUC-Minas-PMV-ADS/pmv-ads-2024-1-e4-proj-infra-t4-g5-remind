'use strict';
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 mb-6">
      <div className="screen-max-width">
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row h-[30px] pb-5 flex-col md:items-center justify-between">
          <p className="font-semibold text-gray leading-6 text-sm ">Copright @ 2024 Reinisart Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
