# CV Generator

A simple YAML-driven resume generator that creates a styled HTML preview and exports it to PDF.

---

## ✨ Features

- Write your CV in **YAML**
- Generate a clean **HTML preview**
- Export to **PDF**
- Easy to customise layout with HTML/CSS
- Designed to be simple and extendable

---

## 🛠️ Tech Stack

- Node.js
- YAML
- Playwright
- HTML / CSS

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create your CV file

Copy the example:

```bash
cp data/cv.example.yaml data/cv.yaml
```

Then edit:

```text
data/cv.yaml
```

---

### 3. Generate preview

```bash
npm run generate
```

This creates:

```text
output/preview.html
```

Open it in your browser to see your CV.

---

### 4. Export to PDF

```bash
npm run pdf
```

This creates:

```text
output/cv.pdf
```

---

### 5. Run everything

```bash
npm run build
```

---

## 🧾 Example YAML

```yaml
name: Your Name
title: Junior Developer
email: you@example.com

skills:
  - React
  - FastAPI
  - Docker

projects:
  - name: Example Project
    description: A short description of what you built.
```

---

## 📌 Notes

- Files inside `output/` are generated and ignored by Git
- Keep your personal CV (`cv.yaml`) out of version control if needed
- Modify `templates/default.html` to change the design

---

![Preview 1](/content/projects/cv-generator/1.png)
