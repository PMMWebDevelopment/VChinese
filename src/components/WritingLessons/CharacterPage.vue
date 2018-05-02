<template>
  <div>
    <div id='character-page-container'>
      <div id='character-page-headline'>
         <!-- eslint-disable-next-line -->
        {{ $store.state.chosenCharacter[0] }} <i>{{ $store.state.chosenCharacter[1] }}</i> - {{ $store.state.chosenCharacter[2] }}
      </div>
      <div id='character-displays' class='md-layout md-alignment-top-center'>
        <div id='character-stroke-order' class='md-layout-item md-alignment-top-center'>
          <h3>How to write this character: -</h3>
          <div id="character-target-div1"></div>
        </div>
        <div id='character-quiz' class='md-layout-item md-alignment-top-center'>
          <h3>Now you have a go: -</h3>
          <div id='character-target-div2'></div>
        </div>
      </div>
    </div>
    <!-- eslint-disable-next-line -->
    <md-button class="md-raised md-accent" to='/writinghskpage'>Go back to character list</md-button>
  </div>
</template>

<script>
  import HanziWriter from 'hanzi-writer';

  export default {
    name: 'CharacterPage',
    computed: {
      character() {
        return this.$store.state.chosenCharacter;
      }
    },
    methods: {
      strokeOrder(hanzi) {
        const demo = new HanziWriter('character-target-div1', hanzi, {
        width: 250,
        height: 250,
        padding: 10,
        outlineColor: '#ec3135',
        strokeColor: '#ffff00',
        delayBetweenLoops: 3000
        });
        demo.loopCharacterAnimation();
      },
      quiz(hanzi) {
        const quiz = new HanziWriter('character-target-div2', hanzi, {
        width: 250,
        height: 250,
        padding: 10,
        outlineColor: '#000000',
        drawingColor: '#ffff00',
        strokeColor: '#ffff00',
        });
        quiz.quiz();
      }
    },
    created() {
      console.log(this.$store.state.chosenCharacter);
      },
    mounted() {
      console.log(this.$store.state.chosenCharacter);
      this.strokeOrder(this.$store.state.chosenCharacter[0]);
      this.quiz(this.$store.state.chosenCharacter[0]);
    }
  }
</script>

<style>

#character-page-container {
  background-color: rgba(255, 0, 0, .75);
  min-height: 60vh;
  color: yellow;
  text-shadow: 1px 1px 1px black;
  font-weight: bold;
  text-align: center;
  width: 90%;
  margin: 0 auto;
}

#character-page-headline {
  padding: 10px;
  font-size: 24px;
  width: 100%;
}

#character-displays {
  /* background-color: black; */
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

#character-stroke-order,
#character-quiz {
  text-align: center;
  margin: 0;
  padding: 0;
  height: 450px;
}

#character-target-div1,
#character-target-div2 {
  text-align: center;
  height: 90%;
}
</style>
