import React from 'react'
import noImage from "../assets/no-image.png"

function InfoCard({showData}) {
    const imageUrl = showData.show.image
    ? showData.show.image.original || showData.show.image.medium
    : null;
  const finalImageUrl = imageUrl || noImage;
  return (
    <div className="border border-solid border-gray-100 rounded-lg min-h-[300px] max-h-[330px] w-[250px] flex flex-col  gap-2  pb-2 relative shadow-md ">
      <div className="h-[250px] rounded-lg">
        {finalImageUrl && (
          <img
            src={finalImageUrl}
            alt={showData.show.name}
            className="h-[100%] w-[100%] rounded-t-lg"
          />
        )}
      </div>
      <div>
        <div className="text-center text-md  font-bold">
          {showData.show.name}
        </div>
        <div className="text-center text-sm">({showData.show.genres[0]})</div>
      </div>
    </div>
  )
}

export default InfoCard
