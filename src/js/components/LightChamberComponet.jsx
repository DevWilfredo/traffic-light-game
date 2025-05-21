const LightChamberComponent = ({
  styles,
  value,
  activeColor,
  functionality,
}) => {
  return (
    <button
      className={`${styles} ${value === activeColor ? "activeChamber" : ""}`}
      onClick={() => functionality(value)}
    ></button>
  );
};

export default LightChamberComponent;
