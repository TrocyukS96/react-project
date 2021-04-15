
import s from './BtnSearch.module.scss';

function BtnSearch(props) {
  return (
    <button className={s.btnSearch}>{props.btnName}</button>

  );
}

export default BtnSearch;
