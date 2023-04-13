function Posts() {
    return (
        <div className="Post-Container">
            <div className="NewPost">
                <textarea type="text" id="NewPostInput" placeholder="Crear Nuevo Post"></textarea>
                <div className="NewPost-Buttons">
                    <button id="LimpiarButton" type="button">Limpiar</button>
                    <button id="PublicarButton" type="button">Publicar</button>
                </div>
            </div>
            <div className="PostList">
                <div className="Post">
                    <div>
                        <p>Publicado por: Username @ Fecha</p>
                    </div>
                    <h4>Kemyl Fernandez</h4>
                    <p className="Post-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mattis arcu. Proin dictum tortor libero, eu convallis tortor egestas eget. Aliquam erat volutpat. Donec dictum nulla libero, nec euismod odio placerat ut. Morbi tincidunt, mi in fringilla vulputate, tortor felis faucibus nisi, et bibendum lorem lectus vitae enim. Cras in rutrum nibh. Duis fermentum lectus quis metus molestie, eu ultrices turpis rutrum. Nullam ornare interdum consequat. Nam maximus lobortis ligula, non pulvinar orci tincidunt sit amet. Fusce cursus, arcu vitae rutrum aliquet, nunc metus lobortis nulla, sit amet imperdiet enim felis sit amet sem. Aenean pulvinar lacus vitae ligula volutpat, vel aliquet ligula vehicula. Proin porta porttitor consequat. Duis laoreet ut erat a porta. Fusce fermentum lorem tortor, quis aliquet risus posuere auctor.</p>
                </div>
            </div>
        </div>
    )
}

export default Posts;