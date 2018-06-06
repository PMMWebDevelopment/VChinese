import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from '@/components/Home';
import About from '@/components/About';
import Grammar from '@/components/Grammar';
import Writing from '@/components/Writing';
import Signuplogin from '@/components/Signuplogin';
import Logout from '@/components/Logout';

const GrammarHSKPage = () =>
    import ( /* webpackChunkName: "grammarhskpage" */ '@/components/GrammarLessons/GrammarHSKPage');
const WritingHSKPage = () =>
    import ( /* webpackChunkName: "writinghskpage" */ '@/components/WritingLessons/WritingHSKPage');
const CharacterPage = () =>
    import ( /* webpackChunkName: "characterpage" */ '@/components/WritingLessons/CharacterPage');
const GrammarPointPage = () =>
    import ( /* webpackChunkName: "grammarpointpage" */ '@/components/GrammarLessons/GrammarPointPage');

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/grammar",
            name: "Grammar",
            component: Grammar
        },
        {
            path: "/writing",
            name: "Writing",
            component: Writing
        },
        {
            path: "/signuplogin",
            name: "Signuplogin",
            component: Signuplogin
        },
        {
            path: "/logout",
            name: "Logout",
            component: Logout
        },
        {
            path: "/writinghskpage",
            name: "WritingHSKPage",
            component: WritingHSKPage
        },
        {
            path: "/grammarhskpage",
            name: "GrammarHSKPage",
            component: GrammarHSKPage
        },
        {
            path: "/characterpage",
            name: "CharacterPage",
            component: CharacterPage
        },
        {
            path: "/grammarpointpage",
            name: "GrammarPointPage",
            component: GrammarPointPage
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresGuest)) {
        if (firebase.auth().currentUser) {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;