<template>
  <div :class="$style.header">
    <RepositorySelector />
    <CreateIssueButton />
    <LogoutButton />
  </div>
</template>

<script>
import RepositorySelector from './RepositorySelector';
import LogoutButton from './LogoutButton';
import CreateIssueButton from './CreateIssueButton';

export default {
  components: { RepositorySelector, LogoutButton, CreateIssueButton }
}
</script>

<style lang="stylus" module>
.header
  display flex
  justify-content space-between
  align-items center
  max-width 700px
  margin 0 auto
  padding 20px
</style>
