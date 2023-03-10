import { createApp } from 'vue'

import App from './App.vue'
import BlockText from './components/blocks/BlockText.vue'
import BlockGraph from './components/blocks/BlockGraph.vue'
import BlockTags from './components/blocks/BlockTags.vue'
import BlockList from './components/blocks/BlockList.vue'
import BlockInfo from './components/blocks/BlockInfo.vue'

const app = createApp(App)



app
  .component('BlockText', BlockText)
  .component('BlockGraph', BlockGraph)
  .component('BlockTags', BlockTags)
  .component('BlockList', BlockList)
  .component('BlockInfo', BlockInfo)

  app.mount('#app')