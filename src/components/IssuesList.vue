<template>
  <ul>
    <IssueListItem
      v-for="item in issues"
      :key="item.id"
      :issue="item" />
  </ul>
</template>

<script>
import IssueListItem from '@/components/IssueListItem';
import { mapState } from 'vuex';

export default {
  components: { IssueListItem },

  computed: mapState(['issues']),

  created() {
    this.$store.dispatch('fetchIssues');
  },
};
</script>
