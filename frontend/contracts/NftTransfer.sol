// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract nftTransferContract {
    address public contractOwner;
    mapping(address => mapping(uint256 => bool)) private nftTransferred;

    constructor() {
        contractOwner = msg.sender;
    }

    function transferNFT(address _nftAddress, uint256 _nftId) external {
        IERC721 nftToken = IERC721(_nftAddress);
        address owner = nftToken.ownerOf(_nftId);
        require(owner == msg.sender, "Sender does not own the NFT");
        require(!nftTransferred[owner][_nftId], "NFT has already been transferred");

        nftToken.safeTransferFrom(owner, contractOwner, _nftId);
        nftTransferred[owner][_nftId] = true;
    }
}