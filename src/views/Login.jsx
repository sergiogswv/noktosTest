import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ setToken, setMensaje }) => {
  const formik = useFormik({
    initialValues: {
      email: "demosistemas@yopmail.com",
      password: "Prueba@1",
    },
    validationSchema: Yup.object({
      email: Yup.string().email(),
      password: Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        const respuesta = await axios.post(
          "https://desarrollo.api.noktos.com/api/login",
          { ...values, sistema: 2 }
        );
        setToken(respuesta.data.token);
        setMensaje(respuesta.data.message);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-center text-7xl text-indigo-600 font-bold my-10">
        Login
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto grid border-indigo-500 border-2 rounded-2xl w-4/12 h-auto"
      >
        <div className="mx-5 py-5 flex justify-between">
          <label className="text-2xl">Email:</label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="border-2 border-gray-300 rounded-lg w-8/12 "
          />
        </div>
        <div className="mx-5 py-3 flex justify-between">
          <label className="text-2xl">Passworrd:</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="border-2 border-gray-300 rounded-lg w-8/12"
          />
        </div>

        <input
          type="submit"
          value="Enviar"
          className="mx-auto w-10/12 uppercase text-white bg-indigo-600 rounded-xl h-10 text-2xl font-bold my-5 hover:cursor-pointer hover:bg-indigo-700 transition-colors"
        />
      </form>
    </div>
  );
};

export default Login;
