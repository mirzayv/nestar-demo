import { Stack } from "@mui/material";
import Head from "next/head";
import { ComponentType } from "react";

const withLayoutMain = <P extends object>(Component: ComponentType<P>) => {
  function WithLayoutMain(props: P) {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#81c784" }}>Header home</Stack>
          <Stack id={"main"}>
            <Component {...props} />
          </Stack>
          <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
        </Stack>
      </>
    );
  }
  return WithLayoutMain;
};

export default withLayoutMain;
