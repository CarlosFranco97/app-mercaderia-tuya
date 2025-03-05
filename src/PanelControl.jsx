import Card from './Card.jsx';
import MenuLateral from './MenuLateral.jsx';
const PanelControl = () => {
    return (
        <section className="panel-control">
            <MenuLateral />
            <div className="panel-control-contenido">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default PanelControl;