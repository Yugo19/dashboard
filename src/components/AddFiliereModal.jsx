import { ADD_FILIERE } from "../mutations/filiereMutation";
import { GET_FILIERES } from "../queries/FiliereQuery";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const AddFiliereModal = () => {
    const [name, setName] = useState('');
    const [addFiliere] = useMutation(ADD_FILIERE,{
        variables :{ name},
        update(cache,{data:{addFiliere}}){
                const {filieres} = cache.readQuery({ query:GET_FILIERES});

                cache.writeQuery({
                    query: GET_FILIERES,
                    data:{filieres: [...filieres, addFiliere]},
                })
            },

    });

    const onSubmit = (e) => {
        e.preventDefault();

        if(name === '') return alert('please fill in the name');

        addFiliere(name);
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
                        id="exampleModalLabel">Ajouter une filière</h1>
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

                            <button type='submit' data-bs-dismiss="modal" className='btn btn-secondary'> Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </>
    );
}

export default AddFiliereModal;
