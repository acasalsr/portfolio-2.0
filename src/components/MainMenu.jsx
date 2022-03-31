import { Link } from "react-router-dom";

// Main Menu Open/Close
/*const [open, setOpen] = useState(false);*/

export default function MainMenu() {
  return (
    <>
      {/* burger Menu */}
      <div className="burger-main-menu">
        <img
          src={process.env.PUBLIC_URL + "/img/burger-menu.svg"}
          alt="burgerMenu"
        />
      </div>

      {/* Main Menu */}
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
    </>
  );
}
