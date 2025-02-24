import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

// Floating Particles
const floatingParticles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
  size: Math.random() * 6 + 4, // 4px to 10px
}));

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await emailjs.sendForm(
        "service_hts5rb9",
        "template_87838ht",
        form.current,
        "-66Isfjj-h8R2uLQo"
      );
      setMessage({ text: "Message sent successfully!", type: "success" });
      form.current.reset();
    } catch (error) {
      setMessage({ text: "Failed to send message. Please try again later.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 py-20 overflow-hidden"
    >
      {/* Background Floating Particles */}
      {floatingParticles.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, -15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: dot.delay,
          }}
          className="absolute bg-emerald-400 rounded-full opacity-20"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.y}%`,
            left: `${dot.x}%`,
          }}
        />
      ))}

      <div className="max-w-3xl w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-center mb-10 text-emerald-400"
        >
          Get in Touch ✨
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="w-full p-8 rounded-2xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/20 flex flex-col items-center"
          whileHover={{ scale: 1.02 }}
        >
          {/* Success/Error Message */}
          {message.text && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex items-center gap-2 p-3 mb-4 w-full rounded-lg text-center text-lg font-semibold ${
                message.type === "success"
                  ? "bg-emerald-600/20 text-emerald-400"
                  : "bg-red-600/20 text-red-400"
              }`}
            >
              {message.type === "success" ? <CheckCircle size={24} /> : <XCircle size={24} />}
              {message.text}
            </motion.div>
          )}

          {/* Name Field */}
          <div className="w-full mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gray-300">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gray-300">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Message Field */}
          <div className="w-full mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2 text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 p-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all disabled:bg-emerald-300"
          >
            {loading ? <Loader2 className="animate-spin" size={24} /> : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
