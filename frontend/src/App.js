import React from "react";
import './App.css';

import {
  LineChart,
  Area,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Tooltip
} from "recharts";

const data = [
  {
      "original_value": 12558.61,
      "forecasted_value": null,
      "min_band": 10228.822120117187,
      "max_band": 16442.559404296873,
      "line_status": 0,
      "timestamp": "2018-03-09T17:30:00.000Z"
  },
  {
      "original_value": 11529.1189,
      "forecasted_value": null,
      "min_band": 9227.874480468749,
      "max_band": 16250.77131640625,
      "line_status": 0,
      "timestamp": "2018-03-09T18:30:00.000Z"
  },
  {
      "original_value": 10481.4804,
      "forecasted_value": null,
      "min_band": 8418.470439453125,
      "max_band": 16041.764959960936,
      "line_status": 0,
      "timestamp": "2018-03-09T19:30:00.000Z"
  },
  {
      "original_value": 9833.448,
      "forecasted_value": null,
      "min_band": 5246.669948730469,
      "max_band": 15568.668699218744,
      "line_status": 0,
      "timestamp": "2018-03-09T20:30:00.000Z"
  },
  {
      "original_value": 9570.974,
      "forecasted_value": null,
      "min_band": 5437.011467285156,
      "max_band": 13079.170509765623,
      "line_status": 0,
      "timestamp": "2018-03-09T21:30:00.000Z"
  },
  {
      "original_value": 9346.3631,
      "forecasted_value": null,
      "min_band": 4808.120866699219,
      "max_band": 12355.68370019531,
      "line_status": 0,
      "timestamp": "2018-03-09T22:30:00.000Z"
  },
  {
      "original_value": 9219.9351,
      "forecasted_value": null,
      "min_band": 8304.3528515625,
      "max_band": 12450.147160156248,
      "line_status": 0,
      "timestamp": "2018-03-09T23:30:00.000Z"
  },
  {
      "original_value": 9173.2542,
      "forecasted_value": null,
      "min_band": 7582.470358398437,
      "max_band": 14017.417124023435,
      "line_status": 0,
      "timestamp": "2018-03-10T00:30:00.000Z"
  },
  {
      "original_value": 9449.0167,
      "forecasted_value": null,
      "min_band": 8115.116676269531,
      "max_band": 13870.802179687498,
      "line_status": 0,
      "timestamp": "2018-03-10T01:30:00.000Z"
  },
  {
      "original_value": 10173.722,
      "forecasted_value": null,
      "min_band": 5717.234790039062,
      "max_band": 12162.755044921874,
      "line_status": 0,
      "timestamp": "2018-03-10T02:30:00.000Z"
  },
  {
      "original_value": 10415.1899,
      "forecasted_value": null,
      "min_band": 7153.456843261719,
      "max_band": 12554.31073046875,
      "line_status": 0,
      "timestamp": "2018-03-10T03:30:00.000Z"
  },
  {
      "original_value": 10832.4056,
      "forecasted_value": null,
      "min_band": 8253.75423828125,
      "max_band": 13315.566397460936,
      "line_status": 0,
      "timestamp": "2018-03-10T04:30:00.000Z"
  },
  {
      "original_value": 11105.9472,
      "forecasted_value": null,
      "min_band": 10472.4783984375,
      "max_band": 14460.621624023437,
      "line_status": 0,
      "timestamp": "2018-03-10T05:30:00.000Z"
  },
  {
      "original_value": 11974.7017,
      "forecasted_value": null,
      "min_band": 10417.111918945313,
      "max_band": 15335.102609374999,
      "line_status": 0,
      "timestamp": "2018-03-10T06:30:00.000Z"
  },
  {
      "original_value": 11989.1168,
      "forecasted_value": null,
      "min_band": 11340.919175781251,
      "max_band": 15394.550318359376,
      "line_status": 0,
      "timestamp": "2018-03-10T07:30:00.000Z"
  },
  {
      "original_value": 12551.6536,
      "forecasted_value": null,
      "min_band": 9387.05559765625,
      "max_band": 14008.387846679687,
      "line_status": 0,
      "timestamp": "2018-03-10T08:30:00.000Z"
  },
  {
      "original_value": 12348.5626,
      "forecasted_value": null,
      "min_band": 10015.189573242189,
      "max_band": 14990.062643554684,
      "line_status": 0,
      "timestamp": "2018-03-10T09:30:00.000Z"
  },
  {
      "original_value": 12420.9986,
      "forecasted_value": null,
      "min_band": 9544.7819375,
      "max_band": 14526.597146484375,
      "line_status": 0,
      "timestamp": "2018-03-10T10:30:00.000Z"
  },
  {
      "original_value": 12457.4977,
      "forecasted_value": null,
      "min_band": 11640.717338867189,
      "max_band": 16385.050345703123,
      "line_status": 0,
      "timestamp": "2018-03-10T11:30:00.000Z"
  },
  {
      "original_value": 12618.4399,
      "forecasted_value": null,
      "min_band": 11407.77265234375,
      "max_band": 16332.329920898437,
      "line_status": 0,
      "timestamp": "2018-03-10T12:30:00.000Z"
  },
  {
      "original_value": 13476.6415,
      "forecasted_value": null,
      "min_band": 11528.109514648439,
      "max_band": 16921.355546875,
      "line_status": 0,
      "timestamp": "2018-03-10T13:30:00.000Z"
  },
  {
      "original_value": 13493.1589,
      "forecasted_value": null,
      "min_band": 9362.919635742186,
      "max_band": 15666.735097656247,
      "line_status": 0,
      "timestamp": "2018-03-10T14:30:00.000Z"
  },
  {
      "original_value": 13601.1908,
      "forecasted_value": null,
      "min_band": 9651.771479492189,
      "max_band": 14837.441583984375,
      "line_status": 0,
      "timestamp": "2018-03-10T15:30:00.000Z"
  },
  {
      "original_value": 13211.1088,
      "forecasted_value": null,
      "min_band": 9938.083416992187,
      "max_band": 15264.828444335935,
      "line_status": 0,
      "timestamp": "2018-03-10T16:30:00.000Z"
  },
  {
      "original_value": 12715.7631,
      "forecasted_value": null,
      "min_band": 8726.115008789062,
      "max_band": 18484.292716796866,
      "line_status": 0,
      "timestamp": "2018-03-10T17:30:00.000Z"
  },
  {
      "original_value": 11677.876,
      "forecasted_value": null,
      "min_band": 8789.500924804688,
      "max_band": 16006.515295898436,
      "line_status": 0,
      "timestamp": "2018-03-10T18:30:00.000Z"
  },
  {
      "original_value": 10962.4063,
      "forecasted_value": null,
      "min_band": 8831.03967578125,
      "max_band": 14644.764396484374,
      "line_status": 0,
      "timestamp": "2018-03-10T19:30:00.000Z"
  },
  {
      "original_value": 10010.496,
      "forecasted_value": null,
      "min_band": 5861.045026367187,
      "max_band": 14825.41026171875,
      "line_status": 0,
      "timestamp": "2018-03-10T20:30:00.000Z"
  },
  {
      "original_value": 9355.1141,
      "forecasted_value": null,
      "min_band": 6455.282020507812,
      "max_band": 12764.121797851561,
      "line_status": 0,
      "timestamp": "2018-03-10T21:30:00.000Z"
  },
  {
      "original_value": 9495.9753,
      "forecasted_value": null,
      "min_band": 5133.546913574219,
      "max_band": 13895.464605468746,
      "line_status": 0,
      "timestamp": "2018-03-10T22:30:00.000Z"
  },
  {
      "original_value": 9628.5473,
      "forecasted_value": null,
      "min_band": 7741.699766113281,
      "max_band": 12812.867971679687,
      "line_status": 0,
      "timestamp": "2018-03-10T23:30:00.000Z"
  },
  {
      "original_value": 9340.4914,
      "forecasted_value": null,
      "min_band": 6639.374741699218,
      "max_band": 12242.335196289061,
      "line_status": 0,
      "timestamp": "2018-03-11T00:30:00.000Z"
  },
  {
      "original_value": 9215.0083,
      "forecasted_value": null,
      "min_band": 6340.740961914063,
      "max_band": 13149.51361132812,
      "line_status": 0,
      "timestamp": "2018-03-11T01:30:00.000Z"
  },
  {
      "original_value": 9771.9822,
      "forecasted_value": null,
      "min_band": 6736.622590332032,
      "max_band": 12531.252210937499,
      "line_status": 0,
      "timestamp": "2018-03-11T02:30:00.000Z"
  },
  {
      "original_value": 10338.8908,
      "forecasted_value": null,
      "min_band": 6917.601720214843,
      "max_band": 12689.375479492186,
      "line_status": 0,
      "timestamp": "2018-03-11T03:30:00.000Z"
  },
  {
      "original_value": 10623.043,
      "forecasted_value": null,
      "min_band": 7292.024904785156,
      "max_band": 12524.555488281247,
      "line_status": 0,
      "timestamp": "2018-03-11T04:30:00.000Z"
  },
  {
      "original_value": 11081.7788,
      "forecasted_value": null,
      "min_band": 9193.5158828125,
      "max_band": 14764.430722656245,
      "line_status": 0,
      "timestamp": "2018-03-11T05:30:00.000Z"
  },
  {
      "original_value": 11652.8414,
      "forecasted_value": null,
      "min_band": 9401.421967773436,
      "max_band": 14135.114690429686,
      "line_status": 0,
      "timestamp": "2018-03-11T06:30:00.000Z"
  },
  {
      "original_value": 11975.0256,
      "forecasted_value": null,
      "min_band": 10491.594728515624,
      "max_band": 14689.238869140623,
      "line_status": 0,
      "timestamp": "2018-03-11T07:30:00.000Z"
  },
  {
      "original_value": 12612.5254,
      "forecasted_value": null,
      "min_band": 9206.491653320312,
      "max_band": 14378.797309570311,
      "line_status": 0,
      "timestamp": "2018-03-11T08:30:00.000Z"
  },
  {
      "original_value": 12996.4999,
      "forecasted_value": null,
      "min_band": 9436.063407226564,
      "max_band": 13967.505244140626,
      "line_status": 0,
      "timestamp": "2018-03-11T09:30:00.000Z"
  },
  {
      "original_value": 13052.8603,
      "forecasted_value": null,
      "min_band": 9741.072394531251,
      "max_band": 14783.230378906248,
      "line_status": 0,
      "timestamp": "2018-03-11T10:30:00.000Z"
  },
  {
      "original_value": 13124.2377,
      "forecasted_value": null,
      "min_band": 11274.855274414062,
      "max_band": 15822.738169921873,
      "line_status": 0,
      "timestamp": "2018-03-11T11:30:00.000Z"
  },
  {
      "original_value": 13110.1311,
      "forecasted_value": null,
      "min_band": 11389.863508789063,
      "max_band": 16261.6108046875,
      "line_status": 0,
      "timestamp": "2018-03-11T12:30:00.000Z"
  },
  {
      "original_value": 13506.6799,
      "forecasted_value": null,
      "min_band": 12077.115560546876,
      "max_band": 16813.54451953125,
      "line_status": 0,
      "timestamp": "2018-03-11T13:30:00.000Z"
  },
  {
      "original_value": 13617.5458,
      "forecasted_value": null,
      "min_band": 9567.413166015625,
      "max_band": 14331.339414062499,
      "line_status": 0,
      "timestamp": "2018-03-11T14:30:00.000Z"
  },
  {
      "original_value": 13373.663,
      "forecasted_value": null,
      "min_band": 10457.775178710937,
      "max_band": 15688.845531249997,
      "line_status": 0,
      "timestamp": "2018-03-11T15:30:00.000Z"
  },
  {
      "original_value": 13195.4471,
      "forecasted_value": null,
      "min_band": 10208.916750976561,
      "max_band": 15150.35202734375,
      "line_status": 0,
      "timestamp": "2018-03-11T16:30:00.000Z"
  },
  {
      "original_value": 12429.7588,
      "forecasted_value": null,
      "min_band": 10033.365481445313,
      "max_band": 15138.246752929686,
      "line_status": 0,
      "timestamp": "2018-03-11T17:30:00.000Z"
  },
  {
      "original_value": 11442.6966,
      "forecasted_value": null,
      "min_band": 9345.34089453125,
      "max_band": 15212.649417968747,
      "line_status": 0,
      "timestamp": "2018-03-11T18:30:00.000Z"
  },
  {
      "original_value": 10508.7566,
      "forecasted_value": null,
      "min_band": 8097.035381347657,
      "max_band": 14198.347141601562,
      "line_status": 0,
      "timestamp": "2018-03-11T19:30:00.000Z"
  },
  {
      "original_value": 9686.0079,
      "forecasted_value": null,
      "min_band": 6589.164836425781,
      "max_band": 13861.115676757809,
      "line_status": 0,
      "timestamp": "2018-03-11T20:30:00.000Z"
  },
  {
      "original_value": 9511.8454,
      "forecasted_value": null,
      "min_band": 6322.093018554688,
      "max_band": 11834.570890625,
      "line_status": 0,
      "timestamp": "2018-03-11T21:30:00.000Z"
  },
  {
      "original_value": 9255.8273,
      "forecasted_value": null,
      "min_band": 5945.555196777344,
      "max_band": 11748.0282734375,
      "line_status": 0,
      "timestamp": "2018-03-11T22:30:00.000Z"
  },
  {
      "original_value": 9290.07,
      "forecasted_value": null,
      "min_band": 6017.115055175782,
      "max_band": 12802.539936523435,
      "line_status": 0,
      "timestamp": "2018-03-11T23:30:00.000Z"
  },
  {
      "original_value": 9103.0842,
      "forecasted_value": null,
      "min_band": 6332.788289550781,
      "max_band": 12405.971541015622,
      "line_status": 0,
      "timestamp": "2018-03-12T00:30:00.000Z"
  },
  {
      "original_value": 9497.326,
      "forecasted_value": null,
      "min_band": 7293.002608886719,
      "max_band": 12073.752649414062,
      "line_status": 0,
      "timestamp": "2018-03-12T01:30:00.000Z"
  },
  {
      "original_value": 10129.1834,
      "forecasted_value": null,
      "min_band": 6370.951025390625,
      "max_band": 11249.023782226563,
      "line_status": 0,
      "timestamp": "2018-03-12T02:30:00.000Z"
  },
  {
      "original_value": 10427.4302,
      "forecasted_value": null,
      "min_band": 5754.8873305664065,
      "max_band": 11421.061601562498,
      "line_status": 0,
      "timestamp": "2018-03-12T03:30:00.000Z"
  },
  {
      "original_value": 10734.3323,
      "forecasted_value": null,
      "min_band": 7819.061703124999,
      "max_band": 12541.251921875,
      "line_status": 0,
      "timestamp": "2018-03-12T04:30:00.000Z"
  },
  {
      "original_value": 11258.6049,
      "forecasted_value": null,
      "min_band": 9580.81755859375,
      "max_band": 13250.890559570313,
      "line_status": 0,
      "timestamp": "2018-03-12T05:30:00.000Z"
  },
  {
      "original_value": 11554.8832,
      "forecasted_value": null,
      "min_band": 9792.4322109375,
      "max_band": 14180.289034179686,
      "line_status": 0,
      "timestamp": "2018-03-12T06:30:00.000Z"
  },
  {
      "original_value": 12335.4332,
      "forecasted_value": null,
      "min_band": 10783.1650390625,
      "max_band": 15359.175103515623,
      "line_status": 0,
      "timestamp": "2018-03-12T07:30:00.000Z"
  },
  {
      "original_value": 12676.8158,
      "forecasted_value": null,
      "min_band": 9983.073003906251,
      "max_band": 14861.007434570309,
      "line_status": 0,
      "timestamp": "2018-03-12T08:30:00.000Z"
  },
  {
      "original_value": 12844.8768,
      "forecasted_value": null,
      "min_band": 9609.751749023439,
      "max_band": 14968.693472656243,
      "line_status": 0,
      "timestamp": "2018-03-12T09:30:00.000Z"
  },
  {
      "original_value": 12745.7885,
      "forecasted_value": null,
      "min_band": 10193.718760742187,
      "max_band": 14227.762009765625,
      "line_status": 0,
      "timestamp": "2018-03-12T10:30:00.000Z"
  },
  {
      "original_value": 12354.4786,
      "forecasted_value": null,
      "min_band": 11096.085067382814,
      "max_band": 16080.761299804686,
      "line_status": 0,
      "timestamp": "2018-03-12T11:30:00.000Z"
  },
  {
      "original_value": 12911.8099,
      "forecasted_value": null,
      "min_band": 11287.437272460937,
      "max_band": 16093.612742187499,
      "line_status": 0,
      "timestamp": "2018-03-12T12:30:00.000Z"
  },
  {
      "original_value": 13361.278,
      "forecasted_value": null,
      "min_band": 11576.166870117188,
      "max_band": 16265.537782226562,
      "line_status": 0,
      "timestamp": "2018-03-12T13:30:00.000Z"
  },
  {
      "original_value": 13705.5691,
      "forecasted_value": null,
      "min_band": 10603.034182617186,
      "max_band": 15473.319785156249,
      "line_status": 0,
      "timestamp": "2018-03-12T14:30:00.000Z"
  },
  {
      "original_value": 13662.0172,
      "forecasted_value": null,
      "min_band": 10986.981961914062,
      "max_band": 15071.802792968749,
      "line_status": 0,
      "timestamp": "2018-03-12T15:30:00.000Z"
  },
  {
      "original_value": 13099.0902,
      "forecasted_value": null,
      "min_band": 10587.583856445312,
      "max_band": 15024.396260742187,
      "line_status": 0,
      "timestamp": "2018-03-12T16:30:00.000Z"
  },
  {
      "original_value": 12558.7977,
      "forecasted_value": null,
      "min_band": 10772.916034179689,
      "max_band": 15458.337517578124,
      "line_status": 0,
      "timestamp": "2018-03-12T17:30:00.000Z"
  },
  {
      "original_value": 11661.8084,
      "forecasted_value": null,
      "min_band": 10049.263266601562,
      "max_band": 15057.884631835937,
      "line_status": 0,
      "timestamp": "2018-03-12T18:30:00.000Z"
  },
  {
      "original_value": 10612.827,
      "forecasted_value": null,
      "min_band": 8785.013728515625,
      "max_band": 14455.015975585933,
      "line_status": 0,
      "timestamp": "2018-03-12T19:30:00.000Z"
  },
  {
      "original_value": 9785.4539,
      "forecasted_value": null,
      "min_band": 6717.924565917969,
      "max_band": 12463.564986328125,
      "line_status": 0,
      "timestamp": "2018-03-12T20:30:00.000Z"
  },
  {
      "original_value": 9552.5835,
      "forecasted_value": null,
      "min_band": 6612.108392578126,
      "max_band": 13421.572521484373,
      "line_status": 0,
      "timestamp": "2018-03-12T21:30:00.000Z"
  },
  {
      "original_value": 9230.8508,
      "forecasted_value": null,
      "min_band": 5894.293734863281,
      "max_band": 11660.615154296875,
      "line_status": 0,
      "timestamp": "2018-03-12T22:30:00.000Z"
  },
  {
      "original_value": 9363.0935,
      "forecasted_value": null,
      "min_band": 7814.170202636718,
      "max_band": 12885.5606796875,
      "line_status": 0,
      "timestamp": "2018-03-12T23:30:00.000Z"
  },
  {
      "original_value": 9300.3984,
      "forecasted_value": null,
      "min_band": 7578.1881484375,
      "max_band": 13284.910155273434,
      "line_status": 0,
      "timestamp": "2018-03-13T00:30:00.000Z"
  },
  {
      "original_value": 9312.9419,
      "forecasted_value": null,
      "min_band": 7551.296678710938,
      "max_band": 12600.130483398436,
      "line_status": 0,
      "timestamp": "2018-03-13T01:30:00.000Z"
  },
  {
      "original_value": 10051.0254,
      "forecasted_value": null,
      "min_band": 5557.930287109375,
      "max_band": 12633.975054687497,
      "line_status": 0,
      "timestamp": "2018-03-13T02:30:00.000Z"
  },
  {
      "original_value": 10257.2475,
      "forecasted_value": null,
      "min_band": 7161.039519042968,
      "max_band": 11029.939038085933,
      "line_status": 0,
      "timestamp": "2018-03-13T03:30:00.000Z"
  },
  {
      "original_value": 10812.4497,
      "forecasted_value": null,
      "min_band": 8097.3809423828125,
      "max_band": 12373.72587109375,
      "line_status": 0,
      "timestamp": "2018-03-13T04:30:00.000Z"
  },
  {
      "original_value": 11300.8968,
      "forecasted_value": null,
      "min_band": 10458.125782226563,
      "max_band": 14165.774610351562,
      "line_status": 0,
      "timestamp": "2018-03-13T05:30:00.000Z"
  },
  {
      "original_value": 11727.9195,
      "forecasted_value": null,
      "min_band": 10771.2996171875,
      "max_band": 14385.137416015623,
      "line_status": 0,
      "timestamp": "2018-03-13T06:30:00.000Z"
  },
  {
      "original_value": 11994.1788,
      "forecasted_value": null,
      "min_band": 10586.425133789062,
      "max_band": 14124.569170898436,
      "line_status": 0,
      "timestamp": "2018-03-13T07:30:00.000Z"
  },
  {
      "original_value": 12876.8254,
      "forecasted_value": null,
      "min_band": 10888.569055664062,
      "max_band": 14852.08090722656,
      "line_status": 0,
      "timestamp": "2018-03-13T08:30:00.000Z"
  },
  {
      "original_value": 12536.9455,
      "forecasted_value": null,
      "min_band": 9251.02330371094,
      "max_band": 14324.574396484375,
      "line_status": 0,
      "timestamp": "2018-03-13T09:30:00.000Z"
  },
  {
      "original_value": 12661.693,
      "forecasted_value": null,
      "min_band": 10379.140293945311,
      "max_band": 14276.903896484373,
      "line_status": 0,
      "timestamp": "2018-03-13T10:30:00.000Z"
  },
  {
      "original_value": 12577.154,
      "forecasted_value": null,
      "min_band": 10682.555532226563,
      "max_band": 15452.945022460937,
      "line_status": 0,
      "timestamp": "2018-03-13T11:30:00.000Z"
  },
  {
      "original_value": 12937.0842,
      "forecasted_value": null,
      "min_band": 12140.719108398438,
      "max_band": 15568.842053710938,
      "line_status": 0,
      "timestamp": "2018-03-13T12:30:00.000Z"
  },
  {
      "original_value": 13197.7939,
      "forecasted_value": null,
      "min_band": 11220.090494140626,
      "max_band": 15298.910446289063,
      "line_status": 0,
      "timestamp": "2018-03-13T13:30:00.000Z"
  },
  {
      "original_value": 13540.7443,
      "forecasted_value": null,
      "min_band": 10500.5586484375,
      "max_band": 16154.199844726563,
      "line_status": 0,
      "timestamp": "2018-03-13T14:30:00.000Z"
  },
  {
      "original_value": 13299.0929,
      "forecasted_value": null,
      "min_band": 10571.4384765625,
      "max_band": 14822.2643359375,
      "line_status": 0,
      "timestamp": "2018-03-13T15:30:00.000Z"
  },
  {
      "original_value": 13306.939,
      "forecasted_value": null,
      "min_band": 9410.11305859375,
      "max_band": 14432.107907226562,
      "line_status": 0,
      "timestamp": "2018-03-13T16:30:00.000Z"
  },
  {
      "original_value": 12369.8114,
      "forecasted_value": null,
      "min_band": 10501.860627929687,
      "max_band": 15498.525513671873,
      "line_status": 0,
      "timestamp": "2018-03-13T17:30:00.000Z"
  },
  {
      "original_value": 11657.9459,
      "forecasted_value": null,
      "min_band": 9555.144420898438,
      "max_band": 14815.490192382813,
      "line_status": 0,
      "timestamp": "2018-03-13T18:30:00.000Z"
  },
  {
      "original_value": 10562.9889,
      "forecasted_value": null,
      "min_band": 7717.441055175781,
      "max_band": 13603.481517578126,
      "line_status": 0,
      "timestamp": "2018-03-13T19:30:00.000Z"
  },
  {
      "original_value": 9707.183,
      "forecasted_value": null,
      "min_band": 6865.917418457031,
      "max_band": 13375.680427734373,
      "line_status": 0,
      "timestamp": "2018-03-13T20:30:00.000Z"
  },
  {
      "original_value": 9686.2404,
      "forecasted_value": null,
      "min_band": 6709.434041015625,
      "max_band": 12830.225665039063,
      "line_status": 0,
      "timestamp": "2018-03-13T21:30:00.000Z"
  },
  {
      "original_value": 9361.1393,
      "forecasted_value": null,
      "min_band": 6624.0407172851565,
      "max_band": 12867.897007812497,
      "line_status": 0,
      "timestamp": "2018-03-13T22:30:00.000Z"
  },
  {
      "original_value": 9378.1899,
      "forecasted_value": null,
      "min_band": 7242.61536328125,
      "max_band": 11802.372502929687,
      "line_status": 0,
      "timestamp": "2018-03-13T23:30:00.000Z"
  },
  {
      "original_value": 9153.6137,
      "forecasted_value": null,
      "min_band": 7470.17932421875,
      "max_band": 12426.07397363281,
      "line_status": 0,
      "timestamp": "2018-03-14T00:30:00.000Z"
  },
  {
      "original_value": 9540.4723,
      "forecasted_value": null,
      "min_band": 7040.86871484375,
      "max_band": 12449.59733300781,
      "line_status": 0,
      "timestamp": "2018-03-14T01:30:00.000Z"
  },
  {
      "original_value": 9709.0286,
      "forecasted_value": null,
      "min_band": 7458.783840332031,
      "max_band": 12207.931446289062,
      "line_status": 0,
      "timestamp": "2018-03-14T02:30:00.000Z"
  },
  {
      "original_value": 10507.6929,
      "forecasted_value": null,
      "min_band": 7955.380107910157,
      "max_band": 12399.013655273437,
      "line_status": 0,
      "timestamp": "2018-03-14T03:30:00.000Z"
  },
  {
      "original_value": 10635.9255,
      "forecasted_value": null,
      "min_band": 8350.572354492188,
      "max_band": 11908.73986425781,
      "line_status": 0,
      "timestamp": "2018-03-14T04:30:00.000Z"
  },
  {
      "original_value": 11125.8445,
      "forecasted_value": null,
      "min_band": 10090.031916015625,
      "max_band": 13554.428947265626,
      "line_status": 0,
      "timestamp": "2018-03-14T05:30:00.000Z"
  },
  {
      "original_value": 11903.1867,
      "forecasted_value": null,
      "min_band": 10189.942338867188,
      "max_band": 14778.458469726562,
      "line_status": 0,
      "timestamp": "2018-03-14T06:30:00.000Z"
  },
  {
      "original_value": 12476.2874,
      "forecasted_value": null,
      "min_band": 10540.834381835937,
      "max_band": 14724.093392578123,
      "line_status": 0,
      "timestamp": "2018-03-14T07:30:00.000Z"
  },
  {
      "original_value": 12545.2774,
      "forecasted_value": null,
      "min_band": 10125.784826171875,
      "max_band": 14612.713686523437,
      "line_status": 0,
      "timestamp": "2018-03-14T08:30:00.000Z"
  },
  {
      "original_value": 12828.3325,
      "forecasted_value": null,
      "min_band": 9548.409736328125,
      "max_band": 14557.92425878906,
      "line_status": 0,
      "timestamp": "2018-03-14T09:30:00.000Z"
  },
  {
      "original_value": 12129.1175,
      "forecasted_value": null,
      "min_band": 10459.28628125,
      "max_band": 14699.594345703124,
      "line_status": 0,
      "timestamp": "2018-03-14T10:30:00.000Z"
  },
  {
      "original_value": 12683.5833,
      "forecasted_value": null,
      "min_band": 10420.531372070312,
      "max_band": 15455.663210937499,
      "line_status": 0,
      "timestamp": "2018-03-14T11:30:00.000Z"
  },
  {
      "original_value": 13319.7573,
      "forecasted_value": null,
      "min_band": 11548.230785156251,
      "max_band": 15754.089791992186,
      "line_status": 0,
      "timestamp": "2018-03-14T12:30:00.000Z"
  },
  {
      "original_value": 13223.1631,
      "forecasted_value": null,
      "min_band": 11481.500235351563,
      "max_band": 15654.692123046874,
      "line_status": 0,
      "timestamp": "2018-03-14T13:30:00.000Z"
  },
  {
      "original_value": 13770.2674,
      "forecasted_value": null,
      "min_band": 11224.838267578125,
      "max_band": 14865.150603515625,
      "line_status": 0,
      "timestamp": "2018-03-14T14:30:00.000Z"
  },
  {
      "original_value": 13545.3746,
      "forecasted_value": null,
      "min_band": 10124.169419921876,
      "max_band": 15957.095423828121,
      "line_status": 0,
      "timestamp": "2018-03-14T15:30:00.000Z"
  },
  {
      "original_value": 13190.0634,
      "forecasted_value": null,
      "min_band": 11044.682975585936,
      "max_band": 14971.001459960937,
      "line_status": 0,
      "timestamp": "2018-03-14T16:30:00.000Z"
  },
  {
      "original_value": 12584.0125,
      "forecasted_value": null,
      "min_band": 10357.871268554687,
      "max_band": 15306.132217773436,
      "line_status": 0,
      "timestamp": "2018-03-14T17:30:00.000Z"
  },
  {
      "original_value": 11699.8001,
      "forecasted_value": null,
      "min_band": 9860.071922851563,
      "max_band": 14743.54262207031,
      "line_status": 0,
      "timestamp": "2018-03-14T18:30:00.000Z"
  },
  {
      "original_value": 10890.8203,
      "forecasted_value": null,
      "min_band": 8764.291956054687,
      "max_band": 12931.388897460936,
      "line_status": 0,
      "timestamp": "2018-03-14T19:30:00.000Z"
  },
  {
      "original_value": 9926.5581,
      "forecasted_value": null,
      "min_band": 6777.6299716796875,
      "max_band": 12913.180809570309,
      "line_status": 0,
      "timestamp": "2018-03-14T20:30:00.000Z"
  },
  {
      "original_value": 9350.3727,
      "forecasted_value": null,
      "min_band": 7012.090048339844,
      "max_band": 12622.873545898437,
      "line_status": 0,
      "timestamp": "2018-03-14T21:30:00.000Z"
  },
  {
      "original_value": 9409.4592,
      "forecasted_value": null,
      "min_band": 6521.380292480469,
      "max_band": 11895.569261718749,
      "line_status": 0,
      "timestamp": "2018-03-14T22:30:00.000Z"
  },
  {
      "original_value": 9249.0196,
      "forecasted_value": null,
      "min_band": 7444.318098144531,
      "max_band": 12154.552908203124,
      "line_status": 0,
      "timestamp": "2018-03-14T23:30:00.000Z"
  },
  {
      "original_value": 9462.5182,
      "forecasted_value": null,
      "min_band": 6852.4551020507815,
      "max_band": 11851.509742187498,
      "line_status": 0,
      "timestamp": "2018-03-15T00:30:00.000Z"
  },
  {
      "original_value": 9641.6895,
      "forecasted_value": null,
      "min_band": 7737.9026391601565,
      "max_band": 12410.403869140622,
      "line_status": 0,
      "timestamp": "2018-03-15T01:30:00.000Z"
  },
  {
      "original_value": 9788.1911,
      "forecasted_value": null,
      "min_band": 6937.419238281251,
      "max_band": 11543.059916015623,
      "line_status": 0,
      "timestamp": "2018-03-15T02:30:00.000Z"
  },
  {
      "original_value": 10126.8865,
      "forecasted_value": null,
      "min_band": 5995.32269921875,
      "max_band": 11749.87790625,
      "line_status": 0,
      "timestamp": "2018-03-15T03:30:00.000Z"
  },
  {
      "original_value": 10934.0911,
      "forecasted_value": null,
      "min_band": 8593.320439453126,
      "max_band": 13133.273472656248,
      "line_status": 0,
      "timestamp": "2018-03-15T04:30:00.000Z"
  },
  {
      "original_value": 11267.6376,
      "forecasted_value": null,
      "min_band": 9682.90593359375,
      "max_band": 13841.7654453125,
      "line_status": 0,
      "timestamp": "2018-03-15T05:30:00.000Z"
  },
  {
      "original_value": 11443.0202,
      "forecasted_value": null,
      "min_band": 9118.50405078125,
      "max_band": 14435.44298925781,
      "line_status": 0,
      "timestamp": "2018-03-15T06:30:00.000Z"
  },
  {
      "original_value": 11923.5465,
      "forecasted_value": null,
      "min_band": 10802.316544921874,
      "max_band": 14208.597970703124,
      "line_status": 0,
      "timestamp": "2018-03-15T07:30:00.000Z"
  },
  {
      "original_value": 12755.1786,
      "forecasted_value": null,
      "min_band": 9882.514672851563,
      "max_band": 13724.006374023436,
      "line_status": 0,
      "timestamp": "2018-03-15T08:30:00.000Z"
  },
  {
      "original_value": 12566.8984,
      "forecasted_value": null,
      "min_band": 10703.778786132812,
      "max_band": 14698.1625,
      "line_status": 0,
      "timestamp": "2018-03-15T09:30:00.000Z"
  },
  {
      "original_value": 12395.1596,
      "forecasted_value": null,
      "min_band": 10813.163135742187,
      "max_band": 14655.387696289059,
      "line_status": 0,
      "timestamp": "2018-03-15T10:30:00.000Z"
  },
  {
      "original_value": 12547.4686,
      "forecasted_value": null,
      "min_band": 11245.400626953126,
      "max_band": 15538.029635742185,
      "line_status": 0,
      "timestamp": "2018-03-15T11:30:00.000Z"
  },
  {
      "original_value": 12869.6411,
      "forecasted_value": null,
      "min_band": 11429.873010742187,
      "max_band": 15036.473172851562,
      "line_status": 0,
      "timestamp": "2018-03-15T12:30:00.000Z"
  },
  {
      "original_value": 13293.3878,
      "forecasted_value": null,
      "min_band": 10996.510082031251,
      "max_band": 15311.685444335937,
      "line_status": 0,
      "timestamp": "2018-03-15T13:30:00.000Z"
  },
  {
      "original_value": 13675.992,
      "forecasted_value": null,
      "min_band": 10697.738774414063,
      "max_band": 14937.896799804686,
      "line_status": 0,
      "timestamp": "2018-03-15T14:30:00.000Z"
  },
  {
      "original_value": 13571.2529,
      "forecasted_value": null,
      "min_band": 10218.186859375,
      "max_band": 14553.399846679687,
      "line_status": 0,
      "timestamp": "2018-03-15T15:30:00.000Z"
  },
  {
      "original_value": 13222.7128,
      "forecasted_value": null,
      "min_band": 10126.156874023436,
      "max_band": 15274.239715820311,
      "line_status": 0,
      "timestamp": "2018-03-15T16:30:00.000Z"
  },
  {
      "original_value": 12391.8927,
      "forecasted_value": null,
      "min_band": 10740.142783203126,
      "max_band": 15114.417245117187,
      "line_status": 0,
      "timestamp": "2018-03-15T17:30:00.000Z"
  },
  {
      "original_value": 11464.6183,
      "forecasted_value": null,
      "min_band": 10044.75766015625,
      "max_band": 14480.74057128906,
      "line_status": 0,
      "timestamp": "2018-03-15T18:30:00.000Z"
  },
  {
      "original_value": 10606.5864,
      "forecasted_value": null,
      "min_band": 8901.68851953125,
      "max_band": 13538.734267578122,
      "line_status": 0,
      "timestamp": "2018-03-15T19:30:00.000Z"
  },
  {
      "original_value": 9707.1007,
      "forecasted_value": null,
      "min_band": 8371.684881835938,
      "max_band": 12779.712453124997,
      "line_status": 0,
      "timestamp": "2018-03-15T20:30:00.000Z"
  },
  {
      "original_value": 9513.4562,
      "forecasted_value": null,
      "min_band": 6959.928544921875,
      "max_band": 12468.192705078123,
      "line_status": 0,
      "timestamp": "2018-03-15T21:30:00.000Z"
  },
  {
      "original_value": 9094.99,
      "forecasted_value": null,
      "min_band": 6893.438093749999,
      "max_band": 12647.193452148436,
      "line_status": 0,
      "timestamp": "2018-03-15T22:30:00.000Z"
  },
  {
      "original_value": 9309.0925,
      "forecasted_value": null,
      "min_band": 7317.888525878907,
      "max_band": 11644.523661132813,
      "line_status": 0,
      "timestamp": "2018-03-15T23:30:00.000Z"
  },
  {
      "original_value": 9478.0216,
      "forecasted_value": null,
      "min_band": 7291.31523046875,
      "max_band": 11213.929575195312,
      "line_status": 0,
      "timestamp": "2018-03-16T00:30:00.000Z"
  },
  {
      "original_value": 9318.0116,
      "forecasted_value": null,
      "min_band": 7284.0328339843745,
      "max_band": 11470.493179687499,
      "line_status": 0,
      "timestamp": "2018-03-16T01:30:00.000Z"
  },
  {
      "original_value": 9704.6815,
      "forecasted_value": null,
      "min_band": 7127.528955566407,
      "max_band": 11683.705702148436,
      "line_status": 0,
      "timestamp": "2018-03-16T02:30:00.000Z"
  },
  {
      "original_value": 10243.8044,
      "forecasted_value": null,
      "min_band": 7220.707656738282,
      "max_band": 12068.55965625,
      "line_status": 0,
      "timestamp": "2018-03-16T03:30:00.000Z"
  },
  {
      "original_value": 10785.4593,
      "forecasted_value": null,
      "min_band": 8036.816899414062,
      "max_band": 12165.565739257812,
      "line_status": 0,
      "timestamp": "2018-03-16T04:30:00.000Z"
  },
  {
      "original_value": 11319.6652,
      "forecasted_value": null,
      "min_band": 9794.67165234375,
      "max_band": 13806.237385742186,
      "line_status": 0,
      "timestamp": "2018-03-16T05:30:00.000Z"
  },
  {
      "original_value": 11687.9833,
      "forecasted_value": null,
      "min_band": 10355.108480468749,
      "max_band": 13765.005118164063,
      "line_status": 0,
      "timestamp": "2018-03-16T06:30:00.000Z"
  },
  {
      "original_value": 12040.626,
      "forecasted_value": null,
      "min_band": 10472.65559765625,
      "max_band": 13979.865583984376,
      "line_status": 0,
      "timestamp": "2018-03-16T07:30:00.000Z"
  },
  {
      "original_value": 12720.3696,
      "forecasted_value": null,
      "min_band": 9798.310036132812,
      "max_band": 14168.681091796876,
      "line_status": 0,
      "timestamp": "2018-03-16T08:30:00.000Z"
  },
  {
      "original_value": 12900.1957,
      "forecasted_value": null,
      "min_band": 10218.047150390625,
      "max_band": 13869.2972109375,
      "line_status": 0,
      "timestamp": "2018-03-16T09:30:00.000Z"
  },
  {
      "original_value": 12935.6646,
      "forecasted_value": null,
      "min_band": 9730.97087890625,
      "max_band": 14078.40411816406,
      "line_status": 0,
      "timestamp": "2018-03-16T10:30:00.000Z"
  },
  {
      "original_value": 12745.7502,
      "forecasted_value": null,
      "min_band": 11348.313848632813,
      "max_band": 16148.092814453123,
      "line_status": 0,
      "timestamp": "2018-03-16T11:30:00.000Z"
  },
  {
      "original_value": 13014.3027,
      "forecasted_value": null,
      "min_band": 11080.130826171877,
      "max_band": 15242.2849765625,
      "line_status": 0,
      "timestamp": "2018-03-16T12:30:00.000Z"
  },
  {
      "original_value": 13364.0948,
      "forecasted_value": null,
      "min_band": 11637.651027343749,
      "max_band": 16529.47707519531,
      "line_status": 0,
      "timestamp": "2018-03-16T13:30:00.000Z"
  },
  {
      "original_value": 13921.1214,
      "forecasted_value": null,
      "min_band": 10968.44691015625,
      "max_band": 15316.429990234374,
      "line_status": 0,
      "timestamp": "2018-03-16T14:30:00.000Z"
  },
  {
      "original_value": 13385.8519,
      "forecasted_value": null,
      "min_band": 10340.265106445313,
      "max_band": 14391.31881347656,
      "line_status": 0,
      "timestamp": "2018-03-16T15:30:00.000Z"
  },
  {
      "original_value": 13007.5807,
      "forecasted_value": null,
      "min_band": 11193.965471679689,
      "max_band": 15204.36775878906,
      "line_status": 0,
      "timestamp": "2018-03-16T16:30:00.000Z"
  },
  {
      "original_value": 12329.5614,
      "forecasted_value": null,
      "min_band": 11249.904213867187,
      "max_band": 15441.426673828124,
      "line_status": 0,
      "timestamp": "2018-03-16T17:30:00.000Z"
  },
  {
      "original_value": 11572.5445,
      "forecasted_value": null,
      "min_band": 10024.778547851563,
      "max_band": 14105.753880859374,
      "line_status": 0,
      "timestamp": "2018-03-16T18:30:00.000Z"
  },
  {
      "original_value": 10577.9798,
      "forecasted_value": null,
      "min_band": 7920.039592285156,
      "max_band": 14156.372980468746,
      "line_status": 0,
      "timestamp": "2018-03-16T19:30:00.000Z"
  },
  {
      "original_value": 9888.4782,
      "forecasted_value": null,
      "min_band": 7063.831826660156,
      "max_band": 12275.268388671875,
      "line_status": 0,
      "timestamp": "2018-03-16T20:30:00.000Z"
  },
  {
      "original_value": 9067.2255,
      "forecasted_value": null,
      "min_band": 6608.014327148438,
      "max_band": 11872.611451171872,
      "line_status": 0,
      "timestamp": "2018-03-16T21:30:00.000Z"
  },
  {
      "original_value": 9139.7512,
      "forecasted_value": null,
      "min_band": 7254.413853515625,
      "max_band": 11691.523840820311,
      "line_status": 0,
      "timestamp": "2018-03-16T22:30:00.000Z"
  },
  {
      "original_value": 9143.9912,
      "forecasted_value": null,
      "min_band": 7072.832242675781,
      "max_band": 11568.857379882811,
      "line_status": 0,
      "timestamp": "2018-03-16T23:30:00.000Z"
  },
  {
      "original_value": 9272.3161,
      "forecasted_value": null,
      "min_band": 7045.855776367187,
      "max_band": 11504.428494140624,
      "line_status": 0,
      "timestamp": "2018-03-17T00:30:00.000Z"
  },
  {
      "original_value": 9486.0462,
      "forecasted_value": null,
      "min_band": 6814.337963378906,
      "max_band": 11514.476659179685,
      "line_status": 0,
      "timestamp": "2018-03-17T01:30:00.000Z"
  },
  {
      "original_value": 9802.4298,
      "forecasted_value": null,
      "min_band": 7131.454049316406,
      "max_band": 11438.940716796875,
      "line_status": 0,
      "timestamp": "2018-03-17T02:30:00.000Z"
  },
  {
      "original_value": 10146.5269,
      "forecasted_value": null,
      "min_band": 8159.7906953125,
      "max_band": 11860.66840234375,
      "line_status": 0,
      "timestamp": "2018-03-17T03:30:00.000Z"
  },
  {
      "original_value": 10753.8084,
      "forecasted_value": null,
      "min_band": 7828.279056640625,
      "max_band": 12376.867138671876,
      "line_status": 0,
      "timestamp": "2018-03-17T04:30:00.000Z"
  },
  {
      "original_value": 11005.8764,
      "forecasted_value": null,
      "min_band": 9699.644662109376,
      "max_band": 14024.374984375,
      "line_status": 0,
      "timestamp": "2018-03-17T05:30:00.000Z"
  },
  {
      "original_value": 11708.79,
      "forecasted_value": null,
      "min_band": 10847.646254882811,
      "max_band": 13827.220685546874,
      "line_status": 0,
      "timestamp": "2018-03-17T06:30:00.000Z"
  },
  {
      "original_value": 12102.1561,
      "forecasted_value": null,
      "min_band": 9983.821564453125,
      "max_band": 13762.412658203124,
      "line_status": 0,
      "timestamp": "2018-03-17T07:30:00.000Z"
  },
  {
      "original_value": 12407.8597,
      "forecasted_value": null,
      "min_band": 10395.924295898438,
      "max_band": 14246.380113281248,
      "line_status": 0,
      "timestamp": "2018-03-17T08:30:00.000Z"
  },
  {
      "original_value": 13097.6269,
      "forecasted_value": null,
      "min_band": 10833.025935546875,
      "max_band": 14385.92599707031,
      "line_status": 0,
      "timestamp": "2018-03-17T09:30:00.000Z"
  },
  {
      "original_value": 12828.2838,
      "forecasted_value": null,
      "min_band": 10749.077903320313,
      "max_band": 14451.59596972656,
      "line_status": 0,
      "timestamp": "2018-03-17T10:30:00.000Z"
  },
  {
      "original_value": 12918.2162,
      "forecasted_value": null,
      "min_band": 11778.623764648437,
      "max_band": 15461.293160156249,
      "line_status": 0,
      "timestamp": "2018-03-17T11:30:00.000Z"
  },
  {
      "original_value": 12995.3623,
      "forecasted_value": null,
      "min_band": 10621.569049804688,
      "max_band": 15452.91795410156,
      "line_status": 0,
      "timestamp": "2018-03-17T12:30:00.000Z"
  },
  {
      "original_value": 13310.8789,
      "forecasted_value": null,
      "min_band": 11608.283790039062,
      "max_band": 15777.962411132812,
      "line_status": 0,
      "timestamp": "2018-03-17T13:30:00.000Z"
  },
  {
      "original_value": 13556.8988,
      "forecasted_value": null,
      "min_band": 10675.39240625,
      "max_band": 15674.076870117187,
      "line_status": 0,
      "timestamp": "2018-03-17T14:30:00.000Z"
  },
  {
      "original_value": 13451.0913,
      "forecasted_value": null,
      "min_band": 10972.019942382813,
      "max_band": 15105.912872070312,
      "line_status": 0,
      "timestamp": "2018-03-17T15:30:00.000Z"
  },
  {
      "original_value": 13197.1494,
      "forecasted_value": null,
      "min_band": 10208.735697265625,
      "max_band": 14746.52387597656,
      "line_status": 0,
      "timestamp": "2018-03-17T16:30:00.000Z"
  },
  {
      "original_value": 12822.0181,
      "forecasted_value": null,
      "min_band": 10292.01830078125,
      "max_band": 15991.900191406246,
      "line_status": 0,
      "timestamp": "2018-03-17T17:30:00.000Z"
  },
  {
      "original_value": 11580.594,
      "forecasted_value": null,
      "min_band": 9847.208565429688,
      "max_band": 14900.320671874997,
      "line_status": 0,
      "timestamp": "2018-03-17T18:30:00.000Z"
  },
  {
      "original_value": 10576.0343,
      "forecasted_value": null,
      "min_band": 9101.104998046876,
      "max_band": 13320.797355468749,
      "line_status": 0,
      "timestamp": "2018-03-17T19:30:00.000Z"
  },
  {
      "original_value": 9797.8589,
      "forecasted_value": null,
      "min_band": 6919.053661621094,
      "max_band": 12564.222404296874,
      "line_status": 0,
      "timestamp": "2018-03-17T20:30:00.000Z"
  },
  {
      "original_value": 9149.0494,
      "forecasted_value": null,
      "min_band": 6113.202039550782,
      "max_band": 12010.23975390625,
      "line_status": 0,
      "timestamp": "2018-03-17T21:30:00.000Z"
  },
  {
      "original_value": 9218.4346,
      "forecasted_value": null,
      "min_band": 6222.5855771484385,
      "max_band": 10988.086272460936,
      "line_status": 0,
      "timestamp": "2018-03-17T22:30:00.000Z"
  },
  {
      "original_value": 9260.9164,
      "forecasted_value": null,
      "min_band": 7954.776962890624,
      "max_band": 12101.185757812498,
      "line_status": 0,
      "timestamp": "2018-03-17T23:30:00.000Z"
  },
  {
      "original_value": 9481.5149,
      "forecasted_value": null,
      "min_band": 7335.392950195313,
      "max_band": 11610.412402343749,
      "line_status": 0,
      "timestamp": "2018-03-18T00:30:00.000Z"
  },
  {
      "original_value": 9361.0527,
      "forecasted_value": null,
      "min_band": 7478.771473144531,
      "max_band": 11729.147865234374,
      "line_status": 0,
      "timestamp": "2018-03-18T01:30:00.000Z"
  },
  {
      "original_value": 9782.1219,
      "forecasted_value": null,
      "min_band": 7596.291333984374,
      "max_band": 11660.9224921875,
      "line_status": 0,
      "timestamp": "2018-03-18T02:30:00.000Z"
  },
  {
      "original_value": 10096.3456,
      "forecasted_value": null,
      "min_band": 8021.6144536132815,
      "max_band": 11842.491166992188,
      "line_status": 0,
      "timestamp": "2018-03-18T03:30:00.000Z"
  },
  {
      "original_value": 10770.8265,
      "forecasted_value": null,
      "min_band": 8165.8117436523435,
      "max_band": 11820.340583984374,
      "line_status": 0,
      "timestamp": "2018-03-18T04:30:00.000Z"
  },
  {
      "original_value": 11151.8371,
      "forecasted_value": null,
      "min_band": 10078.110998046875,
      "max_band": 13236.4291640625,
      "line_status": 0,
      "timestamp": "2018-03-18T05:30:00.000Z"
  },
  {
      "original_value": 11869.4865,
      "forecasted_value": null,
      "min_band": 10500.960369140625,
      "max_band": 13737.909671874999,
      "line_status": 0,
      "timestamp": "2018-03-18T06:30:00.000Z"
  },
  {
      "original_value": 12252.5246,
      "forecasted_value": null,
      "min_band": 11662.45925390625,
      "max_band": 14786.035041015624,
      "line_status": 0,
      "timestamp": "2018-03-18T07:30:00.000Z"
  },
  {
      "original_value": 12696.7735,
      "forecasted_value": null,
      "min_band": 11130.918567382812,
      "max_band": 14130.291651367188,
      "line_status": 0,
      "timestamp": "2018-03-18T08:30:00.000Z"
  },
  {
      "original_value": 13166.5086,
      "forecasted_value": null,
      "min_band": 10774.833125976562,
      "max_band": 13890.961520507812,
      "line_status": 0,
      "timestamp": "2018-03-18T09:30:00.000Z"
  },
  {
      "original_value": 12766.1518,
      "forecasted_value": null,
      "min_band": 11171.24637109375,
      "max_band": 14735.198048828124,
      "line_status": 0,
      "timestamp": "2018-03-18T10:30:00.000Z"
  },
  {
      "original_value": 12587.5846,
      "forecasted_value": null,
      "min_band": 11267.114400390625,
      "max_band": 14760.76309375,
      "line_status": 0,
      "timestamp": "2018-03-18T11:30:00.000Z"
  },
  {
      "original_value": 13102.5008,
      "forecasted_value": null,
      "min_band": 11804.246983398436,
      "max_band": 15915.96459765625,
      "line_status": 0,
      "timestamp": "2018-03-18T12:30:00.000Z"
  },
  {
      "original_value": 13310.5186,
      "forecasted_value": null,
      "min_band": 10723.797637695312,
      "max_band": 15197.487798828124,
      "line_status": 0,
      "timestamp": "2018-03-18T13:30:00.000Z"
  },
  {
      "original_value": 13535.2816,
      "forecasted_value": null,
      "min_band": 10871.331607421875,
      "max_band": 14512.390141601561,
      "line_status": 0,
      "timestamp": "2018-03-18T14:30:00.000Z"
  },
  {
      "original_value": 13602.0028,
      "forecasted_value": null,
      "min_band": 10364.34863671875,
      "max_band": 15989.977558593748,
      "line_status": 0,
      "timestamp": "2018-03-18T15:30:00.000Z"
  },
  {
      "original_value": 12787.513,
      "forecasted_value": null,
      "min_band": 10791.530475585938,
      "max_band": 14215.674975585938,
      "line_status": 0,
      "timestamp": "2018-03-18T16:30:00.000Z"
  },
  {
      "original_value": 12398.2495,
      "forecasted_value": null,
      "min_band": 11084.570648437499,
      "max_band": 15577.776796874998,
      "line_status": 0,
      "timestamp": "2018-03-18T17:30:00.000Z"
  },
  {
      "original_value": 11603.0535,
      "forecasted_value": null,
      "min_band": 10094.358073242187,
      "max_band": 13935.078692382811,
      "line_status": 0,
      "timestamp": "2018-03-18T18:30:00.000Z"
  },
  {
      "original_value": 10781.0191,
      "forecasted_value": null,
      "min_band": 8877.960478515624,
      "max_band": 13665.055376953125,
      "line_status": 0,
      "timestamp": "2018-03-18T19:30:00.000Z"
  },
  {
      "original_value": 9572.7009,
      "forecasted_value": null,
      "min_band": 7064.74464453125,
      "max_band": 12232.532188476562,
      "line_status": 0,
      "timestamp": "2018-03-18T20:30:00.000Z"
  },
  {
      "original_value": 9603.5509,
      "forecasted_value": null,
      "min_band": 7115.609389160156,
      "max_band": 11516.084940429686,
      "line_status": 0,
      "timestamp": "2018-03-18T21:30:00.000Z"
  },
  {
      "original_value": 9226.2315,
      "forecasted_value": null,
      "min_band": 6668.0393564453125,
      "max_band": 11303.630858398437,
      "line_status": 0,
      "timestamp": "2018-03-18T22:30:00.000Z"
  },
  {
      "original_value": 9734.7843,
      "forecasted_value": null,
      "min_band": 7689.286018554688,
      "max_band": 12229.14460253906,
      "line_status": 0,
      "timestamp": "2018-03-18T23:30:00.000Z"
  },
  {
      "original_value": 9203.2179,
      "forecasted_value": null,
      "min_band": 6781.4226948242185,
      "max_band": 11440.5880859375,
      "line_status": 0,
      "timestamp": "2018-03-19T00:30:00.000Z"
  },
  {
      "original_value": 9738.6512,
      "forecasted_value": null,
      "min_band": 7671.140991699219,
      "max_band": 11064.355659179688,
      "line_status": 0,
      "timestamp": "2018-03-19T01:30:00.000Z"
  },
  {
      "original_value": 9789.2299,
      "forecasted_value": null,
      "min_band": 7432.738484863281,
      "max_band": 12062.284169921872,
      "line_status": 0,
      "timestamp": "2018-03-19T02:30:00.000Z"
  },
  {
      "original_value": 10489.9748,
      "forecasted_value": null,
      "min_band": 8178.004335449218,
      "max_band": 11889.539770507812,
      "line_status": 0,
      "timestamp": "2018-03-19T03:30:00.000Z"
  },
  {
      "original_value": 10593.6904,
      "forecasted_value": null,
      "min_band": 8485.636083984375,
      "max_band": 12445.734383789062,
      "line_status": 0,
      "timestamp": "2018-03-19T04:30:00.000Z"
  },
  {
      "original_value": 11238.8861,
      "forecasted_value": null,
      "min_band": 10157.817461914063,
      "max_band": 13740.074732421874,
      "line_status": 0,
      "timestamp": "2018-03-19T05:30:00.000Z"
  },
  {
      "original_value": 11787.0266,
      "forecasted_value": null,
      "min_band": 10289.335083007812,
      "max_band": 13000.6462578125,
      "line_status": 0,
      "timestamp": "2018-03-19T06:30:00.000Z"
  },
  {
      "original_value": 12248.3033,
      "forecasted_value": null,
      "min_band": 10990.048403320312,
      "max_band": 13776.066896484375,
      "line_status": 0,
      "timestamp": "2018-03-19T07:30:00.000Z"
  },
  {
      "original_value": 12486.3322,
      "forecasted_value": null,
      "min_band": 10915.850313476561,
      "max_band": 13944.714344726563,
      "line_status": 0,
      "timestamp": "2018-03-19T08:30:00.000Z"
  },
  {
      "original_value": 12999.9806,
      "forecasted_value": null,
      "min_band": 11299.011728515625,
      "max_band": 13696.816681640623,
      "line_status": 0,
      "timestamp": "2018-03-19T09:30:00.000Z"
  },
  {
      "original_value": 12868.8278,
      "forecasted_value": null,
      "min_band": 10613.688921875,
      "max_band": 14514.992776367184,
      "line_status": 0,
      "timestamp": "2018-03-19T10:30:00.000Z"
  },
  {
      "original_value": 12930.7444,
      "forecasted_value": null,
      "min_band": 11527.053280273438,
      "max_band": 15670.057065429686,
      "line_status": 0,
      "timestamp": "2018-03-19T11:30:00.000Z"
  },
  {
      "original_value": 13152.1253,
      "forecasted_value": null,
      "min_band": 11163.193577148437,
      "max_band": 15111.465771484372,
      "line_status": 0,
      "timestamp": "2018-03-19T12:30:00.000Z"
  },
  {
      "original_value": 13410.023,
      "forecasted_value": null,
      "min_band": 11506.199375,
      "max_band": 15384.697152343748,
      "line_status": 0,
      "timestamp": "2018-03-19T13:30:00.000Z"
  },
  {
      "original_value": 13492.6227,
      "forecasted_value": null,
      "min_band": 11420.16528515625,
      "max_band": 15422.412732421875,
      "line_status": 0,
      "timestamp": "2018-03-19T14:30:00.000Z"
  },
  {
      "original_value": 13609.6822,
      "forecasted_value": null,
      "min_band": 11795.760301757813,
      "max_band": 14878.582609375,
      "line_status": 0,
      "timestamp": "2018-03-19T15:30:00.000Z"
  },
  {
      "original_value": 13145.0328,
      "forecasted_value": null,
      "min_band": 11434.182120117188,
      "max_band": 14811.649174804685,
      "line_status": 0,
      "timestamp": "2018-03-19T16:30:00.000Z"
  },
  {
      "original_value": 12538.3643,
      "forecasted_value": null,
      "min_band": 11260.074901367188,
      "max_band": 14886.051145507812,
      "line_status": 0,
      "timestamp": "2018-03-19T17:30:00.000Z"
  },
  {
      "original_value": 11544.2914,
      "forecasted_value": null,
      "min_band": 9069.9518828125,
      "max_band": 13490.189958007812,
      "line_status": 0,
      "timestamp": "2018-03-19T18:30:00.000Z"
  },
  {
      "original_value": 10602.0379,
      "forecasted_value": null,
      "min_band": 9047.436804687499,
      "max_band": 13325.502482421874,
      "line_status": 0,
      "timestamp": "2018-03-19T19:30:00.000Z"
  },
  {
      "original_value": 9779.4518,
      "forecasted_value": null,
      "min_band": 8376.957325195312,
      "max_band": 12163.753374999998,
      "line_status": 0,
      "timestamp": "2018-03-19T20:30:00.000Z"
  },
  {
      "original_value": 9364.5778,
      "forecasted_value": null,
      "min_band": 7716.562322265625,
      "max_band": 11626.194722656248,
      "line_status": 0,
      "timestamp": "2018-03-19T21:30:00.000Z"
  },
  {
      "original_value": 9160.3869,
      "forecasted_value": null,
      "min_band": 7881.749519042969,
      "max_band": 10996.506375976562,
      "line_status": 0,
      "timestamp": "2018-03-19T22:30:00.000Z"
  },
  {
      "original_value": 9296.2864,
      "forecasted_value": null,
      "min_band": 7241.298297363281,
      "max_band": 11493.063232421873,
      "line_status": 0,
      "timestamp": "2018-03-19T23:30:00.000Z"
  },
  {
      "original_value": 9137.6982,
      "forecasted_value": null,
      "min_band": 7406.340574707031,
      "max_band": 11704.623111328123,
      "line_status": 0,
      "timestamp": "2018-03-20T00:30:00.000Z"
  },
  {
      "original_value": 9394.0759,
      "forecasted_value": null,
      "min_band": 8381.538171875,
      "max_band": 11276.51715625,
      "line_status": 0,
      "timestamp": "2018-03-20T01:30:00.000Z"
  },
  {
      "original_value": 9752.2897,
      "forecasted_value": null,
      "min_band": 8304.74036328125,
      "max_band": 11562.42783203125,
      "line_status": 0,
      "timestamp": "2018-03-20T02:30:00.000Z"
  },
  {
      "original_value": 10320.8783,
      "forecasted_value": null,
      "min_band": 8034.906296875,
      "max_band": 11108.016389648437,
      "line_status": 0,
      "timestamp": "2018-03-20T03:30:00.000Z"
  },
  {
      "original_value": 10618.3021,
      "forecasted_value": null,
      "min_band": 8993.570346679688,
      "max_band": 11568.73821484375,
      "line_status": 0,
      "timestamp": "2018-03-20T04:30:00.000Z"
  },
  {
      "original_value": 11266.4093,
      "forecasted_value": null,
      "min_band": 10117.72957421875,
      "max_band": 12972.379698242188,
      "line_status": 0,
      "timestamp": "2018-03-20T05:30:00.000Z"
  },
  {
      "original_value": 11666.3683,
      "forecasted_value": null,
      "min_band": 10641.790702148437,
      "max_band": 13593.709444335938,
      "line_status": 0,
      "timestamp": "2018-03-20T06:30:00.000Z"
  },
  {
      "original_value": 12137.372,
      "forecasted_value": null,
      "min_band": 10881.804074218751,
      "max_band": 13393.825047851562,
      "line_status": 0,
      "timestamp": "2018-03-20T07:30:00.000Z"
  },
  {
      "original_value": 12661.1716,
      "forecasted_value": null,
      "min_band": 10918.804252929687,
      "max_band": 13599.65866796875,
      "line_status": 0,
      "timestamp": "2018-03-20T08:30:00.000Z"
  },
  {
      "original_value": 12327.0667,
      "forecasted_value": null,
      "min_band": 10950.374684570312,
      "max_band": 14106.479130859374,
      "line_status": 0,
      "timestamp": "2018-03-20T09:30:00.000Z"
  },
  {
      "original_value": 12631.288,
      "forecasted_value": null,
      "min_band": 11228.504758789062,
      "max_band": 14127.117517578125,
      "line_status": 0,
      "timestamp": "2018-03-20T10:30:00.000Z"
  },
  {
      "original_value": 12654.3629,
      "forecasted_value": null,
      "min_band": 11392.548635742189,
      "max_band": 14878.209940429686,
      "line_status": 0,
      "timestamp": "2018-03-20T11:30:00.000Z"
  },
  {
      "original_value": 12990.9606,
      "forecasted_value": null,
      "min_band": 11063.106606445313,
      "max_band": 15236.72233984375,
      "line_status": 0,
      "timestamp": "2018-03-20T12:30:00.000Z"
  },
  {
      "original_value": 13404.891,
      "forecasted_value": null,
      "min_band": 11890.166428710938,
      "max_band": 15144.867647460938,
      "line_status": 0,
      "timestamp": "2018-03-20T13:30:00.000Z"
  },
  {
      "original_value": 13612.0229,
      "forecasted_value": null,
      "min_band": 11364.563876953125,
      "max_band": 14783.675866210937,
      "line_status": 0,
      "timestamp": "2018-03-20T14:30:00.000Z"
  },
  {
      "original_value": 13685.6151,
      "forecasted_value": null,
      "min_band": 11147.973061523437,
      "max_band": 15194.30746191406,
      "line_status": 0,
      "timestamp": "2018-03-20T15:30:00.000Z"
  },
  {
      "original_value": 13090.515,
      "forecasted_value": null,
      "min_band": 10563.420252929687,
      "max_band": 14682.36652734375,
      "line_status": 0,
      "timestamp": "2018-03-20T16:30:00.000Z"
  },
  {
      "original_value": 12468.6725,
      "forecasted_value": null,
      "min_band": 11076.973318359374,
      "max_band": 15203.177904296874,
      "line_status": 0,
      "timestamp": "2018-03-20T17:30:00.000Z"
  },
  {
      "original_value": 11462.1666,
      "forecasted_value": null,
      "min_band": 10172.893563476562,
      "max_band": 13490.536930664062,
      "line_status": 0,
      "timestamp": "2018-03-20T18:30:00.000Z"
  },
  {
      "original_value": 10694.1427,
      "forecasted_value": null,
      "min_band": 8541.909248046875,
      "max_band": 12982.911729492185,
      "line_status": 0,
      "timestamp": "2018-03-20T19:30:00.000Z"
  },
  {
      "original_value": 10023.0887,
      "forecasted_value": null,
      "min_band": 7193.529333007812,
      "max_band": 11650.12303125,
      "line_status": 0,
      "timestamp": "2018-03-20T20:30:00.000Z"
  },
  {
      "original_value": 9330.2719,
      "forecasted_value": null,
      "min_band": 7176.390473144532,
      "max_band": 11605.360245117186,
      "line_status": 0,
      "timestamp": "2018-03-20T21:30:00.000Z"
  },
  {
      "original_value": 9307.5428,
      "forecasted_value": null,
      "min_band": 7357.449646972656,
      "max_band": 10923.83384082031,
      "line_status": 0,
      "timestamp": "2018-03-20T22:30:00.000Z"
  },
  {
      "original_value": 9271.4868,
      "forecasted_value": null,
      "min_band": 8305.431609375,
      "max_band": 11258.05606347656,
      "line_status": 0,
      "timestamp": "2018-03-20T23:30:00.000Z"
  },
  {
      "original_value": 9396.8855,
      "forecasted_value": null,
      "min_band": 8029.624899414062,
      "max_band": 10355.520925781251,
      "line_status": 0,
      "timestamp": "2018-03-21T00:30:00.000Z"
  },
  {
      "original_value": 9407.2666,
      "forecasted_value": null,
      "min_band": 8542.740147460938,
      "max_band": 11957.281125,
      "line_status": 0,
      "timestamp": "2018-03-21T01:30:00.000Z"
  },
  {
      "original_value": 9864.9661,
      "forecasted_value": null,
      "min_band": 7841.260564453125,
      "max_band": 10780.481985351562,
      "line_status": 0,
      "timestamp": "2018-03-21T02:30:00.000Z"
  },
  {
      "original_value": 10310.8586,
      "forecasted_value": null,
      "min_band": 8963.738270507813,
      "max_band": 11919.12755566406,
      "line_status": 0,
      "timestamp": "2018-03-21T03:30:00.000Z"
  },
  {
      "original_value": 10679.7843,
      "forecasted_value": null,
      "min_band": 8198.434275390624,
      "max_band": 12805.695065429687,
      "line_status": 0,
      "timestamp": "2018-03-21T04:30:00.000Z"
  },
  {
      "original_value": 11310.5038,
      "forecasted_value": null,
      "min_band": 9804.526677734375,
      "max_band": 12969.360873046873,
      "line_status": 0,
      "timestamp": "2018-03-21T05:30:00.000Z"
  },
  {
      "original_value": 11651.1567,
      "forecasted_value": null,
      "min_band": 10294.0561484375,
      "max_band": 13168.692549804688,
      "line_status": 0,
      "timestamp": "2018-03-21T06:30:00.000Z"
  },
  {
      "original_value": 12141.7692,
      "forecasted_value": null,
      "min_band": 10181.1023984375,
      "max_band": 13781.152201171873,
      "line_status": 0,
      "timestamp": "2018-03-21T07:30:00.000Z"
  },
  {
      "original_value": 12179.4459,
      "forecasted_value": null,
      "min_band": 10819.214234375,
      "max_band": 14342.304299804688,
      "line_status": 0,
      "timestamp": "2018-03-21T08:30:00.000Z"
  },
  {
      "original_value": 13173.9408,
      "forecasted_value": null,
      "min_band": 11214.867426757812,
      "max_band": 13804.707736328126,
      "line_status": 0,
      "timestamp": "2018-03-21T09:30:00.000Z"
  },
  {
      "original_value": 12926.7634,
      "forecasted_value": null,
      "min_band": 11019.53461328125,
      "max_band": 13895.890251953124,
      "line_status": 0,
      "timestamp": "2018-03-21T10:30:00.000Z"
  },
  {
      "original_value": 12753.6313,
      "forecasted_value": null,
      "min_band": 11064.694170898438,
      "max_band": 14878.695555664062,
      "line_status": 0,
      "timestamp": "2018-03-21T11:30:00.000Z"
  },
  {
      "original_value": 12925.1706,
      "forecasted_value": null,
      "min_band": 11168.976404296875,
      "max_band": 14803.770297851563,
      "line_status": 0,
      "timestamp": "2018-03-21T12:30:00.000Z"
  },
  {
      "original_value": 13454.7675,
      "forecasted_value": null,
      "min_band": 11390.945294921876,
      "max_band": 15321.535544921873,
      "line_status": 0,
      "timestamp": "2018-03-21T13:30:00.000Z"
  },
  {
      "original_value": 13372.9916,
      "forecasted_value": null,
      "min_band": 11375.36253515625,
      "max_band": 14342.48589550781,
      "line_status": 0,
      "timestamp": "2018-03-21T14:30:00.000Z"
  },
  {
      "original_value": 13331.3871,
      "forecasted_value": null,
      "min_band": 11466.479520507814,
      "max_band": 14903.600180664062,
      "line_status": 0,
      "timestamp": "2018-03-21T15:30:00.000Z"
  },
  {
      "original_value": 13007.6671,
      "forecasted_value": null,
      "min_band": 11154.209118164063,
      "max_band": 15297.830807617185,
      "line_status": 0,
      "timestamp": "2018-03-21T16:30:00.000Z"
  },
  {
      "original_value": 12588.5604,
      "forecasted_value": null,
      "min_band": 11046.228770507812,
      "max_band": 14109.57181640625,
      "line_status": 0,
      "timestamp": "2018-03-21T17:30:00.000Z"
  },
  {
      "original_value": 11637.8751,
      "forecasted_value": null,
      "min_band": 9193.94947265625,
      "max_band": 12941.814893554687,
      "line_status": 0,
      "timestamp": "2018-03-21T18:30:00.000Z"
  },
  {
      "original_value": 10518.8882,
      "forecasted_value": null,
      "min_band": 8837.795123046875,
      "max_band": 13488.803615234372,
      "line_status": 0,
      "timestamp": "2018-03-21T19:30:00.000Z"
  },
  {
      "original_value": 9861.9218,
      "forecasted_value": null,
      "min_band": 8661.278629882812,
      "max_band": 11265.53236816406,
      "line_status": 0,
      "timestamp": "2018-03-21T20:30:00.000Z"
  },
  {
      "original_value": 9446.607,
      "forecasted_value": null,
      "min_band": 7280.929449707031,
      "max_band": 11142.0933984375,
      "line_status": 0,
      "timestamp": "2018-03-21T21:30:00.000Z"
  },
  {
      "original_value": 9383.6113,
      "forecasted_value": null,
      "min_band": 7646.370297363281,
      "max_band": 10869.988767578125,
      "line_status": 0,
      "timestamp": "2018-03-21T22:30:00.000Z"
  },
  {
      "original_value": 9310.8619,
      "forecasted_value": null,
      "min_band": 6949.819122070312,
      "max_band": 11612.836208007811,
      "line_status": 0,
      "timestamp": "2018-03-21T23:30:00.000Z"
  },
  {
      "original_value": 9417.4971,
      "forecasted_value": null,
      "min_band": 7505.38230859375,
      "max_band": 11215.26234765625,
      "line_status": 0,
      "timestamp": "2018-03-22T00:30:00.000Z"
  },
  {
      "original_value": 9497.0716,
      "forecasted_value": null,
      "min_band": 8256.728545898437,
      "max_band": 11351.41168066406,
      "line_status": 0,
      "timestamp": "2018-03-22T01:30:00.000Z"
  },
  {
      "original_value": 9815.7716,
      "forecasted_value": null,
      "min_band": 7776.5328701171875,
      "max_band": 11193.192895507811,
      "line_status": 0,
      "timestamp": "2018-03-22T02:30:00.000Z"
  },
  {
      "original_value": 10195.0308,
      "forecasted_value": null,
      "min_band": 8651.97808984375,
      "max_band": 11551.504846679687,
      "line_status": 0,
      "timestamp": "2018-03-22T03:30:00.000Z"
  },
  {
      "original_value": 10640.5341,
      "forecasted_value": null,
      "min_band": 8132.793768554688,
      "max_band": 11699.262860351562,
      "line_status": 0,
      "timestamp": "2018-03-22T04:30:00.000Z"
  },
  {
      "original_value": 11085.5296,
      "forecasted_value": null,
      "min_band": 9861.289431640625,
      "max_band": 13137.037303710937,
      "line_status": 0,
      "timestamp": "2018-03-22T05:30:00.000Z"
  },
  {
      "original_value": 11828.8144,
      "forecasted_value": null,
      "min_band": 11081.77103125,
      "max_band": 13112.318664062499,
      "line_status": 0,
      "timestamp": "2018-03-22T06:30:00.000Z"
  },
  {
      "original_value": 12008.301,
      "forecasted_value": null,
      "min_band": 10985.335489257812,
      "max_band": 13825.709772460938,
      "line_status": 0,
      "timestamp": "2018-03-22T07:30:00.000Z"
  },
  {
      "original_value": 12603.0105,
      "forecasted_value": null,
      "min_band": 10677.813780273438,
      "max_band": 13627.498342773439,
      "line_status": 0,
      "timestamp": "2018-03-22T08:30:00.000Z"
  },
  {
      "original_value": 13210.3421,
      "forecasted_value": null,
      "min_band": 10371.186922851562,
      "max_band": 13882.478895507811,
      "line_status": 0,
      "timestamp": "2018-03-22T09:30:00.000Z"
  },
  {
      "original_value": 12989.5413,
      "forecasted_value": null,
      "min_band": 10715.076102539062,
      "max_band": 14380.28381738281,
      "line_status": 0,
      "timestamp": "2018-03-22T10:30:00.000Z"
  },
  {
      "original_value": 12978.9872,
      "forecasted_value": null,
      "min_band": 11349.001494140626,
      "max_band": 14263.776275390626,
      "line_status": 0,
      "timestamp": "2018-03-22T11:30:00.000Z"
  },
  {
      "original_value": 13136.2016,
      "forecasted_value": null,
      "min_band": 11490.971646484375,
      "max_band": 14987.970201171875,
      "line_status": 0,
      "timestamp": "2018-03-22T12:30:00.000Z"
  },
  {
      "original_value": 13365.2773,
      "forecasted_value": null,
      "min_band": 11833.785001953125,
      "max_band": 14834.70641015625,
      "line_status": 0,
      "timestamp": "2018-03-22T13:30:00.000Z"
  },
  {
      "original_value": 13607.2312,
      "forecasted_value": null,
      "min_band": 11847.6249453125,
      "max_band": 15691.177708007812,
      "line_status": 0,
      "timestamp": "2018-03-22T14:30:00.000Z"
  },
  {
      "original_value": 13528.933,
      "forecasted_value": null,
      "min_band": 11293.198440429687,
      "max_band": 14994.757521484375,
      "line_status": 0,
      "timestamp": "2018-03-22T15:30:00.000Z"
  },
  {
      "original_value": 12975.1185,
      "forecasted_value": null,
      "min_band": 11536.456674804687,
      "max_band": 14804.134470703126,
      "line_status": 0,
      "timestamp": "2018-03-22T16:30:00.000Z"
  },
  {
      "original_value": 12430.7874,
      "forecasted_value": null,
      "min_band": 10713.224958984376,
      "max_band": 14455.520958007812,
      "line_status": 0,
      "timestamp": "2018-03-22T17:30:00.000Z"
  },
  {
      "original_value": 11399.733,
      "forecasted_value": null,
      "min_band": 10538.556508789063,
      "max_band": 13544.039938476562,
      "line_status": 0,
      "timestamp": "2018-03-22T18:30:00.000Z"
  },
  {
      "original_value": 10792.6403,
      "forecasted_value": null,
      "min_band": 8611.526446289063,
      "max_band": 12616.044880859374,
      "line_status": 0,
      "timestamp": "2018-03-22T19:30:00.000Z"
  },
  {
      "original_value": 9635.4275,
      "forecasted_value": null,
      "min_band": 7726.571405273437,
      "max_band": 11676.40667773437,
      "line_status": 0,
      "timestamp": "2018-03-22T20:30:00.000Z"
  },
  {
      "original_value": 9213.0528,
      "forecasted_value": null,
      "min_band": 8077.74578515625,
      "max_band": 11798.866222656248,
      "line_status": 0,
      "timestamp": "2018-03-22T21:30:00.000Z"
  },
  {
      "original_value": 9128.0563,
      "forecasted_value": null,
      "min_band": 7266.131093261719,
      "max_band": 11876.008609374998,
      "line_status": 0,
      "timestamp": "2018-03-22T22:30:00.000Z"
  },
  {
      "original_value": 9284.4177,
      "forecasted_value": null,
      "min_band": 7484.799381347656,
      "max_band": 10061.728512695312,
      "line_status": 0,
      "timestamp": "2018-03-22T23:30:00.000Z"
  },
  {
      "original_value": 9361.2438,
      "forecasted_value": null,
      "min_band": 7475.3717055664065,
      "max_band": 10238.959517578123,
      "line_status": 0,
      "timestamp": "2018-03-23T00:30:00.000Z"
  },
  {
      "original_value": 9500.8084,
      "forecasted_value": null,
      "min_band": 8163.477747558594,
      "max_band": 11468.780170898437,
      "line_status": 0,
      "timestamp": "2018-03-23T01:30:00.000Z"
  },
  {
      "original_value": 9887.3973,
      "forecasted_value": null,
      "min_band": 8414.038115234374,
      "max_band": 11425.280720703126,
      "line_status": 0,
      "timestamp": "2018-03-23T02:30:00.000Z"
  },
  {
      "original_value": 10144.0677,
      "forecasted_value": null,
      "min_band": 7701.848096679688,
      "max_band": 11613.400982421874,
      "line_status": 0,
      "timestamp": "2018-03-23T03:30:00.000Z"
  },
  {
      "original_value": 10935.8748,
      "forecasted_value": null,
      "min_band": 8603.249321289062,
      "max_band": 12315.663387695313,
      "line_status": 0,
      "timestamp": "2018-03-23T04:30:00.000Z"
  },
  {
      "original_value": 11166.6514,
      "forecasted_value": null,
      "min_band": 10348.312005859374,
      "max_band": 12992.214701171873,
      "line_status": 0,
      "timestamp": "2018-03-23T05:30:00.000Z"
  },
  {
      "original_value": 11856.4316,
      "forecasted_value": null,
      "min_band": 9930.165524414064,
      "max_band": 13353.388958007812,
      "line_status": 0,
      "timestamp": "2018-03-23T06:30:00.000Z"
  },
  {
      "original_value": 12041.6519,
      "forecasted_value": null,
      "min_band": 10731.85056640625,
      "max_band": 13800.178779296875,
      "line_status": 0,
      "timestamp": "2018-03-23T07:30:00.000Z"
  },
  {
      "original_value": 12667.3216,
      "forecasted_value": null,
      "min_band": 10449.981639648437,
      "max_band": 13354.610323242185,
      "line_status": 0,
      "timestamp": "2018-03-23T08:30:00.000Z"
  },
  {
      "original_value": 12368.0804,
      "forecasted_value": null,
      "min_band": 11352.429243164062,
      "max_band": 14105.514211914062,
      "line_status": 0,
      "timestamp": "2018-03-23T09:30:00.000Z"
  },
  {
      "original_value": 12638.6143,
      "forecasted_value": null,
      "min_band": 10706.466685546875,
      "max_band": 14565.658007812497,
      "line_status": 0,
      "timestamp": "2018-03-23T10:30:00.000Z"
  },
  {
      "original_value": 12396.1659,
      "forecasted_value": null,
      "min_band": 11503.75026171875,
      "max_band": 14370.332113281249,
      "line_status": 0,
      "timestamp": "2018-03-23T11:30:00.000Z"
  },
  {
      "original_value": 13004.5546,
      "forecasted_value": null,
      "min_band": 11387.984922851561,
      "max_band": 15197.3312265625,
      "line_status": 0,
      "timestamp": "2018-03-23T12:30:00.000Z"
  },
  {
      "original_value": 13367.8221,
      "forecasted_value": null,
      "min_band": 11025.40184765625,
      "max_band": 15579.854178710937,
      "line_status": 0,
      "timestamp": "2018-03-23T13:30:00.000Z"
  },
  {
      "original_value": 13420.7217,
      "forecasted_value": null,
      "min_band": 11752.3999921875,
      "max_band": 17051.851082031244,
      "line_status": 0,
      "timestamp": "2018-03-23T14:30:00.000Z"
  },
  {
      "original_value": 13612.2562,
      "forecasted_value": null,
      "min_band": 11782.103520507811,
      "max_band": 14749.739732421875,
      "line_status": 0,
      "timestamp": "2018-03-23T15:30:00.000Z"
  },
  {
      "original_value": 12970.5497,
      "forecasted_value": null,
      "min_band": 11224.23733984375,
      "max_band": 15005.91360546875,
      "line_status": 0,
      "timestamp": "2018-03-23T16:30:00.000Z"
  },
  {
      "original_value": 12465.8897,
      "forecasted_value": null,
      "min_band": 10989.560592773436,
      "max_band": 14016.150165039062,
      "line_status": 0,
      "timestamp": "2018-03-23T17:30:00.000Z"
  },
  {
      "original_value": 11561.834,
      "forecasted_value": null,
      "min_band": 9545.512932617188,
      "max_band": 13483.677139648435,
      "line_status": 0,
      "timestamp": "2018-03-23T18:30:00.000Z"
  },
  {
      "original_value": 10679.2703,
      "forecasted_value": null,
      "min_band": 8455.309920898439,
      "max_band": 12265.751935546874,
      "line_status": 0,
      "timestamp": "2018-03-23T19:30:00.000Z"
  },
  {
      "original_value": 9722.4841,
      "forecasted_value": null,
      "min_band": 8740.250416015626,
      "max_band": 12237.35327734375,
      "line_status": 0,
      "timestamp": "2018-03-23T20:30:00.000Z"
  },
  {
      "original_value": 9451.5739,
      "forecasted_value": null,
      "min_band": 7934.0746640625,
      "max_band": 11160.789520507813,
      "line_status": 0,
      "timestamp": "2018-03-23T21:30:00.000Z"
  },
  {
      "original_value": 9379.6557,
      "forecasted_value": null,
      "min_band": 6809.700304687501,
      "max_band": 10709.910752929689,
      "line_status": 0,
      "timestamp": "2018-03-23T22:30:00.000Z"
  },
  {
      "original_value": 9615.3864,
      "forecasted_value": null,
      "min_band": 8209.701373535157,
      "max_band": 11375.4912265625,
      "line_status": 0,
      "timestamp": "2018-03-23T23:30:00.000Z"
  },
  {
      "original_value": 9095.9066,
      "forecasted_value": null,
      "min_band": 7473.6092934570315,
      "max_band": 11467.788811523436,
      "line_status": 0,
      "timestamp": "2018-03-24T00:30:00.000Z"
  },
  {
      "original_value": 9520.4397,
      "forecasted_value": null,
      "min_band": 7467.561627929687,
      "max_band": 10878.9834296875,
      "line_status": 0,
      "timestamp": "2018-03-24T01:30:00.000Z"
  },
  {
      "original_value": 9844.4533,
      "forecasted_value": null,
      "min_band": 7554.396754882812,
      "max_band": 11014.000333984375,
      "line_status": 0,
      "timestamp": "2018-03-24T02:30:00.000Z"
  },
  {
      "original_value": 10182.4229,
      "forecasted_value": null,
      "min_band": 8326.595161132813,
      "max_band": 11592.18136425781,
      "line_status": 0,
      "timestamp": "2018-03-24T03:30:00.000Z"
  },
  {
      "original_value": 10766.5931,
      "forecasted_value": null,
      "min_band": 9110.882208007813,
      "max_band": 12071.591901367186,
      "line_status": 0,
      "timestamp": "2018-03-24T04:30:00.000Z"
  },
  {
      "original_value": 11265.3775,
      "forecasted_value": null,
      "min_band": 9906.776426757813,
      "max_band": 12775.079146484375,
      "line_status": 0,
      "timestamp": "2018-03-24T05:30:00.000Z"
  },
  {
      "original_value": 11355.5201,
      "forecasted_value": null,
      "min_band": 10176.677326171875,
      "max_band": 13395.951190429687,
      "line_status": 0,
      "timestamp": "2018-03-24T06:30:00.000Z"
  },
  {
      "original_value": 11936.0067,
      "forecasted_value": null,
      "min_band": 10516.184604492188,
      "max_band": 13612.68439160156,
      "line_status": 0,
      "timestamp": "2018-03-24T07:30:00.000Z"
  },
  {
      "original_value": 12813.7744,
      "forecasted_value": null,
      "min_band": 10724.270282226562,
      "max_band": 13857.806044921874,
      "line_status": 0,
      "timestamp": "2018-03-24T08:30:00.000Z"
  },
  {
      "original_value": 12410.0322,
      "forecasted_value": null,
      "min_band": 11539.697751953125,
      "max_band": 14096.172216796875,
      "line_status": 0,
      "timestamp": "2018-03-24T09:30:00.000Z"
  },
  {
      "original_value": 12426.5715,
      "forecasted_value": null,
      "min_band": 11550.381985351563,
      "max_band": 13737.433446289062,
      "line_status": 0,
      "timestamp": "2018-03-24T10:30:00.000Z"
  },
  {
      "original_value": 12394.4565,
      "forecasted_value": null,
      "min_band": 11440.576938476563,
      "max_band": 14716.11026171875,
      "line_status": 0,
      "timestamp": "2018-03-24T11:30:00.000Z"
  },
  {
      "original_value": 12897.7013,
      "forecasted_value": null,
      "min_band": 10920.524934570312,
      "max_band": 15167.150541992185,
      "line_status": 0,
      "timestamp": "2018-03-24T12:30:00.000Z"
  },
  {
      "original_value": 13482.7319,
      "forecasted_value": null,
      "min_band": 11701.514494140625,
      "max_band": 14928.485669921874,
      "line_status": 0,
      "timestamp": "2018-03-24T13:30:00.000Z"
  },
  {
      "original_value": 13498.7985,
      "forecasted_value": null,
      "min_band": 11022.305615234374,
      "max_band": 14832.30248828125,
      "line_status": 0,
      "timestamp": "2018-03-24T14:30:00.000Z"
  },
  {
      "original_value": 13396.2185,
      "forecasted_value": null,
      "min_band": 11576.763632812499,
      "max_band": 14255.37709375,
      "line_status": 0,
      "timestamp": "2018-03-24T15:30:00.000Z"
  },
  {
      "original_value": 13119.1516,
      "forecasted_value": null,
      "min_band": 11531.991072265626,
      "max_band": 14660.391752929687,
      "line_status": 0,
      "timestamp": "2018-03-24T16:30:00.000Z"
  },
  {
      "original_value": 12432.1026,
      "forecasted_value": null,
      "min_band": 10607.31721875,
      "max_band": 14470.954217773437,
      "line_status": 0,
      "timestamp": "2018-03-24T17:30:00.000Z"
  },
  {
      "original_value": 11372.5114,
      "forecasted_value": null,
      "min_band": 10235.483915039062,
      "max_band": 13508.993214843747,
      "line_status": 0,
      "timestamp": "2018-03-24T18:30:00.000Z"
  },
  {
      "original_value": 10566.7209,
      "forecasted_value": null,
      "min_band": 8749.779668945313,
      "max_band": 12653.37432421875,
      "line_status": 0,
      "timestamp": "2018-03-24T19:30:00.000Z"
  },
  {
      "original_value": 9976.6922,
      "forecasted_value": null,
      "min_band": 7306.905949707032,
      "max_band": 11908.159482421874,
      "line_status": 0,
      "timestamp": "2018-03-24T20:30:00.000Z"
  },
  {
      "original_value": 9337.0484,
      "forecasted_value": null,
      "min_band": 7667.511744628906,
      "max_band": 10955.710865234374,
      "line_status": 0,
      "timestamp": "2018-03-24T21:30:00.000Z"
  },
  {
      "original_value": 9309.3766,
      "forecasted_value": null,
      "min_band": 7097.253592773437,
      "max_band": 10687.49375390625,
      "line_status": 0,
      "timestamp": "2018-03-24T22:30:00.000Z"
  },
  {
      "original_value": 9497.2959,
      "forecasted_value": null,
      "min_band": 8092.627206054688,
      "max_band": 11117.326272460934,
      "line_status": 0,
      "timestamp": "2018-03-24T23:30:00.000Z"
  },
  {
      "original_value": 9187.9592,
      "forecasted_value": null,
      "min_band": 8008.1695932617195,
      "max_band": 10877.9021171875,
      "line_status": 0,
      "timestamp": "2018-03-25T00:30:00.000Z"
  },
  {
      "original_value": 9303.7434,
      "forecasted_value": null,
      "min_band": 8118.307970703125,
      "max_band": 10852.24409375,
      "line_status": 0,
      "timestamp": "2018-03-25T01:30:00.000Z"
  },
  {
      "original_value": 9969.5662,
      "forecasted_value": null,
      "min_band": 8273.069500976562,
      "max_band": 10759.9978046875,
      "line_status": 0,
      "timestamp": "2018-03-25T02:30:00.000Z"
  },
  {
      "original_value": 10153.4784,
      "forecasted_value": null,
      "min_band": 8154.153113281251,
      "max_band": 10947.349538085937,
      "line_status": 0,
      "timestamp": "2018-03-25T03:30:00.000Z"
  },
  {
      "original_value": 10537.6892,
      "forecasted_value": null,
      "min_band": 9383.096665039064,
      "max_band": 11812.480127929688,
      "line_status": 0,
      "timestamp": "2018-03-25T04:30:00.000Z"
  },
  {
      "original_value": 11163.1162,
      "forecasted_value": null,
      "min_band": 9716.96050390625,
      "max_band": 12875.990863281251,
      "line_status": 0,
      "timestamp": "2018-03-25T05:30:00.000Z"
  },
  {
      "original_value": 11698.8703,
      "forecasted_value": null,
      "min_band": 10738.628130859373,
      "max_band": 13055.660578125,
      "line_status": 0,
      "timestamp": "2018-03-25T06:30:00.000Z"
  },
  {
      "original_value": 12154.8847,
      "forecasted_value": null,
      "min_band": 11023.91459375,
      "max_band": 13445.974705078124,
      "line_status": 0,
      "timestamp": "2018-03-25T07:30:00.000Z"
  },
  {
      "original_value": 12613.6179,
      "forecasted_value": null,
      "min_band": 10904.717203125,
      "max_band": 13231.851564453124,
      "line_status": 0,
      "timestamp": "2018-03-25T08:30:00.000Z"
  },
  {
      "original_value": 12038.0774,
      "forecasted_value": null,
      "min_band": 11047.114962890624,
      "max_band": 14278.886814453124,
      "line_status": 0,
      "timestamp": "2018-03-25T09:30:00.000Z"
  },
  {
      "original_value": 12437.6606,
      "forecasted_value": null,
      "min_band": 10823.261590820312,
      "max_band": 13877.868806640625,
      "line_status": 0,
      "timestamp": "2018-03-25T10:30:00.000Z"
  },
  {
      "original_value": 12543.9322,
      "forecasted_value": null,
      "min_band": 11602.296160156251,
      "max_band": 14533.535872070312,
      "line_status": 0,
      "timestamp": "2018-03-25T11:30:00.000Z"
  },
  {
      "original_value": 12589.7287,
      "forecasted_value": null,
      "min_band": 11283.575837890625,
      "max_band": 14226.307637695312,
      "line_status": 0,
      "timestamp": "2018-03-25T12:30:00.000Z"
  },
  {
      "original_value": 13269.4959,
      "forecasted_value": null,
      "min_band": 11919.093600585937,
      "max_band": 14607.555456054688,
      "line_status": 0,
      "timestamp": "2018-03-25T13:30:00.000Z"
  },
  {
      "original_value": 13827.564,
      "forecasted_value": null,
      "min_band": 11737.044901367188,
      "max_band": 14737.677836914063,
      "line_status": 0,
      "timestamp": "2018-03-25T14:30:00.000Z"
  },
  {
      "original_value": 13287.9393,
      "forecasted_value": null,
      "min_band": 10902.273103515625,
      "max_band": 14072.383828125001,
      "line_status": 0,
      "timestamp": "2018-03-25T15:30:00.000Z"
  },
  {
      "original_value": 13020.9621,
      "forecasted_value": null,
      "min_band": 10357.196163085937,
      "max_band": 15215.253327148435,
      "line_status": 0,
      "timestamp": "2018-03-25T16:30:00.000Z"
  },
  {
      "original_value": 12359.2633,
      "forecasted_value": null,
      "min_band": 11196.276505859374,
      "max_band": 14500.978498046874,
      "line_status": 0,
      "timestamp": "2018-03-25T17:30:00.000Z"
  },
  {
      "original_value": 11798.8948,
      "forecasted_value": null,
      "min_band": 10103.059810546876,
      "max_band": 13426.906029296873,
      "line_status": 0,
      "timestamp": "2018-03-25T18:30:00.000Z"
  },
  {
      "original_value": 10918.8635,
      "forecasted_value": null,
      "min_band": 9364.878326171875,
      "max_band": 12301.334104492187,
      "line_status": 0,
      "timestamp": "2018-03-25T19:30:00.000Z"
  },
  {
      "original_value": 9821.2488,
      "forecasted_value": null,
      "min_band": 7925.734201171876,
      "max_band": 11303.529890625001,
      "line_status": 0,
      "timestamp": "2018-03-25T20:30:00.000Z"
  },
  {
      "original_value": 9362.4191,
      "forecasted_value": null,
      "min_band": 7998.003452148438,
      "max_band": 10938.746078125,
      "line_status": 0,
      "timestamp": "2018-03-25T21:30:00.000Z"
  },
  {
      "original_value": 9285.0508,
      "forecasted_value": null,
      "min_band": 7650.527860839844,
      "max_band": 10628.005862304688,
      "line_status": 0,
      "timestamp": "2018-03-25T22:30:00.000Z"
  },
  {
      "original_value": 9370.2915,
      "forecasted_value": null,
      "min_band": 7463.8319423828125,
      "max_band": 10727.981313476563,
      "line_status": 0,
      "timestamp": "2018-03-25T23:30:00.000Z"
  },
  {
      "original_value": 9172.9259,
      "forecasted_value": null,
      "min_band": 8203.652028320312,
      "max_band": 12064.909607421876,
      "line_status": 0,
      "timestamp": "2018-03-26T00:30:00.000Z"
  },
  {
      "original_value": 9465.026,
      "forecasted_value": null,
      "min_band": 7713.648799804687,
      "max_band": 10486.106673828124,
      "line_status": 0,
      "timestamp": "2018-03-26T01:30:00.000Z"
  },
  {
      "original_value": 10020.8255,
      "forecasted_value": null,
      "min_band": 7689.766641601563,
      "max_band": 10955.202054687501,
      "line_status": 0,
      "timestamp": "2018-03-26T02:30:00.000Z"
  },
  {
      "original_value": 10371.5851,
      "forecasted_value": null,
      "min_band": 8657.888981445312,
      "max_band": 11565.125827148438,
      "line_status": 0,
      "timestamp": "2018-03-26T03:30:00.000Z"
  },
  {
      "original_value": 10745.0059,
      "forecasted_value": null,
      "min_band": 8817.826124023437,
      "max_band": 12740.084457031247,
      "line_status": 0,
      "timestamp": "2018-03-26T04:30:00.000Z"
  },
  {
      "original_value": 11168.0089,
      "forecasted_value": null,
      "min_band": 10015.370109375,
      "max_band": 12590.324002929687,
      "line_status": 0,
      "timestamp": "2018-03-26T05:30:00.000Z"
  },
  {
      "original_value": 11581.3146,
      "forecasted_value": null,
      "min_band": 10171.458162109375,
      "max_band": 12842.579999023437,
      "line_status": 0,
      "timestamp": "2018-03-26T06:30:00.000Z"
  },
  {
      "original_value": 12084.3048,
      "forecasted_value": null,
      "min_band": 10555.500665039064,
      "max_band": 13166.833564453125,
      "line_status": 0,
      "timestamp": "2018-03-26T07:30:00.000Z"
  },
  {
      "original_value": 12649.183,
      "forecasted_value": null,
      "min_band": 10815.281864257813,
      "max_band": 13788.189458984372,
      "line_status": 0,
      "timestamp": "2018-03-26T08:30:00.000Z"
  },
  {
      "original_value": 12377.0126,
      "forecasted_value": null,
      "min_band": 11218.481772460937,
      "max_band": 13819.140908203126,
      "line_status": 0,
      "timestamp": "2018-03-26T09:30:00.000Z"
  },
  {
      "original_value": 12424.6144,
      "forecasted_value": null,
      "min_band": 11239.054913085936,
      "max_band": 14536.42333691406,
      "line_status": 0,
      "timestamp": "2018-03-26T10:30:00.000Z"
  },
  {
      "original_value": 12724.7944,
      "forecasted_value": null,
      "min_band": 11449.318672851563,
      "max_band": 14110.522092773437,
      "line_status": 0,
      "timestamp": "2018-03-26T11:30:00.000Z"
  },
  {
      "original_value": 12840.4555,
      "forecasted_value": null,
      "min_band": 11637.819774414062,
      "max_band": 14636.790946289062,
      "line_status": 0,
      "timestamp": "2018-03-26T12:30:00.000Z"
  },
  {
      "original_value": 13355.2522,
      "forecasted_value": null,
      "min_band": 11713.497245117187,
      "max_band": 14667.5891953125,
      "line_status": 0,
      "timestamp": "2018-03-26T13:30:00.000Z"
  },
  {
      "original_value": 13375.0817,
      "forecasted_value": null,
      "min_band": 11694.138975585938,
      "max_band": 14816.945527343749,
      "line_status": 0,
      "timestamp": "2018-03-26T14:30:00.000Z"
  },
  {
      "original_value": 13448.2699,
      "forecasted_value": null,
      "min_band": 11482.227490234374,
      "max_band": 14144.755545898435,
      "line_status": 0,
      "timestamp": "2018-03-26T15:30:00.000Z"
  },
  {
      "original_value": 13013.9054,
      "forecasted_value": null,
      "min_band": 11222.695940429687,
      "max_band": 15418.086385742185,
      "line_status": 0,
      "timestamp": "2018-03-26T16:30:00.000Z"
  },
  {
      "original_value": 12505.6389,
      "forecasted_value": null,
      "min_band": 11080.141170898438,
      "max_band": 13862.693395507813,
      "line_status": 0,
      "timestamp": "2018-03-26T17:30:00.000Z"
  },
  {
      "original_value": 11662.0811,
      "forecasted_value": null,
      "min_band": 10317.92408984375,
      "max_band": 13441.537310546873,
      "line_status": 0,
      "timestamp": "2018-03-26T18:30:00.000Z"
  },
  {
      "original_value": 10789.3934,
      "forecasted_value": null,
      "min_band": 9165.666233398439,
      "max_band": 12142.740744140625,
      "line_status": 0,
      "timestamp": "2018-03-26T19:30:00.000Z"
  },
  {
      "original_value": 9970.2916,
      "forecasted_value": null,
      "min_band": 8758.798756835937,
      "max_band": 11202.254440429688,
      "line_status": 0,
      "timestamp": "2018-03-26T20:30:00.000Z"
  },
  {
      "original_value": 9319.9016,
      "forecasted_value": null,
      "min_band": 8503.90709765625,
      "max_band": 11235.755819335936,
      "line_status": 0,
      "timestamp": "2018-03-26T21:30:00.000Z"
  },
  {
      "original_value": 9009.8001,
      "forecasted_value": null,
      "min_band": 7949.964953613282,
      "max_band": 10746.137287109374,
      "line_status": 0,
      "timestamp": "2018-03-26T22:30:00.000Z"
  },
  {
      "original_value": 9518.3503,
      "forecasted_value": null,
      "min_band": 8055.040285644532,
      "max_band": 11045.899072265624,
      "line_status": 0,
      "timestamp": "2018-03-26T23:30:00.000Z"
  },
  {
      "original_value": 9453.4524,
      "forecasted_value": null,
      "min_band": 8374.109636718751,
      "max_band": 11198.671291992187,
      "line_status": 0,
      "timestamp": "2018-03-27T00:30:00.000Z"
  },
  {
      "original_value": 9352.8501,
      "forecasted_value": null,
      "min_band": 7986.642604492187,
      "max_band": 10941.615517578124,
      "line_status": 0,
      "timestamp": "2018-03-27T01:30:00.000Z"
  },
  {
      "original_value": 9992.6692,
      "forecasted_value": null,
      "min_band": 8940.801694335938,
      "max_band": 11709.832734374997,
      "line_status": 0,
      "timestamp": "2018-03-27T02:30:00.000Z"
  },
  {
      "original_value": 10498.8782,
      "forecasted_value": null,
      "min_band": 9040.71694921875,
      "max_band": 12020.468393554685,
      "line_status": 0,
      "timestamp": "2018-03-27T03:30:00.000Z"
  },
  {
      "original_value": 10813.4646,
      "forecasted_value": null,
      "min_band": 9472.485961914062,
      "max_band": 12058.52916015625,
      "line_status": 0,
      "timestamp": "2018-03-27T04:30:00.000Z"
  },
  {
      "original_value": 11204.916,
      "forecasted_value": null,
      "min_band": 9903.417861328126,
      "max_band": 12779.131660156248,
      "line_status": 0,
      "timestamp": "2018-03-27T05:30:00.000Z"
  },
  {
      "original_value": 11648.89,
      "forecasted_value": null,
      "min_band": 9829.425169921875,
      "max_band": 13555.189557617186,
      "line_status": 0,
      "timestamp": "2018-03-27T06:30:00.000Z"
  },
  {
      "original_value": 12087.8867,
      "forecasted_value": null,
      "min_band": 10697.139560546875,
      "max_band": 13664.742381835937,
      "line_status": 0,
      "timestamp": "2018-03-27T07:30:00.000Z"
  },
  {
      "original_value": 12727.3252,
      "forecasted_value": null,
      "min_band": 10714.259536132813,
      "max_band": 13334.505009765626,
      "line_status": 0,
      "timestamp": "2018-03-27T08:30:00.000Z"
  },
  {
      "original_value": 13022.0455,
      "forecasted_value": null,
      "min_band": 11165.891837890626,
      "max_band": 14108.057141601563,
      "line_status": 0,
      "timestamp": "2018-03-27T09:30:00.000Z"
  },
  {
      "original_value": 12874.9753,
      "forecasted_value": null,
      "min_band": 10784.75783203125,
      "max_band": 13591.544600585938,
      "line_status": 0,
      "timestamp": "2018-03-27T10:30:00.000Z"
  },
  {
      "original_value": 12764.5613,
      "forecasted_value": null,
      "min_band": 11752.996431640624,
      "max_band": 14711.233792968747,
      "line_status": 0,
      "timestamp": "2018-03-27T11:30:00.000Z"
  },
  {
      "original_value": 12946.2529,
      "forecasted_value": null,
      "min_band": 11872.956398437498,
      "max_band": 14909.967929687498,
      "line_status": 0,
      "timestamp": "2018-03-27T12:30:00.000Z"
  },
  {
      "original_value": 13260.3258,
      "forecasted_value": null,
      "min_band": 11977.06916796875,
      "max_band": 15010.219997070311,
      "line_status": 0,
      "timestamp": "2018-03-27T13:30:00.000Z"
  },
  {
      "original_value": 13564.5627,
      "forecasted_value": null,
      "min_band": 11799.771041015625,
      "max_band": 14676.574839843748,
      "line_status": 0,
      "timestamp": "2018-03-27T14:30:00.000Z"
  },
  {
      "original_value": 13553.2207,
      "forecasted_value": null,
      "min_band": 11714.735484375,
      "max_band": 15577.49846484375,
      "line_status": 0,
      "timestamp": "2018-03-27T15:30:00.000Z"
  },
  {
      "original_value": 13313.1021,
      "forecasted_value": null,
      "min_band": 11175.26069921875,
      "max_band": 14469.433550781248,
      "line_status": 0,
      "timestamp": "2018-03-27T16:30:00.000Z"
  },
  {
      "original_value": 12677.3185,
      "forecasted_value": null,
      "min_band": 10901.499362304688,
      "max_band": 13939.878201171874,
      "line_status": 0,
      "timestamp": "2018-03-27T17:30:00.000Z"
  },
  {
      "original_value": 11783.4015,
      "forecasted_value": null,
      "min_band": 10801.643646484375,
      "max_band": 13464.299177734374,
      "line_status": 0,
      "timestamp": "2018-03-27T18:30:00.000Z"
  },
  {
      "original_value": 10395.8153,
      "forecasted_value": null,
      "min_band": 9128.99546875,
      "max_band": 12039.493846679688,
      "line_status": 0,
      "timestamp": "2018-03-27T19:30:00.000Z"
  },
  {
      "original_value": 9806.7256,
      "forecasted_value": null,
      "min_band": 8414.71081640625,
      "max_band": 10906.90083984375,
      "line_status": 0,
      "timestamp": "2018-03-27T20:30:00.000Z"
  },
  {
      "original_value": 9426.4238,
      "forecasted_value": null,
      "min_band": 7944.989400878906,
      "max_band": 11455.74308691406,
      "line_status": 0,
      "timestamp": "2018-03-27T21:30:00.000Z"
  },
  {
      "original_value": 9160.1977,
      "forecasted_value": null,
      "min_band": 7323.8082954101565,
      "max_band": 10639.254030273438,
      "line_status": 0,
      "timestamp": "2018-03-27T22:30:00.000Z"
  },
  {
      "original_value": 7965.6235,
      "forecasted_value": null,
      "min_band": 7826.762082519532,
      "max_band": 10893.278834960936,
      "line_status": 0,
      "timestamp": "2018-03-27T23:30:00.000Z"
  },
  {
      "original_value": 8081.2208,
      "forecasted_value": null,
      "min_band": 7640.157853027344,
      "max_band": 10750.852549804687,
      "line_status": 0,
      "timestamp": "2018-03-28T00:30:00.000Z"
  },
  {
      "original_value": 7926.0916,
      "forecasted_value": null,
      "min_band": 7343.844519042969,
      "max_band": 10881.051630859374,
      "line_status": 0,
      "timestamp": "2018-03-28T01:30:00.000Z"
  },
  {
      "original_value": 8348.8729,
      "forecasted_value": null,
      "min_band": 8252.148775390626,
      "max_band": 11306.069504882813,
      "line_status": 0,
      "timestamp": "2018-03-28T02:30:00.000Z"
  },
  {
      "original_value": 8555.1114,
      "forecasted_value": null,
      "min_band": 8298.244502929687,
      "max_band": 11125.404697265625,
      "line_status": 0,
      "timestamp": "2018-03-28T03:30:00.000Z"
  },
  {
      "original_value": 9021.7488,
      "forecasted_value": null,
      "min_band": 8826.34996484375,
      "max_band": 10982.159633789062,
      "line_status": 0,
      "timestamp": "2018-03-28T04:30:00.000Z"
  },
  {
      "original_value": 11090.7388,
      "forecasted_value": null,
      "min_band": 8871.58554296875,
      "max_band": 12141.802084960937,
      "line_status": 0,
      "timestamp": "2018-03-28T05:30:00.000Z"
  },
  {
      "original_value": 11608.4975,
      "forecasted_value": null,
      "min_band": 10739.289174804688,
      "max_band": 13533.913311523436,
      "line_status": 0,
      "timestamp": "2018-03-28T06:30:00.000Z"
  },
  {
      "original_value": 12084.8847,
      "forecasted_value": null,
      "min_band": 10685.035592773436,
      "max_band": 13957.126371093747,
      "line_status": 0,
      "timestamp": "2018-03-28T07:30:00.000Z"
  },
  {
      "original_value": 12419.7528,
      "forecasted_value": null,
      "min_band": 10486.665375,
      "max_band": 14310.577240234374,
      "line_status": 0,
      "timestamp": "2018-03-28T08:30:00.000Z"
  },
  {
      "original_value": 13030.8982,
      "forecasted_value": null,
      "min_band": 10707.230185546874,
      "max_band": 14292.117366210936,
      "line_status": 0,
      "timestamp": "2018-03-28T09:30:00.000Z"
  },
  {
      "original_value": 13177.9629,
      "forecasted_value": null,
      "min_band": 11114.992205078124,
      "max_band": 14345.91360546875,
      "line_status": 0,
      "timestamp": "2018-03-28T10:30:00.000Z"
  },
  {
      "original_value": 13106.8824,
      "forecasted_value": null,
      "min_band": 11970.875607421875,
      "max_band": 16334.96481640625,
      "line_status": 0,
      "timestamp": "2018-03-28T11:30:00.000Z"
  },
  {
      "original_value": 12860.3119,
      "forecasted_value": null,
      "min_band": 11743.308814453125,
      "max_band": 15266.654827148439,
      "line_status": 0,
      "timestamp": "2018-03-28T12:30:00.000Z"
  },
  {
      "original_value": 13226.2859,
      "forecasted_value": null,
      "min_band": 11473.348873046874,
      "max_band": 15115.122129882811,
      "line_status": 0,
      "timestamp": "2018-03-28T13:30:00.000Z"
  },
  {
      "original_value": 13549.2562,
      "forecasted_value": null,
      "min_band": 11777.175614257812,
      "max_band": 15102.39837109375,
      "line_status": 0,
      "timestamp": "2018-03-28T14:30:00.000Z"
  },
  {
      "original_value": 13488.7516,
      "forecasted_value": null,
      "min_band": 11826.18843359375,
      "max_band": 15124.286563476562,
      "line_status": 0,
      "timestamp": "2018-03-28T15:30:00.000Z"
  },
  {
      "original_value": 12960.0881,
      "forecasted_value": null,
      "min_band": 11368.5220390625,
      "max_band": 15187.442856445312,
      "line_status": 0,
      "timestamp": "2018-03-28T16:30:00.000Z"
  },
  {
      "original_value": 12276.4752,
      "forecasted_value": null,
      "min_band": 11160.877576171875,
      "max_band": 14408.50397265625,
      "line_status": 0,
      "timestamp": "2018-03-28T17:30:00.000Z"
  },
  {
      "original_value": 11544.4885,
      "forecasted_value": null,
      "min_band": 9792.000359375,
      "max_band": 13464.551657226562,
      "line_status": 0,
      "timestamp": "2018-03-28T18:30:00.000Z"
  },
  {
      "original_value": 10822.0144,
      "forecasted_value": null,
      "min_band": 8573.476655273438,
      "max_band": 12067.897979492185,
      "line_status": 0,
      "timestamp": "2018-03-28T19:30:00.000Z"
  },
  {
      "original_value": 9965.1112,
      "forecasted_value": null,
      "min_band": 7745.024493164063,
      "max_band": 12305.35239160156,
      "line_status": 0,
      "timestamp": "2018-03-28T20:30:00.000Z"
  },
  {
      "original_value": 9360.6219,
      "forecasted_value": null,
      "min_band": 6629.766870605469,
      "max_band": 11375.610178710936,
      "line_status": 0,
      "timestamp": "2018-03-28T21:30:00.000Z"
  },
  {
      "original_value": 9656.5532,
      "forecasted_value": null,
      "min_band": 6489.030720214844,
      "max_band": 10215.127679687499,
      "line_status": 0,
      "timestamp": "2018-03-28T22:30:00.000Z"
  },
  {
      "original_value": 9544.6132,
      "forecasted_value": null,
      "min_band": 6633.582568847657,
      "max_band": 10386.846876953123,
      "line_status": 0,
      "timestamp": "2018-03-28T23:30:00.000Z"
  },
  {
      "original_value": 9135.4489,
      "forecasted_value": null,
      "min_band": 7177.136892089844,
      "max_band": 10750.207023437499,
      "line_status": 0,
      "timestamp": "2018-03-29T00:30:00.000Z"
  },
  {
      "original_value": 9103.6894,
      "forecasted_value": null,
      "min_band": 7751.205558105468,
      "max_band": 10843.573177734374,
      "line_status": 0,
      "timestamp": "2018-03-29T01:30:00.000Z"
  },
  {
      "original_value": 10003.2823,
      "forecasted_value": null,
      "min_band": 7010.371728515625,
      "max_band": 10999.709144531249,
      "line_status": 0,
      "timestamp": "2018-03-29T02:30:00.000Z"
  },
  {
      "original_value": 10398.1524,
      "forecasted_value": null,
      "min_band": 8303.36403125,
      "max_band": 11747.997839843749,
      "line_status": 0,
      "timestamp": "2018-03-29T03:30:00.000Z"
  },
  {
      "original_value": 10786.2012,
      "forecasted_value": null,
      "min_band": 8372.492811523438,
      "max_band": 12088.02602441406,
      "line_status": 0,
      "timestamp": "2018-03-29T04:30:00.000Z"
  },
  {
      "original_value": 11165.7971,
      "forecasted_value": null,
      "min_band": 9161.720518554688,
      "max_band": 13003.743220703123,
      "line_status": 0,
      "timestamp": "2018-03-29T05:30:00.000Z"
  },
  {
      "original_value": 11583.9292,
      "forecasted_value": null,
      "min_band": 10096.430102539063,
      "max_band": 13499.681805664062,
      "line_status": 0,
      "timestamp": "2018-03-29T06:30:00.000Z"
  },
  {
      "original_value": 12328.9251,
      "forecasted_value": null,
      "min_band": 11175.52579296875,
      "max_band": 14306.709392578123,
      "line_status": 0,
      "timestamp": "2018-03-29T07:30:00.000Z"
  },
  {
      "original_value": 12500.1241,
      "forecasted_value": null,
      "min_band": 10602.287327148437,
      "max_band": 14280.171688476563,
      "line_status": 0,
      "timestamp": "2018-03-29T08:30:00.000Z"
  },
  {
      "original_value": 12571.4439,
      "forecasted_value": null,
      "min_band": 9760.805866210938,
      "max_band": 14735.887667968747,
      "line_status": 0,
      "timestamp": "2018-03-29T09:30:00.000Z"
  },
  {
      "original_value": 12528.6919,
      "forecasted_value": null,
      "min_band": 11160.570056640625,
      "max_band": 14208.03144921875,
      "line_status": 0,
      "timestamp": "2018-03-29T10:30:00.000Z"
  },
  {
      "original_value": 12553.2617,
      "forecasted_value": null,
      "min_band": 10948.148629882813,
      "max_band": 15217.917650390624,
      "line_status": 0,
      "timestamp": "2018-03-29T11:30:00.000Z"
  },
  {
      "original_value": 12958.8683,
      "forecasted_value": null,
      "min_band": 11425.912954101563,
      "max_band": 14236.358415039063,
      "line_status": 0,
      "timestamp": "2018-03-29T12:30:00.000Z"
  },
  {
      "original_value": 13251.256,
      "forecasted_value": null,
      "min_band": 11966.099669921874,
      "max_band": 15598.802968749998,
      "line_status": 0,
      "timestamp": "2018-03-29T13:30:00.000Z"
  },
  {
      "original_value": 13585.5291,
      "forecasted_value": null,
      "min_band": 11832.3343515625,
      "max_band": 15052.638116210937,
      "line_status": 0,
      "timestamp": "2018-03-29T14:30:00.000Z"
  },
  {
      "original_value": 13680.9508,
      "forecasted_value": null,
      "min_band": 10791.039303710937,
      "max_band": 15990.72408691406,
      "line_status": 0,
      "timestamp": "2018-03-29T15:30:00.000Z"
  },
  {
      "original_value": 13075.6579,
      "forecasted_value": null,
      "min_band": 11275.112897460938,
      "max_band": 15403.194515624997,
      "line_status": 0,
      "timestamp": "2018-03-29T16:30:00.000Z"
  },
  {
      "original_value": 12426.4266,
      "forecasted_value": null,
      "min_band": 9773.965989257813,
      "max_band": 15046.631330078124,
      "line_status": 0,
      "timestamp": "2018-03-29T17:30:00.000Z"
  },
  {
      "original_value": 11465.1415,
      "forecasted_value": null,
      "min_band": 9758.093202148437,
      "max_band": 13119.575154296874,
      "line_status": 0,
      "timestamp": "2018-03-29T18:30:00.000Z"
  },
  {
      "original_value": 10526.962,
      "forecasted_value": null,
      "min_band": 8968.310652343751,
      "max_band": 12954.2766640625,
      "line_status": 0,
      "timestamp": "2018-03-29T19:30:00.000Z"
  },
  {
      "original_value": 9623.628,
      "forecasted_value": null,
      "min_band": 6967.781138183594,
      "max_band": 11617.802140624999,
      "line_status": 0,
      "timestamp": "2018-03-29T20:30:00.000Z"
  },
  {
      "original_value": 9447.6102,
      "forecasted_value": null,
      "min_band": 6673.751541503907,
      "max_band": 10611.861155273436,
      "line_status": 0,
      "timestamp": "2018-03-29T21:30:00.000Z"
  },
  {
      "original_value": 9367.5538,
      "forecasted_value": null,
      "min_band": 6603.326440429688,
      "max_band": 10627.61881738281,
      "line_status": 0,
      "timestamp": "2018-03-29T22:30:00.000Z"
  },
  {
      "original_value": 9388.391,
      "forecasted_value": null,
      "min_band": 5828.66693359375,
      "max_band": 11662.805420898436,
      "line_status": 0,
      "timestamp": "2018-03-29T23:30:00.000Z"
  },
  {
      "original_value": 9215.9082,
      "forecasted_value": null,
      "min_band": 7433.187076171875,
      "max_band": 11048.338388671873,
      "line_status": 0,
      "timestamp": "2018-03-30T00:30:00.000Z"
  },
  {
      "original_value": 9449.2177,
      "forecasted_value": null,
      "min_band": 7208.405410156251,
      "max_band": 11551.615414062497,
      "line_status": 0,
      "timestamp": "2018-03-30T01:30:00.000Z"
  },
  {
      "original_value": 9916.3851,
      "forecasted_value": null,
      "min_band": 7726.672576660157,
      "max_band": 11817.935374999995,
      "line_status": 0,
      "timestamp": "2018-03-30T02:30:00.000Z"
  },
  {
      "original_value": 10274.0861,
      "forecasted_value": null,
      "min_band": 8757.273025390625,
      "max_band": 12136.044288085937,
      "line_status": 0,
      "timestamp": "2018-03-30T03:30:00.000Z"
  },
  {
      "original_value": 10835.9318,
      "forecasted_value": null,
      "min_band": 8525.991760742188,
      "max_band": 12288.512958984375,
      "line_status": 0,
      "timestamp": "2018-03-30T04:30:00.000Z"
  },
  {
      "original_value": 11341.7224,
      "forecasted_value": null,
      "min_band": 9892.458778320311,
      "max_band": 13075.534541992187,
      "line_status": 0,
      "timestamp": "2018-03-30T05:30:00.000Z"
  },
  {
      "original_value": 11545.1352,
      "forecasted_value": null,
      "min_band": 10608.91902734375,
      "max_band": 13406.966291992187,
      "line_status": 0,
      "timestamp": "2018-03-30T06:30:00.000Z"
  },
  {
      "original_value": 11956.1109,
      "forecasted_value": null,
      "min_band": 10683.548916992188,
      "max_band": 13489.69265722656,
      "line_status": 0,
      "timestamp": "2018-03-30T07:30:00.000Z"
  },
  {
      "original_value": 12671.0415,
      "forecasted_value": null,
      "min_band": 10870.951232421876,
      "max_band": 14133.557411132813,
      "line_status": 0,
      "timestamp": "2018-03-30T08:30:00.000Z"
  },
  {
      "original_value": 13040.3182,
      "forecasted_value": null,
      "min_band": 10793.288528320312,
      "max_band": 13935.911243164062,
      "line_status": 0,
      "timestamp": "2018-03-30T09:30:00.000Z"
  },
  {
      "original_value": 12926.1913,
      "forecasted_value": null,
      "min_band": 11610.558200195312,
      "max_band": 14014.441141601563,
      "line_status": 0,
      "timestamp": "2018-03-30T10:30:00.000Z"
  },
  {
      "original_value": 12912.556,
      "forecasted_value": null,
      "min_band": 10950.371041992188,
      "max_band": 14410.599234375,
      "line_status": 0,
      "timestamp": "2018-03-30T11:30:00.000Z"
  },
  {
      "original_value": 12789.2068,
      "forecasted_value": null,
      "min_band": 11022.932568359376,
      "max_band": 15312.521998046874,
      "line_status": 0,
      "timestamp": "2018-03-30T12:30:00.000Z"
  },
  {
      "original_value": 13332.0192,
      "forecasted_value": null,
      "min_band": 11716.309724609377,
      "max_band": 14679.733064453125,
      "line_status": 0,
      "timestamp": "2018-03-30T13:30:00.000Z"
  },
  {
      "original_value": 13577.7537,
      "forecasted_value": null,
      "min_band": 11568.21751171875,
      "max_band": 15194.61720800781,
      "line_status": 0,
      "timestamp": "2018-03-30T14:30:00.000Z"
  },
  {
      "original_value": 13632.0842,
      "forecasted_value": null,
      "min_band": 11422.722985351564,
      "max_band": 14577.603677734374,
      "line_status": 0,
      "timestamp": "2018-03-30T15:30:00.000Z"
  },
  {
      "original_value": 13124.1974,
      "forecasted_value": null,
      "min_band": 11370.564066406248,
      "max_band": 14681.608703124999,
      "line_status": 0,
      "timestamp": "2018-03-30T16:30:00.000Z"
  },
  {
      "original_value": 12651.6738,
      "forecasted_value": null,
      "min_band": 11283.693692382813,
      "max_band": 14149.234942382811,
      "line_status": 0,
      "timestamp": "2018-03-30T17:30:00.000Z"
  },
  {
      "original_value": 11499.2826,
      "forecasted_value": null,
      "min_band": 10603.202829101561,
      "max_band": 13046.652466796875,
      "line_status": 0,
      "timestamp": "2018-03-30T18:30:00.000Z"
  },
  {
      "original_value": 10647.8883,
      "forecasted_value": null,
      "min_band": 9058.601918945313,
      "max_band": 12290.276013671875,
      "line_status": 0,
      "timestamp": "2018-03-30T19:30:00.000Z"
  },
  {
      "original_value": 9985.7652,
      "forecasted_value": null,
      "min_band": 8640.259336914063,
      "max_band": 11596.686887695312,
      "line_status": 0,
      "timestamp": "2018-03-30T20:30:00.000Z"
  },
  {
      "original_value": 9217.99,
      "forecasted_value": null,
      "min_band": 7699.888178222656,
      "max_band": 11042.56476171875,
      "line_status": 0,
      "timestamp": "2018-03-30T21:30:00.000Z"
  },
  {
      "original_value": 9342.0301,
      "forecasted_value": null,
      "min_band": 7255.092748535156,
      "max_band": 11210.120908203124,
      "line_status": 0,
      "timestamp": "2018-03-30T22:30:00.000Z"
  },
  {
      "original_value": 9237.4628,
      "forecasted_value": null,
      "min_band": 7098.1993437500005,
      "max_band": 10483.695301757813,
      "line_status": 0,
      "timestamp": "2018-03-30T23:30:00.000Z"
  },
  {
      "original_value": 9266.3963,
      "forecasted_value": null,
      "min_band": 7481.09669921875,
      "max_band": 11679.488189453125,
      "line_status": 0,
      "timestamp": "2018-03-31T00:30:00.000Z"
  },
  {
      "original_value": 9355.3089,
      "forecasted_value": null,
      "min_band": 8093.919265136718,
      "max_band": 11428.65520800781,
      "line_status": 0,
      "timestamp": "2018-03-31T01:30:00.000Z"
  },
  {
      "original_value": 10001.4523,
      "forecasted_value": null,
      "min_band": 7128.957279296876,
      "max_band": 10785.19746484375,
      "line_status": 0,
      "timestamp": "2018-03-31T02:30:00.000Z"
  },
  {
      "original_value": 10310.9344,
      "forecasted_value": null,
      "min_band": 8235.006199218751,
      "max_band": 11553.160721679687,
      "line_status": 0,
      "timestamp": "2018-03-31T03:30:00.000Z"
  },
  {
      "original_value": 10770.1903,
      "forecasted_value": null,
      "min_band": 8580.78893359375,
      "max_band": 12356.914994140623,
      "line_status": 0,
      "timestamp": "2018-03-31T04:30:00.000Z"
  },
  {
      "original_value": 11156.5616,
      "forecasted_value": null,
      "min_band": 9785.359084960939,
      "max_band": 13265.055079101561,
      "line_status": 0,
      "timestamp": "2018-03-31T05:30:00.000Z"
  },
  {
      "original_value": 11395.4763,
      "forecasted_value": null,
      "min_band": 10544.662251953125,
      "max_band": 13530.452629882811,
      "line_status": 0,
      "timestamp": "2018-03-31T06:30:00.000Z"
  },
  {
      "original_value": 12016.7936,
      "forecasted_value": null,
      "min_band": 10693.387463867186,
      "max_band": 13811.365811523438,
      "line_status": 0,
      "timestamp": "2018-03-31T07:30:00.000Z"
  },
  {
      "original_value": 12558.0486,
      "forecasted_value": null,
      "min_band": 11247.023538085938,
      "max_band": 13851.227837890625,
      "line_status": 0,
      "timestamp": "2018-03-31T08:30:00.000Z"
  },
  {
      "original_value": 12535.1257,
      "forecasted_value": null,
      "min_band": 10839.030828125,
      "max_band": 13697.900694335936,
      "line_status": 0,
      "timestamp": "2018-03-31T09:30:00.000Z"
  },
  {
      "original_value": 12468.4736,
      "forecasted_value": null,
      "min_band": 10947.58037890625,
      "max_band": 14020.706380859374,
      "line_status": 0,
      "timestamp": "2018-03-31T10:30:00.000Z"
  },
  {
      "original_value": 12424.6142,
      "forecasted_value": null,
      "min_band": 10902.313370117186,
      "max_band": 14522.921021484373,
      "line_status": 0,
      "timestamp": "2018-03-31T11:30:00.000Z"
  },
  {
      "original_value": 12923.3365,
      "forecasted_value": null,
      "min_band": 11861.839266601562,
      "max_band": 14637.417211914062,
      "line_status": 0,
      "timestamp": "2018-03-31T12:30:00.000Z"
  },
  {
      "original_value": 13518.0178,
      "forecasted_value": null,
      "min_band": 11619.537125976563,
      "max_band": 15370.320125,
      "line_status": 0,
      "timestamp": "2018-03-31T13:30:00.000Z"
  },
  {
      "original_value": 13588.1294,
      "forecasted_value": null,
      "min_band": 11078.372774414063,
      "max_band": 15062.300719726562,
      "line_status": 0,
      "timestamp": "2018-03-31T14:30:00.000Z"
  },
  {
      "original_value": 13453.1373,
      "forecasted_value": null,
      "min_band": 11439.982587890625,
      "max_band": 15409.500047851561,
      "line_status": 0,
      "timestamp": "2018-03-31T15:30:00.000Z"
  },
  {
      "original_value": 13194.1226,
      "forecasted_value": null,
      "min_band": 11253.78916796875,
      "max_band": 14465.409169921875,
      "line_status": 0,
      "timestamp": "2018-03-31T16:30:00.000Z"
  },
  {
      "original_value": 12347.2021,
      "forecasted_value": null,
      "min_band": 10983.2253828125,
      "max_band": 14251.274595703124,
      "line_status": 0,
      "timestamp": "2018-03-31T17:30:00.000Z"
  },
  {
      "original_value": 11702.1936,
      "forecasted_value": null,
      "min_band": 10286.005052734374,
      "max_band": 13516.322592773435,
      "line_status": 0,
      "timestamp": "2018-03-31T18:30:00.000Z"
  },
  {
      "original_value": 10638.3589,
      "forecasted_value": null,
      "min_band": 8535.44669921875,
      "max_band": 12306.808482421873,
      "line_status": 0,
      "timestamp": "2018-03-31T19:30:00.000Z"
  },
  {
      "original_value": 9683.8162,
      "forecasted_value": null,
      "min_band": 8436.383221679687,
      "max_band": 11771.153080078124,
      "line_status": 0,
      "timestamp": "2018-03-31T20:30:00.000Z"
  },
  {
      "original_value": 9511.1272,
      "forecasted_value": null,
      "min_band": 7020.379303222657,
      "max_band": 11254.466811523436,
      "line_status": 0,
      "timestamp": "2018-03-31T21:30:00.000Z"
  },
  {
      "original_value": 9279.0116,
      "forecasted_value": null,
      "min_band": 7841.029681640624,
      "max_band": 11077.860188476561,
      "line_status": 0,
      "timestamp": "2018-03-31T22:30:00.000Z"
  },
  {
      "original_value": 9490.6836,
      "forecasted_value": null,
      "min_band": 6797.470920898438,
      "max_band": 10659.4429453125,
      "line_status": 0,
      "timestamp": "2018-03-31T23:30:00.000Z"
  },
  {
      "original_value": 9497.0535,
      "forecasted_value": null,
      "min_band": 7626.9806601562495,
      "max_band": 10989.464477539062,
      "line_status": 0,
      "timestamp": "2018-04-01T00:30:00.000Z"
  },
  {
      "original_value": 9400.6189,
      "forecasted_value": null,
      "min_band": 7891.071812988281,
      "max_band": 10989.344532226562,
      "line_status": 0,
      "timestamp": "2018-04-01T01:30:00.000Z"
  },
  {
      "original_value": 10094.5657,
      "forecasted_value": null,
      "min_band": 8364.620227539062,
      "max_band": 11890.105236328123,
      "line_status": 0,
      "timestamp": "2018-04-01T02:30:00.000Z"
  },
  {
      "original_value": 10486.727,
      "forecasted_value": null,
      "min_band": 8975.906337890625,
      "max_band": 11471.05875878906,
      "line_status": 0,
      "timestamp": "2018-04-01T03:30:00.000Z"
  },
  {
      "original_value": 10680.2189,
      "forecasted_value": null,
      "min_band": 9378.607061523437,
      "max_band": 12303.923833007811,
      "line_status": 0,
      "timestamp": "2018-04-01T04:30:00.000Z"
  },
  {
      "original_value": 11268.9025,
      "forecasted_value": null,
      "min_band": 10377.689814453126,
      "max_band": 13004.593034179687,
      "line_status": 0,
      "timestamp": "2018-04-01T05:30:00.000Z"
  },
  {
      "original_value": 11533.1447,
      "forecasted_value": null,
      "min_band": 10566.179252929687,
      "max_band": 13350.55534765625,
      "line_status": 0,
      "timestamp": "2018-04-01T06:30:00.000Z"
  },
  {
      "original_value": 12317.8775,
      "forecasted_value": null,
      "min_band": 11135.26203515625,
      "max_band": 13816.035904296876,
      "line_status": 0,
      "timestamp": "2018-04-01T07:30:00.000Z"
  },
  {
      "original_value": 12754.7987,
      "forecasted_value": null,
      "min_band": 10845.078092773438,
      "max_band": 13891.90542675781,
      "line_status": 0,
      "timestamp": "2018-04-01T08:30:00.000Z"
  },
  {
      "original_value": 12683.429,
      "forecasted_value": null,
      "min_band": 11163.237489257812,
      "max_band": 13802.768499999998,
      "line_status": 0,
      "timestamp": "2018-04-01T09:30:00.000Z"
  },
  {
      "original_value": 12607.5393,
      "forecasted_value": null,
      "min_band": 11022.051654296874,
      "max_band": 13884.887006835937,
      "line_status": 0,
      "timestamp": "2018-04-01T10:30:00.000Z"
  },
  {
      "original_value": 12356.6298,
      "forecasted_value": null,
      "min_band": 11953.4150703125,
      "max_band": 14404.270619140625,
      "line_status": 0,
      "timestamp": "2018-04-01T11:30:00.000Z"
  },
  {
      "original_value": 12852.8166,
      "forecasted_value": null,
      "min_band": 11480.110770507814,
      "max_band": 14916.29773828125,
      "line_status": 0,
      "timestamp": "2018-04-01T12:30:00.000Z"
  },
  {
      "original_value": 13324.1411,
      "forecasted_value": null,
      "min_band": 11800.885125,
      "max_band": 14829.841046875,
      "line_status": 0,
      "timestamp": "2018-04-01T13:30:00.000Z"
  },
  {
      "original_value": 13749.1167,
      "forecasted_value": null,
      "min_band": 12223.057843749999,
      "max_band": 14977.279262695312,
      "line_status": 0,
      "timestamp": "2018-04-01T14:30:00.000Z"
  },
  {
      "original_value": 13328.0624,
      "forecasted_value": null,
      "min_band": 12087.242833007813,
      "max_band": 14883.524707031249,
      "line_status": 0,
      "timestamp": "2018-04-01T15:30:00.000Z"
  },
  {
      "original_value": 12985.7022,
      "forecasted_value": null,
      "min_band": 11489.072029296876,
      "max_band": 14012.904311523438,
      "line_status": 0,
      "timestamp": "2018-04-01T16:30:00.000Z"
  },
  {
      "original_value": 12689.6324,
      "forecasted_value": null,
      "min_band": 11147.036116210937,
      "max_band": 14083.184094726563,
      "line_status": 0,
      "timestamp": "2018-04-01T17:30:00.000Z"
  },
  {
      "original_value": 11610.9328,
      "forecasted_value": null,
      "min_band": 10065.930376953125,
      "max_band": 13501.22188671875,
      "line_status": 0,
      "timestamp": "2018-04-01T18:30:00.000Z"
  },
  {
      "original_value": 10711.0718,
      "forecasted_value": null,
      "min_band": 8996.775776367187,
      "max_band": 11869.778416015624,
      "line_status": 0,
      "timestamp": "2018-04-01T19:30:00.000Z"
  },
  {
      "original_value": 9743.2129,
      "forecasted_value": null,
      "min_band": 7861.909312988281,
      "max_band": 11796.328106445311,
      "line_status": 0,
      "timestamp": "2018-04-01T20:30:00.000Z"
  },
  {
      "original_value": 9292.584,
      "forecasted_value": null,
      "min_band": 7150.175112792968,
      "max_band": 11372.128171875,
      "line_status": 0,
      "timestamp": "2018-04-01T21:30:00.000Z"
  },
  {
      "original_value": 9247.8575,
      "forecasted_value": null,
      "min_band": 6925.032979492187,
      "max_band": 11504.342755859376,
      "line_status": 0,
      "timestamp": "2018-04-01T22:30:00.000Z"
  },
  {
      "original_value": 9348.7958,
      "forecasted_value": null,
      "min_band": 7629.683680664062,
      "max_band": 11217.426943359374,
      "line_status": 0,
      "timestamp": "2018-04-01T23:30:00.000Z"
  },
  {
      "original_value": 9071.1457,
      "forecasted_value": null,
      "min_band": 7360.569459960938,
      "max_band": 11042.701833007812,
      "line_status": 0,
      "timestamp": "2018-04-02T00:30:00.000Z"
  },
  {
      "original_value": 9269.2656,
      "forecasted_value": null,
      "min_band": 8333.70350390625,
      "max_band": 11264.240083984372,
      "line_status": 0,
      "timestamp": "2018-04-02T01:30:00.000Z"
  },
  {
      "original_value": 9843.7783,
      "forecasted_value": null,
      "min_band": 7740.390310546875,
      "max_band": 11494.086434570312,
      "line_status": 0,
      "timestamp": "2018-04-02T02:30:00.000Z"
  },
  {
      "original_value": 10436.159,
      "forecasted_value": null,
      "min_band": 8022.890016601563,
      "max_band": 11854.373659179688,
      "line_status": 0,
      "timestamp": "2018-04-02T03:30:00.000Z"
  },
  {
      "original_value": 10979.4916,
      "forecasted_value": null,
      "min_band": 8166.453570312499,
      "max_band": 11669.929556640625,
      "line_status": 0,
      "timestamp": "2018-04-02T04:30:00.000Z"
  },
  {
      "original_value": 11134.6165,
      "forecasted_value": null,
      "min_band": 9611.79841015625,
      "max_band": 12383.520948242187,
      "line_status": 0,
      "timestamp": "2018-04-02T05:30:00.000Z"
  },
  {
      "original_value": 11798.2597,
      "forecasted_value": null,
      "min_band": 10447.350999023438,
      "max_band": 12930.1337578125,
      "line_status": 0,
      "timestamp": "2018-04-02T06:30:00.000Z"
  },
  {
      "original_value": 12028.208,
      "forecasted_value": null,
      "min_band": 11019.50184375,
      "max_band": 13276.762844726562,
      "line_status": 0,
      "timestamp": "2018-04-02T07:30:00.000Z"
  },
  {
      "original_value": 12651.8183,
      "forecasted_value": null,
      "min_band": 11088.097703125,
      "max_band": 13554.735893554687,
      "line_status": 0,
      "timestamp": "2018-04-02T08:30:00.000Z"
  },
  {
      "original_value": 12754.9494,
      "forecasted_value": null,
      "min_band": 11021.209236328124,
      "max_band": 13782.589645507813,
      "line_status": 0,
      "timestamp": "2018-04-02T09:30:00.000Z"
  },
  {
      "original_value": 12936.5915,
      "forecasted_value": null,
      "min_band": 11355.197894531251,
      "max_band": 14390.913094726562,
      "line_status": 0,
      "timestamp": "2018-04-02T10:30:00.000Z"
  },
  {
      "original_value": 12867.9986,
      "forecasted_value": null,
      "min_band": 11715.527328125,
      "max_band": 14354.353374023438,
      "line_status": 0,
      "timestamp": "2018-04-02T11:30:00.000Z"
  },
  {
      "original_value": 12989.7476,
      "forecasted_value": null,
      "min_band": 11110.687873046874,
      "max_band": 15098.324499023434,
      "line_status": 0,
      "timestamp": "2018-04-02T12:30:00.000Z"
  },
  {
      "original_value": 13329.9097,
      "forecasted_value": null,
      "min_band": 11760.245473632813,
      "max_band": 14665.712707031249,
      "line_status": 0,
      "timestamp": "2018-04-02T13:30:00.000Z"
  },
  {
      "original_value": 13645.9193,
      "forecasted_value": null,
      "min_band": 11931.290793945313,
      "max_band": 14586.435413085937,
      "line_status": 0,
      "timestamp": "2018-04-02T14:30:00.000Z"
  },
  {
      "original_value": 13562.2659,
      "forecasted_value": null,
      "min_band": 11603.541044921876,
      "max_band": 14755.718751953125,
      "line_status": 0,
      "timestamp": "2018-04-02T15:30:00.000Z"
  },
  {
      "original_value": 13043.1827,
      "forecasted_value": null,
      "min_band": 11482.266768554688,
      "max_band": 14930.590736328126,
      "line_status": 0,
      "timestamp": "2018-04-02T16:30:00.000Z"
  },
  {
      "original_value": 12395.1242,
      "forecasted_value": null,
      "min_band": 11621.237357421875,
      "max_band": 14344.889814453123,
      "line_status": 0,
      "timestamp": "2018-04-02T17:30:00.000Z"
  },
  {
      "original_value": 11789.2242,
      "forecasted_value": null,
      "min_band": 10028.717764648438,
      "max_band": 13566.752587890624,
      "line_status": 0,
      "timestamp": "2018-04-02T18:30:00.000Z"
  },
  {
      "original_value": 10786.729,
      "forecasted_value": null,
      "min_band": 9184.568453124999,
      "max_band": 13254.058809570311,
      "line_status": 0,
      "timestamp": "2018-04-02T19:30:00.000Z"
  },
  {
      "original_value": 9679.0756,
      "forecasted_value": null,
      "min_band": 8217.767416015626,
      "max_band": 11365.469114257812,
      "line_status": 0,
      "timestamp": "2018-04-02T20:30:00.000Z"
  },
  {
      "original_value": 9537.2797,
      "forecasted_value": null,
      "min_band": 7829.3445390625,
      "max_band": 11776.65167675781,
      "line_status": 0,
      "timestamp": "2018-04-02T21:30:00.000Z"
  },
  {
      "original_value": 9423.1575,
      "forecasted_value": null,
      "min_band": 7405.558379882813,
      "max_band": 11792.597972656247,
      "line_status": 0,
      "timestamp": "2018-04-02T22:30:00.000Z"
  },
  {
      "original_value": 9287.6249,
      "forecasted_value": null,
      "min_band": 8045.805561035157,
      "max_band": 11853.953645507809,
      "line_status": 0,
      "timestamp": "2018-04-02T23:30:00.000Z"
  },
  {
      "original_value": 9301.298,
      "forecasted_value": null,
      "min_band": 7298.31878125,
      "max_band": 11439.639192382809,
      "line_status": 0,
      "timestamp": "2018-04-03T00:30:00.000Z"
  },
  {
      "original_value": 9488.5013,
      "forecasted_value": null,
      "min_band": 7702.649940917969,
      "max_band": 11000.751033203123,
      "line_status": 0,
      "timestamp": "2018-04-03T01:30:00.000Z"
  },
  {
      "original_value": 10029.2527,
      "forecasted_value": null,
      "min_band": 8644.85458984375,
      "max_band": 11330.72687109375,
      "line_status": 0,
      "timestamp": "2018-04-03T02:30:00.000Z"
  },
  {
      "original_value": 10180.5186,
      "forecasted_value": null,
      "min_band": 8278.836507812499,
      "max_band": 12185.150669921873,
      "line_status": 0,
      "timestamp": "2018-04-03T03:30:00.000Z"
  },
  {
      "original_value": 10921.6222,
      "forecasted_value": null,
      "min_band": 8401.900004882813,
      "max_band": 11605.937817382814,
      "line_status": 0,
      "timestamp": "2018-04-03T04:30:00.000Z"
  },
  {
      "original_value": 11092.54,
      "forecasted_value": null,
      "min_band": 10086.809599609374,
      "max_band": 13971.549555664062,
      "line_status": 0,
      "timestamp": "2018-04-03T05:30:00.000Z"
  },
  {
      "original_value": 11695.4094,
      "forecasted_value": null,
      "min_band": 10371.062897460937,
      "max_band": 13235.519497070312,
      "line_status": 0,
      "timestamp": "2018-04-03T06:30:00.000Z"
  },
  {
      "original_value": 12181.3302,
      "forecasted_value": null,
      "min_band": 11158.692452148438,
      "max_band": 13747.48079785156,
      "line_status": 0,
      "timestamp": "2018-04-03T07:30:00.000Z"
  },
  {
      "original_value": 12610.198,
      "forecasted_value": null,
      "min_band": 10513.60225390625,
      "max_band": 13659.824537109376,
      "line_status": 0,
      "timestamp": "2018-04-03T08:30:00.000Z"
  },
  {
      "original_value": 12397.9519,
      "forecasted_value": null,
      "min_band": 10921.094056640624,
      "max_band": 13911.023068359375,
      "line_status": 0,
      "timestamp": "2018-04-03T09:30:00.000Z"
  },
  {
      "original_value": 12585.4452,
      "forecasted_value": null,
      "min_band": 10915.379635742187,
      "max_band": 14407.090446289061,
      "line_status": 0,
      "timestamp": "2018-04-03T10:30:00.000Z"
  },
  {
      "original_value": 12420.0384,
      "forecasted_value": null,
      "min_band": 11434.909491210938,
      "max_band": 14420.140450195311,
      "line_status": 0,
      "timestamp": "2018-04-03T11:30:00.000Z"
  },
  {
      "original_value": 13304.4939,
      "forecasted_value": null,
      "min_band": 11500.923858398439,
      "max_band": 14806.592878906247,
      "line_status": 0,
      "timestamp": "2018-04-03T12:30:00.000Z"
  },
  {
      "original_value": 13508.0983,
      "forecasted_value": null,
      "min_band": 12034.95845703125,
      "max_band": 15041.270191406249,
      "line_status": 0,
      "timestamp": "2018-04-03T13:30:00.000Z"
  },
  {
      "original_value": 13672.2629,
      "forecasted_value": null,
      "min_band": 11558.607798828125,
      "max_band": 15288.622678710935,
      "line_status": 0,
      "timestamp": "2018-04-03T14:30:00.000Z"
  },
  {
      "original_value": 13427.9158,
      "forecasted_value": null,
      "min_band": 11530.211741210938,
      "max_band": 14892.377696289062,
      "line_status": 0,
      "timestamp": "2018-04-03T15:30:00.000Z"
  },
  {
      "original_value": 13013.2445,
      "forecasted_value": null,
      "min_band": 11476.180334960938,
      "max_band": 14144.543583984374,
      "line_status": 0,
      "timestamp": "2018-04-03T16:30:00.000Z"
  },
  {
      "original_value": 12211.3157,
      "forecasted_value": null,
      "min_band": 11260.898462890626,
      "max_band": 14104.69260253906,
      "line_status": 0,
      "timestamp": "2018-04-03T17:30:00.000Z"
  },
  {
      "original_value": 11649.7913,
      "forecasted_value": null,
      "min_band": 10080.809473632813,
      "max_band": 13015.242690429686,
      "line_status": 0,
      "timestamp": "2018-04-03T18:30:00.000Z"
  },
  {
      "original_value": 10799.5085,
      "forecasted_value": null,
      "min_band": 8694.7585078125,
      "max_band": 12300.66622753906,
      "line_status": 0,
      "timestamp": "2018-04-03T19:30:00.000Z"
  },
  {
      "original_value": 9638.1395,
      "forecasted_value": null,
      "min_band": 7774.129740234375,
      "max_band": 11371.860262695312,
      "line_status": 0,
      "timestamp": "2018-04-03T20:30:00.000Z"
  },
  {
      "original_value": 9348.0756,
      "forecasted_value": null,
      "min_band": 7021.278736816406,
      "max_band": 10885.858608398437,
      "line_status": 0,
      "timestamp": "2018-04-03T21:30:00.000Z"
  },
  {
      "original_value": 9386.9988,
      "forecasted_value": null,
      "min_band": 7411.772317871094,
      "max_band": 10810.48108984375,
      "line_status": 0,
      "timestamp": "2018-04-03T22:30:00.000Z"
  },
  {
      "original_value": 9075.5543,
      "forecasted_value": null,
      "min_band": 7447.569366699219,
      "max_band": 11476.273913085937,
      "line_status": 0,
      "timestamp": "2018-04-03T23:30:00.000Z"
  },
  {
      "original_value": 9245.9446,
      "forecasted_value": null,
      "min_band": 6354.489319335938,
      "max_band": 10437.683103515625,
      "line_status": 0,
      "timestamp": "2018-04-04T00:30:00.000Z"
  },
  {
      "original_value": 9672.3387,
      "forecasted_value": null,
      "min_band": 7687.610565429688,
      "max_band": 11340.400205078126,
      "line_status": 0,
      "timestamp": "2018-04-04T01:30:00.000Z"
  },
  {
      "original_value": 9940.6221,
      "forecasted_value": null,
      "min_band": 7680.657984375,
      "max_band": 10866.710769531248,
      "line_status": 0,
      "timestamp": "2018-04-04T02:30:00.000Z"
  },
  {
      "original_value": 10329.0941,
      "forecasted_value": null,
      "min_band": 6986.807203613281,
      "max_band": 11356.763570312498,
      "line_status": 0,
      "timestamp": "2018-04-04T03:30:00.000Z"
  },
  {
      "original_value": 10599.4119,
      "forecasted_value": null,
      "min_band": 8683.269498046875,
      "max_band": 12123.199227539062,
      "line_status": 0,
      "timestamp": "2018-04-04T04:30:00.000Z"
  },
  {
      "original_value": 11169.3341,
      "forecasted_value": null,
      "min_band": 9412.725712890626,
      "max_band": 12705.73315234375,
      "line_status": 0,
      "timestamp": "2018-04-04T05:30:00.000Z"
  },
  {
      "original_value": 11605.3043,
      "forecasted_value": null,
      "min_band": 9718.571569335936,
      "max_band": 13189.02948046875,
      "line_status": 0,
      "timestamp": "2018-04-04T06:30:00.000Z"
  },
  {
      "original_value": 12235.1136,
      "forecasted_value": null,
      "min_band": 10767.3657734375,
      "max_band": 13818.099885742186,
      "line_status": 0,
      "timestamp": "2018-04-04T07:30:00.000Z"
  },
  {
      "original_value": 12706.9446,
      "forecasted_value": null,
      "min_band": 10709.437536132811,
      "max_band": 14563.4447421875,
      "line_status": 0,
      "timestamp": "2018-04-04T08:30:00.000Z"
  },
  {
      "original_value": 13106.2302,
      "forecasted_value": null,
      "min_band": 11211.766177734375,
      "max_band": 14261.691885742188,
      "line_status": 0,
      "timestamp": "2018-04-04T09:30:00.000Z"
  },
  {
      "original_value": 12945.9536,
      "forecasted_value": null,
      "min_band": 11105.78458984375,
      "max_band": 14332.027092773436,
      "line_status": 0,
      "timestamp": "2018-04-04T10:30:00.000Z"
  },
  {
      "original_value": 12890.82,
      "forecasted_value": null,
      "min_band": 11732.291727539063,
      "max_band": 14583.275671874999,
      "line_status": 0,
      "timestamp": "2018-04-04T11:30:00.000Z"
  },
  {
      "original_value": 12648.1696,
      "forecasted_value": null,
      "min_band": 12013.7431875,
      "max_band": 15036.32748046875,
      "line_status": 0,
      "timestamp": "2018-04-04T12:30:00.000Z"
  },
  {
      "original_value": 13201.9227,
      "forecasted_value": null,
      "min_band": 12307.573787109375,
      "max_band": 15415.886798828125,
      "line_status": 0,
      "timestamp": "2018-04-04T13:30:00.000Z"
  },
  {
      "original_value": 13601.3731,
      "forecasted_value": null,
      "min_band": 11337.96457421875,
      "max_band": 14173.24096582031,
      "line_status": 0,
      "timestamp": "2018-04-04T14:30:00.000Z"
  },
  {
      "original_value": 13258.4132,
      "forecasted_value": null,
      "min_band": 11623.276206054687,
      "max_band": 15006.557366210936,
      "line_status": 0,
      "timestamp": "2018-04-04T15:30:00.000Z"
  },
  {
      "original_value": 13105.5858,
      "forecasted_value": null,
      "min_band": 11219.507942382812,
      "max_band": 14199.2951875,
      "line_status": 0,
      "timestamp": "2018-04-04T16:30:00.000Z"
  },
  {
      "original_value": 12373.06,
      "forecasted_value": null,
      "min_band": 11104.815642578124,
      "max_band": 13657.422347656251,
      "line_status": 0,
      "timestamp": "2018-04-04T17:30:00.000Z"
  },
  {
      "original_value": 11555.2165,
      "forecasted_value": null,
      "min_band": 10351.879794921875,
      "max_band": 13230.845009765624,
      "line_status": 0,
      "timestamp": "2018-04-04T18:30:00.000Z"
  },
  {
      "original_value": 10730.6265,
      "forecasted_value": null,
      "min_band": 9507.090336914063,
      "max_band": 12116.054350585939,
      "line_status": 0,
      "timestamp": "2018-04-04T19:30:00.000Z"
  },
  {
      "original_value": 9959.7867,
      "forecasted_value": null,
      "min_band": 8035.370699707031,
      "max_band": 12741.388389648433,
      "line_status": 0,
      "timestamp": "2018-04-04T20:30:00.000Z"
  },
  {
      "original_value": 9290.5073,
      "forecasted_value": null,
      "min_band": 8004.526131347656,
      "max_band": 10929.955017578122,
      "line_status": 0,
      "timestamp": "2018-04-04T21:30:00.000Z"
  },
  {
      "original_value": 9454.4388,
      "forecasted_value": null,
      "min_band": 6924.596628417969,
      "max_band": 10765.897809570311,
      "line_status": 0,
      "timestamp": "2018-04-04T22:30:00.000Z"
  },
  {
      "original_value": 9384.2974,
      "forecasted_value": null,
      "min_band": 7443.201507324218,
      "max_band": 11186.543077148437,
      "line_status": 0,
      "timestamp": "2018-04-04T23:30:00.000Z"
  },
  {
      "original_value": 9215.4584,
      "forecasted_value": null,
      "min_band": 7458.230216796875,
      "max_band": 11556.21496191406,
      "line_status": 0,
      "timestamp": "2018-04-05T00:30:00.000Z"
  },
  {
      "original_value": 9349.8293,
      "forecasted_value": null,
      "min_band": 7351.693427246093,
      "max_band": 11937.80516015625,
      "line_status": 0,
      "timestamp": "2018-04-05T01:30:00.000Z"
  },
  {
      "original_value": 10026.718,
      "forecasted_value": null,
      "min_band": 7422.504859863281,
      "max_band": 11881.926807617185,
      "line_status": 0,
      "timestamp": "2018-04-05T02:30:00.000Z"
  },
  {
      "original_value": 10322.1971,
      "forecasted_value": null,
      "min_band": 6998.807212402344,
      "max_band": 11992.855769531247,
      "line_status": 0,
      "timestamp": "2018-04-05T03:30:00.000Z"
  },
  {
      "original_value": 10848.2701,
      "forecasted_value": null,
      "min_band": 8263.438676757813,
      "max_band": 11982.672838867187,
      "line_status": 0,
      "timestamp": "2018-04-05T04:30:00.000Z"
  },
  {
      "original_value": 11031.6651,
      "forecasted_value": null,
      "min_band": 9852.86930859375,
      "max_band": 13015.138133789062,
      "line_status": 0,
      "timestamp": "2018-04-05T05:30:00.000Z"
  },
  {
      "original_value": 11642.1089,
      "forecasted_value": null,
      "min_band": 10374.521729492188,
      "max_band": 13892.489490234375,
      "line_status": 0,
      "timestamp": "2018-04-05T06:30:00.000Z"
  },
  {
      "original_value": 11871.8572,
      "forecasted_value": null,
      "min_band": 11210.423059570312,
      "max_band": 13739.060379882812,
      "line_status": 0,
      "timestamp": "2018-04-05T07:30:00.000Z"
  },
  {
      "original_value": 12588.9643,
      "forecasted_value": null,
      "min_band": 10862.465855468748,
      "max_band": 14608.747300781248,
      "line_status": 0,
      "timestamp": "2018-04-05T08:30:00.000Z"
  },
  {
      "original_value": 12364.3597,
      "forecasted_value": null,
      "min_band": 11424.239413085937,
      "max_band": 13764.130052734374,
      "line_status": 0,
      "timestamp": "2018-04-05T09:30:00.000Z"
  },
  {
      "original_value": 12665.1552,
      "forecasted_value": null,
      "min_band": 11238.041195312499,
      "max_band": 14163.989384765624,
      "line_status": 0,
      "timestamp": "2018-04-05T10:30:00.000Z"
  },
  {
      "original_value": 12474.7649,
      "forecasted_value": null,
      "min_band": 12111.229978515625,
      "max_band": 14317.78151171875,
      "line_status": 0,
      "timestamp": "2018-04-05T11:30:00.000Z"
  },
  {
      "original_value": 12925.394,
      "forecasted_value": null,
      "min_band": 11268.493514648437,
      "max_band": 14545.795799804686,
      "line_status": 0,
      "timestamp": "2018-04-05T12:30:00.000Z"
  },
  {
      "original_value": 13353.19,
      "forecasted_value": null,
      "min_band": 11982.806577148436,
      "max_band": 14445.079150390624,
      "line_status": 0,
      "timestamp": "2018-04-05T13:30:00.000Z"
  },
  {
      "original_value": 13462.1259,
      "forecasted_value": null,
      "min_band": 10853.5072734375,
      "max_band": 14601.899234375,
      "line_status": 0,
      "timestamp": "2018-04-05T14:30:00.000Z"
  },
  {
      "original_value": 13249.6054,
      "forecasted_value": null,
      "min_band": 11610.573668945312,
      "max_band": 14780.051887695312,
      "line_status": 0,
      "timestamp": "2018-04-05T15:30:00.000Z"
  },
  {
      "original_value": 13221.9125,
      "forecasted_value": null,
      "min_band": 11428.322788085938,
      "max_band": 14116.928009765626,
      "line_status": 0,
      "timestamp": "2018-04-05T16:30:00.000Z"
  },
  {
      "original_value": 12577.9616,
      "forecasted_value": null,
      "min_band": 11278.137153320313,
      "max_band": 13834.689918945312,
      "line_status": 0,
      "timestamp": "2018-04-05T17:30:00.000Z"
  },
  {
      "original_value": 11576.4799,
      "forecasted_value": null,
      "min_band": 10425.691395507813,
      "max_band": 13535.543556640623,
      "line_status": 0,
      "timestamp": "2018-04-05T18:30:00.000Z"
  },
  {
      "original_value": 10675.0343,
      "forecasted_value": null,
      "min_band": 9475.049874999999,
      "max_band": 12083.923927734375,
      "line_status": 0,
      "timestamp": "2018-04-05T19:30:00.000Z"
  },
  {
      "original_value": 9859.6986,
      "forecasted_value": null,
      "min_band": 8292.705108398437,
      "max_band": 12235.587665039064,
      "line_status": 0,
      "timestamp": "2018-04-05T20:30:00.000Z"
  },
  {
      "original_value": 9305.5258,
      "forecasted_value": null,
      "min_band": 7678.3680058593745,
      "max_band": 12237.019099609375,
      "line_status": 0,
      "timestamp": "2018-04-05T21:30:00.000Z"
  },
  {
      "original_value": 9223.911,
      "forecasted_value": null,
      "min_band": 7333.802558105469,
      "max_band": 10492.775428710936,
      "line_status": 0,
      "timestamp": "2018-04-05T22:30:00.000Z"
  },
  {
      "original_value": 9216.9838,
      "forecasted_value": null,
      "min_band": 7608.304893066406,
      "max_band": 10698.499296875,
      "line_status": 0,
      "timestamp": "2018-04-05T23:30:00.000Z"
  },
  {
      "original_value": 9241.9889,
      "forecasted_value": null,
      "min_band": 7807.138324707032,
      "max_band": 12023.314444335938,
      "line_status": 0,
      "timestamp": "2018-04-06T00:30:00.000Z"
  },
  {
      "original_value": 9323.3523,
      "forecasted_value": null,
      "min_band": 8205.816390625,
      "max_band": 11561.965294921874,
      "line_status": 0,
      "timestamp": "2018-04-06T01:30:00.000Z"
  },
  {
      "original_value": 9816.9306,
      "forecasted_value": null,
      "min_band": 8333.899397460937,
      "max_band": 10957.180364257812,
      "line_status": 0,
      "timestamp": "2018-04-06T02:30:00.000Z"
  },
  {
      "original_value": 10287.4472,
      "forecasted_value": null,
      "min_band": 8394.559934570312,
      "max_band": 11963.979935546873,
      "line_status": 0,
      "timestamp": "2018-04-06T03:30:00.000Z"
  },
  {
      "original_value": 10928.9114,
      "forecasted_value": null,
      "min_band": 9060.83012109375,
      "max_band": 12018.49124609375,
      "line_status": 0,
      "timestamp": "2018-04-06T04:30:00.000Z"
  },
  {
      "original_value": 11200.0093,
      "forecasted_value": null,
      "min_band": 9563.382002929688,
      "max_band": 13503.155767578124,
      "line_status": 0,
      "timestamp": "2018-04-06T05:30:00.000Z"
  },
  {
      "original_value": 11625.7141,
      "forecasted_value": null,
      "min_band": 10967.095086914062,
      "max_band": 13333.465889648438,
      "line_status": 0,
      "timestamp": "2018-04-06T06:30:00.000Z"
  },
  {
      "original_value": 12235.017,
      "forecasted_value": null,
      "min_band": 10564.75307421875,
      "max_band": 13627.275911132812,
      "line_status": 0,
      "timestamp": "2018-04-06T07:30:00.000Z"
  },
  {
      "original_value": 12792.6588,
      "forecasted_value": null,
      "min_band": 11069.855733398437,
      "max_band": 13889.941654296872,
      "line_status": 0,
      "timestamp": "2018-04-06T08:30:00.000Z"
  },
  {
      "original_value": 13041.5708,
      "forecasted_value": null,
      "min_band": 10447.237169921875,
      "max_band": 13615.827951171876,
      "line_status": 0,
      "timestamp": "2018-04-06T09:30:00.000Z"
  },
  {
      "original_value": 12911.7616,
      "forecasted_value": null,
      "min_band": 10784.4845,
      "max_band": 13853.137436523437,
      "line_status": 0,
      "timestamp": "2018-04-06T10:30:00.000Z"
  },
  {
      "original_value": 13099.5255,
      "forecasted_value": null,
      "min_band": 11770.249862304687,
      "max_band": 14145.471709960937,
      "line_status": 0,
      "timestamp": "2018-04-06T11:30:00.000Z"
  },
  {
      "original_value": 12798.56,
      "forecasted_value": null,
      "min_band": 11414.581546875,
      "max_band": 14859.357872070312,
      "line_status": 0,
      "timestamp": "2018-04-06T12:30:00.000Z"
  },
  {
      "original_value": 13477.6627,
      "forecasted_value": null,
      "min_band": 11608.858468749999,
      "max_band": 14869.853790039062,
      "line_status": 0,
      "timestamp": "2018-04-06T13:30:00.000Z"
  },
  {
      "original_value": 13645.7751,
      "forecasted_value": null,
      "min_band": 11896.118516601564,
      "max_band": 15351.527784179685,
      "line_status": 0,
      "timestamp": "2018-04-06T14:30:00.000Z"
  },
  {
      "original_value": 13388.4133,
      "forecasted_value": null,
      "min_band": 11556.173030273436,
      "max_band": 15033.14634863281,
      "line_status": 0,
      "timestamp": "2018-04-06T15:30:00.000Z"
  },
  {
      "original_value": 13318.2737,
      "forecasted_value": null,
      "min_band": 11221.052935546875,
      "max_band": 14254.682592773437,
      "line_status": 0,
      "timestamp": "2018-04-06T16:30:00.000Z"
  },
  {
      "original_value": 12438.8432,
      "forecasted_value": null,
      "min_band": 10583.02080078125,
      "max_band": 13841.932759765625,
      "line_status": 0,
      "timestamp": "2018-04-06T17:30:00.000Z"
  },
  {
      "original_value": 11428.6678,
      "forecasted_value": null,
      "min_band": 10329.1712890625,
      "max_band": 12951.967192382812,
      "line_status": 0,
      "timestamp": "2018-04-06T18:30:00.000Z"
  },
  {
      "original_value": 10730.8467,
      "forecasted_value": null,
      "min_band": 9381.691883789063,
      "max_band": 12832.532749999998,
      "line_status": 0,
      "timestamp": "2018-04-06T19:30:00.000Z"
  },
  {
      "original_value": 9857.3569,
      "forecasted_value": null,
      "min_band": 8842.42789453125,
      "max_band": 11983.557862304686,
      "line_status": 0,
      "timestamp": "2018-04-06T20:30:00.000Z"
  },
  {
      "original_value": 9396.5752,
      "forecasted_value": null,
      "min_band": 8176.099978027344,
      "max_band": 11255.854207031249,
      "line_status": 0,
      "timestamp": "2018-04-06T21:30:00.000Z"
  },
  {
      "original_value": 9266.9743,
      "forecasted_value": null,
      "min_band": 7271.2124882812495,
      "max_band": 10734.89604785156,
      "line_status": 0,
      "timestamp": "2018-04-06T22:30:00.000Z"
  },
  {
      "original_value": 9300.3707,
      "forecasted_value": null,
      "min_band": 6997.334839355469,
      "max_band": 10834.739986328124,
      "line_status": 0,
      "timestamp": "2018-04-06T23:30:00.000Z"
  },
  {
      "original_value": 9156.739,
      "forecasted_value": null,
      "min_band": 7780.716889160156,
      "max_band": 10666.995078124999,
      "line_status": 0,
      "timestamp": "2018-04-07T00:30:00.000Z"
  },
  {
      "original_value": 9612.6147,
      "forecasted_value": null,
      "min_band": 7759.062376953125,
      "max_band": 12265.684578124996,
      "line_status": 0,
      "timestamp": "2018-04-07T01:30:00.000Z"
  },
  {
      "original_value": 9962.9092,
      "forecasted_value": null,
      "min_band": 8843.06378515625,
      "max_band": 11703.355707031249,
      "line_status": 0,
      "timestamp": "2018-04-07T02:30:00.000Z"
  },
  {
      "original_value": 10206.9902,
      "forecasted_value": null,
      "min_band": 8626.156302734375,
      "max_band": 11609.711948242188,
      "line_status": 0,
      "timestamp": "2018-04-07T03:30:00.000Z"
  },
  {
      "original_value": 10826.1399,
      "forecasted_value": null,
      "min_band": 9477.150796875001,
      "max_band": 12350.185279296875,
      "line_status": 0,
      "timestamp": "2018-04-07T04:30:00.000Z"
  },
  {
      "original_value": 11279.7108,
      "forecasted_value": null,
      "min_band": 9752.473514648438,
      "max_band": 13172.92275488281,
      "line_status": 0,
      "timestamp": "2018-04-07T05:30:00.000Z"
  },
  {
      "original_value": 11907.8622,
      "forecasted_value": null,
      "min_band": 10493.187482421874,
      "max_band": 13320.08642578125,
      "line_status": 0,
      "timestamp": "2018-04-07T06:30:00.000Z"
  },
  {
      "original_value": 11928.8966,
      "forecasted_value": null,
      "min_band": 10743.130452148438,
      "max_band": 13724.146833007811,
      "line_status": 0,
      "timestamp": "2018-04-07T07:30:00.000Z"
  },
  {
      "original_value": 12413.742,
      "forecasted_value": null,
      "min_band": 11147.50396484375,
      "max_band": 13898.712255859375,
      "line_status": 0,
      "timestamp": "2018-04-07T08:30:00.000Z"
  },
  {
      "original_value": 13112.7805,
      "forecasted_value": null,
      "min_band": 10836.102719726563,
      "max_band": 13655.409125976563,
      "line_status": 0,
      "timestamp": "2018-04-07T09:30:00.000Z"
  },
  {
      "original_value": 12908.0195,
      "forecasted_value": null,
      "min_band": 11093.399435546875,
      "max_band": 13891.383219726562,
      "line_status": 0,
      "timestamp": "2018-04-07T10:30:00.000Z"
  },
  {
      "original_value": 13054.3652,
      "forecasted_value": null,
      "min_band": 11531.804419921875,
      "max_band": 14585.324263671875,
      "line_status": 0,
      "timestamp": "2018-04-07T11:30:00.000Z"
  },
  {
      "original_value": 12741.4988,
      "forecasted_value": null,
      "min_band": 12265.522283203125,
      "max_band": 15271.155655273436,
      "line_status": 0,
      "timestamp": "2018-04-07T12:30:00.000Z"
  },
  {
      "original_value": 13349.8771,
      "forecasted_value": null,
      "min_band": 11511.831487304687,
      "max_band": 15463.113083984372,
      "line_status": 0,
      "timestamp": "2018-04-07T13:30:00.000Z"
  },
  {
      "original_value": 13382.7849,
      "forecasted_value": null,
      "min_band": 11653.691014648439,
      "max_band": 15306.299006835936,
      "line_status": 0,
      "timestamp": "2018-04-07T14:30:00.000Z"
  },
  {
      "original_value": 13594.5712,
      "forecasted_value": null,
      "min_band": 11359.121299804687,
      "max_band": 14579.402375,
      "line_status": 0,
      "timestamp": "2018-04-07T15:30:00.000Z"
  },
  {
      "original_value": 12887.6714,
      "forecasted_value": null,
      "min_band": 11998.080419921875,
      "max_band": 14608.907099609374,
      "line_status": 0,
      "timestamp": "2018-04-07T16:30:00.000Z"
  },
  {
      "original_value": 12244.568,
      "forecasted_value": null,
      "min_band": 11652.069395507811,
      "max_band": 13758.858097656248,
      "line_status": 0,
      "timestamp": "2018-04-07T17:30:00.000Z"
  },
  {
      "original_value": 11669.655,
      "forecasted_value": null,
      "min_band": 10199.383622070312,
      "max_band": 12938.223180664063,
      "line_status": 0,
      "timestamp": "2018-04-07T18:30:00.000Z"
  },
  {
      "original_value": 10724.1721,
      "forecasted_value": null,
      "min_band": 9337.947427734376,
      "max_band": 12417.380749023436,
      "line_status": 0,
      "timestamp": "2018-04-07T19:30:00.000Z"
  },
  {
      "original_value": 9899.9226,
      "forecasted_value": null,
      "min_band": 8396.417501953125,
      "max_band": 11535.945073242186,
      "line_status": 0,
      "timestamp": "2018-04-07T20:30:00.000Z"
  },
  {
      "original_value": 9452.7672,
      "forecasted_value": null,
      "min_band": 8205.889452636718,
      "max_band": 11438.0757421875,
      "line_status": 0,
      "timestamp": "2018-04-07T21:30:00.000Z"
  },
  {
      "original_value": 9171.1434,
      "forecasted_value": null,
      "min_band": 7291.0517006835935,
      "max_band": 11496.454811523437,
      "line_status": 0,
      "timestamp": "2018-04-07T22:30:00.000Z"
  },
  {
      "original_value": 9563.372,
      "forecasted_value": null,
      "min_band": 7426.663475585937,
      "max_band": 10780.272861328125,
      "line_status": 0,
      "timestamp": "2018-04-07T23:30:00.000Z"
  },
  {
      "original_value": 9403.3104,
      "forecasted_value": null,
      "min_band": 7846.277323730468,
      "max_band": 10459.537546875,
      "line_status": 0,
      "timestamp": "2018-04-08T00:30:00.000Z"
  },
  {
      "original_value": 9253.481,
      "forecasted_value": null,
      "min_band": 8155.007768066406,
      "max_band": 10972.908930664062,
      "line_status": 0,
      "timestamp": "2018-04-08T01:30:00.000Z"
  },
  {
      "original_value": 9669.623,
      "forecasted_value": null,
      "min_band": 8174.293458496093,
      "max_band": 12084.166191406248,
      "line_status": 0,
      "timestamp": "2018-04-08T02:30:00.000Z"
  },
  {
      "original_value": 10162.9032,
      "forecasted_value": null,
      "min_band": 8767.571126953126,
      "max_band": 12181.400196289062,
      "line_status": 0,
      "timestamp": "2018-04-08T03:30:00.000Z"
  },
  {
      "original_value": 10884.2246,
      "forecasted_value": null,
      "min_band": 8711.284930664062,
      "max_band": 11181.666045898437,
      "line_status": 0,
      "timestamp": "2018-04-08T04:30:00.000Z"
  },
  {
      "original_value": 11373.8364,
      "forecasted_value": null,
      "min_band": 9996.327695312499,
      "max_band": 13138.52665234375,
      "line_status": 0,
      "timestamp": "2018-04-08T05:30:00.000Z"
  },
  {
      "original_value": 11411.0445,
      "forecasted_value": null,
      "min_band": 10846.900585937501,
      "max_band": 12834.686544921875,
      "line_status": 0,
      "timestamp": "2018-04-08T06:30:00.000Z"
  },
  {
      "original_value": 12320.3051,
      "forecasted_value": null,
      "min_band": 11359.790561523438,
      "max_band": 13916.652380859374,
      "line_status": 0,
      "timestamp": "2018-04-08T07:30:00.000Z"
  },
  {
      "original_value": 12654.3843,
      "forecasted_value": null,
      "min_band": 10650.917460937499,
      "max_band": 13413.3692265625,
      "line_status": 0,
      "timestamp": "2018-04-08T08:30:00.000Z"
  },
  {
      "original_value": 13070.9744,
      "forecasted_value": null,
      "min_band": 11186.701770507812,
      "max_band": 14042.704217773437,
      "line_status": 0,
      "timestamp": "2018-04-08T09:30:00.000Z"
  },
  {
      "original_value": 13128.6894,
      "forecasted_value": null,
      "min_band": 10914.459573242188,
      "max_band": 14617.390483398436,
      "line_status": 0,
      "timestamp": "2018-04-08T10:30:00.000Z"
  },
  {
      "original_value": 12986.7464,
      "forecasted_value": null,
      "min_band": 12050.466143554688,
      "max_band": 14040.7071875,
      "line_status": 0,
      "timestamp": "2018-04-08T11:30:00.000Z"
  },
  {
      "original_value": 12827.333,
      "forecasted_value": null,
      "min_band": 11319.2754921875,
      "max_band": 14077.614929687501,
      "line_status": 0,
      "timestamp": "2018-04-08T12:30:00.000Z"
  },
  {
      "original_value": 13264.672,
      "forecasted_value": null,
      "min_band": 12111.333731445313,
      "max_band": 14565.556474609375,
      "line_status": 0,
      "timestamp": "2018-04-08T13:30:00.000Z"
  },
  {
      "original_value": 13336.7357,
      "forecasted_value": null,
      "min_band": 11384.332896484375,
      "max_band": 14949.48031347656,
      "line_status": 0,
      "timestamp": "2018-04-08T14:30:00.000Z"
  },
  {
      "original_value": 13525.9041,
      "forecasted_value": null,
      "min_band": 11402.09822265625,
      "max_band": 13895.38719140625,
      "line_status": 0,
      "timestamp": "2018-04-08T15:30:00.000Z"
  },
  {
      "original_value": 13168.7176,
      "forecasted_value": null,
      "min_band": 11072.996268554689,
      "max_band": 13738.247484375,
      "line_status": 0,
      "timestamp": "2018-04-08T16:30:00.000Z"
  },
  {
      "original_value": 12673.0328,
      "forecasted_value": null,
      "min_band": 10784.485772460937,
      "max_band": 13981.958588867188,
      "line_status": 0,
      "timestamp": "2018-04-08T17:30:00.000Z"
  },
  {
      "original_value": 11461.4335,
      "forecasted_value": null,
      "min_band": 10168.233166992188,
      "max_band": 12836.900490234375,
      "line_status": 0,
      "timestamp": "2018-04-08T18:30:00.000Z"
  },
  {
      "original_value": 10704.7039,
      "forecasted_value": null,
      "min_band": 9246.342997070313,
      "max_band": 12224.899167968748,
      "line_status": 0,
      "timestamp": "2018-04-08T19:30:00.000Z"
  },
  {
      "original_value": 9904.5144,
      "forecasted_value": null,
      "min_band": 8974.899950195313,
      "max_band": 11770.588970703126,
      "line_status": 0,
      "timestamp": "2018-04-08T20:30:00.000Z"
  },
  {
      "original_value": 9442.3984,
      "forecasted_value": null,
      "min_band": 7454.015143066406,
      "max_band": 11228.43187109375,
      "line_status": 0,
      "timestamp": "2018-04-08T21:30:00.000Z"
  },
  {
      "original_value": 7890.3067,
      "forecasted_value": null,
      "min_band": 7101.306937988281,
      "max_band": 11137.522337890623,
      "line_status": 0,
      "timestamp": "2018-04-08T22:30:00.000Z"
  },
  {
      "original_value": 8188.7626,
      "forecasted_value": 8807.736587897294,
      "min_band": 6444.743021972657,
      "max_band": 10395.8207734375,
      "line_status": 0,
      "timestamp": "2018-04-08T23:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 9341.500141853978,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T00:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 9289.097204449727,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T01:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 9516.90742552056,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T02:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 10426.398872963086,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T03:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 10665.431342055024,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T04:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 11075.197332094265,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T05:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 11392.2639481032,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T06:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 12105.876400211744,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T07:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 12530.09373359671,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T08:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 12865.103761013146,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T09:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 12885.930269092687,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T10:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 13086.230931050703,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T11:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 13265.863209367039,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T12:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 13371.154419403445,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T13:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 13481.333702288726,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T14:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 13572.049800498331,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T15:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 13334.993275270725,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T16:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 13007.305147962761,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T17:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 11632.246626685075,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T18:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 10549.340082362694,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T19:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 9813.217378898384,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T20:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 9620.26294026645,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T21:30:00.000Z"
  },
  {
      "original_value": null,
      "forecasted_value": 9192.314509984983,
      "min_band": null,
      "max_band": null,
      "line_status": null,
      "timestamp": "2018-04-09T22:30:00.000Z"
  }
];

