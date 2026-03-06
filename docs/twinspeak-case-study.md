# TwinSpeak — AI Voice Cloning Platform

## Project Overview

TwinSpeak is a production-grade AI voice cloning SaaS platform that lets users generate realistic speech from any voice sample in seconds. Users upload or record a short audio clip, provide a text script, and receive a high-fidelity AI-generated voice clone — all from the browser, with no downloads or technical setup required.

The platform was designed and built end-to-end as a fully monetized product: authentication, tiered subscriptions, payment processing, social sharing, and scalable cloud infrastructure — shipped and deployed to production on Cloudflare's edge network.

---

## The Problem

Content creators, marketers, educators, and developers increasingly need realistic voice generation — for videos, prototypes, accessibility tools, and personalized content. Existing solutions are either locked behind enterprise pricing, require heavy technical integration, or deliver inconsistent quality.

There was a gap in the market for a lightweight, consumer-friendly voice cloning tool that delivers professional-grade output with zero friction.

---

## The Solution

TwinSpeak was built to be the fastest path from "I have a voice" to "I have AI-generated speech." The entire experience is designed around three steps:

1. **Upload or record** a voice sample (a few seconds is all it takes)
2. **Paste any script** — the text you want spoken in that voice
3. **Generate** — receive high-quality AI-synthesized audio in ~30 seconds

No accounts required to try it. No downloads. No complex configuration.

---

## Key Features Delivered

### Instant Voice Cloning
AI-powered speech synthesis using the F5-TTS model, capable of producing natural, high-fidelity voice clones from minimal reference audio. Users hear results in under 30 seconds.

### Frictionless Onboarding
Anonymous users can generate their first voice clone without creating an account. The product sells itself before asking for anything in return. Session-based clones seamlessly migrate to a user's account upon signup.

### Tiered SaaS Monetization
A three-tier pricing model designed for conversion:

| Plan | Price | Generations/mo | Target Audience |
|------|-------|----------------|-----------------|
| Free | $0 | 10 (signed in) | Trial users |
| Pro | $9/mo | 150 | Regular creators |
| Unlimited | $29/mo | ~1,000 | Power users & teams |

Integrated payment processing via Polar with subscription lifecycle management, customer portal access, and automated plan upgrades/downgrades via webhooks.

### Social Sharing & Virality
Every generated voice clone gets a shareable short link. One-tap sharing to WhatsApp, Telegram, X (Twitter), and LinkedIn with pre-formatted messaging. Share events are tracked to measure organic reach and viral coefficient.

### Voice Clone Library
Authenticated users maintain a full history of their voice clones, with status tracking (processing, completed, failed), naming, and quick access to regenerate or share.

### Full Authentication System
Email/password and Google OAuth sign-in, email verification, session management, and secure account deletion — all built on Better Auth with a custom Drizzle adapter.

---

## Technical Architecture

### Stack

| Layer | Technology |
|-------|-----------|
| Frontend | SvelteKit 5, Svelte 5, TypeScript |
| Styling | Tailwind CSS 4, DaisyUI 5 |
| Database | PostgreSQL (Neon serverless) |
| ORM | Drizzle ORM |
| Auth | Better Auth |
| AI Model | F5-TTS via FAL AI |
| Storage | Cloudflare R2 |
| Payments | Polar |
| Email | Resend |
| Monitoring | Discord webhooks, Cloudflare Observability (Axiom) |
| Deployment | Cloudflare Workers (edge) |
| Secrets | Doppler |

### Architecture Principles

The codebase follows a strict separation of concerns optimized for maintainability and rapid iteration:

**Thin API Controllers** — Every API route is under 30 lines. Routes parse the request, call a service function, and return the response. Zero business logic in route handlers.

**Service Layer** — All business logic lives in dedicated service modules (clone, generation, pricing, share, user). Each service encapsulates a single domain and is independently testable.

**Database Action Layer** — All database queries are centralized in typed action modules, providing a single source of truth for data access patterns across the application.

