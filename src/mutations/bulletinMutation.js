import { gql } from "@apollo/client";


const ADD_BULLETIN =gql`
    mutation addBulletin($nameModule:String!, $semestre:String!, $noteClasse: Number!, $noteExam: Number!, $studentId:ID!){
        addBulletin(nameModule:$nameModule, semestre:$semestre, noteClasse:$noteClasse, noteExam:$noteExam, studenId:$studentId){
            nameModule,
            semestre
            noteClasse
            noteExam
            studentId
        }
    }


`