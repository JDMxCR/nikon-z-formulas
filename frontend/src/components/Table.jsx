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
      <tr>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
          {name}:
        </td>
        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
          {value > 0 ? "+" + value : value}
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="overflow-x-auto m-10 text-center rounded-xl border border-gray-200 shadow-xl">
        <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
          <thead className="bg-gray-800 ltr:text-left rtl:text-right">
            <tr>
              <th
                colSpan={2}
                className="px-4 py-2 text-2xl font-black text-yellow-400 whitespace-nowrap"
              >
                {formula.Name}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
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
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  WB Adjust:
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {wbAjust(formula.WBAdjust.Blue, formula.WBAdjust.Green)}
                </td>
              </tr>
            }
            <tr>
              <td colSpan={2}>
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
