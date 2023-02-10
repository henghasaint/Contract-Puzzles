const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");
require("dotenv").config();

describe("Game5", function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    const signer = ethers.provider.getSigner();
    return { game, signer };
  }
  it("should be a winner", async function () {
    const { game, signer } = await loadFixture(deployContractAndSetVariables);

    // good luck
    await game.connect(signer).win();
    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
