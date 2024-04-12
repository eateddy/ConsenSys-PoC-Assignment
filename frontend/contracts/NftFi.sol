// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract NFTExchangeContract is ERC721Holder {
    address payable public contractOwner;
    IERC721 public nftToken;
    uint256 public nftTokenId;
    uint256 public ethAmount;
    bool public nftReceived;

    constructor(address _nftToken, uint256 _nftTokenId) {
        contractOwner = payable(msg.sender);
        nftToken = IERC721(_nftToken);
        nftTokenId = _nftTokenId;
        nftReceived = false;
    }

    function receiveNFT() external payable {
        require(!nftReceived, "NFT has already been received");
        require(msg.value > 0, "ETH amount must be greater than 0");
        require(nftToken.ownerOf(nftTokenId) == msg.sender, "Only NFT owner can send the NFT");

        ethAmount = msg.value;
        nftToken.safeTransferFrom(msg.sender, address(this), nftTokenId);
        nftReceived = true;
    }

    function reclaimNFT() external payable {
        require(nftReceived, "NFT has not been received");
        require(msg.value == ethAmount, "ETH amount must match the initial value");
        require(address(this).balance >= ethAmount, "Insufficient balance");

        nftToken.safeTransferFrom(address(this), msg.sender, nftTokenId);
        ethAmount = 0;
        nftReceived = false;
    }

    function withdrawETH() external {
        require(msg.sender == contractOwner, "Only contract owner can withdraw ETH");
        require(address(this).balance >= ethAmount, "Insufficient balance");

        contractOwner.transfer(ethAmount);
        ethAmount = 0;
    }
}