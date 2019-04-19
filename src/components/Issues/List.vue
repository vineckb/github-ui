<template>
  <ul :class="$style.list">
    <ListItem
      v-for="item in issues"
      :key="item.id"
      :issue="item" />
  </ul>
</template>

<script>
import ListItem from './ListItem';

export default {
  components: { ListItem },

  props: {
    issues: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="stylus" module>
.list
  display flex
  flex-direction column
</style>
