import { useMutation } from '@apollo/client';
import { DELETE_STUDENT } from '../mutations/studentMutations';
import { GET_STUDENTS } from '../queries/studentQueries';


export default function StudentCard({student}){

	const [deleteStudent] = useMutation(DELETE_STUDENT,{
		variables: {id: student.id},
		//refetchQueries:[{query:GET_STUDENTS}],
		update(cache, {data:{deleteStudent}}){
			const {students} = cache.readQuery({
				query:GET_STUDENTS
			});
			cache.writeQuery({
				query: GET_STUDENTS,
				data:{students: students.filter(student => student.id !== deleteStudent.id
					
				)},
			});
		}

	});

    return (
        <>
        {  		
			    <div className="col">
				<div className="card" style={{width: "18rem"}}>
				<div className="card-body">
				<h5>{student.name}</h5>
				<div className="actions">
				<a href={`/students/${student.id}`}>
				<button type="button" className="btn btn-primary">Modifier</button>
				</a>
				<button type="button" onClick={deleteStudent} className="btn btn-danger btn-right">Archiver</button>
				</div>
				</div>	
				</div>
				</div>
				
			}
        </>
    );
}
