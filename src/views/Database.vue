<template>
  <div class="container mx-auto w-1/4">
    <form 
      @submit.prevent="createWord" 
      class="flex flex-col"
    >
      <label 
        class="label"  
        for="pl"
      >
        PL
      </label>

      <input 
        class="input" 
        required id="pl" 
        v-model="word" 
        type="text" 
        placeholder="Put a polish word here"
      >

      <label 
        class="label" 
        for="en"
      >
        EN
      </label>

      <input 
        class="input" 
        required id="en" 
        v-model="translation" 
        type="text" 
        placeholder="Put english translation here"
      >

      <label 
        class="label"  
        for="category"
      >
        Category
      </label>

      <multiselect 
        v-model="selectedCategories" 
        :options="categories" 
        :multiple="true"
      >
      </multiselect>

      <button class="button bg-blue my-4">
        Add word
      </button>
    </form>

    <button 
        class="button bg-green"
        @click="saveWords"
      >
        Save words
    </button>

    <h1 class="mt-8 mb-4">
      Words database
    </h1>

    <div 
      class="pair items-center" 
      v-for="(word, index) in words"
    >
      <div class="word">
        {{ word.pl }}
      </div>

      <div class="word border-l border-r">
        {{ word.en }}
      </div>

      <div class="word">
        <span v-for="category in word.categories">
          {{ category }}
        </span>
      </div>

      <input 
        type="button" 
        class="remove" 
        value="X" 
        @click="removeWord(index)"
      >
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data() {
    return {
      message: "hello radek",
      words: JSON.parse(localStorage.getItem("words")) || [],
      categories: JSON.parse(localStorage.getItem("categories")) || [],
      word: "",
      translation: "",
      selectedCategories: []
    };
  },
  methods: {
    createWord() {
      this.words.push({
        pl: this.word,
        en: this.translation,
        categories: this.selectedCategories
      });
      this.word = ""
      this.translation = ""
      this.selectedCategories = []
    },
    removeWord(index) {
      this.words.splice(index, 1)
    },
    saveWords() {
      localStorage.setItem("words", JSON.stringify(this.words));
    }
  }
};
</script>

<style scoped>
.input {
  @apply bg-white p-2 border block mb-2;
}

.button {
  @apply px-4 py-2 text-white font-bold;
}

.pair {
  @apply p-2 shadow bg-grey-lightest mb-3 flex;
}

.word {
  @apply w-1/3;
}

.label {
  @apply font-bold text-left pt-4;
}

.remove {
  @apply font-bold block p-2 bg-red text-white w-8;
}

.option {
  @apply font-bold;
}
</style>
