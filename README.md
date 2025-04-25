# React + TypeScript + Laravel Starter Kit

A modern full-stack starter kit using Laravel 12, React 19, Vite, Tailwind CSS, and Inertia.js.

---

## 🚀 Features

- ⚡️ Laravel 12 backend (PHP 8.2+)
- ⚛️ React 19 with TypeScript
- 🎨 Tailwind CSS 4.0
- 🎯 ESLint + Prettier + Type Checking
- 🔁 Inertia.js for full-stack SPA
- 🧪 Pest for testing (with 100% type coverage)
- 🧱 Based on Shipfast Labs starter kit

---

## 2. Install Dependencies

```bash
composer install
npm install

3. Environment Setup
bash
Copy
Edit
cp .env.example .env
php artisan key:generate
php artisan migrate
SQLite is preconfigured by default. You can switch to MySQL/PostgreSQL in .env.

4. Run the App
bash
Copy
Edit
composer run dev
🧰 Useful Commands
Composer Scripts

Command	Description
composer run dev	Start Laravel server, queue, and Vite
composer run dev:ssr	Same as above with SSR & live logs
composer lint	Run PHP code quality tools
NPM Scripts

Command	Description
npm run dev	Start Vite frontend dev server
npm run build	Build frontend for production
npm run build:ssr	Build frontend + SSR bundle
npm run lint	Lint React/TSX code
npm run format	Auto-format frontend code with Prettier
npm run types	Check TypeScript types
🧪 Testing
Run backend tests using Pest:

bash
Copy
Edit
./vendor/bin/pest
With 100% type coverage:

bash
Copy
Edit
./vendor/bin/pest --type-coverage --min=100
📁 Project Structure
txt
Copy
Edit
.
├── app/                   # Laravel backend
├── database/              # Migrations, seeders, factories
├── resources/
│   ├── js/                # React frontend
│   └── css/               # Tailwind entrypoint
├── routes/                # Laravel + Inertia routes
├── public/                # Public assets
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
├── package.json           # Frontend dependencies
├── composer.json          # Backend dependencies
└── ...
🧱 Based On
