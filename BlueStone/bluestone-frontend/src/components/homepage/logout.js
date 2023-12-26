
import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
}
};
 function logout(){
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};
export default logout;