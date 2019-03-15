<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <component v-for="(input, index) in formTemplate()"
               :is="input.component"
               :key="index"
               :name="input.name"
               :label="input.label"
               :rules="input.rules"
               :counter="input.counter"
               :items="input.items"
               :prefix="input.prefix"
               v-model="formData[index]"
    ></component>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      Сохранить
    </v-btn>
    <slot />
  </v-form>
</template>

<script>
  import Advert from '../models/Advert';

  export default {
    name: "FormTemplate",
    data: () => ({
      valid: true,
      formData: {
      },
    }),
    props: {
      paramsFile: Object,
      value: {
        type: Object,
        default: () => {
          return Object.assign(Advert, {});
        }
      }
    },
    methods: {
      formTemplate() {
        return this.paramsFile;
      },
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
    },
  }
</script>

<style scoped>
</style>