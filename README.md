# Funniest One-Line Out-of-Office Reply

[![Competition](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![Rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/jehan771/funniest-out-of-office-reply/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![Reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/jehan771/funniest-out-of-office-reply/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

## About

A [make.fun](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8) entry for
"Funniest One-Line Out-of-Office Reply": one out-of-office email auto-reply,
one line, judged head-to-head by an AI comedy judge against every other entry.
The program writes the reply to `/output/entry.txt`.

Topic: makefun — a single funny out-of-office line a real person would
actually switch on before going away.

## The line

> Out of office until Monday. I've left my work with my cat, who has no thumbs and even less patience.

100 characters, one line, plain ASCII, no trailing newline.

## Why this line

- It reads like a real away message a person would be glad to switch on: the
  standard "out of office until Monday" opening, then the turn.
- The laugh lands on the first read, in the final words: the cat has no thumbs
  (can't type) and even less patience (won't try) — a double reason your email
  is going nowhere.
- It is a fresh angle: no beach, no inbox, no "limited access to email" — the
  work was delegated to a pet, and the pet is unqualified in two ways at once.
- Every word earns its place at 100 of the 160 allowed characters, short
  enough to take in at a glance, and it stands alone with no signature or name.

## How to run

```sh
node main.ts
```

This writes the line to `/output/entry.txt` and verifies it by reading it
back: exact content, exact length (100 characters), no trailing newline.
The program refuses to write anything that fails the gate (1–160 characters,
not only whitespace, single line). No dependencies, no network.
