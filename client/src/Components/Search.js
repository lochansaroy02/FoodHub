import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MdOutlineSearch } from "react-icons/md";


const Search = () => {
    const data = useSelector((store) => store.restro.resdata);
    let onlineData = data[1].card.card.gridElements.infoWithStyle.restaurants;
    let topRestro = data[4].card.card.gridElements.infoWithStyle.restaurants;
    const RestroData = [...onlineData,...topRestro];
    const [input, setInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    

  return (
    <div className='flex  justify-center'>
    <div className="sm:m-4 m-4 flex items-center">
        <input
            className="border w-96 h-10 rounded-full text-white pl-4 border-gray-300 bg-neutral-900"
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button
            className="text-2xl p-1 rounded-full m-4 bg-zinc-600"
            onClick={() => {
                const filterData = RestroData.filter((rest) =>
                    rest.info.name.toLowerCase().includes(input.toLowerCase())
                );
                setFilteredData(filterData);
            }}
        >
            <h2 className="font-open text-white"> <MdOutlineSearch /> </h2>
        </button>
    </div>

    </div>
  )
}

export default Search