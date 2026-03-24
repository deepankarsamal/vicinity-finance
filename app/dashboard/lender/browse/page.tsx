"use client";

import { useState } from "react";
import { PitchCard } from "@/components/ui/PitchCard";

const MOCK_PITCHES = [
  {
    id: "1",
    businessName: "Sharma's Tiffin Service",
    businessType: "Food & Beverage",
    city: "Indore",
    description: "Home-style meal delivery scaling to corporate hubs across central India.",
    loanAmount: 350000,
    interestRate: 14,
    tenureMonths: 18,
    amountFunded: 252000,
    investorCount: 8,
    status: "approved" as const,
  },
  {
    id: "2",
    businessName: "Kumar Textiles",
    businessType: "Manufacturing",
    city: "Delhi",
    description: "Sustainable cotton weaving unit expanding its export capacity to European markets.",
    loanAmount: 800000,
    interestRate: 16,
    tenureMonths: 24,
    amountFunded: 360000,
    investorCount: 14,
    status: "approved" as const,
  },
  {
    id: "3",
    businessName: "Patel Farm Fresh",
    businessType: "Agriculture",
    city: "Mumbai",
    description: "Organic farm-to-table logistics network providing daily essentials to urban Mumbai.",
    loanAmount: 200000,
    interestRate: 12,
    tenureMonths: 12,
    amountFunded: 176000,
    investorCount: 22,
    status: "approved" as const,
  },
  {
    id: "4",
    businessName: "Mehta Auto Parts",
    businessType: "Automotive",
    city: "Indore",
    description: "Tier-2 spare parts distributor upgrading inventory management with digital logistics.",
    loanAmount: 550000,
    interestRate: 18,
    tenureMonths: 36,
    amountFunded: 209000,
    investorCount: 5,
    status: "approved" as const,
  },
  {
    id: "5",
    businessName: "Nair Tech Services",
    businessType: "Technology",
    city: "Mumbai",
    description: "Hardware-as-a-service provider for co-working spaces and small enterprises.",
    loanAmount: 400000,
    interestRate: 15,
    tenureMonths: 18,
    amountFunded: 244000,
    investorCount: 11,
    status: "approved" as const,
  },
  {
    id: "6",
    businessName: "Singh Bakery",
    businessType: "Hospitality",
    city: "Delhi",
    description: "Legendary neighborhood bakery digitizing for home-delivery and artisanal gifting.",
    loanAmount: 150000,
    interestRate: 13,
    tenureMonths: 12,
    amountFunded: 82500,
    investorCount: 19,
    status: "approved" as const,
  },
];

const TENURE_PILLS = [
  { label: "All", value: 0 },
  { label: "6M", value: 6 },
  { label: "12M", value: 12 },
  { label: "18M", value: 18 },
  { label: "24M", value: 24 },
  { label: "36M", value: 36 },
];

export default function BrowsePitchesPage() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All Cities");
  const [tenure, setTenure] = useState(0);

  const filtered = MOCK_PITCHES.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.businessName.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase());
    const matchesCity = city === "All Cities" || p.city === city;
    const matchesTenure = tenure === 0 || p.tenureMonths === tenure;
    return matchesSearch && matchesCity && matchesTenure;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-[28px] font-extrabold tracking-tight text-on-surface leading-tight">
            Discover Opportunities
          </h2>
          <p className="text-text-muted font-medium mt-1">
            Browse verified business pitches from your community.
          </p>
        </div>
        <div className="text-sm font-semibold text-text-muted bg-surface-container-low px-4 py-2 rounded-full">
          Showing {filtered.length} results
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-container-lowest rounded-[20px] shadow-arch p-5 flex flex-wrap items-center gap-4">
        {/* Search */}
        <div className="flex-1 max-w-[320px] relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder="Search by business or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 pl-12 pr-4 bg-surface-container-low border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline-variant text-on-surface"
          />
        </div>

        {/* City dropdown */}
        <div className="w-[160px] relative">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full h-11 pl-4 pr-10 bg-surface-container-low border-none rounded-xl text-sm font-semibold appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-on-surface"
          >
            <option>All Cities</option>
            <option>Indore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
            expand_more
          </span>
        </div>

        {/* Tenure pills */}
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-xl flex-wrap">
          {TENURE_PILLS.map((pill) => (
            <button
              key={pill.label}
              onClick={() => setTenure(pill.value)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                tenure === pill.value
                  ? "bg-white text-primary shadow-sm"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pitch Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filtered.map((pitch) => (
          <PitchCard key={pitch.id} {...pitch} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-3 text-center py-20 text-on-surface-variant">
            <span className="material-symbols-outlined text-6xl mb-4 block opacity-20">search_off</span>
            <p className="font-semibold">No pitches match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
