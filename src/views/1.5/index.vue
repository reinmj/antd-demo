<template>
  <div>
    <a-tabs>
      <a-tab-pane key="Computed" tab="计算属性">
        <Computed />
      </a-tab-pane>
      <a-tab-pane key="Watch" tab="侦听器">
        <Watch />
      </a-tab-pane>
      <a-tab-pane key="vs" tab="计算属性 vs 侦听器">
        <Computed1 />
        <br />
        <Watch1 />
      </a-tab-pane>
      <a-tab-pane key="Watch1_pro" tab="防抖版">
        <WatchPro />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Computed from "./Computed";
import Watch from "./Watch";
import Computed1 from "./Computed1";
import Watch1 from "./Watch1";
import WatchPro from "./Watch1_pro";
export default {
  components: {
    Computed,
    Watch,
    Computed1,
    Watch1,
    WatchPro
  }
}
</script>
