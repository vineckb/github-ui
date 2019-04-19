<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Repositories</h1>
    <RepositoriesList :repositories="repositories" />
  </div>
</template>

<script>
import RepositoriesList from '@/components/Repositories/List.vue';
import { mapState } from 'vuex';

export default {
  components: { RepositoriesList },

  computed: mapState(['repositories'])
};
</script>

<style lang="stylus" module>
.title
  margin 30px 0
</style>
