window.BENCHMARK_DATA = {
  "lastUpdate": 1783533096445,
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
          "id": "6094a139d80371f3225d78c0541caf88768ff296",
          "message": "build: upgrade to pnpm 11 (#1526)",
          "timestamp": "2026-07-01T22:10:23Z",
          "tree_id": "cb663714150c4ec1786474c3a7a96696f66da810",
          "url": "https://github.com/NomicFoundation/edr/commit/6094a139d80371f3225d78c0541caf88768ff296"
        },
        "date": 1782951803901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.256531038499997,
            "range": "± 0.04241264869454879",
            "unit": "s",
            "extra": "{\"times\":[9.286521309999996,9.226540767],\"min\":9.226540767,\"max\":9.286521309999996,\"median\":9.256531038499997,\"mean\":9.256531038499997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9934041204999993,
            "range": "± 0.0005719199854422692",
            "unit": "s",
            "extra": "{\"times\":[3.9938085290000016,3.992999711999997],\"min\":3.992999711999997,\"max\":3.9938085290000016,\"median\":3.9934041204999993,\"mean\":3.9934041204999993}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.116793353500001,
            "range": "± 0.01910523963203089",
            "unit": "s",
            "extra": "{\"times\":[4.103283908999998,4.130302798000004],\"min\":4.103283908999998,\"max\":4.130302798000004,\"median\":4.116793353500001,\"mean\":4.116793353500001}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.277477540500001,
            "range": "± 0.00827056203616675",
            "unit": "s",
            "extra": "{\"times\":[9.271629370000003,9.283325710999998],\"min\":9.271629370000003,\"max\":9.283325710999998,\"median\":9.277477540500001,\"mean\":9.277477540500001}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5331359562,
            "range": "± 0.004181807583626999",
            "unit": "s",
            "extra": "{\"times\":[0.5301789717000001,0.5360929407],\"min\":0.5301789717000001,\"max\":0.5360929407,\"median\":0.5331359562,\"mean\":0.5331359562}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5747820247400002,
            "range": "± 0.001983760497454399",
            "unit": "s",
            "extra": "{\"times\":[0.5733792942400001,0.5761847552400001],\"min\":0.5733792942400001,\"max\":0.5761847552400001,\"median\":0.5747820247400002,\"mean\":0.5747820247400002}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.51367354099997,
            "range": "± 0.14139896640813818",
            "unit": "s",
            "extra": "{\"times\":[238.413689373,238.61365770899994],\"min\":238.413689373,\"max\":238.61365770899994,\"median\":238.51367354099997,\"mean\":238.51367354099997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.91744462449997,
            "range": "± 0.15632801924838632",
            "unit": "s",
            "extra": "{\"times\":[43.806904021999976,44.02798522699997],\"min\":43.806904021999976,\"max\":44.02798522699997,\"median\":43.91744462449997,\"mean\":43.91744462449997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.39330499050004,
            "range": "± 0.04343010747044692",
            "unit": "s",
            "extra": "{\"times\":[53.362595267000025,53.42401471400005],\"min\":53.362595267000025,\"max\":53.42401471400005,\"median\":53.39330499050004,\"mean\":53.39330499050004}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.96924267000003,
            "range": "± 0.4232966745102586",
            "unit": "s",
            "extra": "{\"times\":[239.26855861899995,238.6699267210001],\"min\":238.6699267210001,\"max\":239.26855861899995,\"median\":238.96924267000003,\"mean\":238.96924267000003}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5908679000600001,
            "range": "± 0.012757607111138837",
            "unit": "s",
            "extra": "{\"times\":[0.59988889056,0.5818469095600001],\"min\":0.5818469095600001,\"max\":0.59988889056,\"median\":0.5908679000600001,\"mean\":0.5908679000600001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.841908778246667,
            "range": "± 0.20376217630246002",
            "unit": "s",
            "extra": "{\"times\":[3.66780350298,4.015557234979999,3.68766895198,4.21653747498,3.68404192198,3.7229575229800003,3.82772082298,3.92108298198,3.88488547898,4.28105656398,3.62489409998,3.68636221498,3.82639711198,3.6499852019800003,3.9316805869800002],\"min\":3.62489409998,\"max\":4.28105656398,\"median\":3.82639711198,\"mean\":3.841908778246667}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.58342011649984,
            "range": "± 0.0727380260922707",
            "unit": "s",
            "extra": "{\"times\":[266.5319865649999,266.63485366799983],\"min\":266.5319865649999,\"max\":266.63485366799983,\"median\":266.58342011649984,\"mean\":266.58342011649984}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2729207915001313,
            "range": "± 0.013611428650020456",
            "unit": "s",
            "extra": "{\"times\":[3.282545525000198,3.263296058000065],\"min\":3.263296058000065,\"max\":3.282545525000198,\"median\":3.2729207915001313,\"mean\":3.2729207915001313}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.79434299200005,
            "range": "± 0.008878083433707797",
            "unit": "s",
            "extra": "{\"times\":[13.800620744999964,13.788065239000135],\"min\":13.788065239000135,\"max\":13.800620744999964,\"median\":13.79434299200005,\"mean\":13.79434299200005}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 268.348766407,
            "range": "± 4.125553079981499",
            "unit": "s",
            "extra": "{\"times\":[265.43155984800006,271.265972966],\"min\":265.43155984800006,\"max\":271.265972966,\"median\":268.348766407,\"mean\":268.348766407}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66690627966,
            "range": "± 0.0030882938165797094",
            "unit": "s",
            "extra": "{\"times\":[0.66909003316,0.66472252616],\"min\":0.66472252616,\"max\":0.66909003316,\"median\":0.66690627966,\"mean\":0.66690627966}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.5905315639900004,
            "range": "± 0.059550235189636244",
            "unit": "s",
            "extra": "{\"times\":[2.66785091924,2.5429180872400003,2.6069207922400004,2.5444364572400002],\"min\":2.5429180872400003,\"max\":2.66785091924,\"median\":2.57567862474,\"mean\":2.5905315639900004}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.36311869200017,
            "range": "± 0.1985451317047067",
            "unit": "s",
            "extra": "{\"times\":[188.2227260830002,188.50351130100015],\"min\":188.2227260830002,\"max\":188.50351130100015,\"median\":188.36311869200017,\"mean\":188.36311869200017}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.5768848925000056,
            "range": "± 0.006420636346340543",
            "unit": "s",
            "extra": "{\"times\":[3.581424968000036,3.5723448169999754],\"min\":3.5723448169999754,\"max\":3.581424968000036,\"median\":3.5768848925000056,\"mean\":3.5768848925000056}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.09798828650033,
            "range": "± 0.04788219884294901",
            "unit": "s",
            "extra": "{\"times\":[33.131846114000304,33.06413045900036],\"min\":33.06413045900036,\"max\":33.131846114000304,\"median\":33.09798828650033,\"mean\":33.09798828650033}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.0834550404998,
            "range": "± 0.6636403595405724",
            "unit": "s",
            "extra": "{\"times\":[184.6141904419996,185.55271963900003],\"min\":184.6141904419996,\"max\":185.55271963900003,\"median\":185.0834550404998,\"mean\":185.0834550404998}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0018680346600002,
            "range": "± 0.009373939942815154",
            "unit": "s",
            "extra": "{\"times\":[1.00849641116,0.99523965816],\"min\":0.99523965816,\"max\":1.00849641116,\"median\":1.0018680346600002,\"mean\":1.0018680346600002}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.695247714828332,
            "range": "± 0.5386652537770619",
            "unit": "s",
            "extra": "{\"times\":[13.54645813662,14.47014997662,14.33040241262,13.08704070662,14.20305525762,13.83758368262,13.668776516620001,13.51777324462,13.15688269862,14.457164156620001,13.279339977620001,13.702314791620001,13.180285362620001,14.58523824162,14.417929689620001,13.79833280062,13.559415124620001,13.430483268620002,12.544060896620001,13.13391513762,13.58293325062,13.16184520562,14.24138224162,13.79318237762],\"min\":12.544060896620001,\"max\":14.58523824162,\"median\":13.62585488362,\"mean\":13.695247714828332}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.715932126500178,
            "range": "± 0.005613131716025238",
            "unit": "s",
            "extra": "{\"times\":[3.719901210000273,3.7119630430000834],\"min\":3.7119630430000834,\"max\":3.719901210000273,\"median\":3.715932126500178,\"mean\":3.715932126500178}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.319289720999776,
            "range": "± 0.03531956369906618",
            "unit": "s",
            "extra": "{\"times\":[3.3442644239999355,3.2943150179996157],\"min\":3.2943150179996157,\"max\":3.3442644239999355,\"median\":3.319289720999776,\"mean\":3.319289720999776}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.49538914900017,
            "range": "± 0.021125137528790798",
            "unit": "s",
            "extra": "{\"times\":[3.480451421000063,3.510326877000276],\"min\":3.480451421000063,\"max\":3.510326877000276,\"median\":3.49538914900017,\"mean\":3.49538914900017}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.484244774499908,
            "range": "± 0.007022563821826021",
            "unit": "s",
            "extra": "{\"times\":[3.4892104769996366,3.4792790720001796],\"min\":3.4792790720001796,\"max\":3.4892104769996366,\"median\":3.484244774499908,\"mean\":3.484244774499908}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46714163506000006,
            "range": "± 0.006629341034085384",
            "unit": "s",
            "extra": "{\"times\":[0.47182928706000005,0.46245398306],\"min\":0.46245398306,\"max\":0.47182928706000005,\"median\":0.46714163506000006,\"mean\":0.46714163506000006}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50989692484,
            "range": "± 0.0029427811405064648",
            "unit": "s",
            "extra": "{\"times\":[0.51197778534,0.50781606434],\"min\":0.50781606434,\"max\":0.51197778534,\"median\":0.50989692484,\"mean\":0.50989692484}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.081235549500214,
            "range": "± 0.42327560202118536",
            "unit": "s",
            "extra": "{\"times\":[52.781934501000215,53.38053659800021],\"min\":52.781934501000215,\"max\":53.38053659800021,\"median\":53.081235549500214,\"mean\":53.081235549500214}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4946000990001487,
            "range": "± 0.0013478431057328281",
            "unit": "s",
            "extra": "{\"times\":[3.4955531680001877,3.4936470300001092],\"min\":3.4936470300001092,\"max\":3.4955531680001877,\"median\":3.4946000990001487,\"mean\":3.4946000990001487}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.166626648999983,
            "range": "± 0.04527490451519071",
            "unit": "s",
            "extra": "{\"times\":[8.134612456999719,8.198640841000248],\"min\":8.134612456999719,\"max\":8.198640841000248,\"median\":8.166626648999983,\"mean\":8.166626648999983}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.23487260500016,
            "range": "± 0.04711945195041368",
            "unit": "s",
            "extra": "{\"times\":[52.26819108900009,52.20155412100023],\"min\":52.20155412100023,\"max\":52.26819108900009,\"median\":52.23487260500016,\"mean\":52.23487260500016}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6209007522200001,
            "range": "± 0.0016662879374779568",
            "unit": "s",
            "extra": "{\"times\":[0.61972250872,0.62207899572],\"min\":0.61972250872,\"max\":0.62207899572,\"median\":0.6209007522200001,\"mean\":0.6209007522200001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.5070172656400005,
            "range": "± 0.15386516956243523",
            "unit": "s",
            "extra": "{\"times\":[3.51004431044,3.42229395144,3.27134770244,3.60054971444,3.62868992044,3.38823791144,3.52214990544,3.53339135044,3.31745650544,3.91138885844,3.40995222344,3.40047396444,3.55931439844,3.58001363144,3.5499546364400003],\"min\":3.27134770244,\"max\":3.91138885844,\"median\":3.52214990544,\"mean\":3.5070172656400005}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.63039462150027,
            "range": "± 0.0050189725151988315",
            "unit": "s",
            "extra": "{\"times\":[180.6268456720002,180.63394357100037],\"min\":180.6268456720002,\"max\":180.63394357100037,\"median\":180.63039462150027,\"mean\":180.63039462150027}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 4.016631206500344,
            "range": "± 0.00035397694798132087",
            "unit": "s",
            "extra": "{\"times\":[4.016380907000043,4.0168815060006455],\"min\":4.016380907000043,\"max\":4.0168815060006455,\"median\":4.016631206500344,\"mean\":4.016631206500344}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.800199661500052,
            "range": "± 0.12840096420467326",
            "unit": "s",
            "extra": "{\"times\":[27.709406469000037,27.890992854000068],\"min\":27.709406469000037,\"max\":27.890992854000068,\"median\":27.800199661500052,\"mean\":27.800199661500052}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.07708542850008,
            "range": "± 0.0024183667095424516",
            "unit": "s",
            "extra": "{\"times\":[166.07537538500037,166.0787954719998],\"min\":166.07537538500037,\"max\":166.0787954719998,\"median\":166.07708542850008,\"mean\":166.07708542850008}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55514477194,
            "range": "± 0.006123391282904006",
            "unit": "s",
            "extra": "{\"times\":[0.5594746634400001,0.55081488044],\"min\":0.55081488044,\"max\":0.5594746634400001,\"median\":0.55514477194,\"mean\":0.55514477194}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.575491675397779,
            "range": "± 0.1844980344162721",
            "unit": "s",
            "extra": "{\"times\":[7.45437441362,7.70700689762,7.48146943662,7.37354850762,7.4134628006200005,7.96993139162,7.66581019862,7.56167216162,7.55214927062],\"min\":7.37354850762,\"max\":7.96993139162,\"median\":7.55214927062,\"mean\":7.575491675397779}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.49275958349975,
            "range": "± 0.08483354861878986",
            "unit": "s",
            "extra": "{\"times\":[37.55274596100021,37.43277320599928],\"min\":37.43277320599928,\"max\":37.55274596100021,\"median\":37.49275958349975,\"mean\":37.49275958349975}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.2056801570001987,
            "range": "± 0.005322756194517406",
            "unit": "s",
            "extra": "{\"times\":[3.201916400000453,3.209443913999945],\"min\":3.201916400000453,\"max\":3.209443913999945,\"median\":3.2056801570001987,\"mean\":3.2056801570001987}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.029831522000488,
            "range": "± 0.015940240285894018",
            "unit": "s",
            "extra": "{\"times\":[7.018560070000589,7.0411029740003865],\"min\":7.018560070000589,\"max\":7.0411029740003865,\"median\":7.029831522000488,\"mean\":7.029831522000488}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.20398319049971,
            "range": "± 0.01070995739456155",
            "unit": "s",
            "extra": "{\"times\":[35.1964101069998,35.211556273999626],\"min\":35.1964101069998,\"max\":35.211556273999626,\"median\":35.20398319049971,\"mean\":35.20398319049971}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7552334435000001,
            "range": "± 0.015839564543852314",
            "unit": "s",
            "extra": "{\"times\":[0.766433707,0.7440331800000001],\"min\":0.7440331800000001,\"max\":0.766433707,\"median\":0.7552334435000001,\"mean\":0.7552334435000001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.514692587940004,
            "range": "± 0.012573250231150163",
            "unit": "s",
            "extra": "{\"times\":[40.52358321844,40.50580195744],\"min\":40.50580195744,\"max\":40.52358321844,\"median\":40.514692587940004,\"mean\":40.514692587940004}"
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
          "id": "d2e5ae8f3373c39c82c56e8eea57ce408b8e1dc7",
          "message": "build: extend typescript-eslint recommended-type-checked preset (#1527)",
          "timestamp": "2026-07-02T11:54:24Z",
          "tree_id": "980ded9d57401d2cf25ec4267f8db44bcceb9af9",
          "url": "https://github.com/NomicFoundation/edr/commit/d2e5ae8f3373c39c82c56e8eea57ce408b8e1dc7"
        },
        "date": 1782999400452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.301387708000002,
            "range": "± 0.0009923084018851514",
            "unit": "s",
            "extra": "{\"times\":[9.30068604,9.302089376000003],\"min\":9.30068604,\"max\":9.302089376000003,\"median\":9.301387708000002,\"mean\":9.301387708000002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.009094496499998,
            "range": "± 0.016457850228046463",
            "unit": "s",
            "extra": "{\"times\":[4.020731954000002,3.9974570389999937],\"min\":3.9974570389999937,\"max\":4.020731954000002,\"median\":4.009094496499998,\"mean\":4.009094496499998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.112566610500005,
            "range": "± 0.02085217380501109",
            "unit": "s",
            "extra": "{\"times\":[4.097821897000002,4.12731132400001],\"min\":4.097821897000002,\"max\":4.12731132400001,\"median\":4.112566610500005,\"mean\":4.112566610500005}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.253397045000002,
            "range": "± 0.03526039158918431",
            "unit": "s",
            "extra": "{\"times\":[9.228464182999996,9.278329907000007],\"min\":9.228464182999996,\"max\":9.278329907000007,\"median\":9.253397045000002,\"mean\":9.253397045000002}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5273403996800001,
            "range": "± 0.0031584381021666297",
            "unit": "s",
            "extra": "{\"times\":[0.5251070466800001,0.5295737526800001],\"min\":0.5251070466800001,\"max\":0.5295737526800001,\"median\":0.5273403996800001,\"mean\":0.5273403996800001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5807643555199999,
            "range": "± 0.001151626630752354",
            "unit": "s",
            "extra": "{\"times\":[0.57995003252,0.58157867852],\"min\":0.57995003252,\"max\":0.58157867852,\"median\":0.5807643555199999,\"mean\":0.5807643555199999}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.64039113,
            "range": "± 0.2810025038461746",
            "unit": "s",
            "extra": "{\"times\":[238.441692354,238.83908990600005],\"min\":238.441692354,\"max\":238.83908990600005,\"median\":238.64039113,\"mean\":238.64039113}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.909084337999985,
            "range": "± 0.17406784275699874",
            "unit": "s",
            "extra": "{\"times\":[43.785999786,44.03216888999997],\"min\":43.785999786,\"max\":44.03216888999997,\"median\":43.909084337999985,\"mean\":43.909084337999985}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.574599968499996,
            "range": "± 0.01743800912118704",
            "unit": "s",
            "extra": "{\"times\":[53.586930502999984,53.562269434000015],\"min\":53.562269434000015,\"max\":53.586930502999984,\"median\":53.574599968499996,\"mean\":53.574599968499996}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.95181178649992,
            "range": "± 0.9557438911361333",
            "unit": "s",
            "extra": "{\"times\":[238.27599879999994,239.6276247729999],\"min\":238.27599879999994,\"max\":239.6276247729999,\"median\":238.95181178649992,\"mean\":238.95181178649992}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.58700312456,
            "range": "± 0.00005552202445874709",
            "unit": "s",
            "extra": "{\"times\":[0.58704238456,0.58696386456],\"min\":0.58696386456,\"max\":0.58704238456,\"median\":0.58700312456,\"mean\":0.58700312456}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.7583377828133333,
            "range": "± 0.08240198364873223",
            "unit": "s",
            "extra": "{\"times\":[3.70625209208,3.79762232608,3.8085185210800003,3.92456629608,3.78609478008,3.83315625408,3.76635870708,3.78150678508,3.6267344120800002,3.71538523808,3.60184900508,3.69324900908,3.83280864408,3.74252541808,3.7584392540800002],\"min\":3.60184900508,\"max\":3.92456629608,\"median\":3.76635870708,\"mean\":3.7583377828133333}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.795757874,
            "range": "± 0.5264094390034392",
            "unit": "s",
            "extra": "{\"times\":[267.16798555799994,266.42353019000006],\"min\":266.42353019000006,\"max\":267.16798555799994,\"median\":266.795757874,\"mean\":266.795757874}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.280419283000054,
            "range": "± 0.011312038312562217",
            "unit": "s",
            "extra": "{\"times\":[3.2884181019999086,3.272420464000199],\"min\":3.272420464000199,\"max\":3.2884181019999086,\"median\":3.280419283000054,\"mean\":3.280419283000054}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.79975097599998,
            "range": "± 0.03379831679738298",
            "unit": "s",
            "extra": "{\"times\":[13.77585195699986,13.823649995000101],\"min\":13.77585195699986,\"max\":13.823649995000101,\"median\":13.79975097599998,\"mean\":13.79975097599998}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.85103431950006,
            "range": "± 0.1779223263689906",
            "unit": "s",
            "extra": "{\"times\":[265.7252242360001,265.9768444030001],\"min\":265.7252242360001,\"max\":265.9768444030001,\"median\":265.85103431950006,\"mean\":265.85103431950006}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66823899494,
            "range": "± 0.0010173746301695246",
            "unit": "s",
            "extra": "{\"times\":[0.6675196024400001,0.6689583874400001],\"min\":0.6675196024400001,\"max\":0.6689583874400001,\"median\":0.66823899494,\"mean\":0.66823899494}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.5481092386400004,
            "range": "± 0.008494123174402611",
            "unit": "s",
            "extra": "{\"times\":[2.54734735264,2.5570722636400003,2.55114676264,2.53687057564],\"min\":2.53687057564,\"max\":2.5570722636400003,\"median\":2.54924705764,\"mean\":2.5481092386400004}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.38286658649986,
            "range": "± 0.7155097263399054",
            "unit": "s",
            "extra": "{\"times\":[188.88880836599972,187.87692480699997],\"min\":187.87692480699997,\"max\":188.88880836599972,\"median\":188.38286658649986,\"mean\":188.38286658649986}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.6107930774998387,
            "range": "± 0.02633454945615929",
            "unit": "s",
            "extra": "{\"times\":[3.592171738999896,3.6294144159997814],\"min\":3.592171738999896,\"max\":3.6294144159997814,\"median\":3.6107930774998387,\"mean\":3.6107930774998387}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.63972730100015,
            "range": "± 0.9188324370325289",
            "unit": "s",
            "extra": "{\"times\":[34.289439948000016,32.99001465400029],\"min\":32.99001465400029,\"max\":34.289439948000016,\"median\":33.63972730100015,\"mean\":33.63972730100015}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 189.1571021125,
            "range": "± 5.776515795317233",
            "unit": "s",
            "extra": "{\"times\":[185.07248862199998,193.24171560300002],\"min\":185.07248862199998,\"max\":193.24171560300002,\"median\":189.1571021125,\"mean\":189.1571021125}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0003134273,
            "range": "± 0.003211839513388596",
            "unit": "s",
            "extra": "{\"times\":[1.0025845408,0.9980423138000001],\"min\":0.9980423138000001,\"max\":1.0025845408,\"median\":1.0003134273,\"mean\":1.0003134273}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.798413986061663,
            "range": "± 0.5258837618583219",
            "unit": "s",
            "extra": "{\"times\":[13.50463749552,13.68605369552,12.89427493352,14.26960868452,14.37297719652,14.35257960852,13.79006846952,14.46431135252,13.04779326852,13.61581029352,14.25332401652,14.25091181552,13.58316048152,13.29914852152,14.57099933852,14.09195887452,13.40413256252,13.39090574352,13.25896000652,14.45660751552,13.33728560852,13.62468523352,13.16326362352,14.47847732552],\"min\":12.89427493352,\"max\":14.57099933852,\"median\":13.65536946452,\"mean\":13.798413986061663}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7246627160001085,
            "range": "± 0.016069062413847115",
            "unit": "s",
            "extra": "{\"times\":[3.7360252590002494,3.713300172999967],\"min\":3.713300172999967,\"max\":3.7360252590002494,\"median\":3.7246627160001085,\"mean\":3.7246627160001085}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.2993916639999954,
            "range": "± 0.0071346607526639",
            "unit": "s",
            "extra": "{\"times\":[3.294346697000321,3.3044366309996693],\"min\":3.294346697000321,\"max\":3.3044366309996693,\"median\":3.2993916639999954,\"mean\":3.2993916639999954}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4923764765001835,
            "range": "± 0.0388844078876284",
            "unit": "s",
            "extra": "{\"times\":[3.4648810480004175,3.519871904999949],\"min\":3.4648810480004175,\"max\":3.519871904999949,\"median\":3.4923764765001835,\"mean\":3.4923764765001835}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4945776094996837,
            "range": "± 0.0150630934158099",
            "unit": "s",
            "extra": "{\"times\":[3.5052288249996493,3.483926393999718],\"min\":3.483926393999718,\"max\":3.5052288249996493,\"median\":3.4945776094996837,\"mean\":3.4945776094996837}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46796539828000006,
            "range": "± 0.004648398357154002",
            "unit": "s",
            "extra": "{\"times\":[0.47125231228000003,0.46467848428],\"min\":0.46467848428,\"max\":0.47125231228000003,\"median\":0.46796539828000006,\"mean\":0.46796539828000006}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.51178101204,
            "range": "± 0.001747038117675905",
            "unit": "s",
            "extra": "{\"times\":[0.51301635454,0.51054566954],\"min\":0.51054566954,\"max\":0.51301635454,\"median\":0.51178101204,\"mean\":0.51178101204}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.87109802299994,
            "range": "± 0.06830099397304579",
            "unit": "s",
            "extra": "{\"times\":[52.822801926999816,52.91939411900006],\"min\":52.822801926999816,\"max\":52.91939411900006,\"median\":52.87109802299994,\"mean\":52.87109802299994}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4908997190000957,
            "range": "± 0.011354748976587984",
            "unit": "s",
            "extra": "{\"times\":[3.4828706990000793,3.498928739000112],\"min\":3.4828706990000793,\"max\":3.498928739000112,\"median\":3.4908997190000957,\"mean\":3.4908997190000957}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.178218583500012,
            "range": "± 0.023542010828962585",
            "unit": "s",
            "extra": "{\"times\":[8.161571868000086,8.19486529899994],\"min\":8.161571868000086,\"max\":8.19486529899994,\"median\":8.178218583500012,\"mean\":8.178218583500012}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.22221851799986,
            "range": "± 0.1193261629571225",
            "unit": "s",
            "extra": "{\"times\":[52.306594856999816,52.13784217899991],\"min\":52.13784217899991,\"max\":52.306594856999816,\"median\":52.22221851799986,\"mean\":52.22221851799986}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6219644884800001,
            "range": "± 0.00221886784534465",
            "unit": "s",
            "extra": "{\"times\":[0.6203955119800001,0.6235334649800001],\"min\":0.6203955119800001,\"max\":0.6235334649800001,\"median\":0.6219644884800001,\"mean\":0.6219644884800001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.500965132786666,
            "range": "± 0.11603448921177026",
            "unit": "s",
            "extra": "{\"times\":[3.70441072292,3.43593536092,3.50698709492,3.61110453892,3.56922861692,3.46560190692,3.49431241292,3.33298726692,3.56379516992,3.45277055292,3.66434576792,3.40513351192,3.36739805192,3.60188115192,3.33858486392],\"min\":3.33298726692,\"max\":3.70441072292,\"median\":3.49431241292,\"mean\":3.500965132786666}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.52922111349972,
            "range": "± 0.10051967169726639",
            "unit": "s",
            "extra": "{\"times\":[180.45814297199993,180.6002992549995],\"min\":180.45814297199993,\"max\":180.6002992549995,\"median\":180.52922111349972,\"mean\":180.52922111349972}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9812054204999003,
            "range": "± 0.003509678546014269",
            "unit": "s",
            "extra": "{\"times\":[3.9787237030002287,3.983687137999572],\"min\":3.9787237030002287,\"max\":3.983687137999572,\"median\":3.9812054204999003,\"mean\":3.9812054204999003}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.76789557350031,
            "range": "± 0.05056699843816705",
            "unit": "s",
            "extra": "{\"times\":[27.80365184100019,27.732139306000434],\"min\":27.732139306000434,\"max\":27.80365184100019,\"median\":27.76789557350031,\"mean\":27.76789557350031}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.97071614849986,
            "range": "± 0.16724492346378741",
            "unit": "s",
            "extra": "{\"times\":[166.08897616800013,165.8524561289996],\"min\":165.8524561289996,\"max\":166.08897616800013,\"median\":165.97071614849986,\"mean\":165.97071614849986}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5625004971,
            "range": "± 0.006080127661603895",
            "unit": "s",
            "extra": "{\"times\":[0.5582011976000001,0.5667997966000001],\"min\":0.5582011976000001,\"max\":0.5667997966000001,\"median\":0.5625004971,\"mean\":0.5625004971}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.541815050284446,
            "range": "± 0.13243021310100583",
            "unit": "s",
            "extra": "{\"times\":[7.438857410840001,7.62327406384,7.8126698578400005,7.580833885840001,7.3425313268400005,7.5496342728400005,7.49437321184,7.46742186384,7.56673955884],\"min\":7.3425313268400005,\"max\":7.8126698578400005,\"median\":7.5496342728400005,\"mean\":7.541815050284446}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.502167782499924,
            "range": "± 0.1381338591262346",
            "unit": "s",
            "extra": "{\"times\":[37.40449239400029,37.59984317099955],\"min\":37.40449239400029,\"max\":37.59984317099955,\"median\":37.502167782499924,\"mean\":37.502167782499924}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1704737519999036,
            "range": "± 0.02122371811348356",
            "unit": "s",
            "extra": "{\"times\":[3.1854811869999393,3.1554663169998673],\"min\":3.1554663169998673,\"max\":3.1854811869999393,\"median\":3.1704737519999036,\"mean\":3.1704737519999036}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.079404053999577,
            "range": "± 0.01922168102720423",
            "unit": "s",
            "extra": "{\"times\":[7.0929958349997175,7.065812272999436],\"min\":7.065812272999436,\"max\":7.0929958349997175,\"median\":7.079404053999577,\"mean\":7.079404053999577}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.12997876099963,
            "range": "± 0.08749770988779569",
            "unit": "s",
            "extra": "{\"times\":[35.19184898499958,35.068108536999674],\"min\":35.068108536999674,\"max\":35.19184898499958,\"median\":35.12997876099963,\"mean\":35.12997876099963}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7536776219200001,
            "range": "± 0.0017080206725967617",
            "unit": "s",
            "extra": "{\"times\":[0.7524698689200001,0.7548853749200001],\"min\":0.7524698689200001,\"max\":0.7548853749200001,\"median\":0.7536776219200001,\"mean\":0.7536776219200001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.51699457216,
            "range": "± 0.004999752645653723",
            "unit": "s",
            "extra": "{\"times\":[40.513459213160004,40.52052993116],\"min\":40.513459213160004,\"max\":40.52052993116,\"median\":40.51699457216,\"mean\":40.51699457216}"
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
          "id": "99e2d33bb3e84546c53a875f1fa28dc35fdee57c",
          "message": "build(edr_napi): migrate to napi-rs v3 (#1385)\n\nCo-authored-by: Wodann <Wodann@users.noreply.github.com>",
          "timestamp": "2026-07-03T11:27:51Z",
          "tree_id": "35457a7045a21e527e7f5a3d977dfbc89714a045",
          "url": "https://github.com/NomicFoundation/edr/commit/99e2d33bb3e84546c53a875f1fa28dc35fdee57c"
        },
        "date": 1783084182809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.249308934,
            "range": "± 0.027906657841536106",
            "unit": "s",
            "extra": "{\"times\":[9.229575946999997,9.269041921000003],\"min\":9.229575946999997,\"max\":9.269041921000003,\"median\":9.249308934,\"mean\":9.249308934}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9872384360000015,
            "range": "± 0.005819681142207598",
            "unit": "s",
            "extra": "{\"times\":[3.983123300000003,3.991353572],\"min\":3.983123300000003,\"max\":3.991353572,\"median\":3.9872384360000015,\"mean\":3.9872384360000015}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.095006544499997,
            "range": "± 0.009549991146556186",
            "unit": "s",
            "extra": "{\"times\":[4.101759407999998,4.088253680999995],\"min\":4.088253680999995,\"max\":4.101759407999998,\"median\":4.095006544499997,\"mean\":4.095006544499997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.232656246999994,
            "range": "± 0.002426441162272336",
            "unit": "s",
            "extra": "{\"times\":[9.230940494000002,9.234371999999988],\"min\":9.230940494000002,\"max\":9.234371999999988,\"median\":9.232656246999994,\"mean\":9.232656246999994}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.52405830206,
            "range": "± 0.0017619340291283516",
            "unit": "s",
            "extra": "{\"times\":[0.52281242656,0.52530417756],\"min\":0.52281242656,\"max\":0.52530417756,\"median\":0.52405830206,\"mean\":0.52405830206}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5706691457399999,
            "range": "± 0.002758921356582603",
            "unit": "s",
            "extra": "{\"times\":[0.56871829374,0.5726199977399999],\"min\":0.56871829374,\"max\":0.5726199977399999,\"median\":0.5706691457399999,\"mean\":0.5706691457399999}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 239.42707890600002,
            "range": "± 0.9821729001589046",
            "unit": "s",
            "extra": "{\"times\":[240.12158002400002,238.732577788],\"min\":238.732577788,\"max\":240.12158002400002,\"median\":239.42707890600002,\"mean\":239.42707890600002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 44.13090092449996,
            "range": "± 0.16674860662782204",
            "unit": "s",
            "extra": "{\"times\":[44.01299185400002,44.2488099949999],\"min\":44.01299185400002,\"max\":44.2488099949999,\"median\":44.13090092449996,\"mean\":44.13090092449996}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.363669823500004,
            "range": "± 0.16417524140440498",
            "unit": "s",
            "extra": "{\"times\":[53.247580397000014,53.47975925],\"min\":53.247580397000014,\"max\":53.47975925,\"median\":53.363669823500004,\"mean\":53.363669823500004}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.51369941200002,
            "range": "± 0.20877134674377842",
            "unit": "s",
            "extra": "{\"times\":[238.36607577700005,238.661323047],\"min\":238.36607577700005,\"max\":238.661323047,\"median\":238.51369941200002,\"mean\":238.51369941200002}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.58171859922,
            "range": "± 0.006081193271523073",
            "unit": "s",
            "extra": "{\"times\":[0.58601865222,0.5774185462200001],\"min\":0.5774185462200001,\"max\":0.58601865222,\"median\":0.58171859922,\"mean\":0.58171859922}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.798937170313333,
            "range": "± 0.16449124203902674",
            "unit": "s",
            "extra": "{\"times\":[3.58655972298,3.57981685998,3.98971906998,3.7948283589800003,3.84261088598,3.78193340998,3.77200235398,4.1590843059800005,3.63367297798,3.62947786998,3.77428720698,3.73371419198,3.88590472398,3.80201009198,4.01843552398],\"min\":3.57981685998,\"max\":4.1590843059800005,\"median\":3.78193340998,\"mean\":3.798937170313333}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 267.0300476535,
            "range": "± 0.5224457964894765",
            "unit": "s",
            "extra": "{\"times\":[267.3994726190001,266.6606226879999],\"min\":266.6606226879999,\"max\":267.3994726190001,\"median\":267.0300476535,\"mean\":267.0300476535}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.256264415499987,
            "range": "± 0.0029995604008205183",
            "unit": "s",
            "extra": "{\"times\":[3.258385424999986,3.2541434059999883],\"min\":3.2541434059999883,\"max\":3.258385424999986,\"median\":3.256264415499987,\"mean\":3.256264415499987}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.79602310749993,
            "range": "± 0.0018422797439586198",
            "unit": "s",
            "extra": "{\"times\":[13.794720419000136,13.797325795999727],\"min\":13.794720419000136,\"max\":13.797325795999727,\"median\":13.79602310749993,\"mean\":13.79602310749993}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.3821477964999,
            "range": "± 0.028893158775303587",
            "unit": "s",
            "extra": "{\"times\":[265.361717248,265.4025783449998],\"min\":265.361717248,\"max\":265.4025783449998,\"median\":265.3821477964999,\"mean\":265.3821477964999}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66369187182,
            "range": "± 0.00643669615551217",
            "unit": "s",
            "extra": "{\"times\":[0.65914044032,0.66824330332],\"min\":0.65914044032,\"max\":0.66824330332,\"median\":0.66369187182,\"mean\":0.66369187182}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.62824548615,
            "range": "± 0.048182275785725946",
            "unit": "s",
            "extra": "{\"times\":[2.6750648829,2.5763210939,2.5986781599,2.6629178079],\"min\":2.5763210939,\"max\":2.6750648829,\"median\":2.6307979839,\"mean\":2.62824548615}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.10849807600002,
            "range": "± 0.12773427635394208",
            "unit": "s",
            "extra": "{\"times\":[188.0181763030002,188.19881984899985],\"min\":188.0181763030002,\"max\":188.19881984899985,\"median\":188.10849807600002,\"mean\":188.10849807600002}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.589518391000107,
            "range": "± 0.0476609811934974",
            "unit": "s",
            "extra": "{\"times\":[3.6232197940000335,3.5558169880001804],\"min\":3.5558169880001804,\"max\":3.6232197940000335,\"median\":3.589518391000107,\"mean\":3.589518391000107}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.07251521899993,
            "range": "± 0.1490811583266353",
            "unit": "s",
            "extra": "{\"times\":[33.17793151699984,32.96709892100002],\"min\":32.96709892100002,\"max\":33.17793151699984,\"median\":33.07251521899993,\"mean\":33.07251521899993}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.39994458649983,
            "range": "± 0.10811087735796505",
            "unit": "s",
            "extra": "{\"times\":[185.47639052099967,185.32349865199998],\"min\":185.32349865199998,\"max\":185.47639052099967,\"median\":185.39994458649983,\"mean\":185.39994458649983}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 0.9983948472600002,
            "range": "± 0.004114850228303035",
            "unit": "s",
            "extra": "{\"times\":[0.99548520876,1.0013044857600002],\"min\":0.99548520876,\"max\":1.0013044857600002,\"median\":0.9983948472600002,\"mean\":0.9983948472600002}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.587402753116669,
            "range": "± 0.6533033087524401",
            "unit": "s",
            "extra": "{\"times\":[14.1819803017,13.5522721977,14.1282132587,13.1442618907,13.2336972517,13.6164819007,14.3675268097,12.9817322227,14.2223347847,12.9841815407,12.9573440987,14.2212702607,14.2171656397,13.1037856847,14.3901876067,14.0858915867,13.2602466217,12.6423235007,12.7243963947,14.2629437527,14.6976109527,13.5879604937,12.7989640477,12.7348932747],\"min\":12.6423235007,\"max\":14.6976109527,\"median\":13.5701163457,\"mean\":13.587402753116669}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.727656148500275,
            "range": "± 0.03138425636767342",
            "unit": "s",
            "extra": "{\"times\":[3.749848169000354,3.705464128000196],\"min\":3.705464128000196,\"max\":3.749848169000354,\"median\":3.727656148500275,\"mean\":3.727656148500275}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3100025349999775,
            "range": "± 0.03472447818853884",
            "unit": "s",
            "extra": "{\"times\":[3.334556449000258,3.2854486209996976],\"min\":3.2854486209996976,\"max\":3.334556449000258,\"median\":3.3100025349999775,\"mean\":3.3100025349999775}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4844670394996644,
            "range": "± 0.0319047138285832",
            "unit": "s",
            "extra": "{\"times\":[3.507027078999672,3.4619069999996572],\"min\":3.4619069999996572,\"max\":3.507027078999672,\"median\":3.4844670394996644,\"mean\":3.4844670394996644}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.488795390000101,
            "range": "± 0.020652575238131847",
            "unit": "s",
            "extra": "{\"times\":[3.5033989659999496,3.474191814000253],\"min\":3.474191814000253,\"max\":3.5033989659999496,\"median\":3.488795390000101,\"mean\":3.488795390000101}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46788867498,
            "range": "± 0.0038427244262039255",
            "unit": "s",
            "extra": "{\"times\":[0.46517145848,0.47060589148],\"min\":0.46517145848,\"max\":0.47060589148,\"median\":0.46788867498,\"mean\":0.46788867498}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5081492377600001,
            "range": "± 0.0016432185787417398",
            "unit": "s",
            "extra": "{\"times\":[0.50931116876,0.50698730676],\"min\":0.50698730676,\"max\":0.50931116876,\"median\":0.5081492377600001,\"mean\":0.5081492377600001}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.19030789499986,
            "range": "± 0.3545760550890587",
            "unit": "s",
            "extra": "{\"times\":[52.93958476200001,53.441031027999706],\"min\":52.93958476200001,\"max\":53.441031027999706,\"median\":53.19030789499986,\"mean\":53.19030789499986}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4906479299999775,
            "range": "± 0.007275643703112457",
            "unit": "s",
            "extra": "{\"times\":[3.4855032730000093,3.4957925869999453],\"min\":3.4855032730000093,\"max\":3.4957925869999453,\"median\":3.4906479299999775,\"mean\":3.4906479299999775}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.153608279000036,
            "range": "± 0.041840205450410665",
            "unit": "s",
            "extra": "{\"times\":[8.18319377200026,8.124022785999813],\"min\":8.124022785999813,\"max\":8.18319377200026,\"median\":8.153608279000036,\"mean\":8.153608279000036}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.09488787850016,
            "range": "± 0.024567642345002944",
            "unit": "s",
            "extra": "{\"times\":[52.07751593200024,52.11225982500007],\"min\":52.07751593200024,\"max\":52.11225982500007,\"median\":52.09488787850016,\"mean\":52.09488787850016}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.62146295376,
            "range": "± 0.006461429336504409",
            "unit": "s",
            "extra": "{\"times\":[0.61689403326,0.62603187426],\"min\":0.61689403326,\"max\":0.62603187426,\"median\":0.62146295376,\"mean\":0.62146295376}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 11.010338119946669,
            "range": "± 3.7670418364624902",
            "unit": "s",
            "extra": "{\"times\":[13.76102319548,12.63549791648,12.982321390480001,12.50902640748,12.47515562548,12.49397537948,12.54380343748,3.65991268348,3.99284674648,13.06928014548,12.90673502248,12.88589805548,12.46874732848,13.13375786748,3.6370905974800003],\"min\":3.6370905974800003,\"max\":13.76102319548,\"median\":12.54380343748,\"mean\":11.010338119946669}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.84446842900013,
            "range": "± 0.07590972032498353",
            "unit": "s",
            "extra": "{\"times\":[180.8981447069999,180.79079215100035],\"min\":180.79079215100035,\"max\":180.8981447069999,\"median\":180.84446842900013,\"mean\":180.84446842900013}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9975964000001554,
            "range": "± 0.027846801252968845",
            "unit": "s",
            "extra": "{\"times\":[3.977905737999827,4.0172870620004835],\"min\":3.977905737999827,\"max\":4.0172870620004835,\"median\":3.9975964000001554,\"mean\":3.9975964000001554}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.825004079000095,
            "range": "± 0.011905590815769466",
            "unit": "s",
            "extra": "{\"times\":[27.81658555500023,27.833422602999956],\"min\":27.81658555500023,\"max\":27.833422602999956,\"median\":27.825004079000095,\"mean\":27.825004079000095}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.18056131649996,
            "range": "± 0.42543969949697397",
            "unit": "s",
            "extra": "{\"times\":[165.87973001999967,166.48139261300022],\"min\":165.87973001999967,\"max\":166.48139261300022,\"median\":166.18056131649996,\"mean\":166.18056131649996}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55944590406,
            "range": "± 0.0051325494204849725",
            "unit": "s",
            "extra": "{\"times\":[0.55581664356,0.5630751645600001],\"min\":0.55581664356,\"max\":0.5630751645600001,\"median\":0.55944590406,\"mean\":0.55944590406}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.502640464593333,
            "range": "± 0.09106181116225386",
            "unit": "s",
            "extra": "{\"times\":[7.42478021626,7.50029294926,7.41377535826,7.67305074726,7.51070256626,7.6024860612600005,7.42878004126,7.42487280926,7.54502343226],\"min\":7.41377535826,\"max\":7.67305074726,\"median\":7.50029294926,\"mean\":7.502640464593333}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.408720101999585,
            "range": "± 0.025064849428441817",
            "unit": "s",
            "extra": "{\"times\":[37.426443626999855,37.390996576999314],\"min\":37.390996576999314,\"max\":37.426443626999855,\"median\":37.408720101999585,\"mean\":37.408720101999585}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.195916386500001,
            "range": "± 0.007339586662621921",
            "unit": "s",
            "extra": "{\"times\":[3.201106258000247,3.1907265149997546],\"min\":3.1907265149997546,\"max\":3.201106258000247,\"median\":3.195916386500001,\"mean\":3.195916386500001}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.025134781499859,
            "range": "± 0.007295863422536233",
            "unit": "s",
            "extra": "{\"times\":[7.019975826999173,7.030293736000545],\"min\":7.019975826999173,\"max\":7.030293736000545,\"median\":7.025134781499859,\"mean\":7.025134781499859}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.347517631500025,
            "range": "± 0.08326312668239357",
            "unit": "s",
            "extra": "{\"times\":[35.406393552999944,35.288641710000114],\"min\":35.288641710000114,\"max\":35.406393552999944,\"median\":35.347517631500025,\"mean\":35.347517631500025}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.75036191222,
            "range": "± 0.006612502700304962",
            "unit": "s",
            "extra": "{\"times\":[0.74568616672,0.75503765772],\"min\":0.74568616672,\"max\":0.75503765772,\"median\":0.75036191222,\"mean\":0.75036191222}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.50396093888,
            "range": "± 0.020049310623508884",
            "unit": "s",
            "extra": "{\"times\":[40.518137942379994,40.48978393538],\"min\":40.48978393538,\"max\":40.518137942379994,\"median\":40.50396093888,\"mean\":40.50396093888}"
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
          "id": "27258ab026c797871d1dce53747d00f7722ee31e",
          "message": "build(edr_napi): move dyn-symbols to dev-dependencies (#1533) (#1534)",
          "timestamp": "2026-07-03T13:41:41Z",
          "tree_id": "63ff2cdb498dd828df5af9c9939b52c25c14f642",
          "url": "https://github.com/NomicFoundation/edr/commit/27258ab026c797871d1dce53747d00f7722ee31e"
        },
        "date": 1783092885845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.271067267,
            "range": "± 0.00023720038396248178",
            "unit": "s",
            "extra": "{\"times\":[9.270899540999999,9.271234992999998],\"min\":9.270899540999999,\"max\":9.271234992999998,\"median\":9.271067267,\"mean\":9.271067267}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.994049251000002,
            "range": "± 0.0008915400287113973",
            "unit": "s",
            "extra": "{\"times\":[3.993418837000001,3.994679665000003],\"min\":3.993418837000001,\"max\":3.994679665000003,\"median\":3.994049251000002,\"mean\":3.994049251000002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.113129828999998,
            "range": "± 0.017819806477956744",
            "unit": "s",
            "extra": "{\"times\":[4.100529323000003,4.125730334999993],\"min\":4.100529323000003,\"max\":4.125730334999993,\"median\":4.113129828999998,\"mean\":4.113129828999998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.219845823499995,
            "range": "± 0.003957974346260415",
            "unit": "s",
            "extra": "{\"times\":[9.222644533999999,9.217047112999992],\"min\":9.217047112999992,\"max\":9.222644533999999,\"median\":9.219845823499995,\"mean\":9.219845823499995}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5207721064,
            "range": "± 0.0022182887248908293",
            "unit": "s",
            "extra": "{\"times\":[0.5223406734,0.5192035394000001],\"min\":0.5192035394000001,\"max\":0.5223406734,\"median\":0.5207721064,\"mean\":0.5207721064}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.57157800858,
            "range": "± 0.0026855003381717796",
            "unit": "s",
            "extra": "{\"times\":[0.57347694408,0.56967907308],\"min\":0.56967907308,\"max\":0.57347694408,\"median\":0.57157800858,\"mean\":0.57157800858}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.66708254300002,
            "range": "± 0.2567353797617172",
            "unit": "s",
            "extra": "{\"times\":[238.485543215,238.84862187100003],\"min\":238.485543215,\"max\":238.84862187100003,\"median\":238.66708254300002,\"mean\":238.66708254300002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.87007038599998,
            "range": "± 0.0939072326368556",
            "unit": "s",
            "extra": "{\"times\":[43.93647282699996,43.803667944999994],\"min\":43.803667944999994,\"max\":43.93647282699996,\"median\":43.87007038599998,\"mean\":43.87007038599998}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.41756033499999,
            "range": "± 0.08533849286353527",
            "unit": "s",
            "extra": "{\"times\":[53.47790376200003,53.35721690799994],\"min\":53.35721690799994,\"max\":53.47790376200003,\"median\":53.41756033499999,\"mean\":53.41756033499999}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.58791333,
            "range": "± 0.39853807444340605",
            "unit": "s",
            "extra": "{\"times\":[238.30610435500003,238.86972230499995],\"min\":238.30610435500003,\"max\":238.86972230499995,\"median\":238.58791333,\"mean\":238.58791333}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.58467278264,
            "range": "± 0.00811197990546032",
            "unit": "s",
            "extra": "{\"times\":[0.57893674664,0.59040881864],\"min\":0.57893674664,\"max\":0.59040881864,\"median\":0.58467278264,\"mean\":0.58467278264}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.755861023486667,
            "range": "± 0.2222073426897268",
            "unit": "s",
            "extra": "{\"times\":[3.83782412162,4.00056349862,3.53573990362,3.5523218796200005,3.6269251806200002,3.99925859262,3.5865687326200004,3.57181863462,3.81831875262,4.07389307362,3.68089064262,3.5001689936200004,3.71250720662,4.20710150562,3.63401463362],\"min\":3.5001689936200004,\"max\":4.20710150562,\"median\":3.68089064262,\"mean\":3.755861023486667}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 268.22776858200007,
            "range": "± 1.0943451648156588",
            "unit": "s",
            "extra": "{\"times\":[269.0015874689999,267.4539496950002],\"min\":267.4539496950002,\"max\":269.0015874689999,\"median\":268.22776858200007,\"mean\":268.22776858200007}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.276079647999839,
            "range": "± 0.002738258282000683",
            "unit": "s",
            "extra": "{\"times\":[3.274143406999996,3.2780158889996818],\"min\":3.274143406999996,\"max\":3.2780158889996818,\"median\":3.276079647999839,\"mean\":3.276079647999839}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.770305573000108,
            "range": "± 0.02307114488804132",
            "unit": "s",
            "extra": "{\"times\":[13.786619336000179,13.753991810000036],\"min\":13.753991810000036,\"max\":13.786619336000179,\"median\":13.770305573000108,\"mean\":13.770305573000108}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 267.8334361355001,
            "range": "± 2.699090743122738",
            "unit": "s",
            "extra": "{\"times\":[265.9248907680002,269.74198150300003],\"min\":265.9248907680002,\"max\":269.74198150300003,\"median\":267.8334361355001,\"mean\":267.8334361355001}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6632216901800001,
            "range": "± 0.010087677971395594",
            "unit": "s",
            "extra": "{\"times\":[0.67035475568,0.6560886246800001],\"min\":0.6560886246800001,\"max\":0.67035475568,\"median\":0.6632216901800001,\"mean\":0.6632216901800001}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.54882212941,
            "range": "± 0.04369679504204721",
            "unit": "s",
            "extra": "{\"times\":[2.58455763616,2.5203393581599998,2.5026890921600002,2.58770243116],\"min\":2.5026890921600002,\"max\":2.58770243116,\"median\":2.55244849716,\"mean\":2.54882212941}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.41988003450004,
            "range": "± 0.40748919564379027",
            "unit": "s",
            "extra": "{\"times\":[188.70801840800002,188.13174166100006],\"min\":188.13174166100006,\"max\":188.70801840800002,\"median\":188.41988003450004,\"mean\":188.41988003450004}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.61399539849977,
            "range": "± 0.0018488459376430583",
            "unit": "s",
            "extra": "{\"times\":[3.6153027299996467,3.6126880669998935],\"min\":3.6126880669998935,\"max\":3.6153027299996467,\"median\":3.61399539849977,\"mean\":3.61399539849977}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.083752919000105,
            "range": "± 0.09402044750346793",
            "unit": "s",
            "extra": "{\"times\":[33.150235415000004,33.01727042300021],\"min\":33.01727042300021,\"max\":33.150235415000004,\"median\":33.083752919000105,\"mean\":33.083752919000105}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.06693339499995,
            "range": "± 0.5852590683765253",
            "unit": "s",
            "extra": "{\"times\":[185.4807740509999,184.653092739],\"min\":184.653092739,\"max\":185.4807740509999,\"median\":185.06693339499995,\"mean\":185.06693339499995}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0026237152600002,
            "range": "± 0.009241142460881225",
            "unit": "s",
            "extra": "{\"times\":[1.0091581897600002,0.99608924076],\"min\":0.99608924076,\"max\":1.0091581897600002,\"median\":1.0026237152600002,\"mean\":1.0026237152600002}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.478452602636665,
            "range": "± 0.6189749045623731",
            "unit": "s",
            "extra": "{\"times\":[14.12889293322,13.94146202122,13.09951664222,14.28566828722,12.90732058022,14.19043848122,14.51993075922,13.09647077422,13.88557315822,12.97110856022,14.13745147622,13.07195578922,12.70570304322,12.74414606122,14.01346928622,12.92414973822,13.25553278622,13.40739639522,14.41770196922,12.63609735322,12.981415567220001,13.36744481422,12.82955307122,13.96446291522],\"min\":12.63609735322,\"max\":14.51993075922,\"median\":13.311488800220001,\"mean\":13.478452602636665}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7274486549999564,
            "range": "± 0.0016212006879942954",
            "unit": "s",
            "extra": "{\"times\":[3.7263022929998115,3.7285950170001017],\"min\":3.7263022929998115,\"max\":3.7285950170001017,\"median\":3.7274486549999564,\"mean\":3.7274486549999564}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.450775961000007,
            "range": "± 0.18503389230737086",
            "unit": "s",
            "extra": "{\"times\":[3.58161468099989,3.3199372410001233],\"min\":3.3199372410001233,\"max\":3.58161468099989,\"median\":3.450775961000007,\"mean\":3.450775961000007}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4699852899999826,
            "range": "± 0.0040542250141534725",
            "unit": "s",
            "extra": "{\"times\":[3.4728520599999464,3.4671185200000183],\"min\":3.4671185200000183,\"max\":3.4728520599999464,\"median\":3.4699852899999826,\"mean\":3.4699852899999826}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.642683817500016,
            "range": "± 0.21998313499265781",
            "unit": "s",
            "extra": "{\"times\":[3.798235384,3.4871322510000318],\"min\":3.4871322510000318,\"max\":3.798235384,\"median\":3.642683817500016,\"mean\":3.642683817500016}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46731388543999997,
            "range": "± 0.0031544083006206686",
            "unit": "s",
            "extra": "{\"times\":[0.46508338194,0.46954438894],\"min\":0.46508338194,\"max\":0.46954438894,\"median\":0.46731388543999997,\"mean\":0.46731388543999997}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50617676938,
            "range": "± 0.002183780499755353",
            "unit": "s",
            "extra": "{\"times\":[0.50772093538,0.50463260338],\"min\":0.50463260338,\"max\":0.50772093538,\"median\":0.50617676938,\"mean\":0.50617676938}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.980573897999946,
            "range": "± 0.3529067937675534",
            "unit": "s",
            "extra": "{\"times\":[53.230116684999786,52.73103111100011],\"min\":52.73103111100011,\"max\":53.230116684999786,\"median\":52.980573897999946,\"mean\":52.980573897999946}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4956007089999037,
            "range": "± 0.011129696686999702",
            "unit": "s",
            "extra": "{\"times\":[3.4877308249999768,3.5034705929998307],\"min\":3.4877308249999768,\"max\":3.5034705929998307,\"median\":3.4956007089999037,\"mean\":3.4956007089999037}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.172008381000023,
            "range": "± 0.0005793043014029762",
            "unit": "s",
            "extra": "{\"times\":[8.17159875100013,8.172418010999914],\"min\":8.17159875100013,\"max\":8.172418010999914,\"median\":8.172008381000023,\"mean\":8.172008381000023}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.15766656250041,
            "range": "± 0.09327836085711268",
            "unit": "s",
            "extra": "{\"times\":[52.09170880100038,52.22362432400044],\"min\":52.09170880100038,\"max\":52.22362432400044,\"median\":52.15766656250041,\"mean\":52.15766656250041}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.62104803878,
            "range": "± 0.0002148353035805054",
            "unit": "s",
            "extra": "{\"times\":[0.6211999502800001,0.62089612728],\"min\":0.62089612728,\"max\":0.6211999502800001,\"median\":0.62104803878,\"mean\":0.62104803878}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 10.908813587073332,
            "range": "± 7.316296992452812",
            "unit": "s",
            "extra": "{\"times\":[13.719986993140001,3.46747119714,12.72273425214,12.45723599814,12.49628820414,12.454724631140001,12.438314015140001,12.47200348214,12.91243905614,3.54954345414,31.89818740914,3.61153625914,3.3406041501400003,3.29761062014,12.793524084140001],\"min\":3.29761062014,\"max\":31.89818740914,\"median\":12.45723599814,\"mean\":10.908813587073332}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.80612940800052,
            "range": "± 0.9275420975308457",
            "unit": "s",
            "extra": "{\"times\":[180.15025810100045,181.46200071500056],\"min\":180.15025810100045,\"max\":181.46200071500056,\"median\":180.80612940800052,\"mean\":180.80612940800052}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.98552628300013,
            "range": "± 0.01230558273740632",
            "unit": "s",
            "extra": "{\"times\":[3.976824922000058,3.9942276440002025],\"min\":3.976824922000058,\"max\":3.9942276440002025,\"median\":3.98552628300013,\"mean\":3.98552628300013}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.832332076499704,
            "range": "± 0.01840930372399982",
            "unit": "s",
            "extra": "{\"times\":[27.81931473299954,27.845349419999867],\"min\":27.81931473299954,\"max\":27.845349419999867,\"median\":27.832332076499704,\"mean\":27.832332076499704}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.24899505799962,
            "range": "± 0.5383947447946984",
            "unit": "s",
            "extra": "{\"times\":[165.8682924830001,166.62969763299915],\"min\":165.8682924830001,\"max\":166.62969763299915,\"median\":166.24899505799962,\"mean\":166.24899505799962}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5520314765600001,
            "range": "± 0.004003806886492145",
            "unit": "s",
            "extra": "{\"times\":[0.5492003575600001,0.5548625955600001],\"min\":0.5492003575600001,\"max\":0.5548625955600001,\"median\":0.5520314765600001,\"mean\":0.5520314765600001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.379863793926666,
            "range": "± 0.08140239900487461",
            "unit": "s",
            "extra": "{\"times\":[7.35534385426,7.36695936826,7.47177109226,7.413840739259999,7.42609790926,7.39534619426,7.18785027526,7.43627888126,7.36528583126],\"min\":7.18785027526,\"max\":7.47177109226,\"median\":7.39534619426,\"mean\":7.379863793926666}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.22588625899982,
            "range": "± 1.2686255808421458",
            "unit": "s",
            "extra": "{\"times\":[37.328832507999614,39.12294001000002],\"min\":37.328832507999614,\"max\":39.12294001000002,\"median\":38.22588625899982,\"mean\":38.22588625899982}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1967927419999613,
            "range": "± 0.0023339077540671105",
            "unit": "s",
            "extra": "{\"times\":[3.195142420000397,3.1984430639995263],\"min\":3.195142420000397,\"max\":3.1984430639995263,\"median\":3.1967927419999613,\"mean\":3.1967927419999613}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.037545452000108,
            "range": "± 0.011719898918119816",
            "unit": "s",
            "extra": "{\"times\":[7.029258232000284,7.045832671999931],\"min\":7.029258232000284,\"max\":7.045832671999931,\"median\":7.037545452000108,\"mean\":7.037545452000108}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.14282080200035,
            "range": "± 0.06896622023396193",
            "unit": "s",
            "extra": "{\"times\":[35.19158728400059,35.09405432000011],\"min\":35.09405432000011,\"max\":35.19158728400059,\"median\":35.14282080200035,\"mean\":35.14282080200035}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.74999482518,
            "range": "± 0.0016632452569985228",
            "unit": "s",
            "extra": "{\"times\":[0.7511709171800001,0.74881873318],\"min\":0.74881873318,\"max\":0.7511709171800001,\"median\":0.74999482518,\"mean\":0.74999482518}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.5251834888,
            "range": "± 0.019710765574347915",
            "unit": "s",
            "extra": "{\"times\":[40.511245872800004,40.5391211048],\"min\":40.511245872800004,\"max\":40.5391211048,\"median\":40.5251834888,\"mean\":40.5251834888}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aghiglia@manas.tech",
            "name": "Ana Perez Ghiglia",
            "username": "anaPerezGhiglia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ad24182fc902edc14b49a65a706dfbb52ca6872",
          "message": "feat: add experimental support for the Amsterdam hardfork (#1528)",
          "timestamp": "2026-07-03T14:20:50Z",
          "tree_id": "6d6a0db533a3c74b90d3464a0c0016836acdc193",
          "url": "https://github.com/NomicFoundation/edr/commit/5ad24182fc902edc14b49a65a706dfbb52ca6872"
        },
        "date": 1783104714039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.234420145000001,
            "range": "± 0.029060714091183885",
            "unit": "s",
            "extra": "{\"times\":[9.254969173000001,9.213871117000002],\"min\":9.213871117000002,\"max\":9.254969173000001,\"median\":9.234420145000001,\"mean\":9.234420145000001}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9740581840000013,
            "range": "± 0.011098786221270363",
            "unit": "s",
            "extra": "{\"times\":[3.9662101570000012,3.9819062110000014],\"min\":3.9662101570000012,\"max\":3.9819062110000014,\"median\":3.9740581840000013,\"mean\":3.9740581840000013}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.103916100999996,
            "range": "± 0.008987994697686975",
            "unit": "s",
            "extra": "{\"times\":[4.110271572999999,4.097560628999992],\"min\":4.097560628999992,\"max\":4.110271572999999,\"median\":4.103916100999996,\"mean\":4.103916100999996}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.232262376499996,
            "range": "± 0.02370400333578721",
            "unit": "s",
            "extra": "{\"times\":[9.249023637999999,9.215501114999991],\"min\":9.215501114999991,\"max\":9.249023637999999,\"median\":9.232262376499996,\"mean\":9.232262376499996}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.52487681554,
            "range": "± 0.005926341836190726",
            "unit": "s",
            "extra": "{\"times\":[0.52068625904,0.52906737204],\"min\":0.52068625904,\"max\":0.52906737204,\"median\":0.52487681554,\"mean\":0.52487681554}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.56579705262,
            "range": "± 0.0025332517629008465",
            "unit": "s",
            "extra": "{\"times\":[0.5640057731200001,0.56758833212],\"min\":0.5640057731200001,\"max\":0.56758833212,\"median\":0.56579705262,\"mean\":0.56579705262}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.8971722145,
            "range": "± 0.44450806704550816",
            "unit": "s",
            "extra": "{\"times\":[238.58285754599999,239.211486883],\"min\":238.58285754599999,\"max\":239.211486883,\"median\":238.8971722145,\"mean\":238.8971722145}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.98333580299999,
            "range": "± 0.08198775848632259",
            "unit": "s",
            "extra": "{\"times\":[44.041309902999956,43.92536170300003],\"min\":43.92536170300003,\"max\":44.041309902999956,\"median\":43.98333580299999,\"mean\":43.98333580299999}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 54.01472855250002,
            "range": "± 1.044655128692775",
            "unit": "s",
            "extra": "{\"times\":[53.276045827000054,54.75341127799999],\"min\":53.276045827000054,\"max\":54.75341127799999,\"median\":54.01472855250002,\"mean\":54.01472855250002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.14201500049995,
            "range": "± 0.7101425836384545",
            "unit": "s",
            "extra": "{\"times\":[239.64416163700005,238.63986836399988],\"min\":238.63986836399988,\"max\":239.64416163700005,\"median\":239.14201500049995,\"mean\":239.14201500049995}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5838041948,
            "range": "± 0.005419996105211896",
            "unit": "s",
            "extra": "{\"times\":[0.5876367108,0.5799716788],\"min\":0.5799716788,\"max\":0.5876367108,\"median\":0.5838041948,\"mean\":0.5838041948}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.7591999141933328,
            "range": "± 0.16874558527814032",
            "unit": "s",
            "extra": "{\"times\":[3.72412442166,3.9415849236600002,4.142394239660001,3.73946626066,3.69247776866,3.68795747966,3.60168069966,3.6124725836600002,3.82624928666,3.5716313566599998,3.76687252266,3.98704978366,3.8939981116599998,3.61677217066,3.58326710366],\"min\":3.5716313566599998,\"max\":4.142394239660001,\"median\":3.72412442166,\"mean\":3.7591999141933328}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.4966555905,
            "range": "± 0.07335399105194644",
            "unit": "s",
            "extra": "{\"times\":[266.44478648600005,266.5485246949999],\"min\":266.44478648600005,\"max\":266.5485246949999,\"median\":266.4966555905,\"mean\":266.4966555905}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.275750997499912,
            "range": "± 0.0005328084952613121",
            "unit": "s",
            "extra": "{\"times\":[3.275374244999839,3.276127749999985],\"min\":3.275374244999839,\"max\":3.276127749999985,\"median\":3.275750997499912,\"mean\":3.275750997499912}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.782374073999934,
            "range": "± 0.014139755502291629",
            "unit": "s",
            "extra": "{\"times\":[13.792372390999924,13.772375756999944],\"min\":13.772375756999944,\"max\":13.792372390999924,\"median\":13.782374073999934,\"mean\":13.782374073999934}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 266.2151588635,
            "range": "± 0.5475975564119933",
            "unit": "s",
            "extra": "{\"times\":[266.6023688090001,265.8279489179999],\"min\":265.8279489179999,\"max\":266.6023688090001,\"median\":266.2151588635,\"mean\":266.2151588635}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.65665846794,
            "range": "± 0.008502674079735355",
            "unit": "s",
            "extra": "{\"times\":[0.66267076644,0.6506461694400001],\"min\":0.6506461694400001,\"max\":0.66267076644,\"median\":0.65665846794,\"mean\":0.65665846794}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.54569118945,
            "range": "± 0.021221167324113003",
            "unit": "s",
            "extra": "{\"times\":[2.5641994227000002,2.5629471997,2.5218446447000002,2.5337734907000002],\"min\":2.5218446447000002,\"max\":2.5641994227000002,\"median\":2.5483603452,\"mean\":2.54569118945}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.6817000094999,
            "range": "± 0.9078038035827468",
            "unit": "s",
            "extra": "{\"times\":[188.0397857839996,189.3236142350002],\"min\":188.0397857839996,\"max\":189.3236142350002,\"median\":188.6817000094999,\"mean\":188.6817000094999}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.599299466000171,
            "range": "± 0.020895390049985415",
            "unit": "s",
            "extra": "{\"times\":[3.614074738000054,3.5845241940002888],\"min\":3.5845241940002888,\"max\":3.614074738000054,\"median\":3.599299466000171,\"mean\":3.599299466000171}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 32.968668902999724,
            "range": "± 0.014192900233747979",
            "unit": "s",
            "extra": "{\"times\":[32.97870479899971,32.95863300699973],\"min\":32.95863300699973,\"max\":32.97870479899971,\"median\":32.968668902999724,\"mean\":32.968668902999724}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 184.8023305495002,
            "range": "± 0.35893786377501513",
            "unit": "s",
            "extra": "{\"times\":[184.54852315200026,185.0561379470001],\"min\":184.54852315200026,\"max\":185.0561379470001,\"median\":184.8023305495002,\"mean\":184.8023305495002}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00350234112,
            "range": "± 0.0001124745259358078",
            "unit": "s",
            "extra": "{\"times\":[1.00342280962,1.0035818726199999],\"min\":1.00342280962,\"max\":1.0035818726199999,\"median\":1.00350234112,\"mean\":1.00350234112}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.716268744864998,
            "range": "± 0.5287998718188631",
            "unit": "s",
            "extra": "{\"times\":[14.218421421239999,13.94680148424,13.10943987324,14.07798242324,13.08881919424,14.421779536239999,13.73112915824,13.184503548239999,13.23762032124,14.38910680924,13.01222507324,13.456446248239999,13.64813217924,13.054226477239999,14.610432293239999,13.59321451724,14.561803678239999,14.070550233239999,13.84898929624,13.26703944224,13.818228931239998,13.96701379724,12.862795609239999,14.013748331239999],\"min\":12.862795609239999,\"max\":14.610432293239999,\"median\":13.77467904474,\"mean\":13.716268744864998}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7146402364999522,
            "range": "± 0.008319475440718304",
            "unit": "s",
            "extra": "{\"times\":[3.720522993999999,3.7087574789999054],\"min\":3.7087574789999054,\"max\":3.720522993999999,\"median\":3.7146402364999522,\"mean\":3.7146402364999522}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3108109339997176,
            "range": "± 0.03211375085673154",
            "unit": "s",
            "extra": "{\"times\":[3.288103082999587,3.3335187849998476],\"min\":3.288103082999587,\"max\":3.3335187849998476,\"median\":3.3108109339997176,\"mean\":3.3108109339997176}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.507507821999956,
            "range": "± 0.008758650270294578",
            "unit": "s",
            "extra": "{\"times\":[3.5137011230001227,3.5013145209997893],\"min\":3.5013145209997893,\"max\":3.5137011230001227,\"median\":3.507507821999956,\"mean\":3.507507821999956}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.9057854865000117,
            "range": "± 0.04949638644583196",
            "unit": "s",
            "extra": "{\"times\":[3.9407847170000894,3.870786255999934],\"min\":3.870786255999934,\"max\":3.9407847170000894,\"median\":3.9057854865000117,\"mean\":3.9057854865000117}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46587338008,
            "range": "± 0.0058696707632125466",
            "unit": "s",
            "extra": "{\"times\":[0.46172289608,0.47002386408],\"min\":0.46172289608,\"max\":0.47002386408,\"median\":0.46587338008,\"mean\":0.46587338008}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.51075439576,
            "range": "± 0.002766428709278493",
            "unit": "s",
            "extra": "{\"times\":[0.5127105562600001,0.5087982352600001],\"min\":0.5087982352600001,\"max\":0.5127105562600001,\"median\":0.51075439576,\"mean\":0.51075439576}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.749243035499944,
            "range": "± 0.034133354596686906",
            "unit": "s",
            "extra": "{\"times\":[52.7733789619999,52.72510710899998],\"min\":52.72510710899998,\"max\":52.7733789619999,\"median\":52.749243035499944,\"mean\":52.749243035499944}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4759579229999797,
            "range": "± 0.0029032701348156906",
            "unit": "s",
            "extra": "{\"times\":[3.4739050010000354,3.4780108449999245],\"min\":3.4739050010000354,\"max\":3.4780108449999245,\"median\":3.4759579229999797,\"mean\":3.4759579229999797}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.164448811500101,
            "range": "± 0.008607786917126815",
            "unit": "s",
            "extra": "{\"times\":[8.17053543600021,8.158362186999991],\"min\":8.158362186999991,\"max\":8.17053543600021,\"median\":8.164448811500101,\"mean\":8.164448811500101}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.181779474000216,
            "range": "± 0.030079326865347672",
            "unit": "s",
            "extra": "{\"times\":[52.20304877000023,52.1605101780002],\"min\":52.1605101780002,\"max\":52.20304877000023,\"median\":52.181779474000216,\"mean\":52.181779474000216}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.61953091776,
            "range": "± 0.0016058918259764853",
            "unit": "s",
            "extra": "{\"times\":[0.61839538076,0.62066645476],\"min\":0.61839538076,\"max\":0.62066645476,\"median\":0.61953091776,\"mean\":0.61953091776}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.4585109619266663,
            "range": "± 0.12691244944961017",
            "unit": "s",
            "extra": "{\"times\":[3.8233074284599997,3.35966536646,3.47669435646,3.47280571546,3.4350683854599997,3.34023655146,3.52671009646,3.37179023546,3.3681118564599997,3.55703627846,3.3467769004599996,3.37422028046,3.57625280046,3.45413189746,3.39485627946],\"min\":3.34023655146,\"max\":3.8233074284599997,\"median\":3.4350683854599997,\"mean\":3.4585109619266663}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.34278351049988,
            "range": "± 0.4556845416745725",
            "unit": "s",
            "extra": "{\"times\":[180.66500113999984,180.0205658809999],\"min\":180.0205658809999,\"max\":180.66500113999984,\"median\":180.34278351049988,\"mean\":180.34278351049988}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9804779445000458,
            "range": "± 0.007240407865317628",
            "unit": "s",
            "extra": "{\"times\":[3.9753582029999235,3.9855976860001685],\"min\":3.9753582029999235,\"max\":3.9855976860001685,\"median\":3.9804779445000458,\"mean\":3.9804779445000458}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.807646663000106,
            "range": "± 0.10950856088552698",
            "unit": "s",
            "extra": "{\"times\":[27.885080909000244,27.730212416999972],\"min\":27.730212416999972,\"max\":27.885080909000244,\"median\":27.807646663000106,\"mean\":27.807646663000106}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.15890317649976,
            "range": "± 0.30024855389393573",
            "unit": "s",
            "extra": "{\"times\":[166.37121096499962,165.9465953879999],\"min\":165.9465953879999,\"max\":166.37121096499962,\"median\":166.15890317649976,\"mean\":166.15890317649976}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5551494374600001,
            "range": "± 0.0034142877203762402",
            "unit": "s",
            "extra": "{\"times\":[0.5527351714600001,0.5575637034600001],\"min\":0.5527351714600001,\"max\":0.5575637034600001,\"median\":0.5551494374600001,\"mean\":0.5551494374600001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.388010200697778,
            "range": "± 0.11547071405062297",
            "unit": "s",
            "extra": "{\"times\":[7.411297601919999,7.43045798192,7.179889923919999,7.344656629919999,7.38931668692,7.49156204792,7.44442557192,7.25037017792,7.55011518392],\"min\":7.179889923919999,\"max\":7.55011518392,\"median\":7.411297601919999,\"mean\":7.388010200697778}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 39.22259368150029,
            "range": "± 0.40843798445136537",
            "unit": "s",
            "extra": "{\"times\":[39.51140295000002,38.933784413000566],\"min\":38.933784413000566,\"max\":39.51140295000002,\"median\":39.22259368150029,\"mean\":39.22259368150029}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1790750484997403,
            "range": "± 0.004542736097708575",
            "unit": "s",
            "extra": "{\"times\":[3.17586284899991,3.182287247999571],\"min\":3.17586284899991,\"max\":3.182287247999571,\"median\":3.1790750484997403,\"mean\":3.1790750484997403}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.297381675499957,
            "range": "± 0.37109352290422326",
            "unit": "s",
            "extra": "{\"times\":[7.559784421999939,7.034978928999975],\"min\":7.034978928999975,\"max\":7.559784421999939,\"median\":7.297381675499957,\"mean\":7.297381675499957}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.199560365499934,
            "range": "± 0.05998413199913225",
            "unit": "s",
            "extra": "{\"times\":[35.241975552000106,35.157145178999755],\"min\":35.157145178999755,\"max\":35.241975552000106,\"median\":35.199560365499934,\"mean\":35.199560365499934}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7507439884600001,
            "range": "± 0.004200344387895802",
            "unit": "s",
            "extra": "{\"times\":[0.7477738964600001,0.7537140804600001],\"min\":0.7477738964600001,\"max\":0.7537140804600001,\"median\":0.7507439884600001,\"mean\":0.7507439884600001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.47863748572,
            "range": "± 0.038909928078798325",
            "unit": "s",
            "extra": "{\"times\":[40.45112401172,40.506150959719996],\"min\":40.45112401172,\"max\":40.506150959719996,\"median\":40.47863748572,\"mean\":40.47863748572}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aghiglia@manas.tech",
            "name": "Ana Perez Ghiglia",
            "username": "anaPerezGhiglia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6de35111bf61b1e56c6d2c4d75c13f791a8196d8",
          "message": "chore: simplify NAPI tests code (#1529)",
          "timestamp": "2026-07-03T16:23:19Z",
          "tree_id": "2e25af57d0f2af68da6f40ae94ca0fa6fc4a2d7f",
          "url": "https://github.com/NomicFoundation/edr/commit/6de35111bf61b1e56c6d2c4d75c13f791a8196d8"
        },
        "date": 1783110589934,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.249292876999998,
            "range": "± 0.024190053687928936",
            "unit": "s",
            "extra": "{\"times\":[9.266397828,9.232187925999998],\"min\":9.232187925999998,\"max\":9.266397828,\"median\":9.249292876999998,\"mean\":9.249292876999998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.993191020500002,
            "range": "± 0.01731582814048644",
            "unit": "s",
            "extra": "{\"times\":[3.9809468810000035,4.005435160000001],\"min\":3.9809468810000035,\"max\":4.005435160000001,\"median\":3.993191020500002,\"mean\":3.993191020500002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.109063892999998,
            "range": "± 0.004108146148911328",
            "unit": "s",
            "extra": "{\"times\":[4.111968790999999,4.106158994999998],\"min\":4.106158994999998,\"max\":4.111968790999999,\"median\":4.109063892999998,\"mean\":4.109063892999998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.238027067500003,
            "range": "± 0.03973319765488965",
            "unit": "s",
            "extra": "{\"times\":[9.266122681,9.209931454000005],\"min\":9.209931454000005,\"max\":9.266122681,\"median\":9.238027067500003,\"mean\":9.238027067500003}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5275323397,
            "range": "± 0.0018314687886698566",
            "unit": "s",
            "extra": "{\"times\":[0.5288273837,0.5262372957000001],\"min\":0.5262372957000001,\"max\":0.5288273837,\"median\":0.5275323397,\"mean\":0.5275323397}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5707678809800001,
            "range": "± 0.003517391667247829",
            "unit": "s",
            "extra": "{\"times\":[0.5732550524800001,0.5682807094800001],\"min\":0.5682807094800001,\"max\":0.5732550524800001,\"median\":0.5707678809800001,\"mean\":0.5707678809800001}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.69276833499998,
            "range": "± 0.14646308981255596",
            "unit": "s",
            "extra": "{\"times\":[238.79633337899998,238.589203291],\"min\":238.589203291,\"max\":238.79633337899998,\"median\":238.69276833499998,\"mean\":238.69276833499998}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.973024275999975,
            "range": "± 0.19816691867230454",
            "unit": "s",
            "extra": "{\"times\":[44.11314944800001,43.83289910399995],\"min\":43.83289910399995,\"max\":44.11314944800001,\"median\":43.973024275999975,\"mean\":43.973024275999975}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.38948406149997,
            "range": "± 0.02016184242506982",
            "unit": "s",
            "extra": "{\"times\":[53.375227485999986,53.40374063699995],\"min\":53.375227485999986,\"max\":53.40374063699995,\"median\":53.38948406149997,\"mean\":53.38948406149997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.22568850250002,
            "range": "± 1.1512982270286682",
            "unit": "s",
            "extra": "{\"times\":[238.411597719,240.03977928600005],\"min\":238.411597719,\"max\":240.03977928600005,\"median\":239.22568850250002,\"mean\":239.22568850250002}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5869285470400001,
            "range": "± 0.003978870058746796",
            "unit": "s",
            "extra": "{\"times\":[0.5897420330400001,0.5841150610400001],\"min\":0.5841150610400001,\"max\":0.5897420330400001,\"median\":0.5869285470400001,\"mean\":0.5869285470400001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.7504503585466664,
            "range": "± 0.11915793605646478",
            "unit": "s",
            "extra": "{\"times\":[3.76503608128,3.69597013828,3.82947466728,3.94030704928,3.83527494528,3.59951604128,3.89101117728,3.93508542328,3.71844504628,3.70275797428,3.6214572392799997,3.6636083942799997,3.60839700228,3.6238358382799998,3.82657836028],\"min\":3.59951604128,\"max\":3.94030704928,\"median\":3.71844504628,\"mean\":3.7504503585466664}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.71910774450004,
            "range": "± 0.1744848625165214",
            "unit": "s",
            "extra": "{\"times\":[266.84248717399987,266.5957283150002],\"min\":266.5957283150002,\"max\":266.84248717399987,\"median\":266.71910774450004,\"mean\":266.71910774450004}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.261968219000031,
            "range": "± 0.003171820804960545",
            "unit": "s",
            "extra": "{\"times\":[3.2642110349999274,3.259725403000135],\"min\":3.259725403000135,\"max\":3.2642110349999274,\"median\":3.261968219000031,\"mean\":3.261968219000031}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.775319531000104,
            "range": "± 0.0001431297263553974",
            "unit": "s",
            "extra": "{\"times\":[13.775218323000008,13.775420739000198],\"min\":13.775218323000008,\"max\":13.775420739000198,\"median\":13.775319531000104,\"mean\":13.775319531000104}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.86891551400015,
            "range": "± 0.5246072557495884",
            "unit": "s",
            "extra": "{\"times\":[265.4979621659999,266.2398688620003],\"min\":265.4979621659999,\"max\":266.2398688620003,\"median\":265.86891551400015,\"mean\":265.86891551400015}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6561031526800001,
            "range": "± 0.0038518234762641938",
            "unit": "s",
            "extra": "{\"times\":[0.6533795021800001,0.65882680318],\"min\":0.6533795021800001,\"max\":0.65882680318,\"median\":0.6561031526800001,\"mean\":0.6561031526800001}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.58360963682,
            "range": "± 0.058098567643246585",
            "unit": "s",
            "extra": "{\"times\":[2.5780779813200003,2.52608091832,2.66411876132,2.56616088632],\"min\":2.52608091832,\"max\":2.66411876132,\"median\":2.57211943382,\"mean\":2.58360963682}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.4231615045003,
            "range": "± 0.5778966435793561",
            "unit": "s",
            "extra": "{\"times\":[188.83179614000022,188.0145268690004],\"min\":188.0145268690004,\"max\":188.83179614000022,\"median\":188.4231615045003,\"mean\":188.4231615045003}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.5796814299998805,
            "range": "± 0.032273798819187745",
            "unit": "s",
            "extra": "{\"times\":[3.5568604080001824,3.6025024519995785],\"min\":3.5568604080001824,\"max\":3.6025024519995785,\"median\":3.5796814299998805,\"mean\":3.5796814299998805}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.03941027450003,
            "range": "± 0.0036669716215384485",
            "unit": "s",
            "extra": "{\"times\":[33.04200321500004,33.03681733400002],\"min\":33.03681733400002,\"max\":33.04200321500004,\"median\":33.03941027450003,\"mean\":33.03941027450003}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 184.8882463605001,
            "range": "± 0.45038921273730964",
            "unit": "s",
            "extra": "{\"times\":[184.56977309400028,185.20671962699993],\"min\":184.56977309400028,\"max\":185.20671962699993,\"median\":184.8882463605001,\"mean\":184.8882463605001}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.0057185612800001,
            "range": "± 0.006019726600355016",
            "unit": "s",
            "extra": "{\"times\":[1.00146197178,1.00997515078],\"min\":1.00146197178,\"max\":1.00997515078,\"median\":1.0057185612800001,\"mean\":1.0057185612800001}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.70718209892,
            "range": "± 0.5276041472786932",
            "unit": "s",
            "extra": "{\"times\":[13.052020810419998,13.768361368419999,14.39080954242,13.478748248419999,13.43075751342,13.322173228419999,14.23814876142,13.823943202419999,13.08522503942,14.197451763419998,13.204141153419998,14.277098725419998,13.60226245142,14.119144047419999,12.97876618042,14.370346994419998,13.13715295742,13.056269303419999,13.25192439442,13.80711532242,14.290875846419999,14.21257062042,13.26602268442,14.61104021442],\"min\":12.97876618042,\"max\":14.61104021442,\"median\":13.68531190992,\"mean\":13.70718209892}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.732686017999891,
            "range": "± 0.012307457984381239",
            "unit": "s",
            "extra": "{\"times\":[3.7239833309999666,3.7413887049998156],\"min\":3.7239833309999666,\"max\":3.7413887049998156,\"median\":3.732686017999891,\"mean\":3.732686017999891}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.299986553000286,
            "range": "± 0.011856910756611296",
            "unit": "s",
            "extra": "{\"times\":[3.3083706550002097,3.2916024510003625],\"min\":3.2916024510003625,\"max\":3.3083706550002097,\"median\":3.299986553000286,\"mean\":3.299986553000286}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.643715828499757,
            "range": "± 0.25329260058800346",
            "unit": "s",
            "extra": "{\"times\":[3.464610912999604,3.82282074399991],\"min\":3.464610912999604,\"max\":3.82282074399991,\"median\":3.643715828499757,\"mean\":3.643715828499757}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.49573281199974,
            "range": "± 0.00398044549254949",
            "unit": "s",
            "extra": "{\"times\":[3.492918211999815,3.4985474119996653],\"min\":3.492918211999815,\"max\":3.4985474119996653,\"median\":3.49573281199974,\"mean\":3.49573281199974}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4699409667,
            "range": "± 0.0005513940897946592",
            "unit": "s",
            "extra": "{\"times\":[0.4703308612,0.46955107220000003],\"min\":0.46955107220000003,\"max\":0.4703308612,\"median\":0.4699409667,\"mean\":0.4699409667}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50929599782,
            "range": "± 0.0017792680447623803",
            "unit": "s",
            "extra": "{\"times\":[0.51055413032,0.50803786532],\"min\":0.50803786532,\"max\":0.51055413032,\"median\":0.50929599782,\"mean\":0.50929599782}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.92432323800004,
            "range": "± 0.18810552032424763",
            "unit": "s",
            "extra": "{\"times\":[53.05733392699994,52.79131254900014],\"min\":52.79131254900014,\"max\":53.05733392699994,\"median\":52.92432323800004,\"mean\":52.92432323800004}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4779760069998447,
            "range": "± 0.02158596184607728",
            "unit": "s",
            "extra": "{\"times\":[3.49323958699964,3.4627124270000493],\"min\":3.4627124270000493,\"max\":3.49323958699964,\"median\":3.4779760069998447,\"mean\":3.4779760069998447}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.115528654000023,
            "range": "± 0.023700906915085664",
            "unit": "s",
            "extra": "{\"times\":[8.098769582000095,8.132287725999952],\"min\":8.098769582000095,\"max\":8.132287725999952,\"median\":8.115528654000023,\"mean\":8.115528654000023}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.366872198499976,
            "range": "± 0.21509271236871416",
            "unit": "s",
            "extra": "{\"times\":[52.21477868300025,52.5189657139997],\"min\":52.21477868300025,\"max\":52.5189657139997,\"median\":52.366872198499976,\"mean\":52.366872198499976}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6227969278600001,
            "range": "± 0.0018033818002143901",
            "unit": "s",
            "extra": "{\"times\":[0.6240721113600001,0.6215217443600001],\"min\":0.6215217443600001,\"max\":0.6240721113600001,\"median\":0.6227969278600001,\"mean\":0.6227969278600001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.364132594673334,
            "range": "± 0.07997782871317434",
            "unit": "s",
            "extra": "{\"times\":[3.30038385254,3.3558115975400002,3.33165146454,3.4376486305400005,3.28390030554,3.42876757954,3.2855917955400002,3.5435379305400003,3.3054170175400004,3.50565659454,3.32289516354,3.34662615554,3.3031090985400002,3.33773183454,3.3732598995400003],\"min\":3.28390030554,\"max\":3.5435379305400003,\"median\":3.33773183454,\"mean\":3.364132594673334}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.7601121530002,
            "range": "± 0.22048878068780992",
            "unit": "s",
            "extra": "{\"times\":[180.9160212650001,180.6042030410003],\"min\":180.6042030410003,\"max\":180.9160212650001,\"median\":180.7601121530002,\"mean\":180.7601121530002}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9859969764999112,
            "range": "± 0.01661957969068427",
            "unit": "s",
            "extra": "{\"times\":[3.974245159000158,3.9977487939996643],\"min\":3.974245159000158,\"max\":3.9977487939996643,\"median\":3.9859969764999112,\"mean\":3.9859969764999112}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.888626419499985,
            "range": "± 0.027239023882496532",
            "unit": "s",
            "extra": "{\"times\":[27.9078873180002,27.869365520999768],\"min\":27.869365520999768,\"max\":27.9078873180002,\"median\":27.888626419499985,\"mean\":27.888626419499985}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.92495623550008,
            "range": "± 0.3646863788625444",
            "unit": "s",
            "extra": "{\"times\":[165.667084024,166.18282844700013],\"min\":165.667084024,\"max\":166.18282844700013,\"median\":165.92495623550008,\"mean\":165.92495623550008}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55882953062,
            "range": "± 0.00010297666765096355",
            "unit": "s",
            "extra": "{\"times\":[0.55890234612,0.55875671512],\"min\":0.55875671512,\"max\":0.55890234612,\"median\":0.55882953062,\"mean\":0.55882953062}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.43752241534,
            "range": "± 0.21037656632146398",
            "unit": "s",
            "extra": "{\"times\":[7.35498813434,7.73681996834,7.29473566134,7.34939375234,7.4651035423400005,7.441772273340001,7.32060199934,7.811293737340001,7.16299266934],\"min\":7.16299266934,\"max\":7.811293737340001,\"median\":7.35498813434,\"mean\":7.43752241534}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.53591695549991,
            "range": "± 0.1546570453141856",
            "unit": "s",
            "extra": "{\"times\":[37.42655790999997,37.64527600099984],\"min\":37.42655790999997,\"max\":37.64527600099984,\"median\":37.53591695549991,\"mean\":37.53591695549991}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.191670829999726,
            "range": "± 0.007990201975334354",
            "unit": "s",
            "extra": "{\"times\":[3.186020903999917,3.1973207559995354],\"min\":3.186020903999917,\"max\":3.1973207559995354,\"median\":3.191670829999726,\"mean\":3.191670829999726}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.04537172299996,
            "range": "± 0.019666393210165802",
            "unit": "s",
            "extra": "{\"times\":[7.031465482999571,7.0592779630003495],\"min\":7.031465482999571,\"max\":7.0592779630003495,\"median\":7.04537172299996,\"mean\":7.04537172299996}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.287277273000214,
            "range": "± 0.14653733602463928",
            "unit": "s",
            "extra": "{\"times\":[35.18365972900018,35.39089481700025],\"min\":35.18365972900018,\"max\":35.39089481700025,\"median\":35.287277273000214,\"mean\":35.287277273000214}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7530331942,
            "range": "± 0.0020795232617237657",
            "unit": "s",
            "extra": "{\"times\":[0.7515627492,0.7545036392000001],\"min\":0.7515627492,\"max\":0.7545036392000001,\"median\":0.7530331942,\"mean\":0.7530331942}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.607572724899995,
            "range": "± 0.02629386748179728",
            "unit": "s",
            "extra": "{\"times\":[40.5889801529,40.6261652969],\"min\":40.5889801529,\"max\":40.6261652969,\"median\":40.607572724899995,\"mean\":40.607572724899995}"
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
          "id": "2f47bfc1516ed45fea4f8596cba73812859780ce",
          "message": "fix(edr_tool_cli): enable napi dyn-symbols so the standalone binary links (#1535)",
          "timestamp": "2026-07-03T22:05:40Z",
          "tree_id": "1850f8409b4c86e0fe91fece8625d944a78cf6b0",
          "url": "https://github.com/NomicFoundation/edr/commit/2f47bfc1516ed45fea4f8596cba73812859780ce"
        },
        "date": 1783122430157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.2582311735,
            "range": "± 0.04876675407091528",
            "unit": "s",
            "extra": "{\"times\":[9.292714476,9.223747870999999],\"min\":9.223747870999999,\"max\":9.292714476,\"median\":9.2582311735,\"mean\":9.2582311735}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.001285351500001,
            "range": "± 0.01980143292715383",
            "unit": "s",
            "extra": "{\"times\":[3.987283624,4.015287079000002],\"min\":3.987283624,\"max\":4.015287079000002,\"median\":4.001285351500001,\"mean\":4.001285351500001}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.1006912589999995,
            "range": "± 0.005247029301248422",
            "unit": "s",
            "extra": "{\"times\":[4.096981049000002,4.104401468999996],\"min\":4.096981049000002,\"max\":4.104401468999996,\"median\":4.1006912589999995,\"mean\":4.1006912589999995}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.221879312999995,
            "range": "± 0.001595467657815722",
            "unit": "s",
            "extra": "{\"times\":[9.223007479,9.220751146999989],\"min\":9.220751146999989,\"max\":9.223007479,\"median\":9.221879312999995,\"mean\":9.221879312999995}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5271227165000001,
            "range": "± 0.001386714179652742",
            "unit": "s",
            "extra": "{\"times\":[0.5281032715,0.5261421615],\"min\":0.5261421615,\"max\":0.5281032715,\"median\":0.5271227165000001,\"mean\":0.5271227165000001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.56673926368,
            "range": "± 0.0020429234147295024",
            "unit": "s",
            "extra": "{\"times\":[0.5681838286800001,0.56529469868],\"min\":0.56529469868,\"max\":0.5681838286800001,\"median\":0.56673926368,\"mean\":0.56673926368}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.45250080350002,
            "range": "± 0.039763485866776534",
            "unit": "s",
            "extra": "{\"times\":[238.48061783400001,238.424383773],\"min\":238.424383773,\"max\":238.48061783400001,\"median\":238.45250080350002,\"mean\":238.45250080350002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.98928225650001,
            "range": "± 0.08611586413837759",
            "unit": "s",
            "extra": "{\"times\":[44.050175368,43.928389145000025],\"min\":43.928389145000025,\"max\":44.050175368,\"median\":43.98928225650001,\"mean\":43.98928225650001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.42402374699997,
            "range": "± 0.07515808278745645",
            "unit": "s",
            "extra": "{\"times\":[53.37087895699998,53.47716853699996],\"min\":53.37087895699998,\"max\":53.47716853699996,\"median\":53.42402374699997,\"mean\":53.42402374699997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.30999022350005,
            "range": "± 0.4879407943466429",
            "unit": "s",
            "extra": "{\"times\":[237.964963979,238.65501646800013],\"min\":237.964963979,\"max\":238.65501646800013,\"median\":238.30999022350005,\"mean\":238.30999022350005}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.583696607,
            "range": "± 0.004309520260697404",
            "unit": "s",
            "extra": "{\"times\":[0.580649316,0.5867438979999999],\"min\":0.580649316,\"max\":0.5867438979999999,\"median\":0.583696607,\"mean\":0.583696607}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.7808832587533336,
            "range": "± 0.20174331205500398",
            "unit": "s",
            "extra": "{\"times\":[3.64312822722,4.18814877422,4.17628346622,4.03633131922,3.60256851522,3.73557570122,3.65708628922,3.62462027122,3.84931662122,3.7439066682199997,3.79712810222,3.60373469222,3.60513313422,3.63860500922,3.81168209022],\"min\":3.60256851522,\"max\":4.18814877422,\"median\":3.73557570122,\"mean\":3.7808832587533336}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 267.3112626760001,
            "range": "± 1.0230570816845703",
            "unit": "s",
            "extra": "{\"times\":[266.58785207600005,268.0346732760002],\"min\":266.58785207600005,\"max\":268.0346732760002,\"median\":267.3112626760001,\"mean\":267.3112626760001}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2893799085000066,
            "range": "± 0.014732390888099254",
            "unit": "s",
            "extra": "{\"times\":[3.2997972820000725,3.2789625349999407],\"min\":3.2789625349999407,\"max\":3.2997972820000725,\"median\":3.2893799085000066,\"mean\":3.2893799085000066}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.797224127999971,
            "range": "± 0.01597459436189812",
            "unit": "s",
            "extra": "{\"times\":[13.808519871999975,13.78592838399997],\"min\":13.78592838399997,\"max\":13.808519871999975,\"median\":13.797224127999971,\"mean\":13.797224127999971}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.811833752,
            "range": "± 0.23742574030816185",
            "unit": "s",
            "extra": "{\"times\":[265.97971910300015,265.6439484009999],\"min\":265.6439484009999,\"max\":265.97971910300015,\"median\":265.811833752,\"mean\":265.811833752}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6603661091200002,
            "range": "± 0.0058465823125932286",
            "unit": "s",
            "extra": "{\"times\":[0.6645002671200001,0.6562319511200001],\"min\":0.6562319511200001,\"max\":0.6645002671200001,\"median\":0.6603661091200002,\"mean\":0.6603661091200002}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.57330696995,
            "range": "± 0.031107128039503745",
            "unit": "s",
            "extra": "{\"times\":[2.5705816812,2.5518869781999998,2.5526288872,2.6181303332],\"min\":2.5518869781999998,\"max\":2.6181303332,\"median\":2.5616052842,\"mean\":2.57330696995}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.31777796899993,
            "range": "± 0.5885225995168838",
            "unit": "s",
            "extra": "{\"times\":[187.901629648,188.73392628999986],\"min\":187.901629648,\"max\":188.73392628999986,\"median\":188.31777796899993,\"mean\":188.31777796899993}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.5910481825000606,
            "range": "± 0.007464624354253049",
            "unit": "s",
            "extra": "{\"times\":[3.585769896000158,3.596326468999963],\"min\":3.585769896000158,\"max\":3.596326468999963,\"median\":3.5910481825000606,\"mean\":3.5910481825000606}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.01737557699974,
            "range": "± 0.06098262829210989",
            "unit": "s",
            "extra": "{\"times\":[32.97425434699981,33.060496806999666],\"min\":32.97425434699981,\"max\":33.060496806999666,\"median\":33.01737557699974,\"mean\":33.01737557699974}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.07790194300003,
            "range": "± 0.6666988191078523",
            "unit": "s",
            "extra": "{\"times\":[185.54932919900025,184.6064746869998],\"min\":184.6064746869998,\"max\":185.54932919900025,\"median\":185.07790194300003,\"mean\":185.07790194300003}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 0.9937880451200001,
            "range": "± 0.00337781303128224",
            "unit": "s",
            "extra": "{\"times\":[0.9913995706200001,0.99617651962],\"min\":0.9913995706200001,\"max\":0.99617651962,\"median\":0.9937880451200001,\"mean\":0.9937880451200001}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.834440347125005,
            "range": "± 0.5043924863888276",
            "unit": "s",
            "extra": "{\"times\":[14.3022948645,14.0580656985,14.213753413500001,14.2144214945,13.9481464775,13.8661958655,12.9897759955,13.7109469665,13.3844427245,13.0096874835,14.2637866645,14.3380334685,13.6989043725,13.2405653485,14.0808977425,14.2894597575,14.1557636265,14.3654498035,13.6467219715,13.5322773765,14.2178329265,14.5247888365,13.0899511055,12.8844043465],\"min\":12.8844043465,\"max\":14.5247888365,\"median\":14.003106088,\"mean\":13.834440347125005}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.740259201000212,
            "range": "± 0.013999872810470307",
            "unit": "s",
            "extra": "{\"times\":[3.7501586060002445,3.730359796000179],\"min\":3.730359796000179,\"max\":3.7501586060002445,\"median\":3.740259201000212,\"mean\":3.740259201000212}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.310772122499766,
            "range": "± 0.009438563845882307",
            "unit": "s",
            "extra": "{\"times\":[3.3174461949998513,3.30409804999968],\"min\":3.30409804999968,\"max\":3.3174461949998513,\"median\":3.310772122499766,\"mean\":3.310772122499766}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.661998484999873,
            "range": "± 0.2710612669818433",
            "unit": "s",
            "extra": "{\"times\":[3.8536677449997514,3.470329224999994],\"min\":3.470329224999994,\"max\":3.8536677449997514,\"median\":3.661998484999873,\"mean\":3.661998484999873}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4984132489999755,
            "range": "± 0.0049187903334614105",
            "unit": "s",
            "extra": "{\"times\":[3.501891359000001,3.49493513899995],\"min\":3.49493513899995,\"max\":3.501891359000001,\"median\":3.4984132489999755,\"mean\":3.4984132489999755}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.468036467,
            "range": "± 0.0019270413412150857",
            "unit": "s",
            "extra": "{\"times\":[0.46667384300000003,0.46939909100000005],\"min\":0.46667384300000003,\"max\":0.46939909100000005,\"median\":0.468036467,\"mean\":0.468036467}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50767360304,
            "range": "± 0.0007063155286984047",
            "unit": "s",
            "extra": "{\"times\":[0.50817304354,0.50717416254],\"min\":0.50717416254,\"max\":0.50817304354,\"median\":0.50767360304,\"mean\":0.50767360304}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.07846444500028,
            "range": "± 0.231627261055294",
            "unit": "s",
            "extra": "{\"times\":[53.24224965200015,52.91467923800042],\"min\":52.91467923800042,\"max\":53.24224965200015,\"median\":53.07846444500028,\"mean\":53.07846444500028}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.487083497499814,
            "range": "± 0.005464343721092831",
            "unit": "s",
            "extra": "{\"times\":[3.4832196229998953,3.490947371999733],\"min\":3.4832196229998953,\"max\":3.490947371999733,\"median\":3.487083497499814,\"mean\":3.487083497499814}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.170058705500093,
            "range": "± 0.05742682517055116",
            "unit": "s",
            "extra": "{\"times\":[8.129451807999983,8.210665603000205],\"min\":8.129451807999983,\"max\":8.210665603000205,\"median\":8.170058705500093,\"mean\":8.170058705500093}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.250557657000144,
            "range": "± 0.05604157965115263",
            "unit": "s",
            "extra": "{\"times\":[52.290185037999876,52.210930276000404],\"min\":52.210930276000404,\"max\":52.290185037999876,\"median\":52.250557657000144,\"mean\":52.250557657000144}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.62260388872,
            "range": "± 0.0009759028174528989",
            "unit": "s",
            "extra": "{\"times\":[0.6232939562200001,0.62191382122],\"min\":0.62191382122,\"max\":0.6232939562200001,\"median\":0.62260388872,\"mean\":0.62260388872}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.4795279933999996,
            "range": "± 0.09607181233143391",
            "unit": "s",
            "extra": "{\"times\":[3.512810335,3.376849902,3.397812498,3.7269867580000002,3.472893875,3.424495656,3.444338781,3.425131333,3.4787324770000003,3.4255284180000003,3.4988604060000004,3.485317347,3.528201459,3.363230626,3.63173003],\"min\":3.363230626,\"max\":3.7269867580000002,\"median\":3.472893875,\"mean\":3.4795279933999996}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 182.03829034900036,
            "range": "± 1.0219407707945636",
            "unit": "s",
            "extra": "{\"times\":[182.7609115980002,181.31566910000052],\"min\":181.31566910000052,\"max\":182.7609115980002,\"median\":182.03829034900036,\"mean\":182.03829034900036}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.970263853000011,
            "range": "± 0.0032435426461329916",
            "unit": "s",
            "extra": "{\"times\":[3.97255738400016,3.967970321999863],\"min\":3.967970321999863,\"max\":3.97255738400016,\"median\":3.970263853000011,\"mean\":3.970263853000011}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.925177964000497,
            "range": "± 0.10929402185894155",
            "unit": "s",
            "extra": "{\"times\":[28.002460508000105,27.84789542000089],\"min\":27.84789542000089,\"max\":28.002460508000105,\"median\":27.925177964000497,\"mean\":27.925177964000497}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.07294353600008,
            "range": "± 0.054352887035832916",
            "unit": "s",
            "extra": "{\"times\":[166.1113768310002,166.034510241],\"min\":166.034510241,\"max\":166.1113768310002,\"median\":166.07294353600008,\"mean\":166.07294353600008}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55782220398,
            "range": "± 0.0015927813591465174",
            "unit": "s",
            "extra": "{\"times\":[0.5589484704800001,0.55669593748],\"min\":0.55669593748,\"max\":0.5589484704800001,\"median\":0.55782220398,\"mean\":0.55782220398}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.432588250697778,
            "range": "± 0.21874517039102367",
            "unit": "s",
            "extra": "{\"times\":[7.67042012692,7.42365764592,7.3816085219200005,7.86733768492,7.30908306192,7.18016716992,7.24637689392,7.30826496692,7.50637818392],\"min\":7.18016716992,\"max\":7.86733768492,\"median\":7.3816085219200005,\"mean\":7.432588250697778}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 39.03517642000038,
            "range": "± 0.05624772532021161",
            "unit": "s",
            "extra": "{\"times\":[39.07494956800062,38.99540327200014],\"min\":38.99540327200014,\"max\":39.07494956800062,\"median\":39.03517642000038,\"mean\":39.03517642000038}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1994874419998376,
            "range": "± 0.004286310187997228",
            "unit": "s",
            "extra": "{\"times\":[3.2025183210000394,3.1964565629996358],\"min\":3.1964565629996358,\"max\":3.2025183210000394,\"median\":3.1994874419998376,\"mean\":3.1994874419998376}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.283569595499429,
            "range": "± 0.36018688587987635",
            "unit": "s",
            "extra": "{\"times\":[7.028879005999304,7.538260184999555],\"min\":7.028879005999304,\"max\":7.538260184999555,\"median\":7.283569595499429,\"mean\":7.283569595499429}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.19342372449999,
            "range": "± 0.01883352960872035",
            "unit": "s",
            "extra": "{\"times\":[35.206741041,35.18010640799999],\"min\":35.18010640799999,\"max\":35.206741041,\"median\":35.19342372449999,\"mean\":35.19342372449999}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7515984951400001,
            "range": "± 0.00703167630729915",
            "unit": "s",
            "extra": "{\"times\":[0.75657064114,0.74662634914],\"min\":0.74662634914,\"max\":0.75657064114,\"median\":0.7515984951400001,\"mean\":0.7515984951400001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.48377659062,
            "range": "± 0.02108537903565275",
            "unit": "s",
            "extra": "{\"times\":[40.468866976120005,40.49868620512],\"min\":40.468866976120005,\"max\":40.49868620512,\"median\":40.48377659062,\"mean\":40.48377659062}"
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
          "id": "a2e9f16833c89236d28759b56518ae4be41b9689",
          "message": "chore(deps): update rust crate clap to v4 (#1540)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>\nCo-authored-by: Bas van Gijzel <bas@nomic.foundation>",
          "timestamp": "2026-07-06T09:49:33Z",
          "tree_id": "e751465f50230f82334f9244b74d16ddf88bb174",
          "url": "https://github.com/NomicFoundation/edr/commit/a2e9f16833c89236d28759b56518ae4be41b9689"
        },
        "date": 1783337244879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.267963887999997,
            "range": "± 0.0410399331078497",
            "unit": "s",
            "extra": "{\"times\":[9.296983503,9.238944272999994],\"min\":9.238944272999994,\"max\":9.296983503,\"median\":9.267963887999997,\"mean\":9.267963887999997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9902181335000027,
            "range": "± 0.020111340858788372",
            "unit": "s",
            "extra": "{\"times\":[3.975997267999999,4.004438999000006],\"min\":3.975997267999999,\"max\":4.004438999000006,\"median\":3.9902181335000027,\"mean\":3.9902181335000027}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.098049058499997,
            "range": "± 0.0006194559459140634",
            "unit": "s",
            "extra": "{\"times\":[4.097611036999995,4.098487079999999],\"min\":4.097611036999995,\"max\":4.098487079999999,\"median\":4.098049058499997,\"mean\":4.098049058499997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.239602186500008,
            "range": "± 0.011612033314437633",
            "unit": "s",
            "extra": "{\"times\":[9.231391239000004,9.24781313400001],\"min\":9.231391239000004,\"max\":9.24781313400001,\"median\":9.239602186500008,\"mean\":9.239602186500008}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5226437989800001,
            "range": "± 0.0006383760020552804",
            "unit": "s",
            "extra": "{\"times\":[0.52219239898,0.5230951989800001],\"min\":0.52219239898,\"max\":0.5230951989800001,\"median\":0.5226437989800001,\"mean\":0.5226437989800001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5687243481600002,
            "range": "± 0.0024991543668053183",
            "unit": "s",
            "extra": "{\"times\":[0.5669571791600001,0.5704915171600001],\"min\":0.5669571791600001,\"max\":0.5704915171600001,\"median\":0.5687243481600002,\"mean\":0.5687243481600002}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.43130054750006,
            "range": "± 0.1312935966251915",
            "unit": "s",
            "extra": "{\"times\":[238.338461955,238.5241391400001],\"min\":238.338461955,\"max\":238.5241391400001,\"median\":238.43130054750006,\"mean\":238.43130054750006}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 44.141459887,
            "range": "± 0.32337150920303415",
            "unit": "s",
            "extra": "{\"times\":[43.91280170000001,44.370118074],\"min\":43.91280170000001,\"max\":44.370118074,\"median\":44.141459887,\"mean\":44.141459887}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.5186862655,
            "range": "± 0.014964577884899917",
            "unit": "s",
            "extra": "{\"times\":[53.52926782000001,53.508104710999994],\"min\":53.508104710999994,\"max\":53.52926782000001,\"median\":53.5186862655,\"mean\":53.5186862655}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.03769137100002,
            "range": "± 0.020225117875341706",
            "unit": "s",
            "extra": "{\"times\":[239.05199268899997,239.02339005300007],\"min\":239.02339005300007,\"max\":239.05199268899997,\"median\":239.03769137100002,\"mean\":239.03769137100002}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.58354935688,
            "range": "± 0.0019901506214359747",
            "unit": "s",
            "extra": "{\"times\":[0.58495660588,0.58214210788],\"min\":0.58214210788,\"max\":0.58495660588,\"median\":0.58354935688,\"mean\":0.58354935688}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.735453323013332,
            "range": "± 0.14170945086550243",
            "unit": "s",
            "extra": "{\"times\":[3.9159356358800004,3.69162707788,3.60796421588,3.89769209588,3.5447945998800003,3.7645763488800004,3.77608213488,3.66960725888,3.69636300888,3.95565651288,3.56789457788,3.58474270588,3.9727343198800003,3.7026607898800004,3.6834685618800003],\"min\":3.5447945998800003,\"max\":3.9727343198800003,\"median\":3.69636300888,\"mean\":3.735453323013332}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.791419355,
            "range": "± 0.2212138677803429",
            "unit": "s",
            "extra": "{\"times\":[266.63499752900003,266.947841181],\"min\":266.63499752900003,\"max\":266.947841181,\"median\":266.791419355,\"mean\":266.791419355}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.288506264999858,
            "range": "± 0.018020537122378257",
            "unit": "s",
            "extra": "{\"times\":[3.2757638210000004,3.3012487089997156],\"min\":3.2757638210000004,\"max\":3.3012487089997156,\"median\":3.288506264999858,\"mean\":3.288506264999858}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.781945355999982,
            "range": "± 0.024007101122168084",
            "unit": "s",
            "extra": "{\"times\":[13.764969771999866,13.798920940000098],\"min\":13.764969771999866,\"max\":13.798920940000098,\"median\":13.781945355999982,\"mean\":13.781945355999982}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.71599820550017,
            "range": "± 0.18402981694155773",
            "unit": "s",
            "extra": "{\"times\":[265.84612693700007,265.5858694740003],\"min\":265.5858694740003,\"max\":265.84612693700007,\"median\":265.71599820550017,\"mean\":265.71599820550017}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.65348662758,
            "range": "± 0.0038472873862629734",
            "unit": "s",
            "extra": "{\"times\":[0.65076618458,0.65620707058],\"min\":0.65076618458,\"max\":0.65620707058,\"median\":0.65348662758,\"mean\":0.65348662758}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.5154619675900003,
            "range": "± 0.021113792402147235",
            "unit": "s",
            "extra": "{\"times\":[2.49209297634,2.50360847634,2.52917128334,2.53697513434],\"min\":2.49209297634,\"max\":2.53697513434,\"median\":2.51638987984,\"mean\":2.5154619675900003}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.11342963399971,
            "range": "± 0.7089216838775575",
            "unit": "s",
            "extra": "{\"times\":[187.6121463039997,188.61471296399972],\"min\":187.6121463039997,\"max\":188.61471296399972,\"median\":188.11342963399971,\"mean\":188.11342963399971}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.607513299999991,
            "range": "± 0.021662791826843306",
            "unit": "s",
            "extra": "{\"times\":[3.6228312070001847,3.592195392999798],\"min\":3.592195392999798,\"max\":3.6228312070001847,\"median\":3.607513299999991,\"mean\":3.607513299999991}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 32.96559306350001,
            "range": "± 0.14465049441133232",
            "unit": "s",
            "extra": "{\"times\":[32.86330971799977,33.06787640900025],\"min\":32.86330971799977,\"max\":33.06787640900025,\"median\":32.96559306350001,\"mean\":32.96559306350001}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.45634234600027,
            "range": "± 0.9797073743762763",
            "unit": "s",
            "extra": "{\"times\":[186.1491000740002,184.76358461800032],\"min\":184.76358461800032,\"max\":186.1491000740002,\"median\":185.45634234600027,\"mean\":185.45634234600027}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 0.9983692011,
            "range": "± 0.00012511618096991902",
            "unit": "s",
            "extra": "{\"times\":[0.9982807306000001,0.9984576716000001],\"min\":0.9982807306000001,\"max\":0.9984576716000001,\"median\":0.9983692011,\"mean\":0.9983692011}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.752089405195,
            "range": "± 0.5955055993037489",
            "unit": "s",
            "extra": "{\"times\":[13.62178333332,14.15267385932,13.56427941432,14.23535112932,14.32302020132,13.01992589332,12.82099868432,13.78489640332,13.20692431232,13.61224517332,14.42511829232,13.99658378432,12.685942321319999,14.28966643732,14.12417053332,14.501101003319999,13.114653107319999,14.01005502632,13.27487132932,12.526673601319999,14.24050738732,14.18478954532,14.00381271432,14.33010223732],\"min\":12.526673601319999,\"max\":14.501101003319999,\"median\":14.00019824932,\"mean\":13.752089405195}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7484083105002064,
            "range": "± 0.017073422036449647",
            "unit": "s",
            "extra": "{\"times\":[3.736335578000173,3.7604810430002398],\"min\":3.736335578000173,\"max\":3.7604810430002398,\"median\":3.7484083105002064,\"mean\":3.7484083105002064}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.2963591384999456,
            "range": "± 0.01521437042646664",
            "unit": "s",
            "extra": "{\"times\":[3.2856009539999067,3.307117322999984],\"min\":3.2856009539999067,\"max\":3.307117322999984,\"median\":3.2963591384999456,\"mean\":3.2963591384999456}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4657343114998658,
            "range": "± 0.010408913753306928",
            "unit": "s",
            "extra": "{\"times\":[3.473094524999615,3.4583740980001165],\"min\":3.4583740980001165,\"max\":3.473094524999615,\"median\":3.4657343114998658,\"mean\":3.4657343114998658}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4866052004999943,
            "range": "± 0.0025400739292143868",
            "unit": "s",
            "extra": "{\"times\":[3.484809096999932,3.488401304000057],\"min\":3.484809096999932,\"max\":3.488401304000057,\"median\":3.4866052004999943,\"mean\":3.4866052004999943}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46795040058000004,
            "range": "± 0.0021182387722072068",
            "unit": "s",
            "extra": "{\"times\":[0.46944822158,0.46645257958],\"min\":0.46645257958,\"max\":0.46944822158,\"median\":0.46795040058000004,\"mean\":0.46795040058000004}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5034131497600001,
            "range": "± 0.0013905544765814054",
            "unit": "s",
            "extra": "{\"times\":[0.5043964202600001,0.50242987926],\"min\":0.50242987926,\"max\":0.5043964202600001,\"median\":0.5034131497600001,\"mean\":0.5034131497600001}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.96091943350015,
            "range": "± 0.12857323380127597",
            "unit": "s",
            "extra": "{\"times\":[52.870004428000186,53.05183443900012],\"min\":52.870004428000186,\"max\":53.05183443900012,\"median\":52.96091943350015,\"mean\":52.96091943350015}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.483860486999853,
            "range": "± 0.0044150333202466596",
            "unit": "s",
            "extra": "{\"times\":[3.4807385869999417,3.4869823869997636],\"min\":3.4807385869999417,\"max\":3.4869823869997636,\"median\":3.483860486999853,\"mean\":3.483860486999853}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.178147920999908,
            "range": "± 0.007152378020738324",
            "unit": "s",
            "extra": "{\"times\":[8.183205415999982,8.173090425999835],\"min\":8.173090425999835,\"max\":8.183205415999982,\"median\":8.178147920999908,\"mean\":8.178147920999908}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.24145437099994,
            "range": "± 0.07446428799889201",
            "unit": "s",
            "extra": "{\"times\":[52.294108574000184,52.188800167999695],\"min\":52.188800167999695,\"max\":52.294108574000184,\"median\":52.24145437099994,\"mean\":52.24145437099994}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6230999184400001,
            "range": "± 0.0034342917712159586",
            "unit": "s",
            "extra": "{\"times\":[0.62552832944,0.6206715074400001],\"min\":0.6206715074400001,\"max\":0.62552832944,\"median\":0.6230999184400001,\"mean\":0.6230999184400001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.4837028051999996,
            "range": "± 0.1441156498651278",
            "unit": "s",
            "extra": "{\"times\":[3.2562468352,3.4396232751999998,3.4084464332,3.6069479022,3.3774916222,3.4984689312,3.6444383232,3.6797494152,3.7823961492000002,3.3702969692,3.4334281262,3.5661465382,3.4161616902,3.3324924732,3.4432073942],\"min\":3.2562468352,\"max\":3.7823961492000002,\"median\":3.4396232751999998,\"mean\":3.4837028051999996}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.30582116149972,
            "range": "± 0.041085612912803875",
            "unit": "s",
            "extra": "{\"times\":[180.27676924599987,180.33487307699957],\"min\":180.27676924599987,\"max\":180.33487307699957,\"median\":180.30582116149972,\"mean\":180.30582116149972}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9909412459998856,
            "range": "± 0.010202644341100539",
            "unit": "s",
            "extra": "{\"times\":[3.983726887000259,3.9981556049995124],\"min\":3.983726887000259,\"max\":3.9981556049995124,\"median\":3.9909412459998856,\"mean\":3.9909412459998856}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.816463651999598,
            "range": "± 0.03170692404158617",
            "unit": "s",
            "extra": "{\"times\":[27.838883832999972,27.794043470999227],\"min\":27.794043470999227,\"max\":27.838883832999972,\"median\":27.816463651999598,\"mean\":27.816463651999598}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.055831823,
            "range": "± 0.06582534383468176",
            "unit": "s",
            "extra": "{\"times\":[166.10237736999943,166.00928627600055],\"min\":166.00928627600055,\"max\":166.10237736999943,\"median\":166.055831823,\"mean\":166.055831823}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5568535074000001,
            "range": "± 0.00350851040607609",
            "unit": "s",
            "extra": "{\"times\":[0.5593343989,0.5543726159000001],\"min\":0.5543726159000001,\"max\":0.5593343989,\"median\":0.5568535074000001,\"mean\":0.5568535074000001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.315156520455555,
            "range": "± 0.1438208624923137",
            "unit": "s",
            "extra": "{\"times\":[7.1968471389,7.1866827599,7.1967991859,7.1042595299,7.4941923849,7.4589619919,7.4187089969,7.4202547929,7.3597019029],\"min\":7.1042595299,\"max\":7.4941923849,\"median\":7.3597019029,\"mean\":7.315156520455555}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.479179020999936,
            "range": "± 0.028286364283666595",
            "unit": "s",
            "extra": "{\"times\":[37.499180501000026,37.45917754099984],\"min\":37.45917754099984,\"max\":37.499180501000026,\"median\":37.479179020999936,\"mean\":37.479179020999936}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1994697620002555,
            "range": "± 0.005182401155391542",
            "unit": "s",
            "extra": "{\"times\":[3.195805251000449,3.2031342730000616],\"min\":3.195805251000449,\"max\":3.2031342730000616,\"median\":3.1994697620002555,\"mean\":3.1994697620002555}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 6.996076980000362,
            "range": "± 0.006753924763648388",
            "unit": "s",
            "extra": "{\"times\":[7.000852726000361,6.991301234000362],\"min\":6.991301234000362,\"max\":7.000852726000361,\"median\":6.996076980000362,\"mean\":6.996076980000362}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.19739190200018,
            "range": "± 0.027820808007984487",
            "unit": "s",
            "extra": "{\"times\":[35.21706418400071,35.17771961999964],\"min\":35.17771961999964,\"max\":35.21706418400071,\"median\":35.19739190200018,\"mean\":35.19739190200018}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7559626955800001,
            "range": "± 0.006872210293112736",
            "unit": "s",
            "extra": "{\"times\":[0.76082208208,0.75110330908],\"min\":0.75110330908,\"max\":0.76082208208,\"median\":0.7559626955800001,\"mean\":0.7559626955800001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.542995844400004,
            "range": "± 0.051740196775667865",
            "unit": "s",
            "extra": "{\"times\":[40.5064100004,40.579581688400005],\"min\":40.5064100004,\"max\":40.579581688400005,\"median\":40.542995844400004,\"mean\":40.542995844400004}"
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
          "id": "46b2d018a1797d1ed0733339bdc54ef23721ff97",
          "message": "chore(deps): update github-actions (#1538)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-06T09:58:10Z",
          "tree_id": "20cc928130246cc2feea14560a5b0a286f1a6c5c",
          "url": "https://github.com/NomicFoundation/edr/commit/46b2d018a1797d1ed0733339bdc54ef23721ff97"
        },
        "date": 1783342652932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.291757373,
            "range": "± 0.01807554578751679",
            "unit": "s",
            "extra": "{\"times\":[9.304538714000001,9.278976032],\"min\":9.278976032,\"max\":9.304538714000001,\"median\":9.291757373,\"mean\":9.291757373}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.001089815499998,
            "range": "± 0.0053641933593622845",
            "unit": "s",
            "extra": "{\"times\":[4.004882872999999,3.997296757999997],\"min\":3.997296757999997,\"max\":4.004882872999999,\"median\":4.001089815499998,\"mean\":4.001089815499998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.099369304999993,
            "range": "± 0.0007530856925238097",
            "unit": "s",
            "extra": "{\"times\":[4.098836792999995,4.099901816999991],\"min\":4.098836792999995,\"max\":4.099901816999991,\"median\":4.099369304999993,\"mean\":4.099369304999993}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.230726145999999,
            "range": "± 0.005239355778459021",
            "unit": "s",
            "extra": "{\"times\":[9.234430929999995,9.227021362],\"min\":9.227021362,\"max\":9.234430929999995,\"median\":9.230726145999999,\"mean\":9.230726145999999}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5232742169000001,
            "range": "± 0.004540499519199179",
            "unit": "s",
            "extra": "{\"times\":[0.5200635989000001,0.5264848349000001],\"min\":0.5200635989000001,\"max\":0.5264848349000001,\"median\":0.5232742169000001,\"mean\":0.5232742169000001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.564385312,
            "range": "± 0.002686234315010618",
            "unit": "s",
            "extra": "{\"times\":[0.5662847665,0.5624858575],\"min\":0.5624858575,\"max\":0.5662847665,\"median\":0.564385312,\"mean\":0.564385312}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 241.11362692350002,
            "range": "± 3.665555939303343",
            "unit": "s",
            "extra": "{\"times\":[238.521687462,243.70556638500003],\"min\":238.521687462,\"max\":243.70556638500003,\"median\":241.11362692350002,\"mean\":241.11362692350002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.93637048849999,
            "range": "± 0.08513707420398854",
            "unit": "s",
            "extra": "{\"times\":[43.99657149100001,43.87616948599997],\"min\":43.87616948599997,\"max\":43.99657149100001,\"median\":43.93637048849999,\"mean\":43.93637048849999}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.471805619500024,
            "range": "± 0.03371647130859089",
            "unit": "s",
            "extra": "{\"times\":[53.49564676500001,53.44796447400004],\"min\":53.44796447400004,\"max\":53.49564676500001,\"median\":53.471805619500024,\"mean\":53.471805619500024}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.70963597150006,
            "range": "± 0.013179792285994571",
            "unit": "s",
            "extra": "{\"times\":[238.700316451,238.7189554920001],\"min\":238.700316451,\"max\":238.7189554920001,\"median\":238.70963597150006,\"mean\":238.70963597150006}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5816290496000001,
            "range": "± 0.006712373047866179",
            "unit": "s",
            "extra": "{\"times\":[0.5768826851000001,0.5863754141],\"min\":0.5768826851000001,\"max\":0.5863754141,\"median\":0.5816290496000001,\"mean\":0.5816290496000001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.7905120561466665,
            "range": "± 0.17592416804719505",
            "unit": "s",
            "extra": "{\"times\":[3.66096188928,3.6800489182800002,4.0181894072799995,3.60216443728,3.74616751028,3.88097432728,3.52957249028,3.8621764612800003,3.77687009328,3.73977499528,4.0816939442799995,3.70322853528,3.69123944028,3.7391926412800003,4.1454257512799995],\"min\":3.52957249028,\"max\":4.1454257512799995,\"median\":3.73977499528,\"mean\":3.7905120561466665}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 267.35803586099996,
            "range": "± 0.9011685801268529",
            "unit": "s",
            "extra": "{\"times\":[267.9952582749999,266.720813447],\"min\":266.720813447,\"max\":267.9952582749999,\"median\":267.35803586099996,\"mean\":267.35803586099996}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2577845855000196,
            "range": "± 0.005173611111563275",
            "unit": "s",
            "extra": "{\"times\":[3.254126289999811,3.261442881000228],\"min\":3.254126289999811,\"max\":3.261442881000228,\"median\":3.2577845855000196,\"mean\":3.2577845855000196}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.76586832899996,
            "range": "± 0.0199108965926988",
            "unit": "s",
            "extra": "{\"times\":[13.779947459000162,13.75178919899976],\"min\":13.75178919899976,\"max\":13.779947459000162,\"median\":13.76586832899996,\"mean\":13.76586832899996}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.72175220999986,
            "range": "± 0.006596412485650153",
            "unit": "s",
            "extra": "{\"times\":[265.72641657799994,265.7170878419997],\"min\":265.7170878419997,\"max\":265.72641657799994,\"median\":265.72175220999986,\"mean\":265.72175220999986}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66129300088,
            "range": "± 0.017034115384649832",
            "unit": "s",
            "extra": "{\"times\":[0.64924806238,0.67333793938],\"min\":0.64924806238,\"max\":0.67333793938,\"median\":0.66129300088,\"mean\":0.66129300088}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.55566522026,
            "range": "± 0.05381774551055407",
            "unit": "s",
            "extra": "{\"times\":[2.55279102976,2.53888553976,2.50143712776,2.62954718376],\"min\":2.50143712776,\"max\":2.62954718376,\"median\":2.54583828476,\"mean\":2.55566522026}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.0209109139999,
            "range": "± 0.33866601109123406",
            "unit": "s",
            "extra": "{\"times\":[187.78143788099987,188.2603839469999],\"min\":187.78143788099987,\"max\":188.2603839469999,\"median\":188.0209109139999,\"mean\":188.0209109139999}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.584776066000108,
            "range": "± 0.0005720451432304276",
            "unit": "s",
            "extra": "{\"times\":[3.5843715690001847,3.585180563000031],\"min\":3.5843715690001847,\"max\":3.585180563000031,\"median\":3.584776066000108,\"mean\":3.584776066000108}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.188562222500096,
            "range": "± 0.2373533106532859",
            "unit": "s",
            "extra": "{\"times\":[33.35639635800011,33.02072808700008],\"min\":33.02072808700008,\"max\":33.35639635800011,\"median\":33.188562222500096,\"mean\":33.188562222500096}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.6434096474999,
            "range": "± 1.3570853526390523",
            "unit": "s",
            "extra": "{\"times\":[186.60301390299992,184.6838053919999],\"min\":184.6838053919999,\"max\":186.60301390299992,\"median\":185.6434096474999,\"mean\":185.6434096474999}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 0.99921009954,
            "range": "± 0.0063536620204108964",
            "unit": "s",
            "extra": "{\"times\":[0.99471738204,1.00370281704],\"min\":0.99471738204,\"max\":1.00370281704,\"median\":0.99921009954,\"mean\":0.99921009954}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.630747754358332,
            "range": "± 0.4906677887603247",
            "unit": "s",
            "extra": "{\"times\":[13.1452611494,14.104145025400001,13.6760301454,13.3588078274,14.308543934400001,13.5558697294,13.1012798234,13.481393457400001,13.6582830074,14.263303714400001,13.6228618374,14.3207489444,13.5144236884,13.5951637014,13.6410042904,13.4613432184,14.4559951264,13.2061457324,14.6752593964,13.0268860504,13.0738753104,13.0158705134,13.779471622400001,13.0959788584],\"min\":13.0158705134,\"max\":14.6752593964,\"median\":13.5755167154,\"mean\":13.630747754358332}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.728527084000176,
            "range": "± 0.02887683238698544",
            "unit": "s",
            "extra": "{\"times\":[3.708108080000151,3.7489460880002006],\"min\":3.708108080000151,\"max\":3.7489460880002006,\"median\":3.728527084000176,\"mean\":3.728527084000176}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3049190065001604,
            "range": "± 0.004873274577042836",
            "unit": "s",
            "extra": "{\"times\":[3.3014730810001494,3.3083649320001713],\"min\":3.3014730810001494,\"max\":3.3083649320001713,\"median\":3.3049190065001604,\"mean\":3.3049190065001604}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.469786474000197,
            "range": "± 0.0008968051457423447",
            "unit": "s",
            "extra": "{\"times\":[3.4691523370002395,3.4704206110001543],\"min\":3.4691523370002395,\"max\":3.4704206110001543,\"median\":3.469786474000197,\"mean\":3.469786474000197}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.501227310499875,
            "range": "± 0.011573218808912674",
            "unit": "s",
            "extra": "{\"times\":[3.5094108119998126,3.493043808999937],\"min\":3.493043808999937,\"max\":3.5094108119998126,\"median\":3.501227310499875,\"mean\":3.501227310499875}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46272534012,
            "range": "± 0.0037227093135535094",
            "unit": "s",
            "extra": "{\"times\":[0.46535769312,0.46009298712],\"min\":0.46009298712,\"max\":0.46535769312,\"median\":0.46272534012,\"mean\":0.46272534012}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5120062165000001,
            "range": "± 0.0031091456884501153",
            "unit": "s",
            "extra": "{\"times\":[0.5142047145,0.5098077185000001],\"min\":0.5098077185000001,\"max\":0.5142047145,\"median\":0.5120062165000001,\"mean\":0.5120062165000001}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.92363739349996,
            "range": "± 0.03239783029860495",
            "unit": "s",
            "extra": "{\"times\":[52.900728668000085,52.946546118999834],\"min\":52.900728668000085,\"max\":52.946546118999834,\"median\":52.92363739349996,\"mean\":52.92363739349996}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4857568840000313,
            "range": "± 0.015481260102976973",
            "unit": "s",
            "extra": "{\"times\":[3.4748099799999035,3.496703788000159],\"min\":3.4748099799999035,\"max\":3.496703788000159,\"median\":3.4857568840000313,\"mean\":3.4857568840000313}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.198581481500064,
            "range": "± 0.023994158946820447",
            "unit": "s",
            "extra": "{\"times\":[8.181615048999898,8.215547914000227],\"min\":8.181615048999898,\"max\":8.215547914000227,\"median\":8.198581481500064,\"mean\":8.198581481500064}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 53.21931365249981,
            "range": "± 1.5890586788244083",
            "unit": "s",
            "extra": "{\"times\":[52.095679484999735,54.342947819999885],\"min\":52.095679484999735,\"max\":54.342947819999885,\"median\":53.21931365249981,\"mean\":53.21931365249981}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6198082042399999,
            "range": "± 0.003932039083735689",
            "unit": "s",
            "extra": "{\"times\":[0.61702783274,0.62258857574],\"min\":0.61702783274,\"max\":0.62258857574,\"median\":0.6198082042399999,\"mean\":0.6198082042399999}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.5111797514333336,
            "range": "± 0.16533395487126967",
            "unit": "s",
            "extra": "{\"times\":[3.7950119589,3.3457702459,3.2724567628999996,3.4007689268999997,3.6750239079,3.3189806329,3.7231912509,3.4019672748999996,3.4791752528999997,3.4201877959,3.4117677739,3.5162713548999998,3.7289572169,3.5336068009,3.6445591149],\"min\":3.2724567628999996,\"max\":3.7950119589,\"median\":3.4791752528999997,\"mean\":3.5111797514333336}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.8499445285001,
            "range": "± 0.27701495688020306",
            "unit": "s",
            "extra": "{\"times\":[181.04582368300018,180.654065374],\"min\":180.654065374,\"max\":181.04582368300018,\"median\":180.8499445285001,\"mean\":180.8499445285001}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9896871509999037,
            "range": "± 0.005946630851111963",
            "unit": "s",
            "extra": "{\"times\":[3.9854822479998693,3.993892053999938],\"min\":3.9854822479998693,\"max\":3.993892053999938,\"median\":3.9896871509999037,\"mean\":3.9896871509999037}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.875166824999965,
            "range": "± 0.11681900131323472",
            "unit": "s",
            "extra": "{\"times\":[27.957770332999992,27.792563316999935],\"min\":27.792563316999935,\"max\":27.957770332999992,\"median\":27.875166824999965,\"mean\":27.875166824999965}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.89392573749996,
            "range": "± 0.1624446654397611",
            "unit": "s",
            "extra": "{\"times\":[166.008791462,165.77906001299993],\"min\":165.77906001299993,\"max\":166.008791462,\"median\":165.89392573749996,\"mean\":165.89392573749996}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5514594773600001,
            "range": "± 0.005635826308033498",
            "unit": "s",
            "extra": "{\"times\":[0.54747434636,0.5554446083600001],\"min\":0.54747434636,\"max\":0.5554446083600001,\"median\":0.5514594773600001,\"mean\":0.5514594773600001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.417858403215555,
            "range": "± 0.18586785870436592",
            "unit": "s",
            "extra": "{\"times\":[7.22019314866,7.71466640666,7.25235309266,7.27773645966,7.32294097766,7.49292882266,7.33200477466,7.69932374666,7.44857819966],\"min\":7.22019314866,\"max\":7.71466640666,\"median\":7.33200477466,\"mean\":7.417858403215555}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.55021804599976,
            "range": "± 0.06535544309445099",
            "unit": "s",
            "extra": "{\"times\":[37.5964313229993,37.504004769000225],\"min\":37.504004769000225,\"max\":37.5964313229993,\"median\":37.55021804599976,\"mean\":37.55021804599976}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.183398553499952,
            "range": "± 0.01299731631006029",
            "unit": "s",
            "extra": "{\"times\":[3.174208062999882,3.192589044000022],\"min\":3.174208062999882,\"max\":3.192589044000022,\"median\":3.183398553499952,\"mean\":3.183398553499952}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.277322451000567,
            "range": "± 0.3298208745905375",
            "unit": "s",
            "extra": "{\"times\":[7.510541028000414,7.0441038740007205],\"min\":7.0441038740007205,\"max\":7.510541028000414,\"median\":7.277322451000567,\"mean\":7.277322451000567}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.210139400000216,
            "range": "± 0.03215335166483207",
            "unit": "s",
            "extra": "{\"times\":[35.18740354700014,35.232875253000294],\"min\":35.18740354700014,\"max\":35.232875253000294,\"median\":35.210139400000216,\"mean\":35.210139400000216}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.75504183102,
            "range": "± 0.0031900811306247545",
            "unit": "s",
            "extra": "{\"times\":[0.75278610302,0.7572975590200001],\"min\":0.75278610302,\"max\":0.7572975590200001,\"median\":0.75504183102,\"mean\":0.75504183102}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.49834620732,
            "range": "± 0.08247639543512063",
            "unit": "s",
            "extra": "{\"times\":[40.55666582582,40.440026588820004],\"min\":40.440026588820004,\"max\":40.55666582582,\"median\":40.49834620732,\"mean\":40.49834620732}"
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
          "id": "1a05906ee91ae1120bc72f2f0f51f454f79e0c52",
          "message": "chore(deps): update cargo minor/patch (#1537)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-06T19:21:54Z",
          "tree_id": "8a95bd75c8e423265f506d27613686cd65eed6e2",
          "url": "https://github.com/NomicFoundation/edr/commit/1a05906ee91ae1120bc72f2f0f51f454f79e0c52"
        },
        "date": 1783372005087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.2853681615,
            "range": "± 0.00864971410645453",
            "unit": "s",
            "extra": "{\"times\":[9.291484432999997,9.27925189],\"min\":9.27925189,\"max\":9.291484432999997,\"median\":9.2853681615,\"mean\":9.2853681615}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9680480289999975,
            "range": "± 0.016887705390070968",
            "unit": "s",
            "extra": "{\"times\":[3.9799894399999975,3.956106617999998],\"min\":3.956106617999998,\"max\":3.9799894399999975,\"median\":3.9680480289999975,\"mean\":3.9680480289999975}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.101983476999997,
            "range": "± 0.0049076972422427015",
            "unit": "s",
            "extra": "{\"times\":[4.105453742999998,4.0985132109999975],\"min\":4.0985132109999975,\"max\":4.105453742999998,\"median\":4.101983476999997,\"mean\":4.101983476999997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.251007873999999,
            "range": "± 0.004223748208139089",
            "unit": "s",
            "extra": "{\"times\":[9.248021233,9.253994514999999],\"min\":9.248021233,\"max\":9.253994514999999,\"median\":9.251007873999999,\"mean\":9.251007873999999}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5263246631,
            "range": "± 0.006483390658914599",
            "unit": "s",
            "extra": "{\"times\":[0.5309091126000001,0.5217402136],\"min\":0.5217402136,\"max\":0.5309091126000001,\"median\":0.5263246631,\"mean\":0.5263246631}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.56873956166,
            "range": "± 0.002705971079487071",
            "unit": "s",
            "extra": "{\"times\":[0.57065297216,0.56682615116],\"min\":0.56682615116,\"max\":0.57065297216,\"median\":0.56873956166,\"mean\":0.56873956166}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.84396757550002,
            "range": "± 0.5485638347988602",
            "unit": "s",
            "extra": "{\"times\":[239.23186078299997,238.45607436800003],\"min\":238.45607436800003,\"max\":239.23186078299997,\"median\":238.84396757550002,\"mean\":238.84396757550002}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.92775926849997,
            "range": "± 0.008998913133526328",
            "unit": "s",
            "extra": "{\"times\":[43.934122460999994,43.921396075999944],\"min\":43.921396075999944,\"max\":43.934122460999994,\"median\":43.92775926849997,\"mean\":43.92775926849997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.57572620549996,
            "range": "± 0.07989325516753043",
            "unit": "s",
            "extra": "{\"times\":[53.632219267999986,53.51923314299993],\"min\":53.51923314299993,\"max\":53.632219267999986,\"median\":53.57572620549996,\"mean\":53.57572620549996}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.21225701049994,
            "range": "± 0.9392118364152339",
            "unit": "s",
            "extra": "{\"times\":[238.54813395200006,239.87638006899982],\"min\":238.54813395200006,\"max\":239.87638006899982,\"median\":239.21225701049994,\"mean\":239.21225701049994}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5803874037,
            "range": "± 0.00403443450961247",
            "unit": "s",
            "extra": "{\"times\":[0.5832401797,0.5775346277],\"min\":0.5775346277,\"max\":0.5832401797,\"median\":0.5803874037,\"mean\":0.5803874037}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.6632542477800003,
            "range": "± 0.1304631919910897",
            "unit": "s",
            "extra": "{\"times\":[3.53347433658,3.59412224958,3.4832182495799997,3.87938437758,3.87011368558,3.56437951158,3.6458280795799998,3.64846534658,3.65855737358,3.58132944858,3.6825382105799997,3.69327194358,3.61370931358,3.57864725358,3.92177433658],\"min\":3.4832182495799997,\"max\":3.92177433658,\"median\":3.6458280795799998,\"mean\":3.6632542477800003}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.6934540255001,
            "range": "± 0.03503811045119527",
            "unit": "s",
            "extra": "{\"times\":[266.7182297110001,266.6686783400001],\"min\":266.6686783400001,\"max\":266.7182297110001,\"median\":266.6934540255001,\"mean\":266.6934540255001}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.287173183000064,
            "range": "± 0.0005722997017991693",
            "unit": "s",
            "extra": "{\"times\":[3.286768506000051,3.2875778600000776],\"min\":3.286768506000051,\"max\":3.2875778600000776,\"median\":3.287173183000064,\"mean\":3.287173183000064}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.739032163999976,
            "range": "± 0.010467246527700744",
            "unit": "s",
            "extra": "{\"times\":[13.731630702999887,13.746433625000064],\"min\":13.731630702999887,\"max\":13.746433625000064,\"median\":13.739032163999976,\"mean\":13.739032163999976}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.85507107500007,
            "range": "± 0.6705907390739997",
            "unit": "s",
            "extra": "{\"times\":[265.380891816,266.3292503340002],\"min\":265.380891816,\"max\":266.3292503340002,\"median\":265.85507107500007,\"mean\":265.85507107500007}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.66215250822,
            "range": "± 0.012840977829067858",
            "unit": "s",
            "extra": "{\"times\":[0.67123245072,0.65307256572],\"min\":0.65307256572,\"max\":0.67123245072,\"median\":0.66215250822,\"mean\":0.66215250822}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.49793499544,
            "range": "± 0.01319106449156638",
            "unit": "s",
            "extra": "{\"times\":[2.5154138239400003,2.50085195694,2.48774959594,2.4877246049400004],\"min\":2.4877246049400004,\"max\":2.5154138239400003,\"median\":2.4943007764400003,\"mean\":2.49793499544}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 187.94001548099982,
            "range": "± 0.27136794202125014",
            "unit": "s",
            "extra": "{\"times\":[188.1319015929997,187.74812936899997],\"min\":187.74812936899997,\"max\":188.1319015929997,\"median\":187.94001548099982,\"mean\":187.94001548099982}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.613461157999933,
            "range": "± 0.0013249215322920357",
            "unit": "s",
            "extra": "{\"times\":[3.612524296999909,3.6143980189999567],\"min\":3.612524296999909,\"max\":3.6143980189999567,\"median\":3.613461157999933,\"mean\":3.613461157999933}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.171113483999854,
            "range": "± 0.01173277109051522",
            "unit": "s",
            "extra": "{\"times\":[33.179409806000066,33.16281716199964],\"min\":33.16281716199964,\"max\":33.179409806000066,\"median\":33.171113483999854,\"mean\":33.171113483999854}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 184.89563301899983,
            "range": "± 0.1261164598797338",
            "unit": "s",
            "extra": "{\"times\":[184.80645521499963,184.98481082300003],\"min\":184.80645521499963,\"max\":184.98481082300003,\"median\":184.89563301899983,\"mean\":184.89563301899983}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00473662432,
            "range": "± 0.011587201845598367",
            "unit": "s",
            "extra": "{\"times\":[1.0129300133199999,0.9965432353200001],\"min\":0.9965432353200001,\"max\":1.0129300133199999,\"median\":1.00473662432,\"mean\":1.00473662432}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.540727886911663,
            "range": "± 0.45513314570242236",
            "unit": "s",
            "extra": "{\"times\":[12.81762529662,13.47552432362,13.45561956462,13.19340918062,13.95114290662,14.07468413462,13.60339444562,12.87087921062,13.90335679962,12.76957812262,12.96596321562,13.98548687962,13.09016510162,14.23263835362,13.594007487619999,13.487998297619999,14.243223044619999,14.32547705162,13.65477626462,13.65017333362,13.53304741662,13.231414106619999,13.368267358619999,13.499617388619999],\"min\":12.76957812262,\"max\":14.32547705162,\"median\":13.51633240262,\"mean\":13.540727886911663}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.737291679000249,
            "range": "± 0.0032073472642091113",
            "unit": "s",
            "extra": "{\"times\":[3.7350237420001067,3.7395596160003914],\"min\":3.7350237420001067,\"max\":3.7395596160003914,\"median\":3.737291679000249,\"mean\":3.737291679000249}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.295703985499684,
            "range": "± 0.00891878803583127",
            "unit": "s",
            "extra": "{\"times\":[3.3020105209997856,3.289397449999582],\"min\":3.289397449999582,\"max\":3.3020105209997856,\"median\":3.295703985499684,\"mean\":3.295703985499684}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.487611488499912,
            "range": "± 0.030545005470934774",
            "unit": "s",
            "extra": "{\"times\":[3.50921006899979,3.4660129080000335],\"min\":3.4660129080000335,\"max\":3.50921006899979,\"median\":3.487611488499912,\"mean\":3.487611488499912}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.674375645000022,
            "range": "± 0.2716772248705612",
            "unit": "s",
            "extra": "{\"times\":[3.4822708370001054,3.866480452999938],\"min\":3.4822708370001054,\"max\":3.866480452999938,\"median\":3.674375645000022,\"mean\":3.674375645000022}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4663730897,
            "range": "± 0.0006496543552151574",
            "unit": "s",
            "extra": "{\"times\":[0.46683246470000006,0.46591371470000004],\"min\":0.46591371470000004,\"max\":0.46683246470000006,\"median\":0.4663730897,\"mean\":0.4663730897}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50619206698,
            "range": "± 0.003901517526632525",
            "unit": "s",
            "extra": "{\"times\":[0.50895085648,0.50343327748],\"min\":0.50343327748,\"max\":0.50895085648,\"median\":0.50619206698,\"mean\":0.50619206698}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.78502301350003,
            "range": "± 0.010217234075610756",
            "unit": "s",
            "extra": "{\"times\":[52.777798338000196,52.792247688999865],\"min\":52.777798338000196,\"max\":52.792247688999865,\"median\":52.78502301350003,\"mean\":52.78502301350003}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.5055783029999583,
            "range": "± 0.0027950813831171604",
            "unit": "s",
            "extra": "{\"times\":[3.5075547239999287,3.503601881999988],\"min\":3.503601881999988,\"max\":3.5075547239999287,\"median\":3.5055783029999583,\"mean\":3.5055783029999583}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.164883325999835,
            "range": "± 0.06148009629780178",
            "unit": "s",
            "extra": "{\"times\":[8.208356319000012,8.121410332999657],\"min\":8.121410332999657,\"max\":8.208356319000012,\"median\":8.164883325999835,\"mean\":8.164883325999835}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.250106200500156,
            "range": "± 0.02721746561044666",
            "unit": "s",
            "extra": "{\"times\":[52.2308605460003,52.26935185500002],\"min\":52.2308605460003,\"max\":52.26935185500002,\"median\":52.250106200500156,\"mean\":52.250106200500156}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.62132512472,
            "range": "± 0.006613789634646749",
            "unit": "s",
            "extra": "{\"times\":[0.61664846922,0.6260017802200001],\"min\":0.61664846922,\"max\":0.6260017802200001,\"median\":0.62132512472,\"mean\":0.62132512472}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.6014216152,
            "range": "± 0.8386281282085896",
            "unit": "s",
            "extra": "{\"times\":[3.2738943226,3.2425301936,3.3337868565999997,3.4468748955999997,3.4919782315999996,3.3806198106,3.4248594465999997,3.5434457146,6.6148458856,3.4247751236,3.4659484166,3.4163813916,3.4291782295999997,3.2769467766,3.2552589326],\"min\":3.2425301936,\"max\":6.6148458856,\"median\":3.4247751236,\"mean\":3.6014216152}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.88945210750006,
            "range": "± 0.17357981533461306",
            "unit": "s",
            "extra": "{\"times\":[180.76671264299983,181.01219157200026],\"min\":180.76671264299983,\"max\":181.01219157200026,\"median\":180.88945210750006,\"mean\":180.88945210750006}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9852247265002223,
            "range": "± 0.005401486171348815",
            "unit": "s",
            "extra": "{\"times\":[3.9814052989999764,3.9890441540004686],\"min\":3.9814052989999764,\"max\":3.9890441540004686,\"median\":3.9852247265002223,\"mean\":3.9852247265002223}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.807514111500232,
            "range": "± 0.036233907213668655",
            "unit": "s",
            "extra": "{\"times\":[27.833135352999903,27.781892870000565],\"min\":27.781892870000565,\"max\":27.833135352999903,\"median\":27.807514111500232,\"mean\":27.807514111500232}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.84747583300015,
            "range": "± 0.3805899026289665",
            "unit": "s",
            "extra": "{\"times\":[165.5783581320001,166.11659353400023],\"min\":165.5783581320001,\"max\":166.11659353400023,\"median\":165.84747583300015,\"mean\":165.84747583300015}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.56140825562,
            "range": "± 0.00441843945373755",
            "unit": "s",
            "extra": "{\"times\":[0.56453256412,0.55828394712],\"min\":0.55828394712,\"max\":0.56453256412,\"median\":0.56140825562,\"mean\":0.56140825562}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.20760007468,
            "range": "± 0.08870148552758801",
            "unit": "s",
            "extra": "{\"times\":[7.19700106368,7.2774400986800005,7.1478704336800005,7.3536019576800005,7.08119177568,7.17725342868,7.14806679368,7.17185126968,7.31412385068],\"min\":7.08119177568,\"max\":7.3536019576800005,\"median\":7.17725342868,\"mean\":7.20760007468}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.4182781855003,
            "range": "± 0.04512816500856061",
            "unit": "s",
            "extra": "{\"times\":[37.45018861700036,37.38636775400024],\"min\":37.38636775400024,\"max\":37.45018861700036,\"median\":37.4182781855003,\"mean\":37.4182781855003}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1988914889995943,
            "range": "± 0.00604907506671294",
            "unit": "s",
            "extra": "{\"times\":[3.2031688309991733,3.194614147000015],\"min\":3.194614147000015,\"max\":3.2031688309991733,\"median\":3.1988914889995943,\"mean\":3.1988914889995943}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.038257849500049,
            "range": "± 0.01631374752239609",
            "unit": "s",
            "extra": "{\"times\":[7.026722288000397,7.0497934109997],\"min\":7.026722288000397,\"max\":7.0497934109997,\"median\":7.038257849500049,\"mean\":7.038257849500049}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.280027392500074,
            "range": "± 0.11536590182674086",
            "unit": "s",
            "extra": "{\"times\":[35.19845138100069,35.36160340399947],\"min\":35.19845138100069,\"max\":35.36160340399947,\"median\":35.280027392500074,\"mean\":35.280027392500074}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7554059228200001,
            "range": "± 0.004158554377127692",
            "unit": "s",
            "extra": "{\"times\":[0.75834646482,0.75246538082],\"min\":0.75246538082,\"max\":0.75834646482,\"median\":0.7554059228200001,\"mean\":0.7554059228200001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.54996256224,
            "range": "± 0.023614912831103174",
            "unit": "s",
            "extra": "{\"times\":[40.533264297239995,40.56666082724],\"min\":40.533264297239995,\"max\":40.56666082724,\"median\":40.54996256224,\"mean\":40.54996256224}"
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
          "id": "2e7b0127ae6ffbce8b98dc34d257844af0b64088",
          "message": "chore(deps): update npm minor/patch (#1539)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>\nCo-authored-by: Bas van Gijzel <bas@nomic.foundation>",
          "timestamp": "2026-07-06T21:04:58Z",
          "tree_id": "8500e5f203af9685e25be1ed5f597aad098bb51e",
          "url": "https://github.com/NomicFoundation/edr/commit/2e7b0127ae6ffbce8b98dc34d257844af0b64088"
        },
        "date": 1783387621961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.278939721999997,
            "range": "± 0.014252372156704728",
            "unit": "s",
            "extra": "{\"times\":[9.289017670999998,9.268861772999998],\"min\":9.268861772999998,\"max\":9.289017670999998,\"median\":9.278939721999997,\"mean\":9.278939721999997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.002840925500003,
            "range": "± 0.0041984161077063065",
            "unit": "s",
            "extra": "{\"times\":[3.9998721970000006,4.0058096540000045],\"min\":3.9998721970000006,\"max\":4.0058096540000045,\"median\":4.002840925500003,\"mean\":4.002840925500003}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.119804917999998,
            "range": "± 0.009548921293990004",
            "unit": "s",
            "extra": "{\"times\":[4.113052811000001,4.126557024999995],\"min\":4.113052811000001,\"max\":4.126557024999995,\"median\":4.119804917999998,\"mean\":4.119804917999998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.272449317499998,
            "range": "± 0.025378235617943473",
            "unit": "s",
            "extra": "{\"times\":[9.290394439999996,9.254504195],\"min\":9.254504195,\"max\":9.290394439999996,\"median\":9.272449317499998,\"mean\":9.272449317499998}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5253954482200001,
            "range": "± 0.0012852288002033595",
            "unit": "s",
            "extra": "{\"times\":[0.52448665422,0.52630424222],\"min\":0.52448665422,\"max\":0.52630424222,\"median\":0.5253954482200001,\"mean\":0.5253954482200001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5721182719400001,
            "range": "± 0.0032510903037055255",
            "unit": "s",
            "extra": "{\"times\":[0.5744171399400001,0.5698194039400001],\"min\":0.5698194039400001,\"max\":0.5744171399400001,\"median\":0.5721182719400001,\"mean\":0.5721182719400001}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 239.05663830549997,
            "range": "± 0.11505895950182035",
            "unit": "s",
            "extra": "{\"times\":[239.137997276,238.97527933499998],\"min\":238.97527933499998,\"max\":239.137997276,\"median\":239.05663830549997,\"mean\":239.05663830549997}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.8844990715,
            "range": "± 0.050894547269946695",
            "unit": "s",
            "extra": "{\"times\":[43.920486951,43.848511192000004],\"min\":43.848511192000004,\"max\":43.920486951,\"median\":43.8844990715,\"mean\":43.8844990715}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.39654015449996,
            "range": "± 0.04349108835927774",
            "unit": "s",
            "extra": "{\"times\":[53.42729299799999,53.365787310999934],\"min\":53.365787310999934,\"max\":53.42729299799999,\"median\":53.39654015449996,\"mean\":53.39654015449996}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.81363608300006,
            "range": "± 0.2607309446114581",
            "unit": "s",
            "extra": "{\"times\":[238.99800070199998,238.6292714640001],\"min\":238.6292714640001,\"max\":238.99800070199998,\"median\":238.81363608300006,\"mean\":238.81363608300006}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5828775205400001,
            "range": "± 0.0014154799906181824",
            "unit": "s",
            "extra": "{\"times\":[0.58387841604,0.58187662504],\"min\":0.58187662504,\"max\":0.58387841604,\"median\":0.5828775205400001,\"mean\":0.5828775205400001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.847391659566666,
            "range": "± 0.27087128094237617",
            "unit": "s",
            "extra": "{\"times\":[3.8595473597,3.6979809007,3.7506038197000002,3.6498128727,4.2789646517,3.6079860597,3.6444782117,3.6991393417,3.6713326937,3.5959050897,4.2092873077,3.9630393047,3.7881272857,3.8100156847,4.4846543097],\"min\":3.5959050897,\"max\":4.4846543097,\"median\":3.7506038197000002,\"mean\":3.847391659566666}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 267.0725681435,
            "range": "± 0.1182400490624967",
            "unit": "s",
            "extra": "{\"times\":[267.15617648399996,266.9889598030001],\"min\":266.9889598030001,\"max\":267.15617648399996,\"median\":267.0725681435,\"mean\":267.0725681435}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2755211499999275,
            "range": "± 0.022844276748241008",
            "unit": "s",
            "extra": "{\"times\":[3.291674492999911,3.2593678069999443],\"min\":3.2593678069999443,\"max\":3.291674492999911,\"median\":3.2755211499999275,\"mean\":3.2755211499999275}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.784391223500133,
            "range": "± 0.014151774196230982",
            "unit": "s",
            "extra": "{\"times\":[13.774384408000158,13.794398039000109],\"min\":13.774384408000158,\"max\":13.794398039000109,\"median\":13.784391223500133,\"mean\":13.784391223500133}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.9756316920001,
            "range": "± 0.4891912313719456",
            "unit": "s",
            "extra": "{\"times\":[265.629721255,266.3215421290002],\"min\":265.629721255,\"max\":266.3215421290002,\"median\":265.9756316920001,\"mean\":265.9756316920001}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6584784130000001,
            "range": "± 0.013446797220703651",
            "unit": "s",
            "extra": "{\"times\":[0.6679867345,0.6489700915000001],\"min\":0.6489700915000001,\"max\":0.6679867345,\"median\":0.6584784130000001,\"mean\":0.6584784130000001}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.49269854657,
            "range": "± 0.012409731064220282",
            "unit": "s",
            "extra": "{\"times\":[2.50956632182,2.47973934182,2.4897688168200003,2.49171970582],\"min\":2.47973934182,\"max\":2.50956632182,\"median\":2.49074426132,\"mean\":2.49269854657}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.88806787050027,
            "range": "± 0.17477286993702085",
            "unit": "s",
            "extra": "{\"times\":[188.76448478900036,189.01165095200017],\"min\":188.76448478900036,\"max\":189.01165095200017,\"median\":188.88806787050027,\"mean\":188.88806787050027}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.60715128250001,
            "range": "± 0.002725099731812824",
            "unit": "s",
            "extra": "{\"times\":[3.6090782189997843,3.6052243460002353],\"min\":3.6052243460002353,\"max\":3.6090782189997843,\"median\":3.60715128250001,\"mean\":3.60715128250001}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.111344691500065,
            "range": "± 0.14590532610498294",
            "unit": "s",
            "extra": "{\"times\":[33.21451533700014,33.008174046],\"min\":33.008174046,\"max\":33.21451533700014,\"median\":33.111344691500065,\"mean\":33.111344691500065}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.708430103,
            "range": "± 0.22669185512694262",
            "unit": "s",
            "extra": "{\"times\":[185.548134755,185.86872545100005],\"min\":185.548134755,\"max\":185.86872545100005,\"median\":185.708430103,\"mean\":185.708430103}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00314814302,
            "range": "± 0.0009146383788241165",
            "unit": "s",
            "extra": "{\"times\":[1.00379489002,1.00250139602],\"min\":1.00250139602,\"max\":1.00379489002,\"median\":1.00314814302,\"mean\":1.00314814302}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.701714047528334,
            "range": "± 0.5155108302423752",
            "unit": "s",
            "extra": "{\"times\":[14.17224327732,13.60085794832,14.04824646432,14.13206523232,14.27856948432,13.27752701932,13.00884838832,14.18155044132,13.20161665332,12.95020738532,13.68740361032,14.47004721332,12.82563791732,13.93488666732,14.11368452232,13.44708923232,14.23101684032,13.51602326032,14.310513739320001,13.74864708832,13.07415217832,13.05125748132,13.35896468132,14.22008041432],\"min\":12.82563791732,\"max\":14.47004721332,\"median\":13.718025349320001,\"mean\":13.701714047528334}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7314765920001083,
            "range": "± 0.00823314406638955",
            "unit": "s",
            "extra": "{\"times\":[3.737298303999938,3.7256548800002784],\"min\":3.7256548800002784,\"max\":3.737298303999938,\"median\":3.7314765920001083,\"mean\":3.7314765920001083}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.311630226999987,
            "range": "± 0.0043761268910244054",
            "unit": "s",
            "extra": "{\"times\":[3.314724615999963,3.3085358380000107],\"min\":3.3085358380000107,\"max\":3.314724615999963,\"median\":3.311630226999987,\"mean\":3.311630226999987}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.490189884999767,
            "range": "± 0.001964017369126688",
            "unit": "s",
            "extra": "{\"times\":[3.4915786549998447,3.4888011149996894],\"min\":3.4888011149996894,\"max\":3.4915786549998447,\"median\":3.490189884999767,\"mean\":3.490189884999767}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.501342662999872,
            "range": "± 0.014151469433191866",
            "unit": "s",
            "extra": "{\"times\":[3.491336062999908,3.511349262999836],\"min\":3.491336062999908,\"max\":3.511349262999836,\"median\":3.501342662999872,\"mean\":3.501342662999872}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4621649855,
            "range": "± 0.0005837732164119846",
            "unit": "s",
            "extra": "{\"times\":[0.4617521955,0.4625777755],\"min\":0.4617521955,\"max\":0.4625777755,\"median\":0.4621649855,\"mean\":0.4621649855}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50971047102,
            "range": "± 0.0016514726361985623",
            "unit": "s",
            "extra": "{\"times\":[0.51087823852,0.50854270352],\"min\":0.50854270352,\"max\":0.51087823852,\"median\":0.50971047102,\"mean\":0.50971047102}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.04017661850015,
            "range": "± 0.2125619347725111",
            "unit": "s",
            "extra": "{\"times\":[52.88987263300037,53.19048060399992],\"min\":52.88987263300037,\"max\":53.19048060399992,\"median\":53.04017661850015,\"mean\":53.04017661850015}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.4949981465002056,
            "range": "± 0.01983967750465455",
            "unit": "s",
            "extra": "{\"times\":[3.48096937600011,3.509026917000301],\"min\":3.48096937600011,\"max\":3.509026917000301,\"median\":3.4949981465002056,\"mean\":3.4949981465002056}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.200591005000053,
            "range": "± 0.013673132909043078",
            "unit": "s",
            "extra": "{\"times\":[8.210259370000102,8.190922640000004],\"min\":8.190922640000004,\"max\":8.210259370000102,\"median\":8.200591005000053,\"mean\":8.200591005000053}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.321543699500154,
            "range": "± 0.14288383620135459",
            "unit": "s",
            "extra": "{\"times\":[52.422577829000076,52.220509570000225],\"min\":52.220509570000225,\"max\":52.422577829000076,\"median\":52.321543699500154,\"mean\":52.321543699500154}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.62304657232,
            "range": "± 0.002775464119728567",
            "unit": "s",
            "extra": "{\"times\":[0.6250091218200001,0.6210840228200001],\"min\":0.6210840228200001,\"max\":0.6250091218200001,\"median\":0.62304657232,\"mean\":0.62304657232}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.3719318688466666,
            "range": "± 0.11667696558457108",
            "unit": "s",
            "extra": "{\"times\":[3.6200018283800004,3.3356633873800003,3.56036615638,3.19396253938,3.31422166238,3.33192775838,3.24492197538,3.37618065438,3.36120254038,3.42160041338,3.29495222138,3.31298320038,3.33912232738,3.34048456938,3.5313867983800002],\"min\":3.19396253938,\"max\":3.6200018283800004,\"median\":3.33912232738,\"mean\":3.3719318688466666}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.74813743550027,
            "range": "± 0.10588147857122338",
            "unit": "s",
            "extra": "{\"times\":[180.82300694700004,180.6732679240005],\"min\":180.6732679240005,\"max\":180.82300694700004,\"median\":180.74813743550027,\"mean\":180.74813743550027}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9966666105000765,
            "range": "± 0.012533308598170896",
            "unit": "s",
            "extra": "{\"times\":[3.9878042229996065,4.005528998000547],\"min\":3.9878042229996065,\"max\":4.005528998000547,\"median\":3.9966666105000765,\"mean\":3.9966666105000765}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.808772722500144,
            "range": "± 0.11393851203769324",
            "unit": "s",
            "extra": "{\"times\":[27.728206027999985,27.8893394170003],\"min\":27.728206027999985,\"max\":27.8893394170003,\"median\":27.808772722500144,\"mean\":27.808772722500144}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.16687144850033,
            "range": "± 0.05808794172682777",
            "unit": "s",
            "extra": "{\"times\":[166.1257970710001,166.20794582600053],\"min\":166.1257970710001,\"max\":166.20794582600053,\"median\":166.16687144850033,\"mean\":166.16687144850033}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55515848688,
            "range": "± 0.0035340808014973626",
            "unit": "s",
            "extra": "{\"times\":[0.55265951438,0.55765745938],\"min\":0.55265951438,\"max\":0.55765745938,\"median\":0.55515848688,\"mean\":0.55515848688}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.317762709995555,
            "range": "± 0.13614676830293124",
            "unit": "s",
            "extra": "{\"times\":[7.19117448044,7.30081783144,7.481244858439999,7.555964493439999,7.33789308244,7.280347466439999,7.350920846439999,7.24423347344,7.11726785744],\"min\":7.11726785744,\"max\":7.555964493439999,\"median\":7.30081783144,\"mean\":7.317762709995555}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.83888481750013,
            "range": "± 0.3116933203921025",
            "unit": "s",
            "extra": "{\"times\":[37.61848435700033,38.05928527799994],\"min\":37.61848435700033,\"max\":38.05928527799994,\"median\":37.83888481750013,\"mean\":37.83888481750013}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.193794727999717,
            "range": "± 0.010158790992705702",
            "unit": "s",
            "extra": "{\"times\":[3.200978077999316,3.186611378000118],\"min\":3.186611378000118,\"max\":3.200978077999316,\"median\":3.193794727999717,\"mean\":3.193794727999717}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.035081827499903,
            "range": "± 0.024092650436039476",
            "unit": "s",
            "extra": "{\"times\":[7.052117903999984,7.018045750999823],\"min\":7.018045750999823,\"max\":7.052117903999984,\"median\":7.035081827499903,\"mean\":7.035081827499903}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.22403007099964,
            "range": "± 0.08723806027759365",
            "unit": "s",
            "extra": "{\"times\":[35.16234344699979,35.285716694999486],\"min\":35.16234344699979,\"max\":35.285716694999486,\"median\":35.22403007099964,\"mean\":35.22403007099964}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7550144144000002,
            "range": "± 0.010440304344998768",
            "unit": "s",
            "extra": "{\"times\":[0.7476320044000001,0.7623968244000001],\"min\":0.7476320044000001,\"max\":0.7623968244000001,\"median\":0.7550144144000002,\"mean\":0.7550144144000002}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.5457604315,
            "range": "± 0.00415870286955547",
            "unit": "s",
            "extra": "{\"times\":[40.5487010785,40.5428197845],\"min\":40.5428197845,\"max\":40.5487010785,\"median\":40.5457604315,\"mean\":40.5457604315}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37712236+popescuoctavian@users.noreply.github.com",
            "name": "Octavian Popescu",
            "username": "popescuoctavian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a78d9bda1f13c98d19035c66e832675f871c06c0",
          "message": "fix(ci): floor the HH3 regression benchmark sentinel version at the last npm release (#1546)",
          "timestamp": "2026-07-07T15:55:09Z",
          "tree_id": "60ff3ec117841fffc44b884f724e38cf34a9e1b4",
          "url": "https://github.com/NomicFoundation/edr/commit/a78d9bda1f13c98d19035c66e832675f871c06c0"
        },
        "date": 1783448189098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.269982183999996,
            "range": "± 0.01842877956584533",
            "unit": "s",
            "extra": "{\"times\":[9.283013298999998,9.256951068999996],\"min\":9.256951068999996,\"max\":9.283013298999998,\"median\":9.269982183999996,\"mean\":9.269982183999996}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.000576249,
            "range": "± 0.00820637300389566",
            "unit": "s",
            "extra": "{\"times\":[4.006379031000001,3.994773466999999],\"min\":3.994773466999999,\"max\":4.006379031000001,\"median\":4.000576249,\"mean\":4.000576249}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.104844118000001,
            "range": "± 0.013470528431386474",
            "unit": "s",
            "extra": "{\"times\":[4.095319016000001,4.11436922],\"min\":4.095319016000001,\"max\":4.11436922,\"median\":4.104844118000001,\"mean\":4.104844118000001}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.235045070000004,
            "range": "± 0.008225627521544026",
            "unit": "s",
            "extra": "{\"times\":[9.240861467000002,9.229228673000005],\"min\":9.229228673000005,\"max\":9.240861467000002,\"median\":9.235045070000004,\"mean\":9.235045070000004}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5238046522600001,
            "range": "± 0.0005573479288922562",
            "unit": "s",
            "extra": "{\"times\":[0.5234105477600001,0.52419875676],\"min\":0.5234105477600001,\"max\":0.52419875676,\"median\":0.5238046522600001,\"mean\":0.5238046522600001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5694550040999999,
            "range": "± 0.0017461485773451301",
            "unit": "s",
            "extra": "{\"times\":[0.5706897176,0.5682202906],\"min\":0.5682202906,\"max\":0.5706897176,\"median\":0.5694550040999999,\"mean\":0.5694550040999999}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.602369452,
            "range": "± 0.5467900524885151",
            "unit": "s",
            "extra": "{\"times\":[238.21573049800003,238.98900840599998],\"min\":238.21573049800003,\"max\":238.98900840599998,\"median\":238.602369452,\"mean\":238.602369452}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 44.048523128,
            "range": "± 0.04295824733710054",
            "unit": "s",
            "extra": "{\"times\":[44.01814706000005,44.07889919599995],\"min\":44.01814706000005,\"max\":44.07889919599995,\"median\":44.048523128,\"mean\":44.048523128}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.52750179400001,
            "range": "± 0.322381240097129",
            "unit": "s",
            "extra": "{\"times\":[53.75545975500002,53.299543833],\"min\":53.299543833,\"max\":53.75545975500002,\"median\":53.52750179400001,\"mean\":53.52750179400001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.04897874700006,
            "range": "± 0.9728083838282008",
            "unit": "s",
            "extra": "{\"times\":[238.36109934200002,239.7368581520001],\"min\":238.36109934200002,\"max\":239.7368581520001,\"median\":239.04897874700006,\"mean\":239.04897874700006}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.58126191038,
            "range": "± 0.007833726315995609",
            "unit": "s",
            "extra": "{\"times\":[0.58680119138,0.57572262938],\"min\":0.57572262938,\"max\":0.58680119138,\"median\":0.58126191038,\"mean\":0.58126191038}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.667114885466667,
            "range": "± 0.19061088403738066",
            "unit": "s",
            "extra": "{\"times\":[4.1293475206,3.6883603196,3.4703312546,3.6506057276,3.5510856526,3.6166535676,3.5455042145999998,3.6492646875999997,3.7962959146,3.5862100085999997,3.5885217306,3.4784439406,4.0388255266,3.6935374995999997,3.5237357166],\"min\":3.4703312546,\"max\":4.1293475206,\"median\":3.6166535676,\"mean\":3.667114885466667}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 267.17249384,
            "range": "± 0.11860236421343735",
            "unit": "s",
            "extra": "{\"times\":[267.2563583760001,267.08862930399994],\"min\":267.08862930399994,\"max\":267.2563583760001,\"median\":267.17249384,\"mean\":267.17249384}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2690539870001376,
            "range": "± 0.011056035959251524",
            "unit": "s",
            "extra": "{\"times\":[3.2768717849999667,3.2612361890003085],\"min\":3.2612361890003085,\"max\":3.2768717849999667,\"median\":3.2690539870001376,\"mean\":3.2690539870001376}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.763083041500067,
            "range": "± 0.04147885762152246",
            "unit": "s",
            "extra": "{\"times\":[13.792413023000117,13.733753060000017],\"min\":13.733753060000017,\"max\":13.792413023000117,\"median\":13.763083041500067,\"mean\":13.763083041500067}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.7387313395001,
            "range": "± 0.029578841635288313",
            "unit": "s",
            "extra": "{\"times\":[265.759646739,265.7178159400001],\"min\":265.7178159400001,\"max\":265.759646739,\"median\":265.7387313395001,\"mean\":265.7387313395001}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.65368145888,
            "range": "± 0.0023855138217872603",
            "unit": "s",
            "extra": "{\"times\":[0.65199464588,0.65536827188],\"min\":0.65199464588,\"max\":0.65536827188,\"median\":0.65368145888,\"mean\":0.65368145888}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.48841643784,
            "range": "± 0.017682645376545087",
            "unit": "s",
            "extra": "{\"times\":[2.47765404584,2.51377573784,2.47509428884,2.48714167884],\"min\":2.47509428884,\"max\":2.51377573784,\"median\":2.48239786234,\"mean\":2.48841643784}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 187.97169702600013,
            "range": "± 0.2777987416135187",
            "unit": "s",
            "extra": "{\"times\":[187.77526365200012,188.16813040000014],\"min\":187.77526365200012,\"max\":188.16813040000014,\"median\":187.97169702600013,\"mean\":187.97169702600013}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.618789101500064,
            "range": "± 0.018283902579020687",
            "unit": "s",
            "extra": "{\"times\":[3.631717773000244,3.6058604299998844],\"min\":3.6058604299998844,\"max\":3.631717773000244,\"median\":3.618789101500064,\"mean\":3.618789101500064}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.167950196999826,
            "range": "± 0.09502837023743661",
            "unit": "s",
            "extra": "{\"times\":[33.10075499199983,33.23514540199982],\"min\":33.10075499199983,\"max\":33.23514540199982,\"median\":33.167950196999826,\"mean\":33.167950196999826}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.35796406699995,
            "range": "± 0.03719894180027274",
            "unit": "s",
            "extra": "{\"times\":[185.3842676909999,185.33166044300003],\"min\":185.33166044300003,\"max\":185.3842676909999,\"median\":185.35796406699995,\"mean\":185.35796406699995}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00067181292,
            "range": "± 0.004576025978099499",
            "unit": "s",
            "extra": "{\"times\":[0.9974360739200001,1.00390755192],\"min\":0.9974360739200001,\"max\":1.00390755192,\"median\":1.00067181292,\"mean\":1.00067181292}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.59103310746167,
            "range": "± 0.506623030342653",
            "unit": "s",
            "extra": "{\"times\":[13.23989016642,14.022661004420002,13.50011514042,13.614364961420002,12.971259872420001,13.02019379142,13.474689690420002,13.367706191420002,14.142488310420001,12.716140198420002,12.90828919842,13.865189516420001,13.940223963420001,13.808397707420001,14.14984702942,14.32879312042,12.959729070420002,13.12675477942,14.037841575420002,14.111188422420001,13.86139977542,12.857036654420002,14.07555554942,14.085038889420002],\"min\":12.716140198420002,\"max\":14.32879312042,\"median\":13.71138133442,\"mean\":13.59103310746167}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.743132527999813,
            "range": "± 0.020375758489828276",
            "unit": "s",
            "extra": "{\"times\":[3.7287246909998357,3.7575403649997896],\"min\":3.7287246909998357,\"max\":3.7575403649997896,\"median\":3.743132527999813,\"mean\":3.743132527999813}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.298571460499894,
            "range": "± 0.0022242531708680647",
            "unit": "s",
            "extra": "{\"times\":[3.3001442450000904,3.2969986759996974],\"min\":3.2969986759996974,\"max\":3.3001442450000904,\"median\":3.298571460499894,\"mean\":3.298571460499894}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4858565205000343,
            "range": "± 0.004928895596203686",
            "unit": "s",
            "extra": "{\"times\":[3.48934177599987,3.482371265000198],\"min\":3.482371265000198,\"max\":3.48934177599987,\"median\":3.4858565205000343,\"mean\":3.4858565205000343}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4850490875002,
            "range": "± 0.03142500693126416",
            "unit": "s",
            "extra": "{\"times\":[3.4628282520002687,3.507269923000131],\"min\":3.4628282520002687,\"max\":3.507269923000131,\"median\":3.4850490875002,\"mean\":3.4850490875002}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46692916374000004,
            "range": "± 0.0019414528845224585",
            "unit": "s",
            "extra": "{\"times\":[0.46555634924,0.46830197824],\"min\":0.46555634924,\"max\":0.46830197824,\"median\":0.46692916374000004,\"mean\":0.46692916374000004}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5090000132600001,
            "range": "± 0.001386962374132906",
            "unit": "s",
            "extra": "{\"times\":[0.5080192827600001,0.50998074376],\"min\":0.5080192827600001,\"max\":0.50998074376,\"median\":0.5090000132600001,\"mean\":0.5090000132600001}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.05431452000001,
            "range": "± 0.05668951856588583",
            "unit": "s",
            "extra": "{\"times\":[53.09440006300015,53.014228976999874],\"min\":53.014228976999874,\"max\":53.09440006300015,\"median\":53.05431452000001,\"mean\":53.05431452000001}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.506924173500156,
            "range": "± 0.011775836014278547",
            "unit": "s",
            "extra": "{\"times\":[3.498597400000319,3.515250946999993],\"min\":3.498597400000319,\"max\":3.515250946999993,\"median\":3.506924173500156,\"mean\":3.506924173500156}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.170625558999832,
            "range": "± 0.00607617281332261",
            "unit": "s",
            "extra": "{\"times\":[8.16632905599987,8.174922061999794],\"min\":8.16632905599987,\"max\":8.174922061999794,\"median\":8.170625558999832,\"mean\":8.170625558999832}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.14580330050015,
            "range": "± 0.06270044451507503",
            "unit": "s",
            "extra": "{\"times\":[52.19013921000017,52.10146739100013],\"min\":52.10146739100013,\"max\":52.19013921000017,\"median\":52.14580330050015,\"mean\":52.14580330050015}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.61195101946,
            "range": "± 0.00454505540819042",
            "unit": "s",
            "extra": "{\"times\":[0.6151648589600001,0.60873717996],\"min\":0.60873717996,\"max\":0.6151648589600001,\"median\":0.61195101946,\"mean\":0.61195101946}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.441459548386667,
            "range": "± 0.17954136516109562",
            "unit": "s",
            "extra": "{\"times\":[3.23936070892,3.29437877992,3.27228880392,3.37097484492,3.32792905292,3.3199215179199997,3.78965190692,3.2226478629199997,3.4384867839199997,3.53303017092,3.49546559692,3.48101434192,3.52994771892,3.80817144092,3.49862369392],\"min\":3.2226478629199997,\"max\":3.80817144092,\"median\":3.4384867839199997,\"mean\":3.441459548386667}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 181.3724476524999,
            "range": "± 0.41896766143735165",
            "unit": "s",
            "extra": "{\"times\":[181.6687025270001,181.07619277799967],\"min\":181.07619277799967,\"max\":181.6687025270001,\"median\":181.3724476524999,\"mean\":181.3724476524999}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9856145425003486,
            "range": "± 0.011063500885582566",
            "unit": "s",
            "extra": "{\"times\":[3.9934376190002077,3.97779146600049],\"min\":3.97779146600049,\"max\":3.9934376190002077,\"median\":3.9856145425003486,\"mean\":3.9856145425003486}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.917826017000014,
            "range": "± 0.02565506438725204",
            "unit": "s",
            "extra": "{\"times\":[27.89968514700001,27.935966887000017],\"min\":27.89968514700001,\"max\":27.935966887000017,\"median\":27.917826017000014,\"mean\":27.917826017000014}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.09961329750018,
            "range": "± 0.32164239482795914",
            "unit": "s",
            "extra": "{\"times\":[166.32704881600012,165.87217777900025],\"min\":165.87217777900025,\"max\":166.32704881600012,\"median\":166.09961329750018,\"mean\":166.09961329750018}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5575532737200001,
            "range": "± 0.0034848039441300652",
            "unit": "s",
            "extra": "{\"times\":[0.5600174022200001,0.5550891452200001],\"min\":0.5550891452200001,\"max\":0.5600174022200001,\"median\":0.5575532737200001,\"mean\":0.5575532737200001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.235357582944443,
            "range": "± 0.09805447980898702",
            "unit": "s",
            "extra": "{\"times\":[7.2350077715,7.2423020505,7.3695836615,7.2981615275000005,7.228349504500001,7.1063339805000005,7.1057172145,7.1676889225,7.3650736135],\"min\":7.1057172145,\"max\":7.3695836615,\"median\":7.2350077715,\"mean\":7.235357582944443}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 37.40852993799979,
            "range": "± 0.05692967182829349",
            "unit": "s",
            "extra": "{\"times\":[37.36827458099928,37.4487852950003],\"min\":37.36827458099928,\"max\":37.4487852950003,\"median\":37.40852993799979,\"mean\":37.40852993799979}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.189912317499984,
            "range": "± 0.01813893720282052",
            "unit": "s",
            "extra": "{\"times\":[3.2027384829996155,3.177086152000353],\"min\":3.177086152000353,\"max\":3.2027384829996155,\"median\":3.189912317499984,\"mean\":3.189912317499984}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.057065146999899,
            "range": "± 0.041437730169288096",
            "unit": "s",
            "extra": "{\"times\":[7.086366046999581,7.027764247000217],\"min\":7.027764247000217,\"max\":7.086366046999581,\"median\":7.057065146999899,\"mean\":7.057065146999899}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.305725819000045,
            "range": "± 0.004405850832133039",
            "unit": "s",
            "extra": "{\"times\":[35.30884122600034,35.302610411999744],\"min\":35.302610411999744,\"max\":35.30884122600034,\"median\":35.305725819000045,\"mean\":35.305725819000045}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.76063642608,
            "range": "± 0.00009860109088900766",
            "unit": "s",
            "extra": "{\"times\":[0.76070614758,0.76056670458],\"min\":0.76056670458,\"max\":0.76070614758,\"median\":0.76063642608,\"mean\":0.76063642608}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.55304591344,
            "range": "± 0.013299834268624114",
            "unit": "s",
            "extra": "{\"times\":[40.56245031644,40.54364151044],\"min\":40.54364151044,\"max\":40.56245031644,\"median\":40.55304591344,\"mean\":40.55304591344}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "fcef9c4606b3e188a713b848d6aab0e7da193510",
          "message": "edr-0.14.0 (#1525)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: Ana Perez Ghiglia <aghiglia@manas.tech>",
          "timestamp": "2026-07-07T16:37:46Z",
          "tree_id": "b577b80f2ee0593b54b199213c177233589479e9",
          "url": "https://github.com/NomicFoundation/edr/commit/fcef9c4606b3e188a713b848d6aab0e7da193510"
        },
        "date": 1783458647684,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.294483409999998,
            "range": "± 0.0038602189550774936",
            "unit": "s",
            "extra": "{\"times\":[9.297212996999999,9.291753822999999],\"min\":9.291753822999999,\"max\":9.297212996999999,\"median\":9.294483409999998,\"mean\":9.294483409999998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9901874015000014,
            "range": "± 0.020917084793303963",
            "unit": "s",
            "extra": "{\"times\":[3.975396789000002,4.004978014000001],\"min\":3.975396789000002,\"max\":4.004978014000001,\"median\":3.9901874015000014,\"mean\":3.9901874015000014}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.098626109500001,
            "range": "± 0.00007816146227222897",
            "unit": "s",
            "extra": "{\"times\":[4.098570841000001,4.098681378000001],\"min\":4.098570841000001,\"max\":4.098681378000001,\"median\":4.098626109500001,\"mean\":4.098626109500001}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.2439125575,
            "range": "± 0.0011159552149598673",
            "unit": "s",
            "extra": "{\"times\":[9.243123458000001,9.244701656999998],\"min\":9.243123458000001,\"max\":9.244701656999998,\"median\":9.2439125575,\"mean\":9.2439125575}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.52413275122,
            "range": "± 0.004013545161082622",
            "unit": "s",
            "extra": "{\"times\":[0.52129474622,0.52697075622],\"min\":0.52129474622,\"max\":0.52697075622,\"median\":0.52413275122,\"mean\":0.52413275122}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.57073881108,
            "range": "± 0.004525622699629835",
            "unit": "s",
            "extra": "{\"times\":[0.57393890958,0.56753871258],\"min\":0.56753871258,\"max\":0.57393890958,\"median\":0.57073881108,\"mean\":0.57073881108}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 239.008481602,
            "range": "± 0.05964842527635855",
            "unit": "s",
            "extra": "{\"times\":[239.050659408,238.96630379599998],\"min\":238.96630379599998,\"max\":239.050659408,\"median\":239.008481602,\"mean\":239.008481602}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.82953911300001,
            "range": "± 0.05915375741386991",
            "unit": "s",
            "extra": "{\"times\":[43.87136713600002,43.787711089999995],\"min\":43.787711089999995,\"max\":43.87136713600002,\"median\":43.82953911300001,\"mean\":43.82953911300001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.60709218449998,
            "range": "± 0.021250690701606068",
            "unit": "s",
            "extra": "{\"times\":[53.62211869199999,53.59206567699998],\"min\":53.59206567699998,\"max\":53.62211869199999,\"median\":53.60709218449998,\"mean\":53.60709218449998}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 239.01832687650005,
            "range": "± 0.140955826123967",
            "unit": "s",
            "extra": "{\"times\":[238.91865605600003,239.11799769700005],\"min\":238.91865605600003,\"max\":239.11799769700005,\"median\":239.01832687650005,\"mean\":239.01832687650005}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5828778411400001,
            "range": "± 0.001384274661257637",
            "unit": "s",
            "extra": "{\"times\":[0.5838566711400001,0.5818990111400001],\"min\":0.5818990111400001,\"max\":0.5838566711400001,\"median\":0.5828778411400001,\"mean\":0.5828778411400001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.7717618701533335,
            "range": "± 0.14380160352060825",
            "unit": "s",
            "extra": "{\"times\":[4.04480032522,3.69813100522,3.70336935922,3.75109813622,3.59434322222,3.75155984622,3.7516320952199997,3.88436036722,3.71697175122,3.7574718902199997,3.78350257622,4.02241267922,3.82292630122,3.47443806722,3.81941043022],\"min\":3.47443806722,\"max\":4.04480032522,\"median\":3.7516320952199997,\"mean\":3.7717618701533335}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 267.36764407599986,
            "range": "± 0.908624527574233",
            "unit": "s",
            "extra": "{\"times\":[268.010138641,266.7251495109997],\"min\":266.7251495109997,\"max\":268.010138641,\"median\":267.36764407599986,\"mean\":267.36764407599986}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.263718891000026,
            "range": "± 0.003048761597692537",
            "unit": "s",
            "extra": "{\"times\":[3.2658746909999756,3.2615630910000766],\"min\":3.2615630910000766,\"max\":3.2658746909999756,\"median\":3.263718891000026,\"mean\":3.263718891000026}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.777058381499955,
            "range": "± 0.02634899706194665",
            "unit": "s",
            "extra": "{\"times\":[13.795689935999922,13.758426826999989],\"min\":13.758426826999989,\"max\":13.795689935999922,\"median\":13.777058381499955,\"mean\":13.777058381499955}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.57411184499995,
            "range": "± 0.06227227933831386",
            "unit": "s",
            "extra": "{\"times\":[265.5300786939999,265.618144996],\"min\":265.5300786939999,\"max\":265.618144996,\"median\":265.57411184499995,\"mean\":265.57411184499995}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.65464499344,
            "range": "± 0.007453259027096849",
            "unit": "s",
            "extra": "{\"times\":[0.6599152434400001,0.64937474344],\"min\":0.64937474344,\"max\":0.6599152434400001,\"median\":0.65464499344,\"mean\":0.65464499344}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.53069107101,
            "range": "± 0.025200877863221484",
            "unit": "s",
            "extra": "{\"times\":[2.55590126476,2.53421235776,2.49577599476,2.53687466676],\"min\":2.49577599476,\"max\":2.55590126476,\"median\":2.5355435122600003,\"mean\":2.53069107101}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 189.33004162000003,
            "range": "± 2.0674694782969136",
            "unit": "s",
            "extra": "{\"times\":[190.791963308,187.86811993200007],\"min\":187.86811993200007,\"max\":190.791963308,\"median\":189.33004162000003,\"mean\":189.33004162000003}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.608048742499901,
            "range": "± 0.009344047710635555",
            "unit": "s",
            "extra": "{\"times\":[3.60144150299998,3.614655981999822],\"min\":3.60144150299998,\"max\":3.614655981999822,\"median\":3.608048742499901,\"mean\":3.608048742499901}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.15705442499974,
            "range": "± 0.16233649860837743",
            "unit": "s",
            "extra": "{\"times\":[33.04226518599968,33.27184366399981],\"min\":33.04226518599968,\"max\":33.27184366399981,\"median\":33.15705442499974,\"mean\":33.15705442499974}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.9817155500001,
            "range": "± 1.079029852775081",
            "unit": "s",
            "extra": "{\"times\":[185.2187262240001,186.74470487600007],\"min\":185.2187262240001,\"max\":186.74470487600007,\"median\":185.9817155500001,\"mean\":185.9817155500001}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 0.9929049241000001,
            "range": "± 0.010991723183530698",
            "unit": "s",
            "extra": "{\"times\":[0.9851326021000001,1.0006772461],\"min\":0.9851326021000001,\"max\":1.0006772461,\"median\":0.9929049241000001,\"mean\":0.9929049241000001}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.506883020443333,
            "range": "± 0.5873820705111619",
            "unit": "s",
            "extra": "{\"times\":[12.869790550860001,14.18433892386,13.64729049786,13.869248845860001,14.21504307086,13.448282799860001,14.256207444860001,13.99312170086,13.76980348786,12.71025920286,14.09655388486,14.16355328586,14.054981143860001,14.260586357860001,12.619680112860001,13.79608923886,12.90257783586,13.165742337860001,13.160112660860001,12.63540455186,13.05088533286,13.563612799860001,12.844444666860001,12.887581754860001],\"min\":12.619680112860001,\"max\":14.260586357860001,\"median\":13.60545164886,\"mean\":13.506883020443333}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.728575844500214,
            "range": "± 0.0004103107306073478",
            "unit": "s",
            "extra": "{\"times\":[3.7282857110002077,3.72886597800022],\"min\":3.7282857110002077,\"max\":3.72886597800022,\"median\":3.728575844500214,\"mean\":3.728575844500214}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.295102785500232,
            "range": "± 0.005066176135341981",
            "unit": "s",
            "extra": "{\"times\":[3.298685113000218,3.2915204580002464],\"min\":3.2915204580002464,\"max\":3.298685113000218,\"median\":3.295102785500232,\"mean\":3.295102785500232}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.6962891035003125,
            "range": "± 0.21041206994270797",
            "unit": "s",
            "extra": "{\"times\":[3.5475053020003253,3.845072905000299],\"min\":3.5475053020003253,\"max\":3.845072905000299,\"median\":3.6962891035003125,\"mean\":3.6962891035003125}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.682175779500045,
            "range": "± 0.21763104893700627",
            "unit": "s",
            "extra": "{\"times\":[3.836064170000143,3.528287388999946],\"min\":3.528287388999946,\"max\":3.836064170000143,\"median\":3.682175779500045,\"mean\":3.682175779500045}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.4662804729000001,
            "range": "± 0.0010949668714826289",
            "unit": "s",
            "extra": "{\"times\":[0.46550621440000006,0.46705473140000003],\"min\":0.46550621440000006,\"max\":0.46705473140000003,\"median\":0.4662804729000001,\"mean\":0.4662804729000001}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.5082748745000001,
            "range": "± 0.0010392737271828461",
            "unit": "s",
            "extra": "{\"times\":[0.5075399970000001,0.5090097520000001],\"min\":0.5075399970000001,\"max\":0.5090097520000001,\"median\":0.5082748745000001,\"mean\":0.5082748745000001}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.075664611999876,
            "range": "± 0.07193674470904209",
            "unit": "s",
            "extra": "{\"times\":[53.126531572000125,53.02479765199963],\"min\":53.02479765199963,\"max\":53.126531572000125,\"median\":53.075664611999876,\"mean\":53.075664611999876}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.491287752999924,
            "range": "± 0.02239396569428835",
            "unit": "s",
            "extra": "{\"times\":[3.507122678000014,3.475452827999834],\"min\":3.475452827999834,\"max\":3.507122678000014,\"median\":3.491287752999924,\"mean\":3.491287752999924}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.169300484499894,
            "range": "± 0.023612602713291526",
            "unit": "s",
            "extra": "{\"times\":[8.185997115999927,8.152603852999862],\"min\":8.152603852999862,\"max\":8.185997115999927,\"median\":8.169300484499894,\"mean\":8.169300484499894}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.4142553330001,
            "range": "± 0.19893937060522737",
            "unit": "s",
            "extra": "{\"times\":[52.554926711000036,52.273583955000156],\"min\":52.273583955000156,\"max\":52.554926711000036,\"median\":52.4142553330001,\"mean\":52.4142553330001}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.61726201856,
            "range": "± 0.004661799444871022",
            "unit": "s",
            "extra": "{\"times\":[0.62055840856,0.61396562856],\"min\":0.61396562856,\"max\":0.62055840856,\"median\":0.61726201856,\"mean\":0.61726201856}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.4334234953466662,
            "range": "± 0.14472148945110383",
            "unit": "s",
            "extra": "{\"times\":[3.33790511068,3.40011268768,3.4481297556799997,3.41191570368,3.3207399396799997,3.43211589668,3.3296526636799997,3.42622737468,3.33479825868,3.36471512468,3.33287198868,3.41511607768,3.50020019668,3.54844973668,3.89840191468],\"min\":3.3207399396799997,\"max\":3.89840191468,\"median\":3.41191570368,\"mean\":3.4334234953466662}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.69115596899974,
            "range": "± 0.11842219340557562",
            "unit": "s",
            "extra": "{\"times\":[180.7748931049998,180.60741883299966],\"min\":180.60741883299966,\"max\":180.7748931049998,\"median\":180.69115596899974,\"mean\":180.69115596899974}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 4.00838941900013,
            "range": "± 0.008520779548835792",
            "unit": "s",
            "extra": "{\"times\":[4.014414520000107,4.0023643180001525],\"min\":4.0023643180001525,\"max\":4.014414520000107,\"median\":4.00838941900013,\"mean\":4.00838941900013}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.842208021499683,
            "range": "± 0.08575625649981",
            "unit": "s",
            "extra": "{\"times\":[27.902846851999872,27.781569190999495],\"min\":27.781569190999495,\"max\":27.902846851999872,\"median\":27.842208021499683,\"mean\":27.842208021499683}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.2449612095,
            "range": "± 0.18156118696041068",
            "unit": "s",
            "extra": "{\"times\":[166.37334435599996,166.116578063],\"min\":166.116578063,\"max\":166.37334435599996,\"median\":166.2449612095,\"mean\":166.2449612095}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5562066641200001,
            "range": "± 0.0015359858353748367",
            "unit": "s",
            "extra": "{\"times\":[0.5572927701200001,0.55512055812],\"min\":0.55512055812,\"max\":0.5572927701200001,\"median\":0.5562066641200001,\"mean\":0.5562066641200001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.234933719777778,
            "range": "± 0.0951776657205582",
            "unit": "s",
            "extra": "{\"times\":[7.237188987,7.140200136,7.264402383,7.394565392,7.134347387,7.263752098,7.188341418,7.136750406,7.354855271],\"min\":7.134347387,\"max\":7.394565392,\"median\":7.237188987,\"mean\":7.234933719777778}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.30067122450005,
            "range": "± 0.7366640518227245",
            "unit": "s",
            "extra": "{\"times\":[37.77977107799985,38.82157137100026],\"min\":37.77977107799985,\"max\":38.82157137100026,\"median\":38.30067122450005,\"mean\":38.30067122450005}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.2106314660003408,
            "range": "± 0.027116133673553762",
            "unit": "s",
            "extra": "{\"times\":[3.19145746400021,3.2298054680004715],\"min\":3.19145746400021,\"max\":3.2298054680004715,\"median\":3.2106314660003408,\"mean\":3.2106314660003408}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.030972719999962,
            "range": "± 0.012220401826174232",
            "unit": "s",
            "extra": "{\"times\":[7.039613849000074,7.022331590999849],\"min\":7.022331590999849,\"max\":7.039613849000074,\"median\":7.030972719999962,\"mean\":7.030972719999962}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.235560184000065,
            "range": "± 0.17279151784536612",
            "unit": "s",
            "extra": "{\"times\":[35.113378130000086,35.357742238000036],\"min\":35.113378130000086,\"max\":35.357742238000036,\"median\":35.235560184000065,\"mean\":35.235560184000065}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7500342794000001,
            "range": "± 0.006579632841581476",
            "unit": "s",
            "extra": "{\"times\":[0.7453817764000001,0.7546867824000001],\"min\":0.7453817764000001,\"max\":0.7546867824000001,\"median\":0.7500342794000001,\"mean\":0.7500342794000001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.50957124514,
            "range": "± 0.09895506854365432",
            "unit": "s",
            "extra": "{\"times\":[40.439599445140004,40.57954304514],\"min\":40.439599445140004,\"max\":40.57954304514,\"median\":40.50957124514,\"mean\":40.50957124514}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37712236+popescuoctavian@users.noreply.github.com",
            "name": "Octavian Popescu",
            "username": "popescuoctavian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d35fa0eb3ce7abd80a062dcc3c30c37f718d3ef2",
          "message": "fix: JSON-RPC provider call traces omitting event logs (#1547)",
          "timestamp": "2026-07-07T16:40:54Z",
          "tree_id": "0dd06ca4748b77541258f367da8172e28cea871c",
          "url": "https://github.com/NomicFoundation/edr/commit/d35fa0eb3ce7abd80a062dcc3c30c37f718d3ef2"
        },
        "date": 1783466187988,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.263810080499999,
            "range": "± 0.017460547442754007",
            "unit": "s",
            "extra": "{\"times\":[9.276156552,9.251463608999998],\"min\":9.251463608999998,\"max\":9.276156552,\"median\":9.263810080499999,\"mean\":9.263810080499999}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.9721172125000033,
            "range": "± 0.007937279982778697",
            "unit": "s",
            "extra": "{\"times\":[3.966504708000004,3.977729717000002],\"min\":3.966504708000004,\"max\":3.977729717000002,\"median\":3.9721172125000033,\"mean\":3.9721172125000033}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.092926146000002,
            "range": "± 0.010210373018751617",
            "unit": "s",
            "extra": "{\"times\":[4.100145970000005,4.085706321999998],\"min\":4.085706321999998,\"max\":4.100145970000005,\"median\":4.092926146000002,\"mean\":4.092926146000002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.232503302500005,
            "range": "± 0.022074764258111314",
            "unit": "s",
            "extra": "{\"times\":[9.216894087,9.24811251800001],\"min\":9.216894087,\"max\":9.24811251800001,\"median\":9.232503302500005,\"mean\":9.232503302500005}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5262516699399999,
            "range": "± 0.0006184355908257959",
            "unit": "s",
            "extra": "{\"times\":[0.52668896994,0.52581436994],\"min\":0.52581436994,\"max\":0.52668896994,\"median\":0.5262516699399999,\"mean\":0.5262516699399999}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5684585468000001,
            "range": "± 0.0008489750289095522",
            "unit": "s",
            "extra": "{\"times\":[0.5690588628000001,0.5678582308000001],\"min\":0.5678582308000001,\"max\":0.5690588628000001,\"median\":0.5684585468000001,\"mean\":0.5684585468000001}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 239.1095657825,
            "range": "± 0.06684453855851823",
            "unit": "s",
            "extra": "{\"times\":[239.06229955599997,239.156832009],\"min\":239.06229955599997,\"max\":239.156832009,\"median\":239.1095657825,\"mean\":239.1095657825}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.98286636350001,
            "range": "± 0.15901355706323042",
            "unit": "s",
            "extra": "{\"times\":[44.095305928000016,43.87042679900001],\"min\":43.87042679900001,\"max\":44.095305928000016,\"median\":43.98286636350001,\"mean\":43.98286636350001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.35498951000001,
            "range": "± 0.009636282922610508",
            "unit": "s",
            "extra": "{\"times\":[53.348175629,53.361803391000024],\"min\":53.348175629,\"max\":53.361803391000024,\"median\":53.35498951000001,\"mean\":53.35498951000001}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.29510770550002,
            "range": "± 0.13661641928808815",
            "unit": "s",
            "extra": "{\"times\":[238.19850530899998,238.39171010200005],\"min\":238.19850530899998,\"max\":238.39171010200005,\"median\":238.29510770550002,\"mean\":238.29510770550002}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.57954649448,
            "range": "± 0.0027800843554368023",
            "unit": "s",
            "extra": "{\"times\":[0.57758067798,0.58151231098],\"min\":0.57758067798,\"max\":0.58151231098,\"median\":0.57954649448,\"mean\":0.57954649448}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.7897540904066664,
            "range": "± 0.11883638255890273",
            "unit": "s",
            "extra": "{\"times\":[3.93585244034,3.6989040183400004,3.90529173034,3.70533277034,3.6613892793400002,3.9428335003400004,3.5194173603400003,3.82880837834,3.80744342834,3.7424185153400003,3.72121039734,3.91017193034,3.7779991063400002,3.7935996343400005,3.89563886634],\"min\":3.5194173603400003,\"max\":3.9428335003400004,\"median\":3.7935996343400005,\"mean\":3.7897540904066664}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.8977369350001,
            "range": "± 0.3826208929096841",
            "unit": "s",
            "extra": "{\"times\":[266.62718310700006,267.16829076300024],\"min\":266.62718310700006,\"max\":267.16829076300024,\"median\":266.8977369350001,\"mean\":266.8977369350001}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2726379284999565,
            "range": "± 0.016793682108679923",
            "unit": "s",
            "extra": "{\"times\":[3.2845128550000955,3.260763001999818],\"min\":3.260763001999818,\"max\":3.2845128550000955,\"median\":3.2726379284999565,\"mean\":3.2726379284999565}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.886193076000083,
            "range": "± 0.1547134278877152",
            "unit": "s",
            "extra": "{\"times\":[13.995591990000102,13.776794162000064],\"min\":13.776794162000064,\"max\":13.995591990000102,\"median\":13.886193076000083,\"mean\":13.886193076000083}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 266.53265686850006,
            "range": "± 1.3341815643700063",
            "unit": "s",
            "extra": "{\"times\":[265.58924803699995,267.47606570000016],\"min\":265.58924803699995,\"max\":267.47606570000016,\"median\":266.53265686850006,\"mean\":266.53265686850006}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6634131695000001,
            "range": "± 0.01085423192678333",
            "unit": "s",
            "extra": "{\"times\":[0.6710882705000001,0.6557380685],\"min\":0.6557380685,\"max\":0.6710882705000001,\"median\":0.6634131695000001,\"mean\":0.6634131695000001}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.5675508913800003,
            "range": "± 0.048112363698317055",
            "unit": "s",
            "extra": "{\"times\":[2.62386169138,2.5366042863800002,2.5901825933800002,2.5195549943800004],\"min\":2.5195549943800004,\"max\":2.62386169138,\"median\":2.5633934398800005,\"mean\":2.5675508913800003}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.57050081799994,
            "range": "± 0.87764362542055",
            "unit": "s",
            "extra": "{\"times\":[187.94991305899993,189.19108857699996],\"min\":187.94991305899993,\"max\":189.19108857699996,\"median\":188.57050081799994,\"mean\":188.57050081799994}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.5984085054998287,
            "range": "± 0.01637603373077893",
            "unit": "s",
            "extra": "{\"times\":[3.609988109999802,3.5868289009998553],\"min\":3.5868289009998553,\"max\":3.609988109999802,\"median\":3.5984085054998287,\"mean\":3.5984085054998287}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.01522453949997,
            "range": "± 0.11259597081847762",
            "unit": "s",
            "extra": "{\"times\":[32.93560716499994,33.09484191399999],\"min\":32.93560716499994,\"max\":33.09484191399999,\"median\":33.01522453949997,\"mean\":33.01522453949997}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.96479523449997,
            "range": "± 0.7374422299060012",
            "unit": "s",
            "extra": "{\"times\":[185.4433448330001,186.48624563599984],\"min\":185.4433448330001,\"max\":186.48624563599984,\"median\":185.96479523449997,\"mean\":185.96479523449997}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 0.9857061123799999,
            "range": "± 0.002059683966763957",
            "unit": "s",
            "extra": "{\"times\":[0.98716252888,0.98424969588],\"min\":0.98424969588,\"max\":0.98716252888,\"median\":0.9857061123799999,\"mean\":0.9857061123799999}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.871632612108334,
            "range": "± 0.6103646953251285",
            "unit": "s",
            "extra": "{\"times\":[13.4953144749,14.4228767119,12.6616769519,14.113974907900001,13.273104550900001,14.4474745009,14.0921259899,12.7732186289,13.3175224109,14.1873961219,14.1509490759,14.282246779900001,14.4365057919,14.8676144339,14.110155819900001,13.9860467039,14.353210799900001,14.6020594039,14.2590144249,12.9120709539,13.6599064129,13.031364700900001,13.745962928900001,13.7373892099],\"min\":12.6616769519,\"max\":14.8676144339,\"median\":14.1011409049,\"mean\":13.871632612108334}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.722488327999832,
            "range": "± 0.002728703855355269",
            "unit": "s",
            "extra": "{\"times\":[3.724417812999804,3.7205588429998606],\"min\":3.7205588429998606,\"max\":3.724417812999804,\"median\":3.722488327999832,\"mean\":3.722488327999832}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.308214365000138,
            "range": "± 0.021558104667258434",
            "unit": "s",
            "extra": "{\"times\":[3.2929704830003903,3.323458246999886],\"min\":3.2929704830003903,\"max\":3.323458246999886,\"median\":3.308214365000138,\"mean\":3.308214365000138}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.5115405749999917,
            "range": "± 0.02531108097960681",
            "unit": "s",
            "extra": "{\"times\":[3.5294382119998335,3.49364293800015],\"min\":3.49364293800015,\"max\":3.5294382119998335,\"median\":3.5115405749999917,\"mean\":3.5115405749999917}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.6586682954998686,
            "range": "± 0.24399092342258208",
            "unit": "s",
            "extra": "{\"times\":[3.486140658999793,3.831195931999944],\"min\":3.486140658999793,\"max\":3.831195931999944,\"median\":3.6586682954998686,\"mean\":3.6586682954998686}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46686718380000003,
            "range": "± 0.0017251602338659686",
            "unit": "s",
            "extra": "{\"times\":[0.46564731130000003,0.4680870563],\"min\":0.46564731130000003,\"max\":0.4680870563,\"median\":0.46686718380000003,\"mean\":0.46686718380000003}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50786949794,
            "range": "± 0.001997998799600335",
            "unit": "s",
            "extra": "{\"times\":[0.50928229644,0.50645669944],\"min\":0.50645669944,\"max\":0.50928229644,\"median\":0.50786949794,\"mean\":0.50786949794}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.13256294099986,
            "range": "± 0.037568043054616904",
            "unit": "s",
            "extra": "{\"times\":[53.15912755899969,53.10599832300004],\"min\":53.10599832300004,\"max\":53.15912755899969,\"median\":53.13256294099986,\"mean\":53.13256294099986}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.48737459250004,
            "range": "± 0.0037403693055331547",
            "unit": "s",
            "extra": "{\"times\":[3.484729751999956,3.490019433000125],\"min\":3.484729751999956,\"max\":3.490019433000125,\"median\":3.48737459250004,\"mean\":3.48737459250004}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.14198912900011,
            "range": "± 0.01832731398544006",
            "unit": "s",
            "extra": "{\"times\":[8.15494849700015,8.129029761000071],\"min\":8.129029761000071,\"max\":8.15494849700015,\"median\":8.14198912900011,\"mean\":8.14198912900011}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.33004009100003,
            "range": "± 0.35158378283784586",
            "unit": "s",
            "extra": "{\"times\":[52.57864736799989,52.08143281400017],\"min\":52.08143281400017,\"max\":52.57864736799989,\"median\":52.33004009100003,\"mean\":52.33004009100003}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6243019041,
            "range": "± 0.006613090306040073",
            "unit": "s",
            "extra": "{\"times\":[0.6289780651,0.6196257431000001],\"min\":0.6196257431000001,\"max\":0.6289780651,\"median\":0.6243019041,\"mean\":0.6243019041}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.6034365843533336,
            "range": "± 0.6284518954718725",
            "unit": "s",
            "extra": "{\"times\":[3.40455852402,3.42690197402,3.45506203202,5.866987856020001,3.43084963502,3.46834634602,3.37986168502,3.53990071502,3.53151351002,3.36801811102,3.37981534702,3.45298852302,3.46129206402,3.38899573202,3.49645671102],\"min\":3.36801811102,\"max\":5.866987856020001,\"median\":3.45298852302,\"mean\":3.6034365843533336}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.83488433549996,
            "range": "± 0.28136293384995403",
            "unit": "s",
            "extra": "{\"times\":[180.6359306970001,181.0338379739998],\"min\":180.6359306970001,\"max\":181.0338379739998,\"median\":180.83488433549996,\"mean\":180.83488433549996}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9851035989997907,
            "range": "± 0.002342897909979175",
            "unit": "s",
            "extra": "{\"times\":[3.983446920000017,3.986760277999565],\"min\":3.983446920000017,\"max\":3.986760277999565,\"median\":3.9851035989997907,\"mean\":3.9851035989997907}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.967477681499908,
            "range": "± 0.03508063161031355",
            "unit": "s",
            "extra": "{\"times\":[27.942671928999946,27.992283433999866],\"min\":27.942671928999946,\"max\":27.992283433999866,\"median\":27.967477681499908,\"mean\":27.967477681499908}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 165.85186354499984,
            "range": "± 0.21668285480566501",
            "unit": "s",
            "extra": "{\"times\":[166.0050814609998,165.6986456289999],\"min\":165.6986456289999,\"max\":166.0050814609998,\"median\":165.85186354499984,\"mean\":165.85186354499984}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5561086238,
            "range": "± 0.002670868177548636",
            "unit": "s",
            "extra": "{\"times\":[0.5542200348,0.5579972128],\"min\":0.5542200348,\"max\":0.5579972128,\"median\":0.5561086238,\"mean\":0.5561086238}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.3763094277755545,
            "range": "± 0.11637085664422532",
            "unit": "s",
            "extra": "{\"times\":[7.46429280022,7.24221740722,7.24514144322,7.46882800022,7.53637990922,7.50224513822,7.31848840422,7.27510316822,7.33408857922],\"min\":7.24221740722,\"max\":7.53637990922,\"median\":7.33408857922,\"mean\":7.3763094277755545}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.21547445650026,
            "range": "± 1.117360905765661",
            "unit": "s",
            "extra": "{\"times\":[37.42538098300062,39.005567929999906],\"min\":37.42538098300062,\"max\":39.005567929999906,\"median\":38.21547445650026,\"mean\":38.21547445650026}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.194886801500339,
            "range": "± 0.014005031154369404",
            "unit": "s",
            "extra": "{\"times\":[3.2047898540003223,3.1849837490003554],\"min\":3.1849837490003554,\"max\":3.2047898540003223,\"median\":3.194886801500339,\"mean\":3.194886801500339}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.044882379000075,
            "range": "± 0.015336321596379817",
            "unit": "s",
            "extra": "{\"times\":[7.034037962000817,7.055726795999333],\"min\":7.034037962000817,\"max\":7.055726795999333,\"median\":7.044882379000075,\"mean\":7.044882379000075}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.156059877500404,
            "range": "± 0.13071414100232567",
            "unit": "s",
            "extra": "{\"times\":[35.24848873300012,35.063631022000685],\"min\":35.063631022000685,\"max\":35.24848873300012,\"median\":35.156059877500404,\"mean\":35.156059877500404}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7486503258,
            "range": "± 0.007873156004328067",
            "unit": "s",
            "extra": "{\"times\":[0.7542174878,0.7430831638000001],\"min\":0.7430831638000001,\"max\":0.7542174878,\"median\":0.7486503258,\"mean\":0.7486503258}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.543103179,
            "range": "± 0.03182320280147669",
            "unit": "s",
            "extra": "{\"times\":[40.520600776500004,40.5656055815],\"min\":40.520600776500004,\"max\":40.5656055815,\"median\":40.543103179,\"mean\":40.543103179}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b68e9664ae79a5a59f56abf0d83fa323b052ed98",
          "message": "edr-0.14.1 (#1548)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: Octavian Popescu <popescu.octavian09@gmail.com>",
          "timestamp": "2026-07-08T12:14:36Z",
          "tree_id": "6443551f3d793a8f046135ee004aa0cba65039cb",
          "url": "https://github.com/NomicFoundation/edr/commit/b68e9664ae79a5a59f56abf0d83fa323b052ed98"
        },
        "date": 1783519661121,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.257483451500002,
            "range": "± 0.012418482941523654",
            "unit": "s",
            "extra": "{\"times\":[9.248702258000002,9.266264645000003],\"min\":9.248702258000002,\"max\":9.266264645000003,\"median\":9.257483451500002,\"mean\":9.257483451500002}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 3.975186205,
            "range": "± 0.0013777084676846751",
            "unit": "s",
            "extra": "{\"times\":[3.974212018000002,3.976160391999998],\"min\":3.974212018000002,\"max\":3.976160391999998,\"median\":3.975186205,\"mean\":3.975186205}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.094880752000001,
            "range": "± 0.03356075578879409",
            "unit": "s",
            "extra": "{\"times\":[4.118611790000003,4.071149713999999],\"min\":4.071149713999999,\"max\":4.118611790000003,\"median\":4.094880752000001,\"mean\":4.094880752000001}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.234117921999998,
            "range": "± 0.008809989050789405",
            "unit": "s",
            "extra": "{\"times\":[9.227888319000005,9.24034752499999],\"min\":9.227888319000005,\"max\":9.24034752499999,\"median\":9.234117921999998,\"mean\":9.234117921999998}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.52226385206,
            "range": "± 0.004020488242567148",
            "unit": "s",
            "extra": "{\"times\":[0.52510676656,0.51942093756],\"min\":0.51942093756,\"max\":0.52510676656,\"median\":0.52226385206,\"mean\":0.52226385206}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.57160728806,
            "range": "± 0.00015017675240192982",
            "unit": "s",
            "extra": "{\"times\":[0.57171347906,0.5715010970600001],\"min\":0.5715010970600001,\"max\":0.57171347906,\"median\":0.57160728806,\"mean\":0.57160728806}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.8813363145,
            "range": "± 0.46659996096541934",
            "unit": "s",
            "extra": "{\"times\":[238.551400318,239.21127231100004],\"min\":238.551400318,\"max\":239.21127231100004,\"median\":238.8813363145,\"mean\":238.8813363145}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 43.922765773500025,
            "range": "± 0.09327045116060176",
            "unit": "s",
            "extra": "{\"times\":[43.988717942000015,43.856813605000035],\"min\":43.856813605000035,\"max\":43.988717942000015,\"median\":43.922765773500025,\"mean\":43.922765773500025}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.48578738200007,
            "range": "± 0.125922914853905",
            "unit": "s",
            "extra": "{\"times\":[53.57482832900004,53.3967464350001],\"min\":53.3967464350001,\"max\":53.57482832900004,\"median\":53.48578738200007,\"mean\":53.48578738200007}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.30795050199998,
            "range": "± 0.07469738150637101",
            "unit": "s",
            "extra": "{\"times\":[238.25513147699996,238.36076952700003],\"min\":238.25513147699996,\"max\":238.36076952700003,\"median\":238.30795050199998,\"mean\":238.30795050199998}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.58145954278,
            "range": "± 0.001617553431011799",
            "unit": "s",
            "extra": "{\"times\":[0.5826033257800001,0.58031575978],\"min\":0.58031575978,\"max\":0.5826033257800001,\"median\":0.58145954278,\"mean\":0.58145954278}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.703087526533333,
            "range": "± 0.17321776931952526",
            "unit": "s",
            "extra": "{\"times\":[3.5249916164,3.5232799804000003,3.6726968994,3.6142985954,3.6456435264000002,3.6097050124,4.1685809944,3.6238100534,3.6003353684,4.008611560399999,3.7767469824,3.7282530594,3.6573374514,3.7015420034,3.6904797944000003],\"min\":3.5232799804000003,\"max\":4.1685809944,\"median\":3.6573374514,\"mean\":3.703087526533333}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.85276343149997,
            "range": "± 0.04118726375548125",
            "unit": "s",
            "extra": "{\"times\":[266.88188722499996,266.8236396379999],\"min\":266.8236396379999,\"max\":266.88188722499996,\"median\":266.85276343149997,\"mean\":266.85276343149997}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2594545580002015,
            "range": "± 0.010326717540299223",
            "unit": "s",
            "extra": "{\"times\":[3.252152466000058,3.266756650000345],\"min\":3.252152466000058,\"max\":3.266756650000345,\"median\":3.2594545580002015,\"mean\":3.2594545580002015}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.799745871999882,
            "range": "± 0.012737354865699234",
            "unit": "s",
            "extra": "{\"times\":[13.790739201999967,13.808752541999798],\"min\":13.790739201999967,\"max\":13.808752541999798,\"median\":13.799745871999882,\"mean\":13.799745871999882}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 268.2965450625003,
            "range": "± 3.8290824250851503",
            "unit": "s",
            "extra": "{\"times\":[271.0041152110002,265.58897491400035],\"min\":265.58897491400035,\"max\":271.0041152110002,\"median\":268.2965450625003,\"mean\":268.2965450625003}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.65727113376,
            "range": "± 0.0028173623178342003",
            "unit": "s",
            "extra": "{\"times\":[0.65527895776,0.65926330976],\"min\":0.65527895776,\"max\":0.65926330976,\"median\":0.65727113376,\"mean\":0.65727113376}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.52967315397,
            "range": "± 0.025361224321634658",
            "unit": "s",
            "extra": "{\"times\":[2.50880318872,2.52049631072,2.5665871937199998,2.52280592272],\"min\":2.50880318872,\"max\":2.5665871937199998,\"median\":2.52165111672,\"mean\":2.52967315397}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.33479454949986,
            "range": "± 0.8934792527938017",
            "unit": "s",
            "extra": "{\"times\":[187.70300931099987,188.96657978799985],\"min\":187.70300931099987,\"max\":188.96657978799985,\"median\":188.33479454949986,\"mean\":188.33479454949986}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.619352181999944,
            "range": "± 0.04257030310104316",
            "unit": "s",
            "extra": "{\"times\":[3.6494539319998585,3.58925043200003],\"min\":3.58925043200003,\"max\":3.6494539319998585,\"median\":3.619352181999944,\"mean\":3.619352181999944}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.0258751099999,
            "range": "± 0.1015226185206227",
            "unit": "s",
            "extra": "{\"times\":[33.09766244199965,32.95408777800016],\"min\":32.95408777800016,\"max\":33.09766244199965,\"median\":33.0258751099999,\"mean\":33.0258751099999}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.03056480799964,
            "range": "± 0.2735815666699886",
            "unit": "s",
            "extra": "{\"times\":[184.83711342699965,185.22401618899963],\"min\":184.83711342699965,\"max\":185.22401618899963,\"median\":185.03056480799964,\"mean\":185.03056480799964}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 0.99999022542,
            "range": "± 0.005844013393657136",
            "unit": "s",
            "extra": "{\"times\":[1.00412256692,0.9958578839200001],\"min\":0.9958578839200001,\"max\":1.00412256692,\"median\":0.99999022542,\"mean\":0.99999022542}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.784978532831666,
            "range": "± 0.5036605905722585",
            "unit": "s",
            "extra": "{\"times\":[14.03748099604,14.26688233504,13.066958736039998,14.01580269504,13.14112191904,12.885594082039999,13.90870457104,13.605923815039999,13.58831350304,14.123492024039999,14.00593880804,14.442703223039999,12.87771796204,14.39278589404,12.814379946039999,13.560504525039999,13.45014799404,14.250349093039999,13.89784932504,14.079267628039998,13.99098750004,14.171972108039999,14.22630671704,14.038299388039999],\"min\":12.814379946039999,\"max\":14.442703223039999,\"median\":13.99846315404,\"mean\":13.784978532831666}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7280655935001557,
            "range": "± 0.0019787485244232806",
            "unit": "s",
            "extra": "{\"times\":[3.7266664070002733,3.7294647800000384],\"min\":3.7266664070002733,\"max\":3.7294647800000384,\"median\":3.7280655935001557,\"mean\":3.7280655935001557}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3041882569999435,
            "range": "± 0.013720831504087374",
            "unit": "s",
            "extra": "{\"times\":[3.2944861639998853,3.3138903500000016],\"min\":3.2944861639998853,\"max\":3.3138903500000016,\"median\":3.3041882569999435,\"mean\":3.3041882569999435}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.4943532455002426,
            "range": "± 0.018837965996861442",
            "unit": "s",
            "extra": "{\"times\":[3.4810327920001,3.5076736990003847],\"min\":3.4810327920001,\"max\":3.5076736990003847,\"median\":3.4943532455002426,\"mean\":3.4943532455002426}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.4771511685000736,
            "range": "± 0.004926345769162078",
            "unit": "s",
            "extra": "{\"times\":[3.4806346209999175,3.473667716000229],\"min\":3.473667716000229,\"max\":3.4806346209999175,\"median\":3.4771511685000736,\"mean\":3.4771511685000736}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46340500044000005,
            "range": "± 0.0031252578235662688",
            "unit": "s",
            "extra": "{\"times\":[0.46561489144000007,0.46119510944000003],\"min\":0.46119510944000003,\"max\":0.46561489144000007,\"median\":0.46340500044000005,\"mean\":0.46340500044000005}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.51132596624,
            "range": "± 0.00024245560156039875",
            "unit": "s",
            "extra": "{\"times\":[0.5111545242400001,0.5114974082400001],\"min\":0.5111545242400001,\"max\":0.5114974082400001,\"median\":0.51132596624,\"mean\":0.51132596624}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 53.03455011800001,
            "range": "± 0.053319483001823896",
            "unit": "s",
            "extra": "{\"times\":[52.99684755000006,53.07225268599996],\"min\":52.99684755000006,\"max\":53.07225268599996,\"median\":53.03455011800001,\"mean\":53.03455011800001}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.506223202000139,
            "range": "± 0.029930022682484465",
            "unit": "s",
            "extra": "{\"times\":[3.527386923999991,3.485059480000287],\"min\":3.485059480000287,\"max\":3.527386923999991,\"median\":3.506223202000139,\"mean\":3.506223202000139}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.169469178000233,
            "range": "± 0.03265901079495415",
            "unit": "s",
            "extra": "{\"times\":[8.19256258600019,8.146375770000276],\"min\":8.146375770000276,\"max\":8.19256258600019,\"median\":8.169469178000233,\"mean\":8.169469178000233}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.36993234250019,
            "range": "± 0.3406369305297014",
            "unit": "s",
            "extra": "{\"times\":[52.12906565900007,52.610799026000315],\"min\":52.12906565900007,\"max\":52.610799026000315,\"median\":52.36993234250019,\"mean\":52.36993234250019}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6184883270000001,
            "range": "± 0.0018329374494543734",
            "unit": "s",
            "extra": "{\"times\":[0.6197844095,0.6171922445000001],\"min\":0.6171922445000001,\"max\":0.6197844095,\"median\":0.6184883270000001,\"mean\":0.6184883270000001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.4533663113800004,
            "range": "± 0.10716989083338953",
            "unit": "s",
            "extra": "{\"times\":[3.64312533458,3.37384048258,3.29077410658,3.50805852358,3.51448874358,3.40712514858,3.56736953758,3.4013776555799997,3.54347483758,3.58331244658,3.39097582458,3.3274870375799996,3.3255068945799997,3.40598711158,3.5175909855799996],\"min\":3.29077410658,\"max\":3.64312533458,\"median\":3.40712514858,\"mean\":3.4533663113800004}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 181.10114109500034,
            "range": "± 0.27252103377741477",
            "unit": "s",
            "extra": "{\"times\":[181.2938425660003,180.90843962400035],\"min\":180.90843962400035,\"max\":181.2938425660003,\"median\":181.10114109500034,\"mean\":181.10114109500034}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9927575415000316,
            "range": "± 0.010336982609073595",
            "unit": "s",
            "extra": "{\"times\":[3.9854481910001485,4.000066891999915],\"min\":3.9854481910001485,\"max\":4.000066891999915,\"median\":3.9927575415000316,\"mean\":3.9927575415000316}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.926891992500053,
            "range": "± 0.0060257285226483935",
            "unit": "s",
            "extra": "{\"times\":[27.931152826000005,27.922631159000098],\"min\":27.922631159000098,\"max\":27.931152826000005,\"median\":27.926891992500053,\"mean\":27.926891992500053}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.01419297900003,
            "range": "± 0.25720373618119285",
            "unit": "s",
            "extra": "{\"times\":[165.8323224729998,166.19606348500028],\"min\":165.8323224729998,\"max\":166.19606348500028,\"median\":166.01419297900003,\"mean\":166.01419297900003}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.5521581082400001,
            "range": "± 0.004905970487482579",
            "unit": "s",
            "extra": "{\"times\":[0.5556271532400001,0.5486890632400001],\"min\":0.5486890632400001,\"max\":0.5556271532400001,\"median\":0.5521581082400001,\"mean\":0.5521581082400001}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.401383333537778,
            "range": "± 0.22895799568048142",
            "unit": "s",
            "extra": "{\"times\":[7.64323889476,7.22333550976,7.45589171476,7.85680156276,7.25724749976,7.43483745276,7.19636517976,7.37625157576,7.16848061176],\"min\":7.16848061176,\"max\":7.85680156276,\"median\":7.37625157576,\"mean\":7.401383333537778}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.31674612050038,
            "range": "± 1.1225862212320614",
            "unit": "s",
            "extra": "{\"times\":[37.52295779100061,39.11053445000015],\"min\":37.52295779100061,\"max\":39.11053445000015,\"median\":38.31674612050038,\"mean\":38.31674612050038}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.190660160500091,
            "range": "± 0.006758318018769665",
            "unit": "s",
            "extra": "{\"times\":[3.195439013000578,3.1858813079996033],\"min\":3.1858813079996033,\"max\":3.195439013000578,\"median\":3.190660160500091,\"mean\":3.190660160500091}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.27310754050035,
            "range": "± 0.33849081619318394",
            "unit": "s",
            "extra": "{\"times\":[7.51245669199992,7.033758389000781],\"min\":7.033758389000781,\"max\":7.51245669199992,\"median\":7.27310754050035,\"mean\":7.27310754050035}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.21356292900024,
            "range": "± 0.04749983297241145",
            "unit": "s",
            "extra": "{\"times\":[35.17997547500022,35.24715038300026],\"min\":35.17997547500022,\"max\":35.24715038300026,\"median\":35.21356292900024,\"mean\":35.21356292900024}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.75325007806,
            "range": "± 0.016329952288993324",
            "unit": "s",
            "extra": "{\"times\":[0.76479709806,0.74170305806],\"min\":0.74170305806,\"max\":0.76479709806,\"median\":0.75325007806,\"mean\":0.75325007806}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.61365536006,
            "range": "± 0.0521008410330584",
            "unit": "s",
            "extra": "{\"times\":[40.57681450206,40.65049621806],\"min\":40.57681450206,\"max\":40.65049621806,\"median\":40.61365536006,\"mean\":40.61365536006}"
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
          "distinct": false,
          "id": "454f3ee2a2373dbfd17b347c1cec5e8160c308d8",
          "message": "docs(edr_napi): note SubscriptionEvent.result any→unknown in 0.14.0 (#1550)",
          "timestamp": "2026-07-08T16:14:11Z",
          "tree_id": "5b4c4b59e6793101fe86504439aaa7214a37bba7",
          "url": "https://github.com/NomicFoundation/edr/commit/454f3ee2a2373dbfd17b347c1cec5e8160c308d8"
        },
        "date": 1783533096201,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "1inch-aqua / cold compile",
            "value": 9.280538685499998,
            "range": "± 0.011436023122887808",
            "unit": "s",
            "extra": "{\"times\":[9.288625174999998,9.272452195999998],\"min\":9.272452195999998,\"max\":9.288625174999998,\"median\":9.280538685499998,\"mean\":9.280538685499998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with min deps: test/AquaLifecycle.t.sol",
            "value": 4.004698159499997,
            "range": "± 0.0057099077641777195",
            "unit": "s",
            "extra": "{\"times\":[4.000660644999996,4.008735673999996],\"min\":4.000660644999996,\"max\":4.008735673999996,\"median\":4.004698159499997,\"mean\":4.004698159499997}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity test with max deps: test/AquaStorageTest.t.sol",
            "value": 4.096476470999998,
            "range": "± 0.009541232214862062",
            "unit": "s",
            "extra": "{\"times\":[4.103223141000003,4.089729800999994],\"min\":4.089729800999994,\"max\":4.103223141000003,\"median\":4.096476470999998,\"mean\":4.096476470999998}"
          },
          {
            "name": "1inch-aqua / edit & compile Solidity contract: src/Aqua.sol",
            "value": 9.268407637500005,
            "range": "± 0.009692409523362396",
            "unit": "s",
            "extra": "{\"times\":[9.261554068999997,9.27526120600001],\"min\":9.261554068999997,\"max\":9.27526120600001,\"median\":9.268407637500005,\"mean\":9.268407637500005}"
          },
          {
            "name": "1inch-aqua / warm compile",
            "value": 0.5245870125600001,
            "range": "± 0.0009476751147479524",
            "unit": "s",
            "extra": "{\"times\":[0.52391690506,0.52525712006],\"min\":0.52391690506,\"max\":0.52525712006,\"median\":0.5245870125600001,\"mean\":0.5245870125600001}"
          },
          {
            "name": "1inch-aqua / test solidity",
            "value": 0.5702322219,
            "range": "± 0.001743822196035034",
            "unit": "s",
            "extra": "{\"times\":[0.5689991534000001,0.5714652904],\"min\":0.5689991534000001,\"max\":0.5714652904,\"median\":0.5702322219,\"mean\":0.5702322219}"
          },
          {
            "name": "1inch-cross-chain-swap / cold compile",
            "value": 238.78984405699995,
            "range": "± 0.17574841920126855",
            "unit": "s",
            "extra": "{\"times\":[238.914116956,238.66557115799992],\"min\":238.66557115799992,\"max\":238.914116956,\"median\":238.78984405699995,\"mean\":238.78984405699995}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with min deps: test/libraries/FeeCalcLib.t.sol",
            "value": 44.055021934000024,
            "range": "± 0.2030609857241108",
            "unit": "s",
            "extra": "{\"times\":[44.198607733999964,43.91143613400008],\"min\":43.91143613400008,\"max\":44.198607733999964,\"median\":44.055021934000024,\"mean\":44.055021934000024}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity test with max deps: test/integration/ResolverMock.t.sol",
            "value": 53.54095397549999,
            "range": "± 0.23887829956402282",
            "unit": "s",
            "extra": "{\"times\":[53.37204150999995,53.70986644100002],\"min\":53.37204150999995,\"max\":53.70986644100002,\"median\":53.54095397549999,\"mean\":53.54095397549999}"
          },
          {
            "name": "1inch-cross-chain-swap / edit & compile Solidity contract: contracts/BaseEscrow.sol",
            "value": 238.737256347,
            "range": "± 0.31361381321764453",
            "unit": "s",
            "extra": "{\"times\":[238.95901480099997,238.51549789300003],\"min\":238.51549789300003,\"max\":238.95901480099997,\"median\":238.737256347,\"mean\":238.737256347}"
          },
          {
            "name": "1inch-cross-chain-swap / warm compile",
            "value": 0.5805548968400001,
            "range": "± 0.0017435945076514942",
            "unit": "s",
            "extra": "{\"times\":[0.57932198934,0.58178780434],\"min\":0.57932198934,\"max\":0.58178780434,\"median\":0.5805548968400001,\"mean\":0.5805548968400001}"
          },
          {
            "name": "1inch-cross-chain-swap / test solidity",
            "value": 3.756712392566667,
            "range": "± 0.1358459540495437",
            "unit": "s",
            "extra": "{\"times\":[3.6638032247,3.7993480237,4.022401831700001,3.5942764727000003,3.6889301467,3.8132582057,3.7295186457000002,3.6417385627,3.8492748757,3.6252635967,3.7687310287,3.5679067947000003,3.7526513657,4.0070007447,3.8265823687],\"min\":3.5679067947000003,\"max\":4.022401831700001,\"median\":3.7526513657,\"mean\":3.756712392566667}"
          },
          {
            "name": "1inch-swap-vm / cold compile",
            "value": 266.467248534,
            "range": "± 0.1894391831109462",
            "unit": "s",
            "extra": "{\"times\":[266.33329480299983,266.6012022650002],\"min\":266.33329480299983,\"max\":266.6012022650002,\"median\":266.467248534,\"mean\":266.467248534}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with min deps: test/ProtocolFeeProviderMock.t.sol",
            "value": 3.2849436409999617,
            "range": "± 0.018054697451130575",
            "unit": "s",
            "extra": "{\"times\":[3.2721770419999956,3.2977102399999274],\"min\":3.2721770419999956,\"max\":3.2977102399999274,\"median\":3.2849436409999617,\"mean\":3.2849436409999617}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity test with max deps: test/TransferModesCombinations.t.sol",
            "value": 13.761339804499876,
            "range": "± 0.04864476966571546",
            "unit": "s",
            "extra": "{\"times\":[13.726942757999991,13.795736850999761],\"min\":13.726942757999991,\"max\":13.795736850999761,\"median\":13.761339804499876,\"mean\":13.761339804499876}"
          },
          {
            "name": "1inch-swap-vm / edit & compile Solidity contract: src/SwapVM.sol",
            "value": 265.62863470199994,
            "range": "± 0.19378392718841703",
            "unit": "s",
            "extra": "{\"times\":[265.76566063099983,265.49160877300005],\"min\":265.49160877300005,\"max\":265.76566063099983,\"median\":265.62863470199994,\"mean\":265.62863470199994}"
          },
          {
            "name": "1inch-swap-vm / warm compile",
            "value": 0.6622390706600001,
            "range": "± 0.01090342605265729",
            "unit": "s",
            "extra": "{\"times\":[0.65452918416,0.6699489571600001],\"min\":0.65452918416,\"max\":0.6699489571600001,\"median\":0.6622390706600001,\"mean\":0.6622390706600001}"
          },
          {
            "name": "1inch-swap-vm / test solidity",
            "value": 2.5832713523699997,
            "range": "± 0.05090436399050582",
            "unit": "s",
            "extra": "{\"times\":[2.65374601812,2.56115494112,2.58305770312,2.53512674712],\"min\":2.53512674712,\"max\":2.65374601812,\"median\":2.57210632212,\"mean\":2.5832713523699997}"
          },
          {
            "name": "aave-v4 / cold compile",
            "value": 188.01319783949992,
            "range": "± 0.09463390152694433",
            "unit": "s",
            "extra": "{\"times\":[188.08011411299975,187.94628156600007],\"min\":187.94628156600007,\"max\":188.08011411299975,\"median\":188.01319783949992,\"mean\":188.01319783949992}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with min deps: tests/unit/WadRayMath.t.sol",
            "value": 3.596379537000088,
            "range": "± 0.00794652540399329",
            "unit": "s",
            "extra": "{\"times\":[3.5907604950000533,3.601998579000123],\"min\":3.5907604950000533,\"max\":3.601998579000123,\"median\":3.596379537000088,\"mean\":3.596379537000088}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity test with max deps: tests/unit/Spoke/Liquidations/Spoke.LiquidationCall.t.sol",
            "value": 33.09106912699994,
            "range": "± 0.15155200862351523",
            "unit": "s",
            "extra": "{\"times\":[33.19823258000007,32.98390567399981],\"min\":32.98390567399981,\"max\":33.19823258000007,\"median\":33.09106912699994,\"mean\":33.09106912699994}"
          },
          {
            "name": "aave-v4 / edit & compile Solidity contract: src/libraries/math/MathUtils.sol",
            "value": 185.20323085050006,
            "range": "± 0.30748828505802756",
            "unit": "s",
            "extra": "{\"times\":[184.9858037990001,185.42065790200002],\"min\":184.9858037990001,\"max\":185.42065790200002,\"median\":185.20323085050006,\"mean\":185.20323085050006}"
          },
          {
            "name": "aave-v4 / warm compile",
            "value": 1.00052135036,
            "range": "± 0.0030637006427299543",
            "unit": "s",
            "extra": "{\"times\":[1.0026877138599999,0.99835498686],\"min\":0.99835498686,\"max\":1.0026877138599999,\"median\":1.00052135036,\"mean\":1.00052135036}"
          },
          {
            "name": "aave-v4 / test solidity",
            "value": 13.604134377651663,
            "range": "± 0.5002520459847143",
            "unit": "s",
            "extra": "{\"times\":[13.47083929286,14.30349390286,12.738568858859999,13.55338554886,13.83455607186,13.639873545859999,13.398785688859999,12.662600761859998,14.03553278986,13.55073078886,14.556833720859998,13.749327659859999,13.32723001986,13.179285327859999,14.025531491859999,13.63434615786,14.46036109786,13.76356862486,14.32560438486,13.09851135886,13.222030564859999,13.18258366886,13.473620885859999,13.31202284886],\"min\":12.662600761859998,\"max\":14.556833720859998,\"median\":13.55205816886,\"mean\":13.604134377651663}"
          },
          {
            "name": "ens-verifiable-factory / cold compile",
            "value": 3.7318461569999344,
            "range": "± 0.017271095858697773",
            "unit": "s",
            "extra": "{\"times\":[3.7196336479997263,3.7440586660001425],\"min\":3.7196336479997263,\"max\":3.7440586660001425,\"median\":3.7318461569999344,\"mean\":3.7318461569999344}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with min deps: test/UUPSProxy.t.sol",
            "value": 3.3096084340000527,
            "range": "± 0.006832052991813425",
            "unit": "s",
            "extra": "{\"times\":[3.3144394249999896,3.3047774430001153],\"min\":3.3047774430001153,\"max\":3.3144394249999896,\"median\":3.3096084340000527,\"mean\":3.3096084340000527}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity test with max deps: test/VerifiableFactory.t.sol",
            "value": 3.6434704679998102,
            "range": "± 0.23462139299766957",
            "unit": "s",
            "extra": "{\"times\":[3.8093728459998966,3.4775680899997243],\"min\":3.4775680899997243,\"max\":3.8093728459998966,\"median\":3.6434704679998102,\"mean\":3.6434704679998102}"
          },
          {
            "name": "ens-verifiable-factory / edit & compile Solidity contract: src/VerifiableFactory.sol",
            "value": 3.6508944870000706,
            "range": "± 0.2548573621334946",
            "unit": "s",
            "extra": "{\"times\":[3.470683118000161,3.83110585599998],\"min\":3.470683118000161,\"max\":3.83110585599998,\"median\":3.6508944870000706,\"mean\":3.6508944870000706}"
          },
          {
            "name": "ens-verifiable-factory / warm compile",
            "value": 0.46722258954000007,
            "range": "± 0.0011248704172590082",
            "unit": "s",
            "extra": "{\"times\":[0.46801799304,0.46642718604000005],\"min\":0.46642718604000005,\"max\":0.46801799304,\"median\":0.46722258954000007,\"mean\":0.46722258954000007}"
          },
          {
            "name": "ens-verifiable-factory / test solidity",
            "value": 0.50568161892,
            "range": "± 0.0030126461189147868",
            "unit": "s",
            "extra": "{\"times\":[0.50781188142,0.50355135642],\"min\":0.50355135642,\"max\":0.50781188142,\"median\":0.50568161892,\"mean\":0.50568161892}"
          },
          {
            "name": "lidofinance-dual-governance / cold compile",
            "value": 52.810974773,
            "range": "± 0.08623779268197505",
            "unit": "s",
            "extra": "{\"times\":[52.87195410099998,52.74999544500001],\"min\":52.74999544500001,\"max\":52.87195410099998,\"median\":52.810974773,\"mean\":52.810974773}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with min deps: test/unit/scripts/launch/TimeConstraints.t.sol",
            "value": 3.532039141500136,
            "range": "± 0.012681437568846033",
            "unit": "s",
            "extra": "{\"times\":[3.523072011000011,3.541006272000261],\"min\":3.523072011000011,\"max\":3.541006272000261,\"median\":3.532039141500136,\"mean\":3.532039141500136}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity test with max deps: test/scenario/mainnet-launch.t.sol",
            "value": 8.18079006249993,
            "range": "± 0.027413021648055955",
            "unit": "s",
            "extra": "{\"times\":[8.161406128999777,8.200173996000085],\"min\":8.161406128999777,\"max\":8.200173996000085,\"median\":8.18079006249993,\"mean\":8.18079006249993}"
          },
          {
            "name": "lidofinance-dual-governance / edit & compile Solidity contract: contracts/types/Timestamp.sol",
            "value": 52.18414297199995,
            "range": "± 0.03617459580426723",
            "unit": "s",
            "extra": "{\"times\":[52.15856367000006,52.20972227399982],\"min\":52.15856367000006,\"max\":52.20972227399982,\"median\":52.18414297199995,\"mean\":52.18414297199995}"
          },
          {
            "name": "lidofinance-dual-governance / warm compile",
            "value": 0.6149067397400001,
            "range": "± 0.00200618426769936",
            "unit": "s",
            "extra": "{\"times\":[0.6134881532400001,0.61632532624],\"min\":0.6134881532400001,\"max\":0.61632532624,\"median\":0.6149067397400001,\"mean\":0.6149067397400001}"
          },
          {
            "name": "lidofinance-dual-governance / test solidity",
            "value": 3.4572948641066668,
            "range": "± 0.11652783380164175",
            "unit": "s",
            "extra": "{\"times\":[3.48799568724,3.32995227924,3.3413961262400003,3.5659008562400003,3.38702102524,3.58386096124,3.4598766002400003,3.3151074562400002,3.59108202224,3.48696431724,3.5078211982400003,3.67015283024,3.4936849332400004,3.33489614524,3.3037105232400004],\"min\":3.3037105232400004,\"max\":3.67015283024,\"median\":3.48696431724,\"mean\":3.4572948641066668}"
          },
          {
            "name": "uniswap-v4-core / cold compile",
            "value": 180.62043344399984,
            "range": "± 0.11645702062372876",
            "unit": "s",
            "extra": "{\"times\":[180.53808589500002,180.70278099299966],\"min\":180.53808589500002,\"max\":180.70278099299966,\"median\":180.62043344399984,\"mean\":180.62043344399984}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with min deps: test/libraries/BitMath.t.sol",
            "value": 3.9804289714999035,
            "range": "± 0.004332544364448998",
            "unit": "s",
            "extra": "{\"times\":[3.97736540000001,3.9834925429997967],\"min\":3.97736540000001,\"max\":3.9834925429997967,\"median\":3.9804289714999035,\"mean\":3.9804289714999035}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity test with max deps: test/PoolManager.t.sol",
            "value": 27.85473608900048,
            "range": "± 0.05867404486018665",
            "unit": "s",
            "extra": "{\"times\":[27.813247274000197,27.89622490400076],\"min\":27.813247274000197,\"max\":27.89622490400076,\"median\":27.85473608900048,\"mean\":27.85473608900048}"
          },
          {
            "name": "uniswap-v4-core / edit & compile Solidity contract: src/types/Currency.sol",
            "value": 166.13477154399968,
            "range": "± 0.4859820894707346",
            "unit": "s",
            "extra": "{\"times\":[166.47841277499964,165.7911303129997],\"min\":165.7911303129997,\"max\":166.47841277499964,\"median\":166.13477154399968,\"mean\":166.13477154399968}"
          },
          {
            "name": "uniswap-v4-core / warm compile",
            "value": 0.55897765772,
            "range": "± 0.0026253389861216167",
            "unit": "s",
            "extra": "{\"times\":[0.55712126272,0.56083405272],\"min\":0.55712126272,\"max\":0.56083405272,\"median\":0.55897765772,\"mean\":0.55897765772}"
          },
          {
            "name": "uniswap-v4-core / test solidity",
            "value": 7.385815804991111,
            "range": "± 0.2343693662622976",
            "unit": "s",
            "extra": "{\"times\":[7.17329355688,7.61856898588,7.15699282588,7.24328333988,7.493932700879999,7.43540048588,7.84995330888,7.27497458588,7.225942454879999],\"min\":7.15699282588,\"max\":7.84995330888,\"median\":7.27497458588,\"mean\":7.385815804991111}"
          },
          {
            "name": "uniswap-x / cold compile",
            "value": 38.152103804500314,
            "range": "± 0.9247727696838198",
            "unit": "s",
            "extra": "{\"times\":[38.806016901000405,37.498190708000216],\"min\":37.498190708000216,\"max\":38.806016901000405,\"median\":38.152103804500314,\"mean\":38.152103804500314}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with min deps: test/lib/CosignerLib.t.sol",
            "value": 3.1871673244996925,
            "range": "± 0.003269291939227196",
            "unit": "s",
            "extra": "{\"times\":[3.1848555859997867,3.189479062999599],\"min\":3.1848555859997867,\"max\":3.189479062999599,\"median\":3.1871673244996925,\"mean\":3.1871673244996925}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity test with max deps: test/reactors/V3DutchOrderReactor.t.sol",
            "value": 7.01772005299991,
            "range": "± 0.024695898080554238",
            "unit": "s",
            "extra": "{\"times\":[7.000257415999658,7.035182690000162],\"min\":7.000257415999658,\"max\":7.035182690000162,\"median\":7.01772005299991,\"mean\":7.01772005299991}"
          },
          {
            "name": "uniswap-x / edit & compile Solidity contract: src/base/ReactorStructs.sol",
            "value": 35.26435214650026,
            "range": "± 0.012686012550309553",
            "unit": "s",
            "extra": "{\"times\":[35.25538178099971,35.273322512000796],\"min\":35.25538178099971,\"max\":35.273322512000796,\"median\":35.26435214650026,\"mean\":35.26435214650026}"
          },
          {
            "name": "uniswap-x / warm compile",
            "value": 0.7404148152000001,
            "range": "± 0.010191958543951085",
            "unit": "s",
            "extra": "{\"times\":[0.7476216182000001,0.7332080122000001],\"min\":0.7332080122000001,\"max\":0.7476216182000001,\"median\":0.7404148152000001,\"mean\":0.7404148152000001}"
          },
          {
            "name": "uniswap-x / test solidity",
            "value": 40.560183814359995,
            "range": "± 0.014816455277688304",
            "unit": "s",
            "extra": "{\"times\":[40.570660630359995,40.549706998359994],\"min\":40.549706998359994,\"max\":40.570660630359995,\"median\":40.560183814359995,\"mean\":40.560183814359995}"
          }
        ]
      }
    ]
  }
}