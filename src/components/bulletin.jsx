import ButlletinRows from "./butlletinRows";

const Bulletin = ({bulletin}) => {


    return (
        <>
        
            <table className="table table-info table-hover">
                <thead className="table-dark">
                    <tr>
                    <th>UE/Matière</th>
                    <th>Crédit</th>
                    <th>Note Examen</th>
                    <th>Moyenne</th>
                    <th>Date de Session</th>
                    </tr>
                </thead>
                <tbody>
                {bulletin.map( one => (
                    <ButlletinRows key={one.id} note={one} />
                ))}
                    
                </tbody>
            </table>
            
        </>
    );
}

export default Bulletin;
