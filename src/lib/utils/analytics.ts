import posthog from "posthog-js";

function initiateAnalytics() {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_ID as string, {
  // eslint-disable-next-line
    api_host: "https://app.posthog.com"
  });
}

function captureAnayltics(
  analyticsTitle: string,
  analyticsProperty: string,
  analyticsValue: string
) {
  const analyticsObject: Record<string, string> = {};

  analyticsObject[analyticsProperty] = analyticsValue;

  posthog.capture(analyticsTitle, analyticsObject);
}

export { initiateAnalytics, captureAnayltics };
