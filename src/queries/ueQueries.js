import { gql } from "@apollo/client";

const GET_UES = gql`
    query getUes{
        ues{
            id
            name
            status
        }
    }
`;

const GET_UE = gql`
    query getUe($id:ID!){
        ue(id:$id){
            id
            name
        }
    }


`

export {GET_UE, GET_UES};