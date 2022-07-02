import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Gallery from './Gallery';

const apiKey="636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [search,setSearch] =useState('');
  const [data, setData] =useState([]);

  const changeHandler=(e)=>{
    setSearch(e.target.value);
  }
  const submitHandler =(e)=>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=20&format=json&nojsoncallback=1`)
    .then((response)=>{setData(response.data.photos.photo)})
    console.log(search);
  }
  return (
    <center>
      <h2>Gallery Snaps</h2>
      <form onSubmit={submitHandler}>
        <input size="30" type="text" value={search} onChange={changeHandler} /> <br/>
        <input type="submit" name="Search"/>
      </form>
      <br/>
      {data.length>=1?<Gallery data={data} /> : "Search Here Man!!"}
    </center>
  );
}

export default App;
