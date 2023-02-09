const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe("Game5", function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    await ethers.provider.signer();
    var signers = [];
    // for (let index = 0; index < 20000; index++) {
    //   singers.push(ethers.provider.getSigner(index));
    // }
    let threshold = "0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf";
    for (let index = 0; index < 20000; index++) {
      const signer = await ethers.provider.getSigner(index);
      const addr = await signer.getAddress();
      const addressSubstr = addr.substring(0, 7);
      console.log(addressSubstr);
      if (addressSubstr < threshold.substring(0, 7)) {
        console.log("it's won: index: " + index);
        signers.push(signer);
      }
    }
    // const signer1 = ethers.provider.getSigner(11);
    // const x = await signer1.getAddress();

    return { game, signers };
  }
  it("should be a winner", async function () {
    const { game, signers } = await loadFixture(deployContractAndSetVariables);

    // good luck
    for (let index = 0; index < signers.length; index++) {
      console.log(await signers[index].getAddress());
      const signer = await signers[index];
      await game.connect(signer).win();
    }
    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
