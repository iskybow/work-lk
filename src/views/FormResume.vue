<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <component v-for="(input, index) in form()"
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
  </v-form>
</template>

<script>
  import Advert from '../models/Advert';
  import Form from '../lk-form/lk-form';

  export default {
    name: "FormResume",
    data: () => ({
      valid: true,
      formData: {
        duties: ''
      }
    }),
    props: {
      value: {
        type: Object,
        default: () => {
          return Object.assign(Advert, {})
        }
      }
    },computed: {
      username () {
        // Мы скоро разберём что такое `params`
        return this.$route.params.username
      }
    },
    methods: {
      form() {
        return Form;
      },
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    },
  }
</script>
