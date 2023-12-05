import styles from './HexagonalShape.module.css';
const HexagonalShape = ({ icon }) => {
    return (
        <div className={styles.hexagon}>
            <i>{icon}</i>
        </div>
    )
}

export default HexagonalShape 
