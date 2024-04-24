﻿// Ion.RangeSlider | version 2.2.0 | https://github.com/IonDen/ion.rangeSlider
;
(function (f) {
	"function" === typeof define && define.amd ? define(["jquery"], function (n) {
		return f(n, document, window, navigator)
	}) : "object" === typeof exports ? f(require("jquery"), document, window, navigator) : f(jQuery, document, window,
		navigator)
})(function (f, n, k, r, p) {
	var t = 0,
		m = function () {
			var a = r.userAgent,
				b = /msie\s\d+/i;
			return 0 < a.search(b) && (a = b.exec(a).toString(), a = a.split(" ")[1], 9 > a) ? (f("html").addClass("lt-ie9"), !
				0) : !1
		}();
	Function.prototype.bind || (Function.prototype.bind = function (a) {
		var b = this,
			d = [].slice;
		if ("function" !=
			typeof b) throw new TypeError;
		var c = d.call(arguments, 1),
			e = function () {
				if (this instanceof e) {
					var g = function () { };
					g.prototype = b.prototype;
					var g = new g,
						l = b.apply(g, c.concat(d.call(arguments)));
					return Object(l) === l ? l : g
				}
				return b.apply(a, c.concat(d.call(arguments)))
			};
		return e
	});
	Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
		if (null == this) throw new TypeError('"this" is null or not defined');
		var d = Object(this),
			c = d.length >>> 0;
		if (0 === c) return -1;
		var e = +b || 0;
		Infinity === Math.abs(e) && (e = 0);
		if (e >= c) return -1;
		for (e = Math.max(0 <= e ? e : c - Math.abs(e), 0); e < c;) {
			if (e in d && d[e] === a) return e;
			e++
		}
		return -1
	});
	var q = function (a, b, d) {
		this.VERSION = "2.2.0";
		this.input = a;
		this.plugin_count = d;
		this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0;
		this.raf_id = this.old_min_interval = null;
		this.no_diapason = this.force_redraw = this.dragging = !1;
		this.has_tab_index = !0;
		this.is_update = this.is_key = !1;
		this.is_start = !0;
		this.is_click = this.is_resize = this.is_active = this.is_finish = !1;
		b = b || {};
		this.$cache = {
			win: f(k),
			body: f(n.body),
			input: f(a),
			cont: null,
			rs: null,
			min: null,
			max: null,
			from: null,
			to: null,
			single: null,
			bar: null,
			line: null,
			s_single: null,
			s_from: null,
			s_to: null,
			shad_single: null,
			shad_from: null,
			shad_to: null,
			edge: null,
			grid: null,
			grid_labels: []
		};
		this.coords = {
			x_gap: 0,
			x_pointer: 0,
			w_rs: 0,
			w_rs_old: 0,
			w_handle: 0,
			p_gap: 0,
			p_gap_left: 0,
			p_gap_right: 0,
			p_step: 0,
			p_pointer: 0,
			p_handle: 0,
			p_single_fake: 0,
			p_single_real: 0,
			p_from_fake: 0,
			p_from_real: 0,
			p_to_fake: 0,
			p_to_real: 0,
			p_bar_x: 0,
			p_bar_w: 0,
			grid_gap: 0,
			big_num: 0,
			big: [],
			big_w: [],
			big_p: [],
			big_x: []
		};
		this.labels = {
			w_min: 0,
			w_max: 0,
			w_from: 0,
			w_to: 0,
			w_single: 0,
			p_min: 0,
			p_max: 0,
			p_from_fake: 0,
			p_from_left: 0,
			p_to_fake: 0,
			p_to_left: 0,
			p_single_fake: 0,
			p_single_left: 0
		};
		var c = this.$cache.input;
		a = c.prop("value");
		var e;
		d = {
			type: "single",
			min: 10,
			max: 100,
			from: null,
			to: null,
			step: 1,
			min_interval: 0,
			max_interval: 0,
			drag_interval: !1,
			values: [],
			p_values: [],
			from_fixed: !1,
			from_min: null,
			from_max: null,
			from_shadow: !1,
			to_fixed: !1,
			to_min: null,
			to_max: null,
			to_shadow: !1,
			prettify_enabled: !0,
			prettify_separator: " ",
			prettify: null,
			force_edges: !1,
			keyboard: !0,
			grid: !1,
			grid_margin: !0,
			grid_num: 4,
			grid_snap: !1,
			hide_min_max: !1,
			hide_from_to: !1,
			prefix: "",
			postfix: "",
			max_postfix: "",
			decorate_both: !0,
			values_separator: " \u2014 ",
			input_values_separator: ";",
			disable: !1,
			block: !1,
			extra_classes: "",
			scope: null,
			onStart: null,
			onChange: null,
			onFinish: null,
			onUpdate: null
		};
		"INPUT" !== c[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", c[0]);
		c = {
			type: c.data("type"),
			min: c.data("min"),
			max: c.data("max"),
			from: c.data("from"),
			to: c.data("to"),
			step: c.data("step"),
			min_interval: c.data("minInterval"),
			max_interval: c.data("maxInterval"),
			drag_interval: c.data("dragInterval"),
			values: c.data("values"),
			from_fixed: c.data("fromFixed"),
			from_min: c.data("fromMin"),
			from_max: c.data("fromMax"),
			from_shadow: c.data("fromShadow"),
			to_fixed: c.data("toFixed"),
			to_min: c.data("toMin"),
			to_max: c.data("toMax"),
			to_shadow: c.data("toShadow"),
			prettify_enabled: c.data("prettifyEnabled"),
			prettify_separator: c.data("prettifySeparator"),
			force_edges: c.data("forceEdges"),
			keyboard: c.data("keyboard"),
			grid: c.data("grid"),
			grid_margin: c.data("gridMargin"),
			grid_num: c.data("gridNum"),
			grid_snap: c.data("gridSnap"),
			hide_min_max: c.data("hideMinMax"),
			hide_from_to: c.data("hideFromTo"),
			prefix: c.data("prefix"),
			postfix: c.data("postfix"),
			max_postfix: c.data("maxPostfix"),
			decorate_both: c.data("decorateBoth"),
			values_separator: c.data("valuesSeparator"),
			input_values_separator: c.data("inputValuesSeparator"),
			disable: c.data("disable"),
			block: c.data("block"),
			extra_classes: c.data("extraClasses")
		};
		c.values = c.values && c.values.split(",");
		for (e in c) c.hasOwnProperty(e) && (c[e] !== p && "" !== c[e] || delete c[e]);
		a !== p && "" !== a && (a = a.split(c.input_values_separator || b.input_values_separator || ";"), a[0] && a[0] == +
			a[0] && (a[0] = +a[0]), a[1] && a[1] == +a[1] && (a[1] = +a[1]), b && b.values && b.values.length ? (d.from = a[0] &&
				b.values.indexOf(a[0]), d.to = a[1] && b.values.indexOf(a[1])) : (d.from = a[0] && +a[0], d.to = a[1] && +a[1]));
		f.extend(d, b);
		f.extend(d, c);
		this.options = d;
		this.update_check = {};
		this.validate();
		this.result = {
			input: this.$cache.input,
			slider: null,
			min: this.options.min,
			max: this.options.max,
			from: this.options.from,
			from_percent: 0,
			from_value: null,
			to: this.options.to,
			to_percent: 0,
			to_value: null
		};
		this.init()
	};
	q.prototype = {
		init: function (a) {
			this.no_diapason = !1;
			this.coords.p_step = this.convertToPercent(this.options.step, !0);
			this.target = "base";
			this.toggleInput();
			this.append();
			this.setMinMax();
			a ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart());
			this.updateScene()
		},
		append: function () {
			this.$cache.input.before('<span class="irs js-irs-' +
				this.plugin_count + " " + this.options.extra_classes + '"></span>');
			this.$cache.input.prop("readonly", !0);
			this.$cache.cont = this.$cache.input.prev();
			this.result.slider = this.$cache.cont;
			this.$cache.cont.html(
				'<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'
			);
			this.$cache.rs = this.$cache.cont.find(".irs");
			this.$cache.min = this.$cache.cont.find(".irs-min");
			this.$cache.max = this.$cache.cont.find(".irs-max");
			this.$cache.from = this.$cache.cont.find(".irs-from");
			this.$cache.to = this.$cache.cont.find(".irs-to");
			this.$cache.single = this.$cache.cont.find(".irs-single");
			this.$cache.bar = this.$cache.cont.find(".irs-bar");
			this.$cache.line = this.$cache.cont.find(".irs-line");
			this.$cache.grid = this.$cache.cont.find(".irs-grid");
			"single" === this.options.type ? (this.$cache.cont.append(
				'<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'
			),
				this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(
					".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden",
				this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append(
					'<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'
				), this.$cache.s_from = this.$cache.cont.find(".from"),
					this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"),
					this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler());
			this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display =
				"none", this.$cache.single[0].style.display = "none");
			this.appendGrid();
			this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !
				1, this.removeDisableMask(), this.bindEvents());
			this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask());
			this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
		},
		setTopHandler: function () {
			var a = this.options.max,
				b = this.options.to;
			this.options.from > this.options.min && b === a ? this.$cache.s_from.addClass("type_last") : b < a && this.$cache
				.s_to.addClass("type_last")
		},
		changeLevel: function (a) {
			switch (a) {
				case "single":
					this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
					this.$cache.s_single.addClass("state_hover");
					break;
				case "from":
					this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
					this.$cache.s_from.addClass("state_hover");
					this.$cache.s_from.addClass("type_last");
					this.$cache.s_to.removeClass("type_last");
					break;
				case "to":
					this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
					this.$cache.s_to.addClass("state_hover");
					this.$cache.s_to.addClass("type_last");
					this.$cache.s_from.removeClass("type_last");
					break;
				case "both":
					this.coords.p_gap_left = this.toFixed(this.coords.p_pointer -
						this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer),
						this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
			}
		},
		appendDisableMask: function () {
			this.$cache.cont.append('<span class="irs-disable-mask"></span>');
			this.$cache.cont.addClass("irs-disabled")
		},
		removeDisableMask: function () {
			this.$cache.cont.remove(".irs-disable-mask");
			this.$cache.cont.removeClass("irs-disabled")
		},
		remove: function () {
			this.$cache.cont.remove();
			this.$cache.cont =
				null;
			this.$cache.line.off("keydown.irs_" + this.plugin_count);
			this.$cache.body.off("touchmove.irs_" + this.plugin_count);
			this.$cache.body.off("mousemove.irs_" + this.plugin_count);
			this.$cache.win.off("touchend.irs_" + this.plugin_count);
			this.$cache.win.off("mouseup.irs_" + this.plugin_count);
			m && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count));
			this.$cache.grid_labels = [];
			this.coords.big = [];
			this.coords.big_w = [];
			this.coords.big_p = [];
			this.coords.big_x = [];
			cancelAnimationFrame(this.raf_id)
		},
		bindEvents: function () {
			if (!this.no_diapason) {
				this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
				this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));
				this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
				this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
				this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
				this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
				this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this));
				this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count,
					this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown
						.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this,
							"click")),
							this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")));
				"single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(
					this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this,
						"single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this,
							"click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this,
								"single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this,
									"single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
					this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (
						this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single
							.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on(
								"touchstart.irs_" +
								this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count,
									this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown
										.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this,
											"to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
						this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this,
							"click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
						this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to
							.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on(
								"mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on(
									"mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on(
										"mousedown.irs_" +
										this.plugin_count, this.pointerClick.bind(this, "click")));
				if (this.options.keyboard) this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this,
					"keyboard"));
				m && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on(
					"mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)))
			}
		},
		pointerFocus: function (a) {
			if (!this.target) {
				var b = "single" === this.options.type ? this.$cache.single : this.$cache.from;
				a = b.offset().left;
				a += b.width() / 2 - 1;
				this.pointerClick("single", {
					preventDefault: function () { },
					pageX: a
				})
			}
		},
		pointerMove: function (a) {
			this.dragging && (this.coords.x_pointer = (a.pageX || a.originalEvent.touches && a.originalEvent.touches[0].pageX) -
				this.coords.x_gap, this.calc())
		},
		pointerUp: function (a) {
			this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(
				".state_hover").removeClass("state_hover"), this.force_redraw = !0, m && f("*").prop("unselectable", !1), this
					.updateScene(), this.restoreOriginalMinInterval(), (f.contains(this.$cache.cont[0],
						a.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
		},
		pointerDown: function (a, b) {
			b.preventDefault();
			var d = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;
			2 !== b.button && ("both" === a && this.setTempMinInterval(), a || (a = this.target || "from"), this.current_plugin =
				this.plugin_count, this.target = a, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset()
					.left, this.coords.x_pointer = d - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(a), m && f(
						"*").prop("unselectable",
							!0), this.$cache.line.trigger("focus"), this.updateScene())
		},
		pointerClick: function (a, b) {
			b.preventDefault();
			var d = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;
			2 !== b.button && (this.current_plugin = this.plugin_count, this.target = a, this.is_click = !0, this.coords.x_gap =
				this.$cache.rs.offset().left, this.coords.x_pointer = +(d - this.coords.x_gap).toFixed(), this.force_redraw = !
				0, this.calc(), this.$cache.line.trigger("focus"))
		},
		key: function (a, b) {
			if (!(this.current_plugin !== this.plugin_count || b.altKey ||
				b.ctrlKey || b.shiftKey || b.metaKey)) {
				switch (b.which) {
					case 83:
					case 65:
					case 40:
					case 37:
						b.preventDefault();
						this.moveByKey(!1);
						break;
					case 87:
					case 68:
					case 38:
					case 39:
						b.preventDefault(), this.moveByKey(!0)
				}
				return !0
			}
		},
		moveByKey: function (a) {
			var b = this.coords.p_pointer,
				d = (this.options.max - this.options.min) / 100,
				d = this.options.step / d;
			this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * (a ? b + d : b - d));
			this.is_key = !0;
			this.calc()
		},
		setMinMax: function () {
			if (this.options)
				if (this.options.hide_min_max) this.$cache.min[0].style.display =
					"none", this.$cache.max[0].style.display = "none";
				else {
					if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),
						this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
					else {
						var a = this._prettify(this.options.min),
							b = this._prettify(this.options.max);
						this.result.min_pretty = a;
						this.result.max_pretty = b;
						this.$cache.min.html(this.decorate(a, this.options.min));
						this.$cache.max.html(this.decorate(b, this.options.max))
					}
					this.labels.w_min = this.$cache.min.outerWidth(!1);
					this.labels.w_max = this.$cache.max.outerWidth(!1)
				}
		},
		setTempMinInterval: function () {
			var a = this.result.to - this.result.from;
			null === this.old_min_interval && (this.old_min_interval = this.options.min_interval);
			this.options.min_interval = a
		},
		restoreOriginalMinInterval: function () {
			null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval =
				null)
		},
		calc: function (a) {
			if (this.options) {
				this.calc_count++;
				if (10 === this.calc_count || a) this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1),
					this.calcHandlePercent();
				if (this.coords.w_rs) {
					this.calcPointerPercent();
					a = this.getHandleX();
					"both" === this.target && (this.coords.p_gap = 0, a = this.getHandleX());
					"click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, a = this.getHandleX(), this.target =
						this.options.drag_interval ? "both_one" : this.chooseHandle(a));
					switch (this.target) {
						case "base":
							var b = (this.options.max - this.options.min) / 100;
							a = (this.result.from - this.options.min) / b;
							b = (this.result.to - this.options.min) / b;
							this.coords.p_single_real = this.toFixed(a);
							this.coords.p_from_real = this.toFixed(a);
							this.coords.p_to_real = this.toFixed(b);
							this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options
								.from_max);
							this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
							this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
							this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
							this.coords.p_from_fake =
								this.convertToFakePercent(this.coords.p_from_real);
							this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
							this.target = null;
							break;
						case "single":
							if (this.options.from_fixed) break;
							this.coords.p_single_real = this.convertToRealPercent(a);
							this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
							this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options
								.from_max);
							this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
							break;
						case "from":
							if (this.options.from_fixed) break;
							this.coords.p_from_real = this.convertToRealPercent(a);
							this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
							this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real);
							this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
							this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
							this.coords.p_from_real =
								this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
							this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
							break;
						case "to":
							if (this.options.to_fixed) break;
							this.coords.p_to_real = this.convertToRealPercent(a);
							this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
							this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real);
							this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
							this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
							this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
							this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
							break;
						case "both":
							if (this.options.from_fixed || this.options.to_fixed) break;
							a = this.toFixed(a + .001 * this.coords.p_handle);
							this.coords.p_from_real = this.convertToRealPercent(a) - this.coords.p_gap_left;
							this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
							this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
							this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
							this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
							this.coords.p_to_real = this.convertToRealPercent(a) + this.coords.p_gap_right;
							this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
							this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min,
								this.options.to_max);
							this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
							this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
							break;
						case "both_one":
							if (!this.options.from_fixed && !this.options.to_fixed) {
								var d = this.convertToRealPercent(a);
								a = this.result.to_percent - this.result.from_percent;
								var c = a / 2,
									b = d - c,
									d = d + c;
								0 > b && (b = 0, d = b + a);
								100 < d && (d = 100, b = d - a);
								this.coords.p_from_real = this.calcWithStep(b);
								this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real,
									this.options.from_min, this.options.from_max);
								this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
								this.coords.p_to_real = this.calcWithStep(d);
								this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
								this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
							}
					}
					"single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords
						.p_single_fake, this.result.from_percent = this.coords.p_single_real,
						this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(
							this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])
					) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w =
						this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real,
						this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty =
						this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(
							this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length &&
						(this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[
							this.result.to]));
					this.calcMinMax();
					this.calcLabels()
				}
			}
		},
		calcPointerPercent: function () {
			this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer =
				0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer =
				this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
		},
		convertToRealPercent: function (a) {
			return a / (100 - this.coords.p_handle) * 100
		},
		convertToFakePercent: function (a) {
			return a / 100 * (100 - this.coords.p_handle)
		},
		getHandleX: function () {
			var a = 100 - this.coords.p_handle,
				b = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
			0 > b ? b = 0 : b > a && (b = a);
			return b
		},
		calcHandlePercent: function () {
			this.coords.w_handle =
				"single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1);
			this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
		},
		chooseHandle: function (a) {
			return "single" === this.options.type ? "single" : a >= this.coords.p_from_real + (this.coords.p_to_real - this.coords
				.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
		},
		calcMinMax: function () {
			this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max =
				this.labels.w_max / this.coords.w_rs * 100)
		},
		calcLabels: function () {
			this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache
				.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels
					.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this
						.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs *
						100, this.labels.p_from_left =
						this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left =
						this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this
							.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to /
							this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels
								.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left =
						this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(
							!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (
								this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2,
						this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(
							this.labels.p_single_left, this.labels.p_single_fake))
		},
		updateScene: function () {
			this.raf_id &&
				(cancelAnimationFrame(this.raf_id), this.raf_id = null);
			clearTimeout(this.update_tm);
			this.update_tm = null;
			this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(
				this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
		},
		drawHandles: function () {
			this.coords.w_rs = this.$cache.rs.outerWidth(!1);
			if (this.coords.w_rs) {
				this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0);
				if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) this.setMinMax(),
					this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !
					0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow();
				if (this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key)) {
					if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {
						this.drawLabels();
						this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
						this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";
						if ("single" === this.options.type) this.$cache.s_single[0].style.left =
							this.coords.p_single_fake + "%";
						else {
							this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
							this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";
							if (this.old_from !== this.result.from || this.force_redraw) this.$cache.from[0].style.left = this.labels.p_from_left +
								"%";
							if (this.old_to !== this.result.to || this.force_redraw) this.$cache.to[0].style.left = this.labels.p_to_left +
								"%"
						}
						this.$cache.single[0].style.left = this.labels.p_single_left + "%";
						this.writeToInput();
						this.old_from === this.result.from && this.old_to ===
							this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input"));
						this.old_from = this.result.from;
						this.old_to = this.result.to;
						this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange();
						if (this.is_key || this.is_click) this.is_click = this.is_key = !1, this.callOnFinish();
						this.is_finish = this.is_resize = this.is_update = !1
					}
					this.force_redraw = this.is_click = this.is_key = this.is_start = !1
				}
			}
		},
		drawLabels: function () {
			if (this.options) {
				var a = this.options.values.length,
					b = this.options.p_values;
				if (!this.options.hide_from_to)
					if ("single" === this.options.type) {
						if (a) a = this.decorate(b[this.result.from]);
						else {
							var d = this._prettify(this.result.from);
							a = this.decorate(d, this.result.from)
						}
						this.$cache.single.html(a);
						this.calcLabels();
						this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible";
						this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels
							.p_max - 1 ? "hidden" : "visible"
					} else {
						a ? (this.options.decorate_both ?
							(a = this.decorate(b[this.result.from]), a += this.options.values_separator, a += this.decorate(b[this.result
								.to])) : a = this.decorate(b[this.result.from] + this.options.values_separator + b[this.result.to]), d =
							this.decorate(b[this.result.from]), b = this.decorate(b[this.result.to])) : (d = this._prettify(this.result.from),
								b = this._prettify(this.result.to), this.options.decorate_both ? (a = this.decorate(d, this.result.from), a +=
									this.options.values_separator, a += this.decorate(b, this.result.to)) : a = this.decorate(d + this.options.values_separator +
										b, this.result.to), d = this.decorate(d, this.result.from), b = this.decorate(b, this.result.to));
						this.$cache.single.html(a);
						this.$cache.from.html(d);
						this.$cache.to.html(b);
						this.calcLabels();
						a = Math.min(this.labels.p_single_left, this.labels.p_from_left);
						d = this.labels.p_single_left + this.labels.p_single_fake;
						var b = this.labels.p_to_left + this.labels.p_to_fake,
							c = Math.max(d, b);
						this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility =
							"hidden", this.$cache.to[0].style.visibility =
							"hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" ===
								this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style
									.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[
										0].style.visibility = "hidden", c = b) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[
											0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", c = Math.max(d, b))) :
							(this.$cache.from[0].style.visibility =
								"visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"
							);
						this.$cache.min[0].style.visibility = a < this.labels.p_min + 1 ? "hidden" : "visible";
						this.$cache.max[0].style.visibility = c > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
					}
			}
		},
		drawShadow: function () {
			var a = this.options,
				b = this.$cache,
				d = "number" === typeof a.from_min && !isNaN(a.from_min),
				c = "number" === typeof a.from_max && !isNaN(a.from_max),
				e = "number" === typeof a.to_min && !isNaN(a.to_min),
				g = "number" === typeof a.to_max && !isNaN(a.to_max);
			"single" === a.type ? a.from_shadow && (d || c) ? (d = this.convertToPercent(d ? a.from_min : a.min), c = this.convertToPercent(
				c ? a.from_max : a.max) - d, d = this.toFixed(d - this.coords.p_handle / 100 * d), c = this.toFixed(c - this.coords
					.p_handle / 100 * c), d += this.coords.p_handle / 2, b.shad_single[0].style.display = "block", b.shad_single[0]
						.style.left = d + "%", b.shad_single[0].style.width = c + "%") : b.shad_single[0].style.display = "none" : (a.from_shadow &&
							(d || c) ? (d = this.convertToPercent(d ? a.from_min : a.min), c = this.convertToPercent(c ? a.from_max : a.max) -
								d, d = this.toFixed(d - this.coords.p_handle / 100 * d), c = this.toFixed(c - this.coords.p_handle / 100 * c),
								d += this.coords.p_handle / 2, b.shad_from[0].style.display = "block", b.shad_from[0].style.left = d + "%", b.shad_from[
									0].style.width = c + "%") : b.shad_from[0].style.display = "none", a.to_shadow && (e || g) ? (e = this.convertToPercent(
										e ? a.to_min : a.min), a = this.convertToPercent(g ? a.to_max : a.max) - e, e = this.toFixed(e - this.coords.p_handle /
											100 * e), a = this.toFixed(a - this.coords.p_handle / 100 * a), e += this.coords.p_handle / 2, b.shad_to[0].style
												.display =
										"block", b.shad_to[0].style.left = e + "%", b.shad_to[0].style.width = a + "%") : b.shad_to[0].style.display =
								"none")
		},
		writeToInput: function () {
			"single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) :
				this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options
					.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator +
						this.result.to_value) : this.$cache.input.prop("value",
							this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result
								.from), this.$cache.input.data("to", this.result.to))
		},
		callOnStart: function () {
			this.writeToInput();
			if (this.options.onStart && "function" === typeof this.options.onStart)
				if (this.options.scope) this.options.onStart.call(this.options.scope, this.result);
				else this.options.onStart(this.result)
		},
		callOnChange: function () {
			this.writeToInput();
			if (this.options.onChange && "function" === typeof this.options.onChange)
				if (this.options.scope) this.options.onChange.call(this.options.scope,
					this.result);
				else this.options.onChange(this.result)
		},
		callOnFinish: function () {
			this.writeToInput();
			if (this.options.onFinish && "function" === typeof this.options.onFinish)
				if (this.options.scope) this.options.onFinish.call(this.options.scope, this.result);
				else this.options.onFinish(this.result)
		},
		callOnUpdate: function () {
			this.writeToInput();
			if (this.options.onUpdate && "function" === typeof this.options.onUpdate)
				if (this.options.scope) this.options.onUpdate.call(this.options.scope, this.result);
				else this.options.onUpdate(this.result)
		},
		toggleInput: function () {
			this.$cache.input.toggleClass("irs-hidden-input");
			this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex");
			this.has_tab_index = !this.has_tab_index
		},
		convertToPercent: function (a, b) {
			var d = this.options.max - this.options.min;
			return d ? this.toFixed((b ? a : a - this.options.min) / (d / 100)) : (this.no_diapason = !0, 0)
		},
		convertToValue: function (a) {
			var b = this.options.min,
				d = this.options.max,
				c = b.toString().split(".")[1],
				e = d.toString().split(".")[1],
				g, l, f = 0,
				h = 0;
			if (0 === a) return this.options.min;
			if (100 === a) return this.options.max;
			c && (f = g = c.length);
			e && (f = l = e.length);
			g && l && (f = g >= l ? g : l);
			0 > b && (h = Math.abs(b), b = +(b + h).toFixed(f), d = +(d + h).toFixed(f));
			a = (d - b) / 100 * a + b;
			(b = this.options.step.toString().split(".")[1]) ? a = +a.toFixed(b.length) : (a /= this.options.step, a *= this.options
				.step, a = +a.toFixed(0));
			h && (a -= h);
			h = b ? +a.toFixed(b.length) : this.toFixed(a);
			h < this.options.min ? h = this.options.min : h > this.options.max && (h = this.options.max);
			return h
		},
		calcWithStep: function (a) {
			var b =
				Math.round(a / this.coords.p_step) * this.coords.p_step;
			100 < b && (b = 100);
			100 === a && (b = 100);
			return this.toFixed(b)
		},
		checkMinInterval: function (a, b, d) {
			var c = this.options;
			if (!c.min_interval) return a;
			a = this.convertToValue(a);
			b = this.convertToValue(b);
			"from" === d ? b - a < c.min_interval && (a = b - c.min_interval) : a - b < c.min_interval && (a = b + c.min_interval);
			return this.convertToPercent(a)
		},
		checkMaxInterval: function (a, b, d) {
			var c = this.options;
			if (!c.max_interval) return a;
			a = this.convertToValue(a);
			b = this.convertToValue(b);
			"from" ===
				d ? b - a > c.max_interval && (a = b - c.max_interval) : a - b > c.max_interval && (a = b + c.max_interval);
			return this.convertToPercent(a)
		},
		checkDiapason: function (a, b, d) {
			a = this.convertToValue(a);
			var c = this.options;
			"number" !== typeof b && (b = c.min);
			"number" !== typeof d && (d = c.max);
			a < b && (a = b);
			a > d && (a = d);
			return this.convertToPercent(a)
		},
		toFixed: function (a) {
			a = a.toFixed(20);
			return +a
		},
		_prettify: function (a) {
			return this.options.prettify_enabled ? this.options.prettify && "function" === typeof this.options.prettify ?
				this.options.prettify(a) :
				this.prettify(a) : a
		},
		prettify: function (a) {
			return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
		},
		checkEdges: function (a, b) {
			if (!this.options.force_edges) return this.toFixed(a);
			0 > a ? a = 0 : a > 100 - b && (a = 100 - b);
			return this.toFixed(a)
		},
		validate: function () {
			var a = this.options,
				b = this.result,
				d = a.values,
				c = d.length,
				e;
			"string" === typeof a.min && (a.min = +a.min);
			"string" === typeof a.max && (a.max = +a.max);
			"string" === typeof a.from && (a.from = +a.from);
			"string" === typeof a.to && (a.to = +a.to);
			"string" === typeof a.step && (a.step = +a.step);
			"string" === typeof a.from_min && (a.from_min = +a.from_min);
			"string" === typeof a.from_max && (a.from_max = +a.from_max);
			"string" === typeof a.to_min && (a.to_min = +a.to_min);
			"string" === typeof a.to_max && (a.to_max = +a.to_max);
			"string" === typeof a.grid_num && (a.grid_num = +a.grid_num);
			a.max < a.min && (a.max = a.min);
			if (c)
				for (a.p_values = [], a.min = 0, a.max = c - 1, a.step = 1, a.grid_num = a.max, a.grid_snap = !0, e = 0; e < c; e++) {
					var g = +d[e];
					isNaN(g) ? g = d[e] : (d[e] = g, g = this._prettify(g));
					a.p_values.push(g)
				}
			if ("number" !==
				typeof a.from || isNaN(a.from)) a.from = a.min;
			if ("number" !== typeof a.to || isNaN(a.to)) a.to = a.max;
			"single" === a.type ? (a.from < a.min && (a.from = a.min), a.from > a.max && (a.from = a.max)) : (a.from < a.min &&
				(a.from = a.min), a.from > a.max && (a.from = a.max), a.to < a.min && (a.to = a.min), a.to > a.max && (a.to = a
					.max), this.update_check.from && (this.update_check.from !== a.from && a.from > a.to && (a.from = a.to), this.update_check
						.to !== a.to && a.to < a.from && (a.to = a.from)), a.from > a.to && (a.from = a.to), a.to < a.from && (a.to =
							a.from));
			if ("number" !== typeof a.step ||
				isNaN(a.step) || !a.step || 0 > a.step) a.step = 1;
			"number" === typeof a.from_min && a.from < a.from_min && (a.from = a.from_min);
			"number" === typeof a.from_max && a.from > a.from_max && (a.from = a.from_max);
			"number" === typeof a.to_min && a.to < a.to_min && (a.to = a.to_min);
			"number" === typeof a.to_max && a.from > a.to_max && (a.to = a.to_max);
			if (b) {
				b.min !== a.min && (b.min = a.min);
				b.max !== a.max && (b.max = a.max);
				if (b.from < b.min || b.from > b.max) b.from = a.from;
				if (b.to < b.min || b.to > b.max) b.to = a.to
			}
			if ("number" !== typeof a.min_interval || isNaN(a.min_interval) ||
				!a.min_interval || 0 > a.min_interval) a.min_interval = 0;
			if ("number" !== typeof a.max_interval || isNaN(a.max_interval) || !a.max_interval || 0 > a.max_interval) a.max_interval =
				0;
			a.min_interval && a.min_interval > a.max - a.min && (a.min_interval = a.max - a.min);
			a.max_interval && a.max_interval > a.max - a.min && (a.max_interval = a.max - a.min)
		},
		decorate: function (a, b) {
			var d = "",
				c = this.options;
			c.prefix && (d += c.prefix);
			d += a;
			c.max_postfix && (c.values.length && a === c.p_values[c.max] ? (d += c.max_postfix, c.postfix && (d += " ")) : b ===
				c.max && (d += c.max_postfix,
					c.postfix && (d += " ")));
			c.postfix && (d += c.postfix);
			return d
		},
		updateFrom: function () {
			this.result.from = this.options.from;
			this.result.from_percent = this.convertToPercent(this.result.from);
			this.result.from_pretty = this._prettify(this.result.from);
			this.options.values && (this.result.from_value = this.options.values[this.result.from])
		},
		updateTo: function () {
			this.result.to = this.options.to;
			this.result.to_percent = this.convertToPercent(this.result.to);
			this.result.to_pretty = this._prettify(this.result.to);
			this.options.values &&
				(this.result.to_value = this.options.values[this.result.to])
		},
		updateResult: function () {
			this.result.min = this.options.min;
			this.result.max = this.options.max;
			this.updateFrom();
			this.updateTo()
		},
		appendGrid: function () {
			if (this.options.grid) {
				var a = this.options,
					b;
				var d = a.max - a.min;
				var c = a.grid_num,
					e = 4,
					g = "";
				this.calcGridMargin();
				if (a.grid_snap)
					if (50 < d) {
						c = 50 / a.step;
						var f = this.toFixed(a.step / .5)
					} else c = d / a.step, f = this.toFixed(a.step / (d / 100));
				else f = this.toFixed(100 / c);
				4 < c && (e = 3);
				7 < c && (e = 2);
				14 < c && (e = 1);
				28 < c && (e = 0);
				for (d = 0; d < c + 1; d++) {
					var k = e;
					var h = this.toFixed(f * d);
					100 < h && (h = 100);
					this.coords.big[d] = h;
					var m = (h - f * (d - 1)) / (k + 1);
					for (b = 1; b <= k && 0 !== h; b++) {
						var n = this.toFixed(h - m * b);
						g += '<span class="irs-grid-pol small" style="left: ' + n + '%"></span>'
					}
					g += '<span class="irs-grid-pol" style="left: ' + h + '%"></span>';
					b = this.convertToValue(h);
					b = a.values.length ? a.p_values[b] : this._prettify(b);
					g += '<span class="irs-grid-text js-grid-text-' + d + '" style="left: ' + h + '%">' + b + "</span>"
				}
				this.coords.big_num = Math.ceil(c + 1);
				this.$cache.cont.addClass("irs-with-grid");
				this.$cache.grid.html(g);
				this.cacheGridLabels()
			}
		},
		cacheGridLabels: function () {
			var a, b = this.coords.big_num;
			for (a = 0; a < b; a++) {
				var d = this.$cache.grid.find(".js-grid-text-" + a);
				this.$cache.grid_labels.push(d)
			}
			this.calcGridLabels()
		},
		calcGridLabels: function () {
			var a;
			var b = [];
			var d = [],
				c = this.coords.big_num;
			for (a = 0; a < c; a++) this.coords.big_w[a] = this.$cache.grid_labels[a].outerWidth(!1), this.coords.big_p[a] =
				this.toFixed(this.coords.big_w[a] / this.coords.w_rs * 100), this.coords.big_x[a] = this.toFixed(this.coords.big_p[
					a] /
					2), b[a] = this.toFixed(this.coords.big[a] - this.coords.big_x[a]), d[a] = this.toFixed(b[a] + this.coords.big_p[
						a]);
			this.options.force_edges && (b[0] < -this.coords.grid_gap && (b[0] = -this.coords.grid_gap, d[0] = this.toFixed(b[
				0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), d[c - 1] > 100 + this.coords.grid_gap &&
				(d[c - 1] = 100 + this.coords.grid_gap, b[c - 1] = this.toFixed(d[c - 1] - this.coords.big_p[c - 1]), this.coords
					.big_x[c - 1] = this.toFixed(this.coords.big_p[c - 1] - this.coords.grid_gap)));
			this.calcGridCollision(2,
				b, d);
			this.calcGridCollision(4, b, d);
			for (a = 0; a < c; a++) b = this.$cache.grid_labels[a][0], this.coords.big_x[a] !== Number.POSITIVE_INFINITY && (
				b.style.marginLeft = -this.coords.big_x[a] + "%")
		},
		calcGridCollision: function (a, b, d) {
			var c, e = this.coords.big_num;
			for (c = 0; c < e; c += a) {
				var g = c + a / 2;
				if (g >= e) break;
				var f = this.$cache.grid_labels[g][0];
				f.style.visibility = d[c] <= b[g] ? "visible" : "hidden"
			}
		},
		calcGridMargin: function () {
			this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle =
				"single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this
					.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(
						this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) +
						"%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
		},
		update: function (a) {
			this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check
				.from =
				this.result.from, this.update_check.to = this.result.to, this.options = f.extend(this.options, a), this.validate(),
				this.updateResult(a), this.toggleInput(), this.remove(), this.init(!0))
		},
		reset: function () {
			this.input && (this.updateResult(), this.update())
		},
		destroy: function () {
			this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), f.data(this.input, "ionRangeSlider",
				null), this.remove(), this.options = this.input = null)
		}
	};
	f.fn.ionRangeSlider = function (a) {
		return this.each(function () {
			f.data(this, "ionRangeSlider") ||
				f.data(this, "ionRangeSlider", new q(this, a, t++))
		})
	};
	(function () {
		for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !k.requestAnimationFrame; ++d) k.requestAnimationFrame =
			k[b[d] + "RequestAnimationFrame"], k.cancelAnimationFrame = k[b[d] + "CancelAnimationFrame"] || k[b[d] +
			"CancelRequestAnimationFrame"];
		k.requestAnimationFrame || (k.requestAnimationFrame = function (b, d) {
			var c = (new Date).getTime(),
				e = Math.max(0, 16 - (c - a)),
				f = k.setTimeout(function () {
					b(c + e)
				}, e);
			a = c + e;
			return f
		});
		k.cancelAnimationFrame || (k.cancelAnimationFrame =
			function (a) {
				clearTimeout(a)
			})
	})()
});
