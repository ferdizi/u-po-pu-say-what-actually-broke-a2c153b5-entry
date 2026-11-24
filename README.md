# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/ferdizi/u-po-pu-say-what-actually-broke-a2c153b5-entry/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/ferdizi/u-po-pu-say-what-actually-broke-a2c153b5-entry/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty on make.fun: one single line of software error copy, at most 200 characters, that tells the user the brutal truth about what actually broke — and makes them laugh on the way.

## The line

> The app ran out of memory because it tried to remember every tab you swore you'd read later. Close a few, restart, and it will forgive you.

139 characters. It names the real failure (out of memory), says why in plain words, and tells the user exactly what to do next — close a few tabs and restart.

## How it works

`main.ts` reads `entry.txt`, validates it against the kit's gate (UTF-8 text, 1–200 characters, not only whitespace, a single line), and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the output back and verifies it is byte-identical before exiting.
