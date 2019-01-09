export default {
  "contractName": "AdSeller",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "bidValue",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "poster",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "adContent",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "winner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "bidDueTime",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_bidDueTime",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "ad",
          "type": "string"
        }
      ],
      "name": "bid",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160208061062383398101806040528101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600181905550506105998061008a6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806372e92e221461007d5780637aef951c146100a8578063809597211461011c578063ac9a7f3b14610173578063dfbf53ae14610203578063f0ff8c011461025a575b600080fd5b34801561008957600080fd5b50610092610285565b6040518082815260200191505060405180910390f35b610102600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061028b565b604051808215151515815260200191505060405180910390f35b34801561012857600080fd5b506101316103d9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017f57600080fd5b506101886103fe565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c85780820151818401526020810190506101ad565b50505050905090810190601f1680156101f55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561020f57600080fd5b5061021861049c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026657600080fd5b5061026f6104c2565b6040518082815260200191505060405180910390f35b60045481565b6000806000426001541115156102a057600080fd5b600454341115156102b057600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600454905033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600390805190602001906103319291906104c8565b5034600481905550836003908051906020019061034f9291906104c8565b50600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415156103ce578173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156103cc573d6000803e3d6000fd5b505b600192505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b505050505081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050957805160ff1916838001178555610537565b82800160010185558215610537579182015b8281111561053657825182559160200191906001019061051b565b5b5090506105449190610548565b5090565b61056a91905b8082111561056657600081600090555060010161054e565b5090565b905600a165627a7a72305820d191a83e61f6375e4dd02cf7e28968f183bebaf0b0317e2a01c99dc81c31073a0029",
  "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806372e92e221461007d5780637aef951c146100a8578063809597211461011c578063ac9a7f3b14610173578063dfbf53ae14610203578063f0ff8c011461025a575b600080fd5b34801561008957600080fd5b50610092610285565b6040518082815260200191505060405180910390f35b610102600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061028b565b604051808215151515815260200191505060405180910390f35b34801561012857600080fd5b506101316103d9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017f57600080fd5b506101886103fe565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c85780820151818401526020810190506101ad565b50505050905090810190601f1680156101f55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561020f57600080fd5b5061021861049c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026657600080fd5b5061026f6104c2565b6040518082815260200191505060405180910390f35b60045481565b6000806000426001541115156102a057600080fd5b600454341115156102b057600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600454905033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600390805190602001906103319291906104c8565b5034600481905550836003908051906020019061034f9291906104c8565b50600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415156103ce578173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156103cc573d6000803e3d6000fd5b505b600192505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b505050505081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050957805160ff1916838001178555610537565b82800160010185558215610537579182015b8281111561053657825182559160200191906001019061051b565b5b5090506105449190610548565b5090565b61056a91905b8082111561056657600081600090555060010161054e565b5090565b905600a165627a7a72305820d191a83e61f6375e4dd02cf7e28968f183bebaf0b0317e2a01c99dc81c31073a0029",
  "sourceMap": "26:763:0:-;;;182:100;8:9:-1;5:2;;;30:1;27;20:12;5:2;182:100:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;237:10;228:6;;:19;;;;;;;;;;;;;;;;;;266:11;253:10;:24;;;;182:100;26:763;;;;;;",
  "deployedSourceMap": "26:763:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;154:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;154:23:0;;;;;;;;;;;;;;;;;;;;;;;286:501;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;48:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;127:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;127:23:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;127:23:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;102:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;102:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;73:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;73:25:0;;;;;;;;;;;;;;;;;;;;;;;154:23;;;;:::o;286:501::-;333:12;480:21;520:19;373:3;360:10;;:16;352:25;;;;;;;;404:8;;391:9;:21;;388:384;;;423:8;;;388:384;504:6;;;;;;;;;;;480:30;;542:8;;520:30;;569:10;560:6;;:19;;;;;;;;;;;;;;;;;;601:2;589:9;:14;;;;;;;;;;;;:::i;:::-;;624:9;613:8;:20;;;;655:2;643:9;:14;;;;;;;;;;;;:::i;:::-;;695:1;670:27;;:13;:27;;;;667:77;;;709:13;:22;;:35;732:11;709:35;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;709:35:0;667:77;761:4;754:11;;286:501;;;;;:::o;48:21::-;;;;;;;;;;;;;:::o;127:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;102:21::-;;;;;;;;;;;;;:::o;73:25::-;;;;:::o;26:763::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.16;\n\ncontract AdSeller {\n  address public poster;\n  uint256 public bidDueTime;\n  address public winner;\n  string public adContent;\n  uint256 public bidValue;\n\n  constructor(uint256 _bidDueTime) public {\n    poster = msg.sender;\n    bidDueTime = _bidDueTime;\n  }\n\n  function bid(string ad) public payable returns(bool success){\n    require(bidDueTime > now);\n    \n    if(msg.value <= bidValue){\n        revert();\n        return false;\n    }\n    else {\n        address redeemaddress = winner;\n        uint256 redeemvalue = bidValue;\n        winner = msg.sender;\n        adContent = ad;\n        bidValue = msg.value;\n        adContent = ad;\n        if(redeemaddress != address(0))\n          redeemaddress.transfer(redeemvalue);\n        return true;\n    }\n        \n    }\n}",
  "sourcePath": "/Users/cheinpaopao/Desktop/ad-selling/contracts/AdSeller.sol",
  "ast": {
    "absolutePath": "/Users/cheinpaopao/Desktop/ad-selling/contracts/AdSeller.sol",
    "exportedSymbols": {
      "AdSeller": [
        93
      ]
    },
    "id": 94,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 93,
        "linearizedBaseContracts": [
          93
        ],
        "name": "AdSeller",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3,
            "name": "poster",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "48:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 2,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "48:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 5,
            "name": "bidDueTime",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "73:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "73:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7,
            "name": "winner",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "102:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "102:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9,
            "name": "adContent",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "127:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 8,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "127:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 11,
            "name": "bidValue",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "154:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "154:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25,
              "nodeType": "Block",
              "src": "222:60:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 19,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16,
                      "name": "poster",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "228:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 17,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "237:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 18,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "237:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "228:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 20,
                  "nodeType": "ExpressionStatement",
                  "src": "228:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 23,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21,
                      "name": "bidDueTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "253:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 22,
                      "name": "_bidDueTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "266:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "253:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 24,
                  "nodeType": "ExpressionStatement",
                  "src": "253:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 26,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "name": "_bidDueTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "194:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "194:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "193:21:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "222:0:0"
            },
            "scope": 93,
            "src": "182:100:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 91,
              "nodeType": "Block",
              "src": "346:441:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "bidDueTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "360:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "373:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "360:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 33,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        168,
                        169
                      ],
                      "referencedDeclaration": 168,
                      "src": "352:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "352:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "352:25:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 42,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 39,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "391:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 40,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "391:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 41,
                      "name": "bidValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "404:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "391:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 89,
                    "nodeType": "Block",
                    "src": "470:302:0",
                    "statements": [
                      {
                        "assignments": [
                          50
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 50,
                            "name": "redeemaddress",
                            "nodeType": "VariableDeclaration",
                            "scope": 92,
                            "src": "480:21:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 49,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "480:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 52,
                        "initialValue": {
                          "argumentTypes": null,
                          "id": 51,
                          "name": "winner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "504:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "480:30:0"
                      },
                      {
                        "assignments": [
                          54
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 54,
                            "name": "redeemvalue",
                            "nodeType": "VariableDeclaration",
                            "scope": 92,
                            "src": "520:19:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 53,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "520:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 56,
                        "initialValue": {
                          "argumentTypes": null,
                          "id": 55,
                          "name": "bidValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11,
                          "src": "542:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "520:30:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 60,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 57,
                            "name": "winner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "560:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 58,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 165,
                              "src": "569:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 59,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "569:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "560:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 61,
                        "nodeType": "ExpressionStatement",
                        "src": "560:19:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 64,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 62,
                            "name": "adContent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "589:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 63,
                            "name": "ad",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28,
                            "src": "601:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "589:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 65,
                        "nodeType": "ExpressionStatement",
                        "src": "589:14:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 66,
                            "name": "bidValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11,
                            "src": "613:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 67,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 165,
                              "src": "624:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 68,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "624:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "613:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 70,
                        "nodeType": "ExpressionStatement",
                        "src": "613:20:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 73,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "adContent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "643:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 72,
                            "name": "ad",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28,
                            "src": "655:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "643:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 74,
                        "nodeType": "ExpressionStatement",
                        "src": "643:14:0"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 75,
                            "name": "redeemaddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50,
                            "src": "670:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 77,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "695:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 76,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "687:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 78,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "687:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "670:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 86,
                        "nodeType": "IfStatement",
                        "src": "667:77:0",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 83,
                                "name": "redeemvalue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 54,
                                "src": "732:11:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 80,
                                "name": "redeemaddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "709:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 82,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "709:22:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                "typeString": "function (uint256)"
                              }
                            },
                            "id": 84,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "709:35:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 85,
                          "nodeType": "ExpressionStatement",
                          "src": "709:35:0"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 87,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "761:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 32,
                        "id": 88,
                        "nodeType": "Return",
                        "src": "754:11:0"
                      }
                    ]
                  },
                  "id": 90,
                  "nodeType": "IfStatement",
                  "src": "388:384:0",
                  "trueBody": {
                    "id": 48,
                    "nodeType": "Block",
                    "src": "413:47:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 43,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              170,
                              171
                            ],
                            "referencedDeclaration": 170,
                            "src": "423:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 44,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "423:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 45,
                        "nodeType": "ExpressionStatement",
                        "src": "423:8:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 46,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "448:5:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 32,
                        "id": 47,
                        "nodeType": "Return",
                        "src": "441:12:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 92,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "bid",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "ad",
                  "nodeType": "VariableDeclaration",
                  "scope": 92,
                  "src": "299:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "299:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "298:11:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 92,
                  "src": "333:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "333:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "332:14:0"
            },
            "scope": 93,
            "src": "286:501:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 94,
        "src": "26:763:0"
      }
    ],
    "src": "0:789:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/cheinpaopao/Desktop/ad-selling/contracts/AdSeller.sol",
    "exportedSymbols": {
      "AdSeller": [
        93
      ]
    },
    "id": 94,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 93,
        "linearizedBaseContracts": [
          93
        ],
        "name": "AdSeller",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3,
            "name": "poster",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "48:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 2,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "48:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 5,
            "name": "bidDueTime",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "73:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "73:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7,
            "name": "winner",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "102:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "102:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9,
            "name": "adContent",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "127:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 8,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "127:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 11,
            "name": "bidValue",
            "nodeType": "VariableDeclaration",
            "scope": 93,
            "src": "154:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "154:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25,
              "nodeType": "Block",
              "src": "222:60:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 19,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16,
                      "name": "poster",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "228:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 17,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "237:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 18,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "237:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "228:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 20,
                  "nodeType": "ExpressionStatement",
                  "src": "228:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 23,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21,
                      "name": "bidDueTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "253:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 22,
                      "name": "_bidDueTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "266:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "253:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 24,
                  "nodeType": "ExpressionStatement",
                  "src": "253:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 26,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "name": "_bidDueTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "194:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "194:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "193:21:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "222:0:0"
            },
            "scope": 93,
            "src": "182:100:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 91,
              "nodeType": "Block",
              "src": "346:441:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "bidDueTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "360:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "373:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "360:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 33,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        168,
                        169
                      ],
                      "referencedDeclaration": 168,
                      "src": "352:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "352:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "352:25:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 42,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 39,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "391:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 40,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "391:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 41,
                      "name": "bidValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "404:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "391:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 89,
                    "nodeType": "Block",
                    "src": "470:302:0",
                    "statements": [
                      {
                        "assignments": [
                          50
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 50,
                            "name": "redeemaddress",
                            "nodeType": "VariableDeclaration",
                            "scope": 92,
                            "src": "480:21:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 49,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "480:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 52,
                        "initialValue": {
                          "argumentTypes": null,
                          "id": 51,
                          "name": "winner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "504:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "480:30:0"
                      },
                      {
                        "assignments": [
                          54
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 54,
                            "name": "redeemvalue",
                            "nodeType": "VariableDeclaration",
                            "scope": 92,
                            "src": "520:19:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 53,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "520:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 56,
                        "initialValue": {
                          "argumentTypes": null,
                          "id": 55,
                          "name": "bidValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11,
                          "src": "542:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "520:30:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 60,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 57,
                            "name": "winner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "560:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 58,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 165,
                              "src": "569:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 59,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "569:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "560:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 61,
                        "nodeType": "ExpressionStatement",
                        "src": "560:19:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 64,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 62,
                            "name": "adContent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "589:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 63,
                            "name": "ad",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28,
                            "src": "601:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "589:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 65,
                        "nodeType": "ExpressionStatement",
                        "src": "589:14:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 66,
                            "name": "bidValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11,
                            "src": "613:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 67,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 165,
                              "src": "624:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 68,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "624:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "613:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 70,
                        "nodeType": "ExpressionStatement",
                        "src": "613:20:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 73,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "adContent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "643:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 72,
                            "name": "ad",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28,
                            "src": "655:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "643:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 74,
                        "nodeType": "ExpressionStatement",
                        "src": "643:14:0"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 75,
                            "name": "redeemaddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50,
                            "src": "670:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 77,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "695:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 76,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "687:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 78,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "687:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "670:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 86,
                        "nodeType": "IfStatement",
                        "src": "667:77:0",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 83,
                                "name": "redeemvalue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 54,
                                "src": "732:11:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 80,
                                "name": "redeemaddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "709:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 82,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "709:22:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                "typeString": "function (uint256)"
                              }
                            },
                            "id": 84,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "709:35:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 85,
                          "nodeType": "ExpressionStatement",
                          "src": "709:35:0"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 87,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "761:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 32,
                        "id": 88,
                        "nodeType": "Return",
                        "src": "754:11:0"
                      }
                    ]
                  },
                  "id": 90,
                  "nodeType": "IfStatement",
                  "src": "388:384:0",
                  "trueBody": {
                    "id": 48,
                    "nodeType": "Block",
                    "src": "413:47:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 43,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              170,
                              171
                            ],
                            "referencedDeclaration": 170,
                            "src": "423:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 44,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "423:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 45,
                        "nodeType": "ExpressionStatement",
                        "src": "423:8:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 46,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "448:5:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 32,
                        "id": 47,
                        "nodeType": "Return",
                        "src": "441:12:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 92,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "bid",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "ad",
                  "nodeType": "VariableDeclaration",
                  "scope": 92,
                  "src": "299:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "299:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "298:11:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 92,
                  "src": "333:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "333:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "332:14:0"
            },
            "scope": 93,
            "src": "286:501:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 94,
        "src": "26:763:0"
      }
    ],
    "src": "0:789:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2019-01-06T09:25:53.501Z"
}