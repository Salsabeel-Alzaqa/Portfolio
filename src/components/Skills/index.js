import styles from './skills.module.css';
const programming = [
    {
        label: 'HTML', percent: 90
    },
    {
        label: 'CSS', percent: 80
    },
    {
        label: 'JavaScript', percent: 75
    },
    {
        label: 'React', percent: 72
    },
    {
        label: 'C++', percent: 75
    },
    {
        label: 'Java', percent: 60
    },
]
const Skills = () => {
    return (
        <div className={styles['skill-container']}>
                {
                    programming.map((skill,index) => (
                        <div className={styles['programming-skill']} key={index}>
                            <div className={styles['skill-label']}>
                                <h6>{skill.label}</h6>
                                <h6>{skill.percent}%</h6>
                            </div>
                            <div className={styles['skill-progress']}>
                                <div style={{ width: `${skill.percent}%` }} className={styles['progress-bar']}></div>
                            </div>
                        </div>
                    ))
                }
        </div>
    );
}
export default Skills
