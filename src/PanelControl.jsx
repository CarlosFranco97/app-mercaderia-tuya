import imgUser from './assets/avatar.png';
import Card from './Card.jsx';
const PanelControl = () => {
    return (
        <section className="panel-control">
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
            <div className="panel-control-contenido">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default PanelControl;