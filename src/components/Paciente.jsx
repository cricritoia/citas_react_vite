
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, alta, sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente ?');

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-md">
            
            <p className="mb-3 font-bold uppercase text-gray-700">Nombre:{" "}
            <span className=" font-normal normal-case">{nombre}</span></p>

            <p className="mb-3 font-bold uppercase text-gray-700">Propietario:{" "}
            <span className=" font-normal normal-case ">{propietario}</span></p>

            <p className="mb-3 font-bold uppercase text-gray-700">email:{" "}
            <span className=" font-normal normal-case ">{email}</span></p>

            <p className="mb-3 font-bold uppercase text-gray-700">Fecha de alta:{" "}
            <span className=" font-normal normal-case ">{alta}</span></p>

            <p className="mb-3 font-bold uppercase text-gray-700">síntomas:{" "}
            <span className=" font-normal normal-case mb-3">{sintomas}</span></p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white
                    font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                    >Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white
                    font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                    >Eliminar
                </button>
            </div>

        </div>
    );
}

export default Paciente;
