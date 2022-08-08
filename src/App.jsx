import { useEffect, useState } from "react";
import Hoteles from "./views/Hoteles";
import Login from "./views/Login";

function App() {
  const [token, setToken] = useState("");
  const [mensaje, setMensaje] = useState("");

  const uno = 1;
  console.log(uno);
  console.log("prueba dos para git");
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
