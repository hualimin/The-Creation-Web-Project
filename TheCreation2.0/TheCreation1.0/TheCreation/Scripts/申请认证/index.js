
// 第一个滑块代码
$('.downPayment').on('click', function () {
	navSelectChangeThisCss(this, ".selecteList_downPayment", [".selecteList_month", ".selecteList_month"], [
		".monthlyInstallment", ".defaultSort"
	]);
});
$('.ndownPayment_ul li').on('click', function () {
	$(this).addClass("selected");
	$(this).siblings().removeClass("selected");
	setTimeout(function () { }, 100);
	var newData = $(this).attr("data-ndownPayment");
	carQueryData.ndownPaymentStart = newData.split("_")[0];
	carQueryData.ndownPaymentEnd = newData.split("_")[1];
	if (carQueryData.ndownPaymentEnd == "60000") {
		carQueryData.ndownPaymentEnd = "";
	};
	if (carQueryData.ndownPaymentStart == "0") {
		carQueryData.ndownPaymentStart = "";
	};
	carRenderData.ndownPayment = "区间" + $(this).text();
	var formNum = Number(carQueryData.ndownPaymentStart) / 1000;
	var toNum = Number(carQueryData.ndownPaymentEnd) / 1000;
	if (toNum == 0) {
		toNum = 6;
	};
	sliderRange1.update({ //数据更新
		from: formNum,
		to: toNum,
	});
	//滑动重新初始化
	moveSliderRange1(formNum, toNum);
});

// // 第二个滑块代码
$('.monthlyInstallment').on('click', function () {
	navSelectChangeThisCss(this, ".selecteList_month", [".selecteList_downPayment", ".selecteList"], [".downPayment",
		".defaultSort"
	]);
});
$('.nmonthlyPayment_ul li').on('click', function () {
	$(this).addClass("selected");
	$(this).siblings().removeClass("selected");
	setTimeout(function () { }, 100);
	var newData = $(this).attr("data-nmonthlyPayment");
	carQueryData.nmonthlyPaymentStart = newData.split("_")[0];
	carQueryData.nmonthlyPaymentEnd = newData.split("_")[1];
	carRenderData.nmonthlyPayment = "区间" + $(this).text();
	if (carQueryData.nmonthlyPaymentEnd == "6000") {
		carQueryData.nmonthlyPaymentEnd = "";
	};
	if (carQueryData.nmonthlyPaymentStart == "0") {
		carQueryData.nmonthlyPaymentStart = "";
	};
	var formNum = Number(carQueryData.nmonthlyPaymentStart);
	var toNum = Number(carQueryData.nmonthlyPaymentEnd);
	if (toNum == 0) {
		toNum = 6000;
	}
	sliderRange2.update({ //数据更新
		from: formNum,
		to: toNum,
	});
	//滑动重新初始化
	moveSliderRange2(formNum, toNum);
});
$(".range_1").ionRangeSlider({
	min: 0, //最小值 
	max: 6, //最大值 
	from: 0, //默认从哪个值开始选
	to: 6, //默认选到哪个值
	type: 'double', //设置类型
	step: 1,
	prefix: "", //设置数值前缀
	postfix: "元", //设置数值后缀
	prettify: true,
	hasGrid: true,
	onChange: function (data) { //数据变化时触发
		console.log(data)
		moveSliderRange1(data.from, data.to);
	},
});
var sliderRange1 = $(".range_1").data("ionRangeSlider");

function moveSliderRange1(leftNum, rightNum) {
	if (leftNum >= 0 && rightNum <= 5) {
		$('.bxsh').text(leftNum + '-' + rightNum + '千');
		$('.bxsh').attr("data-leftNum", leftNum * 1000);
		$('.bxsh').attr("data-rightNum", rightNum * 1000);
	} else if (leftNum == 6 && rightNum == 6) {
		$('.bxsh').text('5千以上');
		$('.bxsh').attr("data-leftNum", 5000);
		$('.bxsh').attr("data-rightNum", "");
	} else if (leftNum > 0 && leftNum < 5 && rightNum > 5) {
		$('.bxsh').text(leftNum + '千以上');
		$('.bxsh').attr("data-leftNum", leftNum * 1000);
		$('.bxsh').attr("data-rightNum", "");
	} else if (leftNum >= 50 && rightNum > 5) {
		$('.bxsh').text('5千以上');
		$('.bxsh').attr("data-leftNum", "5000");
		$('.bxsh').attr("data-rightNum", "");
	} else if (leftNum == 0 && rightNum > 5) {
		$('.bxsh').text("不限收费区间");
		$('.bxsh').attr("data-leftNum", "0");
		$('.bxsh').attr("data-rightNum", "");
	}
}
