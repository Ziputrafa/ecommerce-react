import home from '../assets/icons/home.svg';
import info from '../assets/icons/info.svg';
import code from '../assets/icons/code.svg';

export const sidebarMenu = [
  {
    id: 0,
    name: 'Home',
    navigateTo: '',
    icon: home,
  },
  {
    id: 1,
    name: 'About',
    navigateTo: 'About',
    icon: info,
  },
  {
    id: 2,
    name: 'Developer',
    navigateTo: 'Developer',
    icon: code,
  },
];
