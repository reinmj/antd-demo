<template>
  <div>
    name: {{ name }}
    <br />
    type: {{ type }}
    <br />
    list: {{ list }}
    <br />
    isVisible: {{ isVisible }}
    <br />
    <button @click="handleClick">change type</button>
  </div>
</template>

<script>
export default {
  name: "PropsDemo",
  props: {
    name: {
      type: String,
      default: ""
    },
    type: {
      // type: String,
      // default: "",
      validator: function(value) {
        return ["success", "error", "warning"].includes(value);
      }
    },
    list: {
      type: Array,
      default: () => []
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleClick() {
      this.onChange(this.type === "success" ? "warning" : "success");
    }
  }
};
</script>
