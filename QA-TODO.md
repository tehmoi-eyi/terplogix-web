# TerpLogix Website QA Todo

Generated: June 18, 2026
Local preview: http://127.0.0.1:3000

## Current QA Status

- Local preview is running on http://127.0.0.1:3000.
- Production build passes after the latest polish pass.
- Desktop browser QA passed at 1440x950.
- Mobile browser QA passed at 390x844.
- No console errors were captured in the latest functional pass.
- No failed network requests were captured in the latest visual pass.
- No horizontal overflow was found on desktop or mobile.
- Desktop section anchors for Product, Modules, Workflow, Analytics, and Demo land clear of the sticky header.
- Mobile menu navigation now closes the menu first, then scrolls to the selected section so anchors land cleanly.
- All expected section anchors exist: Product, Modules, Workflow, Customization, Analytics, Integrations, and Demo.
- Mobile menu opens and navigates to the Modules section.
- Demo form submits and changes to the request-received state.
- Source scan found no generated inline SVG artwork in the page component.
- No specific client/sample names such as First Medical or Northern Lights were found in source or visible page copy.
- Generated visual assets are PNG files with real alpha transparency and transparent corners.
- Main hero is animated again and no longer uses a single static composite hero PNG.
- Hero now uses separate transparent PNG layers: hero-lens-core.png, hero-network-shell.png, and hero-signal-halo.png.
- Product proof cards now use v2 transparent PNG assets with animated aura, sheen, and signal dots.
- Modules command center now uses layered animated transparent PNG elements instead of the old static module orbit image.
- Workflow and analytics sections now use transparent PNG proof surfaces with animated scan, aura, and signal dots.
- Mobile hero has been tightened so the primary CTA appears in the first viewport.
- Workflow and showcase card pacing has been tightened on mobile without reducing the desktop premium scale.
- Local-only Next development indicator is disabled so localhost screenshots look presentation-ready.
- Operator ROI band has been added near the top of the page.
- Stronger product proof now appears before the modules section.
- Mobile module suite cards now show a compact editorial summary instead of every nested module row at once.
- Demo request confirmation now uses a premium success state with clear walkthrough expectations.
- Mobile hero now includes an above-the-fold animated system cue using transparent TLX layers.
- Showcase proof-card interiors have been upgraded with richer screen chrome, status chips, match scores, retail-read panels, queue stages, and QR/export details.
- Module hub image layers are eager-loaded and verified in the final browser pass.

## QA Artifacts

- Latest final report: output/playwright/qa-premium-final-report.json
- Latest current QA report: output/playwright/qa-current-pass-report.json
- Latest current transparency report: output/playwright/qa-current-alpha-report.json
- Latest todo completion QA report: output/playwright/qa-todo-pass-report.json
- Latest todo transparency report: output/playwright/qa-todo-alpha-report.json
- Latest final polish QA report: output/playwright/qa-final-polish-report.json
- Latest final polish transparency report: output/playwright/qa-final-polish-alpha-report.json
- Latest animated hero report: output/playwright/qa-animated-hero-report.json
- Latest rich visual pass: output/playwright/qa-rich-pass-report.json
- Latest late-section rich pass: output/playwright/qa-late-rich-final-report.json
- Full visual report: output/playwright/qa-premium-pass-report.json
- Latest transparency report: output/playwright/qa-premium-pass-alpha-report.json
- Animated hero transparency report: output/playwright/qa-animated-hero-alpha-report.json
- Proof v2 transparency report: output/playwright/qa-proof-v2-alpha-report.json
- Late proof transparency report: output/playwright/qa-late-proof-alpha-report.json
- Latest functional report: output/playwright/qa-premium-pass-functional-report.json
- Animated hero screenshots: output/playwright/qa-animated-hero-desktop-frame1.png, output/playwright/qa-animated-hero-desktop-frame2.png, output/playwright/qa-animated-hero-mobile-frame1.png, and output/playwright/qa-animated-hero-mobile-frame2.png
- Rich pass screenshots: output/playwright/qa-rich-pass-desktop-*.png and output/playwright/qa-rich-pass-mobile-*.png
- Late-section screenshots: output/playwright/qa-late-rich-final-desktop-*.png and output/playwright/qa-late-rich-final-mobile-*.png
- Current pass screenshots: output/playwright/qa-current-desktop-*.png, output/playwright/qa-current-mobile-*.png, and output/playwright/qa-current-mobile-menu-workflow.png
- Todo pass screenshots: output/playwright/qa-todo-pass-desktop-*.png and output/playwright/qa-todo-pass-mobile-*.png
- Final polish screenshots: output/playwright/qa-final-polish-desktop-*.png and output/playwright/qa-final-polish-mobile-*.png
- Desktop screenshots: output/playwright/qa-premium-pass-desktop-*.png
- Mobile screenshots: output/playwright/qa-premium-pass-mobile-*.png
- Updated mobile hero screenshot: output/playwright/qa-premium-pass-mobile-hero-tightened.png

