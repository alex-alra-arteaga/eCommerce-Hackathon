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
        const shopverseSkins = await ShopverseSkins.deploy("ipfs://QmWFeCXNLbAjywdauRw9dAg4rNysdKEANbXK2g5j8jh34i/", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [11029952448649444000000000000000000, 6131245439886204000000000000000000, 4904996351908963000000000000000000, 5518154729058603000000000000000000, 9810052851659739000000000000000000, 12262566064574674000000000000000000, 9196022413771962000000000000000000, 3678408965508785000000000000000000, 34331817011415326000000000000000000, 61306816091813085000000000000000000, 2145528106418194000000000000000000, 9195120456077975000000000000000000]);
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