import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div style={style.mainContainer}>
      <Title>A testing site made using React with Vite!</Title>
      <Button style={style.button} onClick={() => navigate("/rhf")}>
        Enter Site
      </Button>
    </div>
  );
};

export default HomePage;
