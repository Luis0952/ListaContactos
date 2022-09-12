import { useEffect, useState } from "react";
import { Cards } from "./Components/Cards";

export const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    contactos();
  }, []);

  const contactos = async () => {
    const respuesta = await fetch("https://randomuser.me/api/?results=12");
    const informacion = await respuesta.json();
    setUsuarios(informacion.results);
    console.log(informacion.results);
  };

  return (
    <>
    <div className="">
      <h1 className="text-center text-6xl font-bold m-8"> <span className="text-blue-700  border-b-4 border-blue-700">Lista de Contactos</span> con consumo de una <span className=" text-blue-700">API</span></h1>
    </div>
      <div className="flex flex-col flex-2 items-center mt-16 px-16">
        <input
          type="text"
          placeholder="Buscar usuario..."
          className="w-full bg-white border-2 border-gray-400 rounded-lg py-2 px-4 mb-4"
          onChange={(e) => setBuscar(e.target.value)}
        />
        <div className="bg-gray-200 p-10 flex flex-wrap items-center">
          {usuarios
            .filter((usuario) => {
              if (buscar === "") {
                return usuario;
              } else if (
                usuario.name.first
                  .toLowerCase()
                  .includes(buscar.toLowerCase()) ||
                usuario.name.last
                  .toLowerCase()
                  .includes(buscar.toLowerCase()) ||
                usuario.email.toLowerCase().includes(buscar.toLowerCase()) ||
                usuario.cell.includes(buscar)
              ) {
                return usuario;
              }
            })
            .map((usuario) => (
              <Cards
                key={usuario.email}
                imagen={usuario.picture.large}
                nombre={`${usuario.name.first} ${usuario.name.last}`}
                correo={usuario.email}
                celular={usuario.cell}
                //<h1 key={usuario.email}>{usuario.name.first}</h1>
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
