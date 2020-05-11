import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import whiteDog from "../../assets/whitedog.png";
import ownerPic from "../../assets/ownerpic.png";

import styles, {
  DogImage,
  Card,
  CardHead,
  DogNameAndRace,
  DogName,
  DogRace,
  DogAgeAndGender,
  DogAge,
  DogGender,
  CrdBody,
  CardOwnerInfo,
  OnwerPicture,
  OwnerName,
  Date,
  CradDescroption,
  CardBtn,
  BtnTitle,
} from "./styles";

export default function Home() {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={["#22888A", "#044A57"]}
      start={[1, 0.003]}
      locations={[0.1, 1]}
    >
      <DogImage source={whiteDog} />
      <Card>
        <CardHead>
          <DogNameAndRace>
            <DogName>Bolt</DogName>
            <DogRace>Dalmatian dog</DogRace>
          </DogNameAndRace>
          <DogAgeAndGender>
            <DogAge>2 year old</DogAge>
            <DogGender>male</DogGender>
          </DogAgeAndGender>
        </CardHead>
        <CrdBody>
          <CardOwnerInfo>
            <OnwerPicture source={ownerPic} />
            <OwnerName>John Doe</OwnerName>
            <Date>18 Oct 2019</Date>
          </CardOwnerInfo>
          <CradDescroption>
            Hundreds of pets are abandoned and rescued in India everyday.
            Although there are many wonderful souls across the nation who work
            extra hours and put in efforts beyond their capacity, there is
            always a shortage
          </CradDescroption>
          <CardBtn>
            <BtnTitle>Adoption</BtnTitle>
          </CardBtn>
        </CrdBody>
      </Card>
    </LinearGradient>
  );
}
