import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import productData from '../../data/productsData';
import { CircleChevronRight } from 'lucide-react';
import { CircleChevronLeft } from 'lucide-react';

const ProductsList = () => {
    const [showAll, setShowAll] = useState(false);
    const products = productData.products;
    const visibleProducts = showAll ? products : products.slice(0, 5);
    const shouldShowButton = products.length > 5;

    const toggleShowAll = () => setShowAll(!showAll);

    return (
        <div className="bg-gray rounded-lg p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">Акции</h2>

                {shouldShowButton && (
                    <button
                        className="flex items-center text-xs sm:text-sm cursor-pointer"
                        onClick={toggleShowAll}
                    >
                        {showAll ? (
                            <>
                                Скрыть
                                <CircleChevronLeft size={14} className="ml-1" />
                            </>
                        ) : (
                            <>
                                Показать все
                                <CircleChevronRight size={14} className="ml-1" />
                            </>
                        )}
                    </button>
                )}
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
                {visibleProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;