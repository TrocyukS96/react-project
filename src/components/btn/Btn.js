
import s from './Btn.module.scss';


function Btn(props) {
  return (
    <button className={s.btn} style={props.style} >{props.text}</button>
  );
}

export default Btn;
