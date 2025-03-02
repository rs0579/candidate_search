import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";
import { FcCancel } from "react-icons/fc";
//I'M BRINGING USEEFFECT BECAUSE THERE IS A CLICK EVENT THAT WILL TRIGGER A STATE CHANGE SO I HAVE TO PREVENT DEFAULT BEHAVIOR
const SavedCandidates = () => {

  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      login: '',
      avatar_url: '',
      username: '',
      location: '',
      html_url: '',
      company: ''
    }
  ]);
  useEffect(() => {
    const storedCandidate: Candidate[] = JSON.parse(localStorage.getItem('newCandidates') as string);
    console.log(storedCandidate);
    setCandidates(storedCandidate as any);
  }
    , []);
    const removeCandidate = (login: string) => {
      // Filter out the candidate to be removed
      const newCandidates = candidates.filter((candidate: Candidate) => candidate.login !== login);
      
      // Update local storage with the new candidates array
      localStorage.setItem('newCandidates', JSON.stringify(newCandidates));
      
      // Set the candidates state to the new array of candidates
      setCandidates(newCandidates);
    }
  const tableRow = candidates.map((candidate: Candidate) => { 
    return(
      <tr>
      <td><img src={candidate.avatar_url as string} alt={candidate.login as string} /></td>
      <td>{candidate.login}</td>
      <td>{candidate.location}</td>
      <td className="email">{candidate.email}</td>
      <td>{candidate.company}</td>
      <td>{candidate.bio}</td>
      <td><button className="remove" onClick={() => removeCandidate(candidate.login as string )}><FcCancel /></button></td>
    </tr>
    )
  })
  return (
    <>
      <h1>Saved Candidates</h1>
      <table className="table">
        <tr>
          <th>Image</th>
          <th>Login</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Remove</th>
        </tr>
        {tableRow}
      </table>
    </>
  )
}

export default SavedCandidates;










{/* <img src={candidate[0].avatar_url as string} alt={candidate.login} />
          
<p>{candidate[0].login}</p>

<p>{candidate.location}</p>

<p>{candidate.email}</p>

<p>{candidate.company}</p>

<tbody></tbody>
<button onClick={() => removeCandidate}> <FcCancel /></button> */}












// const [candidate, setCandidate] = useState<Candidate[]>([]);
// const removeCandidate = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
//   e.preventDefault();
//   if (onSavedCandidate) {
//     let parsedCandidate: Candidate[] = []
//     const savedCadidate = localStorage.getItem('candidate');
//     if (typeof savedCadidate === 'string') { parsedCandidate = JSON.parse(savedCadidate) }
//      parsedCandidate = parsedCandidate.filter((candidate: Candidate) => candidate.login !== candidate.login);
//      setCandidate(parsedCandidate);
//      localStorage.setItem('candidate', JSON.stringify(parsedCandidate));
//   }

//   useEffect(() => {
//     const storedCandidate: Candidate[] = JSON.parse(localStorage.getItem('candidate') as string);
//     setCandidate(storedCandidate);
//   }
//     , []);




