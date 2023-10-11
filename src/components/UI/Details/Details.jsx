import { useState } from 'react'
import Popovers from "../Popover/Popover";
import Counter from '../Counter';

const Details = ({ product, setLikeFun }) => {
    const [count, setCount] = useState(1);

    return (
        <div className="w-[700px] px-8">
            <div className="w-full pb-[25px] border-b">
                <div className="flex items-center justify-between mb-3">
                    <p>
                        {product.count} ta sotuvda bor
                    </p>
                    <button
                        onClick={() => setLikeFun()}
                        className="flex items-center h-[24px] gap-[10px]"
                    >
                        <span>
                            {!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find(
                                (pr) => pr._id === product._id
                            ) ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M5.95 2.94043C8.51792 2.94043 10 5.09277 10 5.09277C10 5.09277 11.485 2.94043 14.05 2.94043C16.705 2.94043 19 5.01043 19 7.89043C19 12.1209 12.5604 16.5601 10.3651 18.5007C10.1582 18.6836 9.84179 18.6836 9.63488 18.5007C7.44056 16.5613 1 12.1207 1 7.89043C1 5.01043 3.295 2.94043 5.95 2.94043Z" fill="white" fillOpacity="0.8" />
                                    <path d="M1 7.80529C1 5.1434 3.15017 2.94043 5.86486 2.94043C7.98685 2.94043 9.35921 4.29919 10 5.12716C10.6408 4.29919 12.0132 2.94043 14.1351 2.94043C16.8506 2.94043 19 5.14345 19 7.80529C19 8.9703 18.5328 10.1266 17.8534 11.2054C17.1716 12.288 16.252 13.3307 15.29 14.2781C13.9567 15.5912 12.4757 16.7791 11.4134 17.6311C10.9618 17.9933 10.5859 18.2948 10.3293 18.5194C10.1407 18.6843 9.85926 18.6843 9.67075 18.5194C9.41405 18.2948 9.03815 17.9933 8.58659 17.6311C7.52431 16.7791 6.04326 15.5912 4.70997 14.2781C3.74802 13.3307 2.82836 12.288 2.14659 11.2054C1.46724 10.1266 1 8.9703 1 7.80529ZM5.86486 3.94043C3.70929 3.94043 2 5.68881 2 7.80529C2 8.70786 2.36553 9.6765 2.99277 10.6725C3.61759 11.6646 4.47833 12.6464 5.41165 13.5656C6.71033 14.8446 8.08423 15.9454 9.13396 16.7865C9.45728 17.0456 9.74985 17.28 10 17.4874C10.2501 17.28 10.5427 17.0456 10.866 16.7865C11.9158 15.9454 13.2897 14.8446 14.5883 13.5656C15.5217 12.6464 16.3824 11.6646 17.0072 10.6725C17.6345 9.6765 18 8.70786 18 7.80529C18 5.68876 16.2914 3.94043 14.1351 3.94043C12.0406 3.94043 10.8181 5.64254 10.5033 6.15071C10.2727 6.52293 9.72727 6.52292 9.4967 6.1507C9.1819 5.64253 7.95944 3.94043 5.86486 3.94043Z" fill="#15151A" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M5.95 2.94043C8.51792 2.94043 10 5.09277 10 5.09277C10 5.09277 11.485 2.94043 14.05 2.94043C16.705 2.94043 19 5.01043 19 7.89043C19 12.1209 12.5604 16.5601 10.3651 18.5007C10.1582 18.6836 9.84179 18.6836 9.63488 18.5007C7.44056 16.5613 1 12.1207 1 7.89043C1 5.01043 3.295 2.94043 5.95 2.94043Z" fill="#15151A" fillOpacity="0.8" />
                                    <path d="M1 7.80529C1 5.1434 3.15017 2.94043 5.86486 2.94043C7.98685 2.94043 9.35921 4.29919 10 5.12716C10.6408 4.29919 12.0132 2.94043 14.1351 2.94043C16.8506 2.94043 19 5.14345 19 7.80529C19 8.9703 18.5328 10.1266 17.8534 11.2054C17.1716 12.288 16.252 13.3307 15.29 14.2781C13.9567 15.5912 12.4757 16.7791 11.4134 17.6311C10.9618 17.9933 10.5859 18.2948 10.3293 18.5194C10.1407 18.6843 9.85926 18.6843 9.67075 18.5194C9.41405 18.2948 9.03815 17.9933 8.58659 17.6311C7.52431 16.7791 6.04326 15.5912 4.70997 14.2781C3.74802 13.3307 2.82836 12.288 2.14659 11.2054C1.46724 10.1266 1 8.9703 1 7.80529ZM5.86486 3.94043C3.70929 3.94043 2 5.68881 2 7.80529C2 8.70786 2.36553 9.6765 2.99277 10.6725C3.61759 11.6646 4.47833 12.6464 5.41165 13.5656C6.71033 14.8446 8.08423 15.9454 9.13396 16.7865C9.45728 17.0456 9.74985 17.28 10 17.4874C10.2501 17.28 10.5427 17.0456 10.866 16.7865C11.9158 15.9454 13.2897 14.8446 14.5883 13.5656C15.5217 12.6464 16.3824 11.6646 17.0072 10.6725C17.6345 9.6765 18 8.70786 18 7.80529C18 5.68876 16.2914 3.94043 14.1351 3.94043C12.0406 3.94043 10.8181 5.64254 10.5033 6.15071C10.2727 6.52293 9.72727 6.52292 9.4967 6.1507C9.1819 5.64253 7.95944 3.94043 5.86486 3.94043Z" fill="#15151A" />
                                </svg>
                            )}
                        </span>
                        <div>
                            {" "}
                            {!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find(
                                (pr) => pr._id === product._id
                            ) ? (
                                <p className="text-md">Tanlash</p>
                            ) : (
                                <p>Tanlangan</p>
                            )}{" "}
                        </div>
                    </button>
                </div>
                <h1 className="text-xl font-['InterSemibold'] mb-2">
                    {product?.name}
                </h1>

                <div className="w-[240px]">
                    <div className="flex items-center justify-between mb-2">
                        <p>Sotuvchi:</p>
                        <p>Online market</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-1">
                            <p>Yetkazib berish:</p>
                            <Popovers description="Mahsulot buyurtirilgan kunning ertasiga mahsulotni rasmiy topshirish punktlarimizga yetkazamiz. Rasmiylashtirish bosqichida sizga eng qulay manzilni tanlang." />
                        </div>
                        <p>1 kun, bepul</p>
                    </div>
                </div>
            </div>
            {
                product?.colors ? (
                    <div className="pt-6 pb-8">
                        <p>Rang:</p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="border-2 border-gray-400 w-6 h-6 bg-white rounded-full"></div>
                            <div className="border-2 border-black w-6 h-6 bg-black rounded-full"></div>
                            <div className="border-2 border-black w-6 h-6 bg-green-800 rounded-full"></div>
                        </div>
                    </div>
                ) : ""
            }
            <div className="mb-6">
                <p className="mb-[10px]">Miqdor:</p>
                <div className="flex items-center gap-x-[18px]">
                    <div className="max-w-fit">
                        <Counter setCount={setCount} count={count} />
                    </div>
                    <p className="text-sm text-[#00C853]">Sotuvda {product.count} dona bor</p>
                </div>
            </div>

            <div className="mb-6">
                <p>Narx:</p>
                <div className="flex items-center gap-x-5">
                    <h3 className="text-xl text-[#212121] font-medium">
                        {String(product?.price * count - product?.price * count * 0.1).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                        so'm
                    </h3>
                    <del className="text-sm text-[#8A8D93] line-through">
                        {String(product?.price * count).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                        so'm
                    </del>

                    <div className="px-[6px] bg-[#AAFF77] rounded-md">
                        <p className="text-base font-medium">Katta sotuvlar</p>
                    </div>
                </div>
            </div>

            <div className="p-3 bg-[#F5F6FA] rounded-xl flex items-center justify-between">
                <div className="flex items-center">
                    <div className="p-[6px] rounded-lg bg-[#FFFF00]">
                        <p className="text-sm text-[#1F1F26] font-semibold">Oyiga {String(Math.floor((product?.price * count) / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "} so'mdan, 3 oy</p>
                    </div>
                    <p className="text-sm font-medium ml-3"> muddatli to'lov</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.4286 12C15.4286 12.3148 15.2583 12.4282 15.0436 12.6262L9.85718 17.4208C9.6885 17.5882 9.53241 17.7857 9.19427 17.7857C8.9565 17.7857 8.57147 17.6016 8.57147 17.0993C8.57147 16.7879 8.82364 16.6415 9.00004 16.4665L13.8148 12L8.99335 7.52679C8.82467 7.35177 8.56812 7.22211 8.56812 6.85715C8.56812 6.5692 8.79244 6.21429 9.25118 6.21429C9.50421 6.21429 9.73538 6.45201 9.90407 6.61943L15.0436 11.3572C15.2583 11.5626 15.4286 11.6853 15.4286 12Z" fill="#76797F" fillOpacity="0.6" />
                </svg>
            </div>

            <div className="flex items-center gap-x-2 my-6">
                <button className="max-w-[300px] py-[18px] px-[82px] bg-[#7000FF] hover:bg-[#6f00ffd0] duration-200 text-white rounded-xl font-medium text-base">
                    Savatga qoʻshish
                </button>
                <button className="border-2 border-[#7000FF] text-[#7000FF] hover:bg-[rgba(0,0,0,0.1)] duration-200 py-[16px] grow rounded-lg text-base font-medium">
                    Tugmani 1 bosishda xarid qilish
                </button>
            </div>

            <div className="px-[32px] w-full bg-[#FFE4334D] rounded-lg pt-[5px] pb-2 flex items-center gap-x-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.4099 4.5C12.6501 4.5 11.4099 5.88779 11.4099 7.5H17.4099C17.4099 5.88779 16.1697 4.5 14.4099 4.5ZM9.90991 11.5V9H7.90991V14.25C7.90991 14.6642 7.57412 15 7.15991 15C6.74569 15 6.40991 14.6642 6.40991 14.25V8.25V7.5H7.15991H9.90991C9.90991 5.11221 11.7697 3 14.4099 3C17.0501 3 18.9099 5.11221 18.9099 7.5H21.6599H22.4099V8.25V21.75C22.4099 22.9926 21.4025 24 20.1599 24H15.6599C15.2457 24 14.9099 23.6642 14.9099 23.25C14.9099 22.8358 15.2457 22.5 15.6599 22.5H20.1599C20.5741 22.5 20.9099 22.1642 20.9099 21.75V9H18.9099V11.5H17.4099V9H11.4099V11.5H9.90991ZM14.6837 18.0323C14.9766 17.7395 14.9766 17.2646 14.6837 16.9717C14.3908 16.6788 13.9159 16.6788 13.623 16.9717L8.40539 22.1893L6.19026 19.9742C5.89736 19.6813 5.42248 19.6813 5.12958 19.9741C4.83669 20.267 4.83668 20.7419 5.12957 21.0348L7.87504 23.7803C8.0157 23.921 8.20646 24 8.40538 24C8.60429 24 8.79506 23.921 8.93571 23.7803L14.6837 18.0323Z" fill="#141415" />
                </svg>
                <p className="text-sm text-[#141415]">Bu haftada 2092 kishi sotib oldi</p>
            </div>
        </div>)
}

export default Details