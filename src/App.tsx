import {Player} from "./components/Player.tsx";
import {TimerChallenge} from "./components/TimerChallenge.tsx";

function App() {

  return (
      <>
        <Player />
        <div id="challenges">
          <TimerChallenge title={"Easy"} targetTime={1} />
          <TimerChallenge title={"Modest"} targetTime={5} />
          <TimerChallenge title={"Hard"} targetTime={15} />
          <TimerChallenge title={"Hardest"} targetTime={60} />
        </div>
      </>
)
}

export default App
