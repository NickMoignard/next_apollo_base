const AnimatedSticker = ({ text }) => {
  return <div className="sticker">{text}</div>;
};

AnimatedSticker.defaultProps = {
  text: "checkout this animated sticker!",
};

export default AnimatedSticker;
