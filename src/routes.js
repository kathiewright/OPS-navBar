import Home from './components/Home.vue'
//admin components
import Account from './components/admin/Account.vue';
import AdminDash from './components/admin/Dashboard.vue';
import System from './components/admin/System.vue';
import Users from './components/admin/Users.vue';
//sampler components
import SamplerDash from './components/sampler/Dashboard.vue';
import Calendar from './components/sampler/Calendar.vue';
import Completed from './components/sampler/ClosedTasks.vue';
import Containers from './components/sampler/Containers.vue';
import Current from './components/sampler/OpenTasks.vue';
import Map from './components/sampler/Map.vue';

export const routes = [
    { path: '/home', component: Home },    
    //admin paths
    { path: '/admin/account', name: 'adminAccount', component: Account },
    { path: '/admin/dash', name: 'adminDash', component: AdminDash },
    { path: '/admin/system', name: 'system', component: System },
    { path: '/admin/users', name: 'users', component: Users },

    //sampler paths
    { path: '/sampler/dash', name: 'samplerDash', component: SamplerDash },
    { path: '/sampler/calendar', name: 'samplerCalendar', component: Calendar },
    { path: '/sampler/completed', name: 'closedTasks', component: Completed },
    { path: '/sampler/containers', name: 'containers', component: Containers },
    { path: '/sampler/current', name: 'openTasks', component: Current },
    { path: '/sampler/map', name: 'samplerMap', component: Map }

];