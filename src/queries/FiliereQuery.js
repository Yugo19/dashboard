import { gql } from "@apollo/client";

const GET_FILIERES = gql`
    query getFilieres{
        filieres{
            id
            name
            ue{
                id
                name
            }
        }
    }

`;

const GET_FILIERE = gql`
    query getFiliere($id:ID!){
        filiere(id: $id){
            id
            name
            ue{
                id
                name
            }
        }
    }

`;

export {GET_FILIERE, GET_FILIERES};