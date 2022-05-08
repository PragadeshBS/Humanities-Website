const Topheading = (props) => {
  return (
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
      >
        {props.data}
      </button>
    </h2>
  );
};
export default Topheading;
