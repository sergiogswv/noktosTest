const InfoHoteles = ({ hotel, setModal, setHotelSeleccionado }) => {
  const handleHotel = (hotel) => {
    setModal(true);
    setHotelSeleccionado(hotel);
  };

  return (
    <tr className="border-b-2 border-gray-300 border-dashed">
      <td>{hotel.nombre}</td>

      <td className="grid">
        <img
          alt={`Imagen de ${hotel.nombre}`}
          src={hotel.imagen}
          className="w-10/12 mx-auto my-5"
        />
      </td>
      <td>{hotel.direccion}</td>
      <td>
        {hotel.amenidades.map((amenidad) => (
          <p key={amenidad.id} className="text-left">
            {amenidad.nombre}
          </p>
        ))}
      </td>
      <td>
        <button
          className="mx-auto w-10/12 uppercase text-white bg-indigo-600 rounded-xl h-10 text-2xl font-bold hover:cursor-pointer hover:bg-indigo-700 transition-colors"
          onClick={() => handleHotel(hotel)}
        >
          Ver Más...
        </button>
      </td>
    </tr>
  );
};

export default InfoHoteles;
