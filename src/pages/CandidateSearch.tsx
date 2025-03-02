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
    if (candidate.login) {
      const fullCandidate = await searchGithubUser(candidate.login);
      //wHAT DOES THE ABOVE DO: IT WILL SEARCH FOR A CANDIDATE USING ITS LOGIN AND RETURN THE FULL CANDIDATE OBJECT
      let newCadidates: Candidate[] = [];
      //WHAT DOES THE ABOVE DO: IT WILL CREATE A NEW ARRAY OF CANDIDATES FOR THE NEW CANDIDATES
      //THE CODE BELOW WILL CHECK IF THERE ARE ANY NEW CANDIDATES IN LOCAL STORAGE AND IF THERE ARE, IT WILL ADD THE NEW CANDIDATE TO THE ARRAY
      const storeNewCandidates = localStorage.getItem('newCandidates');
      if (storeNewCandidates) {
        newCadidates = JSON.parse(storeNewCandidates);
      }
      newCadidates.push(fullCandidate);
      //THE BELOW CODE WILL SAVE THE NEW CANDIDATES TO LOCAL STORAGE AS STATED ABOVE.
      localStorage.setItem('newCandidates', JSON.stringify(newCadidates));
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
      });
    } else {
      console.error('Candidate login is null or undefined');
    }
  }
//WHEN I click the "-" button THEN the next candidate's information should be displayed without saving the current candidate
const fetchNextCandidate = async () => {
  //THIS IS THE NEWEST FUNCTION THAT I CREATED. IT WILL FETCH THE NEXT CANDIDATE AND DISPLAY IT. iT WAS THE MISSING PIECE THAT I NEEDED TO MAKE THE MINUS BUTTON WORK
  try {
    const response = await searchGithub();
    if (response.length > 0) {
      setCandidate(response[0]);
    }
  } catch (error) {
    console.error('An error occurred while fetching the next candidate', error);
  }
}
//WHEN there are no candidates available to review THEN an appropriate message should be shown indicating no more candidates are available
if (candidate === null || candidate === undefined) {
  throw new Error('No more candidates available');
}

  return (
    <>
      <h1>CandidateSearch</h1>
      <div>
      {/* I'M PASSING THE CURRENT CANDIDATE TO THE CANDIDATE CARD COMPONENT TO DISPLAY THE CANDIDATE'S INFORMATION. ADDING THIS PROP IS ESSENTIAL BECAUSE WITHOUT IT, THE CANDIDATE CARD COMPONENT WILL NOT DISPLAY ANYTHING. CURRENTCADIDATE COMES FROM THE CANDIDATE CARD. */}
        <CandidateCard currentCandidate={candidate}/>

        <button onClick={fetchNextCandidate}> <HiMinusCircle /></button>
        <button onClick={addGithubUser}><BsPlusCircleFill /></button>
      </div>
    </>
  )
}

export default CandidateSearch;