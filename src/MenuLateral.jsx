import imgUser from './assets/avatar.png';

const MenuLateral = () => {
    return (
        <aside className="panel-control-aside">
        <div>
            <img src={imgUser} alt="imagen_user" />
        </div>
        <nav>
            <a href="#">Enlace</a>
            <a href="#">Enlace</a>
            <a href="#">Enlace</a>
            <a href="#">Enlace</a>
        </nav>
    </aside>
    )
}

export default MenuLateral;