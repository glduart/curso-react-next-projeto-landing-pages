import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Home />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>
);
