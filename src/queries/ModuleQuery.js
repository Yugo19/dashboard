import { gql } from "@apollo/client";

const GET_MODULE = gql`
    query getModules{
         modules {
            id
            name
            credit
            note_classe
            note_exam
            moyen
        }
    }

`;

export {GET_MODULE};