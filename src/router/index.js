import Home from '../views/Home'
import Discover from '../views/Discover'
import My from '../views/My'
import Friend from '../views/Friend'
import Mall from '../views/Mall'
import Musician from '../views/Musician'
import Download from '../views/Download'
import Found from '../views/Found'
import Toplist from '../views/Toplist'
import Playlist from '../views/Playlist'
import Djradio from '../views/Djradio'
import Singer from '../views/Singer'
import Album from '../views/Album'


const routes = [{
    path: '/',
    exact: true,
    component: Home,
    children: [{
        path: '/discover',
        component: Discover,
        children: [{
            path:'/discover/found',
            component:Found
        },{
            path:'/discover/toplist',
            comment: Toplist
        },{
            path:'/discover/playlist',
            component:Playlist
        },{
            path:'/discover/djradio',
            component:Djradio
        },{
            path:'/discover/singer',
            component:Singer
        },{
            path:'/discover/album',
            component:Album
        }]
    }, {
        path: '/my',
        component: My
    }, {
        path: '/friend',
        component: Friend
    }, {
        path: '/mall',
        comment: Mall
    }, {
        path: '/musician',
        component: Musician
    }, {
        path: '/download',
        component: Download
    }]
}]


export default routes