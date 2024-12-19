import React from "react";
import img2 from "../../../public/images/img2.png";
import { Button } from "@material-tailwind/react";
import CardStyleProduct from "../products/CardStyleProduct";
import TextSpan from "../TextSpanAnimation";
import { useSelector } from "react-redux";
import { Each } from "../../hooks/Each";

const SectionThree = () => {
  const { products, status } = useSelector((state) => state.products);

  return (
    <section className="w-full h-auto flex flex-col transition-all duration-300 ease-in-out">
      {/* Header Section */}
      <div className="flex flex-col px-4 md:px-10 py-6 space-y-4">
        <span className="uppercase font-poppins text-gray-600 text-xs md:text-sm font-semibold tracking-wider">
          collection
        </span>
        <h1 className="font-poppins text-2xl md:text-3xl lg:text-[30px] tracking-wide font-black uppercase transition-all duration-300">
          {"Produits agricoles variés".split("").map((lettre, index) => (
            <TextSpan key={index}>
              {lettre === " " ? "\u00A0" : lettre}
            </TextSpan>
          ))}
        </h1>

        <div className="flex flex-col md:flex-row md:justify-between w-full items-start md:items-center gap-4 md:gap-0">
          <p className="w-full md:w-1/3 font-poppins text-gray-600 text-sm font-semibold leading-relaxed">
            Explorez une sélection de produits agricoles de haute qualité,
            conçus pour soutenir une agriculture durable et respectueuse de
            l'environnement. Ces produits favorisent des pratiques responsables,
            alliant innovation et préservation des ressources naturelles.
          </p>
          <Button
            size="md"
            color="green"
            variant="outlined"
            className="transition-all duration-300 hover:scale-105"
          >
            afficher plus
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10">
        {/* Left Image Section */}
        <div className="relative w-full h-[400px] md:h-auto transition-all duration-300">
          <img
            src={img2}
            alt="Collection"
            className="rounded-lg object-cover w-full h-full transition-all duration-300 hover:shadow-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-green-600 p-4 md:p-6 lg:p-9 rounded-lg mx-4 mb-4 transition-all duration-300 hover:bg-green-700">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black font-poppins uppercase text-white mb-2">
              Préparez-vous pour l'année
            </h1>
            <p className="text-xs md:text-sm text-white mb-4 line-clamp-3 md:line-clamp-none">
              Notre mission est d'accompagner chaque agriculteur en proposant
              des produits adaptés et un support technique de proximité. Nous
              plaçons l'innovation au cœur de nos services pour améliorer la
              performance agricole tout en préservant l'équilibre naturel des
              sols et en favorisant des pratiques durables.
            </p>
            <Button
              size="lg"
              color="white"
              className="transition-all duration-300 hover:scale-105"
            >
              Explorer
            </Button>
          </div>
        </div>

        {/* Right Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {status == "success" ? (
            <Each
              of={products}
              startLength={0}
              endLength={6}
              render={(e, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <CardStyleProduct img={e.image} name={e.name} emballage={e.Emballage}  />
                </div>
              )}
            />
          ) : (
            "loading"
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
