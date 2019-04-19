<template>
  <div>
    <a href="/">Back</a>
    <h1>{{issue.title}}</h1>
    <LockButton :issue="issue" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LockButton from '@/components/Issues/LockButton';

export default {
  components: { LockButton },

  computed: mapState(['issue']),

  created() {
    this.$store.dispatch('fetchIssue', this.$route.params.number);
  }
}
</script>
