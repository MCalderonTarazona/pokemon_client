import React from 'react';
import style from './Search.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBroom } from '@fortawesome/free-solid-svg-icons';
import { filter, group, order } from '../../redux/Actions/actions';

const Search = ({onSearch}) => {

  let [data, setData] = useState ({
    type: "id",
    text: ""
  });

  const dispatch = useDispatch();
  const {filterTypes, filterGroup, filterOrder, text}  = useSelector(state => state);

  useEffect(() => {
    setData({...data,text:text});
  }, [text]);

  const handleFilter = (types) => {
    filterTypes.includes(types) ? filterTypes.splice(filterTypes.indexOf(types), 1) : filterTypes.push(types)
    dispatch(filter(filterTypes));
    dispatch(order(filterOrder));
  };

  const handleGroup = (groups) => {
    if (filterGroup === groups) return false
    setData({...data,text:""});
    onSearch({...data,type:"name",text:""})
    dispatch(group(groups));
  };

  const handleOrder = (orderBy) => {
    dispatch(order(orderBy));
  };

  const handleChange = (event) => {
      setData({...data,[event.target.name]:event.target.value});
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
                        <div className = {style.glassSearch} onClick={()=>handleFilter()}><FontAwesomeIcon icon={faBroom} /></div>
                        <div className = {style.blockSearchComplete}>
                            <div className={`${style.blockSearchButton} ${filterGroup.includes("attack") ? style.blockSearchButtonActive : ""}`} onClick={() => handleGroup("attack")}>Attack</div>
                            <div className={`${style.blockSearchButton} ${filterGroup.includes("name") ? style.blockSearchButtonActive : ""}`} onClick={() => handleGroup("name")}>Name</div>
                            <div className={`${style.blockSearchButton} ${filterGroup.includes("id") ? style.blockSearchButtonActive : ""}`} onClick={() => handleGroup("id")}>ID</div>
                            <input type='text' name="text" maxlength="25" size="40" onChange={handleChange} value={data.text} />
                            <div className={style.glassSearch} onClick={()=>{onSearch({...data,type:filterGroup});setData({type:data.type,text:data.text})}} ><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        </div>
                      </div>
                      {(filterGroup === "name" || filterGroup === "attack" || (text === "" && filterGroup === "id" ))
                      ?<div className = {style.blockFilter}>
                        <div className={style.blockCol}>
                          <div className={`${style.blockRow1} ${filterTypes.includes("bug") ? style.selected : ""}`} onClick={() => handleFilter("bug")}>Bug</div>
                          <div className={`${style.blockRow6} ${filterTypes.includes("fighting") ? style.selected : ""}`} onClick={() => handleFilter("fighting")}>Fighting</div>
                          <div className={`${style.blockRow11} ${filterTypes.includes("ground") ? style.selected : ""}`} onClick={() => handleFilter("ground")}>Ground</div>
                          <div className={`${style.blockRow16} ${filterTypes.includes("rock") ? style.selected : ""}`} onClick={() => handleFilter("rock")}>Rock</div>
                        </div>
                        <div className = {style.blockCol}>
                          <div className={`${style.blockRow2} ${filterTypes.includes("dark") ? style.selected : ""}`} onClick={() => handleFilter("dark")}>Dark</div>
                          <div className={`${style.blockRow7} ${filterTypes.includes("fire") ? style.selected : ""}`} onClick={() => handleFilter("fire")}>Fire</div>
                          <div className={`${style.blockRow12} ${filterTypes.includes("ice") ? style.selected : ""}`} onClick={() => handleFilter("ice")}>Ice</div>
                          <div className={`${style.blockRow17} ${filterTypes.includes("steel") ? style.selected : ""}`} onClick={() => handleFilter("steel")}>Steel</div>
                        </div>
                        <div className = {style.blockCol}>
                          <div className={`${style.blockRow3} ${filterTypes.includes("dragon") ? style.selected : ""}`} onClick={() => handleFilter("dragon")}>Dragon</div>
                          <div className={`${style.blockRow8} ${filterTypes.includes("flying") ? style.selected : ""}`} onClick={() => handleFilter("flying")}>Flying</div>
                          <div className={`${style.blockRow13} ${filterTypes.includes("normal") ? style.selected : ""}`} onClick={() => handleFilter("normal")}>Normal</div>
                          <div className={`${style.blockRow18} ${filterTypes.includes("water") ? style.selected : ""}`} onClick={() => handleFilter("water")}>Water</div>
                        </div>
                        <div className = {style.blockCol}>
                          <div className={`${style.blockRow4} ${filterTypes.includes("electric") ? style.selected : ""}`} onClick={() => handleFilter("electric")}>Electric</div>
                          <div className={`${style.blockRow9} ${filterTypes.includes("ghost") ? style.selected : ""}`} onClick={() => handleFilter("ghost")}>Ghost</div>
                          <div className={`${style.blockRow14} ${filterTypes.includes("poison") ? style.selected : ""}`} onClick={() => handleFilter("poison")}>Poison</div>
                          <div className={`${style.blockRow19} ${filterTypes.includes("unknown") ? style.selected : ""}`} onClick={() => handleFilter("unknown")}>Unknown</div>
                        </div>
                        <div className = {style.blockCol}>
                          <div className={`${style.blockRow5} ${filterTypes.includes("fairy") ? style.selected : ""}`} onClick={() => handleFilter("fairy")}>Fairy</div>
                          <div className={`${style.blockRow10} ${filterTypes.includes("grass") ? style.selected : ""}`} onClick={() => handleFilter("grass")}>Grass</div>
                          <div className={`${style.blockRow15} ${filterTypes.includes("psychic") ? style.selected : ""}`} onClick={() => handleFilter("psychic")}>Psychic</div>
                          <div className={`${style.blockRow20} ${filterTypes.includes("shadow") ? style.selected : ""}`} onClick={() => handleFilter("shadow")}>Shadow</div>
                        </div>
                      </div>
                    : <div className = {style.blockMap}>mapa</div>
                    }
                    </div>
                    {(filterGroup === "name" || filterGroup === "attack" || (text === "" && filterGroup === "id" ))
                    ?<div className = {style.blockOrder}>
                      <div className={`${style.blockOrderButtom} ${filterOrder.includes("A") ? style.blockOrderButtomActive : ""}`} onClick={() => handleOrder("A")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>  
                      </div>
                      <div className={`${style.blockOrderButtom} ${filterOrder.includes("D") ? style.blockOrderButtomActive : ""}`} onClick={() => handleOrder("D")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                      </div>
                     </div>
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