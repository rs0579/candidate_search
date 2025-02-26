import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { BsPlusCircleFill } from "react-icons/bs";
import {Candidate} from '../interfaces/Candidate.interface';
import CandidateCard from "../components/CandidateCard"
import { HiMinusCircle } from "react-icons/hi";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    login: '',
    avatar_url: '',
    username: '',
    location: '',
    html_url: '',
    company: ''
  });
  useEffect(() => {
    searchGithub().then((response) => {
      console.log(response);
      setCandidate(response[0])
    });
  }
    , []);
  const addGithubUser = async () => {
    console.log('test123');
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
      login: '',
      avatar_url: '',
      username: '',
      location: '',
      html_url: '',
      company: ''
    });
    searchGithub().then((response) => {
      console.log(response);
      setCandidate(response[0])
    }
    );
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

        <button onClick={() => searchGithubUser('rs0579')}> <HiMinusCircle /></button>
        <button onClick={addGithubUser}><BsPlusCircleFill /></button>
      </div>
    </>
  )
}

export default CandidateSearch;