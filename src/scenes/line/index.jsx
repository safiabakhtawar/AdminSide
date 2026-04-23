import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 3 }, pb: { xs: 3, md: 4 }, pt: { xs: 2, md: 3 } }}>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box sx={{ height: "75vh" }}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
