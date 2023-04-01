import React from 'react';
import SubBar from '../components/subBar';
import Students from '../components/Students';

const Home = () => {

    const Styles = {
        padding: "10px"
    };
    return (
        <>
        <div>
            <SubBar />  
        </div>
            <div style={Styles}>
                 <Students /> 
            </div>
        </>
    );
}

export default Home;
