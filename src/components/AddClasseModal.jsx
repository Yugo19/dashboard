import {useQuery, useMutation } from "@apollo/client";
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import { ADD_CLASSE } from "../mutations/classesMutation";
import Spinner from "./Spinner";
import { GET_CLASSES } from "../queries/classeQueries";
import { GET_FILIERES } from "../queries/FiliereQuery";


const AddClasseModal = () => {
    const [name, setName] = useState('');
    const [filiere, setFiliere] = useState('');

    const [addClasse] = useMutation(ADD_CLASSE,{
        variables: {name, filiere},
        update(cache,{data:{addClasse}}){
                const {classes} = cache.readQuery({ query:GET_CLASSES});

                cache.writeQuery({
                    query: GET_CLASSES,
                    data:{classes: [...classes, addClasse]},
                })
            },
    });

    const {loading, error, data} = useQuery(GET_FILIERES);

    
    if(loading) return <Spinner />
    if(error) return <h1>Error</h1>

    const onSubmit = (e) => {
        e.preventDefault();

        if(name ===''|| filiere ===''){
            alert('please fill the name and filiere');
        }

        addClasse(name, filiere);

        setName('');
    }
    
    return (
        <>
                <button type="button" className="btn btn-primary" 
                data-bs-toggle="modal" data-bs-target="#addStudentModal">
                <div className="d-flex align-items-center">
                <FaUser className='icon'  /> 
                <div> Ajouter </div> 
                </div>
                </button>

                <div className="modal fade" id="addStudentModal"  
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" 
                        id="exampleModalLabel">Ajouter une classe</h1>
                        <button type="button" class="btn-close" 
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Nom</label>
                                <input type="text" className='form-control' 
                                id='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                             <div className='mb-3'>
                                <label className='form-label'>Filière</label>
                                <select id="filiere" className="form-select" value={filiere} onChange={(e) => setFiliere(e.target.value)}>
                                    {data.filieres.map(filiere =>(
                                        <option value={filiere.id} key={filiere.id}>
                                            {filiere.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button type='submit' data-bs-dismiss="modal" className='btn btn-secondary'> Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            
        </>
    );
}

export default AddClasseModal;
