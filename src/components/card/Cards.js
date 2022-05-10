import Card from "./Card";
const Cards = ({ items, type }) => {
  return items.map((item, index) => (
    <Card content={item} key={index} type={type} />
  ));
};
export default Cards;
