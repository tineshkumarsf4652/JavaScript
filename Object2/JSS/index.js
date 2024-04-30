var Car={
    car_brand:"Tesla",
    car_model:"Model-3",
    price:300000000,

    teslaAutoPilot:function()
    {
        document.write("<h2>This car has auto pilot</h2>");
    }
}
Car.fuelType="Electric";
//delete Car.price;
document.write("<h2>"+Car.fuelType+"</h2>");