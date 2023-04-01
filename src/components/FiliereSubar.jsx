import AddFiliereModal from "./AddFiliereModal";

const FiliereSubar = () => {
    return (
        <div>
             <div>
                    <nav className="navbar bg-dark">
            <div className="container-fluid">
            <a href='/' className="navbar-brand" >
              <AddFiliereModal />
            </a>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Rechercher</button>
            </form>
            </div>
             </nav>

        </div>
        </div>
    );
}

export default FiliereSubar;
