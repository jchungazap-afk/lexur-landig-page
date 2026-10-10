# Graph Report - lexurpe-web  (2026-10-10)

## Corpus Check
- 67 files · ~109,696 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 1, .woff2 1, .ico 1)

## Summary
- 323 nodes · 673 edges · 13 communities (12 shown, 1 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 77 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Landing Page Home & Design System Icons
- Business Services & Navigation Schema
- Project Tooling & Package Dependencies
- SaaS Scene Data & Localization Models
- Canvas Particle Field & Graphics Engine
- TypeScript Compiler Configuration
- Documentation & Export Utilities
- i18n Language Context & SaaS Showcase Engine
- Brand Assets & Project Architecture Docs
- App Shell, Next.js Config & Providers
- Partners Showcase & Navbar Integration
- QA Strategy & Performance Standards
- Agent Rules & Development Guidelines

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 35 edges
2. `react` - 28 edges
3. `compilerOptions` - 16 edges
4. `LEXUR Landing Web Next.js 16` - 16 edges
5. `TRANSLATIONS` - 13 edges
6. `Navbar()` - 11 edges
7. `PinnedStory()` - 10 edges
8. `CaretDoubleRight` - 9 edges
9. `Hero()` - 9 edges
10. `next` - 8 edges

## Surprising Connections (you probably didn't know these)
- `LEXUR Landing Web Next.js 16` --references--> `Ferrecore Pos System (.JPG)`  [INFERRED]
  README.md → public/assets/ferrecore_pos_system.jpg
- `LEXUR Landing Web Next.js 16` --references--> `Lexur Cloud System (.JPG)`  [INFERRED]
  README.md → public/assets/lexur_cloud_system.jpg
- `LEXUR Landing Web Next.js 16` --references--> `Logo (.WEBP)`  [INFERRED]
  README.md → public/assets/logo.webp
- `LEXUR Landing Web Next.js 16` --references--> `Medclinic Ehr System (.JPG)`  [INFERRED]
  README.md → public/assets/medclinic_ehr_system.jpg
- `LEXUR Landing Web Next.js 16` --references--> `Optivision Eye System (.JPG)`  [INFERRED]
  README.md → public/assets/optivision_eye_system.jpg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **QA & Performance Governance** — qa_performance_plan_playwright_e2e, qa_performance_plan_120hz_performance, qa_performance_plan_cwv_metrics, qa_performance_plan_image_optimization [EXTRACTED 1.00]

## Communities (13 total, 1 thin omitted)

### Community 0 - "Landing Page Home & Design System Icons"
Cohesion: 0.05
Nodes (55): Home(), BrandLogo(), ArrowsOutSimple, ArrowUp, ArrowUpRight, BuildingsDuo, CalendarCheckDuo, ChatCircleTextDuo (+47 more)

### Community 1 - "Business Services & Navigation Schema"
Cohesion: 0.12
Nodes (31): lucide-react, react, CinematicScrollHero(), CtaButton(), Headline(), Hero(), Subhead(), TrustRow() (+23 more)

### Community 2 - "Project Tooling & Package Dependencies"
Cohesion: 0.05
Nodes (38): eslintConfig, dependencies, lucide-react, next, react, react-dom, devDependencies, eslint (+30 more)

### Community 3 - "SaaS Scene Data & Localization Models"
Cohesion: 0.14
Nodes (31): AwsIcon(), AzureIcon(), BRAND_ICON_MAP, CloudflareIcon(), DockerIcon(), GoIcon(), GoogleCloudIcon(), GraphQlIcon() (+23 more)

### Community 4 - "Canvas Particle Field & Graphics Engine"
Cohesion: 0.12
Nodes (27): ArrowRight, CaretDown, X, FieldState, hexToRgb(), P, ParticleField(), Props (+19 more)

### Community 5 - "TypeScript Compiler Configuration"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 6 - "Documentation & Export Utilities"
Cohesion: 0.14
Nodes (12): convert(), fs, HTMLToDOCX, { marked }, path, puppeteer, convert(), fs (+4 more)

### Community 7 - "i18n Language Context & SaaS Showcase Engine"
Cohesion: 0.23
Nodes (14): CaretDoubleRight, MockupFrame(), Props, PinnedScene(), sceneBgVars(), SceneProps, StaticScene(), COPY (+6 more)

### Community 8 - "Brand Assets & Project Architecture Docs"
Cohesion: 0.12
Nodes (17): Ferrecore Pos System (.JPG), Lexur Cloud System (.JPG), Logo (.WEBP), Medclinic Ehr System (.JPG), Optivision Eye System (.JPG), Lexur Horizontal (.SVG), Lexur Horizontal Negativo (.SVG), Lexur Simbolo (.SVG) (+9 more)

### Community 9 - "App Shell, Next.js Config & Providers"
Cohesion: 0.18
Nodes (9): nextConfig, next, jetbrains, lexend, metadata, plex, RootLayout(), viewport (+1 more)

### Community 10 - "Partners Showcase & Navbar Integration"
Cohesion: 0.31
Nodes (6): PartnersPage(), Navbar(), BRAND_ACCENTS, PartnersCarousel(), PARTNERS_DATA, PartnerItem

### Community 11 - "QA Strategy & Performance Standards"
Cohesion: 0.50
Nodes (4): 120Hz Visual Refresh & Animation Optimization, Core Web Vitals Thresholds, Next-Gen Image Formats & next/image, Playwright Automated Testing Criteria

## Knowledge Gaps
- **26 isolated node(s):** `react-dom`, `@tailwindcss/turbopack`, `@types/node`, `@types/react`, `@types/react-dom` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 128 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Business Services & Navigation Schema` to `Landing Page Home & Design System Icons`, `Project Tooling & Package Dependencies`, `SaaS Scene Data & Localization Models`, `Canvas Particle Field & Graphics Engine`, `i18n Language Context & SaaS Showcase Engine`, `Partners Showcase & Navbar Integration`?**
  _High betweenness centrality (0.209) - this node is a cross-community bridge._
- **Are the 14 inferred relationships involving `LEXUR Landing Web Next.js 16` (e.g. with `Ferrecore Pos System (.JPG)` and `Lexur Cloud System (.JPG)`) actually correct?**
  _`LEXUR Landing Web Next.js 16` has 14 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `@tailwindcss/turbopack`, `@types/node` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Landing Page Home & Design System Icons` be split into smaller, more focused modules?**
  _Cohesion score 0.05034965034965035 - nodes in this community are weakly interconnected._
- **Why does `useLanguage()` connect `Business Services & Navigation Schema` to `Landing Page Home & Design System Icons`, `Partners Showcase & Navbar Integration`, `SaaS Scene Data & Localization Models`, `Canvas Particle Field & Graphics Engine`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Should `Business Services & Navigation Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.1211840888066605 - nodes in this community are weakly interconnected._
- **Why does `next` connect `App Shell, Next.js Config & Providers` to `Business Services & Navigation Schema`, `Project Tooling & Package Dependencies`, `SaaS Scene Data & Localization Models`, `Canvas Particle Field & Graphics Engine`, `i18n Language Context & SaaS Showcase Engine`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._