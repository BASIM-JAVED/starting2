import React, { useState } from 'react';
import data from '../assests/data.json';



export default function Practice  ()  {
  const [numbers, setNumbers] = useState(data);

  function renderNumbers  ()  {
    return numbers.map((number) => (
        <div >
            <ul>
                <li key={number.id}>{number.task}</li>
                
            </ul>
        </div>)
    );
  };

  return (
    <div>
      <h1>Numbers:</h1>
      {renderNumbers()}
    </div>
  );
};

