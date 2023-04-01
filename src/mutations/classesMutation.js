import { gql } from "@apollo/client";

const ADD_CLASSE = gql`
    mutation addClasse($name:String!, $filiereId:ID!){
        addClasse(name: $name, filiereId: $filiereId){
            id
            name
        }
    }

`;

export { ADD_CLASSE};