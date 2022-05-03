import "./styles.css";
const Tabs = ({ tabItems, activeItem, changeCurItem }) => {
  return (
    <div>
      <p className="h3 p-3 text-center">Year of admission</p>
      <select className="form-select my-3 w-50 text-center" id="year-select"
        value={activeItem}
        onChange={(e) => changeCurItem(e.target.value)}
      >
        {tabItems.map((item, index) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Tabs;
