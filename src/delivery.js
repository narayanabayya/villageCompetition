import './delivery.css'
const DeliveryService = (props) => {
    return (
        <div className="deliveryContainer">
            <h1>Delivery Service</h1>
            <div>
                <h2>your {props.items} will be  deliveried to {props.house} </h2>
            </div>
            <div>
                <img src={props.img} alt="deliverables" />
            </div>
        </div>
    );
}

export default DeliveryService
