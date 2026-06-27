# Playwright with JavaScript

A comprehensive automation testing project using **Playwright** with JavaScript for end-to-end (E2E) testing across multiple browsers.

## 📋 Overview

This project demonstrates automated testing with Playwright, covering various testing techniques including:
- Element locators (getByRole, getByText, getByLabel, CSS, XPath)
- Cross-browser testing (Chromium, Firefox, WebKit)
- Test assertions and validations
- HTML report generation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd Playwright_with_Javascript
```

2. Install dependencies:
```bash
npm install
```

This will install:
- `@playwright/test` - Playwright testing framework
- `playwright` - Playwright browser automation
- `@types/node` - TypeScript types for Node.js

## 📁 Project Structure

```
├── e2e/                          # End-to-end test files
│   ├── example.spec.js           # Basic Playwright examples
│   ├── homepage.spec.js          # Homepage automation tests
│   ├── locator.spec.js           # Locator strategy examples
│   ├── locator_getbyrole.spec.js # GetByRole locator tests
│   ├── getby_text.spec.js        # GetByText locator tests
│   ├── getbylable_css.spec.js    # GetByLabel & CSS selector tests
│   ├── xpath.spec.js             # XPath selector tests
│   ├── xpath_advanced.spec.js    # Advanced XPath tests
│   ├── orangehrm.spec.js         # OrangeHRM application tests
│   ├── recordedtest.spec.js      # Recorded test examples
│   ├── test-1.spec.ts            # TypeScript test 1
│   ├── test-2.spec.ts            # TypeScript test 2
│   ├── test-3.spec.ts            # TypeScript test 3
│   └── test-4.spec.ts            # TypeScript test 4
│
├── tests/                        # Additional test files
│   ├── example.spec.js
│   ├── practice_playwright.js
│   ├── pw_practice_tests.spec.js
│   └── one.js
│
├── playwright-report/            # HTML test reports
├── test-results/                 # Test result artifacts
├── playwright.config.js          # Playwright configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

## ⚙️ Configuration

The `playwright.config.js` file contains the main test configuration:

- **testDir**: Tests are located in the `./e2e` folder
- **fullyParallel**: Tests run in parallel for faster execution
- **Reporter**: HTML reports are generated automatically
- **Browsers**: Configured to run on Chromium, Firefox, and WebKit
- **Trace**: Traces are collected on first retry for debugging

### Key Configuration Settings:
```javascript
- retries: 0 (or 2 on CI)
- workers: Parallel execution (1 on CI)
- trace: 'on-first-retry'
- reporter: 'html'
```

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific folder
```bash
npx playwright test e2e/
```

### Run a specific test file
```bash
npx playwright test e2e/example.spec.js
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests headed (show browser window)
```bash
npx playwright test --headed
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 📊 Test Reports

After running tests, an HTML report is automatically generated:

```bash
npx playwright show-report
```

This opens an interactive report showing:
- Test results and status
- Execution time
- Screenshots and traces
- Error details

## 🎯 Test Locator Strategies

This project demonstrates various locator strategies:

### 1. **getByRole** - Accessible locators
```javascript
page.getByRole('link', { name: 'Get started' })
page.getByRole('button', { name: 'Submit' })
```

### 2. **getByText** - Text-based locators
```javascript
page.getByText('Login')
page.getByText(/Welcome|Hello/)
```

### 3. **getByLabel** - Form label locators
```javascript
page.getByLabel('Username')
```

### 4. **CSS Selectors**
```javascript
page.locator('button.submit-btn')
page.locator('input[type="email"]')
```

### 5. **XPath**
```javascript
page.locator('//button[contains(text(), "Login")]')
page.locator('//div[@class="container"]')
```

## 📦 Dependencies

- **@playwright/test** (^1.61.0) - Testing framework
- **playwright** (^1.61.0) - Browser automation
- **@types/node** (^25.9.3) - TypeScript node types

## 💡 Best Practices

1. **Use accessible locators** - Prefer `getByRole`, `getByLabel`, and `getByText` over CSS selectors
2. **Parallel execution** - Tests run in parallel by default for faster feedback
3. **Cross-browser testing** - Tests run on Chromium, Firefox, and WebKit
4. **Tracing** - Traces are automatically collected on first test retry
5. **HTML reports** - View detailed reports with screenshots and traces

## 🐛 Troubleshooting

### Tests timing out
- Increase timeout in `playwright.config.js`
- Check if the target website is accessible
- Try running with `--headed` flag to see what's happening

### Locators not found
- Use `page.pause()` to debug interactively
- Use `--debug` flag to step through tests
- Check element selectors in browser dev tools

### Browser issues
- Run `npx playwright install` to ensure all browsers are installed
- Try running on a specific browser to isolate issues

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-page)
- [Test Configuration](https://playwright.dev/docs/test-configuration)
- [Advanced Testing Scenarios](https://playwright.dev/docs/testing)

## 📝 License

ISC

---

**Happy Testing! 🎭**
