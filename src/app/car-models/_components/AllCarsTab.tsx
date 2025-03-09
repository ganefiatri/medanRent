import { Car } from "@/@types/Car";
import Card from "@/components/partials/Card/Card";
import { Cars } from "@/constant/Cars";
import { useEffect, useState } from "react";


export default function AllCarsTab() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Cars;
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return ( 
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {data?.map((cars: Car, i: number) => (
        <Card car={cars} key={i} />
      ))}
    </div>
  );
}
