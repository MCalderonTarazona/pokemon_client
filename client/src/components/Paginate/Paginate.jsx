import React from "react";
import style from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/Actions/actions";

export default function Paginate({ cantPages, cantResult }) {
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
          <div className={style.containerPaginateButton} onClick={prev}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
          </div>
        </div>
      ) : null}

      <div className={style.containerContent}>{cantResult} results | Page {numPage} / {cantPages}</div>

      {numPage < cantPages ? (
        <div className={style.containerPaginateNext}>
          <div className={style.containerPaginateButton} onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
          </div>
        </div>
      ) : null}
    </div>
  );
}