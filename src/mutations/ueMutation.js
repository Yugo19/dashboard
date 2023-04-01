import { gql } from "@apollo/client";

const ADD_UE = gql`
    mutation addUe($name: String!, $status: UeStatus!){
        addUe(name:$name, status:$status){
            id
            name
            status
        }

    }


`;

const DELETE_UE= gql`
    mutation deleteUe($id:ID!){
        deleteUe(id:$id){
            id
            name
            status
        }
    }


`

export {ADD_UE, DELETE_UE};