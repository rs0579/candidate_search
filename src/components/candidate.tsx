import react from 'react';
import Candidate from '../interfaces/Candidate.interface';
import { BsPlusCircleFill } from "react-icons/bs";

type CandidateCardProps = {
    currentCandidate: Candidate;
    addNewCandidate?: (() => void) | null;
    removeCandidate?: ((
        e: react.MouseEvent<HTMLButtonElement, MouseEvent>,    ) => void) | null;
    isSavedCandidate: boolean;
}

const CandidateCard = ({ currentCandidate, addNewCandidate, removeCandidate, isSavedCandidate }: CandidateCardProps) => {
    return (
        <div className='card'>
            <img src={currentCandidate.avatar_url} alt={`${currentCandidate.username}`} />
            <div className='card-body'>
                <h3>{currentCandidate.name}</h3>
                <p>{currentCandidate.company}</p>
                <p>{currentCandidate.location}</p>
                <a href={currentCandidate.html_url}>Github Profile</a>
                {isSavedCandidate ? (
                    <button onClick={(e) => removeCandidate!(e)}>Remove</button>
                ) : (
                    <button onClick={addNewCandidate!}><BsPlusCircleFill style={{backgroundColor: 'red', }}/></button>
                )}
            </div>
        </div>
    );
}
export default CandidateCard;
// export default CandidateCard;