import React from 'react';
import Header from "../../Components/Header/Header.jsx";
import Input from "../../Components/Input/Input.jsx";
import ProductList from "../../Components/ProductList/ProductList.jsx";
import Bar from "../../Components/Bar/Bar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { Search } from 'lucide-react';

const ShowCase = () => {
    return (
        <div className="text-xs flex flex-col min-h-screen w-full items-center">
            <Header className="" />

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

            <Footer className="" />
        </div>
    );
};

export default ShowCase;