import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        loginStatus: false,
        loggedInUser: '',
        chosenWritingLevel: 1,
        chosenCharacter: [],
        chosenGrammarLevel: 1,
        chosenGrammarPoint: [],
        selectedWritingPage: 1,
        selectedGrammarPage: 1,
        bookmarkedGrammarPoint: null,
        usersBookmarkID: '',
    },
    getters: {
        currentLoginStatus: state => state.loginStatus,
        currentUser: state => state.loggedInUser,
        currentWritingLevel: state => state.chosenWritingLevel,
        currentCharacter: state => state.chosenCharacter,
        currentGrammarLevel: state => state.chosenGrammarLevel,
        currentGrammarPoint: state => state.chosenGrammarPoint,
        currentWritingPage: state => state.selectedWritingPage,
        currentGrammarPage: state => state.selectedGrammarPage,
        currentGrammarBookmark: state => state.bookmarkedGrammarPoint,
        currentUsersBookmarkID: state => state.usersBookmarkID,
    },
    mutations: {
        changeLoginStatus(state, payload) {
            state.loginStatus = payload;
        },
        changeUserName(state, payload) {
            state.loggedInUser = payload;
        },
        changeWritingLevel(state, payload) {
            state.chosenWritingLevel = payload;
        },
        changeCharacter(state, payload) {
            state.chosenCharacter = payload;
        },
        changeGrammarLevel(state, payload) {
            state.chosenGrammarLevel = payload;
        },
        changeGrammarPoint(state, payload) {
            state.chosenGrammarPoint = payload;
        },
        changeWritingPage(state, payload) {
            state.selectedWritingPage = payload;
        },
        changeGrammarPage(state, payload) {
            state.selectedGrammarPage = payload;
        },
        setBookmarkedGrammarPoint(state, payload) {
            state.bookmarkedGrammarPoint = payload;
        },
        changeUsersBookmarkID(state, payload) {
            state.usersBookmarkID = payload;
        }
    }
});

export default store;