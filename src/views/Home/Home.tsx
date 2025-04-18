import React from "react";
import Header from "../../components/Header/Header";
import styles from "../../views/Home/Home.module.scss";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home: React.FC = () => {
    return (
        <div className={styles.homeContainer}>
            <Header />
            <SearchBar />
            <CardList />
        </div>
    );
}
    
export default Home;