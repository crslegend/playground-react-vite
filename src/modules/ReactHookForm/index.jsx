import { Typography } from "antd";
import BasicUsage from "@modules/ReactHookForm/components/BasicUsage/index";

// antd related
const { Title } = Typography;

const ReactHookForm = () => {
  return (
    <>
      <Title>Various usages of react-hook-form</Title>
      <BasicUsage />
    </>
  );
};

export default ReactHookForm;
