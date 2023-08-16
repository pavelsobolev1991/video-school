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
import MessageSuccess from '../../../Components/Message';
import TextField from '../../../Components/TextField';
import Block from '../../../Components/Block';
import InputNotController from '../../../Components/InputNotController';

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

const descriptionInputOptions = {
  required: 'Введите описание проекта',
  minLength: {
    value: 150,
    message: 'Описание проекта должно содержать не менее 150 символов',
  },
};

const ModalServiceForm = ({ showModal, onClose }) => {
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

  const onSubmit = (data) => {
    if (step === 2) {
      data = { ...formData, ...data };
      console.log('Form data:', data);
      // Dispatch the serviceThunk or handle the form submission here
      // dispatch(serviceThunk(data));
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
        rules={{ required: 'Description is required' }}
        render={({ field }) => <input {...field} placeholder="Description" />}
      />
      
      <Controller
        name="deadline"
        control={control}
        rules={{ required: 'Deadline is required' }}
        render={({ field }) => <input {...field} type="date" placeholder="Deadline" />}
      />
      <Button type="button" onClick={handlePreviousStep}>
        Back
      </Button>
      <Button type="submit">Submit</Button>
    </>
  );

  return (
    <FormContent onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && RenderStepOne}
      {step === 2 && RenderStepTwo}
    </FormContent>
  );
};

export default ModalServiceForm;

// const ModalServiceForm = ({ showModal, onClose }) => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: 'onBlur',
//   });

//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   // console.log('formData', formData)
//   // console.log('step', step)
//   console.log('handleSubmit', handleSubmit);
//   const onSubmit = (data) => {
//     console.log('onSubmit');
//     if (step === 2) {
//       console.log('step2');
//       // If it's the final step, merge all the form data and submit
//       data = { ...formData, ...data };
//       console.log('Form data:', data);
//       // Dispatch the serviceThunk or handle the form submission here
//       // dispatch(serviceThunk(data));
//     } else {
//       // If it's not the final step, store the form data and proceed to the next step
//       setFormData(data);
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handlePreviousStep = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <FormContent onSubmit={handleSubmit(onSubmit)}>
//       <Text fontSize="25px" color="black">
//         Отправить заявку
//       </Text>
//       <Text>{step === 1 ? 'Шаг 1' : 'Шаг 2'}</Text>
//       {step === 1 && (
//         <>
//           <Controller
//             name="username"
//             control={control}
//             rules={nameInputOptions}
//             render={({ field: { onBlur, value = '', name } }) => (
//               <Input
//                 label="Ваше Имя"
//                 name={name}
//                 placeholder="Как к вам обращаться?"
//                 errorMessage={errors?.username?.message}
//                 options={nameInputOptions}
//                 register={register}
//               />
//             )}
//           ></Controller>
//           <Controller
//             name="phone"
//             control={control}
//             rules={phoneInputOptions}
//             render={({ field: { onChange, onBlur, value = '', name } }) => (
//               <Input
//                 name={name}
//                 label="Номер телефона"
//                 placeholder="+7 xxx xxx xx xx"
//                 type="tel"
//                 register={register}
//                 errorMessage={errors?.phone?.message}
//                 options={phoneInputOptions}
//                 renderCustomInput={() => (
//                   <InputMask
//                     name={name}
//                     placeholder="+7 (999) 999-99-99"
//                     mask="+7\(999\)\-999\-99-99"
//                     value={value}
//                     onChange={onChange}
//                     onBlur={onBlur}
//                   />
//                 )}
//               />
//             )}
//           />
//           <Controller
//             name="link"
//             control={control}
//             rules={linkInputOptions}
//             render={({ field: { onChange, onBlur, value = '', name } }) => (
//               <Input
//                 name={name}
//                 label="Ссылка"
//                 type="link"
//                 placeholder="Ссылка на сайт компании или проект"
//                 register={register}
//                 errorMessage={errors?.link?.message}
//               />
//             )}
//           />
//         </>
//       )}
//       {step === 2 && (
//         <>
//           <Controller
//             name="description"
//             control={control}
//             rules={descriptionInputOptions}
//             render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
//               <TextField
//                 name={name}
//                 label="Описание проекта"
//                 placeholder="Описание проекта"
//                 onChange={onChange}
//                 onBlur={onBlur}
//                 error={error}
//               />
//             )}
//           />
//           <Controller
//             name="deadline"
//             control={control}
//             rules={deadlineInputOptions}
//             render={({ field: { onChange, onBlur, value = '', name }, fieldState: { error } }) => (
//               <Input
//                 type="date"
//                 name={name}
//                 label="Установите дедлайн"
//                 placeholder="Дедлайн"
//                 onChange={onChange}
//                 onBlur={onBlur}
//                 value={value}
//                 error={error}
//               />
//             )}
//           />
//           <Button type="button" onClick={handlePreviousStep}>
//             Назад
//           </Button>
//         </>
//       )}
//       <Button type="submit">{step === 1 ? 'Далее' : 'Отправить'}</Button>
//     </FormContent>
//   );
// };

// export default ModalServiceForm;
