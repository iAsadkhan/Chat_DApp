import Image from "next/image";

import styles from "../styles/chatHeader.module.css";

import { useContext } from "react";
import { ChatContext } from "../context/context";

const ChatHeader = () => {
	const { roomName, currentAccount, connectWallet } = useContext(ChatContext);
	return (
		<div className={styles.chatHeader}>
			<div className={styles.roomNameContainer}>
				<Image
					height={20}
					width={20}
					src={"/assets/icons/at.svg"}
					className={styles.svg}
					alt=""
				/>
				<h3 className={styles.title}>{roomName}</h3>
				<div className={styles.chatHeaderStatus} id="online" />
			</div>
			{currentAccount ? (
				<div className={styles.connectedWallet}>
					<Image src={"/assets/eth.png"} height={20} width={15} alt="ethLogo" />
					<span className={styles.separator}>{"|"}</span>
					{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
				</div>
			) : (
				<div className={styles.connectWallet} onClick={() => connectWallet()}>
					Connect Wallet
				</div>
			)}

			<div className={styles.headerIconsContainer}>
				<div className={styles.headerItem}>
					<Image
						height={25}
						width={25}
						src={"/assets/icons/phone.svg"}
						className={styles.svg}
						alt=""
					/>
				</div>
				<div className={styles.headerItem}>
					<Image
						height={25}
						width={25}
						src={"/assets/icons/video.svg"}
						className={styles.svg}
						alt=""
					/>
				</div>
			</div>
			<div className={styles.headerItem}>
				<Image
					height={25}
					width={25}
					src={"/assets/icons/pin.svg"}
					className={styles.svg}
					alt=""
				/>
			</div>
			<div className={styles.headerItem}>
				<Image
					height={25}
					width={25}
					src={"/assets/icons/person-plus.svg"}
					className={styles.svg}
					alt=""
				/>
			</div>
			<div className={styles.headerItem}>
				<input type="search" placeholder="Search" />
			</div>
			<div className={styles.headerItem}>
				<Image
					height={25}
					width={25}
					src={"/assets/icons/inbox.svg"}
					className={styles.svg}
					alt=""
				/>
			</div>
			<div className={styles.headerItem}>
				<Image
					height={25}
					width={25}
					src={"/assets/icons/help.svg"}
					className={styles.svg}
					alt=""
				/>
			</div>
		</div>
	);
};

export default ChatHeader;
