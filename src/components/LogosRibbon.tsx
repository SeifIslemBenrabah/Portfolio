import React from 'react';

import logoBluebite from '../assets/logos/logo_bluebite.svg';
import logoBoutique from '../assets/logos/logo_boutique.svg';
import logoCoach from '../assets/logos/logo_coach.svg';
import logoDrChamem from '../assets/logos/logo_dr.chamem.svg';
import logoDrNafisa from '../assets/logos/logo_dr.nafisa.svg';
import logoPhinlex from '../assets/logos/logo_phinlex.svg';
import logoPhotographe from '../assets/logos/logo_photographe.svg';
import logoQwiki from '../assets/logos/logo_qwiki.svg';
import logoResynex from '../assets/logos/logo_resynex.svg';

const logos = [
  logoBluebite, logoBoutique, logoCoach, logoDrChamem, logoDrNafisa,
  logoPhinlex, logoPhotographe, logoQwiki, logoResynex,
];

export default function LogosRibbon() {
  return (
    <div id="visual-composition" className="relative bg-white border-y border-neutral-100 overflow-hidden pb-5">
      <div className="relative flex overflow-hidden">
        <div dir="ltr" className="bg-black py-3.5 flex whitespace-nowrap overflow-hidden w-full border-y border-black uppercase select-none shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <div className="animate-ribbon flex items-center shrink-0 gap-12 sm:gap-16 px-6 sm:px-8">
            {logos.map((logo, i) => (
              <img key={i} src={logo} alt="Partner Logo" className="h-6 sm:h-8 w-auto object-contain opacity-90" />
            ))}
            {logos.map((logo, i) => (
              <img key={`b-${i}`} src={logo} alt="Partner Logo" className="h-6 sm:h-8 w-auto object-contain opacity-90" />
            ))}
            {logos.map((logo, i) => (
              <img key={`c-${i}`} src={logo} alt="Partner Logo" className="h-6 sm:h-8 w-auto object-contain opacity-90" />
            ))}
          </div>
          <div className="animate-ribbon flex items-center shrink-0 gap-12 sm:gap-16 px-6 sm:px-8" aria-hidden="true">
            {logos.map((logo, i) => (
              <img key={`d-${i}`} src={logo} alt="Partner Logo" className="h-6 sm:h-8 w-auto object-contain opacity-90" />
            ))}
            {logos.map((logo, i) => (
              <img key={`e-${i}`} src={logo} alt="Partner Logo" className="h-6 sm:h-8 w-auto object-contain opacity-90" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
