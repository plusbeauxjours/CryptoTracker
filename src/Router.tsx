import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

function Router({ toggleDarkMode, isDarkMode }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin isDarkMode={isDarkMode} />
        </Route>
        <Route path="/">
          <Coins toggleDarkMode={toggleDarkMode} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
