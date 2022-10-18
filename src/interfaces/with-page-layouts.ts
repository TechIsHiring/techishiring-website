import type { NextPage } from "next";

type WithPageLayout = NextPage & {
    PageLayout?: React.ComponentType<any>;
};

export default WithPageLayout;