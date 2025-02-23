import Candidate from '../interfaces/Candidate.interface';


type CandidateCardProps = {
    currentCandidate: Candidate;
}

const CandidateCard = ({ currentCandidate }: CandidateCardProps) => {
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