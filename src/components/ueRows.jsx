import { FaTrash } from "react-icons/fa";
import { DELETE_UE } from "../mutations/ueMutation";
import { GET_UE } from "../queries/ueQueries";
import { useMutation } from "@apollo/client";

const UeRows = ({ue}) => {
    const [deleteUe] = useMutation(DELETE_UE, {
        variables: {id : ue.id},
        	update(cache, {data:{deleteUe}}){
			const {ues} = cache.readQuery({
				query:GET_UE
			});
			cache.writeQuery({
				query: GET_UE,
				data:{ues: ues.filter(ue => ue.id !== deleteUe.id
					
				)},
			});
		}
    })
    return (
        <tr>
            <td>{ue.name}</td>
            <td>{ue.status}</td>
            <td>
                <button onClick={deleteUe} className="btn btn-danger btn-sm">
                    <FaTrash />
                </button>
            </td>
        </tr>
            
    
    );
}

export default UeRows;
