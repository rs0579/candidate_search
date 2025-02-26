import {Candidate} from '../interfaces/Candidate.interface';


type CandidateCardProps = {
    currentCandidate: Candidate;
}

const CandidateCard = ({ currentCandidate }: CandidateCardProps) => {
    return (
        <div className='card'>
            <img src={currentCandidate.avatar_url as string} alt={currentCandidate.username as string} />
            <div className='card-body'>
                <h3>{currentCandidate.login}</h3>
                <p>{currentCandidate.company ? currentCandidate.company : "Company not provided"}</p>
                <p>{currentCandidate.location ? currentCandidate.location : "Location not provided"}</p>
                <a href={currentCandidate.html_url as string}>Github Profile</a>
            </div>
        </div>
    );
}
export default CandidateCard;
// export default CandidateCard;