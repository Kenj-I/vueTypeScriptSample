<template>
  <button @click="click">submit</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SubmitButton extends Vue {
  inputValue: String = "";

  @Prop({ required: true })
  click!: Function;

  private onSubmit() {
    this.$emit("onSubmit", this.inputValue);
  }
}
</script>

<style lang="scss" scoped></style>
