window.BENCHMARK_DATA = {
  "lastUpdate": 1782515654869,
  "repoUrl": "https://github.com/NomicFoundation/edr",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Wodann@users.noreply.github.com",
            "name": "Wodann",
            "username": "Wodann"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68ede99d7a757a9d535897632023bcbee1a0a01f",
          "message": "ci: fix permission for post-regression run comment (#1513)",
          "timestamp": "2026-06-26T18:36:28Z",
          "tree_id": "0cd40380b0e9590939b93384221d1e73a72e1c41",
          "url": "https://github.com/NomicFoundation/edr/commit/68ede99d7a757a9d535897632023bcbee1a0a01f"
        },
        "date": 1782515654635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.278351893500002,
            "range": "± 0.00007437419835724895",
            "unit": "s",
            "extra": "{\"times\":[9.278299302999999,9.278404484000006],\"min\":9.278299302999999,\"max\":9.278404484000006,\"median\":9.278351893500002,\"mean\":9.278351893500002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.014400703000003,
            "range": "± 0.0005945650801150218",
            "unit": "s",
            "extra": "{\"times\":[4.013980281999997,4.014821124000009],\"min\":4.013980281999997,\"max\":4.014821124000009,\"median\":4.014400703000003,\"mean\":4.014400703000003}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.123621729499995,
            "range": "± 0.024225778843843356",
            "unit": "s",
            "extra": "{\"times\":[4.140751942000002,4.106491516999988],\"min\":4.106491516999988,\"max\":4.140751942000002,\"median\":4.123621729499995,\"mean\":4.123621729499995}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.279084335500002,
            "range": "± 0.046558171093697635",
            "unit": "s",
            "extra": "{\"times\":[9.312005934,9.246162737000006],\"min\":9.246162737000006,\"max\":9.312005934,\"median\":9.279084335500002,\"mean\":9.279084335500002}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5307435740400002,
            "range": "± 0.005088785874690569",
            "unit": "s",
            "extra": "{\"times\":[0.5271452590400001,0.5343418890400001],\"min\":0.5271452590400001,\"max\":0.5343418890400001,\"median\":0.5307435740400002,\"mean\":0.5307435740400002}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.57158366484,
            "range": "± 0.00011088282857139",
            "unit": "s",
            "extra": "{\"times\":[0.57166207084,0.57150525884],\"min\":0.57150525884,\"max\":0.57166207084,\"median\":0.57158366484,\"mean\":0.57158366484}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 239.05797731699994,
            "range": "± 0.07942441013758772",
            "unit": "s",
            "extra": "{\"times\":[239.11413885599998,239.00181577799992],\"min\":239.00181577799992,\"max\":239.11413885599998,\"median\":239.05797731699994,\"mean\":239.05797731699994}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.88061044549997,
            "range": "± 0.07392784921714461",
            "unit": "s",
            "extra": "{\"times\":[43.82833556199999,43.93288532899995],\"min\":43.82833556199999,\"max\":43.93288532899995,\"median\":43.88061044549997,\"mean\":43.88061044549997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.50852798549997,
            "range": "± 0.07204132792292703",
            "unit": "s",
            "extra": "{\"times\":[53.45758707399998,53.55946889699995],\"min\":53.45758707399998,\"max\":53.55946889699995,\"median\":53.50852798549997,\"mean\":53.50852798549997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.034941451,
            "range": "± 0.972551746492975",
            "unit": "s",
            "extra": "{\"times\":[239.722639386,238.347243516],\"min\":238.347243516,\"max\":239.722639386,\"median\":239.034941451,\"mean\":239.034941451}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5911858383,
            "range": "± 0.001974148087870945",
            "unit": "s",
            "extra": "{\"times\":[0.5897899048,0.5925817718],\"min\":0.5897899048,\"max\":0.5925817718,\"median\":0.5911858383,\"mean\":0.5911858383}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.6272358725666667,
            "range": "± 0.2329028237247151",
            "unit": "s",
            "extra": "{\"times\":[3.5672129029,3.7944196179,3.6936463199,3.6513588559,3.6015880139,3.5270821849000003,3.5029449109,3.7566010949,3.3988646269,4.3422267209,3.5515477929,3.4262864559,3.3934426789,3.5156643449000002,3.6856515669],\"min\":3.3934426789,\"max\":4.3422267209,\"median\":3.5672129029,\"mean\":3.6272358725666667}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.7834488220001,
            "range": "± 0.37465068367125703",
            "unit": "s",
            "extra": "{\"times\":[266.51853078299996,267.0483668610002],\"min\":266.51853078299996,\"max\":267.0483668610002,\"median\":266.7834488220001,\"mean\":266.7834488220001}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.280296872999985,
            "range": "± 0.020050219255637425",
            "unit": "s",
            "extra": "{\"times\":[3.294474518999923,3.2661192270000465],\"min\":3.2661192270000465,\"max\":3.294474518999923,\"median\":3.280296872999985,\"mean\":3.280296872999985}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.726844260499929,
            "range": "± 0.026267136724255086",
            "unit": "s",
            "extra": "{\"times\":[13.745417931000004,13.708270589999854],\"min\":13.708270589999854,\"max\":13.745417931000004,\"median\":13.726844260499929,\"mean\":13.726844260499929}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 269.4699786579999,
            "range": "± 5.325380668364087",
            "unit": "s",
            "extra": "{\"times\":[265.7043658749999,273.2355914409999],\"min\":265.7043658749999,\"max\":273.2355914409999,\"median\":269.4699786579999,\"mean\":269.4699786579999}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6652106073999999,
            "range": "± 0.014235934045362168",
            "unit": "s",
            "extra": "{\"times\":[0.6752769329,0.6551442819],\"min\":0.6551442819,\"max\":0.6752769329,\"median\":0.6652106073999999,\"mean\":0.6652106073999999}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.44272819306,
            "range": "± 0.014253654613501272",
            "unit": "s",
            "extra": "{\"times\":[2.43185330206,2.43966186706,2.46356703206,2.43583057106],\"min\":2.43185330206,\"max\":2.46356703206,\"median\":2.43774621906,\"mean\":2.44272819306}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 187.9130007374999,
            "range": "± 0.08852415669806367",
            "unit": "s",
            "extra": "{\"times\":[187.8504047059999,187.97559676899994],\"min\":187.8504047059999,\"max\":187.97559676899994,\"median\":187.9130007374999,\"mean\":187.9130007374999}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.6039933250001632,
            "range": "± 0.02524585745000852",
            "unit": "s",
            "extra": "{\"times\":[3.5861418080003933,3.621844841999933],\"min\":3.5861418080003933,\"max\":3.621844841999933,\"median\":3.6039933250001632,\"mean\":3.6039933250001632}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.02556877700006,
            "range": "± 0.15172606295772106",
            "unit": "s",
            "extra": "{\"times\":[32.91828224899992,33.132855305000206],\"min\":32.91828224899992,\"max\":33.132855305000206,\"median\":33.02556877700006,\"mean\":33.02556877700006}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 186.27570240000006,
            "range": "± 0.44190698818573526",
            "unit": "s",
            "extra": "{\"times\":[186.5881778279999,185.9632269720002],\"min\":185.9632269720002,\"max\":186.5881778279999,\"median\":186.27570240000006,\"mean\":186.27570240000006}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00128260504,
            "range": "± 0.003189435542133498",
            "unit": "s",
            "extra": "{\"times\":[1.00353787654,0.9990273335400001],\"min\":0.9990273335400001,\"max\":1.00353787654,\"median\":1.00128260504,\"mean\":1.00128260504}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.606198492434999,
            "range": "± 0.5247293240153403",
            "unit": "s",
            "extra": "{\"times\":[13.49957243156,12.68563662356,14.25000343956,12.787652855560001,12.96813064156,14.051014421560001,14.08596425456,12.96823023956,13.57756810356,14.03506239756,13.43172899356,14.293757706560001,12.85012871156,13.092960732560002,14.02825541456,13.994812605560002,12.983780555560001,13.537102051560002,13.76863140056,14.102261488560002,14.12005609056,13.45911714356,14.150448860560001,13.82688665456],\"min\":12.68563662356,\"max\":14.293757706560001,\"median\":13.67309975206,\"mean\":13.606198492434999}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7260744534998667,
            "range": "± 0.005745777876933989",
            "unit": "s",
            "extra": "{\"times\":[3.7301373319998383,3.722011574999895],\"min\":3.722011574999895,\"max\":3.7301373319998383,\"median\":3.7260744534998667,\"mean\":3.7260744534998667}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.311297178500099,
            "range": "± 0.016633873147336647",
            "unit": "s",
            "extra": "{\"times\":[3.2995352540002205,3.3230591029999776],\"min\":3.2995352540002205,\"max\":3.3230591029999776,\"median\":3.311297178500099,\"mean\":3.311297178500099}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.6187957564997486,
            "range": "± 0.22876817448778142",
            "unit": "s",
            "extra": "{\"times\":[3.457032228999771,3.780559283999726],\"min\":3.457032228999771,\"max\":3.780559283999726,\"median\":3.6187957564997486,\"mean\":3.6187957564997486}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.659632151500089,
            "range": "± 0.24583535489272673",
            "unit": "s",
            "extra": "{\"times\":[3.8334639980001377,3.4858003050000406],\"min\":3.4858003050000406,\"max\":3.8334639980001377,\"median\":3.659632151500089,\"mean\":3.659632151500089}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46279671026,
            "range": "± 0.00346094828265319",
            "unit": "s",
            "extra": "{\"times\":[0.46034945026,0.46524397026000003],\"min\":0.46034945026,\"max\":0.46524397026000003,\"median\":0.46279671026,\"mean\":0.46279671026}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5109912028800001,
            "range": "± 0.0009827469039880318",
            "unit": "s",
            "extra": "{\"times\":[0.51029629588,0.5116861098800001],\"min\":0.51029629588,\"max\":0.5116861098800001,\"median\":0.5109912028800001,\"mean\":0.5109912028800001}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.86069672299992,
            "range": "± 0.0715421748823295",
            "unit": "s",
            "extra": "{\"times\":[52.810108765999786,52.911284680000044],\"min\":52.810108765999786,\"max\":52.911284680000044,\"median\":52.86069672299992,\"mean\":52.86069672299992}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.481998991499888,
            "range": "± 0.03802760942973523",
            "unit": "s",
            "extra": "{\"times\":[3.4551094109998086,3.508888571999967],\"min\":3.4551094109998086,\"max\":3.508888571999967,\"median\":3.481998991499888,\"mean\":3.481998991499888}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.207649802499915,
            "range": "± 0.06988360147970755",
            "unit": "s",
            "extra": "{\"times\":[8.158234633999877,8.257064970999956],\"min\":8.158234633999877,\"max\":8.257064970999956,\"median\":8.207649802499915,\"mean\":8.207649802499915}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.16081037750002,
            "range": "± 0.12039229542862673",
            "unit": "s",
            "extra": "{\"times\":[52.075680168999824,52.245940586000216],\"min\":52.075680168999824,\"max\":52.245940586000216,\"median\":52.16081037750002,\"mean\":52.16081037750002}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.61852668246,
            "range": "± 0.0037559426251624903",
            "unit": "s",
            "extra": "{\"times\":[0.61587082996,0.62118253496],\"min\":0.61587082996,\"max\":0.62118253496,\"median\":0.61852668246,\"mean\":0.61852668246}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.228964352513334,
            "range": "± 0.07363493248543201",
            "unit": "s",
            "extra": "{\"times\":[3.21785422878,3.18773687278,3.33035949678,3.15207177278,3.20632626078,3.23149878678,3.20805823778,3.45191684478,3.22336883678,3.21483889378,3.15880053678,3.18516103478,3.22028169378,3.22061802178,3.22557376878],\"min\":3.15207177278,\"max\":3.45191684478,\"median\":3.21785422878,\"mean\":3.228964352513334}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.8945475675,
            "range": "± 0.39992914793612244",
            "unit": "s",
            "extra": "{\"times\":[181.17734017999982,180.61175495500024],\"min\":180.61175495500024,\"max\":181.17734017999982,\"median\":180.8945475675,\"mean\":180.8945475675}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.98651625100011,
            "range": "± 0.012384017849946692",
            "unit": "s",
            "extra": "{\"times\":[3.9777594280000774,3.9952730740001425],\"min\":3.9777594280000774,\"max\":3.9952730740001425,\"median\":3.98651625100011,\"mean\":3.98651625100011}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.877159400000004,
            "range": "± 0.10614260674159862",
            "unit": "s",
            "extra": "{\"times\":[27.952213556999805,27.802105243000202],\"min\":27.802105243000202,\"max\":27.952213556999805,\"median\":27.877159400000004,\"mean\":27.877159400000004}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.9451521279998,
            "range": "± 1.6869727935548209",
            "unit": "s",
            "extra": "{\"times\":[168.13802202999963,165.75228222599998],\"min\":165.75228222599998,\"max\":168.13802202999963,\"median\":166.9451521279998,\"mean\":166.9451521279998}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5601862008,
            "range": "± 0.0032368435162781414",
            "unit": "s",
            "extra": "{\"times\":[0.5578974068,0.5624749948],\"min\":0.5578974068,\"max\":0.5624749948,\"median\":0.5601862008,\"mean\":0.5601862008}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.071893104357778,
            "range": "± 0.11986435959977286",
            "unit": "s",
            "extra": "{\"times\":[6.95327634958,7.16898956558,6.95739731158,7.0638202215799994,7.19923859858,6.95095722758,7.28282083258,7.04649549758,7.02404233458],\"min\":6.95095722758,\"max\":7.28282083258,\"median\":7.04649549758,\"mean\":7.071893104357778}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.41667721900018,
            "range": "± 0.004333048531965153",
            "unit": "s",
            "extra": "{\"times\":[37.41361329100002,37.419741147000344],\"min\":37.41361329100002,\"max\":37.419741147000344,\"median\":37.41667721900018,\"mean\":37.41667721900018}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1783972195005044,
            "range": "± 0.007660989321596457",
            "unit": "s",
            "extra": "{\"times\":[3.183814357000403,3.1729800820006058],\"min\":3.1729800820006058,\"max\":3.183814357000403,\"median\":3.1783972195005044,\"mean\":3.1783972195005044}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.061310936999973,
            "range": "± 0.007521566956008419",
            "unit": "s",
            "extra": "{\"times\":[7.066629487999715,7.055992386000231],\"min\":7.055992386000231,\"max\":7.066629487999715,\"median\":7.061310936999973,\"mean\":7.061310936999973}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.15441297299974,
            "range": "± 0.0649283421143804",
            "unit": "s",
            "extra": "{\"times\":[35.10850170199946,35.200324244000015],\"min\":35.10850170199946,\"max\":35.200324244000015,\"median\":35.15441297299974,\"mean\":35.15441297299974}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.76071696976,
            "range": "± 0.008108726507160083",
            "unit": "s",
            "extra": "{\"times\":[0.75498323426,0.76645070526],\"min\":0.75498323426,\"max\":0.76645070526,\"median\":0.76071696976,\"mean\":0.76071696976}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.48252188926,
            "range": "± 0.08237983858994054",
            "unit": "s",
            "extra": "{\"times\":[40.42427054676,40.54077323176],\"min\":40.42427054676,\"max\":40.54077323176,\"median\":40.48252188926,\"mean\":40.48252188926}"
          }
        ]
      }
    ]
  }
}