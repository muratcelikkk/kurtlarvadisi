import React, { useState } from "react";
import './App.css';
import Data from './Data.json';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='container'>
      <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
      <div className='inputContainer'>
        <input className='search' type="text" placeholder="Konsey Üyesi Giriniz..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
      <div className='dataContainer'>
        {
          Data
          .filter((val) => val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || searchTerm === "")
          .map((val) => {
              return (
                <div className="data" key={val.id}>

                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p>{val.Description}</p>

                </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;