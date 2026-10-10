# Taskora – Project Management SaaS

Taskora is a project management application designed to help organizations manage teams, projects, sprints, and tasks in one place. It provides a role-based workspace where organization members can collaborate and manage their work more efficiently.

## Live Demo

- **Frontend:** [Taskora Live](https://taskora-frontend-green.vercel.app/)
- **Backend:** [Taskora Live](https://taskora-frontend-green.vercel.app/)
- **Backend Repo:** [Taskora Backend](https://github.com/nipaayasha05/Taskora-backend)

## Features

### Authentication & User Management
- Email and password authentication
- Google OAuth authentication
- Protected routes for authenticated users
- Role-based access control
- User profile management

### Organization Management
- Create and manage organizations
- Organization approval workflow
- View organization members
- Invite users to join an organization
- Manage member roles
- Handle organization invitations

### Team Management
- Create teams within an organization
- View team members
- Add members to teams
- Manage team collaboration

### Project Management
- Create projects within an organization
- Assign clients to projects
- View project information
- Add team members to projects
- Organize project work in a structured workspace

### Sprint & Task Management
- Organize project work into sprints
- Manage tasks and subtasks
- Track task statuses and priorities
- Support sprint-based project workflows

### Role-Based Dashboard
Taskora provides role-specific dashboards and navigation based on the user's permissions.

- **Admin:** Manage platform-level operations.
- **Organization Owner:** Manage the organization and its members.
- **Manager:** Manage teams, projects, and assigned responsibilities.
- **Team Member:** Access the workspace and work according to assigned permissions.

The available actions depend on the user's role and the permissions enforced by the backend.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React | User interface development |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive layouts |
| shadcn/ui | Reusable UI components |
| TanStack Query | Server-state management and API data fetching |
| TanStack Form | Form management |
| Zod | Form validation and schema definition |
| ofetch | HTTP requests to the backend API |
| Next Themes | Theme management |
| Sonner | Toast notifications |
| Lucide React | Icons |
| Google OAuth | Social authentication |

## Application Workflow

1. **Authentication:** Users sign in using email and password or Google OAuth.
2. **Dashboard:** After authentication, users access the dashboard according to their permissions.
3. **Organization:** Users create an organization or access an organization they belong to.
4. **Membership:** Organization owners and managers handle member invitations and role management according to their permissions.
5. **Team Management:** Teams are created and members are assigned to the appropriate teams.
6. **Project Management:** Projects are created within an organization and associated with clients and teams.
7. **Sprint & Task Management:** Project work is organized into sprints, tasks, and subtasks to support progress tracking.

## Project Structure

The application follows a feature-oriented Next.js App Router structure.

```text
taskora-frontend/
├── public/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (dashboard)/
│   │   ├── admin/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── providers/
│   └── types/
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

*Note: Adjust the directory names above to match the actual folders in your repository.*

## Getting Started

Follow these steps to run Taskora locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone <your-frontend-repository-url>
cd taskora-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

For production, configure the environment variable with your deployed backend API URL:

```env
NEXT_PUBLIC_API_URL=https://taskora-backend-azure.vercel.app/api/v1
```

Make sure the environment variable name matches the one used in your frontend configuration.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## API Integration

Taskora communicates with its backend through REST API endpoints.

- API requests are handled using `ofetch`.
- TanStack Query manages server data, loading states, caching, and refetching.
- Authentication requests integrate with the backend authentication system.
- Query invalidation is used where necessary to refresh data after mutations.
- Backend validation and role-based authorization help protect application resources.

**Backend API:** `https://taskora-backend-azure.vercel.app/api/v1`

## Authentication & Security

- Protected pages restrict access based on authentication status.
- Role-based guards control access to authorized dashboards.
- Google OAuth supports social sign-in.
- Backend authorization is responsible for enforcing permissions on protected resources.
- Environment variables are used to configure API endpoints.

Frontend route guards improve the user experience, but they do not replace backend authorization.

## Deployment

The frontend is deployed on Vercel.

For deployment:

1. Import the frontend repository into Vercel.
2. Configure the required environment variables.
3. Set `NEXT_PUBLIC_API_URL` to the production backend API URL.
4. Deploy the application.
5. Configure the frontend origin in the backend CORS settings.
6. Configure the authorized JavaScript origin and redirect URI in Google Cloud Console if Google OAuth is enabled.

Ensure that the backend CORS configuration allows the deployed frontend domain.

## Future Improvements

- Enhanced sprint progress tracking
- Improved project activity history
- More detailed reporting and analytics
- Additional collaboration features
- Improved project and task filtering


Built with Next.js, TypeScript, and Tailwind CSS.
