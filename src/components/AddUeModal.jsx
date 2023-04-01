import { GET_UE } from "../queries/ueQueries";
import { ADD_UE } from "../mutations/ueMutation";
import {useQuery, useMutation } from "@apollo/client";
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { GET_FILIERES } from "../queries/FiliereQuery";
import Spinner from "./Spinner";

const AddUeModal = () => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [filiereId, setFID] = useState('');
    const [addUe] = useMutation(ADD_UE,{
        variables: {name, status, filiereId},
        update(cache,{data:{addUe}}){
                const {ues} = cache.readQuery({ query:GET_UE});

                cache.writeQuery({
                    query: GET_UE,
                    data:{ues: [...ues, addUe]},
                })
            },
    });

    const {loading, error, data} = useQuery(GET_FILIERES)

    if(loading) return <Spinner />
    if(error) return <h1>Error</h1>

    const onSubmit = (e) => {
        e.preventDefault();
        

        if(name ==='' || status ===''){
            alert('please fill in name and status');
        }

        addUe(name, status, filiereId);
        setName('');
        setStatus('init');
    }

    return (
        <div>
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
                        id="exampleModalLabel">Ajouter une Ue</h1>
                        <button type="button" class="btn-close" 
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Nom</label>
                                <input type="text" className='form-control' 
                                id='name' value={name} onChange={e => setName(e.target.value)} />
                            </div>

                             <div className='mb-3'>
                                <label className='form-label'>Status</label>
                                <select id='status' className='form-select' value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="init"> Selectioner une valeur</option>
                                    <option value="Majeur"> Majeur</option>
                                    <option value="Mineur">Mineur</option>
                                </select>
                            </div>
                             <div className='mb-3'>
                                <label className='form-label'>Filiere</label>
                                <select id='status' className='form-select' value={filiereId} onChange={(e) => setFID(e.target.value)}>
                                    {data.filieres.map(filiere =>(
                                        <option key={filiere.id} value={filiere.id}>{filiere.name}</option>
                                    ))}
                                </select>
                            </div>

                            <button type='submit' data-bs-dismiss="modal" className='btn btn-secondary'> Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default AddUeModal;
