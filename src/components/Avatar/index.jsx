/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export const Avatar = ({ image, size }) => {
  // let imageSrc = "";
  // testImage(image, imageSrc)
  return (
    <Styled.img
      src={image}
      // onerror={`this.src=${DefaultAvatar}`}
      sx={{
        width: size === "large" ? [8, 8, 8] : 6,
        height: size === "large" ? [8, 8, 8] : 6,
        borderRadius: "50%",
        padding: 2,
        maxWidth: "100%"
      }}
    />
  );
};

// function testImage(image: any, imageSrc: any) {
//   var tester = new Image();
//   tester.src = image;
//   tester.onload = imageFound(image, imageSrc);
//   tester.onerror = imageNotFound;
// }

// function imageFound(image: any, imageSrc: any) {
//   imageSrc = image;
// }

// function imageNotFound() {
//   alert("That image was not found.");
// }

