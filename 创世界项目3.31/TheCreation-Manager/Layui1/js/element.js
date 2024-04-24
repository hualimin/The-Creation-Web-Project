/** layui-v1.0.7 LGPL License By http://www.layui.com */ ;
layui.define("jquery", function(i) {
	"use strict";
	var t = layui.jquery,
		a = (layui.hint(), layui.device()),
		e = "element",
		l = "layui-this",
		n = "layui-show",
		s = function() {
			this.config = {}
		};
	s.prototype.set = function(i) {
		var a = this;
		return t.extend(!0, a.config, i), a
	}, s.prototype.on = function(i, t) {
		return layui.onevent(e, i, t)
	}, s.prototype.tabAdd = function(i, a) {
		var e = t(".layui-tab[lay-filter=" + i + "]"),
			l = e.children(".layui-tab-title"),
			n = e.children(".layui-tab-content");
		return l.append("<li>" + (a.title || "unnaming") + "</li>"), n.append('<div class="layui-tab-item">' + (a.content ||
			"") + "</div>"), y.tabAuto(), this
	}, s.prototype.tabDelete = function(i, a) {
		var e = t(".layui-tab[lay-filter=" + i + "]"),
			l = e.children(".layui-tab-title").find(">li").eq(a);
		return y.tabDelete(null, l), this
	}, s.prototype.tabChange = function(i, a) {
		var e = t(".layui-tab[lay-filter=" + i + "]"),
			l = e.children(".layui-tab-title").find(">li").eq(a);
		return y.tabClick(null, a, l), this
	};
	var o = ".layui-nav",
		c = "layui-nav-item",
		r = "layui-nav-bar",
		u = "layui-nav-tree",
		d = "layui-nav-child",
		h = "layui-nav-more",
		f = "layui-anim layui-anim-upbit",
		y = {
			tabClick: function(i, a, s) {
				var o = s || t(this),
					a = a || o.index(),
					c = o.parents(".layui-tab"),
					r = c.children(".layui-tab-content").children(".layui-tab-item"),
					u = c.attr("lay-filter");
				o.addClass(l).siblings().removeClass(l), r.eq(a).addClass(n).siblings().removeClass(n), layui.event.call(this, e,
					"tab(" + u + ")", {
						elem: c,
						index: a
					})
			},
			tabDelete: function(i, a) {
				var e = a || t(this).parent(),
					n = e.index(),
					s = e.parents(".layui-tab"),
					o = s.children(".layui-tab-content").children(".layui-tab-item");
				e.hasClass(l) && (e.next()[0] ? y.tabClick.call(e.next()[0], null, n + 1) : e.prev()[0] && y.tabClick.call(e.prev()[
					0], null, n - 1)), e.remove(), o.eq(n).remove()
			},
			tabAuto: function() {
				var i = "layui-tab-more",
					e = "layui-tab-bar",
					l = "layui-tab-close",
					n = this;
				t(".layui-tab").each(function() {
					var s = t(this),
						o = s.children(".layui-tab-title"),
						c = (s.children(".layui-tab-content").children(".layui-tab-item"), 'lay-stope="tabmore"'),
						r = t('<span class="layui-unselect layui-tab-bar" ' + c + "><i " + c +
							' class="layui-icon">&#xe61a;</i></span>');
					if (n === window && 8 != a.ie && y.hideTabMore(!0), s.attr("lay-allowClose") && o.find("li").each(function() {
							var i = t(this);
							if (!i.find("." + l)[0]) {
								var a = t('<i class="layui-icon layui-unselect ' + l + '">&#x1006;</i>');
								a.on("click", y.tabDelete), i.append(a)
							}
						}), o.prop("scrollWidth") > o.outerWidth() + 1) {
						if (o.find("." + e)[0]) return;
						o.append(r), r.on("click", function(t) {
							o[this.title ? "removeClass" : "addClass"](i), this.title = this.title ? "" : "收缩"
						})
					} else o.find("." + e).remove()
				})
			},
			hideTabMore: function(i) {
				var a = t(".layui-tab-title");
				i !== !0 && "tabmore" === t(i.target).attr("lay-stope") || (a.removeClass("layui-tab-more"), a.find(
					".layui-tab-bar").attr("title", ""))
			},
			clickThis: function() {
				var i = t(this),
					a = i.parents(o),
					n = a.attr("lay-filter");
				i.find("." + d)[0] || (a.find("." + l).removeClass(l), i.addClass(l), layui.event.call(this, e, "nav(" + n + ")",
					i))
			},
			clickChild: function() {
				var i = t(this),
					a = i.parents(o),
					n = a.attr("lay-filter");
				a.find("." + l).removeClass(l), i.addClass(l), layui.event.call(this, e, "nav(" + n + ")", i)
			},
			showChild: function() {
				var i = t(this),
					a = i.parents(o),
					e = i.parent(),
					l = i.siblings("." + d);
				a.hasClass(u) && (l.removeClass(f), e["none" === l.css("display") ? "addClass" : "removeClass"](c + "ed"))
			}
		};
	s.prototype.init = function(i) {
		var e = {
			tab: function() {
				y.tabAuto.call({})
			},
			nav: function() {
				var i, e, l, s = 200,
					p = function(o, c) {
						var r = t(this),
							y = r.find("." + d);
						c.hasClass(u) ? o.css({
							top: r.position().top,
							height: r.children("a").height(),
							opacity: 1
						}) : (y.addClass(f), o.css({
								left: r.position().left + parseFloat(r.css("marginLeft")),
								top: r.position().top + r.height() - 5
							}), i = setTimeout(function() {
								o.css({
									width: r.width(),
									opacity: 1
								})
							}, a.ie && a.ie < 10 ? 0 : s), clearTimeout(l), "block" === y.css("display") && clearTimeout(e), e =
							setTimeout(function() {
								y.addClass(n), r.find("." + h).addClass(h + "d")
							}, 300))
					};
				t(o).each(function() {
					var a = t(this),
						o = t('<span class="' + r + '"></span>'),
						f = a.find("." + c);
					a.find("." + r)[0] || (a.append(o), f.on("mouseenter", function() {
						p.call(this, o, a)
					}).on("mouseleave", function() {
						a.hasClass(u) || (clearTimeout(e), e = setTimeout(function() {
							a.find("." + d).removeClass(n), a.find("." + h).removeClass(h + "d")
						}, 300))
					}), a.on("mouseleave", function() {
						clearTimeout(i), l = setTimeout(function() {
							a.hasClass(u) ? o.css({
								height: 0,
								top: o.position().top + o.height() / 2,
								opacity: 0
							}) : o.css({
								width: 0,
								left: o.position().left + o.width() / 2,
								opacity: 0
							})
						}, s)
					})), f.each(function() {
						var i = t(this),
							a = i.find("." + d);
						if (a[0] && !i.find("." + h)[0]) {
							var e = i.children("a");
							e.append('<span class="' + h + '"></span>')
						}
						i.off("click", y.clickThis).on("click", y.clickThis), i.children("a").off("click", y.showChild).on(
							"click", y.showChild), a.children("dd").off("click", y.clickChild).on("click", y.clickChild)
					})
				})
			},
			breadcrumb: function() {
				var i = ".layui-breadcrumb";
				t(i).each(function() {
					var i = t(this),
						a = i.attr("lay-separator") || ">",
						e = i.find("a");
					e.find(".layui-box")[0] || (e.each(function(i) {
						i !== e.length - 1 && t(this).append('<span class="layui-box">' + a + "</span>")
					}), i.css("visibility", "visible"))
				})
			}
		};
		return layui.each(e, function(i, t) {
			t()
		})
	};
	var p = new s,
		b = t(document);
	p.init();
	var v = ".layui-tab-title li";
	b.on("click", v, y.tabClick), b.on("click", y.hideTabMore), t(window).on("resize", y.tabAuto), i(e, function(i) {
		return p.set(i)
	})
});
