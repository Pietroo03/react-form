import { useState } from "react"
const articlesList = []

export default function AppMain() {

    const [articles, setArticle] = useState(articlesList)
    const [newArticle, setNewArticle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')

    function addArticle(e) {
        e.preventDefault(e)

        const newArticleData = {
            title: newArticle,
            author: newAuthor
        }

        setArticle([
            ...articles,
            newArticleData
        ])

        setNewArticle('')
        setNewAuthor('')
    }

    function handleRemove(e) {
        const removeArticle = Number(e.target.getAttribute('data-index'))
        console.log(removeArticle);

        const articlesListUpdate = articles.filter((article, index) => index != removeArticle)

        setArticle(articlesListUpdate)

    }

    return (

        <main>

            <div className="container">
                <h2>Articles</h2>

                <form onSubmit={addArticle}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Titolo</label>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Aggiungi Titolo"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={newArticle}
                                onChange={e => setNewArticle(e.target.value)} />

                            <button className="btn btn-primary" type="submit" id="button-addon2">Aggiungi Titolo</button>
                        </div>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Autore</label>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Aggiungi Autore"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={newAuthor}
                                onChange={e => setNewAuthor(e.target.value)} />

                            <button className="btn btn-primary" type="submit" id="button-addon2">Aggiungi Autore</button>
                        </div>

                    </div>

                </form>

                <h2>Articles List</h2>
                <ul className="list-group">
                    {articles.map((article, index) =>
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <div>Titolo: <strong>{article.title}</strong></div>
                                <div>Autore: <strong>{article.author}</strong></div>
                            </div>

                            <button onClick={handleRemove} data-index={index} className="btn btn-danger">Remove</button>
                        </li>

                    )}
                </ul>

            </div>

        </main>

    )

}