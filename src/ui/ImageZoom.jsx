import ReactImageMagnify from "react-image-magnify";

function ImageZoom({ src }) {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: src,
        },
        largeImage: {
          src: src,
          width: 900,
          height: 700,
        },
      }}
    />
  );
}

export default ImageZoom;
