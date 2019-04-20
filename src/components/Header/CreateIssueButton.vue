<template>
  <Button primary @click="handleClick">Create issue</Button>
</template>

<script>
import Button from '@/components/Button';

export default {
  components: { Button },

  props: {
    repository: {
      type: String,
      required: true
    }
  },

  methods: {
    handleClick() {
      this.$router.push(`/${this.repository}/issues/new`);
    }
  }
}
</script>
