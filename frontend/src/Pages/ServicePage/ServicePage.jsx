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
import ServiceForm from '../../modules/ServiceForm/ServiceForm';
import { useMediaQuery } from 'react-responsive';

function ServicePage({ title }) {
  const [showModal, setShowModal] = useState(false);
  const [serviceData, setServiceData] = useState();
  const breakpointOne = useMediaQuery({ maxWidth: 1100 });

  return (
    <Block bgColor="black" display="flex" justifyContent="center">
      <Block maxWidth="1920px">
        <Header />
        <Block bgColor="black" padding="20px 80px 0 80px" justifyContent="center">
          <Title fontSize="30px" color="white">
            Услуги
          </Title>
          <Text fontSize="20px" color="white">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </Text>
          <ServiceForm />
          <Text fontSize="25px" color="white">
            Промо
          </Text>
          <Text fontSize="20px" color="white">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati
          </Text>
          <Block display="flex" flexDirection={breakpointOne ? 'column' : 'row'} gap="2%">
            <ServiceCard
              title="Фотоконтент"
              description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga."
              category="Промо"
              price="5000$"
              setShowModal={setShowModal}
              setServiceData={setServiceData}
              // onClick={()=>handleServiceClick(title)}
            />
            <ServiceCard
              title="Фотоконтент + Видеоконтент"
              description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga."
              category="Промо"
              price="10 000$"
              setShowModal={setShowModal}
              setServiceData={setServiceData}
              // onClick={handleServiceClick}
            />
            <ServiceCard
              title="Фотоконтент + Видеоконтент + Анимация"
              description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga."
              category="Промо"
              price="15 000$"
              setShowModal={setShowModal}
              setServiceData={setServiceData}
              // onClick={handleServiceClick}
            />
          </Block>
        </Block>
        {showModal && (
          <ModalForm
            showModal={showModal}
            serviceData={serviceData}
            onClose={() => setShowModal(false)}
          />
        )}
        <Footer maxWidth="1920px" />
      </Block>
    </Block>
  );
}

export default ServicePage;
