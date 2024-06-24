import { useEffect, useState } from "react";
import db from "../db.json";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Table from "./Table";

const Formula = () => {
  const Formulas = db.formulas;
  const [formulas, setFormulas] = useState(() => {
    const localData = localStorage.getItem("formulas");
    return localData ? JSON.parse(localData) : Formulas;
  });

  useEffect(() => {
    localStorage.setItem("formulas", JSON.stringify(formulas));
  }, [formulas]);

  // const favoriteHandle = (index) => {
  //   const newFormulas = [...formulas];
  //   newFormulas[index].isFavorite = !newFormulas[index].isFavorite;
  //   setFormulas(newFormulas);
  // };

  return (
    <>
      {Formulas.map((formula, index) => (
        <Table formula={formula} key={index} />
      ))}

      {/* <button
        onClick={() => favoriteHandle(index)}
        className="absolute top-6 right-6 size-10"
      >
        {Formulas[index].isFavorite ? (
          <AiOutlineHeart className="m-auto size-6 fill-yellow-500" />
        ) : (
          <AiFillHeart className="m-auto size-6 fill-yellow-500" />
        )}
      </button> */}
      {/* 
      <div className="flex object-contain flex-wrap justify-evenly py-10">
        {formula.imgs?.map((url, index) => (
          <img
            className="object-contain p-2 py-2 m-2 max-w-xs md:max-w-lg bg-slate-50"
            src={url}
            key={index}
          />
        ))}
      </div> */}
    </>
  );
};

export default Formula;
