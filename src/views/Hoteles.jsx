import axios from "axios";
import { useState, useEffect } from "react";
import InfoHoteles from "../components/InfoHoteles";
import ModalHotel from "../components/ModalHotel";

const Hoteles = ({ mensaje, token }) => {
  const [modal, setModal] = useState(false);
  const [hotelSeleccionado, setHotelSeleccionado] = useState({});
  const [hoteles, setHoteles] = useState([]);

  useEffect(() => {
    const obtenerHoteles = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const respuesta = await axios(
        "https://desarrollo.api.noktos.com/api/admin/hosts/50",
        config
      );

      setHoteles(respuesta.data.host);
    };

    obtenerHoteles();
  }, []);

  return (
    <div className={`${modal ? "bg-gray-400" : ""} grid`}>
      <h1 className="text-center text-7xl text-indigo-600 font-bold my-10">
        Hoteles
      </h1>
      <p className="text-center text-lg text-indigo-600 font-bold pb-5">
        {mensaje}
      </p>

      <table className="w-10/12 mx-auto text-center">
        <thead className="border-b-2 border-gray-500">
          <tr>
            <td className="w-1/5">Nombre</td>
            <td className="w-1/5">Imagen</td>
            <td className="w-1/5">Dirección</td>
            <td className="w-1/5">Amenidades</td>
            <td className="w-1/5">Acciones</td>
          </tr>
        </thead>
        <tbody>
          {hoteles?.map((hotel) => (
            <InfoHoteles
              key={hotel.id}
              hotel={hotel}
              setModal={setModal}
              setHotelSeleccionado={setHotelSeleccionado}
            ></InfoHoteles>
          ))}
        </tbody>
      </table>

      {modal && (
        <ModalHotel hotelSeleccionado={hotelSeleccionado} setModal={setModal} />
      )}
    </div>
  );
};

export default Hoteles;
