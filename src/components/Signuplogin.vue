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

  export default {
    name: 'Signuplogin',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      register(event) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            // this.getToken();
            alert(`Account created for ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          (err) => {
            alert(err.message);
          })
        event.preventDefault();
      },
      login(event) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.getBookmarks();
            alert(`${user.email} logged in`);
            this.$router.go({ path: this.$router.path });
          },
          (err) => {
            alert(err.message);
          });
        event.preventDefault();
      },
      getBookmarks() {
        firebase.auth().currentUser.getIdToken().then((idToken) => {
          this.$http.get(`https://vchinese-pmm.firebaseio.com/bookmarks.json?auth=${idToken}&orderBy="user"&equalTo="${this.currentUser}"`).then((response) => {
          console.log(response);
          this.usersBookmarkId = Object.keys(response.body)[0];
          this.usersBookmarkName = response.body[this.usersBookmarkId].bookmark;
          console.log(this.usersBookmarkName);
          this.$store.commit('setBookmarkedGrammarPoint', this.usersBookmarkName);
        },
          (err) => {
            this.userHasBookmark = false;
            console.log(err.message);
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
