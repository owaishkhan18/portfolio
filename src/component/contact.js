import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      await emailjs.sendForm(
        'service_hts5rb9',
        'template_87838ht',
        form.current,
        '-66Isfjj-h8R2uLQo'
      );
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      form.current.reset();
    } catch (error) {
      setMessage({ text: 'Failed to send message. Please try again later.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Contact Me
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          {message.text && (
            <div
              className={`mb-4 p-3 text-center rounded ${
                message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {message.text}
            </div>
          )}
          <label htmlFor="name" className="block mb-2 text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="email" className="block mb-2 text-gray-700">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="message" className="block mb-2 text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
