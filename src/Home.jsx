import Links from "./components/Links";
import Images from "./components/Images";
import Section from "./components/Section";
import Article from "./components/Article";

const Home = () => {
    const linkElements = Array(4).fill(<Links />);

    return (
        <div>
            <header className="header">
                {linkElements}
            </header>

            <Images className="img1" />

            <main className="main">
                <div className="div-main">
                <Images />
                </div>
            </main>

            <section>
                <Section />
            </section>

            <article>
                <Article />
            </article>

            <footer className="footer"></footer>
        </div>
    );
};

export default Home;
