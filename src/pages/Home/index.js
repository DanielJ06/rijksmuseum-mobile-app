import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, FlatList, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { api, key } from '../../services/api';

import ModalContent from '../../components/ModalContent';

import { 
  Container, 
  ArtImage, 
  Title, 
  ArtContainer, 
  Box, 
  Artist 
} from './styles';

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState({});

  const modalizeRef = useRef(null);

  const { height } = Dimensions.get('window')
  const COL_HEIGHT = height * 0.8;

  const loadPages = async (pageNumber = page) => {
    const res = await api.get(`collection?key=${key}&imgonly&p=${pageNumber}`);
    setImages([...images, ...res.data.artObjects]);
    setPage(pageNumber + 1);
  }

  const handleOpen = (art) => {
    modalizeRef.current?.open();
    setSelected(art);
  }

  useEffect(() => {loadPages()}, []);

  return (
    <Container>
      <FlatList
        data={images}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadPages()}
        onEndReachedThreshold={0.1}
        keyExtractor={i => String(i.id)}
        renderItem={({ item }) => (
          <ArtContainer onPress={() => handleOpen(item.objectNumber)} >
            <ArtImage
              key={{ id: item.id }}
              source={{ uri: item.webImage.url }}
              style={{ 
                width: '100%', 
                height: COL_HEIGHT,
              }}
            />
            <Box>
              <Title numberOfLines={2}>{item.title}</Title>
              <Artist numberOfLines={2}>{item.principalOrFirstMaker}</Artist>
            </Box>
          </ArtContainer>
        )}
      />
      <Modalize ref={modalizeRef}>
        <ModalContent art={selected} />
      </Modalize>
    </Container>
  );
}

export default Home;