<template>
  <ul :class="$style.repostoriesList">
    <ListItem @click="(v) => $emit('select', v)" v-for="(repository, index) in repositories" :key="index" :repository="repository" />
  </ul>
</template>

<script>
import ListItem from './ListItem';

export default {
  components: { ListItem },

  props: {
    repositories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" module>
.repostoriesList
  list-style none
</style>
