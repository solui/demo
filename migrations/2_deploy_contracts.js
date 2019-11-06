const ERC20 = artifacts.require('./erc20/ERC20.sol')

module.exports = async deployer => {
  await deployer.deploy(ERC20, 'Test', 'Test', 1)
}
