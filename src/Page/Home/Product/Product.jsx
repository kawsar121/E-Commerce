import { useLoaderData } from "react-router-dom";
import Products_Card from "./Products_Card";
const Product = () => {
    const {products} = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-3 gap-5 p-5">
                {products?.map( gift => <Products_Card key={gift.id} gift={gift}></Products_Card>)}
            </div>
        </div>
    );
};

export default Product;
// ekhane gift likhar karon holo jeno pore bujte pari moner issa moto likha jabe