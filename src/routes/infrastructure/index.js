import { useEffect } from "react";
import "./infrastructure.css";
const Infrastructure = () => {
  useEffect(() => {
    document.title = "Infrastructure | Department of Applied Sciences & Humanities, MIT Campus, Anna University";
  }, []);
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <h1 className="display">INFRASTRUCTURE</h1>
              <h2 className="display mt-3">
                  PHYSICS LABORATORY
              </h2>
              <center>
                <div id="carouselExampleIndicators" className="carousel slide idivision" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="static/images/infrastructure/phy_Lab_1.jpg" className="img-fluid idivision" alt=".h."/>
                    </div>
                    <div className="carousel-item">
                      <img src="static/images/infrastructure/phy_Lab_2.jpg"  className="img-fluid idivision" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="static/images/infrastructure/phy_Lab_3.jpg"  className="img-fluid idivision" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="static/images/infrastructure/phy_Lab_4.jpg"  className="img-fluid idivision" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                </center>
              <h2 className="display mt-5">
                  CHEMISTRY LABORATORY
              </h2>
              <center>
                <div id="carouselExampleIndicators2" className="carousel slide idivision" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="static/images/infrastructure/che_Lab_1.jpg" className="img-fluid idivision" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="static/images/infrastructure/che_Lab_2.jpg"  className="img-fluid idivision" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="static/images/infrastructure/che_Lab_3.jpg"  className="img-fluid idivision" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                </center>
              <h2 className="display mt-5">
                  UV LABORATORY
              </h2><center>
                <div id="carouselExampleIndicators3" className="carousel slide idivision" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="static/images/infrastructure/uv_research.jpg" className="img-fluid idivision" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                </center>
              <h2 className="display mt-5">
                COMMUNICATION LABORATORY
              </h2>
              <center>
                <div id="carouselExampleIndicators4" className="carousel slide idivision" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="static/images/infrastructure/com_1.jpg" className="img-fluid idivision" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="static/images/infrastructure/com_2.jpg"  className="img-fluid idivision" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                </center>
              <h2 className="display mt-5">
                  COMPUTATIONAL MATHEMATICS LABORATORY
              </h2>
              <center>
                <div id="carouselExampleIndicators5" className="carousel slide idivision" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="static/images/infrastructure/com_mat_lab_1.jpeg" className="img-fluid idivision" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="static/images/infrastructure/com_mat_lab_2.jpeg"  className="img-fluid idivision" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                </center>
              <h2 className="display mt-5">
                  HIGH TEMPERATURE FURNACE LABORATORY
              </h2>
              <center>
                <div id="carouselExampleIndicators6" className="carousel slide idivision" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="static/images/infrastructure/High_Temp_Furnace_Lab.jpg" className="img-fluid idivision" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                </center>
        </div>
      </div>
    </div>
  )
}

export default Infrastructure
