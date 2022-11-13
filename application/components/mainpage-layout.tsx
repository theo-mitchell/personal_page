import styles from '../styles/mainpage-layout.module.scss';

const MainPageLayout = ({children}) => {
    return <div className={styles.container}>{children}</div>;
}

export default MainPageLayout;
