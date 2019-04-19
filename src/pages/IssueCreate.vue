<template>
  <form @submit.prevent="submit" :class="$style.form">
    <input type="text" v-model="title" placeholder="Title">
    <textarea v-model="body" placeholder="Leave a comment" />
    <button type="submit">Submit new issue</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      body: ''
    }
  },

  methods: {
    submit() {
      const { title, body } = this;
      const { repository } = this.$route.params;

      this.$store.dispatch('createIssue', { title, body, repository }).then(({ number }) => {
        this.$router.push(`/${repository}/issues/${number}`)
      });
    }
  }
}
</script>

<style lang="stylus" module>
.form
  display flex
  flex-direction column
</style>
