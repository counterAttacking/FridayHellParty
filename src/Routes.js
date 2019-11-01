import MainView from './views/MainView';
import MemberRegisterView from './views/MemberRegisterView';
import LoginView from './views/LoginView';
import TicketingView1 from './views/TicketingView1';
import TicketingView2 from './views/TicketingView2';
import TicketingView3 from './views/TicketingView3';

const routes = [
  {
    id: 'main',
    path: '/',
    exact: true,
    component: MainView,
    },
    {
        id: 'memberRegister',
        path: '/MemberRegisterView',
        exact: true,
        component: MemberRegisterView,
    },
    {
        id: 'login',
        path: '/LoginView',
        exact: true,
        component: LoginView,
    },
    {
        id: 'ticket1',
        path: '/TicketingView1',
        exact: true,
        component: TicketingView1,
    },
    {
        id: 'ticket2',
        path: '/TicketingView2',
        exact: true,
        component: TicketingView2,
    },
    {
        id: 'ticket3',
        path: '/TicketingView3',
        exact: true,
        component: TicketingView3,
    },
];

export default routes;
