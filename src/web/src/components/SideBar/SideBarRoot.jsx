import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import PartialLogo from '../../assets/images/partialLogo.png';

export default function SideBarRoot({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`relative w-[40vw] h-screen bg-[#F9F8FE] p-4 pt-2 md:w-[15vw] lg:w-[15vw] ${!open && '!w-[10vw] lg:!w-[5vw] md:!w-[5vw] !p-2 flex flex-col items-center'}`}
    >
      <img
        src={open ? Logo : PartialLogo}
        className={`mb-4 ${open && 'object-contain md:w-[125px] md:h-[50px]'}`}
        alt=""
      />

      <button
        className="absolute w-[4px] h-[20px] bg-subtleBlack right-5 top-1/2 rounded-xl hover:scale-125 md:w-[6px] md:h-[24px]"
        onClick={() => setOpen((prev) => !prev)}
      />

      <nav className={`flex flex-col gap-6 ${open && 'pl-2'}`}>
        {/* passando o state open como props para as children */}
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { open }),
        )}
      </nav>
    </aside>
  );
}
