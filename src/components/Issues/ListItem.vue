<template>
  <li>
    <a :href="`/issue/${issue.number}`">
      {{issue.title}} - {{issue.locked}}
    </a>

    <LockButton :issue="issue" />
  </li>
</template>

<script>
import LockButton from './LockButton';

export default {
  components: { LockButton },

  props: {
    issue: {
      type: Object,
      required: true
    }
  }
}
</script>
