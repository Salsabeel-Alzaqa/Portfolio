import Title from "@/components/Title";
import ProjectCard from "@/components/ProjectCard";
import commerce from '../../assets/images/e-commerce.png';
import pos from '../../assets/images/pos.avif';
import bookstore from '../../assets/images/bookstore.png';
import zone from '../../assets/images/zone.jpg';
import styles from './MyProjects.module.css';
const projects = [
  { id: 0, img: commerce, name: 'E-Commerce', info: 'This is a frontend E-Commerce website using React, that offers a user-friendly interface for browsing, purchasing, and managing Items. Users can explore, shop, login, add Items to their cart and wishlist, view Item details, and place orders.Note uses this to see full project: Email:john.doe@example.com  Password:ayham123', url: 'https://jsd-0923.github.io/frontend-final-3/', date: '10/2023 - 11/2023' },
  { id: 1, img: bookstore, name: 'Bookstore', info: 'This is a frontend book store using React, that offers a user-friendly interface for browsing, purchasing, and managing books. Users can explore, shop, create accounts, add books to their cart and wishlist, view book details, and place orders.', url: 'https://github.com/Salsabeel-Alzaqa/E-commerce', date: '5/2023 - 6/2023' },
  { id: 3, img: pos, name: 'A POS', info: 'Developed a supermarket web application using HTML, CSS, Bootstrap, JavaScript,and React.js. Enabled real-time updates to the products and categories list through React.js, enhancing user experience.', url: 'https://github.com/Salsabeel-Alzaqa/A-point-of-sale-system-reactjs', date: '10/2022 - 11/2022' },
  { id: 4, img: zone, name: 'A Business Recommender System Based on Zones and Commercial Data', info: 'Website allow the user to enter his capital and a spisific area and then the website will give him the suitable job for that area.', url: 'https://github.com/Salsabeel-Alzaqa/A-Business-Recommender-System', date: '10/2022 - 11/2022' },
];
const page = () => {
  return (
    <main>
      <Title title={'MY PROJECTS'} />
      <div className={styles['projects-container']}>
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </main>
  )
}

export default page;