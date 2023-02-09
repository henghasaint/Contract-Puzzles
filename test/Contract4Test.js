const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe("Game4", function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory("Game4");
    const game = await Game.deploy();
    const signer1 = ethers.provider.getSigner(0);
    const signer2 = ethers.provider.getSigner(1);
    const x = await signer1.getAddress();
    const y = await signer2.getAddress();

    return { game, x, y, signer1, signer2 };
  }
  it("should be a winner", async function () {
    const { game, x, y, signer1, signer2 } = await loadFixture(
      deployContractAndSetVariables
    );
    console.log("x: ", x);
    console.log("y: ", y);
    // nested mappings are rough :}
    await game.connect(signer1).write(y);
    await game.connect(signer2).write(x);
    // await game.write(y);
    await game.win(y);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
