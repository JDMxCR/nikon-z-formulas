import { useEffect, useState } from "react";
import db from "../../db.json";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Formulas = db.formulas;

const Formula = () => {
  const [formulas, setFormulas] = useState(() => {
    const localData = localStorage.getItem("formulas");
    return localData ? JSON.parse(localData) : JSON.parse(Formulas);
  });

  useEffect(() => {
    localStorage.setItem("formulas", JSON.stringify(formulas));
  }, [formulas]);

  const favoriteHandle = (index) => {
    const newFormulas = [...formulas];
    newFormulas[index].isFavorite = !newFormulas[index].isFavorite;
    setFormulas(newFormulas);
  };

  const valueOutput = (value) => {
    if (value > 0) {
      return " +" + value;
    } else {
      return " " + value;
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-between items-center py-10 min-w-72 sm:px-10">
      {db.formulas.map((formula, index) => (
        <ul
          key={index}
          className="relative p-10 m-1 my-5 font-semibold text-gray-200 bg-gray-800 rounded-lg border-2 size-4/5"
        >
          <li className="pb-2 text-2xl font-black text-center">
            {formula.Name}
          </li>
          <hr />
          <div className="text-center">
            <li>{"Author: " + formula.Author}</li>
            <hr />
            <li>{"Picture Profile: " + formula.PictureControl}</li>
            <hr />
            <li>Effect Level:{valueOutput(formula.EffectLevel)}</li>
            <hr />

            <li>Quick Sharp:{valueOutput(formula.QuickSharp)}</li>
            <hr />

            <li>Sharpening:{valueOutput(formula.Sharpening)}</li>
            <hr />
            <li>
              Mid-Range Sharpening:{valueOutput(formula.MidRangeSharpening)}
            </li>
            <hr />
            <li>Clarity:{valueOutput(formula.Clarity)}</li>
            <hr />
            <li>Contrast: {valueOutput(formula.Contrast)}</li>
            <hr />
            <li>Saturation: {valueOutput(formula.Saturation)}</li>
            <hr />
            <li>Active D-Lighting:{valueOutput(formula.ActiveDLighting)}</li>
            <hr />
            <li>High ISO NR:{valueOutput(formula.HighISONR)}</li>
            <hr />
            <li>White Balnce:{valueOutput(formula.WhiteBalance)}</li>
            <hr />
            <li>
              WB Ajust:
              {formula.WBAdjust.Blue
                ? " Blue: " + formula.WBAdjust.Blue
                : " Amber: " + formula.WBAdjust.Amber}
              {formula.WBAdjust.Green
                ? " Green: " + formula.WBAdjust.Green
                : " Magenta: " + formula.WBAdjust.Magenta}
            </li>

            <hr />
            <li>ISO:{" " + formula.ISO}</li>
            <hr />

            <button
              onClick={() => favoriteHandle(index)}
              className="absolute top-6 right-6 size-10"
            >
              {formulas[index].isFavorite ? (
                <AiOutlineHeart className="m-auto size-6 fill-yellow-500" />
              ) : (
                <AiFillHeart className="m-auto size-6 fill-yellow-500" />
              )}
            </button>
          </div>
          <div className="flex object-contain flex-wrap justify-evenly py-10">
            {formula.imgs.map((url, urlIndex) => (
              <img
                className="object-contain p-2 py-2 m-2 max-w-xs md:max-w-lg bg-slate-50"
                src={url}
                key={urlIndex}
              />
            ))}
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Formula;
