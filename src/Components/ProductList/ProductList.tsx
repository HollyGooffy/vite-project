import ProductCard from '../ProductCard/ProductCard';
import productData from '../../data/productsData';
import { CircleChevronRight, CircleChevronLeft } from 'lucide-react';
import { useState } from "react";
import { motion, AnimatePresence, easeOut, easeIn } from 'framer-motion';

const ProductsList = () => {
    const [showAll, setShowAll] = useState(false);
    const products = productData.products;

    const firstProducts = products.slice(0, 5);
    const restProducts = products.slice(5);

    const shouldShowButton = products.length > 5;

    const toggleShowAll = () => setShowAll(!showAll);

    const containerAnimation = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                staggerChildren: 0.05,
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                staggerChildren: 0.02,
                staggerDirection: -1,
                when: "afterChildren"
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: easeOut }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3, ease: easeIn }
        }
    };

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
                {firstProducts.map(product => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}

                <AnimatePresence mode="wait">
                    {showAll && (
                        <motion.div
                            variants={containerAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="contents"
                        >
                            {restProducts.map(product => (
                                <motion.div
                                    key={product.id}
                                    variants={itemAnimation}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProductsList;