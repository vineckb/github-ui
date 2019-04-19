<template>
  <form @submit.prevent="submit" :class="$style.form">

    <h1 :class="$style.title">
      <BackButton :href="`/${repository}/issues`" />
      <strong>Create issue</strong>
    </h1>

    <input
      :class="$style.input"
      v-model="title"
      type="text"
      placeholder="Title">

    <textarea
      :class="[$style.input, $style.textarea]"
      v-model="body"
      placeholder="Leave a comment" />

    <button :class="$style.button" type="submit">Submit issue</button>
  </form>
</template>

<script>
import BackButton from '@/components/BackButton';

export default {
  components: { BackButton },

  data () {
    return {
      title: '',
      body: '',
      repository: this.$route.params.repository
    }
  },

  methods: {
    submit() {
      const { title, body, repository } = this;

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

.title
  padding 30px 0
  display flex
  justify-content flex-start

  strong
    margin-left 20px

.input
  background-color #fafbfc
  border-radius 3px
  padding 10px 20px
  border 1px solid #d1d5da
  margin-bottom 30px

.textarea
  min-height 100px

.button
  background linear-gradient(-180deg,#34d058,#28a745 90%)
  padding 10px 25px
  border none
  border-radius 5px
  color white
  font-size 14px
  font-weight bold
</style>
