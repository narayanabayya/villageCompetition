import DeliveryService from './delivery'
const Deliverables = () => {
    return (
        <div>
            <DeliveryService items="groceries" house="Red house" 
            img="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_640.jpg"
            />
            <DeliveryService items="furniture" house="Blue house"
            img="https://hips.hearstapps.com/hmg-prod/images/index-furniture-65f07553eef2f.jpg"
            />
        </div>
    );
}

export default Deliverables