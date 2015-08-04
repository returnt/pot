/**
 * Created by Astam on 04.08.2015.
 */
function Perimeter(){
    var length, width, per;
    length = document.getElementById("length_ceiling").value;
    var length = parseFloat(length);
    width = document.getElementById("width_ceiling").value;
    var width = parseFloat(width);
    per = 2 * (length + width);
    //alert(per);
    if (per == undefined){
        document.getElementById("perim").innerHTML = "Заполните все данные!";
    }
    else document.getElementById("perim").innerHTML = per;
}

function Area(){
    var a, b, area;
    a = document.getElementById("length_ceiling").value;
    var a = parseFloat(a);
    b = document.getElementById("width_ceiling").value;
    var b = parseFloat(b);
    area = a * b;
    //alert(area);
    document.getElementById("area").innerHTML = area;
}

function next()
{
    window.location = "file:///C:/Users/Astam/Code/TabsDemo/www/index.html#/";
}

function back(){
    window.location = "file:///C:/Users/Astam/Code/TabsDemo/www/index.html#/";
}