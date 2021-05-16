import {OrderInfo} from "../../../interfaces";

const initialOrderInfoWithAddress: OrderInfo = {
  fullName: {
    value: '',
    placeholder: 'Ф.И.О',
    required: true,
  },
  country: {
    value: '',
    placeholder: 'Страна',
    required: true,
  },
  cityName: {
    value: '',
    placeholder: 'Город',
    required: true,
  },
  streetName: {
    value: '',
    placeholder: 'Улица',
    required: true,
  },
  homeNumber: {
    value: '',
    placeholder: 'Дом',
    required: true,
  },
  sectionId: {
    value: '',
    placeholder: 'Cт',
    required: false,
  },
  flatNumber: {
    value: '',
    placeholder: 'Кв',
    required: true,
  },
  postalCode: {
    value: '',
    placeholder: 'Индекс',
    required: true,
  },
  phoneNumber: {
    value: '',
    placeholder: 'Телефон',
    required: true,
  },
  email: {
    value: '',
    placeholder: 'E-mail',
    required: true,
  },
};

const initialOrderInfoCDEK: OrderInfo = {
  fullName: {
    value: '',
    placeholder: 'Ф.И.О',
    required: true,
  },
  phoneNumber: {
    value: '',
    placeholder: 'Телефон',
    required: true,
  },
  email: {
    value: '',
    placeholder: 'E-mail',
    required: true,
  },
};

const ekbAddressOptions = [
  { value: '1', label: 'Студия йоги «Делай йогу», Ленина, 53' },
  { value: '2', label: 'Кофейня «May be cup», Тургенева,15' },
  { value: '3', label: 'Пекарня «GoBakery”, Попова,2/Вайнера,12' }
];

export {
  initialOrderInfoWithAddress,
  initialOrderInfoCDEK,
  ekbAddressOptions,
}