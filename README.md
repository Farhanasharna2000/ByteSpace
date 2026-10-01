# ByteSpace

ByteSpace is a responsive course-discovery website where visitors can browse courses, search by topic or instructor, explore course details, and view a creator profile.

This repository is a **frontend demo using local sample data**. Sign-in and registration screens are included, but real authentication, payments, and course publishing are not connected to a backend.

## Quick start

You need Node.js **20.9 or newer** and **pnpm 10.20.0** (the package manager specified in this project).

From the project folder, run:

```bash
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000). Changes to components and pages appear automatically while the development server is running. Press `Ctrl+C` in the terminal to stop it.

No database, API keys, or environment variables are required for the current demo. Installing dependencies requires internet access; the Google font setup may also need network access during development or builds.

## How to use the website

1. Open the home page and choose a course category. On mobile and tablet, use **+ More** to expand the category list and **− Less** to collapse it.
2. Use the search box to find courses by title or instructor.
3. On the course listing page, filter by category or level, sort the results, and move between pages.
4. Select a course to view its details, lessons, and reviews.
5. Open the creator profile to explore its courses.
6. Visit **Sign In** or **Join** to preview the account forms. Submitting them displays an availability message; it does not create an account or sign you in.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Home page, categories, learning paths, and creator information |
| `/courses` | Course catalog with search, filters, sorting, and pagination |
| `/search?q=figma` | Search results for a query |
| `/courses/learn-figma-from-basic` | Example course details page |
| `/creators/purepearl-studio` | Sample creator profile |
| `/signin` | Sign-in demo |
| `/join` | Registration demo |

Course detail URLs use the course's `id` from the sample data. Unknown course IDs show the not-found page.

## Technology

- **Next.js 16.3.6** with the App Router for pages and routing.
- **React 19.2.8** for components and interactions.
- **TypeScript** for type checking.
- **Tailwind CSS 4** for styling, with CSS Modules for floating animations.
- **Next.js Image** and WebP artwork for image delivery.

## Project structure

```text
app/                   Pages, root layout, and global styles
  (auth)/              Sign-in and registration routes
  courses/             Catalog and individual course routes
  search/              Search route
  creators/            Creator profile route
components/
  home/                Home sections and category selection
    hero/              Hero artwork and animation
    growth/            Growth artwork and animation
    cta/               Creator call-to-action and animation
  auth/                Account forms and animated artwork
  courses/             Search, details, lessons, and reviews
  creators/            Creator profile interface
  shared/              Navigation, footer, layout, and course cards
constants/             Sample content and course data
services/              Helpers for reading course data
types/                 Shared TypeScript types
public/                Images and other publicly served files
```

The `(auth)` folder groups routes; its name is not part of the browser URL.

## Common changes

| What you want to change | Where to edit |
| --- | --- |
| Course titles, prices, images, and instructors | `constants/courses.json` |
| Category names and order | `constants/course-categories.ts` |
| Number of initially visible categories | `components/home/CourseCategories.tsx` |
| Course data retrieval | `services/courses.ts` |
| Course fields and types | `types/course.ts` |
| Course detail and review sample content | `constants/course-details.ts`, `constants/course-reviews.ts` |
| Home page sections | `app/page.tsx`, `components/home/` |
| Sign-in and registration behavior | `components/auth/AuthForm.tsx` |
| Navigation and footer | `components/shared/Navbar.tsx`, `components/shared/Footer.tsx` |
| Site title, description, and font | `app/layout.tsx` |
| Global styling | `app/globals.css` |
| Image quality settings | `next.config.ts` |

### Add a course

1. Place its image in `public/`, for example `public/home/skills/my-course.webp`.
2. Add a course object to the relevant category array in `constants/courses.json`. Copy an existing entry and update every field to match your course.
3. Give a new course a unique, URL-friendly `id`, such as `intro-to-design`.
4. Use `/home/skills/my-course.webp` as the image path, without the `public` prefix.
5. Open `/courses/intro-to-design` to check the result.

The same course can appear in multiple categories. Keep its ID and details consistent across those entries; `getAllCourses()` removes duplicates by ID. Detail-page lesson and review content also uses separate sample constants, so adding a catalog entry does not generate a real curriculum.

### Add a category

Add the name to `categoryRows` or `additionalCategories` in `constants/course-categories.ts`, then add an array with the **exact same name** in `constants/courses.json`. A category without matching data displays no courses.

### Change floating animations

Edit the corresponding `*.module.css` beside the component. Animation duration and delay may also be set on each layer in the component's `.tsx` file.

The animations respect the visitor's reduced-motion setting. Keep transparent padding around floating artwork so moving elements do not reveal cropped edges. Preserve source images when replacing optimized assets, and balance resolution with file size.

## Commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build; run `pnpm build` first |


There is currently no automated test script in `package.json`.

To preview production behavior locally:

```bash
pnpm build
pnpm start
```

## Troubleshooting

- **Port 3000 is busy:** run `pnpm dev --port 3001` and open `http://localhost:3001`.
- **An image is missing:** check that its file exists under `public/` and its URL matches the filename, including capitalization.
- **Images load slowly in development:** initial compilation and image optimization can add delay. Compare with a production build before measuring performance, and check the source image size.
- **Configuration changes are not visible:** restart the development server after editing `next.config.ts`.
- **Sign-in does not work:** authentication is a demo. Implement a backend or authentication provider in the account flow before using real accounts.


