<template>
  <li :class="$style.listItem">
    <a :class="$style.header" :href="`/${repository}/issues/${issue.number}`">
      <span :class="$style.title">{{issue.title}}</span>
      <span :class="$style.subtitle">Created {{createdAt(issue.created_at)}}</span>
    </a>

    <LockButton :issue="issue" :repository="repository" />
  </li>
</template>

<script>
import LockButton from './LockButton';
import moment from 'moment';

export default {
  components: { LockButton },

  props: {
    repository: {
      type: String,
      required: true
    },

    issue: {
      type: Object,
      required: true
    }
  },

  methods: {
    createdAt(createdAt) {
      return moment(createdAt).fromNow();
    }
  }
}
</script>

<style lang="stylus" module>
.listItem
  display flex
  flex-grow 1
  justify-content space-between
  align-items center
  padding 10px 20px
  border-bottom 2px solid #dedede
  margin-bottom 10px

.header
  text-decoration none
  color inherit
  display flex
  align-items flex-start
  justify-content center
  flex-direction column

.title
  font-weight bold
  text-align left
  padding-right 20px

.subtitle
  font-size 14px
  color #999
  padding-right 20px
</style>
