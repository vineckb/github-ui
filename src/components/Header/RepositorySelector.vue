<template>
  <form @submit.prevent="submit">
    <UserCard />

    <input type="text" v-model="repository" placeholder="repository">

    <button type="submit">
      <vue-material-icon name="search" size="20" />
    </button>
  </form>
</template>

<script>
import UserCard from './UserCard';

export default {
  components: { UserCard },

  data () {
    return {
      repository: this.$store.state.repository
    }
  },

  methods: {
    submit() {
      const { repository } = this;

      this.$store.dispatch('selectRepository', { repository });
    }
  }
}
</script>

<style lang="stylus" scoped>
form
  display flex

input
  background-color #fafbfc
  border-radius 3px
  padding 5px 10px
  border 1px solid #d1d5da
  margin-right 10px

button
  padding 5px 10px
  border-radius 3px
  background-color #e8e8e8
  border 1px solid #b9b3b3
  color #666
  display flex
  align-items center
</style>
