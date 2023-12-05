import styles from './Services.module.css';
import HexagonalShape from "../HexagonalShape";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop , faGaugeSimpleHigh , faLightbulb , faRocket} from '@fortawesome/free-solid-svg-icons';

const servicesItem = [
    { icon:<FontAwesomeIcon icon={faGaugeSimpleHigh} />, label: 'Fast', info: 'Fast load times and lag free interaction, my highest priority.' },
    {icon:<FontAwesomeIcon icon={faLaptop} />,label:'Responsive',info:'My layouts will work on any device, big or small.'},
    {icon:<FontAwesomeIcon icon={faLightbulb} />,label:'Intuitive',info:'Strong preference for easy to use, intuitive UX/UI.'},
    {icon:<FontAwesomeIcon icon={faRocket} />,label:'Dynamic',info:`Websites don't have to be static, I love making pages come to life.`},
]
const Services = () => {
    return (
        <div className={styles['service-container']}>
            {
                servicesItem.map((item, index) => (
                    <div className={styles['item-info']} key={index}>
                        <HexagonalShape icon={item.icon} />
                        <h6>{item.label}</h6>
                        <p className={styles.det}>{item.info}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Services
