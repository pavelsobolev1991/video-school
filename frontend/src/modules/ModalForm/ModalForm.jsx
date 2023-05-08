import styled from 'styled-components';
import Modal from '../../Components/Modal';
import { Controller, useForm } from 'react-hook-form';
import Input from '../../Components/Input';
import Block from '../../Components/Block';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { serviceThunk } from '../../store/slices/service';
import InputMask from 'react-input-mask';

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const phoneInputOptions = {
  required: 'Введите номер телефона',
  validate: (value) => formatPhoneNumber(value).length === 10 || 'Введено менее 10 символов',
};

function ModalForm({ showModal, onClose }) {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    dispatch(serviceThunk(data));
  };

  return (
    <Modal isOpen={showModal} onClose={onClose} overlayHeight="60%" contentHeight="100%" top="20%">
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize="25px" color="black">
          Заказ услуги
        </Text>
        <Input name="name" placeholder="Как к вам обращаться?" register={register} />
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
          rules={phoneInputOptions}
          render={({ field: { onChange, onBlur, value = '', name } }) => (
            <Input
              name={name}
              label="Номер телефона"
              type="link"
              register={register}
              errorMessage={errors?.phone?.message}
              options={phoneInputOptions}
              renderCustomInput={() => (
                <InputMask
                  name={name}
                  mask="https://*************"
                  placeholder="Ссылка на проект или сайт компании"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          )}
        />
        <Button text="Отправить" type="submit">
          Заказать
        </Button>
      </FormContent>
    </Modal>
  );
}

export default ModalForm;
