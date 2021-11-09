import "./ScoreBlock.css";

const ScoreBlock: any = ({
  id,
  content,
  checkVal,
  selectMenuHandler,
  className,
  name,
}: any) => {
  return (
    <input
      name={name}
      type="button"
      className={className}
      value={content}
      onClick={(e) => {
        selectMenuHandler(id);
        checkVal(e);
      }}
      id={id}
    ></input>
  );
};

export default ScoreBlock;
