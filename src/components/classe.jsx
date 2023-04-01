import { GET_CLASSES } from "../queries/classeQueries";
import { useQuery } from "@apollo/client";
import ClasseCard from './classeCard';
import Spinner from "./Spinner";

const Classe = () => {
    const {loading, error, data} = useQuery(GET_CLASSES);

     if(loading) return <Spinner />
     if(error) return <h1>Error</h1>

    return (
        <>
        {!loading &&  !error && (
            data.classes.map(classe =>(
                <ClasseCard key={classe.id} classe={classe} />
            ))
        )}    
        </>
    );
}

export default Classe;
