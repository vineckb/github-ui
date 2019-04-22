<template>
  <div :class="$style.header">
    <div :class="$style.wrapper">
      <UserCard />
      <RepositorySelector v-if="$mq === 'tablet' || $mq === 'desktop'" />
      <CreateIssueButton v-if="!!repository" :repository="repository" />
      <LogoutButton />
    </div>
  </div>
</template>

<script>
import RepositorySelector from './RepositorySelector';
import UserCard from './UserCard';
import CreateIssueButton from './CreateIssueButton';
import LogoutButton from './LogoutButton';

export default {
  components: { UserCard, RepositorySelector, CreateIssueButton, LogoutButton },

  data() {
    return {
      repository: this.$router.params
    }
  },

  watch: {
    '$route.params': function({ repository }) {
      this.repository = repository;
    }
  }
}
</script>

<style lang="stylus" module>
.header
  background #fefefe
  border-bottom 1px solid #e6e4e4

.wrapper
  display flex
  justify-content space-between
  align-items center
  max-width 700px
  margin 0 auto
  padding 0 20px
</style>
