import PropTypes from "prop-types";

export const Table = ({ formula }) => {
  const wbAjust = (b, g) => {
    return (
      <>
        {b
          ? " Blue: " + formula.WBAdjust.Blue
          : " Amber: " + formula.WBAdjust.Amber}

        {g
          ? " Green: " + formula.WBAdjust.Green
          : " Magenta: " + formula.WBAdjust.Magenta}
      </>
    );
  };

  const tableRow = (name, value) => {
    return (
      <tr className="bg-neutral-800">
        <td className="px-4 py-3 font-medium whitespace-nowrap text-neutral-200">
          {name}:
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-neutral-200">
          {value > 0 ? "+" + value : value}
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="overflow-x-auto mx-20 mt-20 mb-40 text-center rounded-xl border-2 shadow-xl border-neutral-200">
        <table className="min-w-full text-sm divide-y-2 bg-neutral-800 divide-neutral-500">
          <thead className="bg-neutral-800 ltr:text-left rtl:text-right">
            <tr>
              <th
                colSpan={2}
                className="p-4 text-2xl font-black text-yellow-400 whitespace-nowrap"
              >
                {formula.Name}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-500">
            {tableRow("Author", formula.Author)}

            {tableRow("Picture Control", formula.PictureControl)}

            {tableRow("Effect Level", formula.EffectLevel)}

            {tableRow("Quick Sharp", formula.QuickSharp)}

            {tableRow("Sharpening", formula.Sharpening)}

            {tableRow("Mid-Range Sharpening", formula.MidRangeSharpening)}

            {tableRow("Clarity", formula.Clarity)}

            {tableRow("Contrast", formula.Contrast)}

            {tableRow("Saturation", formula.Saturation)}

            {tableRow("Active D-Lighting", formula.ActiveDLighting)}

            {tableRow("High ISO NR", formula.HighISONR)}

            {tableRow("White Balance", formula.WhiteBalance)}

            {/* {tableRow("WB Adjust", formula.WBAdjust)} */}
            {
              <tr>
                <td className="px-4 py-3 font-medium whitespace-nowrap text-neutral-200">
                  WB Adjust:
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-neutral-200">
                  {wbAjust(formula.WBAdjust.Blue, formula.WBAdjust.Green)}
                </td>
              </tr>
            }
            <tr>
              <td
                colSpan={2}
                className="px-4 py-3 font-medium whitespace-nowrap text-neutral-200"
              >
                Images:
                <div className="flex object-contain flex-wrap justify-evenly py-10">
                  {formula.imgs?.map((url, index) => (
                    <img
                      className="object-contain my-5 max-w-xs md:max-w-2xl"
                      src={url}
                      key={index}
                    />
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Table.propTypes = {
  formula: PropTypes.shape({
    Name: PropTypes.string,
    Author: PropTypes.string,
    PictureControl: PropTypes.string,
    EffectLevel: PropTypes.string,
    QuickSharp: PropTypes.string,
    Sharpening: PropTypes.string,
    MidRangeSharpening: PropTypes.string,
    Clarity: PropTypes.string,
    Contrast: PropTypes.string,
    Saturation: PropTypes.string,
    ActiveDLighting: PropTypes.string,
    HighISONR: PropTypes.string,
    WhiteBalance: PropTypes.string,
    WBAdjust: PropTypes.shape({
      Blue: PropTypes.string,
      Green: PropTypes.string,
      Amber: PropTypes.string,
      Magenta: PropTypes.string,
    }),
    imgs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Table;
