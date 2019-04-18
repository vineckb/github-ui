<template>
  <a :href="authorizeUrl">Login</a>
</template>

<script>
import api from '@/services/api';

export default {
  data () {
    return {
      authorizeUrl: api.authorizeUrl
    }
  }
}
</script>
