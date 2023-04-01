import { GET_FILIERES } from "../queries/FiliereQuery";
import { useQuery } from "@apollo/client";
import FiliereCard from "./filiereCard";
import Spinner from './Spinner';

export default function Filiere() {
    const {loading, error, data} = useQuery(GET_FILIERES);

    if(loading) return <Spinner />;
    if(error) return <h1>Error</h1>

    return (
        <>
            <div className="row row-cols-1 row-cols-md-5 g-4">
            {!loading && ! error && (
                data.filieres.map(filiere => (
                    <FiliereCard key={filiere.id} name={filiere.name} ues={filiere.ue} />
                ))
            )}
            </div>
        </>
    );
}

