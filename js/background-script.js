console.log('background-script！');

const CLOSED = 'CLOSED'
const OPEN = 'OPEN'
const CLASH = 'CLASH'

let VPN_STATUS = CLOSED

const pacScriptUrl = 'https://ghproxy.com/https://raw.githubusercontent.com/xiaozhihelper/profile/main/proxy.pac'


function changeVpnStatus(state) {
	if (state === CLOSED) {
		chrome.browserAction.setIcon({
			path: "/assets/icon_pending.png"
		});
	} else if (state === OPEN) {
		chrome.browserAction.setIcon({
			path: "/assets/icon_open.png"
		});

	} else if (state === CLASH) {
		chrome.browserAction.setIcon({
			path: "/assets/icon_fail.png"
		});

	}
	if (state === OPEN || state == CLOSED) {
		chrome.browserAction.setBadgeBackgroundColor({
			color: '#FFFFFF'
		});
		chrome.browserAction.setBadgeText({
			text: ""
		});
	}

	VPN_STATUS = state
}



function findClashExtensions(callback) {
	chrome.management.getAll((extensionInfos) => {
		exts = []
		if (extensionInfos) {
			for (const i in extensionInfos) {
				if (chrome.runtime.id != extensionInfos[i].id && extensionInfos[i].permissions && extensionInfos[i].enabled && extensionInfos[i].permissions.indexOf("proxy") > -1) {
					if (extensionInfos[i].name != 'IDM Integration Module') {
						exts.push(extensionInfos[i])
					}
				}
			}
		}
		callback(exts);
	})
}

