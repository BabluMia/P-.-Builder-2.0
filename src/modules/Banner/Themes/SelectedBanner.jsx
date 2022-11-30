import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";

const SelectedBanner = ({ data, design }) => {
  const designs = {
    1: <Template1 data={data} />,
    2: <Template2 data={data} />,
    3: <Template3 data={data} />,
  };

  return <div>{designs[design]}</div>;
};

export default SelectedBanner;
