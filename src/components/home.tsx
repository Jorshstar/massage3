import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ServiceCard from "./ServiceCard";
import TestimonialSlider from "./TestimonialSlider";
import FloatingAnimation from "./FloatingAnimation";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaWhatsapp } from "react-icons/fa";

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
    // {
    //   id: 1,
    //   name: "Signature Luxury Massage",
    //   description:
    //     "Our exclusive treatment combines multiple techniques tailored to your specific needs. This premium experience includes aromatherapy, heated towels, and a scalp massage, leaving you in a state of complete bliss and rejuvenation.",
    //   image:
    //     "https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=800&q=80",
    //   bookingLink: "https://form.jotform.com/251290581267560",
    //   isReversed: false,
    // },
    // {
    //   id: 2,
    //   name: "Deep Tissue Therapy",
    //   description:
    //     "A therapeutic massage that targets the deeper layers of muscle and connective tissue. Using slow, deliberate strokes and firm pressure, our specialists release chronic tension patterns and provide relief from persistent pain and stiffness.",
    //   image:
    //     "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    //   bookingLink: "https://form.jotform.com/251290581267560",
    //   isReversed: true,
    // },
    // {
    //   id: 3,
    //   name: "Hot Stone Experience",
    //   description:
    //     "Smooth, heated basalt stones are placed on key points of the body while warm oil is used for massage. The heat penetrates deeply into muscles, inducing profound relaxation while improving circulation and relieving tension.",
    //   image:
    //     "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
    //   bookingLink: "https://form.jotform.com/251290581267560",
    //   isReversed: false,
    // },
    // {
    //   id: 4,
    //   name: "Prenatal Comfort Massage",
    //   description:
    //     "Specially designed for expectant mothers in their second and third trimesters. This gentle massage relieves the unique discomforts of pregnancy such as back pain, joint aches, and swelling, while ensuring both mother and baby's safety and comfort.",
    //   image:
    //     "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    //   bookingLink: "https://form.jotform.com/251290581267560",
    //   isReversed: true,
    // },
    // {
    //   id: 5,
    //   name: "Aromatherapy Journey",
    //   description:
    //     "Enhance your massage with custom-blended essential oils chosen to address your specific needs—whether for relaxation, energy, immune support, or mental clarity. This multi-sensory experience elevates the therapeutic benefits of massage while nurturing both body and mind.",
    //   image:
    //     "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&q=80",
    //   bookingLink: "https://form.jotform.com/251290581267560",
    //   isReversed: false,
    // },
    // {
    //   id: 6,
    //   name: "Thai-Inspired Stretch Therapy",
    //   description:
    //     "A unique therapy that combines gentle stretching with acupressure techniques. Our therapists guide you through yoga-like stretches while applying pressure along energy lines, improving flexibility, circulation, and creating a sense of lightness in the body.",
    //   image:
    //     "https://images.unsplash.com/photo-1537128535997-13b690849da9?w=800&q=80",
    //   bookingLink: "https://form.jotform.com/251290581267560",
    //   isReversed: true,
    // },
    // {
    //   id: 7,
    //   name: "Executive Stress Relief",
    //   description:
    //     "Designed for busy professionals, this targeted treatment focuses on areas most affected by workplace stress—the neck, shoulders, and back. Includes special attention to tension headaches and the effects of prolonged sitting, providing rapid relief and renewed focus.",
    //   image:
    //     "https://images.unsplash.com/photo-1573495804683-641191e042ea?w=800&q=80",
    //   bookingLink: "https://form.jotform.com/251290581267560",
    //   isReversed: false,
    // },
    // {
    //   id: 8,
    //   name: "Couples Retreat",
    //   description:
    //     "Share the gift of relaxation with someone special. Two therapists work in tandem to provide simultaneous massages in our dedicated couples suite. Choose from any of our massage modalities and enjoy this shared journey to wellness.",
    //   image:
    //     "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80",
    //   bookingLink: "https://form.jotform.com/251290581267560",
    //   isReversed: true,
    // },
    {
      id: 1,
      name: "Deep Tissue Massage",
      description:
        "Targets deeper layers of muscle and connective tissue to release chronic tension. Marlenewellness therapy applies firm pressure to reach problem areas, providing relief from persistent pain and improving mobility. Perfect for those with chronic aches or recovering from injuries.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",

      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: false,
    },
    {
      id: 2,
      name: "Heated Stone Massage",
      description:
        "Experience deep relaxation as smooth, heated stones are placed on key points of your body. The warmth penetrates muscles to release tension while Marlenewellness therapy uses the stones to apply gentle pressure. This therapeutic treatment improves circulation and promotes a profound sense of well-being.",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: true,
    },
    {
      id: 3,
      name: "Thai Massage",
      description:
        "This ancient healing system combines acupressure, Indian Ayurvedic principles, and assisted yoga postures. Marlenewellness therapy use hands, knees, legs, and feet to move you into a series of stretches while applying pressure along energy lines. Experience improved flexibility, circulation, and energy levels.",
      image:
        "/images/gallery/rita-mas1.jpg",
      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: false,
    },
    {
      id: 4,
      name: "Cupping Massage",
      description:
        "This traditional therapy uses special cups to create suction on your skin, increasing blood flow and loosening fascia. The negative pressure helps release tight muscles, reduce inflammation, and promote healing. Many clients report relief from chronic pain and improved recovery after physical activity.",
      image:
        "/images/gallery/rita-cup2.jpg",
      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: true,
    },
    {
      id: 5,
      name: "Sensual Massage",
      description:
        "Explore the art of relaxation and heightened awareness with our sensual massage. This intimate experience is designed to awaken the senses, promoting a deep connection between mind and body. Through gentle, flowing strokes, Marlenewellness skilled therapist creates an atmosphere of tranquility and comfort",
      image:
        "/images/gallery/rita-sens.webp",
      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: false,
    },
    {
      id: 6,
      name: "Geriatric Massage",
      description:
        "Gentle techniques designed specifically for the elderly to improve circulation and mobility. Marlenewellness therapy uses light pressure and shorter sessions to accommodate sensitive skin and joints. Regular sessions can help reduce pain, improve range of motion, and enhance overall quality of life.",
      image:
        "/images/gallery/rita-geria.jpg",
      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: true,
    },
    {
      id: 7,
      name: "Shiatsu Massage",
      description:
        "This Japanese technique uses rhythmic pressure on specific points along the body's meridians. Marlenewellness therapy applies pressure using their fingers, palms, and thumbs to balance your energy flow and promote natural healing. Experience reduced stress, improved circulation, and a deep sense of relaxation.",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: false,
    },
    {
      id: 8,
      name: "Swedish Massage",
      description:
        "Our most popular massage combines long, flowing strokes with kneading and circular movements. This classic technique improves circulation, eases muscle tension, and induces deep relaxation. Perfect for first-time clients or those seeking a gentle yet effective full-body experience.",
      image:
        "/images/gallery/rita-swed.webp",
      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: true,
    },
    {
      id: 9,
      name: "Aromatherapy Massage",
      description:
        "Enhance your massage experience with the therapeutic benefits of essential oils. Marlenewellness therapy blend oils specifically chosen for your needs, whether for relaxation, energy, or immune support. The combination of massage and aromatherapy creates a multi-sensory experience that nurtures both body and mind.",
      image:
        "/images/gallery/aroma-mass.webp",
      bookingLink: "https://form.jotform.com/251290581267560",
      isReversed: false,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      text: "The deep tissue massage was exactly what I needed. My chronic back pain has significantly improved after just three sessions!",
      rating: 5,
      avatar: "/images/gallery/man-head1.webp",
    },
    {
      id: 2,
      name: "Michael Brown",
      text: "I've tried many massage therapists over the years, but this experience was truly exceptional. The attention to detail and personalized approach made all the difference.",
      rating: 5,
      avatar: "/images/gallery/man-head2.avif",
    },
    {
      id: 3,
      name: "Robert Davis",
      text: "The hot stone massage was incredibly relaxing. The ambiance of the space combined with the therapist's expertise created the perfect escape from my busy life.",
      rating: 4,
      avatar: "/images/gallery/man-head3.webp",
    },
    {
      id: 4,
      name: "David Wilson",
      text: "As someone with sports injuries, I was skeptical about massage therapy. But after my first session, I was convinced. My recovery time has improved dramatically.",
      rating: 5,
      avatar: "/images/gallery/man-head4.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf2f8] to-[#f5f3ff] text-gray-800">
      {/* Floating animations in background */}
      <FloatingAnimation />

      {/* Navbar */}
      <Navbar />

      <section
  id="home"
  className="relative min-h-screen flex items-center px-4 overflow-hidden"
>
  <div className="container mx-auto z-10 grid grid-cols-1 md:grid-cols-[65%_35%] gap-0 items-stretch">
    {/* Left Side: Text Content (65%) */}
    <div className="flex flex-col justify-center py-12 md:py-24 px-4 md:pr-12">
    
      <motion.h1
        className="text-3xl md:text-6xl font-bold mb-6 text-[#9d174d] font-serif mt-10 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WELCOME TO Dulce’s Massage Therapy
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 text-gray-700 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Experience the healing touch. Your journey to wellness starts here.
      </motion.p>
      <motion.div 
      className="flex md:hidden items-center justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/images/gallery/dulce-Image1.jpg"
        alt="Massage Therapy"
        className="h-[40vh]  w-full object-cover rounded-xl"
      />
    </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6"
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

    {/* Right Side: Image (35%) */}
    <motion.div 
      className="hidden md:flex items-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/images/gallery/dulce-Image1.jpg"
        alt="Massage Therapy"
        className="h-[40vh] md:h-[80vh] w-full object-cover rounded-xl"
      />
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
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/gallery/dulce-Image1.jpg"
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
                My Story
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
              Welcome to Dulce’s Massage Therapy 
              Founded in 2021 by Dulce Martinez, Dulce’s Massage Therapy offers both home-based and mobile massage services tailored to your comfort and well-being. <br/>
              Dulce began her journey as a massage therapist in 2020, earning a Distinction in a Level 3 Diploma in Massage for Special Needs. She is also certified in Touch Therapy, Pregnancy Massage, and more recently, Medical Massage Therapy—a qualification that allows her to work with clients managing chronic pain, recovering from injuries or surgeries, or navigating autoimmune conditions.
              Treatments take place in a specially designed therapy room within her home, or in your own space through her mobile service—especially helpful for clients with mobility challenges. Every session is designed to help you feel cared for, relaxed, and renewed.

              </p>

              <h3 className="text-2xl font-semibold mb-4 text-[#9d174d] font-serif">
                My Mission
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
              At Dulce’s Massage Therapy, my mission is simple:
              “Massage for All – Personalized care for every unique individual.”
              I believe that everyone deserves access to thoughtful, healing touch. My approach is grounded in professionalism, empathy, and a deep understanding of the body’s needs.
              I’m also passionate about caring for the planet. I use natural, organic, and sustainably sourced oils and products, and am mindful about waste and resource use—because true wellness includes our environment too.


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
            My Services
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
            Behind the Scenes
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
                src="/images/gallery/dulce-Image1.jpg"
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
                src="/images/gallery/dulce-image2.jpg"
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
                src="/images/gallery/dulce-image3.jpg"
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
                src="/images/gallery/dulce-image4.jpg"
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
                src="/images/gallery/dulce-image5.jpg"
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
        className="py-20 px-4 bg-[#efe9ed] bg-opacity-70"
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
<section id="contact" className="py-16 md:py-20 px-4 bg-white">
  <div className="container mx-auto max-w-4xl px-4">
    <motion.h2
      className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-[#9d174d] font-serif"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Get In Touch
    </motion.h2>
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Contact Information Box - Adjusted for better mobile centering */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#f8f4f0] p-5 md:p-8 rounded-lg shadow-lg mx-auto w-full max-w-md md:max-w-none"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#9d174d]">
          Contact Information
        </h3>
        <div className="space-y-3 md:space-y-4">
          <p className="flex items-center text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 text-[#9d174d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>(734) 406-2193</span>
          </p>
          <p className="flex items-center text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 text-[#9d174d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>dulcesmassagetherapy@gmail.com</span>
          </p>
          <p className="flex items-center text-sm md:text-base">
          <FaWhatsapp className="h-5 w-5 md:h-6 md:w-6 text-[#9d174d]" />
            <span> (734) 406-2193 </span>
          </p>
        </div>
        
        <div className="mt-6 md:mt-8">
          <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#9d174d]">
            Follow Me
          </h4>
          <div className="flex space-x-3 md:space-x-4">
            <a href="#" className="text-[#9d174d] hover:text-[#3a5a40] transition-colors">
              <FaFacebook className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-[#9d174d] hover:text-[#3a5a40] transition-colors">
              <FaTelegram className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-[#9d174d] hover:text-[#3a5a40] transition-colors">
              <FaTiktok className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-[#9d174d] hover:text-[#3a5a40] transition-colors">
              <FaInstagram className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="https://wa.me/17344062193" 
            className="text-[#9d174d] hover:text-[#3a5a40] transition-colors"
            title="Contact us on WhatsApp">
              <FaWhatsapp className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </motion.div>
      
      {/* Contact Form - Adjusted for better mobile centering */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-md md:max-w-none mx-auto"
      >
        <form className="space-y-4 md:space-y-6 w-full">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition text-sm md:text-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition text-sm md:text-base"
                placeholder="Your email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition text-sm md:text-base"
              placeholder="Subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition text-sm md:text-base"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 md:px-6 md:py-3 bg-[#831843] text-white rounded-md hover:bg-[#ef347f] transition-colors duration-300 shadow-md text-sm md:text-base"
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
