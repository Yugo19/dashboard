

const FiliereCard = ({name, ues}) => {

    return (
        <>
            <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                {ues.map(ue => (
                    <li key={ue.id} className="list-group-item">{ue.name}</li>
                ))} 
                </ul>
                <div className="card-body">
                    <a href="/" className="card-link">Card link</a>
                    <a href="/" className="card-link">Another link</a>
                </div>
             </div>
             </div>
        </>
    );
}

export default FiliereCard;
