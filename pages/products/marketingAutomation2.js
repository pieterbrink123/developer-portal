import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
    const moosend = await getMarkdownData("moosend.md");
    const sitecoreXPMarketingAutomation = await getMarkdownData("sitecoreXPMarketingAutomation.md");

    return {
        props: {
            moosend,
            sitecoreXPMarketingAutomation,
        },
    };
}

export default function MarketingAutomation2({ moosend, sitecoreXPMarketingAutomation }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Marketing Automation</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Marketing Automation #2 🚗
                </h1>
                <div className={styles.grid}>
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Moosend</h2>
                        <p>A place to send Moos</p>
                    </div>
                    
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore XP: Marketing Automation and EXM</h2>
                        <p>A market for your automation</p>
                    </div>

                    <div className={styles.productCategoryCardLarge}>
                        <ReactMarkdown>{moosend.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCardLarge}>
                        <ReactMarkdown>{sitecoreXPMarketingAutomation.markdown}</ReactMarkdown>
                    </div>


                    <div className={styles.socialsCard}>
                        <h2>General Marketing Automation Socials</h2>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new Marketing Automation things</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Get Help</h2>
                        <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
                    </div>

                </div>
            </main>
        </div>)
}