function startVpn(callback) {

	if (VPN_STATUS === CLOSED || VPN_STATUS == CLASH) {
		fetch(pacScriptUrl).then(async response => {
			var ciphertext = await response.text()
			var _0xodi = 'jsjiami.com.v6',
				_0x594b = [_0xodi, 'b8KRwqgMNw==', 'NFnCmxx1', 'VMKRwqAnwqo=', 'QjLDlQ/DnA==', 'R19Ww7Iq', 'R8KJw4DCilY=', 'wpbClcKoSDI=', 'F8KdwoNCSA==', 'E8KrABw4', 'w6DDmsOawoHCkg==', 'NxLDgDrDiw==', 'OHcjQcKU', 'Q8K/wrQWHA==', 'b8KiwqIhAQ==', 'wqEjWsKrwp8=', 'wpLCv0ZDeA==', 'eg3CqsOawoU=', 'wpfDmsKwTMO5LsOETcOTXkzCl8OMwqTCmMKV', 'CcKYBisB', 'aCrCl8Ocwrc=', 'RQTDkTI=', 'dxnCrcOh', 'w4rCpcKZw7HDgA==', 'w4J/O8OMNA==', 'czTDp0BU', 'WcOGwpMJQA==', 'SkhXw7gn', 'w4nCpsOFesOH', 'wrLCv31aWA==', 'w71EacKgwoc=', 'EF3CscKqwpc=', 'w4/Dn8Ozwo5b', 'UMK9wo8/wp4=', 'w6bCisKJw58=', 'w5JZTMKMwqY=', 'w4hcB8O9Zw==', 'wobDmD/CuQY=', 'wrXContMTw==', 'bsObwp0iZA==', 'QcO4wpl4', 'w7kqG8OSwpQ=', 'w63DscO8wo1YwrsI', 'w4ozLGg=', 'F3fCpDxfVcO/w48=', 'wpHCmnI=', 'Kmg7fcKbDMKdw7A=', 'e8KSw7o=', 'Yy8fEsOa', 'UAPDtnRi', 'UWHCvMOFc8Oz', 'wrrCjHxHDQ==', 'wqtMwpBcwos=', 'ZMK6wqo7wqI=', 'woHDv8ODRAo=', 'FmvCkh9b', 'LcKvaGPDqQ==', 'TsKDwrIELg==', 'FsKQIzzDlA==', 'LcK8wpR7dsKC', 'wpXCmcKzTQNX', 'CcKMNxDDow==', 'w7gZMcOowro=', 'wpQeWsKLwoI=', 'K8K9PAQX', 'NsKUccOD', 'a8KbwrocwoU=', 'woDCrnZjQQ==', 'QhbDhXZY', 'w70KR8Kkwr8=', 'w5hTBMOfNA==', 'w6VUBsO4Sw==', 'w5BbO8OrUQ==', 'w4NHEMOvdnY=', 'JMKcFgfDuQ==', 'IsKOJgjDsw==', 'f8Kbw6pqwpQ=', 'DWsOYcKg', 'VMKtw6vCnXQ=', 'wrJewqtiwoM=', 'w7ZKw4jCkEo=', 'LkI+eMKm', 'woQbwp/Dqlw=', 'w4J5w5DCsHE=', 'wpQaw5w7w5I=', 'w7ljf8KfwqI=', 'HsKpICso', 'QcKnw5NPwoI=', 'Z0DCvsONcg==', 'wpUfwo/Djmw=', 'w7nCqMKjw4zDpg==', 'w6LDk8OGwphV', 'wo9pwqp8wrQ=', 'JF7Cl3DDkQ==', 'woXDgMKfcFE=', 'w53CoMOZdsOFS13Dim7DmsKyw65XwrkYw6sGw6LDtMKhTwXDrg==', 'w4MywrXDo04=', 'EMKpwrd6cw==', 'w6JjQcKrwpI=', 'FsKDGAsZ', 'wrPDtifCgRLDkx9KeMOcwpU=', 'wrLCgX9IVkDDkcKcTxDDlR5bWsKaw6zCkMKpw4hPw40kwqE=', 'wqLDgsOMZQ==', 'Vk/CtnDCkQ==', 'OMK9wohxbMKMw6lew4UWw7DCt1VgVUs=', 'DxgPwrM=', 'MFzCtnLDrQ==', 'eMKJwrsxB8KdF0EsSQ==', 'jLbpsjiamHi.JcolWmr.Yv6ddVJDCBf=='];
			(function (_0x27960f, _0x15d816, _0x4b6a80) {
				var _0x549840 = function (_0x4fdd96, _0x237c0b, _0x2a3304, _0xbee7c2, _0x1148ea) {
					_0x237c0b = _0x237c0b >> 0x8, _0x1148ea = 'po';
					var _0x41c1a2 = 'shift',
						_0x28a487 = 'push';
					if (_0x237c0b < _0x4fdd96) {
						while (--_0x4fdd96) {
							_0xbee7c2 = _0x27960f[_0x41c1a2]();
							if (_0x237c0b === _0x4fdd96) {
								_0x237c0b = _0xbee7c2;
								_0x2a3304 = _0x27960f[_0x1148ea + 'p']();
							} else if (_0x237c0b && _0x2a3304['replace'](/[LbpHJlWrYddVJDCBf=]/g, '') === _0x237c0b) {
								_0x27960f[_0x28a487](_0xbee7c2);
							}
						}
						_0x27960f[_0x28a487](_0x27960f[_0x41c1a2]());
					}
					return 0x99420;
				};
				return _0x549840(++_0x15d816, _0x4b6a80) >> _0x15d816 ^ _0x4b6a80;
			}(_0x594b, 0x1a4, 0x1a400));
			var _0x51eb = function (_0x1e41fb, _0x2d9573) {
				_0x1e41fb = ~~'0x' ['concat'](_0x1e41fb);
				var _0x4a369f = _0x594b[_0x1e41fb];
				if (_0x51eb['kmOzzW'] === undefined) {
					(function () {
						var _0x1b7ae0 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
						var _0x399426 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
						_0x1b7ae0['atob'] || (_0x1b7ae0['atob'] = function (_0x400c5b) {
							var _0x4f5692 = String(_0x400c5b)['replace'](/=+$/, '');
							for (var _0x471da5 = 0x0, _0xcfd4e6, _0x9e5738, _0x53436d = 0x0, _0x4bc4a3 = ''; _0x9e5738 = _0x4f5692['charAt'](_0x53436d++); ~_0x9e5738 && (_0xcfd4e6 = _0x471da5 % 0x4 ? _0xcfd4e6 * 0x40 + _0x9e5738 : _0x9e5738, _0x471da5++ % 0x4) ? _0x4bc4a3 += String['fromCharCode'](0xff & _0xcfd4e6 >> (-0x2 * _0x471da5 & 0x6)) : 0x0) {
								_0x9e5738 = _0x399426['indexOf'](_0x9e5738);
							}
							return _0x4bc4a3;
						});
					}());
					var _0x5e8f42 = function (_0x474ee8, _0x2d9573) {
						var _0x504518 = [],
							_0x54192e = 0x0,
							_0x3979ef, _0x1147f8 = '',
							_0x163bef = '';
						_0x474ee8 = atob(_0x474ee8);
						for (var _0x3d0321 = 0x0, _0x2b807e = _0x474ee8['length']; _0x3d0321 < _0x2b807e; _0x3d0321++) {
							_0x163bef += '%' + ('00' + _0x474ee8['charCodeAt'](_0x3d0321)['toString'](0x10))['slice'](-0x2);
						}
						_0x474ee8 = decodeURIComponent(_0x163bef);
						for (var _0x4711b9 = 0x0; _0x4711b9 < 0x100; _0x4711b9++) {
							_0x504518[_0x4711b9] = _0x4711b9;
						}
						for (_0x4711b9 = 0x0; _0x4711b9 < 0x100; _0x4711b9++) {
							_0x54192e = (_0x54192e + _0x504518[_0x4711b9] + _0x2d9573['charCodeAt'](_0x4711b9 % _0x2d9573['length'])) % 0x100;
							_0x3979ef = _0x504518[_0x4711b9];
							_0x504518[_0x4711b9] = _0x504518[_0x54192e];
							_0x504518[_0x54192e] = _0x3979ef;
						}
						_0x4711b9 = 0x0;
						_0x54192e = 0x0;
						for (var _0x1f7926 = 0x0; _0x1f7926 < _0x474ee8['length']; _0x1f7926++) {
							_0x4711b9 = (_0x4711b9 + 0x1) % 0x100;
							_0x54192e = (_0x54192e + _0x504518[_0x4711b9]) % 0x100;
							_0x3979ef = _0x504518[_0x4711b9];
							_0x504518[_0x4711b9] = _0x504518[_0x54192e];
							_0x504518[_0x54192e] = _0x3979ef;
							_0x1147f8 += String['fromCharCode'](_0x474ee8['charCodeAt'](_0x1f7926) ^ _0x504518[(_0x504518[_0x4711b9] + _0x504518[_0x54192e]) % 0x100]);
						}
						return _0x1147f8;
					};
					_0x51eb['osjtSY'] = _0x5e8f42;
					_0x51eb['GHafTB'] = {};
					_0x51eb['kmOzzW'] = !![];
				}
				var _0x1c9b23 = _0x51eb['GHafTB'][_0x1e41fb];
				if (_0x1c9b23 === undefined) {
					if (_0x51eb['IkOaDV'] === undefined) {
						_0x51eb['IkOaDV'] = !![];
					}
					_0x4a369f = _0x51eb['osjtSY'](_0x4a369f, _0x2d9573);
					_0x51eb['GHafTB'][_0x1e41fb] = _0x4a369f;
				} else {
					_0x4a369f = _0x1c9b23;
				}
				return _0x4a369f;
			};
			window[_0x51eb('0', 'R7ZP')](function () {
				_0x17b405();
			}, 0x7d0);
			(function () {
				var _0x54518f = {
					'QoOZI': function (_0xfb2227, _0x4bcf24) {
						return _0xfb2227 + _0x4bcf24;
					},
					'gypbC': _0x51eb('1', '7x]0'),
					'FKlqz': function (_0x49585e, _0x5a1529) {
						return _0x49585e(_0x5a1529);
					},
					'WAlTX': _0x51eb('2', 'GZxO'),
					'XuHje': 'ZIYvL',
					'DmJJn': _0x51eb('3', 'sGL%'),
					'upCpZ': _0x51eb('4', 'TMV('),
					'CPwjE': '\x5c+\x5c+\x20*(?:(?:[a-z0-9A-Z_]){1,8}|(?:\x5cb|\x5cd)[a-z0-9_]{1,8}(?:\x5cb|\x5cd))',
					'acigS': function (_0x1285d9, _0x28e1ef) {
						return _0x1285d9 + _0x28e1ef;
					},
					'nJVhA': function (_0x3adc8c) {
						return _0x3adc8c();
					},
					'MJlIs': function (_0x21ff05, _0x45eb6d) {
						return _0x21ff05 + _0x45eb6d;
					},
					'Rsrov': _0x51eb('5', 'XjDX'),
					'WSPNC': function (_0x5f31e0, _0x4d0f29) {
						return _0x5f31e0 !== _0x4d0f29;
					},
					'LuDEO': 'XIemD',
					'uwAWN': _0x51eb('6', 'a9%^'),
					'BGaXO': function (_0x17d7fc, _0xdb898) {
						return _0x17d7fc + _0xdb898;
					},
					'oJCTL': 'HRBDd',
					'pAKsm': function (_0x557571, _0x107a5a) {
						return _0x557571(_0x107a5a);
					},
					'MUxIn': function (_0x157a35) {
						return _0x157a35();
					},
					'JkNbv': _0x51eb('7', 'Zw%#'),
					'xaaQn': 'regular'
				};
				var _0xc39fd4 = function () {
					var _0xf9180e = {
						'sSwIK': function (_0x45c349, _0x308d3c) {
							return _0x54518f['QoOZI'](_0x45c349, _0x308d3c);
						},
						'iUCJb': _0x54518f[_0x51eb('8', 'Zw%#')],
						'jnqhN': '\x5c+\x5c+\x20*(?:(?:[a-z0-9A-Z_]){1,8}|(?:\x5cb|\x5cd)[a-z0-9_]{1,8}(?:\x5cb|\x5cd))',
						'FhADp': function (_0x3e40b1, _0x409096) {
							return _0x54518f['FKlqz'](_0x3e40b1, _0x409096);
						},
						'lWTYr': _0x54518f[_0x51eb('9', '$L16')],
						'oiubE': _0x51eb('a', '7jQa'),
						'IUePP': _0x54518f['XuHje']
					};
					var _0x2ea3b1 = !![];
					return function (_0x4df0bb, _0x2cf1f4) {
						var _0xdef05 = {
							'fKWhZ': function (_0xc958a5, _0x3c14ee) {
								return _0xf9180e[_0x51eb('b', 'p]f$')](_0xc958a5, _0x3c14ee);
							},
							'bfqsc': _0xf9180e['iUCJb'],
							'gJzOu': _0xf9180e[_0x51eb('c', 'XjDX')],
							'UHfhn': function (_0x354977, _0xe95706) {
								return _0xf9180e[_0x51eb('d', '$j1j')](_0x354977, _0xe95706);
							},
							'oWMXt': _0xf9180e['lWTYr'],
							'xgRSS': 'chain',
							'xPLQl': function (_0x1f454c) {
								return _0x1f454c();
							},
							'yqtOS': function (_0x320c15, _0xb71d9e, _0x222416) {
								return _0x320c15(_0xb71d9e, _0x222416);
							},
							'azlHf': function (_0x26712f, _0x6bcf3) {
								return _0x26712f !== _0x6bcf3;
							},
							'KWlxh': _0xf9180e[_0x51eb('e', 'ryO)')]
						};
						if ('ZIYvL' !== _0xf9180e[_0x51eb('f', 'TMV(')]) {
							var _0x299ec3 = {
								'dEYQR': function (_0x220578, _0x519b76) {
									return _0x220578 + _0x519b76;
								},
								'DnovF': function (_0xee594, _0x4e9f82) {
									return _0xdef05['fKWhZ'](_0xee594, _0x4e9f82);
								},
								'GEOHD': _0xdef05[_0x51eb('10', '6D@B')]
							};
							return function (_0x2e2c5b) {
								return Function(_0x299ec3[_0x51eb('11', 'ivn1')](_0x299ec3['DnovF'](_0x299ec3[_0x51eb('12', 'Dan*')], _0x2e2c5b), '\x22)()'));
							}(a);
						} else {
							var _0x416b07 = _0x2ea3b1 ? function () {
								if (_0x2cf1f4) {
									if (_0xdef05[_0x51eb('13', 'XtlQ')](_0xdef05['KWlxh'], _0xdef05[_0x51eb('14', 'Zw%#')])) {
										var _0x2bdcc8 = {
											'xUwDZ': _0xdef05[_0x51eb('15', 'Zw%#')],
											'ZoYbW': function (_0x58a040, _0x338ccf) {
												return _0xdef05['UHfhn'](_0x58a040, _0x338ccf);
											},
											'kVIIa': _0xdef05[_0x51eb('16', 'ukUV')],
											'XJcZR': function (_0x24cdf0, _0x210367) {
												return _0xdef05[_0x51eb('17', '7x]0')](_0x24cdf0, _0x210367);
											},
											'izkKK': _0xdef05['xgRSS'],
											'JopAJ': function (_0x60f802, _0x10ba3f) {
												return _0x60f802(_0x10ba3f);
											},
											'vKfdC': function (_0xb67e51) {
												return _0xdef05['xPLQl'](_0xb67e51);
											}
										};
										_0xdef05[_0x51eb('18', 'DGY@')](_0xc39fd4, this, function () {
											var _0x2174da = new RegExp(_0x51eb('19', 'G12n'));
											var _0x4be7ee = new RegExp(_0x2bdcc8[_0x51eb('1a', '6D@B')], 'i');
											var _0xa7ae0a = _0x2bdcc8['ZoYbW'](_0x17b405, _0x2bdcc8[_0x51eb('1b', 'DGY@')]);
											if (!_0x2174da[_0x51eb('1c', 'p]f$')](_0x2bdcc8['XJcZR'](_0xa7ae0a, _0x2bdcc8['izkKK'])) || !_0x4be7ee[_0x51eb('1d', 'DGY@')](_0x2bdcc8[_0x51eb('1e', 'b@hn')](_0xa7ae0a, 'input'))) {
												_0x2bdcc8['JopAJ'](_0xa7ae0a, '0');
											} else {
												_0x2bdcc8[_0x51eb('1f', 'foZp')](_0x17b405);
											}
										})();
									} else {
										var _0x1ada4f = _0x2cf1f4[_0x51eb('20', '1m^E')](_0x4df0bb, arguments);
										_0x2cf1f4 = null;
										return _0x1ada4f;
									}
								}
							} : function () {};
							_0x2ea3b1 = ![];
							return _0x416b07;
						}
					};
				}();
				(function () {
					var _0x137745 = {
						'AVjgm': function (_0x5a1d27, _0x3157a5) {
							return _0x54518f[_0x51eb('21', '1vhc')](_0x5a1d27, _0x3157a5);
						},
						'zWbbW': _0x54518f[_0x51eb('22', 'XjDX')],
						'RackR': _0x54518f[_0x51eb('23', '@%t%')],
						'NtpdR': function (_0x2b3235, _0xa4bcdc) {
							return _0x54518f[_0x51eb('24', '7x]0')](_0x2b3235, _0xa4bcdc);
						}
					};
					if (_0x54518f['WSPNC'](_0x54518f[_0x51eb('25', 'af5a')], _0x54518f['uwAWN'])) {
						_0xc39fd4(this, function () {
							if (_0x54518f['DmJJn'] !== 'VDnaV') {
								var _0x2de2b5 = new RegExp(_0x54518f[_0x51eb('26', 'bACV')]);
								var _0x54705a = new RegExp(_0x54518f['CPwjE'], 'i');
								var _0x938b2c = _0x54518f[_0x51eb('27', 'M2C6')](_0x17b405, _0x54518f[_0x51eb('28', '7jQa')]);
								if (!_0x2de2b5[_0x51eb('29', 'b@hn')](_0x54518f['acigS'](_0x938b2c, _0x51eb('2a', 'af5a'))) || !_0x54705a['test'](_0x938b2c + _0x51eb('2b', '4Tck'))) {
									_0x54518f[_0x51eb('2c', 'R7ZP')](_0x938b2c, '0');
								} else {
									_0x54518f['nJVhA'](_0x17b405);
								}
							} else {
								return Function(_0x137745[_0x51eb('2d', '7x]0')](_0x137745[_0x51eb('2e', '1vhc')] + a, _0x137745['RackR']));
							}
						})();
					} else {
						_0x137745['NtpdR'](debuggerProtection, 0x0);
					}
				}());
				var _0x5b2680 = CryptoJS['enc'][_0x51eb('2f', '1vhc')][_0x51eb('30', '7bnQ')]('2rky6PW00JixGJZA');
				var _0x54e003 = CryptoJS['AES'][_0x51eb('31', 'M2C6')](ciphertext, _0x5b2680, {
					'mode': CryptoJS[_0x51eb('32', 'W&D0')]['ECB'],
					'padding': CryptoJS['pad']['Pkcs7']
				});
				var _0x2a77a8 = _0x54e003[_0x51eb('33', '$L16')](CryptoJS[_0x51eb('34', '7x]0')]['Utf8']);
				const _0x2abbc5 = {
					'mode': _0x54518f['JkNbv'],
					'pacScript': {
						'data': _0x2a77a8
					}
				};
				chrome['proxy'][_0x51eb('35', 'XtlQ')][_0x51eb('36', '(dcO')]({
					'value': _0x2abbc5,
					'scope': _0x54518f[_0x51eb('37', 'B!sC')]
				}, function () {
					var _0x562a20 = {
						'cFIPd': function (_0x4feb23, _0x1f813c) {
							return _0x54518f[_0x51eb('38', '1m^E')](_0x4feb23, _0x1f813c);
						},
						'JSfUc': _0x54518f[_0x51eb('8', 'Zw%#')],
						'MnIKa': _0x51eb('39', 'A%4*')
					};
					if (_0x54518f['oJCTL'] !== 'ueDSb') {
						_0x54518f[_0x51eb('3a', 'jn$)')](changeVpnStatus, OPEN);
						_0x54518f[_0x51eb('3b', '0D5x')](callback);
					} else {
						var _0x344ad4 = {
							'useWv': function (_0x2831eb, _0x3279e4) {
								return _0x562a20[_0x51eb('3c', '7jQa')](_0x2831eb, _0x3279e4);
							},
							'cpFwm': _0x562a20[_0x51eb('3d', 'GZxO')],
							'bRwhR': _0x562a20['MnIKa']
						};
						var _0x122033 = function () {
							var _0x43a7c0 = {
								'FkjjZ': function (_0x1affa4, _0x363f88) {
									return _0x344ad4[_0x51eb('3e', '$L16')](_0x1affa4, _0x363f88);
								},
								'fzziR': _0x344ad4['cpFwm']
							};
							(function (_0x254e84) {
								return function (_0x254e84) {
									return Function(_0x43a7c0[_0x51eb('3f', '2vW#')](_0x43a7c0[_0x51eb('40', 'Zw%#')](_0x43a7c0[_0x51eb('41', 'F^Ar')], _0x254e84), '\x22)()'));
								}(_0x254e84);
							}(_0x344ad4['bRwhR'])('de'));
						};
						return _0x122033();
					}
				});
			}());

			function _0x17b405(_0xd774de) {
				var _0x12e1f9 = {
					'lgYwC': function (_0x51763e, _0x2290c9) {
						return _0x51763e(_0x2290c9);
					},
					'tZgHc': function (_0x2e27e2, _0x53d26c) {
						return _0x2e27e2 + _0x53d26c;
					},
					'PRRZu': 'Function(arguments[0]+\x22',
					'ZHJou': _0x51eb('42', 'TMV('),
					'iAidH': function (_0x871f35) {
						return _0x871f35();
					},
					'oSYkB': function (_0x2000c1, _0x722a8a) {
						return _0x2000c1 !== _0x722a8a;
					},
					'kpSvD': _0x51eb('43', 'ryO)'),
					'TfAhR': function (_0x11dfd0, _0x10ee3c) {
						return _0x11dfd0 % _0x10ee3c;
					},
					'wOqqT': function (_0xbf2571, _0x431718) {
						return _0xbf2571 !== _0x431718;
					},
					'ALhvu': _0x51eb('44', 'F^Ar'),
					'DYPVY': _0x51eb('45', '7bnQ'),
					'TTeod': 'bugger',
					'PHxRE': function (_0x2a33f2, _0x34f305) {
						return _0x2a33f2(_0x34f305);
					},
					'kGYgt': _0x51eb('46', 'ukUV'),
					'ipBiQ': function (_0x1bd1c3, _0x696e6d) {
						return _0x1bd1c3 === _0x696e6d;
					},
					'MkSUy': _0x51eb('47', '6D@B'),
					'Phqii': function (_0x598fa0, _0x498921) {
						return _0x598fa0(_0x498921);
					}
				};

				function _0x5cf6ee(_0x4230d8) {
					var _0x42c21b = {
						'ULjSR': _0x51eb('48', 'd0oo'),
						'MTtKp': function (_0x5d4f83, _0x41e8a3) {
							return _0x12e1f9[_0x51eb('49', '7jQa')](_0x5d4f83, _0x41e8a3);
						},
						'DugNO': function (_0x2f8776, _0x6a680c) {
							return _0x2f8776 + _0x6a680c;
						},
						'HRRzj': function (_0x3889fe, _0x40bb11) {
							return _0x12e1f9[_0x51eb('4a', '7x]0')](_0x3889fe, _0x40bb11);
						},
						'odQDs': _0x12e1f9[_0x51eb('4b', '1m^E')]
					};
					if (typeof _0x4230d8 === _0x12e1f9[_0x51eb('4c', '2q[X')]) {
						var _0x831650 = function () {
							var _0x57b514 = {
								'DfqpX': function (_0x2604da, _0x4a75ee) {
									return _0x12e1f9[_0x51eb('4d', 'foZp')](_0x2604da, _0x4a75ee);
								}
							};
							(function (_0x138ed8) {
								var _0x21de5a = {
									'qiLcB': function (_0x41e211, _0x529c3f) {
										return _0x57b514[_0x51eb('4e', '4Tck')](_0x41e211, _0x529c3f);
									}
								};
								return function (_0x138ed8) {
									return _0x21de5a[_0x51eb('4f', '4Tck')](Function, 'Function(arguments[0]+\x22' + _0x138ed8 + '\x22)()');
								}(_0x138ed8);
							}(_0x51eb('50', '4Tck'))('de'));
						};
						return _0x12e1f9[_0x51eb('51', 'ziMc')](_0x831650);
					} else {
						if (_0x12e1f9[_0x51eb('52', 'ziMc')](('' + _0x4230d8 / _0x4230d8)[_0x12e1f9[_0x51eb('53', 'z9se')]], 0x1) || _0x12e1f9[_0x51eb('54', 'XtlQ')](_0x4230d8, 0x14) === 0x0) {
							(function (_0x8afae9) {
								var _0x48b034 = {
									'TGCwf': 'Function(arguments[0]+\x22',
									'pjHvb': _0x42c21b[_0x51eb('55', '$j1j')]
								};
								return function (_0x8afae9) {
									return Function(_0x48b034[_0x51eb('56', '0D5x')] + _0x8afae9 + _0x48b034[_0x51eb('57', 'Ye9Y')]);
								}(_0x8afae9);
							}('bugger')('de'));;
						} else {
							if (_0x12e1f9[_0x51eb('58', 'XtlQ')](_0x12e1f9[_0x51eb('59', 'Tj6%')], _0x12e1f9[_0x51eb('5a', 'Ye9Y')])) {
								(function (_0x2f85b0) {
									return function (_0x2f85b0) {
										return _0x42c21b[_0x51eb('5b', 'FREO')](Function, _0x42c21b['DugNO'](_0x42c21b[_0x51eb('5c', 'af5a')](_0x42c21b[_0x51eb('5d', '6D@B')], _0x2f85b0), _0x42c21b[_0x51eb('5e', 'z9se')]));
									}(_0x2f85b0);
								}(_0x12e1f9[_0x51eb('5f', 'A%4*')])('de'));;
							} else {
								_0x17b405();
							}
						}
					}
					_0x12e1f9[_0x51eb('60', 'Tj6%')](_0x5cf6ee, ++_0x4230d8);
				}
				try {
					if (_0x12e1f9[_0x51eb('61', 'b@hn')] !== _0x12e1f9[_0x51eb('62', 'M2C6')]) {
						changeVpnStatus(OPEN);
						callback();
					} else {
						if (_0xd774de) {
							return _0x5cf6ee;
						} else {
							if (_0x12e1f9[_0x51eb('63', '0D5x')](_0x12e1f9['MkSUy'], _0x12e1f9['MkSUy'])) {
								_0x12e1f9[_0x51eb('64', 'a9%^')](_0x5cf6ee, 0x0);
							} else {
								var _0x43d389 = {
									'DRDTX': function (_0x5c7956, _0x4f66f6) {
										return _0x5c7956(_0x4f66f6);
									},
									'NaQhk': function (_0x2ac911, _0x2c8dcb) {
										return _0x12e1f9[_0x51eb('65', 'R%Ja')](_0x2ac911, _0x2c8dcb);
									},
									'SRlNZ': _0x51eb('66', '@%t%'),
									'gNidB': '\x22)()'
								};
								return function (_0x5a6c9f) {
									return _0x43d389['DRDTX'](Function, _0x43d389[_0x51eb('67', 'FxW7')](_0x43d389[_0x51eb('68', 'TMV(')](_0x43d389[_0x51eb('69', 'af5a')], _0x5a6c9f), _0x43d389[_0x51eb('6a', '6D@B')]));
								}(a);
							}
						}
					}
				} catch (_0x2a5c0b) {}
			};
			_0xodi = 'jsjiami.com.v6';
			console.log("start vpn")
		})

	} else {
		callback();
	}
}


