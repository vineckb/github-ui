<template>
  <div>
    <div :class="$style.header">
      <h1 :class="$style.title">
        <Button :href="`/${repository}/issues`" rounded>
          <vue-material-icon name="arrow_back" />
        </Button>

        <span :class="$style.titleText">{{ issue.title }}</span>

        <LockButton :issue="issue" :repository="repository" :class="$style.button" />
      </h1>
      <p :class="$style.subtitle"></p>
    </div>

    <vue-simple-markdown :class="$style.content" :source="issue.body" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LockButton from '@/components/Issues/LockButton';
import Button from '@/components/Button';

export default {
  components: { Button, LockButton },

  data() {
    const { repository, number } = this.$route.params;
    return { repository, number };
  },

  computed: mapState({
    issue: state => state.issues.item
  }),

  created() {
    const { repository, number } = this;
    const { dispatch, commit } = this.$store;

    commit('loading');
    dispatch('issues/fetchItem', { repository, number }).then(() => commit('loaded'));
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
