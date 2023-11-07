import { sidebarMenu } from '../../data/sidebarMenu';
import { useNavigate } from 'react-router-dom';

const MenuList = () => {
  const navigate = useNavigate();
  return (
    <nav className="row-span-5">
      {sidebarMenu.map((datum) => (
        <button onClick={() => navigate(`/${datum.navigateTo}`)} key={datum.id} className={'w-full flex gap-3 items-center hover:bg-zinc-200 px-3 py-1 rounded-lg'}>
          <img src={datum.icon} />
          <p>{datum.name}</p>
        </button>
      ))}
    </nav>
  );
};

export default MenuList;
