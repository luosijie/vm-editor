<template>
  <div class="vm-editor-button" @mouseleave="hideSlot" @click="showSlot">
    <span class="button">
      <img :src="require('../assets/iconimg/' + icon + '.png')" width="16" height="16">
    </span>
    <slot v-if="slot"></slot>
  </div>
</template>
<style lang="scss">
  .vm-editor-button{
    position: relative;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    padding: 0;
    &:first-child{
      margin-left: 0;
    }
    span.button{
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        background-color: #eee;
      }
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
      this.slot = this.slot === false ? true : false
    },
    hideSlot () {
      this.slot = false
    }
  }
}
</script>
