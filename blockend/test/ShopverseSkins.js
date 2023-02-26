const { assert, expect } = require("chai");
const hardhatConfig = require("../hardhat.config");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const truffleAssert = require('truffle-assertions');
const { ethers } = require("hardhat");
const axios = require("axios");
const BigNumber = require("bignumber.js");


describe ("ShopverseSkins unit testing", function() {
    async function deployShopverseFixture() {
        const ShopverseSkins = await ethers.getContractFactory("ShopverseSkins");
        const shopverseSkins = await ShopverseSkins.deploy("ipfs://QmWFeCXNLbAjywdauRw9dAg4rNysdKEANbXK2g5j8jh34i/", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        await shopverseSkins.deployed();
        return { shopverseSkins };
    }
    it("Should return the correct name", async function() {
        const { shopverseSkins } = await loadFixture(deployShopverseFixture);
        expect(await shopverseSkins.name()).to.equal("Shopverse Skins");
    });

    it("Should return the correct symbol", async function() {
        const { shopverseSkins } = await loadFixture(deployShopverseFixture);
        expect(await shopverseSkins.symbol()).to.equal("SVS");
    });

    it ("Should return the correct base URI", async function() {
        const { shopverseSkins } = await loadFixture(deployShopverseFixture);
        expect(await shopverseSkins.baseURI()).to.equal("ipfs://QmWFeCXNLbAjywdauRw9dAg4rNysdKEANbXK2g5j8jh34i/");
    });

    it ("Should batch mint skins", async function() {
        const { shopverseSkins } = await loadFixture(deployShopverseFixture);
        const [owner] = await ethers.getSigners();
        expect(await shopverseSkins.balanceOf(owner.address)).to.equal(12);
    });
});