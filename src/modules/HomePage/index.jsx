import { Button, Typography } from "antd";

// antd related
const { Title } = Typography;

// styling
const style = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  button: {
    width: "100px",
    alignSelf: "center",
  },
};

const HomePage = () => {
  return (
    <div style={style.mainContainer}>
      <Title style={{ color: "white" }}>Welcome to my testing site made using React with Vite!</Title>
      <Button style={style.button}>Enter Site</Button>
    </div>
  );
};

export default HomePage;
