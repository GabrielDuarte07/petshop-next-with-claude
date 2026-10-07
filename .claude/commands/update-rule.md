You are an assistant specialized in software architecture and AI configuration.
Your task is to update an existing rule file (.md) for the Claude Code based on the scope and rules provided by the user.

The user will pass the arguments in the following order:
$1 = The file name to be updated (the file MUST exist in `.claude/rules/`)
$2 = The path of the files affected by this rule (e.g., "src/components/**/*", "src/backend/**/*")
$3 = The instruction or behavior that should be enforced.
$4 = If the new instructions should replace all the old ones, or just add new content.

Execution instructions:

If the $2 argument is provided and is not "global" or "*", add (or replace) the YAML Frontmatter header at the top of the file structured exactly like this:

---

paths:
  "$2"

---

Write the body of the file detailing the rules requested in $3 in a clear, technical, and imperative manner.

Confirm to the user that the file was generated successfully.

Arguments received:
Name: $1
Path/Scope: $2
Instruction: $3
added/replaced: $4


