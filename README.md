# Conserve Heating and Cooling — Website

Static marketing website for Conserve Heating and Cooling, an HVAC contractor.

## Structure

| File | Page |
|------|------|
| `index.html` | Home |
| `service-heating.html` | Heating |
| `service-air-conditioning.html` | Air Conditioning |
| `service-heat-pumps.html` | Heat Pumps |
| `service-ductless-mini-splits.html` | Ductless Mini-Splits |
| `service-installation.html` | Installation |
| `service-commercial-hvac.html` | Commercial HVAC |
| `assets/img/` | Optimized site photography |
| `assets/logo.png` | Company logo |

## Deployment

The site is plain static HTML and deploys to [Vercel](https://vercel.com) with no build step.
`vercel.json` enables clean URLs (`/service-heating` instead of `/service-heating.html`).

## Local preview

Serve the folder with any static server, e.g.:

```bash
npx serve .
```

Then open the printed `localhost` URL.
