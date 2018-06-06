 <template>
  <div id='grammar' class="md-layout md-alignment-top-center">
    <div class='md-layout-item md-gutter md-size-90'>
      <!-- eslint-disable-next-line -->
      <div class="md-display-3">Grammar {{ this.chosenGrammarSection }} - Part {{ this.selectedGrammarPage }}</div>
    </div>
    <div id='grammar-points-container' class='md-layout-item md-layout md-size-95'>
      <app-loader v-if='loading'></app-loader>
      <!-- eslint-disable-next-line -->
      <md-chip class="md-accent" md-clickable v-for='(grammarPoint, index) in this.grammarPointsThisPage' :key='index' @click='goToGrammarLesson(grammarPoint)'><b>{{ grammarPoint[0] }} <i class="badge" v-if="$store.state.bookmarkedGrammarPoint === grammarPoint[0]">B</i></b></md-chip>
    </div>
    <div id='radio-panel' v-for='page in this.numberOfPages' :key='page'>
      <!-- eslint-disable-next-line -->
      <md-radio v-if='page === selectedGrammarPage' :value="false" @change='changePage(page)'>Page {{ page }}</md-radio>
      <!-- eslint-disable-next-line -->
      <md-radio v-else :value="true" @change='changePage(page)'>Page {{ page }}</md-radio>
    </div>
    <!-- eslint-disable-next-line -->
    <span v-if='$store.state.bookmarkedGrammarPoint !== null' id='bookmarked'>(B) = bookmarked</span>
  </div>
</template>

<script>
  import GrammarPointPage from '@/components/GrammarLessons/GrammarPointPage';
  import { mapGetters } from 'vuex';
  import Loader from '../Loader';

  export default {
    name: 'GrammarHSKPage',
    computed: {
      ...mapGetters([
      'currentGrammarLevel',
      'currentGrammarPage',
      ]),
      grammarBookmark() {
        return this.$store.state.bookmarkedGrammarPoint;
      }
    },
    data() {
      return {
        numberOfPages: 1,
        grammarPointsThisSection: [],
        grammarPointsThisPage: [],
        startIdThisSection: Number,
        endIdThisSection: Number,
        startIdThisPage: Number,
        endIdThisPage: Number,
        grammarPoint: [],
        loading: false
      }
    },
    components: {
      grammarPointPage: GrammarPointPage,
      appLoader: Loader
    },
    created() {
      this.chosenGrammarSection = this.$store.getters.currentGrammarLevel;
      this.getGrammarPoints();
    },
    methods: {
      changePage(page) {
        this.loading = true;
        this.selectedGrammarPage = page;
        this.$store.commit('changeGrammarPage', page);
        this.grammarPointsThisPage = [];
        this.setGrammarPointsThisPage();
        this.loading = false;
      },
      getGrammarPoints() {
        this.loading = true;
        this.selectedGrammarPage = this.$store.getters.currentGrammarPage;
        this.$http.get(`https://vchinese-pmm.firebaseio.com/grammar.json?orderBy="hsk"&equalTo=${this.chosenGrammarSection}`).then((response) => {
          this.grammarPointsThisSection = response.body;
          this.numberOfPages = Math.ceil((Object.keys(response.body).length) / 25);
          this.setGrammarPointsThisPage();
          this.loading = false;
        });
      },
      setGrammarPointsThisPage() {
        this.setLimitIdsThisSection();
        // eslint-disable-next-line
        this.startIdThisPage = Math.floor(((this.selectedGrammarPage - 1) * 25) + this.startIdThisSection);
        // eslint-disable-next-line
        this.endIdThisPage = (this.startIdThisPage + 44) > (this.endIdThisSection) ? this.endIdThisSection : (this.startIdThisPage + 24);
        for (let i = this.startIdThisPage; i <= this.endIdThisPage; i += 1) {
          // eslint-disable-next-line
          this.grammarPoint = [this.grammarPointsThisSection[i].grammarpoint, this.grammarPointsThisSection[i].commentary, this.grammarPointsThisSection[i].examples];
          // eslint-disable-next-line
          this.grammarPointsThisPage.push(this.grammarPoint);
        }
      },
      setLimitIdsThisSection() {
        switch (this.chosenGrammarSection) {
          case 1:
            this.startIdThisSection = 0;
            this.endIdThisSection = 72;
            break;
          case 2:
            this.startIdThisSection = 73;
            this.endIdThisSection = 155;
            break;
          case 3:
            this.startIdThisSection = 156;
            this.endIdThisSection = 224;
            break;
          default:
            break;
        }
      },
      goToGrammarLesson(grammarPoint) {
        this.$router.push(
          {
            path: '/grammarpointpage',
          }
        );
        this.$store.commit('changeGrammarPoint', grammarPoint);
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

  #grammar-points-container {
    background-color: rgba(255, 0, 0, 0.25);
    margin: 10px 20px;
    min-height: 60vh;
    display: inline-block;
  }

  .md-chip {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

  #radio-panel {
    background-color: white;
    color: black;
    padding: 0 10px;
    font-weight: bold;
  }

  .badge {
    width: 10px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 0;
    background: blue;
    border-radius: 100%;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: -.05em;
  }

  #bookmarked {
    margin-top: 15px;
    margin-left: 10px;
    background-color: rgba(255, 0, 0, 0.25);
    color: yellow;
    font-weight: bold;
  }

</style>
