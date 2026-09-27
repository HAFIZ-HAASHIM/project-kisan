# Contributing to Project-Kisan

Thank you for contributing to **Project-Kisan**!

---

## 🛠️ Development Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/HAFIZ-HAASHIM/project-kisan.git
   cd project-kisan
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp env.example .env.local
   ```

4. **Run Local Dev Server:**
   ```bash
   npm run dev
   ```

---

## 🌿 Contribution Guidelines

- **Branch Naming:**
  - `feature/your-feature-name`
  - `fix/your-bug-fix`
  - `docs/your-doc-improvement`
- **Commit Messages:** Follow [Conventional Commits](https://www.conventionalcommits.org/) format (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `ci:`).
- **Validation:** Run `npx tsc --noEmit` before submitting a pull request.
