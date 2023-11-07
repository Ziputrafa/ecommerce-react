import { useContext } from 'react';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import { Context } from '../../context/context';

const SidebarToggle = () => {
  const { setIsSidebarShow } = useContext(Context);

  const showSidebar = () => {
    setIsSidebarShow((prev) => !prev);
  };

  return (
    <button onClick={showSidebar} className="py-1 px-2 desktop:hidden">
      <img src={hamburgerIcon} />
    </button>
  );
};

export default SidebarToggle;
