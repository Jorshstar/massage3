import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ServiceCard from "./ServiceCard";
import TestimonialSlider from "./TestimonialSlider";
import FloatingAnimation from "./FloatingAnimation";

const Home = () => {
  // Smooth scrolling implementation
  useEffect(() => {
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleNavLinkClick);
    return () => document.removeEventListener("click", handleNavLinkClick);
  }, []);

  // Services data
  const services = [
    {
      id: 1,
      name: "Signature Luxury Massage",
      description:
        "Our exclusive treatment combines multiple techniques tailored to your specific needs. This premium experience includes aromatherapy, heated towels, and a scalp massage, leaving you in a state of complete bliss and rejuvenation.",
      image:
        "https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=800&q=80",
      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 2,
      name: "Deep Tissue Therapy",
      description:
        "A therapeutic massage that targets the deeper layers of muscle and connective tissue. Using slow, deliberate strokes and firm pressure, our specialists release chronic tension patterns and provide relief from persistent pain and stiffness.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
    {
      id: 3,
      name: "Hot Stone Experience",
      description:
        "Smooth, heated basalt stones are placed on key points of the body while warm oil is used for massage. The heat penetrates deeply into muscles, inducing profound relaxation while improving circulation and relieving tension.",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 4,
      name: "Prenatal Comfort Massage",
      description:
        "Specially designed for expectant mothers in their second and third trimesters. This gentle massage relieves the unique discomforts of pregnancy such as back pain, joint aches, and swelling, while ensuring both mother and baby's safety and comfort.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
    {
      id: 5,
      name: "Aromatherapy Journey",
      description:
        "Enhance your massage with custom-blended essential oils chosen to address your specific needs—whether for relaxation, energy, immune support, or mental clarity. This multi-sensory experience elevates the therapeutic benefits of massage while nurturing both body and mind.",
      image:
        "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&q=80",
      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 6,
      name: "Thai-Inspired Stretch Therapy",
      description:
        "A unique therapy that combines gentle stretching with acupressure techniques. Our therapists guide you through yoga-like stretches while applying pressure along energy lines, improving flexibility, circulation, and creating a sense of lightness in the body.",
      image:
        "https://images.unsplash.com/photo-1537128535997-13b690849da9?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
    {
      id: 7,
      name: "Executive Stress Relief",
      description:
        "Designed for busy professionals, this targeted treatment focuses on areas most affected by workplace stress—the neck, shoulders, and back. Includes special attention to tension headaches and the effects of prolonged sitting, providing rapid relief and renewed focus.",
      image:
        "https://images.unsplash.com/photo-1573495804683-641191e042ea?w=800&q=80",
      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 8,
      name: "Couples Retreat",
      description:
        "Share the gift of relaxation with someone special. Two therapists work in tandem to provide simultaneous massages in our dedicated couples suite. Choose from any of our massage modalities and enjoy this shared journey to wellness.",
      image:
        "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "The deep tissue massage was exactly what I needed. My chronic back pain has significantly improved after just three sessions!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "I've tried many massage therapists over the years, but this experience was truly exceptional. The attention to detail and personalized approach made all the difference.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "The hot stone massage was incredibly relaxing. The ambiance of the space combined with the therapist's expertise created the perfect escape from my busy life.",
      rating: 4,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    {
      id: 4,
      name: "David Thompson",
      text: "As someone with sports injuries, I was skeptical about massage therapy. But after my first session, I was convinced. My recovery time has improved dramatically.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf2f8] to-[#f5f3ff] text-gray-800">
      {/* Floating animations in background */}
      <FloatingAnimation />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source
              src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-[#9d174d] font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Indulge. Unwind. Transform.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate your wellness journey with our premium therapeutic
            experiences.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#services"
              className="px-8 py-3 bg-[#9d174d] text-white rounded-full hover:bg-[#831843] transition-all duration-300 shadow-lg hover:scale-105"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-[#9d174d] text-[#9d174d] rounded-full hover:bg-[#9d174d] hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white bg-opacity-70">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9d174d] font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80"
                alt="Massage Therapist"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#9d174d] font-serif">
                Our Story
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Founded by Dulce Rodriguez in 2015, our luxury massage therapy
                studio has grown from a small practice to a renowned wellness
                destination in the heart of the city.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Our team of certified therapists brings together expertise from
                around the world, with specialized training in both traditional
                and innovative massage techniques that blend Eastern and Western
                approaches to healing.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#9d174d] font-serif">
                Our Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At Dulce's Massage Therapy, we believe in the transformative
                power of therapeutic touch. We create personalized experiences
                that not only relieve physical tension but also restore mental
                clarity and emotional balance. Our commitment is to provide an
                exceptional level of care in a serene, luxurious environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#f8f4f0]">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9d174d] font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <div className="flex flex-col space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  image={service.image}
                  bookingLink={service.bookingLink}
                  isReversed={service.isReversed}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9d174d] font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Image 1 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
                alt="Luxury massage treatment"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>

            {/* Video 1 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&q=80"
                alt="Aromatherapy oils"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                alt="Massage treatment"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=800&q=80"
                alt="Luxury spa setting"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>

            {/* Video 2 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
                alt="Prenatal massage"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>

            {/* Image 4 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80"
                alt="Couples massage"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 bg-[#e9ecef] bg-opacity-70"
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9d174d] font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TestimonialSlider testimonials={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9d174d] font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#fdf2f8] p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#9d174d] font-serif">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-[#9d174d]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(305) 555-8732</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-[#9d174d]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@dulcesmassage.com</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-[#9d174d]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    1250 Ocean Drive, Suite 103, Miami Beach, FL 33139
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-[#588157]">
                  Business Hours
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-[#588157]">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-[#588157] hover:text-[#3a5a40] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#588157] hover:text-[#3a5a40] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#9d174d] text-white rounded-md hover:bg-[#831843] transition-all duration-300 shadow-md hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#831843] text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Dulce's Massage Therapy. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm opacity-75">
            Designed with care for your wellness journey.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
