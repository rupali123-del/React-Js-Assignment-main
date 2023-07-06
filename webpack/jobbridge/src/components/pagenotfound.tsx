import "./pagenotfound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className=" back">
      <div className="row">
        <div className="span12">
          <div className="hero-unit center">
            <h1>
              Page Not Found <br></br>
            </h1>

            <br />
            <img
              alt="Not found"
              className="img-thumbnail"
              src="/assets//pagenf.png"
            />
            <br />
            <p>
              <br />
              The page you requested could not be found, either contact your
              webmaster or try again. Use your browsers <b>Back</b> button to
              navigate to the page you have previously come from
            </p>
           
            <p>
              <b>Or you could just press this neat little button:</b>
            </p>
           <Link to="/" className="btn btn-danger btn-large">
              <i className="icon-share icon-white"></i> Take Me Home...
            </Link>
          </div>
          <br />
          <br />
          <div className="thumbnail">
            <center>
              <h2>You have landed to some wrong place!!!</h2>
            </center>
          </div>
             <br />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
