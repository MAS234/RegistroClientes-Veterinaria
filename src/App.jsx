import { useState, useEffect } from "react"
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoPaciente from "./componentes/ListadoPaciente"

function App() {

  const inicial = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(inicial);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
    }, [pacientes])

  const eliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }


  return (
    <div className="container mx-auto mt-20">

      <Header/>

      <div className="m-12 md:flex">
      <Formulario
      paciente = {paciente}
      pacientes = {pacientes}
      setPacientes = {setPacientes}
      setPaciente = {setPaciente}
      />
      <ListadoPaciente
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente = {eliminarPaciente}
      />
      </div>

    </div>
  )


}

export default App
