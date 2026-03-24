"use client";

interface TopBarProps {
  title: string;
  userName?: string;
  userRole?: string;
  avatarSrc?: string;
  userInitials?: string;
}

export function TopBar({
  title,
  userName = "User",
  userRole = "Member",
  userInitials = "U",
}: TopBarProps) {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-surface-bright/80 backdrop-blur-xl sticky top-0 z-40 border-b border-outline-variant/10">
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-bold text-on-surface tracking-tight">{title}</h1>
        <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-1.5 w-64 gap-2">
          <span className="material-symbols-outlined text-outline text-sm">search</span>
          <input
            className="bg-transparent border-none focus:outline-none text-xs w-full placeholder:text-outline text-on-surface"
            placeholder="Search resources..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white" />
        </button>
        {/* Help */}
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">help_outline</span>
        </button>

        <div className="h-8 w-px bg-outline-variant mx-1" />

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-on-surface">{userName}</p>
            <p className="text-[10px] text-accent font-semibold">{userRole}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm ring-2 ring-primary/10">
            {userInitials}
          </div>
        </div>
      </div>
    </header>
  );
}
