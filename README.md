This repository contains demo contracts and UI specifications for [solui](https://solui.dev).

## Usage

Requirements:

  * Node.js 12+
  * Yarn

Get this demo and change to the unpacked folder:

```shell
npx truffle unbox solui/demo
cd demo
```

Start the devnet:

```shell
yarn ganache-cli
```

Compile and migrate the contracts:

```shell
yarn truffle compile
yarn truffle migrate
```

Run the demo:

```shell
npx solui view --spec contracts/erc20/ui.json --artifacts build/contracts
```
