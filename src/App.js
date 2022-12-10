
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let [data, setData] = useState(null);

  let [access, setAccess] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => {
        // console.log(json);
        const sortedData = data.results.sort((a, b) => a.name.first.localeCompare(b.name.first));
        // console.log(sortedData);
    setData(sortedData);
      });
      
  }, []);


 
  return (
    <>
    <h1 className="flex flex-col justify-items-center space-y-10">
      <h1 className='text-center text-3xl font-bold  text-red-800'></h1>
      {!access ? <p className='text-center my-4 text-3xl font-thin'>CLICK ON THE BUTTON BELOW TO SEE DATA</p> : <p className='text-center my-4 text-3xl font-thin'>Refresh to fetch new data</p> }
       <button className='border-1 text-white font-mono border-black bg-gradient-to-r from-black to-gray-600 rounded-full p-3 mx-auto ' onClick={() => {setAccess(true)}}>Fetch Data</button>
  </h1>

     <div>
      {access &&
      <table className='border-2 border-white ml-10 mt-24  mr-44' > 
      <tr className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
        <th className='border-[2px] rounded-md border-white text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5'>Name</th>
        <th className='border-[2px] border-l-0 text-white rounded-md border-white px-3'>Age</th>
        <th className='border-2  rounded-md text-white border-white '>Email</th>
        <th className='border-2  rounded-md text-white border-white '>Location</th>
        <th className='border-2  rounded-md text-white border-white '>Phone.NO</th>
        <th className='border-2  rounded-md text-white border-white px-5'>Image</th>
        <th className='border-2  rounded-md text-white border-white '>UserName</th>
        <th className='border-2  rounded-md text-white border-white '>Gender</th>
      </tr>
     {access ? (
        <>
          
          <> {data.map((elem,key) => {
           
           
           return(<>
          
           <tr className='transition ease-in-out delay-75 bg-blue-500 hover:-translate-y-2 hover:scale-110 hover:cursor-pointer hover:bg-pink-500 duration-300 text-white font-semibold border-[1px] border-white'>
           <td className='flex flex-row gap-x-2   w-full  border-white pl-10'>
            <p className='' >{elem.name.title}.</p>
           <p>{elem.name.first}</p>
           <p>{elem.name.last}</p>
           </td>
           <td className=' border-white w-auto border-[1px] border-l-1'>
            <p className='text-center'>{elem.dob.age}</p> 
           </td>
           <td className=' border-white w-auto border-[1px] border-l-0'>
            <p className='text-center mx-2'>{elem.email}</p> 
           </td>
           <td className='flex flex-row w-full py-10 px-5  border-[1px] border-l-0 border-r-0 border-y-0  border-white'>
           <p className='text-center '>{elem.location.street.number}</p>
           <p className='text-center '>,{elem.location.street.name}</p>

            <p className='text-center '>,{elem.location.city}</p>
            <p className='text-center '>,{elem.location.country}</p>
           </td>
           <td className='w-auto p-10 border-[1px] border-l-1  border-white'>
            <p>{elem.phone},{elem.cell}</p> 
         
           </td>
           <td className='w-full h-full'>
            <img src={elem.picture.large} alt="" className='' />
           </td>
           <td className='w-auto p-10 border-[1px] border-l-1  border-white'>
           <p>{elem.login.username}</p>
           </td>
           <td className='w-auto p-10 border-[1px] border-l-1  border-white'>
            <p>{elem.gender}</p>
           </td>
           
           </tr>
           </>)
          })}</>
          
          <p>{}</p>
          </>
       
      ) : (
        <p className='text-center text-2xl'></p>
      )}
      </table>
}
     </div>

  </>
  );
}

export default App;
