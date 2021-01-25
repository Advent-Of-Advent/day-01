import puzzles from "puzzles";

const ID = "123456789";

const Route = () => {
  const input = puzzles[0].create(ID);

  return (
    <div>
      <pre>{input}</pre>
    </div>
  );
};

export default Route;
