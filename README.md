<div align="center">
  <img src="https://github.com/luosijie/Front-end-Blog/blob/master/img/logo_vmeditor_name.png?raw=true">
  <p>
    <strong>Editor for Vue,</strong> <a href="https://luosijie.github.io/vm-editor/">Live Demo</a>
  </p>
  <img src="https://img.shields.io/badge/version-beta-blue.svg?style=flat">
  <img src="https://img.shields.io/badge/dependency-vue-green.svg?style=flat">
</div>

### Install

```
npm install --save vm-editor
```

### Usage

```
import VmEditor from 'vm-editor'
```

Trigger upload event by click upload button 

```
<VmEditor @upload="getHtml"></VmEditor>
...
methods: {
  getHtml: function (data) {
    //data contains html string for render
  }
}
```

### License
[MIT](https://github.com/luosijie/vm-editor/blob/master/LICENSE.md)
