import Card from "./Card";
const Cards = ({ items, type }) => {
  return (
    <div className="cards">
      {items.map((item, index) => (
        <Card content={item} key={index} type={type} />
      ))}
    </div>
  );
};
export default Cards;
