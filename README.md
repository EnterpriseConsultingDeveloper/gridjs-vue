# Welcome to vue-gridjs 👋

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://gitlab.com/selfagency/vue-gridjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: selfagency_llc](https://img.shields.io/twitter/follow/selfagency_llc.svg?style=social)](https://twitter.com/selfagency_llc)

> A Vue.js wrapper component for Grid.js

### 🏠 [Homepage](https://gitlab.com/selfagency/vue-gridjs)

## Install

```sh
yarn install vue-gridjs || npm install vue-gridjs
```

## Component Registration

### Global Registration

```js
/* in `main.js` or wherever you specify your global components */
import Grid from 'vue-gridjs'
Vue.component('grid', Grid)
```

### Local Registration

```vue
<script>
import Grid from 'vue-gridjs'

export default {
  components: {
    Grid
  }
}
</script>
```

## Usage

Pass either `data`, `from`, or `server` as a data source. Everything else is optional.

Refer to [Grid.js documentation](https://gridjs.io/docs/config/) for specific configuration options.

```vue
<template>
  <grid
    :auto-width="autowidth"
    :data="data"
    :from="from"
    :language="language"
    :pagination="pagination"
    :search="search"
    :server="server"
    :sort="sort"
    :width="width"
  ></grid>
</template>

<script>
import Grid from 'vue-gridjs'

export default {
  name: 'MyTable',
  components: {
    Grid
  },
  data() {
    return {
      auto-width: true/false,             // boolean
      data: {                             // object containing arrays columns & rows
        cols: ['column 1', 'column 2'],
        rows: ['row 1: col 1', 'row 1: col 2']
      },
      from: '.my-element',                // string of HTML table selector
      language: {}                        // dictionary object
      pagination: true/false || {}        // boolean pagination settings object
      search: true/false || {}            // boolean or search settings object
      server: {}                          // server settings object
      sort: true/false || {}              // boolean sort settings object
      width: '100%'                       // string with css width value
    }
  }
}
</script>
```

## Author

👤 **Daniel Sieradski <hello@self.agency>**

- Website: https://self.agency
- Twitter: [@selfagency_llc](https://twitter.com/selfagency_llc)
- Github: [@selfagency](https://github.com/selfagency)
- LinkedIn: [@selfagency](https://linkedin.com/in/selfagency)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://gitlab.com/selfagency/vue-gridjs/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
