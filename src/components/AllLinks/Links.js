import { Link } from 'react-router-dom';

const MyLink = () => (
  <>
    <ul className="linkholder">
      <li className="mylinks"><Link to="/">Bookstore</Link></li>
      <li className="mylinks"><Link to="/">Booklists</Link></li>
      <li className="mylinks"><Link to="/category">Categories</Link></li>
    </ul>
  </>
);

export default MyLink;
