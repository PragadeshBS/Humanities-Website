const Document = () => {
  return (
    <div className="col-2">
      <a href="static/docs/annualReport/report2019-20.pdf" download>
        <button
          className="btn btn-outline-primary"
          type="submit"
          style={{ verticalAlign: "center", textAlign: "center" }}
        >
          <i className="fa fa-download" aria-hidden="true"></i>
        </button>
      </a>
    </div>
  );
};
export default Document;
