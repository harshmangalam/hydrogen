import axios from "axios";
import { Suspense } from "solid-js";
import Snackbars from "./components/root/Snackbars";
import AppLoader from "./components/shared/AppLoader";
import useNetworkStatus from "./hooks/useNetworkStatus";
import useLogoutBroadcast from "./hooks/auth/useLogoutBroadcast";
import AppRouter from "./router";

axios.defaults.baseURL = import.meta.env.VITE_ENDPOINT;
axios.defaults.withCredentials = true;

function App() {
  useNetworkStatus();
  useLogoutBroadcast();
  return (
    <Suspense fallback={<AppLoader />}>
      <AppRouter />
      <Snackbars />
    </Suspense>
  );
}

export default App;
