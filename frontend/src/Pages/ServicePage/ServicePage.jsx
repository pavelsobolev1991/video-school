import React, { useState } from 'react';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import Block from '../../Components/Block';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import ServiceCard from '../../Components/ServiceCard';
import Modal from '../../Components/Modal';
import ModalForm from '../../modules/ModalForm/ModalForm';

function ServicePage({ title }) {
  const [showModal, setShowModal] = useState(false);

  const handleServiceClick = (project) => {
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <Block bgColor="black" padding="80px 50px 0 50px" justifyContent="center">
        <Title fontSize="30px" color="white">
          Услуги
        </Title>
        <Text fontSize="20px" color="white">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
          libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
          maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
          ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
          tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </Text>
        <Block display="flex" flexDirection="row" gap="2%" border="1px solid white">
          <Block>
            <Title fontSize="30px" color="white">
              Нам надо поговорить....
            </Title>
            <Text color="white">
              Заполните форму, указав всё что хотите указать, а также вкратце опишите проект, чтобы
              беседа была более конструктивной. Мы свяжемся с вами сразу как допьём кофе, включим
              компьютер и прочтём письмо.
            </Text>
          </Block>

          <Button color="#e28e10" padding="14px 70px">
            Пука цика
          </Button>
        </Block>
        <Text fontSize="25px" color="white">
          Промо
        </Text>
        <Text fontSize="20px" color="white">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          </Text>
        <Block display="flex" flexDirection="row" gap="2%">
          <ServiceCard
            title="Фотоконтент"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga."
            price="5000$"
            onClick={handleServiceClick}
          />
          <ServiceCard
            title="Фотоконтент + Видеоконтент"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga."
            price="10 000$"
            onClick={handleServiceClick}
          />
          <ServiceCard
            title="Фотоконтент + Видеоконтент + Анимация"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga."
            price="15 000$"
            onClick={handleServiceClick}
          />
        </Block>
      </Block>
      {showModal && <ModalForm showModal={showModal} onClose={() => setShowModal(false)} />}
      <Footer />
    </>
  );
}

export default ServicePage;
