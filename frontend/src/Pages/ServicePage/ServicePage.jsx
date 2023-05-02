import React from 'react';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import Block from '../../Components/Block';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import Button from '../../Components/Button'

function ServicePage({ title }) {
  return (
    <>
      <Header />
      <Block bgColor="black" height="90vh" padding="80px 50px 0 50px" justifyContent="center">
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
        <Block display="flex" flexDirection="column" border="1px solid white">
          <Text color="white" fontSize="20px">Фотоконтент</Text>
          <Text color="white"> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga. </Text>
          <Text fontSize="30px" color="white">5000$</Text>
          <Button>Заказать услугу</Button>
        </Block>
      </Block>
      <Footer />
    </>
  );
}

export default ServicePage;
