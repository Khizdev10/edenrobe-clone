const Products = (props) => {

    return (
        <>
            <div className="bg-white grid grid-cols-2 md:grid-cols-4 justify-center gap-3 p-3">
                {props.data.map((product) => {
                    return (

                        <div className="w-full max-w-[300px] mx-auto">
                            <img
                                className="max-h-[500px] w-full object-cover"
                                src={product.image} alt="product-image" />
                            <p className="text-center opacity-60 text-sm md:text-base">{product.name}</p>
                            {product.discount ?
                                <p className="text-center text-sm md:text-base">
                                    <span className="line-through">PKR {product.price + product.discount}
                                    </span>PKR {product.price}</p>
                                :
                                <p className="text-center text-sm md:text-base">
                                    PKR {product.price}</p>
                            }
                        </div>
                    )
                })
                }

            </div>

        </>
    );
};

export default Products;