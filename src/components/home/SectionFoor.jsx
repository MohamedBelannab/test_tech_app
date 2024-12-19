import React from "react";
import { Button } from "@material-tailwind/react";
import CardStyleProduct from "../products/CardStyleProduct";
import TextSpan from "../TextSpanAnimation";
import { useSelector } from "react-redux";
import { Each } from "../../hooks/Each";

const SectionFour = () => {
  const { products, status } = useSelector((state) => state.products);
  return (
    <section className="w-full h-auto flex flex-col py-6 md:py-10 transition-all duration-300">
      {/* Header Section */}
      <div className="flex flex-col px-4 md:px-10 py-4 md:py-6 space-y-4">
        <span className="uppercase font-poppins text-gray-600 text-xs md:text-sm font-semibold tracking-wider transition-all duration-300">
          Nos produits
        </span>

        <h1 className="font-poppins text-2xl md:text-3xl lg:text-[30px] tracking-wide font-black uppercase transition-all duration-300">
          {"engrais".split("").map((lettre, index) => (
            <TextSpan key={index}>
              {lettre === " " ? "\u00A0" : lettre}
            </TextSpan>
          ))}
        </h1>

        <div className="flex flex-col md:flex-row md:justify-between w-full items-start md:items-center gap-4 md:gap-0">
          <p className="w-full md:w-1/3 font-poppins text-gray-600 text-sm font-semibold leading-relaxed">
            Explorez une sélection de produits agricoles de haute qualité,
            conçus pour soutenir une agriculture durable et respectueuse de
            l'environnement.
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

      {/* Products Grid */}
      <div className="px-4 md:px-10 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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

export default SectionFour;
