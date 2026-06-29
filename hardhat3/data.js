window.BENCHMARK_DATA = {
  "lastUpdate": 1782725893788,
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
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d8e8840a714ce1c46d22a6b55d02c4ce2b478db8",
          "message": "chore(deps): update rust crate tower-http to 0.7 (#1519)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-29T07:57:37Z",
          "tree_id": "2d429ec043276da511c3e6e49a695f1e37365b00",
          "url": "https://github.com/NomicFoundation/edr/commit/d8e8840a714ce1c46d22a6b55d02c4ce2b478db8"
        },
        "date": 1782725893458,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.3043166745,
            "range": "± 0.005888317876143631",
            "unit": "s",
            "extra": "{\"times\":[9.300153004999997,9.308480344000003],\"min\":9.300153004999997,\"max\":9.308480344000003,\"median\":9.3043166745,\"mean\":9.3043166745}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9839159955000065,
            "range": "± 0.01357257878915414",
            "unit": "s",
            "extra": "{\"times\":[3.9935132580000063,3.974318733000007],\"min\":3.974318733000007,\"max\":3.9935132580000063,\"median\":3.9839159955000065,\"mean\":3.9839159955000065}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.099234848000004,
            "range": "± 0.010552062571766808",
            "unit": "s",
            "extra": "{\"times\":[4.106696283000005,4.091773413000003],\"min\":4.091773413000003,\"max\":4.106696283000005,\"median\":4.099234848000004,\"mean\":4.099234848000004}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.220123239500001,
            "range": "± 0.01808699879605096",
            "unit": "s",
            "extra": "{\"times\":[9.2073338,9.232912679000002],\"min\":9.2073338,\"max\":9.232912679000002,\"median\":9.220123239500001,\"mean\":9.220123239500001}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.53139055986,
            "range": "± 0.0020130849227770367",
            "unit": "s",
            "extra": "{\"times\":[0.52996709386,0.53281402586],\"min\":0.52996709386,\"max\":0.53281402586,\"median\":0.53139055986,\"mean\":0.53139055986}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.57864248226,
            "range": "± 0.0020341213495172934",
            "unit": "s",
            "extra": "{\"times\":[0.5772041412600001,0.5800808232600001],\"min\":0.5772041412600001,\"max\":0.5800808232600001,\"median\":0.57864248226,\"mean\":0.57864248226}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.56178153149997,
            "range": "± 0.5861957366672158",
            "unit": "s",
            "extra": "{\"times\":[238.976284512,238.14727855099994],\"min\":238.14727855099994,\"max\":238.976284512,\"median\":238.56178153149997,\"mean\":238.56178153149997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.94976248100001,
            "range": "± 0.11221075813596926",
            "unit": "s",
            "extra": "{\"times\":[43.870417492999984,44.02910746900004],\"min\":43.870417492999984,\"max\":44.02910746900004,\"median\":43.94976248100001,\"mean\":43.94976248100001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.43507486850003,
            "range": "± 0.01506828216540767",
            "unit": "s",
            "extra": "{\"times\":[53.44572975300002,53.42441998400004],\"min\":53.42441998400004,\"max\":53.44572975300002,\"median\":53.43507486850003,\"mean\":53.43507486850003}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.63365068900004,
            "range": "± 0.20122197210614104",
            "unit": "s",
            "extra": "{\"times\":[238.77593611,238.49136526800004],\"min\":238.49136526800004,\"max\":238.77593611,\"median\":238.63365068900004,\"mean\":238.63365068900004}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.59155833676,
            "range": "± 0.005765908499927686",
            "unit": "s",
            "extra": "{\"times\":[0.59563544976,0.58748122376],\"min\":0.58748122376,\"max\":0.59563544976,\"median\":0.59155833676,\"mean\":0.59155833676}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.503656729893334,
            "range": "± 0.08931934745140997",
            "unit": "s",
            "extra": "{\"times\":[3.48455363656,3.53471622956,3.49400784956,3.40644149956,3.62532054856,3.45620663456,3.39860546756,3.53131250456,3.46264609256,3.43070273556,3.42549282756,3.57738324456,3.52031127456,3.73235677056,3.47479363256],\"min\":3.39860546756,\"max\":3.73235677056,\"median\":3.48455363656,\"mean\":3.503656729893334}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.55737699400004,
            "range": "± 0.1146675299367813",
            "unit": "s",
            "extra": "{\"times\":[266.4762948059998,266.63845918200025],\"min\":266.4762948059998,\"max\":266.63845918200025,\"median\":266.55737699400004,\"mean\":266.55737699400004}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2955472090000986,
            "range": "± 0.011085006124222226",
            "unit": "s",
            "extra": "{\"times\":[3.3033854920000305,3.2877089260001666],\"min\":3.2877089260001666,\"max\":3.3033854920000305,\"median\":3.2955472090000986,\"mean\":3.2955472090000986}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.849885034000152,
            "range": "± 0.08362188932879769",
            "unit": "s",
            "extra": "{\"times\":[13.909014639000176,13.790755429000129],\"min\":13.790755429000129,\"max\":13.909014639000176,\"median\":13.849885034000152,\"mean\":13.849885034000152}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.90381457649994,
            "range": "± 0.2344775752562816",
            "unit": "s",
            "extra": "{\"times\":[265.7380138930001,266.06961525999986],\"min\":265.7380138930001,\"max\":266.06961525999986,\"median\":265.90381457649994,\"mean\":265.90381457649994}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66326175,
            "range": "± 0.001529508030152362",
            "unit": "s",
            "extra": "{\"times\":[0.6643432755,0.6621802245],\"min\":0.6621802245,\"max\":0.6643432755,\"median\":0.66326175,\"mean\":0.66326175}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.4402354380699998,
            "range": "± 0.019695025642685136",
            "unit": "s",
            "extra": "{\"times\":[2.42320419582,2.4284829118199998,2.4673010028199998,2.4419536418199996],\"min\":2.42320419582,\"max\":2.4673010028199998,\"median\":2.4352182768199997,\"mean\":2.4402354380699998}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 187.9251825629999,
            "range": "± 0.4502927216530732",
            "unit": "s",
            "extra": "{\"times\":[188.24358759999973,187.60677752600006],\"min\":187.60677752600006,\"max\":188.24358759999973,\"median\":187.9251825629999,\"mean\":187.9251825629999}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.603899259499973,
            "range": "± 0.020682086339958012",
            "unit": "s",
            "extra": "{\"times\":[3.618523703000043,3.589274815999903],\"min\":3.589274815999903,\"max\":3.618523703000043,\"median\":3.603899259499973,\"mean\":3.603899259499973}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.026840539,
            "range": "± 0.0982543483507371",
            "unit": "s",
            "extra": "{\"times\":[32.95736422300013,33.09631685499987],\"min\":32.95736422300013,\"max\":33.09631685499987,\"median\":33.026840539,\"mean\":33.026840539}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.64925330999984,
            "range": "± 1.428764114388264",
            "unit": "s",
            "extra": "{\"times\":[186.65954210399977,184.6389645159999],\"min\":184.6389645159999,\"max\":186.65954210399977,\"median\":185.64925330999984,\"mean\":185.64925330999984}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00884994366,
            "range": "± 0.0007247561664450165",
            "unit": "s",
            "extra": "{\"times\":[1.00936242366,1.00833746366],\"min\":1.00833746366,\"max\":1.00936242366,\"median\":1.00884994366,\"mean\":1.00884994366}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.643807440915,
            "range": "± 0.42974300004567256",
            "unit": "s",
            "extra": "{\"times\":[13.87880830554,14.50981248454,13.93359876454,14.009679157539999,14.02166651454,13.93396232054,13.48093069854,12.847954827539999,14.094530666539999,13.87793576554,13.216408052539999,14.03649718354,12.96881710654,13.42830075254,13.66791802154,13.66339821554,13.52989468254,13.85704482954,13.53241866454,12.972519070539999,13.81718022254,12.84488474754,13.50669404154,13.820523485539999],\"min\":12.84488474754,\"max\":14.50981248454,\"median\":13.74254912204,\"mean\":13.643807440915}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7312007630001753,
            "range": "± 0.001908213916344674",
            "unit": "s",
            "extra": "{\"times\":[3.732550074000377,3.7298514519999735],\"min\":3.7298514519999735,\"max\":3.732550074000377,\"median\":3.7312007630001753,\"mean\":3.7312007630001753}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3195767969998995,
            "range": "± 0.0010196055519334024",
            "unit": "s",
            "extra": "{\"times\":[3.3202977669998073,3.318855826999992],\"min\":3.318855826999992,\"max\":3.3202977669998073,\"median\":3.3195767969998995,\"mean\":3.3195767969998995}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4816302134997676,
            "range": "± 0.010750326120544587",
            "unit": "s",
            "extra": "{\"times\":[3.4740285849999637,3.4892318419995716],\"min\":3.4740285849999637,\"max\":3.4892318419995716,\"median\":3.4816302134997676,\"mean\":3.4816302134997676}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.6647907879997508,
            "range": "± 0.23778373291499114",
            "unit": "s",
            "extra": "{\"times\":[3.832929277999792,3.49665229799971],\"min\":3.49665229799971,\"max\":3.832929277999792,\"median\":3.6647907879997508,\"mean\":3.6647907879997508}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46947214486,
            "range": "± 0.002244555620491616",
            "unit": "s",
            "extra": "{\"times\":[0.47105928536,0.46788500436],\"min\":0.46788500436,\"max\":0.47105928536,\"median\":0.46947214486,\"mean\":0.46947214486}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5135543023,
            "range": "± 0.004724864177364739",
            "unit": "s",
            "extra": "{\"times\":[0.5102133188,0.5168952858],\"min\":0.5102133188,\"max\":0.5168952858,\"median\":0.5135543023,\"mean\":0.5135543023}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.843698142499896,
            "range": "± 0.04998580050487222",
            "unit": "s",
            "extra": "{\"times\":[52.80835284399986,52.87904344099993],\"min\":52.80835284399986,\"max\":52.87904344099993,\"median\":52.843698142499896,\"mean\":52.843698142499896}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.5183555854999,
            "range": "± 0.012025303287005807",
            "unit": "s",
            "extra": "{\"times\":[3.5268587589999663,3.509852411999833],\"min\":3.509852411999833,\"max\":3.5268587589999663,\"median\":3.5183555854999,\"mean\":3.5183555854999}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.179446953000035,
            "range": "± 0.04984544051579562",
            "unit": "s",
            "extra": "{\"times\":[8.144200904000085,8.214693001999985],\"min\":8.144200904000085,\"max\":8.214693001999985,\"median\":8.179446953000035,\"mean\":8.179446953000035}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.136187916999916,
            "range": "± 0.020043931662007946",
            "unit": "s",
            "extra": "{\"times\":[52.12201471700007,52.15036111699976],\"min\":52.12201471700007,\"max\":52.15036111699976,\"median\":52.136187916999916,\"mean\":52.136187916999916}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6195243853000001,
            "range": "± 0.0019502768700448531",
            "unit": "s",
            "extra": "{\"times\":[0.6209034393,0.6181453313],\"min\":0.6181453313,\"max\":0.6209034393,\"median\":0.6195243853000001,\"mean\":0.6195243853000001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.262432679426667,
            "range": "± 0.09150797618157484",
            "unit": "s",
            "extra": "{\"times\":[3.1419718895599997,3.2318667355599997,3.5094559945599997,3.30852561056,3.2201163995599997,3.29368950156,3.34065946556,3.2458865065599998,3.29719319556,3.12545763356,3.26949367656,3.23629519656,3.20440561356,3.20415821856,3.30731455356],\"min\":3.12545763356,\"max\":3.5094559945599997,\"median\":3.2458865065599998,\"mean\":3.262432679426667}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 181.02327433550008,
            "range": "± 0.09027379767608337",
            "unit": "s",
            "extra": "{\"times\":[181.0871075500003,180.95944112099986],\"min\":180.95944112099986,\"max\":181.0871075500003,\"median\":181.02327433550008,\"mean\":181.02327433550008}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9915286900002975,
            "range": "± 0.022826227140083186",
            "unit": "s",
            "extra": "{\"times\":[4.007669269999955,3.9753881100006403],\"min\":3.9753881100006403,\"max\":4.007669269999955,\"median\":3.9915286900002975,\"mean\":3.9915286900002975}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.924087159499756,
            "range": "± 0.003251075454573055",
            "unit": "s",
            "extra": "{\"times\":[27.926386016999835,27.92178830199968],\"min\":27.92178830199968,\"max\":27.926386016999835,\"median\":27.924087159499756,\"mean\":27.924087159499756}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.0240004459999,
            "range": "± 0.38876891201444846",
            "unit": "s",
            "extra": "{\"times\":[166.29890157999984,165.74909931199997],\"min\":165.74909931199997,\"max\":166.29890157999984,\"median\":166.0240004459999,\"mean\":166.0240004459999}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5596264606400001,
            "range": "± 0.0005584644504997312",
            "unit": "s",
            "extra": "{\"times\":[0.56002135464,0.5592315666400001],\"min\":0.5592315666400001,\"max\":0.56002135464,\"median\":0.5596264606400001,\"mean\":0.5596264606400001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.072664341820001,
            "range": "± 0.17952062888816323",
            "unit": "s",
            "extra": "{\"times\":[7.04312131382,6.9969963688200005,7.0695314508200005,7.53938445282,6.97946461582,6.99738586782,6.99942274882,6.95575451682,7.07291774082],\"min\":6.95575451682,\"max\":7.53938445282,\"median\":6.99942274882,\"mean\":7.072664341820001}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.58337617449975,
            "range": "± 0.3284140849426478",
            "unit": "s",
            "extra": "{\"times\":[37.35115234799962,37.815600000999865],\"min\":37.35115234799962,\"max\":37.815600000999865,\"median\":37.58337617449975,\"mean\":37.58337617449975}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1925285670002923,
            "range": "± 0.0013851274321600036",
            "unit": "s",
            "extra": "{\"times\":[3.19350800000038,3.1915491340002045],\"min\":3.1915491340002045,\"max\":3.19350800000038,\"median\":3.1925285670002923,\"mean\":3.1925285670002923}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.0515569874998185,
            "range": "± 0.02893504353808715",
            "unit": "s",
            "extra": "{\"times\":[7.0720171529995275,7.031096822000109],\"min\":7.031096822000109,\"max\":7.0720171529995275,\"median\":7.0515569874998185,\"mean\":7.0515569874998185}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.2647965845,
            "range": "± 0.01737381231001219",
            "unit": "s",
            "extra": "{\"times\":[35.27708172499947,35.252511444000525],\"min\":35.252511444000525,\"max\":35.27708172499947,\"median\":35.2647965845,\"mean\":35.2647965845}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7582836579000001,
            "range": "± 0.004262506852136729",
            "unit": "s",
            "extra": "{\"times\":[0.7612977054000001,0.7552696104000001],\"min\":0.7552696104000001,\"max\":0.7612977054000001,\"median\":0.7582836579000001,\"mean\":0.7582836579000001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.50240927282,
            "range": "± 0.0264662311236725",
            "unit": "s",
            "extra": "{\"times\":[40.48369482132,40.52112372432],\"min\":40.48369482132,\"max\":40.52112372432,\"median\":40.50240927282,\"mean\":40.50240927282}"
          }
        ]
      }
    ]
  }
}