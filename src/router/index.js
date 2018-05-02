import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from '@/components/Home';
import About from '@/components/About';
import Grammar from '@/components/Grammar';
import Writing from '@/components/Writing';
import Signuplogin from '@/components/Signuplogin';
import GrammarHSKPage from '@/components/GrammarLessons/GrammarHSKPage';
import WritingHSKPage from "@/components/WritingLessons/WritingHSKPage";
import CharacterPage from "@/components/WritingLessons/CharacterPage";
import GrammarPointPage from "@/components/GrammarLessons/GrammarPointPage";

Vue.use(Router);

const router = new Router({
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
            component: Signuplogin,
            meta: {
                requiresGuest: true
            }
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