"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Role = "borrower" | "lender" | "admin";

interface SidebarProps {
  role?: Role;
  userName?: string;
  userInitials?: string;
  userSubtitle?: string;
}

const navConfig = {
  borrower: {
    label: "Borrower Portal",
    sections: [
      {
        title: "Borrower",
        links: [
          { href: "/dashboard/borrower", icon: "dashboard", label: "Dashboard" },
          { href: "/dashboard/borrower/pitches", icon: "campaign", label: "My Pitches" },
          { href: "/dashboard/borrower/pitches/new", icon: "add_circle", label: "Submit Pitch" },
          { href: "/dashboard/borrower/repayments", icon: "payments", label: "Repayments" },
        ],
      },
    ],
  },
  lender: {
    label: "Lender Portal",
    sections: [
      {
        title: "Lender",
        links: [
          { href: "/dashboard/lender", icon: "leaderboard", label: "Dashboard" },
          { href: "/dashboard/lender/browse", icon: "explore", label: "Browse Pitches" },
          { href: "/dashboard/lender/portfolio", icon: "account_balance_wallet", label: "My Portfolio" },
        ],
      },
    ],
  },
  admin: {
    label: "Admin Portal",
    sections: [
      {
        title: "Admin",
        links: [
          { href: "/dashboard/admin", icon: "dashboard", label: "Overview" },
          { href: "/dashboard/admin/pitches", icon: "gavel", label: "Manage Pitches", badge: "12" },
          { href: "/dashboard/admin/users", icon: "group", label: "Manage Users" },
        ],
      },
    ],
  },
};

export function Sidebar({
  role = "borrower",
  userName = "User",
  userInitials = "U",
  userSubtitle = "Member",
}: SidebarProps) {
  const pathname = usePathname();
  const config = navConfig[role];

  const isActive = (href: string) => {
    if (href === "/dashboard/borrower" || href === "/dashboard/lender" || href === "/dashboard/admin") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-surface-container-low z-50 overflow-hidden">
      {/* Logo */}
      <div className="p-6 flex flex-col">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span
              className="material-symbols-outlined text-white text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance
            </span>
          </div>
          <span className="text-lg font-extrabold text-on-surface tracking-tight">
            Vicinity Finance
          </span>
        </div>
        <span className="text-[10px] font-bold text-outline uppercase tracking-widest mt-1.5 ml-0.5">
          {config.label}
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 overflow-y-auto no-scrollbar pb-6">
        {config.sections.map((section) => (
          <div key={section.title} className="mb-6">
            <p className="px-4 text-[10px] font-bold text-outline uppercase tracking-widest mb-2">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-primary font-bold border-r-4 border-primary bg-white shadow-sm"
                        : "text-on-surface opacity-70 hover:text-primary hover:bg-white/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined">{link.icon}</span>
                      <span>{link.label}</span>
                    </div>
                    {"badge" in link && link.badge && (
                      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer user profile */}
      <div className="p-4 bg-white/50">
        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-outline-variant/20">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {userInitials}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold text-on-surface truncate">{userName}</p>
            <p className="text-[10px] text-outline font-medium">{userSubtitle}</p>
          </div>
          <button className="text-outline hover:text-error transition-colors">
            <span className="material-symbols-outlined text-lg">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
