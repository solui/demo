This repository contains demo contracts and UI specifications for [solui](https://solui.dev).

## Usage

Requirements:

  * Node.js 12+

Clone this repository and change to the unpacked folder:

```shell
cd demo
```

In a separate terminal start the devnet:

```shell
npm run devnet
```

Compile and migrate the contracts:

```shell
npm run compile
npm run migrate
```

Run the demo:

```shell
npx solui view --spec contracts/erc20/ui.json --artifacts build/contracts
```
