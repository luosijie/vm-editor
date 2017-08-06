<template>
  <div id="app">
    <img src="./assets/logo_vmeditor.png" height="250" width="250">
    <h2><span style="color: #41b883">V</span>M Editor</h2>
    <p>Editor for Vue.js</p>
    <div class="editor-container">
      <VmEditor @upload="showHtml"></VmEditor>
    </div>
    <div class="author">
      <a href="https://github.com/luosijie/vm-editor">
        <img src="./assets/iconimg/github.png" height="32" alt="" width="32">
      </a>
      <span>Designed by <a href="https://github.com/luosijie">JesseLuo</a></span>
    </div>
    <div class="preview" v-html="previewHtml"></div>
  </div>
</template>

<script>
import VmEditor from './components/vm-editor.vue'
export default {
  name: 'app',
  components: {
    VmEditor
  },
  data: function () {
    return {
      previewHtml: ''
    }
  },
  methods: {
    showHtml: function (data) {
      this.previewHtml = data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.editor-container, .preview{
  margin-top: 30px;
  width: 900px;
}
.author{
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-weight: bold;
  margin-bottom: 0;
}

ul {
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
