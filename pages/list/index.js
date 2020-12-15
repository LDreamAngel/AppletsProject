// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "list": [{
		"nickname": "甄小琪",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/64LPhwrt4k3jm0W6Q8niayiaiaoKqTLBLBK8Da8dibOGnEYoCJfubjSsrWzvLicdjIMZ4NB61hIQqic3rIbPj69uWJKQ/132",
		"fan_id": 6268335
	},
	{
		"nickname": "张",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosZehwyHR6WyOAsA2akFASBOCzj2tclFVQ2zI7KFa7UXgmmEHXYXj4NfdTQFpPWNlmrroLaQWeRQ/132",
		"fan_id": 6118195
	},
	{
		"nickname": "LMQ",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/o2zPscWILT53Dd7KicnSBEMjDsX9icXFzuxz1GWprCqMd1PZ0mVTs9EibWNRiaUWqtDMUR1P9BznvoAZcibgUAIXsaA/132",
		"fan_id": 6268912
	},
	{
		"nickname": "星辰",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/16ZDP2RdE8vpPhd4c8ibLDatksGBE1N0sayncpmp3TnD19BafPn4EvWdGULQSotb3ibUAPxRXiaKeTOib7tibG7UpuQ/132",
		"fan_id": 6268990
	},
	{
		"nickname": "皓喻",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI0HiaS7mzficVgMPn8gB4zMx7mVCM81uaYibA5xPw6pNRtjz3ueZgiauXM3lEzXMg0tMJzpsYFAn6o4g/132",
		"fan_id": 6269742
	},
	{
		"nickname": "青争小台",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/0PXEkicgvicfRWZtdQDB3OicpibsJGaf8W2EwZBH2ByTH6PM5r2BGGRJwkfbOyTuRicdQnROibEZtXLh0yDvr37MAObA/132",
		"fan_id": 6269802
	},
	{
		"nickname": "瑞马壁挂炉王浩雷18537256050",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/jBlqqwtKsSXpHz4Odof0ZhN0uv1uMI6U1p6xo4Y1B0sDniaRnP3EX09d9qbRRggV0y1PjO8Pibj1q0VuxcgKftFQ/132",
		"fan_id": 6269872
	},
	{
		"nickname": "shine",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep5J6xYDptCZDicsNW8P7a0MHSwyiajDwh5U1dEKicXzdIn7SyhWwftmXdPon4PCzuLRWDlULy8NuxpQ/132",
		"fan_id": 6270389
	},
	{
		"nickname": "梨花丸子斗琼苞",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJYpmlmOZkS1aOJ3PsweTEJ2BERSrekQa4EKtFlomIH5WPyd6vOtKkeCpoibkMsyicueLa6edvyxrvQ/132",
		"fan_id": 6270531
	},
	{
		"nickname": ".",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/W2ibaT9TLqJOZiagBiaibXzKPNeOJMnT3LZS08UpyeWibLicPzB2UxZV0GVqolaOuuAjsibf1SrKLHW24bLNG4o3WQJVg/132",
		"fan_id": 6270491
	},
	{
		"nickname": "爱画画的李某人",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/RVb71N3cWFRzCBUMzea7x1c5ibaibF1Bkn6ZP6twmtnc3NobC9zJicib0Z3qDUXSZUreeYD5amZiagQv3Nj5kWZd1wQ/132",
		"fan_id": 6270647
	},
	{
		"nickname": "BDTིཾ蓝舞街舞&爵士舞",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/fNiaZCyTW1SfxANzibkWpkXspgJyxFyMmUreRCse9AfpnfGrEKsO2SKNSuqlmtCAFLYWybHLLOWa7JRXJpFu0rcQ/132",
		"fan_id": 6270675
	},
	{
		"nickname": "",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/vVEOzKllCmPOhU1RNk15VZdUqOUgRd50OZGXwj0CVUWdxwFQeXtEpgOgoYNs58vbamEt52V30g1EjOleBk0JpQ/132",
		"fan_id": 6271053
	},
	{
		"nickname": "韩_小_伟",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKvxJcA27TR0TPjic1RHDHdhejX9VrAUM5kVadKjp7COzrIIp9iaciavM0aYr7AyiceXqGvMObLRead0A/132",
		"fan_id": 6271353
	},
	{
		"nickname": "",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/CHhNMPIEzGa9xKmTN3SI0eE6JS1VYfmEtwyvjUP214RZJCHhaJQ9GWvUAVUYUKJph20qyCTuCKL8z9aTwJCBVQ/132",
		"fan_id": 6271502
	},
	{
		"nickname": "雨三田",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/6uRKZibDbQqR77fKVCDpvqf5SBLibBS4Rl8JIyNtZ3frfHLKn4lOEWzBNMLJib8xTKk7121Fsv9cGIMJnKogTLn1A/132",
		"fan_id": 6271522
	},
	{
		"nickname": "四季河",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/TGQvsUGqV7R7x0SWCEWsUN9xlJIYoia8Bm4UxQicLWUqTibqa8XDlwpvq8Gw0BxeZu5wpwIpUZmdib5VmQLnltoicJg/132",
		"fan_id": 6271623
	},
	{
		"nickname": "乍暖还寒15581939154",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Lofn4wcHj5We0Ss4PVWI87cgHyYibrL2p4X0GgmKao7ru2enmZicrmeGelIRqKxaPGvpRIwL624dLbkjqqoYfDibg/132",
		"fan_id": 6272282
	},
	{
		"nickname": "万事兴",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/51V9p4icyKLYGlwQOENaqPaMNeVzUicTn6c7ic4xfZGF4F9A9IKbg24FianDY6M4bfxsB4CXdRKQkFoKpU7VyymGtw/132",
		"fan_id": 6272335
	},
	{
		"nickname": "凯凯",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInkIjjWxBw5BibCjMiaccKOVjyMQcZR9ibaCwojF8GHa64jZTyUR9wwuytmk6JgEL6kziaTVGyaa29SQ/132",
		"fan_id": 6272403
	},
	{
		"nickname": "艳",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/fH8ia8tEG490Vf5CNGmWFf7ABefEw8ShyUaOnXibjnicLddXurbXialbibJKsu1DibbuMIksomw5fZBpialZiaKmEPByAg/132",
		"fan_id": 6271798
	},
	{
		"nickname": "悠宁",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/XOfu4ET104m8poDssb1OI9fodYISyE7icaJsib9tXgFJVQX7MQD9BIm945TYSmTib2sI2gWfA0BY9AwJC1HozNcKg/132",
		"fan_id": 6273868
	},
	{
		"nickname": "终结者",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK792otUoEoA2I5ayJlGEpgpch7hCaWgC1PBMc8DGf5QuhwgnPiaeOrArYhuMwfbb4icdziaed1Nj0gg/132",
		"fan_id": 6273980
	},
	{
		"nickname": "曦然",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/c9WqlOI9hPGl44Rf12LzXReyEzReoJpFm3eyC7F8wUUeXicpz5TVgov8j7BuNm7REuR3bdohuv2Wfz9ib8gyQtkQ/132",
		"fan_id": 6276153
	},
	{
		"nickname": "阿白",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM6jbuD7hDgqNgWf2CqGIA8TxPPGTmqfshBol4wO9KH3KVzz5ZcSodxnprMjM9TqQXicwJhffbUOZrg/132",
		"fan_id": 6276358
	},
	{
		"nickname": "贾乐尚",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/1wU0ePIoHAQX76KSUILSVvlSShVVqgmIMel4zyLsZzicHj10EM4e8MQGlpiaibNh422DY8b56Ammn6ZEZU0X56haw/132",
		"fan_id": 6276587
	},
	{
		"nickname": "",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/oNUlYjicIJX9AxCBfZ1ibkicWfiaj0QkcdWh1U1ZMboDOylnnMSzdicL3j4mr5gIDtQUZCcLpHGiaDexVVRbRfSEgGUA/132",
		"fan_id": 6276879
	},
	{
		"nickname": "郭婷",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKpUaAJKh6hpRj9I1UoG0rmKhQuHtFUrmCfO9V7Uspad8mp6KEQicMmicAlG7q77u4dpVibNSZtHwf9g/132",
		"fan_id": 6277452
	},
	{
		"nickname": "Hsiao_",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIl6NaxqThxuydE4KM3kwjJ1KCo4tibm7iax1nvtEG3nrFMO2zOCtR6XZMAqY2fnoB0n3KQ6YibiaESPA/132",
		"fan_id": 6277756
	},
	{
		"nickname": "Sun",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/SwtFkm9VNaepsdcia90SvdoarzYkiavds0fO1jDcbSWEbBdFgEhicYRfI8nXziaMNyXTGJnnAvJ6iawV8Fl5s5suG1A/132",
		"fan_id": 6277784
	},
	{
		"nickname": "雨过天晴",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/jLoVC6es4r8PKElGbvib0cESjOnK3bgddX9zjMgzvWvgPvZ5U6WtvdI26jEpEugGK54LnQXMRMibxiaSw7l887kUQ/132",
		"fan_id": 6278438
	},
	{
		"nickname": "莲",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/WZX0gG9VibklDGrhJHjhzLtapqUxv0SGRyiatA5MibnLAjxuVD2hwU0TqGusDXcxpDXglDU6V3BKYJRQ4ZOy7wBLQ/132",
		"fan_id": 6278436
	},
	{
		"nickname": "糖不及你甜",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/fxk7AgnIPGdRqk43xCjv6QCWfMzhsVZrJ6LyLPoCyVd4XnZwdcYo01Kb4tG33Qm1Se3y0t7jmKU6SiaDfUDGEIQ/132",
		"fan_id": 6278627
	},
	{
		"nickname": "涵阳",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoqTibvMn8Y8UPk1AvQ1IaUWZibJpgHTSyK51XCf2QVxzM9BBsJOJMjy444fFzCEQIYtSzCRpoJcoSw/132",
		"fan_id": 6278871
	},
	{
		"nickname": "绝泪∽长眠∝梦",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLr37c4hNZPPznTSsWzWUnmYmleOL0YsBFfvLTLODuJxdgSm1rvNvzujkCyKdWkjctiaOey0IuZ33g/132",
		"fan_id": 6278948
	},
	{
		"nickname": "〃風過無痕",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJDME9T37OXTuc3to9gOCq2BOZAGIyGj9obIyhgKzsxqKb4ECW6rdiapXibxRiaz3icEJCOBjiaFjCAJdQ/132",
		"fan_id": 6278999
	},
	{
		"nickname": "Human",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/dQRBVgnuFN7kb9d6ppK9Ue776vJMK4licTX8zxOEjrZbVOTE2r04g5xkJXDo8tZZfaq2UjmMDL74kInd4cAy2BQ/132",
		"fan_id": 6279255
	},
	{
		"nickname": "之梦",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erUhW3gpuOkSHJQw3ojddfGQsABZxuKHP4HjTibficLk5qeHPGW0AKyEicUqIicPYaGDtAk3cpGEle8Gw/132",
		"fan_id": 6279435
	},
	{
		"nickname": "H.浩",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLEKibaWucFKaicfVxg9u4T52RXTreMb7cq99lPl2VZBmuItsW9gLwtM0U8exeIVlUibLRAUILicgxmGw/132",
		"fan_id": 6279572
	},
	{
		"nickname": "疯狂瞌睡虫",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTICwAN6HNIuYh1w7mxqm0QAYZsLEuO59O2X2j2dtQ3G2GVNwflUSjerhBcvaxznicApB8LFpKfGywg/132",
		"fan_id": 6279867
	},
	{
		"nickname": "[常年招工]收获15090008582",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKP0gl8JTmPuYuricQia84QjbPsAl6s8066cAZgPdaIQMLygjddbavEFTDSgBbn9a07oibpdXGA91UzQ/132",
		"fan_id": 6279830
	},
	{
		"nickname": "大地",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIgxbulkHD4w9ibblGbkCMhOjl1ShEuBQDqSfRSVHRzh2qXx9MtbJTg7Jg3DlWBiaAmA8knardAKQiaw/132",
		"fan_id": 6280078
	},
	{
		"nickname": "冬城无雪",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/tf7YmxSUjNGYaQZ2Sy0Wkx6kQlib2xvXkTTLkL9ZBic3QNNN0YXmzeTgaS5EHcb0KKbmTW2monibQy6gpOt0JDKeA/132",
		"fan_id": 6280113
	},
	{
		"nickname": "阿白",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM5ZulSVJEkZoHuPp0CPYbT0o2paYSptrUEuUXhCPib8HEIS7ltstBcQKQfvibOjhekDQI66DS4WnPDg/132",
		"fan_id": 6280835
	},
	{
		"nickname": "青柠",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epmTYwhWfq08ZKRI1eMUknEtA0acEickAoo4FYUxQAegTnWAfuj5RNAqjL7rUVD0GV10jdN8JLTlaw/132",
		"fan_id": 6281462
	},
	{
		"nickname": "阿迪",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIYzg1qhroCib0f6eAGG9IRvZP9H5mL6qTvH3eAiaImgvibVWYCmEwuNIjSPrKmyoEMib6x4wfA6eTLjQ/132",
		"fan_id": 6282201
	},
	{
		"nickname": "日月同辉",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epwib4gNnCEKXDa5m9LcSI292u2b4icR0ToRKsl1VZ2iaJ7PsuSxXpvZpDibwN5Z5wsWdzJnaGIcaHIng/132",
		"fan_id": 6282506
	},
	{
		"nickname": "李",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKn3jHBC1fg9a3Wo55BLGfkKWSbwQTw4micWLxgfxht4a9ezKK2fuXvSYrUYxSCaYPticKKECxQoHRA/132",
		"fan_id": 6283047
	},
	{
		"nickname": "强",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoMoiaFDicEpwLtKJCcYuyibCThLjPvpQA3ZMPUFudQfibSm5vrmCClzA1ad0jzuJZ45ma87aAY6jLEWQ/132",
		"fan_id": 6283433
	},
	{
		"nickname": "Wy-s",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJx33zpGe1Y4ibiaianPaZHOfrA1o5wP575sSPZL97Fic9twI0A4ibzMQ7Ukt6BsiavcbEebYfLqib1yC6gA/132",
		"fan_id": 6283489
	},
	{
		"nickname": "6不6磕一下๓.",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/mtFonGxkxLbqS411sE95ib5Z9Pib6ayWrt7OWR6uB1MjzBzbL4IbpPN9JEFJ6zoU5elv86oL06xicQuMfe3SlGicnw/132",
		"fan_id": 6283837
	},
	{
		"nickname": "清欢",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJxibs6EwORmAf3PBKuZWiaiaznYz8JyibNuvYTRwP0pLFTr71zOQ3XVIofdu06RdDEutrQAWZCv1b9jQ/132",
		"fan_id": 6283885
	},
	{
		"nickname": "张",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIwcBgz2iciaqsH5GSkict2AjmTPahicib2b7XQu13IkpRkO5CAIHZ73FFFe3kiaUOgaIeDiakqILuT2ox3Q/132",
		"fan_id": 6284345
	},
	{
		"nickname": "共产主义接班人",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLJiajhrTdFslN74mSRTGhI8ibImBeIlhyNgM2fzEX9yvx7nTupKGMHJ9ly20yUXcbZ9jvOzNVG7pGw/132",
		"fan_id": 6284590
	},
	{
		"nickname": "维一",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eppJtU0DTrElP2rFhgOhzGCMQCsTKry6wPBbxIoXJ2MINF4dA9VwTU1Ax7SPt0TB0YgTwXp3ic4sbA/132",
		"fan_id": 6284634
	},
	{
		"nickname": "",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/WqfmrOyWdB3Ek3sBnwuGwqJtmy5HNNfK9DOBuvx1QoNPUDsv8FrInQTpq0ic4x6skbWqYSVIyDhiagjB02d67CkA/132",
		"fan_id": 6285232
	},
	{
		"nickname": "吉吉.",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK8HBR1ZQOWTToeicZcvLib1iaqLQdevoA6Z7ck0uYUarYzPzia6JvjWziaCNrBkxwgSLUmuGpvlCbqjwA/132",
		"fan_id": 6285357
	},
	{
		"nickname": "汤圆",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/VtUpPVIz48442E55BoYQN0iaXsH5GKaQSvf8zib0zic3O2LOs8fXCIX9akjibWoy3ibBv46CcB7Ea2fAXcL84NvKiagg/132",
		"fan_id": 6285611
	},
	{
		"nickname": "华儿",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/nl5cicXOrXic67ge1tLgrPib9K6gbtRxZGmRhxwoPavB6ibib55ttNOHnWuwJVhMD1Umkmppfj8WicVxicn2Xqu2ZLS6Q/132",
		"fan_id": 6285907
	},
	{
		"nickname": "贤小贤",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/L7SWfNMFOWAGbR7042faBJMh6mxWPNbhJaZf2XFGAcbnJkdXDZicXe4UM7C2Vr4Sq7Ap7fibJrFicykRS3sB9mXIA/132",
		"fan_id": 6286523
	},
	{
		"nickname": "M",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/1DyjLmau12DfumP6112Aib8ibuyuiaIb0ibjibePMmOCMxuDJyU2K3UnZzkq55P1VNH6lRdvHG38sVpe9ROGasnlY7Q/132",
		"fan_id": 6286969
	},
	{
		"nickname": "张程皓",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/wfdxQjw6nqw0o6YqSiamibibegA0pXCpkq51dFG65cKKYhuXQqYThp6Fact6iaRu80Hz4qozLVqiaq2icXmqHASFd1zg/132",
		"fan_id": 6287497
	},
	{
		"nickname": "香香公主",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLXxYYicyumLTibLt6xibl4Es9X30crbNvjTz8cxQ6qPNJGfm3dV8ySUq28amKkNOibKtbgDE4JY7my8Q/132",
		"fan_id": 6288201
	},
	{
		"nickname": "郭凯",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI9d5EibbkjiawSV88zCYpxhEEXfjfibduF6n9k7lruQKc78avnYRVe63fLTjOXzdJx16UibNHCOYPfkQ/132",
		"fan_id": 6288606
	},
	{
		"nickname": "至慕",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIomVpJtTuJnpKNljnHo2AVZiaKwbwfq4YaeaKKicYGFgC9uhx0W6dK98Lscr86Scsupugm2icoC50aQ/132",
		"fan_id": 6289217
	},
	{
		"nickname": "LI",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/6YBzWP9ic7AaRQNvmAgC2EcAK8T8g4gvp0MW0qVMs3hngIq0pw9H72U2licNiaKFgdlnOVmFfINz8yz2kNGAxCQgQ/132",
		"fan_id": 6290113
	},
	{
		"nickname": "琳琳",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/HMuHCjwyfmVYrV1icBA0hIOMF6icA4qkc8CVGxPLZgica6J0uEd063bRuNsaibpPoSKYCmLHXtOLA8NCO90pr1L6NA/132",
		"fan_id": 6290359
	},
	{
		"nickname": "芳",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/WKXUyNwKnVnRlandIgOn78hXXs2nOVicxjxB3uXAfGEU0VYTe0u7klexJT0l6uYZ8UJ5D1kq3R1aGeeD9ib2NiblA/132",
		"fan_id": 6290624
	},
	{
		"nickname": "秀英",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ4n1B0sQAQ6ZqK11SGKqckDBfv7ZegJd8Y4Tpwq5lUjUzXiahywR1NAcicwYrbwaHw7dJ89yBC2bfQ/132",
		"fan_id": 6292086
	},
	{
		"nickname": "Cindy",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoropSrtDib22rBhDKRO4ViaCA2pWqDCptvfTe3jKPl7yiavRasfEiaV6S8nFd2DreNjKJVhMsKdGb3Vw/132",
		"fan_id": 6293364
	},
	{
		"nickname": "刘建强",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/d14NC8W5kl5R6QBgMF44rXRsaMjMVY8OnO1zE4lgZb4IhLw8pPkc3oB9TfLsHYSNAxyibC9lmicbic5G2YwrHzu9w/132",
		"fan_id": 6294101
	},
	{
		"nickname": "白飞龙。",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKZutMYIaMRLKgElDHylqqM3hXzPHrnFK4DbuRVoQQheFEagXRgTToFHXibPfbJE6vGqx6sTcDKPLg/132",
		"fan_id": 6295767
	},
	{
		"nickname": "-",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/j56G7SlsRYtjqMQYxRSNdQ0Z43OBicfgpKBZ9RaHtFLnPK7Qc6aqYGNb8XxwCEq4rUujN6aVBjGatxzbmDcibdEg/132",
		"fan_id": 6296303
	},
	{
		"nickname": "鹿小憨",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/JedNAOtPpAQzJYYKRvbN7g1YD9okqYmlllRrDOWE6h1RwaCAIsLibBQWmp3ZgU3TtjNsdeNqxeibMD7m9w7w4icsw/132",
		"fan_id": 6297589
	},
	{
		"nickname": "",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTINzRd2KN1pA60YN8arP9icBdBnJq7d1FaL8JwTiazDXtgYhu5DSWg3on8m36vsGq2j5piaqNdjJ0kMw/132",
		"fan_id": 6298660
	},
	{
		"nickname": "李宜静",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epgDLZXJvAwgU1gQb63icpPYsVwLH4hhPZ3mSiblZFthXaNRGYTxFH10lOxb9iaqEgicibiacPMttJZJaug/132",
		"fan_id": 6299424
	},
	{
		"nickname": "小奶",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/SicbFZiaSUwz9gIR8TGdemAtk9nja5If1axJOJrIR9EeUs8MLwEAaDHwXGTkoTzY8SADLKw9KwxjQTvxfBmLrTibw/132",
		"fan_id": 6300538
	},
	{
		"nickname": "挚@怡",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJ2Nxibiavc2uIVJQWicnicRhY82EqHreXzazL0rOLDzUWMGWHMCKQtsibkCbgUh85Au6e4h1NBTlcH5uA/132",
		"fan_id": 6300751
	},
	{
		"nickname": "皓喻",
		"avatar": "",
		"fan_id": 6300895
	},
	{
		"nickname": "怡然自得",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLnesOMuEJgqI7fGcZwa7hdh4ibap6m9EmtVSIiaDtuBayvZKg5jYLbvMogCUpgfYyCgnPVUDvQD4Pg/132",
		"fan_id": 6301190
	},
	{
		"nickname": "静心沉壁",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Nwt7LpBz2eRx24gzAB4AA5uyy4RRWYZ1Nv3FHZDB88DLSBZicZicDyzaJwx7fY0e1tjnoV0PLJqP30tz9ATN4qDA/132",
		"fan_id": 6302911
	},
	{
		"nickname": "",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJWHRpuoeyRzuh5requ7JdRvibnWSEpphg3Dkulv5C6NUuU7eDCVQUQar6B04F4vYLB9UvKlALZOOw/132",
		"fan_id": 6302991
	},
	{
		"nickname": "苯苯熊",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/O1xhVFlngCIw18ll40MibLGSGXdwehajicWC27wuzfro3Rcn3LXjSEFJgVibXMOYtg2Bq0NXicoJvjCBjKX5tRXewQ/132",
		"fan_id": 6305967
	},
	{
		"nickname": "Allie",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/NsMjqZaiczry0LEdmrickXgdogmLCLGbia7wKWJIfcV0UxxnHklWuzYhUsD2f9fsWyugbXuHDKQn5MG4qfhT2Hgyw/132",
		"fan_id": 6306427
	},
	{
		"nickname": "云水禅心",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/rNp98dewasUMNcBwj0MMuQ7YBrAnzEvfohKsicOJPFXT69tpVbcIjvicsU4zcQ3X1lndmLK76Ghlo8CWZrNSNxEQ/132",
		"fan_id": 6307737
	},
	{
		"nickname": "且听风鸣",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLjkGHQyGTY0pambAAVwibHApWkV7I42KqHleMM2FkyGkAUTs15QvAudHr6hddnZq3fBhDpqjuDSDg/132",
		"fan_id": 6308236
	},
	{
		"nickname": "知足常乐",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/cCASibxS3y3woTiaDtlSCxBRzmD8UwFkRL7EEZtePGxh1icLdiaAlibxvBNn4mdYhGHQSstxAcd0MSlzfpZnRJ1Yz5g/132",
		"fan_id": 6309443
	},
	{
		"nickname": "清",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL2XuHauDG5cjOGxiczoJLe9GjtTfXHMtQnicDwQYbxXFd03ZLzVzSia0GdZuXSTVh3TRt2I8xkqbiclA/132",
		"fan_id": 6311700
	},
	{
		"nickname": "格式化丶回忆",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eomzjlr8vgHpHxTpWSIHsPicogBmXFAtOS2Gza1dRhZSL2kd66J84iaqPA72qytnHEtZqicXhZ9144Yg/132",
		"fan_id": 6311845
	},
	{
		"nickname": "依米",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/qZDMZtM1OsIzk0a3pgZZaLgDCm96owbyiap56yTmCeTAQMFfgcsDQQ7IVkDjDeL3c4JOgVIhcVm6SFYmdV3YYaw/132",
		"fan_id": 6312496
	},
	{
		"nickname": "随遇而安",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/5WLLCcpvMo8HBCImsohoUNAdDeP1JdL8JCZTHUr4jR6fgv6QTPtHznjic2uziaISeNW71tsQibLhrFptBFRof04RQ/132",
		"fan_id": 6314979
	},
	{
		"nickname": "佛缘",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/C9g2lbQxQCDyGF1mytKia83D5kojsuwfFUfA3leq4nUyD4ibeAjBdCNNL8iaukfXn5UNQibnWK5Q7pfInjgHfTz48g/132",
		"fan_id": 6315372
	},
	{
		"nickname": "平安是福",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIAU5wnDQ5eAFHdeElnd8XqD9ibMb4JDiam50SHjGEseGmFlpCgvNFdKOBAS45iaX2lKmYoAic1vYVykA/132",
		"fan_id": 6315421
	},
	{
		"nickname": "星星的影子",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epGPRKNpwHHLgzZQiajCKkWLFOsTT4E7fCCe4ggglnC5LfCWicLt9uYpqwfVvkY7B67fYown7HPuTuA/132",
		"fan_id": 6315695
	},
	{
		"nickname": "吕部室15803723524",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/waDWrO9ZjB311WfeqssonEpZajjbVUozFQNxaxDicvm2LIribHAtF8wlvrf1IhwbOn2SAlrTd9HNwdu2Mia7HmH1g/132",
		"fan_id": 6322804
	},
	{
		"nickname": "哄哄",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM46RInIiaTqDwia1Ior74xaicA2b3fvBDXEltO1icVD3GrXYZcQPJyvJkud64EetQcLHRw625HgHuwic4A/132",
		"fan_id": 6323335
	},
	{
		"nickname": "橘生淮南",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/ysERBNQRpibpUoDqegKhbc5LJTkgjr28RiceDMV1yB7NyCPdvKPJAOkbvCH47hejbv41K7LA0EP4jica9esDJgvdg/132",
		"fan_id": 6323695
	},
	{
		"nickname": "欢乐马",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM66s74dylO8cexD9sKCTfduwzvbaUFUoSPnIIC0V0lttsibVPbnMhW6MJPFdd5mhUOQHXjIWWjBiaRQ/132",
		"fan_id": 6323752
	},
	{
		"nickname": "@Heidi",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/4DYyxiajEvcEhnTIFzu1BLe4G01MX7WFja0qPP9GnBK4YhnRAcyVOstBqAlleHpu3EBuMvbMQfdcWxbibL8NMczg/132",
		"fan_id": 6323980
	},
	{
		"nickname": "回忆时光",
		"avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/micbGdbTuMsw05ahQ309FVNfM4rKicWgiaOrlG0mcicqp84Mhu7ckI52Y8U0UQg00rUqXvCVt7gib6v0uVJgywvXRSw/132",
		"fan_id": 6327028
	}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})