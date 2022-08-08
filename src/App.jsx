import { useEffect, useState } from "react";
import Hoteles from "./views/Hoteles";
import Login from "./views/Login";

function App() {
  const [token, setToken] = useState("");
  const [mensaje, setMensaje] = useState("");

  console.log("Esto es una prueba para git");

  if (token !== "") {
    return <Hoteles mensaje={mensaje} token={token} />;
  }

  return (
    <>
      <Login setToken={setToken} setMensaje={setMensaje} />
    </>
  );
}

export default App;
