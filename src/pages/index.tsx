import styles from "@styles/Home.module.css";
import PageTitle from "@ui/components/data-display/PageTitle";

export default function Home() {
  return (
    <div className={styles.container}>
      <PageTitle title="Title" subtitle="Subtitulo da página" />
    </div>
  );
}
