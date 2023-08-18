import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thiaggo Ferreira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at voluptatum minima consectetur doloribus facilis vitae, architecto alias eaque soluta iure illum expedita, consequatur quae magnam possimus earum eum quidem?"
          />
        </main>
      </div>
    </div>
  );
}

export { App };
