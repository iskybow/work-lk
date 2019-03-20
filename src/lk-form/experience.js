import Field from '../models/Field';
import {VTextField, VSelect, VSubheader,} from 'vuetify/lib'

export default {
  headWork0: Object.assign({}, Field, {
    text: 'Опыт работы',
    rules: [],
    class: 'input-head',
    component: VSubheader,
  }),
  companyName0: Object.assign({}, Field, {
    name: 'companyName0',
    label: 'Название компании*',
    component: VTextField,
    rules: [v => !!v || 'Название компании обязателено к заполнению'],
  }),
  positionWork0: Object.assign({}, Field, {
    name: 'positionWork0',
    label: 'Должность*',
    component: VTextField,
    rules: [v => !!v || 'Должность обязателена к заполнению'],
  }),
  departmentWork0: Object.assign({}, Field, {
    name: 'departmentWork0',
    label: 'Отдел',
    component: VTextField,
    rules: [],
  }),
  monthBeganWork0: Object.assign({}, Field, {
    name: 'monthBeganWork0',
    label: 'Месяц начала*',
    rules: [v => !!v || 'Месяц начала обязателен к заполнению'],
    component: VSelect,
    items: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  }),
  startYearWork0: Object.assign({}, Field, {
    name: 'startYearWork0',
    label: 'Год начала*',
    component: VTextField,
    type: 'number',
    rules: [
      v => !!v || 'Год начала обязателен к заполнению',
      v => /^\d+$/.test(v) || 'Только цыфры'
    ],
  }),
  endMonthWork0: Object.assign({}, Field, {
    name: 'endMonthWork0',
    label: 'Месяц окончания*',
    rules: [v => !!v || 'Месяц окончания обязателен к заполнению'],
    component: VSelect,
    items: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  }),
  yearOfEndingWork0: Object.assign({}, Field, {
    name: 'yearOfEndingWork0',
    label: 'Год окончания*',
    component: VTextField,
    type: 'number',
    rules: [
      v => !!v || 'Год окончания обязателен к заполнению',
      v => /^\d+$/.test(v) || 'Только цыфры'
    ],
  }),
}