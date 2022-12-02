import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";

const SelectedBanner = ({ data, design,color }) => {
  const designs = {
    1: <Template1 data={data} color={color} />,
    2: <Template2 data={data} color={color} />,
    3: <Template3 data={data} color={color} />,
  };

  return <div>{designs[design]}</div>;
};

export default SelectedBanner;
