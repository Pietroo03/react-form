export default function AppMain() {

    return (

        <main>

            <div className="container">
                <h2>Articles</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>

                        <div class="input-group mb-3">
                            <input type="text"
                                class="form-control"
                                placeholder="Aggiungi Titolo"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2" />

                            <button class="btn btn-primary" type="submit" id="button-addon2">Button</button>
                        </div>
                    </div>
                </form>
            </div>

        </main>

    )

}