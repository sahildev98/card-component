function Card(props) {
  return (
    <section className="Card-component">
      <img src={props.img} />
      <p>{props.name} </p>
      <p>{props.author}</p>
      <p>{props.publishDate}</p>
    </section>
  );
}

export default Card;
