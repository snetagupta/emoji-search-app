
import './App.css';
import React, { useState } from 'react';
import emojiData from './emojis.json';


const App = () => {
  const [search,setSearch] = useState('');
  
  const filteredEmojis = emojiData.filter((emoji)=>(emoji.name.includes(search )));
  
  const handleSearchChange = (event)=>{
    setSearch(event.target.value);
  };
  

  return (
 <div className='bg-teal-100 h-screen'>
    <div className="text-center  space-y-7">
      <h1 className='text-3xl pt-12'>Emoji search</h1>
      <input className='border-2 border-gray-500 w-80 p-2'
      type="text" placeholder="Search emoji here" name="search" value={search}
      onChange={handleSearchChange}/>
      <div className='m-2'>
       {search ? filteredEmojis.map((emoji) => <div className='border-2 rounded-md border-gray-500 w-20 p-1 m-auto mt-4 bg-white' >{emoji.emoji}</div>) : ""}
       </div>
    </div>
    </div>
  );
};

export default App;
