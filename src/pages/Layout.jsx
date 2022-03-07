import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="container-medium padding-horizontal padding-medium">
        <nav className="main-menu padding-horizontal padding-medium">
          <ul>
            <li className="div-link">
              <Link to="/">Home</Link>
            </li>
            <li className="div-link">
              <Link to="/ux-design">UX Design</Link>
            </li>
            <li className="div-link">
              <Link to="/webflow">Webflow</Link>
            </li>
            <li className="div-link">
              <Link to="/react">React</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
