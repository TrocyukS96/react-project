
import './Btn.css';

function Btn(props) {
  return (
    <button className="btn" style={props.style} >{props.text}</button>
  );
}

export default Btn;
