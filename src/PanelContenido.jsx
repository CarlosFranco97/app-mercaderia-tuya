import CardContenido from "./CardContent";

const PanelContenido = () => {
    return (
        <div className="panel-contenido">
            <aside className="panel-contenido-aside">
            
            </aside>
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