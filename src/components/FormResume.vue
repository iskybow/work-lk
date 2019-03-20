<template>
  <FormTemplate :paramsFile="getFormData()">

    <image-uploader
      class="input-file"
      :preview="true"
      :className="['fileinput', { 'fileinput--loaded': hasImage }]"
      capture="environment"
      :debug="1"
      doNotResize="gif"
      :autoRotate="true"
      outputFormat="verbose"
      @input="setImage"
    >
      <label for="fileInput" slot="upload-label">
        <span class="upload-caption">Выбрать фото</span>
      </label>
    </image-uploader>

  </FormTemplate>
</template>

<script>
  import FormResume from '../lk-form/resume-form';
  import FormTemplate from "./FormTemplate";
  export default {
    data() {
      return {
        hasImage: false,
        image: null,
      };
    },
    name: "FormVacancy",
    components: {FormTemplate},
    methods: {

      getFormData() {
        return FormResume;
      },
      setImage: function(output) {
        this.hasImage = true;
        this.image = output;
      }
    },
  }
</script>

<style>
  .input-file {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
  #fileInput {
    display: none;
  }
  .input-file label {
    margin-top: 20px;
    color: rgba(0,0,0,0.54);
    cursor: pointer;
  }
  .input-file img {
    width: 200px;
  }
</style>