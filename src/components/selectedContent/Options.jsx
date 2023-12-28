import "./styles.css";
const Options = ({ options, activeItem, changeCurItem, selectTitle }) => {
  return (
    <div>
      <p className="h3 p-3 text-center">{selectTitle}</p>
      <select
        className="form-select my-3 w-50 text-center"
        id="year-select"
        value={activeItem}
        onChange={(e) => changeCurItem(e.target.value)}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Options;
