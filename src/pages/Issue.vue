<template>
  <div>
    <div :class="$style.header">
      <h1 :class="$style.title">
        <Button :href="`/${repository}/issues`" rounded>
          <vue-material-icon name="arrow_back" />
        </Button>

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
import Button from '@/components/Button';
import LockButton from '@/components/Issues/LockButton';

export default {
  components: { Button, LockButton },

  data() {
    const { repository, number } = this.$route.params;
    return { repository, number };
  },

  computed: mapState(['issue']),

  created() {
    const { repository, number } = this;
    this.$store.dispatch('fetchIssue', { number, repository });
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
