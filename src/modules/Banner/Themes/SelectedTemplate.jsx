import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";

const SelectedTemplate = ({ data, design }) => {
  const designs = {
    1: <Template1 data={data} />,
    2: <Template2 data={data} />,
    3: <Template2 data={data} />,
  };

  return <div>{designs[design]}</div>;
};

export default SelectedTemplate;
