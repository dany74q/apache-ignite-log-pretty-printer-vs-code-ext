import * as vscode from 'vscode';

const LINE_SEPERATOR = /\n|\r\n/;

const CHAR_TO_SHOULD_APPEND_WHITESPACE = new Map<string, boolean>([['[', true], ['{', true], [',', true]]);
const CHAR_TO_SHOULD_PREPEND_WHITESPACE = new Map<string, boolean>([[']', true], ['}', true]]);
const CHAR_TO_ADDED_WHITESPACE_AMOUNT = new Map<string, number>([['[', 4], ['{', 4], [']', -4], ['}', -4]]);

export function activate(context: vscode.ExtensionContext) {
	console.log('Ignite Pretty Printer is activated');

	let disposable = vscode.commands.registerCommand('extension.ignitePrettyPrint', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			console.log('Could not find an active text editor - skipping pretty printing');
		  	return;
		}

		const raw = editor.document.getText().replace(/, /g, ",");
		const prettified = getPrettifiedLog(raw);

		applyToEditor(editor, raw, prettified);
	});

	context.subscriptions.push(disposable);
}

function getPrettifiedLog(raw: string): string {
	let pretty = "";
	let whitespaces = 0;

	for (let char of raw) {
		const shouldAppendWhitespace = CHAR_TO_SHOULD_APPEND_WHITESPACE.get(char) || false;
		const shouldPrependWhitespace = CHAR_TO_SHOULD_PREPEND_WHITESPACE.get(char) || false;
		whitespaces += CHAR_TO_ADDED_WHITESPACE_AMOUNT.get(char) || 0;

		if (shouldPrependWhitespace) {
			pretty = appendWhitespace(pretty, whitespaces);
		}

		pretty += char;

		if (shouldAppendWhitespace) {
			pretty = appendWhitespace(pretty, whitespaces);
		}
	}

	return pretty;
}

function appendWhitespace(buffer: string, amount: number): string {
	buffer += "\n";
	return buffer += " ".repeat(amount);
}

function applyToEditor(editor: vscode.TextEditor, raw: string, prettified: string) {
	editor.edit(builder => {
		const start = new vscode.Position(0, 0);
		const lines = raw.split(LINE_SEPERATOR);
		const end = new vscode.Position(lines.length, lines[lines.length - 1].length);
		const fullRange = new vscode.Range(start, end);

		builder.replace(fullRange, prettified);
	});
}

export function deactivate() {
	console.log('ignite-vscode-extension is now deactivated');
}