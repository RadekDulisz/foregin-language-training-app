<template>
  <div class="container w-1/4 mx-auto">
    <Question
      v-if="!isDone"
      :word="currentWord" 
      @submit-answer="saveAnswer"
    />

    <div v-if="isDone">
      <h1 class="text-green">Your score {{ score }} / {{ filteredWords.length }}</h1>

      <!-- Tutaj lista z wynikami -->
      <ul class="list-reset">
        <div v-for="(word, index) in filteredWords" class="flex flex-row">
          <p class="box bg-orange">
            <span v-for="category in word.categories">
              {{ category }}
            </span>
          </p>
          <p class="box bg-blue">
            {{ word.pl }}
          </p>
          <p class="box bg-black">
            {{ word.en }}
          </p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Question from "../components/Question.vue"

export default {
  components: {
    Question
  },
  data() {
    return {
      words: JSON.parse(localStorage.getItem("words")) || [],
      answers: [],
      isDone: false,
      index: 0,
      showFinishButton: false,
      selectedCategory: '',
      categories: JSON.parse(localStorage.getItem("categories")) || [],
      score: 0
    };
  },
  methods: {
    increaseIndex() {
      if (this.index < this.filteredWords.length - 1) {
        this.index++;
        if (this.index === this.filteredWords.length - 1) {
          this.showFinishButton = true;
        }
      }
    },
    saveAnswer (answer) {
      this.answers.push(answer)

      if (this.index === this.filteredWords.length - 1) {
        this.calculateScore()
        this.isDone = true
      } else {
        this.increaseIndex()
      }
    },
    calculateScore () {
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i] === this.filteredWords[i].en) {
          this.score++
        }
      }
    }
  },
  computed: {
    filteredWords () {
      return this.words.filter(word => {
        return word.categories.includes(this.$route.params.category)
      })
    },
    currentWord () {
      return this.filteredWords[this.index]
    }
  }
}
</script>

<style scoped>
.container {
  @apply flex flex-col mx-auto;
}

.title {
  @apply my-4;
}

.button {
  @apply my-2 px-4 py-2 text-white block no-underline;
}

.label {
  @apply text-left p-4;
}

.box {
  @apply block w-32 mb-2 p-2 text-white;
}
</style>

