import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export const TopContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 60%;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 80px;
  text-transform: uppercase;
`;
export const SubTitle = styled.Text`
  color: #ffffff70;
  font-size: 20px;
  text-align: center;
  margin-top: 25px;
`;
export const SignInBtn = styled.TouchableOpacity`
  margin-top: 25px;
  background-color: #fff;
  width: 246px;
  height: 46px;
  justify-content: center;
  border-radius: 23px;
`;

export const BtnText = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: center;
`;

export const Square = styled.View`
  background-color: #3c445e60;
  width: 100%;
  height: 419px;
  position: absolute;
  bottom: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const DogImg = styled.Image`
  position: absolute;
  bottom: 0px;
  width: 492px;
  height: 419px;
`;
