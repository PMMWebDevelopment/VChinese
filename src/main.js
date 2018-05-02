// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
    MdButton,
    MdTabs,
    MdField,
    MdChips,
    MdRipple,
    MdRadio
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueResource from 'vue-resource';
import VueFire from "vuefire";
import Vuex from "vuex";
import 'es6-promise/auto';
import firebase from 'firebase';
import App from './App';
import firebaseApp from './firebase';
import router from './router';
import store from "./datatransfer/store";
import WritingHSKPage from './components/WritingLessons/WritingHSKPage';
import CharacterPage from "./components/WritingLessons/CharacterPage";

Vue.config.productionTip = false;
Vue.use(MdButton);
Vue.use(MdTabs);
Vue.use(MdField);
Vue.use(MdChips);
Vue.use(MdRipple);
Vue.use(MdRadio);
Vue.use(VueResource);
Vue.use(VueFire);
Vue.use(Vuex);
Vue.use(firebaseApp);

let app;
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            store,
            el: "#app",
            router,
            firebaseApp,
            components: { App, WritingHSKPage, CharacterPage },
            template: "<App/>"
        });
    }
});