import { MultiLevelSidebar } from "./MultiLevelSidebar";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-row">
      <MultiLevelSidebar />

      <div>{children}</div>
    </div>
  );
}
