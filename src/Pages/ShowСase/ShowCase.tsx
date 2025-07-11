import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import ProductList from "../../Components/ProductList/ProductList.js";
import Bar from "../../Components/Bar/Bar";
import Footer from "../../Components/Footer/Footer";
import { Search } from 'lucide-react';

const ShowCase = () => {
    return (
        <div className="text-xs flex flex-col min-h-screen w-full items-center">
            <div className="sm:px-3 max-sm:px-3 md:px-6 lg:px-8 xl:w-[1280px] xl:px-0 w-full">
                <Header/>
            </div>

            <main className="w-full max-w-screen-xl max-xs:px-1 px-3 md:px-6 lg:px-8 xl:px-12 py-6 flex flex-col items-center">
                <div className="w-full px-3 ">
                    <Input
                        icon={
                            <div className="scale-x-[-1]">
                                <Search size={20} className="text-gray-500" />
                            </div>
                        }
                    />
                </div>

                <div className="w-full py-3">
                    <Bar />
                </div>

                <div className="w-full grid grid-cols-1 gap-8 mb-16 mt-4">
                    <ProductList />
                    <ProductList />
                    <ProductList />
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default ShowCase;