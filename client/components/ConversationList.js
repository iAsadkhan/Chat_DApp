import styles from "../styles/conversationList.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import DmCard from "./DmCard";

const ConversationList = () => {
	const [dms, setDms] = useState([]);

	useEffect(() => {
		async function getDms() {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/getdms`
				);

				setDms(await response.json());
			} catch (error) {
				console.error(error);
			}
		}
		getDms();
	}, []);
	return (
		<div className={styles.conversations}>
			<div className={styles.conversationListTop}>
				<input type="search" placeholder="Find or start a conversation" />
			</div>
			<div className={styles.conversationsContainer}>
				<div className={styles.elementsContainer}>
					<div className={styles.svgContainer}>
						<Image
							height={25}
							width={25}
							src={"/assets/icons/friends.svg"}
							className={styles.svg}
							alt="friends"
						/>
					</div>
					<p>Fiends</p>
				</div>
				<div className={styles.elementsContainer}>
					<div className={styles.svgContainer}>
						<Image
							height={25}
							width={25}
							src={"/assets/icons/nitro.svg"}
							className={styles.svg}
							alt="nitro"
						/>
					</div>
					<p>Nitro</p>
				</div>
				<div className={styles.dmTitle}>DIRECT MESSAGES</div>
				{dms.map((dm, index) => (
					<DmCard
						key={index}
						name={dm.name}
						id={dm.id}
						avatar={
							dm.avatar ||
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU"
						}
						status="online"
					/>
				))}
			</div>
		</div>
	);
};

export default ConversationList;
