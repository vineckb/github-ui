<template>
  <button
    :class="{
      [$style.button]: true,
      [$style.primary]: primary,
      [$style.bordered]: bordered,
      [$style.rounded]: rounded
    }"
    :type="type"
    @click="handleClick">

    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },

    href: String,

    primary: Boolean,

    bordered: Boolean,

    rounded: Boolean
  },

  methods: {
    handleClick() {
      if (this.href) {
        this.$router.push(this.href);
      } else {
        this.$emit('click');
      }
    }
  }
}
</script>

<style lang="stylus" module>
.button
  cursor pointer
  background none
  border none

.primary
  background linear-gradient(-180deg,#34d058,#28a745 90%)
  padding 10px 25px
  border none
  border-radius 5px
  color white
  text-decoration none
  font-size 14px
  font-weight bold

.bordered
  background none
  border 1px solid #ccc
  border-radius 5px
  padding 5px 10px
  display flex
  align-items center
  color inherit

.rounded
  display flex
  align-items center
  justify-content center
  width 30px
  height 30px
  border 2px solid #999
  border-radius 50%
  color #999
  text-decoration none
  background none
</style>
