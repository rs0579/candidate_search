import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { BsPlusCircleFill } from "react-icons/bs";
import {Candidate} from '../interfaces/Candidate.interface';
import CandidateCard from "../components/CandidateCard"
import { HiMinusCircle } from "react-icons/hi";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    name: '',
    avatar_url: '',
    username: '',
    location: '',
    html_url: '',
    company: ''
  });
  useEffect(() => {
    searchGithub().then((data) => {
      console.log(data);
      setCandidate(data)
    });
  }
    , []);
  const addGithubUser = async () => {
    //ONCE I ADDED IT, I WANT IT TO GO BLANK. ONCES ACTION IS DONE RESET THE STATE.
    //WHEN I click the "+" button THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed
    let newCadidate: Candidate[] = [];
    const storeNewCandidate = localStorage.getItem('newCandidate');
    if (storeNewCandidate === 'string') {
      newCadidate = JSON.parse(storeNewCandidate);
    }
    newCadidate.push(candidate);
    localStorage.setItem('newCandidate', JSON.stringify(newCadidate));
//SINCE I WANT THE ENTIRE INTERFACE TO BE RESET, I WILL RESET THE STATE TO THE INITIAL STATE
    setCandidate({
      name: '',
      avatar_url: '',
      username: '',
      location: '',
      html_url: '',
      company: ''
    })
  }
//WHEN I click the "-" button THEN the next candidate's information should be displayed without saving the current candidate

//WHEN there are no candidates available to review THEN an appropriate message should be shown indicating no more candidates are available
if (candidate === null || candidate === undefined) {
  throw new Error('No more candidates available');
}

  return (
    <>
      <h1>CandidateSearch</h1>
      <div>
        <CandidateCard currentCandidate={candidate}/>

        <button onClick={() => searchGithubUser}> <HiMinusCircle /></button>
        <button onClick={() => addGithubUser}><BsPlusCircleFill /></button>
      </div>
    </>
  )
}

export default CandidateSearch;







// import { useState, useEffect } from 'react';
// import { searchGithub } from '../api/API';
// import { BsPlusCircleFill } from "react-icons/bs";
// import { Candidate } from '../interfaces/Candidate.interface';
// import CandidateCard from "../components/CandidateCard";
// import { HiMinusCircle } from "react-icons/hi";

// const CandidateSearch = () => {
//   const [candidate, setCandidate] = useState<Candidate | null>(null);
//   const [noCandidates, setNoCandidates] = useState(false);

//   useEffect(() => {
//     const fetchCandidate = async () => {
//       const data = await searchGithub();
//       if (data) {
//         setCandidate(data);
//         setNoCandidates(false);
//       } else {
//         setNoCandidates(true);
//       }
//     };
//     fetchCandidate();
//   }, []);

//   const addGithubUser = async () => {
//     let newCandidate: Candidate[] = [];
//     const storedCandidates = localStorage.getItem('newCandidate');
//     if (storedCandidates) {
//       newCandidate = JSON.parse(storedCandidates);
//     }
//     newCandidate.push(candidate | null);
//     localStorage.setItem('newCandidate', JSON.stringify(newCandidate));
    
//     // Reset the candidate state
//     setCandidate(null);
//     // Fetch a new candidate after adding
//     const data = await searchGithub();
//     setCandidate(data);
//   };

//   const fetchNextCandidate = async () => {
//     const data = await searchGithub();
//     if (data) {
//       setCandidate(data);
//       setNoCandidates(false);
//     } else {
//       setNoCandidates(true);
//     }
//   };

//   return (
//     <>
//       <h1>Candidate Search</h1>
//       {noCandidates && <p>No more candidates available</p>}
//       {candidate && (
//         <div>
//           <CandidateCard currentCandidate={candidate} />
//           <button onClick={fetchNextCandidate}> <HiMinusCircle /> </button>
//           <button onClick={addGithubUser}> <BsPlusCircleFill /> </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default CandidateSearch