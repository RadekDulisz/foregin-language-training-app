<template>
  <div>
    <div class="flex flex-row m-auto items-center">
      <p class="p bg-orange mr-2">
        <span v-for="category in word.categories">
          {{ category }}
        </span>
      </p>

      <p class="p bg-purple">
        {{ word.pl }}
      </p>

      <input 
        class="input bg-white" 
        type="text" 
        placeholder="Translate" 
        v-model="answer" 
        @keyup.enter="submit"
      >
    </div>
    <button 
      class="button bg-blue" 
      type="button" 
      @click="submit"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: ["word"],
  data() {
    return {
      answer: ""
    }
  },
  methods: {
    submit () {
      this.$emit('submit-answer', this.answer)
      this.answer = ''
    }
  }
};
</script>

<style scoped>
.input {
  @apply block w-32 mx-2 mb-2 p-2 border text-center;
}

.p {
  @apply block w-32 mb-2 p-2 text-white;
}

.button {
  @apply my-2 px-4 py-2 text-white w-full block no-underline;
}
</style>
