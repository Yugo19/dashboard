import { FaUpload } from "react-icons/fa"
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_BULLETINNOTE } from "../queries/bulletinQueries";
import Spinner from './Spinner';

export default function ModifyNoote({note}) {
  const[nomMod, setNomMod] = useState('')
  const[notClasse, setNotCl] = useState('')
  const[noteExam, setNoteEx] = useState('')
  const {loading, error, data} = useQuery(GET_BULLETINNOTE,{
    variables:{id: note.id},
   refetchQueries:[{query:GET_BULLETINNOTE}],
  });



  if(loading) return <Spinner />
  if(error) return <h1>Error</h1>

  const onSubmit = (e) =>{
    e.preventDefault();
    setNomMod(data.bulletinNote.nameModule);
  }
  
  return (
    <div>
       
                <button type="button" onClick={onSubmit} className="btn btn-primary" 
                data-bs-toggle="modal" data-bs-target="#addStudentModal">
                <div className="d-flex align-items-center">
                <FaUpload className='icon'  /> 
                </div>
                </button>

                <div className="modal fade" id="addStudentModal"  
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" 
                        id="exampleModalLabel">Modifier les notes</h1>
                        <button type="button" class="btn-close" 
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Nom du module</label>
                                <input type="text" className='form-control' 
                                id='name' value={nomMod}/>
                            </div>

                             <div className='mb-3'>
                                <label className='form-label'>Note de classe</label>
                                <input type="text" className='form-control' 
                                id='name' value={data.bulletinNote.noteClasse} />
                            </div>

                             <div className='mb-3'>
                                <label className='form-label'>Note d'examen</label>
                                <input type="text" className='form-control' 
                                id='name' value={data.bulletinNote.noteExam} />
                            </div>

                            <button type='submit' data-bs-dismiss="modal" className='btn btn-secondary'> Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
    </div>
  )
}