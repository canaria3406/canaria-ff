! function(e, t) {
	function d() {
		var e = t.scrollingElement.scrollTop;
		s < e ? a.classList.add("doku-fixed") : a.classList.remove("doku-fixed")
	}
	var n, i, o, l, s, a;
	n = "doku-sidebar", i = "doku-navbar", s = t.getElementById(i).clientHeight, a = t.getElementById(n), o && (l = t.getElementById(o).clientHeight, s += l), e.addEventListener("scroll", function() {
		e.requestAnimationFrame(d)
	}), d(), t.getElementById("doku-sidebar-toggle").addEventListener("click", function() {
		t.body.classList.toggle("doku-sidebar-visible")
	}), t.getElementById("doku-main").addEventListener("click", function() {
		t.body.classList.remove("doku-sidebar-visible")
	})
}(window, document);