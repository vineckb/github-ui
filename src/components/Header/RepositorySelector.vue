<template>
  <form :class="$style.wrapper" @submit.prevent="submit">

    <input
      :class="$style.input"
      v-model="repository"
      @keyup="handleChange"
      @focus="handleFocus"
      type="text"
      placeholder="repository">

    <button :class="$style.button" type="submit">
      <vue-material-icon name="search" size="20" />
    </button>

    <ul :class="$style.suggestions" v-if="focus && suggestions.length">
      <li
        :class="$style.suggestionItem"
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="selectRepository(suggestion)">

        {{ suggestion }}
      </li>
    </ul>
  </form>
</template>

<script>

export default {
  data () {
    return {
      repository: this.$store.state.repository,
      suggestions: [],
      focus: false,
    }
  },

  methods: {
    submit() {
      this.$store.dispatch('selectRepository', this.repository);
      this.focus = false;
    },

    handleFocus() {
      this.focus = true;
      this.handleChange();
    },

    handleChange() {
      const { repositories } = this.$store.state;
      const { repository } = this;
      const regex = new RegExp(`(${repository})`, 'gi');

      this.suggestions = repositories
        .map(repo => repo.name)
        .filter(repo => !!repo.match(regex));
    },

    selectRepository(repository) {
      this.repository = repository;
      this.submit();
    }
  }
}
</script>

<style lang="stylus" module>
.wrapper
  display flex
  position relative

.input
  background-color #fafbfc
  border-radius 3px
  padding 5px 10px
  border 1px solid #d1d5da
  margin-right 10px

.button
  padding 5px 10px
  border-radius 3px
  background-color #e8e8e8
  border 1px solid #b9b3b3
  color #666
  display flex
  align-items center

.suggestions
  position absolute
  z-index 1000
  top 100%
  width 100%
  margin-top 10px
  background white
  border 1px solid #b9b3b3
  border-radius 3px
  list-style none

.suggestionItem
  color #666
  text-align left
  padding 5px 10px
  cursor pointer

  &:hover
    background #e8e8e8
</style>
