import * as yup from 'yup'

export const VALID_FORM = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Введите корректный номер телефона'
    )
    .required('Поле номера телефона обязательно'),
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Поле email обязательно'),
})

export const VALID_FORM_NAME = yup.object().shape({
  nickname: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9]*$/,
      'Можно использовать буквы и цифры (спец символы запрещены)'
    )
    .max(30, 'Максимальная длина 30 символов')
    .required('Это поле нужно заполнить'),
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]*$/, 'Только буквы разрешены')
    .max(50, 'Максимальная длина 50 символов')
    .required('Это поле нужно заполнить'),
  surname: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]*$/, 'Только буквы разрешены')
    .max(50, 'Максимальная длина 50 символов')
    .required('Это поле нужно заполнить'),
  sex: yup.string().required('Выберите пол'),
})