$(function() {
	$.get("https://sheets.googleapis.com/v4/spreadsheets/1HI_k14Oi9-L0se_X0_kzj_-hKrm9LexPYECQp5B5CkQ/values/'db1'!A2:M13?alt=json&key=AIzaSyD8OSGywLpYbB2qHfCL47OeIQAkhbBz49Q", function(data) {
		var d = data.values;
		const wl = JSON.parse(localStorage.getItem('wishkey')) || [];
		var items = [];
		for (var i in d) {
			var item = {};
			item.num = d[i][0];
			item.name = d[i][1];
			if (wl.includes(parseInt(d[i][0]))) {
				item.likebtn = '<div onclick="actionToogle(this)"><i id=' + d[i][0] + ' class="fa fa-heart"></i>' + d[i][0] + ' ' + d[i][1] + '</div>';
			} else {
				item.likebtn = '<div onclick="actionToogle(this)"><i id=' + d[i][0] + ' class="fa fa-heart-o"></i>' + d[i][0] + ' ' + d[i][1] + '</div>';
			}
			item.coverpic = d[i][3];
			items.push(item);
		}
		for (var i in items) {
			var Card = `
			<div class="post-entry content-card">
				<img width="80%" src=${items[i].coverpic}><br>
				${items[i].likebtn}
			</div><br>
				
			`;
			$('.biVOqy').append(Card);
		}
	})
});

function actionToogle(x) {
	if ($(x).find('i').attr('class') == "fa fa-heart") {
		$(x).find('i').toggleClass('fa-heart fa-heart-o')
		removeWishList(parseInt($(x).find('i').attr('id')));
	} else if ($(x).find('i').attr('class') == "fa fa-heart-o") {
		$(x).find('i').toggleClass('fa-heart fa-heart-o')
		addWishList(parseInt($(x).find('i').attr('id')));
	}
}

function setItem(name, setvalue) {
	localStorage.setItem(name, JSON.stringify(setvalue));
}

function getItem(name) {
	return localStorage.getItem(name);
}

function addWishList(num) {
	var wishlist = JSON.parse(localStorage.getItem('wishkey')) || [];
	wishlist.push(num);
	wishlist = Array.from(new Set(wishlist)).sort(function(a, b) {
		return a - b;
	});
	setItem("wishkey", wishlist);
	console.log(getItem("wishkey"));
}

function removeWishList(num) {
	var wishlist = JSON.parse(getItem("wishkey"));
	var toRemove = num;
	wishlist = wishlist.filter(function(item) {
		return item != toRemove;
	});
	setItem("wishkey", wishlist);
	console.log(getItem("wishkey"));
}
