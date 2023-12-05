import Title from "@/components/Title";
import styles from './Contact.module.css';
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
const page = () => {
  return (
    <AnimatedSection>
      <main className={styles.contact}>
        <Title title={'CONTACT'} />
        <h3>Get in Touch</h3>
        <ContactForm />
      </main>
    </AnimatedSection>
  );
}

export default page;