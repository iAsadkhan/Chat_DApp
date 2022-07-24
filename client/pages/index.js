import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import ConversationList from "../components/ConversationList";
import ChatView from "components/ChatView";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<div className={styles.main}>
				<ConversationList />
				<ChatView />
			</div>
		</div>
	);
}
