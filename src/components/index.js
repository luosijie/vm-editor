import VmEditor from './vm-editor.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VmEditor', VmMEditor)
}

export default VmEditor