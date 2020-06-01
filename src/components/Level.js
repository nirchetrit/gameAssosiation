import React, { useState, useEffect, useRef } from "react";
import Pic from "./Pic";
import getRandomInt from "../helpers/getRandomInt";
function getIsMatched(img1, img2) {
  return img1 === img2;
}

const onImageClick = ({ image, setCorrespondImage }) => (event) => {
  setCorrespondImage(image);
};
const addImgToArrayAtRandomIdx = (imgsArray, img) => {
  const imgArray = imgsArray.map((img) => img);
  imgArray.splice(getRandomInt(imgsArray.length), 0, img);
  return imgArray;
};
// const addImgToArrayAtRandomIdx = (imgsArray, img) => {
//   return imgsArray
//     .map((img) => img)
//     .splice(getRandomInt(imgsArray.length), 0, img);
// };
function Level({ imgPair, extraImages, onSolved, levelNumber }) {
  const firstMatchingImage = imgPair[0];
  const secondMatchingImage = imgPair[1];
  const [corredspondImage, setCorrespondImage] = useState("empty");
  const isMatched = getIsMatched(secondMatchingImage, corredspondImage);

  const extraImagesToDraw = useRef(
    addImgToArrayAtRandomIdx(extraImages, secondMatchingImage)
  );
  console.log(extraImagesToDraw);
  useEffect(() => {
    extraImagesToDraw.current = addImgToArrayAtRandomIdx(
      extraImages,
      secondMatchingImage
    );
  }, [levelNumber]);

  if (isMatched) {
    onSolved();
  }

  const pics = extraImagesToDraw.current.map((img) => {
    return (
      <Pic
        key={img}
        imgSrc={img}
        onClick={onImageClick({
          image: img,
          setCorrespondImage: setCorrespondImage,
        })}
      />
    );
  });
  if (corredspondImage === secondMatchingImage) {
    setCorrespondImage(<Pic imgSrc={"empty"} />);
  }

  return (
    <div>
      <h1>you are at level number:{levelNumber}</h1>
      <Pic
        imgSrc={firstMatchingImage}
        onClick={onImageClick({
          image: firstMatchingImage,
          setCorrespondImage: setCorrespondImage,
        })}
      />
      {corredspondImage}
      <div>{pics}</div>
    </div>
  );
}
export default Level;
