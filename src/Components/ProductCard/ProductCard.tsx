import pic from '/src/assets/pic.png';
import { ProductCardProps } from "./types";
import Button from "../Button/Button";

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={`rounded-2xl relative overflow-hidden transition-all duration-300 flex flex-col`}>
            {!product.inStock && (
                <div className="absolute top-2 left-2 bg-white text-xs font-semibold text-black px-2.5 py-0.5 rounded-lg z-10 text-[8px]">
                    Нет в наличии
                </div>
            )}

            <div className="relative">
                <div className="rounded-xl">
                    <img src={pic} alt={product.name} />
                </div>
            </div>

            <div className="pt-2 pb-3">
                <h3 className="font-semibold text-xs mb-1">{product.name}</h3>
                <div className="text-xs font-light mb-2">{product.weight}</div>

                <div className="flex items-start gap-1 mb-2 flex-col">
                    {product.oldPrice && product.oldPrice > product.price && (
                        <span className="text-gray-400 text-[9px] font-light line-through">
              {product.oldPrice} ₽/кг
            </span>
                    )}
                    <span className="font-semibold text-xs">{product.price} ₽/кг</span>
                </div>

                <Button
                    text="В корзину"
                    className="py-1.5 !px-8.5 font-semibold whitespace-nowrap text-center"
                />
            </div>
        </div>
    );
};

export default ProductCard;