import { useContext } from 'react';
import { Context } from '../context/context';
import MenuList from '../pages/menu/MenuList';
import closeIcon from '../assets/icons/close.svg';

const Aside = () => {
  const { isSidebarShow, setIsSidebarShow } = useContext(Context);

  const showSidebar = () => {
    setIsSidebarShow((prev) => !prev);
  };

  return (
    <aside className={`${isSidebarShow ? '' : 'tablet:hidden'} h-screen grid justify-center sticky top-0`}>
      <button className={`tablet:absolute tablet:top-5 tablet:right-5 desktop:hidden`} onClick={showSidebar}>
        <img alt="close button" src={closeIcon} />
      </button>
      <h1 className="font-extrabold text-3xl row-span-1 self-center">
        <span className="text-amber-300 ">Zuper</span> Shop
      </h1>
      <MenuList />
    </aside>
  );
};

export default Aside;
