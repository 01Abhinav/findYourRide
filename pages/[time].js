export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <footer className={styles.footer}>
        <Link href="/temp">made by abhinav</Link>
      </footer>
    </div>
  );
}
