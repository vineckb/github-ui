<template>
  <div>
    <h1>{{issue.title}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['issue']),

  created() {
    this.$store.dispatch('fetchIssue', this.$route.params.number);
  }
}
</script>
