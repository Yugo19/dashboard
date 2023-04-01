import React from 'react';

const NavBar = () => {

    const title="NavBar";
    const listItems =[
    {class:'nav-item',class2:'nav-link', name:'Notes'},
    {class:'nav-item',class2:'nav-link', name:'Bulletin'},
    {class:'nav-item',class2:'nav-link', name:'Emploi du temps'}
    ];
    const dropdownItems=[
    {name:'Etudiants',class:'dropdown-item'},
    {name:'Professeurs',class:'dropdown-item'},
    {name:'Parents',class:'dropdown-item'}
    ];


    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-warning">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">ITMA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Utilisateurs
                </a>
                <ul className="dropdown-menu">
                {dropdownItems.map(dropdownItem =>(
                    <li className={dropdownItem.class}><a href="/">{dropdownItem.name}</a></li>
                ))}
                </ul>
            </li>


            {listItems.map(listItem => (
                <li className={listItem.class}>
                <a className={listItem.class2} href="/">{listItem.name}</a>
                </li>
            ))}

        
        </ul>
      </div>
    </div>
  </nav>
        </div>
    );
}

export default NavBar;
