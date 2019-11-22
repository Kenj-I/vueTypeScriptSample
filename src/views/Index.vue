<template>
  <div>
    <FormArea
      v-model="value"
      :name="textInputName"
      :placeholder="placeholder"
      :submit="save"
    />
    <DisplayValue :label="`Component value`" :value="value" />
    <DisplayValue :label="`Getter value`" :value="formGetValue" />
    <DisplayValue :label="`State value`" :value="formState.value" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import FormArea from "@/components/FormArea.vue";
import DisplayValue from "@/components/DisplayValue.vue";
import { FormState } from "@/store/form/types";
import { State, Getter, Action } from "vuex-class";

@Component({
  //import components
  components: {
    FormArea,
    DisplayValue
  }
})
export default class IndexComponent extends Vue {
  @State("form") formState!: FormState;
  @Action("form/setValue") formSetValue: any;
  @Getter("form/value") formGetValue!: String;

  // --------- data ---------------
  name: String = "KJ";
  age: Number = 26;
  value: String = "";
  textInputName: String = "textInputArea";
  placeholder: String = "Plase input something";

  // --------- method ---------------
  hogeMethod() {}

  // --------- recieve emit ---------------
  save() {
    this.formSetValue(this.value);
  }

  // -------- lifeSycle hooks ------
  beforeCreate() {}

  created() {}

  beforeMount() {}

  mounted() {}

  updated() {}

  beforeDestroy() {}

  destroyed() {}
}
</script>

<style lang="scss" scoped></style>