## Priority 1 - Premium Visual Quality

1. Upgrade remaining mockups to feel more photographic and dimensional.
   - Current status: complete for this launch pass. Proof-card, workflow, showcase lead, analytics, top proof, and early product proof use transparent PNG assets with animated scene layers; code-native showcase interiors now include richer chrome, status chips, match scores, retail-read panels, queue stages, and QR/export details.
   - Evidence: output/playwright/qa-final-polish-desktop-showcase.png and output/playwright/qa-final-polish-mobile-showcase.png.
   - Goal: every visual should feel suitable for a premium SaaS/product deck.

2. Keep refining the animated hero focal weight.
   - Current status: complete for this launch pass. Animated lens, halo, shell, beams, dots, and live panels are restored on desktop, and mobile now has an above-the-fold animated system cue without hiding the CTA.
   - Evidence: output/playwright/qa-final-polish-desktop-hero.png and output/playwright/qa-final-polish-mobile-hero.png.
   - Goal: preserve motion while making the hero feel even more premium and intentional.

3. Polish the module orbit artwork.
   - Current status: complete for this launch pass. The module command center uses animated halo, network shell, lens, and floating module labels; module hub image layers are eager-loaded; desktop/mobile module screenshots are verified.
   - Evidence: output/playwright/qa-final-polish-desktop-modules.png and output/playwright/qa-final-polish-mobile-modules.png.
   - Goal: make the system architecture feel powerful at a glance.

4. Improve section-start screenshots with the sticky header.
   - Current status: complete. Desktop Product, Modules, Workflow, Showcase, and Demo anchors clear the sticky header; mobile menu Modules lands cleanly after closing the menu.
   - Evidence: output/playwright/qa-final-polish-report.json.
   - Goal: navigation should land cleanly every time.

## Priority 2 - Mobile Pacing

5. Continue compressing the mobile modules section.
   - Current status: complete for this launch pass. Mobile module suite cards show one primary module row, a compact count for connected modules, and only the first two outcomes.
   - Evidence: output/playwright/qa-final-polish-mobile-modules.png.
   - Goal: make modules feel robust without turning mobile into a long tower.

6. Compress mobile workflow and showcase pacing.
   - Current status: complete for this launch pass. Workflow hero mockup, step cards, proof card type, proof visuals, analytics visual heights, and showcase card interiors are tightened on phone.
   - Evidence: output/playwright/qa-current-mobile-menu-workflow.png and output/playwright/qa-final-polish-mobile-showcase.png.
   - Goal: keep the premium rhythm moving.

7. Re-check mobile hero scale after stakeholder review.
   - Current status: complete for this launch pass. CTA appears in the first viewport and the mobile hero now shows an animated system cue above the fold.
   - Evidence: output/playwright/qa-final-polish-mobile-hero.png.
   - Goal: balance impact with speed.

## Priority 3 - Content And Conversion

8. Add a concise operator ROI band.
   - Current status: complete. Added a four-part ROI band covering COA-to-context, fewer staff cold starts, synced retail surfaces, and pre-sale intent.
   - Goal: make the business value obvious to dispensary owners and operators.

9. Pull more product proof earlier.
   - Current status: complete. Added an early product proof band before Modules, using the premium workflow visual and a four-step operating loop.
   - Goal: show the power of TLX sooner.

10. Strengthen the final CTA.
   - Current status: complete. Demo form now switches into a polished confirmation state with clear walkthrough focus areas and an edit option.
   - Goal: make the request moment feel high-confidence.

## Priority 4 - Technical Polish

11. Keep generated PNG transparency checks in every design pass.
    - Current status: complete. Passed in latest final polish pass. All 13 referenced PNG assets have alpha and transparent corners.
    - Evidence: output/playwright/qa-final-polish-alpha-report.json.
    - Required: verify alpha, transparent corners, no black/solid image backgrounds, and no broken assets.

12. Re-check lazy image loading after major layout changes.
    - Current status: complete. Generated proof visuals, hero layers, module hub layers, operating panorama, and footer wordmark are eager-loaded where needed; final timed decode QA found no images with zero natural size or decode errors.
    - Evidence: output/playwright/qa-final-polish-report.json.

13. Keep the QA gate after every major design pass.
    - Current status: complete. Production build, desktop/mobile screenshots, transparency validation, no client-name scan, no horizontal overflow, no console errors, no failed requests, mobile menu landing, and demo form success state are verified.
    - Evidence: output/playwright/qa-final-polish-report.json and output/playwright/qa-final-polish-alpha-report.json.
    - Required checks: production build, desktop screenshots, mobile screenshots, transparency validation, no client-name scan, no horizontal overflow, mobile menu, and demo form.
