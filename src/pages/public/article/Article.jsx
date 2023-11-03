import axios from "axios";
import { useEffect, useState } from "react";
import "./article.css";

function Article() {
    let [articles, setArticles] = useState();

    function getData() {
        axios
            .get("http://localhost:8888/articles")
            .then((response) => {
                setArticles(response.data);
            })
            .catch((error) => {
                // console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h2>Article</h2>
            <div className="articleContainer">
                {articles &&
                    articles.map((article, id) => {
                        return (
                            <a href={id}>
                                <div key={id} className="articleArticle">
                                    <img
                                        src={
                                            "data:image/png;base64," +
                                            article.image
                                        }
                                        className="articleImage"
                                        alt="article"
                                    />
                                    <h3>{article.title}</h3>
                                    <p>{article.price} €</p>
                                </div>
                            </a>
                        );
                    })}
            </div>
        </>
    );
}

export default Article;
