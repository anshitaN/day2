function Card(props)
{
  return(
    <div className="container">
    
    <div className="card-elements">
      <img className="card-img" src={props.image} alt="" />
      <h3 className="card-title">{props.title}</h3>
      <h5 className="card-subtitle">{props.subtitle}</h5>
      <p className="card-desc">{props.desc}</p>
      <button className="card-btn">Read The Book</button>
    </div>
   
    </div>
  );
}
export default Card;