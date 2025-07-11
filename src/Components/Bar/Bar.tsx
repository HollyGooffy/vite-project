import BarCard from "../BarCard/BarCard";
import chickenIcon from '/src/assets/chicken.svg';
import beefIcon from '/src/assets/beef.svg';
import porkIcon from '/src/assets/pork.svg';
import {CategoryItem} from "./types"

const Bar = () => {
    const categories:CategoryItem[] = [
        { icon: porkIcon, name: 'Акции' },
        { icon: porkIcon, name: 'Свинина' },
        { icon: beefIcon, name: 'Говядина' },
        { icon: porkIcon, name: 'Наборы' },
        { icon: chickenIcon, name: 'Курица' },
    ];

    return (
        <div className="grid grid-cols-2 px-4 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-3">
            {categories.map((category, index) => (
                <BarCard
                    key={index}
                    icon={category.icon}
                    name={category.name}
                />
            ))}
        </div>
    );
};

export default Bar;