<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Issues</h1>
    <IssuesList />
  </div>
</template>

<script>
import IssuesList from '@/components/Issues/List.vue';

export default {
  components: { IssuesList },
};
</script>

<style lang="stylus" module>
.title
  margin 30px 0
</style>
