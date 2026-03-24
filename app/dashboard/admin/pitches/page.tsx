"use client";

import { useState } from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { PitchStatus } from "@/types";

const ALL_PITCHES = [
  {
    id: "1",
    initials: "RS",
    color: "from-primary to-secondary",
    borrower: "Rohan Sharma",
    business: "Sharma's Tiffin Service",
    city: "Indore",
    amount: 350000,
    submitted: "Dec 28, 2024",
    status: "approved" as PitchStatus,
  },
  {
    id: "2",
    initials: "SK",
    color: "from-secondary to-tertiary-container",
    borrower: "Suresh Kumar",
    business: "Kumar Bakery & Snacks",
    city: "Pune",
    amount: 450000,
    submitted: "Jan 04, 2025",
    status: "pending" as PitchStatus,
  },
  {
    id: "3",
    initials: "PM",
    color: "from-tertiary to-primary",
    borrower: "Priya Mehta",
    business: "Mehta Handicrafts",
    city: "Ahmedabad",
    amount: 200000,
    submitted: "Jan 12, 2025",
    status: "pending" as PitchStatus,
  },
  {
    id: "4",
    initials: "RG",
    color: "from-primary-dark to-secondary",
    borrower: "Ravi Gupta",
    business: "Green Cabs Fleet",
    city: "Indore",
    amount: 1200000,
    submitted: "Jan 18, 2025",
    status: "rejected" as PitchStatus,
  },
  {
    id: "5",
    initials: "PF",
    color: "from-tertiary to-secondary",
    borrower: "Priya Fernandez",
    business: "Patel Farm Fresh",
    city: "Mumbai",
    amount: 200000,
    submitted: "Feb 01, 2025",
    status: "funded" as PitchStatus,
  },
];

const TABS: { label: string; value: PitchStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
  { label: "Funded", value: "funded" },
];

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export default function AdminPitchesPage() {
  const [activeTab, setActiveTab] = useState<PitchStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [selectedPitch, setSelectedPitch] = useState<(typeof ALL_PITCHES)[0] | null>(null);
  const [notes, setNotes] = useState("");

  const getCount = (status: PitchStatus | "all") =>
    status === "all"
      ? ALL_PITCHES.length
      : ALL_PITCHES.filter((p) => p.status === status).length;

  const filtered = ALL_PITCHES.filter((p) => {
    const matchesTab = activeTab === "all" || p.status === activeTab;
    const matchesSearch =
      search === "" ||
      p.borrower.toLowerCase().includes(search.toLowerCase()) ||
      p.business.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-[28px] font-extrabold tracking-tight text-on-surface">
          Manage Pitches
        </h2>
        <p className="text-on-surface-variant mt-1">Review and manage all loan pitch applications.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-surface-container-low p-1 rounded-xl w-fit flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === tab.value
                ? "bg-surface-container-lowest shadow-sm text-on-surface"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {tab.label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.value
                  ? "bg-primary/15 text-primary"
                  : "bg-outline-variant/20 text-on-surface-variant"
              }`}
            >
              {getCount(tab.value)}
            </span>
          </button>
        ))}
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-4">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Search borrower, business, city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 pr-4 h-11 w-72 bg-surface-container-lowest rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-on-surface placeholder:text-outline-variant shadow-arch"
          />
        </div>
        <button className="h-11 px-4 bg-surface-container-lowest rounded-xl text-sm font-semibold flex items-center gap-2 shadow-arch hover:ring-2 hover:ring-primary/10 transition-all">
          <span className="material-symbols-outlined text-sm text-outline">calendar_today</span>
          Date Range
        </button>
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-arch overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low/50">
                {["Borrower", "Business Name", "City", "Loan Ask", "Submitted", "Status", "Actions"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-surface-container-low/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                      >
                        {p.initials}
                      </div>
                      <span className="font-semibold text-on-surface text-sm">{p.borrower}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-on-surface text-sm">{p.business}</td>
                  <td className="px-6 py-4 text-on-surface-variant text-sm">{p.city}</td>
                  <td className="px-6 py-4 font-bold text-on-surface text-sm">{formatINR(p.amount)}</td>
                  <td className="px-6 py-4 text-on-surface-variant text-sm">{p.submitted}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="px-6 py-4">
                    {p.status === "pending" ? (
                      <button
                        onClick={() => setSelectedPitch(p)}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-dark transition-colors shadow-sm shadow-primary/20"
                      >
                        Review
                      </button>
                    ) : (
                      <button className="px-4 py-2 text-outline text-xs font-bold hover:text-on-surface">
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-16 text-on-surface-variant">
                    No pitches match the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Approve Modal */}
      {selectedPitch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-md p-6">
          <div className="bg-surface-container-lowest w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
            {/* Modal header */}
            <div className="p-8 border-b border-outline-variant/10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedPitch.color} flex items-center justify-center text-white font-bold`}
                >
                  {selectedPitch.initials}
                </div>
                <div>
                  <h3 className="font-extrabold text-on-surface text-xl">{selectedPitch.borrower}</h3>
                  <p className="text-on-surface-variant text-sm">{selectedPitch.business} · {selectedPitch.city}</p>
                </div>
                <StatusBadge status={selectedPitch.status} className="ml-auto" />
              </div>
              <div className="grid grid-cols-3 gap-4 p-4 bg-surface-container-low rounded-xl">
                <div>
                  <p className="text-[10px] font-bold text-outline uppercase mb-1">Loan Ask</p>
                  <p className="font-bold text-on-surface">{formatINR(selectedPitch.amount)}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-outline uppercase mb-1">Submitted</p>
                  <p className="font-bold text-on-surface">{selectedPitch.submitted}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-outline uppercase mb-1">City</p>
                  <p className="font-bold text-on-surface">{selectedPitch.city}</p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="p-8">
              <label className="block text-sm font-semibold text-on-surface-variant mb-3">
                Internal Notes (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Add internal review notes, conditions, or concerns..."
                className="w-full p-4 bg-surface-container-low rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-on-surface resize-none"
              />
            </div>

            {/* Actions */}
            <div className="px-8 pb-8 flex gap-4">
              <button
                onClick={() => {
                  setSelectedPitch(null);
                  setNotes("");
                }}
                className="flex-1 py-3.5 border border-outline-variant/40 rounded-xl text-on-surface font-bold hover:bg-surface-container-low transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedPitch(null);
                  setNotes("");
                }}
                className="flex-1 py-3.5 bg-error text-white rounded-xl font-bold hover:bg-error/90 transition-colors shadow-sm"
              >
                Reject
              </button>
              <button
                onClick={() => {
                  setSelectedPitch(null);
                  setNotes("");
                }}
                className="flex-1 py-3.5 bg-tertiary-container text-white rounded-xl font-bold hover:bg-tertiary hover:scale-[1.01] transition-all shadow-sm shadow-tertiary/20"
              >
                Approve ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
