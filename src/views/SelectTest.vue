<template>
  <div class="container w-1/4 mx-auto">
    <h1 class="title">
      Test
    </h1>
    <multiselect
      v-model="selectedCategory"
      :options="categories" 
    >
    </multiselect>

    <button 
      class="button bg-blue" 
      type="button" 
      @click="startTest" 
    >
      Start
    </button>
  </div>
</template>

<script>
import Question from "../components/Question.vue"
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Question, Multiselect
  },
  data() {
    return {
      words: JSON.parse(localStorage.getItem("words")) || [],
      isDone: false,
      index: 0,
      showFinishButton: false,
      selectedCategory: '',
      categories: JSON.parse(localStorage.getItem("categories")) || []
    };
  },
  methods: {
    startTest () {
      this.$router.push({
        name: 'test', 
        params: { category: this.selectedCategory }
      })
    }
  },
  computed: {
    filteredWords () {
      return this.words.filter(word => {
        return word.categories.includes(this.selectedCategory)
      })
    }
  }
};
</script>

<style scoped>
.container {
  @apply flex flex-col mx-auto;
}

.title {
  @apply my-4;
}

.button {
  @apply my-2 px-4 py-2 text-white block bg-blue no-underline;
}

.label {
  @apply text-left p-4;
}
</style>
