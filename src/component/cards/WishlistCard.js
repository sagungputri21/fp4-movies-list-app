import React from "react";

const WishlistCard = ({ Poster, Type, Year, Title }) => {
    return (
        <div className="mb-10 bg-[#20283E] rounded-md">
          <div className="flex p-2.5 pl-4 gap-4">
            <div className="w-42 h-42">
              <img src={Poster} className="w-28 h-32"/>
            </div>
            <div className="text-start flex flex-col -gap-1 text-white">
              <h5 className="text-blue-400 font-semibold mb-3 text-2xl">{Title}</h5>
              <p className="text-lg">Tipe  : {Type}</p>
              <p className="text-lg -mt-3">Rilis : {Year}</p>
            </div>
          </div>
        </div>
    )
}

export default WishlistCard;