import { gql } from "@apollo/client";

const GET_NOTE = gql`
    query getNotes(){
        notes{
            id
            name
            note_classe
            note_exam
            moyen
        }
    }


`;

export {GET_NOTE};