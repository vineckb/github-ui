<template>
  <div :class="$style.header">
    <RepositorySelector />

    <LoginButton v-if="!token" />

    <a v-if="token" href="/new">Create issue</a>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RepositorySelector from './RepositorySelector';
import LoginButton from './LoginButton';

export default {
  components: { LoginButton, RepositorySelector },

  computed: mapState(['token'])
}
</script>

<style lang="stylus" module>
.header
  display flex
  justify-content space-around
</style>
