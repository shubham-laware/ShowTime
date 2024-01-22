import React, { useEffect, useState } from "react";
import ShowCard from "../components/ShowCard";
import Navbar from "../components/Navbar";

function Home() {
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        // console.log(data);
        setShowList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
        <Navbar/>
      <div className=" max-w-[100vw]  grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-10 mt-14 ">
        {showList.map((shows, index) => (
          <div key={index} className="mx-auto">
            <ShowCard showData={shows} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
