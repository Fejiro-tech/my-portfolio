import natoursImage from "../assets/natours.png";
import movieImage from "../assets/movieapp2.png";
import payrail from "../assets/payrailimg1.png";
import foodImage from "../assets/foodapp.png";
import ticketflow from "../assets/ticketflow.png";
import cryptoImage from "../assets/crypto.png";
import facebook from "../assets/facebook.png";
import naijastyleImg from "../assets/fashionapp.png"
import ordereatImg from "../assets/ordereat.png"
import ordereatsImg from "../assets/ordereats.png"

const project = [

  {
    name: "Payrail Agency",
    description:
      "A robust web application built for managing digital banking services. Users can register as agents, view and manage wallets, handle transactions, and access detailed account summaries. This project highlights advanced API integration, state management, and a clean UI built with Next.js and Tailwind CSS.",
    url: "https://payrail.co",
    githubUrl: "",
    technologies: ["Nextjs | Tailwind CSS"],
    year: 2025,
    image: payrail,
  },

    {
    name: "OrderEats - Food Ordering App",
    description:
      "A scalable food ordering application built uising React, featuring dynamic routing and centralized cart state management with Context API. The app includes real-time cart updates, persistent storage via localStorage, and Paystack payment integration (test mode) for secure checkout simulation.",
    url: "https://ordereat.vercel.app",
    githubUrl: "https://github.com/Fejiro-tech/OrderEats-.git",
    technologies: ["React | TailwindCSS | Paystack"],
    year: 2026,
    image: ordereatsImg,
  },

  {
      name: "TicketFlow",
      description:
        "TicketFlow is a responsive and efficient ticket management system that helps users create, track, and resolve tickets effortlessly.",
      url: "https://ticket-flow-six.vercel.app/",
      githubUrl: "https://github.com/Fejiro-tech/TicketFlow.git",
      technologies: ["React | Tailwind CSS"],
      year: 2025,
      image: ticketflow,
  },

  {
    name: "Naija Style Co.",
    description:
      "Naija Style Co is a responsive Next.js fashion storefront showcasing Nigerian traditional and modern outfits. It features category-based browsing, dynamic product pages, size selection, and a cart system powered by React Context API. The UI is clean, fast, and fully optimized for mobile.",
    url: "https://my-naija-style.vercel.app/",
    githubUrl: "https://github.com/Fejiro-tech/NaijaStyle.git",
    technologies: ["Nextjs | Tailwind CSS"],
    year: 2025,
    image: naijastyleImg,

  },
  {
    name: "Crypto Live-Tracker",
    description:
      "CryptoLive is a real-time cryptocurrency tracking web app that allows users to monitor live rates of Bitcoin, Ethereum, and Dogecoin. The app displays accurate market prices and updates instantly to keep users informed of crypto fluctuations in real time.",
    url: "https://crypto-live-tracker-app.vercel.app/",
    githubUrl: "https://github.com/Fejiro-tech/TicketFlow.git",
    technologies: ["React | API |  CSS"],
    year: 2025,
    image: cryptoImage,
  },

  // {
  //   name: "Facebook",
  //   description:
  //     "A robust web application built for managing digital banking services. Users can register as agents, view and manage wallets, handle transactions, and access detailed account summaries. This project highlights advanced API integration, state management, and a clean UI built with React and Tailwind CSS.",
  //   url: "",
  //   githubUrl: "",
  //   technologies: ["React", "API", "Tailwind CSS"],
  //   year: 2024,
  //   image: facebook,
  // },

  {
    name: "Movie App",
    description:
      "A sleek and responsive React application that lets users search for movies, view detailed information, and explore trending titles using real-time data from a public movie API. Built with Tailwind CSS for a clean UI and optimized for performance.",
    url: "",
    githubUrl: "",
    technologies: ["JavaScript"],
    year: 2024,
    image: movieImage,
  },
  
];

export default project;
