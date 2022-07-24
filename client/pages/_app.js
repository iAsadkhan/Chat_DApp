import { ChatProvider } from "context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ChatProvider>
			<Component {...pageProps} />
		</ChatProvider>
	);
}

export default MyApp;
