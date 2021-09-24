
import './App.css';
import Dropdown from './component/dropdown';
import React, { useState } from 'react';
import Tablecomponent from './component/table';

function App() {
  const [dataFromdropDown, setdataFromdropDown] = useState({})
  const parrentCallBack = (value) => {
    if (value) {
      setdataFromdropDown(value)
    }
    else {
      setdataFromdropDown({})
    }

  }


  return (
    <div className="container">
      <div className="main_wrapper">
        <div className="dropdown_wrapper">
          <Dropdown parrentCallBack={parrentCallBack} />
        </div>
        <div className="table_wrapper">
          {
            Object.keys(dataFromdropDown).length > 0 ?
              <Tablecomponent dataFromdropDown={dataFromdropDown} />
              :
              null
          }
        </div>
      </div>

    </div>
  );
}

export default App;
