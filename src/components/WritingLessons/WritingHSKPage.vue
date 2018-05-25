 <template>
  <div id='writing' class="md-layout md-alignment-top-center">
    <div class='md-layout-item md-gutter md-size-95'>
      <!-- eslint-disable-next-line -->
      <div class="md-display-3">Writing {{ this.chosenWritingSection }} - Page {{ this.selectedWritingPage }} </div>
    </div>
    <div id='character-buttons-container' class='md-layout-item md-layout md-size-95'>
      <app-loader v-if='loading'></app-loader>
    <!-- eslint-disable-next-line -->
      <md-chip class="md-accent" md-clickable v-for='(character, index) in this.charactersThisPage' :key='index' @click='goToCharacterPage(character)'><b>{{ character[0] }} <i>{{ character[2] }}</i></b></md-chip>
    </div>
    <div id='radio-panel' v-for='page in this.numberOfPages' :key='page'>
      <!-- eslint-disable-next-line -->
      <md-radio v-if='page === selectedWritingPage' :value="false" @change='changePage(page)'>Page {{ page }}</md-radio>
      <!-- eslint-disable-next-line -->
      <md-radio v-else :value="true" @change='changePage(page)'>Page {{ page }}</md-radio>
    </div>
  </div>
</template>

<script>
  import CharacterPage from '@/components/WritingLessons/CharacterPage';
  import { mapGetters } from 'vuex';
  import Loader from '../Loader';

  export default {
    name: 'WritingHSKPage',
    computed: {
      ...mapGetters([
      'currentWritingLevel',
      'currentWritingPage'
      ])
    },
    data() {
      return {
        numberOfPages: 1,
        charactersThisSection: [],
        charactersThisPage: [],
        startIdThisSection: Number,
        endIdThisSection: Number,
        startIdThisPage: Number,
        endIdThisPage: Number,
        character: [],
        loading: false
      }
    },
    components: {
      characterPage: CharacterPage,
      appLoader: Loader
    },
    created() {
      this.chosenWritingSection = this.$store.getters.currentWritingLevel;
      this.getCharacters();
    },
    methods: {
      //  mapActions() {
      //   'changeCharacter'
      // },
      changePage(page) {
        this.loading = true;
        this.selectedWritingPage = page;
        this.$store.commit('changeWritingPage', page);
        console.log(this.selectedWritingPage);
        console.log(this.charactersThisSection);
        console.log(this.numberOfPages);
        this.charactersThisPage = [];
        this.setCharactersThisPage();
        this.loading = false;
      },
      getCharacters() {
        this.loading = true;
        this.selectedWritingPage = this.$store.getters.currentWritingPage;
        console.log(this.chosenWritingSection);
        this.$http.get(`https://vchinese-pmm.firebaseio.com/writing.json?orderBy="hsk"&equalTo=${this.chosenWritingSection}`).then((response) => {
          this.charactersThisSection = response.body;
          console.log(this.charactersThisSection);
          this.numberOfPages = Math.ceil((Object.keys(response.body).length) / 100);
          this.setCharactersThisPage();
          this.loading = false;
        });
      },
      setCharactersThisPage() {
        this.setLimitIdsThisSection();
        // eslint-disable-next-line
        this.startIdThisPage = Math.floor(((this.selectedWritingPage - 1) * 100) + this.startIdThisSection);
        // eslint-disable-next-line
        this.endIdThisPage = (this.startIdThisPage + 99) > (this.endIdThisSection) ? this.endIdThisSection : (this.startIdThisPage + 99);
        console.log('End ID: ', this.endIdThisPage);
        for (let i = this.startIdThisPage; i <= this.endIdThisPage; i += 1) {
          // eslint-disable-next-line
          this.character = [this.charactersThisSection[i].hanzi, this.charactersThisSection[i].meaning, this.charactersThisSection[i].pinyin];
          // eslint-disable-next-line
          this.charactersThisPage.push(this.character);
        }
      },
      setLimitIdsThisSection() {
        switch (this.chosenWritingSection) {
          case 1:
            this.startIdThisSection = 0;
            this.endIdThisSection = 173;
            break;
          case 2:
            this.startIdThisSection = 174;
            this.endIdThisSection = 346;
            break;
          case 3:
            this.startIdThisSection = 347;
            this.endIdThisSection = 616;
            break;
          case 4:
            this.startIdThisSection = 617;
            this.endIdThisSection = 1063;
            break;
          case 5:
            this.startIdThisSection = 1064;
            this.endIdThisSection = 1684;
            break;
          case 6:
            this.startIdThisSection = 1685;
            this.endIdThisSection = 2662;
            break;
          default:
            break;
        }
      },
      goToCharacterPage(character) {
        this.$router.push(
          {
            path: '/characterpage',
          }
        );
        this.$store.commit('changeCharacter', character);
      }
    }
  }
</script>

<style scoped>

  .md-display-3 {
    text-shadow: 1px 1px 1px black;
    color: yellow;
    font-weight: bold;
    margin-bottom: 20px;
  }

  #character-buttons-container {
    background-color: rgba(255, 0, 0, 0.25);
    margin: 10px 20px;
    min-height: 60vh;
    display: inline-block;
  }

  .md-chip {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 24px;
  }

  #radio-panel {
    background-color: white;
    color: black;
    padding: 0 10px;
    font-weight: bold;
  }

</style>
