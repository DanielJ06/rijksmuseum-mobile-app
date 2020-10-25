import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 32px 25px;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: left;
`;

export const Maker = styled.Text`
  font-size: 21px;
  margin-left: 8px;
`;

export const Description = styled.Text`
  font-size: 18px;
  margin-top: 15px;
`;

export const Section = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Colors = styled.View`
  background-color: #eee;
  padding: 25px 15px;
  border-radius: 10px;
`;

export const Table = styled.View`
  padding: 10px;
  margin-top: 15px;
  border-top-color: #ddd;
  border-top-width: 1px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export const Left = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export const Right = styled.Text`
  font-size: 17px;
  text-transform: capitalize;
`;

export const SpanContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Span = styled.Text`
  background-color: #eee;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  margin: 5px;
`;

export const Color = styled.View`
  margin: 0 10px;
  flex-direction: row;
  align-items: center;
`;

export const Preview = styled.View`
  width: 21px;
  height: 21px;
  border-radius: 10px;
  background-color: ${props => props.color};
`;

export const Percent = styled.Text`
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
`;
