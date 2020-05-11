import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import styles, {
  TopContainer,
  Title,
  SubTitle,
  SignInBtn,
  BtnText,
  DogImg,
  Square,
} from "./styles";

import blackDog from "../../assets/blackdog.png";

export default function Strat() {
  return (
    <LinearGradient
      colors={["#F58281", "#D24C4A"]}
      locations={[0.1, 0.56]}
      strat={[0.8, 0.1]}
      style={styles.gradiente}
    >
      <TopContainer>
        <Title>Fondle</Title>
        <SubTitle>{"Happy Home for a pet is a\nhappy home for you"}</SubTitle>
        <SignInBtn
          onPress={() => {
            console.log("ok");
          }}
        >
          <BtnText>Sign In</BtnText>
        </SignInBtn>
      </TopContainer>
      <DogImg source={blackDog} resizeMode="contain" />
      <Square />
    </LinearGradient>
  );
}
