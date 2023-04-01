import { gql } from '@apollo/client';

const ADD_STUDENT = gql `
    mutation addStudent($name: String!, $email: String!, $phone: String!){
        addStudent(name: $name, email: $email, phone: $phone){
            id
            name
            email
            phone
        }

    }

`

const DELETE_STUDENT = gql `
    mutation deleteStudent($id:ID!){
        deleteStudent(id:$id){
            id
            name
            email
            phone
        }
    }

`;

export { ADD_STUDENT, DELETE_STUDENT };