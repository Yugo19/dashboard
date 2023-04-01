import {gql} from '@apollo/client';

const GET_STUDENTS = gql`
query getStudents{
    students{
        id
        name
        email
        phone
    }
}
`;

const GET_STUDENT = gql`
    query getStudent($id: ID!){
        student(id: $id){
            id
            name
            email
            phone
            bulletin{
                id
                nameModule
                noteClasse
                noteExam
            }
        }
    }


`;


export {GET_STUDENTS, GET_STUDENT};