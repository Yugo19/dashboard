import { gql } from "@apollo/client";

const ADD_FILIERE = gql`
    mutation addFiliere($name: String!){
        addFiliere(name: $name){
            id
            name
        }
    }

`;

export {ADD_FILIERE};
