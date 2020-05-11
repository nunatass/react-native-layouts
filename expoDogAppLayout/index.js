import { registerRootComponent } from "expo";

import Start from "./src/screens/start";

import Home from "./src/screens/home";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Home);
