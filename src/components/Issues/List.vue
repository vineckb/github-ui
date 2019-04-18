<template>
  <ul>
    <ListItem
      v-for="item in issues"
      :key="item.id"
      :issue="item" />
  </ul>
</template>

<script>
import ListItem from './ListItem';
import { mapState } from 'vuex';

export default {
  components: { ListItem },

  computed: mapState(['issues']),

  created() {
    this.$store.dispatch('fetchIssues');
  }
};
</script>
