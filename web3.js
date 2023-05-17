//引用web3
var Web3 = require('web3');
var contract = require("truffle-contract");

// 此处为 Ganache RPC 地址
var provider = new Web3.providers.HttpProvider("http://:8545");

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的Test.json文件内容
var MSHK = contract(
  {
    "contractName": "MSHK",
    "abi": [
      {
        "inputs": [],
        "name": "signedData",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "hello",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "data",
            "type": "string"
          }
        ],
        "name": "signContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "readSignedContract",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"hello\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"readSignedContract\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"signContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"signedData\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MSHK.sol\":\"MSHK\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/MSHK.sol\":{\"keccak256\":\"0x2a17a89ebf5f9fa7bb0fa6315f8759034fc5519f2951f3cd8b41dcacd80c90c2\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://1068a5d32ae83516fc4ce79bac62e8ddc2b4ae5f622db8cccc731616f50a0316\",\"dweb:/ipfs/QmYxdeQdHjwDLafTmPnkifJkDnQRrZJKr2G5tbiWH3Xk3y\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610799806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806319ff1d2114610051578063b40bff2d1461006f578063c63576e41461008d578063eac64ba9146100a9575b600080fd5b6100596100c7565b60405161006691906102c7565b60405180910390f35b610077610104565b60405161008491906102c7565b60405180910390f35b6100a760048036038101906100a29190610432565b610196565b005b6100b16101a9565b6040516100be91906102c7565b60405180910390f35b60606040518060400160405280600d81526020017f48656c6c6f2c20776f726c642100000000000000000000000000000000000000815250905090565b606060008054610113906104aa565b80601f016020809104026020016040519081016040528092919081815260200182805461013f906104aa565b801561018c5780601f106101615761010080835404028352916020019161018c565b820191906000526020600020905b81548152906001019060200180831161016f57829003601f168201915b5050505050905090565b80600090816101a59190610691565b5050565b600080546101b6906104aa565b80601f01602080910402602001604051908101604052809291908181526020018280546101e2906104aa565b801561022f5780601f106102045761010080835404028352916020019161022f565b820191906000526020600020905b81548152906001019060200180831161021257829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b83811015610271578082015181840152602081019050610256565b60008484015250505050565b6000601f19601f8301169050919050565b600061029982610237565b6102a38185610242565b93506102b3818560208601610253565b6102bc8161027d565b840191505092915050565b600060208201905081810360008301526102e1818461028e565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61033f8261027d565b810181811067ffffffffffffffff8211171561035e5761035d610307565b5b80604052505050565b60006103716102e9565b905061037d8282610336565b919050565b600067ffffffffffffffff82111561039d5761039c610307565b5b6103a68261027d565b9050602081019050919050565b82818337600083830152505050565b60006103d56103d084610382565b610367565b9050828152602081018484840111156103f1576103f0610302565b5b6103fc8482856103b3565b509392505050565b600082601f830112610419576104186102fd565b5b81356104298482602086016103c2565b91505092915050565b600060208284031215610448576104476102f3565b5b600082013567ffffffffffffffff811115610466576104656102f8565b5b61047284828501610404565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806104c257607f821691505b6020821081036104d5576104d461047b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261053d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610500565b6105478683610500565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061058e6105896105848461055f565b610569565b61055f565b9050919050565b6000819050919050565b6105a883610573565b6105bc6105b482610595565b84845461050d565b825550505050565b600090565b6105d16105c4565b6105dc81848461059f565b505050565b5b81811015610600576105f56000826105c9565b6001810190506105e2565b5050565b601f82111561064557610616816104db565b61061f846104f0565b8101602085101561062e578190505b61064261063a856104f0565b8301826105e1565b50505b505050565b600082821c905092915050565b60006106686000198460080261064a565b1980831691505092915050565b60006106818383610657565b9150826002028217905092915050565b61069a82610237565b67ffffffffffffffff8111156106b3576106b2610307565b5b6106bd82546104aa565b6106c8828285610604565b600060209050601f8311600181146106fb57600084156106e9578287015190505b6106f38582610675565b86555061075b565b601f198416610709866104db565b60005b828110156107315784890151825560018201915060208501945060208101905061070c565b8683101561074e578489015161074a601f891682610657565b8355505b6001600288020188555050505b50505050505056fea26469706673582212207dc6f456e5e9f4ae4513c285da37770055492bc00bc4a01a9b668a188142259864736f6c63430008130033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806319ff1d2114610051578063b40bff2d1461006f578063c63576e41461008d578063eac64ba9146100a9575b600080fd5b6100596100c7565b60405161006691906102c7565b60405180910390f35b610077610104565b60405161008491906102c7565b60405180910390f35b6100a760048036038101906100a29190610432565b610196565b005b6100b16101a9565b6040516100be91906102c7565b60405180910390f35b60606040518060400160405280600d81526020017f48656c6c6f2c20776f726c642100000000000000000000000000000000000000815250905090565b606060008054610113906104aa565b80601f016020809104026020016040519081016040528092919081815260200182805461013f906104aa565b801561018c5780601f106101615761010080835404028352916020019161018c565b820191906000526020600020905b81548152906001019060200180831161016f57829003601f168201915b5050505050905090565b80600090816101a59190610691565b5050565b600080546101b6906104aa565b80601f01602080910402602001604051908101604052809291908181526020018280546101e2906104aa565b801561022f5780601f106102045761010080835404028352916020019161022f565b820191906000526020600020905b81548152906001019060200180831161021257829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b83811015610271578082015181840152602081019050610256565b60008484015250505050565b6000601f19601f8301169050919050565b600061029982610237565b6102a38185610242565b93506102b3818560208601610253565b6102bc8161027d565b840191505092915050565b600060208201905081810360008301526102e1818461028e565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61033f8261027d565b810181811067ffffffffffffffff8211171561035e5761035d610307565b5b80604052505050565b60006103716102e9565b905061037d8282610336565b919050565b600067ffffffffffffffff82111561039d5761039c610307565b5b6103a68261027d565b9050602081019050919050565b82818337600083830152505050565b60006103d56103d084610382565b610367565b9050828152602081018484840111156103f1576103f0610302565b5b6103fc8482856103b3565b509392505050565b600082601f830112610419576104186102fd565b5b81356104298482602086016103c2565b91505092915050565b600060208284031215610448576104476102f3565b5b600082013567ffffffffffffffff811115610466576104656102f8565b5b61047284828501610404565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806104c257607f821691505b6020821081036104d5576104d461047b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261053d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610500565b6105478683610500565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061058e6105896105848461055f565b610569565b61055f565b9050919050565b6000819050919050565b6105a883610573565b6105bc6105b482610595565b84845461050d565b825550505050565b600090565b6105d16105c4565b6105dc81848461059f565b505050565b5b81811015610600576105f56000826105c9565b6001810190506105e2565b5050565b601f82111561064557610616816104db565b61061f846104f0565b8101602085101561062e578190505b61064261063a856104f0565b8301826105e1565b50505b505050565b600082821c905092915050565b60006106686000198460080261064a565b1980831691505092915050565b60006106818383610657565b9150826002028217905092915050565b61069a82610237565b67ffffffffffffffff8111156106b3576106b2610307565b5b6106bd82546104aa565b6106c8828285610604565b600060209050601f8311600181146106fb57600084156106e9578287015190505b6106f38582610675565b86555061075b565b601f198416610709866104db565b60005b828110156107315784890151825560018201915060208501945060208101905061070c565b8683101561074e578489015161074a601f891682610657565b8355505b6001600288020188555050505b50505050505056fea26469706673582212207dc6f456e5e9f4ae4513c285da37770055492bc00bc4a01a9b668a188142259864736f6c63430008130033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:9235:1",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "66:40:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "77:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "93:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "87:5:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "87:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "77:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "49:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "59:6:1",
                  "type": ""
                }
              ],
              "src": "7:99:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "208:73:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "225:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "230:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "218:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "218:19:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "218:19:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "246:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "265:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "270:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "261:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "261:14:1"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "246:11:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "180:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "185:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "196:11:1",
                  "type": ""
                }
              ],
              "src": "112:169:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "349:184:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "359:10:1",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "368:1:1",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "363:1:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "428:63:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "453:3:1"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "458:1:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "449:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "449:11:1"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "472:3:1"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "477:1:1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "468:3:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "468:11:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "462:5:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "462:18:1"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "442:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "442:39:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "442:39:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "389:1:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "392:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "386:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "386:13:1"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "400:19:1",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "402:15:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "411:1:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "414:2:1",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "407:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "407:10:1"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "402:1:1"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "382:3:1",
                      "statements": []
                    },
                    "src": "378:113:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "511:3:1"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "516:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "507:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "507:16:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "525:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "500:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "500:27:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "500:27:1"
                  }
                ]
              },
              "name": "copy_memory_to_memory_with_cleanup",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "331:3:1",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "336:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "341:6:1",
                  "type": ""
                }
              ],
              "src": "287:246:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "587:54:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "597:38:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "615:5:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "622:2:1",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "611:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "611:14:1"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "631:2:1",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "627:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "627:7:1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "607:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "607:28:1"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "597:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "570:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "580:6:1",
                  "type": ""
                }
              ],
              "src": "539:102:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "739:285:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "749:53:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "796:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "763:32:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "763:39:1"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "753:6:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "811:78:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "877:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "882:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "818:58:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "818:71:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "811:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "937:5:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "944:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "933:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "933:16:1"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "951:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "956:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "898:34:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "898:65:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "898:65:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "972:46:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "983:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1010:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "988:21:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "988:29:1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "979:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "979:39:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "972:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "720:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "727:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "735:3:1",
                  "type": ""
                }
              ],
              "src": "647:377:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1148:195:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1158:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1170:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1181:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1166:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1166:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1158:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1205:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1216:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1201:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1201:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "1224:4:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1230:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1220:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1220:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1194:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1194:47:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1194:47:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1250:86:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1322:6:1"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1331:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1258:63:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1258:78:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1250:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1120:9:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1132:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1143:4:1",
                  "type": ""
                }
              ],
              "src": "1030:313:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1389:35:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1399:19:1",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1415:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1409:5:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1409:9:1"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1399:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "1382:6:1",
                  "type": ""
                }
              ],
              "src": "1349:75:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1519:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1536:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1539:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1529:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1529:12:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1529:12:1"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nodeType": "YulFunctionDefinition",
              "src": "1430:117:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1642:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1659:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1662:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1652:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1652:12:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1652:12:1"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nodeType": "YulFunctionDefinition",
              "src": "1553:117:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1765:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1782:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1785:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1775:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1775:12:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1775:12:1"
                  }
                ]
              },
              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
              "nodeType": "YulFunctionDefinition",
              "src": "1676:117:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1888:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1905:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1908:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1898:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1898:12:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1898:12:1"
                  }
                ]
              },
              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
              "nodeType": "YulFunctionDefinition",
              "src": "1799:117:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1950:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1967:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1970:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1960:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1960:88:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1960:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2064:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2067:4:1",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2057:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2057:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2057:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2088:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2091:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "2081:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2081:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2081:15:1"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "1922:180:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2151:238:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2161:58:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "2183:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "size",
                              "nodeType": "YulIdentifier",
                              "src": "2213:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "2191:21:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2191:27:1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2179:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2179:40:1"
                    },
                    "variables": [
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulTypedName",
                        "src": "2165:10:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2330:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "2332:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2332:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2332:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "2273:10:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2285:18:1",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2270:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2270:34:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "2309:10:1"
                            },
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "2321:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2306:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2306:22:1"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "2267:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2267:62:1"
                    },
                    "nodeType": "YulIf",
                    "src": "2264:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2368:2:1",
                          "type": "",
                          "value": "64"
                        },
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulIdentifier",
                          "src": "2372:10:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2361:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2361:22:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2361:22:1"
                  }
                ]
              },
              "name": "finalize_allocation",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "2137:6:1",
                  "type": ""
                },
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "2145:4:1",
                  "type": ""
                }
              ],
              "src": "2108:281:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2436:88:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2446:30:1",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "allocate_unbounded",
                        "nodeType": "YulIdentifier",
                        "src": "2456:18:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2456:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "2446:6:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "2505:6:1"
                        },
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "2513:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "finalize_allocation",
                        "nodeType": "YulIdentifier",
                        "src": "2485:19:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2485:33:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2485:33:1"
                  }
                ]
              },
              "name": "allocate_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "2420:4:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "2429:6:1",
                  "type": ""
                }
              ],
              "src": "2395:129:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2597:241:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2702:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "2704:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2704:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2704:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2674:6:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2682:18:1",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2671:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2671:30:1"
                    },
                    "nodeType": "YulIf",
                    "src": "2668:56:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2734:37:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2764:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "round_up_to_mul_of_32",
                        "nodeType": "YulIdentifier",
                        "src": "2742:21:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2742:29:1"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "2734:4:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2808:23:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "2820:4:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2826:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2816:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2816:15:1"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "2808:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_allocation_size_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "2581:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "2592:4:1",
                  "type": ""
                }
              ],
              "src": "2530:308:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2908:82:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "2931:3:1"
                        },
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "2936:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2941:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldatacopy",
                        "nodeType": "YulIdentifier",
                        "src": "2918:12:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2918:30:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2918:30:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "2968:3:1"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2973:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2964:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2964:16:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2982:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2957:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2957:27:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2957:27:1"
                  }
                ]
              },
              "name": "copy_calldata_to_memory_with_cleanup",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "2890:3:1",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "2895:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "2900:6:1",
                  "type": ""
                }
              ],
              "src": "2844:146:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3080:341:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3090:75:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3157:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "array_allocation_size_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "3115:41:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3115:49:1"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "3099:15:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3099:66:1"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "3090:5:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "3181:5:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3188:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3174:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3174:21:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3174:21:1"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3204:27:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "3219:5:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3226:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3215:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3215:16:1"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "3208:3:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3269:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                              "nodeType": "YulIdentifier",
                              "src": "3271:77:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3271:79:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3271:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "3250:3:1"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3255:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3246:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3246:16:1"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "3264:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3243:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3243:25:1"
                    },
                    "nodeType": "YulIf",
                    "src": "3240:112:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "3398:3:1"
                        },
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "3403:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3408:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "copy_calldata_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "3361:36:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3361:54:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3361:54:1"
                  }
                ]
              },
              "name": "abi_decode_available_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "3053:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3058:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3066:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "3074:5:1",
                  "type": ""
                }
              ],
              "src": "2996:425:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3503:278:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3552:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nodeType": "YulIdentifier",
                              "src": "3554:77:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3554:79:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3554:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "3531:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3539:4:1",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3527:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3527:17:1"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "3546:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "3523:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3523:27:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3516:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3516:35:1"
                    },
                    "nodeType": "YulIf",
                    "src": "3513:122:1"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3644:34:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "3671:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3658:12:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3658:20:1"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "3648:6:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3687:88:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "3748:6:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3756:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3744:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3744:17:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3763:6:1"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "3771:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_available_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "3696:47:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3696:79:1"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "3687:5:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "3481:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3489:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "3497:5:1",
                  "type": ""
                }
              ],
              "src": "3441:340:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3863:433:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3909:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "3911:77:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3911:79:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3911:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "3884:7:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3893:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3880:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3880:23:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3905:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3876:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3876:32:1"
                    },
                    "nodeType": "YulIf",
                    "src": "3873:119:1"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4002:287:1",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4017:45:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4048:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4059:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4044:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4044:17:1"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "4031:12:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4031:31:1"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4021:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4109:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nodeType": "YulIdentifier",
                                  "src": "4111:77:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4111:79:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4111:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "4081:6:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4089:18:1",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4078:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4078:30:1"
                        },
                        "nodeType": "YulIf",
                        "src": "4075:117:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4206:73:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4251:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4262:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4247:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4247:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4271:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "4216:30:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4216:63:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4206:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3833:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3844:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3856:6:1",
                  "type": ""
                }
              ],
              "src": "3787:509:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4330:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4347:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4350:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4340:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4340:88:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4340:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4444:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4447:4:1",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4437:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4437:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4437:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4468:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4471:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "4461:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4461:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4461:15:1"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "4302:180:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4539:269:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4549:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "4563:4:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4569:1:1",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "4559:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4559:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4549:6:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4580:38:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "4610:4:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4616:1:1",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "4606:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4606:12:1"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "4584:18:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4657:51:1",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "4671:27:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "4685:6:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4693:4:1",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "4681:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4681:17:1"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "4671:6:1"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "4637:18:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4630:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4630:26:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4627:81:1"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4760:42:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "4774:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4774:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4774:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "4724:18:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "4747:6:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4755:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "4744:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4744:14:1"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "4721:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4721:38:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4718:84:1"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "4523:4:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "4532:6:1",
                  "type": ""
                }
              ],
              "src": "4488:320:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4868:87:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4878:11:1",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "4886:3:1"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "4878:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4906:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "4909:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4899:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4899:14:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4899:14:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4922:26:1",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4940:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4943:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "4930:9:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4930:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "4922:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "4855:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "4863:4:1",
                  "type": ""
                }
              ],
              "src": "4814:141:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5005:49:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5015:33:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5033:5:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5040:2:1",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5029:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5029:14:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5045:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "5025:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5025:23:1"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "5015:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "divide_by_32_ceil",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4988:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "4998:6:1",
                  "type": ""
                }
              ],
              "src": "4961:93:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5113:54:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5123:37:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "5148:4:1"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5154:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "5144:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5144:16:1"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "5123:8:1"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_left_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "5088:4:1",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5094:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "5104:8:1",
                  "type": ""
                }
              ],
              "src": "5060:107:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5249:317:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5259:35:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBytes",
                          "nodeType": "YulIdentifier",
                          "src": "5280:10:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5292:1:1",
                          "type": "",
                          "value": "8"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "5276:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5276:18:1"
                    },
                    "variables": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulTypedName",
                        "src": "5263:9:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5303:109:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "5334:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5345:66:1",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "5315:18:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5315:97:1"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "5307:4:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5421:51:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "5452:9:1"
                        },
                        {
                          "name": "toInsert",
                          "nodeType": "YulIdentifier",
                          "src": "5463:8:1"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "5433:18:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5433:39:1"
                    },
                    "variableNames": [
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "5421:8:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5481:30:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5494:5:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "5505:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "5501:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5501:9:1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "5490:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5490:21:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5481:5:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5520:40:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5533:5:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "5544:8:1"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "5554:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "5540:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5540:19:1"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "5530:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5530:30:1"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "5520:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "update_byte_slice_dynamic32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5210:5:1",
                  "type": ""
                },
                {
                  "name": "shiftBytes",
                  "nodeType": "YulTypedName",
                  "src": "5217:10:1",
                  "type": ""
                },
                {
                  "name": "toInsert",
                  "nodeType": "YulTypedName",
                  "src": "5229:8:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "5242:6:1",
                  "type": ""
                }
              ],
              "src": "5173:393:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5617:32:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5627:16:1",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "5638:5:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "5627:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5599:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "5609:7:1",
                  "type": ""
                }
              ],
              "src": "5572:77:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5687:28:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5697:12:1",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "5704:5:1"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "5697:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "identity",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5673:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "5683:3:1",
                  "type": ""
                }
              ],
              "src": "5655:60:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5781:82:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5791:66:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "5849:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "5831:17:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5831:24:1"
                            }
                          ],
                          "functionName": {
                            "name": "identity",
                            "nodeType": "YulIdentifier",
                            "src": "5822:8:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5822:34:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "5804:17:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5804:53:1"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "5791:9:1"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5761:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "5771:9:1",
                  "type": ""
                }
              ],
              "src": "5721:142:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5916:28:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5926:12:1",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "5933:5:1"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "5926:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "prepare_store_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5902:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "5912:3:1",
                  "type": ""
                }
              ],
              "src": "5869:75:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6026:193:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "6036:63:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "6091:7:1"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "6060:30:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6060:39:1"
                    },
                    "variables": [
                      {
                        "name": "convertedValue_0",
                        "nodeType": "YulTypedName",
                        "src": "6040:16:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "6115:4:1"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "6155:4:1"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "6149:5:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6149:11:1"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "6162:6:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "convertedValue_0",
                                  "nodeType": "YulIdentifier",
                                  "src": "6194:16:1"
                                }
                              ],
                              "functionName": {
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "6170:23:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6170:41:1"
                            }
                          ],
                          "functionName": {
                            "name": "update_byte_slice_dynamic32",
                            "nodeType": "YulIdentifier",
                            "src": "6121:27:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6121:91:1"
                        }
                      ],
                      "functionName": {
                        "name": "sstore",
                        "nodeType": "YulIdentifier",
                        "src": "6108:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6108:105:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6108:105:1"
                  }
                ]
              },
              "name": "update_storage_value_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "6003:4:1",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "6009:6:1",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "6017:7:1",
                  "type": ""
                }
              ],
              "src": "5950:269:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6274:24:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6284:8:1",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "6291:1:1",
                      "type": "",
                      "value": "0"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "6284:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "zero_value_for_split_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "6270:3:1",
                  "type": ""
                }
              ],
              "src": "6225:73:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6357:136:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "6367:46:1",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "zero_value_for_split_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "6381:30:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6381:32:1"
                    },
                    "variables": [
                      {
                        "name": "zero_0",
                        "nodeType": "YulTypedName",
                        "src": "6371:6:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "6466:4:1"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "6472:6:1"
                        },
                        {
                          "name": "zero_0",
                          "nodeType": "YulIdentifier",
                          "src": "6480:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "update_storage_value_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "6422:43:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6422:65:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6422:65:1"
                  }
                ]
              },
              "name": "storage_set_to_zero_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "6343:4:1",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "6349:6:1",
                  "type": ""
                }
              ],
              "src": "6304:189:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6549:136:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6616:63:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "6660:5:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6667:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "storage_set_to_zero_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "6630:29:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6630:39:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6630:39:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "start",
                          "nodeType": "YulIdentifier",
                          "src": "6569:5:1"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "6576:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "6566:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6566:14:1"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "6581:26:1",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "6583:22:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "6596:5:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6603:1:1",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6592:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6592:13:1"
                          },
                          "variableNames": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "6583:5:1"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "6563:2:1",
                      "statements": []
                    },
                    "src": "6559:120:1"
                  }
                ]
              },
              "name": "clear_storage_range_t_bytes1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "start",
                  "nodeType": "YulTypedName",
                  "src": "6537:5:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "6544:3:1",
                  "type": ""
                }
              ],
              "src": "6499:186:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6770:464:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6796:431:1",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "6810:54:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "6858:5:1"
                              }
                            ],
                            "functionName": {
                              "name": "array_dataslot_t_string_storage",
                              "nodeType": "YulIdentifier",
                              "src": "6826:31:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6826:38:1"
                          },
                          "variables": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulTypedName",
                              "src": "6814:8:1",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "6877:63:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "6900:8:1"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nodeType": "YulIdentifier",
                                    "src": "6928:10:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "divide_by_32_ceil",
                                  "nodeType": "YulIdentifier",
                                  "src": "6910:17:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6910:29:1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6896:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6896:44:1"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "6881:11:1",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "7097:27:1",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "7099:23:1",
                                "value": {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "7114:8:1"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "7099:11:1"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "startIndex",
                                "nodeType": "YulIdentifier",
                                "src": "7081:10:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7093:2:1",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "7078:2:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7078:18:1"
                          },
                          "nodeType": "YulIf",
                          "src": "7075:49:1"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "deleteStart",
                                "nodeType": "YulIdentifier",
                                "src": "7166:11:1"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nodeType": "YulIdentifier",
                                    "src": "7183:8:1"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "7211:3:1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nodeType": "YulIdentifier",
                                      "src": "7193:17:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "7193:22:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "7179:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7179:37:1"
                              }
                            ],
                            "functionName": {
                              "name": "clear_storage_range_t_bytes1",
                              "nodeType": "YulIdentifier",
                              "src": "7137:28:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7137:80:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7137:80:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "6787:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6792:2:1",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "6784:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6784:11:1"
                    },
                    "nodeType": "YulIf",
                    "src": "6781:446:1"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "6746:5:1",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "6753:3:1",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "6758:10:1",
                  "type": ""
                }
              ],
              "src": "6691:543:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7303:54:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7313:37:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "7338:4:1"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "7344:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "7334:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7334:16:1"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "7313:8:1"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_unsigned_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "7278:4:1",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "7284:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "7294:8:1",
                  "type": ""
                }
              ],
              "src": "7240:117:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7414:118:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "7424:68:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7473:1:1",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "bytes",
                                  "nodeType": "YulIdentifier",
                                  "src": "7476:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "7469:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7469:13:1"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7488:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "7484:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7484:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_unsigned_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "7440:28:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7440:51:1"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "7436:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7436:56:1"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "7428:4:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7501:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "7515:4:1"
                        },
                        {
                          "name": "mask",
                          "nodeType": "YulIdentifier",
                          "src": "7521:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "7511:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7511:15:1"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "7501:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "mask_bytes_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "7391:4:1",
                  "type": ""
                },
                {
                  "name": "bytes",
                  "nodeType": "YulTypedName",
                  "src": "7397:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "7407:6:1",
                  "type": ""
                }
              ],
              "src": "7363:169:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7618:214:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7751:37:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "7778:4:1"
                        },
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "7784:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "mask_bytes_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "7759:18:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7759:29:1"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "7751:4:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7797:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "7808:4:1"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7818:1:1",
                              "type": "",
                              "value": "2"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "7821:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "7814:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7814:11:1"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "7805:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7805:21:1"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "7797:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_used_part_and_set_length_of_short_byte_array",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "7599:4:1",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "7605:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "7613:4:1",
                  "type": ""
                }
              ],
              "src": "7537:295:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7929:1303:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "7940:51:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "7987:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "7954:32:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7954:37:1"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "7944:6:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8076:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "8078:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8078:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8078:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "8048:6:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8056:18:1",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "8045:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8045:30:1"
                    },
                    "nodeType": "YulIf",
                    "src": "8042:56:1"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "8108:52:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "8154:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "8148:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8148:11:1"
                        }
                      ],
                      "functionName": {
                        "name": "extract_byte_array_length",
                        "nodeType": "YulIdentifier",
                        "src": "8122:25:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8122:38:1"
                    },
                    "variables": [
                      {
                        "name": "oldLen",
                        "nodeType": "YulTypedName",
                        "src": "8112:6:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "8253:4:1"
                        },
                        {
                          "name": "oldLen",
                          "nodeType": "YulIdentifier",
                          "src": "8259:6:1"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "8267:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_t_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "8207:45:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8207:67:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8207:67:1"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "8284:18:1",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "8301:1:1",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "8288:9:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8312:17:1",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "8325:4:1",
                      "type": "",
                      "value": "0x20"
                    },
                    "variableNames": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulIdentifier",
                        "src": "8312:9:1"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "8376:611:1",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "8390:37:1",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "8409:6:1"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "8421:4:1",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "8417:3:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "8417:9:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "8405:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8405:22:1"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "8394:7:1",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "8441:51:1",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "8487:4:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "8455:31:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8455:37:1"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "8445:6:1",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "8505:10:1",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8514:1:1",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "8509:1:1",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "8573:163:1",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "8598:6:1"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "8616:3:1"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "8621:9:1"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "8612:3:1"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "8612:19:1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "8606:5:1"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "8606:26:1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "8591:6:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8591:42:1"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "8591:42:1"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "8650:24:1",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "8664:6:1"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "8672:1:1",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "8660:3:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8660:14:1"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "8650:6:1"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "8691:31:1",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "8708:9:1"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "8719:2:1",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "8704:3:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8704:18:1"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "8691:9:1"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "8539:1:1"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "8542:7:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "8536:2:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8536:14:1"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "8551:21:1",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "8553:17:1",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "8562:1:1"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "8565:4:1",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "8558:3:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8558:12:1"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "8553:1:1"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "8532:3:1",
                                "statements": []
                              },
                              "src": "8528:208:1"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "8772:156:1",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "8790:43:1",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "8817:3:1"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "8822:9:1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "8813:3:1"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "8813:19:1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "8807:5:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8807:26:1"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "8794:9:1",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "8857:6:1"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "8884:9:1"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "newLen",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "8899:6:1"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nodeType": "YulLiteral",
                                                  "src": "8907:4:1",
                                                  "type": "",
                                                  "value": "0x1f"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "8895:3:1"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "8895:17:1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mask_bytes_dynamic",
                                            "nodeType": "YulIdentifier",
                                            "src": "8865:18:1"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "8865:48:1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "8850:6:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8850:64:1"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "8850:64:1"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "8755:7:1"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "8764:6:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "8752:2:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8752:19:1"
                              },
                              "nodeType": "YulIf",
                              "src": "8749:179:1"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "8948:4:1"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "8962:6:1"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "8970:1:1",
                                            "type": "",
                                            "value": "2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mul",
                                          "nodeType": "YulIdentifier",
                                          "src": "8958:3:1"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "8958:14:1"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "8974:1:1",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "8954:3:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "8954:22:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "8941:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8941:36:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "8941:36:1"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "8369:618:1",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8374:1:1",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "9004:222:1",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "9018:14:1",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9031:1:1",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "9022:5:1",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "9055:67:1",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "9073:35:1",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "9092:3:1"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "9097:9:1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "9088:3:1"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "9088:19:1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "9082:5:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "9082:26:1"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "9073:5:1"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "9048:6:1"
                              },
                              "nodeType": "YulIf",
                              "src": "9045:77:1"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "9142:4:1"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "9201:5:1"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "9208:6:1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "9148:52:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "9148:67:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "9135:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "9135:81:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "9135:81:1"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "8996:230:1",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "8349:6:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8357:2:1",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "8346:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8346:14:1"
                    },
                    "nodeType": "YulSwitch",
                    "src": "8339:887:1"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "7918:4:1",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "7924:3:1",
                  "type": ""
                }
              ],
              "src": "7837:1395:1"
            }
          ]
        },
        "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptr(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
        "id": 1,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "76:385:0:-:0;;;;;;;;;;;;;;;;;;;",
    "deployedSourceMap": "76:385:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;125:90;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;360:98;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;240:81;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;94:24;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;125:90;163:13;187:22;;;;;;;;;;;;;;;;;;;125:90;:::o;360:98::-;411:13;442:10;435:17;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;360:98;:::o;240:81::-;311:4;298:10;:17;;;;;;:::i;:::-;;240:81;:::o;94:24::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:99:1:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:246::-;368:1;378:113;392:6;389:1;386:13;378:113;;;477:1;472:3;468:11;462:18;458:1;453:3;449:11;442:39;414:2;411:1;407:10;402:15;;378:113;;;525:1;516:6;511:3;507:16;500:27;349:184;287:246;;;:::o;539:102::-;580:6;631:2;627:7;622:2;615:5;611:14;607:28;597:38;;539:102;;;:::o;647:377::-;735:3;763:39;796:5;763:39;:::i;:::-;818:71;882:6;877:3;818:71;:::i;:::-;811:78;;898:65;956:6;951:3;944:4;937:5;933:16;898:65;:::i;:::-;988:29;1010:6;988:29;:::i;:::-;983:3;979:39;972:46;;739:285;647:377;;;;:::o;1030:313::-;1143:4;1181:2;1170:9;1166:18;1158:26;;1230:9;1224:4;1220:20;1216:1;1205:9;1201:17;1194:47;1258:78;1331:4;1322:6;1258:78;:::i;:::-;1250:86;;1030:313;;;;:::o;1349:75::-;1382:6;1415:2;1409:9;1399:19;;1349:75;:::o;1430:117::-;1539:1;1536;1529:12;1553:117;1662:1;1659;1652:12;1676:117;1785:1;1782;1775:12;1799:117;1908:1;1905;1898:12;1922:180;1970:77;1967:1;1960:88;2067:4;2064:1;2057:15;2091:4;2088:1;2081:15;2108:281;2191:27;2213:4;2191:27;:::i;:::-;2183:6;2179:40;2321:6;2309:10;2306:22;2285:18;2273:10;2270:34;2267:62;2264:88;;;2332:18;;:::i;:::-;2264:88;2372:10;2368:2;2361:22;2151:238;2108:281;;:::o;2395:129::-;2429:6;2456:20;;:::i;:::-;2446:30;;2485:33;2513:4;2505:6;2485:33;:::i;:::-;2395:129;;;:::o;2530:308::-;2592:4;2682:18;2674:6;2671:30;2668:56;;;2704:18;;:::i;:::-;2668:56;2742:29;2764:6;2742:29;:::i;:::-;2734:37;;2826:4;2820;2816:15;2808:23;;2530:308;;;:::o;2844:146::-;2941:6;2936:3;2931;2918:30;2982:1;2973:6;2968:3;2964:16;2957:27;2844:146;;;:::o;2996:425::-;3074:5;3099:66;3115:49;3157:6;3115:49;:::i;:::-;3099:66;:::i;:::-;3090:75;;3188:6;3181:5;3174:21;3226:4;3219:5;3215:16;3264:3;3255:6;3250:3;3246:16;3243:25;3240:112;;;3271:79;;:::i;:::-;3240:112;3361:54;3408:6;3403:3;3398;3361:54;:::i;:::-;3080:341;2996:425;;;;;:::o;3441:340::-;3497:5;3546:3;3539:4;3531:6;3527:17;3523:27;3513:122;;3554:79;;:::i;:::-;3513:122;3671:6;3658:20;3696:79;3771:3;3763:6;3756:4;3748:6;3744:17;3696:79;:::i;:::-;3687:88;;3503:278;3441:340;;;;:::o;3787:509::-;3856:6;3905:2;3893:9;3884:7;3880:23;3876:32;3873:119;;;3911:79;;:::i;:::-;3873:119;4059:1;4048:9;4044:17;4031:31;4089:18;4081:6;4078:30;4075:117;;;4111:79;;:::i;:::-;4075:117;4216:63;4271:7;4262:6;4251:9;4247:22;4216:63;:::i;:::-;4206:73;;4002:287;3787:509;;;;:::o;4302:180::-;4350:77;4347:1;4340:88;4447:4;4444:1;4437:15;4471:4;4468:1;4461:15;4488:320;4532:6;4569:1;4563:4;4559:12;4549:22;;4616:1;4610:4;4606:12;4637:18;4627:81;;4693:4;4685:6;4681:17;4671:27;;4627:81;4755:2;4747:6;4744:14;4724:18;4721:38;4718:84;;4774:18;;:::i;:::-;4718:84;4539:269;4488:320;;;:::o;4814:141::-;4863:4;4886:3;4878:11;;4909:3;4906:1;4899:14;4943:4;4940:1;4930:18;4922:26;;4814:141;;;:::o;4961:93::-;4998:6;5045:2;5040;5033:5;5029:14;5025:23;5015:33;;4961:93;;;:::o;5060:107::-;5104:8;5154:5;5148:4;5144:16;5123:37;;5060:107;;;;:::o;5173:393::-;5242:6;5292:1;5280:10;5276:18;5315:97;5345:66;5334:9;5315:97;:::i;:::-;5433:39;5463:8;5452:9;5433:39;:::i;:::-;5421:51;;5505:4;5501:9;5494:5;5490:21;5481:30;;5554:4;5544:8;5540:19;5533:5;5530:30;5520:40;;5249:317;;5173:393;;;;;:::o;5572:77::-;5609:7;5638:5;5627:16;;5572:77;;;:::o;5655:60::-;5683:3;5704:5;5697:12;;5655:60;;;:::o;5721:142::-;5771:9;5804:53;5822:34;5831:24;5849:5;5831:24;:::i;:::-;5822:34;:::i;:::-;5804:53;:::i;:::-;5791:66;;5721:142;;;:::o;5869:75::-;5912:3;5933:5;5926:12;;5869:75;;;:::o;5950:269::-;6060:39;6091:7;6060:39;:::i;:::-;6121:91;6170:41;6194:16;6170:41;:::i;:::-;6162:6;6155:4;6149:11;6121:91;:::i;:::-;6115:4;6108:105;6026:193;5950:269;;;:::o;6225:73::-;6270:3;6225:73;:::o;6304:189::-;6381:32;;:::i;:::-;6422:65;6480:6;6472;6466:4;6422:65;:::i;:::-;6357:136;6304:189;;:::o;6499:186::-;6559:120;6576:3;6569:5;6566:14;6559:120;;;6630:39;6667:1;6660:5;6630:39;:::i;:::-;6603:1;6596:5;6592:13;6583:22;;6559:120;;;6499:186;;:::o;6691:543::-;6792:2;6787:3;6784:11;6781:446;;;6826:38;6858:5;6826:38;:::i;:::-;6910:29;6928:10;6910:29;:::i;:::-;6900:8;6896:44;7093:2;7081:10;7078:18;7075:49;;;7114:8;7099:23;;7075:49;7137:80;7193:22;7211:3;7193:22;:::i;:::-;7183:8;7179:37;7166:11;7137:80;:::i;:::-;6796:431;;6781:446;6691:543;;;:::o;7240:117::-;7294:8;7344:5;7338:4;7334:16;7313:37;;7240:117;;;;:::o;7363:169::-;7407:6;7440:51;7488:1;7484:6;7476:5;7473:1;7469:13;7440:51;:::i;:::-;7436:56;7521:4;7515;7511:15;7501:25;;7414:118;7363:169;;;;:::o;7537:295::-;7613:4;7759:29;7784:3;7778:4;7759:29;:::i;:::-;7751:37;;7821:3;7818:1;7814:11;7808:4;7805:21;7797:29;;7537:295;;;;:::o;7837:1395::-;7954:37;7987:3;7954:37;:::i;:::-;8056:18;8048:6;8045:30;8042:56;;;8078:18;;:::i;:::-;8042:56;8122:38;8154:4;8148:11;8122:38;:::i;:::-;8207:67;8267:6;8259;8253:4;8207:67;:::i;:::-;8301:1;8325:4;8312:17;;8357:2;8349:6;8346:14;8374:1;8369:618;;;;9031:1;9048:6;9045:77;;;9097:9;9092:3;9088:19;9082:26;9073:35;;9045:77;9148:67;9208:6;9201:5;9148:67;:::i;:::-;9142:4;9135:81;9004:222;8339:887;;8369:618;8421:4;8417:9;8409:6;8405:22;8455:37;8487:4;8455:37;:::i;:::-;8514:1;8528:208;8542:7;8539:1;8536:14;8528:208;;;8621:9;8616:3;8612:19;8606:26;8598:6;8591:42;8672:1;8664:6;8660:14;8650:24;;8719:2;8708:9;8704:18;8691:31;;8565:4;8562:1;8558:12;8553:17;;8528:208;;;8764:6;8755:7;8752:19;8749:179;;;8822:9;8817:3;8813:19;8807:26;8865:48;8907:4;8899:6;8895:17;8884:9;8865:48;:::i;:::-;8857:6;8850:64;8772:156;8749:179;8974:1;8970;8962:6;8958:14;8954:22;8948:4;8941:36;8376:611;;;8339:887;;7929:1303;;;7837:1395;;:::o",
    "source": "// SPDX-License-Identifier: UNLICENSED\r\npragma solidity >=0.4.22 <0.9.0;\r\n\r\ncontract MSHK{\r\n  string public signedData;\r\n\r\n  function hello() public pure returns (string memory) {\r\n      return \"Hello, world!\";\r\n  }\r\n\r\n  // 签署合约\r\n  function signContract(string memory data) public {\r\n      signedData = data;\r\n  }\r\n  \r\n  // 读取已签署的合约\r\n  function readSignedContract() public view returns (string memory) {\r\n      return signedData;\r\n  }\r\n}\r\n",
    "sourcePath": "C:\\Users\\Eric\\BC2023\\contracts\\MSHK.sol",
    "ast": {
      "absolutePath": "project:/contracts/MSHK.sol",
      "exportedSymbols": {
        "MSHK": [
          30
        ]
      },
      "id": 31,
      "license": "UNLICENSED",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".22",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "40:32:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "canonicalName": "MSHK",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 30,
          "linearizedBaseContracts": [
            30
          ],
          "name": "MSHK",
          "nameLocation": "85:4:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "eac64ba9",
              "id": 3,
              "mutability": "mutable",
              "name": "signedData",
              "nameLocation": "108:10:0",
              "nodeType": "VariableDeclaration",
              "scope": 30,
              "src": "94:24:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 2,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "94:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 10,
                "nodeType": "Block",
                "src": "178:37:0",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "48656c6c6f2c20776f726c6421",
                      "id": 8,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "194:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_b6e16d27ac5ab427a7f68900ac5559ce272dc6c37c82b3e052246c82244c50e4",
                        "typeString": "literal_string \"Hello, world!\""
                      },
                      "value": "Hello, world!"
                    },
                    "functionReturnParameters": 7,
                    "id": 9,
                    "nodeType": "Return",
                    "src": "187:22:0"
                  }
                ]
              },
              "functionSelector": "19ff1d21",
              "id": 11,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "hello",
              "nameLocation": "134:5:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 4,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "139:2:0"
              },
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 6,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 11,
                    "src": "163:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 5,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "163:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "162:15:0"
              },
              "scope": 30,
              "src": "125:90:0",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 20,
                "nodeType": "Block",
                "src": "289:32:0",
                "statements": [
                  {
                    "expression": {
                      "id": 18,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 16,
                        "name": "signedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "298:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 17,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "311:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "298:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 19,
                    "nodeType": "ExpressionStatement",
                    "src": "298:17:0"
                  }
                ]
              },
              "functionSelector": "c63576e4",
              "id": 21,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "signContract",
              "nameLocation": "249:12:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 14,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 13,
                    "mutability": "mutable",
                    "name": "data",
                    "nameLocation": "276:4:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 21,
                    "src": "262:18:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 12,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "262:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "261:20:0"
              },
              "returnParameters": {
                "id": 15,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "289:0:0"
              },
              "scope": 30,
              "src": "240:81:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 28,
                "nodeType": "Block",
                "src": "426:32:0",
                "statements": [
                  {
                    "expression": {
                      "id": 26,
                      "name": "signedData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "442:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 25,
                    "id": 27,
                    "nodeType": "Return",
                    "src": "435:17:0"
                  }
                ]
              },
              "functionSelector": "b40bff2d",
              "id": 29,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "readSignedContract",
              "nameLocation": "369:18:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 22,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "387:2:0"
              },
              "returnParameters": {
                "id": 25,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 24,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 29,
                    "src": "411:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 23,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "411:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "410:15:0"
              },
              "scope": 30,
              "src": "360:98:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 31,
          "src": "76:385:0",
          "usedErrors": []
        }
      ],
      "src": "40:423:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.19+commit.7dd6d404.Emscripten.clang"
    },
    "networks": {
      "1683856456414": {
        "events": {},
        "links": {},
        "address": "0xC2c6Cb7D41600405FCf9BdF934E21807c28E2E6D",
        "transactionHash": "0xa215ffbcfc9d9cb64d8a5859921f96c9115d6b398cd8d30f3269d25f38b520f9"
      },
      "1683878004586": {
        "events": {},
        "links": {},
        "address": "0x7E125c283c33e3a16b546d6B83ADd4aA3969A2D7",
        "transactionHash": "0x9c1a95433140024abc1e2e978848c7052f1675c8cc63e7c0c97a63aca5bbabf1"
      }
    },
    "schemaVersion": "3.4.13",
    "updatedAt": "2023-05-15T08:24:19.162Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
);

MSHK.setProvider(provider);

MSHK.deployed().then(function(instance){
    return instance.hello();
}).then(function(result){
    console.log(result);
});