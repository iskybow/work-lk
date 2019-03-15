<template>
  <div>
    <FormTemplate :paramsFile="getFormData()">
    </FormTemplate>
  </div>
</template>

<script>
  import FormResume from '../lk-form/resume-form';
  import FormTemplate from "./FormTemplate";
  export default {
    name: "FormVacancy",
    components: {FormTemplate},
    methods: {
      getFormData() {
        return FormResume;
      },
    },
  }
</script>

<style scoped>
</style>