<template>
  <div class="work-experience">
    <div class="work-block" v-for="(item, index) in works" :key="index">

      <v-btn class="remove-block" :id="'removeBlock'+index" @click="removeBlock(index)">
        Удалить
      </v-btn>

      <component v-for="(input, index) in item"
                 :is="input.component"
                 :key="index"
                 :name="input.name"
                 :label="input.label"
                 :rules="input.rules"
                 :items="input.items"
                 :class="input.class"
                 :type="input.type"
                 v-model="value[input.name]"
      >
        {{ input.text }}
      </component>
    </div>
    <v-btn type="button" class="btnWork"
           @click="addNewWork()"
    >
      Добавить опыт работы
    </v-btn>

  </div>
</template>

<script>
  import FormExperience from '../lk-form/experience';

  export default {
    name: "AddWork",
    props: {
      value: {
        type: [String,Number,Boolean,Array,Object],
      }
    },
    data() {
      return {
        counterDopWork: 1,
        works: [FormExperience]
      };
    },
    methods: {
      removeBlock(index) {
        delete this.works[index];
        this.$forceUpdate();
        document.getElementById('removeBlock'+index).remove();
      },
      addNewWork() {
        let arrNames = {
          'headWork': 'headWork' + this.counterDopWork,
          'companyName': 'companyName' + this.counterDopWork,
          'positionWork': 'positionWork' + this.counterDopWork,
          'departmentWork': 'departmentWork' + this.counterDopWork,
          'monthBeganWork': 'monthBeganWork' + this.counterDopWork,
          'startYearWork': 'startYearWork' + this.counterDopWork,
          'endMonthWork': 'endMonthWork' + this.counterDopWork,
          'yearOfEndingWork': 'yearOfEndingWork' + this.counterDopWork
        };
        let data = {};
        data[arrNames.headWork] = FormExperience.headWork0;
        data[arrNames.companyName] = Object.assign(FormExperience.companyName0, {name: (FormExperience.companyName0.name).slice(0, -1) + this.counterDopWork});
        data[arrNames.positionWork] = Object.assign(FormExperience.positionWork0, {name: (FormExperience.positionWork0.name).slice(0, -1) + this.counterDopWork});
        data[arrNames.departmentWork] = Object.assign(FormExperience.departmentWork0, {name: (FormExperience.departmentWork0.name).slice(0, -1) + this.counterDopWork});
        data[arrNames.monthBeganWork] = Object.assign(FormExperience.monthBeganWork0, {name: (FormExperience.monthBeganWork0.name).slice(0, -1) + this.counterDopWork});
        data[arrNames.startYearWork] = Object.assign(FormExperience.startYearWork0, {name: (FormExperience.startYearWork0.name).slice(0, -1) + this.counterDopWork});
        data[arrNames.endMonthWork] = Object.assign(FormExperience.endMonthWork0, {name: (FormExperience.endMonthWork0.name).slice(0, -1) + this.counterDopWork});
        data[arrNames.yearOfEndingWork] = Object.assign(FormExperience.yearOfEndingWork0, {name: (FormExperience.yearOfEndingWork0.name).slice(0, -1) + this.counterDopWork});

        this.works.push(data);
        this.counterDopWork++;
        let btn = document.querySelectorAll('.work-block');
        if (btn.length === 4) {
          document.querySelector('.btnWork').classList.add('hide-btn');
        }
      },
    },
  }
</script>

<style>
  .work-experience {
    margin-bottom: 20px;
  }
  .work-experience .work-block:first-child .remove-block {
    display: none;
  }
</style>