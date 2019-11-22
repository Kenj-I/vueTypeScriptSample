<template>
  <div>
    <InputText
      :value="value"
      :name="name"
      :placeholder="placeholder"
      @input="updateValue"
      @change="changeValue"
    />
    <Button :text="`Insert to Vuex`" :click="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import InputText from "@/components/InputText.vue";
import Button from "@/components/Button.vue";

@Component({
  //import components
  components: {
    InputText,
    Button
  }
})
export default class FormAreaComponent extends Vue {
  @Prop({ required: true })
  value!: String;
  @Prop({ required: true })
  name!: String;
  @Prop({ required: true })
  placeholder!: String;
  @Prop({ required: true })
  submit!: Function;

  @Emit()
  private updateValue(value: String) {
    this.$emit("input", value);
  }

  @Emit()
  private changeValue(value: String) {
    this.$emit("chage", value);
  }
}
</script>

<style lang="scss" scoped></style>
