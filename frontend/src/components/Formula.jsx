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
    <div className="flex flex-col flex-wrap items-center justify-between py-10 min-w-72 sm:px-10 ">
      {db.formulas.map((formula, index) => (
        <ul
          key={index}
          className="relative p-10 m-1 my-5 font-semibold text-gray-200 bg-gray-800 border-2 rounded-lg size-4/5"
        >
          <li className="text-xl font-black text-center">{formula.Name}</li>
          <li>{"Author: " + formula.Author}</li>
          <li>{"Picture Profile: " + formula.PictureControl}</li>
          <li>Effect Level:{valueOutput(formula.EffectLevel)}</li>
          <li>Quick Sharp:{valueOutput(formula.QuickSharp)}</li>
          <li>Sharpening:{valueOutput(formula.Sharpening)}</li>
          <li>
            Mid-Range Sharpening:{valueOutput(formula.MidRangeSharpening)}
          </li>
          <li>Clarity:{valueOutput(formula.Clarity)}</li>
          <li>Contrast: {valueOutput(formula.Contrast)}</li>
          <li>Saturation: {valueOutput(formula.Saturation)}</li>
          <li>Active D-Lighting:{valueOutput(formula.ActiveDLighting)}</li>
          <li>High ISO NR:{valueOutput(formula.HighISONR)}</li>
          <li>White Balnce:{valueOutput(formula.WhiteBalance)}</li>
          <li>
            WB Ajust:
            {formula.WBAdjust.Blue
              ? " Blue: " + formula.WBAdjust.Blue
              : " Amber: " + formula.WBAdjust.Amber}
            {formula.WBAdjust.Green
              ? " Green: " + formula.WBAdjust.Green
              : " Magenta: " + formula.WBAdjust.Magenta}
          </li>

          <li>ISO:{" " + formula.ISO}</li>
          <button
            onClick={() => favoriteHandle(index)}
            className="absolute size-10 right-6 top-6"
          >
            {formulas[index].isFavorite ? (
              <AiOutlineHeart className="m-auto size-6 fill-yellow-500" />
            ) : (
              <AiFillHeart className="m-auto size-6 fill-yellow-500" />
            )}
          </button>
          <div className="flex flex-wrap object-contain py-10 justify-evenly">
            {formula.imgs.map((url, urlIndex) => (
              <img
                className="object-contain max-w-xs p-2 py-2 m-2 md:max-w-lg bg-slate-50"
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
