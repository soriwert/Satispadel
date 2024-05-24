import { useState } from "react";
import {collection, addDoc} from "firebase/firestore"
import { db } from "../../firebase/auth";
import LoginGoogle from "../../components/registrarse/LoginGoogle";

function Registrarse() {
  const [Image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Nombre, setNombre] = useState("");
  const [NombreEspalda, setNombreEspalda] = useState("");
  const [ManoDominante, setManoDominante] = useState("");
  const [Actitud, setActitud] = useState("");
  const [Pala, setPala] = useState("");
  const [Winner, setWinner] = useState("");

  function agregarDato(){ 
    const jugador = collection(db, "JUGADOR")
    const newJugador = {
      Image: Image,
      Title: Title,
      Description: Description,
      Nombre: Nombre,
      NombreEspalda: NombreEspalda,
      ManoDominante: ManoDominante,
      Actitud: Actitud,
      Pala: Pala,
      Winner: Winner
    }
    addDoc(jugador, newJugador)
  }
  return (
    <div>
      <LoginGoogle />
      { 
        sessionStorage.getItem('user') === null && (
        <div>
          <div className="form-group">
            <label htmlFor="Image">Image: </label>
            <input
              type="text"
              placeholder="Image"
              value={Image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Title">Title: </label>
            <input
              type="text"
              placeholder="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description: </label>
            <input
              type="text"
              placeholder="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Nombre">Nombre: </label>
            <input
              type="text"
              placeholder="Nombre"
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="NombreEspalda">NombreEspalda: </label>
            <input
              type="text"
              placeholder="NombreEspalda"
              value={NombreEspalda}
              onChange={(e) => setNombreEspalda(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ManoDominante">ManoDominante: </label>
            <input
              type="text"
              placeholder="ManoDominante"
              value={ManoDominante}
              onChange={(e) => setManoDominante(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Actitud">Actitud: </label>
            <input
              type="text"
              placeholder="Actitud"
              value={Actitud}
              onChange={(e) => setActitud(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Pala">Pala: </label>
            <input
              type="text"
              placeholder="Pala"
              value={Pala}
              onChange={(e) => setPala(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Winner">Winner: </label>
            <input
              type="text"
              placeholder="Winner"
              value={Winner}
              onChange={(e) => setWinner(e.target.value)}
            />
          </div>
          <button onClick={agregarDato}>Agregar</button>
        </div>
      )}
    </div>
  );
}

export default Registrarse;
        
