import styles from "../styles/sidebar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RoomAvatar from "./RoomAvatar";
// import avatar1 from "../assets/avatar-1.webp";

const Sidebar = () => {
	const router = useRouter();
	const [channels, setChannels] = useState([]);
	// let dummyData = [];
	// for (var i = 0; i < 4; i++) {
	// 	dummyData.push({
	// 		roomId: i + 1,
	// 		roomName: "general" + i,
	// 		avatar: `/assets/avatar-${i + 1}.webp`,
	// 	});
	// }

	useEffect(() => {
		async function getChannels() {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/getchannels`
				);

				const data = await response.json();
				console.log(data);
				setChannels(data);

				router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`);
			} catch (error) {
				console.error(error);
			}
		}
		getChannels();
	}, []);

	return (
		<div className={styles.wrapper}>
			{channels.map((channel, index) => (
				<RoomAvatar
					key={index}
					id={channel.roomId}
					avatar={channel.avatar}
					name={channel.roomName}
				/>
			))}
		</div>
	);
};

export default Sidebar;
