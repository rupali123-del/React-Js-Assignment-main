import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      
      <div className="container bg-danger">
      <br></br>
      <br></br>
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
          <br></br>
          <br></br>
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="http://localhost:3000/#">
                  <i className="fa fa-angle-double-right"></i>Home
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/#">
                  <i className="fa fa-angle-double-right"></i>About
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/#">
                  <i className="fa fa-angle-double-right"></i>FAQ
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/#">
                  <i className="fa fa-angle-double-right"></i>Get Started
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/#">
                  <i className="fa fa-angle-double-right"></i>Videos
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
          <br></br>
      <br></br>
            <h5>About Us</h5>

            <div>
              We will help you to reach your dreams within less time span
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
          <br></br>
      <br></br>
            <h5>Conatct Us</h5>
            Contact us on +97457676777
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="http://localhost:3000/#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://localhost:3000/#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://localhost:3000/#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://localhost:3000/#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://localhost:3000/#" target="blank">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a href="https://www.nationaltransaction.com/">
                  www.jobbridge.in
                </a>
              </u>{" "}
              is a Registered organisation of India
            </p>
            <p className="h6">
              © All right Reversed.
              <a
                className="text-green ml-2"
                href="http://localhost:3000/#"
                target="blank"
              >
                JobBridge
              </a>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
