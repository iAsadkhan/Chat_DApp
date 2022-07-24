import { useContext } from "react";
import { ChatContext } from "context/context";
import styles from "../styles/messageForm.module.css";
// import plusFilled from "/assets/icons/plus-filled.svg";
// import sticker from "/assets/icons/sticker.svg";
// import smiley from "/assets/icons/smiley.svg";
// import gift from "/assets/icons/gift.svg";
// import gif from "/assets/icons/gif.svg";
import Image from "next/image";

const MessageForm = () => {
	const {
		messageText,
		setMessageText,
		placeholder,
		gun,
		roomName,
		currentAccount,
		currentUser,
	} = useContext(ChatContext);

	const sendMessage = (event) => {
		event.preventDefault();
		if (messageText.trim() === "") return;

		const messagesRef = gun.get(roomName);

		const newMessage = {
			sender: currentUser.name,
			avatar: currentUser.avatar
				? currentUser.avatar
				: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU",
			content: messageText.trim(),
			createdAt: Date().substring(4, 11),
			messageId: Date.now(),
		};

		messagesRef.set(newMessage);
		setMessageText("");
	};

	return (
		<form
			onSubmit={(event) => sendMessage(event)}
			className={styles.chatInputContainer}
		>
			<div className={styles.chatInputWrapper}>
				<div className={styles.svgContainer}>
					<Image
						height={25}
						width={25}
						src={"/assets/icons/plus-filled.svg"}
						className={styles.svg}
					/>
				</div>
				<input
					type="text"
					className={styles.chatInput}
					value={messageText}
					disabled={currentAccount.name}
					onChange={(e) => setMessageText(e.target.value)}
					placeholder={placeholder}
				/>

				<div className={styles.svgContainer}>
					<Image
						height={25}
						width={25}
						src={"/assets/icons/gift.svg"}
						className={styles.svg}
					/>
				</div>
				<div className={styles.svgContainer}>
					<Image
						height={25}
						width={25}
						src={"/assets/icons/gif.svg"}
						className={styles.svg}
					/>
				</div>
				<div className={styles.svgContainer}>
					<Image
						height={25}
						width={25}
						src={"/assets/icons/sticker.svg"}
						className={styles.svg}
					/>
				</div>
				<div className={styles.svgContainer}>
					<Image
						height={25}
						width={25}
						src={"/assets/icons/smiley.svg"}
						className={styles.svg}
					/>
				</div>
			</div>
		</form>
	);
};

export default MessageForm;
