import {Link, useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_STUDENT } from '../queries/studentQueries';
import Spinner from '../components/Spinner';
import Bulletin from '../components/bulletin';

const Student = () => {
    const {id} = useParams();
    const {loading, error, data} = useQuery(GET_STUDENT,
        { variables:{id}});

    if(loading) return <Spinner />
    if(error) return <p>Something went wrong</p>
    return (
        <>
        {!loading && !error && (
            <div className='mx-auto w-75 card p-5 mt-5'>
                <div class="row">
            <div className="col">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" value={data.student.name} />
            </div>
            <div className="col">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" value={data.student.email} />
            </div>
            </div>

            <button className='btn btn-primary mt-5'>Editer</button>
            <a href={`/editeStudent/${data.student.id}`}>
             <button className='btn btn-primary mt-2'>Generer bulletin</button>
             </a>
            </div> 
        )}

         <div className='mx-auto w-75 card p-5 mt-5'>
            <Bulletin key={data.student.id} bulletin={data.student.bulletin} />   
         </div>  
            
        </>
    );
}

export default Student;
