
import Card from '../card/card';
import './arrivals.css'


const Arrivals = () => {
    return ( <section className="arrivals">
        <div className="container">
            <div className="arrivals__header">
                <h2 className="title-2">NEW ARRIVALS</h2>
            </div>
            <div className="arrivals__cards">
                <div><Card /></div>
                <div>CARD 2</div>
                <div>CARD 3</div>
            </div>
        </div>
    </section> );
}
 
export default Arrivals;