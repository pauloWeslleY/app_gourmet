import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import "./sass/global.scss";
import theme from "./themes/theme";

const element = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(element).render(
   <React.StrictMode>
      <ChakraProvider theme={theme}>
         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
         <App />
      </ChakraProvider>
   </React.StrictMode>
);
