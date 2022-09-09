import React from "react";
import Carousel from 'carousel-react-rcdev'

export const Cards = ({ nombre, correo, celular, imagen }) => {
  return (
    <Carousel>
      <div className="m-10 bg-gradient-to-b from-cyan-500 to-blue-500 bg-white py-8 px-10 rounded-3xl shadow-xl w-96 mt-16 border-white border-4 text-center mb-16 ">
        <img
          className="w-36 -mt-16 shadow-xl rounded-full mb-4 border-white border-4 mx-auto"
          src={imagen}
        />
        <h1 className="font-bold text-2xl text-white"> 👦{nombre}</h1>
        <h2 className="text-white font-semibold">📩{correo}</h2>
        <h2 className="text-white font-bold">📲{celular}</h2>
      </div>
      </Carousel>
   
  );
};
