import styled from "styled-components/native";

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const DogImage = styled.Image``;

export const Card = styled.View`
  position: absolute;
  width: 90%;
  height: 421px;
  background-color: #fff;
  border-radius: 30px;
  bottom: 40px;
  padding: 20px;
`;
export const CardHead = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const DogNameAndRace = styled.View``;
export const DogName = styled.Text`
  font-size: 25px;
  text-transform: uppercase;
  color: #386363;
  font-weight: bold;
`;
export const DogRace = styled.Text`
  font-size: 16px;
  color: #386363;
  font-weight: 500;
  margin-top: 15px;
`;
export const DogAgeAndGender = styled.View`
  flex: 1;
`;
export const DogAge = styled.Text`
  font-size: 20px;
  align-self: flex-end;
  text-transform: uppercase;
  color: #386363;
  font-weight: bold;
`;
export const DogGender = styled.Text`
  font-size: 16px;
  color: #386363;
  font-weight: 500;
  margin-top: 15px;
  align-self: flex-end;
`;

export const CardBody = styled.View`
  margin-top: 15px;
`;
export const CardOwnerInfo = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
export const OwnerPicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const OwnerName = styled.Text`
  color: #4a4a4a;
  font-size: 16px;
  font-weight: bold;
  margin-left: -30%;
`;
export const Date = styled.Text`
  color: #4a4a4a;
  font-size: 14px;
`;
export const CardDescription = styled.Text`
  margin-top: 15px;
  color: #4a4a4a;
  font-size: 12px;
  line-height: 28px;
  margin-bottom: 20px;
`;

export const CardBtn = styled.TouchableOpacity`
  width: 246px;
  height: 46px;
  align-self: center;
  background-color: #386363;
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;

export const BtnTitle = styled.Text`
  color: #fff;
  font-size: 18px;
`;
