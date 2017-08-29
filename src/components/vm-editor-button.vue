<template>
  <button class="vm-editor-button" :class="{ active: slot }" @mouseleave="hideSlot">
    <img :src="require('../assets/iconimg/' + icon + '.png')" width="16" alt="" @click="showSlot">
    <!-- <i :class="icon" @click="showSlot"></i> -->
    <slot v-if="slot"></slot>
    <span class="block"></span>
  </button>
</template>
<style lang="scss">
  button.vm-editor-button{
    width: 24px;
    height: 24px;
    position: relative;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    &:first-child{
      margin-left: 0;
    }
    &:hover{
      background-color: #eee;
    }
    &:i{
      display: inline-block;
      line-height: 24px;
      font-size: 15px;
      color: #858585;
      text-align: center;
    }
  }
</style>
<script>
export default {
  name: 'VmEditorButton',
  props: {
    icon: {
      type: String,
      default: 'fa fa-header'
    }
  },
  data: function () {
    return {
      slot: false
    }
  },
  methods: {
    showSlot () {
      this.slot === false ? this.slot = true : this.slot = false
    },
    hideSlot () {
      this.slot = false
    }
  }
}
</script>
