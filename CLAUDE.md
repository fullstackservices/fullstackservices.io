# RULE #1: +server.ts files must be under 30 lines

Every +server.ts endpoint must:

1. Parse the request
2. Call a service function from $lib/server/services/ (or a specific directory name for the feature)
3. Return the response

NO business logic. NO db calls. NO validation beyond basic parsing.
If a +server.ts file exceeds 30 lines, you are doing it wrong. Refactor.

## +server.ts Pattern (CRITICAL)

WRONG - business logic in server file:

```ts
export async function POST({ request }) {
	const { email, password } = await request.json();
	if (!email || !password) throw error(400, 'Missing fields');
	const existingUser = await db.select().from(users).where(eq(users.email, email));
	if (existingUser.length) throw error(409, 'User exists');
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = await db.insert(users).values({ email, password: hashedPassword });
	// ... 40 more lines
}
```

RIGHT - delegate to service:

```ts
import { registerUser } from '$lib/server/services/auth';

export async function POST({ request }) {
	const body = await request.json();
	const result = await registerUser(body);
	return json(result, { status: 201 });
}
```

+server.ts files should be MAX 20-30 lines. They only: parse input, call a service, return a response.

## File Organization

src/lib/server/
services/ ← Business logic lives HERE
db/actions.ts ← ALL database queries
routes/
api/\*\*/+server.ts ← THIN handlers only (parse → delegate → respond)

## IMPORTANT THINGS:

- use `bun` for everything instead of npm, (i.e. `bun install`, `bun run`, etc..).
- Keep the code AS CLEAN AS READABLE AND UNDERSTANDABLE as possible. Make it so any developer approaching the code for the first time will be able to understand exactly what the code does.
- NEVER export things from an `index.ts` file.
- AVOID leaving comments whenever possible. Each line of code should be as readable and as self-explanatory as possible.
- Make the code as modular and lean as possible, avoiding large files. Keep a very clean seperation of concerns, promoting reusability as much as possible. Please keep controller and API files VERY simple, delegating all logic to external modules / service files.
- Add all db calls to `src/lib/server/db/actions.ts`
- Use Iconfiy mingcute icons whenever possible.
- AVOID using the $effect() rune possible, unless it's absolutely necessary!!! Use `onMount` for onMount logic. $effect is an anti-pattern, that easily introduces side effects

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.
