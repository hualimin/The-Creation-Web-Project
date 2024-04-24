﻿/*! https://github.com/xiazeyu/live2d-widget.js built@2019-4-6 09:38:17 */
webpackJsonpL2Dwidget([0], {
	76: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.captureFrame = e.theRealInit = void 0;
		var r, o = i(38),
			n = i(80),
			s = i(77),
			a = i(78),
			_ = i(84),
			h = i(81),
			l = i(79),
			$ = i(39),
			u = (r = $, r && r.__esModule ? r : {
				default: r
			}),
			p = i(37);
		var c = null,
			f = void 0,
			g = !1,
			d = null,
			y = null,
			m = null,
			T = null,
			P = !1,
			S = .5;

		function v(t, e, i) {
			if (e.x < i.left + i.width && e.y < i.top + i.height && e.x > i.left && e.y > i.top) return e;
			var r = t.x - e.x,
				o = t.y - e.y;

			function n(t, e) {
				return 180 * Math.acos((i = {
					x: 0,
					y: 1
				}, r = function (t, e) {
					var i = Math.sqrt(t * t + e * e);
					return {
						x: t / i,
						y: e / i
					}
				}(t, e), i.x * r.x + i.y * r.y)) / Math.PI;
				var i, r
			}
			var s = n(r, o);
			e.x < t.x && (s = 360 - s);
			var a = 360 - n(i.left - t.x, -1 * (i.top - t.y)),
				_ = 360 - n(i.left - t.x, -1 * (i.top + i.height - t.y)),
				h = n(i.left + i.width - t.x, -1 * (i.top - t.y)),
				l = n(i.left + i.width - t.x, -1 * (i.top + i.height - t.y)),
				$ = o / r,
				u = {};
			if (s < h) {
				var p = i.top - t.y,
					c = p / $;
				u = {
					y: t.y + p,
					x: t.x + c
				}
			} else if (s < l) {
				var f = i.left + i.width - t.x,
					g = f * $;
				u = {
					y: t.y + g,
					x: t.x + f
				}
			} else if (s < _) {
				var d = i.top + i.height - t.y,
					y = d / $;
				u = {
					y: t.y + d,
					x: t.x + y
				}
			} else if (s < a) {
				var m = t.x - i.left,
					T = m * $;
				u = {
					y: t.y - T,
					x: t.x - m
				}
			} else {
				var P = i.top - t.y,
					S = P / $;
				u = {
					y: t.y + P,
					x: t.x + S
				}
			}
			return u
		}

		function L(t) {
			P = !0;
			var e = n.currCanvas.getBoundingClientRect(),
				i = w(t.clientX - e.left),
				r = D(t.clientY - e.top),
				o = v({
					x: e.left + e.width / 2,
					y: e.top + e.height * S
				}, {
					x: t.clientX,
					y: t.clientY
				}, e),
				s = A(o.x - e.left),
				a = I(o.y - e.top);
			l.cDefine.DEBUG_MOUSE_LOG && console.log("modelTapEvent onMouseDown device( x:" + t.clientX + " y:" + t.clientY +
				" ) view( x:" + s + " y:" + a + ")"), i, r, p.L2Dwidget.emit("tap", t), c.tapEvent(s, a)
		}

		function M() {
			P && (P = !1), d.setPoint(0, 0)
		}

		function E(t) {
			if ("mousedown" == t.type) L(t);
			else if ("mousemove" == t.type) ! function (t) {
				P = !0;
				var e = n.currCanvas.getBoundingClientRect(),
					i = w(t.clientX - e.left),
					r = D(t.clientY - e.top),
					o = v({
						x: e.left + e.width / 2,
						y: e.top + e.height * S
					}, {
						x: t.clientX,
						y: t.clientY
					}, e),
					s = A(o.x - e.left),
					a = I(o.y - e.top);
				l.cDefine.DEBUG_MOUSE_LOG && console.log("modelTurnHead onMouseMove device( x:" + t.clientX + " y:" + t.clientY +
					" ) view( x:" + s + " y:" + a + ")"), i, r, d.setPoint(s, a)
			}(t);
			else if ("mouseup" == t.type) {
				if ("button" in t && 0 != t.button) return
			} else "mouseleave" == t.type && M()
		}

		function x(t) {
			var e = t.touches[0];
			"touchstart" == t.type ? 1 == t.touches.length && L(e) : "touchmove" == t.type ? function (t) {
				var e = n.currCanvas.getBoundingClientRect(),
					i = w(t.clientX - e.left),
					r = D(t.clientY - e.top),
					o = v({
						x: e.left + e.width / 2,
						y: e.top + e.height * S
					}, {
						x: t.clientX,
						y: t.clientY
					}, e),
					s = A(o.x - e.left),
					a = I(o.y - e.top);
				l.cDefine.DEBUG_MOUSE_LOG && console.log("followPointer onMouseMove device( x:" + t.clientX + " y:" + t.clientY +
					" ) view( x:" + s + " y:" + a + ")"), P && (i, r, d.setPoint(s, a))
			}(e) : "touchend" == t.type && M()
		}

		function A(t) {
			var e = T.transformX(t);
			return y.invertTransformX(e)
		}

		function I(t) {
			var e = T.transformY(t);
			return y.invertTransformY(e)
		}

		function w(t) {
			return T.transformX(t)
		}

		function D(t) {
			return T.transformY(t)
		}
		e.theRealInit = function () {
			(0, n.createElement)(), n.currCanvas.addEventListener && (window.addEventListener("click", E), window.addEventListener(
				"mousedown", E), window.addEventListener("mousemove", E), window.addEventListener("mouseup", E), document.addEventListener(
					"mouseleave", E), window.addEventListener("touchstart", x), window.addEventListener("touchend", x), window.addEventListener(
						"touchmove", x)), c = new _.cManager(p.L2Dwidget), d = new a.L2DTargetPoint;
			var t = n.currCanvas.getBoundingClientRect(),
				e = t.height / t.width,
				i = l.cDefine.VIEW_LOGICAL_LEFT,
				r = l.cDefine.VIEW_LOGICAL_RIGHT,
				$ = -e,
				P = e;
			(y = new a.L2DViewMatrix).setScreenRect(i, r, $, P), y.setMaxScreenRect(l.cDefine.VIEW_LOGICAL_MAX_LEFT, l.cDefine
				.VIEW_LOGICAL_MAX_RIGHT, l.cDefine.VIEW_LOGICAL_MAX_BOTTOM, l.cDefine.VIEW_LOGICAL_MAX_TOP), S = u.default.mobile() &&
				o.config.mobile.scale || o.config.model.scale, y.adjustScale(0, 0, S);
			var S;
			(m = new a.L2DMatrix44).multScale(1, t.width / t.height), (T = new a.L2DMatrix44).multTranslate(-t.width / 2, -t
				.height / 2), T.multScale(2 / t.width, -2 / t.height), s.Live2D.setGL(n.currWebGL), n.currWebGL.clearColor(0,
					0, 0, 0), v = o.config.model.jsonPath, c.reloadFlg = !0, c.count++, c.changeModel(n.currWebGL, v);
			var v;
			g || (g = !0, function t() {
				! function () {
					h.MatrixStack.reset(), h.MatrixStack.loadIdentity(), d.update(), c.setDrag(d.getX(), d.getY()), n.currWebGL.clear(
						n.currWebGL.COLOR_BUFFER_BIT), h.MatrixStack.multMatrix(m.getArray()), h.MatrixStack.multMatrix(y.getArray()),
						h.MatrixStack.push();
					for (var t = 0; t < c.numModels(); t++) {
						var e = c.getModel(t);
						if (null == e) return;
						e.initialized && !e.updating && (e.update(), e.draw(n.currWebGL))
					}
					h.MatrixStack.pop()
				}();
				var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame;
				e(t, n.currCanvas), void 0 !== f && (f(n.currCanvas.toDataURL()), f = void 0)
			}())
		}, e.captureFrame = function (t) {
			f = t
		}
	},
	77: function (t, e, i) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var i = !0;

			function r() {
				i || (this._$MT = null, this._$5S = null, this._$NP = 0, r._$42++, this._$5S = new U(this))
			}
			r._$0s = 1, r._$4s = 2, r._$42 = 0, r._$62 = function (t, e) {
				try {
					if (e instanceof ArrayBuffer && (e = new DataView(e)), !(e instanceof DataView)) throw new ht(
						"_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");
					var i, o = new Pt(e),
						n = o._$ST(),
						s = o._$ST(),
						_ = o._$ST();
					if (109 != n || 111 != s || 99 != _) throw new ht("_$gi _$C _$li , _$Q0 _$P0.");
					if (i = o._$ST(), o._$gr(i), i > G._$T7) {
						t._$NP |= r._$4s;
						throw new ht("_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : " + G._$T7 + " < _$f0 : " + i +
							" )@_$SS#loadModel()\n")
					}
					var h = o._$nP();
					if (i >= G._$s7) {
						var l = o._$9T(),
							$ = o._$9T();
						if (-30584 != l || -30584 != $) throw t._$NP |= r._$0s, new ht("_$gi _$C _$li , _$0 _$6 _$Ui.")
					}
					t._$KS(h);
					var u = t.getModelContext();
					u.setDrawParam(t.getDrawParam()), u.init()
				} catch (t) {
					a._$Rb(t)
				}
			}, r.prototype._$KS = function (t) {
				this._$MT = t
			}, r.prototype.getModelImpl = function () {
				return null == this._$MT && (this._$MT = new $, this._$MT._$zP()), this._$MT
			}, r.prototype.getCanvasWidth = function () {
				return null == this._$MT ? 0 : this._$MT.getCanvasWidth()
			}, r.prototype.getCanvasHeight = function () {
				return null == this._$MT ? 0 : this._$MT.getCanvasHeight()
			}, r.prototype.getParamFloat = function (t) {
				return "number" != typeof t && (t = this._$5S.getParamIndex(l.getID(t))), this._$5S.getParamFloat(t)
			}, r.prototype.setParamFloat = function (t, e, i) {
				"number" != typeof t && (t = this._$5S.getParamIndex(l.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(
					t, this._$5S.getParamFloat(t) * (1 - i) + e * i)
			}, r.prototype.addToParamFloat = function (t, e, i) {
				"number" != typeof t && (t = this._$5S.getParamIndex(l.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(
					t, this._$5S.getParamFloat(t) + e * i)
			}, r.prototype.multParamFloat = function (t, e, i) {
				"number" != typeof t && (t = this._$5S.getParamIndex(l.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(
					t, this._$5S.getParamFloat(t) * (1 + (e - 1) * i))
			}, r.prototype.getParamIndex = function (t) {
				return this._$5S.getParamIndex(l.getID(t))
			}, r.prototype.loadParam = function () {
				this._$5S.loadParam()
			}, r.prototype.saveParam = function () {
				this._$5S.saveParam()
			}, r.prototype.init = function () {
				this._$5S.init()
			}, r.prototype.update = function () {
				this._$5S.update()
			}, r.prototype._$Rs = function () {
				return a._$li("_$60 _$PT _$Rs()"), -1
			}, r.prototype._$Ds = function (t) {
				a._$li("_$60 _$PT _$SS#_$Ds() \n")
			}, r.prototype._$K2 = function () { }, r.prototype.draw = function () { }, r.prototype.getModelContext = function () {
				return this._$5S
			}, r.prototype._$s2 = function () {
				return this._$NP
			}, r.prototype._$P7 = function (t, e, i, r) {
				var o = -1,
					n = 0;
				if (0 != i)
					if (1 == t.length) {
						u = t[0];
						var s = 0 != this.getParamFloat(u),
							a = (p = e[0], this.getPartsOpacity(p)),
							_ = i / r;
						s ? (a += _) > 1 && (a = 1) : (a -= _) < 0 && (a = 0), this.setPartsOpacity(p, a)
					} else {
						for ($ = 0; $ < t.length; $++) {
							u = t[$];
							if (c = 0 != this.getParamFloat(u)) {
								if (o >= 0) break;
								o = $;
								p = e[$];
								n = this.getPartsOpacity(p), (n += i / r) > 1 && (n = 1)
							}
						}
						o < 0 && (console.log("No _$wi _$q0/ _$U default[%s]", t[0]), o = 0, n = 1, this.loadParam(), this.setParamFloat(
							t[o], n), this.saveParam());
						for ($ = 0; $ < t.length; $++) {
							p = e[$];
							if (o == $) this.setPartsOpacity(p, n);
							else {
								var h, l = this.getPartsOpacity(p);
								(1 - (h = n < .5 ? -.5 * n / .5 + 1 : .5 * (1 - n) / .5)) * (1 - n) > .15 && (h = 1 - .15 / (1 - n)), l >
									h && (l = h), this.setPartsOpacity(p, l)
							}
						}
					}
				else
					for (var $ = 0; $ < t.length; $++) {
						var u = t[$],
							p = e[$],
							c = 0 != this.getParamFloat(u);
						this.setPartsOpacity(p, c ? 1 : 0)
					}
			}, r.prototype.setPartsOpacity = function (t, e) {
				"number" != typeof t && (t = this._$5S.getPartsDataIndex(h.getID(t))), this._$5S.setPartsOpacity(t, e)
			}, r.prototype.getPartsDataIndex = function (t) {
				return t instanceof h || (t = h.getID(t)), this._$5S.getPartsDataIndex(t)
			}, r.prototype.getPartsOpacity = function (t) {
				return "number" != typeof t && (t = this._$5S.getPartsDataIndex(h.getID(t))), t < 0 ? 0 : this._$5S.getPartsOpacity(
					t)
			}, r.prototype.getDrawParam = function () { }, r.prototype.getDrawDataIndex = function (t) {
				return this._$5S.getDrawDataIndex(b.getID(t))
			}, r.prototype.getDrawData = function (t) {
				return this._$5S.getDrawData(t)
			}, r.prototype.getTransformedPoints = function (t) {
				var e = this._$5S._$C2(t);
				return e instanceof $t ? e.getTransformedPoints() : null
			}, r.prototype.getIndexArray = function (t) {
				if (t < 0 || t >= this._$5S._$aS.length) return null;
				var e = this._$5S._$aS[t];
				return null != e && e.getType() == W._$wb && e instanceof lt ? e.getIndexArray() : null
			};

			function o(t) {
				if (!i) {
					this.clipContextList = new Array, this.glcontext = t.gl, this.dp_webgl = t, this.curFrameNo = 0, this.firstError_clipInNotUpdate = !
						0, this.colorBuffer = 0, this.isInitGLFBFunc = !1, this.tmpBoundsOnModel = new P, at.glContext.length > at.frameBuffers
							.length && (this.curFrameNo = this.getMaskRenderTexture()), this.tmpModelToViewMatrix = new O, this.tmpMatrix2 =
						new O, this.tmpMatrixForMask = new O, this.tmpMatrixForDraw = new O, this.CHANNEL_COLORS = new Array;
					var e = new E;
					(e = new E).r = 0, e.g = 0, e.b = 0, e.a = 1, this.CHANNEL_COLORS.push(e), (e = new E).r = 1, e.g = 0, e.b = 0,
						e.a = 0, this.CHANNEL_COLORS.push(e), (e = new E).r = 0, e.g = 1, e.b = 0, e.a = 0, this.CHANNEL_COLORS.push(
							e), (e = new E).r = 0, e.g = 0, e.b = 1, e.a = 0, this.CHANNEL_COLORS.push(e);
					for (var r = 0; r < this.CHANNEL_COLORS.length; r++) this.dp_webgl.setChannelFlagAsColor(r, this.CHANNEL_COLORS[
						r])
				}
			}
			o.CHANNEL_COUNT = 4, o.RENDER_TEXTURE_USE_MIPMAP = !1, o.NOT_USED_FRAME = -100, o.prototype._$L7 = function () {
				if (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null), this.tmpMatrix2 && (this.tmpMatrix2 =
					null), this.tmpMatrixForMask && (this.tmpMatrixForMask = null), this.tmpMatrixForDraw && (this.tmpMatrixForDraw =
						null), this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null), this.CHANNEL_COLORS) {
					for (var t = this.CHANNEL_COLORS.length - 1; t >= 0; --t) this.CHANNEL_COLORS.splice(t, 1);
					this.CHANNEL_COLORS = []
				}
				this.releaseShader()
			}, o.prototype.releaseShader = function () {
				for (var t = at.frameBuffers.length, e = 0; e < t; e++) this.gl.deleteFramebuffer(at.frameBuffers[e].framebuffer);
				at.frameBuffers = [], at.glContext = []
			}, o.prototype.init = function (t, e, i) {
				for (var r = 0; r < e.length; r++) {
					var o = e[r].getClipIDList();
					if (null != o) {
						var s = this.findSameClip(o);
						null == s && (s = new n(this, t, o), this.clipContextList.push(s));
						var a = e[r].getDrawDataID(),
							_ = t.getDrawDataIndex(a);
						s.addClippedDrawData(a, _);
						i[r].clipBufPre_clipContext = s
					}
				}
			}, o.prototype.getMaskRenderTexture = function () {
				var t = null;
				return t = this.dp_webgl.createFramebuffer(), at.frameBuffers[this.dp_webgl.glno] = t, this.dp_webgl.glno
			}, o.prototype.setupClip = function (t, e) {
				for (var i = 0, r = 0; r < this.clipContextList.length; r++) {
					var o = this.clipContextList[r];
					this.calcClippedDrawTotalBounds(t, o), o.isUsing && i++
				}
				if (i > 0) {
					var n = e.gl.getParameter(e.gl.FRAMEBUFFER_BINDING),
						s = new Array(4);
					s[0] = 0, s[1] = 0, s[2] = e.gl.canvas.width, s[3] = e.gl.canvas.height, e.gl.viewport(0, 0, at.clippingMaskBufferSize,
						at.clippingMaskBufferSize), this.setupLayoutBounds(i), e.gl.bindFramebuffer(e.gl.FRAMEBUFFER, at.frameBuffers[
							this.curFrameNo].framebuffer), e.gl.clearColor(0, 0, 0, 0), e.gl.clear(e.gl.COLOR_BUFFER_BIT);
					for (r = 0; r < this.clipContextList.length; r++) {
						var a = (o = this.clipContextList[r]).allClippedDrawRect,
							_ = (o.layoutChannelNo, o.layoutBounds);
						this.tmpBoundsOnModel._$jL(a), this.tmpBoundsOnModel.expand(.05 * a.width, .05 * a.height);
						var h = _.width / this.tmpBoundsOnModel.width,
							l = _.height / this.tmpBoundsOnModel.height;
						this.tmpMatrix2.identity(), this.tmpMatrix2.translate(-1, -1, 0), this.tmpMatrix2.scale(2, 2, 1), this.tmpMatrix2
							.translate(_.x, _.y, 0), this.tmpMatrix2.scale(h, l, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x,
								-this.tmpBoundsOnModel.y, 0), this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m), this.tmpMatrix2.identity(),
							this.tmpMatrix2.translate(_.x, _.y, 0), this.tmpMatrix2.scale(h, l, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel
								.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);
						for (var $ = this.tmpMatrixForMask.getArray(), u = 0; u < 16; u++) o.matrixForMask[u] = $[u];
						var p = this.tmpMatrixForDraw.getArray();
						for (u = 0; u < 16; u++) o.matrixForDraw[u] = p[u];
						for (var c = o.clippingMaskDrawIndexList.length, f = 0; f < c; f++) {
							var g = o.clippingMaskDrawIndexList[f],
								d = t.getDrawData(g),
								y = t._$C2(g);
							e.setClipBufPre_clipContextForMask(o), d.draw(e, t, y)
						}
					}
					e.gl.bindFramebuffer(e.gl.FRAMEBUFFER, n), e.setClipBufPre_clipContextForMask(null), e.gl.viewport(s[0], s[1],
						s[2], s[3])
				}
			}, o.prototype.getColorBuffer = function () {
				return this.colorBuffer
			}, o.prototype.findSameClip = function (t) {
				for (var e = 0; e < this.clipContextList.length; e++) {
					var i = this.clipContextList[e],
						r = i.clipIDList.length;
					if (r == t.length) {
						for (var o = 0, n = 0; n < r; n++)
							for (var s = i.clipIDList[n], a = 0; a < r; a++)
								if (t[a] == s) {
									o++;
									break
								} if (o == r) return i
					}
				}
				return null
			}, o.prototype.calcClippedDrawTotalBounds = function (t, e) {
				for (var i = t._$Ri.getModelImpl().getCanvasWidth(), r = t._$Ri.getModelImpl().getCanvasHeight(), o = i > r ?
					i : r, n = o, s = o, a = 0, _ = 0, h = e.clippedDrawContextList.length, l = 0; l < h; l++) {
					var $ = e.clippedDrawContextList[l].drawDataIndex,
						u = t._$C2($);
					if (u._$yo()) {
						for (var p = u.getTransformedPoints(), c = p.length, f = [], g = [], d = 0, y = B._$i2; y < c; y += B._$No) f[
							d] = p[y], g[d] = p[y + 1], d++;
						var m = Math.min.apply(null, f),
							T = Math.min.apply(null, g),
							P = Math.max.apply(null, f),
							S = Math.max.apply(null, g);
						m < n && (n = m), T < s && (s = T), P > a && (a = P), S > _ && (_ = S)
					}
				}
				if (n == o) e.allClippedDrawRect.x = 0, e.allClippedDrawRect.y = 0, e.allClippedDrawRect.width = 0, e.allClippedDrawRect
					.height = 0, e.isUsing = !1;
				else {
					var v = a - n,
						L = _ - s;
					e.allClippedDrawRect.x = n, e.allClippedDrawRect.y = s, e.allClippedDrawRect.width = v, e.allClippedDrawRect.height =
						L, e.isUsing = !0
				}
			}, o.prototype.setupLayoutBounds = function (t) {
				var e = t / o.CHANNEL_COUNT,
					i = t % o.CHANNEL_COUNT;
				e = ~~e, i = ~~i;
				for (var r = 0, n = 0; n < o.CHANNEL_COUNT; n++) {
					var s = e + (n < i ? 1 : 0);
					if (0 == s);
					else if (1 == s) {
						($ = this.clipContextList[r++]).layoutChannelNo = n, $.layoutBounds.x = 0, $.layoutBounds.y = 0, $.layoutBounds
							.width = 1, $.layoutBounds.height = 1
					} else if (2 == s)
						for (var _ = 0; _ < s; _++) {
							var h = 0;
							l = ~~(l = _ % 2);
							($ = this.clipContextList[r++]).layoutChannelNo = n, $.layoutBounds.x = .5 * l, $.layoutBounds.y = 0, $.layoutBounds
								.width = .5, $.layoutBounds.height = 1
						} else if (s <= 4)
						for (_ = 0; _ < s; _++) {
							l = ~~(l = _ % 2), h = ~~(h = _ / 2);
							($ = this.clipContextList[r++]).layoutChannelNo = n, $.layoutBounds.x = .5 * l, $.layoutBounds.y = .5 * h,
								$.layoutBounds.width = .5, $.layoutBounds.height = .5
						} else if (s <= 9)
						for (_ = 0; _ < s; _++) {
							var l;
							l = ~~(l = _ % 3), h = ~~(h = _ / 3);
							var $;
							($ = this.clipContextList[r++]).layoutChannelNo = n, $.layoutBounds.x = l / 3, $.layoutBounds.y = h / 3,
								$.layoutBounds.width = 1 / 3, $.layoutBounds.height = 1 / 3
						} else a._$li("_$6 _$0P mask count : %d", s)
				}
			};

			function n(t, e, i) {
				this.clipIDList = new Array, this.clipIDList = i, this.clippingMaskDrawIndexList = new Array;
				for (var r = 0; r < i.length; r++) this.clippingMaskDrawIndexList.push(e.getDrawDataIndex(i[r]));
				this.clippedDrawContextList = new Array, this.isUsing = !0, this.layoutChannelNo = 0, this.layoutBounds = new P,
					this.allClippedDrawRect = new P, this.matrixForMask = new Float32Array(16), this.matrixForDraw = new Float32Array(
						16), this.owner = t
			}
			n.prototype.addClippedDrawData = function (t, e) {
				var i = new function (t, e) {
					this._$gP = t, this.drawDataIndex = e
				}(t, e);
				this.clippedDrawContextList.push(i)
			};

			function s() {
				i || (this._$dP = null, this._$eo = null, this._$V0 = null, this._$dP = 1e3, this._$eo = 1e3, this._$V0 = 1,
					this._$a0())
			}
			s._$JT = function (t, e, i) {
				var r = t / e,
					o = i / e,
					n = 1 - (1 - o) * (1 - o),
					s = 1 - (1 - o) * (1 - o),
					a = 1 / 3 * (1 - o) * n + (o * (2 / 3) + 1 / 3 * (1 - o)) * (1 - n),
					_ = (o + 2 / 3 * (1 - o)) * s + (o * (1 / 3) + 2 / 3 * (1 - o)) * (1 - s),
					h = 1 - 3 * _ + 3 * a - 0,
					l = 3 * _ - 6 * a + 0,
					$ = 3 * a - 0;
				if (r <= 0) return 0;
				if (r >= 1) return 1;
				var u = r * r;
				return h * (r * u) + l * u + $ * r + 0
			}, s.prototype._$a0 = function () { }, s.prototype.setFadeIn = function (t) {
				this._$dP = t
			}, s.prototype.setFadeOut = function (t) {
				this._$eo = t
			}, s.prototype._$pT = function (t) {
				this._$V0 = t
			}, s.prototype.getFadeOut = function () {
				return this._$eo
			}, s.prototype._$4T = function () {
				return this._$eo
			}, s.prototype._$mT = function () {
				return this._$V0
			}, s.prototype.getDurationMSec = function () {
				return -1
			}, s.prototype.getLoopDurationMSec = function () {
				return -1
			}, s.prototype.updateParam = function (t, e) {
				if (e._$AT && !e._$9L) {
					var i = A.getUserTimeMSec();
					if (e._$z2 < 0) {
						e._$z2 = i, e._$bs = i;
						var r = this.getDurationMSec();
						e._$Do < 0 && (e._$Do = r <= 0 ? -1 : e._$z2 + r)
					}
					var o = this._$V0;
					0 <= (o = o * (0 == this._$dP ? 1 : _t._$r2((i - e._$bs) / this._$dP)) * (0 == this._$eo || e._$Do < 0 ? 1 :
						_t._$r2((e._$Do - i) / this._$eo))) && o <= 1 || console.log("### assert!! ### "), this.updateParamExe(t, i,
							o, e), e._$Do > 0 && e._$Do < i && (e._$9L = !0)
				}
			}, s.prototype.updateParamExe = function (t, e, i, r) { };

			function a() { }
			a._$8s = 0, a._$fT = new Object, a.start = function (t) {
				var e = a._$fT[t];
				null == e && ((e = new function () {
					this._$r = null, this._$0S = null
				})._$r = t, a._$fT[t] = e), e._$0S = A.getSystemTimeMSec()
			}, a.dump = function (t) {
				var e = a._$fT[t];
				if (null != e) {
					var i = A.getSystemTimeMSec() - e._$0S;
					return console.log(t + " : " + i + "ms"), i
				}
				return -1
			}, a.end = function (t) {
				var e = a._$fT[t];
				if (null != e) {
					return A.getSystemTimeMSec() - e._$0S
				}
				return -1
			}, a._$li = function (t, e) {
				console.log("_$li : " + t + "\n", e)
			}, a._$Ji = function (t, e) {
				console.log(t, e)
			}, a._$dL = function (t, e) {
				console.log(t, e), console.log("\n")
			}, a._$KL = function (t, e) {
				for (var i = 0; i < e; i++) i % 16 == 0 && i > 0 ? console.log("\n") : i % 8 == 0 && i > 0 && console.log("  "),
					console.log("%02X ", 255 & t[i]);
				console.log("\n")
			}, a._$nr = function (t, e, i) {
				console.log("%s\n", t);
				for (var r = e.length, o = 0; o < r; ++o) console.log("%5d", e[o]), console.log("%s\n", i), console.log(",");
				console.log("\n")
			}, a._$Rb = function (t) {
				console.log("dump exception : " + t), console.log("stack :: " + t.stack)
			};

			function _() {
				i || (this.x = null, this.y = null, this.width = null, this.height = null)
			}
			_.prototype._$8P = function () {
				return .5 * (this.x + this.x + this.width)
			}, _.prototype._$6P = function () {
				return .5 * (this.y + this.y + this.height)
			}, _.prototype._$EL = function () {
				return this.x + this.width
			}, _.prototype._$5T = function () {
				return this.y + this.height
			}, _.prototype._$jL = function (t, e, i, r) {
				this.x = t, this.y = e, this.width = i, this.height = r
			}, _.prototype._$jL = function (t) {
				this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
			};

			function h(t) {
				i || it.prototype.constructor.call(this, t)
			}
			h.prototype = new it, h._$tP = new Object, h._$27 = function () {
				h._$tP.clear()
			}, h.getID = function (t) {
				var e = h._$tP[t];
				return null == e && (e = new h(t), h._$tP[t] = e), e
			}, h.prototype._$3s = function () {
				return new h
			};

			function l(t) {
				i || it.prototype.constructor.call(this, t)
			}
			l.prototype = new it, l._$tP = new Object, l._$27 = function () {
				l._$tP.clear()
			}, l.getID = function (t) {
				var e = l._$tP[t];
				return null == e && (e = new l(t), l._$tP[t] = e), e
			}, l.prototype._$3s = function () {
				return new l
			};

			function $() {
				i || (this._$vo = null, this._$F2 = null, this._$ao = 400, this._$1S = 400, $._$42++)
			}
			$._$42 = 0, $.prototype._$zP = function () {
				null == this._$vo && (this._$vo = new rt), null == this._$F2 && (this._$F2 = new Array)
			}, $.prototype.getCanvasWidth = function () {
				return this._$ao
			}, $.prototype.getCanvasHeight = function () {
				return this._$1S
			}, $.prototype._$F0 = function (t) {
				this._$vo = t._$nP(), this._$F2 = t._$nP(), this._$ao = t._$6L(), this._$1S = t._$6L()
			}, $.prototype._$6S = function (t) {
				this._$F2.push(t)
			}, $.prototype._$Xr = function () {
				return this._$F2
			}, $.prototype._$E2 = function () {
				return this._$vo
			};

			function u() {
				i || (this.p1 = new p, this.p2 = new p, this._$Fo = 0, this._$Db = 0, this._$L2 = 0, this._$M2 = 0, this._$ks =
					0, this._$9b = 0, this._$iP = 0, this._$iT = 0, this._$lL = new Array, this._$qP = new Array, this.setup(.3,
						.5, .1))
			}
			u.prototype.setup = function (t, e, i) {
				this._$ks = this._$Yb(), this.p2._$xT(), 3 == arguments.length && (this._$Fo = t, this._$L2 = e, this.p1._$p =
					i, this.p2._$p = i, this.p2.y = t, this.setup())
			}, u.prototype.getPhysicsPoint1 = function () {
				return this.p1
			}, u.prototype.getPhysicsPoint2 = function () {
				return this.p2
			}, u.prototype._$qr = function () {
				return this._$Db
			}, u.prototype._$pr = function (t) {
				this._$Db = t
			}, u.prototype._$5r = function () {
				return this._$M2
			}, u.prototype._$Cs = function () {
				return this._$9b
			}, u.prototype._$Yb = function () {
				return -180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y)) / Math.PI
			}, u.prototype.addSrcParam = function (t, e, i, r) {
				var o = new f(t, e, i, r);
				this._$lL.push(o)
			}, u.prototype.addTargetParam = function (t, e, i, r) {
				var o = new d(t, e, i, r);
				this._$qP.push(o)
			}, u.prototype.update = function (t, e) {
				if (0 == this._$iP) return this._$iP = this._$iT = e, void (this._$Fo = Math.sqrt((this.p1.x - this.p2.x) * (
					this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)));
				var i = (e - this._$iT) / 1e3;
				if (0 != i) {
					for (var r = this._$lL.length - 1; r >= 0; --r) {
						this._$lL[r]._$oP(t, this)
					}
					this._$oo(t, i), this._$M2 = this._$Yb(), this._$9b = (this._$M2 - this._$ks) / i, this._$ks = this._$M2
				}
				for (r = this._$qP.length - 1; r >= 0; --r) {
					this._$qP[r]._$YS(t, this)
				}
				this._$iT = e
			}, u.prototype._$oo = function (t, e) {
				e < .033 && (e = .033);
				var i = 1 / e;
				this.p1.vx = (this.p1.x - this.p1._$s0) * i, this.p1.vy = (this.p1.y - this.p1._$70) * i, this.p1.ax = (this.p1
					.vx - this.p1._$7L) * i, this.p1.ay = (this.p1.vy - this.p1._$HL) * i, this.p1.fx = this.p1.ax * this.p1._$p,
					this.p1.fy = this.p1.ay * this.p1._$p, this.p1._$xT();
				var r, o, n = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x),
					s = Math.cos(n),
					a = Math.sin(n),
					_ = 9.8 * this.p2._$p,
					h = this._$Db * vt._$bS,
					l = _ * Math.cos(n - h);
				r = l * a, o = l * s;
				var $ = -this.p1.fx * a * a,
					u = -this.p1.fy * a * s,
					p = -this.p2.vx * this._$L2,
					c = -this.p2.vy * this._$L2;
				this.p2.fx = r + $ + p, this.p2.fy = o + u + c, this.p2.ax = this.p2.fx / this.p2._$p, this.p2.ay = this.p2.fy /
					this.p2._$p, this.p2.vx += this.p2.ax * e, this.p2.vy += this.p2.ay * e, this.p2.x += this.p2.vx * e, this.p2
						.y += this.p2.vy * e;
				var f = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y -
					this.p2.y));
				this.p2.x = this.p1.x + this._$Fo * (this.p2.x - this.p1.x) / f, this.p2.y = this.p1.y + this._$Fo * (this.p2.y -
					this.p1.y) / f, this.p2.vx = (this.p2.x - this.p2._$s0) * i, this.p2.vy = (this.p2.y - this.p2._$70) * i,
					this.p2._$xT()
			};

			function p() {
				this._$p = 1, this.x = 0, this.y = 0, this.vx = 0, this.vy = 0, this.ax = 0, this.ay = 0, this.fx = 0, this.fy =
					0, this._$s0 = 0, this._$70 = 0, this._$7L = 0, this._$HL = 0
			}
			p.prototype._$xT = function () {
				this._$s0 = this.x, this._$70 = this.y, this._$7L = this.vx, this._$HL = this.vy
			};

			function c(t, e, i) {
				this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t, this.scale = e, this._$V0 = i
			}
			c.prototype._$oP = function (t, e) { };

			function f(t, e, i, r) {
				c.prototype.constructor.call(this, e, i, r), this._$tL = null, this._$tL = t
			}
			f.prototype = new c, f.prototype._$oP = function (t, e) {
				var i = this.scale * t.getParamFloat(this._$wL),
					r = e.getPhysicsPoint1();
				switch (this._$tL) {
					default:
					case u.Src.SRC_TO_X:
						r.x = r.x + (i - r.x) * this._$V0;
						break;
					case u.Src.SRC_TO_Y:
						r.y = r.y + (i - r.y) * this._$V0;
						break;
					case u.Src.SRC_TO_G_ANGLE:
						var o = e._$qr();
						o += (i - o) * this._$V0, e._$pr(o)
				}
			};

			function g(t, e, i) {
				this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t, this.scale = e, this._$V0 = i
			}
			g.prototype._$YS = function (t, e) { };

			function d(t, e, i, r) {
				g.prototype.constructor.call(this, e, i, r), this._$YP = null, this._$YP = t
			}
			d.prototype = new g, d.prototype._$YS = function (t, e) {
				switch (this._$YP) {
					default:
					case u.Target.TARGET_FROM_ANGLE:
						t.setParamFloat(this._$wL, this.scale * e._$5r(), this._$V0);
						break;
					case u.Target.TARGET_FROM_ANGLE_V:
						t.setParamFloat(this._$wL, this.scale * e._$Cs(), this._$V0)
				}
			}, u.Src = function () { }, u.Src.SRC_TO_X = "SRC_TO_X", u.Src.SRC_TO_Y = "SRC_TO_Y", u.Src.SRC_TO_G_ANGLE =
				"SRC_TO_G_ANGLE", u.Target = function () { }, u.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE", u.Target.TARGET_FROM_ANGLE_V =
				"TARGET_FROM_ANGLE_V";

			function y() {
				i || (this._$fL = 0, this._$gL = 0, this._$B0 = 1, this._$z0 = 1, this._$qT = 0, this.reflectX = !1, this.reflectY = !
					1)
			}
			y.prototype.init = function (t) {
				this._$fL = t._$fL, this._$gL = t._$gL, this._$B0 = t._$B0, this._$z0 = t._$z0, this._$qT = t._$qT, this.reflectX =
					t.reflectX, this.reflectY = t.reflectY
			}, y.prototype._$F0 = function (t) {
				this._$fL = t._$_T(), this._$gL = t._$_T(), this._$B0 = t._$_T(), this._$z0 = t._$_T(), this._$qT = t._$_T(),
					t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this.reflectX = t._$po(), this.reflectY = t._$po())
			}, y.prototype._$e = function () { };
			var T = function () { };
			T._$ni = function (t, e, i, r, o, n, s, a, _) {
				var h = s * n - a * o;
				if (0 == h) return null;
				var l, $ = ((t - i) * n - (e - r) * o) / h;
				return l = 0 != o ? (t - i - $ * s) / o : (e - r - $ * a) / n, isNaN(l) && (l = (t - i - $ * s) / o, isNaN(l) &&
					(l = (e - r - $ * a) / n), isNaN(l) && (console.log("a is NaN @UtVector#_$ni() "), console.log("v1x : " + o),
						console.log("v1x != 0 ? " + (0 != o)))), null == _ ? new Array(l, $) : (_[0] = l, _[1] = $, _)
			};

			function P() {
				i || (this.x = null, this.y = null, this.width = null, this.height = null)
			}
			P.prototype._$8P = function () {
				return this.x + .5 * this.width
			}, P.prototype._$6P = function () {
				return this.y + .5 * this.height
			}, P.prototype._$EL = function () {
				return this.x + this.width
			}, P.prototype._$5T = function () {
				return this.y + this.height
			}, P.prototype._$jL = function (t, e, i, r) {
				this.x = t, this.y = e, this.width = i, this.height = r
			}, P.prototype._$jL = function (t) {
				this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
			}, P.prototype.contains = function (t, e) {
				return this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height
			}, P.prototype.expand = function (t, e) {
				this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
			};

			function S() { }
			S._$Z2 = function (t, e, i, r) {
				var o = e._$Q2(t, i),
					n = t._$vs(),
					s = t._$Tr();
				if (e._$zr(n, s, o), o <= 0) return r[n[0]];
				if (1 == o) {
					return (a = r[n[0]]) + ((_ = r[n[1]]) - a) * ($ = s[0]) | 0
				}
				if (2 == o) {
					var a = r[n[0]],
						_ = r[n[1]],
						h = r[n[2]],
						l = r[n[3]],
						$ = s[0],
						u = s[1];
					return (S = a + (_ - a) * $ | 0) + ((h + (l - h) * $ | 0) - S) * u | 0
				}
				if (3 == o) {
					var p = r[n[0]],
						c = r[n[1]],
						f = r[n[2]],
						g = r[n[3]],
						d = r[n[4]],
						y = r[n[5]],
						m = r[n[6]],
						T = r[n[7]],
						P = ($ = s[0], u = s[1], s[2]);
					return (S = (a = p + (c - p) * $ | 0) + ((_ = f + (g - f) * $ | 0) - a) * u | 0) + (((h = d + (y - d) * $ | 0) +
						((l = m + (T - m) * $ | 0) - h) * u | 0) - S) * P | 0
				}
				if (4 == o) {
					var S, v = r[n[0]],
						L = r[n[1]],
						M = r[n[2]],
						E = r[n[3]],
						x = r[n[4]],
						A = r[n[5]],
						I = r[n[6]],
						w = r[n[7]],
						D = r[n[8]],
						O = r[n[9]],
						b = r[n[10]],
						R = r[n[11]],
						F = r[n[12]],
						C = r[n[13]],
						N = r[n[14]],
						B = r[n[15]],
						G = ($ = s[0], u = s[1], P = s[2], s[3]);
					return (S = (a = (p = v + (L - v) * $ | 0) + ((c = M + (E - M) * $ | 0) - p) * u | 0) + ((_ = (f = x + (A - x) *
						$ | 0) + ((g = I + (w - I) * $ | 0) - f) * u | 0) - a) * P | 0) + (((h = (d = D + (O - D) * $ | 0) + ((y =
							b + (R - b) * $ | 0) - d) * u | 0) + ((l = (m = F + (C - F) * $ | 0) + ((T = N + (B - N) * $ | 0) - m) *
								u | 0) - h) * P | 0) - S) * G | 0
				}
				for (var U = 1 << o, Y = new Float32Array(U), k = 0; k < U; k++) {
					for (var V = k, X = 1, z = 0; z < o; z++) X *= V % 2 == 0 ? 1 - s[z] : s[z], V /= 2;
					Y[k] = X
				}
				for (var H = new Float32Array(U), W = 0; W < U; W++) H[W] = r[n[W]];
				var j = 0;
				for (W = 0; W < U; W++) j += Y[W] * H[W];
				return j + .5 | 0
			}, S._$br = function (t, e, i, r) {
				var o = e._$Q2(t, i),
					n = t._$vs(),
					s = t._$Tr();
				if (e._$zr(n, s, o), o <= 0) return r[n[0]];
				if (1 == o) {
					return (a = r[n[0]]) + ((_ = r[n[1]]) - a) * ($ = s[0])
				}
				if (2 == o) {
					var a = r[n[0]],
						_ = r[n[1]],
						h = r[n[2]],
						l = r[n[3]],
						$ = s[0];
					return (1 - (T = s[1])) * (a + (_ - a) * $) + T * (h + (l - h) * $)
				}
				if (3 == o) {
					var u = r[n[0]],
						p = r[n[1]],
						c = r[n[2]],
						f = r[n[3]],
						g = r[n[4]],
						d = r[n[5]],
						y = r[n[6]],
						m = r[n[7]],
						T = ($ = s[0], s[1]);
					return (1 - (N = s[2])) * ((1 - T) * (u + (p - u) * $) + T * (c + (f - c) * $)) + N * ((1 - T) * (g + (d - g) *
						$) + T * (y + (m - y) * $))
				}
				if (4 == o) {
					var P = r[n[0]],
						S = r[n[1]],
						v = r[n[2]],
						L = r[n[3]],
						M = r[n[4]],
						E = r[n[5]],
						x = r[n[6]],
						A = r[n[7]],
						I = r[n[8]],
						w = r[n[9]],
						D = r[n[10]],
						O = r[n[11]],
						b = r[n[12]],
						R = r[n[13]],
						F = r[n[14]],
						C = r[n[15]],
						N = ($ = s[0], T = s[1], s[2]),
						B = s[3];
					return (1 - B) * ((1 - N) * ((1 - T) * (P + (S - P) * $) + T * (v + (L - v) * $)) + N * ((1 - T) * (M + (E -
						M) * $) + T * (x + (A - x) * $))) + B * ((1 - N) * ((1 - T) * (I + (w - I) * $) + T * (D + (O - D) * $)) +
							N * ((1 - T) * (b + (R - b) * $) + T * (F + (C - F) * $)))
				}
				for (var G = 1 << o, U = new Float32Array(G), Y = 0; Y < G; Y++) {
					for (var k = Y, V = 1, X = 0; X < o; X++) V *= k % 2 == 0 ? 1 - s[X] : s[X], k /= 2;
					U[Y] = V
				}
				for (var z = new Float32Array(G), H = 0; H < G; H++) z[H] = r[n[H]];
				var W = 0;
				for (H = 0; H < G; H++) W += U[H] * z[H];
				return W
			}, S._$Vr = function (t, e, i, r, o, n, s, a) {
				var _ = e._$Q2(t, i),
					h = t._$vs(),
					l = t._$Tr();
				e._$zr(h, l, _);
				var $ = 2 * r,
					u = s;
				if (_ <= 0) {
					var p = o[h[0]];
					if (2 == a && 0 == s) A._$jT(p, 0, n, 0, $);
					else
						for (var c = 0; c < $;) n[u] = p[c++], n[u + 1] = p[c++], u += a
				} else if (1 == _) {
					p = o[h[0]];
					var f = o[h[1]],
						g = 1 - (m = l[0]);
					for (c = 0; c < $;) n[u] = p[c] * g + f[c] * m, ++c, n[u + 1] = p[c] * g + f[c] * m, ++c, u += a
				} else if (2 == _) {
					p = o[h[0]], f = o[h[1]];
					var d = o[h[2]],
						y = o[h[3]],
						m = l[0],
						T = (k = 1 - (b = l[1])) * (g = 1 - m),
						P = k * m,
						S = b * g,
						v = b * m;
					for (c = 0; c < $;) n[u] = T * p[c] + P * f[c] + S * d[c] + v * y[c], ++c, n[u + 1] = T * p[c] + P * f[c] + S *
						d[c] + v * y[c], ++c, u += a
				} else if (3 == _) {
					var L = o[h[0]],
						M = o[h[1]],
						E = o[h[2]],
						x = o[h[3]],
						I = o[h[4]],
						w = o[h[5]],
						D = o[h[6]],
						O = o[h[7]],
						b = (m = l[0], l[1]),
						R = (V = 1 - (st = l[2])) * (k = 1 - b) * (g = 1 - m),
						F = V * k * m,
						C = V * b * g,
						N = V * b * m,
						B = st * k * g,
						G = st * k * m,
						U = st * b * g,
						Y = st * b * m;
					for (c = 0; c < $;) n[u] = R * L[c] + F * M[c] + C * E[c] + N * x[c] + B * I[c] + G * w[c] + U * D[c] + Y * O[
						c], ++c, n[u + 1] = R * L[c] + F * M[c] + C * E[c] + N * x[c] + B * I[c] + G * w[c] + U * D[c] + Y * O[c],
						++c, u += a
				} else if (4 == _) {
					var k, V, X = o[h[0]],
						z = o[h[1]],
						H = o[h[2]],
						W = o[h[3]],
						j = o[h[4]],
						q = o[h[5]],
						J = o[h[6]],
						Q = o[h[7]],
						Z = o[h[8]],
						K = o[h[9]],
						tt = o[h[10]],
						et = o[h[11]],
						it = o[h[12]],
						rt = o[h[13]],
						ot = o[h[14]],
						nt = o[h[15]],
						st = (m = l[0], b = l[1], l[2]),
						at = l[3],
						_t = 1 - at,
						ht = _t * (V = 1 - st) * (k = 1 - b) * (g = 1 - m),
						lt = _t * V * k * m,
						$t = _t * V * b * g,
						ut = _t * V * b * m,
						pt = _t * st * k * g,
						ct = _t * st * k * m,
						ft = _t * st * b * g,
						gt = _t * st * b * m,
						dt = at * V * k * g,
						yt = at * V * k * m,
						mt = at * V * b * g,
						Tt = at * V * b * m,
						Pt = at * st * k * g,
						St = at * st * k * m,
						vt = at * st * b * g,
						Lt = at * st * b * m;
					for (c = 0; c < $;) n[u] = ht * X[c] + lt * z[c] + $t * H[c] + ut * W[c] + pt * j[c] + ct * q[c] + ft * J[c] +
						gt * Q[c] + dt * Z[c] + yt * K[c] + mt * tt[c] + Tt * et[c] + Pt * it[c] + St * rt[c] + vt * ot[c] + Lt * nt[
						c], ++c, n[u + 1] = ht * X[c] + lt * z[c] + $t * H[c] + ut * W[c] + pt * j[c] + ct * q[c] + ft * J[c] + gt *
						Q[c] + dt * Z[c] + yt * K[c] + mt * tt[c] + Tt * et[c] + Pt * it[c] + St * rt[c] + vt * ot[c] + Lt * nt[c],
						++c, u += a
				} else {
					for (var Mt = 1 << _, Et = new Float32Array(Mt), xt = 0; xt < Mt; xt++) {
						for (var At = xt, It = 1, wt = 0; wt < _; wt++) It *= At % 2 == 0 ? 1 - l[wt] : l[wt], At /= 2;
						Et[xt] = It
					}
					for (var Dt = new Float32Array(Mt), Ot = 0; Ot < Mt; Ot++) Dt[Ot] = o[h[Ot]];
					for (c = 0; c < $;) {
						var bt = 0,
							Rt = 0,
							Ft = c + 1;
						for (Ot = 0; Ot < Mt; Ot++) bt += Et[Ot] * Dt[Ot][c], Rt += Et[Ot] * Dt[Ot][Ft];
						c += 2, n[u] = bt, n[u + 1] = Rt, u += a
					}
				}
			};

			function v() {
				i || (this.x = null, this.y = null)
			}
			v.prototype._$HT = function (t, e) {
				this.x = t, this.y = e
			}, v.prototype._$HT = function (t) {
				this.x = t.x, this.y = t.y
			};

			function L() {
				i || (this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS =
					null, this.clipID = null, this.clipIDList = new Array)
			}
			L._$ur = -2, L._$ES = 500, L._$wb = 2, L._$8S = 3, L._$52 = L._$ES, L._$R2 = L._$ES, L._$or = function () {
				return L._$52
			}, L._$Pr = function () {
				return L._$R2
			}, L.prototype.convertClipIDForV2_11 = function (t) {
				var e = [];
				return null == t ? null : 0 == t.length ? null : /,/.test(t) ? e = t.id.split(",") : (e.push(t.id), e)
			}, L.prototype._$F0 = function (t) {
				this._$gP = t._$nP(), this._$dr = t._$nP(), this._$GS = t._$nP(), this._$qb = t._$6L(), this._$Lb = t._$cS(),
					this._$mS = t._$Tb(), t.getFormatVersion() >= G._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(
						this.clipID)) : this.clipIDList = [], this._$MS(this._$Lb)
			}, L.prototype.getClipIDList = function () {
				return this.clipIDList
			}, L.prototype.init = function (t) { }, L.prototype._$Nr = function (t, e) {
				if (e._$IS[0] = !1, e._$Us = S._$Z2(t, this._$GS, e._$IS, this._$Lb), at._$Zs);
				else if (e._$IS[0]) return;
				e._$7s = S._$br(t, this._$GS, e._$IS, this._$mS)
			}, L.prototype._$2b = function (t, e) { }, L.prototype.getDrawDataID = function () {
				return this._$gP
			}, L.prototype._$j2 = function (t) {
				this._$gP = t
			}, L.prototype.getOpacity = function (t, e) {
				return e._$7s
			}, L.prototype._$zS = function (t, e) {
				return e._$Us
			}, L.prototype._$MS = function (t) {
				for (var e = t.length - 1; e >= 0; --e) {
					var i = t[e];
					i < L._$52 ? L._$52 = i : i > L._$R2 && (L._$R2 = i)
				}
			}, L.prototype.getTargetBaseDataID = function () {
				return this._$dr
			}, L.prototype._$gs = function (t) {
				this._$dr = t
			}, L.prototype._$32 = function () {
				return null != this._$dr && this._$dr != dt._$2o()
			}, L.prototype.preDraw = function (t, e, i) { }, L.prototype.draw = function (t, e, i) { }, L.prototype.getType =
				function () { }, L.prototype._$B2 = function (t, e, i) { };

			function M() {
				i || (this._$Eb = M._$ps, this._$lT = 1, this._$C0 = 1, this._$tT = 1, this._$WL = 1, this.culling = !1, this.matrix4x4 =
					new Float32Array(16), this.premultipliedAlpha = !1, this.anisotropy = 0, this.clippingProcess = M.CLIPPING_PROCESS_NONE,
					this.clipBufPre_clipContextMask = null, this.clipBufPre_clipContextDraw = null, this.CHANNEL_COLORS = new Array
				)
			}
			M._$ps = 32, M.CLIPPING_PROCESS_NONE = 0, M.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1, M.CLIPPING_PROCESS_MULTIPLY_ALPHA =
				2, M.CLIPPING_PROCESS_DRAW = 3, M.CLIPPING_PROCESS_CLEAR_ALPHA = 4, M.prototype.setChannelFlagAsColor =
				function (t, e) {
					this.CHANNEL_COLORS[t] = e
				}, M.prototype.getChannelFlagAsColor = function (t) {
					return this.CHANNEL_COLORS[t]
				}, M.prototype._$ZT = function () { }, M.prototype._$Uo = function (t, e, i, r, o, n, s) { }, M.prototype._$Rs =
				function () {
					return -1
				}, M.prototype._$Ds = function (t) { }, M.prototype.setBaseColor = function (t, e, i, r) {
					t < 0 ? t = 0 : t > 1 && (t = 1), e < 0 ? e = 0 : e > 1 && (e = 1), i < 0 ? i = 0 : i > 1 && (i = 1), r < 0 ?
						r = 0 : r > 1 && (r = 1), this._$lT = t, this._$C0 = e, this._$tT = i, this._$WL = r
				}, M.prototype._$WP = function (t) {
					this.culling = t
				}, M.prototype.setMatrix = function (t) {
					for (var e = 0; e < 16; e++) this.matrix4x4[e] = t[e]
				}, M.prototype._$IT = function () {
					return this.matrix4x4
				}, M.prototype.setPremultipliedAlpha = function (t) {
					this.premultipliedAlpha = t
				}, M.prototype.isPremultipliedAlpha = function () {
					return this.premultipliedAlpha
				}, M.prototype.setAnisotropy = function (t) {
					this.anisotropy = t
				}, M.prototype.getAnisotropy = function () {
					return this.anisotropy
				}, M.prototype.getClippingProcess = function () {
					return this.clippingProcess
				}, M.prototype.setClippingProcess = function (t) {
					this.clippingProcess = t
				}, M.prototype.setClipBufPre_clipContextForMask = function (t) {
					this.clipBufPre_clipContextMask = t
				}, M.prototype.getClipBufPre_clipContextMask = function () {
					return this.clipBufPre_clipContextMask
				}, M.prototype.setClipBufPre_clipContextForDraw = function (t) {
					this.clipBufPre_clipContextDraw = t
				}, M.prototype.getClipBufPre_clipContextDraw = function () {
					return this.clipBufPre_clipContextDraw
				};

			function E() {
				i || (this.a = 1, this.r = 1, this.g = 1, this.b = 1, this.scale = 1, this._$ho = 1, this.blendMode = at.L2D_COLOR_BLEND_MODE_MULT)
			}

			function x() {
				i || (this._$kP = null, this._$dr = null, this._$Ai = !0, this._$mS = null)
			}
			x._$ur = -2, x._$c2 = 1, x._$_b = 2, x.prototype._$F0 = function (t) {
				this._$kP = t._$nP(), this._$dr = t._$nP()
			}, x.prototype.readV2_opacity = function (t) {
				t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._$mS = t._$Tb())
			}, x.prototype.init = function (t) { }, x.prototype._$Nr = function (t, e) { }, x.prototype.interpolateOpacity =
				function (t, e, i, r) {
					null == this._$mS ? i.setInterpolatedOpacity(1) : i.setInterpolatedOpacity(S._$br(t, e, r, this._$mS))
				}, x.prototype._$2b = function (t, e) { }, x.prototype._$nb = function (t, e, i, r, o, n, s) { }, x.prototype.getType =
				function () { }, x.prototype._$gs = function (t) {
					this._$dr = t
				}, x.prototype._$a2 = function (t) {
					this._$kP = t
				}, x.prototype.getTargetBaseDataID = function () {
					return this._$dr
				}, x.prototype.getBaseDataID = function () {
					return this._$kP
				}, x.prototype._$32 = function () {
					return null != this._$dr && this._$dr != dt._$2o()
				};

			function A() { }
			A._$W2 = 0, A._$CS = A._$W2, A._$Mo = function () {
				return !0
			}, A._$XP = function (t) {
				try {
					for (var e = getTimeMSec(); getTimeMSec() - e < t;);
				} catch (t) {
					t._$Rb()
				}
			}, A.getUserTimeMSec = function () {
				return A._$CS == A._$W2 ? A.getSystemTimeMSec() : A._$CS
			}, A.setUserTimeMSec = function (t) {
				A._$CS = t
			}, A.updateUserTimeMSec = function () {
				return A._$CS = A.getSystemTimeMSec()
			}, A.getTimeMSec = function () {
				return (new Date).getTime()
			}, A.getSystemTimeMSec = function () {
				return (new Date).getTime()
			}, A._$Q = function (t) { }, A._$jT = function (t, e, i, r, o) {
				for (var n = 0; n < o; n++) i[r + n] = t[e + n]
			};

			function I() {
				i || (this._$VP = 0, this._$wL = null, this._$GP = null, this._$8o = I._$ds, this._$2r = -1, this._$O2 = 0,
					this._$ri = 0)
			}
			I._$ds = -2, I.prototype._$F0 = function (t) {
				this._$wL = t._$nP(), this._$VP = t._$6L(), this._$GP = t._$nP()
			}, I.prototype.getParamIndex = function (t) {
				return this._$2r != t && (this._$8o = I._$ds), this._$8o
			}, I.prototype._$Pb = function (t, e) {
				this._$8o = t, this._$2r = e
			}, I.prototype.getParamID = function () {
				return this._$wL
			}, I.prototype._$yP = function (t) {
				this._$wL = t
			}, I.prototype._$N2 = function () {
				return this._$VP
			}, I.prototype._$d2 = function () {
				return this._$GP
			}, I.prototype._$t2 = function (t, e) {
				this._$VP = t, this._$GP = e
			}, I.prototype._$Lr = function () {
				return this._$O2
			}, I.prototype._$wr = function (t) {
				this._$O2 = t
			}, I.prototype._$SL = function () {
				return this._$ri
			}, I.prototype._$AL = function (t) {
				this._$ri = t
			};

			function w() { }
			w.startsWith = function (t, e, i) {
				var r = e + i.length;
				if (r >= t.length) return !1;
				for (var o = e; o < r; o++)
					if (w.getChar(t, o) != i.charAt(o - e)) return !1;
				return !0
			}, w.getChar = function (t, e) {
				return String.fromCharCode(t.getUint8(e))
			}, w.createString = function (t, e, i) {
				for (var r = new ArrayBuffer(2 * i), o = new Uint16Array(r), n = 0; n < i; n++) o[n] = t.getUint8(e + n);
				return String.fromCharCode.apply(null, o)
			}, w._$LS = function (t, e, i, r) {
				t instanceof ArrayBuffer && (t = new DataView(t));
				var o = i,
					n = !1,
					s = !1,
					a = 0,
					_ = w.getChar(t, o);
				"-" == _ && (n = !0, o++);
				for (var h = !1; o < e; o++) {
					switch (_ = w.getChar(t, o)) {
						case "0":
							a *= 10;
							break;
						case "1":
							a = 10 * a + 1;
							break;
						case "2":
							a = 10 * a + 2;
							break;
						case "3":
							a = 10 * a + 3;
							break;
						case "4":
							a = 10 * a + 4;
							break;
						case "5":
							a = 10 * a + 5;
							break;
						case "6":
							a = 10 * a + 6;
							break;
						case "7":
							a = 10 * a + 7;
							break;
						case "8":
							a = 10 * a + 8;
							break;
						case "9":
							a = 10 * a + 9;
							break;
						case ".":
							s = !0, o++, h = !0;
							break;
						default:
							h = !0
					}
					if (h) break
				}
				if (s)
					for (var l = .1, $ = !1; o < e; o++) {
						switch (_ = w.getChar(t, o)) {
							case "0":
								break;
							case "1":
								a += 1 * l;
								break;
							case "2":
								a += 2 * l;
								break;
							case "3":
								a += 3 * l;
								break;
							case "4":
								a += 4 * l;
								break;
							case "5":
								a += 5 * l;
								break;
							case "6":
								a += 6 * l;
								break;
							case "7":
								a += 7 * l;
								break;
							case "8":
								a += 8 * l;
								break;
							case "9":
								a += 9 * l;
								break;
							default:
								$ = !0
						}
						if (l *= .1, $) break
					}
				return n && (a = -a), r[0] = o, a
			};

			function D() {
				i || (this._$Ob = null)
			}
			D.prototype._$zP = function () {
				this._$Ob = new Array
			}, D.prototype._$F0 = function (t) {
				this._$Ob = t._$nP()
			}, D.prototype._$Ur = function (t) {
				if (t._$WS()) return !0;
				for (var e = t._$v2(), i = this._$Ob.length - 1; i >= 0; --i) {
					var r = this._$Ob[i].getParamIndex(e);
					if (r == I._$ds && (r = t.getParamIndex(this._$Ob[i].getParamID())), t._$Xb(r)) return !0
				}
				return !1
			}, D.prototype._$Q2 = function (t, e) {
				for (var i, r, o = this._$Ob.length, n = t._$v2(), s = 0, a = 0; a < o; a++) {
					var _ = this._$Ob[a];
					if ((i = _.getParamIndex(n)) == I._$ds && (i = t.getParamIndex(_.getParamID()), _._$Pb(i, n)), i < 0) throw new Exception(
						"err 23242 : " + _.getParamID());
					var h = i < 0 ? 0 : t.getParamFloat(i);
					r = _._$N2();
					var l, $, u = _._$d2(),
						p = -1,
						c = 0;
					if (r < 1);
					else if (1 == r) (l = u[0]) - B._$J < h && h < l + B._$J ? (p = 0, c = 0) : (p = 0, e[0] = !0);
					else if (h < (l = u[0]) - B._$J) p = 0, e[0] = !0;
					else if (h < l + B._$J) p = 0;
					else {
						for (var f = !1, g = 1; g < r; ++g) {
							if (h < ($ = u[g]) + B._$J) {
								$ - B._$J < h ? p = g : (p = g - 1, c = (h - l) / ($ - l), s++), f = !0;
								break
							}
							l = $
						}
						f || (p = r - 1, c = 0, e[0] = !0)
					}
					_._$wr(p), _._$AL(c)
				}
				return s
			}, D.prototype._$zr = function (t, e, i) {
				var r = 1 << i;
				r + 1 > B._$Qb && console.log("err 23245\n");
				for (var o = this._$Ob.length, n = 1, s = 1, a = 0, _ = 0; _ < r; ++_) t[_] = 0;
				for (var h = 0; h < o; ++h) {
					var l = this._$Ob[h];
					if (0 == l._$SL()) {
						if (($ = l._$Lr() * n) < 0 && at._$3T) throw new Exception("err 23246");
						for (_ = 0; _ < r; ++_) t[_] += $
					} else {
						var $ = n * l._$Lr(),
							u = n * (l._$Lr() + 1);
						for (_ = 0; _ < r; ++_) t[_] += (_ / s | 0) % 2 == 0 ? $ : u;
						e[a++] = l._$SL(), s *= 2
					}
					n *= l._$N2()
				}
				t[r] = 65535, e[a] = -1
			}, D.prototype._$h2 = function (t, e, i) {
				for (var r = new Float32Array(e), o = 0; o < e; ++o) r[o] = i[o];
				var n = new I;
				n._$yP(t), n._$t2(e, r), this._$Ob.push(n)
			}, D.prototype._$J2 = function (t) {
				for (var e = t, i = this._$Ob.length, r = 0; r < i; ++r) {
					var o = this._$Ob[r],
						n = o._$N2(),
						s = e % o._$N2(),
						a = o._$d2()[s];
					console.log("%s[%d]=%7.2f / ", o.getParamID(), s, a), e /= n
				}
				console.log("\n")
			}, D.prototype.getParamCount = function () {
				return this._$Ob.length
			}, D.prototype._$zs = function () {
				return this._$Ob
			};

			function O() {
				this.m = new Float32Array(16), this.identity()
			}
			O.prototype.identity = function () {
				for (var t = 0; t < 16; t++) this.m[t] = t % 5 == 0 ? 1 : 0
			}, O.prototype.getArray = function () {
				return this.m
			}, O.prototype.getCopyMatrix = function () {
				return new Float32Array(this.m)
			}, O.prototype.setMatrix = function (t) {
				if (null != t && 16 == t.length)
					for (var e = 0; e < 16; e++) this.m[e] = t[e]
			}, O.prototype.mult = function (t, e, i) {
				return null == e ? null : (this == e ? this.mult_safe(this.m, t.m, e.m, i) : this.mult_fast(this.m, t.m, e.m,
					i), e)
			}, O.prototype.mult_safe = function (t, e, i, r) {
				if (t == i) {
					var o = new Array(16);
					this.mult_fast(t, e, o, r);
					for (var n = 15; n >= 0; --n) i[n] = o[n]
				} else this.mult_fast(t, e, i, r)
			}, O.prototype.mult_fast = function (t, e, i, r) {
				r ? (i[0] = t[0] * e[0] + t[4] * e[1] + t[8] * e[2], i[4] = t[0] * e[4] + t[4] * e[5] + t[8] * e[6], i[8] = t[
					0] * e[8] + t[4] * e[9] + t[8] * e[10], i[12] = t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12], i[1] =
					t[1] * e[0] + t[5] * e[1] + t[9] * e[2], i[5] = t[1] * e[4] + t[5] * e[5] + t[9] * e[6], i[9] = t[1] * e[8] +
					t[5] * e[9] + t[9] * e[10], i[13] = t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13], i[2] = t[2] * e[0] +
					t[6] * e[1] + t[10] * e[2], i[6] = t[2] * e[4] + t[6] * e[5] + t[10] * e[6], i[10] = t[2] * e[8] + t[6] * e[
					9] + t[10] * e[10], i[14] = t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14], i[3] = i[7] = i[11] = 0, i[
					15] = 1) : (i[0] = t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], i[4] = t[0] * e[4] + t[4] * e[5] +
						t[8] * e[6] + t[12] * e[7], i[8] = t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], i[12] = t[0] *
						e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], i[1] = t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] *
						e[3], i[5] = t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], i[9] = t[1] * e[8] + t[5] * e[9] + t[9] *
						e[10] + t[13] * e[11], i[13] = t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], i[2] = t[2] * e[0] +
						t[6] * e[1] + t[10] * e[2] + t[14] * e[3], i[6] = t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], i[
						10] = t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], i[14] = t[2] * e[12] + t[6] * e[13] + t[10] *
						e[14] + t[14] * e[15], i[3] = t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], i[7] = t[3] * e[4] +
						t[7] * e[5] + t[11] * e[6] + t[15] * e[7], i[11] = t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11],
						i[15] = t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15])
			}, O.prototype.translate = function (t, e, i) {
				this.m[12] = this.m[0] * t + this.m[4] * e + this.m[8] * i + this.m[12], this.m[13] = this.m[1] * t + this.m[5] *
					e + this.m[9] * i + this.m[13], this.m[14] = this.m[2] * t + this.m[6] * e + this.m[10] * i + this.m[14],
					this.m[15] = this.m[3] * t + this.m[7] * e + this.m[11] * i + this.m[15]
			}, O.prototype.scale = function (t, e, i) {
				this.m[0] *= t, this.m[4] *= e, this.m[8] *= i, this.m[1] *= t, this.m[5] *= e, this.m[9] *= i, this.m[2] *= t,
					this.m[6] *= e, this.m[10] *= i, this.m[3] *= t, this.m[7] *= e, this.m[11] *= i
			}, O.prototype.rotateX = function (t) {
				var e = vt.fcos(t),
					i = vt._$9(t),
					r = this.m[4];
				this.m[4] = r * e + this.m[8] * i, this.m[8] = r * -i + this.m[8] * e, r = this.m[5], this.m[5] = r * e + this
					.m[9] * i, this.m[9] = r * -i + this.m[9] * e, r = this.m[6], this.m[6] = r * e + this.m[10] * i, this.m[10] =
					r * -i + this.m[10] * e, r = this.m[7], this.m[7] = r * e + this.m[11] * i, this.m[11] = r * -i + this.m[11] *
					e
			}, O.prototype.rotateY = function (t) {
				var e = vt.fcos(t),
					i = vt._$9(t),
					r = this.m[0];
				this.m[0] = r * e + this.m[8] * -i, this.m[8] = r * i + this.m[8] * e, r = this.m[1], this.m[1] = r * e + this
					.m[9] * -i, this.m[9] = r * i + this.m[9] * e, r = m[2], this.m[2] = r * e + this.m[10] * -i, this.m[10] = r *
					i + this.m[10] * e, r = m[3], this.m[3] = r * e + this.m[11] * -i, this.m[11] = r * i + this.m[11] * e
			}, O.prototype.rotateZ = function (t) {
				var e = vt.fcos(t),
					i = vt._$9(t),
					r = this.m[0];
				this.m[0] = r * e + this.m[4] * i, this.m[4] = r * -i + this.m[4] * e, r = this.m[1], this.m[1] = r * e + this
					.m[5] * i, this.m[5] = r * -i + this.m[5] * e, r = this.m[2], this.m[2] = r * e + this.m[6] * i, this.m[6] =
					r * -i + this.m[6] * e, r = this.m[3], this.m[3] = r * e + this.m[7] * i, this.m[7] = r * -i + this.m[7] * e
			};

			function b(t) {
				i || it.prototype.constructor.call(this, t)
			}
			b.prototype = new it, b._$tP = new Object, b._$27 = function () {
				b._$tP.clear()
			}, b.getID = function (t) {
				var e = b._$tP[t];
				return null == e && (e = new b(t), b._$tP[t] = e), e
			}, b.prototype._$3s = function () {
				return new b
			};

			function R() {
				i || (this._$7 = 1, this._$f = 0, this._$H = 0, this._$g = 1, this._$k = 0, this._$w = 0, this._$hi =
					STATE_IDENTITY, this._$Z = _$pS)
			}
			R._$kS = -1, R._$pS = 0, R._$hb = 1, R.STATE_IDENTITY = 0, R._$gb = 1, R._$fo = 2, R._$go = 4, R.prototype.transform =
				function (t, e, i) {
					var r, o, n, s, a, _, h = 0,
						l = 0;
					switch (this._$hi) {
						default:
							return;
						case R._$go | R._$fo | R._$gb:
							for (r = this._$7, o = this._$H, n = this._$k, s = this._$f, a = this._$g, _ = this._$w; --i >= 0;) {
								var $ = t[h++],
									u = t[h++];
								e[l++] = r * $ + o * u + n, e[l++] = s * $ + a * u + _
							}
							return;
						case R._$go | R._$fo:
							for (r = this._$7, o = this._$H, s = this._$f, a = this._$g; --i >= 0;) {
								$ = t[h++], u = t[h++];
								e[l++] = r * $ + o * u, e[l++] = s * $ + a * u
							}
							return;
						case R._$go | R._$gb:
							for (o = this._$H, n = this._$k, s = this._$f, _ = this._$w; --i >= 0;) {
								$ = t[h++];
								e[l++] = o * t[h++] + n, e[l++] = s * $ + _
							}
							return;
						case R._$go:
							for (o = this._$H, s = this._$f; --i >= 0;) {
								$ = t[h++];
								e[l++] = o * t[h++], e[l++] = s * $
							}
							return;
						case R._$fo | R._$gb:
							for (r = this._$7, n = this._$k, a = this._$g, _ = this._$w; --i >= 0;) e[l++] = r * t[h++] + n, e[l++] = a *
								t[h++] + _;
							return;
						case R._$fo:
							for (r = this._$7, a = this._$g; --i >= 0;) e[l++] = r * t[h++], e[l++] = a * t[h++];
							return;
						case R._$gb:
							for (n = this._$k, _ = this._$w; --i >= 0;) e[l++] = t[h++] + n, e[l++] = t[h++] + _;
							return;
						case R.STATE_IDENTITY:
							return void (t == e && h == l || A._$jT(t, h, e, l, 2 * i))
					}
				}, R.prototype.update = function () {
					0 == this._$H && 0 == this._$f ? 1 == this._$7 && 1 == this._$g ? 0 == this._$k && 0 == this._$w ? (this._$hi =
						R.STATE_IDENTITY, this._$Z = R._$pS) : (this._$hi = R._$gb, this._$Z = R._$hb) : 0 == this._$k && 0 == this._$w ?
							(this._$hi = R._$fo, this._$Z = R._$kS) : (this._$hi = R._$fo | R._$gb, this._$Z = R._$kS) : 0 == this._$7 &&
								0 == this._$g ? 0 == this._$k && 0 == this._$w ? (this._$hi = R._$go, this._$Z = R._$kS) : (this._$hi = R._$go |
									R._$gb, this._$Z = R._$kS) : 0 == this._$k && 0 == this._$w ? (this._$hi = R._$go | R._$fo, this._$Z = R._$kS) :
								(this._$hi = R._$go | R._$fo | R._$gb, this._$Z = R._$kS)
				}, R.prototype._$RT = function (t) {
					this._$IT(t);
					var e = t[0],
						i = t[2],
						r = t[1],
						o = t[3],
						n = Math.sqrt(e * e + r * r),
						s = e * o - i * r;
					0 == n ? at._$so && console.log("affine._$RT() / rt==0") : (t[0] = n, t[1] = s / n, t[2] = (r * o + e * i) / s,
						t[3] = Math.atan2(r, e))
				}, R.prototype._$ho = function (t, e, i, r) {
					var o = new Float32Array(6),
						n = new Float32Array(6);
					t._$RT(o), e._$RT(n);
					var s = new Float32Array(6);
					s[0] = o[0] + (n[0] - o[0]) * i, s[1] = o[1] + (n[1] - o[1]) * i, s[2] = o[2] + (n[2] - o[2]) * i, s[3] = o[3] +
						(n[3] - o[3]) * i, s[4] = o[4] + (n[4] - o[4]) * i, s[5] = o[5] + (n[5] - o[5]) * i, r._$CT(s)
				}, R.prototype._$CT = function (t) {
					var e = Math.cos(t[3]),
						i = Math.sin(t[3]);
					this._$7 = t[0] * e, this._$f = t[0] * i, this._$H = t[1] * (t[2] * e - i), this._$g = t[1] * (t[2] * i + e),
						this._$k = t[4], this._$w = t[5], this.update()
				}, R.prototype._$IT = function (t) {
					t[0] = this._$7, t[1] = this._$f, t[2] = this._$H, t[3] = this._$g, t[4] = this._$k, t[5] = this._$w
				};

			function F() {
				i || (s.prototype.constructor.call(this), this.motions = new Array, this._$7r = null, this._$7r = F._$Co++,
					this._$D0 = 30, this._$yT = 0, this._$E = !0, this.loopFadeIn = !0, this._$AS = -1, _$a0())
			}
			F.prototype = new s, F._$cs = "VISIBLE:", F._$ar = "LAYOUT:", F._$Co = 0, F._$D2 = [], F._$1T = 1, F.loadMotion =
				function (t) {
					var e = new F,
						i = [0],
						r = t.length;
					e._$yT = 0;
					for (var o = 0; o < r; ++o) {
						var n = 255 & t[o];
						if ("\n" != n && "\r" != n)
							if ("#" != n)
								if ("$" != n) {
									if ("a" <= n && n <= "z" || "A" <= n && n <= "Z" || "_" == n) {
										for (h = o, l = -1; o < r && ("\r" != (n = 255 & t[o]) && "\n" != n); ++o)
											if ("=" == n) {
												l = o;
												break
											} if (l >= 0) {
												var s = new N;
												w.startsWith(t, h, F._$cs) ? (s._$RP = N._$hs, s._$4P = new String(t, h, l - h)) : w.startsWith(t, h, F._$ar) ?
													(s._$4P = new String(t, h + 7, l - h - 7), w.startsWith(t, h + 7, "ANCHOR_X") ? s._$RP = N._$xs : w.startsWith(
														t, h + 7, "ANCHOR_Y") ? s._$RP = N._$us : w.startsWith(t, h + 7, "SCALE_X") ? s._$RP = N._$qs : w.startsWith(
															t, h + 7, "SCALE_Y") ? s._$RP = N._$Ys : w.startsWith(t, h + 7, "X") ? s._$RP = N._$ws : w.startsWith(
																t, h + 7, "Y") && (s._$RP = N._$Ns)) : (s._$RP = N._$Fr, s._$4P = new String(t, h, l - h)), e.motions.push(
																	s);
												var a = 0;
												for (F._$D2.clear(), o = l + 1; o < r && ("\r" != (n = 255 & t[o]) && "\n" != n); ++o)
													if ("," != n && " " != n && "\t" != n) {
														u = w._$LS(t, r, o, i);
														if (i[0] > 0) {
															F._$D2.push(u), a++;
															var _ = i[0];
															if (_ < o) {
																console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
																break
															}
															o = _
														}
													} s._$I0 = F._$D2._$BL(), a > e._$yT && (e._$yT = a)
											}
									}
								} else {
									for (var h = o, l = -1; o < r && ("\r" != (n = 255 & t[o]) && "\n" != n); ++o)
										if ("=" == n) {
											l = o;
											break
										} var $ = !1;
									if (l >= 0)
										for (l == h + 4 && "f" == t[h + 1] && "p" == t[h + 2] && "s" == t[h + 3] && ($ = !0), o = l + 1; o < r &&
											("\r" != (n = 255 & t[o]) && "\n" != n); ++o)
											if ("," != n && " " != n && "\t" != n) {
												var u = w._$LS(t, r, o, i);
												i[0] > 0 && $ && 5 < u && u < 121 && (e._$D0 = u), o = i[0]
											} for (; o < r && ("\n" != t[o] && "\r" != t[o]); ++o);
								}
							else
								for (; o < r && ("\n" != t[o] && "\r" != t[o]); ++o);
					}
					return e._$AS = 1e3 * e._$yT / e._$D0 | 0, e
				}, F.prototype.getDurationMSec = function () {
					return this._$AS
				}, F.prototype.dump = function () {
					for (var t = 0; t < this.motions.length; t++) {
						var e = this.motions[t];
						console.log("_$wL[%s] [%d]. ", e._$4P, e._$I0.length);
						for (var i = 0; i < e._$I0.length && i < 10; i++) console.log("%5.2f ,", e._$I0[i]);
						console.log("\n")
					}
				}, F.prototype.updateParamExe = function (t, e, i, r) {
					for (var o = (e - r._$z2) * this._$D0 / 1e3, n = 0 | o, s = o - n, a = 0; a < this.motions.length; a++) {
						var _ = this.motions[a],
							h = _._$I0.length,
							l = _._$4P;
						if (_._$RP == N._$hs) {
							var $ = _._$I0[n >= h ? h - 1 : n];
							t.setParamFloat(l, $)
						} else if (N._$ws <= _._$RP && _._$RP <= N._$Ys);
						else {
							var u = t.getParamFloat(l),
								p = _._$I0[n >= h ? h - 1 : n],
								c = u + (p + (_._$I0[n + 1 >= h ? h - 1 : n + 1] - p) * s - u) * i;
							t.setParamFloat(l, c)
						}
					}
					n >= this._$yT && (this._$E ? (r._$z2 = e, this.loopFadeIn && (r._$bs = e)) : r._$9L = !0)
				}, F.prototype._$r0 = function () {
					return this._$E
				}, F.prototype._$aL = function (t) {
					this._$E = t
				}, F.prototype.isLoopFadeIn = function () {
					return this.loopFadeIn
				}, F.prototype.setLoopFadeIn = function (t) {
					this.loopFadeIn = t
				};

			function C() {
				this._$P = new Float32Array(100), this.size = 0
			}
			C.prototype.clear = function () {
				this.size = 0
			}, C.prototype.add = function (t) {
				if (this._$P.length <= this.size) {
					var e = new Float32Array(2 * this.size);
					A._$jT(this._$P, 0, e, 0, this.size), this._$P = e
				}
				this._$P[this.size++] = t
			}, C.prototype._$BL = function () {
				var t = new Float32Array(this.size);
				return A._$jT(this._$P, 0, t, 0, this.size), t
			};

			function N() {
				this._$4P = null, this._$I0 = null, this._$RP = null
			}
			N._$Fr = 0, N._$hs = 1, N._$ws = 100, N._$Ns = 101, N._$xs = 102, N._$us = 103, N._$qs = 104, N._$Ys = 105;

			function B() { }
			B._$Ms = 1, B._$Qs = 2, B._$i2 = 0, B._$No = 2, B._$do = B._$Ms, B._$Ls = !0, B._$1r = 5, B._$Qb = 65, B._$J =
				1e-4, B._$FT = .001, B._$Ss = 3;

			function G() { }
			G._$o7 = 6, G._$S7 = 7, G._$s7 = 8, G._$77 = 9, G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10, G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 =
				11, G._$T7 = G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1, G._$Is = -2004318072, G._$h0 = 0, G._$4L = 23, G._$7P = 33,
				G._$uT = function (t) {
					console.log("_$bo :: _$6 _$mo _$E0 : %d\n", t)
				}, G._$9o = function (t) {
					if (t < 40) return G._$uT(t), null;
					if (t < 50) return G._$uT(t), null;
					if (t < 60) return G._$uT(t), null;
					if (t < 100) switch (t) {
						case 65:
							return new Z;
						case 66:
							return new D;
						case 67:
							return new I;
						case 68:
							return new z;
						case 69:
							return new y;
						case 70:
							return new lt;
						default:
							return G._$uT(t), null
					} else if (t < 150) switch (t) {
						case 131:
							return new nt;
						case 133:
							return new tt;
						case 136:
							return new $;
						case 137:
							return new rt;
						case 142:
							return new j
					}
					return G._$uT(t), null
				};

			function U(t) {
				i || (this._$QT = !0, this._$co = -1, this._$qo = 0, this._$pb = new Array(U._$is), this._$_2 = new Float32Array(
					U._$is), this._$vr = new Float32Array(U._$is), this._$Rr = new Float32Array(U._$is), this._$Or = new Float32Array(
						U._$is), this._$fs = new Float32Array(U._$is), this._$Js = new Array(U._$is), this._$3S = new Array, this._$aS =
					new Array, this._$Bo = null, this._$F2 = new Array, this._$db = new Array, this._$8b = new Array, this._$Hr =
					new Array, this._$Ws = null, this._$Vs = null, this._$Er = null, this._$Es = new Int16Array(B._$Qb), this._$ZP =
					new Float32Array(2 * B._$1r), this._$Ri = t, this._$b0 = U._$HP++, this.clipManager = null, this.dp_webgl =
					null)
			}
			U._$HP = 0, U._$_0 = !0, U._$V2 = -1, U._$W0 = -1, U._$jr = !1, U._$ZS = !0, U._$tr = -1e6, U._$lr = 1e6, U._$is =
				32, U._$e = !1, U.prototype.getDrawDataIndex = function (t) {
					for (var e = this._$aS.length - 1; e >= 0; --e)
						if (null != this._$aS[e] && this._$aS[e].getDrawDataID() == t) return e;
					return -1
				}, U.prototype.getDrawData = function (t) {
					if (t instanceof b) {
						if (null == this._$Bo) {
							this._$Bo = new Object;
							for (var e = this._$aS.length, i = 0; i < e; i++) {
								var r = this._$aS[i],
									o = r.getDrawDataID();
								null != o && (this._$Bo[o] = r)
							}
						}
						return this._$Bo[id]
					}
					return t < this._$aS.length ? this._$aS[t] : null
				}, U.prototype.release = function () {
					this._$3S.clear(), this._$aS.clear(), this._$F2.clear(), null != this._$Bo && this._$Bo.clear(), this._$db.clear(),
						this._$8b.clear(), this._$Hr.clear()
				}, U.prototype.init = function () {
					this._$co++, this._$F2.length > 0 && this.release();
					for (var t = this._$Ri.getModelImpl(), e = t._$Xr(), i = e.length, r = new Array, n = new Array, s = 0; s < i; ++
						s) {
						var a = e[s];
						this._$F2.push(a), this._$Hr.push(a.init(this));
						for (var _ = a.getBaseData(), h = _.length, l = 0; l < h; ++l) r.push(_[l]);
						for (l = 0; l < h; ++l) {
							var $ = _[l].init(this);
							$._$l2(s), n.push($)
						}
						var u = a.getDrawData(),
							p = u.length;
						for (l = 0; l < p; ++l) {
							var c = u[l],
								f = c.init(this);
							f._$IP = s, this._$aS.push(c), this._$8b.push(f)
						}
					}
					for (var g = r.length, d = dt._$2o(); ;) {
						var y = !1;
						for (s = 0; s < g; ++s) {
							var m = r[s];
							if (null != m) {
								var T = m.getTargetBaseDataID();
								(null == T || T == d || this.getBaseDataIndex(T) >= 0) && (this._$3S.push(m), this._$db.push(n[s]), r[s] =
									null, y = !0)
							}
						}
						if (!y) break
					}
					var P = t._$E2();
					if (null != P) {
						var S = P._$1s();
						if (null != S) {
							var v = S.length;
							for (s = 0; s < v; ++s) {
								var L = S[s];
								null != L && this._$02(L.getParamID(), L.getDefaultValue(), L.getMinValue(), L.getMaxValue())
							}
						}
					}
					this.clipManager = new o(this.dp_webgl), this.clipManager.init(this, this._$aS, this._$8b), this._$QT = !0
				}, U.prototype.update = function () {
					U._$e && a.start("_$zL");
					for (var t = this._$_2.length, e = 0; e < t; e++) this._$_2[e] != this._$vr[e] && (this._$Js[e] = U._$ZS, this
						._$vr[e] = this._$_2[e]);
					var i = this._$3S.length,
						r = this._$aS.length,
						o = W._$or(),
						n = W._$Pr() - o + 1;
					(null == this._$Ws || this._$Ws.length < n) && (this._$Ws = new Int16Array(n), this._$Vs = new Int16Array(n));
					for (e = 0; e < n; e++) this._$Ws[e] = U._$V2, this._$Vs[e] = U._$V2;
					(null == this._$Er || this._$Er.length < r) && (this._$Er = new Int16Array(r));
					for (e = 0; e < r; e++) this._$Er[e] = U._$W0;
					U._$e && a.dump("_$zL"), U._$e && a.start("_$UL");
					for (var s = null, _ = 0; _ < i; ++_) {
						var h = this._$3S[_],
							l = this._$db[_];
						try {
							h._$Nr(this, l), h._$2b(this, l)
						} catch (t) {
							null == s && (s = t)
						}
					}
					null != s && U._$_0 && a._$Rb(s), U._$e && a.dump("_$UL"), U._$e && a.start("_$DL");
					for (var $ = null, u = 0; u < r; ++u) {
						var p = this._$aS[u],
							c = this._$8b[u];
						try {
							if (p._$Nr(this, c), c._$u2()) continue;
							p._$2b(this, c);
							var f, g = Math.floor(p._$zS(this, c) - o);
							try {
								f = this._$Vs[g]
							} catch (t) {
								console.log("_$li :: %s / %s        @@_$fS\n", t.toString(), p.getDrawDataID().toString()), g = Math.floor(
									p._$zS(this, c) - o);
								continue
							}
							f == U._$V2 ? this._$Ws[g] = u : this._$Er[f] = u, this._$Vs[g] = u
						} catch (t) {
							null == $ && ($ = t, at._$sT(at._$H7))
						}
					}
					null != $ && U._$_0 && a._$Rb($), U._$e && a.dump("_$DL"), U._$e && a.start("_$eL");
					for (e = this._$Js.length - 1; e >= 0; e--) this._$Js[e] = U._$jr;
					return this._$QT = !1, U._$e && a.dump("_$eL"), !1
				}, U.prototype.preDraw = function (t) {
					null != this.clipManager && (t._$ZT(), this.clipManager.setupClip(this, t))
				}, U.prototype.draw = function (t) {
					if (null != this._$Ws) {
						var e = this._$Ws.length;
						t._$ZT();
						for (var i = 0; i < e; ++i) {
							var r = this._$Ws[i];
							if (r != U._$V2)
								for (; ;) {
									var o = this._$aS[r],
										n = this._$8b[r];
									if (n._$yo()) {
										var s = n._$IP,
											_ = this._$Hr[s];
										n._$VS = _.getPartsOpacity(), o.draw(t, this, n)
									}
									var h = this._$Er[r];
									if (h <= r || h == U._$W0) break;
									r = h
								}
						}
					} else a._$li("call _$Ri.update() before _$Ri.draw() ")
				}, U.prototype.getParamIndex = function (t) {
					for (var e = this._$pb.length - 1; e >= 0; --e)
						if (this._$pb[e] == t) return e;
					return this._$02(t, 0, U._$tr, U._$lr)
				}, U.prototype._$BS = function (t) {
					return this.getBaseDataIndex(t)
				}, U.prototype.getBaseDataIndex = function (t) {
					for (var e = this._$3S.length - 1; e >= 0; --e)
						if (null != this._$3S[e] && this._$3S[e].getBaseDataID() == t) return e;
					return -1
				}, U.prototype._$UT = function (t, e) {
					var i = new Float32Array(e);
					return A._$jT(t, 0, i, 0, t.length), i
				}, U.prototype._$02 = function (t, e, i, r) {
					if (this._$qo >= this._$pb.length) {
						var o = this._$pb.length,
							n = new Array(2 * o);
						A._$jT(this._$pb, 0, n, 0, o), this._$pb = n, this._$_2 = this._$UT(this._$_2, 2 * o), this._$vr = this._$UT(
							this._$vr, 2 * o), this._$Rr = this._$UT(this._$Rr, 2 * o), this._$Or = this._$UT(this._$Or, 2 * o);
						var s = new Array;
						A._$jT(this._$Js, 0, s, 0, o), this._$Js = s
					}
					return this._$pb[this._$qo] = t, this._$_2[this._$qo] = e, this._$vr[this._$qo] = e, this._$Rr[this._$qo] = i,
						this._$Or[this._$qo] = r, this._$Js[this._$qo] = U._$ZS, this._$qo++
				}, U.prototype._$Zo = function (t, e) {
					this._$3S[t] = e
				}, U.prototype.setParamFloat = function (t, e) {
					e < this._$Rr[t] && (e = this._$Rr[t]), e > this._$Or[t] && (e = this._$Or[t]), this._$_2[t] = e
				}, U.prototype.loadParam = function () {
					var t = this._$_2.length;
					t > this._$fs.length && (t = this._$fs.length), A._$jT(this._$fs, 0, this._$_2, 0, t)
				}, U.prototype.saveParam = function () {
					var t = this._$_2.length;
					t > this._$fs.length && (this._$fs = new Float32Array(t)), A._$jT(this._$_2, 0, this._$fs, 0, t)
				}, U.prototype._$v2 = function () {
					return this._$co
				}, U.prototype._$WS = function () {
					return this._$QT
				}, U.prototype._$Xb = function (t) {
					return this._$Js[t] == U._$ZS
				}, U.prototype._$vs = function () {
					return this._$Es
				}, U.prototype._$Tr = function () {
					return this._$ZP
				}, U.prototype.getBaseData = function (t) {
					return this._$3S[t]
				}, U.prototype.getParamFloat = function (t) {
					return this._$_2[t]
				}, U.prototype.getParamMax = function (t) {
					return this._$Or[t]
				}, U.prototype.getParamMin = function (t) {
					return this._$Rr[t]
				}, U.prototype.setPartsOpacity = function (t, e) {
					this._$Hr[t].setPartsOpacity(e)
				}, U.prototype.getPartsOpacity = function (t) {
					return this._$Hr[t].getPartsOpacity()
				}, U.prototype.getPartsDataIndex = function (t) {
					for (var e = this._$F2.length - 1; e >= 0; --e)
						if (null != this._$F2[e] && this._$F2[e]._$p2() == t) return e;
					return -1
				}, U.prototype._$q2 = function (t) {
					return this._$db[t]
				}, U.prototype._$C2 = function (t) {
					return this._$8b[t]
				}, U.prototype._$Bb = function (t) {
					return this._$Hr[t]
				}, U.prototype._$5s = function (t, e) {
					for (var i = this._$Ws.length, r = t, o = 0; o < i; ++o) {
						var n = this._$Ws[o];
						if (n != U._$V2)
							for (; ;) {
								var s = this._$8b[n];
								s._$yo() && (s._$GT()._$B2(this, s, r), r += e);
								var a = this._$Er[n];
								if (a <= n || a == U._$W0) break;
								n = a
							}
					}
				}, U.prototype.setDrawParam = function (t) {
					this.dp_webgl = t
				}, U.prototype.getDrawParam = function () {
					return this.dp_webgl
				};

			function Y() { }
			Y._$0T = function (t) {
				return Y._$0T(new _$5(t))
			}, Y._$0T = function (t) {
				if (!t.exists()) throw new _$ls(t._$3b());
				for (var e, i = t.length(), r = new Int8Array(i), o = new _$Xs(new _$kb(t), 8192), n = 0;
					(e = o.read(r, n, i - n)) > 0;) n += e;
				return r
			}, Y._$C = function (t) {
				var e = null,
					i = null;
				try {
					e = t instanceof Array ? t : new _$Xs(t, 8192), i = new _$js;
					for (var r, o = new Int8Array(1e3);
						(r = e.read(o)) > 0;) i.write(o, 0, r);
					return i._$TS()
				} finally {
					null != t && t.close(), null != i && (i.flush(), i.close())
				}
			};

			function k() {
				i || (this._$12 = null, this._$bb = null, this._$_L = null, this._$jo = null, this._$iL = null, this._$0L =
					null, this._$Br = null, this._$Dr = null, this._$Cb = null, this._$mr = null, this._$_L = V.STATE_FIRST, this
						._$Br = 4e3, this._$Dr = 100, this._$Cb = 50, this._$mr = 150, this._$jo = !0, this._$iL = "PARAM_EYE_L_OPEN",
					this._$0L = "PARAM_EYE_R_OPEN")
			}
			k.prototype._$T2 = function () {
				return A.getUserTimeMSec() + Math._$10() * (2 * this._$Br - 1)
			}, k.prototype._$uo = function (t) {
				this._$Br = t
			}, k.prototype._$QS = function (t, e, i) {
				this._$Dr = t, this._$Cb = e, this._$mr = i
			}, k.prototype._$7T = function (t) {
				var e, i = A.getUserTimeMSec(),
					r = 0;
				switch (this._$_L) {
					case STATE_CLOSING:
						(r = (i - this._$bb) / this._$Dr) >= 1 && (r = 1, this._$_L = V.STATE_CLOSED, this._$bb = i), e = 1 - r;
						break;
					case STATE_CLOSED:
						(r = (i - this._$bb) / this._$Cb) >= 1 && (this._$_L = V.STATE_OPENING, this._$bb = i), e = 0;
						break;
					case STATE_OPENING:
						(r = (i - this._$bb) / this._$mr) >= 1 && (r = 1, this._$_L = V.STATE_INTERVAL, this._$12 = this._$T2()), e =
							r;
						break;
					case STATE_INTERVAL:
						this._$12 < i && (this._$_L = V.STATE_CLOSING, this._$bb = i), e = 1;
						break;
					case STATE_FIRST:
					default:
						this._$_L = V.STATE_INTERVAL, this._$12 = this._$T2(), e = 1
				}
				this._$jo || (e = -e), t.setParamFloat(this._$iL, e), t.setParamFloat(this._$0L, e)
			};
			var V = function () { };
			V.STATE_FIRST = "STATE_FIRST", V.STATE_INTERVAL = "STATE_INTERVAL", V.STATE_CLOSING = "STATE_CLOSING", V.STATE_CLOSED =
				"STATE_CLOSED", V.STATE_OPENING = "STATE_OPENING";

			function X() {
				i || (M.prototype.constructor.call(this), this._$sb = new Int32Array(X._$As), this._$U2 = new Array, this.transform =
					null, this.gl = null, null == X._$NT && (X._$NT = X._$9r(256), X._$vS = X._$9r(256), X._$no = X._$vb(256)))
			}
			X.prototype = new M, X._$As = 32, X._$Gr = !1, X._$NT = null, X._$vS = null, X._$no = null, X._$9r = function (t) {
				return new Float32Array(t)
			}, X._$vb = function (t) {
				return new Int16Array(t)
			}, X._$cr = function (t, e) {
				return null == t || t._$yL() < e.length ? ((t = X._$9r(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e),
					t._$oT(0)), t
			}, X._$mb = function (t, e) {
				return null == t || t._$yL() < e.length ? ((t = X._$vb(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e),
					t._$oT(0)), t
			}, X._$Hs = function () {
				return X._$Gr
			}, X._$as = function (t) {
				X._$Gr = t
			}, X.prototype.setGL = function (t) {
				this.gl = t
			}, X.prototype.setTransform = function (t) {
				this.transform = t
			}, X.prototype._$ZT = function () { }, X.prototype._$Uo = function (t, e, i, r, o, n, s, a) {
				if (!(n < .01)) {
					var _ = this._$U2[t],
						h = n > .9 ? at.EXPAND_W : 0;
					this.gl.drawElements(_, i, r, o, n, h, this.transform, a)
				}
			}, X.prototype._$Rs = function () {
				throw new Error("_$Rs")
			}, X.prototype._$Ds = function (t) {
				throw new Error("_$Ds")
			}, X.prototype._$K2 = function () {
				for (var t = 0; t < this._$sb.length; t++) {
					0 != this._$sb[t] && (this.gl._$Sr(1, this._$sb, t), this._$sb[t] = 0)
				}
			}, X.prototype.setTexture = function (t, e) {
				this._$sb.length < t + 1 && this._$nS(t), this._$sb[t] = e
			}, X.prototype.setTexture = function (t, e) {
				this._$sb.length < t + 1 && this._$nS(t), this._$U2[t] = e
			}, X.prototype._$nS = function (t) {
				var e = Math.max(2 * this._$sb.length, t + 1 + 10),
					i = new Int32Array(e);
				A._$jT(this._$sb, 0, i, 0, this._$sb.length), this._$sb = i;
				var r = new Array;
				A._$jT(this._$U2, 0, r, 0, this._$U2.length), this._$U2 = r
			};

			function z() {
				i || (x.prototype.constructor.call(this), this._$GS = null, this._$Y0 = null)
			}
			z.prototype = new x, z._$Xo = new Float32Array(2), z._$io = new Float32Array(2), z._$0o = new Float32Array(2), z
				._$Lo = new Float32Array(2), z._$To = new Float32Array(2), z._$Po = new Float32Array(2), z._$gT = new Array, z.prototype
					._$zP = function () {
						this._$GS = new D, this._$GS._$zP(), this._$Y0 = new Array
					}, z.prototype.getType = function () {
						return x._$c2
					}, z.prototype._$F0 = function (t) {
						x.prototype._$F0.call(this, t), this._$GS = t._$nP(), this._$Y0 = t._$nP(), x.prototype.readV2_opacity.call(
							this, t)
					}, z.prototype.init = function (t) {
						var e = new H(this);
						return e._$Yr = new y, this._$32() && (e._$Wr = new y), e
					}, z.prototype._$Nr = function (t, e) {
						this != e._$GT() && console.log("### assert!! ### ");
						var i = e;
						if (this._$GS._$Ur(t)) {
							var r = z._$gT;
							r[0] = !1;
							var o = this._$GS._$Q2(t, r);
							e._$Ib(r[0]), this.interpolateOpacity(t, this._$GS, e, r);
							var n = t._$vs(),
								s = t._$Tr();
							if (this._$GS._$zr(n, s, o), o <= 0) {
								var a = this._$Y0[n[0]];
								i._$Yr.init(a)
							} else if (1 == o) {
								a = this._$Y0[n[0]];
								var _ = this._$Y0[n[1]],
									h = s[0];
								i._$Yr._$fL = a._$fL + (_._$fL - a._$fL) * h, i._$Yr._$gL = a._$gL + (_._$gL - a._$gL) * h, i._$Yr._$B0 = a._$B0 +
									(_._$B0 - a._$B0) * h, i._$Yr._$z0 = a._$z0 + (_._$z0 - a._$z0) * h, i._$Yr._$qT = a._$qT + (_._$qT - a._$qT) *
									h
							} else if (2 == o) {
								a = this._$Y0[n[0]], _ = this._$Y0[n[1]];
								var l = this._$Y0[n[2]],
									$ = this._$Y0[n[3]],
									u = (h = s[0], s[1]),
									p = a._$fL + (_._$fL - a._$fL) * h,
									c = l._$fL + ($._$fL - l._$fL) * h;
								i._$Yr._$fL = p + (c - p) * u, p = a._$gL + (_._$gL - a._$gL) * h, c = l._$gL + ($._$gL - l._$gL) * h, i._$Yr
									._$gL = p + (c - p) * u, p = a._$B0 + (_._$B0 - a._$B0) * h, c = l._$B0 + ($._$B0 - l._$B0) * h, i._$Yr._$B0 =
									p + (c - p) * u, p = a._$z0 + (_._$z0 - a._$z0) * h, c = l._$z0 + ($._$z0 - l._$z0) * h, i._$Yr._$z0 = p +
									(c - p) * u, p = a._$qT + (_._$qT - a._$qT) * h, c = l._$qT + ($._$qT - l._$qT) * h, i._$Yr._$qT = p + (c -
										p) * u
							} else if (3 == o) {
								var f = this._$Y0[n[0]],
									g = this._$Y0[n[1]],
									d = this._$Y0[n[2]],
									y = this._$Y0[n[3]],
									m = this._$Y0[n[4]],
									T = this._$Y0[n[5]],
									P = this._$Y0[n[6]],
									S = this._$Y0[n[7]],
									v = (h = s[0], u = s[1], s[2]),
									L = (p = f._$fL + (g._$fL - f._$fL) * h, c = d._$fL + (y._$fL - d._$fL) * h, m._$fL + (T._$fL - m._$fL) * h),
									M = P._$fL + (S._$fL - P._$fL) * h;
								i._$Yr._$fL = (1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u), p = f._$gL + (g._$gL - f._$gL) * h, c = d
									._$gL + (y._$gL - d._$gL) * h, L = m._$gL + (T._$gL - m._$gL) * h, M = P._$gL + (S._$gL - P._$gL) * h, i._$Yr
										._$gL = (1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u), p = f._$B0 + (g._$B0 - f._$B0) * h, c = d._$B0 +
										(y._$B0 - d._$B0) * h, L = m._$B0 + (T._$B0 - m._$B0) * h, M = P._$B0 + (S._$B0 - P._$B0) * h, i._$Yr._$B0 =
									(1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u), p = f._$z0 + (g._$z0 - f._$z0) * h, c = d._$z0 + (y._$z0 -
										d._$z0) * h, L = m._$z0 + (T._$z0 - m._$z0) * h, M = P._$z0 + (S._$z0 - P._$z0) * h, i._$Yr._$z0 = (1 - v) *
										(p + (c - p) * u) + v * (L + (M - L) * u), p = f._$qT + (g._$qT - f._$qT) * h, c = d._$qT + (y._$qT - d._$qT) *
										h, L = m._$qT + (T._$qT - m._$qT) * h, M = P._$qT + (S._$qT - P._$qT) * h, i._$Yr._$qT = (1 - v) * (p + (c -
											p) * u) + v * (L + (M - L) * u)
							} else if (4 == o) {
								var E = this._$Y0[n[0]],
									x = this._$Y0[n[1]],
									A = this._$Y0[n[2]],
									I = this._$Y0[n[3]],
									w = this._$Y0[n[4]],
									D = this._$Y0[n[5]],
									O = this._$Y0[n[6]],
									b = this._$Y0[n[7]],
									R = this._$Y0[n[8]],
									F = this._$Y0[n[9]],
									C = this._$Y0[n[10]],
									N = this._$Y0[n[11]],
									B = this._$Y0[n[12]],
									G = this._$Y0[n[13]],
									U = this._$Y0[n[14]],
									Y = this._$Y0[n[15]],
									k = (h = s[0], u = s[1], v = s[2], s[3]),
									V = (p = E._$fL + (x._$fL - E._$fL) * h, c = A._$fL + (I._$fL - A._$fL) * h, L = w._$fL + (D._$fL - w._$fL) *
										h, M = O._$fL + (b._$fL - O._$fL) * h, R._$fL + (F._$fL - R._$fL) * h),
									X = C._$fL + (N._$fL - C._$fL) * h,
									H = B._$fL + (G._$fL - B._$fL) * h,
									W = U._$fL + (Y._$fL - U._$fL) * h;
								i._$Yr._$fL = (1 - k) * ((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) *
									u) + v * (H + (W - H) * u)), p = E._$gL + (x._$gL - E._$gL) * h, c = A._$gL + (I._$gL - A._$gL) * h, L = w
										._$gL + (D._$gL - w._$gL) * h, M = O._$gL + (b._$gL - O._$gL) * h, V = R._$gL + (F._$gL - R._$gL) * h, X =
									C._$gL + (N._$gL - C._$gL) * h, H = B._$gL + (G._$gL - B._$gL) * h, W = U._$gL + (Y._$gL - U._$gL) * h, i._$Yr
										._$gL = (1 - k) * ((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) +
											v * (H + (W - H) * u)), p = E._$B0 + (x._$B0 - E._$B0) * h, c = A._$B0 + (I._$B0 - A._$B0) * h, L = w._$B0 +
											(D._$B0 - w._$B0) * h, M = O._$B0 + (b._$B0 - O._$B0) * h, V = R._$B0 + (F._$B0 - R._$B0) * h, X = C._$B0 +
											(N._$B0 - C._$B0) * h, H = B._$B0 + (G._$B0 - B._$B0) * h, W = U._$B0 + (Y._$B0 - U._$B0) * h, i._$Yr._$B0 =
									(1 - k) * ((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) + v * (H +
										(W - H) * u)), p = E._$z0 + (x._$z0 - E._$z0) * h, c = A._$z0 + (I._$z0 - A._$z0) * h, L = w._$z0 + (D._$z0 -
											w._$z0) * h, M = O._$z0 + (b._$z0 - O._$z0) * h, V = R._$z0 + (F._$z0 - R._$z0) * h, X = C._$z0 + (N._$z0 -
												C._$z0) * h, H = B._$z0 + (G._$z0 - B._$z0) * h, W = U._$z0 + (Y._$z0 - U._$z0) * h, i._$Yr._$z0 = (1 - k) *
												((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) *
													u)), p = E._$qT + (x._$qT - E._$qT) * h, c = A._$qT + (I._$qT - A._$qT) * h, L = w._$qT + (D._$qT - w._$qT) *
													h, M = O._$qT + (b._$qT - O._$qT) * h, V = R._$qT + (F._$qT - R._$qT) * h, X = C._$qT + (N._$qT - C._$qT) *
													h, H = B._$qT + (G._$qT - B._$qT) * h, W = U._$qT + (Y._$qT - U._$qT) * h, i._$Yr._$qT = (1 - k) * ((1 - v) *
														(p + (c - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u))
							} else {
								for (var j = 0 | Math.pow(2, o), q = new Float32Array(j), J = 0; J < j; J++) {
									for (var Q = J, Z = 1, K = 0; K < o; K++) Z *= Q % 2 == 0 ? 1 - s[K] : s[K], Q /= 2;
									q[J] = Z
								}
								for (var tt = new Array, et = 0; et < j; et++) tt[et] = this._$Y0[n[et]];
								var it = 0,
									rt = 0,
									ot = 0,
									nt = 0,
									st = 0;
								for (et = 0; et < j; et++) it += q[et] * tt[et]._$fL, rt += q[et] * tt[et]._$gL, ot += q[et] * tt[et]._$B0,
									nt += q[et] * tt[et]._$z0, st += q[et] * tt[et]._$qT;
								i._$Yr._$fL = it, i._$Yr._$gL = rt, i._$Yr._$B0 = ot, i._$Yr._$z0 = nt, i._$Yr._$qT = st
							}
							a = this._$Y0[n[0]];
							i._$Yr.reflectX = a.reflectX, i._$Yr.reflectY = a.reflectY
						}
					}, z.prototype._$2b = function (t, e) {
						this != e._$GT() && console.log("### assert!! ### ");
						var i = e;
						if (i._$hS(!0), this._$32()) {
							var r = this.getTargetBaseDataID();
							if (i._$8r == x._$ur && (i._$8r = t.getBaseDataIndex(r)), i._$8r < 0) at._$so && a._$li("_$L _$0P _$G :: %s",
								r), i._$hS(!1);
							else {
								var o = t.getBaseData(i._$8r);
								if (null != o) {
									var n = t._$q2(i._$8r),
										s = z._$Xo;
									s[0] = i._$Yr._$fL, s[1] = i._$Yr._$gL;
									var _ = z._$io;
									_[0] = 0, _[1] = -.1;
									n._$GT().getType() == x._$c2 ? _[1] = -10 : _[1] = -.1;
									var h = z._$0o;
									this._$Jr(t, o, n, s, _, h);
									var l = vt._$92(_, h);
									o._$nb(t, n, s, s, 1, 0, 2), i._$Wr._$fL = s[0], i._$Wr._$gL = s[1], i._$Wr._$B0 = i._$Yr._$B0, i._$Wr._$z0 =
										i._$Yr._$z0, i._$Wr._$qT = i._$Yr._$qT - l * vt._$NS;
									var $ = n.getTotalScale();
									i.setTotalScale_notForClient($ * i._$Wr._$B0);
									var u = n.getTotalOpacity();
									i.setTotalOpacity(u * i.getInterpolatedOpacity()), i._$Wr.reflectX = i._$Yr.reflectX, i._$Wr.reflectY = i._$Yr
										.reflectY, i._$hS(n._$yo())
								} else i._$hS(!1)
							}
						} else i.setTotalScale_notForClient(i._$Yr._$B0), i.setTotalOpacity(i.getInterpolatedOpacity())
					}, z.prototype._$nb = function (t, e, i, r, o, n, s) {
						this != e._$GT() && console.log("### assert!! ### ");
						for (var a, _, h = e, l = null != h._$Wr ? h._$Wr : h._$Yr, $ = Math.sin(vt._$bS * l._$qT), u = Math.cos(vt._$bS *
							l._$qT), p = h.getTotalScale(), c = l.reflectX ? -1 : 1, f = l.reflectY ? -1 : 1, g = u * p * c, d = -$ * p *
								f, y = $ * p * c, m = u * p * f, T = l._$fL, P = l._$gL, S = o * s, v = n; v < S; v += s) a = i[v], _ = i[v +
									1], r[v] = g * a + d * _ + T, r[v + 1] = y * a + m * _ + P
					}, z.prototype._$Jr = function (t, e, i, r, o, n) {
						e != i._$GT() && console.log("### assert!! ### ");
						var s = z._$Lo;
						z._$Lo[0] = r[0], z._$Lo[1] = r[1], e._$nb(t, i, s, s, 1, 0, 2);
						for (var a = z._$To, _ = z._$Po, h = 1, l = 0; l < 10; l++) {
							if (_[0] = r[0] + h * o[0], _[1] = r[1] + h * o[1], e._$nb(t, i, _, a, 1, 0, 2), a[0] -= s[0], a[1] -= s[1],
								0 != a[0] || 0 != a[1]) return n[0] = a[0], void (n[1] = a[1]);
							if (_[0] = r[0] - h * o[0], _[1] = r[1] - h * o[1], e._$nb(t, i, _, a, 1, 0, 2), a[0] -= s[0], a[1] -= s[1],
								0 != a[0] || 0 != a[1]) return a[0] = -a[0], a[0] = -a[0], n[0] = a[0], void (n[1] = a[1]);
							h *= .1
						}
						at._$so && console.log("_$L0 to transform _$SP\n")
					};

			function H(t) {
				st.prototype.constructor.call(this, t), this._$8r = x._$ur, this._$Yr = null, this._$Wr = null
			}
			H.prototype = new st;

			function W() {
				i || (L.prototype.constructor.call(this), this._$gP = null, this._$dr = null, this._$GS = null, this._$qb =
					null, this._$Lb = null, this._$mS = null)
			}
			W.prototype = new L, W._$ur = -2, W._$ES = 500, W._$wb = 2, W._$8S = 3, W._$os = 4, W._$52 = W._$ES, W._$R2 = W._$ES,
				W._$Sb = function (t) {
					for (var e = t.length - 1; e >= 0; --e) {
						var i = t[e];
						i < W._$52 ? W._$52 = i : i > W._$R2 && (W._$R2 = i)
					}
				}, W._$or = function () {
					return W._$52
				}, W._$Pr = function () {
					return W._$R2
				}, W.prototype._$F0 = function (t) {
					this._$gP = t._$nP(), this._$dr = t._$nP(), this._$GS = t._$nP(), this._$qb = t._$6L(), this._$Lb = t._$cS(),
						this._$mS = t._$Tb(), t.getFormatVersion() >= G._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(
							this.clipID)) : this.clipIDList = null, W._$Sb(this._$Lb)
				}, W.prototype.getClipIDList = function () {
					return this.clipIDList
				}, W.prototype._$Nr = function (t, e) {
					if (e._$IS[0] = !1, e._$Us = S._$Z2(t, this._$GS, e._$IS, this._$Lb), at._$Zs);
					else if (e._$IS[0]) return;
					e._$7s = S._$br(t, this._$GS, e._$IS, this._$mS)
				}, W.prototype._$2b = function (t) { }, W.prototype.getDrawDataID = function () {
					return this._$gP
				}, W.prototype._$j2 = function (t) {
					this._$gP = t
				}, W.prototype.getOpacity = function (t, e) {
					return e._$7s
				}, W.prototype._$zS = function (t, e) {
					return e._$Us
				}, W.prototype.getTargetBaseDataID = function () {
					return this._$dr
				}, W.prototype._$gs = function (t) {
					this._$dr = t
				}, W.prototype._$32 = function () {
					return null != this._$dr && this._$dr != dt._$2o()
				}, W.prototype.getType = function () { };

			function j() {
				i || (this._$NL = null, this._$3S = null, this._$aS = null, j._$42++)
			}
			j._$42 = 0, j.prototype._$1b = function () {
				return this._$3S
			}, j.prototype.getDrawDataList = function () {
				return this._$aS
			}, j.prototype._$F0 = function (t) {
				this._$NL = t._$nP(), this._$aS = t._$nP(), this._$3S = t._$nP()
			}, j.prototype._$kr = function (t) {
				t._$Zo(this._$3S), t._$xo(this._$aS), this._$3S = null, this._$aS = null
			};

			function q() {
				i || (r.prototype.constructor.call(this), this._$zo = new X)
			}
			q.prototype = new r, q.loadModel = function (t) {
				var e = new q;
				return r._$62(e, t), e
			}, q.loadModel = function (t) {
				var e = new q;
				return r._$62(e, t), e
			}, q._$to = function () {
				return new q
			}, q._$er = function (t) {
				var e = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
				if (0 == e.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e._$PL());
				for (var i = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1",
					"../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"
				], r = q.loadModel(e._$3b()), o = 0; o < i.length; o++) {
					var n = new _$5(i[o]);
					if (0 == n.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + n._$PL());
					r.setTexture(o, _$nL._$_o(t, n._$3b()))
				}
				return r
			}, q.prototype.setGL = function (t) {
				this._$zo.setGL(t)
			}, q.prototype.setTransform = function (t) {
				this._$zo.setTransform(t)
			}, q.prototype.draw = function () {
				this._$5S.draw(this._$zo)
			}, q.prototype._$K2 = function () {
				this._$zo._$K2()
			}, q.prototype.setTexture = function (t, e) {
				null == this._$zo && a._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t, e)
			}, q.prototype.setTexture = function (t, e) {
				null == this._$zo && a._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t, e)
			}, q.prototype._$Rs = function () {
				return this._$zo._$Rs()
			}, q.prototype._$Ds = function (t) {
				this._$zo._$Ds(t)
			}, q.prototype.getDrawParam = function () {
				return this._$zo
			};

			function J() {
				i || (s.prototype.constructor.call(this), this.motions = new Array, this._$o2 = null, this._$7r = J._$Co++,
					this._$D0 = 30, this._$yT = 0, this._$E = !1, this.loopFadeIn = !0, this._$rr = -1, this._$eP = 0)
			}
			J.prototype = new s, J._$cs = "VISIBLE:", J._$ar = "LAYOUT:", J.MTN_PREFIX_FADEIN = "FADEIN:", J.MTN_PREFIX_FADEOUT =
				"FADEOUT:", J._$Co = 0, J._$1T = 1, J.loadMotion = function (t) {
					var e = Y._$C(t);
					return J.loadMotion(e)
				};

			function Q(t, e) {
				return String.fromCharCode(t.getUint8(e))
			}
			J.loadMotion = function (t) {
				t instanceof ArrayBuffer && (t = new DataView(t));
				var e = new J,
					i = [0],
					r = t.byteLength;
				e._$yT = 0;
				for (var o = 0; o < r; ++o) {
					var n = Q(t, o),
						s = n.charCodeAt(0);
					if ("\n" != n && "\r" != n)
						if ("#" != n)
							if ("$" != n) {
								if (97 <= s && s <= 122 || 65 <= s && s <= 90 || "_" == n) {
									for ($ = o, u = -1; o < r && ("\r" != (n = Q(t, o)) && "\n" != n); ++o)
										if ("=" == n) {
											u = o;
											break
										} if (u >= 0) {
											var a = new N;
											w.startsWith(t, $, J._$cs) ? (a._$RP = N._$hs, a._$4P = w.createString(t, $, u - $)) : w.startsWith(t, $,
												J._$ar) ? (a._$4P = w.createString(t, $ + 7, u - $ - 7), w.startsWith(t, $ + 7, "ANCHOR_X") ? a._$RP =
													N._$xs : w.startsWith(t, $ + 7, "ANCHOR_Y") ? a._$RP = N._$us : w.startsWith(t, $ + 7, "SCALE_X") ? a._$RP =
														N._$qs : w.startsWith(t, $ + 7, "SCALE_Y") ? a._$RP = N._$Ys : w.startsWith(t, $ + 7, "X") ? a._$RP =
															N._$ws : w.startsWith(t, $ + 7, "Y") && (a._$RP = N._$Ns)) : (a._$RP = N._$Fr, a._$4P = w.createString(
																t, $, u - $)), e.motions.push(a);
											var _ = 0,
												h = [];
											for (o = u + 1; o < r && ("\r" != (n = Q(t, o)) && "\n" != n); ++o)
												if ("," != n && " " != n && "\t" != n) {
													c = w._$LS(t, r, o, i);
													if (i[0] > 0) {
														h.push(c), _++;
														var l = i[0];
														if (l < o) {
															console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
															break
														}
														o = l - 1
													}
												} a._$I0 = new Float32Array(h), _ > e._$yT && (e._$yT = _)
										}
								}
							} else {
								for (var $ = o, u = -1; o < r && ("\r" != (n = Q(t, o)) && "\n" != n); ++o)
									if ("=" == n) {
										u = o;
										break
									} var p = !1;
								if (u >= 0)
									for (u == $ + 4 && "f" == Q(t, $ + 1) && "p" == Q(t, $ + 2) && "s" == Q(t, $ + 3) && (p = !0), o = u + 1; o <
										r && ("\r" != (n = Q(t, o)) && "\n" != n); ++o)
										if ("," != n && " " != n && "\t" != n) {
											var c = w._$LS(t, r, o, i);
											i[0] > 0 && p && 5 < c && c < 121 && (e._$D0 = c), o = i[0]
										} for (; o < r && ("\n" != Q(t, o) && "\r" != Q(t, o)); ++o);
							}
						else
							for (; o < r && ("\n" != Q(t, o) && "\r" != Q(t, o)); ++o);
				}
				return e._$rr = 1e3 * e._$yT / e._$D0 | 0, e
			}, J.prototype.getDurationMSec = function () {
				return this._$E ? -1 : this._$rr
			}, J.prototype.getLoopDurationMSec = function () {
				return this._$rr
			}, J.prototype.dump = function () {
				for (var t = 0; t < this.motions.length; t++) {
					var e = this.motions[t];
					console.log("_$wL[%s] [%d]. ", e._$4P, e._$I0.length);
					for (var i = 0; i < e._$I0.length && i < 10; i++) console.log("%5.2f ,", e._$I0[i]);
					console.log("\n")
				}
			}, J.prototype.updateParamExe = function (t, e, i, r) {
				for (var o = (e - r._$z2) * this._$D0 / 1e3, n = 0 | o, s = o - n, a = 0; a < this.motions.length; a++) {
					var _ = this.motions[a],
						h = _._$I0.length,
						l = _._$4P;
					if (_._$RP == N._$hs) {
						var $ = _._$I0[n >= h ? h - 1 : n];
						t.setParamFloat(l, $)
					} else if (N._$ws <= _._$RP && _._$RP <= N._$Ys);
					else {
						var u = t.getParamIndex(l),
							p = t.getModelContext(),
							c = .4 * (p.getParamMax(u) - p.getParamMin(u)),
							f = p.getParamFloat(u),
							g = _._$I0[n >= h ? h - 1 : n],
							d = _._$I0[n + 1 >= h ? h - 1 : n + 1],
							y = f + ((g < d && d - g > c || g > d && g - d > c ? g : g + (d - g) * s) - f) * i;
						t.setParamFloat(l, y)
					}
				}
				n >= this._$yT && (this._$E ? (r._$z2 = e, this.loopFadeIn && (r._$bs = e)) : r._$9L = !0), this._$eP = i
			}, J.prototype._$r0 = function () {
				return this._$E
			}, J.prototype._$aL = function (t) {
				this._$E = t
			}, J.prototype._$S0 = function () {
				return this._$D0
			}, J.prototype._$U0 = function (t) {
				this._$D0 = t
			}, J.prototype.isLoopFadeIn = function () {
				return this.loopFadeIn
			}, J.prototype.setLoopFadeIn = function (t) {
				this.loopFadeIn = t
			};

			function C() {
				this._$P = new Float32Array(100), this.size = 0
			}
			C.prototype.clear = function () {
				this.size = 0
			}, C.prototype.add = function (t) {
				if (this._$P.length <= this.size) {
					var e = new Float32Array(2 * this.size);
					A._$jT(this._$P, 0, e, 0, this.size), this._$P = e
				}
				this._$P[this.size++] = t
			}, C.prototype._$BL = function () {
				var t = new Float32Array(this.size);
				return A._$jT(this._$P, 0, t, 0, this.size), t
			};

			function N() {
				this._$4P = null, this._$I0 = null, this._$RP = null
			}
			N._$Fr = 0, N._$hs = 1, N._$ws = 100, N._$Ns = 101, N._$xs = 102, N._$us = 103, N._$qs = 104, N._$Ys = 105;

			function Z() {
				i || (x.prototype.constructor.call(this), this._$o = 0, this._$A = 0, this._$GS = null, this._$Eo = null)
			}
			Z.prototype = new x, Z._$gT = new Array, Z.prototype._$zP = function () {
				this._$GS = new D, this._$GS._$zP()
			}, Z.prototype._$F0 = function (t) {
				x.prototype._$F0.call(this, t), this._$A = t._$6L(), this._$o = t._$6L(), this._$GS = t._$nP(), this._$Eo = t._$nP(),
					x.prototype.readV2_opacity.call(this, t)
			}, Z.prototype.init = function (t) {
				var e = new K(this),
					i = (this._$o + 1) * (this._$A + 1);
				return null != e._$Cr && (e._$Cr = null), e._$Cr = new Float32Array(2 * i), null != e._$hr && (e._$hr = null),
					this._$32() ? e._$hr = new Float32Array(2 * i) : e._$hr = null, e
			}, Z.prototype._$Nr = function (t, e) {
				var i = e;
				if (this._$GS._$Ur(t)) {
					var r = this._$VT(),
						o = Z._$gT;
					o[0] = !1, S._$Vr(t, this._$GS, o, r, this._$Eo, i._$Cr, 0, 2), e._$Ib(o[0]), this.interpolateOpacity(t, this
						._$GS, e, o)
				}
			}, Z.prototype._$2b = function (t, e) {
				var i = e;
				if (i._$hS(!0), this._$32()) {
					var r = this.getTargetBaseDataID();
					if (i._$8r == x._$ur && (i._$8r = t.getBaseDataIndex(r)), i._$8r < 0) at._$so && a._$li("_$L _$0P _$G :: %s",
						r), i._$hS(!1);
					else {
						var o = t.getBaseData(i._$8r),
							n = t._$q2(i._$8r);
						if (null != o && n._$yo()) {
							var s = n.getTotalScale();
							i.setTotalScale_notForClient(s);
							var _ = n.getTotalOpacity();
							i.setTotalOpacity(_ * i.getInterpolatedOpacity()), o._$nb(t, n, i._$Cr, i._$hr, this._$VT(), 0, 2), i._$hS(
								!0)
						} else i._$hS(!1)
					}
				} else i.setTotalOpacity(i.getInterpolatedOpacity())
			}, Z.prototype._$nb = function (t, e, i, r, o, n, s) {
				var a = e,
					_ = null != a._$hr ? a._$hr : a._$Cr;
				Z.transformPoints_sdk2(i, r, o, n, s, _, this._$o, this._$A)
			}, Z.transformPoints_sdk2 = function (e, i, r, o, n, s, a, _) {
				for (var h, l, $, u = r * n, p = 0, c = 0, f = 0, g = 0, d = 0, y = 0, m = !1, T = o; T < u; T += n) {
					var P, S, v, L;
					if (v = e[T], S = (L = e[T + 1]) * _, (P = v * a) < 0 || S < 0 || a <= P || _ <= S) {
						var M = a + 1;
						if (!m) {
							m = !0, p = .25 * (s[2 * (0 + 0 * M)] + s[2 * (a + 0 * M)] + s[2 * (0 + _ * M)] + s[2 * (a + _ * M)]), c =
								.25 * (s[2 * (0 + 0 * M) + 1] + s[2 * (a + 0 * M) + 1] + s[2 * (0 + _ * M) + 1] + s[2 * (a + _ * M) + 1]);
							var E = s[2 * (a + _ * M)] - s[2 * (0 + 0 * M)],
								x = s[2 * (a + _ * M) + 1] - s[2 * (0 + 0 * M) + 1],
								A = s[2 * (a + 0 * M)] - s[2 * (0 + _ * M)],
								I = s[2 * (a + 0 * M) + 1] - s[2 * (0 + _ * M) + 1];
							p -= .5 * ((f = .5 * (E + A)) + (d = .5 * (E - A))), c -= .5 * ((g = .5 * (x + I)) + (y = .5 * (x - I)))
						}
						if (-2 < v && v < 3 && -2 < L && L < 3)
							if (v <= 0)
								if (L <= 0) {
									var w = s[2 * (0 + 0 * M)],
										D = s[2 * (0 + 0 * M) + 1],
										O = p - 2 * f,
										b = c - 2 * g,
										R = p - 2 * d,
										F = c - 2 * y,
										C = p - 2 * f - 2 * d,
										N = c - 2 * g - 2 * y;
									(B = .5 * (v - -2)) + (G = .5 * (L - -2)) <= 1 ? (i[T] = C + (R - C) * B + (O - C) * G, i[T + 1] = N + (F -
										N) * B + (b - N) * G) : (i[T] = w + (O - w) * (1 - B) + (R - w) * (1 - G), i[T + 1] = D + (b - D) * (1 -
											B) + (F - D) * (1 - G))
								} else if (L >= 1) {
									R = s[2 * (0 + _ * M)], F = s[2 * (0 + _ * M) + 1], C = p - 2 * f + 1 * d, N = c - 2 * g + 1 * y, w = p + 3 *
										d, D = c + 3 * y, O = p - 2 * f + 3 * d, b = c - 2 * g + 3 * y;
									(B = .5 * (v - -2)) + (G = .5 * (L - 1)) <= 1 ? (i[T] = C + (R - C) * B + (O - C) * G, i[T + 1] = N + (F -
										N) * B + (b - N) * G) : (i[T] = w + (O - w) * (1 - B) + (R - w) * (1 - G), i[T + 1] = D + (b - D) * (1 -
											B) + (F - D) * (1 - G))
								} else {
									(k = 0 | S) == _ && (k = _ - 1);
									var B = .5 * (v - -2),
										G = S - k,
										U = k / _,
										Y = (k + 1) / _;
									R = s[2 * (0 + k * M)], F = s[2 * (0 + k * M) + 1], w = s[2 * (0 + (k + 1) * M)], D = s[2 * (0 + (k + 1) *
										M) + 1], C = p - 2 * f + U * d, N = c - 2 * g + U * y, O = p - 2 * f + Y * d, b = c - 2 * g + Y * y;
									B + G <= 1 ? (i[T] = C + (R - C) * B + (O - C) * G, i[T + 1] = N + (F - N) * B + (b - N) * G) : (i[T] = w +
										(O - w) * (1 - B) + (R - w) * (1 - G), i[T + 1] = D + (b - D) * (1 - B) + (F - D) * (1 - G))
								} else if (1 <= v)
								if (L <= 0) {
									O = s[2 * (a + 0 * M)], b = s[2 * (a + 0 * M) + 1], w = p + 3 * f, D = c + 3 * g, C = p + 1 * f - 2 * d, N =
										c + 1 * g - 2 * y, R = p + 3 * f - 2 * d, F = c + 3 * g - 2 * y;
									(B = .5 * (v - 1)) + (G = .5 * (L - -2)) <= 1 ? (i[T] = C + (R - C) * B + (O - C) * G, i[T + 1] = N + (F -
										N) * B + (b - N) * G) : (i[T] = w + (O - w) * (1 - B) + (R - w) * (1 - G), i[T + 1] = D + (b - D) * (1 -
											B) + (F - D) * (1 - G))
								} else if (L >= 1) {
									C = s[2 * (a + _ * M)], N = s[2 * (a + _ * M) + 1], R = p + 3 * f + 1 * d, F = c + 3 * g + 1 * y, O = p + 1 *
										f + 3 * d, b = c + 1 * g + 3 * y, w = p + 3 * f + 3 * d, D = c + 3 * g + 3 * y;
									(B = .5 * (v - 1)) + (G = .5 * (L - 1)) <= 1 ? (i[T] = C + (R - C) * B + (O - C) * G, i[T + 1] = N + (F - N) *
										B + (b - N) * G) : (i[T] = w + (O - w) * (1 - B) + (R - w) * (1 - G), i[T + 1] = D + (b - D) * (1 - B) +
											(F - D) * (1 - G))
								} else {
									var k;
									(k = 0 | S) == _ && (k = _ - 1);
									B = .5 * (v - 1), G = S - k, U = k / _, Y = (k + 1) / _, C = s[2 * (a + k * M)], N = s[2 * (a + k * M) + 1],
										O = s[2 * (a + (k + 1) * M)], b = s[2 * (a + (k + 1) * M) + 1], R = p + 3 * f + U * d, F = c + 3 * g + U *
										y, w = p + 3 * f + Y * d, D = c + 3 * g + Y * y;
									B + G <= 1 ? (i[T] = C + (R - C) * B + (O - C) * G, i[T + 1] = N + (F - N) * B + (b - N) * G) : (i[T] = w +
										(O - w) * (1 - B) + (R - w) * (1 - G), i[T + 1] = D + (b - D) * (1 - B) + (F - D) * (1 - G))
								} else if (L <= 0) {
									(z = 0 | P) == a && (z = a - 1);
									B = P - z, G = .5 * (L - -2);
									var V = z / a,
										X = (z + 1) / a;
									O = s[2 * (z + 0 * M)], b = s[2 * (z + 0 * M) + 1], w = s[2 * (z + 1 + 0 * M)], D = s[2 * (z + 1 + 0 * M) +
										1], C = p + V * f - 2 * d, N = c + V * g - 2 * y, R = p + X * f - 2 * d, F = c + X * g - 2 * y;
									B + G <= 1 ? (i[T] = C + (R - C) * B + (O - C) * G, i[T + 1] = N + (F - N) * B + (b - N) * G) : (i[T] = w +
										(O - w) * (1 - B) + (R - w) * (1 - G), i[T + 1] = D + (b - D) * (1 - B) + (F - D) * (1 - G))
								} else if (L >= 1) {
									var z;
									(z = 0 | P) == a && (z = a - 1);
									B = P - z, G = .5 * (L - 1), V = z / a, X = (z + 1) / a, C = s[2 * (z + _ * M)], N = s[2 * (z + _ * M) + 1],
										R = s[2 * (z + 1 + _ * M)], F = s[2 * (z + 1 + _ * M) + 1], O = p + V * f + 3 * d, b = c + V * g + 3 * y,
										w = p + X * f + 3 * d, D = c + X * g + 3 * y;
									B + G <= 1 ? (i[T] = C + (R - C) * B + (O - C) * G, i[T + 1] = N + (F - N) * B + (b - N) * G) : (i[T] = w +
										(O - w) * (1 - B) + (R - w) * (1 - G), i[T + 1] = D + (b - D) * (1 - B) + (F - D) * (1 - G))
								} else t.err.printf("_$li calc : %.4f , %.4f          @@BDBoxGrid\n", v, L);
						else i[T] = p + v * f + L * d, i[T + 1] = c + v * g + L * y
					} else h = 2 * ((0 | P) + (0 | S) * (a + 1)), (l = P - (0 | P)) + ($ = S - (0 | S)) < 1 ? (i[T] = s[h] * (1 -
						l - $) + s[h + 2] * l + s[h + 2 * (a + 1)] * $, i[T + 1] = s[h + 1] * (1 - l - $) + s[h + 3] * l + s[h + 2 *
						(a + 1) + 1] * $) : (i[T] = s[h + 2 * (a + 1) + 2] * (l - 1 + $) + s[h + 2 * (a + 1)] * (1 - l) + s[h + 2] *
							(1 - $), i[T + 1] = s[h + 2 * (a + 1) + 3] * (l - 1 + $) + s[h + 2 * (a + 1) + 1] * (1 - l) + s[h + 3] * (1 -
								$))
				}
			}, Z.prototype.transformPoints_sdk1 = function (t, e, i, r, o, n, s) {
				for (var a, _, h, l, $, u, p, c = e, f = this._$o, g = this._$A, d = o * s, y = null != c._$hr ? c._$hr : c._$Cr,
					m = n; m < d; m += s) at._$ts ? (a = i[m], _ = i[m + 1], a < 0 ? a = 0 : a > 1 && (a = 1), _ < 0 ? _ = 0 : _ >
						1 && (_ = 1), l = 0 | (_ *= g), (h = 0 | (a *= f)) > f - 1 && (h = f - 1), l > g - 1 && (l = g - 1), u = a -
						h, p = _ - l, $ = 2 * (h + l * (f + 1))) : (u = (a = i[m] * f) - (0 | a), p = (_ = i[m + 1] * g) - (0 | _),
							$ = 2 * ((0 | a) + (0 | _) * (f + 1))), u + p < 1 ? (r[m] = y[$] * (1 - u - p) + y[$ + 2] * u + y[$ + 2 * (f +
								1)] * p, r[m + 1] = y[$ + 1] * (1 - u - p) + y[$ + 3] * u + y[$ + 2 * (f + 1) + 1] * p) : (r[m] = y[$ + 2 *
									(f + 1) + 2] * (u - 1 + p) + y[$ + 2 * (f + 1)] * (1 - u) + y[$ + 2] * (1 - p), r[m + 1] = y[$ + 2 * (f + 1) +
									3] * (u - 1 + p) + y[$ + 2 * (f + 1) + 1] * (1 - u) + y[$ + 3] * (1 - p))
			}, Z.prototype._$VT = function () {
				return (this._$o + 1) * (this._$A + 1)
			}, Z.prototype.getType = function () {
				return x._$_b
			};

			function K(t) {
				st.prototype.constructor.call(this, t), this._$8r = x._$ur, this._$Cr = null, this._$hr = null
			}
			K.prototype = new st;

			function tt() {
				i || (this.visible = !0, this._$g0 = !1, this._$NL = null, this._$3S = null, this._$aS = null, tt._$42++)
			}
			tt._$42 = 0, tt.prototype._$zP = function () {
				this._$3S = new Array, this._$aS = new Array
			}, tt.prototype._$F0 = function (t) {
				this._$g0 = t._$8L(), this.visible = t._$8L(), this._$NL = t._$nP(), this._$3S = t._$nP(), this._$aS = t._$nP()
			}, tt.prototype.init = function (t) {
				var e = new et(this);
				return e.setPartsOpacity(this.isVisible() ? 1 : 0), e
			}, tt.prototype._$6o = function (t) {
				if (null == this._$3S) throw new Error("_$3S _$6 _$Wo@_$6o");
				this._$3S.push(t)
			}, tt.prototype._$3o = function (t) {
				if (null == this._$aS) throw new Error("_$aS _$6 _$Wo@_$3o");
				this._$aS.push(t)
			}, tt.prototype._$Zo = function (t) {
				this._$3S = t
			}, tt.prototype._$xo = function (t) {
				this._$aS = t
			}, tt.prototype.isVisible = function () {
				return this.visible
			}, tt.prototype._$uL = function () {
				return this._$g0
			}, tt.prototype._$KP = function (t) {
				this.visible = t
			}, tt.prototype._$ET = function (t) {
				this._$g0 = t
			}, tt.prototype.getBaseData = function () {
				return this._$3S
			}, tt.prototype.getDrawData = function () {
				return this._$aS
			}, tt.prototype._$p2 = function () {
				return this._$NL
			}, tt.prototype._$ob = function (t) {
				this._$NL = t
			}, tt.prototype.getPartsID = function () {
				return this._$NL
			}, tt.prototype._$MP = function (t) {
				this._$NL = t
			};

			function et(t) {
				this._$VS = null, this._$e0 = null, this._$e0 = t
			}
			et.prototype = new function () { }, et.prototype.getPartsOpacity = function () {
				return this._$VS
			}, et.prototype.setPartsOpacity = function (t) {
				this._$VS = t
			};

			function it(t) {
				i || (this.id = t)
			}
			it._$L7 = function () {
				l._$27(), dt._$27(), b._$27(), h._$27()
			}, it.prototype.toString = function () {
				return this.id
			};

			function rt() {
				i || (this._$4S = null)
			}
			rt.prototype._$1s = function () {
				return this._$4S
			}, rt.prototype._$zP = function () {
				this._$4S = new Array
			}, rt.prototype._$F0 = function (t) {
				this._$4S = t._$nP()
			}, rt.prototype._$Ks = function (t) {
				this._$4S.push(t)
			};

			function ot(t, e) {
				this.canvas = t, this.context = e, this.viewport = new Array(0, 0, t.width, t.height), this._$6r = 1, this._$xP =
					0, this._$3r = 1, this._$uP = 0, this._$Qo = -1, this.cacheImages = {}
			}
			ot.tr = new gt, ot._$50 = new gt, ot._$Ti = new Array(0, 0), ot._$Pi = new Array(0, 0), ot._$B = new Array(0, 0),
				ot.prototype._$lP = function (t, e, i, r) {
					this.viewport = new Array(t, e, i, r)
				}, ot.prototype._$bL = function () {
					this.context.save();
					var t = this.viewport;
					null != t && (this.context.beginPath(), this.context._$Li(t[0], t[1], t[2], t[3]), this.context.clip())
				}, ot.prototype._$ei = function () {
					this.context.restore()
				}, ot.prototype.drawElements = function (t, e, i, r, o, n, s, _) {
					try {
						o != this._$Qo && (this._$Qo = o, this.context.globalAlpha = o);
						for (var h = e.length, l = t.width, $ = t.height, u = this.context, p = this._$xP, c = this._$uP, f = this._$6r,
							g = this._$3r, d = ot.tr, y = ot._$Ti, m = ot._$Pi, P = ot._$B, S = 0; S < h; S += 3) {
							u.save();
							var v = e[S],
								L = e[S + 1],
								M = e[S + 2],
								E = p + f * i[2 * v],
								x = c + g * i[2 * v + 1],
								A = p + f * i[2 * L],
								I = c + g * i[2 * L + 1],
								w = p + f * i[2 * M],
								D = c + g * i[2 * M + 1];
							s && (s._$PS(E, x, P), E = P[0], x = P[1], s._$PS(A, I, P), A = P[0], I = P[1], s._$PS(w, D, P), w = P[0], D =
								P[1]);
							var O = l * r[2 * v],
								b = $ - $ * r[2 * v + 1],
								R = l * r[2 * L],
								F = $ - $ * r[2 * L + 1],
								C = l * r[2 * M],
								N = $ - $ * r[2 * M + 1],
								B = Math.atan2(F - b, R - O),
								G = Math.atan2(I - x, A - E),
								U = A - E,
								Y = I - x,
								k = Math.sqrt(U * U + Y * Y),
								V = R - O,
								X = F - b,
								z = k / Math.sqrt(V * V + X * X);
							T._$ni(C, N, O, b, R - O, F - b, -(F - b), R - O, y), T._$ni(w, D, E, x, A - E, I - x, -(I - x), A - E, m);
							var H = (m[0] - y[0]) / y[1],
								W = Math.min(O, R, C),
								j = Math.max(O, R, C),
								q = Math.min(b, F, N),
								J = Math.max(b, F, N),
								Q = Math.floor(W),
								Z = Math.floor(q),
								K = Math.ceil(j),
								tt = Math.ceil(J);
							d.identity(), d.translate(E, x), d.rotate(G), d.scale(1, m[1] / y[1]), d.shear(H, 0), d.scale(z, z), d.rotate(
								-B), d.translate(-O, -b), d.setContext(u);
							if (n || (n = 1.2), at.IGNORE_EXPAND && (n = 0), at.USE_CACHED_POLYGON_IMAGE) {
								var et = _._$e0;
								if (et.gl_cacheImage = et.gl_cacheImage || {}, !et.gl_cacheImage[S]) {
									var it = ot.createCanvas(K - Q, tt - Z);
									at.DEBUG_DATA.LDGL_CANVAS_MB = at.DEBUG_DATA.LDGL_CANVAS_MB || 0, at.DEBUG_DATA.LDGL_CANVAS_MB += (K - Q) *
										(tt - Z) * 4;
									var rt = it.getContext("2d");
									rt.translate(-Q, -Z), ot.clip(rt, d, n, k, O, b, R, F, C, N, E, x, A, I, w, D), rt.drawImage(t, 0, 0), et.gl_cacheImage[
										S] = {
										cacheCanvas: it,
										cacheContext: rt
									}
								}
								u.drawImage(et.gl_cacheImage[S].cacheCanvas, Q, Z)
							} else at.IGNORE_CLIP || ot.clip(u, d, n, k, O, b, R, F, C, N, E, x, A, I, w, D), at.USE_ADJUST_TRANSLATION &&
								(W = 0, j = l, q = 0, J = $), u.drawImage(t, W, q, j - W, J - q, W, q, j - W, J - q);
							u.restore()
						}
					} catch (t) {
						a._$Rb(t)
					}
				}, ot.clip = function (t, e, i, r, o, n, s, a, _, h, l, $, u, p, c, f) {
					i > .02 ? ot.expandClip(t, e, i, r, l, $, u, p, c, f) : ot.clipWithTransform(t, null, o, n, s, a, _, h)
				}, ot.expandClip = function (t, e, i, r, o, n, s, a, _, h) {
					var l = s - o,
						$ = a - n,
						u = _ - o,
						p = h - n,
						c = l * p - $ * u > 0 ? i : -i,
						f = -$,
						g = l,
						d = _ - s,
						y = h - a,
						m = -y,
						T = d,
						P = Math.sqrt(d * d + y * y),
						S = -p,
						v = u,
						L = Math.sqrt(u * u + p * p),
						M = o - c * f / r,
						E = n - c * g / r,
						x = s - c * f / r,
						A = a - c * g / r,
						I = s - c * m / P,
						w = a - c * T / P,
						D = _ - c * m / P,
						O = h - c * T / P,
						b = o + c * S / L,
						R = n + c * v / L,
						F = _ + c * S / L,
						C = h + c * v / L,
						N = ot._$50;
					return null != e._$P2(N) && (ot.clipWithTransform(t, N, M, E, x, A, I, w, D, O, F, C, b, R), !0)
				}, ot.clipWithTransform = function (t, e, i, r, o, n, s, _) {
					if (arguments.length < 7) a._$li("err : @LDGL.clip()");
					else if (arguments[1] instanceof gt) {
						var h = ot._$B,
							l = e,
							$ = arguments;
						if (t.beginPath(), l) {
							l._$PS($[2], $[3], h), t.moveTo(h[0], h[1]);
							for (var u = 4; u < $.length; u += 2) l._$PS($[u], $[u + 1], h), t.lineTo(h[0], h[1])
						} else {
							t.moveTo($[2], $[3]);
							for (u = 4; u < $.length; u += 2) t.lineTo($[u], $[u + 1])
						}
						t.clip()
					} else a._$li("err : a[0] is _$6 LDTransform @LDGL.clip()")
				}, ot.createCanvas = function (t, e) {
					var i = document.createElement("canvas");
					return i.setAttribute("width", t), i.setAttribute("height", e), i || a._$li("err : " + i), i
				}, ot.dumpValues = function () {
					for (var t = "", e = 0; e < arguments.length; e++) t += "[" + e + "]= " + arguments[e].toFixed(3) + " , ";
					console.log(t)
				};

			function nt() {
				i || (this._$TT = null, this._$LT = null, this._$FS = null, this._$wL = null)
			}
			nt.prototype._$F0 = function (t) {
				this._$TT = t._$_T(), this._$LT = t._$_T(), this._$FS = t._$_T(), this._$wL = t._$nP()
			}, nt.prototype.getMinValue = function () {
				return this._$TT
			}, nt.prototype.getMaxValue = function () {
				return this._$LT
			}, nt.prototype.getDefaultValue = function () {
				return this._$FS
			}, nt.prototype.getParamID = function () {
				return this._$wL
			};

			function st(t) {
				i || (this._$e0 = null, this._$IP = null, this._$JS = !1, this._$AT = !0, this._$e0 = t, this.totalScale = 1,
					this._$7s = 1, this.totalOpacity = 1)
			}
			st.prototype._$yo = function () {
				return this._$AT && !this._$JS
			}, st.prototype._$hS = function (t) {
				this._$AT = t
			}, st.prototype._$GT = function () {
				return this._$e0
			}, st.prototype._$l2 = function (t) {
				this._$IP = t
			}, st.prototype.getPartsIndex = function () {
				return this._$IP
			}, st.prototype._$x2 = function () {
				return this._$JS
			}, st.prototype._$Ib = function (t) {
				this._$JS = t
			}, st.prototype.getTotalScale = function () {
				return this.totalScale
			}, st.prototype.setTotalScale_notForClient = function (t) {
				this.totalScale = t
			}, st.prototype.getInterpolatedOpacity = function () {
				return this._$7s
			}, st.prototype.setInterpolatedOpacity = function (t) {
				this._$7s = t
			}, st.prototype.getTotalOpacity = function (t) {
				return this.totalOpacity
			}, st.prototype.setTotalOpacity = function (t) {
				this.totalOpacity = t
			};

			function at() { }
			at._$2s = "2.1.00_1", at._$Kr = 201001e3, at._$sP = !0, at._$so = !0, at._$cb = !1, at._$3T = !0, at._$Ts = !0,
				at._$fb = !0, at._$ts = !0, at.L2D_DEFORMER_EXTEND = !0, at._$Wb = !1, at._$yr = !1, at._$Zs = !1, at.L2D_NO_ERROR =
				0, at._$i7 = 1e3, at._$9s = 1001, at._$es = 1100, at._$r7 = 2e3, at._$07 = 2001, at._$b7 = 2002, at._$H7 = 4e3,
				at.L2D_COLOR_BLEND_MODE_MULT = 0, at.L2D_COLOR_BLEND_MODE_ADD = 1, at.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2, at._$6b = !
				0, at._$cT = 0, at.clippingMaskBufferSize = 256, at.glContext = new Array, at.frameBuffers = new Array, at.fTexture =
				new Array, at.IGNORE_CLIP = !1, at.IGNORE_EXPAND = !1, at.EXPAND_W = 2, at.USE_ADJUST_TRANSLATION = !0, at.USE_CANVAS_TRANSFORM = !
				0, at.USE_CACHED_POLYGON_IMAGE = !1, at.DEBUG_DATA = {}, at.PROFILE_IOS_SPEED = {
					PROFILE_NAME: "iOS Speed",
					USE_ADJUST_TRANSLATION: !0,
					USE_CACHED_POLYGON_IMAGE: !0,
					EXPAND_W: 4
				}, at.PROFILE_IOS_QUALITY = {
					PROFILE_NAME: "iOS HiQ",
					USE_ADJUST_TRANSLATION: !0,
					USE_CACHED_POLYGON_IMAGE: !1,
					EXPAND_W: 2
				}, at.PROFILE_IOS_DEFAULT = at.PROFILE_IOS_QUALITY, at.PROFILE_ANDROID = {
					PROFILE_NAME: "Android",
					USE_ADJUST_TRANSLATION: !1,
					USE_CACHED_POLYGON_IMAGE: !1,
					EXPAND_W: 2
				}, at.PROFILE_DESKTOP = {
					PROFILE_NAME: "Desktop",
					USE_ADJUST_TRANSLATION: !1,
					USE_CACHED_POLYGON_IMAGE: !1,
					EXPAND_W: 2
				}, at.initProfile = function () {
					Mt.isIOS() ? at.setupProfile(at.PROFILE_IOS_DEFAULT) : Mt.isAndroid() ? at.setupProfile(at.PROFILE_ANDROID) :
						at.setupProfile(at.PROFILE_DESKTOP)
				}, at.setupProfile = function (t, e) {
					if ("number" == typeof t) switch (t) {
						case 9901:
							t = at.PROFILE_IOS_SPEED;
							break;
						case 9902:
							t = at.PROFILE_IOS_QUALITY;
							break;
						case 9903:
							t = at.PROFILE_IOS_DEFAULT;
							break;
						case 9904:
							t = at.PROFILE_ANDROID;
							break;
						case 9905:
							t = at.PROFILE_DESKTOP;
							break;
						default:
							alert("profile _$6 _$Ui : " + t)
					}
					arguments.length < 2 && (e = !0), e && console.log("profile : " + t.PROFILE_NAME);
					for (var i in t) at[i] = t[i], e && console.log("  [" + i + "] = " + t[i])
				}, at.init = function () {
					if (at._$6b) {
						console.log("Live2D %s", at._$2s), at._$6b = !1;
						!0, at.initProfile()
					}
				}, at.getVersionStr = function () {
					return at._$2s
				}, at.getVersionNo = function () {
					return at._$Kr
				}, at._$sT = function (t) {
					at._$cT = t
				}, at.getError = function () {
					var t = at._$cT;
					return at._$cT = 0, t
				}, at.dispose = function () {
					at.glContext = [], at.frameBuffers = [], at.fTexture = []
				}, at.setGL = function (t, e) {
					var i = e || 0;
					at.glContext[i] = t
				}, at.getGL = function (t) {
					return at.glContext[t]
				}, at.setClippingMaskBufferSize = function (t) {
					at.clippingMaskBufferSize = t
				}, at.getClippingMaskBufferSize = function () {
					return at.clippingMaskBufferSize
				}, at.deleteBuffer = function (t) {
					at.getGL(t).deleteFramebuffer(at.frameBuffers[t].framebuffer), delete at.frameBuffers[t], delete at.glContext[
						t]
				};

			function _t() { }
			_t._$r2 = function (t) {
				return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * Math.cos(t * vt.PI_F)
			};

			function ht(t) {
				i || (this._$ib = t)
			}
			ht._$fr = -1, ht.prototype.toString = function () {
				return this._$ib
			};

			function lt() {
				i || (W.prototype.constructor.call(this), this._$LP = -1, this._$d0 = 0, this._$Yo = 0, this._$JP = null, this._$5P =
					null, this._$BP = null, this._$Eo = null, this._$Qi = null, this._$6s = lt._$ms, this.culling = !0, this.gl_cacheImage =
					null, this.instanceNo = lt._$42++)
			}
			lt.prototype = new W, lt._$42 = 0, lt._$Os = 30, lt._$ms = 0, lt._$ns = 1, lt._$_s = 2, lt._$gT = new Array, lt.prototype
				._$_S = function (t) {
					this._$LP = t
				}, lt.prototype.getTextureNo = function () {
					return this._$LP
				}, lt.prototype._$ZL = function () {
					return this._$Qi
				}, lt.prototype._$H2 = function () {
					return this._$JP
				}, lt.prototype.getNumPoints = function () {
					return this._$d0
				}, lt.prototype.getType = function () {
					return W._$wb
				}, lt.prototype._$B2 = function (t, e, i) {
					var r = e,
						o = null != r._$hr ? r._$hr : r._$Cr;
					switch (B._$do) {
						default:
						case B._$Ms:
							throw new Error("_$L _$ro ");
						case B._$Qs:
							for (var n = this._$d0 - 1; n >= 0; --n) {
								o[n * B._$No + 4] = i
							}
					}
				}, lt.prototype._$zP = function () {
					this._$GS = new D, this._$GS._$zP()
				}, lt.prototype._$F0 = function (t) {
					W.prototype._$F0.call(this, t), this._$LP = t._$6L(), this._$d0 = t._$6L(), this._$Yo = t._$6L();
					var e = t._$nP();
					this._$BP = new Int16Array(3 * this._$Yo);
					for (var i = 3 * this._$Yo - 1; i >= 0; --i) this._$BP[i] = e[i];
					if (this._$Eo = t._$nP(), this._$Qi = t._$nP(), t.getFormatVersion() >= G._$s7) {
						if (this._$JP = t._$6L(), 0 != this._$JP) {
							if (0 != (1 & this._$JP)) {
								var r = t._$6L();
								null == this._$5P && (this._$5P = new Object), this._$5P._$Hb = parseInt(r)
							}
							0 != (this._$JP & lt._$Os) ? this._$6s = (this._$JP & lt._$Os) >> 1 : this._$6s = lt._$ms, 0 != (32 & this._$JP) &&
								(this.culling = !1)
						}
					} else this._$JP = 0
				}, lt.prototype.init = function (t) {
					var e = new $t(this),
						i = this._$d0 * B._$No,
						r = this._$32();
					null != e._$Cr && (e._$Cr = null), e._$Cr = new Float32Array(i), null != e._$hr && (e._$hr = null), e._$hr = r ?
						new Float32Array(i) : null;
					switch (B._$do) {
						default:
						case B._$Ms:
							if (B._$Ls)
								for (var o = this._$d0 - 1; o >= 0; --o) {
									var n = o << 1;
									this._$Qi[n + 1] = 1 - this._$Qi[n + 1]
								}
							break;
						case B._$Qs:
							for (o = this._$d0 - 1; o >= 0; --o) {
								n = o << 1;
								var s = o * B._$No,
									a = this._$Qi[n],
									_ = this._$Qi[n + 1];
								e._$Cr[s] = a, e._$Cr[s + 1] = _, e._$Cr[s + 4] = 0, r && (e._$hr[s] = a, e._$hr[s + 1] = _, e._$hr[s + 4] =
									0)
							}
					}
					return e
				}, lt.prototype._$Nr = function (t, e) {
					var i = e;
					if (this != i._$GT() && console.log("### assert!! ### "), this._$GS._$Ur(t) && (W.prototype._$Nr.call(this, t,
						i), !i._$IS[0])) {
						var r = lt._$gT;
						r[0] = !1, S._$Vr(t, this._$GS, r, this._$d0, this._$Eo, i._$Cr, B._$i2, B._$No)
					}
				}, lt.prototype._$2b = function (t, e) {
					try {
						this != e._$GT() && console.log("### assert!! ### ");
						var i = !1;
						e._$IS[0] && (i = !0);
						var r = e;
						if (!i && (W.prototype._$2b.call(this, t), this._$32())) {
							var o = this.getTargetBaseDataID();
							if (r._$8r == W._$ur && (r._$8r = t.getBaseDataIndex(o)), r._$8r < 0) at._$so && a._$li("_$L _$0P _$G :: %s",
								o);
							else {
								var n = t.getBaseData(r._$8r),
									s = t._$q2(r._$8r);
								null == n || s._$x2() ? r._$AT = !1 : (n._$nb(t, s, r._$Cr, r._$hr, this._$d0, B._$i2, B._$No), r._$AT = !0),
									r.baseOpacity = s.getTotalOpacity()
							}
						}
					} catch (t) {
						throw t
					}
				}, lt.prototype.draw = function (t, e, i) {
					if (this != i._$GT() && console.log("### assert!! ### "), !i._$IS[0]) {
						var r = i,
							o = this._$LP;
						o < 0 && (o = 1);
						var n = this.getOpacity(e, r) * i._$VS * i.baseOpacity,
							s = null != r._$hr ? r._$hr : r._$Cr;
						t.setClipBufPre_clipContextForDraw(i.clipBufPre_clipContext), t._$WP(this.culling), t._$Uo(o, 3 * this._$Yo,
							this._$BP, s, this._$Qi, n, this._$6s, r)
					}
				}, lt.prototype.dump = function () {
					console.log("  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \n", this._$LP, this._$d0, this._$Yo), console.log(
						"  _$Oi _$di = { ");
					for (var t = 0; t < this._$BP.length; t++) console.log("%5d ,", this._$BP[t]);
					console.log("\n  _$5i _$30");
					for (t = 0; t < this._$Eo.length; t++) {
						console.log("\n    _$30[%d] = ", t);
						for (var e = this._$Eo[t], i = 0; i < e.length; i++) console.log("%6.2f, ", e[i])
					}
					console.log("\n")
				}, lt.prototype._$72 = function (t) {
					return null == this._$5P ? null : this._$5P[t]
				}, lt.prototype.getIndexArray = function () {
					return this._$BP
				};

			function $t(t) {
				Lt.prototype.constructor.call(this, t), this._$8r = W._$ur, this._$Cr = null, this._$hr = null
			}
			$t.prototype = new Lt, $t.prototype.getTransformedPoints = function () {
				return null != this._$hr ? this._$hr : this._$Cr
			};

			function ut() {
				i || (this.x = null, this.y = null)
			}
			ut.prototype._$HT = function (t) {
				this.x = t.x, this.y = t.y
			}, ut.prototype._$HT = function (t, e) {
				this.x = t, this.y = e
			};

			function pt(t) {
				i || (r.prototype.constructor.call(this), this.drawParamWebGL = new yt(t), this.drawParamWebGL.setGL(at.getGL(t)))
			}
			pt.prototype = new r, pt.loadModel = function (t) {
				var e = new pt;
				return r._$62(e, t), e
			}, pt.loadModel = function (t, e) {
				var i = new pt(e || 0);
				return r._$62(i, t), i
			}, pt._$to = function () {
				return new pt
			}, pt._$er = function (t) {
				var e = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
				if (0 == e.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e._$PL());
				for (var i = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1",
					"../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"
				], r = pt.loadModel(e._$3b()), o = 0; o < i.length; o++) {
					var n = new _$5(i[o]);
					if (0 == n.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + n._$PL());
					r.setTexture(o, _$nL._$_o(t, n._$3b()))
				}
				return r
			}, pt.prototype.setGL = function (t) {
				at.setGL(t)
			}, pt.prototype.setTransform = function (t) {
				this.drawParamWebGL.setTransform(t)
			}, pt.prototype.update = function () {
				this._$5S.update(), this._$5S.preDraw(this.drawParamWebGL)
			}, pt.prototype.draw = function () {
				this._$5S.draw(this.drawParamWebGL)
			}, pt.prototype._$K2 = function () {
				this.drawParamWebGL._$K2()
			}, pt.prototype.setTexture = function (t, e) {
				null == this.drawParamWebGL && a._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(
					t, e)
			}, pt.prototype.setTexture = function (t, e) {
				null == this.drawParamWebGL && a._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(
					t, e)
			}, pt.prototype._$Rs = function () {
				return this.drawParamWebGL._$Rs()
			}, pt.prototype._$Ds = function (t) {
				this.drawParamWebGL._$Ds(t)
			}, pt.prototype.getDrawParam = function () {
				return this.drawParamWebGL
			}, pt.prototype.setMatrix = function (t) {
				this.drawParamWebGL.setMatrix(t)
			}, pt.prototype.setPremultipliedAlpha = function (t) {
				this.drawParamWebGL.setPremultipliedAlpha(t)
			}, pt.prototype.isPremultipliedAlpha = function () {
				return this.drawParamWebGL.isPremultipliedAlpha()
			}, pt.prototype.setAnisotropy = function (t) {
				this.drawParamWebGL.setAnisotropy(t)
			}, pt.prototype.getAnisotropy = function () {
				return this.drawParamWebGL.getAnisotropy()
			};

			function ct() {
				i || (this.motions = null, this._$eb = !1, this.motions = new Array)
			}
			ct.prototype._$tb = function () {
				return this.motions
			}, ct.prototype.startMotion = function (t, e) {
				for (var i = null, r = this.motions.length, o = 0; o < r; ++o) null != (i = this.motions[o]) && (i._$qS(i._$w0
					.getFadeOut()), this._$eb && a._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n",
						r, i._$sr));
				if (null == t) return -1;
				(i = new ft)._$w0 = t, this.motions.push(i);
				var n = i._$sr;
				return this._$eb && a._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n", r, n), n
			}, ct.prototype.updateParam = function (t) {
				try {
					for (var e = !1, i = 0; i < this.motions.length; i++) {
						var r = this.motions[i];
						if (null != r) {
							var o = r._$w0;
							null != o ? (o.updateParam(t, r), e = !0, r.isFinished() && (this._$eb && a._$Ji(
								"MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n", this.motions.length - 1, r._$sr),
								this.motions.splice(i, 1), i--)) : (this.motions = this.motions.splice(i, 1), i--)
						} else this.motions.splice(i, 1), i--
					}
					return e
				} catch (t) {
					return a._$li(t), !0
				}
			}, ct.prototype.isFinished = function (t) {
				if (arguments.length >= 1) {
					for (var e = 0; e < this.motions.length; e++) {
						if (null != (i = this.motions[e]) && (i._$sr == t && !i.isFinished())) return !1
					}
					return !0
				}
				for (e = 0; e < this.motions.length; e++) {
					var i;
					if (null != (i = this.motions[e])) {
						if (null != i._$w0) {
							if (!i.isFinished()) return !1
						} else this.motions.splice(e, 1), e--
					} else this.motions.splice(e, 1), e--
				}
				return !0
			}, ct.prototype.stopAllMotions = function () {
				for (var t = 0; t < this.motions.length; t++) {
					var e = this.motions[t];
					if (null != e) {
						e._$w0;
						this.motions.splice(t, 1), t--
					} else this.motions.splice(t, 1), t--
				}
			}, ct.prototype._$Zr = function (t) {
				this._$eb = t
			}, ct.prototype._$e = function () {
				console.log("-- _$R --\n");
				for (var t = 0; t < this.motions.length; t++) {
					var e = this.motions[t]._$w0;
					console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, e.toString())
				}
			};

			function ft() {
				this._$w0 = null, this._$AT = !0, this._$9L = !1, this._$z2 = -1, this._$bs = -1, this._$Do = -1, this._$sr =
					null, this._$sr = ft._$Gs++
			}
			ft._$Gs = 0, ft.prototype.isFinished = function () {
				return this._$9L
			}, ft.prototype._$qS = function (t) {
				var e = A.getUserTimeMSec() + t;
				(this._$Do < 0 || e < this._$Do) && (this._$Do = e)
			}, ft.prototype._$Bs = function () {
				return this._$sr
			};

			function gt() {
				this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1)
			}
			gt.prototype.setContext = function (t) {
				var e = this.m;
				t.transform(e[0], e[1], e[3], e[4], e[6], e[7])
			}, gt.prototype.toString = function () {
				for (var t = "LDTransform { ", e = 0; e < 9; e++) t += this.m[e].toFixed(2) + " ,";
				return t += " }"
			}, gt.prototype.identity = function () {
				var t = this.m;
				t[0] = t[4] = t[8] = 1, t[1] = t[2] = t[3] = t[5] = t[6] = t[7] = 0
			}, gt.prototype._$PS = function (t, e, i) {
				null == i && (i = new Array(0, 0));
				var r = this.m;
				return i[0] = r[0] * t + r[3] * e + r[6], i[1] = r[1] * t + r[4] * e + r[7], i
			}, gt.prototype._$P2 = function (t) {
				t || (t = new gt);
				var e = this.m,
					i = e[0],
					r = e[1],
					o = e[2],
					n = e[3],
					s = e[4],
					a = e[5],
					_ = e[6],
					h = e[7],
					l = e[8],
					$ = i * s * l + r * a * _ + o * n * h - i * a * h - o * s * _ - r * n * l;
				if (0 == $) return null;
				var u = 1 / $;
				return t.m[0] = u * (s * l - h * a), t.m[1] = u * (h * o - r * l), t.m[2] = u * (r * a - s * o), t.m[3] = u *
					(_ * a - n * l), t.m[4] = u * (i * l - _ * o), t.m[5] = u * (n * o - i * a), t.m[6] = u * (n * h - _ * s), t.m[
					7] = u * (_ * r - i * h), t.m[8] = u * (i * s - n * r), t
			}, gt.prototype.transform = function (t, e, i) {
				null == i && (i = new Array(0, 0));
				var r = this.m;
				return i[0] = r[0] * t + r[3] * e + r[6], i[1] = r[1] * t + r[4] * e + r[7], i
			}, gt.prototype.translate = function (t, e) {
				var i = this.m;
				i[6] = i[0] * t + i[3] * e + i[6], i[7] = i[1] * t + i[4] * e + i[7], i[8] = i[2] * t + i[5] * e + i[8]
			}, gt.prototype.scale = function (t, e) {
				var i = this.m;
				i[0] *= t, i[1] *= t, i[2] *= t, i[3] *= e, i[4] *= e, i[5] *= e
			}, gt.prototype.shear = function (t, e) {
				var i = this.m,
					r = i[0] + i[3] * e,
					o = i[1] + i[4] * e,
					n = i[2] + i[5] * e;
				i[3] = i[0] * t + i[3], i[4] = i[1] * t + i[4], i[5] = i[2] * t + i[5], i[0] = r, i[1] = o, i[2] = n
			}, gt.prototype.rotate = function (t) {
				var e = this.m,
					i = Math.cos(t),
					r = Math.sin(t),
					o = e[0] * i + e[3] * r,
					n = e[1] * i + e[4] * r,
					s = e[2] * i + e[5] * r;
				e[3] = -e[0] * r + e[3] * i, e[4] = -e[1] * r + e[4] * i, e[5] = -e[2] * r + e[5] * i, e[0] = o, e[1] = n, e[2] =
					s
			}, gt.prototype.concatenate = function (t) {
				var e = this.m,
					i = t.m,
					r = e[0] * i[0] + e[3] * i[1] + e[6] * i[2],
					o = e[1] * i[0] + e[4] * i[1] + e[7] * i[2],
					n = e[2] * i[0] + e[5] * i[1] + e[8] * i[2],
					s = e[0] * i[3] + e[3] * i[4] + e[6] * i[5],
					a = e[1] * i[3] + e[4] * i[4] + e[7] * i[5],
					_ = e[2] * i[3] + e[5] * i[4] + e[8] * i[5],
					h = e[0] * i[6] + e[3] * i[7] + e[6] * i[8],
					l = e[1] * i[6] + e[4] * i[7] + e[7] * i[8],
					$ = e[2] * i[6] + e[5] * i[7] + e[8] * i[8];
				m[0] = r, m[1] = o, m[2] = n, m[3] = s, m[4] = a, m[5] = _, m[6] = h, m[7] = l, m[8] = $
			};

			function dt(t) {
				i || it.prototype.constructor.call(this, t)
			}
			dt.prototype = new it, dt._$eT = null, dt._$tP = new Object, dt._$2o = function () {
				return null == dt._$eT && (dt._$eT = dt.getID("DST_BASE")), dt._$eT
			}, dt._$27 = function () {
				dt._$tP.clear(), dt._$eT = null
			}, dt.getID = function (t) {
				var e = dt._$tP[t];
				return null == e && (e = new dt(t), dt._$tP[t] = e), e
			}, dt.prototype._$3s = function () {
				return new dt
			};

			function yt(t) {
				i || (M.prototype.constructor.call(this), this.textures = new Array, this.transform = null, this.gl = null,
					this.glno = t, this.firstDraw = !0, this.anisotropyExt = null, this.maxAnisotropy = 0, this._$As = 32, this._$Gr = !
					1, this._$NT = null, this._$vS = null, this._$no = null, this.vertShader = null, this.fragShader = null, this
						.vertShaderOff = null, this.fragShaderOff = null)
			}
			yt.prototype = new M, yt._$9r = function (t) {
				return new Float32Array(t)
			}, yt._$vb = function (t) {
				return new Int16Array(t)
			}, yt._$cr = function (t, e) {
				return null == t || t._$yL() < e.length ? ((t = yt._$9r(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(
					e), t._$oT(0)), t
			}, yt._$mb = function (t, e) {
				return null == t || t._$yL() < e.length ? ((t = yt._$vb(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(
					e), t._$oT(0)), t
			}, yt._$Hs = function () {
				return this._$Gr
			}, yt._$as = function (t) {
				this._$Gr = t
			}, yt.prototype.getGL = function () {
				return this.gl
			}, yt.prototype.setGL = function (t) {
				this.gl = t
			}, yt.prototype.setTransform = function (t) {
				this.transform = t
			}, yt.prototype._$ZT = function () {
				var t = this.gl;
				this.firstDraw && (this.initShader(), this.firstDraw = !1, this.anisotropyExt = t.getExtension(
					"EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension(
						"MOZ_EXT_texture_filter_anisotropic"), this.anisotropyExt && (this.maxAnisotropy = t.getParameter(this.anisotropyExt
							.MAX_TEXTURE_MAX_ANISOTROPY_EXT))), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.disable(t.DEPTH_TEST),
					t.frontFace(t.CW), t.enable(t.BLEND), t.colorMask(1, 1, 1, 1), t.bindBuffer(t.ARRAY_BUFFER, null), t.bindBuffer(
						t.ELEMENT_ARRAY_BUFFER, null)
			}, yt.prototype._$Uo = function (t, e, i, r, o, n, s, a) {
				if (!(n < .01 && null == this.clipBufPre_clipContextMask)) {
					n > .9 && at.EXPAND_W;
					var _ = this.gl;
					if (null == this.gl) throw new Error("gl is null");
					var h = 1 * this._$C0 * n,
						l = 1 * this._$tT * n,
						$ = 1 * this._$WL * n,
						u = this._$lT * n;
					if (null != this.clipBufPre_clipContextMask) {
						_.frontFace(_.CCW), _.useProgram(this.shaderProgram), this._$vS = mt(_, this._$vS, r), this._$no = Tt(_,
							this._$no, i), _.enableVertexAttribArray(this.a_position_Loc), _.vertexAttribPointer(this.a_position_Loc,
								2, _.FLOAT, !1, 0, 0), this._$NT = mt(_, this._$NT, o), _.activeTexture(_.TEXTURE1), _.bindTexture(_.TEXTURE_2D,
									this.textures[t]), _.uniform1i(this.s_texture0_Loc, 1), _.enableVertexAttribArray(this.a_texCoord_Loc), _.vertexAttribPointer(
										this.a_texCoord_Loc, 2, _.FLOAT, !1, 0, 0), _.uniformMatrix4fv(this.u_matrix_Loc, !1, this.getClipBufPre_clipContextMask()
											.matrixForMask);
						var p = this.getClipBufPre_clipContextMask().layoutChannelNo,
							c = this.getChannelFlagAsColor(p);
						_.uniform4f(this.u_channelFlag, c.r, c.g, c.b, c.a);
						var f = this.getClipBufPre_clipContextMask().layoutBounds;
						_.uniform4f(this.u_baseColor_Loc, 2 * f.x - 1, 2 * f.y - 1, 2 * f._$EL() - 1, 2 * f._$5T() - 1), _.uniform1i(
							this.u_maskFlag_Loc, !0)
					} else if (null != this.getClipBufPre_clipContextDraw()) {
						_.useProgram(this.shaderProgramOff), this._$vS = mt(_, this._$vS, r), this._$no = Tt(_, this._$no, i), _.enableVertexAttribArray(
							this.a_position_Loc_Off), _.vertexAttribPointer(this.a_position_Loc_Off, 2, _.FLOAT, !1, 0, 0), this._$NT =
							mt(_, this._$NT, o), _.activeTexture(_.TEXTURE1), _.bindTexture(_.TEXTURE_2D, this.textures[t]), _.uniform1i(
								this.s_texture0_Loc_Off, 1), _.enableVertexAttribArray(this.a_texCoord_Loc_Off), _.vertexAttribPointer(
									this.a_texCoord_Loc_Off, 2, _.FLOAT, !1, 0, 0), _.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, !1, this.getClipBufPre_clipContextDraw()
										.matrixForDraw), _.uniformMatrix4fv(this.u_matrix_Loc_Off, !1, this.matrix4x4), _.activeTexture(_.TEXTURE2),
							_.bindTexture(_.TEXTURE_2D, at.fTexture[this.glno]), _.uniform1i(this.s_texture1_Loc_Off, 2);
						p = this.getClipBufPre_clipContextDraw().layoutChannelNo, c = this.getChannelFlagAsColor(p);
						_.uniform4f(this.u_channelFlag_Loc_Off, c.r, c.g, c.b, c.a), _.uniform4f(this.u_baseColor_Loc_Off, h, l, $,
							u)
					} else _.useProgram(this.shaderProgram), this._$vS = mt(_, this._$vS, r), this._$no = Tt(_, this._$no, i), _.enableVertexAttribArray(
						this.a_position_Loc), _.vertexAttribPointer(this.a_position_Loc, 2, _.FLOAT, !1, 0, 0), this._$NT = mt(_,
							this._$NT, o), _.activeTexture(_.TEXTURE1), _.bindTexture(_.TEXTURE_2D, this.textures[t]), _.uniform1i(this
								.s_texture0_Loc, 1), _.enableVertexAttribArray(this.a_texCoord_Loc), _.vertexAttribPointer(this.a_texCoord_Loc,
									2, _.FLOAT, !1, 0, 0), _.uniformMatrix4fv(this.u_matrix_Loc, !1, this.matrix4x4), _.uniform4f(this.u_baseColor_Loc,
										h, l, $, u), _.uniform1i(this.u_maskFlag_Loc, !1);
					this.culling ? this.gl.enable(_.CULL_FACE) : this.gl.disable(_.CULL_FACE), this.gl.enable(_.BLEND);
					var g, d, y, m;
					if (null != this.clipBufPre_clipContextMask) g = _.ONE, d = _.ONE_MINUS_SRC_ALPHA, y = _.ONE, m = _.ONE_MINUS_SRC_ALPHA;
					else switch (s) {
						case lt._$ms:
							g = _.ONE, d = _.ONE_MINUS_SRC_ALPHA, y = _.ONE, m = _.ONE_MINUS_SRC_ALPHA;
							break;
						case lt._$ns:
							g = _.ONE, d = _.ONE, y = _.ZERO, m = _.ONE;
							break;
						case lt._$_s:
							g = _.DST_COLOR, d = _.ONE_MINUS_SRC_ALPHA, y = _.ZERO, m = _.ONE
					}
					_.blendEquationSeparate(_.FUNC_ADD, _.FUNC_ADD), _.blendFuncSeparate(g, d, y, m), this.anisotropyExt && _.texParameteri(
						_.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
					var T = i.length;
					_.drawElements(_.TRIANGLES, T, _.UNSIGNED_SHORT, 0), _.bindTexture(_.TEXTURE_2D, null)
				}
			};

			function mt(t, e, i) {
				return null == e && (e = t.createBuffer()), t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, i, t.DYNAMIC_DRAW),
					e
			}

			function Tt(t, e, i) {
				return null == e && (e = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e), t.bufferData(t.ELEMENT_ARRAY_BUFFER,
					i, t.DYNAMIC_DRAW), e
			}
			yt.prototype._$Rs = function () {
				throw new Error("_$Rs")
			}, yt.prototype._$Ds = function (t) {
				throw new Error("_$Ds")
			}, yt.prototype._$K2 = function () {
				for (var t = 0; t < this.textures.length; t++) {
					0 != this.textures[t] && (this.gl._$K2(1, this.textures, t), this.textures[t] = null)
				}
			}, yt.prototype.setTexture = function (t, e) {
				this.textures[t] = e
			}, yt.prototype.initShader = function () {
				var t = this.gl;
				this.loadShaders2(), this.a_position_Loc = t.getAttribLocation(this.shaderProgram, "a_position"), this.a_texCoord_Loc =
					t.getAttribLocation(this.shaderProgram, "a_texCoord"), this.u_matrix_Loc = t.getUniformLocation(this.shaderProgram,
						"u_mvpMatrix"), this.s_texture0_Loc = t.getUniformLocation(this.shaderProgram, "s_texture0"), this.u_channelFlag =
					t.getUniformLocation(this.shaderProgram, "u_channelFlag"), this.u_baseColor_Loc = t.getUniformLocation(this.shaderProgram,
						"u_baseColor"), this.u_maskFlag_Loc = t.getUniformLocation(this.shaderProgram, "u_maskFlag"), this.a_position_Loc_Off =
					t.getAttribLocation(this.shaderProgramOff, "a_position"), this.a_texCoord_Loc_Off = t.getAttribLocation(this.shaderProgramOff,
						"a_texCoord"), this.u_matrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix"), this.u_clipMatrix_Loc_Off =
					t.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix"), this.s_texture0_Loc_Off = t.getUniformLocation(
						this.shaderProgramOff, "s_texture0"), this.s_texture1_Loc_Off = t.getUniformLocation(this.shaderProgramOff,
							"s_texture1"), this.u_channelFlag_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_channelFlag"),
					this.u_baseColor_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_baseColor")
			}, yt.prototype.disposeShader = function () {
				var t = this.gl;
				this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = null), this.shaderProgramOff &&
					(t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = null)
			}, yt.prototype.compileShader = function (t, e) {
				var i = this.gl,
					r = e,
					o = i.createShader(t);
				if (null == o) return a._$Ji("_$L0 to create shader"), null;
				i.shaderSource(o, r), i.compileShader(o);
				if (!i.getShaderParameter(o, i.COMPILE_STATUS)) {
					var n = i.getShaderInfoLog(o);
					return a._$Ji("_$L0 to compile shader : " + n), i.deleteShader(o), null
				}
				return o
			}, yt.prototype.loadShaders2 = function () {
				var t = this.gl;
				if (this.shaderProgram = t.createProgram(), !this.shaderProgram) return !1;
				if (this.shaderProgramOff = t.createProgram(), !this.shaderProgramOff) return !1;
				if (this.vertShader = this.compileShader(t.VERTEX_SHADER,
					"attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}"
				), !this.vertShader) return a._$Ji("Vertex shader compile _$li!"), !1;
				if (this.vertShaderOff = this.compileShader(t.VERTEX_SHADER,
					"attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}"
				), !this.vertShaderOff) return a._$Ji("OffVertex shader compile _$li!"), !1;
				if (this.fragShader = this.compileShader(t.FRAGMENT_SHADER,
					"precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}"
				), !this.fragShader) return a._$Ji("Fragment shader compile _$li!"), !1;
				if (this.fragShaderOff = this.compileShader(t.FRAGMENT_SHADER,
					"precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}"
				), !this.fragShaderOff) return a._$Ji("OffFragment shader compile _$li!"), !1;
				t.attachShader(this.shaderProgram, this.vertShader), t.attachShader(this.shaderProgram, this.fragShader), t.attachShader(
					this.shaderProgramOff, this.vertShaderOff), t.attachShader(this.shaderProgramOff, this.fragShaderOff), t.linkProgram(
						this.shaderProgram), t.linkProgram(this.shaderProgramOff);
				if (!t.getProgramParameter(this.shaderProgram, t.LINK_STATUS)) {
					var e = t.getProgramInfoLog(this.shaderProgram);
					return a._$Ji("_$L0 to link program: " + e), this.vertShader && (t.deleteShader(this.vertShader), this.vertShader =
						0), this.fragShader && (t.deleteShader(this.fragShader), this.fragShader = 0), this.shaderProgram && (t.deleteProgram(
							this.shaderProgram), this.shaderProgram = 0), this.vertShaderOff && (t.deleteShader(this.vertShaderOff),
								this.vertShaderOff = 0), this.fragShaderOff && (t.deleteShader(this.fragShaderOff), this.fragShaderOff = 0),
						this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = 0), !1
				}
				return !0
			}, yt.prototype.createFramebuffer = function () {
				var t = this.gl,
					e = at.clippingMaskBufferSize,
					i = t.createFramebuffer();
				t.bindFramebuffer(t.FRAMEBUFFER, i);
				var r = t.createRenderbuffer();
				t.bindRenderbuffer(t.RENDERBUFFER, r), t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, e, e), t.framebufferRenderbuffer(
					t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, r);
				var o = t.createTexture();
				return t.bindTexture(t.TEXTURE_2D, o), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, e, 0, t.RGBA, t.UNSIGNED_BYTE,
					null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER,
						t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t
							.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D,
								o, 0), t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindFramebuffer(t.FRAMEBUFFER,
									null), at.fTexture[this.glno] = o, {
					framebuffer: i,
					renderbuffer: r,
					texture: at.fTexture[this.glno]
				}
			};

			function Pt(t) {
				i || (this._$P = new Int8Array(8), this._$R0 = new DataView(this._$P.buffer), this._$3i = new Int8Array(1e3),
					this._$hL = 0, this._$v0 = 0, this._$S2 = 0, this._$Ko = new Array, this._$T = t, this._$F = 0)
			}
			Pt.prototype._$fP = function () {
				var t, e, i, r = this._$ST();
				if (0 == (128 & r)) return 255 & r;
				if (0 == (128 & (t = this._$ST()))) return (127 & r) << 7 | 127 & t;
				if (0 == (128 & (e = this._$ST()))) return (127 & r) << 14 | (127 & t) << 7 | 255 & e;
				if (0 == (128 & (i = this._$ST()))) return (127 & r) << 21 | (127 & t) << 14 | (127 & e) << 7 | 255 & i;
				throw new ht("_$L _$0P  _")
			}, Pt.prototype.getFormatVersion = function () {
				return this._$S2
			}, Pt.prototype._$gr = function (t) {
				this._$S2 = t
			}, Pt.prototype._$3L = function () {
				return this._$fP()
			}, Pt.prototype._$mP = function () {
				return this._$zT(), this._$F += 8, this._$T.getFloat64(this._$F - 8)
			}, Pt.prototype._$_T = function () {
				return this._$zT(), this._$F += 4, this._$T.getFloat32(this._$F - 4)
			}, Pt.prototype._$6L = function () {
				return this._$zT(), this._$F += 4, this._$T.getInt32(this._$F - 4)
			}, Pt.prototype._$ST = function () {
				return this._$zT(), this._$T.getInt8(this._$F++)
			}, Pt.prototype._$9T = function () {
				return this._$zT(), this._$F += 2, this._$T.getInt16(this._$F - 2)
			}, Pt.prototype._$2T = function () {
				throw this._$zT(), this._$F += 8, new ht("_$L _$q read long")
			}, Pt.prototype._$po = function () {
				return this._$zT(), 0 != this._$T.getInt8(this._$F++)
			};
			var St = !0;
			Pt.prototype._$bT = function () {
				this._$zT();
				var t = this._$3L(),
					e = null;
				if (St) try {
					var i = new ArrayBuffer(2 * t);
					e = new Uint16Array(i);
					for (var r = 0; r < t; ++r) e[r] = this._$T.getUint8(this._$F++);
					return String.fromCharCode.apply(null, e)
				} catch (t) {
					St = !1
				}
				try {
					var o = new Array;
					if (null == e)
						for (r = 0; r < t; ++r) o[r] = this._$T.getUint8(this._$F++);
					else
						for (r = 0; r < t; ++r) o[r] = e[r];
					return String.fromCharCode.apply(null, o)
				} catch (t) {
					console.log("read utf8 / _$rT _$L0 !! : " + t)
				}
			}, Pt.prototype._$cS = function () {
				this._$zT();
				for (var t = this._$3L(), e = new Int32Array(t), i = 0; i < t; i++) e[i] = this._$T.getInt32(this._$F), this._$F +=
					4;
				return e
			}, Pt.prototype._$Tb = function () {
				this._$zT();
				for (var t = this._$3L(), e = new Float32Array(t), i = 0; i < t; i++) e[i] = this._$T.getFloat32(this._$F),
					this._$F += 4;
				return e
			}, Pt.prototype._$5b = function () {
				this._$zT();
				for (var t = this._$3L(), e = new Float64Array(t), i = 0; i < t; i++) e[i] = this._$T.getFloat64(this._$F),
					this._$F += 8;
				return e
			}, Pt.prototype._$nP = function () {
				return this._$Jb(-1)
			}, Pt.prototype._$Jb = function (t) {
				if (this._$zT(), t < 0 && (t = this._$3L()), t == G._$7P) {
					var e = this._$6L();
					if (0 <= e && e < this._$Ko.length) return this._$Ko[e];
					throw new ht("_$sL _$4i @_$m0")
				}
				var i = this._$4b(t);
				return this._$Ko.push(i), i
			}, Pt.prototype._$4b = function (t) {
				if (0 == t) return null;
				if (50 == t) {
					var e = this._$bT();
					return n = b.getID(e)
				}
				if (51 == t) {
					e = this._$bT();
					return n = dt.getID(e)
				}
				if (134 == t) {
					e = this._$bT();
					return n = h.getID(e)
				}
				if (60 == t) {
					e = this._$bT();
					return n = l.getID(e)
				}
				if (t >= 48) {
					var r = G._$9o(t);
					return null != r ? (r._$F0(this), r) : null
				}
				switch (t) {
					case 1:
						return this._$bT();
					case 10:
						return new function () {
							i || (this.color = null)
						}(this._$6L(), !0);
					case 11:
						return new P(this._$mP(), this._$mP(), this._$mP(), this._$mP());
					case 12:
						return new P(this._$_T(), this._$_T(), this._$_T(), this._$_T());
					case 13:
						return new v(this._$mP(), this._$mP());
					case 14:
						return new v(this._$_T(), this._$_T());
					case 15:
						for (var o = this._$3L(), n = new Array(o), s = 0; s < o; s++) n[s] = this._$nP();
						return n;
					case 17:
						return n = new R(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP());
					case 21:
						return new _(this._$6L(), this._$6L(), this._$6L(), this._$6L());
					case 22:
						return new ut(this._$6L(), this._$6L());
					case 23:
						throw new Error("_$L _$ro ");
					case 16:
					case 25:
						return this._$cS();
					case 26:
						return this._$5b();
					case 27:
						return this._$Tb();
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 18:
					case 19:
					case 20:
					case 24:
					case 28:
						throw new ht("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : " + t);
					default:
						throw new ht("_$6 _$q : _$nP() NO _$i : " + t)
				}
			}, Pt.prototype._$8L = function () {
				return 0 == this._$hL ? this._$v0 = this._$ST() : 8 == this._$hL && (this._$v0 = this._$ST(), this._$hL = 0),
					1 == (this._$v0 >> 7 - this._$hL++ & 1)
			}, Pt.prototype._$zT = function () {
				0 != this._$hL && (this._$hL = 0)
			};

			function vt() { }
			vt._$2S = Math.PI / 180, vt._$bS = Math.PI / 180, vt._$wS = 180 / Math.PI, vt._$NS = 180 / Math.PI, vt.PI_F =
				Math.PI, vt._$kT = [0, .012368, .024734, .037097, .049454, .061803, .074143, .086471, .098786, .111087, .12337,
					.135634, .147877, .160098, .172295, .184465, .196606, .208718, .220798, .232844, .244854, .256827, .268761,
					.280654, .292503, .304308, .316066, .327776, .339436, .351044, .362598, .374097, .385538, .396921, .408243,
					.419502, .430697, .441826, .452888, .463881, .474802, .485651, .496425, .507124, .517745, .528287, .538748,
					.549126, .559421, .56963, .579752, .589785, .599728, .609579, .619337, .629, .638567, .648036, .657406,
					.666676, .675843, .684908, .693867, .70272, .711466, .720103, .72863, .737045, .745348, .753536, .76161,
					.769566, .777405, .785125, .792725, .800204, .807561, .814793, .821901, .828884, .835739, .842467, .849066,
					.855535, .861873, .868079, .874153, .880093, .885898, .891567, .897101, .902497, .907754, .912873, .917853,
					.922692, .92739, .931946, .936359, .940629, .944755, .948737, .952574, .956265, .959809, .963207, .966457,
					.96956, .972514, .97532, .977976, .980482, .982839, .985045, .987101, .989006, .990759, .992361, .993811,
					.995109, .996254, .997248, .998088, .998776, .999312, .999694, .999924, 1
				], vt._$92 = function (t, e) {
					var i = Math.atan2(t[1], t[0]),
						r = Math.atan2(e[1], e[0]);
					return vt._$tS(i, r)
				}, vt._$tS = function (t, e) {
					for (var i = t - e; i < -Math.PI;) i += 2 * Math.PI;
					for (; i > Math.PI;) i -= 2 * Math.PI;
					return i
				}, vt._$9 = function (t) {
					return Math.sin(t)
				}, vt.fcos = function (t) {
					return Math.cos(t)
				};

			function Lt(t) {
				i || (this._$e0 = null, this._$IP = null, this._$Us = null, this._$7s = null, this._$IS = [!1], this._$VS =
					null, this._$AT = !0, this.baseOpacity = 1, this.clipBufPre_clipContext = null, this._$e0 = t)
			}
			Lt.prototype._$u2 = function () {
				return this._$IS[0]
			}, Lt.prototype._$yo = function () {
				return this._$AT && !this._$IS[0]
			}, Lt.prototype._$GT = function () {
				return this._$e0
			};

			function Mt() { }
			Mt._$W2 = 0, Mt.SYSTEM_INFO = null, Mt.USER_AGENT = navigator.userAgent, Mt.isIPhone = function () {
				return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isIPhone
			}, Mt.isIOS = function () {
				return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isIPhone || Mt.SYSTEM_INFO._isIPad
			}, Mt.isAndroid = function () {
				return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isAndroid
			}, Mt.getOSVersion = function () {
				return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO.version
			}, Mt.getOS = function () {
				return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isIPhone || Mt.SYSTEM_INFO._isIPad ? "iOS" : Mt.SYSTEM_INFO
					._isAndroid ? "Android" : "_$Q0 OS"
			}, Mt.setup = function () {
				var t = Mt.USER_AGENT;

				function e(t, e) {
					for (var i = t.substring(e).split(/[ _,;\.]/), r = 0, o = 0; o <= 2 && !isNaN(i[o]); o++) {
						var n = parseInt(i[o]);
						if (n < 0 || n > 999) {
							a._$li("err : " + n + " @UtHtml5.setup()"), r = 0;
							break
						}
						r += n * Math.pow(1e3, 2 - o)
					}
					return r
				}
				var i, r = Mt.SYSTEM_INFO = {
					userAgent: t
				};
				if ((i = t.indexOf("iPhone OS ")) >= 0) r.os = "iPhone", r._isIPhone = !0, r.version = e(t, i + "iPhone OS ".length);
				else if ((i = t.indexOf("iPad")) >= 0) {
					if ((i = t.indexOf("CPU OS")) < 0) return void a._$li(" err : " + t + " @UtHtml5.setup()");
					r.os = "iPad", r._isIPad = !0, r.version = e(t, i + "CPU OS ".length)
				} else (i = t.indexOf("Android")) >= 0 ? (r.os = "Android", r._isAndroid = !0, r.version = e(t, i + "Android ".length)) :
					(r.os = "-", r.version = -1)
			}, at.init();
			i = !1;
			e.UtSystem = A, e.UtDebug = a, e.LDTransform = gt, e.LDGL = ot, e.Live2D = at, e.Live2DModelWebGL = pt, e.Live2DModelJS =
				q, e.Live2DMotion = J, e.MotionQueueManager = ct, e.PhysicsHair = u, e.AMotion = s, e.PartsDataID = h, e.DrawDataID =
				b, e.BaseDataID = dt, e.ParamID = l
		}).call(e, i(83))
	},
	78: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.L2DBaseModel = e.L2DExpressionMotion = e.L2DExpressionParam = e.L2DEyeBlink = e.EYE_STATE = e.L2DMatrix44 =
		e.L2DModelMatrix = e.L2DMotionManager = e.L2DPhysics = e.L2DPartsParam = e.L2DPose = e.L2DViewMatrix = e.Live2DFramework =
		e.L2DTargetPoint = void 0;
		var r = i(77);

		function o() {
			this.live2DModel = null, this.modelMatrix = null, this.eyeBlink = null, this.physics = null, this.pose = null,
				this.debugMode = !1, this.initialized = !1, this.updating = !1, this.alpha = 1, this.accAlpha = 0, this.lipSync = !
				1, this.lipSyncValue = 0, this.accelX = 0, this.accelY = 0, this.accelZ = 0, this.dragX = 0, this.dragY = 0,
				this.startTimeMSec = null, this.mainMotionManager = new u, this.expressionManager = new u, this.motions = {},
				this.expressions = {}, this.isTexLoaded = !1
		}
		var n = 0;
		o.prototype.getModelMatrix = function () {
			return this.modelMatrix
		}, o.prototype.setAlpha = function (t) {
			t > .999 && (t = 1), t < .001 && (t = 0), this.alpha = t
		}, o.prototype.getAlpha = function () {
			return this.alpha
		}, o.prototype.isInitialized = function () {
			return this.initialized
		}, o.prototype.setInitialized = function (t) {
			this.initialized = t
		}, o.prototype.isUpdating = function () {
			return this.updating
		}, o.prototype.setUpdating = function (t) {
			this.updating = t
		}, o.prototype.getLive2DModel = function () {
			return this.live2DModel
		}, o.prototype.setLipSync = function (t) {
			this.lipSync = t
		}, o.prototype.setLipSyncValue = function (t) {
			this.lipSyncValue = t
		}, o.prototype.setAccel = function (t, e, i) {
			this.accelX = t, this.accelY = e, this.accelZ = i
		}, o.prototype.setDrag = function (t, e) {
			this.dragX = t, this.dragY = e
		}, o.prototype.getMainMotionManager = function () {
			return this.mainMotionManager
		}, o.prototype.getExpressionManager = function () {
			return this.expressionManager
		}, o.prototype.loadModelData = function (t, e) {
			var i = y.getPlatformManager();
			this.debugMode && i.log("Load model : " + t);
			var o = this;
			i.loadLive2DModel(t, function (t) {
				o.live2DModel = t, o.live2DModel.saveParam();
				0 == r.Live2D.getError() ? (o.modelMatrix = new $(o.live2DModel.getCanvasWidth(), o.live2DModel.getCanvasHeight()),
					o.modelMatrix.setWidth(2), o.modelMatrix.setCenterPosition(0, 0), e(o.live2DModel)) : console.error(
						"Error : Failed to loadModelData().")
			})
		}, o.prototype.loadTexture = function (t, e, i) {
			n++;
			var r = y.getPlatformManager();
			this.debugMode && r.log("Load Texture : " + e);
			var o = this;
			r.loadTexture(this.live2DModel, t, e, function () {
				0 == --n && (o.isTexLoaded = !0), "function" == typeof i && i()
			})
		}, o.prototype.loadMotion = function (t, e, i) {
			var o = y.getPlatformManager();
			this.debugMode && o.log("Load Motion : " + e);
			var n = null,
				s = this;
			o.loadBytes(e, function (e) {
				n = r.Live2DMotion.loadMotion(e), null != t && (s.motions[t] = n), i(n)
			})
		}, o.prototype.loadExpression = function (t, e, i) {
			var r = y.getPlatformManager();
			this.debugMode && r.log("Load Expression : " + e);
			var o = this;
			r.loadBytes(e, function (e) {
				null != t && (o.expressions[t] = s.loadJson(e)), "function" == typeof i && i()
			})
		}, o.prototype.loadPose = function (t, e) {
			var i = y.getPlatformManager();
			this.debugMode && i.log("Load Pose : " + t);
			var r = this;
			try {
				i.loadBytes(t, function (t) {
					r.pose = c.load(t), "function" == typeof e && e()
				})
			} catch (t) {
				console.warn(t)
			}
		}, o.prototype.loadPhysics = function (t) {
			var e = y.getPlatformManager();
			this.debugMode && e.log("Load Physics : " + t);
			var i = this;
			try {
				e.loadBytes(t, function (t) {
					i.physics = p.load(t)
				})
			} catch (t) {
				console.warn(t)
			}
		}, o.prototype.hitTestSimple = function (t, e, i) {
			if (null === this.live2DModel) return !1;
			var r = this.live2DModel.getDrawDataIndex(t);
			if (r < 0) return !1;
			for (var o = this.live2DModel.getTransformedPoints(r), n = this.live2DModel.getCanvasWidth(), s = 0, a = this.live2DModel
				.getCanvasHeight(), _ = 0, h = 0; h < o.length; h += 2) {
				var l = o[h],
					$ = o[h + 1];
				l < n && (n = l), l > s && (s = l), $ < a && (a = $), $ > _ && (_ = $)
			}
			var u = this.modelMatrix.invertTransformX(e),
				p = this.modelMatrix.invertTransformY(i);
			return n <= u && u <= s && a <= p && p <= _
		};

		function s() {
			r.AMotion.prototype.constructor.call(this), this.paramList = new Array
		}
		s.prototype = new r.AMotion, s.EXPRESSION_DEFAULT = "DEFAULT", s.TYPE_SET = 0, s.TYPE_ADD = 1, s.TYPE_MULT = 2, s.loadJson =
			function (t) {
				var e = new s,
					i = y.getPlatformManager().jsonParseFromBytes(t);
				if (e.setFadeIn(parseInt(i.fade_in) > 0 ? parseInt(i.fade_in) : 1e3), e.setFadeOut(parseInt(i.fade_out) > 0 ?
					parseInt(i.fade_out) : 1e3), null == i.params) return e;
				var r = i.params,
					o = r.length;
				e.paramList = [];
				for (var n = 0; n < o; n++) {
					var _ = r[n],
						h = _.id.toString(),
						l = parseFloat(_.val),
						$ = s.TYPE_ADD,
						u = null != _.calc ? _.calc.toString() : "add";
					if (($ = "add" === u ? s.TYPE_ADD : "mult" === u ? s.TYPE_MULT : "set" === u ? s.TYPE_SET : s.TYPE_ADD) == s.TYPE_ADD) {
						l -= p = null == _.def ? 0 : parseFloat(_.def)
					} else if ($ == s.TYPE_MULT) {
						var p;
						0 == (p = null == _.def ? 1 : parseFloat(_.def)) && (p = 1), l /= p
					}
					var c = new a;
					c.id = h, c.type = $, c.value = l, e.paramList.push(c)
				}
				return e
			}, s.prototype.updateParamExe = function (t, e, i, r) {
				for (var o = this.paramList.length - 1; o >= 0; --o) {
					var n = this.paramList[o];
					n.type == s.TYPE_ADD ? t.addToParamFloat(n.id, n.value, i) : n.type == s.TYPE_MULT ? t.multParamFloat(n.id, n.value,
						i) : n.type == s.TYPE_SET && t.setParamFloat(n.id, n.value, i)
				}
			};

		function a() {
			this.id = "", this.type = -1, this.value = null
		}

		function _() {
			this.nextBlinkTime = null, this.stateStartTime = null, this.blinkIntervalMsec = null, this.eyeState = h.STATE_FIRST,
				this.blinkIntervalMsec = 4e3, this.closingMotionMsec = 100, this.closedMotionMsec = 50, this.openingMotionMsec =
				150, this.closeIfZero = !0, this.eyeID_L = "PARAM_EYE_L_OPEN", this.eyeID_R = "PARAM_EYE_R_OPEN"
		}
		_.prototype.calcNextBlink = function () {
			return r.UtSystem.getUserTimeMSec() + Math.random() * (2 * this.blinkIntervalMsec - 1)
		}, _.prototype.setInterval = function (t) {
			this.blinkIntervalMsec = t
		}, _.prototype.setEyeMotion = function (t, e, i) {
			this.closingMotionMsec = t, this.closedMotionMsec = e, this.openingMotionMsec = i
		}, _.prototype.updateParam = function (t) {
			var e, i = r.UtSystem.getUserTimeMSec(),
				o = 0;
			switch (this.eyeState) {
				case h.STATE_CLOSING:
					(o = (i - this.stateStartTime) / this.closingMotionMsec) >= 1 && (o = 1, this.eyeState = h.STATE_CLOSED, this.stateStartTime =
						i), e = 1 - o;
					break;
				case h.STATE_CLOSED:
					(o = (i - this.stateStartTime) / this.closedMotionMsec) >= 1 && (this.eyeState = h.STATE_OPENING, this.stateStartTime =
						i), e = 0;
					break;
				case h.STATE_OPENING:
					(o = (i - this.stateStartTime) / this.openingMotionMsec) >= 1 && (o = 1, this.eyeState = h.STATE_INTERVAL,
						this.nextBlinkTime = this.calcNextBlink()), e = o;
					break;
				case h.STATE_INTERVAL:
					this.nextBlinkTime < i && (this.eyeState = h.STATE_CLOSING, this.stateStartTime = i), e = 1;
					break;
				case h.STATE_FIRST:
				default:
					this.eyeState = h.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink(), e = 1
			}
			this.closeIfZero || (e = -e), t.setParamFloat(this.eyeID_L, e), t.setParamFloat(this.eyeID_R, e)
		};
		var h = function () { };
		h.STATE_FIRST = "STATE_FIRST", h.STATE_INTERVAL = "STATE_INTERVAL", h.STATE_CLOSING = "STATE_CLOSING", h.STATE_CLOSED =
			"STATE_CLOSED", h.STATE_OPENING = "STATE_OPENING";

		function l() {
			this.tr = new Float32Array(16), this.identity()
		}
		l.mul = function (t, e, i) {
			var r, o, n, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for (r = 0; r < 4; r++)
				for (o = 0; o < 4; o++)
					for (n = 0; n < 4; n++) s[r + 4 * o] += t[r + 4 * n] * e[n + 4 * o];
			for (r = 0; r < 16; r++) i[r] = s[r]
		}, l.prototype.identity = function () {
			for (var t = 0; t < 16; t++) this.tr[t] = t % 5 == 0 ? 1 : 0
		}, l.prototype.getArray = function () {
			return this.tr
		}, l.prototype.getCopyMatrix = function () {
			return new Float32Array(this.tr)
		}, l.prototype.setMatrix = function (t) {
			if (null != this.tr && this.tr.length == this.tr.length)
				for (var e = 0; e < 16; e++) this.tr[e] = t[e]
		}, l.prototype.getScaleX = function () {
			return this.tr[0]
		}, l.prototype.getScaleY = function () {
			return this.tr[5]
		}, l.prototype.transformX = function (t) {
			return this.tr[0] * t + this.tr[12]
		}, l.prototype.transformY = function (t) {
			return this.tr[5] * t + this.tr[13]
		}, l.prototype.invertTransformX = function (t) {
			return (t - this.tr[12]) / this.tr[0]
		}, l.prototype.invertTransformY = function (t) {
			return (t - this.tr[13]) / this.tr[5]
		}, l.prototype.multTranslate = function (t, e) {
			var i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1];
			l.mul(i, this.tr, this.tr)
		}, l.prototype.translate = function (t, e) {
			this.tr[12] = t, this.tr[13] = e
		}, l.prototype.translateX = function (t) {
			this.tr[12] = t
		}, l.prototype.translateY = function (t) {
			this.tr[13] = t
		}, l.prototype.multScale = function (t, e) {
			var i = [t, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
			l.mul(i, this.tr, this.tr)
		}, l.prototype.scale = function (t, e) {
			this.tr[0] = t, this.tr[5] = e
		};

		function $(t, e) {
			l.prototype.constructor.call(this), this.width = t, this.height = e
		}
		$.prototype = new l, $.prototype.setPosition = function (t, e) {
			this.translate(t, e)
		}, $.prototype.setCenterPosition = function (t, e) {
			var i = this.width * this.getScaleX(),
				r = this.height * this.getScaleY();
			this.translate(t - i / 2, e - r / 2)
		}, $.prototype.top = function (t) {
			this.setY(t)
		}, $.prototype.bottom = function (t) {
			var e = this.height * this.getScaleY();
			this.translateY(t - e)
		}, $.prototype.left = function (t) {
			this.setX(t)
		}, $.prototype.right = function (t) {
			var e = this.width * this.getScaleX();
			this.translateX(t - e)
		}, $.prototype.centerX = function (t) {
			var e = this.width * this.getScaleX();
			this.translateX(t - e / 2)
		}, $.prototype.centerY = function (t) {
			var e = this.height * this.getScaleY();
			this.translateY(t - e / 2)
		}, $.prototype.setX = function (t) {
			this.translateX(t)
		}, $.prototype.setY = function (t) {
			this.translateY(t)
		}, $.prototype.setHeight = function (t) {
			var e = t / this.height,
				i = -e;
			this.scale(e, i)
		}, $.prototype.setWidth = function (t) {
			var e = t / this.width,
				i = -e;
			this.scale(e, i)
		};

		function u() {
			r.MotionQueueManager.prototype.constructor.call(this), this.currentPriority = null, this.reservePriority = null,
				this.super = r.MotionQueueManager.prototype
		}
		u.prototype = new r.MotionQueueManager, u.prototype.getCurrentPriority = function () {
			return this.currentPriority
		}, u.prototype.getReservePriority = function () {
			return this.reservePriority
		}, u.prototype.reserveMotion = function (t) {
			return !(this.reservePriority >= t) && (!(this.currentPriority >= t) && (this.reservePriority = t, !0))
		}, u.prototype.setReservePriority = function (t) {
			this.reservePriority = t
		}, u.prototype.updateParam = function (t) {
			var e = r.MotionQueueManager.prototype.updateParam.call(this, t);
			return this.isFinished() && (this.currentPriority = 0), e
		}, u.prototype.startMotionPrio = function (t, e) {
			return e == this.reservePriority && (this.reservePriority = 0), this.currentPriority = e, this.startMotion(t, !1)
		};

		function p() {
			this.physicsList = new Array, this.startTimeMSec = r.UtSystem.getUserTimeMSec()
		}
		p.load = function (t) {
			for (var e = new p, i = y.getPlatformManager().jsonParseFromBytes(t).physics_hair, o = i.length, n = 0; n < o; n++) {
				var s = i[n],
					a = new r.PhysicsHair,
					_ = s.setup,
					h = parseFloat(_.length),
					l = parseFloat(_.regist),
					$ = parseFloat(_.mass);
				a.setup(h, l, $);
				for (var u = s.src, c = u.length, f = 0; f < c; f++) {
					var g = u[f],
						d = g.id,
						m = r.PhysicsHair.Src.SRC_TO_X;
					"x" === (L = g.ptype) ? m = r.PhysicsHair.Src.SRC_TO_X : "y" === L ? m = r.PhysicsHair.Src.SRC_TO_Y : "angle" ===
						L ? m = r.PhysicsHair.Src.SRC_TO_G_ANGLE : r.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
					var T = parseFloat(g.scale),
						P = parseFloat(g.weight);
					a.addSrcParam(m, d, T, P)
				}
				var S = s.targets,
					v = S.length;
				for (f = 0; f < v; f++) {
					var L, M = S[f];
					d = M.id, m = r.PhysicsHair.Target.TARGET_FROM_ANGLE;
					"angle" === (L = M.ptype) ? m = r.PhysicsHair.Target.TARGET_FROM_ANGLE : "angle_v" === L ? m = r.PhysicsHair.Target
						.TARGET_FROM_ANGLE_V : r.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
					T = parseFloat(M.scale), P = parseFloat(M.weight);
					a.addTargetParam(m, d, T, P)
				}
				e.physicsList.push(a)
			}
			return e
		}, p.prototype.updateParam = function (t) {
			for (var e = r.UtSystem.getUserTimeMSec() - this.startTimeMSec, i = 0; i < this.physicsList.length; i++) this.physicsList[
				i].update(t, e)
		};

		function c() {
			this.lastTime = 0, this.lastModel = null, this.partsGroups = new Array
		}
		c.load = function (t) {
			for (var e = new c, i = y.getPlatformManager().jsonParseFromBytes(t).parts_visible, r = i.length, o = 0; o < r; o++) {
				for (var n = i[o].group, s = n.length, a = new Array, _ = 0; _ < s; _++) {
					var h = n[_],
						l = new f(h.id);
					if (a[_] = l, null != h.link) {
						var $ = h.link,
							u = $.length;
						l.link = new Array;
						for (var p = 0; p < u; p++) {
							var g = new f($[p]);
							l.link.push(g)
						}
					}
				}
				e.partsGroups.push(a)
			}
			return e
		}, c.prototype.updateParam = function (t) {
			if (null != t) {
				t != this.lastModel && this.initParam(t), this.lastModel = t;
				var e = r.UtSystem.getUserTimeMSec(),
					i = 0 == this.lastTime ? 0 : (e - this.lastTime) / 1e3;
				this.lastTime = e, i < 0 && (i = 0);
				for (var o = 0; o < this.partsGroups.length; o++) this.normalizePartsOpacityGroup(t, this.partsGroups[o], i),
					this.copyOpacityOtherParts(t, this.partsGroups[o])
			}
		}, c.prototype.initParam = function (t) {
			if (null != t)
				for (var e = 0; e < this.partsGroups.length; e++)
					for (var i = this.partsGroups[e], r = 0; r < i.length; r++) {
						i[r].initIndex(t);
						var o = i[r].partsIndex,
							n = i[r].paramIndex;
						if (!(o < 0)) {
							var s = 0 != t.getParamFloat(n);
							if (t.setPartsOpacity(o, s ? 1 : 0), t.setParamFloat(n, s ? 1 : 0), null != i[r].link)
								for (var a = 0; a < i[r].link.length; a++) i[r].link[a].initIndex(t)
						}
					}
		}, c.prototype.normalizePartsOpacityGroup = function (t, e, i) {
			for (var r = -1, o = 1, n = 0; n < e.length; n++) {
				var s = e[n].partsIndex,
					a = e[n].paramIndex;
				if (!(s < 0) && 0 != t.getParamFloat(a)) {
					if (r >= 0) break;
					r = n, o = t.getPartsOpacity(s), (o += i / .5) > 1 && (o = 1)
				}
			}
			r < 0 && (r = 0, o = 1);
			for (n = 0; n < e.length; n++) {
				if (!((s = e[n].partsIndex) < 0))
					if (r == n) t.setPartsOpacity(s, o);
					else {
						var _, h = t.getPartsOpacity(s);
						(1 - (_ = o < .5 ? -.5 * o / .5 + 1 : .5 * (1 - o) / .5)) * (1 - o) > .15 && (_ = 1 - .15 / (1 - o)), h > _ &&
							(h = _), t.setPartsOpacity(s, h)
					}
			}
		}, c.prototype.copyOpacityOtherParts = function (t, e) {
			for (var i = 0; i < e.length; i++) {
				var r = e[i];
				if (null != r.link && !(r.partsIndex < 0))
					for (var o = t.getPartsOpacity(r.partsIndex), n = 0; n < r.link.length; n++) {
						var s = r.link[n];
						s.partsIndex < 0 || t.setPartsOpacity(s.partsIndex, o)
					}
			}
		};

		function f(t) {
			this.paramIndex = -1, this.partsIndex = -1, this.link = null, this.id = t
		}
		f.prototype.initIndex = function (t) {
			this.paramIndex = t.getParamIndex("VISIBLE:" + this.id), this.partsIndex = t.getPartsDataIndex(r.PartsDataID.getID(
				this.id)), t.setParamFloat(this.paramIndex, 1)
		};

		function g() {
			this.EPSILON = .01, this.faceTargetX = 0, this.faceTargetY = 0, this.faceX = 0, this.faceY = 0, this.faceVX = 0,
				this.faceVY = 0, this.lastTimeSec = 0
		}
		g.FRAME_RATE = 60, g.prototype.setPoint = function (t, e) {
			this.faceTargetX = t, this.faceTargetY = e
		}, g.prototype.getX = function () {
			return this.faceX
		}, g.prototype.getY = function () {
			return this.faceY
		}, g.prototype.update = function () {
			var t = 40 / 7.5 / g.FRAME_RATE;
			if (0 != this.lastTimeSec) {
				var e = r.UtSystem.getUserTimeMSec(),
					i = (e - this.lastTimeSec) * g.FRAME_RATE / 1e3;
				this.lastTimeSec = e;
				var o = i * t / (.15 * g.FRAME_RATE),
					n = this.faceTargetX - this.faceX,
					s = this.faceTargetY - this.faceY;
				if (!(Math.abs(n) <= this.EPSILON && Math.abs(s) <= this.EPSILON)) {
					var a = Math.sqrt(n * n + s * s),
						_ = t * s / a,
						h = t * n / a - this.faceVX,
						l = _ - this.faceVY,
						$ = Math.sqrt(h * h + l * l);
					($ < -o || $ > o) && (h *= o / $, l *= o / $, $ = o), this.faceVX += h, this.faceVY += l;
					var u = .5 * (Math.sqrt(o * o + 16 * o * a - 8 * o * a) - o),
						p = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
					p > u && (this.faceVX *= u / p, this.faceVY *= u / p), this.faceX += this.faceVX, this.faceY += this.faceVY
				}
			} else this.lastTimeSec = r.UtSystem.getUserTimeMSec()
		};

		function d() {
			l.prototype.constructor.call(this), this.screenLeft = null, this.screenRight = null, this.screenTop = null, this.screenBottom =
				null, this.maxLeft = null, this.maxRight = null, this.maxTop = null, this.maxBottom = null
		}
		d.prototype = new l, d.prototype.adjustTranslate = function (t, e) {
			this.tr[0] * this.maxLeft + (this.tr[12] + t) > this.screenLeft && (t = this.screenLeft - this.tr[0] * this.maxLeft -
				this.tr[12]), this.tr[0] * this.maxRight + (this.tr[12] + t) < this.screenRight && (t = this.screenRight -
					this.tr[0] * this.maxRight - this.tr[12]), this.tr[5] * this.maxTop + (this.tr[13] + e) < this.screenTop && (e =
						this.screenTop - this.tr[5] * this.maxTop - this.tr[13]), this.tr[5] * this.maxBottom + (this.tr[13] + e) >
						this.screenBottom && (e = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13]);
			var i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1];
			l.mul(i, this.tr, this.tr)
		}, d.prototype.adjustScale = function (t, e, i) {
			this.tr[0];
			var r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1],
				o = [i, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
				n = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -e, 0, 1];
			l.mul(n, this.tr, this.tr), l.mul(o, this.tr, this.tr), l.mul(r, this.tr, this.tr)
		}, d.prototype.setScreenRect = function (t, e, i, r) {
			this.screenLeft = t, this.screenRight = e, this.screenTop = r, this.screenBottom = i
		}, d.prototype.setMaxScreenRect = function (t, e, i, r) {
			this.maxLeft = t, this.maxRight = e, this.maxTop = r, this.maxBottom = i
		}, d.prototype.getScreenLeft = function () {
			return this.screenLeft
		}, d.prototype.getScreenRight = function () {
			return this.screenRight
		}, d.prototype.getScreenBottom = function () {
			return this.screenBottom
		}, d.prototype.getScreenTop = function () {
			return this.screenTop
		}, d.prototype.getMaxLeft = function () {
			return this.maxLeft
		}, d.prototype.getMaxRight = function () {
			return this.maxRight
		}, d.prototype.getMaxBottom = function () {
			return this.maxBottom
		}, d.prototype.getMaxTop = function () {
			return this.maxTop
		};

		function y() { }
		y.platformManager = null, y.getPlatformManager = function () {
			return y.platformManager
		}, y.setPlatformManager = function (t) {
			y.platformManager = t
		}, e.L2DTargetPoint = g, e.Live2DFramework = y, e.L2DViewMatrix = d, e.L2DPose = c, e.L2DPartsParam = f, e.L2DPhysics =
			p, e.L2DMotionManager = u, e.L2DModelMatrix = $, e.L2DMatrix44 = l, e.EYE_STATE = h, e.L2DEyeBlink = _, e.L2DExpressionParam =
			a, e.L2DExpressionMotion = s, e.L2DBaseModel = o
	},
	79: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		e.cDefine = {
			VIEW_LOGICAL_LEFT: -1,
			VIEW_LOGICAL_RIGHT: 1,
			VIEW_LOGICAL_MAX_LEFT: -2,
			VIEW_LOGICAL_MAX_RIGHT: 2,
			VIEW_LOGICAL_MAX_BOTTOM: -2,
			VIEW_LOGICAL_MAX_TOP: 2,
			PRIORITY_NONE: 0,
			PRIORITY_IDLE: 1,
			PRIORITY_NORMAL: 2,
			PRIORITY_FORCE: 3,
			MOTION_GROUP_IDLE: "idle",
			MOTION_GROUP_TAP_BODY: "tap_body",
			MOTION_GROUP_FLICK_HEAD: "flick_head",
			MOTION_GROUP_PINCH_IN: "pinch_in",
			MOTION_GROUP_PINCH_OUT: "pinch_out",
			MOTION_GROUP_SHAKE: "shake",
			HIT_AREA_HEAD: "head",
			HIT_AREA_BODY: "body"
		}
	},
	80: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.currCanvas = e.currWebGL = e.createElement = void 0;
		var r = i(38),
			o = i(37),
			n = i(82),
			s = void 0,
			a = void 0;
		e.createElement = function () {
			var t = document.getElementById(r.config.name.div);
			null !== t && document.body.removeChild(t);
			var i = document.createElement("div");
			i.id = r.config.name.div, i.className = "live2d-widget-container", i.style.setProperty("position", "fixed"), i.style
				.setProperty(r.config.display.position, r.config.display.hOffset + "px"), i.style.setProperty("bottom", r.config
					.display.vOffset + "px"), i.style.setProperty("width", r.config.display.width + "px"), i.style.setProperty(
						"height", r.config.display.height + "px"), i.style.setProperty("z-index", 99999), i.style.setProperty(
							"opacity", r.config.react.opacity), i.style.setProperty("pointer-events", "none"), document.body.appendChild(i),
				o.L2Dwidget.emit("create-container", i), r.config.dialog.enable && (0, n.createDialogElement)(i);
			var _ = document.createElement("canvas");
			_.setAttribute("id", r.config.name.canvas), _.setAttribute("width", r.config.display.width * r.config.display.superSample),
				_.setAttribute("height", r.config.display.height * r.config.display.superSample), _.style.setProperty(
					"position", "absolute"), _.style.setProperty("left", "0px"), _.style.setProperty("top", "0px"), _.style.setProperty(
						"width", r.config.display.width + "px"), _.style.setProperty("height", r.config.display.height + "px"), r.config
							.dev.border && _.style.setProperty("border", "dashed 1px #CCC"), i.appendChild(_), e.currCanvas = a = document.getElementById(
								r.config.name.canvas), o.L2Dwidget.emit("create-canvas", _),
				function () {
					for (var t = ["webgl2", "webgl", "experimental-webgl2", "experimental-webgl", "webkit-3d", "moz-webgl"], i = 0; i <
						t.length; i++) try {
							var r = a.getContext(t[i], {
								alpha: !0,
								antialias: !0,
								premultipliedAlpha: !0,
								failIfMajorPerformanceCaveat: !1
							});
							r && (e.currWebGL = s = r)
						} catch (t) { }
					s || (console.error("Live2D widgets: Failed to create WebGL context."), window.WebGLRenderingContext ||
						console.error("Your browser may not support WebGL, check https://get.webgl.org/ for futher information."))
				}()
		}, e.currWebGL = s, e.currCanvas = a
	},
	81: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.MatrixStack = r;

		function r() { }
		r.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.depth = 0, r.currentMatrix = [1, 0, 0, 0, 0, 1,
			0, 0, 0, 0, 1, 0, 0, 0, 0, 1
		], r.tmp = new Array(16), r.reset = function () {
			this.depth = 0
		}, r.loadIdentity = function () {
			for (var t = 0; t < 16; t++) this.currentMatrix[t] = t % 5 == 0 ? 1 : 0
		}, r.push = function () {
			var t = 16 * (this.depth + 1);
			this.matrixStack.length < t + 16 && (this.matrixStack.length = t + 16);
			for (var e = 0; e < 16; e++) this.matrixStack[t + e] = this.currentMatrix[e];
			this.depth++
		}, r.pop = function () {
			this.depth--, this.depth < 0 && (myError("Invalid matrix stack."), this.depth = 0);
			for (var t = 16 * this.depth, e = 0; e < 16; e++) this.currentMatrix[e] = this.matrixStack[t + e]
		}, r.getMatrix = function () {
			return this.currentMatrix
		}, r.multMatrix = function (t) {
			var e, i, r;
			for (e = 0; e < 16; e++) this.tmp[e] = 0;
			for (e = 0; e < 4; e++)
				for (i = 0; i < 4; i++)
					for (r = 0; r < 4; r++) this.tmp[e + 4 * i] += this.currentMatrix[e + 4 * r] * t[r + 4 * i];
			for (e = 0; e < 16; e++) this.currentMatrix[e] = this.tmp[e]
		}
	},
	82: function (t, e, i) {
		"use strict";
		var r = i(38),
			o = i(37);
		document.head.innerHTML +=
			"\n<style>\n  .live2d-widget-dialog-container {\n    width: 300px;\n    height: 120px;\n    position: absolute;\n    bottom: 65%;\n    right: 0px;\n    transform-origin: right;\n    padding: 12px;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n  }\n  .live2d-widget-dialog {\n    width: 100%;\n    height: 100%;\n    color: #917159;\n    font-size: 16px;\n    padding: 12px;\n    border: 2px solid rgb(236, 203, 180);\n    background: rgb(252, 248, 244);\n    box-sizing: border-box;\n    border-radius: 10px;\n    transform: rotate(-2deg);\n    opacity: 0;\n    transition: 200ms opacity;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    animation: live2d-widget-dialog-tingle 4s ease-in-out 0s infinite alternate;\n  }\n  @keyframes live2d-widget-dialog-tingle {\n    0% { transform: translate(-1px, 1.5px) rotate(-2deg); }\n    100% { transform: translate(1px, -1.5px) rotate(2deg); }\n  }\n</style>\n";
		var n = void 0,
			s = void 0,
			a = void 0;

		function _() {
			s.style.opacity = 1
		}

		function h() {
			s.style.opacity = 0
		}

		function l(t) {
			_(), s.innerText = t, clearTimeout(a), a = setTimeout(function () {
				h()
			}, 5e3)
		}

		function $() {
			var t = new XMLHttpRequest;
			t.open("get", "https://v1.hitokoto.cn"), t.setRequestHeader("Cache-Control", "no-cache"), t.onreadystatechange =
				function () {
					if (4 === t.readyState) {
						l(JSON.parse(t.responseText).hitokoto), setTimeout($, 1e4)
					}
				}, t.send()
		}
		t.exports = {
			createDialogElement: function (t) {
				(n = document.createElement("div")).className = "live2d-widget-dialog-container", n.style.transform = "scale(" +
					r.config.display.width / 250 + ")", (s = document.createElement("div")).className = "live2d-widget-dialog", n
						.appendChild(s), t.appendChild(n), o.L2Dwidget.emit("create-dialog", n), r.config.dialog.hitokoto && $()
			},
			displayDialog: _,
			hiddenDialog: h,
			alertText: l,
			showHitokotoLoop: $
		}
	},
	83: function (t, e) {
		t.exports = {
			import: function () {
				throw new Error("System.import cannot be used indirectly")
			}
		}
	},
	84: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.cManager = void 0;
		var r = i(78),
			o = i(85),
			n = i(86),
			s = i(79);

		function a(t) {
			this.eventemitter = t, this.models = [], this.count = -1, this.reloadFlg = !1, r.Live2DFramework.setPlatformManager(
				new o.PlatformManager)
		}
		a.prototype.createModel = function () {
			var t = new n.cModel;
			return this.models.push(t), t
		}, a.prototype.changeModel = function (t, e) {
			this.reloadFlg && (this.reloadFlg = !1, this.releaseModel(0, t), this.createModel(), this.models[0].load(t, e))
		}, a.prototype.getModel = function (t) {
			return t >= this.models.length ? null : this.models[t]
		}, a.prototype.releaseModel = function (t, e) {
			this.models.length <= t || (this.models[t].release(e), delete this.models[t], this.models.splice(t, 1))
		}, a.prototype.numModels = function () {
			return this.models.length
		}, a.prototype.setDrag = function (t, e) {
			for (var i = 0; i < this.models.length; i++) this.models[i].setDrag(t, e)
		}, a.prototype.tapEvent = function (t, e) {
			s.cDefine.DEBUG_LOG && console.log("tapEvent view x:" + t + " y:" + e);
			for (var i = 0; i < this.models.length; i++) this.models[i].hitTest(s.cDefine.HIT_AREA_HEAD, t, e) ? (this.eventemitter
				.emit("tapface"), s.cDefine.DEBUG_LOG && console.log("Tap face."), this.models[i].setRandomExpression()) :
				this.models[i].hitTest(s.cDefine.HIT_AREA_BODY, t, e) && (this.eventemitter.emit("tapbody"), s.cDefine.DEBUG_LOG &&
					console.log("Tap body. models[" + i + "]"), this.models[i].startRandomMotion(s.cDefine.MOTION_GROUP_TAP_BODY,
						s.cDefine.PRIORITY_NORMAL));
			return !0
		}, e.cManager = a
	},
	85: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.PlatformManager = n;
		var r = i(80),
			o = i(77);

		function n() { }
		n.prototype.loadBytes = function (t, e) {
			var i = new XMLHttpRequest;
			i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function () {
				switch (i.status) {
					case 200:
						e(i.response);
						break;
					default:
						console.error("Failed to load (" + i.status + ") : " + t)
				}
			}, i.send(null)
		}, n.prototype.loadString = function (t) {
			this.loadBytes(t, function (t) {
				return t
			})
		}, n.prototype.loadLive2DModel = function (t, e) {
			var i = null;
			this.loadBytes(t, function (t) {
				i = o.Live2DModelWebGL.loadModel(t), e(i)
			})
		}, n.prototype.loadTexture = function (t, e, i, o) {
			var n = new Image;
			n.crossOrigin = "Anonymous", n.src = i, n.onload = onload, n.onerror = onerror, n.onload = function () {
				var i = r.currWebGL,
					s = i.createTexture();
				if (!s) return console.error("Failed to generate gl texture name."), -1;
				t.isPremultipliedAlpha() || i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,
					1), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, s), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA,
						i.UNSIGNED_BYTE, n), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D,
							i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_NEAREST), i.generateMipmap(i.TEXTURE_2D), t.setTexture(e, s), s = null,
					"function" == typeof o && o()
			}, n.onerror = function () {
				console.error("Failed to load image : " + i)
			}
		}, n.prototype.jsonParseFromBytes = function (t) {
			var e, i = new Uint8Array(t, 0, 3);
			e = 239 == i[0] && 187 == i[1] && 191 == i[2] ? String.fromCharCode.apply(null, new Uint8Array(t, 3)) : String.fromCharCode
				.apply(null, new Uint8Array(t));
			return JSON.parse(e)
		}, n.prototype.log = function (t) {
			console.log(t)
		}
	},
	86: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.cModel = _;
		var r = i(78),
			o = i(87),
			n = i(81),
			s = i(79),
			a = i(77);

		function _() {
			r.L2DBaseModel.prototype.constructor.call(this), this.modelHomeDir = "", this.modelSetting = null, this.tmpMatrix = []
		}
		_.prototype = new r.L2DBaseModel, _.prototype.load = function (t, e, i) {
			this.setUpdating(!0), this.setInitialized(!1), this.modelHomeDir = e.substring(0, e.lastIndexOf("/") + 1), this.modelSetting =
				new o.ModelSettingJson;
			var n = this;
			this.modelSetting.loadModelSetting(e, function () {
				var t = n.modelHomeDir + n.modelSetting.getModelFile();
				n.loadModelData(t, function (t) {
					for (var e = 0; e < n.modelSetting.getTextureNum(); e++) {
						if (/^https?:\/\/|^\/\//i.test(n.modelSetting.getTextureFile(e))) var o = n.modelSetting.getTextureFile(e);
						else o = n.modelHomeDir + n.modelSetting.getTextureFile(e);
						n.loadTexture(e, o, function () {
							if (n.isTexLoaded) {
								if (n.modelSetting.getExpressionNum() > 0) {
									n.expressions = {};
									for (var t = 0; t < n.modelSetting.getExpressionNum(); t++) {
										var e = n.modelSetting.getExpressionName(t),
											o = n.modelHomeDir + n.modelSetting.getExpressionFile(t);
										n.loadExpression(e, o)
									}
								} else n.expressionManager = null, n.expressions = {};
								if (null == n.eyeBlink && (n.eyeBlink = new r.L2DEyeBlink), null != n.modelSetting.getPhysicsFile() ?
									n.loadPhysics(n.modelHomeDir + n.modelSetting.getPhysicsFile()) : n.physics = null, null != n.modelSetting
										.getPoseFile() ? n.loadPose(n.modelHomeDir + n.modelSetting.getPoseFile(), function () {
											n.pose.updateParam(n.live2DModel)
										}) : n.pose = null, null != n.modelSetting.getLayout()) {
									var a = n.modelSetting.getLayout();
									null != a.width && n.modelMatrix.setWidth(a.width), null != a.height && n.modelMatrix.setHeight(a.height),
										null != a.x && n.modelMatrix.setX(a.x), null != a.y && n.modelMatrix.setY(a.y), null != a.center_x &&
										n.modelMatrix.centerX(a.center_x), null != a.center_y && n.modelMatrix.centerY(a.center_y), null !=
										a.top && n.modelMatrix.top(a.top), null != a.bottom && n.modelMatrix.bottom(a.bottom), null != a.left &&
										n.modelMatrix.left(a.left), null != a.right && n.modelMatrix.right(a.right)
								}
								for (t = 0; t < n.modelSetting.getInitParamNum(); t++) n.live2DModel.setParamFloat(n.modelSetting.getInitParamID(
									t), n.modelSetting.getInitParamValue(t));
								for (t = 0; t < n.modelSetting.getInitPartsVisibleNum(); t++) n.live2DModel.setPartsOpacity(n.modelSetting
									.getInitPartsVisibleID(t), n.modelSetting.getInitPartsVisibleValue(t));
								n.live2DModel.saveParam(), n.preloadMotionGroup(s.cDefine.MOTION_GROUP_IDLE), n.mainMotionManager.stopAllMotions(),
									n.setUpdating(!1), n.setInitialized(!0), "function" == typeof i && i()
							}
						})
					}
				})
			})
		}, _.prototype.release = function (t) {
			var e = r.Live2DFramework.getPlatformManager();
			t.deleteTexture(e.texture)
		}, _.prototype.preloadMotionGroup = function (t) {
			for (var e = this, i = 0; i < this.modelSetting.getMotionNum(t); i++) {
				var r = this.modelSetting.getMotionFile(t, i);
				this.loadMotion(r, this.modelHomeDir + r, function (r) {
					r.setFadeIn(e.modelSetting.getMotionFadeIn(t, i)), r.setFadeOut(e.modelSetting.getMotionFadeOut(t, i))
				})
			}
		}, _.prototype.update = function () {
			if (null != this.live2DModel) {
				var t = 2 * ((a.UtSystem.getUserTimeMSec() - this.startTimeMSec) / 1e3) * Math.PI;
				this.mainMotionManager.isFinished() && this.startRandomMotion(s.cDefine.MOTION_GROUP_IDLE, s.cDefine.PRIORITY_IDLE),
					this.live2DModel.loadParam();
				this.mainMotionManager.updateParam(this.live2DModel) || null != this.eyeBlink && this.eyeBlink.updateParam(this
					.live2DModel), this.live2DModel.saveParam(), null == this.expressionManager || null == this.expressions ||
					this.expressionManager.isFinished() || this.expressionManager.updateParam(this.live2DModel), this.live2DModel.addToParamFloat(
						"PARAM_ANGLE_X", 30 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", 30 * this.dragY, 1),
					this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1), this.live2DModel.addToParamFloat(
						"PARAM_BODY_ANGLE_X", 10 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1),
					this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1), this.live2DModel.addToParamFloat(
						"PARAM_ANGLE_X", Number(15 * Math.sin(t / 6.5345)), .5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y",
							Number(8 * Math.sin(t / 3.5345)), .5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", Number(10 * Math.sin(
								t / 5.5345)), .5), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", Number(4 * Math.sin(t / 15.5345)),
									.5), this.live2DModel.setParamFloat("PARAM_BREATH", Number(.5 + .5 * Math.sin(t / 3.2345)), 1), null != this.physics &&
					this.physics.updateParam(this.live2DModel), null == this.lipSync && this.live2DModel.setParamFloat(
						"PARAM_MOUTH_OPEN_Y", this.lipSyncValue), null != this.pose && this.pose.updateParam(this.live2DModel), this.live2DModel
							.update()
			} else s.cDefine.DEBUG_LOG && console.error("Failed to update.")
		}, _.prototype.setRandomExpression = function () {
			var t = [];
			for (var e in this.expressions) t.push(e);
			var i = parseInt(Math.random() * t.length);
			this.setExpression(t[i])
		}, _.prototype.startRandomMotion = function (t, e) {
			var i = this.modelSetting.getMotionNum(t),
				r = parseInt(Math.random() * i);
			this.startMotion(t, r, e)
		}, _.prototype.startMotion = function (t, e, i) {
			var r = this.modelSetting.getMotionFile(t, e);
			if (null != r && "" != r) {
				if (i == s.cDefine.PRIORITY_FORCE) this.mainMotionManager.setReservePriority(i);
				else if (!this.mainMotionManager.reserveMotion(i)) return void (s.cDefine.DEBUG_LOG && console.log(
					"Motion is running."));
				var o, n = this;
				null == this.motions[t] ? this.loadMotion(t, this.modelHomeDir + r, function (r) {
					o = r, n.setFadeInFadeOut(t, e, i, o)
				}) : (o = this.motions[t], n.setFadeInFadeOut(t, e, i, o))
			} else s.cDefine.DEBUG_LOG && console.error("Failed to motion.")
		}, _.prototype.setFadeInFadeOut = function (t, e, i, r) {
			var o = this.modelSetting.getMotionFile(t, e);
			if (r.setFadeIn(this.modelSetting.getMotionFadeIn(t, e)), r.setFadeOut(this.modelSetting.getMotionFadeOut(t, e)),
				s.cDefine.DEBUG_LOG && console.log("Start motion : " + o), null == this.modelSetting.getMotionSound(t, e)) this
					.mainMotionManager.startMotionPrio(r, i);
			else {
				var n = this.modelSetting.getMotionSound(t, e),
					a = document.createElement("audio");
				a.src = this.modelHomeDir + n, s.cDefine.DEBUG_LOG && console.log("Start sound : " + n), a.play(), this.mainMotionManager
					.startMotionPrio(r, i)
			}
		}, _.prototype.setExpression = function (t) {
			var e = this.expressions[t];
			s.cDefine.DEBUG_LOG && console.log("Expression : " + t), this.expressionManager.startMotion(e, !1)
		}, _.prototype.draw = function (t) {
			n.MatrixStack.push(), n.MatrixStack.multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = n.MatrixStack.getMatrix(),
				this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), n.MatrixStack.pop()
		}, _.prototype.hitTest = function (t, e, i) {
			for (var r = this.modelSetting.getHitAreaNum(), o = 0; o < r; o++)
				if (t == this.modelSetting.getHitAreaName(o)) {
					var n = this.modelSetting.getHitAreaID(o);
					return this.hitTestSimple(n, e, i)
				} return !1
		}
	},
	87: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.ModelSettingJson = o;
		var r = i(78);

		function o() {
			this.NAME = "name", this.ID = "id", this.MODEL = "model", this.TEXTURES = "textures", this.HIT_AREAS =
				"hit_areas", this.PHYSICS = "physics", this.POSE = "pose", this.EXPRESSIONS = "expressions", this.MOTION_GROUPS =
				"motions", this.SOUND = "sound", this.FADE_IN = "fade_in", this.FADE_OUT = "fade_out", this.LAYOUT = "layout",
				this.INIT_PARAM = "init_param", this.INIT_PARTS_VISIBLE = "init_parts_visible", this.VALUE = "val", this.FILE =
				"file", this.json = {}
		}
		o.prototype.loadModelSetting = function (t, e) {
			var i = this;
			r.Live2DFramework.getPlatformManager().loadBytes(t, function (t) {
				var r = String.fromCharCode.apply(null, new Uint8Array(t));
				i.json = JSON.parse(r), e()
			})
		}, o.prototype.getTextureFile = function (t) {
			return null == this.json[this.TEXTURES] || null == this.json[this.TEXTURES][t] ? null : this.json[this.TEXTURES]
			[t]
		}, o.prototype.getModelFile = function () {
			return this.json[this.MODEL]
		}, o.prototype.getTextureNum = function () {
			return null == this.json[this.TEXTURES] ? 0 : this.json[this.TEXTURES].length
		}, o.prototype.getHitAreaNum = function () {
			return null == this.json[this.HIT_AREAS] ? 0 : this.json[this.HIT_AREAS].length
		}, o.prototype.getHitAreaID = function (t) {
			return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null : this.json[this.HIT_AREAS]
			[t][this.ID]
		}, o.prototype.getHitAreaName = function (t) {
			return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null : this.json[this.HIT_AREAS]
			[t][this.NAME]
		}, o.prototype.getPhysicsFile = function () {
			return this.json[this.PHYSICS]
		}, o.prototype.getPoseFile = function () {
			return this.json[this.POSE]
		}, o.prototype.getExpressionNum = function () {
			return null == this.json[this.EXPRESSIONS] ? 0 : this.json[this.EXPRESSIONS].length
		}, o.prototype.getExpressionFile = function (t) {
			return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.FILE]
		}, o.prototype.getExpressionName = function (t) {
			return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.NAME]
		}, o.prototype.getLayout = function () {
			return this.json[this.LAYOUT]
		}, o.prototype.getInitParamNum = function () {
			return null == this.json[this.INIT_PARAM] ? 0 : this.json[this.INIT_PARAM].length
		}, o.prototype.getMotionNum = function (t) {
			return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] ? 0 : this.json[this.MOTION_GROUPS]
			[t].length
		}, o.prototype.getMotionFile = function (t, e) {
			return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[
				this.MOTION_GROUPS][t][e] ? null : this.json[this.MOTION_GROUPS][t][e][this.FILE]
		}, o.prototype.getMotionSound = function (t, e) {
			return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[
				this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.SOUND] ? null : this.json[this.MOTION_GROUPS]
				[t][e][this.SOUND]
		}, o.prototype.getMotionFadeIn = function (t, e) {
			return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[
				this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.FADE_IN] ? 1e3 : this.json[this.MOTION_GROUPS]
				[t][e][this.FADE_IN]
		}, o.prototype.getMotionFadeOut = function (t, e) {
			return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[
				this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT] ? 1e3 : this.json[this
					.MOTION_GROUPS][t][e][this.FADE_OUT]
		}, o.prototype.getInitParamID = function (t) {
			return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? null : this.json[this.INIT_PARAM]
			[t][this.ID]
		}, o.prototype.getInitParamValue = function (t) {
			return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? NaN : this.json[this.INIT_PARAM]
			[t][this.VALUE]
		}, o.prototype.getInitPartsVisibleNum = function () {
			return null == this.json[this.INIT_PARTS_VISIBLE] ? 0 : this.json[this.INIT_PARTS_VISIBLE].length
		}, o.prototype.getInitPartsVisibleID = function (t) {
			return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? null : this
				.json[this.INIT_PARTS_VISIBLE][t][this.ID]
		}, o.prototype.getInitPartsVisibleValue = function (t) {
			return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? NaN : this.json[
				this.INIT_PARTS_VISIBLE][t][this.VALUE]
		}
	}
});
//# sourceMappingURL=L2Dwidget.0.min.js.map
