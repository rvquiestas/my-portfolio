import { FaCircle } from "react-icons/fa";
import Container from '../Container';

const Hero = () => {
  return (
    <section id="section" className="h-full">
      {/* Main Content */}
      <Container>
        <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between sm:mt-0 md:mt-24 pb-16">
          <div className="flex flex-col items-center md:items-start">
            <span className="mt-16 mb-6 flex items-center space-x-2 border border-[#187DDB] text-[#187DDB] text-sm rounded-full px-4 pr-3 py-1.5">
              <FaCircle size={8} className='mr-1'/>
              AVAILABLE FOR WORK
            </span>

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
      </Container>
    </section>
  );
};

export default Hero;