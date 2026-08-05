'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Sun, Moon, User } from 'lucide-react';

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Franchement, Seif a tout de suite compris ce que je voulais. Le résultat est élégant, professionnel et correspond parfaitement à l'image de mon cabinet.",
    image: "https://scontent.fqsf1-1.fna.fbcdn.net/v/t39.30808-6/510571470_699287666202125_7072093273089808323_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NzszioCnK_EQ7kNvwG09tyA&_nc_oc=AdrGK_uF5JnXOyl40hsYjjufDl-9pJxpdF79s3VLEHs0IQeTCgSSymG4wBv281GlPCo&_nc_zt=23&_nc_ht=scontent.fqsf1-1.fna&_nc_gid=zMGkkscK1vtcuDox1mDLkg&_nc_ss=7b2a8&oh=00_AQBer9Zn_A2AhEI6Z4x_jQLPDrOGeivG2wtnFKiqt-FuTw&oe=6A68C8D4",
    name: "Dr. Nafisa Djelid",
    role: "Médecin esthétique",
  },
  {
    text: "Seif a parfaitement compris notre vision. Le résultat est moderne, professionnel et à l'image de Phinlex.",
    image: "https://scontent.fqsf1-1.fna.fbcdn.net/v/t39.30808-6/506703938_1286178896840725_8222853273402769949_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=39wGaKYeA-EQ7kNvwH_tsVE&_nc_oc=AdpSsfjgWrqnE0kyZXwZApjcF_faBmQf9zVt3HZzLcBAnh0uhi7SAvjzBXGhON4jAtA&_nc_zt=23&_nc_ht=scontent.fqsf1-1.fna&_nc_gid=Hh_9MImez4XfOtW-fsGJrQ&_nc_ss=7b2a8&oh=00_AQCD-qD8rCK9T07qgTqPtYKH08Zfz2tJjMP_lckBqgL2CA&oe=6A68CE5E",
    name: "Rima Belfedhal",
    role: "Fondatrice de Phinlex",
  },
  {
    text: "Très satisfait du travail de Seif. Les publications sont soignées, les animations apportent une vraie valeur à notre communication et reflètent parfaitement notre image",
    image: "https://scontent.fqsf1-1.fna.fbcdn.net/v/t39.30808-1/369314456_122096281310024487_1161593084457119481_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s200x200&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=WvooNBw68z8Q7kNvwFAU91W&_nc_oc=Adqgecc08ThrynVDrJjjJHYYb5NjinhQRER1jZ-U6L9wvIxr9UfrVqPQsrWmbRDVGLM&_nc_zt=24&_nc_ht=scontent.fqsf1-1.fna&_nc_gid=7v4tDiOOsCaeK8NPYcO5aQ&_nc_ss=7b2a8&oh=00_AQCOSY6DUZ3ucioh1m6GU5yeKE6bNxmXmM-x9-cf03G5iw&oe=6A68DCA8",
    name: "Pharmacie Djerad",
    role: "Équipe Pharmacie Djerad",
  },
  {
    text: "Nous avons confié à Seif notre identité visuelle et notre communication digitale. Le résultat est élégant, cohérent et correspond parfaitement à l'image que nous souhaitions transmettre.",
    image: "https://scontent.fqsf1-2.fna.fbcdn.net/v/t39.30808-6/493693673_1252785286852246_4586437614774918723_n.jpg?stp=dst-jpg_tt6&cstp=mx828x828&ctp=s828x828&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2aVZyYlQKWoQ7kNvwFlrknM&_nc_oc=AdoxXsABS3PQLW2uJ4wf2U7GLpmDQSpYIWD-WyR-zIrN2eFp2UZLbmTonTGVXaznNoQ&_nc_zt=23&_nc_ht=scontent.fqsf1-2.fna&_nc_gid=1J2j-af7Naa_w0ZuN9vGFg&_nc_ss=7b2a8&oh=00_AQAreX0d1cTeDSQ10goJ5xvDk1s-M1h5izOD7ozwgHpt0w&oe=6A68B114",
    name: "Boutique hafouda",
    role: "Responsable Marketing",
  },
  {
    text: "Nous voulions une identité qui reflète la qualité de nos photos et vidéos. Seif a su créer une image professionnelle, unique et mémorable.",
    image: "https://scontent.fqsf1-1.fna.fbcdn.net/v/t39.30808-6/465719499_122093663192620218_2700938376672483564_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NGd_t3OcjDUQ7kNvwGQEFsP&_nc_oc=AdpMsjFg1tW_nisF_gkTP06aTZAeglJkHplqJEB1tI1JzPJJvz4Hssq8nJL_K1trl1w&_nc_zt=23&_nc_ht=scontent.fqsf1-1.fna&_nc_gid=TqZ92syreuh3nVBUwfO2xg&_nc_ss=7b2a8&oh=00_AQCjOT3mqR4YNrk39l5O2hQdWGHUy4GCz64AqhaYzHW1sw&oe=6A68CD33",
    name: "Golden studio",
    role: "Équipe Golden studio",
  },
  {
    text: "Seif a créé une identité qui inspire confiance dès le premier regard. Le résultat est élégant, moderne et reflète parfaitement l'image de mon cabinet",
    image: "https://scontent.fqsf1-1.fna.fbcdn.net/v/t39.30808-6/697792653_122103126801309634_8232127814005153113_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Espd9shO5i0Q7kNvwGsMAtf&_nc_oc=AdrP0MJ_Xr0pYlvBsx74rPgCfQcnAOF6caTOI-j9Kd5B1VIp47Wj2kTO6-Gn_dKXxRA&_nc_zt=23&_nc_ht=scontent.fqsf1-1.fna&_nc_gid=I57KFhr9jdls_ckzMCm5iQ&_nc_ss=7b2a8&oh=00_AQDO25NjHH9xtikWs_qP_45zr6rc4yXHUQrXPH0tCCOZlQ&oe=6A68C7BE",
    name: "dr.chemam zouhir",
    role: "Dermatologue",
  },
  {
    text: "Franchement, Seif a tout de suite compris ce que je voulais. Le résultat est élégant, professionnel et correspond parfaitement à l'image de mon cabinet.",
    image: "https://scontent.fqsf1-1.fna.fbcdn.net/v/t39.30808-6/510571470_699287666202125_7072093273089808323_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NzszioCnK_EQ7kNvwG09tyA&_nc_oc=AdrGK_uF5JnXOyl40hsYjjufDl-9pJxpdF79s3VLEHs0IQeTCgSSymG4wBv281GlPCo&_nc_zt=23&_nc_ht=scontent.fqsf1-1.fna&_nc_gid=zMGkkscK1vtcuDox1mDLkg&_nc_ss=7b2a8&oh=00_AQBer9Zn_A2AhEI6Z4x_jQLPDrOGeivG2wtnFKiqt-FuTw&oe=6A68C8D4",
    name: "Dr. Nafisa Djelid",
    role: "Médecin esthétique",
  },
  {
    text: "Nous avons confié à Seif notre identité visuelle et notre communication digitale. Le résultat est élégant, cohérent et correspond parfaitement à l'image que nous souhaitions transmettre.",
    image: "https://scontent.fqsf1-2.fna.fbcdn.net/v/t39.30808-6/493693673_1252785286852246_4586437614774918723_n.jpg?stp=dst-jpg_tt6&cstp=mx828x828&ctp=s828x828&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2aVZyYlQKWoQ7kNvwFlrknM&_nc_oc=AdoxXsABS3PQLW2uJ4wf2U7GLpmDQSpYIWD-WyR-zIrN2eFp2UZLbmTonTGVXaznNoQ&_nc_zt=23&_nc_ht=scontent.fqsf1-2.fna&_nc_gid=1J2j-af7Naa_w0ZuN9vGFg&_nc_ss=7b2a8&oh=00_AQAreX0d1cTeDSQ10goJ5xvDk1s-M1h5izOD7ozwgHpt0w&oe=6A68B114",
    name: "Boutique hafouda",
    role: "Responsable Marketing",
  },
  {
    text: "Seif a réalisé plusieurs supports pour Smart Pill Solutions avec beaucoup de professionnalisme. Le résultat est soigné, moderne et parfaitement en accord avec notre image de marque",
    image: "https://scontent.fqsf1-1.fna.fbcdn.net/v/t39.30808-6/506703938_1286178896840725_8222853273402769949_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=39wGaKYeA-EQ7kNvwH_tsVE&_nc_oc=AdpSsfjgWrqnE0kyZXwZApjcF_faBmQf9zVt3HZzLcBAnh0uhi7SAvjzBXGhON4jAtA&_nc_zt=23&_nc_ht=scontent.fqsf1-1.fna&_nc_gid=Hh_9MImez4XfOtW-fsGJrQ&_nc_ss=7b2a8&oh=00_AQCD-qD8rCK9T07qgTqPtYKH08Zfz2tJjMP_lckBqgL2CA&oe=6A68CE5E",
    name: "Rima Belfedhal",
    role: "Smart Pill Solutions",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const Avatar = ({ image, name }: { image: string; name: string }) => {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // A fast-failing image (e.g. an expired signed URL) can finish loading before
  // React hydrates and attaches onError, so the event is missed — catch that
  // already-failed state on mount instead of relying on the event alone.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed || !image) {
    return (
      <div className="h-10 w-10 rounded-full ring-2 ring-paper-line bg-paper-surface flex items-center justify-center shrink-0">
        <User className="h-5 w-5 text-ink/40" />
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      width={40}
      height={40}
      src={image}
      alt={`Avatar of ${name}`}
      onError={() => setFailed(true)}
      className="h-10 w-10 rounded-full object-cover ring-2 ring-paper-line transition-all duration-300 ease-in-out"
    />
  );
};

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 border border-paper-line shadow-sm max-w-xs w-full bg-paper-surface transition-all duration-300 cursor-default select-none group focus:outline-none"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-ink/70 leading-relaxed font-normal m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <Avatar image={image} name={name} />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-ink transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-ink/40 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-transparent h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex flex-col relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto h-full flex flex-col lg:relative lg:justify-center"
      >
        <div className="flex flex-col items-center justify-center w-full max-w-[22rem] mx-auto mb-8 sm:mb-10 lg:mb-0 shrink-0 pt-6 sm:pt-10 lg:pt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-30 lg:pointer-events-none lg:bg-[linear-gradient(to_bottom,transparent_0%,var(--color-paper)_25%,var(--color-paper)_75%,transparent_100%)] lg:py-40 lg:px-6">
          <div className="flex justify-center lg:mt-32">
            <p className="text-ink/40 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
              Testimonials
            </p>
          </div>

          <h2 id="testimonials-heading" className="font-condensed font-black text-ink text-4xl sm:text-3xl leading-[0.95] uppercase text-center transition-colors">
            What our users say
          </h2>
          <p className="text-center mt-5 text-ink/60 text-sm leading-relaxed transition-colors">
            Discover how thousands of teams streamline their operations with our platform.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-4 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] lg:[mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)] flex-1 overflow-hidden min-h-0 lg:w-full lg:absolute lg:inset-0 lg:z-10"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
};

// --- Main App Component ---
export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col justify-center relative selection:bg-primary selection:text-white">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <TestimonialsSection />
    </div>
  );
}
