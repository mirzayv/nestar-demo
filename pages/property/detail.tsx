import { Container, Stack } from "@mui/material";
import withLayoutBasic from "./libs/components/layout/LayoutBasic";

const PropertyDetail = () => {
  return (
    <>
      <Stack sx={{ background: "pink" }}>Header Basic </Stack>
      <Container>PROPERTY DETAIL</Container>
      <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
    </>
  );
};
export default withLayoutBasic(PropertyDetail);
