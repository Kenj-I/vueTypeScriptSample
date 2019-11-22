<template>
  <p>{{ label }}: {{ value }}</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DisplayValue extends Vue {
  @Prop({ required: true })
  readonly label!: String;

  @Prop({ required: true })
  readonly value!: String;

  //@Prop({default: 0})
  // Value!: String | Number;

  // @Prop()
  // option?: {
  //   A: boolean;
  //   B: boolean;
  //   C: number;
  // };
}
</script>

<style lang="scss" scoped></style>
