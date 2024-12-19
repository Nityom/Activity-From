# Project Name

## Tech Stack Requirements

Your submission must use the following technologies:

- **Programming Language**: TypeScript
- **Framework**: Next.js

You are free to utilize any libraries of your choice for:

- Form handling
- Styling
- Additional functionalities

## Feature Requirements

### 1. Multi-Page Form with Tabs

- **Tabs:**
    - Activity Details
    - Location Details
- **Navigation:**
    - Users must complete and validate each step before proceeding to the next.
    - Errors in any field should prevent navigation to the next step.

### 2. Retain Form Data

- Previously entered data must persist when navigating back to a previous step.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
        ```bash
        git clone <repository-url>
        ```
2. Navigate to the project directory:
        ```bash
        cd project-name
        ```
3. Install the dependencies:
        ```bash
        npm install
        ```
4. Run the development server:
        ```bash
        npm run dev
        ```

## Folder Structure

```
project-name/
├── components/
│   ├── ActivityDetails.tsx
│   ├── LocationDetails.tsx
│   └── ...
├── pages/
│   ├── index.tsx
│   ├── activity.tsx
│   ├── location.tsx
│   └── ...
├── styles/
│   ├── globals.css
│   └── ...
├── utils/
│   ├── formValidation.ts
│   └── ...
├── package.json
└── ...
```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
        ```bash
        git checkout -b feature-branch
        ```
3. Make your changes and commit them:
        ```bash
        git commit -m "Description of changes"
        ```
4. Push to the branch:
        ```bash
        git push origin feature-branch
        ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.