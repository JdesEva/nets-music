/**
 * 路由配置规则
 */

import Loadable from 'react-loadable'

import Loading from '../components/Loading'

import asyncImport from '../components/asyncImport'

/**
 * 按需加载路由文件
 * 
 */

const Home = asyncImport(() => import(/* webpackChunkName: "Home" */ '../views/Home'))
const Discover = asyncImport(() => import(/* webpackChunkName: "Home" */ '../views/Discover'))
const My = Loadable({ loader: () => import('../views/My'), loading: Loading })
const Friend = Loadable({ loader: () => import('../views/Friend'), loading: Loading })
const Mall = Loadable({ loader: () => import('../views/Mall'), loading: Loading })
const Musician = Loadable({ loader: () => import('../views/Musician'), loading: Loading })
const Download = Loadable({ loader: () => import('../views/Download'), loading: Loading })
const Found = asyncImport(() => import(/* webpackChunkName: "Home" */ '../views/Found'))
const Toplist = Loadable({ loader: () => import('../views/Toplist'), loading: Loading })
const Playlist = Loadable({ loader: () => import('../views/Playlist'), loading: Loading })
const Djradio = Loadable({ loader: () => import('../views/Djradio'), loading: Loading })
const Singer = Loadable({ loader: () => import('../views/Singer'), loading: Loading })
const Album = Loadable({ loader: () => import('../views/Album'), loading: Loading })
const ErrorPage = Loadable({ loader: () => import('../views/Error'), loading: Loading })


const routes = [{
    path: '/',
    exact: true,
    component: Home,
    children: [{
        path: '/discover',
        component: Discover,
        children: [{
            path: '/discover/found',
            component: Found
        }, {
            path: '/discover/toplist',
            comment: Toplist
        }, {
            path: '/discover/playlist',
            component: Playlist
        }, {
            path: '/discover/djradio',
            component: Djradio
        }, {
            path: '/discover/singer',
            component: Singer
        }, {
            path: '/discover/album',
            component: Album
        }, {
            path: '*',
            component: ErrorPage
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
    }, {
        path: '*',
        component: ErrorPage
    }]
}]


export default routes