<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="username" placeholder="username">
    <input type="text" v-model="repository" placeholder="repository">
    <button type="submit">select</button>
  </form>
</template>

<script>
export default {
  data () {
    const { username, repository } = this.$store.state;

    return {
      username, repository
    }
  },

  methods: {
    submit() {
      const { username, repository } = this;

      this.$store.dispatch('selectRepository', { username, repository })
    }
  }
}
</script>
