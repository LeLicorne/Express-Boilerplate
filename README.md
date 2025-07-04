# 🚀 Express TypeScript Boilerplate

A production-ready Express.js API boilerplate built with TypeScript, featuring modern development tools and best practices for building scalable web applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://typescript.org)
[![Express](https://img.shields.io/badge/Express-5.1.0-green.svg)](https://expressjs.com)
[![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen.svg)](https://nodejs.org)

## ✨ Features

- 🔷 **TypeScript** - Type-safe development with strict mode enabled
- ⚡ **Express.js 5** - Fast, unopinionated web framework
- 🛡️ **Security** - Helmet for security headers, CORS enabled
- 🔧 **Development Tools** - Hot reload with Nodemon, path aliases
- 📏 **Code Quality** - ESLint, Prettier, Husky pre-commit hooks
- 🧪 **Testing Ready** - Jest setup for unit and integration tests
- 📦 **Production Ready** - Build process and deployment scripts
- 🏗️ **Clean Architecture** - Organized folder structure following best practices

## 🛠️ Tech Stack

| Technology     | Purpose               | Version |
| -------------- | --------------------- | ------- |
| **TypeScript** | Type-safe JavaScript  | 5.3.3   |
| **Express.js** | Web framework         | 5.1.0   |
| **Node.js**    | Runtime environment   | 18+     |
| **ESLint**     | Code linting          | 8.57.0  |
| **Prettier**   | Code formatting       | 3.6.2   |
| **Jest**       | Testing framework     | 30.0.4  |
| **Husky**      | Git hooks             | 8.0.0   |
| **Helmet**     | Security headers      | 8.1.0   |
| **CORS**       | Cross-origin requests | 2.8.5   |

## 📁 Project Structure

```
express-boilerplate/
├── 📂 src/
│   ├── 📂 config/          # Configuration files
│   ├── 📂 controllers/     # Route handlers and business logic
│   ├── 📂 middleware/      # Custom Express middlewares
│   ├── 📂 models/          # Data models and interfaces
│   ├── 📂 repositories/    # Data access layer
│   ├── 📂 routes/          # API route definitions
│   ├── 📂 services/        # Business logic services
│   ├── 📂 types/           # TypeScript type definitions
│   ├── 📂 utils/           # Utility functions and helpers
│   └── 📄 app.ts           # Application entry point
├── 📂 tests/
│   ├── 📂 unit/            # Unit tests
│   ├── 📂 integration/     # Integration tests
│   └── 📄 tsconfig.json    # Test TypeScript config
├── 📂 docs/                # API documentation
├── 📂 dist/                # Compiled JavaScript (production)
└── 📄 package.json         # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/express-boilerplate.git
   cd express-boilerplate
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Git hooks**

   ```bash
   npm run prepare
   ```

4. **Create environment file**

   ```bash
   # Create your .env file
   touch .env

   # Add your environment variables
   echo "NODE_ENV=development" >> .env
   echo "PORT=3000" >> .env
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

Your API will be available at `http://localhost:3000` 🎉

## 📜 Available Scripts

| Script                | Description                              |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start development server with hot reload |
| `npm run start`       | Start production server                  |
| `npm run start:dev`   | Start development server with ts-node    |
| `npm run build`       | Compile TypeScript to JavaScript         |
| `npm run build:watch` | Watch mode for TypeScript compilation    |
| `npm test`            | Run all tests (coming soon)              |
| `npm run lint`        | Run ESLint                               |
| `npm run lint:fix`    | Fix ESLint issues automatically          |
| `npm run format`      | Check code formatting                    |
| `npm run format:fix`  | Fix formatting issues                    |

## ⚙️ Configuration

### TypeScript Configuration

The project uses strict TypeScript configuration with:

- **Strict mode** enabled for type safety
- **Path aliases** for cleaner imports
- **Source maps** for debugging
- **ES2020** target for modern JavaScript features

### Path Aliases

Use these convenient aliases in your imports:

```typescript
import { SomeController } from '@controllers/SomeController';
import { SomeService } from '@services/SomeService';
import { SomeModel } from '@models/SomeModel';
import { SomeUtil } from '@utils/SomeUtil';
```

### ESLint Rules

- TypeScript-aware linting
- Import sorting with `simple-import-sort`
- Prettier integration
- Custom rules for different environments

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3000
# Add your environment variables here
```

## 🏗️ Development

### Creating New Features

1. **Controllers** - Handle HTTP requests and responses

   ```typescript
   // src/controllers/UserController.ts
   import { Request, Response } from 'express';

   export class UserController {
     static getUsers = async (req: Request, res: Response) => {
       // Implementation
     };
   }
   ```

2. **Services** - Business logic

   ```typescript
   // src/services/UserService.ts
   export class UserService {
     static async getUsers() {
       // Business logic
     }
   }
   ```

3. **Routes** - API endpoints

   ```typescript
   // src/routes/userRoutes.ts
   import { Router } from 'express';
   import { UserController } from '@controllers/UserController';

   const router = Router();
   router.get('/users', UserController.getUsers);

   export default router;
   ```

### Code Quality

The project enforces code quality through:

- **Pre-commit hooks** with Husky and lint-staged
- **Automatic formatting** with Prettier
- **Linting** with ESLint
- **Type checking** with TypeScript

## 🧪 Testing

### Test Structure

```
tests/
├── unit/           # Unit tests for individual components
├── integration/    # API endpoint tests
└── tsconfig.json   # Test-specific TypeScript config
```

### Running Tests

```bash
# Run all tests (coming soon)
npm test

# Run unit tests only
npm run test:unit

# Run integration tests only
npm run test:integration

# Run tests in watch mode
npm run test:watch
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
NODE_ENV=production npm start
```

### Environment Setup

Ensure these environment variables are set in production:

```env
NODE_ENV=production
PORT=3000
# Add your production environment variables
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Commit Convention

Use conventional commits for better change tracking:

```
feat(scope): add new feature
fix(scope): fix bug
docs(scope): update documentation
style(scope): format code
refactor(scope): refactor code
test(scope): add tests
chore(scope): update dependencies
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- TypeScript team for type safety
- All contributors who help improve this boilerplate

---

**Made with ❤️ by [Baptiste LO RE](mailto:lo.re.baptiste.59@gmail.com)**

_If you find this boilerplate helpful, please consider giving it a ⭐ on GitHub!_
