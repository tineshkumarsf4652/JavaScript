/*var Car={
    car_brand:"Tesla",
    car_model:"Model-3",
    price:300000000,

    teslaAutoPilot:function()
    {
        return "<h2>This car has auto pilot</h2>";
    }
}
document.write(Car.teslaAutoPilot());
document.write("<h2>"+Car.car_brand+"</h2>");*/

function Cars(car_brand,car_model,price)
{
    this.car_brand=car_brand;
    this.car_model=car_model;
    this.price=price;
    this.teslaAutoPilot=function()
    {
        document.write("<h2>This car has auto pilot</h2>");
    }
}
var c1=new Cars("Tesla","Model-3",300000000);
var c2=new Cars("Tesla","Model-P",400000000);
document.write("<h2>"+c2.car_model+"</h2>");
c1.teslaAutoPilot();