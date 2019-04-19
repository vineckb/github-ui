<template functional>
  <a :href="props.href" :class="$style.titleLink">
    <vue-material-icon name="arrow_back" />
  </a>
</template>

<style lang="stylus" module>
  .titleLink
    display flex
    align-items center
    justify-content center
    width 30px
    height 30px
    border 2px solid #999
    border-radius 50%
    color #999
    text-decoration none
</style>
