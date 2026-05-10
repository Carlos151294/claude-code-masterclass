---
description: Create a commit message by analyzing git diffs
allowed-tools: Bash(git status *), Bash(git diff --staged), Bash(git commit *)
---

## Your task:

Analyze above staged git changes and create a commit message. Use present tense and explain "why" something has changes, not just "what" has changed.

## Run these commands:

```bash
git status
git diff --staged
```

## Commit types
Only use the following commit types:

- `feat:` - New feature
- `fix:` - Bug fix
- `Refactor:` - Refactoring code
- `Docs:` - Documentation
- `Style:` - Styling/Formatting
- `Test:` - Tests
- `Perf:` - Performance

## Format
Use the following format for making the commit message:

```
<type>: <concise_description>
<optional_body_explaining_why>
```

## Output:

1. Show summary of the changes currently staged.
2.Propose commit message with appropriate type.
3. Ask for confirmation before committing.

DO NOT auto-commit - wait for user approval, and only commit if the user says so.
