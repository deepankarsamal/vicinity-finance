import { Sidebar } from "@/components/ui/Sidebar";
import { TopBar } from "@/components/ui/TopBar";

// TODO: Replace with actual auth/session role detection
const MOCK_ROLE = "borrower" as const;
const MOCK_USER = {
  name: "Rohan Sharma",
  initials: "RS",
  subtitle: "Borrower Account",
  role: "Verified Account",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        role={MOCK_ROLE}
        userName={MOCK_USER.name}
        userInitials={MOCK_USER.initials}
        userSubtitle={MOCK_USER.subtitle}
      />
      <div className="ml-64 flex flex-col min-h-screen">
        <TopBar
          title="Dashboard"
          userName={MOCK_USER.name}
          userRole={MOCK_USER.role}
          userInitials={MOCK_USER.initials}
        />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
