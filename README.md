# Softenq Vacation Calendar

A one-page calendar that shows a team's vacations as colored date ranges.

## What it does

- Shows four months side by side, with weeks starting on Monday, using
  `react-date-range`'s `DateRange` component.
- Shows 17 vacation ranges for six people, from May 2021 to February 2022.
  Each range has its own color.
- The calendar is read-only: clicking does not change the ranges. They are
  hard-coded in `src/calendar.js`, so edit them there.

## Stack

React 17, Create React App 4, `react-date-range` and `date-fns`.

## Getting started

```bash
npm install
npm start       # dev server on http://localhost:3000
npm run build   # production build in build/
```

`react-scripts` 4 runs on webpack 4, which fails on Node 17+ with
`ERR_OSSL_EVP_UNSUPPORTED`. Use Node 16, or set
`NODE_OPTIONS=--openssl-legacy-provider`.

## Context

Small one-off project, August 2021.
