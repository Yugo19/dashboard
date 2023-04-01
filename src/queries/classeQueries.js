import { gql } from "@apollo/client";

const GET_CLASSES = gql`
    query getClasses{
        classes{
            id
            name
            filiereId
            filiere{
                id
                name
            }
        }
    }

`;

const GET_CLASSE = gql`
    query getClasse($id:ID!){
        classe(id: $id){
            id
            name
            filiere{
                id
                name
            }
        }
    }

`;

export { GET_CLASSE, GET_CLASSES};