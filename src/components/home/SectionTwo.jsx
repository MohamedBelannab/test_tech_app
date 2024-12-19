import React from "react";
import {
  ClockIcon,
  ShieldCheckIcon,
  HandThumbUpIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Products from "../../../public/images/produits.png";
import TextSpan from "../TextSpanAnimation";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../utils/motion";

const FeatureCard = ({ icon: Icon, title, description, index, direction }) => (
  <motion.div
    variants={fadeIn(direction, "spring", 0.2 * index, 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="flex flex-col gap-y-3 rounded-xl items-center justify-center p-6 md:p-8 lg:p-10 border-2 border-gray-500 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-white"
  >
    <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-800 transition-all duration-300 hover:scale-110" />
    <div className="text-center space-y-2">
      <h3 className="text-lg md:text-xl font-poppins uppercase font-black tracking-wide">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const SectionTwo = () => {
  const features = [
    {
      icon: HandThumbUpIcon,
      title: "Fit Technique",
      description: "Conseils experts pour résultats optimaux.",
    },
    {
      icon: ComputerDesktopIcon,
      title: "Technologie Avancée",
      description: "Meilleure absorption pour rendements maximisés.",
    },
    {
      icon: ClockIcon,
      title: "Design Optimisé",
      description: "Formulations efficaces, adaptées à chaque culture.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Résistance aux Intempéries",
      description: "Protection des cultures, résistants aux climats.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full py-10 px-4 md:px-7 transition-all duration-300"
    >
      {/* Header Section */}
      <div className="text-center space-y-3 mb-10 md:mb-16">
        <span className="uppercase font-poppins text-gray-600 text-xs md:text-sm font-semibold tracking-wider">
          Meilleur Produit
        </span>
        <h1 className="font-poppins text-2xl md:text-3xl lg:text-[30px] tracking-wide font-black uppercase">
          {"Nos produits".split("").map((lettre, index) => (
            <TextSpan key={index}>
              {lettre === " " ? "\u00A0" : lettre}
            </TextSpan>
          ))}
        </h1>
        <p className="font-poppins text-gray-600 text-sm md:text-md max-w-2xl mx-auto">
          Venez découvrir notre gamme d'engrais solides.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 px-2 md:px-9">
        {/* Left Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 w-full lg:w-1/3">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={index}
              direction="right"
              index={index}
              {...feature}
            />
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          variants={zoomIn(0.2, 0.4)}
          className="w-full lg:w-1/3 flex justify-center transform transition-all duration-500 hover:scale-105"
        >
          <img
            src={Products}
            alt="Products"
            className="max-w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 w-full lg:w-1/3">
          {features.slice(2, 4).map((feature, index) => (
            <FeatureCard
              direction="left"
              key={index}
              index={index + 2}
              {...feature}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionTwo;
