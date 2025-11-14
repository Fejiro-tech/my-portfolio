import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const response = await fetch("https://formspree.io/f/xgvkgwkv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill up all fields");
      setIsSubmitting(false);
      return
    }

    if (response.ok) {
      setStatus("Thank you for reaching out! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Oops, something went wrong. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="text-purple-100 px-10 py-16"
    >
      <div className="max-w-3xl mx-auto text-center py-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 flex justify-center items-center">Get in Touch<span className="w-2 h-2 bg-green-400 inline-block rounded-lg ml-2 mt-1 animate-pulse"></span></h2>
        <p className="text-gray-300 mb-12 text-[14px] md:text-[16px] leading-relaxed ">
          Interested in working together? Let's connect. Fill out the form below
          or reach me directly through social media.
        </p>


        <form onSubmit={handleSubmit} className="space-y-6 ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#252540] border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#252540] border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#252540] border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-pink-600 to-[#52168a] text-white px-6 py-3 rounded-md font-bold hover:scale-105 transition-transform"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <p
            className={`mt-6 ${
              status.includes("error")
                ? "text-red-500 font-bold"
                : "text-green-500 font-bold"
            }`}
          >
            {status}
          </p>
        )}

        <div className="flex justify-center mt-14 space-x-6">
          <a
            href="https://github.com/Fejiro-tech"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./github.svg"
              alt="GitHub"
              className="w-10 h-10 rounded-md hover:scale-110 transition-transform bg-white"
            />
          </a>
          <a
            href="https://linkedin.com/in/priscilliaosumaka"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./linkedin.svg"
              alt="LinkedIn"
              className="w-10 h-10 rounded-md hover:scale-110 transition-transform bg-white"
            />
          </a>
          <a
            href="mailto:priscilliaosumaka@yahoo.com?subject=Interested%20in%20working%20with%20you&body=Hi%20Priscillia%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20collaborating%20with%20you.%0A%0ARegards%2C%0A"
            
            rel="noopener noreferrer"
          >
            <img
              src="/mail.svg"
              alt="Email"
              className="w-10 h-10 rounded-md hover:scale-110 transition-transform bg-white"
            />
          </a>
        </div>

        <div className="space-y-0.5 text-[14px] md:text-[16px] text-gray-300 mt-4">

          <p>Phone: <a href="tel:+2347065520120" className="text-purple-400 hover:underline">+234 706 552 0120</a></p>
          <p>Location: Lagos, Nigeria</p>
        </div>
      </div>
    </section>
  );
}