export default function App() {
  const chartData = data.map((item) => {
    return {
      ...item,
      timestamp: new Date(item.timestamp).toLocaleDateString()
    };
  });

  const filteredData = data.map((item) => {
    if (item.line_status > 0) {
      return {
        ...item,
        timestamp: new Date(item.timestamp).toLocaleDateString(),
        value: item.original_value
      };
    }
    return {
      ...item,
      timestamp: new Date(item.timestamp).toLocaleDateString(),
      value: null
    };
  });
  // THE LOGIC FOR LINE STATUS COLOR IS NOT HERE
  // THERE COULD BE OTHER LIBRARIES THAT DO IT FOR YOU
  // OR RATHER CREATE CUSTOM COMPONENTS
  return (
    <div className="App">
      <h1>Charts</h1>
      <LineChart width={1000} height={400} data={filteredData}>
        <Line type="monotone" dataKey="original_value" stroke="black" />
        <Line type="monotone" dataKey="value" stroke="red" />
        <Line type="monotone" dataKey="forecasted_value" stroke="red" />
        <Line type="monotone" dataKey="min_band" stroke="blue" />
        <Line type="monotone" dataKey="max_band" stroke="blue" />
        <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
        <XAxis dataKey="timestamp" />
        <YAxis />
      </LineChart>
      {/* <div>
          <AreaChart
              width={730}
              height={250}
              data={filteredData}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <XAxis dataKey="original_value" />
              <YAxis />
              <Area dataKey="timestamp" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
          </AreaChart>
      </div> */}
    </div>
  );
}
