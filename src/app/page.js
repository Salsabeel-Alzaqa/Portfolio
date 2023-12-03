'use client';
import ProfileImage from '@/components/ProfileImage'
import Typewriter from 'typewriter-effect'; 
import styles from './Home.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.profile}>
        <ProfileImage />
      </section>
      <section className={styles.info}>
        <h2>SALSABEEL ALZAQA</h2>
        <h4>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Frontend Developer')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
        </h4>
        <p>Front End Developer located in Palestine, eager to collaborate on web projects and open to remote opportunities worldwide.</p>
        <div className={styles.media}>
          <Link href={'https://www.facebook.com/salsabeel.ibrahem/'}><FontAwesomeIcon icon={faFacebookF} /></Link>
          <Link href={'https://www.instagram.com/salsabeel.alzaqa/'}><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link href={'linkedin.com/in/salsabeel-alzaqa/'}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
        </div>
      </section>
    </main>
  );
}