<template>
  <div>
    <div :class="$style.header">
      <h1 :class="$style.title">
        <a href="/" :class="$style.titleLink">
          <vue-material-icon name="arrow_back" />
        </a>
        <span :class="$style.titleText">{{ issue.title }}</span>
        <LockButton :issue="issue" :class="$style.button" />
      </h1>
      <p :class="$style.subtitle"></p>
    </div>

    <vue-simple-markdown :class="$style.content" :source="issue.body" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LockButton from '@/components/Issues/LockButton';

export default {
  components: { LockButton },

  computed: mapState(['issue', 'repository']),

  created() {
    this.$store.dispatch('fetchIssue', this.$route.params.number);
  }
}
</script>

<style lang="stylus" module>
.header
  margin 30px 0
  display flex
  align-items center

.title
  display flex
  align-items center
  width 100%

.titleLink
  display flex
  align-items center
  justify-content center
  width 30px
  height 30px
  border 2px solid #999
  border-radius 50%
  color #999
  text-decoration none

.titleText
  margin-left 10px
  flex-grow 2
  text-align left

.subtitle
  font-size 14px
  color #66

.content
  text-align left
</style>
