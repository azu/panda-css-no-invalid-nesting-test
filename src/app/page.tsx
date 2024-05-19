import styles from "./page.module.css";
import { Heading } from "@/app/Heading";
import { css } from "../../styled-system/css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Heading size="2xl">
                Title
            </Heading>
            <p className={css({
                fontSize: "2xl"
            })}>Test text</p>
        </main>
    );
}
