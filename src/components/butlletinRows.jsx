import ModifyNoote from "./ModifyNoote";

const ButlletinRows = ({note}) => {

    return (
        <tr>
                <td>{note.nameModule}</td>
                <td>{note.semestre}</td>
                <td>{note.noteClasse}</td>
                <td>{note.noteExam}</td>
                <td>
                    <ModifyNoote note={note}/>
                </td>
        </tr>
    );
}

export default ButlletinRows;
