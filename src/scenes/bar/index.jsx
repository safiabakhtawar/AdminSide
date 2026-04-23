import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 3 }, pb: { xs: 3, md: 4 }, pt: { xs: 2, md: 3 } }}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box sx={{ height: "75vh" }}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
