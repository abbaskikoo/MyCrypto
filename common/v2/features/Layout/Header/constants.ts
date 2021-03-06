import { ROUTE_PATHS } from 'v2/config';
import { translateRaw } from 'v2/translations';

import dashboardIcon from 'common/assets/images/icn-dashboard.svg';

export const links = [
  {
    title: 'Dashboard',
    to: ROUTE_PATHS.DASHBOARD.path,
    icon: { src: dashboardIcon, width: '16px', height: '12px' }
  },
  {
    title: 'Manage Assets',
    subItems: [
      {
        to: ROUTE_PATHS.SEND.path,
        title: translateRaw('SEND')
      },
      {
        to: ROUTE_PATHS.REQUEST_ASSETS.path,
        title: translateRaw('REQUEST')
      },
      {
        to: ROUTE_PATHS.SWAP.path,
        title: translateRaw('SWAP')
      }
    ]
  },
  {
    title: 'Tools',
    subItems: [
      {
        to: ROUTE_PATHS.SIGN_MESSAGE.path,
        title: 'Sign Message'
      },
      {
        to: ROUTE_PATHS.VERIFY_MESSAGE.path,
        title: 'Verify Message'
      },
      {
        to: ROUTE_PATHS.BROADCAST_TX.path,
        title: 'Broadcast Transaction'
      },
      {
        to: ROUTE_PATHS.INTERACT_WITH_CONTRACTS.path,
        title: 'Interact with Contracts'
      },
      {
        to: ROUTE_PATHS.DEPLOY_CONTRACTS.path,
        title: 'Deploy Contracts'
      },
      {
        to: '/helpers',
        title: 'Helpers'
      }
    ]
  },
  {
    title: 'Settings',
    to: ROUTE_PATHS.SETTINGS.path
  }
];
