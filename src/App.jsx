import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect, useState } from "react";


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect( () => {
    const obtenerLS = () => { 
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[]);

  useEffect( ()=> {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes] );

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  } 

  return (
    
      <div>  
        <Header/>
        <div className="mt-12 md:flex ">
          <Formulario
            paciente={paciente}
            setPaciente={setPaciente}
            pacientes={pacientes}
            setPacientes={setPacientes}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />      
        </div>
      </div>
    
  )
}

export default App
