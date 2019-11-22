<template>
  <div>
    <input
      type="text"
      :value="value"
      :name="name"
      :placeholder="placeholder"
      @input="updateValue"
      @change="changeValue"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class InputText extends Vue {
  @Prop({ required: true })
  value!: String;
  @Prop({ required: true })
  name!: String;
  @Prop({ required: true })
  placeholder!: String;

  @Emit()
  private updateValue(e: Event) {
    this.$emit("input", (e.target as HTMLInputElement).value);
  }

  @Emit()
  private changeValue(e: Event) {
    this.$emit("chage", (e.target as HTMLInputElement).value);
  }
}
</script>

<style lang="scss" scoped></style>
