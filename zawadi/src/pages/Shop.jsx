import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';

const Shop = () => {
    const { products } = useContext(ProductContext);
    const filteredProducts = products.filter(item => {
        return (item.category === "women's clothing" || item.category === "electronics" || item.category === "men's clothing");
    });

    return (
        <div style={{ paddingTop: '60px' }}> {/* Adjust the paddingTop to match the height of your Navbar */}
            <section className='py-16'>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {filteredProducts.map(product => {
                            return (
                                <Product product={product} key={product.id} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shop;
