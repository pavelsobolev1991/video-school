import styled from 'styled-components';
import Modal from '../../../Components/Modal';
import { Controller, useForm } from 'react-hook-form';
import Input from '../../../Components/Input';
import Text from '../../../Components/Text';
import Button from '../../../Components/Button';
import { useDispatch } from 'react-redux';
import { serviceThunk } from '../../../store/slices/service';
import InputMask from 'react-input-mask';
import { formatPhoneNumber } from '../../../functions/utils';
import { useState, useMemo, useCallback } from 'react';
import TextField from '../../../Components/TextField';
import Block from '../../../Components/Block';
import MessageSuccess from '../../../Components/Message';

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
    value: /^[a-zA-Z0-9_\-]+(\.[a-zA-Z]{2,})(\/[a-zA-Z0-9_\-]+)*(\?.*)?$/,
    message: 'Пример корректной ссылки - mysite.ru',
  },
};
const deadlineInputOptions = {
  required: 'Установите дату дедлайна',
  validate: (value) => !!value || 'Выберите дату дедлайна',
};

const descriptionInputOptions = {
  required: 'Введите описание проекта',
  minLength: {
    value: 150,
    message: 'Описание проекта должно содержать не менее 150 символов',
  },
};

const ModalServiceForm = ({ showModal, onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const onSubmit = (data) => {
    if (step === 2) {
      data = { ...formData, ...data };
      dispatch(serviceThunk(data));
      setSuccessMessageVisible(true);
    } else {
      setFormData(data);
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const RenderStepOne = (
    <>
      <Text fontSize="25px" color="black">
        Отправить заявку
      </Text>
      <Text>Шаг 1</Text>
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
      />
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
        u
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
      <Button type="submit">Далее</Button>
    </>
  );

  const RenderStepTwo = (
    <>
      <Text fontSize="25px" color="black">
        Отправить заявку
      </Text>
      <Text>Шаг 2</Text>
      <Controller
        name="description"
        control={control}
        rules={descriptionInputOptions}
        render={({ field: { onBlur, name } }) => (
          <TextField
            name={name}
            label="Описание проекта"
            placeholder="Описание проекта"
            register={register}
            errorMessage={errors?.description?.message}
          />
        )}
      />

      <Controller
        name="deadline"
        control={control}
        rules={deadlineInputOptions}
        render={({ field: { onBlur, value = '', name } }) => (
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
      <Button type="button" onClick={handlePreviousStep} bgColor={"gray"}>
        Назад
      </Button>
      <br/>
      <Button type="submit">Отправить заявку</Button>
    </>
  );

  return (
    <>
      {successMessageVisible ? (
        <MessageSuccess serviceData={''} />
      ) : (
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && RenderStepOne}
          {step === 2 && RenderStepTwo}
        </FormContent>
      )}
    </>
  );
};

export default ModalServiceForm;