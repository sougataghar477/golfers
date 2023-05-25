'use client';
import {useState,useEffect} from 'react'
 import Link from 'next/link';
import MemberInput from "../../../components/MemberInput";
function ID({params}){
// Store list of all users
const [books, setBooks] = useState();
  
    useEffect(() => {
// Function to collect data
const getApiData = async () => {
  const response = await fetch(
    "http://localhost:3000/api/books"
  ).then((response) => response.json());
console.log(response)
const filteredData=response.filter(book => book.pid === Number(params.id));
console.log(filteredData)
  // update the state
  setBooks(filteredData);
};
getApiData();
  
    }, []);
    return <>
<Link href={'/Members'}>Members</Link>
<h1>Welcome member {params.id}</h1>
{books && <MemberInput page={'member'} data={books[0]}/>}


    </>
}
export default ID;