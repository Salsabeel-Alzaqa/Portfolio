import Title from "@/components/Title";
import styles from './Contact.module.css';
import ContactForm from "@/components/ContactForm";
const page = () => {
  return (
    <main className={styles.contact}>
      <Title title={'CONTACT'} />
      <h3>Get in Touch</h3>
      <ContactForm />
    </main>
  )
}

export default page;