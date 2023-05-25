'use client';
import Link from 'next/link';
import {useState,useEffect} from 'react';
function Members(){
  let [books,setBooks]=useState(null);
// Function to collect data
const getApiData = async () => {
  const response = await fetch(
    "http://localhost:3000/api/books"
  ).then((response) => response.json());

  // update the state
  setBooks(response);
};
useEffect(() => {
  getApiData();
}, []);
return <>

<h1>Hello</h1>
{books &&
   books.map(book => <p><Link href={`/Members/${book.pid}`}>{book.name}</Link></p>)}
</>
}
export default Members;