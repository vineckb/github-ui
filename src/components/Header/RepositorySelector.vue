<template>
  <form :class="$style.wrapper" @submit.prevent="submit" v-click-outside="hideSuggestions">

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

    <RepositoriesList
      :class="$style.suggestions"
      v-if="focus && suggestions.length"
      @select="selectRepository"
      :repositories="suggestions" />
  </form>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import RepositoriesList from '@/components/Repositories/List';

export default {
  components: { RepositoriesList },

  directives: {
    ClickOutside
  },

  data () {
    return {
      repository: this.$route.params.repository,
      suggestions: [],
      focus: false,
    }
  },

  watch: {
    '$route.params': function(params) {
      this.repository = params.repository;
    }
  },

  methods: {
    submit() {
      this.$router.go(`/${this.repository}/issues`);
      this.hideSuggestions()
    },

    handleFocus() {
      this.focus = true;
      this.handleChange();
    },

    handleChange() {
        const regex = new RegExp(`(${this.repository})`, 'gi');

      this.suggestions = this.$store.state.repositories.list
        .filter(repo => !!repo.name.match(regex));
    },

    hideSuggestions() {
      this.focus = false;
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
</style>
