<template>
  <div>
    <div id='grammar-point-container'>
      <div id='grammar-point' class='md-layout'>
        <!-- eslint-disable-next-line -->
        <div id='grammar-point-title' class='md-layout-item'>{{ $store.state.chosenGrammarPoint[0] }}</div>
      </div>
      <div v-if='loading'><app-loader></app-loader></div>
      <div v-else class='md-layout'>
        <div class='md-layout-item' id='grammar-point-explanation' v-html='this.commentary'>
        </div>
        <div class='md-layout-item' id='grammar-point-examples' v-html='this.examples'>
        </div>
      </div>
    </div>
    <!-- eslint-disable-next-line -->
    <md-button class="md-raised md-accent" to='/grammarhskpage'>Go back to list of grammar points</md-button>
    <!-- eslint-disable-next-line -->
    <md-button v-if='$store.state.loggedInUser !== ""' class="md-raised md-accent" @click='setBookmark'>{{ this.$store.state.bookmarkedGrammarPoint === this.$store.state.chosenGrammarPoint[0] ? 'This grammar point is bookmarked' : 'Bookmark this grammar point' }}</md-button>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import { mapGetters } from 'vuex';
  import Loader from '../Loader';

  export default {
    name: 'GrammarPointPage',
    data() {
      return {
        commentary: '',
        examples: '',
        authToken: '',
        loading: false
      }
    },
    computed: {
      ...mapGetters(
        [
          'loggedInUser',
          'currentGrammarLevel'
        ]
      ),
      grammarPoint() {
        return this.$store.state.chosenGrammarPoint;
      },
      usersBookmarkID() {
        return this.$store.state.usersBookmarkID;
      },
      grammarBookmark() {
        return this.$store.state.bookmarkedGrammarPoint;
      }
    },
    components: {
      appLoader: Loader
    },
    methods: {
      getCommentaryAndExample() {
        this.loading = true;
        this.$http.get(`https://pastebin.com/raw/${this.$store.state.chosenGrammarPoint[1]}`).then((response) => {
          this.commentary = response.body;
        });
        this.$http.get(`https://pastebin.com/raw/${this.$store.state.chosenGrammarPoint[2]}`).then((response) => {
          this.examples = response.body;
        });
        this.loading = false;
      },
      setBookmark() {
        const bookmarkData = {
          user: this.$store.state.loggedInUser,
          bookmark: this.$store.state.chosenGrammarPoint[0]
        }
        firebase.auth().currentUser.getIdToken().then((idToken) => {
          if (this.$store.state.bookmarkedGrammarPoint !== null) {
            this.$store.commit('setBookmarkedGrammarPoint', this.$store.state.chosenGrammarPoint[0]);
            // if the user has a bookmark - update it
            this.$http.put(`https://vchinese-pmm.firebaseio.com/bookmarks/${this.$store.state.usersBookmarkId}.json?auth=${idToken}`, bookmarkData).then((response) => {
              alert(`You have bookmarked this grammar point: ${response.body.bookmark}`);
            });
          } else {
            this.$store.commit('setBookmarkedGrammarPoint', this.$store.state.chosenGrammarPoint[0]);
            // if the user doesn't have a bookmark - create one
            this.$http.post(`https://vchinese-pmm.firebaseio.com/bookmarks.json?auth=${idToken}`, bookmarkData).then((response) => {
              this.$store.commit('changeUsersBookmarkID', response.body.name);
              alert(`You have bookmarked this grammar point: ${response.body.bookmark}`);
            });
          }
        },
          (err) => {
            console.log(err.message);
          }
        );
      }
    },
    mounted() {
      this.getCommentaryAndExample();
    }
  }
</script>

<style>
  #grammar-point-container {
    text-align: center;
    min-height: 60vh;
    width: 95%;
    background-color: rgba(255, 0, 0, 0.5);
    margin: 0 auto;
  }


  #grammar-point-title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: yellow;
    text-shadow: 1px 1px 1px black;
    margin-top: 10px;
  }

  #grammar-point-explanation {
    text-align: left;
    font-size: 16px;
    color: yellow;
    margin-left: 10px;
  }

  #grammar-point-examples {
    background-color: rgba(255, 0, 0, 0.5);
    color: yellow;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 14px;
    width: 90%;
    text-align: left;
  }
</style>
