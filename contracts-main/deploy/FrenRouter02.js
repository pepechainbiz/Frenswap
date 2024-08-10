module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  // let wethAddress = "0xe09B47411A03BA98C67A4768A365F28ba67A769E";
  const wethAddress = (await deployments.get("WPEPE")).address;
  console.log("wethAddress: ", wethAddress)
  const factoryAddress = (await deployments.get("FrenFactory")).address;

  await deploy("FrenRouter02", {
    from: deployer,
    args: [factoryAddress, wethAddress],
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ["FrenRouter02", "AMM"];
module.exports.dependencies = ["FrenFactory", "WPEPE"];

