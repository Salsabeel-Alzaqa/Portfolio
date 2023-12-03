import styles from './ProfileImage.module.css';
const ProfileImage = () => {
    return (
        <div className={styles["blob-effect"]}>
            <span></span>
            <span></span>
            <span></span>
            <span className={styles["circle"]}></span>
        </div>
    );
}

export default ProfileImage;