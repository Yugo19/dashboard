import { gql } from "@apollo/client";

const ADD_NOTE = gql`
    mutation addNote($name: String!, $note_classe: Float, $note_exam: Float, $moyen: Float){
        addNote(name: $name, note_classe: $note_classe, note_exam:$note_exam, moyen: $moyen){
                name
                note_classe
                note_exam
                moyen
            
        }
    }

`;

const DELETE_NOTE = gql`
    mutation deleteNote($id:ID!){
        deleteNote(id:$id){
        name
        }
    }

`;


export {ADD_NOTE, DELETE_NOTE};
