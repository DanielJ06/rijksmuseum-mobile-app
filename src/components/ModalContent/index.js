import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import { api, key } from '../../services/api';

import { 
  Container,
  Box,
  Color, 
  Colors, 
  Percent, 
  Preview, 
  Title,
  Maker,
  Description,
  Section,
  Table,
  Row,
  Left,
  Right,
  SpanContainer,
  Span
} from './styles';

const ModalContent = ({ art }) => {
  const [object, setObject] = useState({});

  useEffect(() => {
    (async () => {
      const res = await api.get(`collection/${art}?key=${key}`)
      setObject(res.data);
    })()
  }, []);

  return (
    <Container>
      {object.artObject ? (
        <>
          <Title>
            {object.artObject.titles[0] ? object.artObject.titles[0] : object.artObject.title} - {object.artObject.dating.presentingDate}
          </Title>
          
          <Box>
            <Icon name="pen-tool" size={25} />
            <Maker>{object.artObject.principalMaker}</Maker>
          </Box>

          <Table>
            <Row>
              <Left>Acquisition method:</Left>
              <Right>{object.artObject.acquisition.method}</Right>
            </Row>
            <Row>
              <Left>Medium:</Left>
              <Right>{object.artObject.physicalMedium}</Right>
            </Row>
          </Table>

          <SpanContainer>
            <Span>{object.artObject.subTitle}</Span>
            {object.artObject.materials ? object.artObject.materials.map(mat => (
              <Span key={mat}>{mat}</Span>
            )) : <></>}
            {object.artObject.classification ? object.artObject.classification.places.map(place => (
              <Span key={place}>{place}</Span>
            )) : <></>}
          </SpanContainer>

          <Description>{object.artObjectPage.plaqueDescription}</Description>
          
          <Section>Colors</Section>
          <Colors>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
            >
              {object.artObject.colors ? object.artObject.colors.map((color) => (
                <Color key={color.hex} >
                  <Preview color={color.hex} />
                  <Percent>{color.percentage}%</Percent>
                </Color>
              )) : <></>}
            </ScrollView>
          </Colors>
        </>
      ) : <></>}
    </Container>
  );
}

export default ModalContent;