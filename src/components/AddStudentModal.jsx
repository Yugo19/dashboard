import {FaUser} from 'react-icons/fa';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_STUDENT } from '../mutations/studentMutations';
import { GET_STUDENTS } from '../queries/studentQueries';
import { GET_CLASSES } from '../queries/classeQueries';
import Spinner from './Spinner';
import { GET_UES } from '../queries/ueQueries';
import { GET_FILIERE } from '../queries/FiliereQuery';
import { GET_BULLETINNOTE } from '../queries/bulletinQueries';
import { ADD_BULLETIN } from '../mutations/bulletinMutation';

const AddStudentModal = () => {
    let listUe = [];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [classe, setClasse] = useState('');
    const [addStudent] = useMutation(ADD_STUDENT, {
            variables : {name, email, phone, classe},
            update(cache,{data:{addStudent}}){
                const {students} = cache.readQuery({ query:GET_STUDENTS});

                cache.writeQuery({
                    query: GET_STUDENTS,
                    data:{students: [...students, addStudent]},
                })
            },
        });

        const {loading, error, data} = useQuery(GET_CLASSES);

        if (loading) return <Spinner />;
        if(error) return <h1>Error</h1>

    const onSubmit = (e) => {
        e.preventDefault();

        if(name ==='' || email ==='' || phone ===''){
            return alert('Please fill in all fields');   
        }

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const{load,err, dt} = useQuery(GET_FILIERE,{
            variables :{id: classe}
        });

        if(load) return <Spinner />
        if(err) return <h5>error</h5>

        dt.filiere.ue.map( ue => (
            listUe.push(ue.name)
        ));

        addStudent(name, email, phone, classe);


        setName('');
        setEmail('');
        setPhone('');
    };
    
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
                        id="exampleModalLabel">Ajouter un etudiant</h1>
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
                                <label className='form-label'>Email</label>
                                <input type="text" className='form-control' 
                                id='name' value={email} onChange={e => setEmail(e.target.value)} />
                            </div>

                             <div className='mb-3'>
                                <label className='form-label'>Phone</label>
                                <input type="text" className='form-control' 
                                id='name' value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>

                             <div className='mb-3'>
                                <label className='form-label'>Classe</label>
                                <select id="classe" className='form-select' 
                                 value={classe} onChange={e => setClasse(e.target.value)} >
                                    {data.classes.map(classe => (
                                        <option key={classe.id} value={classe.filiereId}>{classe.name}</option>
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

export default AddStudentModal;

