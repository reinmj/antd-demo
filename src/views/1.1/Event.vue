<template>
  <div>
    name: {{ name || "--"}}
    <br />
    <a-input :value="name" @change="handleChange" />
    <br />
    <br />
    <div @click="handleDivClick">
      <a-button @click="handleClick" type="primary">重置成功</a-button>&nbsp;&nbsp;&nbsp;
      <a-button @click.stop="handleClick" type="danger">重置失败</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDemo",
  props: {
    name: String
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleDivClick() {
      this.$emit("change", "");
    },
    handleClick(e) {
      // 都会失败
      //e.stopPropagation();
    }
  }
};
</script>
