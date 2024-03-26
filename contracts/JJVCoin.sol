// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JJVCoin is ERC20 {
    constructor() ERC20("JJV Coin", "JJV") {
        // Set the total supply of JJV Coin and allocate them to the deployer of the contract
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}