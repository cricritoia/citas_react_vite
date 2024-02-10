import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes,paciente,setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() =>{
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }},[paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validación de formulario
        if([nombre, propietario, email, alta, sintomas].includes('')){
            setError(true)
            return;
        }
        setError(false)

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            id: generarId()
        }

        if(paciente.id) {
            //Editando el registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => 
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})    
        }else {
            //Nuevo registro
            objetoPaciente.id=generarId();
            setPacientes([...pacientes, objetoPaciente])
        }

        
        //Reiniciar elform
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="mt-5 text-lg text-center mb-10">
                Añade Pacientes y {" "} 
                <span className="font-bold text-indigo-600">
                    Adminístralos
                </span>
            </p>

            <form
                onSubmit={handleSubmit} 
                className="bg-white rounded-lg shadow-md py-10 px-5 mb-10"
            >
                {error &&
                    <Error><p>Todos los campos son obligatorios</p></Error>
                }
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className=" block font-bold uppercase text-gray-700">
                        Nombre Mascota
                    </label>

                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className=" block font-bold uppercase text-gray-700">
                        Nombre del Propietario
                    </label>

                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className=" block font-bold uppercase text-gray-700">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Email contacto del propietario"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className=" block font-bold uppercase text-gray-700">
                        Alta
                    </label>

                    <input
                        id="alta"
                        type="date"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className=" block font-bold uppercase text-gray-700">
                        Síntomas
                    </label>

                    <textarea
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className=" w-full bg-indigo-600 p-3 rounded-md hover:bg-indigo-700  
                    cursor-pointer transition-color text-white uppercase font-bold"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}

                />

            </form>

        </div>
    );
}

export default Formulario;
