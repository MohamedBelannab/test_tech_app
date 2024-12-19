import React from "react";
import img1 from "../../../public/images/img1.png";
import { Button } from "@material-tailwind/react";
import TextSpan from "../TextSpanAnimation";

const SectionOne = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto gap-4 justify-between">
      {/* Left Section */}
      <div className="flex flex-col lg:w-1/2 w-full h-full">
        <div className="flex flex-col gap-6">
          {/* Main Description Card */}
          <div className="flex flex-col bg-gray-100 px-6 py-8 md:px-12 md:py-16 rounded-xl gap-4 shadow-am">
            <h1 className="font-black lg:text-[45px] md:text-[35px] sm:text-[30px] text-[24px] tracking-wide font-poppins uppercase">
              <span className="font-mova text-green-500">Nutritech Agro</span>{" "}
              {"Votre Partenaire en Solutions Agricoles"
                .split("")
                .map((lettre, index) => (
                  <TextSpan key={index}>
                    {lettre === " " ? "\u00A0" : lettre}
                  </TextSpan>
                ))}
            </h1>
            <p className="font-poppins text-gray-600 text-md">
              Nutritech Agro, basée au Maroc, est une entreprise spécialisée
              dans la fabrication et la vente d’engrais de haute qualité,
              offrant une large gamme de produits, des engrais foliaires aux
              amendements de sol.
            </p>
            <Button
              size="lg"
              className="w-fit mt-2"
              color="green"
              variant="outlined"
            >
              achetez maintenant
            </Button>
          </div>

          {/* Two Smaller Cards */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* First Small Card */}
            <div className="shadow-sm flex flex-col px-6 py-8 md:px-12 md:py-16 bg-gray-100 rounded-xl gap-4">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l1.664-5.328A1 1 0 015.64 4h12.72a1 1 0 01.976.672L21 10m-9 4v6m-2 0h4m-4 0a1 1 0 01-1-1v-3.071c0-.592.272-1.166.737-1.527l2.526-1.895A1.002 1.002 0 0113.526 12M9 21h6"
                ></path>
              </svg>
              <div>
                <h3 className="text-xl font-poppins uppercase font-black">
                  Engrais de Haute Qualité
                </h3>
                <p className="text-sm text-gray-600">
                  Nous proposons une large gamme d’engrais pour répondre aux
                  besoins spécifiques de chaque type de sol.
                </p>
              </div>
            </div>

            {/* Second Small Card */}
            <div className="flex flex-col px-6 py-8 md:px-12 md:py-16 bg-gray-100 rounded-xl shadow-sm">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c2.5 0 4.5-2 4.5-4.5S14.5 2 12 2 7.5 4 7.5 6.5 9.5 11 12 11zm0 0c-2.5 0-4.5 2-4.5 4.5S9.5 20 12 20s4.5-2 4.5-4.5S14.5 11 12 11z"
                ></path>
              </svg>
              <div>
                <h3 className="text-xl font-poppins uppercase font-black">
                  Support Technique
                </h3>
                <p className="text-sm text-gray-600">
                  Notre équipe vous accompagne avec un support technique dédié
                  pour garantir des résultats optimaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2 w-full">
        <img
          src={img1}
          alt="Business Travel"
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SectionOne;
