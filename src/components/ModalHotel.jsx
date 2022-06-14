const ModalHotel = ({ hotelSeleccionado, setModal }) => {
  const {
    nombre,
    imagen,
    direccion,
    email,
    telefono,
    calificacion,
    amenidades,
    imagenes,
  } = hotelSeleccionado;

  const closeModal = () => setModal(false);

  return (
    <div className="z-10 fixed w-full h-auto bg-white top-10 pb-28">
      <input
        value="X"
        onClick={closeModal}
        className="absolute right-0 top-0 border-2 border-indigo-400 w-10 rounded-lg text-center uppercase font-bold hover:cursor-pointer hover:bg-indigo-400 hover:text-white transition-colors"
      />
      <h1 className=" text-left text-7xl text-indigo-600 font-bold my-10">
        {nombre}
      </h1>
      <main className="flex justify-around">
        <img
          alt={`Imagen del hotel ${nombre}`}
          src={imagen}
          className="w-1/2"
        />
        <section className="text-xl font-semibold ">
          <p>Dirección: {direccion}</p>
          <p>Email: {email}</p>
          <p>Teléfono: {telefono}</p>
          <p>Calificación: {calificacion} Estrellas</p>

          <ul>
            Amenidades:
            {amenidades.map((amenidad) => (
              <li key={amenidad.id} className="ml-5">
                - {amenidad.nombre}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap w-10/12 mx-auto">
            {imagenes.map((imagen) => (
              <img
                alt={`imagen de ${nombre}`}
                src={imagen.path}
                className="w-2/12 h-32"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModalHotel;
