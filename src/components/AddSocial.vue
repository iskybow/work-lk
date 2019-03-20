<template>
  <div>
    <v-btn v-on:click="show = !show">
      Добавить аккаунты в социальных сетях
    </v-btn>
    <transition name="fade">
      <div v-if="!show">
        <v-text-field label="Vkontakte"></v-text-field>
        <v-text-field label="Facebook"></v-text-field>
        <v-text-field label="Instagram"></v-text-field>
        <v-text-field label="Skype"></v-text-field>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>