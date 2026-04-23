import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 3 }, pb: { xs: 3, md: 4 }, pt: { xs: 2, md: 3 } }}>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box sx={{ height: "75vh" }}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
