import SearchBar from '../pages/search bar/SearchBar';
import SidebarToggle from '../pages/menu/SidebarToggle';
import funnelIcon from '../assets/icons/funnel.svg';
import cartIcon from '../assets/icons/cart.svg';
import { useNavigate } from 'react-router-dom';

const NAV_BUTTON_STYLE = 'desktop:after:bg-zinc-200 desktop:after:px-2 desktop:after:rounded-md desktop:after:font-thin desktop:after:opacity-75 desktop:after:absolute desktop:after:top-8 desktop:after:left-0 py-1 px-2';

const Header = () => {
  const navigate = useNavigate(null);

  return (
    <header className="bg-slate-100 w-full py-10 pr-20 phone:pr-0 phone:py-3 flex gap-2 justify-end items-center phone:justify-center sticky top-0 z-50">
      <SidebarToggle />
      <SearchBar />
      <section className="flex gap-1 justify-end phone:justify-center relative">
        <button onClick={() => navigate('/Filter')} className={`desktop:hover:after:content-['Filter'] ${NAV_BUTTON_STYLE}`}>
          <img alt="filter button" src={funnelIcon} />
        </button>
        <button onClick={() => navigate('/Cart')} className={`desktop:hover:after:content-['Cart'] ${NAV_BUTTON_STYLE}`}>
          <img alt="cart button" src={cartIcon} />
        </button>
      </section>
    </header>
  );
};

export default Header;
