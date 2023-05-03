import React from 'react';
import style from './Search.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBroom } from '@fortawesome/free-solid-svg-icons';

const Search = ({onSearch}) => {

  let [data, setData] = useState ({
    type: "1",
    text: ""
  });

  const handleChange = (event,option) => {
    if(event){
      setData({...data,[event.target.name]:event.target.value});
    } else {
      setData({...data,type:option})
    }
    
  }

  return (
    <>
    <div className = {style.containerSearch}>
        <div className = {style.containerLeft}></div>
        <div className = {style.containerCont}>
            <div className = {style.containerScreenExt} >
                <div className = {style.containerScreenInt}>
                    <div className = {style.containerFilter}>
                      <div className = {style.blockSearch}>
                        <div className = {style.glassSearch} ><FontAwesomeIcon icon={faBroom} /></div>
                        <div className = {style.blockSearchComplete}>
                            { data.type === "1"
                            ? <div className = {style.blockSearchButtonActive} onClick={()=>handleChange(false,"1")}> Name </div>
                            : <div className = {style.blockSearchButton} onClick={()=>handleChange(false,"1")}> Name </div>
                            }
                            { data.type === "2"
                            ? <div className = {style.blockSearchButtonActive} onClick={()=>handleChange(false,"2")}> Id </div>
                            : <div className = {style.blockSearchButton} onClick={()=>handleChange(false,"2")}> Id </div>
                            }
                            <input type='text' name="text" maxlength="25" size="40" onChange={handleChange} value={data.text} />
                            <div className={style.glassSearch} onClick={()=>{onSearch(data);setData({type:data.type,text:""})}} ><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        </div>
                      </div>
                      {data.type === "1"
                      ?<div className = {style.blockFilter}>
                        <div className = {style.blockCol}>
                          <div className = {style.blockRow1}>Bug</div>
                          <div className = {style.blockRow6}>Fighting</div>
                          <div className = {style.blockRow11}>Ground</div>
                          <div className = {style.blockRow16}>Rock</div>
                        </div>
                        <div className = {style.blockCol}>
                          <div className = {style.blockRow2}>Dark</div>
                          <div className = {style.blockRow7}>Fire</div>
                          <div className = {style.blockRow12}>Ice</div>
                          <div className = {style.blockRow17}>Steel</div>
                        </div>
                        <div className = {style.blockCol}>
                          <div className = {style.blockRow3}>Dragon</div>
                          <div className = {style.blockRow8}>Flying</div>
                          <div className = {style.blockRow13}>Normal</div>
                          <div className = {style.blockRow18}>Water</div>
                        </div>
                        <div className = {style.blockCol}>
                          <div className = {style.blockRow4}>Electric</div>
                          <div className = {style.blockRow9}>Ghost</div>
                          <div className = {style.blockRow14}>Poison</div>
                          <div className = {style.blockRow19}>Unknown</div>
                        </div>
                        <div className = {style.blockCol}>
                          <div className = {style.blockRow5}>Fairy</div>
                          <div className = {style.blockRow10}>Grass</div>
                          <div className = {style.blockRow15}>Psychic</div>
                          <div className = {style.blockRow20}>Shadow</div>
                        </div>
                      </div>
                    : <div className = {style.blockMap}>mapa</div>
                    }
                    </div>
                    {data.type === "1"
                    ?<div className = {style.blockOrder}></div>
                    :<div></div>
                    }
                </div>
            </div>
        </div>
        <div className = {style.containerRight}></div>
    </div>
    </>
  );
}

export default Search;