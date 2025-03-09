"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCar, FaGasPump } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";

export default function DetailCars(){
    const { slug } = useParams();
    const [data, setData] = useState([] as any);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch(`https://www.freetestapi.com/api/v1/cars/${slug}`)
            const data = await res.json()
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);


    return (
        <main>
            <header className="container p-4 md:p-8">
                <Image
                src={data?.image}
                alt="Cover"
                width={500}
                height={500}
                className="w-full md:w-1/2 mx-auto object-cover"
                />
            </header>

            <section className="py-4 md:py-8">
                <div className="container p-4 md:p-8">
                    <div className="grid md:grid-cols-2 items-center justify-between gap-4">
                        <div>
                            <h2 className="mb-4 md:mb-8">{data?.make}</h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-end gap-2">
                                <span>Condition: </span>
                                <span className="font-bold">New</span>
                                </div>

                                <div className="flex items-end gap-2">
                                <span>Availability: </span>
                                <span className="font-bold">
                                    In Stock at RentMedan, Medan
                                </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={data?.image}
                                alt={data?.make}
                                width={500}
                                height={500}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Car Description */}
            <section className="py-4 md:py-8">
                <div className="container p-4 md:p-8">
                <div className="grid lg:grid-cols-2 items-center gap-4 md:gap-8">
                    <div>
                    <Image
                        src={data?.image}
                        alt={data?.make}
                        width={500}
                        height={500}
                        className="object-cover w-full"
                    />
                    </div>

                    <div className="space-y-4 lg:space-y-8">
                    <p className="md:text-lg lg:text-xl lg:leading-relaxed">
                        {data?.color}
                    </p>
                    </div>
                </div>
                </div>
            </section>

            {/* Key Specifications & Brand */}
            <section className="py-4 md:p-8">
                <div className="container p-4 md:p-8">
                <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                    <div className="col-span-2">
                    <h3 className="mb-4 font-bold">Key Specifications</h3>

                    <div className="flex flex-col gap-2 md:gap-4">
                        <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                        <span className="text-sm md:text-base">Engine Type:</span>
                        <span className="text-sm md:text-base font-bold">
                            {data?.engine || "-"}
                        </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                        <span className="text-sm md:text-base">Horsepower:</span>
                        <span className="text-sm md:text-base font-bold">
                            {data?.horsepower} HP
                        </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                        <span className="text-sm md:text-base">Transmission:</span>
                        <span className="text-sm md:text-base font-bold">
                            {data?.transmission}
                        </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                        <span className="text-sm md:text-base">Fuel Efficiency:</span>
                        <span className="text-sm md:text-base font-bold">
                            Estimated at {data?.fuelType}
                        </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                        <span className="text-sm md:text-base">Drive Type:</span>
                        <span className="text-sm md:text-base font-bold">
                            {data?.owners}
                        </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                        <span className="text-sm md:text-base">Acceleration:</span>
                        <span className="text-sm md:text-base font-bold">
                            {data?.mileage}
                        </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                        <span className="text-sm md:text-base">Top Speed:</span>
                        <span className="text-sm md:text-base font-bold">
                            {data?.mileage} km/h
                        </span>
                        </div>
                    </div>
                    </div>

                    <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="mb-4 font-bold">Brand</h3>
                        <div className="flex items-center gap-2">
                        <span>{data?.make}</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 font-bold">Features</h3>

                        <div className="flex flex-col gap-2 md:gap-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-orange-400 p-1.5 rounded-lg">
                            <FaCar className="text-white w-6 h-6" />
                            </div>
                            <span>{data?.make}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="bg-orange-400 p-1.5 rounded-lg">
                            <PiSeatFill className="text-white w-6 h-6" />
                            </div>
                            <span>{data?.owners} Seats</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="bg-orange-400 p-1.5 rounded-lg">
                            <FaGasPump className="text-white w-6 h-6" />
                            </div>
                            {data?.mpg ? (
                            <span>{data?.mpg} Mpg</span>
                            ) : (
                            <span className="text-xl">-</span>
                            )}
                        </div>
                        </div>
                    </div>

                    {data?.warranty ? (
                        <div>
                        <h3 className="mb-4 font-bold">Warranty</h3>
                        <div>
                            <span className="text-black/40">{data?.warranty}</span>
                        </div>
                        </div>
                    ) : (
                        <div>
                        <h3 className="mb-2 font-bold">Warranty</h3>
                        <div>
                            <span className="text-black/40 text-xl"> - </span>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
}

