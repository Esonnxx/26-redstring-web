import RouteContentReady from "@/components/RouteContentReady";

export default function Template({ children }: LayoutProps<"/">) {
  return (
    <div data-route-content>
      {children}
      <RouteContentReady />
    </div>
  );
}
