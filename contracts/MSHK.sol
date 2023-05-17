// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract MSHK{
  string public signedData;

  function hello() public pure returns (string memory) {
      return "Hello, world!";
  }

  // 签署合约
  function signContract(string memory data) public {
      signedData = data;
  }
  
  // 读取已签署的合约
  function readSignedContract() public view returns (string memory) {
      return signedData;
  }
}
