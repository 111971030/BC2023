//引用web3
var Web3 = require('web3');
var contract = require("truffle-contract");

// 此处为 Ganache RPC 地址
var provider = new Web3.providers.HttpProvider("http://localhost:8545");

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的Test.json文件内容
var MSHK = contract(
  {
    "contractName": "MSHK",
    "abi": [
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
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"hello\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MSHK.sol\":\"MSHK\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/MSHK.sol\":{\"keccak256\":\"0x26af7ef2e86c0663975360c4ae1e3768f3275be7a0339cb367288fb810c7805e\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://b37ea8be71e57aa39b6894bcb363d3d845db3e6ed52a2917352845a99e17e25b\",\"dweb:/ipfs/QmbFezW6bjRrwibvkkGoYUxRZzgU1pfCWbZNNEeXJb8JCM\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610173806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806319ff1d2114610030575b600080fd5b61003861004e565b604051610045919061011b565b60405180910390f35b60606040518060400160405280600d81526020017f48656c6c6f2c20776f726c642100000000000000000000000000000000000000815250905090565b600081519050919050565b600082825260208201905092915050565b60005b838110156100c55780820151818401526020810190506100aa565b60008484015250505050565b6000601f19601f8301169050919050565b60006100ed8261008b565b6100f78185610096565b93506101078185602086016100a7565b610110816100d1565b840191505092915050565b6000602082019050818103600083015261013581846100e2565b90509291505056fea264697066735822122089b1a4d7908f604d7e3a67e335eee4e80578d469549744149b6d9cc974295a5a64736f6c63430008130033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c806319ff1d2114610030575b600080fd5b61003861004e565b604051610045919061011b565b60405180910390f35b60606040518060400160405280600d81526020017f48656c6c6f2c20776f726c642100000000000000000000000000000000000000815250905090565b600081519050919050565b600082825260208201905092915050565b60005b838110156100c55780820151818401526020810190506100aa565b60008484015250505050565b6000601f19601f8301169050919050565b60006100ed8261008b565b6100f78185610096565b93506101078185602086016100a7565b610110816100d1565b840191505092915050565b6000602082019050818103600083015261013581846100e2565b90509291505056fea264697066735822122089b1a4d7908f604d7e3a67e335eee4e80578d469549744149b6d9cc974295a5a64736f6c63430008130033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:1346:1",
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
            }
          ]
        },
        "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n}\n",
        "id": 1,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "76:113:0:-:0;;;;;;;;;;;;;;;;;;;",
    "deployedSourceMap": "76:113:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;96:90;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;134:13;158:22;;;;;;;;;;;;;;;;;;;96:90;:::o;7:99:1:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:246::-;368:1;378:113;392:6;389:1;386:13;378:113;;;477:1;472:3;468:11;462:18;458:1;453:3;449:11;442:39;414:2;411:1;407:10;402:15;;378:113;;;525:1;516:6;511:3;507:16;500:27;349:184;287:246;;;:::o;539:102::-;580:6;631:2;627:7;622:2;615:5;611:14;607:28;597:38;;539:102;;;:::o;647:377::-;735:3;763:39;796:5;763:39;:::i;:::-;818:71;882:6;877:3;818:71;:::i;:::-;811:78;;898:65;956:6;951:3;944:4;937:5;933:16;898:65;:::i;:::-;988:29;1010:6;988:29;:::i;:::-;983:3;979:39;972:46;;739:285;647:377;;;;:::o;1030:313::-;1143:4;1181:2;1170:9;1166:18;1158:26;;1230:9;1224:4;1220:20;1216:1;1205:9;1201:17;1194:47;1258:78;1331:4;1322:6;1258:78;:::i;:::-;1250:86;;1030:313;;;;:::o",
    "source": "// SPDX-License-Identifier: UNLICENSED\r\npragma solidity >=0.4.22 <0.9.0;\r\n\r\ncontract MSHK{\r\n    function hello() public pure returns (string memory) {\r\n      return \"Hello, world!\";\r\n  }\r\n}",
    "sourcePath": "C:\\Users\\Eric\\BC2023\\contracts\\MSHK.sol",
    "ast": {
      "absolutePath": "project:/contracts/MSHK.sol",
      "exportedSymbols": {
        "MSHK": [
          10
        ]
      },
      "id": 11,
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
          "id": 10,
          "linearizedBaseContracts": [
            10
          ],
          "name": "MSHK",
          "nameLocation": "85:4:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 8,
                "nodeType": "Block",
                "src": "149:37:0",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "48656c6c6f2c20776f726c6421",
                      "id": 6,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "165:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_b6e16d27ac5ab427a7f68900ac5559ce272dc6c37c82b3e052246c82244c50e4",
                        "typeString": "literal_string \"Hello, world!\""
                      },
                      "value": "Hello, world!"
                    },
                    "functionReturnParameters": 5,
                    "id": 7,
                    "nodeType": "Return",
                    "src": "158:22:0"
                  }
                ]
              },
              "functionSelector": "19ff1d21",
              "id": 9,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "hello",
              "nameLocation": "105:5:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "110:2:0"
              },
              "returnParameters": {
                "id": 5,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 4,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 9,
                    "src": "134:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 3,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "134:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "133:15:0"
              },
              "scope": 10,
              "src": "96:90:0",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 11,
          "src": "76:113:0",
          "usedErrors": []
        }
      ],
      "src": "40:149:0"
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
      }
    },
    "schemaVersion": "3.4.13",
    "updatedAt": "2023-05-12T07:17:19.972Z",
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