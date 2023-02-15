import type { NextPage } from "next";

type WithPageLayout<T> = NextPage<T> & {
  PageLayout?: React.ComponentType<any>;
};

export default WithPageLayout;
