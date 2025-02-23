import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { BsPlusCircleFill } from "react-icons/bs";
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    html_url: '',
    company: '',
    avatar_url: ''
});
const addGithubUser = () => {
  //ONCE I ADDED IT, I WANT IT TO GO BLANK. ONCES ACTION IS DONE RESET THE STATE.
let newCadidate: Candidate[] = [];
const storeNewCandidate = localStorage.getItem('newCandidate');
if (storeNewCandidate === 'string') {
  newCadidate = JSON.parse(storeNewCandidate);
}
newCadidate.push(candidate);
localStorage.setItem('newCandidate', JSON.stringify(newCadidate));
}

  return <h1>CandidateSearch</h1>;
  <div className='table'>

  </div>
};

export default CandidateSearch;




// const CandidateSearch = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCandidate, setSelectedCandidate] = useState({});

//   useEffect(() => {
//     searchGithub().then((data) => {
//       setCandidates(data);
//     });
//   }, []);

//   const handleSearch = async () => {
//     const data = await searchGithubUser(searchTerm);
//     setSelectedCandidate(data);
//   };