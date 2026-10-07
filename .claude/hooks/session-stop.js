import {readFileSync} from 'node:fs'

const input = JSON.parse(readFileSync(0,'utf8'));

if (input.stop_hook_active) process.exit(0);

console.log(JSON.stringify({
	decision:"block",
	reason: "Revise o que foi feito e confirme se esta tudo certo antes de finalizar"
}));

process.exit(0);