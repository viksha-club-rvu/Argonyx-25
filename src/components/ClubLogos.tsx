import clubLogo1 from '@/assets/club-logo-1.svg';
import clubLogo2 from '@/assets/club-logo-2.svg';
// import clubLogo3 from '@/assets/club-logo-3.svg';

const HeroClubLogos = () => {
  const clubLogos = [
    { src: clubLogo1, alt: 'Tech Club', name: 'Tech Club' },
    { src: clubLogo2, alt: 'Coding Club', name: 'Coding Club' },
    // { src: clubLogo3, alt: 'Innovation Club', name: 'Innovation Club' }
  ];

  return (
    <div className="flex items-center justify-center gap-6 mt-6 lg:mt-12">
      {clubLogos.map((logo, index) => (
        <div
          key={index}
          className="w-16 h-16 transition-transform duration-500 hover:scale-110"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroClubLogos;
