import annualReport from "./Applied_Science_Report_2019-2020.pdf";
const Document=()=>{
    return(
        <div className="col-2">
          <a href={annualReport} download>
          <button class="btn btn-outline-primary" type="submit" style={{verticalAlign:'center',textAlign:'center'}}><i class="fa fa-download" aria-hidden="true"></i></button>
          </a>
          </div>
    )
}
export default Document;