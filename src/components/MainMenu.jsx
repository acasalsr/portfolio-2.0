import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <div className="container-medium padding-horizontal padding-medium">
      <nav className="main-menu padding-horizontal padding-medium">
        <li>
          <div>
            <Link className="div-link" to="/">
              Home
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="div-link" to="/ux-design">
              UX Design
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="div-link" to="/webflow">
              Webflow
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="div-link" to="/react">
              React
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="div-link" id="custom-buttom" to="/contact">
              Contact me
            </Link>
          </div>
        </li>
      </nav>
    </div>
  );
}
