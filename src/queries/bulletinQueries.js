import { gql } from "@apollo/client";

const GET_BULLETINNOTE = gql`
    query getNote($id: ID!){
        bulletinNote(id: $id){
            id
            nameModule
            noteClasse
            noteExam
        }
    }

`;

export {GET_BULLETINNOTE};