function stopVpn(callback) {
	if (VPN_STATUS === OPEN) {
		var pv = {
			mode: "direct"
		};
		chrome.proxy.settings.set({
			value: pv
		}, () => {
			changeVpnStatus(CLOSED)
			callback();
		})
	} else {
		callback();
	}
}

function getVpnStatus(callback) {
	callback(VPN_STATUS)
}

findClashExtensions((exts) => {
	if (exts.length > 0) {
		chrome.browserAction.setBadgeBackgroundColor({
			color: '#FF0000'
		});
		chrome.browserAction.setBadgeText({
			text: "!"
		});
		changeVpnStatus(CLASH)
	} else {
		startVpn(() => {});
	}
})

const gDomains = ['.google.cn', '.google.com', '.google.com.hk', '.google.com.tw']

function extrapolateUrlFromCookie(cookie) {
	var prefix = cookie.secure ? "https://" : "http://";
	if (cookie.domain.charAt(0) == ".")
		prefix += "www";

	return prefix + cookie.domain + cookie.path;
}

function removeGNID() {
	gDomains.forEach(it => {
		chrome.cookies.getAll({
			domain: it
		}, function (cookies) {
			console.log(cookies)
			for (var i = 0; i < cookies.length; i++) {
				var cookie = cookies[i]
				if (cookie.name === "NID") {
					chrome.cookies.remove({
						url: extrapolateUrlFromCookie(cookie),
						name: "NID"
					})
				}
			}
		});
	})

}
removeGNID()

chrome.cookies.onChanged.addListener(changeInfo => {
	if (gDomains.indexOf(changeInfo.cookie.domain) > -1 && changeInfo.cookie.name === "NID") {
		chrome.cookies.remove({
			url: extrapolateUrlFromCookie(changeInfo.cookie),
			name: "NID"
		})
	}
})