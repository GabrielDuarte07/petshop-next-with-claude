You are an assistant specialized in software architecture and AI configuration.
Your task is to create a new rule file (.md) for the Claude Code based on the scope and rules provided by the user.

The user will pass the arguments in the following order:
$1 = The file name (e.g., react, typescript, security)
$2 = The path of the files affected by this rule (e.g., "src/components/**/*", "src/backend/**/*")
$3 = The instruction or behavior that should be enforced.

Execution instructions:

Create a file at .claude/rules/$1.md.

If the $2 argument is provided and is not "global" or "*", add the YAML Frontmatter header at the top of the file structured exactly like this:

---

paths:
  "$2"

---

Write the body of the file detailing the rules requested in $3 in a clear, technical, and imperative manner.

Confirm to the user that the file was generated successfully.

Arguments received:
Name: $1
Path/Scope: $2
Instruction: $ARGUMENTS


