var ProductionType = document.querySelector("#ProductionType");
var Tag = document.querySelector("#Tag")

function linkage(ProductionType, Tag, data) {
    for (var i = 0; i < data.leixing.length; i++) {
        var opc = document.createElement("option");
        opc.innerHTML = data.leixing[i].title;
        opc.value = data.leixing[i].name;
        ProductionType.appendChild(opc);
    }

    ProductionType.onchange = function () {

        Tag.innerHTML = " <option>标签</option>"


        for (var j = 0; j < data.biaoqian[this.value].length; j++) {
            var opc1 = document.createElement("option");
            opc1.innerHTML = data.biaoqian[this.value][j].title;
            opc1.value = data.biaoqian[this.value][j].name;


            Tag.appendChild(opc1)

        }
    }



    btn.onclick = function () {
        var obj = {};
        console.log(ProductionType.options[ProductionType.selectedIndex].text)
        obj.leixing = {
            name: ProductionType.options[ProductionType.selectedIndex].value,
            title: ProductionType.options[ProductionType.selectedIndex].text,
        };
        obj.biaoqian = {
            name: Tag.options[Tag.selectedIndex].value,
            title: Tag.options[Tag.selectedIndex].text,
        };
        console.log(obj)
    }

}

linkage(ProductionType, Tag, data);