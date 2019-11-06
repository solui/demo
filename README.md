This repository contains demo contracts and UI specifications for [solui](https://solui.dev).

## Usage

Install [Truffle](https://trufflesuite.com) and the solUI CLI:

```shell
npm install -g truffle @solui/cli
```

Get this demo and change to the unpacked folder:

```shell
truffle unbox solui/demo
cd demo
```

Start the devnet:

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
solui view --spec contracts/erc20/ui.json --artifacts build/contracts
```
