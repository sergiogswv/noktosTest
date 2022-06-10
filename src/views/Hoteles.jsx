import { useState } from "react";
import InfoHoteles from "../components/InfoHoteles";
import ModalHotel from "../components/ModalHotel";

const Hoteles = ({ mensaje }) => {
  const [modal, setModal] = useState(false);
  const [hotelSeleccionado, setHotelSeleccionado] = useState({});
  const hoteles = [
    {
      id: 1,
      nombre: "Hotel 1",
      imagen: "imagen1",
      descripcion: "Esta es un hotel nuevo",
    },
    {
      id: 2,
      nombre: "Hotel 2",
      imagen: "imagen2",
      descripcion: "Esta es un hotel viejo",
    },
    {
      id: 3,
      nombre: "Hotel 3",
      imagen: "imagen3",
      descripcion: "Esta es un hotel usado",
    },
  ];

  return (
    <div className="grid">
      <h1 className="text-center text-7xl text-indigo-600 font-bold my-10">
        Hoteles
      </h1>
      <p className="text-center text-lg text-indigo-600 font-bold pb-5">
        {mensaje}
      </p>

      <table className="w-10/12 mx-auto text-center">
        <thead className="border-b-2 border-gray-500">
          <tr>
            <td>Nombre</td>
            <td>Imagen</td>
            <td>Descripcion</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {hoteles.map((hotel) => (
            <>
              <InfoHoteles
                key={hotel.id}
                hotel={hotel}
                setModal={setModal}
                setHotelSeleccionado={setHotelSeleccionado}
              />
              {modal && (
                <ModalHotel
                  hotelSeleccionado={hotelSeleccionado}
                  setModal={setModal}
                />
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hoteles;
