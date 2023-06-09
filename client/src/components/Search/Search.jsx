import React from 'react';
import style from './Search.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filter, group, order, source } from '../../redux/Actions/actions';

const Search = ({onSearch}) => {

  let [data, setData] = useState ({
    type: "id",
    text: ""
  });

  const dispatch = useDispatch();
  const {filterTypes, filterGroup, filterOrder, text, filterSource}  = useSelector(state => state);

  useEffect(() => {
    setData({...data,text:text});
  }, [text]);

  const handleFilter = (types) => {
    filterTypes.includes(types) ? filterTypes.splice(filterTypes.indexOf(types), 1) : filterTypes.push(types)
    dispatch(source(filterSource));
    //dispatch(filter(filterTypes));
    dispatch(order(filterOrder));
  };

  const handleGroup = (groups) => {
    if (filterGroup === groups) return false
    setData({...data,text:""});
    onSearch({...data,type:"name",text:""});
    dispatch(group(groups));
    //dispatch(source(filterSource));
  };

  const handleOrder = (orderBy) => {
    dispatch(order(orderBy));
  };

  const handleChange = (event) => {
    setData({...data,[event.target.name]:event.target.value});
  }

  const handleSource = (origin) => {
    dispatch(source(origin));
    dispatch(order(filterOrder));
  };

  const handleClean = async () => {
    await onSearch({...data,type:"name",text:""})
    dispatch(filter([]));
    dispatch(group("id"));
    dispatch(order("A"));
    dispatch(source("all"));
    setData({...data,text:""});
  };

  return (
    <>
    <div className = {style.containerSearch}>
        <div className = {style.containerLeft}></div>
        <div className = {style.containerCont}>
            <div className = {style.containerScreenExt} >
                <div className = {style.containerScreenInt}>
                    <div className = {style.containerFilter}>
                      <div className = {style.blockSearch}>
                        <div className = {style.clean} onClick={()=>handleClean()}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"/></svg>
                        </div>
                        <div className = {style.blockSearchComplete}>
                            <div className={`${style.blockSearchButton} ${filterGroup.includes("attack") ? style.blockSearchButtonActive : ""}`} onClick={() => handleGroup("attack")}>Attack</div>
                            <div className={`${style.blockSearchButton} ${filterGroup.includes("name") ? style.blockSearchButtonActive : ""}`} onClick={() => handleGroup("name")}>Name</div>
                            <div className={`${style.blockSearchButton} ${filterGroup.includes("id") ? style.blockSearchButtonActive : ""}`} onClick={() => handleGroup("id")}>ID</div>
                            {filterGroup !== "attack"
                            ?<>
                              <input type='text' name="text" maxlength="25" size="40" onChange={handleChange} value={data.text} />
                              <div className={style.glassSearch} onClick={()=>{onSearch({...data,type:filterGroup});setData({type:data.type,text:data.text})}} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div>
                            </>
                            :
                            <div></div>
                            }                      
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
                    : <div className = {style.blockMap}></div>
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
                      <div className = {style.blockSource}>
                        <div className={`${style.blockSourceAll} ${filterSource.includes("all") ? style.blockSourceActive : ""}`} onClick={() => handleSource("all")}>ALL</div>
                        <div className = {style.blockSourceOrigin}>
                          <div className={`${style.api} ${filterSource.includes("api") ? style.blockSourceActiveSvg : ""}`} onClick={() => handleSource("api")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>
                          </div>
                          <div>&nbsp;</div>
                          <div className={`${style.database} ${filterSource.includes("db") ? style.blockSourceActiveSvg : ""}`} onClick={() => handleSource("db")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
                          </div>
                        </div>
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