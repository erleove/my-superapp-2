import ReactDOM from "react-dom/client";
import { AppRouter } from "./providers/router/RouterProvider";
import "@/app/styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<AppRouter />);
