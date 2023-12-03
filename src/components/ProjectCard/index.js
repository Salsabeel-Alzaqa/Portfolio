// import Image from "next/image";
// import styles from "./ProjectCard.module.css";
// import Link from "next/link";

// const ProjectCard = ({ name, date, url, info, img }) => {
//     return (
//     <div className={styles.projectCard}>
//       <div className={styles.imageContainer}>
//         <Image src={img} alt="project image" layout="fill" objectFit="cover" />
//         <div className={styles.overlay}>
//           <Link href={url} className={styles.move}>
//             View Project
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

const ProjectCard = ({ name, date, url, info, img }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <Image src={img} alt="project image" layout="fill" objectFit="cover" />
        <div className={styles.overlay}>
          <Link href={url} className={styles.move}>
            View Project
          </Link>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.nameDate}>{name} - {date}</p>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  );
};

export default ProjectCard;