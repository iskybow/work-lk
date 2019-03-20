<template>
  <div class="education">
    <div class="education-block" v-for="(item, index) in education" :key="index">

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
    <v-btn type="button" class="btnEducation"
           @click="addNewEducation()"
    >
      Добавить образование
    </v-btn>

  </div>
</template>

<script>
  import FormEducation from '../lk-form/education';

  export default {
    name: "AddEducation",
    data() {
      return {
        counterDopEducation: 1,
        education: [FormEducation]
      };
    },
    props: {
      value: {
        type: [String,Number,Boolean,Array,Object],
      }
    },
    methods: {
      removeBlock(index) {
        delete this.education[index];
        this.$forceUpdate();
        document.getElementById('removeBlock'+index).remove();
      },
      addNewEducation() {
        let arrNames = {
          'headUniversity': 'headUniversity' + this.counterDopEducation,
          'universityName': 'universityName' + this.counterDopEducation,
          'admissionYear': 'admissionYear' + this.counterDopEducation,
          'yearOfEnding': 'yearOfEnding' + this.counterDopEducation,
          'academicDegree': 'academicDegree' + this.counterDopEducation,
          'faculty': 'faculty' + this.counterDopEducation,
          'specialization': 'specialization' + this.counterDopEducation,
        };
        let data = {};
        data[arrNames.headUniversity] = FormEducation.headUniversity0;
        data[arrNames.universityName] = Object.assign(FormEducation.universityName0, {name: (FormEducation.universityName0.name).slice(0, -1) + this.counterDopEducation});
        data[arrNames.admissionYear] = Object.assign(FormEducation.admissionYear0, {name: (FormEducation.admissionYear0.name).slice(0, -1) + this.counterDopEducation});
        data[arrNames.yearOfEnding] = Object.assign(FormEducation.yearOfEnding0, {name: (FormEducation.yearOfEnding0.name).slice(0, -1) + this.counterDopEducation});
        data[arrNames.academicDegree] = Object.assign(FormEducation.academicDegree0, {name: (FormEducation.academicDegree0.name).slice(0, -1) + this.counterDopEducation});
        data[arrNames.faculty] = Object.assign(FormEducation.faculty0, {name: (FormEducation.faculty0.name).slice(0, -1) + this.counterDopEducation});
        data[arrNames.specialization] = Object.assign(FormEducation.specialization0, {name: (FormEducation.specialization0.name).slice(0, -1) + this.counterDopEducation});

        this.education.push(data);
        this.counterDopEducation++;
        let btn = document.querySelectorAll('.work-block');
        if (btn.length === 4) {
          document.querySelector('.btnWork').classList.add('hide-btn');
        }
      },
    },
  }
</script>

<style>
  .education {
    margin-bottom: 20px;
  }
  .education .education-block:first-child .remove-block {
    display: none;
  }
</style>