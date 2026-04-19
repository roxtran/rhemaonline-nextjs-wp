import { Container, def } from "styles/GlobalStyle";
import { useState, useMemo } from "react";
import { FiMapPin, FiExternalLink, FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Meta from "components/common/meta";
import styled from "styled-components";

// ── Sample sponsor data ──────────────────────────────────────────────
const sponsors = [
  {
    id: 1,
    name: "Lotus Physiotherapy",
    logo: "",
    categories: ["Physiotherapists, Massage Therapy"],
    description:
      "Lotus has highly qualified massage therapists, physiotherapists, chiropractors that put in their best effort to help you by providing the best services.",
    location: "Toronto, ON",
    website: "#",
    sponsorTier: "diamond" as const,
  },
  {
    id: 2,
    name: "Ohoho Living Style",
    logo: "",
    categories: ["Home Furniture, Home Entertainment"],
    description:
      "Discover Ohoho Living Style, your trusted Canadian retailer for premium indoor and outdoor furnishings. Explore our local stores for the largest selection!",
    location: "Toronto, ON",
    website: "#",
    sponsorTier: "diamond" as const,
  },
  {
    id: 3,
    name: "TalkK Therapy",
    logo: "",
    categories: ["Family Therapy, Marriage Counsellor"],
    description:
      "Provides comprehensive, 24/7 telehealth services, chronic condition co-management, etc.",
    location: "Brampton, ON",
    website: "#",
    sponsorTier: "diamond" as const,
  },
  {
    id: 4,
    name: "Harley InDesign Inc.",
    logo: "",
    categories: ["Interior Designer"],
    description:
      "A boutique design company is known for its unique talent for the planning and drafting of inspiring Interiors & Architectural’s.",
    location: "Toronto, ON",
    website: "#",
    sponsorTier: "diamond" as const,
  },
  {
    id: 5,
    name: "Coffee Seamaid",
    logo: "",
    categories: ["Coffee Shop"],
    description:
      "A destination for coffee lovers who appreciate a quick caffeine fix. Whether you are searching for a social hangout with friends, or a unique place to savour your favourite brew",
    location: "Etobicoke, ON",
    website: "#",
    sponsorTier: "diamond" as const,
  },
  {
    id: 6,
    name: "Game ARCADE",
    logo: "",
    categories: ["Game Arcade, Entertainment"],
    description:
      "Battle it out in our 90+ arcade games, immerse in our VR games, score a strike (or strike out) in bowling, or walk the edge on our ropes course.",
    location: "Toronto, ON",
    website: "#",
    sponsorTier: "diamond" as const,
  },
  {
    id: 7,
    name: "Foral Tips Nails & Spa",
    logo: "",
    categories: ["Nail Salon, Hair Salon, Hairstylist"],
    description:
      "Book online with the best Nail Salons near you in Mississauga. Great offers and discounts!",
    location: "Toronto, ON",
    website: "#",
    sponsorTier: "gold" as const,
  },
  {
    id: 8,
    name: "Palmeiras Dinner Bar",
    logo: "",
    categories: ["Family Restaurant, Casual Dining"],
    description:
      "Great spot for a casual dinner while watching a soccer match! Relaxing patio seating.",
    location: "Mississauga, ON",
    website: "#",
    sponsorTier: "gold" as const,
  },
  {
    id: 9,
    name: "T&T Autoshop",
    logo: "",
    categories: ["Auto Repair, Body Detailing"],
    description:
      "A full service auto repair shop providing a wide variety of services: fluid changes, brakes & more",
    location: "Toronto, ON",
    website: "#",
    sponsorTier: "gold" as const,
  },
  {
    id: 10,
    name: "Ama-Zin Burger",
    logo: "",
    categories: ["Burger Store, Fast Food"],
    description:
      "We believe in the power of a perfect bite, 100% Canadian beef burgers, never frozen.",
    location: "Brampton, ON",
    website: "#",
    sponsorTier: "gold" as const,
  },
  {
    id: 11,
    name: "Dwecor Home Renovation",
    logo: "",
    categories: ["Home Construction, Renovation"],
    description:
      "Dreaming of a home renovation but worried about the cost? Our team of experienced professionals is dedicated to helping you create the home of your dreams.",
    location: "Toronto, ON",
    website: "#",
    sponsorTier: "gold" as const,
  },
  {
    id: 12,
    name: "A & C Accounting Service Inc",
    logo: "",
    categories: ["Accounting Service, Tax Filing"],
    description:
      "We offers expert tax preparation, bookkeeping, and financial advice for businesses and individuals in Mississauga. Contact us for accounting solutions.",
    location: "Mississauga, ON",
    website: "#",
    sponsorTier: "gold" as const,
  },
  // ── Extra page fillers ──
  {
    id: 13,
    name: "Grace Photography",
    logo: "",
    categories: ["Photography", "Events"],
    description:
      "Capturing your most precious moments with a creative eye. Weddings, portraits, and corporate event photography.",
    location: "Toronto, ON",
    website: "#",
    sponsorTier: "diamond" as const,
  },
  {
    id: 14,
    name: "Sunrise Bakery",
    logo: "",
    categories: ["Bakery", "Catering"],
    description:
      "Freshly baked goods made with love every morning. Custom cakes, pastries, and catering for all occasions.",
    location: "Scarborough, ON",
    website: "#",
    sponsorTier: null,
  },
  {
    id: 15,
    name: "TechFix Solutions",
    logo: "",
    categories: ["IT Services", "Computer Repair"],
    description:
      "Fast and reliable tech support for home and business. We repair laptops, desktops, and offer network solutions.",
    location: "North York, ON",
    website: "#",
    sponsorTier: "gold" as const,
  },
  {
    id: 16,
    name: "BloomField Florist",
    logo: "",
    categories: ["Flowers", "Gift Shop"],
    description:
      "Beautiful floral arrangements for every occasion. Same-day delivery across the GTA.",
    location: "Markham, ON",
    website: "#",
    sponsorTier: "gold" as const,
  },
];

const ITEMS_PER_PAGE = 12;

// ── Component ────────────────────────────────────────────────────────
export default function SponsorBusinesses() {
  const pageTitle = "Sponsor Businesses";

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter sponsors
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return sponsors;
    const q = searchQuery.toLowerCase();
    return sponsors.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.categories.some((c) => c.toLowerCase().includes(q)) ||
        s.description.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goTo = (p: number) => {
    if (p >= 1 && p <= totalPages) setCurrentPage(p);
  };

  // Reset to page 1 when search changes
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  // Generate initials for avatar fallback
  const getInitials = (name: string) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

  return (
    <>
      <Meta title={pageTitle} />

      <StyledSponsor>
        {/* ── Hero section ─────────────────────────────────────── */}
        <div className="hero-section">
          <h1>{pageTitle}</h1>

          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              id="sponsor-search"
              type="text"
              placeholder="ex: home repair, plumber, hairstylist, etc."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* ── Card grid ────────────────────────────────────────── */}
        <div className="grid-wrapper">
          <div className="card-grid">
            {paginated.map((sponsor) => (
              <div className="card" key={sponsor.id}>
                {/* Card header */}
                <div className="card-header">
                  <div className="avatar-wrapper">
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="avatar"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          (
                            e.target as HTMLImageElement
                          ).nextElementSibling?.classList.remove("hidden");
                        }}
                      />
                    ) : null}
                    <span
                      className={`avatar-fallback ${sponsor.logo ? "hidden" : ""}`}
                    >
                      {getInitials(sponsor.name)}
                    </span>
                  </div>
                  {sponsor.sponsorTier && (
                    <span className={`badge ${sponsor.sponsorTier}`}>
                      {sponsor.sponsorTier === "diamond" ? "Diamond sponsor" : "Gold sponsor"}
                    </span>
                  )}
                </div>

                {/* Card body */}
                <h3 className="card-title">{sponsor.name}</h3>

                <div className="categories">
                  {sponsor.categories.map((cat, i) => (
                    <span key={i} className="category-tag">
                      {cat}
                      {i < sponsor.categories.length - 1 && ", "}
                    </span>
                  ))}
                </div>

                <p className="card-desc">{sponsor.description}</p>

                {/* Card footer */}
                <div className="card-footer">
                  <span className="location">
                    <FiMapPin size={13} />
                    {sponsor.location}
                  </span>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-link"
                  >
                    <FiExternalLink size={13} />
                    VISIT BUSINESS
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {paginated.length === 0 && (
            <p className="empty-state">
              No businesses found matching &ldquo;{searchQuery}&rdquo;
            </p>
          )}
        </div>

        {/* ── Pagination ──────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="page-btn"
              disabled={currentPage === 1}
              onClick={() => goTo(currentPage - 1)}
              aria-label="Previous page"
            >
              <FiChevronLeft size={20} />
            </button>

            <span className="page-info">
              {currentPage} of {totalPages}
            </span>

            <button
              className="page-btn"
              disabled={currentPage === totalPages}
              onClick={() => goTo(currentPage + 1)}
              aria-label="Next page"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        )}

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div className="cta-section">
          <p>Want to be part of something special?</p>
          <p>
            Register to{" "}
            <a href="#" className="cta-link">
              become our sponsor
            </a>
          </p>
        </div>
      </StyledSponsor>
    </>
  );
}

// ── Styled Components ────────────────────────────────────────────────
const StyledSponsor = styled(Container)`
  padding-top: 6rem;
  gap: 0;
  background-color: #F2F4FA;

  /* ── Hero ─────────────────────── */
  .hero-section {
    text-align: center;
    padding: 2rem 1rem 1rem;

    h1 {
      color: var(--blue);
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      padding: 0;
    }
  }

  .search-bar {
    position: relative;
    max-width: 32rem;
    margin: 0 auto 2rem;

    .search-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: #a0aec0;
      font-size: 1.1rem;
    }

    input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      border: 1px solid #d1d9e6;
      border-radius: 2rem;
      font-size: 0.9rem;
      font-family: "Montserrat", sans-serif;
      color: var(--text-color);
      background: #fff;
      outline: none;
      transition: border-color 0.3s, box-shadow 0.3s;

      &::placeholder {
        color: #b0bec5;
      }
      &:focus {
        border-color: var(--blue);
        box-shadow: 0 0 0 3px rgba(16, 97, 162, 0.12);
      }
    }
  }

  /* ── Grid ─────────────────────── */
  .grid-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    padding: 1rem 0 2rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 80rem) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 60rem) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 40rem) {
      grid-template-columns: 1fr;
    }
  }

  /* ── Card ─────────────────────── */
  .card {
    background: #fff;
    border: 1px solid #edf2f7;
    border-radius: 0.75rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    min-width: 0; /* Help Prevent overflow */

    &:hover {
      box-shadow: 0 12px 28px rgba(16, 97, 162, 0.08);
      transform: translateY(-4px);
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .5rem;
    background: transparent;
    padding: 0.5rem 0;
    border-bottom: none;
  }

  .avatar-wrapper {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    .avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-fallback {
      background: linear-gradient(135deg, var(--blue) 0%, var(--light-blue) 100%);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .hidden {
      display: none;
    }
  }

  .badge {
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    text-transform: none;
    white-space: nowrap;

    &.diamond {
      background: #eefbff;
      color: #2b6cb0;
    }

    &.diamond {
      background: #eefbff;
      color: #3182ce;
    }

    &.gold {
      background: #fff8e1;
      color: #b7791f;
    }
  }

  .card-title {
    font-size: 1.15rem;
    font-weight: 500;
    color: #1a202c;
    padding: 0;
    margin-bottom: 1.35rem;
    line-height: 1.2;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.6rem;
      left: 0;
      width: 2.5rem;
      height: 0.125rem;
      background: var(--blue);
    }
  }

  .categories {
    margin-bottom: 1rem;

    .category-tag {
      color: #3182ce;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  .card-desc {
    font-size: 0.85rem;
    line-height: 1.6;
    color: #718096;
    flex: 1;
    margin-bottom: 0.5rem;
    display: block;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    background: transparent;
    gap: 0.25rem;
    padding:  1rem 0;
    border-top: none;
  }

  .location {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.75rem;
    color: #4a5568;
    font-weight: 700;
    white-space: nowrap;
    flex-shrink: 0;

    svg {
      color: #718096;
      font-size: 1rem;
    }
  }

  .visit-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--blue);
    text-decoration: underline;
    text-underline-offset: 3px;
    white-space: nowrap;
    letter-spacing: 0.2px;
    flex-shrink: 0;

    svg {
      font-size: 1rem;
      text-decoration: none;
    }

    &:hover {
      color: var(--light-blue);
    }
  }

  /* ── Pagination ───────────────── */
  .pagination {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0 0.5rem;
  }

  .page-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: var(--blue);
    color: #fff;
    transition: background 0.3s, opacity 0.3s;

    &:hover:not(:disabled) {
      background: var(--light-blue);
    }
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }

  .page-info {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--heading-color);
  }

  /* ── CTA ──────────────────────── */
  .cta-section {
    text-align: center;
    padding: 1.5rem 1rem 3rem;

    p {
      margin-bottom: 0.25rem;
      font-size: 0.9rem;
      color: var(--text-color);
    }

    .cta-link {
      color: var(--blue);
      font-weight: 700;
      text-decoration: underline;
    }
  }

  /* ── Empty state ──────────────── */
  .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #8a94a6;
    font-size: 1rem;
  }
`;
