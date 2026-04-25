# B.A.J Restaurant — Landing Page MVP Plan & Dev Checklist

> **Project brief:** Build a 3-page landing site for B.A.J Restaurant, a cult-favorite Chinese-Malaysian café in Setapak, Kuala Lumpur, famous for inventing **Cheese Bak Kut Teh** — a viral fusion dish covered by SETHLUI, Bangsar Babe, FoodAdvisor, and Trip.com. Located on the 1st floor above Pasar Setapak wet market. Operating since Feb 2018. Affordable, student-loved, non-halal. Tech stack: Astro + Tailwind CSS + Framer Motion (via React islands) + Vercel. Mobile-first, fast on 4G.
>
> **Language policy: ALL CONTENT IN ENGLISH BY DEFAULT.** Chinese-Malaysian dish names (bak kut teh, char kuey teow, claypot, etc.) stay in their original spellings — they're proper food terms, don't anglicize. Brand name "B.A.J" stays. No bilingual translations of body copy.
>
> **⚠️ CRITICAL:** B.A.J serves pork (cheese bak kut teh contains pork chunks). This is **not a halal restaurant**. The site copy, audience targeting, and SEO must reflect this — it's a *Chinese-Malaysian* / non-Muslim positioning. Don't accidentally pitch this with halal language.

---

## 1. Brand Audit

**Identity:** B.A.J Restaurant · Setapak (above wet market) · Chinese-Malaysian café · Since Feb 2018

**The viral hook — central to entire brand:**
- **Cheese Bak Kut Teh** — invented here, covered by SETHLUI, Bangsar Babe, FoodAdvisor, Trip.com
- This dish *is* the marketing — pork, okra slices, herbal broth, melted cheese on top. People drive across KL to try it.

**Other signature items:**
- Creamy chicken cutlet spaghetti (fan favorite per Trip.com)
- Honey milk longan drink (signature)
- Dry and soup bak kut teh
- Western mains (chicken cutlet, spaghetti, etc.)
- Cheap mains starting RM3.90

**Audience:**
- TAR UMT students (TAR University of Management & Technology nearby — main customer base)
- Chinese-Malaysian foodies (non-Muslim — pork dishes)
- Cult-favorite seekers (people who follow KL food bloggers)
- Late-night supper crowd (open till 10pm)
- Curious tourists chasing the "cheese bak kut teh" experience

**Vibe:** Casual, no-frills, cosy little café environment. NOT fancy. Pricing screams student-friendly.

**Hours (verify):** 8am – 3pm + 5:30pm – 10pm split shift (per Bangsar Babe 2017 source — owner must confirm current hours)

**Location quirk:** Located *upstairs* in Pasar Setapak wet market. This is a feature, not a bug — gives them "hidden gem" street cred. Address: 1-18 Pasar Jalan Genting Kelang, Prima Setapak 2, 53000 KL.

