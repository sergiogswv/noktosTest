const InfoHoteles = ({ hotel, setModal, setHotelSeleccionado }) => {
  const handleHotel = (hotel) => {
    setModal(true);
    setHotelSeleccionado(hotel);
  };

  return (
    <tr className="border-b-2 border-gray-300 border-dashed">
      <td>{hotel.nombre}</td>
      <td>{hotel.imagen}</td>
      <td>{hotel.descripcion}</td>
      <button
        className="mx-auto w-10/12 uppercase text-white bg-indigo-600 rounded-xl h-10 text-2xl font-bold my-5 hover:cursor-pointer hover:bg-indigo-700 transition-colors"
        onClick={() => handleHotel(hotel)}
      >
        Ver Más...
      </button>
    </tr>
  );
};

export default InfoHoteles;
