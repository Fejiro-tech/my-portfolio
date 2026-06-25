"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Contact() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "2349080399604";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Priscillia, I came across your portfolio and would like to discuss a project."
  )}`;

  return (
    <section
      id="contact"
      className="relative py-24 px-8 lg:px-10 text-white"
    >
      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          className="bg-green-500 p-4 rounded-full shadow-xl"
        >
          <MessageCircle size={24} />
        </motion.button>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-16 right-0 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-xl p-4"
          >
            <h3 className="font-semibold text-lg mb-4">
              Let's Connect 👋
            </h3>

            <div className="space-y-3">
              <a
                href="tel:+2347065520120"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <Phone size={18} />
                Schedule a Call
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-400 transition"
              >
                <FaWhatsapp size={18} />
                WhatsApp Chat
              </a>

              <a
                href="mailto:priscilliaosumaka@yahoo.com"
                className="flex items-center gap-3 hover:text-red-400 transition"
              >
                <Mail size={18} />
                Send an Email
              </a>
            </div>
          </motion.div>
        )}
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-['Cormorant_Garamond']">
            Let's Work Together
          </h2>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto ">
            I'm available for freelance projects, frontend development
            opportunities, and collaborations. Feel free to reach out through
            any of the channels below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ y: -5 }}
            href="tel:+2347065520120"
            className="bg-slate-800 border border-slate-700 rounded-xl p-6"
          >
            <Phone size={28} className="mb-4 text-blue-400" />

            <h3 className="text-lg md:text-xl font-semibold mb-2 font-['Cormorant_Garamond'] tracking-wide">
              Schedule a Call
            </h3>

            <p className="text-gray-400 text-sm md:text-base">
              Let's discuss your project requirements.
            </p>
          </motion.a>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ y: -5 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 border border-slate-700 rounded-xl p-6"
          >
            <FaWhatsapp size={28} className="mb-4 text-green-400" />

            <h3 className="text-lg md:text-xl font-semibold mb-2 font-['Cormorant_Garamond'] tracking-wide">
              WhatsApp
            </h3>

            <p className="text-gray-400 text-sm md:text-base">
              Get quick responses and project updates.
            </p>
          </motion.a>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ y: -5 }}
            href="mailto:priscilliaosumaka@yahoo.com"
            className="bg-slate-800 border border-slate-700 rounded-xl p-6"
          >
            <Mail size={28} className="mb-4 text-red-400" />

            <h3 className="text-lg md:text-xl font-semibold mb-2 font-['Cormorant_Garamond'] tracking-wide">
              Email
            </h3>

            <p className="text-gray-400 text-sm md:text-base">
              For detailed discussions and inquiries.
            </p>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center gap-8 mt-14"
        >
          <a
            href="https://github.com/Fejiro-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Github size={32} />
          </a>

          <a
            href="https://linkedin.com/in/priscilliaosumaka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Linkedin size={32} />
          </a>

          <a
            href="mailto:priscilliaosumaka@yahoo.com"
            className="hover:scale-110 transition"
          >
            <Mail size={32} />
          </a>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-10 text-center space-y-2 text-gray-400"
        >
          <p>
            <Phone size={16} className="inline mr-2" />
            +234 706 552 0120
          </p>

          <p>
            <MapPin size={16} className="inline mr-2" />
            Lagos, Nigeria
          </p>
        </motion.div>
      </div>
    </section>
  );
}