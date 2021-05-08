# STILTON
Based of the concept of Ren'py, STILTON (Simple Text and Image Language for Typing Online Novels) is an ultra-simplified way of creating a text-based "game", lightweight and natively deployable in browsers. STILTON, as a language, should be stupidly easy to read and write- easy enough to learn and deploy in minutes. STILTON does not have an in-house renderer for its assets; instead, it relies on manipulating entities in a browser application through the DOM (STILTON is designed to be rendered in a user-defined div, in which all DOM interactions occur).

STILTON itself is a simple sequencing language, which is written by a user in a .txt file, then interpreted line-by-line by STILTON's core. The user can make use of simple "say" blocks to make characters say things in the dialogue box. The user can also use commands, prefixed with a $, to manipulate and define images, sounds, text, etc., among many other functionalities.

STILTON's core, originally called BraDK (pronounced Brady-K), is written primarily in JavaScript, and involves some CSS to position and style core elements.
