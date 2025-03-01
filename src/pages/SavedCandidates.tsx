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
  const removeCandidate = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    //delete the selected row frOm the candidate array IN LOCAL STORAGE: either with the login or some other value:  maybe using a filter method
    // const newCandidates = candidates.filter((candidate: Candidate) => candidate.login !== candidate.login)
     localStorage.removeItem('candidate');

    //set the candidates state back to the new array of candidates : USE SETCANIDADTE TO SET THE NEW ARRAY OF CANDIDATES
    setCandidates(candidates);

  }
  const tableRow = candidates.map((candidate: Candidate) => { 
    return(
      <tr>
      <td><img src={candidate.avatar_url as string} alt={candidate.login as string} /></td>
      <td>{candidate.login}</td>
      <td>{candidate.location}</td>
      <td>{candidate.email}</td>
      <td>{candidate.company}</td>
      <td>{candidate.bio}</td>
      <td><button onClick={removeCandidate}><FcCancel /></button></td>
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




