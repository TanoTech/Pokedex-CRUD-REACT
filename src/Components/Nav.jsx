import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/firstgeneration">First generation</Link>
        </li>
        <li>
          <Link to="/secondgeneration">Second generation</Link>
        </li>
        <li>
          <Link to="/thirdgeneration">Third generation</Link>
        </li>
        <li>
          <Link to="/fourthgeneration">Fourth generation</Link>
        </li>
        <li>
          <Link to="/fifthgeneration">Fifth generation</Link>
        </li>
        <li>
          <Link to="/sixthgeneration">Sixth generation</Link>
        </li>
        <li>
          <Link to="/seventhgeneration">Seventh generation</Link>
        </li>
        <li>
          <Link to="/eighthgeneration">Eighth generation</Link>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;