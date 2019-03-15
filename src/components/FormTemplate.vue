<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <slot />
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
               :mask="input.maskPhone"
    ></component>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      Сохранить
    </v-btn>

  </v-form>
</template>

<script>

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