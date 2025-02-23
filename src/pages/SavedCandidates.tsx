import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";
//I'M BRINGING USEEFFECT BECAUSE THERE IS A CLICK EVENT THAT WILL TRIGGER A STATE CHANGE SO I HAVE TO PREVENT DEFAULT BEHAVIOR
const SavedCandidates = () => {

  const [savedCandidate, setSavedCandidate] = useState([]);
  const removeCandidate = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
     
  }
  useEffect(() => {
 const storedCandidate: Candidate[] = JSON.parse(localStorage.getItem('NEWCANDIDATE') as string);

    setSavedCandidate(storedCandidate as any);
  }
    , []);
  return (
    <>
      <h1>Potential Candidates</h1>
      <section className="table">
        <tr>

        </tr>

      </section>
    </>
  );
};

export default SavedCandidates;
