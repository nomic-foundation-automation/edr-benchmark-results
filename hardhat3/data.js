window.BENCHMARK_DATA = {
  "lastUpdate": 1782946399112,
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
          "distinct": true,
          "id": "1cb0fd6e89eb8d8b820c1a7584daadad5cf64cce",
          "message": "chore(deps): update npm minor/patch (#1518)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-29T08:00:01Z",
          "tree_id": "ecac8572ea2778fd1506d70cf7f06cab29c84e73",
          "url": "https://github.com/NomicFoundation/edr/commit/1cb0fd6e89eb8d8b820c1a7584daadad5cf64cce"
        },
        "date": 1782731285367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.2950649595,
            "range": "± 0.009266468197354568",
            "unit": "s",
            "extra": "{\"times\":[9.288512577,9.301617341999998],\"min\":9.288512577,\"max\":9.301617341999998,\"median\":9.2950649595,\"mean\":9.2950649595}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.0144114605,
            "range": "± 0.013173394383754308",
            "unit": "s",
            "extra": "{\"times\":[4.005096464000002,4.023726456999997],\"min\":4.005096464000002,\"max\":4.023726456999997,\"median\":4.0144114605,\"mean\":4.0144114605}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.118354656499999,
            "range": "± 0.003718075642818107",
            "unit": "s",
            "extra": "{\"times\":[4.1157255799999986,4.120983733000001],\"min\":4.1157255799999986,\"max\":4.120983733000001,\"median\":4.118354656499999,\"mean\":4.118354656499999}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.250182830999998,
            "range": "± 0.028202556573620443",
            "unit": "s",
            "extra": "{\"times\":[9.270125050000003,9.230240611999994],\"min\":9.230240611999994,\"max\":9.270125050000003,\"median\":9.250182830999998,\"mean\":9.250182830999998}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5330527062,
            "range": "± 0.00029244097992242547",
            "unit": "s",
            "extra": "{\"times\":[0.5328459192,0.5332594932],\"min\":0.5328459192,\"max\":0.5332594932,\"median\":0.5330527062,\"mean\":0.5330527062}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5725837286000001,
            "range": "± 0.001952356471088386",
            "unit": "s",
            "extra": "{\"times\":[0.5739642531000001,0.5712032041],\"min\":0.5712032041,\"max\":0.5739642531000001,\"median\":0.5725837286000001,\"mean\":0.5725837286000001}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.44424754250002,
            "range": "± 0.6434509293440688",
            "unit": "s",
            "extra": "{\"times\":[238.899236058,237.98925902700006],\"min\":237.98925902700006,\"max\":238.899236058,\"median\":238.44424754250002,\"mean\":238.44424754250002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 44.02065512700003,
            "range": "± 0.1433372960021112",
            "unit": "s",
            "extra": "{\"times\":[43.919300353,44.12200990100007],\"min\":43.919300353,\"max\":44.12200990100007,\"median\":44.02065512700003,\"mean\":44.02065512700003}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.60283708199998,
            "range": "± 0.06628026946837175",
            "unit": "s",
            "extra": "{\"times\":[53.555969854000026,53.64970430999994],\"min\":53.555969854000026,\"max\":53.64970430999994,\"median\":53.60283708199998,\"mean\":53.60283708199998}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.84910807,
            "range": "± 0.026623052558512564",
            "unit": "s",
            "extra": "{\"times\":[238.867933411,238.83028272899998],\"min\":238.83028272899998,\"max\":238.867933411,\"median\":238.84910807,\"mean\":238.84910807}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5896411745800001,
            "range": "± 0.0008410837172315033",
            "unit": "s",
            "extra": "{\"times\":[0.58904643858,0.59023591058],\"min\":0.58904643858,\"max\":0.59023591058,\"median\":0.5896411745800001,\"mean\":0.5896411745800001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.5094891310266667,
            "range": "± 0.08788035333777748",
            "unit": "s",
            "extra": "{\"times\":[3.4266986503599997,3.56889671836,3.41045193536,3.44139159236,3.3855730823599997,3.60581639936,3.6328252173599997,3.44257287236,3.56352878736,3.5925669543599996,3.48840953736,3.49468734536,3.51482017336,3.4209984903599997,3.6530992093599997],\"min\":3.3855730823599997,\"max\":3.6530992093599997,\"median\":3.49468734536,\"mean\":3.5094891310266667}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 267.3722887130001,
            "range": "± 0.7420068467164468",
            "unit": "s",
            "extra": "{\"times\":[266.8476106400001,267.8969667860002],\"min\":266.8476106400001,\"max\":267.8969667860002,\"median\":267.3722887130001,\"mean\":267.3722887130001}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2833300874998095,
            "range": "± 0.009581064247019433",
            "unit": "s",
            "extra": "{\"times\":[3.290104922999861,3.276555251999758],\"min\":3.276555251999758,\"max\":3.290104922999861,\"median\":3.2833300874998095,\"mean\":3.2833300874998095}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.779358742499957,
            "range": "± 0.023284031405182464",
            "unit": "s",
            "extra": "{\"times\":[13.762894445999992,13.795823038999922],\"min\":13.762894445999992,\"max\":13.795823038999922,\"median\":13.779358742499957,\"mean\":13.779358742499957}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.5874357025001,
            "range": "± 0.06759499239961268",
            "unit": "s",
            "extra": "{\"times\":[265.53963882500005,265.6352325800001],\"min\":265.53963882500005,\"max\":265.6352325800001,\"median\":265.5874357025001,\"mean\":265.5874357025001}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66978804784,
            "range": "± 0.0008149561216667137",
            "unit": "s",
            "extra": "{\"times\":[0.66921178684,0.6703643088400001],\"min\":0.66921178684,\"max\":0.6703643088400001,\"median\":0.66978804784,\"mean\":0.66978804784}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.45047678257,
            "range": "± 0.03864293601258019",
            "unit": "s",
            "extra": "{\"times\":[2.42033877982,2.42011131782,2.46049075382,2.50096627882],\"min\":2.42011131782,\"max\":2.50096627882,\"median\":2.44041476682,\"mean\":2.45047678257}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 187.88614387849998,
            "range": "± 0.15667237317996655",
            "unit": "s",
            "extra": "{\"times\":[187.77535978099982,187.9969279760001],\"min\":187.77535978099982,\"max\":187.9969279760001,\"median\":187.88614387849998,\"mean\":187.88614387849998}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.6110053714998065,
            "range": "± 0.015195022570580407",
            "unit": "s",
            "extra": "{\"times\":[3.6217498749997468,3.6002608679998667],\"min\":3.6002608679998667,\"max\":3.6217498749997468,\"median\":3.6110053714998065,\"mean\":3.6110053714998065}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.09021748049976,
            "range": "± 0.07171901309588434",
            "unit": "s",
            "extra": "{\"times\":[33.14093048099987,33.03950447999966],\"min\":33.03950447999966,\"max\":33.14093048099987,\"median\":33.09021748049976,\"mean\":33.09021748049976}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.61186425250025,
            "range": "± 0.21669731160373895",
            "unit": "s",
            "extra": "{\"times\":[185.45863611400034,185.76509239100014],\"min\":185.45863611400034,\"max\":185.76509239100014,\"median\":185.61186425250025,\"mean\":185.61186425250025}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00281844618,
            "range": "± 0.008004845449936047",
            "unit": "s",
            "extra": "{\"times\":[1.0084787266800002,0.99715816568],\"min\":0.99715816568,\"max\":1.0084787266800002,\"median\":1.00281844618,\"mean\":1.00281844618}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.53106950644333,
            "range": "± 0.6695254562716749",
            "unit": "s",
            "extra": "{\"times\":[12.98034417736,12.75991751236,13.82475633336,14.24642608936,12.86907536036,14.35025301236,14.490335268359999,13.82287753936,12.51542207036,14.10487338736,12.94987550136,13.21295884336,14.19612627036,14.37864728836,12.95971013736,12.54933202636,13.021931519359999,12.91084082836,14.17290670936,13.47158299836,14.13684243536,13.60298064136,14.31774616736,12.89990603736],\"min\":12.51542207036,\"max\":14.490335268359999,\"median\":13.53728181986,\"mean\":13.53106950644333}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7175168890000787,
            "range": "± 0.008003709129185703",
            "unit": "s",
            "extra": "{\"times\":[3.7118574120001866,3.7231763659999704],\"min\":3.7118574120001866,\"max\":3.7231763659999704,\"median\":3.7175168890000787,\"mean\":3.7175168890000787}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3037328790000178,
            "range": "± 0.013840394775480335",
            "unit": "s",
            "extra": "{\"times\":[3.2939462419999765,3.3135195160000586],\"min\":3.2939462419999765,\"max\":3.3135195160000586,\"median\":3.3037328790000178,\"mean\":3.3037328790000178}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4768227405000944,
            "range": "± 0.017724445350412125",
            "unit": "s",
            "extra": "{\"times\":[3.4642896650000474,3.489355816000141],\"min\":3.4642896650000474,\"max\":3.489355816000141,\"median\":3.4768227405000944,\"mean\":3.4768227405000944}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.490339934499934,
            "range": "± 0.0043751022932347295",
            "unit": "s",
            "extra": "{\"times\":[3.4934335989998653,3.487246270000003],\"min\":3.487246270000003,\"max\":3.4934335989998653,\"median\":3.490339934499934,\"mean\":3.490339934499934}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4605740340200001,
            "range": "± 0.00037165178865773625",
            "unit": "s",
            "extra": "{\"times\":[0.46031123652000006,0.46083683152000005],\"min\":0.46031123652000006,\"max\":0.46083683152000005,\"median\":0.4605740340200001,\"mean\":0.4605740340200001}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5079324787400001,
            "range": "± 0.0012424912663483306",
            "unit": "s",
            "extra": "{\"times\":[0.50881105274,0.5070539047400001],\"min\":0.5070539047400001,\"max\":0.50881105274,\"median\":0.5079324787400001,\"mean\":0.5079324787400001}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.996257206500275,
            "range": "± 0.08329889497186352",
            "unit": "s",
            "extra": "{\"times\":[52.937355993000324,53.055158420000225],\"min\":52.937355993000324,\"max\":53.055158420000225,\"median\":52.996257206500275,\"mean\":52.996257206500275}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.5011025765000374,
            "range": "± 0.011760513010545197",
            "unit": "s",
            "extra": "{\"times\":[3.5094185150000268,3.4927866380000485],\"min\":3.4927866380000485,\"max\":3.5094185150000268,\"median\":3.5011025765000374,\"mean\":3.5011025765000374}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.177704088500235,
            "range": "± 0.025103786262992204",
            "unit": "s",
            "extra": "{\"times\":[8.195455146000254,8.159953031000216],\"min\":8.159953031000216,\"max\":8.195455146000254,\"median\":8.177704088500235,\"mean\":8.177704088500235}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.24333887350001,
            "range": "± 0.12686245258407053",
            "unit": "s",
            "extra": "{\"times\":[52.33304417400016,52.15363357299985],\"min\":52.15363357299985,\"max\":52.33304417400016,\"median\":52.24333887350001,\"mean\":52.24333887350001}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.62357022638,
            "range": "± 0.00674916452079814",
            "unit": "s",
            "extra": "{\"times\":[0.61879784638,0.6283426063800001],\"min\":0.61879784638,\"max\":0.6283426063800001,\"median\":0.62357022638,\"mean\":0.62357022638}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.2617095406666667,
            "range": "± 0.11763209023792258",
            "unit": "s",
            "extra": "{\"times\":[3.4361024366,3.1984174836,3.1897094896000002,3.2793083076,3.3252710486000003,3.2011882356,3.1733386316,3.2887293396,3.1848387696000002,3.1589021056,3.1895992456,3.3201875426000003,3.1474933516,3.2555911436000002,3.5769659786],\"min\":3.1474933516,\"max\":3.5769659786,\"median\":3.2011882356,\"mean\":3.2617095406666667}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 181.16734625900025,
            "range": "± 0.5746177788287439",
            "unit": "s",
            "extra": "{\"times\":[180.7610301310001,181.5736623870004],\"min\":180.7610301310001,\"max\":181.5736623870004,\"median\":181.16734625900025,\"mean\":181.16734625900025}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.984348103500204,
            "range": "± 0.008153678699491797",
            "unit": "s",
            "extra": "{\"times\":[3.9785825820001772,3.990113625000231],\"min\":3.9785825820001772,\"max\":3.990113625000231,\"median\":3.984348103500204,\"mean\":3.984348103500204}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.8391290800001,
            "range": "± 0.021721024898585826",
            "unit": "s",
            "extra": "{\"times\":[27.82376999599999,27.854488164000212],\"min\":27.82376999599999,\"max\":27.854488164000212,\"median\":27.8391290800001,\"mean\":27.8391290800001}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.14519814350012,
            "range": "± 0.8153332973730197",
            "unit": "s",
            "extra": "{\"times\":[166.7217258469998,165.5686704400005],\"min\":165.5686704400005,\"max\":166.7217258469998,\"median\":166.14519814350012,\"mean\":166.14519814350012}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.56028306262,
            "range": "± 0.002815351306148544",
            "unit": "s",
            "extra": "{\"times\":[0.5622738166200001,0.55829230862],\"min\":0.55829230862,\"max\":0.5622738166200001,\"median\":0.56028306262,\"mean\":0.56028306262}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.225543395795555,
            "range": "± 0.14630850687606903",
            "unit": "s",
            "extra": "{\"times\":[7.20970562024,7.47801229624,7.31379943324,6.98683615824,7.32699708024,7.2382667742399995,7.15913869824,7.06199641424,7.25513808724],\"min\":6.98683615824,\"max\":7.47801229624,\"median\":7.2382667742399995,\"mean\":7.225543395795555}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.384045254,
            "range": "± 0.06965592228769106",
            "unit": "s",
            "extra": "{\"times\":[37.33479107900057,37.433299428999426],\"min\":37.33479107900057,\"max\":37.433299428999426,\"median\":37.384045254,\"mean\":37.384045254}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.2143730744998904,
            "range": "± 0.003015611724816051",
            "unit": "s",
            "extra": "{\"times\":[3.2165054339999335,3.2122407149998473],\"min\":3.2122407149998473,\"max\":3.2165054339999335,\"median\":3.2143730744998904,\"mean\":3.2143730744998904}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.2866919064996765,
            "range": "± 0.3765693479184538",
            "unit": "s",
            "extra": "{\"times\":[7.5529666459998115,7.020417166999541],\"min\":7.020417166999541,\"max\":7.5529666459998115,\"median\":7.2866919064996765,\"mean\":7.2866919064996765}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.23957011500001,
            "range": "± 0.027444521133488213",
            "unit": "s",
            "extra": "{\"times\":[35.2201639080001,35.25897632199992],\"min\":35.2201639080001,\"max\":35.25897632199992,\"median\":35.23957011500001,\"mean\":35.23957011500001}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.75911956296,
            "range": "± 0.009407287805722706",
            "unit": "s",
            "extra": "{\"times\":[0.76577151996,0.75246760596],\"min\":0.75246760596,\"max\":0.76577151996,\"median\":0.75911956296,\"mean\":0.75911956296}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.54790048316,
            "range": "± 0.01929086435447613",
            "unit": "s",
            "extra": "{\"times\":[40.53425978216,40.56154118416],\"min\":40.53425978216,\"max\":40.56154118416,\"median\":40.54790048316,\"mean\":40.54790048316}"
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
          "distinct": true,
          "id": "1c1a444a594871e05f3a9a989f7a3f83181aab8f",
          "message": "chore(deps): update taiki-e/install-action action to v2.82.2 (#1520)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-29T08:59:14Z",
          "tree_id": "7ede03752c561dec23300b5608eea32df1c5aa9f",
          "url": "https://github.com/NomicFoundation/edr/commit/1c1a444a594871e05f3a9a989f7a3f83181aab8f"
        },
        "date": 1782736685346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.288807298500004,
            "range": "± 0.022598289148333735",
            "unit": "s",
            "extra": "{\"times\":[9.304786702000005,9.272827895000002],\"min\":9.272827895000002,\"max\":9.304786702000005,\"median\":9.288807298500004,\"mean\":9.288807298500004}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9993205560000025,
            "range": "± 0.002962384261798537",
            "unit": "s",
            "extra": "{\"times\":[3.9972258340000044,4.0014152780000005],\"min\":3.9972258340000044,\"max\":4.0014152780000005,\"median\":3.9993205560000025,\"mean\":3.9993205560000025}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.135474350000001,
            "range": "± 0.0049741567943976835",
            "unit": "s",
            "extra": "{\"times\":[4.138991610000004,4.131957089999997],\"min\":4.131957089999997,\"max\":4.138991610000004,\"median\":4.135474350000001,\"mean\":4.135474350000001}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.240596337500007,
            "range": "± 0.037323322590287256",
            "unit": "s",
            "extra": "{\"times\":[9.214204763000001,9.266987912000012],\"min\":9.214204763000001,\"max\":9.266987912000012,\"median\":9.240596337500007,\"mean\":9.240596337500007}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5298036693,
            "range": "± 0.0014524482402453874",
            "unit": "s",
            "extra": "{\"times\":[0.5287766333,0.5308307053],\"min\":0.5287766333,\"max\":0.5308307053,\"median\":0.5298036693,\"mean\":0.5298036693}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.57548992426,
            "range": "± 0.005026714627224427",
            "unit": "s",
            "extra": "{\"times\":[0.5719355002600001,0.5790443482600001],\"min\":0.5719355002600001,\"max\":0.5790443482600001,\"median\":0.57548992426,\"mean\":0.57548992426}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.61394970700002,
            "range": "± 0.4524980038560857",
            "unit": "s",
            "extra": "{\"times\":[238.2939853,238.93391411400003],\"min\":238.2939853,\"max\":238.93391411400003,\"median\":238.61394970700002,\"mean\":238.61394970700002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 44.502083541500035,
            "range": "± 0.7430073101808183",
            "unit": "s",
            "extra": "{\"times\":[43.976698034,45.02746904900007],\"min\":43.976698034,\"max\":45.02746904900007,\"median\":44.502083541500035,\"mean\":44.502083541500035}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.72132668449997,
            "range": "± 0.10129773523001376",
            "unit": "s",
            "extra": "{\"times\":[53.64969836899999,53.79295499999996],\"min\":53.64969836899999,\"max\":53.79295499999996,\"median\":53.72132668449997,\"mean\":53.72132668449997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.96787233900005,
            "range": "± 0.4402748697694465",
            "unit": "s",
            "extra": "{\"times\":[238.65655099300005,239.27919368500005],\"min\":238.65655099300005,\"max\":239.27919368500005,\"median\":238.96787233900005,\"mean\":238.96787233900005}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5879164936800001,
            "range": "± 0.0031948060181366286",
            "unit": "s",
            "extra": "{\"times\":[0.58565742468,0.59017556268],\"min\":0.58565742468,\"max\":0.59017556268,\"median\":0.5879164936800001,\"mean\":0.5879164936800001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.5315038931,
            "range": "± 0.09766016290008599",
            "unit": "s",
            "extra": "{\"times\":[3.7306440664999996,3.6371005944999997,3.4606738265,3.4360879625,3.3973920174999996,3.4304505704999997,3.5899923465,3.4656939964999998,3.5405796465,3.5467724924999997,3.6097008455,3.4249278285,3.6400255715,3.4920083015,3.5705083295],\"min\":3.3973920174999996,\"max\":3.7306440664999996,\"median\":3.5405796465,\"mean\":3.5315038931}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.8687454880001,
            "range": "± 0.28601919877024023",
            "unit": "s",
            "extra": "{\"times\":[267.0709916030001,266.66649937300014],\"min\":266.66649937300014,\"max\":267.0709916030001,\"median\":266.8687454880001,\"mean\":266.8687454880001}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.267171929499833,
            "range": "± 0.009983201530338456",
            "unit": "s",
            "extra": "{\"times\":[3.274231118999887,3.2601127399997787],\"min\":3.2601127399997787,\"max\":3.274231118999887,\"median\":3.267171929499833,\"mean\":3.267171929499833}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.756452001000174,
            "range": "± 0.007727912028886562",
            "unit": "s",
            "extra": "{\"times\":[13.761916460000212,13.750987542000134],\"min\":13.750987542000134,\"max\":13.761916460000212,\"median\":13.756452001000174,\"mean\":13.756452001000174}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.6928981540001,
            "range": "± 0.020066566150223182",
            "unit": "s",
            "extra": "{\"times\":[265.707087359,265.6787089490001],\"min\":265.6787089490001,\"max\":265.707087359,\"median\":265.6928981540001,\"mean\":265.6928981540001}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6607550584000002,
            "range": "± 0.013367733490178868",
            "unit": "s",
            "extra": "{\"times\":[0.6702074734000001,0.6513026434000001],\"min\":0.6513026434000001,\"max\":0.6702074734000001,\"median\":0.6607550584000002,\"mean\":0.6607550584000002}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.4678386752700003,
            "range": "± 0.05045134886553956",
            "unit": "s",
            "extra": "{\"times\":[2.4165580695199997,2.43587199652,2.52557739652,2.49334723852],\"min\":2.4165580695199997,\"max\":2.52557739652,\"median\":2.46460961752,\"mean\":2.4678386752700003}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 189.4380558849997,
            "range": "± 0.08431304519508859",
            "unit": "s",
            "extra": "{\"times\":[189.49767421099963,189.37843755899976],\"min\":189.37843755899976,\"max\":189.49767421099963,\"median\":189.4380558849997,\"mean\":189.4380558849997}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.610500834000064,
            "range": "± 0.01034583770771462",
            "unit": "s",
            "extra": "{\"times\":[3.6178164460002447,3.6031852219998837],\"min\":3.6031852219998837,\"max\":3.6178164460002447,\"median\":3.610500834000064,\"mean\":3.610500834000064}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.00704835349997,
            "range": "± 0.09703154223034281",
            "unit": "s",
            "extra": "{\"times\":[32.938436691999904,33.07566001500003],\"min\":32.938436691999904,\"max\":33.07566001500003,\"median\":33.00704835349997,\"mean\":33.00704835349997}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.32311708250012,
            "range": "± 0.4603062099812187",
            "unit": "s",
            "extra": "{\"times\":[184.99763144000013,185.64860272500013],\"min\":184.99763144000013,\"max\":185.64860272500013,\"median\":185.32311708250012,\"mean\":185.32311708250012}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0215739246000002,
            "range": "± 0.02310920066779713",
            "unit": "s",
            "extra": "{\"times\":[1.0379145971000001,1.0052332521],\"min\":1.0052332521,\"max\":1.0379145971000001,\"median\":1.0215739246000002,\"mean\":1.0215739246000002}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.644141251468332,
            "range": "± 0.49424003633621505",
            "unit": "s",
            "extra": "{\"times\":[13.17462742176,13.74467736876,13.25293947476,13.73973234076,14.12830870976,13.55523675776,13.15936923876,13.56923222376,13.92800515076,13.56060981776,13.339838779759999,13.94571837076,14.18202085676,14.12959030876,13.81806496176,14.12191850576,13.95058103676,13.88875007576,12.50618809276,13.44045865076,14.21027442776,12.56260451976,14.35549847076,13.19514447276],\"min\":12.50618809276,\"max\":14.35549847076,\"median\":13.74220485476,\"mean\":13.644141251468332}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7383861439998727,
            "range": "± 0.01221396715453029",
            "unit": "s",
            "extra": "{\"times\":[3.7297495649997146,3.747022723000031],\"min\":3.7297495649997146,\"max\":3.747022723000031,\"median\":3.7383861439998727,\"mean\":3.7383861439998727}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.334350242999848,
            "range": "± 0.025908859153174386",
            "unit": "s",
            "extra": "{\"times\":[3.3526705729998647,3.316029912999831],\"min\":3.316029912999831,\"max\":3.3526705729998647,\"median\":3.334350242999848,\"mean\":3.334350242999848}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.6607391664998143,
            "range": "± 0.2554141613473944",
            "unit": "s",
            "extra": "{\"times\":[3.8413442519996317,3.4801340809999965],\"min\":3.4801340809999965,\"max\":3.8413442519996317,\"median\":3.6607391664998143,\"mean\":3.6607391664998143}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.6687900325001683,
            "range": "± 0.24583836009671",
            "unit": "s",
            "extra": "{\"times\":[3.8426240040003323,3.4949560610000043],\"min\":3.4949560610000043,\"max\":3.8426240040003323,\"median\":3.6687900325001683,\"mean\":3.6687900325001683}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4696612267200001,
            "range": "± 0.00040631557728507004",
            "unit": "s",
            "extra": "{\"times\":[0.4693739182200001,0.4699485352200001],\"min\":0.4693739182200001,\"max\":0.4699485352200001,\"median\":0.4696612267200001,\"mean\":0.4696612267200001}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50782456868,
            "range": "± 0.003401378071872102",
            "unit": "s",
            "extra": "{\"times\":[0.50541943118,0.51022970618],\"min\":0.50541943118,\"max\":0.51022970618,\"median\":0.50782456868,\"mean\":0.50782456868}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.08151518150024,
            "range": "± 0.09044785625262877",
            "unit": "s",
            "extra": "{\"times\":[53.14547147400025,53.01755888900021],\"min\":53.01755888900021,\"max\":53.14547147400025,\"median\":53.08151518150024,\"mean\":53.08151518150024}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.484480023500277,
            "range": "± 0.005923360674172226",
            "unit": "s",
            "extra": "{\"times\":[3.4886684720003975,3.4802915750001557],\"min\":3.4802915750001557,\"max\":3.4886684720003975,\"median\":3.484480023500277,\"mean\":3.484480023500277}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.155206576499856,
            "range": "± 0.018343564006471993",
            "unit": "s",
            "extra": "{\"times\":[8.168177434999961,8.14223571799975],\"min\":8.14223571799975,\"max\":8.168177434999961,\"median\":8.155206576499856,\"mean\":8.155206576499856}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.1936720230002,
            "range": "± 0.13877032806195364",
            "unit": "s",
            "extra": "{\"times\":[52.291797463000286,52.09554658300011],\"min\":52.09554658300011,\"max\":52.291797463000286,\"median\":52.1936720230002,\"mean\":52.1936720230002}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6210009357999999,
            "range": "± 0.004313291968268347",
            "unit": "s",
            "extra": "{\"times\":[0.6240508938,0.6179509778],\"min\":0.6179509778,\"max\":0.6240508938,\"median\":0.6210009357999999,\"mean\":0.6210009357999999}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.2600350577666664,
            "range": "± 0.09244374351295677",
            "unit": "s",
            "extra": "{\"times\":[3.1707433279,3.3018539829,3.1938481519,3.5517093859,3.2313354829,3.3166599859,3.2391046789,3.2527617389,3.2083687749,3.2140404569,3.2840004919,3.1922961819,3.2676720059,3.2879299889,3.1882012309],\"min\":3.1707433279,\"max\":3.5517093859,\"median\":3.2391046789,\"mean\":3.2600350577666664}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.670967497,
            "range": "± 0.2555989969392852",
            "unit": "s",
            "extra": "{\"times\":[180.49023171299976,180.85170328100025],\"min\":180.49023171299976,\"max\":180.85170328100025,\"median\":180.670967497,\"mean\":180.670967497}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.977936599999666,
            "range": "± 0.019141507846461688",
            "unit": "s",
            "extra": "{\"times\":[3.9914716900000347,3.9644015099992975],\"min\":3.9644015099992975,\"max\":3.9914716900000347,\"median\":3.977936599999666,\"mean\":3.977936599999666}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.882697129499867,
            "range": "± 0.043191095478591575",
            "unit": "s",
            "extra": "{\"times\":[27.913237845999653,27.852156413000078],\"min\":27.852156413000078,\"max\":27.913237845999653,\"median\":27.882697129499867,\"mean\":27.882697129499867}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.11609964250027,
            "range": "± 0.11636892289705142",
            "unit": "s",
            "extra": "{\"times\":[166.0338143880004,166.19838489700015],\"min\":166.0338143880004,\"max\":166.19838489700015,\"median\":166.11609964250027,\"mean\":166.11609964250027}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55588231012,
            "range": "± 0.00030103939838168134",
            "unit": "s",
            "extra": "{\"times\":[0.55566944312,0.55609517712],\"min\":0.55566944312,\"max\":0.55609517712,\"median\":0.55588231012,\"mean\":0.55588231012}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.0808202477222215,
            "range": "± 0.07959578044832698",
            "unit": "s",
            "extra": "{\"times\":[7.1375431725,7.087236520499999,6.8980517525,7.0738690815,7.1879303785,7.0793800125,7.0555455215,7.0840056234999995,7.1238201665],\"min\":6.8980517525,\"max\":7.1879303785,\"median\":7.0840056234999995,\"mean\":7.0808202477222215}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.24434712000005,
            "range": "± 1.070235865550117",
            "unit": "s",
            "extra": "{\"times\":[37.48757608200051,39.00111815799959],\"min\":37.48757608200051,\"max\":39.00111815799959,\"median\":38.24434712000005,\"mean\":38.24434712000005}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.198431239999831,
            "range": "± 0.007508191325019352",
            "unit": "s",
            "extra": "{\"times\":[3.1931221469994635,3.203740333000198],\"min\":3.1931221469994635,\"max\":3.203740333000198,\"median\":3.198431239999831,\"mean\":3.198431239999831}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.040037312499713,
            "range": "± 0.0446377836273222",
            "unit": "s",
            "extra": "{\"times\":[7.008473632999696,7.0716009919997305],\"min\":7.008473632999696,\"max\":7.0716009919997305,\"median\":7.040037312499713,\"mean\":7.040037312499713}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.14797024550009,
            "range": "± 0.03804117173800549",
            "unit": "s",
            "extra": "{\"times\":[35.17486941600032,35.12107107499987],\"min\":35.12107107499987,\"max\":35.17486941600032,\"median\":35.14797024550009,\"mean\":35.14797024550009}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7614516498000001,
            "range": "± 0.002700787279674232",
            "unit": "s",
            "extra": "{\"times\":[0.7595419048000001,0.7633613948000001],\"min\":0.7595419048000001,\"max\":0.7633613948000001,\"median\":0.7614516498000001,\"mean\":0.7614516498000001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.605335813699995,
            "range": "± 0.06343064328238691",
            "unit": "s",
            "extra": "{\"times\":[40.5604835757,40.6501880517],\"min\":40.5604835757,\"max\":40.6501880517,\"median\":40.605335813699995,\"mean\":40.605335813699995}"
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
          "distinct": true,
          "id": "50a0c7435689a55638b325e4d818ec0a1075c39e",
          "message": "chore(deps): update dependency syncpack to v15 (#1522)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-29T11:32:03Z",
          "tree_id": "388c4639082487fac5e463b73d77f34b1a354c2e",
          "url": "https://github.com/NomicFoundation/edr/commit/50a0c7435689a55638b325e4d818ec0a1075c39e"
        },
        "date": 1782742684524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.289518144499997,
            "range": "± 0.008107733729240998",
            "unit": "s",
            "extra": "{\"times\":[9.295251178,9.283785110999997],\"min\":9.283785110999997,\"max\":9.295251178,\"median\":9.289518144499997,\"mean\":9.289518144499997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.021618577999998,
            "range": "± 0.03305845965835379",
            "unit": "s",
            "extra": "{\"times\":[4.044994439000002,3.998242716999994],\"min\":3.998242716999994,\"max\":4.044994439000002,\"median\":4.021618577999998,\"mean\":4.021618577999998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.114613925999999,
            "range": "± 0.0010641150955090755",
            "unit": "s",
            "extra": "{\"times\":[4.113861483000001,4.115366368999996],\"min\":4.113861483000001,\"max\":4.115366368999996,\"median\":4.114613925999999,\"mean\":4.114613925999999}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.259280261,
            "range": "± 0.011780172700396692",
            "unit": "s",
            "extra": "{\"times\":[9.250950421,9.267610100999999],\"min\":9.250950421,\"max\":9.267610100999999,\"median\":9.259280261,\"mean\":9.259280261}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5287463639800001,
            "range": "± 0.002141028823764865",
            "unit": "s",
            "extra": "{\"times\":[0.52723242798,0.53026029998],\"min\":0.52723242798,\"max\":0.53026029998,\"median\":0.5287463639800001,\"mean\":0.5287463639800001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5756856268,
            "range": "± 0.0021806911502283465",
            "unit": "s",
            "extra": "{\"times\":[0.5772276083,0.5741436453000001],\"min\":0.5741436453000001,\"max\":0.5772276083,\"median\":0.5756856268,\"mean\":0.5756856268}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.632944834,
            "range": "± 0.2593420765846406",
            "unit": "s",
            "extra": "{\"times\":[238.44956229299999,238.816327375],\"min\":238.44956229299999,\"max\":238.816327375,\"median\":238.632944834,\"mean\":238.632944834}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.80816161449999,
            "range": "± 0.001216620350584641",
            "unit": "s",
            "extra": "{\"times\":[43.809021895000015,43.80730133399996],\"min\":43.80730133399996,\"max\":43.809021895000015,\"median\":43.80816161449999,\"mean\":43.80816161449999}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.35291088750001,
            "range": "± 0.10920662982529719",
            "unit": "s",
            "extra": "{\"times\":[53.27569013900001,53.430131636000006],\"min\":53.27569013900001,\"max\":53.430131636000006,\"median\":53.35291088750001,\"mean\":53.35291088750001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.958775092,
            "range": "± 0.8637171106959952",
            "unit": "s",
            "extra": "{\"times\":[238.348034866,239.569515318],\"min\":238.348034866,\"max\":239.569515318,\"median\":238.958775092,\"mean\":238.958775092}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5859435230800001,
            "range": "± 0.0005521004894690263",
            "unit": "s",
            "extra": "{\"times\":[0.5855531290800001,0.58633391708],\"min\":0.5855531290800001,\"max\":0.58633391708,\"median\":0.5859435230800001,\"mean\":0.5859435230800001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.5148267281066667,
            "range": "± 0.12253200279200473",
            "unit": "s",
            "extra": "{\"times\":[3.80358277724,3.6420700882399997,3.3974161272399996,3.6307489872399996,3.5453593522399998,3.4106990062399998,3.66191602524,3.4595283222399997,3.40496409524,3.46210885924,3.4182727052399997,3.54676764524,3.5036071072399997,3.45470946924,3.3806503542399997],\"min\":3.3806503542399997,\"max\":3.80358277724,\"median\":3.46210885924,\"mean\":3.5148267281066667}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 267.0206573389998,
            "range": "± 0.376698831190685",
            "unit": "s",
            "extra": "{\"times\":[266.7542910409998,267.2870236369998],\"min\":266.7542910409998,\"max\":267.2870236369998,\"median\":267.0206573389998,\"mean\":267.0206573389998}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.270351963500143,
            "range": "± 0.0018611849509223828",
            "unit": "s",
            "extra": "{\"times\":[3.2716680199999826,3.2690359070003034],\"min\":3.2690359070003034,\"max\":3.2716680199999826,\"median\":3.270351963500143,\"mean\":3.270351963500143}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.781453987499932,
            "range": "± 0.04846497079607403",
            "unit": "s",
            "extra": "{\"times\":[13.74718407800002,13.815723896999843],\"min\":13.74718407800002,\"max\":13.815723896999843,\"median\":13.781453987499932,\"mean\":13.781453987499932}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.481527979,
            "range": "± 0.015987302484934577",
            "unit": "s",
            "extra": "{\"times\":[265.49283270899997,265.470223249],\"min\":265.470223249,\"max\":265.49283270899997,\"median\":265.481527979,\"mean\":265.481527979}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6681971853399999,
            "range": "± 0.0030873385153183386",
            "unit": "s",
            "extra": "{\"times\":[0.67038026334,0.66601410734],\"min\":0.66601410734,\"max\":0.67038026334,\"median\":0.6681971853399999,\"mean\":0.6681971853399999}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.4647884864200003,
            "range": "± 0.024720016831863915",
            "unit": "s",
            "extra": "{\"times\":[2.45546379092,2.49766349392,2.4390811189200003,2.46694554192],\"min\":2.4390811189200003,\"max\":2.49766349392,\"median\":2.46120466642,\"mean\":2.4647884864200003}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 187.8684401730001,
            "range": "± 0.022949514036168395",
            "unit": "s",
            "extra": "{\"times\":[187.85221241600019,187.88466793],\"min\":187.85221241600019,\"max\":187.88466793,\"median\":187.8684401730001,\"mean\":187.8684401730001}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.616474819000112,
            "range": "± 0.006120388200511065",
            "unit": "s",
            "extra": "{\"times\":[3.6208025870001874,3.6121470510000364],\"min\":3.6121470510000364,\"max\":3.6208025870001874,\"median\":3.616474819000112,\"mean\":3.616474819000112}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 32.98955085400003,
            "range": "± 0.0963402795907709",
            "unit": "s",
            "extra": "{\"times\":[32.92142798899999,33.05767371900007],\"min\":32.92142798899999,\"max\":33.05767371900007,\"median\":32.98955085400003,\"mean\":32.98955085400003}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 184.84696154850002,
            "range": "± 0.5480184405100155",
            "unit": "s",
            "extra": "{\"times\":[185.2344691039999,184.4594539930001],\"min\":184.4594539930001,\"max\":185.2344691039999,\"median\":184.84696154850002,\"mean\":184.84696154850002}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 0.9956254224400001,
            "range": "± 0.005003561122781273",
            "unit": "s",
            "extra": "{\"times\":[0.9991634744400001,0.9920873704400001],\"min\":0.9920873704400001,\"max\":0.9991634744400001,\"median\":0.9956254224400001,\"mean\":0.9956254224400001}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.741912112696669,
            "range": "± 0.48216502994661964",
            "unit": "s",
            "extra": "{\"times\":[14.05488770128,13.07053109828,12.66955323928,13.80328847828,14.26031575228,13.43622851628,14.295295213280001,13.60714325928,14.279613451280001,13.13006296728,13.431024289280002,14.30910585628,14.312814966280001,14.027262501280001,13.77126496728,14.07820257128,13.61867795228,14.05767145028,14.117455108280001,14.00691477328,12.86196949928,13.24625496328,13.70474692828,13.65560520128],\"min\":12.66955323928,\"max\":14.312814966280001,\"median\":13.78727672278,\"mean\":13.741912112696669}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7165134135000404,
            "range": "± 0.01171265885214062",
            "unit": "s",
            "extra": "{\"times\":[3.7082313129999673,3.724795514000114],\"min\":3.7082313129999673,\"max\":3.724795514000114,\"median\":3.7165134135000404,\"mean\":3.7165134135000404}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.2994151000001004,
            "range": "± 0.025137834161569228",
            "unit": "s",
            "extra": "{\"times\":[3.3171902330000886,3.2816399670001117],\"min\":3.2816399670001117,\"max\":3.3171902330000886,\"median\":3.2994151000001004,\"mean\":3.2994151000001004}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.49246219599992,
            "range": "± 0.028575067497250792",
            "unit": "s",
            "extra": "{\"times\":[3.5126678200000896,3.472256571999751],\"min\":3.472256571999751,\"max\":3.5126678200000896,\"median\":3.49246219599992,\"mean\":3.49246219599992}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4720324220000767,
            "range": "± 0.0031339736216949698",
            "unit": "s",
            "extra": "{\"times\":[3.474248476000037,3.4698163680001164],\"min\":3.4698163680001164,\"max\":3.474248476000037,\"median\":3.4720324220000767,\"mean\":3.4720324220000767}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46634441658000003,
            "range": "± 0.0076381342163583535",
            "unit": "s",
            "extra": "{\"times\":[0.47174539308,0.46094344008000004],\"min\":0.46094344008000004,\"max\":0.47174539308,\"median\":0.46634441658000003,\"mean\":0.46634441658000003}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50822511066,
            "range": "± 0.004473865311674027",
            "unit": "s",
            "extra": "{\"times\":[0.5050616101600001,0.51138861116],\"min\":0.5050616101600001,\"max\":0.51138861116,\"median\":0.50822511066,\"mean\":0.50822511066}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.86116972600017,
            "range": "± 0.18278722880169837",
            "unit": "s",
            "extra": "{\"times\":[52.73191963700019,52.990419815000145],\"min\":52.73191963700019,\"max\":52.990419815000145,\"median\":52.86116972600017,\"mean\":52.86116972600017}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4940969024999067,
            "range": "± 0.006385115544153946",
            "unit": "s",
            "extra": "{\"times\":[3.489581943999976,3.4986118609998376],\"min\":3.489581943999976,\"max\":3.4986118609998376,\"median\":3.4940969024999067,\"mean\":3.4940969024999067}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.175629505000078,
            "range": "± 0.04178789934707081",
            "unit": "s",
            "extra": "{\"times\":[8.146080998000222,8.205178011999932],\"min\":8.146080998000222,\"max\":8.205178011999932,\"median\":8.175629505000078,\"mean\":8.175629505000078}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.343273112999974,
            "range": "± 0.052852417759653506",
            "unit": "s",
            "extra": "{\"times\":[52.38064541599993,52.30590081000002],\"min\":52.30590081000002,\"max\":52.38064541599993,\"median\":52.343273112999974,\"mean\":52.343273112999974}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.62762154284,
            "range": "± 0.0015501845395409684",
            "unit": "s",
            "extra": "{\"times\":[0.6265253968400001,0.62871768884],\"min\":0.6265253968400001,\"max\":0.62871768884,\"median\":0.62762154284,\"mean\":0.62762154284}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.301470975226666,
            "range": "± 0.1181306731539343",
            "unit": "s",
            "extra": "{\"times\":[3.32508860596,3.2735230579600003,3.17598860596,3.5821996299600003,3.43421972996,3.2716264339600003,3.20143460996,3.47840410096,3.2398543819600003,3.2724701259600004,3.12953872996,3.33597778396,3.28450194496,3.24638180696,3.27085507996],\"min\":3.12953872996,\"max\":3.5821996299600003,\"median\":3.2724701259600004,\"mean\":3.301470975226666}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.56041552749997,
            "range": "± 0.506935064175701",
            "unit": "s",
            "extra": "{\"times\":[180.2019583060001,180.91887274899986],\"min\":180.2019583060001,\"max\":180.91887274899986,\"median\":180.56041552749997,\"mean\":180.56041552749997}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9819951779998375,
            "range": "± 0.017708729901566928",
            "unit": "s",
            "extra": "{\"times\":[3.9694732150002383,3.9945171409994362],\"min\":3.9694732150002383,\"max\":3.9945171409994362,\"median\":3.9819951779998375,\"mean\":3.9819951779998375}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.966705791000045,
            "range": "± 0.026807549445461827",
            "unit": "s",
            "extra": "{\"times\":[27.947749991000165,27.985661590999925],\"min\":27.947749991000165,\"max\":27.985661590999925,\"median\":27.966705791000045,\"mean\":27.966705791000045}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.3374107959997,
            "range": "± 0.1683493344528668",
            "unit": "s",
            "extra": "{\"times\":[166.45645175199957,166.21836983999984],\"min\":166.21836983999984,\"max\":166.45645175199957,\"median\":166.3374107959997,\"mean\":166.3374107959997}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5601356691200001,
            "range": "± 0.0017290493211624886",
            "unit": "s",
            "extra": "{\"times\":[0.5613582916200001,0.5589130466200001],\"min\":0.5589130466200001,\"max\":0.5613582916200001,\"median\":0.5601356691200001,\"mean\":0.5601356691200001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.037476234091111,
            "range": "± 0.06813611615460553",
            "unit": "s",
            "extra": "{\"times\":[7.18105138098,7.06333181998,6.98672026098,7.01580380098,6.99457145198,6.99546849098,7.07946056498,6.9557496599799995,7.06512867598],\"min\":6.9557496599799995,\"max\":7.18105138098,\"median\":7.01580380098,\"mean\":7.037476234091111}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.422443126000466,
            "range": "± 0.04526381708040153",
            "unit": "s",
            "extra": "{\"times\":[37.454449478000406,37.39043677400053],\"min\":37.39043677400053,\"max\":37.454449478000406,\"median\":37.422443126000466,\"mean\":37.422443126000466}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.190536785000004,
            "range": "± 0.01916318066870859",
            "unit": "s",
            "extra": "{\"times\":[3.2040871999999507,3.176986370000057],\"min\":3.176986370000057,\"max\":3.2040871999999507,\"median\":3.190536785000004,\"mean\":3.190536785000004}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.039220311499666,
            "range": "± 0.009921727081123833",
            "unit": "s",
            "extra": "{\"times\":[7.032204590999521,7.046236031999811],\"min\":7.032204590999521,\"max\":7.046236031999811,\"median\":7.039220311499666,\"mean\":7.039220311499666}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.16387195350043,
            "range": "± 0.016135484488854435",
            "unit": "s",
            "extra": "{\"times\":[35.15246244300064,35.175281464000236],\"min\":35.15246244300064,\"max\":35.175281464000236,\"median\":35.16387195350043,\"mean\":35.16387195350043}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.76140215816,
            "range": "± 0.0014398256770944563",
            "unit": "s",
            "extra": "{\"times\":[0.76242026866,0.76038404766],\"min\":0.76038404766,\"max\":0.76242026866,\"median\":0.76140215816,\"mean\":0.76140215816}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.51295600754,
            "range": "± 0.06258839991003369",
            "unit": "s",
            "extra": "{\"times\":[40.55721268954,40.46869932554],\"min\":40.46869932554,\"max\":40.55721268954,\"median\":40.51295600754,\"mean\":40.51295600754}"
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
          "distinct": true,
          "id": "62e58df309b05ed4e247fbcd8e309dc7141fcf14",
          "message": "fix(deps): update rust crate itertools to v0.15.0 (#1521)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-29T11:44:57Z",
          "tree_id": "285d335ded79b1d2def07a85e128367c5ff51336",
          "url": "https://github.com/NomicFoundation/edr/commit/62e58df309b05ed4e247fbcd8e309dc7141fcf14"
        },
        "date": 1782748084648,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.283052437500002,
            "range": "± 0.01553248221092238",
            "unit": "s",
            "extra": "{\"times\":[9.294035561000005,9.272069314],\"min\":9.272069314,\"max\":9.294035561000005,\"median\":9.283052437500002,\"mean\":9.283052437500002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.997827656500002,
            "range": "± 0.012131628105179475",
            "unit": "s",
            "extra": "{\"times\":[3.989249299999996,4.006406013000007],\"min\":3.989249299999996,\"max\":4.006406013000007,\"median\":3.997827656500002,\"mean\":3.997827656500002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.107799173499993,
            "range": "± 0.005794527232687428",
            "unit": "s",
            "extra": "{\"times\":[4.111896522999996,4.103701823999989],\"min\":4.103701823999989,\"max\":4.111896522999996,\"median\":4.107799173499993,\"mean\":4.107799173499993}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.218123466000002,
            "range": "± 0.00902159499770513",
            "unit": "s",
            "extra": "{\"times\":[9.224502696999997,9.211744235000005],\"min\":9.211744235000005,\"max\":9.224502696999997,\"median\":9.218123466000002,\"mean\":9.218123466000002}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.52896351544,
            "range": "± 0.0027720919274889988",
            "unit": "s",
            "extra": "{\"times\":[0.5309236804399999,0.52700335044],\"min\":0.52700335044,\"max\":0.5309236804399999,\"median\":0.52896351544,\"mean\":0.52896351544}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.57522999786,
            "range": "± 0.0012057358558623665",
            "unit": "s",
            "extra": "{\"times\":[0.57437741386,0.57608258186],\"min\":0.57437741386,\"max\":0.57608258186,\"median\":0.57522999786,\"mean\":0.57522999786}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 239.352720637,
            "range": "± 0.6419211384712432",
            "unit": "s",
            "extra": "{\"times\":[239.80662742700002,238.898813847],\"min\":238.898813847,\"max\":239.80662742700002,\"median\":239.352720637,\"mean\":239.352720637}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.90141965149995,
            "range": "± 0.04135576447303539",
            "unit": "s",
            "extra": "{\"times\":[43.93066259299999,43.87217670999991],\"min\":43.87217670999991,\"max\":43.93066259299999,\"median\":43.90141965149995,\"mean\":43.90141965149995}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.50742602349998,
            "range": "± 0.16038273499463787",
            "unit": "s",
            "extra": "{\"times\":[53.39401830400003,53.620833742999935],\"min\":53.39401830400003,\"max\":53.620833742999935,\"median\":53.50742602349998,\"mean\":53.50742602349998}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.92393223949995,
            "range": "± 0.8532225634827236",
            "unit": "s",
            "extra": "{\"times\":[239.52725169999997,238.32061277899996],\"min\":238.32061277899996,\"max\":239.52725169999997,\"median\":238.92393223949995,\"mean\":238.92393223949995}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.58862472798,
            "range": "± 0.00303908554857021",
            "unit": "s",
            "extra": "{\"times\":[0.59077368598,0.58647576998],\"min\":0.58647576998,\"max\":0.59077368598,\"median\":0.58862472798,\"mean\":0.58862472798}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.761898837046666,
            "range": "± 0.18608822466481845",
            "unit": "s",
            "extra": "{\"times\":[3.62609072098,3.64705809198,3.71718316998,3.6058077709800003,3.8075392209800003,3.70399184598,3.64289196698,3.90295360098,3.81528182698,3.77456728598,3.60854118198,4.33825730998,3.8484002639800003,3.6170173409800004,3.77290095698],\"min\":3.6058077709800003,\"max\":4.33825730998,\"median\":3.71718316998,\"mean\":3.761898837046666}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.9871254935,
            "range": "± 0.3036072050385519",
            "unit": "s",
            "extra": "{\"times\":[266.7724427800002,267.2018082069999],\"min\":266.7724427800002,\"max\":267.2018082069999,\"median\":266.9871254935,\"mean\":266.9871254935}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2806040739999154,
            "range": "± 0.01356373783287977",
            "unit": "s",
            "extra": "{\"times\":[3.2710130630000496,3.290195084999781],\"min\":3.2710130630000496,\"max\":3.290195084999781,\"median\":3.2806040739999154,\"mean\":3.2806040739999154}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.755040313999867,
            "range": "± 0.011489093608404837",
            "unit": "s",
            "extra": "{\"times\":[13.763164330000057,13.746916297999677],\"min\":13.746916297999677,\"max\":13.763164330000057,\"median\":13.755040313999867,\"mean\":13.755040313999867}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.49342965799997,
            "range": "± 0.04075830520459976",
            "unit": "s",
            "extra": "{\"times\":[265.52225013199984,265.46460918400015],\"min\":265.46460918400015,\"max\":265.52225013199984,\"median\":265.49342965799997,\"mean\":265.49342965799997}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66282839508,
            "range": "± 0.011081643831573876",
            "unit": "s",
            "extra": "{\"times\":[0.6549924895800001,0.67066430058],\"min\":0.6549924895800001,\"max\":0.67066430058,\"median\":0.66282839508,\"mean\":0.66282839508}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.57482916672,
            "range": "± 0.03446952404048732",
            "unit": "s",
            "extra": "{\"times\":[2.62245023522,2.55639794922,2.54394092022,2.57652756222],\"min\":2.54394092022,\"max\":2.62245023522,\"median\":2.56646275572,\"mean\":2.57482916672}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 187.78060953349993,
            "range": "± 0.7575812561170536",
            "unit": "s",
            "extra": "{\"times\":[188.31630037700012,187.24491868999974],\"min\":187.24491868999974,\"max\":188.31630037700012,\"median\":187.78060953349993,\"mean\":187.78060953349993}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.622117866500048,
            "range": "± 0.008231724903303938",
            "unit": "s",
            "extra": "{\"times\":[3.6279385750000364,3.6162971580000596],\"min\":3.6162971580000596,\"max\":3.6279385750000364,\"median\":3.622117866500048,\"mean\":3.622117866500048}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.04000569499982,
            "range": "± 0.1296882146233097",
            "unit": "s",
            "extra": "{\"times\":[33.13170911099994,32.948302278999705],\"min\":32.948302278999705,\"max\":33.13170911099994,\"median\":33.04000569499982,\"mean\":33.04000569499982}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 184.76497428249985,
            "range": "± 0.10606506187685925",
            "unit": "s",
            "extra": "{\"times\":[184.68997495799977,184.83997360699996],\"min\":184.68997495799977,\"max\":184.83997360699996,\"median\":184.76497428249985,\"mean\":184.76497428249985}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0017500527,
            "range": "± 0.004187877388236729",
            "unit": "s",
            "extra": "{\"times\":[1.0047113292,0.9987887762000001],\"min\":0.9987887762000001,\"max\":1.0047113292,\"median\":1.0017500527,\"mean\":1.0017500527}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.586045798265003,
            "range": "± 0.4318516297592319",
            "unit": "s",
            "extra": "{\"times\":[13.22948945564,13.83177561064,14.26700810664,13.18909633764,13.96048374564,13.22355460164,13.58116410164,13.12985537964,13.82069605464,13.53354602564,13.64025845864,13.01141540564,13.87369092864,13.88573518164,14.43228954564,12.85192528064,13.856019785640001,13.48762566364,12.84581837964,13.34001770664,13.91008717064,13.95048893964,13.251139954640001,13.961917337640001],\"min\":12.84581837964,\"max\":14.43228954564,\"median\":13.61071128014,\"mean\":13.586045798265003}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.741161991000175,
            "range": "± 0.019879997440394082",
            "unit": "s",
            "extra": "{\"times\":[3.7552192720002493,3.7271047100001016],\"min\":3.7271047100001016,\"max\":3.7552192720002493,\"median\":3.741161991000175,\"mean\":3.741161991000175}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3201787305001633,
            "range": "± 0.0017375445018996615",
            "unit": "s",
            "extra": "{\"times\":[3.32140736000007,3.3189501010002567],\"min\":3.3189501010002567,\"max\":3.32140736000007,\"median\":3.3201787305001633,\"mean\":3.3201787305001633}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.485571106499992,
            "range": "± 0.004410524100376473",
            "unit": "s",
            "extra": "{\"times\":[3.4824523950000295,3.4886898179999553],\"min\":3.4824523950000295,\"max\":3.4886898179999553,\"median\":3.485571106499992,\"mean\":3.485571106499992}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.6600297644999813,
            "range": "± 0.2407016436954044",
            "unit": "s",
            "extra": "{\"times\":[3.8302315289997497,3.4898280000002124],\"min\":3.4898280000002124,\"max\":3.8302315289997497,\"median\":3.6600297644999813,\"mean\":3.6600297644999813}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46693599560000004,
            "range": "± 0.00010079170769710886",
            "unit": "s",
            "extra": "{\"times\":[0.46686472510000004,0.46700726610000004],\"min\":0.46686472510000004,\"max\":0.46700726610000004,\"median\":0.46693599560000004,\"mean\":0.46693599560000004}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50908797638,
            "range": "± 0.003925615725735318",
            "unit": "s",
            "extra": "{\"times\":[0.51186380588,0.50631214688],\"min\":0.50631214688,\"max\":0.51186380588,\"median\":0.50908797638,\"mean\":0.50908797638}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.80428017550008,
            "range": "± 0.0009779505989647465",
            "unit": "s",
            "extra": "{\"times\":[52.80358865999989,52.804971691000276],\"min\":52.80358865999989,\"max\":52.804971691000276,\"median\":52.80428017550008,\"mean\":52.80428017550008}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.5026096949998755,
            "range": "± 0.01398593149304231",
            "unit": "s",
            "extra": "{\"times\":[3.492720147999935,3.5124992419998162],\"min\":3.492720147999935,\"max\":3.5124992419998162,\"median\":3.5026096949998755,\"mean\":3.5026096949998755}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.190005644500022,
            "range": "± 0.016627509186580472",
            "unit": "s",
            "extra": "{\"times\":[8.201763069000096,8.17824821999995],\"min\":8.17824821999995,\"max\":8.201763069000096,\"median\":8.190005644500022,\"mean\":8.190005644500022}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.2292438254999,
            "range": "± 0.2516031089412135",
            "unit": "s",
            "extra": "{\"times\":[52.05133356099995,52.40715408999985],\"min\":52.05133356099995,\"max\":52.40715408999985,\"median\":52.2292438254999,\"mean\":52.2292438254999}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.62741801066,
            "range": "± 0.00021938200018345761",
            "unit": "s",
            "extra": "{\"times\":[0.6275731371600001,0.6272628841600001],\"min\":0.6272628841600001,\"max\":0.6275731371600001,\"median\":0.62741801066,\"mean\":0.62741801066}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.541869538253334,
            "range": "± 0.1338048776004872",
            "unit": "s",
            "extra": "{\"times\":[3.4002284077200002,3.72093470072,3.7217911587200003,3.56714859272,3.34607808972,3.45544869372,3.6551781187200003,3.70571459572,3.37911892972,3.59744670272,3.50365252372,3.68577577272,3.51880356472,3.4856713417200003,3.3850518807200003],\"min\":3.34607808972,\"max\":3.7217911587200003,\"median\":3.51880356472,\"mean\":3.541869538253334}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.5847771175001,
            "range": "± 0.617858644724895",
            "unit": "s",
            "extra": "{\"times\":[180.14788508000038,181.02166915499978],\"min\":180.14788508000038,\"max\":181.02166915499978,\"median\":180.5847771175001,\"mean\":180.5847771175001}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9910846879999156,
            "range": "± 0.01627359305024489",
            "unit": "s",
            "extra": "{\"times\":[3.979577519999817,4.002591856000014],\"min\":3.979577519999817,\"max\":4.002591856000014,\"median\":3.9910846879999156,\"mean\":3.9910846879999156}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.82114095199993,
            "range": "± 0.059879131591659224",
            "unit": "s",
            "extra": "{\"times\":[27.778800011999905,27.863481891999953],\"min\":27.778800011999905,\"max\":27.863481891999953,\"median\":27.82114095199993,\"mean\":27.82114095199993}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.7152036260001,
            "range": "± 0.09283593475115606",
            "unit": "s",
            "extra": "{\"times\":[165.78084854500042,165.64955870699976],\"min\":165.64955870699976,\"max\":165.78084854500042,\"median\":165.7152036260001,\"mean\":165.7152036260001}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5558586104800001,
            "range": "± 0.004108344845915932",
            "unit": "s",
            "extra": "{\"times\":[0.5529535719800001,0.55876364898],\"min\":0.5529535719800001,\"max\":0.55876364898,\"median\":0.5558586104800001,\"mean\":0.5558586104800001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.4229676887644445,
            "range": "± 0.14039295569504273",
            "unit": "s",
            "extra": "{\"times\":[7.3568086393200005,7.30548778532,7.34541623732,7.43500039532,7.488969856320001,7.27259094332,7.52059654932,7.726685160320001,7.35515363232],\"min\":7.27259094332,\"max\":7.726685160320001,\"median\":7.3568086393200005,\"mean\":7.4229676887644445}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.221408667000006,
            "range": "± 1.1597898674141713",
            "unit": "s",
            "extra": "{\"times\":[37.401313387,39.04150394700002],\"min\":37.401313387,\"max\":39.04150394700002,\"median\":38.221408667000006,\"mean\":38.221408667000006}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.194881688999944,
            "range": "± 0.0019848869185394168",
            "unit": "s",
            "extra": "{\"times\":[3.1962852159999313,3.193478161999956],\"min\":3.193478161999956,\"max\":3.1962852159999313,\"median\":3.194881688999944,\"mean\":3.194881688999944}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.2666435214998195,
            "range": "± 0.34592758549110747",
            "unit": "s",
            "extra": "{\"times\":[7.511251263000071,7.022035779999569],\"min\":7.022035779999569,\"max\":7.511251263000071,\"median\":7.2666435214998195,\"mean\":7.2666435214998195}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.25418488649977,
            "range": "± 0.04667540798334464",
            "unit": "s",
            "extra": "{\"times\":[35.221180389000104,35.28718938399945],\"min\":35.221180389000104,\"max\":35.28718938399945,\"median\":35.25418488649977,\"mean\":35.25418488649977}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7597686406999999,
            "range": "± 0.005725656446408574",
            "unit": "s",
            "extra": "{\"times\":[0.7638172912,0.7557199902],\"min\":0.7557199902,\"max\":0.7638172912,\"median\":0.7597686406999999,\"mean\":0.7597686406999999}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.545235395000006,
            "range": "± 0.07113606931557873",
            "unit": "s",
            "extra": "{\"times\":[40.494934598,40.595536192000004],\"min\":40.494934598,\"max\":40.595536192000004,\"median\":40.545235395000006,\"mean\":40.545235395000006}"
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
          "id": "ffcf15142ffc1f3a8aa00aa5dc9d6cd93be5cb08",
          "message": "chore(deps): update cargo minor/patch (#1516)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-29T13:04:51Z",
          "tree_id": "9930f2b60b5378d9fe3930694d3996724935af13",
          "url": "https://github.com/NomicFoundation/edr/commit/ffcf15142ffc1f3a8aa00aa5dc9d6cd93be5cb08"
        },
        "date": 1782753499021,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.27284729,
            "range": "± 0.013182864664878922",
            "unit": "s",
            "extra": "{\"times\":[9.282168983,9.263525597],\"min\":9.263525597,\"max\":9.282168983,\"median\":9.27284729,\"mean\":9.27284729}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9942401450000036,
            "range": "± 0.004140295465822239",
            "unit": "s",
            "extra": "{\"times\":[3.997167776000002,3.9913125140000045],\"min\":3.9913125140000045,\"max\":3.997167776000002,\"median\":3.9942401450000036,\"mean\":3.9942401450000036}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.116573519500005,
            "range": "± 0.003881831673837147",
            "unit": "s",
            "extra": "{\"times\":[4.119318389,4.11382865000001],\"min\":4.11382865000001,\"max\":4.119318389,\"median\":4.116573519500005,\"mean\":4.116573519500005}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.251266394999998,
            "range": "± 0.0077503570122878845",
            "unit": "s",
            "extra": "{\"times\":[9.256746725000005,9.245786064999994],\"min\":9.245786064999994,\"max\":9.256746725000005,\"median\":9.251266394999998,\"mean\":9.251266394999998}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.53075670588,
            "range": "± 0.0019030626431582706",
            "unit": "s",
            "extra": "{\"times\":[0.52941103738,0.53210237438],\"min\":0.52941103738,\"max\":0.53210237438,\"median\":0.53075670588,\"mean\":0.53075670588}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5776702247200001,
            "range": "± 0.0030268582581099305",
            "unit": "s",
            "extra": "{\"times\":[0.57981053672,0.57552991272],\"min\":0.57552991272,\"max\":0.57981053672,\"median\":0.5776702247200001,\"mean\":0.5776702247200001}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.74800521049997,
            "range": "± 0.017391977883904938",
            "unit": "s",
            "extra": "{\"times\":[238.73570722500003,238.76030319599994],\"min\":238.73570722500003,\"max\":238.76030319599994,\"median\":238.74800521049997,\"mean\":238.74800521049997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.92145121450003,
            "range": "± 0.10341787894794799",
            "unit": "s",
            "extra": "{\"times\":[43.84832373100001,43.994578698000055],\"min\":43.84832373100001,\"max\":43.994578698000055,\"median\":43.92145121450003,\"mean\":43.92145121450003}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.42289282350001,
            "range": "± 0.04516803593141203",
            "unit": "s",
            "extra": "{\"times\":[53.454831447999986,53.39095419900003],\"min\":53.39095419900003,\"max\":53.454831447999986,\"median\":53.42289282350001,\"mean\":53.42289282350001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.33892429150004,
            "range": "± 0.2163866414111928",
            "unit": "s",
            "extra": "{\"times\":[238.18591583,238.49193275300007],\"min\":238.18591583,\"max\":238.49193275300007,\"median\":238.33892429150004,\"mean\":238.33892429150004}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5904850270399999,
            "range": "± 0.0005840553520176276",
            "unit": "s",
            "extra": "{\"times\":[0.59089801654,0.59007203754],\"min\":0.59007203754,\"max\":0.59089801654,\"median\":0.5904850270399999,\"mean\":0.5904850270399999}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.7036362145133332,
            "range": "± 0.20243119912818694",
            "unit": "s",
            "extra": "{\"times\":[3.46629088578,3.53918070578,3.96401897878,4.204689753779999,3.6231542767800002,4.0059317197799995,3.51823728578,3.7016679307800002,3.72549940878,3.65612016978,3.55195883878,3.62705092278,3.67614790378,3.63120713078,3.66338730578],\"min\":3.46629088578,\"max\":4.204689753779999,\"median\":3.65612016978,\"mean\":3.7036362145133332}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.79261364650006,
            "range": "± 0.06795344179746324",
            "unit": "s",
            "extra": "{\"times\":[266.840663986,266.7445633070001],\"min\":266.7445633070001,\"max\":266.840663986,\"median\":266.79261364650006,\"mean\":266.79261364650006}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.259606780000264,
            "range": "± 0.0016463765175671163",
            "unit": "s",
            "extra": "{\"times\":[3.260770944000222,3.258442616000306],\"min\":3.258442616000306,\"max\":3.260770944000222,\"median\":3.259606780000264,\"mean\":3.259606780000264}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.777681441499968,
            "range": "± 0.016502487050593276",
            "unit": "s",
            "extra": "{\"times\":[13.76601242100005,13.789350461999886],\"min\":13.76601242100005,\"max\":13.789350461999886,\"median\":13.777681441499968,\"mean\":13.777681441499968}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.6169641535,
            "range": "± 0.371561490414608",
            "unit": "s",
            "extra": "{\"times\":[265.3542305040001,265.879697803],\"min\":265.3542305040001,\"max\":265.879697803,\"median\":265.6169641535,\"mean\":265.6169641535}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.67128899448,
            "range": "± 0.008219911977433898",
            "unit": "s",
            "extra": "{\"times\":[0.66547663898,0.67710134998],\"min\":0.66547663898,\"max\":0.67710134998,\"median\":0.67128899448,\"mean\":0.67128899448}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.49228770866,
            "range": "± 0.035699978229727786",
            "unit": "s",
            "extra": "{\"times\":[2.4645240031599998,2.54321684016,2.47094417916,2.49046581216],\"min\":2.4645240031599998,\"max\":2.54321684016,\"median\":2.48070499566,\"mean\":2.49228770866}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.34371720499988,
            "range": "± 0.2685319474400617",
            "unit": "s",
            "extra": "{\"times\":[188.15383644399978,188.53359796599997],\"min\":188.15383644399978,\"max\":188.53359796599997,\"median\":188.34371720499988,\"mean\":188.34371720499988}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.610914184999885,
            "range": "± 0.020663665500711862",
            "unit": "s",
            "extra": "{\"times\":[3.625525602999609,3.5963027670001613],\"min\":3.5963027670001613,\"max\":3.625525602999609,\"median\":3.610914184999885,\"mean\":3.610914184999885}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 32.942687120999906,
            "range": "± 0.03383396912111267",
            "unit": "s",
            "extra": "{\"times\":[32.9666113499999,32.91876289199991],\"min\":32.91876289199991,\"max\":32.9666113499999,\"median\":32.942687120999906,\"mean\":32.942687120999906}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.2334197195,
            "range": "± 0.9811962492227081",
            "unit": "s",
            "extra": "{\"times\":[184.53960919799982,185.9272302410002],\"min\":184.53960919799982,\"max\":185.9272302410002,\"median\":185.2334197195,\"mean\":185.2334197195}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0116797341800001,
            "range": "± 0.0018178944597914389",
            "unit": "s",
            "extra": "{\"times\":[1.01296517968,1.0103942886800001],\"min\":1.0103942886800001,\"max\":1.01296517968,\"median\":1.0116797341800001,\"mean\":1.0116797341800001}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.557161296701667,
            "range": "± 0.5803788820903101",
            "unit": "s",
            "extra": "{\"times\":[14.30824173666,13.189222445659999,12.73218012766,13.73004564966,13.835997230659999,13.457609333659999,14.189932515659999,13.13255094266,14.194070781659999,12.668947100659999,13.627692720659999,14.00987132866,12.947640398659999,14.240733578659999,14.25763431866,14.407611294659999,13.70972517866,12.974741479659999,12.737209626659999,12.84325660966,13.46106010266,12.918496398659999,13.99053146466,13.80686875566],\"min\":12.668947100659999,\"max\":14.407611294659999,\"median\":13.66870894966,\"mean\":13.557161296701667}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.727101491499925,
            "range": "± 0.014864479848902169",
            "unit": "s",
            "extra": "{\"times\":[3.7376122659998945,3.7165907169999555],\"min\":3.7165907169999555,\"max\":3.7376122659998945,\"median\":3.727101491499925,\"mean\":3.727101491499925}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.29333125750022,
            "range": "± 0.008937427370266897",
            "unit": "s",
            "extra": "{\"times\":[3.299650973000098,3.287011542000342],\"min\":3.287011542000342,\"max\":3.299650973000098,\"median\":3.29333125750022,\"mean\":3.29333125750022}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.6608097764998675,
            "range": "± 0.24492570585940518",
            "unit": "s",
            "extra": "{\"times\":[3.8339984039999546,3.4876211489997804],\"min\":3.4876211489997804,\"max\":3.8339984039999546,\"median\":3.6608097764998675,\"mean\":3.6608097764998675}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.6652959244998637,
            "range": "± 0.24655645107430987",
            "unit": "s",
            "extra": "{\"times\":[3.8396376629997975,3.49095418599993],\"min\":3.49095418599993,\"max\":3.8396376629997975,\"median\":3.6652959244998637,\"mean\":3.6652959244998637}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4626804175,
            "range": "± 0.0000823998603184321",
            "unit": "s",
            "extra": "{\"times\":[0.462622152,0.462738683],\"min\":0.462622152,\"max\":0.462738683,\"median\":0.4626804175,\"mean\":0.4626804175}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50509453716,
            "range": "± 0.002207632625698344",
            "unit": "s",
            "extra": "{\"times\":[0.5035335051600001,0.50665556916],\"min\":0.5035335051600001,\"max\":0.50665556916,\"median\":0.50509453716,\"mean\":0.50509453716}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.8053225484998,
            "range": "± 0.08639893878188995",
            "unit": "s",
            "extra": "{\"times\":[52.7442292729998,52.866415823999795],\"min\":52.7442292729998,\"max\":52.866415823999795,\"median\":52.8053225484998,\"mean\":52.8053225484998}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4996995659999084,
            "range": "± 0.0036594812398243557",
            "unit": "s",
            "extra": "{\"times\":[3.4971119219996036,3.502287210000213],\"min\":3.4971119219996036,\"max\":3.502287210000213,\"median\":3.4996995659999084,\"mean\":3.4996995659999084}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.206460717499722,
            "range": "± 0.05656072260092004",
            "unit": "s",
            "extra": "{\"times\":[8.246455187999643,8.1664662469998],\"min\":8.1664662469998,\"max\":8.246455187999643,\"median\":8.206460717499722,\"mean\":8.206460717499722}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.17219470450026,
            "range": "± 0.01209919735979284",
            "unit": "s",
            "extra": "{\"times\":[52.18075012900028,52.16363928000023],\"min\":52.16363928000023,\"max\":52.18075012900028,\"median\":52.17219470450026,\"mean\":52.17219470450026}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6222401712800001,
            "range": "± 0.0038397093228889232",
            "unit": "s",
            "extra": "{\"times\":[0.6195250867800001,0.62495525578],\"min\":0.6195250867800001,\"max\":0.62495525578,\"median\":0.6222401712800001,\"mean\":0.6222401712800001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.3852582665,
            "range": "± 0.11500150205628218",
            "unit": "s",
            "extra": "{\"times\":[3.2780980877,3.4272389967000003,3.4776599967000004,3.2987557347000003,3.3963216247,3.3986594657,3.7434781997,3.2814725557,3.2738367277,3.3439853717,3.3826875947,3.3560785217,3.3522631157,3.3987647027000003,3.3695733017],\"min\":3.2738367277,\"max\":3.7434781997,\"median\":3.3695733017,\"mean\":3.3852582665}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 181.0261813859998,
            "range": "± 0.21010029595651475",
            "unit": "s",
            "extra": "{\"times\":[181.17474472999993,180.87761804199963],\"min\":180.87761804199963,\"max\":181.17474472999993,\"median\":181.0261813859998,\"mean\":181.0261813859998}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.984195843500085,
            "range": "± 0.005054623424698511",
            "unit": "s",
            "extra": "{\"times\":[3.9877700020000337,3.9806216850001364],\"min\":3.9806216850001364,\"max\":3.9877700020000337,\"median\":3.984195843500085,\"mean\":3.984195843500085}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.83879220500006,
            "range": "± 0.03645920911237078",
            "unit": "s",
            "extra": "{\"times\":[27.86457275900012,27.813011651000007],\"min\":27.813011651000007,\"max\":27.86457275900012,\"median\":27.83879220500006,\"mean\":27.83879220500006}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.8406692445001,
            "range": "± 0.18490448540242874",
            "unit": "s",
            "extra": "{\"times\":[165.70992202900024,165.97141645999997],\"min\":165.70992202900024,\"max\":165.97141645999997,\"median\":165.8406692445001,\"mean\":165.8406692445001}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55770842888,
            "range": "± 0.0004146028687605713",
            "unit": "s",
            "extra": "{\"times\":[0.5580015973800001,0.5574152603800001],\"min\":0.5574152603800001,\"max\":0.5580015973800001,\"median\":0.55770842888,\"mean\":0.55770842888}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.186548348800001,
            "range": "± 0.07025597680339371",
            "unit": "s",
            "extra": "{\"times\":[7.1684957858,7.284574263800001,7.1603832788,7.0839236118,7.263143961800001,7.2254541658,7.175618671800001,7.090547793800001,7.2267936058],\"min\":7.0839236118,\"max\":7.284574263800001,\"median\":7.175618671800001,\"mean\":7.186548348800001}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.52608038749965,
            "range": "± 0.09648986308046714",
            "unit": "s",
            "extra": "{\"times\":[37.59430902399961,37.45785175099969],\"min\":37.45785175099969,\"max\":37.59430902399961,\"median\":37.52608038749965,\"mean\":37.52608038749965}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.184883228499908,
            "range": "± 0.002032041748445028",
            "unit": "s",
            "extra": "{\"times\":[3.1834463579999284,3.1863200989998877],\"min\":3.1834463579999284,\"max\":3.1863200989998877,\"median\":3.184883228499908,\"mean\":3.184883228499908}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.0434019649997355,
            "range": "± 0.04066710539987504",
            "unit": "s",
            "extra": "{\"times\":[7.072157950999215,7.014645979000256],\"min\":7.014645979000256,\"max\":7.072157950999215,\"median\":7.0434019649997355,\"mean\":7.0434019649997355}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.309511359499766,
            "range": "± 0.22211603067478103",
            "unit": "s",
            "extra": "{\"times\":[35.15245160799939,35.46657111100014],\"min\":35.15245160799939,\"max\":35.46657111100014,\"median\":35.309511359499766,\"mean\":35.309511359499766}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7583453978000001,
            "range": "± 0.0016470454406415482",
            "unit": "s",
            "extra": "{\"times\":[0.7571807608000001,0.7595100348000001],\"min\":0.7571807608000001,\"max\":0.7595100348000001,\"median\":0.7583453978000001,\"mean\":0.7583453978000001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.50566479634,
            "range": "± 0.03965645535593101",
            "unit": "s",
            "extra": "{\"times\":[40.533706144840004,40.47762344784],\"min\":40.47762344784,\"max\":40.533706144840004,\"median\":40.50566479634,\"mean\":40.50566479634}"
          }
        ]
      },
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
          "distinct": false,
          "id": "254f2f7d83d982bb53766241d4a8459955d52043",
          "message": "fix: use `GITHUB_TOKEN` for non-baseline regression benchmark runs (#1514)",
          "timestamp": "2026-06-29T13:41:13Z",
          "tree_id": "0eedec365c2dd83f8035f793ee1b674450477ff3",
          "url": "https://github.com/NomicFoundation/edr/commit/254f2f7d83d982bb53766241d4a8459955d52043"
        },
        "date": 1782764891654,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.272057643500002,
            "range": "± 0.04671617834659733",
            "unit": "s",
            "extra": "{\"times\":[9.305090970000002,9.239024317000004],\"min\":9.239024317000004,\"max\":9.305090970000002,\"median\":9.272057643500002,\"mean\":9.272057643500002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.007484643,
            "range": "± 0.004973869709040237",
            "unit": "s",
            "extra": "{\"times\":[4.0110017000000004,4.003967585999999],\"min\":4.003967585999999,\"max\":4.0110017000000004,\"median\":4.007484643,\"mean\":4.007484643}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.116181276500003,
            "range": "± 0.007798605029282562",
            "unit": "s",
            "extra": "{\"times\":[4.121695723000005,4.110666830000002],\"min\":4.110666830000002,\"max\":4.121695723000005,\"median\":4.116181276500003,\"mean\":4.116181276500003}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.242894763,
            "range": "± 0.001656848769058766",
            "unit": "s",
            "extra": "{\"times\":[9.241723193999999,9.244066332000003],\"min\":9.241723193999999,\"max\":9.244066332000003,\"median\":9.242894763,\"mean\":9.242894763}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5331630318,
            "range": "± 0.0012440978129552042",
            "unit": "s",
            "extra": "{\"times\":[0.5340427418,0.5322833218],\"min\":0.5322833218,\"max\":0.5340427418,\"median\":0.5331630318,\"mean\":0.5331630318}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5811162625399999,
            "range": "± 0.004138007268279994",
            "unit": "s",
            "extra": "{\"times\":[0.57819024954,0.58404227554],\"min\":0.57819024954,\"max\":0.58404227554,\"median\":0.5811162625399999,\"mean\":0.5811162625399999}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 239.23333304299996,
            "range": "± 0.2246851497215177",
            "unit": "s",
            "extra": "{\"times\":[239.07445664999997,239.39220943599997],\"min\":239.07445664999997,\"max\":239.39220943599997,\"median\":239.23333304299996,\"mean\":239.23333304299996}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.870936304500034,
            "range": "± 0.03647494577367632",
            "unit": "s",
            "extra": "{\"times\":[43.896727986000016,43.84514462300006],\"min\":43.84514462300006,\"max\":43.896727986000016,\"median\":43.870936304500034,\"mean\":43.870936304500034}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.444457877499985,
            "range": "± 0.11297435921337604",
            "unit": "s",
            "extra": "{\"times\":[53.364572942,53.52434281299997],\"min\":53.364572942,\"max\":53.52434281299997,\"median\":53.444457877499985,\"mean\":53.444457877499985}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.59449425149995,
            "range": "± 0.15512001923651816",
            "unit": "s",
            "extra": "{\"times\":[239.48480783400004,239.7041806689999],\"min\":239.48480783400004,\"max\":239.7041806689999,\"median\":239.59449425149995,\"mean\":239.59449425149995}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5864519920800001,
            "range": "± 0.006709673314175655",
            "unit": "s",
            "extra": "{\"times\":[0.5817075365800001,0.5911964475800001],\"min\":0.5817075365800001,\"max\":0.5911964475800001,\"median\":0.5864519920800001,\"mean\":0.5864519920800001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.68932791948,
            "range": "± 0.12392251699748034",
            "unit": "s",
            "extra": "{\"times\":[3.7763184392799998,3.74154567628,3.68932811728,3.65520219128,3.59641406128,3.65800465728,3.60028405928,3.57353900228,3.68758048828,3.66863681328,3.7234334372799998,3.74898842728,3.5412031692799997,4.0636131002800004,3.61582715228],\"min\":3.5412031692799997,\"max\":4.0636131002800004,\"median\":3.66863681328,\"mean\":3.68932791948}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.5817635700001,
            "range": "± 0.02718029229995001",
            "unit": "s",
            "extra": "{\"times\":[266.600982939,266.56254420100015],\"min\":266.56254420100015,\"max\":266.600982939,\"median\":266.5817635700001,\"mean\":266.5817635700001}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2791054729999742,
            "range": "± 0.010904569444345164",
            "unit": "s",
            "extra": "{\"times\":[3.271394777999958,3.2868161679999903],\"min\":3.271394777999958,\"max\":3.2868161679999903,\"median\":3.2791054729999742,\"mean\":3.2791054729999742}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.791048223500141,
            "range": "± 0.005042086421822487",
            "unit": "s",
            "extra": "{\"times\":[13.78748292999994,13.79461351700034],\"min\":13.78748292999994,\"max\":13.79461351700034,\"median\":13.791048223500141,\"mean\":13.791048223500141}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.9973073655,
            "range": "± 0.8551859288992572",
            "unit": "s",
            "extra": "{\"times\":[265.392599596,266.602015135],\"min\":265.392599596,\"max\":266.602015135,\"median\":265.9973073655,\"mean\":265.9973073655}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.658808695,
            "range": "± 0.014668409745124024",
            "unit": "s",
            "extra": "{\"times\":[0.669180827,0.648436563],\"min\":0.648436563,\"max\":0.669180827,\"median\":0.658808695,\"mean\":0.658808695}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.4852466613699997,
            "range": "± 0.032278291052659544",
            "unit": "s",
            "extra": "{\"times\":[2.46162090962,2.48911776662,2.46079193262,2.52945603662],\"min\":2.46079193262,\"max\":2.52945603662,\"median\":2.47536933812,\"mean\":2.4852466613699997}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.82588886099984,
            "range": "± 1.539778344612692",
            "unit": "s",
            "extra": "{\"times\":[187.737101152,189.91467656999967],\"min\":187.737101152,\"max\":189.91467656999967,\"median\":188.82588886099984,\"mean\":188.82588886099984}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.6187710724999196,
            "range": "± 0.017745174892933112",
            "unit": "s",
            "extra": "{\"times\":[3.6062233389997855,3.631318806000054],\"min\":3.6062233389997855,\"max\":3.631318806000054,\"median\":3.6187710724999196,\"mean\":3.6187710724999196}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 32.94530445550009,
            "range": "± 0.05432586636430054",
            "unit": "s",
            "extra": "{\"times\":[32.906890267000065,32.98371864400013],\"min\":32.906890267000065,\"max\":32.98371864400013,\"median\":32.94530445550009,\"mean\":32.94530445550009}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.33052404699987,
            "range": "± 0.01397948975060568",
            "unit": "s",
            "extra": "{\"times\":[185.32063905499967,185.34040903900004],\"min\":185.32063905499967,\"max\":185.34040903900004,\"median\":185.33052404699987,\"mean\":185.33052404699987}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0017326267,
            "range": "± 0.004991737590293015",
            "unit": "s",
            "extra": "{\"times\":[1.0052623182,0.9982029352],\"min\":0.9982029352,\"max\":1.0052623182,\"median\":1.0017326267,\"mean\":1.0017326267}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.78675297892667,
            "range": "± 0.5339082925110947",
            "unit": "s",
            "extra": "{\"times\":[14.29891969926,14.125773308260001,13.99518406326,13.40345516426,13.46099175826,13.57427242526,13.29055627626,14.498290586260001,14.212089864260001,13.65488126826,13.107624520260002,13.52921072826,13.92627139526,13.54984514426,14.127819435260001,14.381969471260001,14.43479040226,13.748153698260001,14.223400643260002,12.36471199326,13.892804917260001,12.834679449260001,13.99176580926,14.25460947326],\"min\":12.36471199326,\"max\":14.498290586260001,\"median\":13.909538156260002,\"mean\":13.78675297892667}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7280671274997292,
            "range": "± 0.007494352537702833",
            "unit": "s",
            "extra": "{\"times\":[3.722767819999717,3.7333664349997417],\"min\":3.722767819999717,\"max\":3.7333664349997417,\"median\":3.7280671274997292,\"mean\":3.7280671274997292}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.4829011125001124,
            "range": "± 0.23275509566415115",
            "unit": "s",
            "extra": "{\"times\":[3.3183184060002677,3.6474838189999574],\"min\":3.3183184060002677,\"max\":3.6474838189999574,\"median\":3.4829011125001124,\"mean\":3.4829011125001124}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.658373416000046,
            "range": "± 0.22300847650678415",
            "unit": "s",
            "extra": "{\"times\":[3.500682610000018,3.816064222000074],\"min\":3.500682610000018,\"max\":3.816064222000074,\"median\":3.658373416000046,\"mean\":3.658373416000046}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.494607245999854,
            "range": "± 0.004625165656743036",
            "unit": "s",
            "extra": "{\"times\":[3.497877731999848,3.49133675999986],\"min\":3.49133675999986,\"max\":3.497877731999848,\"median\":3.494607245999854,\"mean\":3.494607245999854}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46696435382,
            "range": "± 0.0001591075110483647",
            "unit": "s",
            "extra": "{\"times\":[0.46685184782,0.46707685982],\"min\":0.46685184782,\"max\":0.46707685982,\"median\":0.46696435382,\"mean\":0.46696435382}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.51261804822,
            "range": "± 0.004031065852906865",
            "unit": "s",
            "extra": "{\"times\":[0.50976765422,0.51546844222],\"min\":0.50976765422,\"max\":0.51546844222,\"median\":0.51261804822,\"mean\":0.51261804822}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.910564604500074,
            "range": "± 0.12734572895593949",
            "unit": "s",
            "extra": "{\"times\":[52.820517576000185,53.00061163299996],\"min\":52.820517576000185,\"max\":53.00061163299996,\"median\":52.910564604500074,\"mean\":52.910564604500074}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4931502954997122,
            "range": "± 0.021660693840688847",
            "unit": "s",
            "extra": "{\"times\":[3.4778338719997555,3.508466718999669],\"min\":3.4778338719997555,\"max\":3.508466718999669,\"median\":3.4931502954997122,\"mean\":3.4931502954997122}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.172038496500114,
            "range": "± 0.029093418486990017",
            "unit": "s",
            "extra": "{\"times\":[8.151466343000065,8.192610650000162],\"min\":8.151466343000065,\"max\":8.192610650000162,\"median\":8.172038496500114,\"mean\":8.172038496500114}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.39086621950008,
            "range": "± 0.09407687391762411",
            "unit": "s",
            "extra": "{\"times\":[52.324343824000096,52.45738861500006],\"min\":52.324343824000096,\"max\":52.45738861500006,\"median\":52.39086621950008,\"mean\":52.39086621950008}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6196094455800001,
            "range": "± 0.002827713654003978",
            "unit": "s",
            "extra": "{\"times\":[0.6176099500800001,0.6216089410800001],\"min\":0.6176099500800001,\"max\":0.6216089410800001,\"median\":0.6196094455800001,\"mean\":0.6196094455800001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.3953685586400004,
            "range": "± 0.0962949987690997",
            "unit": "s",
            "extra": "{\"times\":[3.3555531590400003,3.2624440800400003,3.57308267404,3.34552828104,3.33280497504,3.3883658740400002,3.4226846340400003,3.32524493504,3.5762273600400003,3.33179084004,3.47579671204,3.45062532304,3.40831439904,3.4262513340400003,3.2558137990400002],\"min\":3.2558137990400002,\"max\":3.5762273600400003,\"median\":3.3883658740400002,\"mean\":3.3953685586400004}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 181.09316366349998,
            "range": "± 0.9906153358116693",
            "unit": "s",
            "extra": "{\"times\":[181.7936344849998,180.39269284200017],\"min\":180.39269284200017,\"max\":181.7936344849998,\"median\":181.09316366349998,\"mean\":181.09316366349998}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9816931655001824,
            "range": "± 0.004667239217811152",
            "unit": "s",
            "extra": "{\"times\":[3.9783929289998485,3.9849934020005167],\"min\":3.9783929289998485,\"max\":3.9849934020005167,\"median\":3.9816931655001824,\"mean\":3.9816931655001824}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.877776216499974,
            "range": "± 0.019369037130704612",
            "unit": "s",
            "extra": "{\"times\":[27.891472194000148,27.864080238999797],\"min\":27.864080238999797,\"max\":27.891472194000148,\"median\":27.877776216499974,\"mean\":27.877776216499974}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.41177754199992,
            "range": "± 0.5462109942603012",
            "unit": "s",
            "extra": "{\"times\":[166.79800704000004,166.02554804399983],\"min\":166.02554804399983,\"max\":166.79800704000004,\"median\":166.41177754199992,\"mean\":166.41177754199992}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55624144984,
            "range": "± 0.004210402274751444",
            "unit": "s",
            "extra": "{\"times\":[0.55921865384,0.55326424584],\"min\":0.55326424584,\"max\":0.55921865384,\"median\":0.55624144984,\"mean\":0.55624144984}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.198451335135555,
            "range": "± 0.10123684455137331",
            "unit": "s",
            "extra": "{\"times\":[7.24212422358,7.290986348580001,7.40047172958,7.09616624858,7.16420506258,7.1785103905800005,7.14826348458,7.07142061458,7.19391391358],\"min\":7.07142061458,\"max\":7.40047172958,\"median\":7.1785103905800005,\"mean\":7.198451335135555}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.32422901300015,
            "range": "± 0.8802155523883134",
            "unit": "s",
            "extra": "{\"times\":[38.94663539899979,37.70182262700051],\"min\":37.70182262700051,\"max\":38.94663539899979,\"median\":38.32422901300015,\"mean\":38.32422901300015}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.202483127500396,
            "range": "± 0.00953805377056378",
            "unit": "s",
            "extra": "{\"times\":[3.1957387049999086,3.2092275500008838],\"min\":3.1957387049999086,\"max\":3.2092275500008838,\"median\":3.202483127500396,\"mean\":3.202483127500396}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.2661586500005795,
            "range": "± 0.35583008068142336",
            "unit": "s",
            "extra": "{\"times\":[7.014548787000589,7.51776851300057],\"min\":7.014548787000589,\"max\":7.51776851300057,\"median\":7.2661586500005795,\"mean\":7.2661586500005795}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.256467515999915,
            "range": "± 0.027943615484642595",
            "unit": "s",
            "extra": "{\"times\":[35.276226635999976,35.236708395999855],\"min\":35.236708395999855,\"max\":35.276226635999976,\"median\":35.256467515999915,\"mean\":35.256467515999915}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7665034306,
            "range": "± 0.00008754123372450058",
            "unit": "s",
            "extra": "{\"times\":[0.7664415296,0.7665653316000001],\"min\":0.7664415296,\"max\":0.7665653316000001,\"median\":0.7665034306,\"mean\":0.7665034306}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.53197126108,
            "range": "± 0.10043295070771897",
            "unit": "s",
            "extra": "{\"times\":[40.46095444058,40.60298808158],\"min\":40.46095444058,\"max\":40.60298808158,\"median\":40.53197126108,\"mean\":40.53197126108}"
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
          "distinct": true,
          "id": "233468b53c41244906b7de5d4d97b0359c38d7a0",
          "message": "chore(deps): update rust crate anyhow to v1.0.103 [security] (#1523)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>\nCo-authored-by: Bas van Gijzel <bas@nomic.foundation>",
          "timestamp": "2026-06-30T15:03:36Z",
          "tree_id": "41cd1030b9058ec1d5e0c742dfecfbabaad7bb81",
          "url": "https://github.com/NomicFoundation/edr/commit/233468b53c41244906b7de5d4d97b0359c38d7a0"
        },
        "date": 1782837933285,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.276368349,
            "range": "± 0.03268487251843404",
            "unit": "s",
            "extra": "{\"times\":[9.299480044000003,9.253256653999998],\"min\":9.253256653999998,\"max\":9.299480044000003,\"median\":9.276368349,\"mean\":9.276368349}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9897234360000002,
            "range": "± 0.005482193217691579",
            "unit": "s",
            "extra": "{\"times\":[3.993599932000005,3.9858469399999956],\"min\":3.9858469399999956,\"max\":3.993599932000005,\"median\":3.9897234360000002,\"mean\":3.9897234360000002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.110491855999998,
            "range": "± 0.002688906471528819",
            "unit": "s",
            "extra": "{\"times\":[4.108590512000003,4.112393199999992],\"min\":4.108590512000003,\"max\":4.112393199999992,\"median\":4.110491855999998,\"mean\":4.110491855999998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.264495724999993,
            "range": "± 0.006483422478712651",
            "unit": "s",
            "extra": "{\"times\":[9.259911252999999,9.269080196999989],\"min\":9.259911252999999,\"max\":9.269080196999989,\"median\":9.264495724999993,\"mean\":9.264495724999993}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.53029712828,
            "range": "± 0.0014557504289135568",
            "unit": "s",
            "extra": "{\"times\":[0.53132649928,0.52926775728],\"min\":0.52926775728,\"max\":0.53132649928,\"median\":0.53029712828,\"mean\":0.53029712828}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5793395272,
            "range": "± 0.0012026952967031377",
            "unit": "s",
            "extra": "{\"times\":[0.5784890932000001,0.5801899612],\"min\":0.5784890932000001,\"max\":0.5801899612,\"median\":0.5793395272,\"mean\":0.5793395272}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.58172517499997,
            "range": "± 0.13642774269267227",
            "unit": "s",
            "extra": "{\"times\":[238.485256193,238.67819415699992],\"min\":238.485256193,\"max\":238.67819415699992,\"median\":238.58172517499997,\"mean\":238.58172517499997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.99619785449995,
            "range": "± 0.2555319681657926",
            "unit": "s",
            "extra": "{\"times\":[43.81550946699997,44.176886241999924],\"min\":43.81550946699997,\"max\":44.176886241999924,\"median\":43.99619785449995,\"mean\":43.99619785449995}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.865195936000035,
            "range": "± 0.18160519375090367",
            "unit": "s",
            "extra": "{\"times\":[53.99361019999999,53.73678167200007],\"min\":53.73678167200007,\"max\":53.99361019999999,\"median\":53.865195936000035,\"mean\":53.865195936000035}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.15701948050003,
            "range": "± 0.8617857581247145",
            "unit": "s",
            "extra": "{\"times\":[238.54764492700005,239.766394034],\"min\":238.54764492700005,\"max\":239.766394034,\"median\":239.15701948050003,\"mean\":239.15701948050003}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5855369881,
            "range": "± 0.0010396202095055629",
            "unit": "s",
            "extra": "{\"times\":[0.5848018656,0.5862721106],\"min\":0.5848018656,\"max\":0.5862721106,\"median\":0.5855369881,\"mean\":0.5855369881}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.829823274866667,
            "range": "± 0.1022491326896731",
            "unit": "s",
            "extra": "{\"times\":[3.9107796032,3.8563093702,3.8900258722000003,3.9231642362000003,3.6672098622,3.7021908462,4.0073353912,3.7192470322,3.8246352542000004,3.7618531742,3.9641039502,3.8651997122000004,3.8421951992000003,3.7041831222000003,3.8089164972000003],\"min\":3.6672098622,\"max\":4.0073353912,\"median\":3.8421951992000003,\"mean\":3.829823274866667}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.83477932750014,
            "range": "± 0.4670340043207485",
            "unit": "s",
            "extra": "{\"times\":[267.16502223900005,266.50453641600024],\"min\":266.50453641600024,\"max\":267.16502223900005,\"median\":266.83477932750014,\"mean\":266.83477932750014}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2714886645000663,
            "range": "± 0.002227322014123382",
            "unit": "s",
            "extra": "{\"times\":[3.2730636190001388,3.2699137099999933],\"min\":3.2699137099999933,\"max\":3.2730636190001388,\"median\":3.2714886645000663,\"mean\":3.2714886645000663}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.736891464999992,
            "range": "± 0.0029180684654382186",
            "unit": "s",
            "extra": "{\"times\":[13.738954850999871,13.734828079000115],\"min\":13.734828079000115,\"max\":13.738954850999871,\"median\":13.736891464999992,\"mean\":13.736891464999992}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.65521864149974,
            "range": "± 0.5899340617267338",
            "unit": "s",
            "extra": "{\"times\":[265.23807226599985,266.07236501699964],\"min\":265.23807226599985,\"max\":266.07236501699964,\"median\":265.65521864149974,\"mean\":265.65521864149974}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66684116118,
            "range": "± 0.002734672543735438",
            "unit": "s",
            "extra": "{\"times\":[0.6649074556800001,0.6687748666800001],\"min\":0.6649074556800001,\"max\":0.6687748666800001,\"median\":0.66684116118,\"mean\":0.66684116118}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.55508294803,
            "range": "± 0.045293234087386364",
            "unit": "s",
            "extra": "{\"times\":[2.56009698778,2.53885048678,2.61455713478,2.50682718278],\"min\":2.50682718278,\"max\":2.61455713478,\"median\":2.54947373728,\"mean\":2.55508294803}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.06867515050016,
            "range": "± 0.47102856649290537",
            "unit": "s",
            "extra": "{\"times\":[188.40174264399985,187.73560765700043],\"min\":187.73560765700043,\"max\":188.40174264399985,\"median\":188.06867515050016,\"mean\":188.06867515050016}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.594409801499918,
            "range": "± 0.00974505362321581",
            "unit": "s",
            "extra": "{\"times\":[3.5875190079999157,3.6013005949999206],\"min\":3.5875190079999157,\"max\":3.6013005949999206,\"median\":3.594409801499918,\"mean\":3.594409801499918}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.11770112200011,
            "range": "± 0.11214862749139702",
            "unit": "s",
            "extra": "{\"times\":[33.03840006700018,33.197002177000044],\"min\":33.03840006700018,\"max\":33.197002177000044,\"median\":33.11770112200011,\"mean\":33.11770112200011}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 184.37005947849968,
            "range": "± 0.25736515380987296",
            "unit": "s",
            "extra": "{\"times\":[184.1880748329996,184.55204412399976],\"min\":184.1880748329996,\"max\":184.55204412399976,\"median\":184.37005947849968,\"mean\":184.37005947849968}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00496640644,
            "range": "± 0.004479503074040502",
            "unit": "s",
            "extra": "{\"times\":[1.00813389344,1.0017989194399999],\"min\":1.0017989194399999,\"max\":1.00813389344,\"median\":1.00496640644,\"mean\":1.00496640644}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.827257216916669,
            "range": "± 0.5086245591983398",
            "unit": "s",
            "extra": "{\"times\":[14.239724984,14.542273244,13.328731647,14.156358643,14.436335884,14.404880655,13.668878848,12.889648092,13.309639701,13.898780083,13.154380645,14.303734311,14.071773,13.85523789,14.231289392999999,13.004378919,14.229953722,13.996737945,13.802866082,13.917283672,14.350940531,13.162418511,13.097389052,13.800537752],\"min\":12.889648092,\"max\":14.542273244,\"median\":13.908031877500001,\"mean\":13.827257216916669}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.739176284499932,
            "range": "± 0.002951358345864627",
            "unit": "s",
            "extra": "{\"times\":[3.7412632100000045,3.7370893589998597],\"min\":3.7370893589998597,\"max\":3.7412632100000045,\"median\":3.739176284499932,\"mean\":3.739176284499932}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.302453860499896,
            "range": "± 0.021821034545935317",
            "unit": "s",
            "extra": "{\"times\":[3.317883661999833,3.2870240589999593],\"min\":3.2870240589999593,\"max\":3.317883661999833,\"median\":3.302453860499896,\"mean\":3.302453860499896}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4765216020001097,
            "range": "± 0.008724040221333149",
            "unit": "s",
            "extra": "{\"times\":[3.470352774000261,3.4826904299999586],\"min\":3.470352774000261,\"max\":3.4826904299999586,\"median\":3.4765216020001097,\"mean\":3.4765216020001097}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4879912359996235,
            "range": "± 0.0023345087954564454",
            "unit": "s",
            "extra": "{\"times\":[3.4863404889996166,3.4896419829996304],\"min\":3.4863404889996166,\"max\":3.4896419829996304,\"median\":3.4879912359996235,\"mean\":3.4879912359996235}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4637427177200001,
            "range": "± 0.0036719369253439852",
            "unit": "s",
            "extra": "{\"times\":[0.46114626622000005,0.46633916922000007],\"min\":0.46114626622000005,\"max\":0.46633916922000007,\"median\":0.4637427177200001,\"mean\":0.4637427177200001}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.51132069472,
            "range": "± 0.0003796428023918997",
            "unit": "s",
            "extra": "{\"times\":[0.51158914272,0.51105224672],\"min\":0.51105224672,\"max\":0.51158914272,\"median\":0.51132069472,\"mean\":0.51132069472}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.85983395200013,
            "range": "± 0.1303793747324426",
            "unit": "s",
            "extra": "{\"times\":[52.76764181199996,52.9520260920003],\"min\":52.76764181199996,\"max\":52.9520260920003,\"median\":52.85983395200013,\"mean\":52.85983395200013}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.5063345850000625,
            "range": "± 0.0009030064720180251",
            "unit": "s",
            "extra": "{\"times\":[3.5069731069998817,3.505696063000243],\"min\":3.505696063000243,\"max\":3.5069731069998817,\"median\":3.5063345850000625,\"mean\":3.5063345850000625}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.16123251200025,
            "range": "± 0.03777603144349343",
            "unit": "s",
            "extra": "{\"times\":[8.18794420000026,8.134520824000239],\"min\":8.134520824000239,\"max\":8.18794420000026,\"median\":8.16123251200025,\"mean\":8.16123251200025}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.06485630350001,
            "range": "± 0.08023206679548511",
            "unit": "s",
            "extra": "{\"times\":[52.12158894199971,52.00812366500031],\"min\":52.00812366500031,\"max\":52.12158894199971,\"median\":52.06485630350001,\"mean\":52.06485630350001}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6160851631600001,
            "range": "± 0.002372826911919177",
            "unit": "s",
            "extra": "{\"times\":[0.6144073211600001,0.61776300516],\"min\":0.6144073211600001,\"max\":0.61776300516,\"median\":0.6160851631600001,\"mean\":0.6160851631600001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.4889413751666667,
            "range": "± 0.1460343573524575",
            "unit": "s",
            "extra": "{\"times\":[3.5070493893,3.6155843083000003,3.8468147103000003,3.3509135213000003,3.3246928043,3.4605086623,3.3929463333000003,3.3169260593,3.5295446913000004,3.5157758123000002,3.5398685693000003,3.3931228823,3.3406548293,3.6620883023000004,3.5376297523],\"min\":3.3169260593,\"max\":3.8468147103000003,\"median\":3.5070493893,\"mean\":3.4889413751666667}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.8283062469999,
            "range": "± 0.4418240389033875",
            "unit": "s",
            "extra": "{\"times\":[180.51588947300007,181.1407230209997],\"min\":180.51588947300007,\"max\":181.1407230209997,\"median\":180.8283062469999,\"mean\":180.8283062469999}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 4.0065509600003715,
            "range": "± 0.008810406244322229",
            "unit": "s",
            "extra": "{\"times\":[4.000321062000003,4.01278085800074],\"min\":4.000321062000003,\"max\":4.01278085800074,\"median\":4.0065509600003715,\"mean\":4.0065509600003715}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.92544709899998,
            "range": "± 0.06759714553969334",
            "unit": "s",
            "extra": "{\"times\":[27.877648699000012,27.973245498999955],\"min\":27.877648699000012,\"max\":27.973245498999955,\"median\":27.92544709899998,\"mean\":27.92544709899998}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.71771935199993,
            "range": "± 0.4659945623022317",
            "unit": "s",
            "extra": "{\"times\":[166.0472272669999,165.38821143699997],\"min\":165.38821143699997,\"max\":166.0472272669999,\"median\":165.71771935199993,\"mean\":165.71771935199993}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5571116030000001,
            "range": "± 0.009960090452225453",
            "unit": "s",
            "extra": "{\"times\":[0.5641544505,0.5500687555],\"min\":0.5500687555,\"max\":0.5641544505,\"median\":0.5571116030000001,\"mean\":0.5571116030000001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.4919031219444445,
            "range": "± 0.19243441870145567",
            "unit": "s",
            "extra": "{\"times\":[7.3338380045,7.3127408444999995,7.7743355265,7.4277268425,7.7149440005,7.3341714795,7.7370995655,7.4292052945,7.3630665395],\"min\":7.3127408444999995,\"max\":7.7743355265,\"median\":7.4277268425,\"mean\":7.4919031219444445}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.57767622299958,
            "range": "± 0.0013539341241570223",
            "unit": "s",
            "extra": "{\"times\":[37.57671884699911,37.57863359900005],\"min\":37.57671884699911,\"max\":37.57863359900005,\"median\":37.57767622299958,\"mean\":37.57767622299958}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1833422779999676,
            "range": "± 0.0017775023995031324",
            "unit": "s",
            "extra": "{\"times\":[3.1845991620002314,3.1820853939997034],\"min\":3.1820853939997034,\"max\":3.1845991620002314,\"median\":3.1833422779999676,\"mean\":3.1833422779999676}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.049750842499547,
            "range": "± 0.0373593369526592",
            "unit": "s",
            "extra": "{\"times\":[7.076167882999405,7.023333801999688],\"min\":7.023333801999688,\"max\":7.076167882999405,\"median\":7.049750842499547,\"mean\":7.049750842499547}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.14118510299968,
            "range": "± 0.018426156199328136",
            "unit": "s",
            "extra": "{\"times\":[35.154214362999426,35.12815584299993],\"min\":35.12815584299993,\"max\":35.154214362999426,\"median\":35.14118510299968,\"mean\":35.14118510299968}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.76342395092,
            "range": "± 0.005686255042347351",
            "unit": "s",
            "extra": "{\"times\":[0.76744474042,0.75940316142],\"min\":0.75940316142,\"max\":0.76744474042,\"median\":0.76342395092,\"mean\":0.76342395092}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.511790100240006,
            "range": "± 0.015347415395722158",
            "unit": "s",
            "extra": "{\"times\":[40.50093783874,40.522642361740004],\"min\":40.50093783874,\"max\":40.522642361740004,\"median\":40.511790100240006,\"mean\":40.511790100240006}"
          }
        ]
      },
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
          "id": "cfff1da1134687a37759eb117e2d3f81564a72bc",
          "message": "build: upgrade to new Node LTS version (#1393)\n\nCo-authored-by: Bas van Gijzel <bas@nomic.foundation>",
          "timestamp": "2026-07-01T15:18:05Z",
          "tree_id": "ac5d399cc60f8ea497d4238af5ee6c0e5c36faeb",
          "url": "https://github.com/NomicFoundation/edr/commit/cfff1da1134687a37759eb117e2d3f81564a72bc"
        },
        "date": 1782925187924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.271248374499999,
            "range": "± 0.005181987498202143",
            "unit": "s",
            "extra": "{\"times\":[9.267584155999996,9.274912593000002],\"min\":9.267584155999996,\"max\":9.274912593000002,\"median\":9.271248374499999,\"mean\":9.271248374499999}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.988938032000002,
            "range": "± 0.009656972867018472",
            "unit": "s",
            "extra": "{\"times\":[3.9821095209999986,3.995766543000005],\"min\":3.9821095209999986,\"max\":3.995766543000005,\"median\":3.988938032000002,\"mean\":3.988938032000002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.097216286999999,
            "range": "± 0.0012642871257709076",
            "unit": "s",
            "extra": "{\"times\":[4.096322301,4.098110272999999],\"min\":4.096322301,\"max\":4.098110272999999,\"median\":4.097216286999999,\"mean\":4.097216286999999}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.247256093000004,
            "range": "± 0.06470561054897649",
            "unit": "s",
            "extra": "{\"times\":[9.201502317000006,9.293009869],\"min\":9.201502317000006,\"max\":9.293009869,\"median\":9.247256093000004,\"mean\":9.247256093000004}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.53069436506,
            "range": "± 0.00504644290641951",
            "unit": "s",
            "extra": "{\"times\":[0.52712599106,0.53426273906],\"min\":0.52712599106,\"max\":0.53426273906,\"median\":0.53069436506,\"mean\":0.53069436506}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.57608210436,
            "range": "± 0.004464445235135033",
            "unit": "s",
            "extra": "{\"times\":[0.5729252648600001,0.57923894386],\"min\":0.5729252648600001,\"max\":0.57923894386,\"median\":0.57608210436,\"mean\":0.57608210436}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.31739297850004,
            "range": "± 0.8645955897553464",
            "unit": "s",
            "extra": "{\"times\":[238.928754383,237.70603157400004],\"min\":237.70603157400004,\"max\":238.928754383,\"median\":238.31739297850004,\"mean\":238.31739297850004}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.880642468500014,
            "range": "± 0.051917464910196325",
            "unit": "s",
            "extra": "{\"times\":[43.843931276999996,43.917353660000025],\"min\":43.843931276999996,\"max\":43.917353660000025,\"median\":43.880642468500014,\"mean\":43.880642468500014}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.41359097250001,
            "range": "± 0.07446878590484865",
            "unit": "s",
            "extra": "{\"times\":[53.36093358899996,53.46624835600006],\"min\":53.36093358899996,\"max\":53.46624835600006,\"median\":53.41359097250001,\"mean\":53.41359097250001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.6269713625,
            "range": "± 0.09393590510974442",
            "unit": "s",
            "extra": "{\"times\":[239.560548647,239.69339407799998],\"min\":239.560548647,\"max\":239.69339407799998,\"median\":239.6269713625,\"mean\":239.6269713625}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.58770545126,
            "range": "± 0.003035936802073536",
            "unit": "s",
            "extra": "{\"times\":[0.58555871976,0.58985218276],\"min\":0.58555871976,\"max\":0.58985218276,\"median\":0.58770545126,\"mean\":0.58770545126}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.83192806334,
            "range": "± 0.17193357841226065",
            "unit": "s",
            "extra": "{\"times\":[4.26872495054,3.61762537254,3.76578465454,3.75116682554,3.8250432005399997,3.90956438554,3.76370391854,3.7240264655399997,4.10857816254,3.8823158745399997,3.67799336854,3.94734151154,3.73018568454,3.80395486854,3.70291170654],\"min\":3.61762537254,\"max\":4.26872495054,\"median\":3.76578465454,\"mean\":3.83192806334}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.6865701370001,
            "range": "± 0.177254903127528",
            "unit": "s",
            "extra": "{\"times\":[266.56123199300004,266.8119082810001],\"min\":266.56123199300004,\"max\":266.8119082810001,\"median\":266.6865701370001,\"mean\":266.6865701370001}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.273943168000085,
            "range": "± 0.0021120812864699784",
            "unit": "s",
            "extra": "{\"times\":[3.272449701000005,3.2754366350001654],\"min\":3.272449701000005,\"max\":3.2754366350001654,\"median\":3.273943168000085,\"mean\":3.273943168000085}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.794613316499976,
            "range": "± 0.007059713798094022",
            "unit": "s",
            "extra": "{\"times\":[13.789621345000109,13.799605287999846],\"min\":13.789621345000109,\"max\":13.799605287999846,\"median\":13.794613316499976,\"mean\":13.794613316499976}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 266.0993935155001,
            "range": "± 0.8035702804980754",
            "unit": "s",
            "extra": "{\"times\":[265.53118352099995,266.6676035100003],\"min\":265.53118352099995,\"max\":266.6676035100003,\"median\":266.0993935155001,\"mean\":266.0993935155001}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.65104929256,
            "range": "± 0.007054362414159891",
            "unit": "s",
            "extra": "{\"times\":[0.65603748006,0.64606110506],\"min\":0.64606110506,\"max\":0.65603748006,\"median\":0.65104929256,\"mean\":0.65104929256}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.5937635104099996,
            "range": "± 0.04808740419241947",
            "unit": "s",
            "extra": "{\"times\":[2.59520123216,2.65035088616,2.5327389231599997,2.5967630001599997],\"min\":2.5327389231599997,\"max\":2.65035088616,\"median\":2.59598211616,\"mean\":2.5937635104099996}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.6078594775002,
            "range": "± 0.5811879569453208",
            "unit": "s",
            "extra": "{\"times\":[188.1968975320002,189.0188214230002],\"min\":188.1968975320002,\"max\":189.0188214230002,\"median\":188.6078594775002,\"mean\":188.6078594775002}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.594737381499959,
            "range": "± 0.011299439791093449",
            "unit": "s",
            "extra": "{\"times\":[3.6027272919998503,3.5867474710000677],\"min\":3.5867474710000677,\"max\":3.6027272919998503,\"median\":3.594737381499959,\"mean\":3.594737381499959}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.12608077999996,
            "range": "± 0.14925924316955605",
            "unit": "s",
            "extra": "{\"times\":[33.231623002999925,33.020538556999995],\"min\":33.020538556999995,\"max\":33.231623002999925,\"median\":33.12608077999996,\"mean\":33.12608077999996}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 184.87816038900007,
            "range": "± 0.19781782005395054",
            "unit": "s",
            "extra": "{\"times\":[184.7382820670004,185.01803871099978],\"min\":184.7382820670004,\"max\":185.01803871099978,\"median\":184.87816038900007,\"mean\":184.87816038900007}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0033523028200002,
            "range": "± 0.002232741987498368",
            "unit": "s",
            "extra": "{\"times\":[1.0049310898200001,1.00177351582],\"min\":1.00177351582,\"max\":1.0049310898200001,\"median\":1.0033523028200002,\"mean\":1.0033523028200002}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.770094249426663,
            "range": "± 0.5489106363922863",
            "unit": "s",
            "extra": "{\"times\":[13.988537154760001,14.032141171760001,13.08849946376,14.572786026760001,12.93801584376,13.62977419776,13.10363534576,13.549525218760001,12.84988437776,13.71029974376,12.848960745760001,14.41048758376,14.12940064576,14.18434544076,14.22401410076,13.36718478176,13.65216547876,14.178212912760001,14.385936216760001,13.89345592376,13.05801019776,14.24691905176,14.281391966760001,14.15867839476],\"min\":12.848960745760001,\"max\":14.572786026760001,\"median\":13.94099653926,\"mean\":13.770094249426663}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.720075604999904,
            "range": "± 0.012436874081613675",
            "unit": "s",
            "extra": "{\"times\":[3.728869802999776,3.7112814070000315],\"min\":3.7112814070000315,\"max\":3.728869802999776,\"median\":3.720075604999904,\"mean\":3.720075604999904}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.306146365500288,
            "range": "± 0.007558634200811031",
            "unit": "s",
            "extra": "{\"times\":[3.31149112700019,3.300801604000386],\"min\":3.300801604000386,\"max\":3.31149112700019,\"median\":3.306146365500288,\"mean\":3.306146365500288}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4623152705000244,
            "range": "± 0.009370513303907646",
            "unit": "s",
            "extra": "{\"times\":[3.4689412240004165,3.4556893169996328],\"min\":3.4556893169996328,\"max\":3.4689412240004165,\"median\":3.4623152705000244,\"mean\":3.4623152705000244}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4866612109998245,
            "range": "± 0.00038854810527995224",
            "unit": "s",
            "extra": "{\"times\":[3.486935955999885,3.4863864659997637],\"min\":3.4863864659997637,\"max\":3.486935955999885,\"median\":3.4866612109998245,\"mean\":3.4866612109998245}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46594296288000003,
            "range": "± 0.007461656627230197",
            "unit": "s",
            "extra": "{\"times\":[0.46066677488,0.47121915088000005],\"min\":0.46066677488,\"max\":0.47121915088000005,\"median\":0.46594296288000003,\"mean\":0.46594296288000003}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5098445095400002,
            "range": "± 0.0035743689174623163",
            "unit": "s",
            "extra": "{\"times\":[0.5073170490400001,0.5123719700400001],\"min\":0.5073170490400001,\"max\":0.5123719700400001,\"median\":0.5098445095400002,\"mean\":0.5098445095400002}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.92100522649987,
            "range": "± 0.04994956269621954",
            "unit": "s",
            "extra": "{\"times\":[52.88568555200007,52.95632490099967],\"min\":52.88568555200007,\"max\":52.95632490099967,\"median\":52.92100522649987,\"mean\":52.92100522649987}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.48994842349994,
            "range": "± 0.026201165075747268",
            "unit": "s",
            "extra": "{\"times\":[3.508475444999989,3.471421401999891],\"min\":3.471421401999891,\"max\":3.508475444999989,\"median\":3.48994842349994,\"mean\":3.48994842349994}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.194200768000213,
            "range": "± 0.016113444677860668",
            "unit": "s",
            "extra": "{\"times\":[8.205594694000203,8.182806842000224],\"min\":8.182806842000224,\"max\":8.205594694000203,\"median\":8.194200768000213,\"mean\":8.194200768000213}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.2458492279998,
            "range": "± 0.3010123473049154",
            "unit": "s",
            "extra": "{\"times\":[52.45869709999999,52.033001355999616],\"min\":52.033001355999616,\"max\":52.45869709999999,\"median\":52.2458492279998,\"mean\":52.2458492279998}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6234842490200001,
            "range": "± 0.0038901458353773847",
            "unit": "s",
            "extra": "{\"times\":[0.62623499752,0.6207335005200001],\"min\":0.6207335005200001,\"max\":0.62623499752,\"median\":0.6234842490200001,\"mean\":0.6234842490200001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.5149075534866663,
            "range": "± 0.16578336773270344",
            "unit": "s",
            "extra": "{\"times\":[3.76078929902,3.34491230702,3.6756460240199997,3.40532014802,3.31289083902,3.53756993302,3.38952017602,3.3434774410199997,3.50382147702,3.46845287202,3.57821600202,3.35225406502,3.5381494540199996,3.8595391810199997,3.65305408402],\"min\":3.31289083902,\"max\":3.8595391810199997,\"median\":3.50382147702,\"mean\":3.5149075534866663}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.90435592549971,
            "range": "± 0.28682399588866575",
            "unit": "s",
            "extra": "{\"times\":[180.7015407329998,181.1071711179996],\"min\":180.7015407329998,\"max\":181.1071711179996,\"median\":180.90435592549971,\"mean\":180.90435592549971}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9851350020002574,
            "range": "± 0.0009255688354423765",
            "unit": "s",
            "extra": "{\"times\":[3.9857894780002536,3.984480526000261],\"min\":3.984480526000261,\"max\":3.9857894780002536,\"median\":3.9851350020002574,\"mean\":3.9851350020002574}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.871725509999784,
            "range": "± 0.14810579785994393",
            "unit": "s",
            "extra": "{\"times\":[27.766998895999976,27.976452123999596],\"min\":27.766998895999976,\"max\":27.976452123999596,\"median\":27.871725509999784,\"mean\":27.871725509999784}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.30865979000018,
            "range": "± 0.3325040563262898",
            "unit": "s",
            "extra": "{\"times\":[166.07354391699982,166.54377566300053],\"min\":166.07354391699982,\"max\":166.54377566300053,\"median\":166.30865979000018,\"mean\":166.30865979000018}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55968907266,
            "range": "± 0.004818156310540567",
            "unit": "s",
            "extra": "{\"times\":[0.55628212166,0.56309602366],\"min\":0.55628212166,\"max\":0.56309602366,\"median\":0.55968907266,\"mean\":0.55968907266}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.613024781808891,
            "range": "± 0.1726636470504335",
            "unit": "s",
            "extra": "{\"times\":[7.4634778309200005,7.61919276292,7.8384931599200005,7.8907908329200005,7.34840633392,7.60671948792,7.4820240919200005,7.63342002792,7.6346985079200005],\"min\":7.34840633392,\"max\":7.8907908329200005,\"median\":7.61919276292,\"mean\":7.613024781808891}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.46666296100011,
            "range": "± 0.021216323190762935",
            "unit": "s",
            "extra": "{\"times\":[37.45166075500008,37.481665167000145],\"min\":37.45166075500008,\"max\":37.481665167000145,\"median\":37.46666296100011,\"mean\":37.46666296100011}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.186262494499795,
            "range": "± 0.00033207502205163524",
            "unit": "s",
            "extra": "{\"times\":[3.1864973069997506,3.18602768199984],\"min\":3.18602768199984,\"max\":3.1864973069997506,\"median\":3.186262494499795,\"mean\":3.186262494499795}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.033776406999677,
            "range": "± 0.014730413110024954",
            "unit": "s",
            "extra": "{\"times\":[7.044192381999455,7.023360431999899],\"min\":7.023360431999899,\"max\":7.044192381999455,\"median\":7.033776406999677,\"mean\":7.033776406999677}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.17387637099996,
            "range": "± 0.08326548912652335",
            "unit": "s",
            "extra": "{\"times\":[35.114998778999784,35.23275396300014],\"min\":35.114998778999784,\"max\":35.23275396300014,\"median\":35.17387637099996,\"mean\":35.17387637099996}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.76006382344,
            "range": "± 0.01752772682960632",
            "unit": "s",
            "extra": "{\"times\":[0.77245779794,0.74766984894],\"min\":0.74766984894,\"max\":0.77245779794,\"median\":0.76006382344,\"mean\":0.76006382344}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.51620734206,
            "range": "± 0.059543279912191896",
            "unit": "s",
            "extra": "{\"times\":[40.47410388506,40.55831079906],\"min\":40.47410388506,\"max\":40.55831079906,\"median\":40.51620734206,\"mean\":40.51620734206}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bas@nomic.foundation",
            "name": "Bas van Gijzel",
            "username": "nebasuke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62a1536acf8a7d06bf5c546f3a059b5767df0da1",
          "message": "build: upgrade @typescript-eslint to v8 and adopt @tsconfig/node22 (es2024) (#1524)",
          "timestamp": "2026-07-01T21:11:25Z",
          "tree_id": "ad63a4a2cb9965a2773247065f88ecaff0ecfa29",
          "url": "https://github.com/NomicFoundation/edr/commit/62a1536acf8a7d06bf5c546f3a059b5767df0da1"
        },
        "date": 1782946398910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.286679440999997,
            "range": "± 0.035290490296421825",
            "unit": "s",
            "extra": "{\"times\":[9.261725296,9.311633585999996],\"min\":9.261725296,\"max\":9.311633585999996,\"median\":9.286679440999997,\"mean\":9.286679440999997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9863037960000005,
            "range": "± 0.00826913863021809",
            "unit": "s",
            "extra": "{\"times\":[3.992150959999999,3.9804566320000014],\"min\":3.9804566320000014,\"max\":3.992150959999999,\"median\":3.9863037960000005,\"mean\":3.9863037960000005}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.1094166575000015,
            "range": "± 0.007783016153185937",
            "unit": "s",
            "extra": "{\"times\":[4.103913233999999,4.114920081000004],\"min\":4.103913233999999,\"max\":4.114920081000004,\"median\":4.1094166575000015,\"mean\":4.1094166575000015}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.244292673999993,
            "range": "± 0.008943994271108419",
            "unit": "s",
            "extra": "{\"times\":[9.237968314999998,9.250617032999987],\"min\":9.237968314999998,\"max\":9.250617032999987,\"median\":9.244292673999993,\"mean\":9.244292673999993}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5319640772800001,
            "range": "± 0.004834318650238099",
            "unit": "s",
            "extra": "{\"times\":[0.53538245678,0.52854569778],\"min\":0.52854569778,\"max\":0.53538245678,\"median\":0.5319640772800001,\"mean\":0.5319640772800001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5744185350800001,
            "range": "± 0.0015993030049893636",
            "unit": "s",
            "extra": "{\"times\":[0.5755494130800001,0.5732876570800001],\"min\":0.5732876570800001,\"max\":0.5755494130800001,\"median\":0.5744185350800001,\"mean\":0.5744185350800001}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 239.06738621850002,
            "range": "± 0.788786552950361",
            "unit": "s",
            "extra": "{\"times\":[239.62514253899997,238.50962989800004],\"min\":238.50962989800004,\"max\":239.62514253899997,\"median\":239.06738621850002,\"mean\":239.06738621850002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.893212249,
            "range": "± 0.02411926522804426",
            "unit": "s",
            "extra": "{\"times\":[43.91026714499999,43.87615735300002],\"min\":43.87615735300002,\"max\":43.91026714499999,\"median\":43.893212249,\"mean\":43.893212249}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.554184746999965,
            "range": "± 0.261479991310223",
            "unit": "s",
            "extra": "{\"times\":[53.73907902200002,53.3692904719999],\"min\":53.3692904719999,\"max\":53.73907902200002,\"median\":53.554184746999965,\"mean\":53.554184746999965}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.17595417750002,
            "range": "± 0.31693005846161754",
            "unit": "s",
            "extra": "{\"times\":[238.95185078399996,239.40005757100008],\"min\":238.95185078399996,\"max\":239.40005757100008,\"median\":239.17595417750002,\"mean\":239.17595417750002}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5904561548,
            "range": "± 0.006912864690390269",
            "unit": "s",
            "extra": "{\"times\":[0.5855680213000001,0.5953442883000001],\"min\":0.5855680213000001,\"max\":0.5953442883000001,\"median\":0.5904561548,\"mean\":0.5904561548}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.8518997403066666,
            "range": "± 0.28867535527141186",
            "unit": "s",
            "extra": "{\"times\":[3.69068698824,3.93216275324,3.74296658624,3.61559930224,3.67625596524,3.83258795424,3.87100827124,3.7537855652400003,3.59756391924,3.73127378124,4.7220479952400005,3.82969955124,4.22627215424,3.91511066824,3.64147464924],\"min\":3.59756391924,\"max\":4.7220479952400005,\"median\":3.7537855652400003,\"mean\":3.8518997403066666}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.5404811659999,
            "range": "± 0.13561806300190804",
            "unit": "s",
            "extra": "{\"times\":[266.44458471399986,266.6363776179999],\"min\":266.44458471399986,\"max\":266.6363776179999,\"median\":266.5404811659999,\"mean\":266.5404811659999}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.279594834499992,
            "range": "± 0.014078728651620805",
            "unit": "s",
            "extra": "{\"times\":[3.2895499990000387,3.269639669999946],\"min\":3.269639669999946,\"max\":3.2895499990000387,\"median\":3.279594834499992,\"mean\":3.279594834499992}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.889671197500196,
            "range": "± 0.17991865993232714",
            "unit": "s",
            "extra": "{\"times\":[13.762449493000052,14.016892902000341],\"min\":13.762449493000052,\"max\":14.016892902000341,\"median\":13.889671197500196,\"mean\":13.889671197500196}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.9385982424999,
            "range": "± 0.2675134697232792",
            "unit": "s",
            "extra": "{\"times\":[266.12775883099994,265.7494376539998],\"min\":265.7494376539998,\"max\":266.12775883099994,\"median\":265.9385982424999,\"mean\":265.9385982424999}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6577558541400002,
            "range": "± 0.011230782551221176",
            "unit": "s",
            "extra": "{\"times\":[0.64981449164,0.6656972166400001],\"min\":0.64981449164,\"max\":0.6656972166400001,\"median\":0.6577558541400002,\"mean\":0.6577558541400002}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.57484993422,
            "range": "± 0.061584454407678665",
            "unit": "s",
            "extra": "{\"times\":[2.5088940767200003,2.5367210627200003,2.63575609272,2.6180285047200003],\"min\":2.5088940767200003,\"max\":2.63575609272,\"median\":2.5773747837200003,\"mean\":2.57484993422}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 187.79800960600005,
            "range": "± 0.2275951274711707",
            "unit": "s",
            "extra": "{\"times\":[187.95894366399992,187.63707554800015],\"min\":187.63707554800015,\"max\":187.95894366399992,\"median\":187.79800960600005,\"mean\":187.79800960600005}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.594995333999861,
            "range": "± 0.01284379564978902",
            "unit": "s",
            "extra": "{\"times\":[3.604077269000001,3.585913398999721],\"min\":3.585913398999721,\"max\":3.604077269000001,\"median\":3.594995333999861,\"mean\":3.594995333999861}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.0475141700001,
            "range": "± 0.1049593851662253",
            "unit": "s",
            "extra": "{\"times\":[33.121731663000304,32.97329667699989],\"min\":32.97329667699989,\"max\":33.121731663000304,\"median\":33.0475141700001,\"mean\":33.0475141700001}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 184.97933955699995,
            "range": "± 0.26115033812877475",
            "unit": "s",
            "extra": "{\"times\":[184.79467838199994,185.16400073199998],\"min\":184.79467838199994,\"max\":185.16400073199998,\"median\":184.97933955699995,\"mean\":184.97933955699995}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00583777756,
            "range": "± 0.0011926197321780738",
            "unit": "s",
            "extra": "{\"times\":[1.00668108706,1.00499446806],\"min\":1.00499446806,\"max\":1.00668108706,\"median\":1.00583777756,\"mean\":1.00583777756}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.58335610378,
            "range": "± 0.5647607825789143",
            "unit": "s",
            "extra": "{\"times\":[14.295691318780001,12.77661060578,12.59389749178,13.129395893780002,13.994449070780002,13.326392375780001,14.484722239780002,12.936839451780001,13.71136255378,14.39685772478,12.880433487780001,12.864997200780001,13.286022202780002,13.95752605178,13.79941829478,13.52655253778,14.08917459178,13.809076241780001,14.03462605478,13.825347545780001,13.003860433780002,14.15011647578,13.15513526378,13.97204138078],\"min\":12.59389749178,\"max\":14.484722239780002,\"median\":13.755390424280002,\"mean\":13.58335610378}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7535389699998776,
            "range": "± 0.0036231953478726656",
            "unit": "s",
            "extra": "{\"times\":[3.7509769839998333,3.756100955999922],\"min\":3.7509769839998333,\"max\":3.756100955999922,\"median\":3.7535389699998776,\"mean\":3.7535389699998776}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3133652775001243,
            "range": "± 0.014329871767009233",
            "unit": "s",
            "extra": "{\"times\":[3.3234980270001104,3.3032325280001387],\"min\":3.3032325280001387,\"max\":3.3234980270001104,\"median\":3.3133652775001243,\"mean\":3.3133652775001243}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.6513339269999414,
            "range": "± 0.24964496833700858",
            "unit": "s",
            "extra": "{\"times\":[3.827859577000141,3.4748082769997417],\"min\":3.4748082769997417,\"max\":3.827859577000141,\"median\":3.6513339269999414,\"mean\":3.6513339269999414}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4842650804999282,
            "range": "± 0.02342867575443653",
            "unit": "s",
            "extra": "{\"times\":[3.5008316560001114,3.4676985049997455],\"min\":3.4676985049997455,\"max\":3.5008316560001114,\"median\":3.4842650804999282,\"mean\":3.4842650804999282}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4619958253,
            "range": "± 0.003876414528793587",
            "unit": "s",
            "extra": "{\"times\":[0.4647368643,0.4592547863],\"min\":0.4592547863,\"max\":0.4647368643,\"median\":0.4619958253,\"mean\":0.4619958253}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50652062114,
            "range": "± 0.001135399944337669",
            "unit": "s",
            "extra": "{\"times\":[0.50732347014,0.50571777214],\"min\":0.50571777214,\"max\":0.50732347014,\"median\":0.50652062114,\"mean\":0.50652062114}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.95153334550001,
            "range": "± 0.10537990793235351",
            "unit": "s",
            "extra": "{\"times\":[53.02604819299979,52.877018498000226],\"min\":52.877018498000226,\"max\":53.02604819299979,\"median\":52.95153334550001,\"mean\":52.95153334550001}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4894590465000364,
            "range": "± 0.009352722496826777",
            "unit": "s",
            "extra": "{\"times\":[3.482845672999974,3.4960724200000985],\"min\":3.482845672999974,\"max\":3.4960724200000985,\"median\":3.4894590465000364,\"mean\":3.4894590465000364}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.166143664499746,
            "range": "± 0.008805099407197668",
            "unit": "s",
            "extra": "{\"times\":[8.172369809999596,8.159917518999894],\"min\":8.159917518999894,\"max\":8.172369809999596,\"median\":8.166143664499746,\"mean\":8.166143664499746}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.1577738615002,
            "range": "± 0.2670424814527993",
            "unit": "s",
            "extra": "{\"times\":[51.96894631200004,52.34660141100036],\"min\":51.96894631200004,\"max\":52.34660141100036,\"median\":52.1577738615002,\"mean\":52.1577738615002}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6270375057400002,
            "range": "± 0.002091049809363846",
            "unit": "s",
            "extra": "{\"times\":[0.6285161012400001,0.6255589102400001],\"min\":0.6255589102400001,\"max\":0.6285161012400001,\"median\":0.6270375057400002,\"mean\":0.6270375057400002}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.5517441023733336,
            "range": "± 0.18989963615327632",
            "unit": "s",
            "extra": "{\"times\":[4.03478384584,3.41687929584,3.52407627484,3.53948558384,3.31647135484,3.75455247684,3.6203744268399998,3.77529168984,3.46488312184,3.54811596084,3.58626161784,3.44300589084,3.33580828784,3.5489728878399998,3.36719881984],\"min\":3.31647135484,\"max\":4.03478384584,\"median\":3.53948558384,\"mean\":3.5517441023733336}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.60608129550005,
            "range": "± 0.48100092312711873",
            "unit": "s",
            "extra": "{\"times\":[180.26596228099987,180.94620031000022],\"min\":180.26596228099987,\"max\":180.94620031000022,\"median\":180.60608129550005,\"mean\":180.60608129550005}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 4.024961967999814,
            "range": "± 0.04600872437660196",
            "unit": "s",
            "extra": "{\"times\":[4.057495049000252,3.992428886999376],\"min\":3.992428886999376,\"max\":4.057495049000252,\"median\":4.024961967999814,\"mean\":4.024961967999814}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.84655843250011,
            "range": "± 0.02213388262778764",
            "unit": "s",
            "extra": "{\"times\":[27.830907414000016,27.862209451000208],\"min\":27.830907414000016,\"max\":27.862209451000208,\"median\":27.84655843250011,\"mean\":27.84655843250011}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.92190890499973,
            "range": "± 0.8440798729131664",
            "unit": "s",
            "extra": "{\"times\":[166.5187635069997,165.32505430299975],\"min\":165.32505430299975,\"max\":166.5187635069997,\"median\":165.92190890499973,\"mean\":165.92190890499973}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5577778683600001,
            "range": "± 0.0024451094884124576",
            "unit": "s",
            "extra": "{\"times\":[0.5595068218600001,0.5560489148600001],\"min\":0.5560489148600001,\"max\":0.5595068218600001,\"median\":0.5577778683600001,\"mean\":0.5577778683600001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.457084565997777,
            "range": "± 0.14736029902692263",
            "unit": "s",
            "extra": "{\"times\":[7.70220787122,7.38257844122,7.36882135722,7.48428185922,7.44341047122,7.315603847219999,7.27385889022,7.47251193722,7.6704864192199995],\"min\":7.27385889022,\"max\":7.70220787122,\"median\":7.44341047122,\"mean\":7.457084565997777}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.170875252999835,
            "range": "± 0.9783165292786195",
            "unit": "s",
            "extra": "{\"times\":[37.47910100100003,38.86264950499963],\"min\":37.47910100100003,\"max\":38.86264950499963,\"median\":38.170875252999835,\"mean\":38.170875252999835}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.195678141500335,
            "range": "± 0.004529467946452002",
            "unit": "s",
            "extra": "{\"times\":[3.192475324000232,3.1988809590004386],\"min\":3.192475324000232,\"max\":3.1988809590004386,\"median\":3.195678141500335,\"mean\":3.195678141500335}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.0562861824999565,
            "range": "± 0.02388518954888922",
            "unit": "s",
            "extra": "{\"times\":[7.0393968030000105,7.073175561999902],\"min\":7.0393968030000105,\"max\":7.073175561999902,\"median\":7.0562861824999565,\"mean\":7.0562861824999565}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.18743758999975,
            "range": "± 0.05707442931384649",
            "unit": "s",
            "extra": "{\"times\":[35.14707987399958,35.227795305999926],\"min\":35.14707987399958,\"max\":35.227795305999926,\"median\":35.18743758999975,\"mean\":35.18743758999975}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7652074153000001,
            "range": "± 0.004331445520661674",
            "unit": "s",
            "extra": "{\"times\":[0.7621446208000001,0.7682702098],\"min\":0.7621446208000001,\"max\":0.7682702098,\"median\":0.7652074153000001,\"mean\":0.7652074153000001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.537742716539995,
            "range": "± 0.005492787798587677",
            "unit": "s",
            "extra": "{\"times\":[40.53385872904,40.54162670404],\"min\":40.53385872904,\"max\":40.54162670404,\"median\":40.537742716539995,\"mean\":40.537742716539995}"
          }
        ]
      }
    ]
  }
}