import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 0 25px;

`;

export const ArtContainer = styled(RectButton)``;

export const ArtImage = styled.Image`
  margin-top: 15px;
  border-radius: 12px;
  background-color: #ddd;
`;

export const Box = styled.View`
  position: absolute;
  left: 25px;
  bottom: 45px;
  padding: 0 50px 0 0;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 21px;
  text-align: left;
  text-transform: uppercase;
  color: white;
`;

export const Artist = styled.Text`
  font-size: 16px;
  text-align: left;
  text-transform: uppercase;
  color: white;
`;