'use client';
import Title from "@/components/Title";
import Image from 'next/image';
import styles from './AboutMe.module.css';
import profile from '../../assets/images/mypic.png';
import DownloadButton from "@/components/DownloadButton";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
const about = () => {
  return (
    <main className={styles.about}>
      <div className={styles.space}>
        <Title title={'ABOUT ME'} />
        <section className={styles['image-container']}>
          <Image
            src={profile}
            alt="Picture of me"
          />
          </section>
        <section className={styles['about-info']}>
          <h5>Salsabeel Alzaqa</h5>
          <p>Frontend Developer</p>
        </section>
        <div className={styles["horizontal-line"]}></div>
        <section className={styles['about-info']}>
          <p>Hi, my name is Salsabeel Alzaqa and a Front-end developer with a year of practical experience.</p>
          <p>Created a web interface that is easy to use and keeps up with the latest developments in technology.</p>
          <p>Committed to working as a team, troubleshooting issues, and cooperating in the existing setting.
            dedicated to learning new abilities and developing oneself, always aiming for perfection in all undertakings.</p>
        </section>
        <div className={styles["horizontal-line"]}></div>
        <section className={styles['about-details']}>
          <div className={styles['about-details-column']}>
            <div className={styles['column-headers']}>
              <h6>Birthday:</h6>
              <h6>Age:</h6>
              <h6>Address:</h6>
              <h6>Email:</h6>
              <h6>Phone:</h6>
            </div>
            <div className={styles['column-info']}>
              <p>14.01.2001</p>
              <p>23</p>
              <p>Zawata.Nablus.Palestine</p>
              <p>salsabeel.alzaqa@gmail.com</p>
              <p>+972 595 822 464</p>
            </div>
          </div>
          <div className={styles['about-details-column']}>
            <div className={styles['column-headers']}>
              <h6>Nationality:</h6>
              <h6>Study:</h6>
              <h6>Degree:</h6>
              <h6>Interest:</h6>
              <h6>Freelance:</h6>
            </div>
            <div className={styles['column-info']}>
              <p>Palestinian</p>
              <p>An-Najah National University</p>
              <p>Bachelor of Computer Science</p>
              <p>Reading</p>
              <p>Available</p>
            </div>
          </div>
        </section>
        <div className={styles["horizontal-line"]}></div>
        <DownloadButton />
      </div>
      <section className={styles.skills}>
        <div className={styles.header}>
          <h3>MY SKILLS</h3>
        </div>
        <Skills />
        </section>
      <div className={styles.space}>
        <section className={styles.services}>
          <h3>What I Do</h3>
          <Services />
          </section>
      </div>
    </main>
  );
}

export default about;