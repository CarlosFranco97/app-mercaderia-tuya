import CardContenido from "./CardContent";
import MenuLateral from "./MenuLateral";

const PanelContenido = () => {
    return (
        <div className="panel-contenido">
            <MenuLateral />
            <section className="panel-contenedor-card">
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
            </section>

        </div>
    )
}

export default PanelContenido;