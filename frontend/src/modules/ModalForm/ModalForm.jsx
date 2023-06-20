import styled from 'styled-components';
import Modal from '../../Components/Modal';
import { Controller, useForm } from 'react-hook-form';
import Input from '../../Components/Input';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import { useDispatch } from 'react-redux';
import { serviceThunk } from '../../store/slices/service';
import InputMask from 'react-input-mask';
import { formatPhoneNumber } from '../../functions/utils';
import { useState } from 'react';
import MessageSuccess from '../../Components/Message';

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const nameInputOptions = {
  required: 'Введите имя',
  pattern: {
    value: /^[а-яА-Я]+$/,
    message: 'Имя должно содержать только буквы русского алфавита',
  },
};

const phoneInputOptions = {
  required: 'Введите номер телефона',
  validate: (value) => formatPhoneNumber(value).length === 10 || 'Введено менее 10 символов',
};

const linkInputOptions = {
  required: 'Введите ссылку',
  pattern: {
    message: 'Введите адрес сайта компании или ссылку на проект',
  },
};

const deadlineInputOptions = {
  required: 'Установите дату дедлайна',
  validate: (value) => !!value || 'Выберите дату дедлайна',
};

function ModalForm({ showModal, onClose,serviceData }) {
  const dispatch = useDispatch();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    data={...data, serviceName: serviceData.category+'/'+serviceData.title}
    dispatch(serviceThunk(data));
    setSuccessMessageVisible(true);
  };

  return (
    <Modal
      isOpen={showModal}
      onClose={onClose}
      contentHeight="80%"
      marginTop="25%"
      marginBottom="25%"
    >
      {successMessageVisible ? (
        <MessageSuccess serviceData={serviceData}/>
      ) : (
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          <Text fontSize="25px" color="black">
            Заказ услуги
          </Text>
          {serviceData.category+`/`+serviceData.title}
          <Controller
            name="username"
            control={control}
            rules={nameInputOptions}
            render={({ field: { onBlur, value = '', name } }) => (
              <Input
                label="Ваше Имя"
                name={name}
                placeholder="Как к вам обращаться?"
                errorMessage={errors?.username?.message}
                options={nameInputOptions}
                register={register}
              />
            )}
          ></Controller>
          <Controller
            name="phone"
            control={control}
            rules={phoneInputOptions}
            render={({ field: { onChange, onBlur, value = '', name } }) => (
              <Input
                name={name}
                label="Номер телефона"
                placeholder="+7 xxx xxx xx xx"
                type="tel"
                register={register}
                errorMessage={errors?.phone?.message}
                options={phoneInputOptions}
                renderCustomInput={() => (
                  <InputMask
                    name={name}
                    placeholder="+7 (999) 999-99-99"
                    mask="+7\(999\)\-999\-99-99"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            )}
          />
          <Controller
            name="link"
            control={control}
            rules={linkInputOptions}
            render={({ field: { onChange, onBlur, value = '', name } }) => (
              <Input
                name={name}
                label="Ссылка"
                type="link"
                placeholder="Ссылка на сайт компании или проект"
                register={register}
                errorMessage={errors?.link?.message}
              />
            )}
          />
          <Controller
            name="deadline"
            control={control}
            rules={deadlineInputOptions}
            render={({ field: { onChange, onBlur, value = '', name } }) => (
              <Input
                type="date"
                name={name}
                label="Установите дедлайн"
                placeholder="Дедлайн"
                register={register}
                errorMessage={errors?.deadline?.message}
              />
            )}
          />
          <Button text="Отправить" type="submit">
            Заказать
          </Button>
        </FormContent>
      )}
    </Modal>
  );
}

export default ModalForm;
