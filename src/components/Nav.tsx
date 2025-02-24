import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;
  return (
    <div className='nav'>
      <h3 className='nav-item'>
        <Link to="/"
        className={currentPage === '/' ? 'active' : 'link'}>
          Home
        </Link>
      </h3>
      <h3>
        <Link
          to="/savedcandidates"
          className={currentPage === '/savedcandidates' ? 'active' : 'link'}>
          Potential Candidates
        </Link>
      </h3>
    </div>
  )
};

export default Nav;