**Modular Infrastructure** — Third-party integrations (FAL AI, R2, Polar, Discord, Resend) are each isolated in their own modules with clear interfaces, making it trivial to swap providers.

### Data Model

The database is built around three core entities:

**Users** hold authentication state, subscription plan (free/pro/unlimited), and admin flags. **Voice Clones** represent an uploaded voice sample tied to a user (or anonymous session), with auto-incrementing clone numbers and R2-stored source audio. **Generations** track each text-to-speech job — the input script, processing status, FAL request ID, and the final audio output URL.

Relations cascade cleanly: deleting a user removes all their clones and generations.

### Infrastructure Highlights

**Edge Deployment** — The entire application runs on Cloudflare Workers, meaning every request is served from the nearest edge location globally. No cold starts. Sub-100ms TTFB.

**Serverless Database** — Neon's serverless PostgreSQL driver enables connection pooling optimized for edge/serverless environments, eliminating traditional connection management overhead.

**Presigned Uploads** — Audio files upload directly from the client to Cloudflare R2 via presigned URLs, keeping the server out of the upload path entirely. This reduces latency and server load.

**Async AI Processing** — Voice generation jobs are submitted to FAL AI's queue and polled for completion, keeping the UX responsive while heavy inference runs asynchronously.

---

## Business Intelligence & Event Tracking

Rather than implementing heavyweight analytics, TwinSpeak uses a Discord-based real-time event system that pipes actionable business events directly to categorized channels:

- **New signups** — User details, signup method, and location
- **Voice clones created** — Script preview, user context, and geographic data
- **Share events** — Which platform, which clone, conversion context
- **Subscription changes** — Upgrades, cancellations, and plan transitions
- **Pricing interest** — CTA clicks on the pricing page, segmented by plan

This approach delivers instant visibility into user behavior and revenue events with zero additional infrastructure cost.

---

## SEO & Growth

The platform implements structured data (Schema.org) for both Organization and WebApplication types, providing rich search results with pricing information. Dynamic meta tags and Open Graph data are generated per-page.

The viral sharing system — short URLs, pre-formatted social posts, and multi-platform share buttons — is designed to drive organic acquisition from every generated voice clone.

---

## User Journey

```
Landing Page → Record/Upload Voice → Enter Script → Generate
    ↓                                                    ↓
  (Anonymous: 1 free generation)              Clone Page (with audio player)
    ↓                                                    ↓
  Sign Up Prompt ← ← ← ← ← ← ← ← ← ← ←  Share (social + link)
    ↓
  Account Created (session clones migrate)
    ↓
  History → Pricing → Subscribe → Full Access
```

---

## Outcomes & Impact

### Product
- **Full SaaS product** shipped to production with authentication, payments, and subscription management
- **Three-tier monetization** model generating recurring revenue
- **Sub-30-second** voice generation from upload to playback
- **Zero-friction trial** — anonymous users experience the product before any commitment

### Technical
- **Edge-first architecture** delivering global low-latency performance
- **Clean, maintainable codebase** following strict architectural patterns (thin controllers, service layer, centralized data access)
- **Modular infrastructure** — every third-party integration is independently swappable
- **Production-grade reliability** with structured logging, error alerting, and webhook-driven monitoring

### Business
- **Viral sharing mechanics** built into the core product loop
- **Real-time business intelligence** via Discord event channels
- **Automated subscription lifecycle** — zero manual intervention for upgrades, cancellations, or plan changes
- **Scalable pricing architecture** designed for growth from free users to power users

---

## Technologies Used

SvelteKit, Svelte 5, TypeScript, Tailwind CSS, DaisyUI, PostgreSQL, Neon, Drizzle ORM, Better Auth, FAL AI (F5-TTS), Cloudflare Workers, Cloudflare R2, Polar, Resend, Discord Webhooks, Doppler, Vite

---

*Built and delivered as a complete product — from concept to production deployment.*