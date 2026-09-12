import { Stack } from "@mui/material";
import Head from "next/head";
import { ComponentType } from "react";

const withLayoutBasic = <P extends object>(Component: ComponentType<P>) => {
  function WithLayoutBasic(props: P) {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "pink" }}>Header Basic </Stack>
          <Stack id={"main"}>
            <Component {...props} />
          </Stack>
          <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
        </Stack>
      </>
    );
  }
  return WithLayoutBasic;
};

export default withLayoutBasic;
