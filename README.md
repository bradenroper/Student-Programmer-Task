# Student Programmer Task

This project is an incomplete quiz application designed as a Student Programmer performance task.
This is a template repository, so instead of forking or cloning it directly, use the
"Use this template" button and select "Create a new repository". Your new repository can be
private, but make sure you invite me ([@bradenroper](https://github.com/bradenroper)) as a
collaborator when you start working.

## The Task

The provided application has two tabs: Quiz and Configuration. The Quiz tab will show all of the questions
from a local sqlite database while the configuration tab will allow you to edit and add new questions.
Currently questions are simply text, but you will need to add multiple choice capabilities, with specific
task items outlined further below. Design and structural decisions for these modifications are left up to you.

The use of AI tools is allowed, but should be disclosed via email when you are finished working (refer to your original task email for details). In the case of using AI, note that you should still be the one to make design decisions that you can explain and provide rationale for.

## Stack

This project uses the following development stack, find their documentation below.

- [AdonisJS 7](https://docs.adonisjs.com/introduction) (backend)
- [Inertia](https://inertiajs.com/docs/v3) + [React](https://react.dev/learn) (frontend)
- [SQLite](https://www.sqlite.org/) via [Lucid ORM](https://lucid.adonisjs.com/docs/introduction) (database)
- [Tailwind CSS](https://tailwindcss.com/docs) (styling)

## Setup

1. First, install [Node.js](https://nodejs.org/en/download) (24 or newer, includes npm) and [Git](https://git-scm.com/downloads)

2. Create your own repository from this template (see above), then clone your new repository and install dependencies. Note that you should not clone this repository directly to keep your work private from other candidates.

   ```sh
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   npm install
   ```

3. Create your `.env` file based on the `.env.example` and generate an app key:

   ```sh
   cp .env.example .env
   node ace generate:key
   ```

   On Windows, you may need `copy .env.example .env` instead of `cp`, or just copy and rename the file.

4. Run the database migrations. This will create database tables in a contained sqlite file. 

   ```sh
   node ace migration:run
   ```

5. Start the dev server:

   ```sh
   npm run dev
   ```

   Then open http://localhost:3333.

### Useful Commands

| Command                    | Description                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `npm run dev`              | Starts the dev server. May need to rerun in development if it crashes during edits |
| `node ace migration:run`   | Run pending migrations                                                             |
| `node ace migration:fresh` | Drop all tables and rerun migrations, helpful after updating db tables             |
| `node ace list`            | List all available ace commands                                                    |
| `npm run typecheck`        | Check for TypeScript errors                                                        |
| `npm run lint`             | Lint the project                                                                   |

## Task List

The goal is to add multiple choice functionality to the quiz. Questions currently only contain text, but will need to be
modified to include multiple choice options.

- Update the database schema to support multiple choice
  - `database/migrations/`
  - [Migrations](https://lucid.adonisjs.com/docs/migrations), [Table builder](https://lucid.adonisjs.com/docs/table-builder), [Relationships](https://lucid.adonisjs.com/docs/relationships)
- Update the question model, validator, and transformer
  - `app/models/question.ts`, `app/validators/question.ts`, `app/transformers/question_transformer.ts`
  - [Models](https://lucid.adonisjs.com/docs/models), [Validation](https://docs.adonisjs.com/guides/basics/validation), [Transformers](https://docs.adonisjs.com/guides/frontend/transformers)
- Update the questions controller and routes
  - `app/controllers/questions_controller.ts`, `start/routes.ts`
  - [Controllers](https://docs.adonisjs.com/guides/basics/controllers), [Routing](https://docs.adonisjs.com/guides/basics/routing), [CRUD operations](https://lucid.adonisjs.com/docs/crud-operations)
- Update the question form
  - `inertia/components/question_form.tsx`
  - [Inertia forms](https://inertiajs.com/docs/v3/the-basics/forms), [AdonisJS + Inertia](https://docs.adonisjs.com/guides/frontend/inertia)
- Update the configuration question component
  - `inertia/components/question_config.tsx`
  - [React](https://react.dev/learn), [Tailwind CSS](https://tailwindcss.com/docs)
- Update the quiz question component
  - `inertia/components/question_view.tsx`
  - [React state](https://react.dev/learn/state-a-components-memory), [Tailwind CSS](https://tailwindcss.com/docs)

## Scoring

You will be scored based on teh following critiera:

- Quality of code
- Quality of commits/source control management
- Functionality and organization of the system
- Design and style of the system