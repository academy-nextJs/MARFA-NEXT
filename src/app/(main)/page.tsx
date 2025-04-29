import CardCategorySlider from "@/components/common/Card/CardCategorySlider/CardCategorySlider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="w-full">
      </div>
        <CardCategorySlider/>
    </div>
  );
}
