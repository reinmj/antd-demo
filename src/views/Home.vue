<template>
  <div id="nav">
    <!-- <template v-for="i in 11">
      <div :key="i">
        <router-link :to="`/1.${i}`">{{ `1.${i}` }}章节</router-link>
      </div>
    </template> -->
    <router-link :to="{ name: 'Vue三大核心概念(属性、事件、插槽)' }"> v1.1章节 Vue三大核心概念(属性、事件、插槽) </router-link>
    <br />
    <router-link :to="{ name: '双向绑定和单向数据流不冲突' }"> v1.2章节 双向绑定和单向数据流不冲突 </router-link>
    <br />
    <router-link :to="{ name: '虚拟Dom' }"> v1.3章节 虚拟Dom</router-link>
    <br />
    <router-link :to="{ name: '如何触发组件的更新' }"> v1.4 如何触发组件的更新 </router-link>
    <br />
    <router-link :to="{ name: '合理应用计算属性和侦听器' }"> v1.5 合理应用计算属性和侦听器 </router-link>
    <br />
    <router-link :to="{ name: '生命周期的应用场景和函数式组件' }"> v1.6 生命周期的应用场景和函数式组件</router-link>
    <br />
    <router-link :to="{ name: '指令的本质' }"> v1.7 指令的本质</router-link>
    <br />
    <router-link :to="{ name: 'provie/inject' }"> v1.8 provie/inject </router-link>
    <br />
    <router-link :to="{ name: '如何优雅的获取跨层级组件(拒绝递归)' }"> v1.9 如何优雅的获取跨层级组件(拒绝递归)</router-link>
    <br />
    <router-link :to="{ name: 'template 和 JSX 对比及其他们的本质' }"> v1.10 template 和 JSX 对比及其他们的本质</router-link>
    <br />
    <router-link :to="{ name: 'vuex demo' }"> v1.12 vuex demo </router-link>
    <br />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="less">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
