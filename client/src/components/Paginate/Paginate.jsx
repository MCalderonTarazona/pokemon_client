import React from "react";
import style from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/Actions/actions";

export default function Paginate({ cantPages }) {
  const numPage = useSelector(state => state.numPage);
  const dispatch = useDispatch();
  
  function next() {
    dispatch(nextPage());
  }
  function prev() {
    dispatch(prevPage());
  }

  return (

    <div className={style.containerPaginate}>
      {numPage > 1 ? (
        <div className={style.containerPaginatePrev}>
          <button onClick={prev}>PREV</button>
        </div>
      ) : null}

      <div className={style.containerContent}>{numPage} Of {cantPages}</div>

      {numPage < cantPages ? (
        <div className={style.containerPaginateNext}>
          <button onClick={next}>NEXT</button>
        </div>
      ) : null}
    </div>
  );
}