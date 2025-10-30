import { Circle } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="section"
      className={`h-full`}
    >

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-50 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center md:items-start">
            <span className="mt-16 mb-6 flex items-center space-x-2 border border-[#187DDB] text-[#187DDB] text-xs rounded-full px-4 pr-1.5 py-1.5"><Circle size={16} fill='#187DDB' className='mr-2'/>AVAILABLE FOR WORK</span>
            

          <h1 className="text-primary font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl">
            Hi, I'm RV Quiestas, an aspiring {" "}
            <span className="text-[#187DDB] underline underline-offset-12">web developer.</span>
          </h1>

          <p className="mt-8 text-primary font-light max-w-md text-l leading-relaxed">
            Web developer in the making, always learning and creating.
          </p>
        </div>

        {/* Right Side Image */}
        <div aria-label="Photos of leaders" className="mt-12 pb-6">
            <img
              alt=""
              className="w-100 h-100 rounded-xl hover:scale-105 transition duration-300 object-cover shrink-0 shadow-lg"
              src="/src/assets/img/rv-light-md.png"
            />
        </div>
      </main>
    </section>
  );
};

export default Hero;
