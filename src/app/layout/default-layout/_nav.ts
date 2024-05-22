import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Modulos'
  },
  {
    name: 'Customers',
    url: '/customers',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Publications',
    url: '/publications',
    iconComponent: { name: 'cil-dollar' }
  }

];