**Press / social proof:**
- **1,203 Google reviews at 4.5⭐** — most reviewed in your entire lead list
- Featured by **SETHLUI** (Southeast Asia's biggest food blog) — major credibility
- Featured by Bangsar Babe (KL's most respected food blogger)
- Featured by FoodAdvisor, Trip.com
- Active Facebook page
- alacarte.my ordering page exists (third-party template, not their own)

**Emotional positioning:** *"The cheese bak kut teh place. Above the wet market. Worth the trip."*

---

## 2. Design Direction

This brand's DNA is **viral-cult-favorite + Chinese-Malaysian heritage + hidden-gem energy**. The design needs to feel proudly local, slightly retro, and confidently quirky — not polished-corporate, not aesthetic-cafe minimal.

### Color Palette

Think old-school Chinese-Malaysian café signage meets viral food blog energy.

| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Bone White | `#F4EFE6` |
| Surface | Pure Cream | `#FBF7EE` |
| Primary text | Ink Black | `#1B1714` |
| Secondary text | Soy Brown | `#5A4A3D` |
| **Accent (THE color)** | **Cheese Yellow** | `#E8B838` |
| Deep accent | Bak Kut Teh Brown | `#5A2E1A` |
| Hot accent | Chili Red | `#C7301B` |
| Highlight | Soft Mustard | `#D9A441` |

**Why these:**
- **Cheese yellow** — the literal hero of the dish, the color in every viral photo
- **Bak kut teh brown** — the herbal broth, deep traditional Chinese flavor
- **Chili red** — old-school Chinese signage, the color of cult-favorite
- **Bone white + cream** — old enamel plates, traditional Chinese kopitiam feel
- **Ink black** for text — confidence, no-nonsense

### Typography

- **Display / Headings:** `DM Serif Display` or `Bodoni Moda` — bold serif with character, evokes old-school newspaper food columns
- **Alternative for retro feel:** `Bebas Neue` for super-bold condensed accents
- **Body:** `Inter`
- **Numerals (prices):** Same body — affordable casual feel, no need for mono
- **Accent / handwritten:** `Caveat` for "viral since 2018" annotations and chalkboard-style notes
- **Optional Chinese display:** `Noto Serif TC` for occasional 字 character accents (very sparingly — once on the home page maybe)

### Mood

Cult-Favorite · Local · Confident-Quirky · Chinese-Malaysian Heritage · Affordable · Viral · Retro-Casual

Visual references: SETHLUI food articles, classic KL food-blogger photography, old Chinese kopitiam signage, viral food TikToks. NOT: aesthetic minimalism, premium cafe vibes, generic restaurant templates.

---

## 3. Tech Stack

Same reusable foundation.

| Layer | Tool |
|-------|------|
| Framework | Astro 5 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion (React islands) |
| Deployment | Vercel |
| Forms | Formspree |
| Analytics | Vercel Analytics |
| Icons | Lucide React |

---

## 4. Page Architecture

### Page 1 — Home (`/`)

The home page is built around **the dish, the press, the location quirk**. Lead with cheese bak kut teh — it's their entire marketing.

1. **Sticky navbar** — bone white with subtle backdrop blur, "B.A.J" wordmark in serif (large, confident), small subtitle "RESTAURANT · SETAPAK · SINCE 2018", links right (Home · Menu · Story · Visit), cheese-yellow WhatsApp button
2. **Hero — full-viewport, image-led**
   - Background: large photo of cheese bak kut teh claypot (or split layout with text left + dish right)
   - Eyebrow: "SETAPAK · CHINESE-MALAYSIAN · SINCE 2018"
   - Headline: **"The cheese bak kut teh place."**
   - Subhead: "We invented it in 2018. Drove SETHLUI, Bangsar Babe, and 1,200+ Google reviewers to climb the wet market stairs. Worth the trip — promise."
   - CTAs: "See the Menu" (cheese-yellow filled) + "How to Find Us" (outline)
   - Subtle Caveat handwritten "since 2018 · 1,200+ ⭐⭐⭐⭐⭐" annotation rotated -2°
3. **The Hero Dish section** (the cheese bak kut teh deep-dive)
   - Eyebrow: "WHAT WE'RE FAMOUS FOR"
   - Heading: "Cheese Bak Kut Teh."
   - 2-col layout: large photo + ingredient story
   - Body: "Pork chunks. Fresh okra. Herbal broth. Melted cheese on top. We started serving it in 2018 and the food bloggers haven't stopped talking. Try it once — you'll get it."
   - 3 small "as featured in" cards: SETHLUI · Bangsar Babe · FoodAdvisor
4. **More Than One Dish** (the rest of the menu)
   - Heading: "Stay for the BKT. Come back for everything else."
   - 4-card grid: Creamy Chicken Cutlet Spaghetti · Honey Milk Longan · Dry Bak Kut Teh · Western Mains
   - Each card: photo, name, 1-line description, price (showing the affordability is a feature)
5. **The Wet Market story** (full-bleed, retro-photo treatment)
   - Large photo of the wet market entrance / staircase
   - Centered serif quote: *"Above a wet market in Setapak. We know — that's the fun part."*
   - Body: "The market closes by evening. The restaurant goes till 10. Take the stairs up to the 1st floor, follow the smell of cheese bak kut teh."
6. **What people drove here for** (reviews block)
   - Heading: "4.5 / 5 from 1,200+ Google reviewers"
   - 3 review cards on cream bg
7. **The Press strip**
   - Logos / text for SETHLUI, Bangsar Babe, FoodAdvisor, Trip.com
   - Small quote excerpts under each
   - This is the brand's biggest legitimacy lever — feature it prominently
8. **Find Us teaser** — map preview, hours summary, "How to find the stairs" CTA (lean into the quirk)
9. **Footer** — wordmark, address, hours, socials, alacarte.my ordering link, "Above the wet market in Setapak. Since 2018."

### Page 2 — Menu (`/menu`)

- **Menu Hero** — "The Menu" + subhead "Cheese bak kut teh, plus 80 other reasons to stay."
- **Categories (sticky tabs, cheese-yellow underline on active):** Bak Kut Teh · Spaghetti & Western · Rice Sets · Snacks · Drinks · Set Meals
- **Filter chips:** Signature · Spicy 🌶️ · Vegetarian · Under RM10
- **Menu cards:**
  - Cream background, ink-black text
  - Photo (4:3 ratio), name in serif (English; if there's a common Chinese name, include it small in lighter color), 1-line description, price right-aligned
  - **Cheese Bak Kut Teh** gets the biggest cell, cheese-yellow signature badge, "Featured in SETHLUI" mini-tag
  - Hover: gentle lift + cheese-yellow shadow
- **Order CTA block** at bottom — "Hungry?" + WhatsApp + alacarte.my ordering link

### Page 3 — Story & Visit (`/story`)

- **Story Hero** — "How we ended up famous for cheese bak kut teh."
- **The Beginning** — 2-col text + photo
  - The 2018 opening, the experiment, the overheard college students raving about it
- **The Dish** — deep-dive section on cheese bak kut teh creation
  - Process: claypot → okra → pork → herbal broth → cheese on top
- **The Place** — 2-col on the wet-market quirk
  - Why above the market, the staircase, the daytime vs evening transformation
  - Photo gallery of the building, market closed at night, restaurant lit up upstairs
- **The Crowd** — TAR UMT students, food bloggers, late-night regulars
- **Visit Us** — embedded Google Maps + clear directions ("Stairs at the side of the wet market — 1st floor, follow the cheese smell")
  - Address: 1-18 Pasar Jalan Genting Kelang, Prima Setapak 2, 53000 KL
  - Hours, phone, parking note
- **Contact form** (Formspree) — Name, phone/email, message, optional reservation date
- **Social block** — Facebook (their main channel), Instagram if active

---

## 5. Animation Plan

This brand = **cheeky, confident, slightly retro** animations. Old-school food TV graphics meet modern blog aesthetics.

| Element | Animation | Detail |
|---------|-----------|--------|
| Hero text | Slide-up + slight rotation reset (-1° → 0°) | 600ms ease-out, hand-placed feel |
| Hero handwritten annotation | Fade-in + tiny rotation wiggle | feels like a stamp |
| The Hero Dish photo | Subtle zoom from 1.05 to 1.0 on scroll | cinematic |
| Press strip logos | Sequential fade-in stagger | 100ms between |
| Menu cards | Fade-up on scroll | 400ms |
| Card hover | Lift 4px + cheese-yellow tinted shadow | 250ms |
| Wet Market section | Parallax-like scroll offset between text and photo | desktop only |
| Reviews | Fade-in with star icons popping | playful |
| Section transitions | Astro view transitions | built-in |
| Navbar scroll | Backdrop blur + bottom border slides in | 250ms |
| WhatsApp float | Gentle bounce every 5s | playful, fits brand |

**Rules:**
- Animations have personality — slight rotations and bounces are fine here (unlike Didi's restraint)
- Respect `prefers-reduced-motion`
- No marquees needed (this isn't a late-night brand)
- Cap durations at 600ms

---

## 6. Copywriting

### Voice

- Confident, slightly cheeky, proud of the quirks
- Direct sentences. Embraces the cult-favorite identity.
- Doesn't apologize for being above a wet market — leans into it
- Doesn't try to sound premium — affordability is part of the brand
- Comfortable with food-blogger language ("worth the trip," "the BKT")

### Sample Copy

**Hero**
> SETAPAK · CHINESE-MALAYSIAN · SINCE 2018
> # The cheese bak kut teh place.
> We invented it in 2018. Drove SETHLUI, Bangsar Babe, and 1,200+ Google reviewers to climb the wet market stairs. Worth the trip — promise.
>
> [See the Menu] [How to Find Us]

**The Hero Dish section**
> # Cheese Bak Kut Teh.
> Pork chunks. Fresh okra. Herbal broth. Melted cheese on top.
> We started serving it in 2018 and the food bloggers haven't stopped talking. Try it once — you'll get it.

**More Than One Dish**
> Stay for the BKT. Come back for everything else.
> The cheese bak kut teh gets the headlines. The creamy chicken cutlet spaghetti and honey milk longan drink keep regulars coming twice a week.

**The Wet Market story**
> Above a wet market in Setapak. We know — that's the fun part.
> The market closes by evening. The restaurant goes till 10. Take the stairs up to the 1st floor, follow the smell of cheese bak kut teh.

**Reviews intro**
> 1,200+ Google reviewers can't all be wrong.
> Most of them came for the cheese bak kut teh. Most of them came back for something else.

**Story page hero**
> How we ended up famous for cheese bak kut teh.
> Started with an experiment in 2018. Ended up on SETHLUI. Long story — short version: melted cheese on bak kut teh works better than it should.

**Visit page closer**
> The stairs are at the side of the wet market. 1st floor. You can't miss us — we're the one with the cheese smell.

**Footer tagline**
> Above the wet market in Setapak. Since 2018.

**WhatsApp CTA**
> WhatsApp us — for pre-orders, large groups, or to ask if the BKT is on tonight.

### SEO Meta

- **Home title:** `B.A.J Restaurant Setapak | Home of Cheese Bak Kut Teh | Since 2018`
- **Home meta description:** `The original Cheese Bak Kut Teh — featured by SETHLUI, Bangsar Babe, FoodAdvisor. Chinese-Malaysian café above the wet market in Setapak. Affordable, viral, worth the trip.`
- **Schema:** Restaurant, servesCuisine: ["Chinese", "Malaysian", "Fusion"], priceRange: "$"
- **OG image:** Hero shot of cheese bak kut teh in claypot with golden cheese pull

### Content Notes

- **Don't claim halal status** anywhere on the site. Pork is on the menu — be transparent.
- **Lead with the press features** — SETHLUI, Bangsar Babe, FoodAdvisor are the brand's biggest credibility lever
- **The wet market location is a feature** — copy should celebrate it, not hide it

---

## 7. UI/UX Principles For This Brand

1. **The hero dish is the brand** — cheese bak kut teh photos must dominate. Don't bury it.
2. **Press features as social proof** — the SETHLUI / Bangsar Babe coverage is gold. Surface it on home + visit + about.
3. **Affordability is a strength** — show prices clearly. RM3.90-RM10 mains is a *selling point*, not something to hide.
4. **Wet market quirk is a feature** — design copy that celebrates the staircase journey, doesn't hide it
5. **Clear non-halal positioning** — Chinese-Malaysian audience targeting, no halal language anywhere
6. **Photos are food-blog style** — not styled-pretty, slightly raw, real claypot shots, real plate-on-table photos
7. **Mobile-first because TAR UMT students** — they're the core audience, mobile-only browsers
8. **WhatsApp + alacarte.my** as primary order paths — they already have alacarte.my, integrate it
9. **Don't overdesign** — the brand isn't aesthetic-minimalist or premium. Lean into casual confidence.
10. **Embrace 2018 history** — they've been doing this for 7 years. Own the "since 2018" badge of honor.

---

## 8. Content Needed From Owner

1. **Hero photo of cheese bak kut teh** — claypot shot with cheese pull, ideally action/steaming
2. **Photos of other signature dishes** — creamy chicken cutlet spaghetti, honey milk longan, dry BKT
3. **Photos of the wet market entrance + staircase** — embrace the location quirk
4. **Interior photos of the restaurant** — show the casual cosy environment
5. **Confirmed full menu with current prices** — old sources show RM3.90-RM5.90, may have inflated since 2018
6. **Confirmed hours** (Bangsar Babe 2017 article said split shift 8am-3pm + 5:30pm-10pm — verify if still split shift or changed)
7. **WhatsApp business number** (publicly listed: 018-988 8766)
8. **Logo files** if available
9. **Story / origin** — when did they invent cheese BKT, who's the chef, why this combination
10. **Permission to use SETHLUI / Bangsar Babe / FoodAdvisor / Trip.com features** as press credentials
11. **Confirmation:** Are they on Instagram? Most coverage shows Facebook, less Instagram presence — check.

---

## Phase-by-Phase Development Checklist

> Paste into Claude Code phase by phase. One at a time.

### Phase 0 — Project Setup

- [ ] Initialize Astro project with TypeScript strict mode
- [ ] Add Tailwind: `npx astro add tailwind`
- [ ] Add React: `npx astro add react`
- [ ] Install: `framer-motion`, `lucide-react`
- [ ] Install fonts via fontsource: `@fontsource/dm-serif-display`, `@fontsource/inter`, `@fontsource/caveat`
- [ ] Folder structure:
  ```
  src/
    components/
    sections/
    layouts/BaseLayout.astro
    pages/index.astro, menu.astro, story.astro
    styles/global.css
    assets/images/{dishes,interior,market,press,logo}
    data/menu.json, reviews.json, press.json, site.json
  public/
  ```
- [ ] Init Git, `.gitignore`, first commit
- [ ] Create `.env.example`: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_FORMSPREE_ID`, `PUBLIC_ALACARTE_URL`

### Phase 1 — Design System

- [ ] Extend Tailwind theme with palette (bone-white, cream, ink-black, soy-brown, cheese-yellow, bkt-brown, chili-red, soft-mustard)
- [ ] Configure font families: `font-display` (DM Serif Display), `font-body` (Inter), `font-accent` (Caveat)
- [ ] Custom Tailwind animations: `slide-up-rotate`, `fade-in`, `bounce-soft`, `stamp-in`
- [ ] Create `BaseLayout.astro` — light theme default, fonts loaded with `font-display: swap`
- [ ] Create reusable components:
  - [ ] `Button.astro` — variants: primary (cheese-yellow filled, ink-black text), outline (ink-black border), ghost
  - [ ] `Container.astro` — max-w-7xl, responsive padding
  - [ ] `SectionHeading.astro` — eyebrow (uppercase tracking-wide) + serif headline + optional subhead
  - [ ] `Eyebrow.astro` — small uppercase letter-spaced
  - [ ] `MenuCard.astro` — dish card with photo, name, description, price, optional signature badge
  - [ ] `PressBadge.astro` — small "as featured in" card with logo and quote excerpt
- [ ] Create `Navbar.astro` — bone-white bg with backdrop blur, "B.A.J" serif wordmark + "RESTAURANT · SETAPAK · SINCE 2018" small subtitle
- [ ] Create `Footer.astro` — bkt-brown bg, cream text, 3-col, tagline "Above the wet market in Setapak. Since 2018."
- [ ] Create `WhatsAppFloat.astro` — fixed bottom-right, cheese-yellow circle with gentle bounce
- [ ] Test responsiveness at 375px / 768px / 1440px

### Phase 2 — Data Files

- [ ] Create `src/data/site.json` — name "B.A.J Restaurant", tagline, address (1-18 Pasar Jalan Genting Kelang, Prima Setapak 2), phone (018-988 8766), WhatsApp, hours object (verify current schedule), social URLs (Facebook primary), alacarte.my URL, Google Maps embed URL
- [ ] Create `src/data/menu.json` with categories: `Bak Kut Teh`, `Spaghetti & Western`, `Rice Sets`, `Snacks`, `Drinks`, `Set Meals`. Each item: name, optional Chinese name, description, price, image, tags, optional `signature: true`, optional `featuredIn` (e.g., "SETHLUI")
- [ ] Mark "Cheese Bak Kut Teh" as `signature: true, featured: true` (gets biggest cell + press badge)
- [ ] Create `src/data/press.json` — entries for SETHLUI, Bangsar Babe, FoodAdvisor, Trip.com with quote excerpts and source URLs
- [ ] Create `src/data/reviews.json` — 3 selected Google reviews with quote, name, rating, date

### Phase 3 — Home Page (`/`)

- [ ] **Hero section** (`src/sections/Hero.astro`):
  - Split layout: text left (50%), photo right (50%) desktop; stacked mobile
  - Eyebrow: "SETAPAK · CHINESE-MALAYSIAN · SINCE 2018" — soy-brown, tracking-widest
  - Headline: "The cheese bak kut teh place." — DM Serif, 64px+ desktop / 40px mobile, ink-black
  - Subhead: 18-20px, max-w 540px, soy-brown
  - CTAs: "See the Menu" (cheese-yellow filled) + "How to Find Us" (outline)
  - Photo: large hero shot of cheese bak kut teh claypot
  - Decorative Caveat annotation: "since 2018 · 1,200+ ⭐⭐⭐⭐⭐" rotated -2°
  - Framer Motion: stagger entrance, slide-up + tiny rotation reset
- [ ] **The Hero Dish** (`src/sections/HeroDish.astro`):
  - Eyebrow: "WHAT WE'RE FAMOUS FOR"
  - Heading: "Cheese Bak Kut Teh."
  - 2-col layout: large photo + ingredient story
  - Below: 3 small press badge cards (SETHLUI, Bangsar Babe, FoodAdvisor) with quote excerpts
- [ ] **More Than One Dish** (`src/sections/MoreDishes.astro`):
  - Heading: "Stay for the BKT. Come back for everything else."
  - 4-card grid: Creamy Chicken Cutlet Spaghetti · Honey Milk Longan · Dry Bak Kut Teh · Western Mains
  - Hover: lift + cheese-yellow tinted shadow
- [ ] **The Wet Market story** (`src/sections/WetMarketStory.astro`):
  - Full-bleed bkt-brown background OR cream with large photo
  - Photo of wet market entrance / staircase
  - Centered serif quote: *"Above a wet market in Setapak. We know — that's the fun part."*
  - Body paragraph below
- [ ] **Reviews block** (`src/sections/Reviews.astro`):
  - Heading: "4.5 / 5 from 1,200+ Google reviewers"
  - 3 review cards on cream bg
- [ ] **Press strip** (`src/sections/PressStrip.astro`):
  - 4-col strip: SETHLUI · Bangsar Babe · FoodAdvisor · Trip.com
  - Each: small logo/text + 1-line quote excerpt
- [ ] **Find Us teaser** (`src/sections/FindUsTeaser.astro`):
  - Map preview + hours summary + "How to find the stairs" CTA (lean into quirk)
- [ ] Wire `pages/index.astro`, add SEO meta + OG tags

### Phase 4 — Menu Page (`/menu`)

- [ ] **Menu Hero** — soft hero, headline "The Menu", subhead "Cheese bak kut teh, plus 80 other reasons to stay."
- [ ] **Category Tabs** (`src/components/MenuTabs.tsx`) — React island, sticky, cheese-yellow underline animated with `layoutId`
- [ ] **Filter chips** — Signature, Spicy 🌶️, Vegetarian, Under RM10 (multi-select)
- [ ] **Menu grid** (`src/components/MenuGrid.tsx`):
  - 1 / 2 / 3 col responsive
  - Cream cards, ink-black text
  - Photo (4:3), name in serif, description, price right-aligned
  - **Cheese Bak Kut Teh card** gets a span-2 cell, cheese-yellow "🧀 Signature" badge, "Featured in SETHLUI" press tag
  - Hover: lift, cheese-yellow shadow, slight zoom
  - Fade-up stagger on scroll
- [ ] **Order CTA block** at bottom — "Hungry?" + WhatsApp + alacarte.my buttons
- [ ] SEO meta for menu page

### Phase 5 — Story Page (`/story`)

- [ ] **Story Hero** — "How we ended up famous for cheese bak kut teh."
- [ ] **The Beginning** — 2-col text + photo, the 2018 origin
- [ ] **The Dish** — deep-dive on cheese bak kut teh creation, claypot process
- [ ] **The Place** — 2-col on the wet-market quirk, photo gallery of building / market / restaurant transition
- [ ] **The Crowd** — TAR UMT students, food bloggers, late-night regulars
- [ ] **Visit Us** — embedded Google Maps + clear staircase directions, address, hours, phone, parking
- [ ] **Contact form** (`src/components/ContactForm.tsx`):
  - Fields: name, phone/email, message, optional reservation date
  - Formspree submit, validation, success/error
- [ ] **Social block** — Facebook (primary), Instagram if exists
- [ ] SEO meta for story page

### Phase 6 — Animations Polish

- [ ] All scroll reveals: `whileInView` + `viewport={{ once: true, margin: "-50px" }}`
- [ ] Hero stagger entrance with slight rotation
- [ ] Caveat handwritten annotation: stamp-in animation (scale 1.2 → 1.0 + rotation settle)
- [ ] Press strip sequential fade-in
- [ ] Menu card hover transitions
- [ ] Wet Market section parallax (desktop only)
- [ ] Navbar scroll backdrop blur + bottom border
- [ ] Menu tab `layoutId` for underline
- [ ] CTA hover transitions
- [ ] `useReducedMotion()` to disable variants
- [ ] Slow 3G test

### Phase 7 — Images & Assets

- [ ] Organize: `dishes/`, `interior/`, `market/`, `press/`, `logo/`
- [ ] Astro `<Image>` for all photos, WebP, lazy load (except hero)
- [ ] Hero `<Picture>` with art-directed crops
- [ ] Descriptive alt text everywhere
- [ ] OG image (1200x630): cheese bak kut teh claypot with cheese pull + wordmark overlay
- [ ] Favicon set
- [ ] **If photos blurry from internet sources:** run through Upscayl 2x first

### Phase 8 — SEO & Schema

- [ ] Per-page meta titles + descriptions (Section 6)
- [ ] OG tags
- [ ] Twitter card tags
- [ ] Canonical URLs
- [ ] JSON-LD `Restaurant` schema:
  - Name, address, phone
  - openingHoursSpecification (verify hours)
  - priceRange "$"
  - servesCuisine ["Chinese", "Malaysian", "Fusion"]
  - aggregateRating (4.5, 1200+)
  - **knownFor** custom property: "Cheese Bak Kut Teh"
- [ ] `robots.txt` allow all
- [ ] Sitemap via `@astrojs/sitemap`

### Phase 9 — Performance & Accessibility

- [ ] Lighthouse 95+ all categories
- [ ] All images lazy except hero
- [ ] Font-display: swap
- [ ] Color contrast WCAG AA — verify cheese-yellow on bone-white (may need ink-black text on yellow buttons)
- [ ] Keyboard nav works on all interactives
- [ ] Icon-only buttons get `aria-label`
- [ ] Visible focus states (use chili-red outline for distinctiveness)
- [ ] VoiceOver / NVDA test

### Phase 10 — Deployment

- [ ] Push to GitHub
- [ ] Connect Vercel, configure build
- [ ] Set env vars
- [ ] Test on real iPhone Safari + Android Chrome
- [ ] Custom domain wiring
- [ ] Vercel Analytics on
- [ ] UptimeRobot monitor

### Phase 11 — QA Before Handoff

- [ ] All browsers (iOS Safari, Android Chrome, desktop)
- [ ] WhatsApp opens with pre-filled message
- [ ] Contact form delivers
- [ ] Google Maps embed loads
- [ ] alacarte.my link works
- [ ] All external links: `target="_blank" rel="noopener"`
- [ ] All prices verified
- [ ] Press feature URLs all work
- [ ] Proofread — no typos, no placeholder
- [ ] 404 page exists
- [ ] 3G throttle test
- [ ] **Verify no halal language anywhere on site**

### Phase 12 — Handoff

- [ ] Client README — change requests, retainer scope, domain renewal
- [ ] Send: live URL, page summary, screenshots, invoice
- [ ] Tag v1.0.0 in Git
- [ ] Add to portfolio as case study

---

## Notes for Claude Code

- Read previous phase output before next phase
- Commit after each phase: `feat(phase-3): home page sections`
- Default mood: cult-favorite, confident-quirky, Chinese-Malaysian heritage, retro-casual
- This is NOT a premium cafe — avoid aesthetic minimalism, soft pastels, restraint
- Photography is food-blog style, not styled-pretty — embrace claypot shots, real plate textures
- 3 static pages, no CMS, no auth
- Placeholder images: real-deal Chinese-Malaysian food shots, kopitiam interiors from Unsplash
- **Language rule (strict):** All readable content in English. Chinese-Malaysian dish names (bak kut teh, char kuey teow, etc.) stay in original spelling — they're proper food terms. Brand name "B.A.J" stays.
- **NON-HALAL rule (strict):** B.A.J serves pork. NEVER add halal language, halal certification claims, or "Muslim-friendly" labels anywhere. The audience is Chinese-Malaysian / non-Muslim. Be transparent about pork on the menu.
- **Press features rule:** SETHLUI, Bangsar Babe, FoodAdvisor, Trip.com features are the brand's biggest credibility lever. Surface on home, menu (for cheese BKT), and story page.

---

## Pricing Suggestion

This brand has the most reviews (1,200+) and the strongest press of any in your portfolio — they can support a confident price.

| Item | Price (RM) |
|------|-----------|
| 3-page landing site (MVP) | 3,200 |
| Domain (.com, 1 year) | 60 |
| Hosting (Vercel free) | 0 |
| Google Workspace email (1 user, 1 year) | 120 |
| **One-time total** | **~3,400** |
| Monthly maintenance retainer | 180/month |

Portfolio discount: RM2,500.

**Strong upsell paths:**
- Replace alacarte.my with custom WhatsApp ordering flow: +RM1,500
- Photography session (cheese BKT hero shots, signature dishes): +RM400
- "Press kit" page with downloadable assets for journalists: +RM600
- Reservation system for large groups: +RM800
- Loyalty program for TAR UMT student crowd: +RM1,200
- Monthly content support (IG-ready food shots): +RM400/month

---

## Pitch Angle For B.A.J

The strongest angle is **legitimacy + ownership**:

> "B.A.J is already legendary — SETHLUI, Bangsar Babe, FoodAdvisor have all written about your cheese bak kut teh. You've got 1,200+ Google reviews, more than any cafe in Wangsa Maju or Setapak. But when someone reads about you on SETHLUI and Googles 'cheese bak kut teh Setapak,' they land on a third-party ordering page or Facebook. The dish that put you on the map deserves a website that takes itself as seriously as your customers do. I'd love to build it."

Works because:
- Honors the achievement they're already known for
- Specific (SETHLUI, the cheese BKT, 1,200+ reviews)
- Acknowledges the alacarte.my limitation without insulting them
- Frames the website as upgrading their press-worthy reputation

**Bonus angle:**
> "I noticed you're above the wet market — I think that's the best part of the brand. Most websites would hide it. I'd put it on the homepage."

This shows you understand what makes them special. Most marketers would try to "fix" the wet market location. You'd celebrate it.
