import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;
  return (
    <div id='nav'>
      <h3>
        <Link to="/"
        className={currentPage === '/' ? 'active' : 'link'}>
          Home
        </Link>
      </h3>
      <h3>
        <Link
          to="/potentialcandidates"
          className={currentPage === '/savedcandidates' ? 'active' : 'link'}>
          Potential Candidates
        </Link>
      </h3>
    </div>
  )
};

export default Nav;
