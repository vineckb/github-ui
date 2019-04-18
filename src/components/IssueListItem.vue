<template>
  <li>
    <a :href="`/issue/${issue.number}`">
      {{issue.title}} - {{issue.locked}}
    </a>

    <LockIssueButton :issue="issue" />
  </li>
</template>

<script>
import LockIssueButton from '@/components/LockIssueButton';

export default {
  components: { LockIssueButton },

  props: {
    issue: {
      type: Object,
      required: true
    }
  }
}
</script>
