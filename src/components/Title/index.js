import styles from './Title.module.css'; 

const Title = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.titleText}>{title}</h2>
    </div>
  );
};

export default Title;