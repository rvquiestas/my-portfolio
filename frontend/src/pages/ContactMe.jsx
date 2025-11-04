import { useEffect, useRef, useState } from 'react';
import PageTransition from '../components/PageTransition';
import { ThemeProvider } from '../Context/ThemeContext';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Footer from '../components/Footer';
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import emailjs from '@emailjs/browser';
import PrivacyPolicy from '../components/PrivacyPolicy';

const ContactMe = () => {
  const [showPolicy, setShowPolicy] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef();

  useEffect(() => {
    document.body.classList.add("bg-bg");
    return () => {
      document.body.classList.remove("bg-bg");
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_gt46wom',
        'template_hcloyhe',
        form.current,
        'JGqXqbO2uEhHjSiNi'
      );

      console.log('SUCCESS!', result.status, result.text);
      form.current.reset();          // clear form
      setShowSuccess(true);          // show success modal

    } catch (error) {
      console.error('FAILED...', error);
    }
  };

  return (
    <PageTransition key="contactMe-content">
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar currentPage="Contact" />

          <section className="grow py-8 lg:py-12">
            <Container>
              <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Side - Contact Info */}
                <div className="flex flex-wrap gap-x-12 lg:grid space-y-8 lg:space-y-12">
                  <div className="flex flex-row items-start gap-3 text-primary">
                    <MdOutlineLocationOn className="w-8 h-8 lg:w-10 lg:h-10 shrink-0 text-secondary mt-1" />
                    <div className="flex flex-col">
                      <p className="text-xl lg:text-2xl font-semibold mb-1">My Address</p>
                      <p className="text-sm lg:text-base text-primary/80">
                        Santa Rosa City, Laguna (Philippines)
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row items-start gap-3 text-primary">
                    <MdOutlineEmail className="w-8 h-8 lg:w-10 lg:h-10 shrink-0 text-secondary mt-1" />
                    <div className="flex flex-col">
                      <p className="text-xl lg:text-2xl font-semibold mb-1">My Email</p>
                      <p className="text-sm lg:text-base text-primary/80">rvquiestas@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-start gap-3 text-primary">
                    <IoIosLink className="w-8 h-8 lg:w-10 lg:h-10 shrink-0 text-secondary mt-1" />
                    <div className="flex flex-col">
                      <p className="text-xl lg:text-2xl font-semibold mb-3">My Socials</p>
                      <div className="flex gap-4">
                        <a
                          href="https://www.linkedin.com/in/rvq26/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform duration-300 hover:text-secondary"
                        >
                          <GrLinkedin className="w-7 h-7 lg:w-8 lg:h-8" />
                        </a>
                        <a
                          href="https://github.com/rvquiestas"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform duration-300 hover:text-secondary"
                        >
                          <GrGithub className="w-7 h-7 lg:w-8 lg:h-8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <form
                  className="bg-form-bg text-black flex flex-col text-sm px-6 sm:px-8 py-8 sm:py-10 rounded-2xl shadow-lg w-full"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <h1 className="text-2xl sm:text-4xl font-semibold leading-tight pb-6 text-left w-full">
                    Got ideas? I've got <br />
                    the skills. Let's team up.
                  </h1>

                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div>
                      <label htmlFor="firstName" className="block font-medium mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Your First Name"
                        className="w-full h-11 px-4 bg-transparent border border-black rounded-md outline-none focus:border-white transition-colors"
                        name="user_first_name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Your Last Name"
                        className="w-full h-11 px-4 bg-transparent border border-black rounded-md outline-none focus:border-white transition-colors"
                        name="user_last_name"
                        required
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mt-5 w-full">
                    <label htmlFor="company" className="block font-medium mb-2">
                      Company Name{' '}
                      <span className="font-normal text-black">
                        (leave blank if not applicable)
                      </span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your Company Name"
                      className="w-full h-11 px-4 bg-transparent border border-black rounded-md outline-none focus:border-white transition-colors"
                      name="user_company"
                    />
                  </div>

                  {/* Email */}
                  <div className="mt-5 w-full">
                    <label htmlFor="email" className="block font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@gmail.com"
                      className="w-full h-11 px-4 bg-transparent border border-black rounded-md outline-none focus:border-white transition-colors"
                      name="user_email"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-5 w-full">
                    <label htmlFor="message" className="block font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell me what I can help you with"
                      className="w-full h-32 px-4 py-3 bg-transparent border border-black rounded-md resize-none outline-none focus:border-white transition-colors"
                      name="message"
                      required
                    ></textarea>
                  </div>

                  {/* Checkbox + Privacy */}
                  <div className="mt-5 flex items-start gap-2 text-xs">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-0.5 accent-form-btn-text cursor-pointer"
                      required
                    />
                    <p className="leading-relaxed text-black">
                      By submitting this form, you agree to the terms of the{' '}
                      <button
                        type="button"
                        onClick={() => setShowPolicy(true)}
                        className="underline hover:text-white transition-colors cursor-pointer"
                      >
                        Privacy Policy
                      </button>
                      .
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-6 bg-primary text-form-btn-text font-semibold h-12 px-8 rounded-md hover:bg-secondary hover:scale-105 transition-transform duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </main>
            </Container>
          </section>

          <Footer />

          {/* Privacy Policy Modal */}
          <PrivacyPolicy isOpen={showPolicy} onClose={() => setShowPolicy(false)} />

          {/* ✅ Success Modal */}
          {showSuccess && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-project-bg text-primary max-w-sm w-full mx-4 p-6 rounded-xl shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-sm mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="bg-black text-white font-semibold px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </ThemeProvider>
    </PageTransition>
  );
};

export default ContactMe;
