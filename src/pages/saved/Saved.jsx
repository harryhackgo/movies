import MovieView from "../../components/movie-view/MovieView";
import { useStateValue } from "../../context/mainContext";

const Saved = () => {
  const [state] = useStateValue();
  console.log(state.saved);
  return (
    <div>
      <MovieView data={state.saved} />
    </div>
  );
};

export default Saved;
