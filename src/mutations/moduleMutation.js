import { gql } from "@apollo/client";

const ADD_MODULE = gql`
    mutation addModule($name: String!, $credit: Number!, $note_classe: Number!, $note_exam: Number!, $moyen: Number!){
        addModule(name: $name, credit: $credit, note_classe: $note_classe, note_exam: $note_exam, moyen: $moyen){
            id
            name
            credit
            note_classe
            note_exam
            moyen

        }
    }
`;

const DELETE_MODULE = gql`
    mutation deleteModule($id:ID!){
        deleteModule(id:$id){
        name
        credit
        }
    }

`

export { ADD_MODULE, DELETE_MODULE};