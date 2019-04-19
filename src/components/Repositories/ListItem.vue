<template>
  <li :class="$style.repositoryListItem" @click="handleClick">
    {{ repository.name }}
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    repository: {
      type: Object,
      required: true
    }
  },

  methods: {
    handleClick() {
      this.$router.push(`/${this.repository.name}/issues`);
      this.$emit('click', this.repository.name);
    }
  }
}
</script>

<style lang="stylus" module>
.repositoryListItem
  text-align left
  padding 10px 20px
  cursor pointer

  &:hover
    background #e8e8e8
</style>
