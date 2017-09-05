<div align="center">
  <img src="https://github.com/luosijie/Front-end-Blog/blob/master/img/logo_vmeditor_name.png?raw=true">
  <p>
    <strong>Editor for Vue,</strong> <a href="https://luosijie.github.io/vm-editor/">Live Demo</a>
  </p>
  <img src="https://img.shields.io/badge/version-0.1.3-blue.svg?style=flat">
  <img src="https://img.shields.io/badge/dependency-vue-green.svg?style=flat">
</div>

### Install

```bash
npm install --save vm-editor
```

### Usage

```js
import VmEditor from 'vm-editor'
```

Trigger upload event by click upload button 

```html
<VmEditor width="950px" 
          height="400px" 
          @upload="showHtml">
</VmEditor>
...
methods: {
  getHtml: function (data) {
    //data contains html string for render
  }
}
```

### License
[MIT](https://github.com/luosijie/vm-editor/blob/master/LICENSE.md)
