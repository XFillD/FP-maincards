import "./maincard.css";

function MainCard(props) {
  
  return (
    <div className="card">
      <div className="card__body">
        <img className={props.img} />
        <h1 className="card__title">{props.title}</h1>
        <div className="card__circle">
        <h1 className="card__number">{props.number}</h1>
        </div>
      </div>
      <button className="card__btn">Go To List</button>
    </div>
  );
}

export default MainCard;
