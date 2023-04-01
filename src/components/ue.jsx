import {useQuery } from "@apollo/client";

import Spinner from "./Spinner";
import { GET_UE } from "../queries/ueQueries";
import UeRows from "./ueRows";


const Ue = () => {
    const {loading, error, data} = useQuery(GET_UE);

    if(loading) return <Spinner />
    if(error) return <h1>Erro</h1>
    return (
        <>
               {!loading && !error && (
                <table className='table  table-hover mt-3'>
                    <thead className="table-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.ues.map( ue => (
                            <UeRows key={ue.id} ue={ue} />
                        ) )}
                    </tbody>
                </table>
               )}
        </>
    );
}

export default Ue;
