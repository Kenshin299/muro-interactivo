function Posts() {
    return (
        <div className="Post-Container">
            <div className="NewPost">
                <textarea type="text" id="NewPostInput" placeholder="Crear Nuevo Post"></textarea>
                <button type="button">Publicar</button>
            </div>
            <div className="PostList">
                <div className="Post">
                    <h4>Kemyl Fernandez</h4>
                    <p>Post de ejemplo</p>
                </div>
            </div>
        </div>
    )
}

export default Posts;