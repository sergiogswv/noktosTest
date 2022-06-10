const ModalHotel = ({ hotelSeleccionado, setModal }) => {
  const { nombre, imagen, descripcion } = hotelSeleccionado;

  const closeModal = () => setModal(false);

  return (
    <div className="z-10 absolute w-10/12 h-[50%] bg-white top-[15%]">
      <input
        value="X"
        onClick={closeModal}
        className="absolute right-0 top-0 border-2 border-indigo-400 w-10 rounded-lg text-center uppercase font-bold hover:cursor-pointer hover:bg-indigo-400 hover:text-white transition-colors"
      />
      <h1 className=" text-left text-7xl text-indigo-600 font-bold my-10">
        {nombre}
      </h1>
      <div className="flex justify-around">
        <p>{imagen}</p>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default ModalHotel;
