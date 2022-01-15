<template>
  <div class="container w-1/4 mx-auto">
    <form 
      @submit.prevent="createCategory" 
      class="flex flex-col"
    >
      <label 
        class="label"  
        for="category"
      >
        Category
      </label>

      <input 
        class="input" 
        required id="category" 
        v-model="category" 
        type="text" 
        placeholder="Put the word category here"
      >

      <button class="button bg-blue my-4">
        Add category
      </button>  
    </form>

    <button 
        class="button bg-green"
        @click="saveCategory"
      >
        Save changes
    </button>
    
    <h1 class="mt-8 mb-4">
      Categories database
    </h1>

    <div 
      class="pair items-center"
      v-for="(category, index) in categories"
    >
      <div class="category flex justify-start">
        {{ category }}
      </div>

      <div class="category flex justify-end">
        <input 
          type="button" 
          class="remove" 
          value="X" 
          @click="removeCategory(index)"
        >
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [],
      categories: JSON.parse(localStorage.getItem("categories")) || [],
    };
  },
  methods: {
    createCategory() {
      this.categories.push(this.category)
      this.category = ""
    },
    saveCategory() {
      localStorage.setItem("categories", JSON.stringify(this.categories));
    },
    removeCategory(index) {
      this.categories.splice(index, 1);
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

.category {
  @apply w-1/2;
}

.label {
  @apply font-bold text-left pt-4;
}

.remove {
  @apply font-bold block p-2 bg-red text-white w-8;
}
</style>
