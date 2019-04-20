<template>
  <div :class="$style.card" @click="$router.push('/')">
    <img :src="user.avatar" :class="$style.image" alt="">
    <div :class="$style.heading">
      <p :class="$style.name">{{ user.name }}</p>
      <p :class="$style.username">@{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    user: state => state.auth.user
  })
}
</script>

<style lang="stylus" module>
.card
  display flex
  margin-right 20px
  align-items center
  padding 20px
  background #e8e8e8
  cursor pointer

.image
  width 30px
  height 30px
  border-radius 50%
  margin-right 10px

.heading
  display flex
  flex-direction column

.name
  font-weight bold
  font-size 14px
  color #666

.username
  font-size 12px
  color #999
</style>
