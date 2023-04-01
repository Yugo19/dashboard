import {useQuery} from '@apollo/client';
import { GET_STUDENTS } from '../queries/studentQueries';
import Spinner from './Spinner';

import StudentCard from './studentCard';




export default function Students() {
    const {loading, error, data} = useQuery(GET_STUDENTS);
 
    if (loading) return <Spinner />;
    if(error) return <p>Error</p>;

  return ( 
  <>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {!loading && !error &&  (
          data.students.map( student => (
            <StudentCard  key={student.id} student={student}/>
          ))
        ) } 
        </div>
       </>
  );
}
