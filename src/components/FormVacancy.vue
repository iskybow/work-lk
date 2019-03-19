<template>
  <div>
    <FormTemplate :paramsFile="getFormData()">
    </FormTemplate>
  </div>
</template>

<script>
  import FormVacancy from '../lk-form/vacancy-form';
  import FormTemplate from "./FormTemplate";
  export default {
    name: "FormVacancy",
    components: {FormTemplate},
    methods: {
      getFormData() {
        return FormVacancy;
      },
    },
  }
</script>

<style scoped>
</style>