import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";
//I'M BRINGING USEEFFECT BECAUSE THERE IS A CLICK EVENT THAT WILL TRIGGER A STATE CHANGE SO I HAVE TO PREVENT DEFAULT BEHAVIOR
const SavedCandidates = () => {

  const [candidate, setCandidate] = useState([]);
  useEffect(() => {
    const storedCandidate: Candidate[] = JSON.parse(localStorage.getItem('NEWCANDIDATE') as string);

    setCandidate(storedCandidate as any);
  }
    , []);
  const removeCandidate = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()

  }
  return (
    <>
      <h1>Potential Candidates</h1>
      <section className="table">
      </section>
    </>
  )
}

export default SavedCandidates;












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




