import Field from '../models/Field';
import {VTextField, VSelect, VSubheader,} from 'vuetify/lib'

export default {
  headUniversity0: Object.assign({}, Field, {
    id: 'headUniversity',
    text: 'Образование',
    rules: [],
    class: 'input-head',
    component: VSubheader,
  }),
  universityName0: Object.assign({}, Field, {
    name: 'universityName',
    label: 'Название университета*',
    component: VTextField,
    rules: [v => !!v  || 'Название университета обязателено к заполнению'],
  }),
  admissionYear0: Object.assign({}, Field, {
    name: 'admissionYear',
    label: 'Год поступления*',
    component: VTextField,
    type: 'number',
    rules: [
      v => !!v  || 'Год поступления обязателен к заполнению',
      v => /^\d+$/.test(v) || 'Только цыфры'
    ],
  }),
  yearOfEnding0: Object.assign({}, Field, {
    name: 'yearOfEnding',
    label: 'Год окончания*',
    component: VTextField,
    type: 'number',
    rules: [
      v => !!v  || 'Год окончания обязателен к заполнению',
      v => /^\d+$/.test(v) || 'Только цыфры'
    ],
  }),
  academicDegree0: Object.assign({}, Field, {
    name: 'academicDegree',
    label: 'Академ степень',
    rules: [],
    component: VSelect,
    items: [
      'Бакалавр',
      'Магистр',
    ],
  }),
  faculty0: Object.assign({}, Field, {
    name: 'faculty',
    label: 'Факультет*',
    rules: [v => !!v  || 'Факультет обязателен к заполнению'],
    component: VTextField,
  }),
  specialization0: Object.assign({}, Field, {
    name: 'specialization',
    label: 'Специализация',
    rules: [],
    component: VTextField,
  }),
}