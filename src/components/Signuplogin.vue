<template>
  <div id='signuplogin' class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-50">
      <md-field md-clearable>
        <label>Your e-mail address</label>
        <md-input v-model='email' type='email' placeholder='E-mail address'></md-input>
      </md-field>
      <md-field>
        <label>Your password</label>
        <md-input v-model='password' type="password" placeholder='Password'></md-input>
      </md-field>
      <div class='md-layout'>
        <div class='md-layout-item'>
          <md-button @click='register' class="md-primary">Sign up</md-button>
        </div>
        <div class='md-layout-item'>
          <md-button @click='login' class="md-primary">Log in</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
import { mapGetters } from 'vuex';

  export default {
    name: 'Signuplogin',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
        ...mapGetters(
        [
          'loggedInUser'
        ]
      ),
    },
    methods: {
      register(event) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((response) => {
            this.$store.commit('changeUserName', response.email);
            this.$store.commit('changeLoginStatus', true);
            alert(`Account created for ${this.email}`);
            this.clear();
            this.$router.push({ path: '/' });
          },
          (err) => {
            alert(err.message);
            this.clear();
          });
        event.preventDefault();
      },
      clear() {
        this.email = '';
        this.password = '';
      },
      login(event) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((response) => {
            this.getBookmarks();
            this.$store.commit('changeUserName', response.email);
            this.$store.commit('changeLoginStatus', true);
            alert(`${this.email} logged in`);
            this.clear();
            this.$router.push({ path: '/' });
          },
          (err) => {
            alert(err.message);
            this.clear();
          });
        event.preventDefault();
      },
      getBookmarks() {
        firebase.auth().currentUser.getIdToken().then((idToken) => {
          this.$http.get(`https://vchinese-pmm.firebaseio.com/bookmarks.json?auth=${idToken}&orderBy="user"&equalTo="${this.$store.state.loggedInUser}"`).then((response) => {
          this.usersBookmarkID = Object.keys(response.body)[0];
          this.usersBookmarkedLessonNumber = response.body[this.usersBookmarkID].bookmark;
          this.$store.commit('setBookmarkedGrammarPoint', this.usersBookmarkedLessonNumber);
          this.$store.commit('changeUsersBookmarkID', this.usersBookmarkID);
        },
          (err) => {
            alert(err.message);
          });
        });
      }
    }
  }
</script>

<style scoped>

  #signuplogin {
    min-height: 80vh;
  }

  .md-layout-item {
    padding: 20px;
    text-align: center;
    background-color: white;
  }

</style>
