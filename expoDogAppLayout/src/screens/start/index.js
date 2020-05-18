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

/**
 * * Black dog image imported from assets
 * ! The image name must have the extension
 * ? All images in react native should have  @2x and @3x version
 *
 * TODO: Should have ~/src path as a home path
 * FIXME:
 * DONE: 
 * HACK:
 *
 * @param blackDog is a dog image variable with path to the image
 */

//
// TODO: have to do this function
// FIXME: have to be fixed
// BUG: some bug here
// DONE: its done
// HACK: its note the right way to do, but its working
//

console.log("hello");

import blackDog from "../../assets/blackdog.png";

export default function Strat() {
  return (
    <LinearGradient
      colors={["#F58281", "#D24C4A"]}
      locations={[0.1, 0.56]}
      start={[0.8, 0.1]}
      style={styles.gradient}
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
