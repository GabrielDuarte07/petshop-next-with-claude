const dia = new Date().toLocaleString('pt-br');

const context = `Session inicialized at ${dia}. Welcome to the project!`;

console.log(JSON.stringify({
    hookSpecificOutput:{
        hookEventName: "SessionStart",
        additionalContext: context
    }
}));