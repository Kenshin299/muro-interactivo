function NavBar() {
    return (
        <div className="NavBar">
            <h3 id="Muro">Muro Interactivo</h3>
            <div className="NavButtons">
                <button className="Button" id="Login" type="button"> Iniciar Sesión</button>
                <button className="Button" id="SignUp" type="button"> Registrarse</button>
            </div>
        </div>
    )
}

export default NavBar;