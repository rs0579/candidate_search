import react from 'react';
import Candidate from '../interfaces/Candidate.interface';
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";
import { searchGithubUser, searchGithub } from '../api/API';

type CandidateCardProps = {
    currentCandidate: Candidate;
    searchGithubUser?: (() => void) | null;
    searchGithub?: ((
        e: react.MouseEvent<HTMLButtonElement, MouseEvent>,    ) => void) | null;
}

const CandidateCard = ({ currentCandidate, searchGithubUser, searchGithub }: CandidateCardProps) => {
    return (
        <div className='card'>
            <img src={currentCandidate.avatar_url} alt={`${currentCandidate.username}`} />
            <div className='card-body'>
                <h3>{currentCandidate.name}</h3>
                <p>{currentCandidate.company}</p>
                <p>{currentCandidate.location}</p>
                <a href={currentCandidate.html_url}>Github Profile</a>
            </div>
        </div>
    );
}
export default CandidateCard;
// export default CandidateCard;