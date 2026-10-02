import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "en" && params.lang !== "fa") {
      throw redirect({ to: "/$lang", params: { lang: "en" } });
    }
  },
  component: () => <Outlet />,
});
