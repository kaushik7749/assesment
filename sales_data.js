const salesData = `Date,SKU,Unit Price,Quantity,Total Price
2019-01-01,Death by Chocolate,180,5,900
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Cake Fudge,150,3,450
2019-01-01,Death by Chocolate,180,1,180
2019-01-01,Vanilla Double Scoop,80,3,240
2019-01-01,Butterscotch Single Scoop,60,5,300
2019-01-01,Vanilla Single Scoop,50,5,250
2019-01-01,Cake Fudge,150,5,750
2019-01-01,Hot Chocolate Fudge,120,3,360
2019-01-01,Butterscotch Single Scoop,60,5,300
2019-01-01,Chocolate Europa Double Scoop,100,1,100
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Caramel Crunch Single Scoop,70,4,280
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Hot Chocolate Fudge,120,4,480
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Cafe Caramel,160,5,800
2019-01-01,Vanilla Double Scoop,80,4,320
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Vanilla Single Scoop,50,2,100
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Vanilla Double Scoop,80,1,80
2019-01-01,Death by Chocolate,180,2,360
2019-01-01,Cafe Caramel,160,2,320
2019-01-01,Pista Single Scoop,60,3,180
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Vanilla Single Scoop,50,3,150
2019-01-01,Vanilla Single Scoop,50,5,250
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Vanilla Single Scoop,50,4,200
2019-01-01,Vanilla Double Scoop,80,3,240
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Vanilla Double Scoop,80,5,400
2019-01-01,Hot Chocolate Fudge,120,5,600
2019-01-01,Vanilla Double Scoop,80,2,160
2019-01-01,Vanilla Double Scoop,80,3,240
2019-01-01,Hot Chocolate Fudge,120,5,600
2019-01-01,Cake Fudge,150,5,750
2019-01-01,Vanilla Single Scoop,50,5,250
2019-01-01,Cake Fudge,150,5,750
2019-01-01,Pista Single Scoop,60,1,60
2019-01-01,Butterscotch Single Scoop,60,2,120
2019-01-01,Vanilla Double Scoop,80,1,80
2019-01-01,Cafe Caramel,160,1,160
2019-01-01,Cake Fudge,150,5,750
2019-01-01,Trilogy,160,5,800
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Death by Chocolate,180,2,360
2019-01-01,Butterscotch Single Scoop,60,1,60
2019-01-01,Hot Chocolate Fudge,120,3,360
2019-01-01,Cake Fudge,150,2,300
2019-01-01,Cake Fudge,150,2,300
2019-01-01,Vanilla Single Scoop,50,4,200
2019-01-01,Cafe Caramel,160,1,160
2019-01-01,Cake Fudge,150,5,750
2019-01-01,Cafe Caramel,160,5,800
2019-01-01,Almond Fudge,150,1,150
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Death by Chocolate,180,5,900
2019-01-01,Death by Chocolate,180,5,900
2019-01-01,Hot Chocolate Fudge,120,4,480
2019-01-01,Cake Fudge,150,2,300
2019-01-01,Cake Fudge,150,4,600
2019-01-01,Butterscotch Single Scoop,60,5,300
2019-01-01,Vanilla Double Scoop,80,4,320
2019-01-01,Death by Chocolate,180,2,360
2019-01-01,Caramel Crunch Double Scoop,100,5,500
2019-01-01,Vanilla Single Scoop,50,3,150
2019-01-01,Hot Chocolate Fudge,120,1,120
2019-01-01,Vanilla Double Scoop,80,3,240
2019-01-01,Cafe Caramel,160,1,160
2019-01-01,Vanilla Double Scoop,80,4,320
2019-01-01,Death by Chocolate,180,3,540
2019-01-01,Vanilla Double Scoop,80,5,400
2019-01-01,Vanilla Single Scoop,50,1,50
2019-01-01,Cafe Caramel,160,3,480
2019-01-01,Vanilla Double Scoop,80,4,320
2019-01-01,Death by Chocolate,180,2,360
2019-01-01,Hot Chocolate Fudge,120,5,600
2019-01-01,Pista Single Scoop,60,2,120
2019-01-01,Cake Fudge,150,2,300
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Vanilla Single Scoop,50,5,250
2019-01-01,Dry Fruit Double Scoop,90,3,270
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Cake Fudge,150,2,300
2019-01-01,Vanilla Double Scoop,80,5,400
2019-01-01,Dry Fruit Single Scoop,60,1,60
2019-01-01,Cafe Caramel,160,5,800
2019-01-01,Hot Chocolate Fudge,120,4,480
2019-01-01,Chocolate Europa Double Scoop,100,4,400
2019-01-01,Rocky Road Single Scoop,50,1,50
2019-01-01,Hot Chocolate Fudge,120,4,480
2019-01-01,Hot Chocolate Fudge,120,3,360
2019-01-01,Vanilla Double Scoop,80,3,240
2019-01-01,Cafe Caramel,160,2,320
2019-01-01,Vanilla Double Scoop,80,1,80
2019-01-01,Vanilla Double Scoop,80,5,400
2019-01-01,Cake Fudge,150,3,450
2019-01-01,Vanilla Single Scoop,50,5,250
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Hot Chocolate Fudge,120,5,600
2019-01-01,Vanilla Double Scoop,80,2,160
2019-01-01,Vanilla Single Scoop,50,4,200
2019-01-01,Vanilla Double Scoop,80,5,400
2019-01-01,Vanilla Single Scoop,50,4,200
2019-01-01,Vanilla Single Scoop,50,4,200
2019-01-01,Mint Fudge,120,3,360
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Vanilla Single Scoop,50,2,100
2019-01-01,Hot Chocolate Fudge,120,4,480
2019-01-01,Vanilla Single Scoop,50,3,150
2019-01-01,Death by Chocolate,180,2,360
2019-01-01,Dry Fruit Double Scoop,90,2,180
2019-01-01,Vanilla Single Scoop,50,1,50
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Vanilla Single Scoop,50,3,150
2019-01-01,Cake Fudge,150,2,300
2019-01-01,Vanilla Double Scoop,80,2,160
2019-01-01,Vanilla Double Scoop,80,5,400
2019-01-01,Chocolate Europa Double Scoop,100,4,400
2019-01-01,Death by Chocolate,180,4,720
2019-01-01,Hot Chocolate Fudge,120,1,120
2019-01-01,Death by Chocolate,180,2,360
2019-01-01,Cake Fudge,150,2,300
2019-01-02,Cafe Caramel,160,2,320
2019-01-02,Fig and Honey Double Scoop,90,1,90
2019-01-02,Cake Fudge,150,2,300
2019-01-02,Vanilla Single Scoop,50,2,100
2019-01-02,Death by Chocolate,180,1,180
2019-01-02,Cake Fudge,150,3,450
2019-01-02,Hot Chocolate Fudge,120,4,480
2019-01-02,Chocolate Europa Single Scoop,70,5,350
2019-01-02,Butterscotch Single Scoop,60,5,300
2019-01-02,Butterscotch Double Scoop,90,2,180
2019-01-02,Hot Chocolate Fudge,120,1,120
2019-01-02,Hot Chocolate Fudge,120,2,240
2019-01-02,Fig and Honey Single Scoop,60,4,240
2019-01-02,Butterscotch Single Scoop,60,3,180
2019-01-02,Cake Fudge,150,3,450
2019-01-02,Vanilla Single Scoop,50,4,200
2019-01-02,Pista Double Scoop,90,1,90
2019-01-02,Caramel Crunch Double Scoop,100,5,500
2019-01-02,Vanilla Double Scoop,80,4,320
2019-01-02,Death by Chocolate,180,1,180
2019-01-02,Butterscotch Double Scoop,90,5,450
2019-01-02,Vanilla Double Scoop,80,4,320
2019-01-02,Hot Chocolate Fudge,120,2,240
2019-01-02,Hot Chocolate Fudge,120,5,600
2019-01-02,Cake Fudge,150,3,450
2019-01-02,Cafe Caramel,160,1,160
2019-01-02,Cafe Caramel,160,1,160
2019-01-02,Vanilla Double Scoop,80,3,240
2019-01-02,Butterscotch Single Scoop,60,2,120
2019-01-02,Hot Chocolate Fudge,120,5,600
2019-01-02,Hot Chocolate Fudge,120,1,120
2019-01-02,Hot Chocolate Fudge,120,1,120
2019-01-02,Butterscotch Single Scoop,60,4,240
2019-01-02,Pista Single Scoop,60,5,300
2019-01-02,Death by Chocolate,180,4,720
2019-01-02,Hot Chocolate Fudge,120,1,120
2019-01-02,Death by Chocolate,180,2,360
2019-01-02,Banana Split,140,3,420
2019-01-02,Hot Chocolate Fudge,120,2,240
2019-01-02,Almond Fudge,150,1,150
2019-01-02,Pista Single Scoop,60,2,120
2019-01-02,Caramel Crunch Double Scoop,100,2,200
2019-01-02,Banana Split,140,5,700
2019-01-02,Death by Chocolate,180,2,360
2019-01-02,Cake Fudge,150,4,600
2019-01-02,Hot Chocolate Fudge,120,3,360
2019-01-02,Vanilla Double Scoop,80,3,240
2019-01-02,Cake Fudge,150,3,450
2019-01-02,Vanilla Double Scoop,80,4,320
2019-01-02,Hot Chocolate Fudge,120,3,360
2019-01-02,Vanilla Double Scoop,80,3,240
2019-01-02,Death by Chocolate,180,3,540
2019-01-02,Vanilla Double Scoop,80,1,80
2019-01-02,Hot Chocolate Fudge,120,4,480
2019-01-02,Death by Chocolate,180,2,360
2019-01-02,Banana Split,140,3,420
2019-01-02,Hot Chocolate Fudge,120,2,240
2019-01-02,Hot Chocolate Fudge,120,5,600
2019-01-02,Butterscotch Single Scoop,60,4,240
2019-01-02,Death by Chocolate,180,1,180
2019-01-02,Butterscotch Single Scoop,60,4,240
2019-01-02,Butterscotch Single Scoop,60,2,120
2019-01-02,Death by Chocolate,180,4,720
2019-01-02,Death by Chocolate,180,3,540
2019-01-02,Death by Chocolate,180,3,540
2019-01-02,Death by Chocolate,180,4,720
2019-01-02,Hot Chocolate Fudge,120,3,360
2019-01-02,Vanilla Double Scoop,80,3,240
2019-01-02,Cafe Caramel,160,1,160
2019-01-02,Cake Fudge,150,5,750
2019-01-02,Vanilla Double Scoop,80,5,400
2019-01-02,Death by Chocolate,180,5,900
2019-01-02,Vanilla Single Scoop,50,5,250
2019-01-02,Death by Chocolate,180,5,900
2019-01-02,Cafe Caramel,160,4,640
2019-01-02,Butterscotch Single Scoop,60,1,60
2019-01-02,Butterscotch Single Scoop,60,3,180
2019-01-02,Vanilla Double Scoop,80,4,320
2019-01-02,Cake Fudge,150,1,150
2019-01-02,Vanilla Double Scoop,80,2,160
2019-01-02,Cafe Caramel,160,5,800
2019-01-02,Fig and Honey Double Scoop,90,3,270
2019-01-02,Hot Chocolate Fudge,120,1,120
2019-01-02,Vanilla Single Scoop,50,2,100
2019-01-02,Hot Chocolate Fudge,120,4,480
2019-01-02,Death by Chocolate,180,4,720
2019-01-02,Vanilla Single Scoop,50,5,250
2019-01-02,Vanilla Double Scoop,80,4,320
2019-01-02,Death by Chocolate,180,4,720
2019-01-02,Hot Chocolate Fudge,120,3,360
2019-01-02,Hot Chocolate Fudge,120,3,360
2019-01-02,Cake Fudge,150,4,600
2019-01-02,Vanilla Single Scoop,50,5,250
2019-01-02,Butterscotch Single Scoop,60,3,180
2019-01-02,Hot Chocolate Fudge,120,5,600
2019-01-02,Fig and Honey Single Scoop,60,4,240
2019-01-02,Vanilla Single Scoop,50,4,200
2019-01-02,Death by Chocolate,180,5,900
2019-01-02,Butterscotch Single Scoop,60,5,300
2019-01-02,Hot Chocolate Fudge,120,1,120
2019-01-02,Vanilla Single Scoop,50,5,250
2019-01-02,Hot Chocolate Fudge,120,2,240
2019-01-02,Butterscotch Single Scoop,60,5,300
2019-01-02,Cake Fudge,150,2,300
2019-01-02,Vanilla Single Scoop,50,4,200
2019-01-02,Vanilla Double Scoop,80,4,320
2019-01-02,Vanilla Double Scoop,80,2,160
2019-01-02,Dry Fruit Double Scoop,90,2,180
2019-01-02,Death by Chocolate,180,5,900
2019-01-02,Death by Chocolate,180,3,540
2019-01-02,Hot Chocolate Fudge,120,4,480
2019-01-02,Cake Fudge,150,5,750
2019-01-02,Vanilla Double Scoop,80,2,160
2019-01-02,Cake Fudge,150,5,750
2019-01-02,Cake Fudge,150,1,150
2019-01-02,Vanilla Double Scoop,80,2,160
2019-01-02,Banana Split,140,5,700
2019-01-02,Caramel Crunch Single Scoop,70,1,70
2019-01-02,Cafe Caramel,160,5,800
2019-01-02,Hot Chocolate Fudge,120,3,360
2019-01-02,Hot Chocolate Fudge,120,4,480
2019-01-02,Death by Chocolate,180,2,360
2019-01-02,Vanilla Double Scoop,80,5,400
2019-01-03,Cafe Caramel,160,3,480
2019-01-03,Cafe Caramel,160,5,800
2019-01-03,Butterscotch Single Scoop,60,4,240
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Hot Chocolate Fudge,120,1,120
2019-01-03,Banana Split,140,3,420
2019-01-03,Fig and Honey Single Scoop,60,3,180
2019-01-03,Hot Chocolate Fudge,120,5,600
2019-01-03,Pista Single Scoop,60,3,180
2019-01-03,Vanilla Double Scoop,80,5,400
2019-01-03,Vanilla Double Scoop,80,4,320
2019-01-03,Cake Fudge,150,2,300
2019-01-03,Hot Chocolate Fudge,120,5,600
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Cake Fudge,150,1,150
2019-01-03,Dry Fruit Double Scoop,90,2,180
2019-01-03,Hot Chocolate Fudge,120,1,120
2019-01-03,Death by Chocolate,180,1,180
2019-01-03,Hot Chocolate Fudge,120,4,480
2019-01-03,Vanilla Single Scoop,50,3,150
2019-01-03,Death by Chocolate,180,5,900
2019-01-03,Rocky Road Single Scoop,50,4,200
2019-01-03,Dry Fruit Double Scoop,90,4,360
2019-01-03,Hot Chocolate Fudge,120,4,480
2019-01-03,Vanilla Double Scoop,80,4,320
2019-01-03,Cafe Caramel,160,4,640
2019-01-03,Vanilla Double Scoop,80,5,400
2019-01-03,Butterscotch Single Scoop,60,5,300
2019-01-03,Rocky Road Double Scoop,80,2,160
2019-01-03,Cake Fudge,150,5,750
2019-01-03,Vanilla Double Scoop,80,1,80
2019-01-03,Death by Chocolate,180,1,180
2019-01-03,Cake Fudge,150,2,300
2019-01-03,Hot Chocolate Fudge,120,3,360
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Hot Chocolate Fudge,120,2,240
2019-01-03,Vanilla Double Scoop,80,5,400
2019-01-03,Cafe Caramel,160,3,480
2019-01-03,Hot Chocolate Fudge,120,4,480
2019-01-03,Cafe Caramel,160,1,160
2019-01-03,Vanilla Double Scoop,80,1,80
2019-01-03,Vanilla Double Scoop,80,4,320
2019-01-03,Butterscotch Single Scoop,60,5,300
2019-01-03,Vanilla Single Scoop,50,4,200
2019-01-03,Rocky Road Double Scoop,80,4,320
2019-01-03,Cafe Caramel,160,5,800
2019-01-03,Cake Fudge,150,5,750
2019-01-03,Vanilla Double Scoop,80,1,80
2019-01-03,Hot Chocolate Fudge,120,5,600
2019-01-03,Hot Chocolate Fudge,120,4,480
2019-01-03,Hot Chocolate Fudge,120,2,240
2019-01-03,Hot Chocolate Fudge,120,4,480
2019-01-03,Hot Chocolate Fudge,120,5,600
2019-01-03,Vanilla Single Scoop,50,1,50
2019-01-03,Death by Chocolate,180,2,360
2019-01-03,Caramel Crunch Double Scoop,100,2,200
2019-01-03,Butterscotch Single Scoop,60,5,300
2019-01-03,Cafe Caramel,160,1,160
2019-01-03,Hot Chocolate Fudge,120,2,240
2019-01-03,Hot Chocolate Fudge,120,3,360
2019-01-03,Cake Fudge,150,2,300
2019-01-03,Butterscotch Single Scoop,60,4,240
2019-01-03,Vanilla Double Scoop,80,1,80
2019-01-03,Hot Chocolate Fudge,120,3,360
2019-01-03,Vanilla Single Scoop,50,5,250
2019-01-03,Hot Chocolate Fudge,120,4,480
2019-01-03,Butterscotch Single Scoop,60,1,60
2019-01-03,Death by Chocolate,180,4,720
2019-01-03,Vanilla Single Scoop,50,4,200
2019-01-03,Cake Fudge,150,2,300
2019-01-03,Cake Fudge,150,1,150
2019-01-03,Hot Chocolate Fudge,120,2,240
2019-01-03,Death by Chocolate,180,1,180
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Vanilla Single Scoop,50,4,200
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Death by Chocolate,180,5,900
2019-01-03,Hot Chocolate Fudge,120,3,360
2019-01-03,Butterscotch Single Scoop,60,5,300
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Butterscotch Single Scoop,60,4,240
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Pista Single Scoop,60,2,120
2019-01-03,Rocky Road Double Scoop,80,4,320
2019-01-03,Hot Chocolate Fudge,120,2,240
2019-01-03,Fig and Honey Double Scoop,90,3,270
2019-01-03,Hot Chocolate Fudge,120,5,600
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Cafe Caramel,160,5,800
2019-01-03,Dry Fruit Single Scoop,60,2,120
2019-01-03,Vanilla Single Scoop,50,2,100
2019-01-03,Death by Chocolate,180,1,180
2019-01-03,Vanilla Double Scoop,80,4,320
2019-01-03,Vanilla Single Scoop,50,5,250
2019-01-03,Vanilla Single Scoop,50,4,200
2019-01-03,Butterscotch Single Scoop,60,3,180
2019-01-03,Hot Chocolate Fudge,120,2,240
2019-01-03,Vanilla Double Scoop,80,4,320
2019-01-03,Hot Chocolate Fudge,120,4,480
2019-01-03,Vanilla Single Scoop,50,2,100
2019-01-03,Cake Fudge,150,4,600
2019-01-03,Hot Chocolate Fudge,120,3,360
2019-01-03,Dew Drop Sundae,150,2,300
2019-01-03,Hot Chocolate Fudge,120,1,120
2019-01-03,Vanilla Single Scoop,50,3,150
2019-01-03,Chocolate Europa Double Scoop,100,4,400
2019-01-03,Butterscotch Single Scoop,60,1,60
2019-01-03,Butterscotch Single Scoop,60,3,180
2019-01-03,Hot Chocolate Fudge,120,2,240
2019-01-03,Pista Double Scoop,90,3,270
2019-01-03,Vanilla Double Scoop,80,1,80
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Hot Chocolate Fudge,120,3,360
2019-01-03,Hot Chocolate Fudge,120,5,600
2019-01-03,Hot Chocolate Fudge,120,1,120
2019-01-03,Butterscotch Single Scoop,60,5,300
2019-01-03,Vanilla Double Scoop,80,2,160
2019-01-03,Pista Double Scoop,90,1,90
2019-01-03,Vanilla Double Scoop,80,3,240
2019-01-03,Cake Fudge,150,2,300
2019-01-03,Cake Fudge,150,2,300
2019-01-03,Hot Chocolate Fudge,120,4,480
2019-01-03,Butterscotch Single Scoop,60,4,240
2019-01-03,Death by Chocolate,180,5,900
2019-01-03,Butterscotch Single Scoop,60,3,180
2019-01-04,Rocky Road Single Scoop,50,5,250
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Vanilla Double Scoop,80,4,320
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Rocky Road Double Scoop,80,1,80
2019-01-04,Death by Chocolate,180,4,720
2019-01-04,Vanilla Double Scoop,80,4,320
2019-01-04,Vanilla Single Scoop,50,4,200
2019-01-04,Cake Fudge,150,5,750
2019-01-04,Caramel Crunch Single Scoop,70,5,350
2019-01-04,Death by Chocolate,180,2,360
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-04,Cake Fudge,150,5,750
2019-01-04,Butterscotch Single Scoop,60,2,120
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Pista Double Scoop,90,2,180
2019-01-04,Vanilla Double Scoop,80,2,160
2019-01-04,Dry Fruit Double Scoop,90,5,450
2019-01-04,Almond Fudge,150,3,450
2019-01-04,Butterscotch Single Scoop,60,1,60
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Dry Fruit Double Scoop,90,1,90
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-04,Hot Chocolate Fudge,120,1,120
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Vanilla Single Scoop,50,4,200
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Death by Chocolate,180,5,900
2019-01-04,Cake Fudge,150,1,150
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Vanilla Single Scoop,50,4,200
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Vanilla Double Scoop,80,1,80
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Pista Single Scoop,60,3,180
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Vanilla Single Scoop,50,4,200
2019-01-04,Trilogy,160,5,800
2019-01-04,Hot Chocolate Fudge,120,1,120
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Hot Chocolate Fudge,120,4,480
2019-01-04,Dry Fruit Single Scoop,60,1,60
2019-01-04,Fig and Honey Double Scoop,90,5,450
2019-01-04,Dew Drop Sundae,150,2,300
2019-01-04,Hot Chocolate Fudge,120,1,120
2019-01-04,Vanilla Single Scoop,50,4,200
2019-01-04,Vanilla Double Scoop,80,1,80
2019-01-04,Cafe Caramel,160,1,160
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Butterscotch Single Scoop,60,4,240
2019-01-04,Hot Chocolate Fudge,120,4,480
2019-01-04,Butterscotch Single Scoop,60,5,300
2019-01-04,Cafe Caramel,160,3,480
2019-01-04,Hot Chocolate Fudge,120,1,120
2019-01-04,Vanilla Double Scoop,80,2,160
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Butterscotch Single Scoop,60,3,180
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Chocolate Europa Single Scoop,70,5,350
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Mint Fudge,120,1,120
2019-01-04,Death by Chocolate,180,4,720
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-04,Chocolate Europa Single Scoop,70,5,350
2019-01-04,Hot Chocolate Fudge,120,1,120
2019-01-04,Death by Chocolate,180,2,360
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-04,Vanilla Single Scoop,50,1,50
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Butterscotch Single Scoop,60,5,300
2019-01-04,Vanilla Single Scoop,50,1,50
2019-01-04,Vanilla Double Scoop,80,1,80
2019-01-04,Vanilla Double Scoop,80,2,160
2019-01-04,Pista Double Scoop,90,1,90
2019-01-04,Death by Chocolate,180,1,180
2019-01-04,Vanilla Single Scoop,50,5,250
2019-01-04,Cafe Caramel,160,5,800
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Cake Fudge,150,2,300
2019-01-04,Vanilla Single Scoop,50,2,100
2019-01-04,Butterscotch Single Scoop,60,4,240
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Cake Fudge,150,3,450
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Vanilla Single Scoop,50,2,100
2019-01-04,Vanilla Single Scoop,50,5,250
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Cake Fudge,150,2,300
2019-01-04,Vanilla Double Scoop,80,2,160
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Cafe Caramel,160,3,480
2019-01-04,Death by Chocolate,180,5,900
2019-01-04,Fig and Honey Double Scoop,90,2,180
2019-01-04,Death by Chocolate,180,1,180
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-04,Cake Fudge,150,2,300
2019-01-04,Butterscotch Single Scoop,60,5,300
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Mint Fudge,120,1,120
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Cafe Caramel,160,4,640
2019-01-04,Dew Drop Sundae,150,1,150
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Caramel Crunch Double Scoop,100,5,500
2019-01-04,Butterscotch Single Scoop,60,5,300
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Cake Fudge,150,2,300
2019-01-04,Vanilla Single Scoop,50,1,50
2019-01-04,Vanilla Double Scoop,80,5,400
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-04,Death by Chocolate,180,5,900
2019-01-04,Butterscotch Single Scoop,60,4,240
2019-01-04,Cake Fudge,150,1,150
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Hot Chocolate Fudge,120,4,480
2019-01-04,Cake Fudge,150,1,150
2019-01-04,Cake Fudge,150,5,750
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Hot Chocolate Fudge,120,4,480
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Hot Chocolate Fudge,120,4,480
2019-01-04,Dry Fruit Single Scoop,60,4,240
2019-01-04,Fig and Honey Single Scoop,60,3,180
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Vanilla Single Scoop,50,4,200
2019-01-04,Pista Double Scoop,90,3,270
2019-01-04,Hot Chocolate Fudge,120,4,480
2019-01-04,Butterscotch Single Scoop,60,4,240
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Chocolate Europa Double Scoop,100,5,500
2019-01-04,Hot Chocolate Fudge,120,1,120
2019-01-04,Death by Chocolate,180,5,900
2019-01-04,Hot Chocolate Fudge,120,1,120
2019-01-04,Caramel Crunch Double Scoop,100,1,100
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Butterscotch Single Scoop,60,4,240
2019-01-04,Cake Fudge,150,1,150
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Butterscotch Single Scoop,60,2,120
2019-01-04,Death by Chocolate,180,1,180
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Butterscotch Double Scoop,90,5,450
2019-01-04,Cafe Caramel,160,5,800
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Butterscotch Single Scoop,60,5,300
2019-01-04,Cake Fudge,150,2,300
2019-01-04,Butterscotch Single Scoop,60,2,120
2019-01-04,Death by Chocolate,180,1,180
2019-01-04,Dry Fruit Double Scoop,90,3,270
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Vanilla Single Scoop,50,2,100
2019-01-04,Vanilla Double Scoop,80,1,80
2019-01-04,Cake Fudge,150,2,300
2019-01-04,Vanilla Double Scoop,80,3,240
2019-01-04,Cafe Caramel,160,5,800
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Hot Chocolate Fudge,120,3,360
2019-01-04,Cake Fudge,150,2,300
2019-01-04,Hot Chocolate Fudge,120,4,480
2019-01-04,Cake Fudge,150,3,450
2019-01-04,Cake Fudge,150,1,150
2019-01-04,Cafe Caramel,160,1,160
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Cake Fudge,150,5,750
2019-01-04,Cake Fudge,150,4,600
2019-01-04,Hot Chocolate Fudge,120,5,600
2019-01-04,Hot Chocolate Fudge,120,2,240
2019-01-05,Death by Chocolate,180,2,360
2019-01-05,Vanilla Double Scoop,80,3,240
2019-01-05,Butterscotch Single Scoop,60,4,240
2019-01-05,Hot Chocolate Fudge,120,1,120
2019-01-05,Vanilla Single Scoop,50,3,150
2019-01-05,Almond Fudge,150,5,750
2019-01-05,Vanilla Double Scoop,80,2,160
2019-01-05,Vanilla Single Scoop,50,2,100
2019-01-05,Vanilla Double Scoop,80,2,160
2019-01-05,Mint Fudge,120,4,480
2019-01-05,Hot Chocolate Fudge,120,2,240
2019-01-05,Cake Fudge,150,4,600
2019-01-05,Vanilla Single Scoop,50,2,100
2019-01-05,Mint Fudge,120,3,360
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Cake Fudge,150,2,300
2019-01-05,Cake Fudge,150,4,600
2019-01-05,Vanilla Single Scoop,50,3,150
2019-01-05,Butterscotch Single Scoop,60,4,240
2019-01-05,Vanilla Double Scoop,80,4,320
2019-01-05,Hot Chocolate Fudge,120,2,240
2019-01-05,Cake Fudge,150,2,300
2019-01-05,Cake Fudge,150,3,450
2019-01-05,Vanilla Single Scoop,50,1,50
2019-01-05,Butterscotch Single Scoop,60,4,240
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Death by Chocolate,180,1,180
2019-01-05,Butterscotch Single Scoop,60,5,300
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Vanilla Double Scoop,80,1,80
2019-01-05,Butterscotch Single Scoop,60,4,240
2019-01-05,Vanilla Double Scoop,80,5,400
2019-01-05,Vanilla Single Scoop,50,3,150
2019-01-05,Vanilla Double Scoop,80,4,320
2019-01-05,Hot Chocolate Fudge,120,4,480
2019-01-05,Vanilla Double Scoop,80,1,80
2019-01-05,Cake Fudge,150,5,750
2019-01-05,Hot Chocolate Fudge,120,2,240
2019-01-05,Fig and Honey Double Scoop,90,5,450
2019-01-05,Dry Fruit Double Scoop,90,4,360
2019-01-05,Vanilla Single Scoop,50,4,200
2019-01-05,Cake Fudge,150,3,450
2019-01-05,Vanilla Double Scoop,80,4,320
2019-01-05,Death by Chocolate,180,3,540
2019-01-05,Vanilla Single Scoop,50,3,150
2019-01-05,Caramel Crunch Double Scoop,100,3,300
2019-01-05,Butterscotch Single Scoop,60,3,180
2019-01-05,Vanilla Single Scoop,50,3,150
2019-01-05,Chocolate Europa Single Scoop,70,4,280
2019-01-05,Hot Chocolate Fudge,120,3,360
2019-01-05,Vanilla Double Scoop,80,4,320
2019-01-05,Death by Chocolate,180,2,360
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Trilogy,160,1,160
2019-01-05,Hot Chocolate Fudge,120,3,360
2019-01-05,Cafe Caramel,160,1,160
2019-01-05,Vanilla Double Scoop,80,5,400
2019-01-05,Hot Chocolate Fudge,120,3,360
2019-01-05,Butterscotch Single Scoop,60,5,300
2019-01-05,Death by Chocolate,180,2,360
2019-01-05,Vanilla Single Scoop,50,5,250
2019-01-05,Dry Fruit Double Scoop,90,5,450
2019-01-05,Hot Chocolate Fudge,120,1,120
2019-01-05,Butterscotch Single Scoop,60,2,120
2019-01-05,Vanilla Single Scoop,50,2,100
2019-01-05,Hot Chocolate Fudge,120,3,360
2019-01-05,Cake Fudge,150,3,450
2019-01-05,Vanilla Double Scoop,80,1,80
2019-01-05,Dew Drop Sundae,150,5,750
2019-01-05,Cake Fudge,150,3,450
2019-01-05,Vanilla Double Scoop,80,4,320
2019-01-05,Vanilla Single Scoop,50,5,250
2019-01-05,Hot Chocolate Fudge,120,1,120
2019-01-05,Vanilla Double Scoop,80,3,240
2019-01-05,Cake Fudge,150,4,600
2019-01-05,Vanilla Double Scoop,80,1,80
2019-01-05,Cake Fudge,150,5,750
2019-01-05,Caramel Crunch Single Scoop,70,2,140
2019-01-05,Hot Chocolate Fudge,120,4,480
2019-01-05,Cake Fudge,150,4,600
2019-01-05,Butterscotch Double Scoop,90,3,270
2019-01-05,Death by Chocolate,180,1,180
2019-01-05,Vanilla Double Scoop,80,5,400
2019-01-05,Almond Fudge,150,2,300
2019-01-05,Fig and Honey Single Scoop,60,3,180
2019-01-05,Cake Fudge,150,4,600
2019-01-05,Cafe Caramel,160,4,640
2019-01-05,Fig and Honey Double Scoop,90,3,270
2019-01-05,Vanilla Double Scoop,80,1,80
2019-01-05,Death by Chocolate,180,3,540
2019-01-05,Vanilla Double Scoop,80,2,160
2019-01-05,Cake Fudge,150,4,600
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Cake Fudge,150,2,300
2019-01-05,Death by Chocolate,180,4,720
2019-01-05,Butterscotch Double Scoop,90,2,180
2019-01-05,Vanilla Single Scoop,50,5,250
2019-01-05,Pista Single Scoop,60,2,120
2019-01-05,Cake Fudge,150,4,600
2019-01-05,Vanilla Double Scoop,80,3,240
2019-01-05,Butterscotch Single Scoop,60,4,240
2019-01-05,Cake Fudge,150,5,750
2019-01-05,Vanilla Single Scoop,50,5,250
2019-01-05,Hot Chocolate Fudge,120,4,480
2019-01-05,Vanilla Double Scoop,80,5,400
2019-01-05,Vanilla Double Scoop,80,4,320
2019-01-05,Butterscotch Single Scoop,60,5,300
2019-01-05,Cafe Caramel,160,3,480
2019-01-05,Cake Fudge,150,2,300
2019-01-05,Death by Chocolate,180,3,540
2019-01-05,Cake Fudge,150,5,750
2019-01-05,Vanilla Single Scoop,50,2,100
2019-01-05,Vanilla Double Scoop,80,1,80
2019-01-05,Pista Single Scoop,60,3,180
2019-01-05,Butterscotch Single Scoop,60,5,300
2019-01-05,Caramel Crunch Single Scoop,70,5,350
2019-01-05,Vanilla Double Scoop,80,3,240
2019-01-05,Hot Chocolate Fudge,120,1,120
2019-01-05,Hot Chocolate Fudge,120,2,240
2019-01-05,Vanilla Double Scoop,80,3,240
2019-01-05,Vanilla Single Scoop,50,1,50
2019-01-05,Cake Fudge,150,3,450
2019-01-05,Cake Fudge,150,2,300
2019-01-05,Vanilla Double Scoop,80,1,80
2019-01-05,Chocolate Europa Double Scoop,100,3,300
2019-01-05,Death by Chocolate,180,1,180
2019-01-05,Butterscotch Double Scoop,90,5,450
2019-01-05,Cafe Caramel,160,5,800
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Butterscotch Single Scoop,60,4,240
2019-01-05,Hot Chocolate Fudge,120,2,240
2019-01-05,Hot Chocolate Fudge,120,3,360
2019-01-05,Hot Chocolate Fudge,120,2,240
2019-01-05,Vanilla Single Scoop,50,1,50
2019-01-05,Hot Chocolate Fudge,120,1,120
2019-01-05,Cake Fudge,150,3,450
2019-01-05,Cafe Caramel,160,3,480
2019-01-05,Hot Chocolate Fudge,120,3,360
2019-01-05,Death by Chocolate,180,1,180
2019-01-05,Death by Chocolate,180,3,540
2019-01-05,Cafe Caramel,160,5,800
2019-01-05,Hot Chocolate Fudge,120,1,120
2019-01-05,Death by Chocolate,180,2,360
2019-01-05,Vanilla Double Scoop,80,1,80
2019-01-05,Butterscotch Single Scoop,60,3,180
2019-01-05,Vanilla Single Scoop,50,3,150
2019-01-05,Butterscotch Single Scoop,60,1,60
2019-01-05,Vanilla Single Scoop,50,3,150
2019-01-05,Vanilla Single Scoop,50,5,250
2019-01-05,Hot Chocolate Fudge,120,4,480
2019-01-05,Butterscotch Single Scoop,60,4,240
2019-01-05,Vanilla Double Scoop,80,3,240
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Cake Fudge,150,5,750
2019-01-05,Hot Chocolate Fudge,120,1,120
2019-01-05,Vanilla Double Scoop,80,4,320
2019-01-05,Cake Fudge,150,3,450
2019-01-05,Cake Fudge,150,3,450
2019-01-05,Cake Fudge,150,2,300
2019-01-05,Butterscotch Single Scoop,60,2,120
2019-01-05,Death by Chocolate,180,5,900
2019-01-05,Death by Chocolate,180,4,720
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Hot Chocolate Fudge,120,2,240
2019-01-05,Caramel Crunch Single Scoop,70,4,280
2019-01-05,Cake Fudge,150,2,300
2019-01-05,Vanilla Single Scoop,50,4,200
2019-01-05,Butterscotch Single Scoop,60,3,180
2019-01-05,Vanilla Single Scoop,50,2,100
2019-01-05,Hot Chocolate Fudge,120,1,120
2019-01-05,Butterscotch Single Scoop,60,3,180
2019-01-05,Cake Fudge,150,1,150
2019-01-05,Butterscotch Double Scoop,90,4,360
2019-01-05,Death by Chocolate,180,1,180
2019-01-06,Vanilla Single Scoop,50,4,200
2019-01-06,Death by Chocolate,180,5,900
2019-01-06,Death by Chocolate,180,1,180
2019-01-06,Dry Fruit Double Scoop,90,4,360
2019-01-06,Death by Chocolate,180,5,900
2019-01-06,Butterscotch Single Scoop,60,5,300
2019-01-06,Vanilla Double Scoop,80,1,80
2019-01-06,Vanilla Double Scoop,80,4,320
2019-01-06,Hot Chocolate Fudge,120,2,240
2019-01-06,Hot Chocolate Fudge,120,1,120
2019-01-06,Death by Chocolate,180,2,360
2019-01-06,Vanilla Single Scoop,50,2,100
2019-01-06,Vanilla Double Scoop,80,3,240
2019-01-06,Death by Chocolate,180,5,900
2019-01-06,Vanilla Single Scoop,50,4,200
2019-01-06,Vanilla Single Scoop,50,3,150
2019-01-06,Chocolate Europa Double Scoop,100,4,400
2019-01-06,Vanilla Double Scoop,80,1,80
2019-01-06,Hot Chocolate Fudge,120,5,600
2019-01-06,Cake Fudge,150,3,450
2019-01-06,Hot Chocolate Fudge,120,3,360
2019-01-06,Vanilla Double Scoop,80,5,400
2019-01-06,Hot Chocolate Fudge,120,4,480
2019-01-06,Vanilla Double Scoop,80,4,320
2019-01-06,Rocky Road Single Scoop,50,3,150
2019-01-06,Vanilla Double Scoop,80,4,320
2019-01-06,Cafe Caramel,160,4,640
2019-01-06,Caramel Crunch Single Scoop,70,1,70
2019-01-06,Mint Fudge,120,3,360
2019-01-06,Hot Chocolate Fudge,120,1,120
2019-01-06,Hot Chocolate Fudge,120,2,240
2019-01-06,Caramel Crunch Double Scoop,100,3,300
2019-01-06,Hot Chocolate Fudge,120,5,600
2019-01-06,Cake Fudge,150,1,150
2019-01-06,Cake Fudge,150,2,300
2019-01-06,Vanilla Single Scoop,50,2,100
2019-01-06,Cafe Caramel,160,5,800
2019-01-06,Butterscotch Single Scoop,60,4,240
2019-01-06,Cake Fudge,150,4,600
2019-01-06,Death by Chocolate,180,4,720
2019-01-06,Vanilla Single Scoop,50,4,200
2019-01-06,Caramel Crunch Single Scoop,70,1,70
2019-01-06,Vanilla Double Scoop,80,5,400
2019-01-06,Butterscotch Single Scoop,60,4,240
2019-01-06,Vanilla Double Scoop,80,4,320
2019-01-06,Hot Chocolate Fudge,120,1,120
2019-01-06,Vanilla Double Scoop,80,2,160
2019-01-06,Rocky Road Single Scoop,50,2,100
2019-01-06,Caramel Crunch Double Scoop,100,3,300
2019-01-06,Death by Chocolate,180,1,180
2019-01-06,Cake Fudge,150,1,150
2019-01-06,Hot Chocolate Fudge,120,5,600
2019-01-06,Vanilla Single Scoop,50,3,150
2019-01-06,Butterscotch Double Scoop,90,3,270
2019-01-06,Hot Chocolate Fudge,120,3,360
2019-01-06,Butterscotch Single Scoop,60,3,180
2019-01-06,Hot Chocolate Fudge,120,4,480
2019-01-06,Vanilla Single Scoop,50,4,200
2019-01-06,Hot Chocolate Fudge,120,3,360
2019-01-06,Vanilla Single Scoop,50,4,200
2019-01-06,Dry Fruit Single Scoop,60,1,60
2019-01-06,Vanilla Double Scoop,80,5,400
2019-01-06,Vanilla Single Scoop,50,5,250
2019-01-06,Cake Fudge,150,1,150
2019-01-06,Butterscotch Single Scoop,60,3,180
2019-01-06,Hot Chocolate Fudge,120,4,480
2019-01-06,Vanilla Single Scoop,50,1,50
2019-01-06,Butterscotch Single Scoop,60,3,180
2019-01-06,Pista Single Scoop,60,1,60
2019-01-06,Butterscotch Single Scoop,60,4,240
2019-01-06,Hot Chocolate Fudge,120,5,600
2019-01-06,Death by Chocolate,180,4,720
2019-01-06,Butterscotch Single Scoop,60,2,120
2019-01-06,Vanilla Single Scoop,50,4,200
2019-01-06,Hot Chocolate Fudge,120,3,360
2019-01-06,Vanilla Single Scoop,50,3,150
2019-01-06,Death by Chocolate,180,4,720
2019-01-06,Butterscotch Single Scoop,60,5,300
2019-01-06,Cafe Caramel,160,1,160
2019-01-06,Vanilla Double Scoop,80,3,240
2019-01-06,Cake Fudge,150,5,750
2019-01-06,Cake Fudge,150,1,150
2019-01-06,Vanilla Single Scoop,50,4,200
2019-01-06,Dry Fruit Single Scoop,60,5,300
2019-01-06,Vanilla Single Scoop,50,2,100
2019-01-06,Cake Fudge,150,3,450
2019-01-06,Vanilla Single Scoop,50,3,150
2019-01-06,Butterscotch Single Scoop,60,4,240
2019-01-06,Hot Chocolate Fudge,120,5,600
2019-01-06,Cake Fudge,150,2,300
2019-01-06,Cake Fudge,150,2,300
2019-01-06,Butterscotch Single Scoop,60,3,180
2019-01-06,Caramel Crunch Double Scoop,100,2,200
2019-01-06,Vanilla Double Scoop,80,5,400
2019-01-06,Butterscotch Single Scoop,60,4,240
2019-01-06,Vanilla Single Scoop,50,5,250
2019-01-06,Vanilla Single Scoop,50,3,150
2019-01-06,Hot Chocolate Fudge,120,5,600
2019-01-06,Cake Fudge,150,2,300
2019-01-06,Vanilla Double Scoop,80,3,240
2019-01-06,Pista Double Scoop,90,3,270
2019-01-06,Caramel Crunch Single Scoop,70,4,280
2019-01-06,Fig and Honey Double Scoop,90,3,270
2019-01-06,Dew Drop Sundae,150,2,300
2019-01-06,Vanilla Single Scoop,50,5,250
2019-01-06,Cafe Caramel,160,1,160
2019-01-06,Cake Fudge,150,5,750
2019-01-06,Death by Chocolate,180,4,720
2019-01-06,Cafe Caramel,160,1,160
2019-01-06,Cake Fudge,150,4,600
2019-01-06,Butterscotch Single Scoop,60,5,300
2019-01-06,Pista Single Scoop,60,1,60
2019-01-06,Vanilla Double Scoop,80,4,320
2019-01-06,Pista Double Scoop,90,2,180
2019-01-06,Hot Chocolate Fudge,120,3,360
2019-01-06,Cake Fudge,150,5,750
2019-01-06,Vanilla Double Scoop,80,4,320
2019-01-06,Death by Chocolate,180,4,720
2019-01-06,Hot Chocolate Fudge,120,3,360
2019-01-06,Mint Fudge,120,2,240
2019-01-06,Cake Fudge,150,4,600
2019-01-06,Death by Chocolate,180,4,720
2019-01-06,Vanilla Single Scoop,50,1,50
2019-01-06,Butterscotch Single Scoop,60,2,120
2019-01-06,Butterscotch Single Scoop,60,1,60
2019-01-06,Cake Fudge,150,3,450
2019-01-06,Cake Fudge,150,4,600
2019-01-06,Hot Chocolate Fudge,120,1,120
2019-01-06,Rocky Road Single Scoop,50,1,50
2019-01-06,Cake Fudge,150,5,750
2019-01-06,Vanilla Double Scoop,80,5,400
2019-01-06,Vanilla Double Scoop,80,3,240
2019-01-06,Rocky Road Single Scoop,50,5,250
2019-01-06,Butterscotch Single Scoop,60,4,240
2019-01-06,Pista Double Scoop,90,3,270
2019-01-06,Cake Fudge,150,1,150
2019-01-06,Vanilla Double Scoop,80,5,400
2019-01-06,Death by Chocolate,180,1,180
2019-01-06,Hot Chocolate Fudge,120,4,480
2019-01-06,Vanilla Double Scoop,80,1,80
2019-01-06,Death by Chocolate,180,4,720
2019-01-06,Cafe Caramel,160,1,160
2019-01-06,Mint Fudge,120,5,600
2019-01-06,Vanilla Double Scoop,80,3,240
2019-01-06,Cake Fudge,150,2,300
2019-01-06,Cafe Caramel,160,4,640
2019-01-06,Cake Fudge,150,3,450
2019-01-06,Hot Chocolate Fudge,120,5,600
2019-01-06,Fig and Honey Double Scoop,90,1,90
2019-01-06,Vanilla Double Scoop,80,1,80
2019-01-06,Vanilla Single Scoop,50,4,200
2019-01-06,Butterscotch Single Scoop,60,2,120
2019-01-06,Hot Chocolate Fudge,120,5,600
2019-01-06,Hot Chocolate Fudge,120,3,360
2019-01-06,Vanilla Double Scoop,80,4,320
2019-01-06,Vanilla Double Scoop,80,3,240
2019-01-06,Almond Fudge,150,1,150
2019-01-06,Butterscotch Single Scoop,60,5,300
2019-01-06,Butterscotch Single Scoop,60,5,300
2019-01-06,Chocolate Europa Double Scoop,100,3,300
2019-01-06,Cake Fudge,150,4,600
2019-01-06,Cake Fudge,150,1,150
2019-01-06,Vanilla Single Scoop,50,2,100
2019-01-06,Vanilla Double Scoop,80,4,320
2019-01-06,Cafe Caramel,160,4,640
2019-01-06,Vanilla Double Scoop,80,3,240
2019-01-06,Vanilla Single Scoop,50,5,250
2019-01-06,Butterscotch Single Scoop,60,1,60
2019-01-06,Vanilla Double Scoop,80,3,240
2019-01-06,Hot Chocolate Fudge,120,4,480
2019-01-07,Death by Chocolate,180,2,360
2019-01-07,Vanilla Double Scoop,80,5,400
2019-01-07,Cake Fudge,150,5,750
2019-01-07,Vanilla Double Scoop,80,5,400
2019-01-07,Vanilla Double Scoop,80,1,80
2019-01-07,Cake Fudge,150,1,150
2019-01-07,Cake Fudge,150,1,150
2019-01-07,Cafe Caramel,160,1,160
2019-01-07,Cake Fudge,150,5,750
2019-01-07,Vanilla Double Scoop,80,5,400
2019-01-07,Hot Chocolate Fudge,120,2,240
2019-01-07,Vanilla Single Scoop,50,3,150
2019-01-07,Cake Fudge,150,3,450
2019-01-07,Vanilla Single Scoop,50,5,250
2019-01-07,Butterscotch Single Scoop,60,3,180
2019-01-07,Cafe Caramel,160,2,320
2019-01-07,Hot Chocolate Fudge,120,3,360
2019-01-07,Almond Fudge,150,4,600
2019-01-07,Vanilla Single Scoop,50,3,150
2019-01-07,Cake Fudge,150,3,450
2019-01-07,Vanilla Double Scoop,80,1,80
2019-01-07,Vanilla Single Scoop,50,4,200
2019-01-07,Chocolate Europa Single Scoop,70,3,210
2019-01-07,Rocky Road Single Scoop,50,1,50
2019-01-07,Vanilla Single Scoop,50,3,150
2019-01-07,Cake Fudge,150,2,300
2019-01-07,Dry Fruit Double Scoop,90,4,360
2019-01-07,Hot Chocolate Fudge,120,2,240
2019-01-07,Death by Chocolate,180,2,360
2019-01-07,Mint Fudge,120,4,480
2019-01-07,Death by Chocolate,180,1,180
2019-01-07,Vanilla Double Scoop,80,5,400
2019-01-07,Fig and Honey Double Scoop,90,4,360
2019-01-07,Butterscotch Single Scoop,60,4,240
2019-01-07,Pista Double Scoop,90,5,450
2019-01-07,Cake Fudge,150,1,150
2019-01-07,Fig and Honey Double Scoop,90,2,180
2019-01-07,Fig and Honey Single Scoop,60,2,120
2019-01-07,Butterscotch Single Scoop,60,3,180
2019-01-07,Hot Chocolate Fudge,120,1,120
2019-01-07,Rocky Road Single Scoop,50,5,250
2019-01-07,Cafe Caramel,160,4,640
2019-01-07,Chocolate Europa Single Scoop,70,2,140
2019-01-07,Vanilla Double Scoop,80,5,400
2019-01-07,Hot Chocolate Fudge,120,3,360
2019-01-07,Cake Fudge,150,3,450
2019-01-07,Butterscotch Single Scoop,60,1,60
2019-01-07,Butterscotch Single Scoop,60,1,60
2019-01-07,Cake Fudge,150,2,300
2019-01-07,Caramel Crunch Single Scoop,70,5,350
2019-01-07,Butterscotch Single Scoop,60,4,240
2019-01-07,Butterscotch Double Scoop,90,2,180
2019-01-07,Vanilla Single Scoop,50,5,250
2019-01-07,Hot Chocolate Fudge,120,4,480
2019-01-07,Vanilla Single Scoop,50,3,150
2019-01-07,Vanilla Single Scoop,50,4,200
2019-01-07,Vanilla Single Scoop,50,2,100
2019-01-07,Butterscotch Single Scoop,60,2,120
2019-01-07,Vanilla Double Scoop,80,5,400
2019-01-07,Cafe Caramel,160,1,160
2019-01-07,Butterscotch Single Scoop,60,4,240
2019-01-07,Vanilla Double Scoop,80,4,320
2019-01-07,Vanilla Double Scoop,80,5,400
2019-01-07,Butterscotch Single Scoop,60,1,60
2019-01-07,Vanilla Double Scoop,80,5,400
2019-01-07,Hot Chocolate Fudge,120,5,600
2019-01-07,Cake Fudge,150,3,450
2019-01-07,Cake Fudge,150,5,750
2019-01-07,Cafe Caramel,160,2,320
2019-01-07,Vanilla Single Scoop,50,1,50
2019-01-07,Pista Double Scoop,90,1,90
2019-01-07,Death by Chocolate,180,4,720
2019-01-07,Hot Chocolate Fudge,120,5,600
2019-01-07,Hot Chocolate Fudge,120,4,480
2019-01-07,Vanilla Single Scoop,50,1,50
2019-01-07,Hot Chocolate Fudge,120,2,240
2019-01-07,Cake Fudge,150,3,450
2019-01-07,Butterscotch Double Scoop,90,3,270
2019-01-07,Chocolate Europa Double Scoop,100,1,100
2019-01-07,Hot Chocolate Fudge,120,4,480
2019-01-07,Fig and Honey Double Scoop,90,3,270
2019-01-07,Vanilla Double Scoop,80,4,320
2019-01-07,Cafe Caramel,160,4,640
2019-01-07,Vanilla Single Scoop,50,1,50
2019-01-07,Vanilla Double Scoop,80,4,320
2019-01-07,Butterscotch Single Scoop,60,4,240
2019-01-07,Vanilla Double Scoop,80,4,320
2019-01-07,Butterscotch Single Scoop,60,3,180
2019-01-07,Vanilla Double Scoop,80,4,320
2019-01-07,Cake Fudge,150,4,600
2019-01-07,Vanilla Double Scoop,80,4,320
2019-01-07,Hot Chocolate Fudge,120,2,240
2019-01-07,Hot Chocolate Fudge,120,5,600
2019-01-07,Cake Fudge,150,3,450
2019-01-07,Vanilla Single Scoop,50,2,100
2019-01-07,Death by Chocolate,180,5,900
2019-01-07,Dry Fruit Double Scoop,90,3,270
2019-01-07,Hot Chocolate Fudge,120,2,240
2019-01-07,Hot Chocolate Fudge,120,2,240
2019-01-07,Vanilla Single Scoop,50,2,100
2019-01-07,Vanilla Double Scoop,80,1,80
2019-01-07,Vanilla Single Scoop,50,2,100
2019-01-07,Vanilla Double Scoop,80,4,320
2019-01-07,Cake Fudge,150,2,300
2019-01-07,Death by Chocolate,180,5,900
2019-01-07,Cake Fudge,150,4,600
2019-01-07,Dry Fruit Single Scoop,60,4,240
2019-01-07,Butterscotch Single Scoop,60,5,300
2019-01-07,Butterscotch Single Scoop,60,4,240
2019-01-07,Cafe Caramel,160,4,640
2019-01-07,Hot Chocolate Fudge,120,2,240
2019-01-07,Butterscotch Single Scoop,60,1,60
2019-01-07,Hot Chocolate Fudge,120,4,480
2019-01-07,Hot Chocolate Fudge,120,5,600
2019-01-07,Death by Chocolate,180,4,720
2019-01-07,Hot Chocolate Fudge,120,1,120
2019-01-07,Death by Chocolate,180,1,180
2019-01-07,Vanilla Single Scoop,50,5,250
2019-01-07,Butterscotch Single Scoop,60,2,120
2019-01-07,Hot Chocolate Fudge,120,1,120
2019-01-07,Hot Chocolate Fudge,120,3,360
2019-01-07,Caramel Crunch Double Scoop,100,4,400
2019-01-07,Cafe Caramel,160,3,480
2019-01-07,Hot Chocolate Fudge,120,1,120
2019-01-07,Cake Fudge,150,3,450
2019-01-07,Vanilla Single Scoop,50,1,50
2019-01-07,Vanilla Single Scoop,50,4,200
2019-01-07,Death by Chocolate,180,2,360
2019-01-07,Hot Chocolate Fudge,120,5,600
2019-01-08,Caramel Crunch Double Scoop,100,3,300
2019-01-08,Cake Fudge,150,1,150
2019-01-08,Vanilla Double Scoop,80,2,160
2019-01-08,Cake Fudge,150,5,750
2019-01-08,Hot Chocolate Fudge,120,1,120
2019-01-08,Mint Fudge,120,2,240
2019-01-08,Vanilla Single Scoop,50,4,200
2019-01-08,Vanilla Double Scoop,80,2,160
2019-01-08,Hot Chocolate Fudge,120,3,360
2019-01-08,Butterscotch Single Scoop,60,4,240
2019-01-08,Cake Fudge,150,3,450
2019-01-08,Cafe Caramel,160,1,160
2019-01-08,Vanilla Double Scoop,80,3,240
2019-01-08,Hot Chocolate Fudge,120,4,480
2019-01-08,Cafe Caramel,160,1,160
2019-01-08,Death by Chocolate,180,5,900
2019-01-08,Cake Fudge,150,4,600
2019-01-08,Vanilla Double Scoop,80,4,320
2019-01-08,Hot Chocolate Fudge,120,1,120
2019-01-08,Butterscotch Single Scoop,60,3,180
2019-01-08,Hot Chocolate Fudge,120,3,360
2019-01-08,Vanilla Double Scoop,80,4,320
2019-01-08,Vanilla Single Scoop,50,5,250
2019-01-08,Vanilla Double Scoop,80,4,320
2019-01-08,Cafe Caramel,160,1,160
2019-01-08,Trilogy,160,2,320
2019-01-08,Cafe Caramel,160,1,160
2019-01-08,Vanilla Single Scoop,50,5,250
2019-01-08,Vanilla Single Scoop,50,3,150
2019-01-08,Death by Chocolate,180,1,180
2019-01-08,Death by Chocolate,180,2,360
2019-01-08,Hot Chocolate Fudge,120,1,120
2019-01-08,Hot Chocolate Fudge,120,5,600
2019-01-08,Butterscotch Single Scoop,60,4,240
2019-01-08,Vanilla Double Scoop,80,3,240
2019-01-08,Cake Fudge,150,1,150
2019-01-08,Death by Chocolate,180,2,360
2019-01-08,Vanilla Double Scoop,80,2,160
2019-01-08,Cake Fudge,150,1,150
2019-01-08,Hot Chocolate Fudge,120,5,600
2019-01-08,Butterscotch Single Scoop,60,3,180
2019-01-08,Cafe Caramel,160,1,160
2019-01-08,Cake Fudge,150,5,750
2019-01-08,Butterscotch Single Scoop,60,1,60
2019-01-08,Vanilla Single Scoop,50,3,150
2019-01-08,Hot Chocolate Fudge,120,5,600
2019-01-08,Vanilla Double Scoop,80,2,160
2019-01-08,Fig and Honey Double Scoop,90,1,90
2019-01-08,Vanilla Double Scoop,80,5,400
2019-01-08,Vanilla Double Scoop,80,5,400
2019-01-08,Dry Fruit Double Scoop,90,4,360
2019-01-08,Cafe Caramel,160,4,640
2019-01-08,Chocolate Europa Double Scoop,100,2,200
2019-01-08,Cafe Caramel,160,5,800
2019-01-08,Cake Fudge,150,4,600
2019-01-08,Cake Fudge,150,1,150
2019-01-08,Butterscotch Double Scoop,90,4,360
2019-01-08,Butterscotch Single Scoop,60,1,60
2019-01-08,Pista Single Scoop,60,4,240
2019-01-08,Cake Fudge,150,5,750
2019-01-08,Butterscotch Single Scoop,60,4,240
2019-01-08,Butterscotch Single Scoop,60,2,120
2019-01-08,Chocolate Europa Single Scoop,70,5,350
2019-01-08,Cake Fudge,150,3,450
2019-01-08,Hot Chocolate Fudge,120,1,120
2019-01-08,Cake Fudge,150,4,600
2019-01-08,Vanilla Double Scoop,80,3,240
2019-01-08,Hot Chocolate Fudge,120,4,480
2019-01-08,Vanilla Double Scoop,80,4,320
2019-01-08,Vanilla Single Scoop,50,4,200
2019-01-08,Hot Chocolate Fudge,120,3,360
2019-01-08,Pista Single Scoop,60,5,300
2019-01-08,Cake Fudge,150,1,150
2019-01-08,Death by Chocolate,180,2,360
2019-01-08,Hot Chocolate Fudge,120,2,240
2019-01-08,Butterscotch Single Scoop,60,5,300
2019-01-08,Hot Chocolate Fudge,120,2,240
2019-01-08,Vanilla Single Scoop,50,4,200
2019-01-08,Cake Fudge,150,4,600
2019-01-08,Death by Chocolate,180,3,540
2019-01-08,Caramel Crunch Double Scoop,100,5,500
2019-01-08,Butterscotch Single Scoop,60,4,240
2019-01-08,Vanilla Double Scoop,80,4,320
2019-01-08,Cake Fudge,150,1,150
2019-01-08,Rocky Road Single Scoop,50,3,150
2019-01-08,Death by Chocolate,180,2,360
2019-01-08,Hot Chocolate Fudge,120,5,600
2019-01-08,Cake Fudge,150,5,750
2019-01-08,Fig and Honey Double Scoop,90,1,90
2019-01-08,Vanilla Double Scoop,80,5,400
2019-01-08,Hot Chocolate Fudge,120,2,240
2019-01-08,Vanilla Double Scoop,80,4,320
2019-01-08,Vanilla Double Scoop,80,4,320
2019-01-08,Dry Fruit Double Scoop,90,3,270
2019-01-08,Trilogy,160,4,640
2019-01-08,Caramel Crunch Double Scoop,100,1,100
2019-01-08,Cafe Caramel,160,3,480
2019-01-08,Vanilla Single Scoop,50,3,150
2019-01-08,Butterscotch Single Scoop,60,4,240
2019-01-08,Vanilla Double Scoop,80,3,240
2019-01-08,Cake Fudge,150,2,300
2019-01-08,Hot Chocolate Fudge,120,4,480
2019-01-08,Pista Double Scoop,90,3,270
2019-01-08,Vanilla Single Scoop,50,2,100
2019-01-08,Caramel Crunch Single Scoop,70,2,140
2019-01-08,Vanilla Single Scoop,50,1,50
2019-01-08,Cake Fudge,150,1,150
2019-01-08,Pista Double Scoop,90,4,360
2019-01-08,Death by Chocolate,180,5,900
2019-01-08,Vanilla Single Scoop,50,4,200
2019-01-08,Cake Fudge,150,5,750
2019-01-08,Cake Fudge,150,5,750
2019-01-08,Cafe Caramel,160,4,640
2019-01-08,Hot Chocolate Fudge,120,4,480
2019-01-08,Vanilla Double Scoop,80,1,80
2019-01-08,Cafe Caramel,160,1,160
2019-01-08,Hot Chocolate Fudge,120,5,600
2019-01-08,Vanilla Double Scoop,80,1,80
2019-01-09,Fig and Honey Single Scoop,60,4,240
2019-01-09,Dew Drop Sundae,150,2,300
2019-01-09,Vanilla Double Scoop,80,2,160
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Pista Single Scoop,60,5,300
2019-01-09,Hot Chocolate Fudge,120,3,360
2019-01-09,Vanilla Single Scoop,50,2,100
2019-01-09,Cafe Caramel,160,4,640
2019-01-09,Cake Fudge,150,3,450
2019-01-09,Vanilla Double Scoop,80,1,80
2019-01-09,Dry Fruit Double Scoop,90,2,180
2019-01-09,Caramel Crunch Double Scoop,100,4,400
2019-01-09,Death by Chocolate,180,2,360
2019-01-09,Vanilla Double Scoop,80,3,240
2019-01-09,Cake Fudge,150,2,300
2019-01-09,Vanilla Double Scoop,80,1,80
2019-01-09,Vanilla Double Scoop,80,2,160
2019-01-09,Cake Fudge,150,3,450
2019-01-09,Vanilla Double Scoop,80,2,160
2019-01-09,Butterscotch Double Scoop,90,4,360
2019-01-09,Cake Fudge,150,3,450
2019-01-09,Hot Chocolate Fudge,120,2,240
2019-01-09,Death by Chocolate,180,1,180
2019-01-09,Vanilla Double Scoop,80,5,400
2019-01-09,Hot Chocolate Fudge,120,5,600
2019-01-09,Butterscotch Single Scoop,60,5,300
2019-01-09,Hot Chocolate Fudge,120,4,480
2019-01-09,Hot Chocolate Fudge,120,5,600
2019-01-09,Vanilla Double Scoop,80,3,240
2019-01-09,Hot Chocolate Fudge,120,4,480
2019-01-09,Dry Fruit Double Scoop,90,3,270
2019-01-09,Vanilla Double Scoop,80,1,80
2019-01-09,Death by Chocolate,180,1,180
2019-01-09,Vanilla Single Scoop,50,5,250
2019-01-09,Vanilla Single Scoop,50,3,150
2019-01-09,Cafe Caramel,160,2,320
2019-01-09,Vanilla Single Scoop,50,5,250
2019-01-09,Hot Chocolate Fudge,120,3,360
2019-01-09,Rocky Road Double Scoop,80,1,80
2019-01-09,Hot Chocolate Fudge,120,3,360
2019-01-09,Vanilla Double Scoop,80,2,160
2019-01-09,Vanilla Double Scoop,80,4,320
2019-01-09,Vanilla Double Scoop,80,3,240
2019-01-09,Vanilla Double Scoop,80,1,80
2019-01-09,Cake Fudge,150,5,750
2019-01-09,Almond Fudge,150,1,150
2019-01-09,Cafe Caramel,160,1,160
2019-01-09,Cafe Caramel,160,2,320
2019-01-09,Cake Fudge,150,3,450
2019-01-09,Hot Chocolate Fudge,120,4,480
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Hot Chocolate Fudge,120,2,240
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Death by Chocolate,180,4,720
2019-01-09,Vanilla Double Scoop,80,4,320
2019-01-09,Cafe Caramel,160,3,480
2019-01-09,Vanilla Double Scoop,80,2,160
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Butterscotch Single Scoop,60,4,240
2019-01-09,Vanilla Single Scoop,50,4,200
2019-01-09,Vanilla Double Scoop,80,3,240
2019-01-09,Vanilla Single Scoop,50,4,200
2019-01-09,Vanilla Double Scoop,80,5,400
2019-01-09,Vanilla Double Scoop,80,1,80
2019-01-09,Butterscotch Double Scoop,90,1,90
2019-01-09,Vanilla Single Scoop,50,1,50
2019-01-09,Death by Chocolate,180,2,360
2019-01-09,Hot Chocolate Fudge,120,2,240
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Butterscotch Single Scoop,60,1,60
2019-01-09,Banana Split,140,4,560
2019-01-09,Death by Chocolate,180,5,900
2019-01-09,Death by Chocolate,180,5,900
2019-01-09,Cake Fudge,150,2,300
2019-01-09,Caramel Crunch Single Scoop,70,5,350
2019-01-09,Death by Chocolate,180,5,900
2019-01-09,Butterscotch Single Scoop,60,5,300
2019-01-09,Vanilla Double Scoop,80,2,160
2019-01-09,Vanilla Single Scoop,50,1,50
2019-01-09,Butterscotch Single Scoop,60,3,180
2019-01-09,Cake Fudge,150,4,600
2019-01-09,Rocky Road Single Scoop,50,4,200
2019-01-09,Cake Fudge,150,2,300
2019-01-09,Rocky Road Double Scoop,80,5,400
2019-01-09,Cake Fudge,150,4,600
2019-01-09,Vanilla Single Scoop,50,3,150
2019-01-09,Vanilla Double Scoop,80,5,400
2019-01-09,Butterscotch Single Scoop,60,4,240
2019-01-09,Butterscotch Single Scoop,60,4,240
2019-01-09,Pista Single Scoop,60,1,60
2019-01-09,Cafe Caramel,160,4,640
2019-01-09,Cafe Caramel,160,2,320
2019-01-09,Butterscotch Single Scoop,60,3,180
2019-01-09,Death by Chocolate,180,3,540
2019-01-09,Cake Fudge,150,5,750
2019-01-09,Butterscotch Single Scoop,60,5,300
2019-01-09,Hot Chocolate Fudge,120,3,360
2019-01-09,Vanilla Double Scoop,80,3,240
2019-01-09,Cake Fudge,150,3,450
2019-01-09,Butterscotch Single Scoop,60,1,60
2019-01-09,Vanilla Single Scoop,50,3,150
2019-01-09,Cake Fudge,150,2,300
2019-01-09,Vanilla Double Scoop,80,3,240
2019-01-09,Caramel Crunch Single Scoop,70,5,350
2019-01-09,Cake Fudge,150,2,300
2019-01-09,Cake Fudge,150,2,300
2019-01-09,Butterscotch Single Scoop,60,5,300
2019-01-09,Vanilla Double Scoop,80,4,320
2019-01-09,Butterscotch Single Scoop,60,2,120
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Vanilla Single Scoop,50,2,100
2019-01-09,Vanilla Double Scoop,80,1,80
2019-01-09,Trilogy,160,5,800
2019-01-09,Death by Chocolate,180,4,720
2019-01-09,Vanilla Single Scoop,50,3,150
2019-01-09,Pista Single Scoop,60,2,120
2019-01-09,Pista Double Scoop,90,5,450
2019-01-09,Hot Chocolate Fudge,120,4,480
2019-01-09,Vanilla Double Scoop,80,2,160
2019-01-09,Vanilla Double Scoop,80,2,160
2019-01-09,Hot Chocolate Fudge,120,4,480
2019-01-09,Vanilla Double Scoop,80,1,80
2019-01-09,Cake Fudge,150,4,600
2019-01-09,Hot Chocolate Fudge,120,2,240
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Butterscotch Single Scoop,60,2,120
2019-01-09,Hot Chocolate Fudge,120,1,120
2019-01-09,Vanilla Single Scoop,50,5,250
2019-01-09,Death by Chocolate,180,5,900
2019-01-09,Vanilla Double Scoop,80,5,400
2019-01-09,Cake Fudge,150,4,600
2019-01-09,Pista Single Scoop,60,1,60
2019-01-09,Butterscotch Single Scoop,60,3,180
2019-01-09,Hot Chocolate Fudge,120,5,600
2019-01-09,Hot Chocolate Fudge,120,3,360
2019-01-09,Hot Chocolate Fudge,120,3,360
2019-01-09,Butterscotch Single Scoop,60,4,240
2019-01-10,Death by Chocolate,180,5,900
2019-01-10,Hot Chocolate Fudge,120,2,240
2019-01-10,Dry Fruit Single Scoop,60,2,120
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Cake Fudge,150,4,600
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Vanilla Double Scoop,80,2,160
2019-01-10,Death by Chocolate,180,3,540
2019-01-10,Vanilla Single Scoop,50,2,100
2019-01-10,Cafe Caramel,160,5,800
2019-01-10,Cake Fudge,150,4,600
2019-01-10,Vanilla Single Scoop,50,3,150
2019-01-10,Rocky Road Single Scoop,50,5,250
2019-01-10,Death by Chocolate,180,5,900
2019-01-10,Vanilla Single Scoop,50,4,200
2019-01-10,Hot Chocolate Fudge,120,3,360
2019-01-10,Pista Double Scoop,90,4,360
2019-01-10,Hot Chocolate Fudge,120,5,600
2019-01-10,Caramel Crunch Double Scoop,100,3,300
2019-01-10,Vanilla Double Scoop,80,5,400
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Butterscotch Single Scoop,60,1,60
2019-01-10,Cake Fudge,150,1,150
2019-01-10,Caramel Crunch Double Scoop,100,2,200
2019-01-10,Rocky Road Single Scoop,50,4,200
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Cafe Caramel,160,1,160
2019-01-10,Hot Chocolate Fudge,120,5,600
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Hot Chocolate Fudge,120,5,600
2019-01-10,Cafe Caramel,160,3,480
2019-01-10,Hot Chocolate Fudge,120,1,120
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Dry Fruit Single Scoop,60,4,240
2019-01-10,Vanilla Double Scoop,80,5,400
2019-01-10,Vanilla Single Scoop,50,2,100
2019-01-10,Dry Fruit Double Scoop,90,5,450
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Vanilla Double Scoop,80,5,400
2019-01-10,Vanilla Single Scoop,50,3,150
2019-01-10,Vanilla Double Scoop,80,3,240
2019-01-10,Vanilla Single Scoop,50,1,50
2019-01-10,Vanilla Double Scoop,80,2,160
2019-01-10,Butterscotch Single Scoop,60,3,180
2019-01-10,Rocky Road Double Scoop,80,3,240
2019-01-10,Butterscotch Single Scoop,60,2,120
2019-01-10,Butterscotch Single Scoop,60,5,300
2019-01-10,Cake Fudge,150,5,750
2019-01-10,Vanilla Double Scoop,80,3,240
2019-01-10,Cake Fudge,150,5,750
2019-01-10,Caramel Crunch Double Scoop,100,2,200
2019-01-10,Vanilla Double Scoop,80,2,160
2019-01-10,Vanilla Double Scoop,80,3,240
2019-01-10,Vanilla Single Scoop,50,5,250
2019-01-10,Butterscotch Single Scoop,60,1,60
2019-01-10,Butterscotch Single Scoop,60,1,60
2019-01-10,Hot Chocolate Fudge,120,3,360
2019-01-10,Hot Chocolate Fudge,120,2,240
2019-01-10,Hot Chocolate Fudge,120,3,360
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Vanilla Single Scoop,50,4,200
2019-01-10,Death by Chocolate,180,3,540
2019-01-10,Hot Chocolate Fudge,120,2,240
2019-01-10,Cake Fudge,150,1,150
2019-01-10,Cake Fudge,150,5,750
2019-01-10,Cake Fudge,150,4,600
2019-01-10,Death by Chocolate,180,5,900
2019-01-10,Caramel Crunch Single Scoop,70,4,280
2019-01-10,Fig and Honey Double Scoop,90,4,360
2019-01-10,Vanilla Single Scoop,50,1,50
2019-01-10,Hot Chocolate Fudge,120,1,120
2019-01-10,Hot Chocolate Fudge,120,1,120
2019-01-10,Vanilla Single Scoop,50,5,250
2019-01-10,Dry Fruit Single Scoop,60,5,300
2019-01-10,Vanilla Double Scoop,80,2,160
2019-01-10,Cafe Caramel,160,3,480
2019-01-10,Caramel Crunch Single Scoop,70,2,140
2019-01-10,Hot Chocolate Fudge,120,4,480
2019-01-10,Vanilla Double Scoop,80,3,240
2019-01-10,Hot Chocolate Fudge,120,2,240
2019-01-10,Vanilla Single Scoop,50,4,200
2019-01-10,Cake Fudge,150,5,750
2019-01-10,Cake Fudge,150,5,750
2019-01-10,Death by Chocolate,180,4,720
2019-01-10,Vanilla Single Scoop,50,1,50
2019-01-10,Cake Fudge,150,3,450
2019-01-10,Vanilla Single Scoop,50,1,50
2019-01-10,Cake Fudge,150,5,750
2019-01-10,Mint Fudge,120,2,240
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Vanilla Single Scoop,50,4,200
2019-01-10,Hot Chocolate Fudge,120,3,360
2019-01-10,Cake Fudge,150,5,750
2019-01-10,Hot Chocolate Fudge,120,4,480
2019-01-10,Vanilla Single Scoop,50,5,250
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Butterscotch Single Scoop,60,3,180
2019-01-10,Vanilla Double Scoop,80,3,240
2019-01-10,Vanilla Single Scoop,50,3,150
2019-01-10,Hot Chocolate Fudge,120,1,120
2019-01-10,Cafe Caramel,160,2,320
2019-01-10,Vanilla Double Scoop,80,3,240
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Death by Chocolate,180,2,360
2019-01-10,Death by Chocolate,180,2,360
2019-01-10,Hot Chocolate Fudge,120,5,600
2019-01-10,Vanilla Double Scoop,80,5,400
2019-01-10,Hot Chocolate Fudge,120,4,480
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Butterscotch Single Scoop,60,3,180
2019-01-10,Caramel Crunch Single Scoop,70,4,280
2019-01-10,Vanilla Double Scoop,80,1,80
2019-01-10,Vanilla Single Scoop,50,3,150
2019-01-10,Cake Fudge,150,4,600
2019-01-10,Pista Double Scoop,90,5,450
2019-01-10,Butterscotch Double Scoop,90,5,450
2019-01-10,Death by Chocolate,180,2,360
2019-01-10,Hot Chocolate Fudge,120,5,600
2019-01-10,Hot Chocolate Fudge,120,3,360
2019-01-10,Rocky Road Single Scoop,50,1,50
2019-01-10,Death by Chocolate,180,5,900
2019-01-10,Vanilla Single Scoop,50,3,150
2019-01-10,Death by Chocolate,180,3,540
2019-01-10,Vanilla Double Scoop,80,5,400
2019-01-10,Cake Fudge,150,3,450
2019-01-10,Vanilla Single Scoop,50,2,100
2019-01-10,Hot Chocolate Fudge,120,3,360
2019-01-10,Cake Fudge,150,3,450
2019-01-10,Vanilla Double Scoop,80,3,240
2019-01-10,Pista Single Scoop,60,1,60
2019-01-10,Hot Chocolate Fudge,120,5,600
2019-01-10,Cake Fudge,150,1,150
2019-01-10,Hot Chocolate Fudge,120,1,120
2019-01-10,Pista Single Scoop,60,2,120
2019-01-10,Vanilla Double Scoop,80,5,400
2019-01-10,Butterscotch Single Scoop,60,4,240
2019-01-10,Vanilla Single Scoop,50,1,50
2019-01-10,Hot Chocolate Fudge,120,3,360
2019-01-11,Cake Fudge,150,2,300
2019-01-11,Butterscotch Single Scoop,60,2,120
2019-01-11,Cafe Caramel,160,3,480
2019-01-11,Hot Chocolate Fudge,120,3,360
2019-01-11,Cake Fudge,150,2,300
2019-01-11,Vanilla Single Scoop,50,5,250
2019-01-11,Butterscotch Single Scoop,60,5,300
2019-01-11,Cake Fudge,150,1,150
2019-01-11,Vanilla Double Scoop,80,5,400
2019-01-11,Vanilla Double Scoop,80,5,400
2019-01-11,Vanilla Double Scoop,80,4,320
2019-01-11,Vanilla Single Scoop,50,5,250
2019-01-11,Pista Double Scoop,90,2,180
2019-01-11,Hot Chocolate Fudge,120,5,600
2019-01-11,Chocolate Europa Double Scoop,100,5,500
2019-01-11,Hot Chocolate Fudge,120,2,240
2019-01-11,Pista Double Scoop,90,3,270
2019-01-11,Vanilla Double Scoop,80,5,400
2019-01-11,Vanilla Double Scoop,80,3,240
2019-01-11,Butterscotch Single Scoop,60,1,60
2019-01-11,Cafe Caramel,160,3,480
2019-01-11,Cake Fudge,150,1,150
2019-01-11,Chocolate Europa Double Scoop,100,2,200
2019-01-11,Vanilla Single Scoop,50,5,250
2019-01-11,Vanilla Double Scoop,80,4,320
2019-01-11,Mint Fudge,120,2,240
2019-01-11,Hot Chocolate Fudge,120,2,240
2019-01-11,Caramel Crunch Double Scoop,100,5,500
2019-01-11,Hot Chocolate Fudge,120,2,240
2019-01-11,Cake Fudge,150,2,300
2019-01-11,Hot Chocolate Fudge,120,3,360
2019-01-11,Cafe Caramel,160,5,800
2019-01-11,Hot Chocolate Fudge,120,4,480
2019-01-11,Death by Chocolate,180,3,540
2019-01-11,Death by Chocolate,180,3,540
2019-01-11,Fig and Honey Single Scoop,60,4,240
2019-01-11,Cake Fudge,150,3,450
2019-01-11,Vanilla Double Scoop,80,2,160
2019-01-11,Cake Fudge,150,3,450
2019-01-11,Rocky Road Single Scoop,50,2,100
2019-01-11,Vanilla Single Scoop,50,2,100
2019-01-11,Cake Fudge,150,3,450
2019-01-11,Hot Chocolate Fudge,120,1,120
2019-01-11,Vanilla Single Scoop,50,1,50
2019-01-11,Pista Single Scoop,60,4,240
2019-01-11,Cake Fudge,150,2,300
2019-01-11,Hot Chocolate Fudge,120,5,600
2019-01-11,Vanilla Double Scoop,80,2,160
2019-01-11,Cake Fudge,150,1,150
2019-01-11,Vanilla Single Scoop,50,4,200
2019-01-11,Cafe Caramel,160,5,800
2019-01-11,Dry Fruit Double Scoop,90,3,270
2019-01-11,Vanilla Double Scoop,80,5,400
2019-01-11,Pista Single Scoop,60,4,240
2019-01-11,Vanilla Double Scoop,80,4,320
2019-01-11,Hot Chocolate Fudge,120,2,240
2019-01-11,Vanilla Double Scoop,80,3,240
2019-01-11,Vanilla Double Scoop,80,1,80
2019-01-11,Cake Fudge,150,5,750
2019-01-11,Cake Fudge,150,5,750
2019-01-11,Cake Fudge,150,4,600
2019-01-11,Butterscotch Single Scoop,60,5,300
2019-01-11,Vanilla Double Scoop,80,1,80
2019-01-11,Dew Drop Sundae,150,1,150
2019-01-11,Hot Chocolate Fudge,120,5,600
2019-01-11,Butterscotch Single Scoop,60,3,180
2019-01-11,Butterscotch Single Scoop,60,1,60
2019-01-11,Death by Chocolate,180,4,720
2019-01-11,Cake Fudge,150,5,750
2019-01-11,Butterscotch Single Scoop,60,1,60
2019-01-11,Hot Chocolate Fudge,120,2,240
2019-01-11,Vanilla Double Scoop,80,4,320
2019-01-11,Hot Chocolate Fudge,120,5,600
2019-01-11,Hot Chocolate Fudge,120,4,480
2019-01-11,Vanilla Single Scoop,50,2,100
2019-01-11,Pista Double Scoop,90,2,180
2019-01-11,Hot Chocolate Fudge,120,1,120
2019-01-11,Dry Fruit Double Scoop,90,1,90
2019-01-11,Hot Chocolate Fudge,120,3,360
2019-01-11,Hot Chocolate Fudge,120,5,600
2019-01-11,Death by Chocolate,180,2,360
2019-01-11,Butterscotch Single Scoop,60,3,180
2019-01-11,Cake Fudge,150,2,300
2019-01-11,Cafe Caramel,160,3,480
2019-01-11,Cake Fudge,150,5,750
2019-01-11,Butterscotch Single Scoop,60,4,240
2019-01-11,Cafe Caramel,160,3,480
2019-01-11,Death by Chocolate,180,1,180
2019-01-11,Cafe Caramel,160,3,480
2019-01-11,Hot Chocolate Fudge,120,2,240
2019-01-11,Pista Double Scoop,90,5,450
2019-01-11,Butterscotch Single Scoop,60,4,240
2019-01-11,Hot Chocolate Fudge,120,3,360
2019-01-11,Hot Chocolate Fudge,120,1,120
2019-01-11,Death by Chocolate,180,2,360
2019-01-11,Cake Fudge,150,2,300
2019-01-11,Butterscotch Single Scoop,60,3,180
2019-01-11,Vanilla Double Scoop,80,2,160
2019-01-11,Vanilla Single Scoop,50,3,150
2019-01-11,Hot Chocolate Fudge,120,1,120
2019-01-11,Hot Chocolate Fudge,120,4,480
2019-01-11,Hot Chocolate Fudge,120,2,240
2019-01-11,Vanilla Single Scoop,50,2,100
2019-01-11,Butterscotch Single Scoop,60,1,60
2019-01-11,Vanilla Single Scoop,50,5,250
2019-01-11,Vanilla Double Scoop,80,5,400
2019-01-11,Vanilla Double Scoop,80,4,320
2019-01-11,Vanilla Single Scoop,50,4,200
2019-01-11,Vanilla Double Scoop,80,1,80
2019-01-11,Vanilla Single Scoop,50,5,250
2019-01-11,Cake Fudge,150,2,300
2019-01-11,Cafe Caramel,160,2,320
2019-01-11,Cafe Caramel,160,2,320
2019-01-11,Cafe Caramel,160,1,160
2019-01-11,Cake Fudge,150,1,150
2019-01-11,Cake Fudge,150,4,600
2019-01-11,Butterscotch Single Scoop,60,5,300
2019-01-11,Butterscotch Single Scoop,60,2,120
2019-01-11,Vanilla Double Scoop,80,4,320
2019-01-11,Mint Fudge,120,3,360
2019-01-11,Cake Fudge,150,5,750
2019-01-11,Butterscotch Single Scoop,60,4,240
2019-01-11,Pista Single Scoop,60,5,300
2019-01-11,Vanilla Double Scoop,80,3,240
2019-01-11,Butterscotch Single Scoop,60,4,240
2019-01-11,Vanilla Double Scoop,80,2,160
2019-01-11,Cake Fudge,150,2,300
2019-01-11,Cake Fudge,150,3,450
2019-01-11,Cafe Caramel,160,2,320
2019-01-11,Butterscotch Single Scoop,60,4,240
2019-01-11,Butterscotch Single Scoop,60,3,180
2019-01-11,Vanilla Double Scoop,80,3,240
2019-01-11,Butterscotch Single Scoop,60,4,240
2019-01-11,Vanilla Single Scoop,50,2,100
2019-01-11,Death by Chocolate,180,5,900
2019-01-11,Hot Chocolate Fudge,120,3,360
2019-01-11,Hot Chocolate Fudge,120,5,600
2019-01-11,Caramel Crunch Single Scoop,70,4,280
2019-01-11,Butterscotch Single Scoop,60,5,300
2019-01-11,Death by Chocolate,180,4,720
2019-01-11,Vanilla Double Scoop,80,4,320
2019-01-11,Cake Fudge,150,1,150
2019-01-11,Vanilla Single Scoop,50,2,100
2019-01-11,Death by Chocolate,180,2,360
2019-01-11,Vanilla Double Scoop,80,5,400
2019-01-11,Vanilla Double Scoop,80,5,400
2019-01-11,Cafe Caramel,160,2,320
2019-01-11,Hot Chocolate Fudge,120,3,360
2019-01-11,Trilogy,160,2,320
2019-01-11,Hot Chocolate Fudge,120,5,600
2019-01-11,Chocolate Europa Double Scoop,100,3,300
2019-01-11,Vanilla Single Scoop,50,2,100
2019-01-11,Vanilla Double Scoop,80,4,320
2019-01-11,Hot Chocolate Fudge,120,4,480
2019-01-11,Butterscotch Single Scoop,60,3,180
2019-01-11,Dew Drop Sundae,150,4,600
2019-01-11,Hot Chocolate Fudge,120,1,120
2019-01-11,Butterscotch Single Scoop,60,4,240
2019-01-11,Banana Split,140,2,280
2019-01-11,Vanilla Double Scoop,80,1,80
2019-01-12,Vanilla Single Scoop,50,3,150
2019-01-12,Cafe Caramel,160,5,800
2019-01-12,Vanilla Single Scoop,50,4,200
2019-01-12,Vanilla Single Scoop,50,2,100
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Cafe Caramel,160,5,800
2019-01-12,Cafe Caramel,160,5,800
2019-01-12,Cafe Caramel,160,2,320
2019-01-12,Butterscotch Single Scoop,60,5,300
2019-01-12,Cake Fudge,150,4,600
2019-01-12,Butterscotch Single Scoop,60,1,60
2019-01-12,Vanilla Single Scoop,50,1,50
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Fig and Honey Single Scoop,60,4,240
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Cake Fudge,150,5,750
2019-01-12,Vanilla Single Scoop,50,2,100
2019-01-12,Vanilla Single Scoop,50,2,100
2019-01-12,Vanilla Single Scoop,50,1,50
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Vanilla Double Scoop,80,4,320
2019-01-12,Death by Chocolate,180,4,720
2019-01-12,Butterscotch Single Scoop,60,5,300
2019-01-12,Butterscotch Single Scoop,60,4,240
2019-01-12,Dry Fruit Single Scoop,60,5,300
2019-01-12,Death by Chocolate,180,2,360
2019-01-12,Vanilla Single Scoop,50,2,100
2019-01-12,Rocky Road Single Scoop,50,3,150
2019-01-12,Cake Fudge,150,3,450
2019-01-12,Cafe Caramel,160,5,800
2019-01-12,Cake Fudge,150,4,600
2019-01-12,Chocolate Europa Double Scoop,100,5,500
2019-01-12,Vanilla Single Scoop,50,4,200
2019-01-12,Caramel Crunch Double Scoop,100,4,400
2019-01-12,Cafe Caramel,160,2,320
2019-01-12,Death by Chocolate,180,2,360
2019-01-12,Butterscotch Single Scoop,60,2,120
2019-01-12,Vanilla Double Scoop,80,3,240
2019-01-12,Cake Fudge,150,5,750
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Dry Fruit Double Scoop,90,5,450
2019-01-12,Butterscotch Single Scoop,60,3,180
2019-01-12,Death by Chocolate,180,4,720
2019-01-12,Vanilla Double Scoop,80,2,160
2019-01-12,Dry Fruit Double Scoop,90,5,450
2019-01-12,Butterscotch Single Scoop,60,4,240
2019-01-12,Cake Fudge,150,4,600
2019-01-12,Cafe Caramel,160,3,480
2019-01-12,Vanilla Single Scoop,50,1,50
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Vanilla Single Scoop,50,5,250
2019-01-12,Hot Chocolate Fudge,120,4,480
2019-01-12,Vanilla Double Scoop,80,3,240
2019-01-12,Hot Chocolate Fudge,120,1,120
2019-01-12,Vanilla Double Scoop,80,4,320
2019-01-12,Hot Chocolate Fudge,120,4,480
2019-01-12,Vanilla Double Scoop,80,2,160
2019-01-12,Butterscotch Single Scoop,60,3,180
2019-01-12,Cake Fudge,150,5,750
2019-01-12,Hot Chocolate Fudge,120,1,120
2019-01-12,Vanilla Single Scoop,50,2,100
2019-01-12,Butterscotch Single Scoop,60,5,300
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Cake Fudge,150,2,300
2019-01-12,Vanilla Single Scoop,50,3,150
2019-01-12,Vanilla Double Scoop,80,1,80
2019-01-12,Cake Fudge,150,1,150
2019-01-12,Death by Chocolate,180,1,180
2019-01-12,Almond Fudge,150,2,300
2019-01-12,Chocolate Europa Single Scoop,70,1,70
2019-01-12,Hot Chocolate Fudge,120,1,120
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Vanilla Single Scoop,50,5,250
2019-01-12,Caramel Crunch Single Scoop,70,3,210
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Cafe Caramel,160,1,160
2019-01-12,Vanilla Double Scoop,80,2,160
2019-01-12,Hot Chocolate Fudge,120,4,480
2019-01-12,Cake Fudge,150,1,150
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Butterscotch Single Scoop,60,2,120
2019-01-12,Vanilla Double Scoop,80,4,320
2019-01-12,Trilogy,160,4,640
2019-01-12,Cake Fudge,150,5,750
2019-01-12,Hot Chocolate Fudge,120,1,120
2019-01-12,Hot Chocolate Fudge,120,3,360
2019-01-12,Hot Chocolate Fudge,120,3,360
2019-01-12,Vanilla Double Scoop,80,4,320
2019-01-12,Death by Chocolate,180,1,180
2019-01-12,Vanilla Double Scoop,80,5,400
2019-01-12,Hot Chocolate Fudge,120,4,480
2019-01-12,Vanilla Double Scoop,80,3,240
2019-01-12,Cake Fudge,150,4,600
2019-01-12,Vanilla Single Scoop,50,4,200
2019-01-12,Vanilla Single Scoop,50,3,150
2019-01-12,Vanilla Single Scoop,50,1,50
2019-01-12,Cake Fudge,150,4,600
2019-01-12,Vanilla Double Scoop,80,3,240
2019-01-12,Vanilla Double Scoop,80,5,400
2019-01-12,Vanilla Double Scoop,80,4,320
2019-01-12,Vanilla Double Scoop,80,4,320
2019-01-12,Cake Fudge,150,2,300
2019-01-12,Vanilla Double Scoop,80,4,320
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Butterscotch Single Scoop,60,4,240
2019-01-12,Butterscotch Single Scoop,60,2,120
2019-01-12,Cake Fudge,150,5,750
2019-01-12,Caramel Crunch Single Scoop,70,3,210
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Vanilla Double Scoop,80,5,400
2019-01-12,Hot Chocolate Fudge,120,4,480
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Vanilla Double Scoop,80,1,80
2019-01-12,Death by Chocolate,180,2,360
2019-01-12,Vanilla Double Scoop,80,5,400
2019-01-12,Hot Chocolate Fudge,120,4,480
2019-01-12,Fig and Honey Double Scoop,90,4,360
2019-01-12,Hot Chocolate Fudge,120,5,600
2019-01-12,Death by Chocolate,180,4,720
2019-01-12,Death by Chocolate,180,3,540
2019-01-12,Fig and Honey Single Scoop,60,2,120
2019-01-12,Vanilla Single Scoop,50,4,200
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Cafe Caramel,160,2,320
2019-01-12,Cake Fudge,150,1,150
2019-01-12,Caramel Crunch Single Scoop,70,5,350
2019-01-12,Death by Chocolate,180,1,180
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Vanilla Double Scoop,80,4,320
2019-01-12,Dry Fruit Single Scoop,60,2,120
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Vanilla Double Scoop,80,2,160
2019-01-12,Dew Drop Sundae,150,2,300
2019-01-12,Hot Chocolate Fudge,120,2,240
2019-01-12,Hot Chocolate Fudge,120,3,360
2019-01-12,Dry Fruit Single Scoop,60,2,120
2019-01-12,Vanilla Double Scoop,80,1,80
2019-01-12,Butterscotch Single Scoop,60,2,120
2019-01-12,Death by Chocolate,180,3,540
2019-01-12,Vanilla Double Scoop,80,1,80
2019-01-12,Death by Chocolate,180,3,540
2019-01-13,Dry Fruit Single Scoop,60,2,120
2019-01-13,Vanilla Double Scoop,80,4,320
2019-01-13,Chocolate Europa Single Scoop,70,2,140
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Hot Chocolate Fudge,120,2,240
2019-01-13,Hot Chocolate Fudge,120,3,360
2019-01-13,Vanilla Double Scoop,80,4,320
2019-01-13,Cake Fudge,150,5,750
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Cake Fudge,150,2,300
2019-01-13,Death by Chocolate,180,5,900
2019-01-13,Hot Chocolate Fudge,120,5,600
2019-01-13,Vanilla Single Scoop,50,4,200
2019-01-13,Cake Fudge,150,4,600
2019-01-13,Cake Fudge,150,4,600
2019-01-13,Vanilla Single Scoop,50,3,150
2019-01-13,Hot Chocolate Fudge,120,2,240
2019-01-13,Dry Fruit Single Scoop,60,2,120
2019-01-13,Vanilla Single Scoop,50,5,250
2019-01-13,Hot Chocolate Fudge,120,1,120
2019-01-13,Butterscotch Single Scoop,60,5,300
2019-01-13,Death by Chocolate,180,5,900
2019-01-13,Death by Chocolate,180,3,540
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Cake Fudge,150,2,300
2019-01-13,Butterscotch Single Scoop,60,4,240
2019-01-13,Death by Chocolate,180,4,720
2019-01-13,Cake Fudge,150,2,300
2019-01-13,Cafe Caramel,160,1,160
2019-01-13,Death by Chocolate,180,4,720
2019-01-13,Cafe Caramel,160,2,320
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Hot Chocolate Fudge,120,1,120
2019-01-13,Cake Fudge,150,3,450
2019-01-13,Hot Chocolate Fudge,120,5,600
2019-01-13,Mint Fudge,120,4,480
2019-01-13,Vanilla Single Scoop,50,5,250
2019-01-13,Death by Chocolate,180,1,180
2019-01-13,Cake Fudge,150,5,750
2019-01-13,Butterscotch Single Scoop,60,4,240
2019-01-13,Vanilla Single Scoop,50,2,100
2019-01-13,Vanilla Double Scoop,80,5,400
2019-01-13,Vanilla Double Scoop,80,1,80
2019-01-13,Cake Fudge,150,3,450
2019-01-13,Cake Fudge,150,4,600
2019-01-13,Hot Chocolate Fudge,120,3,360
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Death by Chocolate,180,2,360
2019-01-13,Hot Chocolate Fudge,120,1,120
2019-01-13,Hot Chocolate Fudge,120,1,120
2019-01-13,Vanilla Double Scoop,80,2,160
2019-01-13,Cake Fudge,150,1,150
2019-01-13,Death by Chocolate,180,2,360
2019-01-13,Hot Chocolate Fudge,120,5,600
2019-01-13,Death by Chocolate,180,1,180
2019-01-13,Cake Fudge,150,4,600
2019-01-13,Cake Fudge,150,1,150
2019-01-13,Cake Fudge,150,4,600
2019-01-13,Death by Chocolate,180,4,720
2019-01-13,Vanilla Single Scoop,50,5,250
2019-01-13,Death by Chocolate,180,1,180
2019-01-13,Butterscotch Single Scoop,60,3,180
2019-01-13,Vanilla Double Scoop,80,1,80
2019-01-13,Cake Fudge,150,2,300
2019-01-13,Cafe Caramel,160,4,640
2019-01-13,Hot Chocolate Fudge,120,3,360
2019-01-13,Butterscotch Single Scoop,60,1,60
2019-01-13,Vanilla Double Scoop,80,5,400
2019-01-13,Vanilla Double Scoop,80,3,240
2019-01-13,Hot Chocolate Fudge,120,2,240
2019-01-13,Hot Chocolate Fudge,120,2,240
2019-01-13,Cafe Caramel,160,2,320
2019-01-13,Vanilla Double Scoop,80,5,400
2019-01-13,Death by Chocolate,180,1,180
2019-01-13,Death by Chocolate,180,4,720
2019-01-13,Cake Fudge,150,2,300
2019-01-13,Cake Fudge,150,1,150
2019-01-13,Cake Fudge,150,3,450
2019-01-13,Fig and Honey Double Scoop,90,3,270
2019-01-13,Butterscotch Single Scoop,60,2,120
2019-01-13,Butterscotch Single Scoop,60,1,60
2019-01-13,Hot Chocolate Fudge,120,2,240
2019-01-13,Butterscotch Single Scoop,60,5,300
2019-01-13,Butterscotch Single Scoop,60,4,240
2019-01-13,Cake Fudge,150,3,450
2019-01-13,Vanilla Double Scoop,80,1,80
2019-01-13,Vanilla Double Scoop,80,3,240
2019-01-13,Cafe Caramel,160,2,320
2019-01-13,Cake Fudge,150,4,600
2019-01-13,Vanilla Double Scoop,80,5,400
2019-01-13,Cake Fudge,150,2,300
2019-01-13,Butterscotch Single Scoop,60,5,300
2019-01-13,Vanilla Double Scoop,80,5,400
2019-01-13,Vanilla Single Scoop,50,2,100
2019-01-13,Cafe Caramel,160,3,480
2019-01-13,Hot Chocolate Fudge,120,3,360
2019-01-13,Cake Fudge,150,3,450
2019-01-13,Cafe Caramel,160,1,160
2019-01-13,Hot Chocolate Fudge,120,1,120
2019-01-13,Hot Chocolate Fudge,120,3,360
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Vanilla Single Scoop,50,5,250
2019-01-13,Vanilla Single Scoop,50,5,250
2019-01-13,Cake Fudge,150,4,600
2019-01-13,Hot Chocolate Fudge,120,5,600
2019-01-13,Death by Chocolate,180,1,180
2019-01-13,Hot Chocolate Fudge,120,1,120
2019-01-13,Cafe Caramel,160,4,640
2019-01-13,Hot Chocolate Fudge,120,1,120
2019-01-13,Cake Fudge,150,1,150
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Vanilla Single Scoop,50,1,50
2019-01-13,Hot Chocolate Fudge,120,1,120
2019-01-13,Butterscotch Single Scoop,60,4,240
2019-01-13,Chocolate Europa Single Scoop,70,3,210
2019-01-13,Vanilla Double Scoop,80,1,80
2019-01-13,Rocky Road Single Scoop,50,2,100
2019-01-13,Vanilla Single Scoop,50,4,200
2019-01-13,Death by Chocolate,180,2,360
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Butterscotch Single Scoop,60,2,120
2019-01-13,Death by Chocolate,180,5,900
2019-01-13,Cake Fudge,150,5,750
2019-01-13,Butterscotch Single Scoop,60,3,180
2019-01-13,Cake Fudge,150,4,600
2019-01-13,Hot Chocolate Fudge,120,2,240
2019-01-13,Vanilla Single Scoop,50,5,250
2019-01-13,Vanilla Single Scoop,50,3,150
2019-01-13,Vanilla Double Scoop,80,1,80
2019-01-13,Cake Fudge,150,2,300
2019-01-13,Vanilla Double Scoop,80,3,240
2019-01-13,Vanilla Single Scoop,50,3,150
2019-01-13,Butterscotch Single Scoop,60,4,240
2019-01-13,Hot Chocolate Fudge,120,2,240
2019-01-13,Cake Fudge,150,3,450
2019-01-13,Pista Double Scoop,90,2,180
2019-01-13,Vanilla Single Scoop,50,3,150
2019-01-13,Vanilla Double Scoop,80,1,80
2019-01-13,Death by Chocolate,180,2,360
2019-01-13,Cake Fudge,150,5,750
2019-01-13,Vanilla Double Scoop,80,2,160
2019-01-13,Pista Double Scoop,90,5,450
2019-01-13,Death by Chocolate,180,2,360
2019-01-13,Hot Chocolate Fudge,120,3,360
2019-01-13,Cafe Caramel,160,1,160
2019-01-13,Cafe Caramel,160,5,800
2019-01-13,Vanilla Double Scoop,80,3,240
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Vanilla Single Scoop,50,5,250
2019-01-13,Cafe Caramel,160,1,160
2019-01-13,Pista Single Scoop,60,5,300
2019-01-13,Vanilla Double Scoop,80,3,240
2019-01-13,Chocolate Europa Single Scoop,70,1,70
2019-01-13,Vanilla Double Scoop,80,5,400
2019-01-13,Hot Chocolate Fudge,120,4,480
2019-01-13,Vanilla Double Scoop,80,2,160
2019-01-14,Hot Chocolate Fudge,120,3,360
2019-01-14,Rocky Road Single Scoop,50,3,150
2019-01-14,Vanilla Double Scoop,80,2,160
2019-01-14,Vanilla Double Scoop,80,5,400
2019-01-14,Vanilla Single Scoop,50,4,200
2019-01-14,Death by Chocolate,180,4,720
2019-01-14,Hot Chocolate Fudge,120,5,600
2019-01-14,Vanilla Double Scoop,80,5,400
2019-01-14,Hot Chocolate Fudge,120,4,480
2019-01-14,Butterscotch Single Scoop,60,1,60
2019-01-14,Death by Chocolate,180,2,360
2019-01-14,Cake Fudge,150,5,750
2019-01-14,Vanilla Double Scoop,80,3,240
2019-01-14,Hot Chocolate Fudge,120,1,120
2019-01-14,Hot Chocolate Fudge,120,5,600
2019-01-14,Hot Chocolate Fudge,120,3,360
2019-01-14,Vanilla Double Scoop,80,4,320
2019-01-14,Hot Chocolate Fudge,120,2,240
2019-01-14,Cafe Caramel,160,5,800
2019-01-14,Caramel Crunch Single Scoop,70,3,210
2019-01-14,Hot Chocolate Fudge,120,3,360
2019-01-14,Cake Fudge,150,5,750
2019-01-14,Cake Fudge,150,3,450
2019-01-14,Death by Chocolate,180,3,540
2019-01-14,Hot Chocolate Fudge,120,3,360
2019-01-14,Dry Fruit Single Scoop,60,4,240
2019-01-14,Pista Single Scoop,60,3,180
2019-01-14,Death by Chocolate,180,4,720
2019-01-14,Hot Chocolate Fudge,120,2,240
2019-01-14,Vanilla Single Scoop,50,3,150
2019-01-14,Death by Chocolate,180,2,360
2019-01-14,Vanilla Double Scoop,80,4,320
2019-01-14,Vanilla Double Scoop,80,5,400
2019-01-14,Vanilla Double Scoop,80,2,160
2019-01-14,Death by Chocolate,180,2,360
2019-01-14,Death by Chocolate,180,4,720
2019-01-14,Death by Chocolate,180,2,360
2019-01-14,Pista Double Scoop,90,5,450
2019-01-14,Cake Fudge,150,5,750
2019-01-14,Cake Fudge,150,1,150
2019-01-14,Butterscotch Single Scoop,60,2,120
2019-01-14,Hot Chocolate Fudge,120,4,480
2019-01-14,Almond Fudge,150,3,450
2019-01-14,Cake Fudge,150,4,600
2019-01-14,Hot Chocolate Fudge,120,4,480
2019-01-14,Cake Fudge,150,4,600
2019-01-14,Cake Fudge,150,3,450
2019-01-14,Vanilla Double Scoop,80,4,320
2019-01-14,Mint Fudge,120,5,600
2019-01-14,Cake Fudge,150,4,600
2019-01-14,Death by Chocolate,180,4,720
2019-01-14,Hot Chocolate Fudge,120,2,240
2019-01-14,Vanilla Double Scoop,80,5,400
2019-01-14,Hot Chocolate Fudge,120,5,600
2019-01-14,Vanilla Double Scoop,80,3,240
2019-01-14,Vanilla Double Scoop,80,3,240
2019-01-14,Hot Chocolate Fudge,120,4,480
2019-01-14,Hot Chocolate Fudge,120,1,120
2019-01-14,Cake Fudge,150,2,300
2019-01-14,Vanilla Double Scoop,80,5,400
2019-01-14,Rocky Road Double Scoop,80,5,400
2019-01-14,Hot Chocolate Fudge,120,4,480
2019-01-14,Hot Chocolate Fudge,120,5,600
2019-01-14,Dew Drop Sundae,150,4,600
2019-01-14,Death by Chocolate,180,1,180
2019-01-14,Vanilla Single Scoop,50,1,50
2019-01-14,Vanilla Double Scoop,80,5,400
2019-01-14,Cake Fudge,150,1,150
2019-01-14,Butterscotch Single Scoop,60,1,60
2019-01-14,Vanilla Double Scoop,80,1,80
2019-01-14,Butterscotch Single Scoop,60,3,180
2019-01-14,Hot Chocolate Fudge,120,4,480
2019-01-14,Death by Chocolate,180,3,540
2019-01-14,Hot Chocolate Fudge,120,3,360
2019-01-14,Vanilla Double Scoop,80,4,320
2019-01-14,Vanilla Double Scoop,80,1,80
2019-01-14,Cafe Caramel,160,4,640
2019-01-14,Hot Chocolate Fudge,120,2,240
2019-01-14,Death by Chocolate,180,4,720
2019-01-14,Hot Chocolate Fudge,120,5,600
2019-01-14,Cafe Caramel,160,1,160
2019-01-14,Vanilla Double Scoop,80,1,80
2019-01-14,Hot Chocolate Fudge,120,3,360
2019-01-14,Butterscotch Single Scoop,60,5,300
2019-01-14,Cake Fudge,150,1,150
2019-01-14,Butterscotch Single Scoop,60,3,180
2019-01-14,Chocolate Europa Single Scoop,70,1,70
2019-01-14,Cake Fudge,150,1,150
2019-01-14,Vanilla Double Scoop,80,2,160
2019-01-14,Pista Single Scoop,60,2,120
2019-01-14,Hot Chocolate Fudge,120,4,480
2019-01-14,Cake Fudge,150,2,300
2019-01-14,Rocky Road Single Scoop,50,1,50
2019-01-14,Cake Fudge,150,2,300
2019-01-14,Vanilla Double Scoop,80,4,320
2019-01-14,Hot Chocolate Fudge,120,1,120
2019-01-14,Vanilla Double Scoop,80,3,240
2019-01-14,Hot Chocolate Fudge,120,2,240
2019-01-14,Hot Chocolate Fudge,120,3,360
2019-01-14,Vanilla Single Scoop,50,1,50
2019-01-14,Fig and Honey Single Scoop,60,2,120
2019-01-14,Vanilla Double Scoop,80,2,160
2019-01-14,Caramel Crunch Single Scoop,70,2,140
2019-01-14,Chocolate Europa Double Scoop,100,5,500
2019-01-14,Vanilla Single Scoop,50,2,100
2019-01-14,Butterscotch Single Scoop,60,4,240
2019-01-14,Vanilla Double Scoop,80,5,400
2019-01-14,Cake Fudge,150,3,450
2019-01-14,Vanilla Double Scoop,80,2,160
2019-01-14,Hot Chocolate Fudge,120,5,600
2019-01-14,Rocky Road Single Scoop,50,4,200
2019-01-14,Butterscotch Double Scoop,90,5,450
2019-01-14,Vanilla Double Scoop,80,5,400
2019-01-14,Butterscotch Single Scoop,60,2,120
2019-01-14,Hot Chocolate Fudge,120,3,360
2019-01-14,Hot Chocolate Fudge,120,1,120
2019-01-14,Vanilla Double Scoop,80,2,160
2019-01-14,Butterscotch Single Scoop,60,3,180
2019-01-14,Vanilla Double Scoop,80,4,320
2019-01-14,Hot Chocolate Fudge,120,5,600
2019-01-14,Death by Chocolate,180,4,720
2019-01-14,Butterscotch Double Scoop,90,3,270
2019-01-14,Almond Fudge,150,4,600
2019-01-14,Hot Chocolate Fudge,120,2,240
2019-01-14,Butterscotch Single Scoop,60,4,240
2019-01-14,Dry Fruit Double Scoop,90,1,90
2019-01-15,Banana Split,140,1,140
2019-01-15,Hot Chocolate Fudge,120,3,360
2019-01-15,Hot Chocolate Fudge,120,3,360
2019-01-15,Vanilla Single Scoop,50,2,100
2019-01-15,Cake Fudge,150,1,150
2019-01-15,Vanilla Single Scoop,50,1,50
2019-01-15,Vanilla Double Scoop,80,1,80
2019-01-15,Vanilla Single Scoop,50,3,150
2019-01-15,Hot Chocolate Fudge,120,1,120
2019-01-15,Dew Drop Sundae,150,5,750
2019-01-15,Cafe Caramel,160,2,320
2019-01-15,Fig and Honey Double Scoop,90,2,180
2019-01-15,Vanilla Single Scoop,50,2,100
2019-01-15,Cafe Caramel,160,4,640
2019-01-15,Cake Fudge,150,3,450
2019-01-15,Vanilla Single Scoop,50,1,50
2019-01-15,Vanilla Double Scoop,80,3,240
2019-01-15,Butterscotch Single Scoop,60,4,240
2019-01-15,Cake Fudge,150,2,300
2019-01-15,Vanilla Single Scoop,50,4,200
2019-01-15,Dry Fruit Double Scoop,90,5,450
2019-01-15,Chocolate Europa Single Scoop,70,1,70
2019-01-15,Hot Chocolate Fudge,120,3,360
2019-01-15,Death by Chocolate,180,4,720
2019-01-15,Death by Chocolate,180,2,360
2019-01-15,Butterscotch Single Scoop,60,2,120
2019-01-15,Cake Fudge,150,4,600
2019-01-15,Cake Fudge,150,5,750
2019-01-15,Hot Chocolate Fudge,120,1,120
2019-01-15,Cake Fudge,150,1,150
2019-01-15,Almond Fudge,150,5,750
2019-01-15,Hot Chocolate Fudge,120,5,600
2019-01-15,Vanilla Single Scoop,50,5,250
2019-01-15,Vanilla Single Scoop,50,3,150
2019-01-15,Vanilla Double Scoop,80,3,240
2019-01-15,Hot Chocolate Fudge,120,4,480
2019-01-15,Butterscotch Single Scoop,60,2,120
2019-01-15,Vanilla Double Scoop,80,3,240
2019-01-15,Vanilla Single Scoop,50,5,250
2019-01-15,Death by Chocolate,180,4,720
2019-01-15,Butterscotch Single Scoop,60,5,300
2019-01-15,Hot Chocolate Fudge,120,5,600
2019-01-15,Death by Chocolate,180,2,360
2019-01-15,Fig and Honey Double Scoop,90,1,90
2019-01-15,Death by Chocolate,180,4,720
2019-01-15,Hot Chocolate Fudge,120,1,120
2019-01-15,Butterscotch Single Scoop,60,1,60
2019-01-15,Cake Fudge,150,1,150
2019-01-15,Butterscotch Single Scoop,60,1,60
2019-01-15,Hot Chocolate Fudge,120,2,240
2019-01-15,Butterscotch Single Scoop,60,1,60
2019-01-15,Cake Fudge,150,3,450
2019-01-15,Cake Fudge,150,3,450
2019-01-15,Cake Fudge,150,1,150
2019-01-15,Vanilla Single Scoop,50,2,100
2019-01-15,Vanilla Double Scoop,80,5,400
2019-01-15,Death by Chocolate,180,1,180
2019-01-15,Cake Fudge,150,5,750
2019-01-15,Dew Drop Sundae,150,2,300
2019-01-15,Hot Chocolate Fudge,120,4,480
2019-01-15,Vanilla Single Scoop,50,2,100
2019-01-15,Vanilla Double Scoop,80,1,80
2019-01-15,Hot Chocolate Fudge,120,3,360
2019-01-15,Almond Fudge,150,4,600
2019-01-15,Hot Chocolate Fudge,120,4,480
2019-01-15,Vanilla Double Scoop,80,4,320
2019-01-15,Death by Chocolate,180,5,900
2019-01-15,Cake Fudge,150,5,750
2019-01-15,Cafe Caramel,160,2,320
2019-01-15,Chocolate Europa Double Scoop,100,5,500
2019-01-15,Hot Chocolate Fudge,120,3,360
2019-01-15,Hot Chocolate Fudge,120,1,120
2019-01-15,Hot Chocolate Fudge,120,4,480
2019-01-15,Vanilla Double Scoop,80,3,240
2019-01-15,Fig and Honey Single Scoop,60,5,300
2019-01-15,Cafe Caramel,160,2,320
2019-01-15,Hot Chocolate Fudge,120,2,240
2019-01-15,Hot Chocolate Fudge,120,3,360
2019-01-15,Hot Chocolate Fudge,120,3,360
2019-01-15,Caramel Crunch Single Scoop,70,2,140
2019-01-15,Trilogy,160,2,320
2019-01-15,Butterscotch Single Scoop,60,4,240
2019-01-15,Cake Fudge,150,2,300
2019-01-15,Cake Fudge,150,3,450
2019-01-15,Hot Chocolate Fudge,120,1,120
2019-01-15,Hot Chocolate Fudge,120,1,120
2019-01-15,Dry Fruit Double Scoop,90,4,360
2019-01-15,Death by Chocolate,180,3,540
2019-01-15,Vanilla Double Scoop,80,1,80
2019-01-15,Cake Fudge,150,1,150
2019-01-15,Vanilla Double Scoop,80,5,400
2019-01-15,Vanilla Single Scoop,50,3,150
2019-01-15,Vanilla Double Scoop,80,1,80
2019-01-15,Hot Chocolate Fudge,120,5,600
2019-01-15,Hot Chocolate Fudge,120,4,480
2019-01-15,Hot Chocolate Fudge,120,2,240
2019-01-15,Cafe Caramel,160,4,640
2019-01-15,Trilogy,160,4,640
2019-01-15,Vanilla Single Scoop,50,2,100
2019-01-15,Caramel Crunch Single Scoop,70,4,280
2019-01-16,Hot Chocolate Fudge,120,5,600
2019-01-16,Butterscotch Single Scoop,60,4,240
2019-01-16,Vanilla Double Scoop,80,1,80
2019-01-16,Hot Chocolate Fudge,120,4,480
2019-01-16,Chocolate Europa Double Scoop,100,4,400
2019-01-16,Death by Chocolate,180,5,900
2019-01-16,Vanilla Double Scoop,80,5,400
2019-01-16,Death by Chocolate,180,1,180
2019-01-16,Butterscotch Single Scoop,60,3,180
2019-01-16,Chocolate Europa Single Scoop,70,5,350
2019-01-16,Vanilla Single Scoop,50,3,150
2019-01-16,Vanilla Single Scoop,50,2,100
2019-01-16,Cake Fudge,150,4,600
2019-01-16,Vanilla Double Scoop,80,4,320
2019-01-16,Cake Fudge,150,1,150
2019-01-16,Butterscotch Single Scoop,60,2,120
2019-01-16,Cake Fudge,150,2,300
2019-01-16,Cafe Caramel,160,4,640
2019-01-16,Death by Chocolate,180,5,900
2019-01-16,Hot Chocolate Fudge,120,4,480
2019-01-16,Hot Chocolate Fudge,120,1,120
2019-01-16,Death by Chocolate,180,3,540
2019-01-16,Butterscotch Single Scoop,60,2,120
2019-01-16,Death by Chocolate,180,3,540
2019-01-16,Vanilla Double Scoop,80,4,320
2019-01-16,Cafe Caramel,160,4,640
2019-01-16,Cake Fudge,150,1,150
2019-01-16,Vanilla Double Scoop,80,4,320
2019-01-16,Vanilla Double Scoop,80,4,320
2019-01-16,Death by Chocolate,180,2,360
2019-01-16,Caramel Crunch Single Scoop,70,1,70
2019-01-16,Vanilla Double Scoop,80,3,240
2019-01-16,Vanilla Double Scoop,80,1,80
2019-01-16,Pista Double Scoop,90,3,270
2019-01-16,Death by Chocolate,180,3,540
2019-01-16,Cake Fudge,150,4,600
2019-01-16,Death by Chocolate,180,2,360
2019-01-16,Hot Chocolate Fudge,120,4,480
2019-01-16,Vanilla Double Scoop,80,1,80
2019-01-16,Butterscotch Single Scoop,60,1,60
2019-01-16,Vanilla Double Scoop,80,3,240
2019-01-16,Butterscotch Single Scoop,60,1,60
2019-01-16,Rocky Road Double Scoop,80,1,80
2019-01-16,Cake Fudge,150,4,600
2019-01-16,Butterscotch Single Scoop,60,5,300
2019-01-16,Cafe Caramel,160,1,160
2019-01-16,Trilogy,160,4,640
2019-01-16,Death by Chocolate,180,2,360
2019-01-16,Dry Fruit Double Scoop,90,5,450
2019-01-16,Death by Chocolate,180,3,540
2019-01-16,Cafe Caramel,160,2,320
2019-01-16,Death by Chocolate,180,5,900
2019-01-16,Hot Chocolate Fudge,120,4,480
2019-01-16,Hot Chocolate Fudge,120,1,120
2019-01-16,Almond Fudge,150,1,150
2019-01-16,Death by Chocolate,180,4,720
2019-01-16,Cafe Caramel,160,5,800
2019-01-16,Vanilla Double Scoop,80,4,320
2019-01-16,Rocky Road Single Scoop,50,4,200
2019-01-16,Cake Fudge,150,1,150
2019-01-16,Almond Fudge,150,1,150
2019-01-16,Cake Fudge,150,1,150
2019-01-16,Vanilla Double Scoop,80,5,400
2019-01-16,Cake Fudge,150,4,600
2019-01-16,Butterscotch Single Scoop,60,3,180
2019-01-16,Cafe Caramel,160,5,800
2019-01-16,Chocolate Europa Double Scoop,100,3,300
2019-01-16,Cake Fudge,150,5,750
2019-01-16,Death by Chocolate,180,2,360
2019-01-16,Banana Split,140,3,420
2019-01-16,Cafe Caramel,160,2,320
2019-01-16,Death by Chocolate,180,1,180
2019-01-16,Vanilla Single Scoop,50,4,200
2019-01-16,Butterscotch Single Scoop,60,3,180
2019-01-16,Hot Chocolate Fudge,120,1,120
2019-01-16,Vanilla Single Scoop,50,3,150
2019-01-16,Death by Chocolate,180,2,360
2019-01-16,Cake Fudge,150,2,300
2019-01-16,Hot Chocolate Fudge,120,3,360
2019-01-16,Rocky Road Single Scoop,50,4,200
2019-01-16,Vanilla Double Scoop,80,3,240
2019-01-16,Hot Chocolate Fudge,120,4,480
2019-01-16,Pista Double Scoop,90,5,450
2019-01-16,Fig and Honey Single Scoop,60,5,300
2019-01-16,Hot Chocolate Fudge,120,2,240
2019-01-16,Butterscotch Single Scoop,60,2,120
2019-01-16,Cake Fudge,150,2,300
2019-01-16,Cafe Caramel,160,1,160
2019-01-16,Cake Fudge,150,3,450
2019-01-16,Cafe Caramel,160,4,640
2019-01-16,Vanilla Double Scoop,80,5,400
2019-01-16,Hot Chocolate Fudge,120,1,120
2019-01-16,Vanilla Double Scoop,80,1,80
2019-01-16,Death by Chocolate,180,4,720
2019-01-16,Butterscotch Single Scoop,60,4,240
2019-01-16,Vanilla Double Scoop,80,4,320
2019-01-16,Death by Chocolate,180,5,900
2019-01-16,Rocky Road Double Scoop,80,2,160
2019-01-16,Vanilla Double Scoop,80,3,240
2019-01-16,Vanilla Double Scoop,80,3,240
2019-01-16,Hot Chocolate Fudge,120,1,120
2019-01-16,Death by Chocolate,180,1,180
2019-01-16,Rocky Road Single Scoop,50,3,150
2019-01-16,Vanilla Double Scoop,80,1,80
2019-01-16,Death by Chocolate,180,4,720
2019-01-16,Vanilla Double Scoop,80,5,400
2019-01-16,Vanilla Double Scoop,80,2,160
2019-01-16,Cake Fudge,150,3,450
2019-01-16,Hot Chocolate Fudge,120,3,360
2019-01-16,Death by Chocolate,180,3,540
2019-01-16,Death by Chocolate,180,2,360
2019-01-17,Butterscotch Single Scoop,60,5,300
2019-01-17,Cafe Caramel,160,4,640
2019-01-17,Vanilla Single Scoop,50,3,150
2019-01-17,Vanilla Double Scoop,80,4,320
2019-01-17,Fig and Honey Single Scoop,60,4,240
2019-01-17,Caramel Crunch Double Scoop,100,4,400
2019-01-17,Cafe Caramel,160,4,640
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Almond Fudge,150,1,150
2019-01-17,Mint Fudge,120,4,480
2019-01-17,Vanilla Double Scoop,80,3,240
2019-01-17,Death by Chocolate,180,4,720
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Caramel Crunch Single Scoop,70,5,350
2019-01-17,Dry Fruit Double Scoop,90,2,180
2019-01-17,Butterscotch Single Scoop,60,1,60
2019-01-17,Butterscotch Single Scoop,60,3,180
2019-01-17,Cake Fudge,150,4,600
2019-01-17,Butterscotch Single Scoop,60,2,120
2019-01-17,Vanilla Double Scoop,80,5,400
2019-01-17,Hot Chocolate Fudge,120,2,240
2019-01-17,Butterscotch Single Scoop,60,3,180
2019-01-17,Hot Chocolate Fudge,120,3,360
2019-01-17,Cake Fudge,150,2,300
2019-01-17,Dry Fruit Double Scoop,90,5,450
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Hot Chocolate Fudge,120,5,600
2019-01-17,Chocolate Europa Double Scoop,100,1,100
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Vanilla Double Scoop,80,3,240
2019-01-17,Cake Fudge,150,1,150
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Cafe Caramel,160,2,320
2019-01-17,Cake Fudge,150,2,300
2019-01-17,Vanilla Single Scoop,50,2,100
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Vanilla Double Scoop,80,5,400
2019-01-17,Butterscotch Single Scoop,60,1,60
2019-01-17,Vanilla Double Scoop,80,3,240
2019-01-17,Cake Fudge,150,2,300
2019-01-17,Hot Chocolate Fudge,120,3,360
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Vanilla Single Scoop,50,3,150
2019-01-17,Butterscotch Single Scoop,60,1,60
2019-01-17,Butterscotch Single Scoop,60,1,60
2019-01-17,Cake Fudge,150,4,600
2019-01-17,Chocolate Europa Double Scoop,100,3,300
2019-01-17,Vanilla Single Scoop,50,5,250
2019-01-17,Hot Chocolate Fudge,120,5,600
2019-01-17,Vanilla Double Scoop,80,4,320
2019-01-17,Cafe Caramel,160,4,640
2019-01-17,Vanilla Single Scoop,50,4,200
2019-01-17,Fig and Honey Single Scoop,60,1,60
2019-01-17,Dew Drop Sundae,150,2,300
2019-01-17,Death by Chocolate,180,1,180
2019-01-17,Hot Chocolate Fudge,120,5,600
2019-01-17,Butterscotch Single Scoop,60,5,300
2019-01-17,Death by Chocolate,180,5,900
2019-01-17,Butterscotch Single Scoop,60,5,300
2019-01-17,Hot Chocolate Fudge,120,3,360
2019-01-17,Dry Fruit Single Scoop,60,4,240
2019-01-17,Death by Chocolate,180,5,900
2019-01-17,Death by Chocolate,180,1,180
2019-01-17,Death by Chocolate,180,1,180
2019-01-17,Hot Chocolate Fudge,120,2,240
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Butterscotch Single Scoop,60,4,240
2019-01-17,Vanilla Single Scoop,50,2,100
2019-01-17,Death by Chocolate,180,1,180
2019-01-17,Cake Fudge,150,1,150
2019-01-17,Chocolate Europa Single Scoop,70,2,140
2019-01-17,Caramel Crunch Double Scoop,100,2,200
2019-01-17,Cafe Caramel,160,5,800
2019-01-17,Death by Chocolate,180,4,720
2019-01-17,Vanilla Double Scoop,80,2,160
2019-01-17,Cake Fudge,150,1,150
2019-01-17,Almond Fudge,150,2,300
2019-01-17,Vanilla Single Scoop,50,3,150
2019-01-17,Hot Chocolate Fudge,120,5,600
2019-01-17,Vanilla Single Scoop,50,3,150
2019-01-17,Vanilla Double Scoop,80,2,160
2019-01-17,Pista Double Scoop,90,3,270
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Rocky Road Double Scoop,80,3,240
2019-01-17,Death by Chocolate,180,1,180
2019-01-17,Vanilla Double Scoop,80,5,400
2019-01-17,Cake Fudge,150,1,150
2019-01-17,Vanilla Single Scoop,50,3,150
2019-01-17,Hot Chocolate Fudge,120,3,360
2019-01-17,Dew Drop Sundae,150,3,450
2019-01-17,Cake Fudge,150,3,450
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Butterscotch Single Scoop,60,3,180
2019-01-17,Cake Fudge,150,1,150
2019-01-17,Cake Fudge,150,2,300
2019-01-17,Rocky Road Single Scoop,50,5,250
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Chocolate Europa Double Scoop,100,2,200
2019-01-17,Hot Chocolate Fudge,120,2,240
2019-01-17,Cake Fudge,150,1,150
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Hot Chocolate Fudge,120,5,600
2019-01-17,Vanilla Double Scoop,80,3,240
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Cake Fudge,150,2,300
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Vanilla Single Scoop,50,5,250
2019-01-17,Butterscotch Single Scoop,60,4,240
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Cake Fudge,150,3,450
2019-01-17,Pista Double Scoop,90,5,450
2019-01-17,Dry Fruit Double Scoop,90,1,90
2019-01-17,Cake Fudge,150,3,450
2019-01-17,Fig and Honey Single Scoop,60,2,120
2019-01-17,Cafe Caramel,160,4,640
2019-01-17,Vanilla Single Scoop,50,2,100
2019-01-17,Vanilla Double Scoop,80,3,240
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Hot Chocolate Fudge,120,1,120
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Vanilla Double Scoop,80,3,240
2019-01-17,Cake Fudge,150,1,150
2019-01-17,Trilogy,160,1,160
2019-01-17,Vanilla Double Scoop,80,3,240
2019-01-17,Butterscotch Single Scoop,60,2,120
2019-01-17,Cake Fudge,150,3,450
2019-01-17,Cake Fudge,150,4,600
2019-01-17,Dew Drop Sundae,150,5,750
2019-01-17,Death by Chocolate,180,1,180
2019-01-17,Vanilla Double Scoop,80,5,400
2019-01-17,Hot Chocolate Fudge,120,3,360
2019-01-17,Hot Chocolate Fudge,120,2,240
2019-01-17,Hot Chocolate Fudge,120,4,480
2019-01-17,Cafe Caramel,160,4,640
2019-01-17,Butterscotch Single Scoop,60,4,240
2019-01-17,Butterscotch Single Scoop,60,1,60
2019-01-18,Vanilla Double Scoop,80,3,240
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Hot Chocolate Fudge,120,5,600
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Cake Fudge,150,3,450
2019-01-18,Butterscotch Single Scoop,60,1,60
2019-01-18,Trilogy,160,2,320
2019-01-18,Cafe Caramel,160,3,480
2019-01-18,Cafe Caramel,160,3,480
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Vanilla Single Scoop,50,2,100
2019-01-18,Cake Fudge,150,1,150
2019-01-18,Butterscotch Single Scoop,60,5,300
2019-01-18,Cake Fudge,150,2,300
2019-01-18,Butterscotch Double Scoop,90,1,90
2019-01-18,Death by Chocolate,180,4,720
2019-01-18,Pista Single Scoop,60,4,240
2019-01-18,Vanilla Double Scoop,80,4,320
2019-01-18,Rocky Road Single Scoop,50,5,250
2019-01-18,Butterscotch Single Scoop,60,5,300
2019-01-18,Death by Chocolate,180,2,360
2019-01-18,Vanilla Single Scoop,50,1,50
2019-01-18,Pista Single Scoop,60,3,180
2019-01-18,Cafe Caramel,160,3,480
2019-01-18,Pista Double Scoop,90,4,360
2019-01-18,Vanilla Single Scoop,50,5,250
2019-01-18,Death by Chocolate,180,4,720
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Vanilla Double Scoop,80,2,160
2019-01-18,Hot Chocolate Fudge,120,3,360
2019-01-18,Hot Chocolate Fudge,120,2,240
2019-01-18,Hot Chocolate Fudge,120,2,240
2019-01-18,Death by Chocolate,180,1,180
2019-01-18,Vanilla Single Scoop,50,5,250
2019-01-18,Hot Chocolate Fudge,120,5,600
2019-01-18,Vanilla Single Scoop,50,2,100
2019-01-18,Pista Double Scoop,90,1,90
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Vanilla Double Scoop,80,4,320
2019-01-18,Death by Chocolate,180,3,540
2019-01-18,Hot Chocolate Fudge,120,5,600
2019-01-18,Cafe Caramel,160,2,320
2019-01-18,Death by Chocolate,180,2,360
2019-01-18,Rocky Road Single Scoop,50,4,200
2019-01-18,Vanilla Double Scoop,80,1,80
2019-01-18,Cafe Caramel,160,5,800
2019-01-18,Pista Single Scoop,60,5,300
2019-01-18,Vanilla Single Scoop,50,1,50
2019-01-18,Cake Fudge,150,5,750
2019-01-18,Butterscotch Single Scoop,60,2,120
2019-01-18,Cake Fudge,150,5,750
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Dry Fruit Single Scoop,60,4,240
2019-01-18,Rocky Road Single Scoop,50,2,100
2019-01-18,Cake Fudge,150,1,150
2019-01-18,Vanilla Double Scoop,80,3,240
2019-01-18,Hot Chocolate Fudge,120,3,360
2019-01-18,Hot Chocolate Fudge,120,5,600
2019-01-18,Vanilla Single Scoop,50,3,150
2019-01-18,Cake Fudge,150,3,450
2019-01-18,Dry Fruit Double Scoop,90,4,360
2019-01-18,Death by Chocolate,180,4,720
2019-01-18,Dry Fruit Double Scoop,90,4,360
2019-01-18,Vanilla Double Scoop,80,1,80
2019-01-18,Vanilla Double Scoop,80,3,240
2019-01-18,Butterscotch Single Scoop,60,3,180
2019-01-18,Cake Fudge,150,2,300
2019-01-18,Cake Fudge,150,4,600
2019-01-18,Dry Fruit Double Scoop,90,4,360
2019-01-18,Vanilla Double Scoop,80,3,240
2019-01-18,Caramel Crunch Single Scoop,70,3,210
2019-01-18,Chocolate Europa Single Scoop,70,2,140
2019-01-18,Death by Chocolate,180,3,540
2019-01-18,Butterscotch Single Scoop,60,5,300
2019-01-18,Butterscotch Single Scoop,60,5,300
2019-01-18,Hot Chocolate Fudge,120,2,240
2019-01-18,Butterscotch Single Scoop,60,3,180
2019-01-18,Vanilla Double Scoop,80,4,320
2019-01-18,Vanilla Double Scoop,80,2,160
2019-01-18,Cake Fudge,150,5,750
2019-01-18,Cake Fudge,150,2,300
2019-01-18,Vanilla Double Scoop,80,3,240
2019-01-18,Vanilla Single Scoop,50,3,150
2019-01-18,Hot Chocolate Fudge,120,3,360
2019-01-18,Hot Chocolate Fudge,120,3,360
2019-01-18,Cake Fudge,150,4,600
2019-01-18,Pista Double Scoop,90,4,360
2019-01-18,Cake Fudge,150,1,150
2019-01-18,Pista Double Scoop,90,1,90
2019-01-18,Vanilla Single Scoop,50,3,150
2019-01-18,Vanilla Double Scoop,80,5,400
2019-01-18,Vanilla Double Scoop,80,3,240
2019-01-18,Vanilla Single Scoop,50,1,50
2019-01-18,Cake Fudge,150,4,600
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Hot Chocolate Fudge,120,3,360
2019-01-18,Hot Chocolate Fudge,120,5,600
2019-01-18,Death by Chocolate,180,2,360
2019-01-18,Fig and Honey Double Scoop,90,3,270
2019-01-18,Hot Chocolate Fudge,120,1,120
2019-01-18,Cake Fudge,150,5,750
2019-01-18,Cafe Caramel,160,1,160
2019-01-18,Chocolate Europa Double Scoop,100,3,300
2019-01-18,Butterscotch Single Scoop,60,4,240
2019-01-18,Hot Chocolate Fudge,120,5,600
2019-01-18,Butterscotch Single Scoop,60,4,240
2019-01-18,Death by Chocolate,180,2,360
2019-01-18,Vanilla Single Scoop,50,2,100
2019-01-18,Death by Chocolate,180,2,360
2019-01-18,Cafe Caramel,160,5,800
2019-01-18,Hot Chocolate Fudge,120,1,120
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Hot Chocolate Fudge,120,1,120
2019-01-18,Vanilla Double Scoop,80,2,160
2019-01-18,Dry Fruit Double Scoop,90,1,90
2019-01-18,Death by Chocolate,180,4,720
2019-01-18,Vanilla Double Scoop,80,3,240
2019-01-18,Caramel Crunch Single Scoop,70,5,350
2019-01-18,Vanilla Single Scoop,50,3,150
2019-01-18,Death by Chocolate,180,5,900
2019-01-18,Hot Chocolate Fudge,120,2,240
2019-01-18,Vanilla Single Scoop,50,3,150
2019-01-18,Hot Chocolate Fudge,120,5,600
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Vanilla Single Scoop,50,4,200
2019-01-18,Hot Chocolate Fudge,120,4,480
2019-01-18,Cafe Caramel,160,5,800
2019-01-18,Chocolate Europa Single Scoop,70,3,210
2019-01-18,Vanilla Double Scoop,80,1,80
2019-01-18,Butterscotch Single Scoop,60,2,120
2019-01-18,Death by Chocolate,180,2,360
2019-01-18,Death by Chocolate,180,4,720
2019-01-18,Vanilla Single Scoop,50,2,100
2019-01-18,Vanilla Double Scoop,80,4,320
2019-01-18,Death by Chocolate,180,3,540
2019-01-18,Trilogy,160,4,640
2019-01-18,Caramel Crunch Double Scoop,100,1,100
2019-01-18,Butterscotch Single Scoop,60,4,240
2019-01-18,Vanilla Double Scoop,80,2,160
2019-01-18,Butterscotch Single Scoop,60,5,300
2019-01-18,Vanilla Single Scoop,50,4,200
2019-01-18,Pista Double Scoop,90,5,450
2019-01-18,Vanilla Single Scoop,50,4,200
2019-01-18,Fig and Honey Single Scoop,60,2,120
2019-01-18,Vanilla Single Scoop,50,2,100
2019-01-18,Hot Chocolate Fudge,120,3,360
2019-01-18,Cake Fudge,150,1,150
2019-01-18,Hot Chocolate Fudge,120,3,360
2019-01-18,Vanilla Double Scoop,80,5,400
2019-01-18,Hot Chocolate Fudge,120,1,120
2019-01-18,Cake Fudge,150,5,750
2019-01-18,Hot Chocolate Fudge,120,1,120
2019-01-18,Hot Chocolate Fudge,120,2,240
2019-01-18,Chocolate Europa Double Scoop,100,4,400
2019-01-18,Butterscotch Single Scoop,60,2,120
2019-01-18,Vanilla Single Scoop,50,4,200
2019-01-18,Hot Chocolate Fudge,120,1,120
2019-01-18,Fig and Honey Double Scoop,90,2,180
2019-01-19,Cake Fudge,150,4,600
2019-01-19,Death by Chocolate,180,1,180
2019-01-19,Hot Chocolate Fudge,120,2,240
2019-01-19,Vanilla Double Scoop,80,3,240
2019-01-19,Hot Chocolate Fudge,120,4,480
2019-01-19,Cafe Caramel,160,3,480
2019-01-19,Cake Fudge,150,3,450
2019-01-19,Fig and Honey Double Scoop,90,2,180
2019-01-19,Vanilla Double Scoop,80,1,80
2019-01-19,Cake Fudge,150,2,300
2019-01-19,Butterscotch Single Scoop,60,2,120
2019-01-19,Vanilla Double Scoop,80,4,320
2019-01-19,Hot Chocolate Fudge,120,3,360
2019-01-19,Butterscotch Single Scoop,60,3,180
2019-01-19,Vanilla Single Scoop,50,4,200
2019-01-19,Cake Fudge,150,2,300
2019-01-19,Hot Chocolate Fudge,120,1,120
2019-01-19,Vanilla Double Scoop,80,2,160
2019-01-19,Cafe Caramel,160,5,800
2019-01-19,Death by Chocolate,180,1,180
2019-01-19,Butterscotch Double Scoop,90,3,270
2019-01-19,Cafe Caramel,160,2,320
2019-01-19,Butterscotch Single Scoop,60,2,120
2019-01-19,Vanilla Single Scoop,50,3,150
2019-01-19,Dew Drop Sundae,150,1,150
2019-01-19,Vanilla Single Scoop,50,3,150
2019-01-19,Hot Chocolate Fudge,120,3,360
2019-01-19,Vanilla Single Scoop,50,2,100
2019-01-19,Death by Chocolate,180,5,900
2019-01-19,Cake Fudge,150,4,600
2019-01-19,Butterscotch Single Scoop,60,5,300
2019-01-19,Cake Fudge,150,4,600
2019-01-19,Butterscotch Single Scoop,60,4,240
2019-01-19,Butterscotch Single Scoop,60,2,120
2019-01-19,Death by Chocolate,180,4,720
2019-01-19,Vanilla Single Scoop,50,1,50
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Dry Fruit Double Scoop,90,1,90
2019-01-19,Caramel Crunch Double Scoop,100,5,500
2019-01-19,Cafe Caramel,160,5,800
2019-01-19,Hot Chocolate Fudge,120,2,240
2019-01-19,Vanilla Double Scoop,80,3,240
2019-01-19,Vanilla Double Scoop,80,2,160
2019-01-19,Butterscotch Single Scoop,60,2,120
2019-01-19,Chocolate Europa Single Scoop,70,2,140
2019-01-19,Butterscotch Single Scoop,60,1,60
2019-01-19,Hot Chocolate Fudge,120,3,360
2019-01-19,Butterscotch Single Scoop,60,5,300
2019-01-19,Hot Chocolate Fudge,120,3,360
2019-01-19,Vanilla Double Scoop,80,1,80
2019-01-19,Hot Chocolate Fudge,120,2,240
2019-01-19,Cake Fudge,150,5,750
2019-01-19,Vanilla Double Scoop,80,3,240
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Hot Chocolate Fudge,120,1,120
2019-01-19,Hot Chocolate Fudge,120,1,120
2019-01-19,Butterscotch Single Scoop,60,4,240
2019-01-19,Death by Chocolate,180,1,180
2019-01-19,Vanilla Double Scoop,80,5,400
2019-01-19,Rocky Road Single Scoop,50,5,250
2019-01-19,Cake Fudge,150,4,600
2019-01-19,Vanilla Single Scoop,50,2,100
2019-01-19,Hot Chocolate Fudge,120,4,480
2019-01-19,Cake Fudge,150,4,600
2019-01-19,Cafe Caramel,160,4,640
2019-01-19,Cake Fudge,150,4,600
2019-01-19,Hot Chocolate Fudge,120,1,120
2019-01-19,Death by Chocolate,180,1,180
2019-01-19,Butterscotch Single Scoop,60,3,180
2019-01-19,Cafe Caramel,160,4,640
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Butterscotch Single Scoop,60,4,240
2019-01-19,Vanilla Single Scoop,50,1,50
2019-01-19,Vanilla Single Scoop,50,4,200
2019-01-19,Cake Fudge,150,4,600
2019-01-19,Vanilla Double Scoop,80,1,80
2019-01-19,Chocolate Europa Single Scoop,70,2,140
2019-01-19,Cafe Caramel,160,3,480
2019-01-19,Vanilla Single Scoop,50,4,200
2019-01-19,Cake Fudge,150,3,450
2019-01-19,Vanilla Single Scoop,50,3,150
2019-01-19,Cake Fudge,150,2,300
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Butterscotch Single Scoop,60,5,300
2019-01-19,Cafe Caramel,160,5,800
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Butterscotch Single Scoop,60,3,180
2019-01-19,Fig and Honey Double Scoop,90,3,270
2019-01-19,Fig and Honey Double Scoop,90,1,90
2019-01-19,Hot Chocolate Fudge,120,1,120
2019-01-19,Butterscotch Single Scoop,60,2,120
2019-01-19,Butterscotch Single Scoop,60,1,60
2019-01-19,Butterscotch Double Scoop,90,3,270
2019-01-19,Vanilla Double Scoop,80,3,240
2019-01-19,Vanilla Double Scoop,80,3,240
2019-01-19,Cake Fudge,150,2,300
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Death by Chocolate,180,4,720
2019-01-19,Hot Chocolate Fudge,120,4,480
2019-01-19,Death by Chocolate,180,3,540
2019-01-19,Butterscotch Single Scoop,60,4,240
2019-01-19,Vanilla Single Scoop,50,3,150
2019-01-19,Hot Chocolate Fudge,120,2,240
2019-01-19,Butterscotch Single Scoop,60,2,120
2019-01-19,Vanilla Single Scoop,50,4,200
2019-01-19,Vanilla Double Scoop,80,5,400
2019-01-19,Vanilla Double Scoop,80,2,160
2019-01-19,Butterscotch Double Scoop,90,4,360
2019-01-19,Vanilla Double Scoop,80,4,320
2019-01-19,Hot Chocolate Fudge,120,3,360
2019-01-19,Cafe Caramel,160,5,800
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Hot Chocolate Fudge,120,1,120
2019-01-19,Hot Chocolate Fudge,120,4,480
2019-01-19,Hot Chocolate Fudge,120,5,600
2019-01-19,Vanilla Single Scoop,50,4,200
2019-01-19,Butterscotch Single Scoop,60,5,300
2019-01-19,Death by Chocolate,180,3,540
2019-01-19,Death by Chocolate,180,5,900
2019-01-19,Banana Split,140,4,560
2019-01-19,Butterscotch Double Scoop,90,3,270
2019-01-19,Cake Fudge,150,5,750
2019-01-19,Vanilla Double Scoop,80,2,160
2019-01-19,Butterscotch Single Scoop,60,1,60
2019-01-20,Cake Fudge,150,5,750
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Chocolate Europa Single Scoop,70,5,350
2019-01-20,Dry Fruit Double Scoop,90,2,180
2019-01-20,Hot Chocolate Fudge,120,3,360
2019-01-20,Pista Single Scoop,60,2,120
2019-01-20,Cafe Caramel,160,2,320
2019-01-20,Butterscotch Single Scoop,60,4,240
2019-01-20,Hot Chocolate Fudge,120,4,480
2019-01-20,Death by Chocolate,180,2,360
2019-01-20,Cake Fudge,150,4,600
2019-01-20,Vanilla Double Scoop,80,1,80
2019-01-20,Hot Chocolate Fudge,120,3,360
2019-01-20,Death by Chocolate,180,5,900
2019-01-20,Death by Chocolate,180,2,360
2019-01-20,Butterscotch Double Scoop,90,5,450
2019-01-20,Cake Fudge,150,2,300
2019-01-20,Vanilla Double Scoop,80,2,160
2019-01-20,Hot Chocolate Fudge,120,1,120
2019-01-20,Hot Chocolate Fudge,120,3,360
2019-01-20,Butterscotch Single Scoop,60,3,180
2019-01-20,Hot Chocolate Fudge,120,4,480
2019-01-20,Butterscotch Single Scoop,60,4,240
2019-01-20,Vanilla Single Scoop,50,2,100
2019-01-20,Chocolate Europa Single Scoop,70,4,280
2019-01-20,Banana Split,140,4,560
2019-01-20,Vanilla Double Scoop,80,3,240
2019-01-20,Pista Single Scoop,60,2,120
2019-01-20,Hot Chocolate Fudge,120,3,360
2019-01-20,Hot Chocolate Fudge,120,4,480
2019-01-20,Vanilla Double Scoop,80,1,80
2019-01-20,Butterscotch Single Scoop,60,4,240
2019-01-20,Rocky Road Double Scoop,80,1,80
2019-01-20,Hot Chocolate Fudge,120,2,240
2019-01-20,Vanilla Single Scoop,50,3,150
2019-01-20,Rocky Road Single Scoop,50,4,200
2019-01-20,Cake Fudge,150,3,450
2019-01-20,Cake Fudge,150,1,150
2019-01-20,Hot Chocolate Fudge,120,2,240
2019-01-20,Cake Fudge,150,4,600
2019-01-20,Vanilla Single Scoop,50,5,250
2019-01-20,Pista Single Scoop,60,4,240
2019-01-20,Vanilla Double Scoop,80,5,400
2019-01-20,Death by Chocolate,180,5,900
2019-01-20,Vanilla Single Scoop,50,2,100
2019-01-20,Cake Fudge,150,5,750
2019-01-20,Chocolate Europa Double Scoop,100,2,200
2019-01-20,Vanilla Double Scoop,80,3,240
2019-01-20,Banana Split,140,3,420
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Butterscotch Single Scoop,60,4,240
2019-01-20,Hot Chocolate Fudge,120,3,360
2019-01-20,Cake Fudge,150,5,750
2019-01-20,Vanilla Double Scoop,80,5,400
2019-01-20,Cafe Caramel,160,1,160
2019-01-20,Cake Fudge,150,3,450
2019-01-20,Hot Chocolate Fudge,120,2,240
2019-01-20,Vanilla Single Scoop,50,5,250
2019-01-20,Vanilla Single Scoop,50,3,150
2019-01-20,Almond Fudge,150,3,450
2019-01-20,Dry Fruit Double Scoop,90,2,180
2019-01-20,Hot Chocolate Fudge,120,2,240
2019-01-20,Death by Chocolate,180,4,720
2019-01-20,Vanilla Double Scoop,80,4,320
2019-01-20,Butterscotch Single Scoop,60,5,300
2019-01-20,Butterscotch Single Scoop,60,3,180
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Cafe Caramel,160,4,640
2019-01-20,Fig and Honey Double Scoop,90,4,360
2019-01-20,Caramel Crunch Single Scoop,70,2,140
2019-01-20,Hot Chocolate Fudge,120,4,480
2019-01-20,Butterscotch Single Scoop,60,2,120
2019-01-20,Cake Fudge,150,3,450
2019-01-20,Death by Chocolate,180,3,540
2019-01-20,Hot Chocolate Fudge,120,4,480
2019-01-20,Caramel Crunch Single Scoop,70,2,140
2019-01-20,Cake Fudge,150,5,750
2019-01-20,Cafe Caramel,160,4,640
2019-01-20,Vanilla Single Scoop,50,3,150
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Butterscotch Single Scoop,60,2,120
2019-01-20,Vanilla Single Scoop,50,5,250
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Fig and Honey Double Scoop,90,1,90
2019-01-20,Hot Chocolate Fudge,120,3,360
2019-01-20,Death by Chocolate,180,2,360
2019-01-20,Vanilla Single Scoop,50,2,100
2019-01-20,Hot Chocolate Fudge,120,1,120
2019-01-20,Vanilla Single Scoop,50,4,200
2019-01-20,Vanilla Single Scoop,50,2,100
2019-01-20,Death by Chocolate,180,2,360
2019-01-20,Vanilla Single Scoop,50,5,250
2019-01-20,Hot Chocolate Fudge,120,1,120
2019-01-20,Cafe Caramel,160,2,320
2019-01-20,Vanilla Double Scoop,80,1,80
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Cake Fudge,150,2,300
2019-01-20,Butterscotch Single Scoop,60,3,180
2019-01-20,Pista Double Scoop,90,2,180
2019-01-20,Cake Fudge,150,1,150
2019-01-20,Chocolate Europa Single Scoop,70,3,210
2019-01-20,Hot Chocolate Fudge,120,2,240
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Butterscotch Single Scoop,60,4,240
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Hot Chocolate Fudge,120,1,120
2019-01-20,Vanilla Single Scoop,50,2,100
2019-01-20,Pista Double Scoop,90,4,360
2019-01-20,Hot Chocolate Fudge,120,1,120
2019-01-20,Vanilla Single Scoop,50,1,50
2019-01-20,Chocolate Europa Single Scoop,70,5,350
2019-01-20,Vanilla Double Scoop,80,3,240
2019-01-20,Cake Fudge,150,1,150
2019-01-20,Butterscotch Single Scoop,60,4,240
2019-01-20,Vanilla Double Scoop,80,4,320
2019-01-20,Cake Fudge,150,4,600
2019-01-20,Cake Fudge,150,5,750
2019-01-20,Vanilla Single Scoop,50,1,50
2019-01-20,Death by Chocolate,180,5,900
2019-01-20,Butterscotch Single Scoop,60,3,180
2019-01-20,Vanilla Double Scoop,80,1,80
2019-01-20,Cake Fudge,150,5,750
2019-01-20,Cake Fudge,150,5,750
2019-01-20,Caramel Crunch Double Scoop,100,2,200
2019-01-20,Vanilla Double Scoop,80,5,400
2019-01-20,Death by Chocolate,180,2,360
2019-01-20,Cake Fudge,150,2,300
2019-01-20,Death by Chocolate,180,5,900
2019-01-20,Vanilla Single Scoop,50,5,250
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Vanilla Double Scoop,80,2,160
2019-01-20,Death by Chocolate,180,3,540
2019-01-20,Vanilla Single Scoop,50,5,250
2019-01-20,Cake Fudge,150,3,450
2019-01-20,Fig and Honey Double Scoop,90,2,180
2019-01-20,Vanilla Double Scoop,80,2,160
2019-01-20,Hot Chocolate Fudge,120,1,120
2019-01-20,Caramel Crunch Double Scoop,100,4,400
2019-01-20,Almond Fudge,150,3,450
2019-01-20,Hot Chocolate Fudge,120,4,480
2019-01-20,Vanilla Double Scoop,80,2,160
2019-01-20,Dry Fruit Double Scoop,90,5,450
2019-01-20,Hot Chocolate Fudge,120,4,480
2019-01-20,Fig and Honey Double Scoop,90,3,270
2019-01-20,Butterscotch Single Scoop,60,5,300
2019-01-20,Death by Chocolate,180,4,720
2019-01-20,Death by Chocolate,180,5,900
2019-01-20,Caramel Crunch Double Scoop,100,3,300
2019-01-20,Hot Chocolate Fudge,120,1,120
2019-01-20,Butterscotch Single Scoop,60,1,60
2019-01-20,Dry Fruit Single Scoop,60,4,240
2019-01-20,Death by Chocolate,180,5,900
2019-01-20,Butterscotch Single Scoop,60,5,300
2019-01-20,Rocky Road Single Scoop,50,1,50
2019-01-20,Cafe Caramel,160,4,640
2019-01-20,Rocky Road Double Scoop,80,4,320
2019-01-20,Vanilla Single Scoop,50,2,100
2019-01-20,Vanilla Single Scoop,50,1,50
2019-01-20,Hot Chocolate Fudge,120,4,480
2019-01-20,Fig and Honey Single Scoop,60,3,180
2019-01-20,Hot Chocolate Fudge,120,2,240
2019-01-20,Vanilla Double Scoop,80,3,240
2019-01-20,Vanilla Double Scoop,80,4,320
2019-01-20,Death by Chocolate,180,1,180
2019-01-20,Death by Chocolate,180,1,180
2019-01-20,Butterscotch Single Scoop,60,1,60
2019-01-20,Butterscotch Single Scoop,60,3,180
2019-01-20,Chocolate Europa Single Scoop,70,3,210
2019-01-20,Death by Chocolate,180,3,540
2019-01-20,Vanilla Single Scoop,50,4,200
2019-01-20,Vanilla Double Scoop,80,4,320
2019-01-20,Cake Fudge,150,3,450
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-20,Caramel Crunch Double Scoop,100,1,100
2019-01-20,Butterscotch Single Scoop,60,4,240
2019-01-20,Hot Chocolate Fudge,120,5,600
2019-01-21,Vanilla Single Scoop,50,1,50
2019-01-21,Vanilla Double Scoop,80,5,400
2019-01-21,Vanilla Double Scoop,80,5,400
2019-01-21,Hot Chocolate Fudge,120,3,360
2019-01-21,Hot Chocolate Fudge,120,1,120
2019-01-21,Butterscotch Single Scoop,60,1,60
2019-01-21,Trilogy,160,1,160
2019-01-21,Cafe Caramel,160,5,800
2019-01-21,Cafe Caramel,160,5,800
2019-01-21,Cafe Caramel,160,3,480
2019-01-21,Vanilla Double Scoop,80,2,160
2019-01-21,Hot Chocolate Fudge,120,4,480
2019-01-21,Hot Chocolate Fudge,120,3,360
2019-01-21,Dew Drop Sundae,150,3,450
2019-01-21,Vanilla Single Scoop,50,1,50
2019-01-21,Dry Fruit Double Scoop,90,5,450
2019-01-21,Vanilla Double Scoop,80,2,160
2019-01-21,Hot Chocolate Fudge,120,2,240
2019-01-21,Butterscotch Single Scoop,60,5,300
2019-01-21,Hot Chocolate Fudge,120,1,120
2019-01-21,Vanilla Single Scoop,50,1,50
2019-01-21,Hot Chocolate Fudge,120,5,600
2019-01-21,Cafe Caramel,160,5,800
2019-01-21,Hot Chocolate Fudge,120,2,240
2019-01-21,Hot Chocolate Fudge,120,1,120
2019-01-21,Death by Chocolate,180,5,900
2019-01-21,Hot Chocolate Fudge,120,3,360
2019-01-21,Vanilla Double Scoop,80,1,80
2019-01-21,Vanilla Double Scoop,80,3,240
2019-01-21,Butterscotch Single Scoop,60,3,180
2019-01-21,Vanilla Single Scoop,50,1,50
2019-01-21,Vanilla Double Scoop,80,4,320
2019-01-21,Banana Split,140,4,560
2019-01-21,Vanilla Double Scoop,80,4,320
2019-01-21,Vanilla Single Scoop,50,5,250
2019-01-21,Cake Fudge,150,2,300
2019-01-21,Hot Chocolate Fudge,120,2,240
2019-01-21,Cake Fudge,150,3,450
2019-01-21,Vanilla Double Scoop,80,5,400
2019-01-21,Vanilla Double Scoop,80,3,240
2019-01-21,Vanilla Double Scoop,80,3,240
2019-01-21,Butterscotch Single Scoop,60,1,60
2019-01-21,Vanilla Double Scoop,80,2,160
2019-01-21,Cake Fudge,150,3,450
2019-01-21,Vanilla Single Scoop,50,1,50
2019-01-21,Fig and Honey Single Scoop,60,5,300
2019-01-21,Butterscotch Single Scoop,60,5,300
2019-01-21,Cake Fudge,150,5,750
2019-01-21,Vanilla Double Scoop,80,4,320
2019-01-21,Hot Chocolate Fudge,120,1,120
2019-01-21,Hot Chocolate Fudge,120,5,600
2019-01-21,Butterscotch Double Scoop,90,4,360
2019-01-21,Caramel Crunch Double Scoop,100,4,400
2019-01-21,Vanilla Single Scoop,50,2,100
2019-01-21,Hot Chocolate Fudge,120,1,120
2019-01-21,Cake Fudge,150,3,450
2019-01-21,Cake Fudge,150,1,150
2019-01-21,Hot Chocolate Fudge,120,5,600
2019-01-21,Dry Fruit Double Scoop,90,1,90
2019-01-21,Vanilla Single Scoop,50,4,200
2019-01-21,Cake Fudge,150,3,450
2019-01-21,Death by Chocolate,180,2,360
2019-01-21,Cafe Caramel,160,5,800
2019-01-21,Butterscotch Single Scoop,60,5,300
2019-01-21,Vanilla Single Scoop,50,4,200
2019-01-21,Hot Chocolate Fudge,120,1,120
2019-01-21,Hot Chocolate Fudge,120,4,480
2019-01-21,Cake Fudge,150,3,450
2019-01-21,Butterscotch Single Scoop,60,4,240
2019-01-21,Butterscotch Single Scoop,60,5,300
2019-01-21,Cake Fudge,150,2,300
2019-01-21,Cafe Caramel,160,1,160
2019-01-21,Butterscotch Single Scoop,60,3,180
2019-01-21,Death by Chocolate,180,2,360
2019-01-21,Caramel Crunch Double Scoop,100,1,100
2019-01-21,Hot Chocolate Fudge,120,5,600
2019-01-21,Hot Chocolate Fudge,120,2,240
2019-01-21,Cafe Caramel,160,3,480
2019-01-21,Vanilla Double Scoop,80,1,80
2019-01-21,Vanilla Double Scoop,80,3,240
2019-01-21,Vanilla Double Scoop,80,3,240
2019-01-21,Vanilla Single Scoop,50,4,200
2019-01-21,Hot Chocolate Fudge,120,5,600
2019-01-21,Vanilla Single Scoop,50,4,200
2019-01-21,Hot Chocolate Fudge,120,5,600
2019-01-21,Hot Chocolate Fudge,120,2,240
2019-01-21,Cake Fudge,150,4,600
2019-01-21,Death by Chocolate,180,3,540
2019-01-21,Chocolate Europa Single Scoop,70,1,70
2019-01-21,Butterscotch Single Scoop,60,2,120
2019-01-21,Butterscotch Single Scoop,60,3,180
2019-01-21,Butterscotch Single Scoop,60,2,120
2019-01-21,Cake Fudge,150,1,150
2019-01-21,Vanilla Double Scoop,80,4,320
2019-01-21,Vanilla Double Scoop,80,1,80
2019-01-21,Vanilla Double Scoop,80,3,240
2019-01-21,Butterscotch Single Scoop,60,1,60
2019-01-21,Cafe Caramel,160,4,640
2019-01-21,Vanilla Single Scoop,50,4,200
2019-01-21,Death by Chocolate,180,5,900
2019-01-21,Cake Fudge,150,4,600
2019-01-21,Vanilla Double Scoop,80,3,240
2019-01-21,Death by Chocolate,180,3,540
2019-01-22,Cake Fudge,150,1,150
2019-01-22,Butterscotch Single Scoop,60,2,120
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Hot Chocolate Fudge,120,2,240
2019-01-22,Fig and Honey Double Scoop,90,3,270
2019-01-22,Cafe Caramel,160,4,640
2019-01-22,Butterscotch Single Scoop,60,5,300
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Death by Chocolate,180,2,360
2019-01-22,Rocky Road Single Scoop,50,3,150
2019-01-22,Vanilla Single Scoop,50,2,100
2019-01-22,Caramel Crunch Single Scoop,70,5,350
2019-01-22,Vanilla Double Scoop,80,4,320
2019-01-22,Cake Fudge,150,4,600
2019-01-22,Hot Chocolate Fudge,120,3,360
2019-01-22,Cafe Caramel,160,2,320
2019-01-22,Cake Fudge,150,4,600
2019-01-22,Vanilla Double Scoop,80,4,320
2019-01-22,Cafe Caramel,160,2,320
2019-01-22,Death by Chocolate,180,2,360
2019-01-22,Death by Chocolate,180,3,540
2019-01-22,Vanilla Single Scoop,50,5,250
2019-01-22,Cafe Caramel,160,5,800
2019-01-22,Hot Chocolate Fudge,120,2,240
2019-01-22,Vanilla Single Scoop,50,1,50
2019-01-22,Vanilla Double Scoop,80,1,80
2019-01-22,Death by Chocolate,180,3,540
2019-01-22,Caramel Crunch Double Scoop,100,3,300
2019-01-22,Death by Chocolate,180,4,720
2019-01-22,Butterscotch Single Scoop,60,4,240
2019-01-22,Death by Chocolate,180,2,360
2019-01-22,Butterscotch Single Scoop,60,2,120
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Death by Chocolate,180,5,900
2019-01-22,Cake Fudge,150,4,600
2019-01-22,Vanilla Double Scoop,80,5,400
2019-01-22,Hot Chocolate Fudge,120,1,120
2019-01-22,Caramel Crunch Single Scoop,70,2,140
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Hot Chocolate Fudge,120,5,600
2019-01-22,Chocolate Europa Single Scoop,70,4,280
2019-01-22,Pista Double Scoop,90,1,90
2019-01-22,Cake Fudge,150,4,600
2019-01-22,Butterscotch Single Scoop,60,5,300
2019-01-22,Dew Drop Sundae,150,5,750
2019-01-22,Death by Chocolate,180,5,900
2019-01-22,Vanilla Single Scoop,50,2,100
2019-01-22,Cake Fudge,150,4,600
2019-01-22,Butterscotch Single Scoop,60,2,120
2019-01-22,Fig and Honey Single Scoop,60,4,240
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Cake Fudge,150,5,750
2019-01-22,Dry Fruit Double Scoop,90,1,90
2019-01-22,Hot Chocolate Fudge,120,1,120
2019-01-22,Vanilla Single Scoop,50,3,150
2019-01-22,Vanilla Double Scoop,80,4,320
2019-01-22,Butterscotch Single Scoop,60,4,240
2019-01-22,Vanilla Double Scoop,80,2,160
2019-01-22,Death by Chocolate,180,1,180
2019-01-22,Death by Chocolate,180,1,180
2019-01-22,Caramel Crunch Single Scoop,70,3,210
2019-01-22,Vanilla Double Scoop,80,4,320
2019-01-22,Hot Chocolate Fudge,120,5,600
2019-01-22,Cake Fudge,150,5,750
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Vanilla Single Scoop,50,1,50
2019-01-22,Vanilla Double Scoop,80,2,160
2019-01-22,Hot Chocolate Fudge,120,5,600
2019-01-22,Butterscotch Single Scoop,60,4,240
2019-01-22,Butterscotch Single Scoop,60,4,240
2019-01-22,Caramel Crunch Single Scoop,70,4,280
2019-01-22,Death by Chocolate,180,1,180
2019-01-22,Vanilla Double Scoop,80,4,320
2019-01-22,Banana Split,140,5,700
2019-01-22,Butterscotch Single Scoop,60,5,300
2019-01-22,Butterscotch Single Scoop,60,3,180
2019-01-22,Vanilla Single Scoop,50,2,100
2019-01-22,Butterscotch Single Scoop,60,2,120
2019-01-22,Vanilla Double Scoop,80,4,320
2019-01-22,Caramel Crunch Double Scoop,100,3,300
2019-01-22,Cake Fudge,150,5,750
2019-01-22,Vanilla Single Scoop,50,5,250
2019-01-22,Vanilla Double Scoop,80,1,80
2019-01-22,Vanilla Double Scoop,80,4,320
2019-01-22,Cafe Caramel,160,5,800
2019-01-22,Vanilla Single Scoop,50,2,100
2019-01-22,Vanilla Double Scoop,80,3,240
2019-01-22,Cake Fudge,150,1,150
2019-01-22,Vanilla Double Scoop,80,2,160
2019-01-22,Vanilla Single Scoop,50,2,100
2019-01-22,Butterscotch Single Scoop,60,5,300
2019-01-22,Vanilla Double Scoop,80,2,160
2019-01-22,Cake Fudge,150,5,750
2019-01-22,Cake Fudge,150,1,150
2019-01-22,Death by Chocolate,180,5,900
2019-01-22,Hot Chocolate Fudge,120,5,600
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Caramel Crunch Single Scoop,70,3,210
2019-01-22,Hot Chocolate Fudge,120,1,120
2019-01-22,Vanilla Single Scoop,50,5,250
2019-01-22,Vanilla Double Scoop,80,5,400
2019-01-22,Death by Chocolate,180,3,540
2019-01-22,Hot Chocolate Fudge,120,2,240
2019-01-22,Cake Fudge,150,2,300
2019-01-22,Hot Chocolate Fudge,120,1,120
2019-01-22,Hot Chocolate Fudge,120,2,240
2019-01-22,Hot Chocolate Fudge,120,2,240
2019-01-22,Death by Chocolate,180,3,540
2019-01-22,Vanilla Single Scoop,50,2,100
2019-01-22,Cake Fudge,150,5,750
2019-01-22,Death by Chocolate,180,2,360
2019-01-22,Vanilla Single Scoop,50,1,50
2019-01-22,Vanilla Double Scoop,80,4,320
2019-01-22,Butterscotch Single Scoop,60,5,300
2019-01-22,Pista Single Scoop,60,3,180
2019-01-22,Cake Fudge,150,1,150
2019-01-22,Hot Chocolate Fudge,120,2,240
2019-01-22,Hot Chocolate Fudge,120,1,120
2019-01-22,Death by Chocolate,180,3,540
2019-01-22,Cake Fudge,150,4,600
2019-01-22,Butterscotch Single Scoop,60,2,120
2019-01-22,Vanilla Double Scoop,80,2,160
2019-01-22,Rocky Road Single Scoop,50,1,50
2019-01-22,Vanilla Single Scoop,50,5,250
2019-01-22,Butterscotch Single Scoop,60,1,60
2019-01-22,Butterscotch Single Scoop,60,4,240
2019-01-22,Cake Fudge,150,1,150
2019-01-22,Death by Chocolate,180,1,180
2019-01-22,Caramel Crunch Single Scoop,70,5,350
2019-01-22,Vanilla Double Scoop,80,2,160
2019-01-22,Vanilla Single Scoop,50,2,100
2019-01-22,Cake Fudge,150,1,150
2019-01-22,Vanilla Single Scoop,50,5,250
2019-01-22,Butterscotch Single Scoop,60,3,180
2019-01-22,Hot Chocolate Fudge,120,4,480
2019-01-22,Vanilla Single Scoop,50,1,50
2019-01-22,Vanilla Single Scoop,50,4,200
2019-01-22,Vanilla Single Scoop,50,2,100
2019-01-23,Vanilla Single Scoop,50,3,150
2019-01-23,Death by Chocolate,180,1,180
2019-01-23,Cafe Caramel,160,5,800
2019-01-23,Rocky Road Double Scoop,80,3,240
2019-01-23,Hot Chocolate Fudge,120,1,120
2019-01-23,Fig and Honey Single Scoop,60,5,300
2019-01-23,Pista Single Scoop,60,1,60
2019-01-23,Hot Chocolate Fudge,120,5,600
2019-01-23,Butterscotch Single Scoop,60,2,120
2019-01-23,Cake Fudge,150,4,600
2019-01-23,Cake Fudge,150,3,450
2019-01-23,Vanilla Double Scoop,80,1,80
2019-01-23,Death by Chocolate,180,1,180
2019-01-23,Cake Fudge,150,4,600
2019-01-23,Hot Chocolate Fudge,120,2,240
2019-01-23,Cafe Caramel,160,1,160
2019-01-23,Cafe Caramel,160,1,160
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Cake Fudge,150,3,450
2019-01-23,Butterscotch Single Scoop,60,2,120
2019-01-23,Trilogy,160,4,640
2019-01-23,Vanilla Single Scoop,50,5,250
2019-01-23,Cafe Caramel,160,4,640
2019-01-23,Butterscotch Single Scoop,60,1,60
2019-01-23,Hot Chocolate Fudge,120,1,120
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Hot Chocolate Fudge,120,2,240
2019-01-23,Vanilla Double Scoop,80,2,160
2019-01-23,Hot Chocolate Fudge,120,1,120
2019-01-23,Vanilla Single Scoop,50,2,100
2019-01-23,Butterscotch Single Scoop,60,2,120
2019-01-23,Hot Chocolate Fudge,120,5,600
2019-01-23,Trilogy,160,4,640
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Vanilla Single Scoop,50,2,100
2019-01-23,Death by Chocolate,180,1,180
2019-01-23,Dry Fruit Double Scoop,90,2,180
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Death by Chocolate,180,5,900
2019-01-23,Cake Fudge,150,1,150
2019-01-23,Dry Fruit Single Scoop,60,1,60
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Dry Fruit Double Scoop,90,1,90
2019-01-23,Vanilla Single Scoop,50,4,200
2019-01-23,Cake Fudge,150,3,450
2019-01-23,Death by Chocolate,180,4,720
2019-01-23,Cake Fudge,150,2,300
2019-01-23,Vanilla Single Scoop,50,3,150
2019-01-23,Vanilla Double Scoop,80,5,400
2019-01-23,Hot Chocolate Fudge,120,2,240
2019-01-23,Cake Fudge,150,3,450
2019-01-23,Cake Fudge,150,2,300
2019-01-23,Almond Fudge,150,1,150
2019-01-23,Cake Fudge,150,3,450
2019-01-23,Cake Fudge,150,4,600
2019-01-23,Dry Fruit Double Scoop,90,4,360
2019-01-23,Cafe Caramel,160,3,480
2019-01-23,Hot Chocolate Fudge,120,5,600
2019-01-23,Hot Chocolate Fudge,120,1,120
2019-01-23,Rocky Road Single Scoop,50,3,150
2019-01-23,Butterscotch Double Scoop,90,3,270
2019-01-23,Pista Double Scoop,90,3,270
2019-01-23,Vanilla Single Scoop,50,3,150
2019-01-23,Hot Chocolate Fudge,120,3,360
2019-01-23,Cafe Caramel,160,3,480
2019-01-23,Butterscotch Single Scoop,60,1,60
2019-01-23,Death by Chocolate,180,2,360
2019-01-23,Caramel Crunch Double Scoop,100,5,500
2019-01-23,Vanilla Single Scoop,50,3,150
2019-01-23,Death by Chocolate,180,1,180
2019-01-23,Hot Chocolate Fudge,120,3,360
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Caramel Crunch Single Scoop,70,5,350
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Hot Chocolate Fudge,120,5,600
2019-01-23,Hot Chocolate Fudge,120,1,120
2019-01-23,Pista Double Scoop,90,5,450
2019-01-23,Vanilla Double Scoop,80,2,160
2019-01-23,Cafe Caramel,160,2,320
2019-01-23,Hot Chocolate Fudge,120,4,480
2019-01-23,Dry Fruit Double Scoop,90,2,180
2019-01-23,Butterscotch Single Scoop,60,1,60
2019-01-23,Hot Chocolate Fudge,120,2,240
2019-01-23,Hot Chocolate Fudge,120,4,480
2019-01-23,Hot Chocolate Fudge,120,2,240
2019-01-23,Cake Fudge,150,2,300
2019-01-23,Vanilla Single Scoop,50,3,150
2019-01-23,Dry Fruit Double Scoop,90,1,90
2019-01-23,Vanilla Single Scoop,50,2,100
2019-01-23,Cake Fudge,150,2,300
2019-01-23,Trilogy,160,3,480
2019-01-23,Cake Fudge,150,5,750
2019-01-23,Hot Chocolate Fudge,120,3,360
2019-01-23,Death by Chocolate,180,1,180
2019-01-23,Hot Chocolate Fudge,120,3,360
2019-01-23,Hot Chocolate Fudge,120,4,480
2019-01-23,Hot Chocolate Fudge,120,1,120
2019-01-23,Vanilla Double Scoop,80,4,320
2019-01-23,Butterscotch Single Scoop,60,2,120
2019-01-23,Vanilla Double Scoop,80,2,160
2019-01-23,Vanilla Single Scoop,50,1,50
2019-01-23,Rocky Road Single Scoop,50,3,150
2019-01-23,Hot Chocolate Fudge,120,4,480
2019-01-23,Vanilla Single Scoop,50,4,200
2019-01-23,Cake Fudge,150,2,300
2019-01-23,Hot Chocolate Fudge,120,5,600
2019-01-23,Hot Chocolate Fudge,120,5,600
2019-01-23,Cake Fudge,150,1,150
2019-01-23,Cafe Caramel,160,3,480
2019-01-23,Vanilla Single Scoop,50,4,200
2019-01-23,Butterscotch Double Scoop,90,5,450
2019-01-23,Death by Chocolate,180,5,900
2019-01-23,Vanilla Double Scoop,80,4,320
2019-01-23,Death by Chocolate,180,4,720
2019-01-23,Hot Chocolate Fudge,120,1,120
2019-01-23,Banana Split,140,5,700
2019-01-23,Hot Chocolate Fudge,120,5,600
2019-01-23,Dry Fruit Single Scoop,60,3,180
2019-01-23,Cake Fudge,150,5,750
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Trilogy,160,4,640
2019-01-23,Vanilla Double Scoop,80,1,80
2019-01-23,Hot Chocolate Fudge,120,5,600
2019-01-23,Hot Chocolate Fudge,120,1,120
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Chocolate Europa Double Scoop,100,4,400
2019-01-23,Vanilla Double Scoop,80,1,80
2019-01-23,Death by Chocolate,180,4,720
2019-01-23,Cake Fudge,150,2,300
2019-01-23,Death by Chocolate,180,5,900
2019-01-23,Cake Fudge,150,5,750
2019-01-23,Cake Fudge,150,3,450
2019-01-23,Vanilla Double Scoop,80,4,320
2019-01-23,Butterscotch Single Scoop,60,5,300
2019-01-23,Hot Chocolate Fudge,120,2,240
2019-01-23,Cake Fudge,150,1,150
2019-01-23,Butterscotch Single Scoop,60,3,180
2019-01-23,Pista Double Scoop,90,3,270
2019-01-23,Vanilla Single Scoop,50,3,150
2019-01-23,Cake Fudge,150,3,450
2019-01-23,Vanilla Double Scoop,80,3,240
2019-01-23,Cafe Caramel,160,1,160
2019-01-23,Butterscotch Single Scoop,60,3,180
2019-01-23,Butterscotch Single Scoop,60,5,300
2019-01-23,Vanilla Single Scoop,50,2,100
2019-01-23,Cafe Caramel,160,4,640
2019-01-24,Butterscotch Single Scoop,60,3,180
2019-01-24,Hot Chocolate Fudge,120,4,480
2019-01-24,Fig and Honey Double Scoop,90,3,270
2019-01-24,Hot Chocolate Fudge,120,2,240
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Vanilla Double Scoop,80,2,160
2019-01-24,Mint Fudge,120,1,120
2019-01-24,Hot Chocolate Fudge,120,1,120
2019-01-24,Hot Chocolate Fudge,120,5,600
2019-01-24,Cafe Caramel,160,1,160
2019-01-24,Butterscotch Single Scoop,60,5,300
2019-01-24,Death by Chocolate,180,5,900
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-24,Cake Fudge,150,1,150
2019-01-24,Vanilla Single Scoop,50,2,100
2019-01-24,Butterscotch Single Scoop,60,3,180
2019-01-24,Cake Fudge,150,2,300
2019-01-24,Death by Chocolate,180,3,540
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Butterscotch Single Scoop,60,2,120
2019-01-24,Vanilla Double Scoop,80,1,80
2019-01-24,Vanilla Double Scoop,80,4,320
2019-01-24,Hot Chocolate Fudge,120,1,120
2019-01-24,Death by Chocolate,180,2,360
2019-01-24,Hot Chocolate Fudge,120,5,600
2019-01-24,Death by Chocolate,180,3,540
2019-01-24,Dry Fruit Single Scoop,60,2,120
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-24,Vanilla Single Scoop,50,5,250
2019-01-24,Rocky Road Single Scoop,50,3,150
2019-01-24,Hot Chocolate Fudge,120,2,240
2019-01-24,Hot Chocolate Fudge,120,2,240
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Chocolate Europa Single Scoop,70,2,140
2019-01-24,Death by Chocolate,180,1,180
2019-01-24,Hot Chocolate Fudge,120,2,240
2019-01-24,Dry Fruit Double Scoop,90,2,180
2019-01-24,Vanilla Single Scoop,50,1,50
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-24,Butterscotch Single Scoop,60,4,240
2019-01-24,Vanilla Single Scoop,50,4,200
2019-01-24,Death by Chocolate,180,4,720
2019-01-24,Almond Fudge,150,1,150
2019-01-24,Vanilla Single Scoop,50,1,50
2019-01-24,Death by Chocolate,180,5,900
2019-01-24,Hot Chocolate Fudge,120,2,240
2019-01-24,Butterscotch Double Scoop,90,3,270
2019-01-24,Cake Fudge,150,4,600
2019-01-24,Hot Chocolate Fudge,120,5,600
2019-01-24,Death by Chocolate,180,2,360
2019-01-24,Vanilla Double Scoop,80,4,320
2019-01-24,Cake Fudge,150,4,600
2019-01-24,Cafe Caramel,160,5,800
2019-01-24,Cake Fudge,150,4,600
2019-01-24,Vanilla Double Scoop,80,3,240
2019-01-24,Fig and Honey Double Scoop,90,2,180
2019-01-24,Death by Chocolate,180,1,180
2019-01-24,Cake Fudge,150,1,150
2019-01-24,Butterscotch Double Scoop,90,2,180
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-24,Vanilla Double Scoop,80,1,80
2019-01-24,Banana Split,140,3,420
2019-01-24,Cake Fudge,150,1,150
2019-01-24,Dry Fruit Single Scoop,60,4,240
2019-01-24,Hot Chocolate Fudge,120,5,600
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-24,Death by Chocolate,180,5,900
2019-01-24,Pista Double Scoop,90,5,450
2019-01-24,Caramel Crunch Double Scoop,100,3,300
2019-01-24,Butterscotch Single Scoop,60,2,120
2019-01-24,Vanilla Double Scoop,80,4,320
2019-01-24,Hot Chocolate Fudge,120,4,480
2019-01-24,Vanilla Single Scoop,50,4,200
2019-01-24,Caramel Crunch Double Scoop,100,1,100
2019-01-24,Cafe Caramel,160,1,160
2019-01-24,Hot Chocolate Fudge,120,4,480
2019-01-24,Hot Chocolate Fudge,120,5,600
2019-01-24,Cake Fudge,150,5,750
2019-01-24,Cake Fudge,150,4,600
2019-01-24,Fig and Honey Double Scoop,90,2,180
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Vanilla Single Scoop,50,5,250
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Vanilla Double Scoop,80,1,80
2019-01-24,Vanilla Double Scoop,80,3,240
2019-01-24,Hot Chocolate Fudge,120,1,120
2019-01-24,Cafe Caramel,160,2,320
2019-01-24,Cake Fudge,150,5,750
2019-01-24,Pista Double Scoop,90,1,90
2019-01-24,Death by Chocolate,180,5,900
2019-01-24,Almond Fudge,150,1,150
2019-01-24,Dry Fruit Single Scoop,60,4,240
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Cake Fudge,150,2,300
2019-01-24,Cafe Caramel,160,5,800
2019-01-24,Vanilla Double Scoop,80,4,320
2019-01-24,Cake Fudge,150,2,300
2019-01-24,Hot Chocolate Fudge,120,2,240
2019-01-24,Hot Chocolate Fudge,120,1,120
2019-01-24,Vanilla Single Scoop,50,1,50
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-24,Vanilla Single Scoop,50,3,150
2019-01-24,Hot Chocolate Fudge,120,2,240
2019-01-24,Death by Chocolate,180,2,360
2019-01-24,Butterscotch Single Scoop,60,1,60
2019-01-24,Vanilla Single Scoop,50,3,150
2019-01-24,Hot Chocolate Fudge,120,4,480
2019-01-24,Vanilla Double Scoop,80,3,240
2019-01-24,Cafe Caramel,160,2,320
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Rocky Road Double Scoop,80,5,400
2019-01-24,Vanilla Double Scoop,80,4,320
2019-01-24,Vanilla Single Scoop,50,5,250
2019-01-24,Death by Chocolate,180,5,900
2019-01-24,Death by Chocolate,180,5,900
2019-01-24,Hot Chocolate Fudge,120,2,240
2019-01-24,Fig and Honey Single Scoop,60,5,300
2019-01-24,Vanilla Single Scoop,50,5,250
2019-01-24,Cake Fudge,150,4,600
2019-01-24,Hot Chocolate Fudge,120,3,360
2019-01-24,Vanilla Single Scoop,50,3,150
2019-01-24,Vanilla Double Scoop,80,4,320
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-24,Fig and Honey Single Scoop,60,2,120
2019-01-24,Hot Chocolate Fudge,120,5,600
2019-01-24,Vanilla Double Scoop,80,4,320
2019-01-24,Vanilla Single Scoop,50,4,200
2019-01-24,Vanilla Double Scoop,80,5,400
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Hot Chocolate Fudge,120,2,240
2019-01-25,Caramel Crunch Double Scoop,100,5,500
2019-01-25,Rocky Road Single Scoop,50,1,50
2019-01-25,Caramel Crunch Double Scoop,100,1,100
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Vanilla Single Scoop,50,4,200
2019-01-25,Butterscotch Double Scoop,90,3,270
2019-01-25,Caramel Crunch Double Scoop,100,3,300
2019-01-25,Death by Chocolate,180,1,180
2019-01-25,Vanilla Single Scoop,50,2,100
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Butterscotch Single Scoop,60,5,300
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Cafe Caramel,160,3,480
2019-01-25,Chocolate Europa Double Scoop,100,2,200
2019-01-25,Rocky Road Single Scoop,50,1,50
2019-01-25,Death by Chocolate,180,5,900
2019-01-25,Death by Chocolate,180,1,180
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Cafe Caramel,160,2,320
2019-01-25,Caramel Crunch Double Scoop,100,2,200
2019-01-25,Caramel Crunch Double Scoop,100,3,300
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Cake Fudge,150,5,750
2019-01-25,Vanilla Single Scoop,50,4,200
2019-01-25,Vanilla Double Scoop,80,3,240
2019-01-25,Cafe Caramel,160,5,800
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Cake Fudge,150,5,750
2019-01-25,Death by Chocolate,180,4,720
2019-01-25,Almond Fudge,150,3,450
2019-01-25,Pista Double Scoop,90,3,270
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Cake Fudge,150,2,300
2019-01-25,Vanilla Double Scoop,80,2,160
2019-01-25,Vanilla Double Scoop,80,2,160
2019-01-25,Hot Chocolate Fudge,120,1,120
2019-01-25,Cake Fudge,150,2,300
2019-01-25,Vanilla Single Scoop,50,1,50
2019-01-25,Mint Fudge,120,3,360
2019-01-25,Death by Chocolate,180,1,180
2019-01-25,Cafe Caramel,160,3,480
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Chocolate Europa Double Scoop,100,5,500
2019-01-25,Butterscotch Single Scoop,60,5,300
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Hot Chocolate Fudge,120,4,480
2019-01-25,Chocolate Europa Single Scoop,70,2,140
2019-01-25,Hot Chocolate Fudge,120,3,360
2019-01-25,Cafe Caramel,160,1,160
2019-01-25,Cake Fudge,150,3,450
2019-01-25,Rocky Road Double Scoop,80,1,80
2019-01-25,Cafe Caramel,160,2,320
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Butterscotch Single Scoop,60,1,60
2019-01-25,Vanilla Single Scoop,50,3,150
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Vanilla Single Scoop,50,5,250
2019-01-25,Cafe Caramel,160,4,640
2019-01-25,Vanilla Single Scoop,50,3,150
2019-01-25,Hot Chocolate Fudge,120,3,360
2019-01-25,Butterscotch Single Scoop,60,5,300
2019-01-25,Vanilla Double Scoop,80,2,160
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Death by Chocolate,180,2,360
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Vanilla Single Scoop,50,4,200
2019-01-25,Hot Chocolate Fudge,120,2,240
2019-01-25,Hot Chocolate Fudge,120,2,240
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Cake Fudge,150,3,450
2019-01-25,Cafe Caramel,160,3,480
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Cake Fudge,150,2,300
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Butterscotch Single Scoop,60,3,180
2019-01-25,Cafe Caramel,160,2,320
2019-01-25,Cake Fudge,150,1,150
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Death by Chocolate,180,4,720
2019-01-25,Butterscotch Single Scoop,60,3,180
2019-01-25,Cake Fudge,150,1,150
2019-01-25,Cake Fudge,150,4,600
2019-01-25,Hot Chocolate Fudge,120,1,120
2019-01-25,Hot Chocolate Fudge,120,1,120
2019-01-25,Vanilla Single Scoop,50,4,200
2019-01-25,Cafe Caramel,160,1,160
2019-01-25,Dry Fruit Double Scoop,90,1,90
2019-01-25,Vanilla Single Scoop,50,4,200
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Death by Chocolate,180,4,720
2019-01-25,Butterscotch Double Scoop,90,3,270
2019-01-25,Hot Chocolate Fudge,120,2,240
2019-01-25,Vanilla Single Scoop,50,1,50
2019-01-25,Chocolate Europa Double Scoop,100,1,100
2019-01-25,Hot Chocolate Fudge,120,2,240
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Death by Chocolate,180,5,900
2019-01-25,Butterscotch Single Scoop,60,1,60
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Cake Fudge,150,2,300
2019-01-25,Cafe Caramel,160,5,800
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Cake Fudge,150,1,150
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Butterscotch Single Scoop,60,3,180
2019-01-25,Vanilla Single Scoop,50,5,250
2019-01-25,Cake Fudge,150,2,300
2019-01-25,Vanilla Double Scoop,80,2,160
2019-01-25,Butterscotch Single Scoop,60,4,240
2019-01-25,Hot Chocolate Fudge,120,2,240
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Hot Chocolate Fudge,120,3,360
2019-01-25,Hot Chocolate Fudge,120,1,120
2019-01-25,Butterscotch Single Scoop,60,1,60
2019-01-25,Cake Fudge,150,5,750
2019-01-25,Cafe Caramel,160,5,800
2019-01-25,Cake Fudge,150,2,300
2019-01-25,Cake Fudge,150,2,300
2019-01-25,Hot Chocolate Fudge,120,3,360
2019-01-25,Cake Fudge,150,4,600
2019-01-25,Hot Chocolate Fudge,120,4,480
2019-01-25,Butterscotch Single Scoop,60,4,240
2019-01-25,Cafe Caramel,160,4,640
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Death by Chocolate,180,3,540
2019-01-25,Butterscotch Single Scoop,60,2,120
2019-01-25,Butterscotch Single Scoop,60,2,120
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Hot Chocolate Fudge,120,4,480
2019-01-25,Hot Chocolate Fudge,120,1,120
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Hot Chocolate Fudge,120,4,480
2019-01-25,Vanilla Double Scoop,80,1,80
2019-01-25,Cake Fudge,150,3,450
2019-01-25,Vanilla Single Scoop,50,4,200
2019-01-25,Caramel Crunch Single Scoop,70,1,70
2019-01-25,Vanilla Single Scoop,50,4,200
2019-01-25,Vanilla Double Scoop,80,5,400
2019-01-25,Vanilla Double Scoop,80,4,320
2019-01-25,Cafe Caramel,160,5,800
2019-01-25,Fig and Honey Single Scoop,60,3,180
2019-01-25,Butterscotch Single Scoop,60,5,300
2019-01-25,Caramel Crunch Double Scoop,100,3,300
2019-01-25,Hot Chocolate Fudge,120,5,600
2019-01-25,Death by Chocolate,180,3,540
2019-01-25,Butterscotch Single Scoop,60,5,300
2019-01-26,Fig and Honey Double Scoop,90,5,450
2019-01-26,Cafe Caramel,160,3,480
2019-01-26,Cake Fudge,150,5,750
2019-01-26,Cake Fudge,150,4,600
2019-01-26,Cafe Caramel,160,2,320
2019-01-26,Hot Chocolate Fudge,120,1,120
2019-01-26,Dry Fruit Double Scoop,90,5,450
2019-01-26,Cake Fudge,150,5,750
2019-01-26,Cake Fudge,150,1,150
2019-01-26,Vanilla Double Scoop,80,3,240
2019-01-26,Vanilla Double Scoop,80,5,400
2019-01-26,Cake Fudge,150,4,600
2019-01-26,Fig and Honey Double Scoop,90,1,90
2019-01-26,Vanilla Double Scoop,80,4,320
2019-01-26,Pista Single Scoop,60,4,240
2019-01-26,Hot Chocolate Fudge,120,5,600
2019-01-26,Hot Chocolate Fudge,120,1,120
2019-01-26,Cake Fudge,150,5,750
2019-01-26,Fig and Honey Double Scoop,90,3,270
2019-01-26,Vanilla Double Scoop,80,1,80
2019-01-26,Hot Chocolate Fudge,120,1,120
2019-01-26,Butterscotch Single Scoop,60,4,240
2019-01-26,Chocolate Europa Double Scoop,100,5,500
2019-01-26,Butterscotch Single Scoop,60,5,300
2019-01-26,Cake Fudge,150,2,300
2019-01-26,Death by Chocolate,180,1,180
2019-01-26,Vanilla Double Scoop,80,2,160
2019-01-26,Vanilla Double Scoop,80,4,320
2019-01-26,Vanilla Single Scoop,50,2,100
2019-01-26,Hot Chocolate Fudge,120,2,240
2019-01-26,Vanilla Double Scoop,80,5,400
2019-01-26,Cake Fudge,150,3,450
2019-01-26,Hot Chocolate Fudge,120,5,600
2019-01-26,Caramel Crunch Single Scoop,70,4,280
2019-01-26,Hot Chocolate Fudge,120,3,360
2019-01-26,Cake Fudge,150,1,150
2019-01-26,Vanilla Double Scoop,80,4,320
2019-01-26,Hot Chocolate Fudge,120,3,360
2019-01-26,Hot Chocolate Fudge,120,1,120
2019-01-26,Vanilla Double Scoop,80,3,240
2019-01-26,Cafe Caramel,160,3,480
2019-01-26,Hot Chocolate Fudge,120,2,240
2019-01-26,Vanilla Single Scoop,50,5,250
2019-01-26,Cafe Caramel,160,2,320
2019-01-26,Vanilla Single Scoop,50,2,100
2019-01-26,Vanilla Double Scoop,80,2,160
2019-01-26,Cake Fudge,150,5,750
2019-01-26,Butterscotch Single Scoop,60,2,120
2019-01-26,Vanilla Single Scoop,50,2,100
2019-01-26,Vanilla Single Scoop,50,3,150
2019-01-26,Cake Fudge,150,4,600
2019-01-26,Chocolate Europa Single Scoop,70,2,140
2019-01-26,Cake Fudge,150,5,750
2019-01-26,Cafe Caramel,160,2,320
2019-01-26,Cafe Caramel,160,3,480
2019-01-26,Hot Chocolate Fudge,120,2,240
2019-01-26,Butterscotch Single Scoop,60,1,60
2019-01-26,Cake Fudge,150,2,300
2019-01-26,Vanilla Double Scoop,80,1,80
2019-01-26,Butterscotch Single Scoop,60,3,180
2019-01-26,Hot Chocolate Fudge,120,5,600
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Cafe Caramel,160,1,160
2019-01-26,Vanilla Single Scoop,50,5,250
2019-01-26,Cake Fudge,150,4,600
2019-01-26,Butterscotch Single Scoop,60,3,180
2019-01-26,Dry Fruit Single Scoop,60,1,60
2019-01-26,Cafe Caramel,160,1,160
2019-01-26,Vanilla Double Scoop,80,3,240
2019-01-26,Dew Drop Sundae,150,1,150
2019-01-26,Vanilla Double Scoop,80,5,400
2019-01-26,Hot Chocolate Fudge,120,2,240
2019-01-26,Butterscotch Single Scoop,60,2,120
2019-01-26,Cake Fudge,150,5,750
2019-01-26,Vanilla Double Scoop,80,1,80
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Caramel Crunch Double Scoop,100,2,200
2019-01-26,Cake Fudge,150,3,450
2019-01-26,Hot Chocolate Fudge,120,2,240
2019-01-26,Vanilla Double Scoop,80,3,240
2019-01-26,Vanilla Double Scoop,80,1,80
2019-01-26,Cake Fudge,150,3,450
2019-01-26,Hot Chocolate Fudge,120,5,600
2019-01-26,Butterscotch Single Scoop,60,4,240
2019-01-26,Death by Chocolate,180,3,540
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Hot Chocolate Fudge,120,5,600
2019-01-26,Cake Fudge,150,3,450
2019-01-26,Cake Fudge,150,4,600
2019-01-26,Cafe Caramel,160,5,800
2019-01-26,Cake Fudge,150,1,150
2019-01-26,Pista Single Scoop,60,1,60
2019-01-26,Death by Chocolate,180,3,540
2019-01-26,Vanilla Single Scoop,50,4,200
2019-01-26,Rocky Road Single Scoop,50,2,100
2019-01-26,Hot Chocolate Fudge,120,1,120
2019-01-26,Vanilla Single Scoop,50,3,150
2019-01-26,Death by Chocolate,180,4,720
2019-01-26,Vanilla Double Scoop,80,3,240
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Vanilla Double Scoop,80,5,400
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Almond Fudge,150,2,300
2019-01-26,Vanilla Double Scoop,80,3,240
2019-01-26,Vanilla Single Scoop,50,4,200
2019-01-26,Dry Fruit Single Scoop,60,2,120
2019-01-26,Death by Chocolate,180,2,360
2019-01-26,Death by Chocolate,180,5,900
2019-01-26,Hot Chocolate Fudge,120,2,240
2019-01-26,Cafe Caramel,160,2,320
2019-01-26,Rocky Road Single Scoop,50,4,200
2019-01-26,Death by Chocolate,180,2,360
2019-01-26,Death by Chocolate,180,3,540
2019-01-26,Hot Chocolate Fudge,120,1,120
2019-01-26,Hot Chocolate Fudge,120,3,360
2019-01-26,Death by Chocolate,180,1,180
2019-01-26,Caramel Crunch Single Scoop,70,2,140
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Cafe Caramel,160,5,800
2019-01-26,Pista Single Scoop,60,2,120
2019-01-26,Hot Chocolate Fudge,120,3,360
2019-01-26,Death by Chocolate,180,3,540
2019-01-26,Cake Fudge,150,4,600
2019-01-26,Pista Single Scoop,60,4,240
2019-01-26,Cake Fudge,150,2,300
2019-01-26,Dry Fruit Single Scoop,60,3,180
2019-01-26,Death by Chocolate,180,5,900
2019-01-26,Fig and Honey Single Scoop,60,3,180
2019-01-26,Cake Fudge,150,1,150
2019-01-26,Hot Chocolate Fudge,120,5,600
2019-01-26,Death by Chocolate,180,2,360
2019-01-26,Hot Chocolate Fudge,120,5,600
2019-01-26,Hot Chocolate Fudge,120,3,360
2019-01-26,Vanilla Double Scoop,80,1,80
2019-01-26,Dry Fruit Single Scoop,60,4,240
2019-01-26,Death by Chocolate,180,5,900
2019-01-26,Cake Fudge,150,3,450
2019-01-26,Vanilla Double Scoop,80,2,160
2019-01-26,Vanilla Single Scoop,50,1,50
2019-01-26,Caramel Crunch Single Scoop,70,3,210
2019-01-26,Death by Chocolate,180,1,180
2019-01-26,Cafe Caramel,160,3,480
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Almond Fudge,150,2,300
2019-01-26,Vanilla Single Scoop,50,4,200
2019-01-26,Hot Chocolate Fudge,120,3,360
2019-01-26,Hot Chocolate Fudge,120,1,120
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Hot Chocolate Fudge,120,1,120
2019-01-26,Hot Chocolate Fudge,120,4,480
2019-01-26,Butterscotch Single Scoop,60,2,120
2019-01-26,Caramel Crunch Single Scoop,70,5,350
2019-01-26,Vanilla Double Scoop,80,5,400
2019-01-26,Death by Chocolate,180,5,900
2019-01-26,Hot Chocolate Fudge,120,3,360
2019-01-26,Cake Fudge,150,1,150
2019-01-26,Butterscotch Single Scoop,60,5,300
2019-01-26,Butterscotch Single Scoop,60,4,240
2019-01-26,Banana Split,140,1,140
2019-01-26,Vanilla Single Scoop,50,3,150
2019-01-26,Hot Chocolate Fudge,120,3,360
2019-01-26,Death by Chocolate,180,4,720
2019-01-26,Vanilla Double Scoop,80,1,80
2019-01-26,Vanilla Double Scoop,80,2,160
2019-01-26,Vanilla Double Scoop,80,4,320
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Hot Chocolate Fudge,120,5,600
2019-01-27,Death by Chocolate,180,2,360
2019-01-27,Cake Fudge,150,1,150
2019-01-27,Butterscotch Single Scoop,60,5,300
2019-01-27,Vanilla Double Scoop,80,1,80
2019-01-27,Vanilla Single Scoop,50,1,50
2019-01-27,Hot Chocolate Fudge,120,5,600
2019-01-27,Vanilla Single Scoop,50,1,50
2019-01-27,Vanilla Double Scoop,80,5,400
2019-01-27,Cafe Caramel,160,5,800
2019-01-27,Butterscotch Single Scoop,60,2,120
2019-01-27,Pista Single Scoop,60,3,180
2019-01-27,Vanilla Single Scoop,50,3,150
2019-01-27,Death by Chocolate,180,4,720
2019-01-27,Hot Chocolate Fudge,120,4,480
2019-01-27,Hot Chocolate Fudge,120,2,240
2019-01-27,Cake Fudge,150,1,150
2019-01-27,Hot Chocolate Fudge,120,5,600
2019-01-27,Hot Chocolate Fudge,120,4,480
2019-01-27,Death by Chocolate,180,5,900
2019-01-27,Hot Chocolate Fudge,120,4,480
2019-01-27,Death by Chocolate,180,2,360
2019-01-27,Cake Fudge,150,4,600
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Death by Chocolate,180,5,900
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Cake Fudge,150,1,150
2019-01-27,Cafe Caramel,160,5,800
2019-01-27,Vanilla Double Scoop,80,5,400
2019-01-27,Vanilla Double Scoop,80,1,80
2019-01-27,Cake Fudge,150,2,300
2019-01-27,Vanilla Single Scoop,50,1,50
2019-01-27,Butterscotch Single Scoop,60,2,120
2019-01-27,Vanilla Double Scoop,80,1,80
2019-01-27,Death by Chocolate,180,5,900
2019-01-27,Hot Chocolate Fudge,120,2,240
2019-01-27,Hot Chocolate Fudge,120,2,240
2019-01-27,Pista Double Scoop,90,4,360
2019-01-27,Rocky Road Single Scoop,50,4,200
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Cake Fudge,150,4,600
2019-01-27,Rocky Road Single Scoop,50,2,100
2019-01-27,Death by Chocolate,180,2,360
2019-01-27,Death by Chocolate,180,2,360
2019-01-27,Vanilla Single Scoop,50,5,250
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Butterscotch Single Scoop,60,3,180
2019-01-27,Cake Fudge,150,3,450
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Vanilla Single Scoop,50,3,150
2019-01-27,Butterscotch Single Scoop,60,4,240
2019-01-27,Hot Chocolate Fudge,120,1,120
2019-01-27,Fig and Honey Double Scoop,90,1,90
2019-01-27,Cake Fudge,150,2,300
2019-01-27,Death by Chocolate,180,2,360
2019-01-27,Death by Chocolate,180,2,360
2019-01-27,Vanilla Single Scoop,50,4,200
2019-01-27,Cafe Caramel,160,1,160
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Caramel Crunch Single Scoop,70,2,140
2019-01-27,Vanilla Double Scoop,80,5,400
2019-01-27,Cafe Caramel,160,3,480
2019-01-27,Almond Fudge,150,2,300
2019-01-27,Butterscotch Single Scoop,60,2,120
2019-01-27,Death by Chocolate,180,2,360
2019-01-27,Cake Fudge,150,4,600
2019-01-27,Hot Chocolate Fudge,120,5,600
2019-01-27,Hot Chocolate Fudge,120,1,120
2019-01-27,Vanilla Double Scoop,80,2,160
2019-01-27,Cafe Caramel,160,5,800
2019-01-27,Cake Fudge,150,4,600
2019-01-27,Chocolate Europa Single Scoop,70,5,350
2019-01-27,Cafe Caramel,160,4,640
2019-01-27,Cafe Caramel,160,3,480
2019-01-27,Death by Chocolate,180,4,720
2019-01-27,Vanilla Single Scoop,50,3,150
2019-01-27,Vanilla Single Scoop,50,2,100
2019-01-27,Death by Chocolate,180,3,540
2019-01-27,Dry Fruit Double Scoop,90,5,450
2019-01-27,Caramel Crunch Single Scoop,70,2,140
2019-01-27,Banana Split,140,5,700
2019-01-27,Death by Chocolate,180,3,540
2019-01-27,Death by Chocolate,180,1,180
2019-01-27,Vanilla Single Scoop,50,5,250
2019-01-27,Butterscotch Single Scoop,60,4,240
2019-01-27,Hot Chocolate Fudge,120,2,240
2019-01-27,Chocolate Europa Single Scoop,70,2,140
2019-01-27,Butterscotch Single Scoop,60,3,180
2019-01-27,Vanilla Single Scoop,50,1,50
2019-01-27,Vanilla Double Scoop,80,2,160
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Cake Fudge,150,4,600
2019-01-27,Vanilla Single Scoop,50,3,150
2019-01-27,Cake Fudge,150,1,150
2019-01-27,Butterscotch Single Scoop,60,5,300
2019-01-27,Vanilla Single Scoop,50,3,150
2019-01-27,Cake Fudge,150,3,450
2019-01-27,Vanilla Single Scoop,50,4,200
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Vanilla Single Scoop,50,5,250
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Butterscotch Single Scoop,60,1,60
2019-01-27,Vanilla Double Scoop,80,1,80
2019-01-27,Cafe Caramel,160,5,800
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Trilogy,160,4,640
2019-01-27,Cake Fudge,150,1,150
2019-01-27,Butterscotch Single Scoop,60,3,180
2019-01-27,Hot Chocolate Fudge,120,2,240
2019-01-27,Fig and Honey Single Scoop,60,2,120
2019-01-27,Hot Chocolate Fudge,120,1,120
2019-01-27,Cake Fudge,150,5,750
2019-01-27,Fig and Honey Single Scoop,60,3,180
2019-01-27,Vanilla Double Scoop,80,1,80
2019-01-27,Death by Chocolate,180,1,180
2019-01-27,Hot Chocolate Fudge,120,2,240
2019-01-27,Death by Chocolate,180,5,900
2019-01-27,Cafe Caramel,160,5,800
2019-01-27,Vanilla Double Scoop,80,3,240
2019-01-27,Cafe Caramel,160,2,320
2019-01-27,Death by Chocolate,180,1,180
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Caramel Crunch Single Scoop,70,1,70
2019-01-27,Dry Fruit Double Scoop,90,3,270
2019-01-27,Vanilla Double Scoop,80,5,400
2019-01-27,Hot Chocolate Fudge,120,5,600
2019-01-27,Cake Fudge,150,4,600
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Cake Fudge,150,4,600
2019-01-27,Vanilla Double Scoop,80,5,400
2019-01-27,Cake Fudge,150,4,600
2019-01-27,Hot Chocolate Fudge,120,2,240
2019-01-27,Cake Fudge,150,1,150
2019-01-27,Butterscotch Single Scoop,60,4,240
2019-01-27,Caramel Crunch Single Scoop,70,3,210
2019-01-27,Vanilla Single Scoop,50,3,150
2019-01-27,Banana Split,140,3,420
2019-01-27,Hot Chocolate Fudge,120,4,480
2019-01-27,Death by Chocolate,180,4,720
2019-01-27,Hot Chocolate Fudge,120,1,120
2019-01-27,Cake Fudge,150,5,750
2019-01-27,Hot Chocolate Fudge,120,2,240
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Cake Fudge,150,5,750
2019-01-27,Vanilla Single Scoop,50,1,50
2019-01-27,Vanilla Double Scoop,80,2,160
2019-01-27,Death by Chocolate,180,3,540
2019-01-27,Vanilla Double Scoop,80,2,160
2019-01-27,Death by Chocolate,180,4,720
2019-01-27,Fig and Honey Double Scoop,90,1,90
2019-01-27,Cafe Caramel,160,3,480
2019-01-27,Hot Chocolate Fudge,120,3,360
2019-01-27,Vanilla Double Scoop,80,2,160
2019-01-27,Butterscotch Single Scoop,60,1,60
2019-01-27,Vanilla Double Scoop,80,4,320
2019-01-27,Cake Fudge,150,2,300
2019-01-27,Rocky Road Single Scoop,50,3,150
2019-01-27,Vanilla Single Scoop,50,4,200
2019-01-27,Caramel Crunch Single Scoop,70,1,70
2019-01-27,Cafe Caramel,160,5,800
2019-01-27,Butterscotch Single Scoop,60,2,120
2019-01-27,Cake Fudge,150,5,750
2019-01-27,Cake Fudge,150,5,750
2019-01-27,Butterscotch Double Scoop,90,1,90
2019-01-27,Hot Chocolate Fudge,120,4,480
2019-01-27,Vanilla Double Scoop,80,1,80
2019-01-28,Banana Split,140,1,140
2019-01-28,Death by Chocolate,180,3,540
2019-01-28,Butterscotch Single Scoop,60,1,60
2019-01-28,Vanilla Double Scoop,80,5,400
2019-01-28,Cake Fudge,150,5,750
2019-01-28,Death by Chocolate,180,1,180
2019-01-28,Pista Double Scoop,90,5,450
2019-01-28,Butterscotch Single Scoop,60,1,60
2019-01-28,Rocky Road Double Scoop,80,5,400
2019-01-28,Vanilla Single Scoop,50,2,100
2019-01-28,Dry Fruit Double Scoop,90,5,450
2019-01-28,Cake Fudge,150,4,600
2019-01-28,Hot Chocolate Fudge,120,5,600
2019-01-28,Vanilla Double Scoop,80,4,320
2019-01-28,Vanilla Double Scoop,80,2,160
2019-01-28,Vanilla Single Scoop,50,3,150
2019-01-28,Butterscotch Single Scoop,60,3,180
2019-01-28,Cake Fudge,150,3,450
2019-01-28,Cake Fudge,150,2,300
2019-01-28,Cake Fudge,150,3,450
2019-01-28,Cake Fudge,150,5,750
2019-01-28,Hot Chocolate Fudge,120,1,120
2019-01-28,Death by Chocolate,180,3,540
2019-01-28,Hot Chocolate Fudge,120,5,600
2019-01-28,Dry Fruit Double Scoop,90,4,360
2019-01-28,Hot Chocolate Fudge,120,5,600
2019-01-28,Hot Chocolate Fudge,120,1,120
2019-01-28,Butterscotch Single Scoop,60,3,180
2019-01-28,Butterscotch Single Scoop,60,3,180
2019-01-28,Vanilla Single Scoop,50,3,150
2019-01-28,Death by Chocolate,180,5,900
2019-01-28,Hot Chocolate Fudge,120,1,120
2019-01-28,Cake Fudge,150,3,450
2019-01-28,Cafe Caramel,160,5,800
2019-01-28,Hot Chocolate Fudge,120,2,240
2019-01-28,Chocolate Europa Single Scoop,70,4,280
2019-01-28,Hot Chocolate Fudge,120,2,240
2019-01-28,Vanilla Single Scoop,50,4,200
2019-01-28,Vanilla Single Scoop,50,2,100
2019-01-28,Vanilla Double Scoop,80,5,400
2019-01-28,Vanilla Double Scoop,80,4,320
2019-01-28,Hot Chocolate Fudge,120,3,360
2019-01-28,Cake Fudge,150,3,450
2019-01-28,Butterscotch Single Scoop,60,1,60
2019-01-28,Dry Fruit Single Scoop,60,1,60
2019-01-28,Butterscotch Double Scoop,90,1,90
2019-01-28,Cafe Caramel,160,5,800
2019-01-28,Butterscotch Single Scoop,60,3,180
2019-01-28,Vanilla Single Scoop,50,3,150
2019-01-28,Cafe Caramel,160,1,160
2019-01-28,Vanilla Double Scoop,80,4,320
2019-01-28,Vanilla Double Scoop,80,4,320
2019-01-28,Caramel Crunch Double Scoop,100,2,200
2019-01-28,Cake Fudge,150,3,450
2019-01-28,Vanilla Double Scoop,80,4,320
2019-01-28,Butterscotch Single Scoop,60,4,240
2019-01-28,Vanilla Double Scoop,80,4,320
2019-01-28,Vanilla Double Scoop,80,4,320
2019-01-28,Vanilla Double Scoop,80,5,400
2019-01-28,Hot Chocolate Fudge,120,1,120
2019-01-28,Hot Chocolate Fudge,120,3,360
2019-01-28,Caramel Crunch Single Scoop,70,3,210
2019-01-28,Vanilla Single Scoop,50,3,150
2019-01-28,Death by Chocolate,180,5,900
2019-01-28,Hot Chocolate Fudge,120,4,480
2019-01-28,Butterscotch Single Scoop,60,5,300
2019-01-28,Dry Fruit Double Scoop,90,3,270
2019-01-28,Butterscotch Single Scoop,60,3,180
2019-01-28,Vanilla Single Scoop,50,4,200
2019-01-28,Rocky Road Double Scoop,80,5,400
2019-01-28,Death by Chocolate,180,5,900
2019-01-28,Death by Chocolate,180,1,180
2019-01-28,Hot Chocolate Fudge,120,5,600
2019-01-28,Vanilla Double Scoop,80,1,80
2019-01-28,Death by Chocolate,180,5,900
2019-01-28,Hot Chocolate Fudge,120,3,360
2019-01-28,Death by Chocolate,180,2,360
2019-01-28,Vanilla Single Scoop,50,2,100
2019-01-28,Almond Fudge,150,2,300
2019-01-28,Hot Chocolate Fudge,120,1,120
2019-01-28,Death by Chocolate,180,3,540
2019-01-28,Caramel Crunch Single Scoop,70,5,350
2019-01-28,Death by Chocolate,180,5,900
2019-01-28,Cake Fudge,150,3,450
2019-01-28,Butterscotch Single Scoop,60,5,300
2019-01-28,Butterscotch Single Scoop,60,5,300
2019-01-28,Hot Chocolate Fudge,120,2,240
2019-01-28,Butterscotch Single Scoop,60,5,300
2019-01-28,Vanilla Single Scoop,50,2,100
2019-01-28,Vanilla Double Scoop,80,5,400
2019-01-28,Vanilla Double Scoop,80,2,160
2019-01-28,Cake Fudge,150,1,150
2019-01-28,Death by Chocolate,180,5,900
2019-01-28,Hot Chocolate Fudge,120,4,480
2019-01-28,Hot Chocolate Fudge,120,1,120
2019-01-28,Dry Fruit Double Scoop,90,5,450
2019-01-28,Hot Chocolate Fudge,120,4,480
2019-01-28,Vanilla Single Scoop,50,5,250
2019-01-28,Hot Chocolate Fudge,120,5,600
2019-01-28,Death by Chocolate,180,2,360
2019-01-28,Hot Chocolate Fudge,120,2,240
2019-01-28,Vanilla Double Scoop,80,4,320
2019-01-28,Death by Chocolate,180,4,720
2019-01-28,Chocolate Europa Double Scoop,100,5,500
2019-01-28,Butterscotch Single Scoop,60,1,60
2019-01-28,Cafe Caramel,160,5,800
2019-01-28,Hot Chocolate Fudge,120,1,120
2019-01-28,Vanilla Double Scoop,80,1,80
2019-01-28,Vanilla Double Scoop,80,3,240
2019-01-28,Vanilla Single Scoop,50,1,50
2019-01-28,Butterscotch Double Scoop,90,1,90
2019-01-28,Caramel Crunch Double Scoop,100,1,100
2019-01-28,Butterscotch Single Scoop,60,4,240
2019-01-28,Hot Chocolate Fudge,120,3,360
2019-01-28,Death by Chocolate,180,3,540
2019-01-28,Vanilla Single Scoop,50,4,200
2019-01-28,Death by Chocolate,180,3,540
2019-01-28,Butterscotch Single Scoop,60,1,60
2019-01-29,Cake Fudge,150,2,300
2019-01-29,Fig and Honey Double Scoop,90,2,180
2019-01-29,Vanilla Single Scoop,50,5,250
2019-01-29,Vanilla Double Scoop,80,1,80
2019-01-29,Butterscotch Single Scoop,60,3,180
2019-01-29,Chocolate Europa Double Scoop,100,2,200
2019-01-29,Butterscotch Double Scoop,90,3,270
2019-01-29,Hot Chocolate Fudge,120,4,480
2019-01-29,Butterscotch Single Scoop,60,1,60
2019-01-29,Cake Fudge,150,5,750
2019-01-29,Mint Fudge,120,3,360
2019-01-29,Hot Chocolate Fudge,120,5,600
2019-01-29,Vanilla Double Scoop,80,3,240
2019-01-29,Vanilla Double Scoop,80,3,240
2019-01-29,Mint Fudge,120,4,480
2019-01-29,Vanilla Single Scoop,50,3,150
2019-01-29,Hot Chocolate Fudge,120,3,360
2019-01-29,Cake Fudge,150,5,750
2019-01-29,Chocolate Europa Single Scoop,70,3,210
2019-01-29,Butterscotch Double Scoop,90,4,360
2019-01-29,Rocky Road Single Scoop,50,4,200
2019-01-29,Hot Chocolate Fudge,120,5,600
2019-01-29,Cake Fudge,150,2,300
2019-01-29,Chocolate Europa Single Scoop,70,4,280
2019-01-29,Cake Fudge,150,2,300
2019-01-29,Hot Chocolate Fudge,120,5,600
2019-01-29,Cake Fudge,150,1,150
2019-01-29,Butterscotch Single Scoop,60,4,240
2019-01-29,Hot Chocolate Fudge,120,3,360
2019-01-29,Vanilla Double Scoop,80,1,80
2019-01-29,Death by Chocolate,180,3,540
2019-01-29,Cake Fudge,150,1,150
2019-01-29,Hot Chocolate Fudge,120,4,480
2019-01-29,Butterscotch Single Scoop,60,5,300
2019-01-29,Cake Fudge,150,4,600
2019-01-29,Vanilla Single Scoop,50,3,150
2019-01-29,Death by Chocolate,180,3,540
2019-01-29,Fig and Honey Double Scoop,90,4,360
2019-01-29,Trilogy,160,5,800
2019-01-29,Butterscotch Single Scoop,60,2,120
2019-01-29,Vanilla Double Scoop,80,2,160
2019-01-29,Vanilla Single Scoop,50,4,200
2019-01-29,Death by Chocolate,180,4,720
2019-01-29,Butterscotch Single Scoop,60,5,300
2019-01-29,Death by Chocolate,180,3,540
2019-01-29,Vanilla Double Scoop,80,2,160
2019-01-29,Vanilla Single Scoop,50,2,100
2019-01-29,Vanilla Double Scoop,80,4,320
2019-01-29,Hot Chocolate Fudge,120,3,360
2019-01-29,Death by Chocolate,180,5,900
2019-01-29,Cake Fudge,150,3,450
2019-01-29,Vanilla Single Scoop,50,3,150
2019-01-29,Cafe Caramel,160,4,640
2019-01-29,Hot Chocolate Fudge,120,5,600
2019-01-29,Vanilla Single Scoop,50,1,50
2019-01-29,Hot Chocolate Fudge,120,1,120
2019-01-29,Hot Chocolate Fudge,120,4,480
2019-01-29,Hot Chocolate Fudge,120,1,120
2019-01-29,Death by Chocolate,180,3,540
2019-01-29,Vanilla Single Scoop,50,1,50
2019-01-29,Cake Fudge,150,4,600
2019-01-29,Cafe Caramel,160,5,800
2019-01-29,Butterscotch Single Scoop,60,2,120
2019-01-29,Death by Chocolate,180,2,360
2019-01-29,Cake Fudge,150,2,300
2019-01-29,Hot Chocolate Fudge,120,1,120
2019-01-29,Cafe Caramel,160,4,640
2019-01-29,Hot Chocolate Fudge,120,2,240
2019-01-29,Butterscotch Single Scoop,60,2,120
2019-01-29,Cake Fudge,150,1,150
2019-01-29,Chocolate Europa Double Scoop,100,2,200
2019-01-29,Vanilla Double Scoop,80,1,80
2019-01-29,Hot Chocolate Fudge,120,3,360
2019-01-29,Hot Chocolate Fudge,120,3,360
2019-01-29,Chocolate Europa Single Scoop,70,4,280
2019-01-29,Almond Fudge,150,3,450
2019-01-29,Butterscotch Single Scoop,60,3,180
2019-01-29,Hot Chocolate Fudge,120,3,360
2019-01-29,Hot Chocolate Fudge,120,4,480
2019-01-29,Cake Fudge,150,4,600
2019-01-29,Cake Fudge,150,3,450
2019-01-29,Death by Chocolate,180,5,900
2019-01-29,Vanilla Double Scoop,80,3,240
2019-01-29,Hot Chocolate Fudge,120,3,360
2019-01-29,Hot Chocolate Fudge,120,2,240
2019-01-29,Hot Chocolate Fudge,120,4,480
2019-01-29,Hot Chocolate Fudge,120,2,240
2019-01-29,Butterscotch Single Scoop,60,2,120
2019-01-29,Vanilla Single Scoop,50,4,200
2019-01-29,Butterscotch Single Scoop,60,2,120
2019-01-29,Cake Fudge,150,3,450
2019-01-29,Hot Chocolate Fudge,120,4,480
2019-01-29,Cake Fudge,150,3,450
2019-01-29,Vanilla Double Scoop,80,4,320
2019-01-29,Vanilla Double Scoop,80,5,400
2019-01-29,Vanilla Double Scoop,80,2,160
2019-01-29,Vanilla Single Scoop,50,5,250
2019-01-29,Death by Chocolate,180,2,360
2019-01-29,Vanilla Single Scoop,50,2,100
2019-01-29,Butterscotch Single Scoop,60,5,300
2019-01-29,Hot Chocolate Fudge,120,2,240
2019-01-29,Cake Fudge,150,5,750
2019-01-29,Cafe Caramel,160,3,480
2019-01-29,Vanilla Single Scoop,50,1,50
2019-01-29,Hot Chocolate Fudge,120,4,480
2019-01-29,Cake Fudge,150,1,150
2019-01-29,Mint Fudge,120,3,360
2019-01-29,Death by Chocolate,180,4,720
2019-01-29,Dew Drop Sundae,150,3,450
2019-01-29,Cake Fudge,150,4,600
2019-01-29,Butterscotch Single Scoop,60,5,300
2019-01-29,Cafe Caramel,160,5,800
2019-01-30,Vanilla Single Scoop,50,2,100
2019-01-30,Vanilla Double Scoop,80,2,160
2019-01-30,Hot Chocolate Fudge,120,2,240
2019-01-30,Butterscotch Single Scoop,60,3,180
2019-01-30,Caramel Crunch Single Scoop,70,5,350
2019-01-30,Vanilla Single Scoop,50,3,150
2019-01-30,Cake Fudge,150,2,300
2019-01-30,Vanilla Single Scoop,50,3,150
2019-01-30,Trilogy,160,4,640
2019-01-30,Dew Drop Sundae,150,2,300
2019-01-30,Cafe Caramel,160,1,160
2019-01-30,Butterscotch Single Scoop,60,4,240
2019-01-30,Cake Fudge,150,3,450
2019-01-30,Cafe Caramel,160,2,320
2019-01-30,Death by Chocolate,180,5,900
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Cafe Caramel,160,1,160
2019-01-30,Vanilla Double Scoop,80,3,240
2019-01-30,Vanilla Single Scoop,50,2,100
2019-01-30,Hot Chocolate Fudge,120,2,240
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Death by Chocolate,180,4,720
2019-01-30,Hot Chocolate Fudge,120,3,360
2019-01-30,Butterscotch Single Scoop,60,3,180
2019-01-30,Cake Fudge,150,5,750
2019-01-30,Butterscotch Single Scoop,60,5,300
2019-01-30,Death by Chocolate,180,2,360
2019-01-30,Death by Chocolate,180,3,540
2019-01-30,Butterscotch Single Scoop,60,3,180
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Vanilla Single Scoop,50,3,150
2019-01-30,Death by Chocolate,180,5,900
2019-01-30,Death by Chocolate,180,2,360
2019-01-30,Hot Chocolate Fudge,120,4,480
2019-01-30,Cake Fudge,150,1,150
2019-01-30,Hot Chocolate Fudge,120,5,600
2019-01-30,Death by Chocolate,180,1,180
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Hot Chocolate Fudge,120,2,240
2019-01-30,Vanilla Double Scoop,80,2,160
2019-01-30,Trilogy,160,5,800
2019-01-30,Hot Chocolate Fudge,120,1,120
2019-01-30,Death by Chocolate,180,5,900
2019-01-30,Death by Chocolate,180,3,540
2019-01-30,Vanilla Double Scoop,80,1,80
2019-01-30,Hot Chocolate Fudge,120,3,360
2019-01-30,Vanilla Double Scoop,80,5,400
2019-01-30,Vanilla Double Scoop,80,5,400
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Caramel Crunch Single Scoop,70,5,350
2019-01-30,Vanilla Single Scoop,50,4,200
2019-01-30,Cafe Caramel,160,3,480
2019-01-30,Vanilla Double Scoop,80,4,320
2019-01-30,Vanilla Double Scoop,80,1,80
2019-01-30,Cake Fudge,150,1,150
2019-01-30,Vanilla Single Scoop,50,2,100
2019-01-30,Hot Chocolate Fudge,120,5,600
2019-01-30,Caramel Crunch Double Scoop,100,1,100
2019-01-30,Hot Chocolate Fudge,120,1,120
2019-01-30,Vanilla Single Scoop,50,3,150
2019-01-30,Vanilla Single Scoop,50,1,50
2019-01-30,Vanilla Single Scoop,50,5,250
2019-01-30,Cake Fudge,150,2,300
2019-01-30,Vanilla Single Scoop,50,3,150
2019-01-30,Hot Chocolate Fudge,120,3,360
2019-01-30,Vanilla Single Scoop,50,4,200
2019-01-30,Vanilla Double Scoop,80,1,80
2019-01-30,Fig and Honey Double Scoop,90,1,90
2019-01-30,Vanilla Single Scoop,50,5,250
2019-01-30,Hot Chocolate Fudge,120,4,480
2019-01-30,Hot Chocolate Fudge,120,5,600
2019-01-30,Hot Chocolate Fudge,120,5,600
2019-01-30,Vanilla Single Scoop,50,2,100
2019-01-30,Chocolate Europa Single Scoop,70,4,280
2019-01-30,Vanilla Double Scoop,80,4,320
2019-01-30,Chocolate Europa Single Scoop,70,4,280
2019-01-30,Vanilla Double Scoop,80,5,400
2019-01-30,Butterscotch Single Scoop,60,5,300
2019-01-30,Vanilla Double Scoop,80,4,320
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Cake Fudge,150,1,150
2019-01-30,Almond Fudge,150,4,600
2019-01-30,Cake Fudge,150,5,750
2019-01-30,Vanilla Single Scoop,50,2,100
2019-01-30,Vanilla Single Scoop,50,3,150
2019-01-30,Death by Chocolate,180,1,180
2019-01-30,Butterscotch Single Scoop,60,5,300
2019-01-30,Pista Double Scoop,90,1,90
2019-01-30,Butterscotch Single Scoop,60,2,120
2019-01-30,Vanilla Double Scoop,80,1,80
2019-01-30,Cake Fudge,150,3,450
2019-01-30,Hot Chocolate Fudge,120,2,240
2019-01-30,Vanilla Single Scoop,50,4,200
2019-01-30,Dry Fruit Double Scoop,90,2,180
2019-01-30,Vanilla Double Scoop,80,5,400
2019-01-30,Fig and Honey Single Scoop,60,3,180
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Hot Chocolate Fudge,120,2,240
2019-01-30,Cake Fudge,150,5,750
2019-01-30,Cake Fudge,150,2,300
2019-01-30,Butterscotch Single Scoop,60,3,180
2019-01-30,Vanilla Single Scoop,50,2,100
2019-01-30,Death by Chocolate,180,3,540
2019-01-30,Cake Fudge,150,3,450
2019-01-30,Butterscotch Single Scoop,60,2,120
2019-01-30,Chocolate Europa Single Scoop,70,1,70
2019-01-30,Cake Fudge,150,2,300
2019-01-30,Cake Fudge,150,5,750
2019-01-30,Vanilla Single Scoop,50,5,250
2019-01-30,Vanilla Single Scoop,50,4,200
2019-01-30,Vanilla Double Scoop,80,3,240
2019-01-30,Cake Fudge,150,4,600
2019-01-30,Caramel Crunch Double Scoop,100,4,400
2019-01-30,Trilogy,160,5,800
2019-01-30,Cake Fudge,150,5,750
2019-01-31,Cake Fudge,150,2,300
2019-01-31,Death by Chocolate,180,1,180
2019-01-31,Dew Drop Sundae,150,1,150
2019-01-31,Death by Chocolate,180,1,180
2019-01-31,Vanilla Double Scoop,80,4,320
2019-01-31,Death by Chocolate,180,4,720
2019-01-31,Hot Chocolate Fudge,120,2,240
2019-01-31,Cake Fudge,150,2,300
2019-01-31,Cake Fudge,150,5,750
2019-01-31,Vanilla Double Scoop,80,2,160
2019-01-31,Hot Chocolate Fudge,120,5,600
2019-01-31,Pista Single Scoop,60,3,180
2019-01-31,Rocky Road Double Scoop,80,3,240
2019-01-31,Hot Chocolate Fudge,120,4,480
2019-01-31,Death by Chocolate,180,2,360
2019-01-31,Hot Chocolate Fudge,120,5,600
2019-01-31,Cake Fudge,150,4,600
2019-01-31,Cake Fudge,150,2,300
2019-01-31,Vanilla Single Scoop,50,1,50
2019-01-31,Vanilla Double Scoop,80,4,320
2019-01-31,Vanilla Double Scoop,80,2,160
2019-01-31,Butterscotch Single Scoop,60,3,180
2019-01-31,Death by Chocolate,180,2,360
2019-01-31,Banana Split,140,1,140
2019-01-31,Vanilla Single Scoop,50,4,200
2019-01-31,Death by Chocolate,180,5,900
2019-01-31,Fig and Honey Single Scoop,60,5,300
2019-01-31,Death by Chocolate,180,1,180
2019-01-31,Vanilla Double Scoop,80,3,240
2019-01-31,Hot Chocolate Fudge,120,3,360
2019-01-31,Mint Fudge,120,3,360
2019-01-31,Vanilla Single Scoop,50,5,250
2019-01-31,Hot Chocolate Fudge,120,3,360
2019-01-31,Cake Fudge,150,4,600
2019-01-31,Death by Chocolate,180,1,180
2019-01-31,Banana Split,140,3,420
2019-01-31,Cake Fudge,150,1,150
2019-01-31,Vanilla Single Scoop,50,1,50
2019-01-31,Death by Chocolate,180,1,180
2019-01-31,Vanilla Single Scoop,50,3,150
2019-01-31,Vanilla Single Scoop,50,4,200
2019-01-31,Vanilla Single Scoop,50,2,100
2019-01-31,Hot Chocolate Fudge,120,1,120
2019-01-31,Hot Chocolate Fudge,120,1,120
2019-01-31,Vanilla Double Scoop,80,4,320
2019-01-31,Dry Fruit Double Scoop,90,2,180
2019-01-31,Dry Fruit Double Scoop,90,4,360
2019-01-31,Vanilla Double Scoop,80,5,400
2019-01-31,Hot Chocolate Fudge,120,3,360
2019-01-31,Vanilla Double Scoop,80,3,240
2019-01-31,Hot Chocolate Fudge,120,2,240
2019-01-31,Death by Chocolate,180,4,720
2019-01-31,Butterscotch Single Scoop,60,1,60
2019-01-31,Hot Chocolate Fudge,120,5,600
2019-01-31,Vanilla Double Scoop,80,5,400
2019-01-31,Death by Chocolate,180,4,720
2019-01-31,Vanilla Double Scoop,80,1,80
2019-01-31,Butterscotch Double Scoop,90,3,270
2019-01-31,Cake Fudge,150,2,300
2019-01-31,Cake Fudge,150,4,600
2019-01-31,Hot Chocolate Fudge,120,5,600
2019-01-31,Caramel Crunch Double Scoop,100,5,500
2019-01-31,Cafe Caramel,160,1,160
2019-01-31,Dry Fruit Single Scoop,60,1,60
2019-01-31,Death by Chocolate,180,4,720
2019-01-31,Death by Chocolate,180,1,180
2019-01-31,Hot Chocolate Fudge,120,1,120
2019-01-31,Hot Chocolate Fudge,120,5,600
2019-01-31,Butterscotch Single Scoop,60,1,60
2019-01-31,Vanilla Double Scoop,80,3,240
2019-01-31,Butterscotch Single Scoop,60,3,180
2019-01-31,Hot Chocolate Fudge,120,2,240
2019-01-31,Death by Chocolate,180,4,720
2019-01-31,Cake Fudge,150,2,300
2019-01-31,Hot Chocolate Fudge,120,1,120
2019-01-31,Dry Fruit Double Scoop,90,5,450
2019-01-31,Fig and Honey Single Scoop,60,1,60
2019-01-31,Vanilla Double Scoop,80,4,320
2019-01-31,Butterscotch Single Scoop,60,5,300
2019-01-31,Death by Chocolate,180,4,720
2019-01-31,Rocky Road Single Scoop,50,3,150
2019-01-31,Death by Chocolate,180,4,720
2019-01-31,Vanilla Single Scoop,50,3,150
2019-01-31,Vanilla Double Scoop,80,5,400
2019-01-31,Hot Chocolate Fudge,120,1,120
2019-01-31,Butterscotch Single Scoop,60,3,180
2019-01-31,Vanilla Double Scoop,80,2,160
2019-01-31,Butterscotch Single Scoop,60,4,240
2019-01-31,Cafe Caramel,160,5,800
2019-01-31,Vanilla Single Scoop,50,3,150
2019-01-31,Cafe Caramel,160,5,800
2019-01-31,Hot Chocolate Fudge,120,3,360
2019-01-31,Hot Chocolate Fudge,120,2,240
2019-01-31,Butterscotch Single Scoop,60,1,60
2019-01-31,Butterscotch Single Scoop,60,5,300
2019-01-31,Vanilla Single Scoop,50,2,100
2019-01-31,Vanilla Double Scoop,80,2,160
2019-01-31,Death by Chocolate,180,5,900
2019-01-31,Cafe Caramel,160,4,640
2019-01-31,Trilogy,160,1,160
2019-01-31,Butterscotch Single Scoop,60,2,120
2019-01-31,Vanilla Double Scoop,80,3,240
2019-01-31,Cafe Caramel,160,2,320
2019-01-31,Vanilla Double Scoop,80,4,320
2019-01-31,Hot Chocolate Fudge,120,4,480
2019-01-31,Hot Chocolate Fudge,120,5,600
2019-01-31,Butterscotch Single Scoop,60,2,120
2019-01-31,Death by Chocolate,180,5,900
2019-01-31,Cake Fudge,150,2,300
2019-01-31,Hot Chocolate Fudge,120,4,480
2019-01-31,Death by Chocolate,180,4,720
2019-01-31,Cafe Caramel,160,5,800
2019-01-31,Butterscotch Single Scoop,60,5,300
2019-01-31,Cake Fudge,150,1,150
2019-01-31,Death by Chocolate,180,5,900
2019-01-31,Dry Fruit Single Scoop,60,2,120
2019-01-31,Vanilla Double Scoop,80,1,80
2019-01-31,Cake Fudge,150,5,750
2019-01-31,Cake Fudge,150,1,150
2019-01-31,Cake Fudge,150,2,300
2019-01-31,Vanilla Single Scoop,50,3,150
2019-01-31,Hot Chocolate Fudge,120,1,120
2019-01-31,Hot Chocolate Fudge,120,1,120
2019-01-31,Death by Chocolate,180,1,180
2019-01-31,Vanilla Single Scoop,50,5,250
2019-01-31,Banana Split,140,2,280
2019-01-31,Vanilla Double Scoop,80,2,160
2019-01-31,Vanilla Single Scoop,50,1,50
2019-01-31,Cake Fudge,150,4,600
2019-01-31,Hot Chocolate Fudge,120,4,480
2019-01-31,Hot Chocolate Fudge,120,2,240
2019-01-31,Butterscotch Single Scoop,60,3,180
2019-01-31,Hot Chocolate Fudge,120,2,240
2019-01-31,Vanilla Double Scoop,80,3,240
2019-01-31,Cafe Caramel,160,3,480
2019-01-31,Cake Fudge,150,5,750
2019-01-31,Cake Fudge,150,3,450
2019-01-31,Death by Chocolate,180,2,360
2019-01-31,Butterscotch Single Scoop,60,4,240
2019-01-31,Butterscotch Single Scoop,60,2,120
2019-01-31,Butterscotch Single Scoop,60,3,180
2019-01-31,Hot Chocolate Fudge,120,3,360
2019-01-31,Hot Chocolate Fudge,120,5,600
2019-01-31,Caramel Crunch Single Scoop,70,1,70
2019-01-31,Vanilla Double Scoop,80,3,240
2019-01-31,Cafe Caramel,160,3,480
2019-02-01,Trilogy,160,1,160
2019-02-01,Death by Chocolate,180,1,180
2019-02-01,Hot Chocolate Fudge,120,1,120
2019-02-01,Cafe Caramel,160,2,320
2019-02-01,Hot Chocolate Fudge,120,3,360
2019-02-01,Hot Chocolate Fudge,120,3,360
2019-02-01,Cake Fudge,150,3,450
2019-02-01,Butterscotch Single Scoop,60,2,120
2019-02-01,Vanilla Single Scoop,50,4,200
2019-02-01,Vanilla Single Scoop,50,5,250
2019-02-01,Cake Fudge,150,2,300
2019-02-01,Vanilla Double Scoop,80,5,400
2019-02-01,Fig and Honey Double Scoop,90,5,450
2019-02-01,Vanilla Single Scoop,50,1,50
2019-02-01,Death by Chocolate,180,1,180
2019-02-01,Death by Chocolate,180,4,720
2019-02-01,Cafe Caramel,160,1,160
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Vanilla Single Scoop,50,2,100
2019-02-01,Cake Fudge,150,5,750
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Hot Chocolate Fudge,120,3,360
2019-02-01,Hot Chocolate Fudge,120,1,120
2019-02-01,Hot Chocolate Fudge,120,2,240
2019-02-01,Dry Fruit Double Scoop,90,3,270
2019-02-01,Cake Fudge,150,3,450
2019-02-01,Dry Fruit Single Scoop,60,1,60
2019-02-01,Hot Chocolate Fudge,120,5,600
2019-02-01,Hot Chocolate Fudge,120,1,120
2019-02-01,Fig and Honey Double Scoop,90,1,90
2019-02-01,Butterscotch Single Scoop,60,2,120
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Rocky Road Single Scoop,50,1,50
2019-02-01,Cake Fudge,150,2,300
2019-02-01,Cake Fudge,150,2,300
2019-02-01,Cafe Caramel,160,2,320
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Cake Fudge,150,5,750
2019-02-01,Death by Chocolate,180,3,540
2019-02-01,Dry Fruit Single Scoop,60,4,240
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Death by Chocolate,180,2,360
2019-02-01,Death by Chocolate,180,1,180
2019-02-01,Cake Fudge,150,4,600
2019-02-01,Cake Fudge,150,2,300
2019-02-01,Butterscotch Single Scoop,60,5,300
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Hot Chocolate Fudge,120,1,120
2019-02-01,Vanilla Double Scoop,80,5,400
2019-02-01,Vanilla Double Scoop,80,4,320
2019-02-01,Hot Chocolate Fudge,120,1,120
2019-02-01,Vanilla Double Scoop,80,1,80
2019-02-01,Death by Chocolate,180,2,360
2019-02-01,Hot Chocolate Fudge,120,5,600
2019-02-01,Vanilla Double Scoop,80,1,80
2019-02-01,Hot Chocolate Fudge,120,2,240
2019-02-01,Vanilla Single Scoop,50,4,200
2019-02-01,Vanilla Double Scoop,80,4,320
2019-02-01,Cake Fudge,150,5,750
2019-02-01,Vanilla Single Scoop,50,1,50
2019-02-01,Hot Chocolate Fudge,120,2,240
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Rocky Road Single Scoop,50,1,50
2019-02-01,Vanilla Single Scoop,50,1,50
2019-02-01,Vanilla Double Scoop,80,3,240
2019-02-01,Vanilla Double Scoop,80,5,400
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Cake Fudge,150,3,450
2019-02-01,Death by Chocolate,180,4,720
2019-02-01,Vanilla Single Scoop,50,1,50
2019-02-01,Cake Fudge,150,4,600
2019-02-01,Vanilla Single Scoop,50,5,250
2019-02-01,Butterscotch Single Scoop,60,4,240
2019-02-01,Chocolate Europa Single Scoop,70,5,350
2019-02-01,Caramel Crunch Double Scoop,100,1,100
2019-02-01,Rocky Road Single Scoop,50,3,150
2019-02-01,Vanilla Single Scoop,50,1,50
2019-02-01,Death by Chocolate,180,3,540
2019-02-01,Death by Chocolate,180,1,180
2019-02-01,Hot Chocolate Fudge,120,5,600
2019-02-01,Chocolate Europa Double Scoop,100,5,500
2019-02-01,Trilogy,160,5,800
2019-02-01,Cake Fudge,150,2,300
2019-02-01,Death by Chocolate,180,1,180
2019-02-01,Butterscotch Double Scoop,90,1,90
2019-02-01,Hot Chocolate Fudge,120,3,360
2019-02-01,Vanilla Single Scoop,50,2,100
2019-02-01,Fig and Honey Double Scoop,90,4,360
2019-02-01,Cafe Caramel,160,3,480
2019-02-01,Death by Chocolate,180,3,540
2019-02-01,Hot Chocolate Fudge,120,5,600
2019-02-01,Vanilla Double Scoop,80,4,320
2019-02-01,Cake Fudge,150,2,300
2019-02-01,Vanilla Single Scoop,50,4,200
2019-02-01,Hot Chocolate Fudge,120,1,120
2019-02-01,Cake Fudge,150,3,450
2019-02-01,Hot Chocolate Fudge,120,2,240
2019-02-01,Hot Chocolate Fudge,120,3,360
2019-02-01,Pista Single Scoop,60,1,60
2019-02-01,Death by Chocolate,180,3,540
2019-02-01,Fig and Honey Single Scoop,60,4,240
2019-02-01,Vanilla Double Scoop,80,1,80
2019-02-01,Death by Chocolate,180,4,720
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Death by Chocolate,180,3,540
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Vanilla Double Scoop,80,1,80
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Cake Fudge,150,2,300
2019-02-01,Butterscotch Single Scoop,60,1,60
2019-02-01,Mint Fudge,120,4,480
2019-02-01,Vanilla Double Scoop,80,2,160
2019-02-01,Hot Chocolate Fudge,120,2,240
2019-02-01,Vanilla Single Scoop,50,2,100
2019-02-01,Cake Fudge,150,5,750
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Vanilla Single Scoop,50,4,200
2019-02-01,Butterscotch Double Scoop,90,2,180
2019-02-01,Butterscotch Single Scoop,60,4,240
2019-02-01,Vanilla Single Scoop,50,1,50
2019-02-01,Hot Chocolate Fudge,120,3,360
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Cake Fudge,150,5,750
2019-02-01,Cake Fudge,150,5,750
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Hot Chocolate Fudge,120,4,480
2019-02-01,Butterscotch Single Scoop,60,5,300
2019-02-01,Banana Split,140,2,280
2019-02-01,Hot Chocolate Fudge,120,3,360
2019-02-01,Vanilla Single Scoop,50,5,250
2019-02-01,Vanilla Single Scoop,50,4,200
2019-02-01,Cake Fudge,150,3,450
2019-02-01,Hot Chocolate Fudge,120,5,600
2019-02-01,Hot Chocolate Fudge,120,3,360
2019-02-01,Death by Chocolate,180,2,360
2019-02-01,Caramel Crunch Single Scoop,70,1,70
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Fig and Honey Single Scoop,60,1,60
2019-02-01,Hot Chocolate Fudge,120,1,120
2019-02-01,Dry Fruit Double Scoop,90,2,180
2019-02-01,Chocolate Europa Double Scoop,100,1,100
2019-02-01,Vanilla Double Scoop,80,3,240
2019-02-01,Vanilla Single Scoop,50,1,50
2019-02-01,Death by Chocolate,180,5,900
2019-02-01,Butterscotch Double Scoop,90,2,180
2019-02-01,Cake Fudge,150,2,300
2019-02-01,Cafe Caramel,160,5,800
2019-02-01,Cafe Caramel,160,5,800
2019-02-01,Death by Chocolate,180,4,720
2019-02-01,Pista Single Scoop,60,5,300
2019-02-01,Death by Chocolate,180,3,540
2019-02-01,Rocky Road Single Scoop,50,4,200
2019-02-01,Vanilla Double Scoop,80,2,160
2019-02-01,Vanilla Double Scoop,80,3,240
2019-02-01,Vanilla Double Scoop,80,5,400
2019-02-01,Vanilla Double Scoop,80,5,400
2019-02-01,Hot Chocolate Fudge,120,1,120
2019-02-01,Rocky Road Single Scoop,50,3,150
2019-02-01,Hot Chocolate Fudge,120,2,240
2019-02-01,Fig and Honey Single Scoop,60,4,240
2019-02-01,Caramel Crunch Double Scoop,100,4,400
2019-02-02,Cake Fudge,150,3,450
2019-02-02,Vanilla Double Scoop,80,4,320
2019-02-02,Fig and Honey Double Scoop,90,1,90
2019-02-02,Vanilla Single Scoop,50,5,250
2019-02-02,Vanilla Double Scoop,80,1,80
2019-02-02,Chocolate Europa Double Scoop,100,2,200
2019-02-02,Death by Chocolate,180,3,540
2019-02-02,Death by Chocolate,180,4,720
2019-02-02,Death by Chocolate,180,3,540
2019-02-02,Cake Fudge,150,1,150
2019-02-02,Butterscotch Double Scoop,90,2,180
2019-02-02,Cafe Caramel,160,2,320
2019-02-02,Butterscotch Single Scoop,60,5,300
2019-02-02,Cafe Caramel,160,5,800
2019-02-02,Butterscotch Single Scoop,60,2,120
2019-02-02,Vanilla Single Scoop,50,2,100
2019-02-02,Butterscotch Single Scoop,60,2,120
2019-02-02,Hot Chocolate Fudge,120,5,600
2019-02-02,Cake Fudge,150,2,300
2019-02-02,Hot Chocolate Fudge,120,1,120
2019-02-02,Butterscotch Single Scoop,60,1,60
2019-02-02,Vanilla Double Scoop,80,5,400
2019-02-02,Butterscotch Single Scoop,60,2,120
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Vanilla Double Scoop,80,1,80
2019-02-02,Cake Fudge,150,3,450
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Vanilla Double Scoop,80,5,400
2019-02-02,Pista Double Scoop,90,4,360
2019-02-02,Cake Fudge,150,5,750
2019-02-02,Vanilla Double Scoop,80,3,240
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Butterscotch Single Scoop,60,5,300
2019-02-02,Vanilla Double Scoop,80,2,160
2019-02-02,Butterscotch Single Scoop,60,2,120
2019-02-02,Hot Chocolate Fudge,120,2,240
2019-02-02,Butterscotch Single Scoop,60,4,240
2019-02-02,Caramel Crunch Double Scoop,100,3,300
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Cake Fudge,150,5,750
2019-02-02,Hot Chocolate Fudge,120,1,120
2019-02-02,Cake Fudge,150,4,600
2019-02-02,Vanilla Single Scoop,50,5,250
2019-02-02,Cafe Caramel,160,5,800
2019-02-02,Cake Fudge,150,5,750
2019-02-02,Caramel Crunch Double Scoop,100,3,300
2019-02-02,Hot Chocolate Fudge,120,2,240
2019-02-02,Vanilla Single Scoop,50,3,150
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Death by Chocolate,180,4,720
2019-02-02,Vanilla Single Scoop,50,5,250
2019-02-02,Death by Chocolate,180,1,180
2019-02-02,Hot Chocolate Fudge,120,1,120
2019-02-02,Butterscotch Single Scoop,60,4,240
2019-02-02,Hot Chocolate Fudge,120,3,360
2019-02-02,Hot Chocolate Fudge,120,5,600
2019-02-02,Vanilla Single Scoop,50,2,100
2019-02-02,Hot Chocolate Fudge,120,3,360
2019-02-02,Hot Chocolate Fudge,120,2,240
2019-02-02,Fig and Honey Double Scoop,90,3,270
2019-02-02,Hot Chocolate Fudge,120,2,240
2019-02-02,Vanilla Double Scoop,80,1,80
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Death by Chocolate,180,5,900
2019-02-02,Butterscotch Double Scoop,90,5,450
2019-02-02,Cafe Caramel,160,5,800
2019-02-02,Butterscotch Single Scoop,60,3,180
2019-02-02,Butterscotch Single Scoop,60,2,120
2019-02-02,Hot Chocolate Fudge,120,2,240
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Dry Fruit Double Scoop,90,1,90
2019-02-02,Cake Fudge,150,1,150
2019-02-02,Caramel Crunch Double Scoop,100,4,400
2019-02-02,Vanilla Double Scoop,80,5,400
2019-02-02,Chocolate Europa Single Scoop,70,4,280
2019-02-02,Hot Chocolate Fudge,120,2,240
2019-02-02,Vanilla Single Scoop,50,4,200
2019-02-02,Cafe Caramel,160,3,480
2019-02-02,Butterscotch Single Scoop,60,2,120
2019-02-02,Hot Chocolate Fudge,120,1,120
2019-02-02,Butterscotch Single Scoop,60,1,60
2019-02-02,Hot Chocolate Fudge,120,5,600
2019-02-02,Cake Fudge,150,2,300
2019-02-02,Dry Fruit Single Scoop,60,3,180
2019-02-02,Vanilla Double Scoop,80,3,240
2019-02-02,Chocolate Europa Single Scoop,70,1,70
2019-02-02,Vanilla Double Scoop,80,5,400
2019-02-02,Death by Chocolate,180,5,900
2019-02-02,Vanilla Double Scoop,80,5,400
2019-02-02,Hot Chocolate Fudge,120,1,120
2019-02-02,Vanilla Double Scoop,80,1,80
2019-02-02,Hot Chocolate Fudge,120,2,240
2019-02-02,Cafe Caramel,160,1,160
2019-02-02,Death by Chocolate,180,1,180
2019-02-02,Vanilla Single Scoop,50,5,250
2019-02-02,Death by Chocolate,180,2,360
2019-02-02,Vanilla Single Scoop,50,4,200
2019-02-02,Cake Fudge,150,4,600
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Death by Chocolate,180,5,900
2019-02-02,Rocky Road Single Scoop,50,5,250
2019-02-02,Vanilla Double Scoop,80,2,160
2019-02-02,Vanilla Single Scoop,50,4,200
2019-02-02,Hot Chocolate Fudge,120,3,360
2019-02-02,Cake Fudge,150,2,300
2019-02-02,Cake Fudge,150,1,150
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Hot Chocolate Fudge,120,5,600
2019-02-02,Vanilla Double Scoop,80,1,80
2019-02-02,Vanilla Single Scoop,50,3,150
2019-02-02,Cake Fudge,150,4,600
2019-02-02,Vanilla Single Scoop,50,5,250
2019-02-02,Hot Chocolate Fudge,120,1,120
2019-02-02,Pista Double Scoop,90,2,180
2019-02-02,Butterscotch Single Scoop,60,3,180
2019-02-02,Pista Double Scoop,90,5,450
2019-02-02,Vanilla Double Scoop,80,2,160
2019-02-02,Hot Chocolate Fudge,120,3,360
2019-02-02,Cake Fudge,150,5,750
2019-02-02,Vanilla Double Scoop,80,1,80
2019-02-02,Cafe Caramel,160,5,800
2019-02-02,Vanilla Double Scoop,80,1,80
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Cake Fudge,150,4,600
2019-02-02,Butterscotch Single Scoop,60,3,180
2019-02-02,Mint Fudge,120,4,480
2019-02-02,Hot Chocolate Fudge,120,2,240
2019-02-02,Hot Chocolate Fudge,120,3,360
2019-02-02,Vanilla Double Scoop,80,3,240
2019-02-02,Cake Fudge,150,2,300
2019-02-02,Vanilla Double Scoop,80,3,240
2019-02-02,Cafe Caramel,160,4,640
2019-02-02,Vanilla Single Scoop,50,3,150
2019-02-02,Hot Chocolate Fudge,120,5,600
2019-02-02,Pista Single Scoop,60,4,240
2019-02-02,Vanilla Single Scoop,50,2,100
2019-02-02,Cake Fudge,150,1,150
2019-02-02,Cafe Caramel,160,5,800
2019-02-02,Pista Double Scoop,90,2,180
2019-02-02,Chocolate Europa Double Scoop,100,5,500
2019-02-02,Hot Chocolate Fudge,120,3,360
2019-02-02,Hot Chocolate Fudge,120,4,480
2019-02-02,Hot Chocolate Fudge,120,3,360
2019-02-02,Vanilla Double Scoop,80,4,320
2019-02-02,Cafe Caramel,160,5,800
2019-02-02,Butterscotch Single Scoop,60,3,180
2019-02-02,Vanilla Double Scoop,80,5,400
2019-02-02,Vanilla Double Scoop,80,5,400
2019-02-02,Chocolate Europa Double Scoop,100,5,500
2019-02-02,Fig and Honey Double Scoop,90,5,450
2019-02-03,Rocky Road Single Scoop,50,3,150
2019-02-03,Cake Fudge,150,4,600
2019-02-03,Hot Chocolate Fudge,120,2,240
2019-02-03,Death by Chocolate,180,5,900
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Vanilla Double Scoop,80,3,240
2019-02-03,Cafe Caramel,160,4,640
2019-02-03,Dry Fruit Single Scoop,60,4,240
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Death by Chocolate,180,1,180
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Death by Chocolate,180,2,360
2019-02-03,Vanilla Single Scoop,50,5,250
2019-02-03,Cake Fudge,150,3,450
2019-02-03,Vanilla Double Scoop,80,1,80
2019-02-03,Butterscotch Single Scoop,60,4,240
2019-02-03,Cake Fudge,150,4,600
2019-02-03,Mint Fudge,120,1,120
2019-02-03,Hot Chocolate Fudge,120,4,480
2019-02-03,Cake Fudge,150,1,150
2019-02-03,Hot Chocolate Fudge,120,4,480
2019-02-03,Vanilla Single Scoop,50,4,200
2019-02-03,Vanilla Double Scoop,80,3,240
2019-02-03,Cake Fudge,150,1,150
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Caramel Crunch Double Scoop,100,3,300
2019-02-03,Cake Fudge,150,3,450
2019-02-03,Death by Chocolate,180,3,540
2019-02-03,Cake Fudge,150,1,150
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Vanilla Double Scoop,80,4,320
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Cake Fudge,150,4,600
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Vanilla Single Scoop,50,2,100
2019-02-03,Butterscotch Single Scoop,60,4,240
2019-02-03,Chocolate Europa Single Scoop,70,1,70
2019-02-03,Vanilla Double Scoop,80,4,320
2019-02-03,Vanilla Double Scoop,80,4,320
2019-02-03,Vanilla Single Scoop,50,5,250
2019-02-03,Vanilla Double Scoop,80,5,400
2019-02-03,Vanilla Double Scoop,80,3,240
2019-02-03,Pista Single Scoop,60,3,180
2019-02-03,Death by Chocolate,180,2,360
2019-02-03,Hot Chocolate Fudge,120,3,360
2019-02-03,Fig and Honey Single Scoop,60,1,60
2019-02-03,Hot Chocolate Fudge,120,3,360
2019-02-03,Cake Fudge,150,3,450
2019-02-03,Vanilla Double Scoop,80,5,400
2019-02-03,Death by Chocolate,180,3,540
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Cake Fudge,150,1,150
2019-02-03,Cafe Caramel,160,2,320
2019-02-03,Fig and Honey Double Scoop,90,4,360
2019-02-03,Butterscotch Single Scoop,60,3,180
2019-02-03,Vanilla Double Scoop,80,1,80
2019-02-03,Butterscotch Single Scoop,60,4,240
2019-02-03,Hot Chocolate Fudge,120,4,480
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Vanilla Double Scoop,80,2,160
2019-02-03,Vanilla Single Scoop,50,4,200
2019-02-03,Butterscotch Single Scoop,60,3,180
2019-02-03,Death by Chocolate,180,3,540
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Butterscotch Single Scoop,60,4,240
2019-02-03,Vanilla Double Scoop,80,4,320
2019-02-03,Death by Chocolate,180,3,540
2019-02-03,Death by Chocolate,180,5,900
2019-02-03,Fig and Honey Single Scoop,60,3,180
2019-02-03,Vanilla Single Scoop,50,3,150
2019-02-03,Butterscotch Double Scoop,90,1,90
2019-02-03,Vanilla Single Scoop,50,3,150
2019-02-03,Vanilla Single Scoop,50,1,50
2019-02-03,Hot Chocolate Fudge,120,3,360
2019-02-03,Vanilla Double Scoop,80,1,80
2019-02-03,Cafe Caramel,160,4,640
2019-02-03,Hot Chocolate Fudge,120,2,240
2019-02-03,Vanilla Single Scoop,50,2,100
2019-02-03,Rocky Road Double Scoop,80,4,320
2019-02-03,Vanilla Double Scoop,80,4,320
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Hot Chocolate Fudge,120,4,480
2019-02-03,Vanilla Double Scoop,80,1,80
2019-02-03,Butterscotch Single Scoop,60,5,300
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Cake Fudge,150,4,600
2019-02-03,Death by Chocolate,180,1,180
2019-02-03,Vanilla Double Scoop,80,4,320
2019-02-03,Hot Chocolate Fudge,120,2,240
2019-02-03,Death by Chocolate,180,4,720
2019-02-03,Cafe Caramel,160,5,800
2019-02-03,Vanilla Double Scoop,80,5,400
2019-02-03,Cake Fudge,150,5,750
2019-02-03,Mint Fudge,120,5,600
2019-02-03,Vanilla Double Scoop,80,5,400
2019-02-03,Cake Fudge,150,3,450
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Death by Chocolate,180,5,900
2019-02-03,Pista Double Scoop,90,3,270
2019-02-03,Hot Chocolate Fudge,120,2,240
2019-02-03,Trilogy,160,4,640
2019-02-03,Cake Fudge,150,3,450
2019-02-03,Dry Fruit Single Scoop,60,5,300
2019-02-03,Vanilla Double Scoop,80,4,320
2019-02-03,Hot Chocolate Fudge,120,4,480
2019-02-03,Chocolate Europa Double Scoop,100,4,400
2019-02-03,Vanilla Single Scoop,50,2,100
2019-02-03,Death by Chocolate,180,4,720
2019-02-03,Vanilla Double Scoop,80,3,240
2019-02-03,Death by Chocolate,180,2,360
2019-02-03,Chocolate Europa Double Scoop,100,5,500
2019-02-03,Pista Single Scoop,60,4,240
2019-02-03,Butterscotch Single Scoop,60,5,300
2019-02-03,Cake Fudge,150,4,600
2019-02-03,Vanilla Double Scoop,80,3,240
2019-02-03,Cafe Caramel,160,1,160
2019-02-03,Vanilla Double Scoop,80,4,320
2019-02-03,Vanilla Single Scoop,50,4,200
2019-02-03,Hot Chocolate Fudge,120,4,480
2019-02-03,Dry Fruit Single Scoop,60,1,60
2019-02-03,Butterscotch Single Scoop,60,5,300
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Caramel Crunch Double Scoop,100,2,200
2019-02-03,Cake Fudge,150,1,150
2019-02-03,Death by Chocolate,180,4,720
2019-02-03,Death by Chocolate,180,5,900
2019-02-03,Butterscotch Single Scoop,60,1,60
2019-02-03,Death by Chocolate,180,4,720
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Cake Fudge,150,5,750
2019-02-03,Vanilla Double Scoop,80,5,400
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Butterscotch Single Scoop,60,2,120
2019-02-03,Butterscotch Single Scoop,60,3,180
2019-02-03,Cake Fudge,150,1,150
2019-02-03,Hot Chocolate Fudge,120,4,480
2019-02-03,Vanilla Single Scoop,50,2,100
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Hot Chocolate Fudge,120,2,240
2019-02-03,Vanilla Single Scoop,50,4,200
2019-02-03,Vanilla Double Scoop,80,2,160
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Butterscotch Double Scoop,90,5,450
2019-02-03,Banana Split,140,3,420
2019-02-03,Cafe Caramel,160,1,160
2019-02-03,Vanilla Double Scoop,80,3,240
2019-02-03,Butterscotch Double Scoop,90,1,90
2019-02-03,Vanilla Double Scoop,80,3,240
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Fig and Honey Single Scoop,60,2,120
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Hot Chocolate Fudge,120,3,360
2019-02-03,Cake Fudge,150,2,300
2019-02-03,Hot Chocolate Fudge,120,5,600
2019-02-03,Butterscotch Single Scoop,60,3,180
2019-02-03,Pista Double Scoop,90,1,90
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Hot Chocolate Fudge,120,1,120
2019-02-03,Cafe Caramel,160,5,800
2019-02-03,Death by Chocolate,180,5,900
2019-02-03,Vanilla Single Scoop,50,3,150
2019-02-03,Cake Fudge,150,2,300
2019-02-04,Vanilla Double Scoop,80,2,160
2019-02-04,Vanilla Double Scoop,80,2,160
2019-02-04,Butterscotch Single Scoop,60,2,120
2019-02-04,Caramel Crunch Single Scoop,70,1,70
2019-02-04,Dew Drop Sundae,150,5,750
2019-02-04,Cake Fudge,150,5,750
2019-02-04,Dry Fruit Single Scoop,60,4,240
2019-02-04,Cake Fudge,150,2,300
2019-02-04,Hot Chocolate Fudge,120,5,600
2019-02-04,Vanilla Double Scoop,80,3,240
2019-02-04,Vanilla Double Scoop,80,5,400
2019-02-04,Vanilla Double Scoop,80,1,80
2019-02-04,Butterscotch Single Scoop,60,4,240
2019-02-04,Vanilla Single Scoop,50,2,100
2019-02-04,Rocky Road Single Scoop,50,2,100
2019-02-04,Hot Chocolate Fudge,120,2,240
2019-02-04,Hot Chocolate Fudge,120,1,120
2019-02-04,Hot Chocolate Fudge,120,3,360
2019-02-04,Cake Fudge,150,3,450
2019-02-04,Death by Chocolate,180,3,540
2019-02-04,Vanilla Double Scoop,80,1,80
2019-02-04,Vanilla Single Scoop,50,1,50
2019-02-04,Butterscotch Single Scoop,60,4,240
2019-02-04,Hot Chocolate Fudge,120,2,240
2019-02-04,Pista Double Scoop,90,5,450
2019-02-04,Hot Chocolate Fudge,120,4,480
2019-02-04,Hot Chocolate Fudge,120,5,600
2019-02-04,Caramel Crunch Double Scoop,100,5,500
2019-02-04,Hot Chocolate Fudge,120,5,600
2019-02-04,Butterscotch Single Scoop,60,1,60
2019-02-04,Butterscotch Single Scoop,60,1,60
2019-02-04,Hot Chocolate Fudge,120,5,600
2019-02-04,Hot Chocolate Fudge,120,3,360
2019-02-04,Hot Chocolate Fudge,120,5,600
2019-02-04,Cafe Caramel,160,5,800
2019-02-04,Vanilla Single Scoop,50,4,200
2019-02-04,Butterscotch Single Scoop,60,1,60
2019-02-04,Vanilla Double Scoop,80,5,400
2019-02-04,Death by Chocolate,180,2,360
2019-02-04,Vanilla Double Scoop,80,4,320
2019-02-04,Cake Fudge,150,4,600
2019-02-04,Vanilla Double Scoop,80,4,320
2019-02-04,Hot Chocolate Fudge,120,1,120
2019-02-04,Butterscotch Double Scoop,90,3,270
2019-02-04,Cake Fudge,150,4,600
2019-02-04,Vanilla Double Scoop,80,3,240
2019-02-04,Chocolate Europa Double Scoop,100,5,500
2019-02-04,Vanilla Double Scoop,80,2,160
2019-02-04,Chocolate Europa Single Scoop,70,4,280
2019-02-04,Vanilla Double Scoop,80,5,400
2019-02-04,Cake Fudge,150,3,450
2019-02-04,Vanilla Single Scoop,50,5,250
2019-02-04,Hot Chocolate Fudge,120,4,480
2019-02-04,Cafe Caramel,160,2,320
2019-02-04,Vanilla Double Scoop,80,5,400
2019-02-04,Cake Fudge,150,2,300
2019-02-04,Dry Fruit Single Scoop,60,1,60
2019-02-04,Vanilla Double Scoop,80,2,160
2019-02-04,Cake Fudge,150,2,300
2019-02-04,Hot Chocolate Fudge,120,3,360
2019-02-04,Butterscotch Single Scoop,60,1,60
2019-02-04,Chocolate Europa Single Scoop,70,3,210
2019-02-04,Vanilla Single Scoop,50,2,100
2019-02-04,Pista Single Scoop,60,2,120
2019-02-04,Butterscotch Single Scoop,60,5,300
2019-02-04,Vanilla Double Scoop,80,3,240
2019-02-04,Hot Chocolate Fudge,120,3,360
2019-02-04,Hot Chocolate Fudge,120,1,120
2019-02-04,Hot Chocolate Fudge,120,1,120
2019-02-04,Death by Chocolate,180,1,180
2019-02-04,Caramel Crunch Single Scoop,70,4,280
2019-02-04,Cake Fudge,150,3,450
2019-02-04,Chocolate Europa Single Scoop,70,5,350
2019-02-04,Hot Chocolate Fudge,120,5,600
2019-02-04,Vanilla Single Scoop,50,1,50
2019-02-04,Rocky Road Single Scoop,50,3,150
2019-02-04,Vanilla Single Scoop,50,3,150
2019-02-04,Vanilla Single Scoop,50,2,100
2019-02-04,Vanilla Double Scoop,80,2,160
2019-02-04,Butterscotch Single Scoop,60,2,120
2019-02-04,Vanilla Double Scoop,80,1,80
2019-02-04,Vanilla Double Scoop,80,1,80
2019-02-04,Vanilla Single Scoop,50,1,50
2019-02-04,Butterscotch Single Scoop,60,1,60
2019-02-04,Chocolate Europa Double Scoop,100,2,200
2019-02-04,Cake Fudge,150,5,750
2019-02-04,Death by Chocolate,180,1,180
2019-02-04,Butterscotch Single Scoop,60,1,60
2019-02-04,Rocky Road Single Scoop,50,2,100
2019-02-04,Chocolate Europa Double Scoop,100,5,500
2019-02-04,Hot Chocolate Fudge,120,1,120
2019-02-04,Hot Chocolate Fudge,120,5,600
2019-02-04,Cake Fudge,150,4,600
2019-02-04,Cafe Caramel,160,5,800
2019-02-04,Butterscotch Single Scoop,60,5,300
2019-02-04,Fig and Honey Double Scoop,90,2,180
2019-02-04,Vanilla Single Scoop,50,3,150
2019-02-04,Vanilla Single Scoop,50,5,250
2019-02-04,Death by Chocolate,180,3,540
2019-02-04,Hot Chocolate Fudge,120,1,120
2019-02-04,Butterscotch Single Scoop,60,5,300
2019-02-04,Hot Chocolate Fudge,120,2,240
2019-02-04,Dry Fruit Single Scoop,60,3,180
2019-02-04,Hot Chocolate Fudge,120,4,480
2019-02-04,Vanilla Double Scoop,80,4,320
2019-02-04,Death by Chocolate,180,1,180
2019-02-04,Vanilla Double Scoop,80,1,80
2019-02-04,Hot Chocolate Fudge,120,3,360
2019-02-04,Butterscotch Single Scoop,60,3,180
2019-02-04,Cake Fudge,150,4,600
2019-02-04,Cake Fudge,150,1,150
2019-02-04,Butterscotch Single Scoop,60,1,60
2019-02-04,Hot Chocolate Fudge,120,4,480
2019-02-04,Vanilla Double Scoop,80,5,400
2019-02-05,Vanilla Single Scoop,50,4,200
2019-02-05,Hot Chocolate Fudge,120,4,480
2019-02-05,Cafe Caramel,160,2,320
2019-02-05,Hot Chocolate Fudge,120,5,600
2019-02-05,Death by Chocolate,180,3,540
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Cake Fudge,150,3,450
2019-02-05,Hot Chocolate Fudge,120,3,360
2019-02-05,Vanilla Single Scoop,50,3,150
2019-02-05,Hot Chocolate Fudge,120,4,480
2019-02-05,Vanilla Double Scoop,80,3,240
2019-02-05,Cake Fudge,150,2,300
2019-02-05,Pista Single Scoop,60,4,240
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Death by Chocolate,180,3,540
2019-02-05,Hot Chocolate Fudge,120,1,120
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Fig and Honey Single Scoop,60,1,60
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Cake Fudge,150,3,450
2019-02-05,Death by Chocolate,180,4,720
2019-02-05,Vanilla Single Scoop,50,4,200
2019-02-05,Hot Chocolate Fudge,120,3,360
2019-02-05,Fig and Honey Single Scoop,60,5,300
2019-02-05,Cafe Caramel,160,5,800
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Death by Chocolate,180,3,540
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Cafe Caramel,160,2,320
2019-02-05,Vanilla Double Scoop,80,4,320
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Hot Chocolate Fudge,120,4,480
2019-02-05,Vanilla Single Scoop,50,3,150
2019-02-05,Death by Chocolate,180,3,540
2019-02-05,Vanilla Single Scoop,50,1,50
2019-02-05,Mint Fudge,120,3,360
2019-02-05,Rocky Road Double Scoop,80,1,80
2019-02-05,Fig and Honey Single Scoop,60,1,60
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Butterscotch Single Scoop,60,5,300
2019-02-05,Hot Chocolate Fudge,120,2,240
2019-02-05,Death by Chocolate,180,1,180
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Vanilla Single Scoop,50,2,100
2019-02-05,Hot Chocolate Fudge,120,1,120
2019-02-05,Hot Chocolate Fudge,120,4,480
2019-02-05,Death by Chocolate,180,1,180
2019-02-05,Cafe Caramel,160,1,160
2019-02-05,Cafe Caramel,160,2,320
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Death by Chocolate,180,3,540
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Trilogy,160,5,800
2019-02-05,Cake Fudge,150,3,450
2019-02-05,Caramel Crunch Single Scoop,70,1,70
2019-02-05,Cake Fudge,150,1,150
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Vanilla Double Scoop,80,4,320
2019-02-05,Vanilla Double Scoop,80,4,320
2019-02-05,Butterscotch Single Scoop,60,4,240
2019-02-05,Pista Double Scoop,90,4,360
2019-02-05,Hot Chocolate Fudge,120,1,120
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Hot Chocolate Fudge,120,3,360
2019-02-05,Vanilla Double Scoop,80,2,160
2019-02-05,Hot Chocolate Fudge,120,3,360
2019-02-05,Dew Drop Sundae,150,3,450
2019-02-05,Cake Fudge,150,3,450
2019-02-05,Vanilla Single Scoop,50,5,250
2019-02-05,Death by Chocolate,180,3,540
2019-02-05,Butterscotch Single Scoop,60,5,300
2019-02-05,Vanilla Double Scoop,80,3,240
2019-02-05,Hot Chocolate Fudge,120,4,480
2019-02-05,Vanilla Double Scoop,80,2,160
2019-02-05,Cafe Caramel,160,1,160
2019-02-05,Death by Chocolate,180,2,360
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Cake Fudge,150,3,450
2019-02-05,Rocky Road Single Scoop,50,5,250
2019-02-05,Death by Chocolate,180,2,360
2019-02-05,Vanilla Double Scoop,80,4,320
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Hot Chocolate Fudge,120,3,360
2019-02-05,Cake Fudge,150,1,150
2019-02-05,Cake Fudge,150,2,300
2019-02-05,Vanilla Double Scoop,80,2,160
2019-02-05,Hot Chocolate Fudge,120,2,240
2019-02-05,Cake Fudge,150,1,150
2019-02-05,Death by Chocolate,180,1,180
2019-02-05,Vanilla Single Scoop,50,2,100
2019-02-05,Vanilla Double Scoop,80,4,320
2019-02-05,Almond Fudge,150,1,150
2019-02-05,Hot Chocolate Fudge,120,5,600
2019-02-05,Cake Fudge,150,2,300
2019-02-05,Death by Chocolate,180,1,180
2019-02-05,Pista Double Scoop,90,3,270
2019-02-05,Cake Fudge,150,2,300
2019-02-05,Hot Chocolate Fudge,120,4,480
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Vanilla Double Scoop,80,1,80
2019-02-05,Vanilla Double Scoop,80,2,160
2019-02-05,Death by Chocolate,180,5,900
2019-02-05,Butterscotch Single Scoop,60,3,180
2019-02-05,Hot Chocolate Fudge,120,5,600
2019-02-05,Butterscotch Single Scoop,60,3,180
2019-02-05,Cake Fudge,150,1,150
2019-02-05,Fig and Honey Double Scoop,90,2,180
2019-02-05,Vanilla Single Scoop,50,3,150
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Butterscotch Single Scoop,60,2,120
2019-02-05,Vanilla Single Scoop,50,2,100
2019-02-05,Hot Chocolate Fudge,120,2,240
2019-02-05,Death by Chocolate,180,5,900
2019-02-05,Vanilla Double Scoop,80,2,160
2019-02-05,Cafe Caramel,160,5,800
2019-02-05,Hot Chocolate Fudge,120,4,480
2019-02-05,Pista Double Scoop,90,5,450
2019-02-05,Hot Chocolate Fudge,120,2,240
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Vanilla Single Scoop,50,3,150
2019-02-05,Vanilla Single Scoop,50,5,250
2019-02-05,Butterscotch Single Scoop,60,5,300
2019-02-05,Cafe Caramel,160,4,640
2019-02-05,Dew Drop Sundae,150,3,450
2019-02-05,Cake Fudge,150,2,300
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Hot Chocolate Fudge,120,1,120
2019-02-05,Vanilla Double Scoop,80,5,400
2019-02-05,Cafe Caramel,160,5,800
2019-02-05,Hot Chocolate Fudge,120,1,120
2019-02-05,Vanilla Double Scoop,80,4,320
2019-02-05,Death by Chocolate,180,3,540
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Cake Fudge,150,4,600
2019-02-05,Cake Fudge,150,5,750
2019-02-05,Death by Chocolate,180,1,180
2019-02-05,Vanilla Single Scoop,50,2,100
2019-02-05,Hot Chocolate Fudge,120,5,600
2019-02-05,Chocolate Europa Double Scoop,100,5,500
2019-02-05,Pista Single Scoop,60,4,240
2019-02-05,Death by Chocolate,180,4,720
2019-02-05,Cake Fudge,150,3,450
2019-02-06,Cake Fudge,150,3,450
2019-02-06,Hot Chocolate Fudge,120,4,480
2019-02-06,Vanilla Single Scoop,50,5,250
2019-02-06,Vanilla Double Scoop,80,4,320
2019-02-06,Vanilla Single Scoop,50,3,150
2019-02-06,Hot Chocolate Fudge,120,3,360
2019-02-06,Hot Chocolate Fudge,120,2,240
2019-02-06,Vanilla Double Scoop,80,1,80
2019-02-06,Vanilla Double Scoop,80,3,240
2019-02-06,Pista Double Scoop,90,1,90
2019-02-06,Rocky Road Single Scoop,50,4,200
2019-02-06,Caramel Crunch Double Scoop,100,5,500
2019-02-06,Death by Chocolate,180,3,540
2019-02-06,Hot Chocolate Fudge,120,4,480
2019-02-06,Dry Fruit Double Scoop,90,2,180
2019-02-06,Hot Chocolate Fudge,120,4,480
2019-02-06,Dry Fruit Double Scoop,90,5,450
2019-02-06,Cake Fudge,150,3,450
2019-02-06,Vanilla Double Scoop,80,3,240
2019-02-06,Butterscotch Single Scoop,60,5,300
2019-02-06,Hot Chocolate Fudge,120,2,240
2019-02-06,Hot Chocolate Fudge,120,1,120
2019-02-06,Cake Fudge,150,2,300
2019-02-06,Vanilla Double Scoop,80,3,240
2019-02-06,Vanilla Double Scoop,80,3,240
2019-02-06,Vanilla Single Scoop,50,3,150
2019-02-06,Butterscotch Single Scoop,60,1,60
2019-02-06,Hot Chocolate Fudge,120,2,240
2019-02-06,Cafe Caramel,160,2,320
2019-02-06,Hot Chocolate Fudge,120,5,600
2019-02-06,Death by Chocolate,180,2,360
2019-02-06,Rocky Road Single Scoop,50,3,150
2019-02-06,Vanilla Single Scoop,50,2,100
2019-02-06,Dew Drop Sundae,150,2,300
2019-02-06,Cake Fudge,150,4,600
2019-02-06,Vanilla Single Scoop,50,3,150
2019-02-06,Hot Chocolate Fudge,120,4,480
2019-02-06,Cake Fudge,150,3,450
2019-02-06,Hot Chocolate Fudge,120,5,600
2019-02-06,Hot Chocolate Fudge,120,4,480
2019-02-06,Cafe Caramel,160,2,320
2019-02-06,Cake Fudge,150,1,150
2019-02-06,Fig and Honey Double Scoop,90,2,180
2019-02-06,Fig and Honey Single Scoop,60,1,60
2019-02-06,Hot Chocolate Fudge,120,2,240
2019-02-06,Cafe Caramel,160,2,320
2019-02-06,Vanilla Single Scoop,50,2,100
2019-02-06,Cake Fudge,150,3,450
2019-02-06,Dry Fruit Double Scoop,90,5,450
2019-02-06,Hot Chocolate Fudge,120,4,480
2019-02-06,Caramel Crunch Single Scoop,70,5,350
2019-02-06,Vanilla Single Scoop,50,1,50
2019-02-06,Vanilla Double Scoop,80,2,160
2019-02-06,Death by Chocolate,180,1,180
2019-02-06,Hot Chocolate Fudge,120,1,120
2019-02-06,Vanilla Single Scoop,50,5,250
2019-02-06,Hot Chocolate Fudge,120,5,600
2019-02-06,Hot Chocolate Fudge,120,2,240
2019-02-06,Pista Single Scoop,60,4,240
2019-02-06,Vanilla Single Scoop,50,2,100
2019-02-06,Death by Chocolate,180,4,720
2019-02-06,Hot Chocolate Fudge,120,3,360
2019-02-06,Hot Chocolate Fudge,120,5,600
2019-02-06,Dry Fruit Single Scoop,60,2,120
2019-02-06,Butterscotch Single Scoop,60,1,60
2019-02-06,Cafe Caramel,160,2,320
2019-02-06,Butterscotch Single Scoop,60,5,300
2019-02-06,Chocolate Europa Double Scoop,100,5,500
2019-02-06,Pista Double Scoop,90,4,360
2019-02-06,Caramel Crunch Double Scoop,100,2,200
2019-02-06,Cake Fudge,150,4,600
2019-02-06,Caramel Crunch Double Scoop,100,1,100
2019-02-06,Rocky Road Single Scoop,50,5,250
2019-02-06,Banana Split,140,2,280
2019-02-06,Death by Chocolate,180,4,720
2019-02-06,Hot Chocolate Fudge,120,1,120
2019-02-06,Butterscotch Single Scoop,60,4,240
2019-02-06,Vanilla Double Scoop,80,2,160
2019-02-06,Cake Fudge,150,2,300
2019-02-06,Hot Chocolate Fudge,120,1,120
2019-02-06,Cake Fudge,150,4,600
2019-02-06,Vanilla Single Scoop,50,4,200
2019-02-06,Chocolate Europa Double Scoop,100,4,400
2019-02-06,Cake Fudge,150,3,450
2019-02-06,Pista Double Scoop,90,4,360
2019-02-06,Butterscotch Single Scoop,60,2,120
2019-02-06,Butterscotch Single Scoop,60,2,120
2019-02-06,Butterscotch Single Scoop,60,1,60
2019-02-06,Vanilla Double Scoop,80,5,400
2019-02-06,Vanilla Single Scoop,50,3,150
2019-02-06,Butterscotch Single Scoop,60,5,300
2019-02-06,Dry Fruit Double Scoop,90,2,180
2019-02-06,Hot Chocolate Fudge,120,4,480
2019-02-06,Rocky Road Double Scoop,80,2,160
2019-02-06,Vanilla Single Scoop,50,4,200
2019-02-06,Butterscotch Single Scoop,60,3,180
2019-02-06,Vanilla Double Scoop,80,4,320
2019-02-06,Death by Chocolate,180,5,900
2019-02-06,Pista Single Scoop,60,4,240
2019-02-06,Vanilla Single Scoop,50,2,100
2019-02-06,Vanilla Single Scoop,50,3,150
2019-02-06,Cake Fudge,150,2,300
2019-02-06,Cake Fudge,150,2,300
2019-02-06,Vanilla Single Scoop,50,1,50
2019-02-06,Butterscotch Single Scoop,60,2,120
2019-02-06,Cake Fudge,150,2,300
2019-02-06,Vanilla Double Scoop,80,3,240
2019-02-06,Hot Chocolate Fudge,120,3,360
2019-02-06,Pista Single Scoop,60,4,240
2019-02-06,Vanilla Single Scoop,50,1,50
2019-02-06,Cake Fudge,150,2,300
2019-02-06,Vanilla Double Scoop,80,2,160
2019-02-06,Butterscotch Single Scoop,60,4,240
2019-02-06,Vanilla Single Scoop,50,2,100
2019-02-06,Cake Fudge,150,2,300
2019-02-06,Cake Fudge,150,5,750
2019-02-06,Hot Chocolate Fudge,120,2,240
2019-02-06,Cafe Caramel,160,3,480
2019-02-06,Death by Chocolate,180,4,720
2019-02-07,Trilogy,160,4,640
2019-02-07,Vanilla Single Scoop,50,4,200
2019-02-07,Vanilla Single Scoop,50,4,200
2019-02-07,Hot Chocolate Fudge,120,2,240
2019-02-07,Hot Chocolate Fudge,120,1,120
2019-02-07,Death by Chocolate,180,5,900
2019-02-07,Cake Fudge,150,3,450
2019-02-07,Butterscotch Single Scoop,60,2,120
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Vanilla Double Scoop,80,2,160
2019-02-07,Vanilla Single Scoop,50,1,50
2019-02-07,Cake Fudge,150,3,450
2019-02-07,Fig and Honey Single Scoop,60,1,60
2019-02-07,Fig and Honey Double Scoop,90,3,270
2019-02-07,Vanilla Single Scoop,50,2,100
2019-02-07,Trilogy,160,4,640
2019-02-07,Vanilla Single Scoop,50,5,250
2019-02-07,Vanilla Single Scoop,50,3,150
2019-02-07,Chocolate Europa Double Scoop,100,2,200
2019-02-07,Vanilla Double Scoop,80,1,80
2019-02-07,Cake Fudge,150,2,300
2019-02-07,Rocky Road Single Scoop,50,3,150
2019-02-07,Chocolate Europa Double Scoop,100,4,400
2019-02-07,Hot Chocolate Fudge,120,1,120
2019-02-07,Cafe Caramel,160,3,480
2019-02-07,Hot Chocolate Fudge,120,2,240
2019-02-07,Vanilla Single Scoop,50,2,100
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Cake Fudge,150,1,150
2019-02-07,Cake Fudge,150,2,300
2019-02-07,Vanilla Single Scoop,50,5,250
2019-02-07,Cake Fudge,150,1,150
2019-02-07,Butterscotch Double Scoop,90,1,90
2019-02-07,Cake Fudge,150,4,600
2019-02-07,Death by Chocolate,180,4,720
2019-02-07,Dry Fruit Single Scoop,60,4,240
2019-02-07,Death by Chocolate,180,1,180
2019-02-07,Cake Fudge,150,4,600
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Vanilla Single Scoop,50,3,150
2019-02-07,Hot Chocolate Fudge,120,3,360
2019-02-07,Death by Chocolate,180,2,360
2019-02-07,Death by Chocolate,180,3,540
2019-02-07,Cafe Caramel,160,4,640
2019-02-07,Vanilla Single Scoop,50,5,250
2019-02-07,Cake Fudge,150,3,450
2019-02-07,Vanilla Single Scoop,50,4,200
2019-02-07,Dry Fruit Single Scoop,60,5,300
2019-02-07,Cake Fudge,150,1,150
2019-02-07,Butterscotch Single Scoop,60,4,240
2019-02-07,Cake Fudge,150,1,150
2019-02-07,Vanilla Double Scoop,80,4,320
2019-02-07,Cake Fudge,150,5,750
2019-02-07,Cafe Caramel,160,4,640
2019-02-07,Butterscotch Double Scoop,90,1,90
2019-02-07,Vanilla Single Scoop,50,1,50
2019-02-07,Dry Fruit Single Scoop,60,4,240
2019-02-07,Butterscotch Single Scoop,60,4,240
2019-02-07,Cafe Caramel,160,2,320
2019-02-07,Butterscotch Single Scoop,60,2,120
2019-02-07,Fig and Honey Single Scoop,60,4,240
2019-02-07,Death by Chocolate,180,2,360
2019-02-07,Death by Chocolate,180,5,900
2019-02-07,Hot Chocolate Fudge,120,1,120
2019-02-07,Cake Fudge,150,2,300
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Dry Fruit Double Scoop,90,5,450
2019-02-07,Cafe Caramel,160,4,640
2019-02-07,Fig and Honey Single Scoop,60,3,180
2019-02-07,Hot Chocolate Fudge,120,3,360
2019-02-07,Cake Fudge,150,1,150
2019-02-07,Death by Chocolate,180,4,720
2019-02-07,Rocky Road Double Scoop,80,5,400
2019-02-07,Death by Chocolate,180,2,360
2019-02-07,Vanilla Single Scoop,50,3,150
2019-02-07,Butterscotch Single Scoop,60,4,240
2019-02-07,Cafe Caramel,160,2,320
2019-02-07,Death by Chocolate,180,4,720
2019-02-07,Vanilla Double Scoop,80,2,160
2019-02-07,Hot Chocolate Fudge,120,1,120
2019-02-07,Vanilla Single Scoop,50,4,200
2019-02-07,Hot Chocolate Fudge,120,1,120
2019-02-07,Cake Fudge,150,1,150
2019-02-07,Butterscotch Single Scoop,60,1,60
2019-02-07,Vanilla Single Scoop,50,3,150
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Vanilla Double Scoop,80,3,240
2019-02-07,Vanilla Double Scoop,80,5,400
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Cake Fudge,150,2,300
2019-02-07,Death by Chocolate,180,2,360
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Vanilla Double Scoop,80,2,160
2019-02-07,Butterscotch Single Scoop,60,5,300
2019-02-07,Rocky Road Single Scoop,50,5,250
2019-02-07,Vanilla Double Scoop,80,3,240
2019-02-07,Chocolate Europa Double Scoop,100,1,100
2019-02-07,Dry Fruit Single Scoop,60,3,180
2019-02-07,Vanilla Double Scoop,80,5,400
2019-02-07,Vanilla Double Scoop,80,5,400
2019-02-07,Hot Chocolate Fudge,120,3,360
2019-02-07,Vanilla Double Scoop,80,3,240
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Cake Fudge,150,4,600
2019-02-07,Butterscotch Single Scoop,60,4,240
2019-02-07,Vanilla Single Scoop,50,5,250
2019-02-07,Hot Chocolate Fudge,120,4,480
2019-02-07,Cake Fudge,150,4,600
2019-02-07,Hot Chocolate Fudge,120,4,480
2019-02-07,Trilogy,160,3,480
2019-02-07,Death by Chocolate,180,3,540
2019-02-07,Vanilla Single Scoop,50,3,150
2019-02-07,Death by Chocolate,180,5,900
2019-02-07,Cafe Caramel,160,5,800
2019-02-07,Vanilla Single Scoop,50,1,50
2019-02-07,Death by Chocolate,180,3,540
2019-02-07,Cake Fudge,150,3,450
2019-02-07,Vanilla Single Scoop,50,5,250
2019-02-07,Vanilla Double Scoop,80,1,80
2019-02-07,Vanilla Double Scoop,80,1,80
2019-02-07,Vanilla Double Scoop,80,1,80
2019-02-07,Death by Chocolate,180,3,540
2019-02-07,Rocky Road Double Scoop,80,5,400
2019-02-07,Vanilla Double Scoop,80,2,160
2019-02-07,Vanilla Double Scoop,80,1,80
2019-02-07,Vanilla Single Scoop,50,2,100
2019-02-07,Caramel Crunch Double Scoop,100,4,400
2019-02-07,Butterscotch Single Scoop,60,1,60
2019-02-07,Hot Chocolate Fudge,120,1,120
2019-02-07,Rocky Road Double Scoop,80,4,320
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Caramel Crunch Double Scoop,100,2,200
2019-02-07,Vanilla Double Scoop,80,5,400
2019-02-07,Hot Chocolate Fudge,120,2,240
2019-02-07,Hot Chocolate Fudge,120,4,480
2019-02-07,Hot Chocolate Fudge,120,5,600
2019-02-07,Vanilla Single Scoop,50,3,150
2019-02-07,Butterscotch Single Scoop,60,1,60
2019-02-07,Butterscotch Single Scoop,60,5,300
2019-02-07,Rocky Road Single Scoop,50,3,150
2019-02-07,Hot Chocolate Fudge,120,3,360
2019-02-07,Butterscotch Single Scoop,60,4,240
2019-02-07,Vanilla Single Scoop,50,4,200
2019-02-07,Vanilla Double Scoop,80,5,400
2019-02-07,Hot Chocolate Fudge,120,2,240
2019-02-07,Vanilla Single Scoop,50,5,250
2019-02-07,Dry Fruit Single Scoop,60,5,300
2019-02-07,Vanilla Single Scoop,50,4,200
2019-02-07,Vanilla Double Scoop,80,4,320
2019-02-07,Cake Fudge,150,5,750
2019-02-07,Vanilla Single Scoop,50,5,250
2019-02-07,Vanilla Double Scoop,80,3,240
2019-02-07,Hot Chocolate Fudge,120,3,360
2019-02-07,Vanilla Single Scoop,50,1,50
2019-02-07,Vanilla Double Scoop,80,3,240
2019-02-07,Butterscotch Single Scoop,60,2,120
2019-02-07,Death by Chocolate,180,2,360
2019-02-07,Vanilla Double Scoop,80,3,240
2019-02-07,Vanilla Double Scoop,80,4,320
2019-02-08,Butterscotch Single Scoop,60,3,180
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Vanilla Double Scoop,80,5,400
2019-02-08,Cafe Caramel,160,4,640
2019-02-08,Cake Fudge,150,2,300
2019-02-08,Pista Single Scoop,60,3,180
2019-02-08,Vanilla Single Scoop,50,3,150
2019-02-08,Death by Chocolate,180,4,720
2019-02-08,Cake Fudge,150,5,750
2019-02-08,Hot Chocolate Fudge,120,2,240
2019-02-08,Caramel Crunch Double Scoop,100,2,200
2019-02-08,Cake Fudge,150,5,750
2019-02-08,Pista Double Scoop,90,2,180
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Hot Chocolate Fudge,120,2,240
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Vanilla Double Scoop,80,1,80
2019-02-08,Vanilla Double Scoop,80,2,160
2019-02-08,Butterscotch Single Scoop,60,3,180
2019-02-08,Fig and Honey Double Scoop,90,4,360
2019-02-08,Vanilla Double Scoop,80,2,160
2019-02-08,Butterscotch Single Scoop,60,2,120
2019-02-08,Pista Double Scoop,90,1,90
2019-02-08,Cafe Caramel,160,3,480
2019-02-08,Vanilla Single Scoop,50,1,50
2019-02-08,Hot Chocolate Fudge,120,3,360
2019-02-08,Death by Chocolate,180,2,360
2019-02-08,Vanilla Double Scoop,80,5,400
2019-02-08,Butterscotch Single Scoop,60,4,240
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-08,Butterscotch Single Scoop,60,1,60
2019-02-08,Hot Chocolate Fudge,120,3,360
2019-02-08,Butterscotch Single Scoop,60,2,120
2019-02-08,Vanilla Double Scoop,80,3,240
2019-02-08,Caramel Crunch Single Scoop,70,3,210
2019-02-08,Death by Chocolate,180,1,180
2019-02-08,Butterscotch Single Scoop,60,3,180
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Butterscotch Single Scoop,60,1,60
2019-02-08,Chocolate Europa Single Scoop,70,5,350
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Hot Chocolate Fudge,120,4,480
2019-02-08,Hot Chocolate Fudge,120,3,360
2019-02-08,Hot Chocolate Fudge,120,2,240
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-08,Death by Chocolate,180,4,720
2019-02-08,Vanilla Single Scoop,50,3,150
2019-02-08,Vanilla Double Scoop,80,5,400
2019-02-08,Cake Fudge,150,5,750
2019-02-08,Butterscotch Single Scoop,60,5,300
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Vanilla Double Scoop,80,5,400
2019-02-08,Death by Chocolate,180,3,540
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Cake Fudge,150,5,750
2019-02-08,Death by Chocolate,180,4,720
2019-02-08,Fig and Honey Double Scoop,90,4,360
2019-02-08,Cake Fudge,150,2,300
2019-02-08,Dry Fruit Single Scoop,60,5,300
2019-02-08,Vanilla Double Scoop,80,1,80
2019-02-08,Death by Chocolate,180,1,180
2019-02-08,Chocolate Europa Single Scoop,70,4,280
2019-02-08,Death by Chocolate,180,4,720
2019-02-08,Vanilla Single Scoop,50,3,150
2019-02-08,Vanilla Single Scoop,50,3,150
2019-02-08,Butterscotch Double Scoop,90,3,270
2019-02-08,Fig and Honey Double Scoop,90,5,450
2019-02-08,Butterscotch Single Scoop,60,4,240
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Vanilla Single Scoop,50,4,200
2019-02-08,Vanilla Double Scoop,80,2,160
2019-02-08,Cafe Caramel,160,2,320
2019-02-08,Chocolate Europa Single Scoop,70,2,140
2019-02-08,Cake Fudge,150,2,300
2019-02-08,Vanilla Double Scoop,80,1,80
2019-02-08,Rocky Road Single Scoop,50,1,50
2019-02-08,Dew Drop Sundae,150,1,150
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Vanilla Double Scoop,80,2,160
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Cafe Caramel,160,1,160
2019-02-08,Cake Fudge,150,2,300
2019-02-08,Vanilla Single Scoop,50,5,250
2019-02-08,Cake Fudge,150,5,750
2019-02-08,Fig and Honey Double Scoop,90,5,450
2019-02-08,Vanilla Single Scoop,50,5,250
2019-02-08,Butterscotch Double Scoop,90,2,180
2019-02-08,Cake Fudge,150,5,750
2019-02-08,Mint Fudge,120,4,480
2019-02-08,Vanilla Double Scoop,80,3,240
2019-02-08,Cake Fudge,150,2,300
2019-02-08,Butterscotch Single Scoop,60,4,240
2019-02-08,Cake Fudge,150,4,600
2019-02-08,Trilogy,160,5,800
2019-02-08,Vanilla Single Scoop,50,4,200
2019-02-08,Vanilla Double Scoop,80,1,80
2019-02-08,Vanilla Double Scoop,80,2,160
2019-02-08,Cafe Caramel,160,3,480
2019-02-08,Caramel Crunch Single Scoop,70,3,210
2019-02-08,Cafe Caramel,160,4,640
2019-02-08,Vanilla Double Scoop,80,3,240
2019-02-08,Pista Double Scoop,90,4,360
2019-02-08,Trilogy,160,5,800
2019-02-08,Cafe Caramel,160,5,800
2019-02-08,Death by Chocolate,180,4,720
2019-02-08,Cake Fudge,150,1,150
2019-02-08,Butterscotch Single Scoop,60,3,180
2019-02-08,Pista Double Scoop,90,2,180
2019-02-08,Death by Chocolate,180,2,360
2019-02-08,Vanilla Double Scoop,80,5,400
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-08,Cafe Caramel,160,1,160
2019-02-08,Butterscotch Single Scoop,60,4,240
2019-02-08,Vanilla Single Scoop,50,2,100
2019-02-08,Death by Chocolate,180,1,180
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Hot Chocolate Fudge,120,3,360
2019-02-08,Vanilla Double Scoop,80,1,80
2019-02-08,Cake Fudge,150,1,150
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-08,Vanilla Double Scoop,80,5,400
2019-02-08,Cafe Caramel,160,1,160
2019-02-08,Death by Chocolate,180,3,540
2019-02-08,Vanilla Single Scoop,50,1,50
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-08,Fig and Honey Double Scoop,90,3,270
2019-02-08,Cake Fudge,150,4,600
2019-02-08,Hot Chocolate Fudge,120,2,240
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-08,Caramel Crunch Double Scoop,100,2,200
2019-02-08,Vanilla Single Scoop,50,2,100
2019-02-08,Dry Fruit Single Scoop,60,4,240
2019-02-08,Death by Chocolate,180,5,900
2019-02-08,Vanilla Single Scoop,50,5,250
2019-02-08,Butterscotch Single Scoop,60,4,240
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Cafe Caramel,160,1,160
2019-02-08,Vanilla Double Scoop,80,2,160
2019-02-08,Cafe Caramel,160,4,640
2019-02-08,Death by Chocolate,180,3,540
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Death by Chocolate,180,3,540
2019-02-08,Trilogy,160,1,160
2019-02-08,Vanilla Double Scoop,80,2,160
2019-02-08,Trilogy,160,4,640
2019-02-08,Hot Chocolate Fudge,120,1,120
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Cafe Caramel,160,5,800
2019-02-08,Vanilla Single Scoop,50,1,50
2019-02-08,Vanilla Single Scoop,50,3,150
2019-02-08,Hot Chocolate Fudge,120,2,240
2019-02-08,Vanilla Double Scoop,80,5,400
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Dry Fruit Double Scoop,90,1,90
2019-02-08,Cake Fudge,150,1,150
2019-02-08,Hot Chocolate Fudge,120,2,240
2019-02-08,Fig and Honey Double Scoop,90,2,180
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Butterscotch Single Scoop,60,1,60
2019-02-08,Vanilla Single Scoop,50,4,200
2019-02-08,Cake Fudge,150,2,300
2019-02-08,Vanilla Single Scoop,50,5,250
2019-02-08,Butterscotch Double Scoop,90,5,450
2019-02-08,Cake Fudge,150,5,750
2019-02-08,Death by Chocolate,180,2,360
2019-02-08,Death by Chocolate,180,4,720
2019-02-08,Vanilla Double Scoop,80,1,80
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Vanilla Double Scoop,80,1,80
2019-02-08,Dry Fruit Double Scoop,90,2,180
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Vanilla Double Scoop,80,2,160
2019-02-08,Death by Chocolate,180,2,360
2019-02-08,Cake Fudge,150,1,150
2019-02-08,Hot Chocolate Fudge,120,4,480
2019-02-08,Cake Fudge,150,4,600
2019-02-08,Cake Fudge,150,3,450
2019-02-08,Vanilla Double Scoop,80,4,320
2019-02-08,Hot Chocolate Fudge,120,5,600
2019-02-09,Hot Chocolate Fudge,120,2,240
2019-02-09,Death by Chocolate,180,2,360
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Almond Fudge,150,4,600
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Hot Chocolate Fudge,120,3,360
2019-02-09,Death by Chocolate,180,2,360
2019-02-09,Death by Chocolate,180,3,540
2019-02-09,Vanilla Double Scoop,80,3,240
2019-02-09,Vanilla Double Scoop,80,3,240
2019-02-09,Cake Fudge,150,3,450
2019-02-09,Dry Fruit Double Scoop,90,2,180
2019-02-09,Vanilla Double Scoop,80,4,320
2019-02-09,Chocolate Europa Single Scoop,70,2,140
2019-02-09,Cafe Caramel,160,1,160
2019-02-09,Butterscotch Single Scoop,60,3,180
2019-02-09,Dry Fruit Double Scoop,90,3,270
2019-02-09,Death by Chocolate,180,5,900
2019-02-09,Cake Fudge,150,2,300
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Dry Fruit Double Scoop,90,5,450
2019-02-09,Hot Chocolate Fudge,120,2,240
2019-02-09,Cafe Caramel,160,5,800
2019-02-09,Cafe Caramel,160,2,320
2019-02-09,Vanilla Double Scoop,80,3,240
2019-02-09,Butterscotch Single Scoop,60,4,240
2019-02-09,Dew Drop Sundae,150,5,750
2019-02-09,Hot Chocolate Fudge,120,2,240
2019-02-09,Cafe Caramel,160,4,640
2019-02-09,Butterscotch Single Scoop,60,4,240
2019-02-09,Hot Chocolate Fudge,120,2,240
2019-02-09,Cake Fudge,150,4,600
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Cafe Caramel,160,3,480
2019-02-09,Chocolate Europa Single Scoop,70,3,210
2019-02-09,Vanilla Single Scoop,50,5,250
2019-02-09,Cake Fudge,150,1,150
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Hot Chocolate Fudge,120,3,360
2019-02-09,Death by Chocolate,180,3,540
2019-02-09,Butterscotch Single Scoop,60,3,180
2019-02-09,Cafe Caramel,160,5,800
2019-02-09,Butterscotch Single Scoop,60,4,240
2019-02-09,Cake Fudge,150,3,450
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Vanilla Double Scoop,80,3,240
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Hot Chocolate Fudge,120,1,120
2019-02-09,Butterscotch Single Scoop,60,5,300
2019-02-09,Cake Fudge,150,2,300
2019-02-09,Vanilla Double Scoop,80,5,400
2019-02-09,Cake Fudge,150,2,300
2019-02-09,Vanilla Double Scoop,80,1,80
2019-02-09,Cafe Caramel,160,4,640
2019-02-09,Dry Fruit Double Scoop,90,4,360
2019-02-09,Vanilla Double Scoop,80,3,240
2019-02-09,Hot Chocolate Fudge,120,2,240
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Cafe Caramel,160,5,800
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Cake Fudge,150,2,300
2019-02-09,Butterscotch Single Scoop,60,1,60
2019-02-09,Butterscotch Single Scoop,60,1,60
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Hot Chocolate Fudge,120,2,240
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Vanilla Single Scoop,50,3,150
2019-02-09,Banana Split,140,4,560
2019-02-09,Death by Chocolate,180,4,720
2019-02-09,Cake Fudge,150,1,150
2019-02-09,Vanilla Double Scoop,80,5,400
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Butterscotch Single Scoop,60,3,180
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Fig and Honey Single Scoop,60,1,60
2019-02-09,Vanilla Single Scoop,50,2,100
2019-02-09,Vanilla Single Scoop,50,5,250
2019-02-09,Vanilla Single Scoop,50,3,150
2019-02-09,Banana Split,140,5,700
2019-02-09,Death by Chocolate,180,3,540
2019-02-09,Cake Fudge,150,3,450
2019-02-09,Butterscotch Single Scoop,60,2,120
2019-02-09,Butterscotch Single Scoop,60,1,60
2019-02-09,Death by Chocolate,180,2,360
2019-02-09,Cake Fudge,150,5,750
2019-02-09,Cake Fudge,150,5,750
2019-02-09,Vanilla Single Scoop,50,4,200
2019-02-09,Vanilla Double Scoop,80,1,80
2019-02-09,Chocolate Europa Double Scoop,100,3,300
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Butterscotch Single Scoop,60,4,240
2019-02-09,Vanilla Single Scoop,50,3,150
2019-02-09,Cake Fudge,150,5,750
2019-02-09,Vanilla Single Scoop,50,5,250
2019-02-09,Vanilla Single Scoop,50,1,50
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Vanilla Double Scoop,80,5,400
2019-02-09,Cake Fudge,150,2,300
2019-02-09,Cake Fudge,150,1,150
2019-02-09,Cake Fudge,150,1,150
2019-02-09,Butterscotch Single Scoop,60,4,240
2019-02-09,Vanilla Single Scoop,50,4,200
2019-02-09,Cake Fudge,150,5,750
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Hot Chocolate Fudge,120,2,240
2019-02-09,Cake Fudge,150,3,450
2019-02-09,Cake Fudge,150,2,300
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Almond Fudge,150,3,450
2019-02-09,Dry Fruit Single Scoop,60,3,180
2019-02-09,Vanilla Single Scoop,50,1,50
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Death by Chocolate,180,4,720
2019-02-09,Vanilla Double Scoop,80,1,80
2019-02-09,Vanilla Single Scoop,50,4,200
2019-02-09,Cake Fudge,150,2,300
2019-02-09,Vanilla Double Scoop,80,5,400
2019-02-09,Butterscotch Single Scoop,60,2,120
2019-02-09,Butterscotch Single Scoop,60,3,180
2019-02-09,Death by Chocolate,180,2,360
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Cake Fudge,150,3,450
2019-02-09,Death by Chocolate,180,5,900
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Vanilla Double Scoop,80,5,400
2019-02-09,Butterscotch Single Scoop,60,5,300
2019-02-09,Hot Chocolate Fudge,120,1,120
2019-02-09,Cafe Caramel,160,3,480
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Vanilla Single Scoop,50,5,250
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Death by Chocolate,180,2,360
2019-02-09,Butterscotch Single Scoop,60,5,300
2019-02-09,Vanilla Double Scoop,80,5,400
2019-02-09,Butterscotch Double Scoop,90,3,270
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Death by Chocolate,180,4,720
2019-02-09,Cafe Caramel,160,2,320
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Caramel Crunch Double Scoop,100,4,400
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Death by Chocolate,180,1,180
2019-02-09,Vanilla Double Scoop,80,4,320
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Vanilla Single Scoop,50,4,200
2019-02-09,Vanilla Double Scoop,80,5,400
2019-02-09,Cafe Caramel,160,4,640
2019-02-09,Vanilla Single Scoop,50,2,100
2019-02-09,Hot Chocolate Fudge,120,3,360
2019-02-09,Dew Drop Sundae,150,3,450
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Butterscotch Single Scoop,60,1,60
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-09,Vanilla Single Scoop,50,4,200
2019-02-09,Dry Fruit Double Scoop,90,1,90
2019-02-09,Butterscotch Single Scoop,60,5,300
2019-02-09,Caramel Crunch Single Scoop,70,3,210
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Hot Chocolate Fudge,120,4,480
2019-02-09,Vanilla Double Scoop,80,2,160
2019-02-09,Butterscotch Single Scoop,60,1,60
2019-02-09,Butterscotch Single Scoop,60,2,120
2019-02-09,Hot Chocolate Fudge,120,5,600
2019-02-10,Cafe Caramel,160,4,640
2019-02-10,Vanilla Double Scoop,80,2,160
2019-02-10,Cake Fudge,150,2,300
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Death by Chocolate,180,1,180
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Hot Chocolate Fudge,120,2,240
2019-02-10,Death by Chocolate,180,5,900
2019-02-10,Death by Chocolate,180,3,540
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Cake Fudge,150,4,600
2019-02-10,Hot Chocolate Fudge,120,1,120
2019-02-10,Death by Chocolate,180,4,720
2019-02-10,Butterscotch Single Scoop,60,2,120
2019-02-10,Butterscotch Single Scoop,60,1,60
2019-02-10,Vanilla Double Scoop,80,1,80
2019-02-10,Caramel Crunch Double Scoop,100,2,200
2019-02-10,Hot Chocolate Fudge,120,3,360
2019-02-10,Fig and Honey Single Scoop,60,2,120
2019-02-10,Cafe Caramel,160,1,160
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Vanilla Single Scoop,50,2,100
2019-02-10,Death by Chocolate,180,2,360
2019-02-10,Vanilla Single Scoop,50,2,100
2019-02-10,Cafe Caramel,160,3,480
2019-02-10,Fig and Honey Single Scoop,60,3,180
2019-02-10,Vanilla Double Scoop,80,5,400
2019-02-10,Cake Fudge,150,1,150
2019-02-10,Vanilla Double Scoop,80,5,400
2019-02-10,Cafe Caramel,160,5,800
2019-02-10,Cake Fudge,150,2,300
2019-02-10,Fig and Honey Double Scoop,90,4,360
2019-02-10,Hot Chocolate Fudge,120,1,120
2019-02-10,Vanilla Single Scoop,50,4,200
2019-02-10,Chocolate Europa Single Scoop,70,4,280
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Hot Chocolate Fudge,120,3,360
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Butterscotch Single Scoop,60,5,300
2019-02-10,Dry Fruit Single Scoop,60,5,300
2019-02-10,Butterscotch Single Scoop,60,2,120
2019-02-10,Death by Chocolate,180,2,360
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Fig and Honey Single Scoop,60,4,240
2019-02-10,Hot Chocolate Fudge,120,3,360
2019-02-10,Cafe Caramel,160,4,640
2019-02-10,Vanilla Single Scoop,50,3,150
2019-02-10,Hot Chocolate Fudge,120,2,240
2019-02-10,Vanilla Single Scoop,50,3,150
2019-02-10,Caramel Crunch Double Scoop,100,1,100
2019-02-10,Pista Double Scoop,90,1,90
2019-02-10,Vanilla Double Scoop,80,1,80
2019-02-10,Pista Single Scoop,60,1,60
2019-02-10,Hot Chocolate Fudge,120,1,120
2019-02-10,Vanilla Double Scoop,80,2,160
2019-02-10,Almond Fudge,150,5,750
2019-02-10,Death by Chocolate,180,4,720
2019-02-10,Rocky Road Double Scoop,80,2,160
2019-02-10,Chocolate Europa Double Scoop,100,4,400
2019-02-10,Chocolate Europa Single Scoop,70,2,140
2019-02-10,Vanilla Double Scoop,80,1,80
2019-02-10,Cake Fudge,150,4,600
2019-02-10,Chocolate Europa Single Scoop,70,3,210
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Hot Chocolate Fudge,120,3,360
2019-02-10,Hot Chocolate Fudge,120,3,360
2019-02-10,Cake Fudge,150,1,150
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Cake Fudge,150,1,150
2019-02-10,Cake Fudge,150,3,450
2019-02-10,Vanilla Single Scoop,50,1,50
2019-02-10,Cake Fudge,150,5,750
2019-02-10,Pista Single Scoop,60,2,120
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Cake Fudge,150,2,300
2019-02-10,Vanilla Single Scoop,50,2,100
2019-02-10,Vanilla Single Scoop,50,2,100
2019-02-10,Chocolate Europa Double Scoop,100,3,300
2019-02-10,Dry Fruit Single Scoop,60,3,180
2019-02-10,Hot Chocolate Fudge,120,2,240
2019-02-10,Vanilla Double Scoop,80,1,80
2019-02-10,Vanilla Double Scoop,80,4,320
2019-02-10,Rocky Road Single Scoop,50,5,250
2019-02-10,Hot Chocolate Fudge,120,3,360
2019-02-10,Banana Split,140,2,280
2019-02-10,Hot Chocolate Fudge,120,1,120
2019-02-10,Vanilla Double Scoop,80,2,160
2019-02-10,Death by Chocolate,180,1,180
2019-02-10,Caramel Crunch Double Scoop,100,4,400
2019-02-10,Cafe Caramel,160,2,320
2019-02-10,Trilogy,160,4,640
2019-02-10,Hot Chocolate Fudge,120,4,480
2019-02-10,Death by Chocolate,180,5,900
2019-02-10,Vanilla Double Scoop,80,2,160
2019-02-10,Vanilla Double Scoop,80,4,320
2019-02-10,Vanilla Double Scoop,80,4,320
2019-02-10,Almond Fudge,150,1,150
2019-02-10,Chocolate Europa Double Scoop,100,4,400
2019-02-10,Hot Chocolate Fudge,120,3,360
2019-02-10,Hot Chocolate Fudge,120,4,480
2019-02-10,Cake Fudge,150,2,300
2019-02-10,Cafe Caramel,160,2,320
2019-02-10,Cake Fudge,150,5,750
2019-02-10,Cake Fudge,150,3,450
2019-02-10,Cafe Caramel,160,5,800
2019-02-10,Death by Chocolate,180,2,360
2019-02-10,Vanilla Single Scoop,50,2,100
2019-02-10,Cafe Caramel,160,3,480
2019-02-10,Vanilla Double Scoop,80,4,320
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Vanilla Single Scoop,50,2,100
2019-02-10,Cake Fudge,150,4,600
2019-02-10,Hot Chocolate Fudge,120,2,240
2019-02-10,Death by Chocolate,180,3,540
2019-02-10,Cafe Caramel,160,4,640
2019-02-10,Vanilla Double Scoop,80,4,320
2019-02-10,Vanilla Single Scoop,50,2,100
2019-02-10,Fig and Honey Double Scoop,90,4,360
2019-02-10,Vanilla Double Scoop,80,2,160
2019-02-10,Butterscotch Single Scoop,60,3,180
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Dry Fruit Single Scoop,60,5,300
2019-02-10,Vanilla Single Scoop,50,1,50
2019-02-10,Butterscotch Single Scoop,60,3,180
2019-02-10,Cake Fudge,150,3,450
2019-02-10,Vanilla Single Scoop,50,3,150
2019-02-10,Cake Fudge,150,1,150
2019-02-10,Death by Chocolate,180,2,360
2019-02-10,Hot Chocolate Fudge,120,1,120
2019-02-10,Cake Fudge,150,5,750
2019-02-10,Vanilla Double Scoop,80,2,160
2019-02-10,Vanilla Double Scoop,80,2,160
2019-02-10,Hot Chocolate Fudge,120,5,600
2019-02-10,Vanilla Double Scoop,80,1,80
2019-02-10,Death by Chocolate,180,1,180
2019-02-10,Chocolate Europa Single Scoop,70,4,280
2019-02-10,Fig and Honey Double Scoop,90,5,450
2019-02-10,Vanilla Double Scoop,80,4,320
2019-02-10,Death by Chocolate,180,4,720
2019-02-10,Vanilla Double Scoop,80,5,400
2019-02-10,Dry Fruit Single Scoop,60,2,120
2019-02-10,Vanilla Single Scoop,50,5,250
2019-02-10,Dew Drop Sundae,150,5,750
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Cake Fudge,150,1,150
2019-02-10,Death by Chocolate,180,4,720
2019-02-10,Vanilla Double Scoop,80,5,400
2019-02-10,Butterscotch Single Scoop,60,1,60
2019-02-10,Hot Chocolate Fudge,120,2,240
2019-02-10,Hot Chocolate Fudge,120,4,480
2019-02-10,Death by Chocolate,180,1,180
2019-02-10,Vanilla Single Scoop,50,4,200
2019-02-10,Vanilla Single Scoop,50,1,50
2019-02-10,Chocolate Europa Single Scoop,70,1,70
2019-02-10,Dry Fruit Double Scoop,90,1,90
2019-02-10,Butterscotch Single Scoop,60,5,300
2019-02-10,Vanilla Double Scoop,80,2,160
2019-02-10,Hot Chocolate Fudge,120,1,120
2019-02-10,Cake Fudge,150,2,300
2019-02-10,Death by Chocolate,180,1,180
2019-02-10,Vanilla Double Scoop,80,5,400
2019-02-10,Pista Single Scoop,60,1,60
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Cake Fudge,150,4,600
2019-02-10,Cafe Caramel,160,4,640
2019-02-10,Cake Fudge,150,1,150
2019-02-10,Cake Fudge,150,3,450
2019-02-10,Chocolate Europa Single Scoop,70,1,70
2019-02-10,Butterscotch Single Scoop,60,1,60
2019-02-10,Vanilla Double Scoop,80,3,240
2019-02-10,Hot Chocolate Fudge,120,4,480
2019-02-10,Fig and Honey Single Scoop,60,4,240
2019-02-10,Vanilla Single Scoop,50,4,200
2019-02-10,Butterscotch Single Scoop,60,4,240
2019-02-10,Vanilla Double Scoop,80,5,400
2019-02-10,Vanilla Single Scoop,50,1,50
2019-02-10,Chocolate Europa Single Scoop,70,3,210
2019-02-10,Hot Chocolate Fudge,120,4,480
2019-02-10,Hot Chocolate Fudge,120,2,240
2019-02-10,Mint Fudge,120,2,240
2019-02-10,Hot Chocolate Fudge,120,4,480
2019-02-10,Cake Fudge,150,4,600
2019-02-10,Cake Fudge,150,5,750
2019-02-10,Fig and Honey Single Scoop,60,5,300
2019-02-10,Fig and Honey Double Scoop,90,3,270
2019-02-10,Butterscotch Single Scoop,60,5,300
2019-02-10,Pista Double Scoop,90,4,360
2019-02-10,Vanilla Double Scoop,80,5,400
2019-02-10,Fig and Honey Double Scoop,90,5,450
2019-02-11,Butterscotch Single Scoop,60,3,180
2019-02-11,Hot Chocolate Fudge,120,5,600
2019-02-11,Death by Chocolate,180,3,540
2019-02-11,Hot Chocolate Fudge,120,1,120
2019-02-11,Butterscotch Single Scoop,60,1,60
2019-02-11,Pista Double Scoop,90,5,450
2019-02-11,Cake Fudge,150,3,450
2019-02-11,Cafe Caramel,160,4,640
2019-02-11,Death by Chocolate,180,1,180
2019-02-11,Cake Fudge,150,3,450
2019-02-11,Cafe Caramel,160,3,480
2019-02-11,Dry Fruit Single Scoop,60,4,240
2019-02-11,Vanilla Single Scoop,50,1,50
2019-02-11,Dry Fruit Double Scoop,90,3,270
2019-02-11,Death by Chocolate,180,2,360
2019-02-11,Hot Chocolate Fudge,120,5,600
2019-02-11,Butterscotch Single Scoop,60,1,60
2019-02-11,Hot Chocolate Fudge,120,3,360
2019-02-11,Vanilla Single Scoop,50,3,150
2019-02-11,Death by Chocolate,180,5,900
2019-02-11,Chocolate Europa Double Scoop,100,3,300
2019-02-11,Hot Chocolate Fudge,120,5,600
2019-02-11,Chocolate Europa Single Scoop,70,4,280
2019-02-11,Butterscotch Double Scoop,90,5,450
2019-02-11,Death by Chocolate,180,5,900
2019-02-11,Butterscotch Single Scoop,60,4,240
2019-02-11,Death by Chocolate,180,2,360
2019-02-11,Hot Chocolate Fudge,120,5,600
2019-02-11,Vanilla Double Scoop,80,1,80
2019-02-11,Chocolate Europa Double Scoop,100,3,300
2019-02-11,Vanilla Single Scoop,50,1,50
2019-02-11,Vanilla Single Scoop,50,1,50
2019-02-11,Hot Chocolate Fudge,120,2,240
2019-02-11,Cake Fudge,150,2,300
2019-02-11,Hot Chocolate Fudge,120,4,480
2019-02-11,Vanilla Double Scoop,80,5,400
2019-02-11,Vanilla Single Scoop,50,2,100
2019-02-11,Cafe Caramel,160,1,160
2019-02-11,Vanilla Single Scoop,50,4,200
2019-02-11,Hot Chocolate Fudge,120,2,240
2019-02-11,Cafe Caramel,160,3,480
2019-02-11,Vanilla Single Scoop,50,2,100
2019-02-11,Vanilla Double Scoop,80,3,240
2019-02-11,Hot Chocolate Fudge,120,1,120
2019-02-11,Butterscotch Single Scoop,60,5,300
2019-02-11,Death by Chocolate,180,5,900
2019-02-11,Vanilla Double Scoop,80,5,400
2019-02-11,Cake Fudge,150,2,300
2019-02-11,Butterscotch Single Scoop,60,2,120
2019-02-11,Butterscotch Single Scoop,60,1,60
2019-02-11,Vanilla Double Scoop,80,3,240
2019-02-11,Cake Fudge,150,5,750
2019-02-11,Cafe Caramel,160,2,320
2019-02-11,Vanilla Single Scoop,50,5,250
2019-02-11,Butterscotch Single Scoop,60,3,180
2019-02-11,Cake Fudge,150,2,300
2019-02-11,Butterscotch Single Scoop,60,5,300
2019-02-11,Butterscotch Double Scoop,90,5,450
2019-02-11,Cake Fudge,150,1,150
2019-02-11,Cake Fudge,150,4,600
2019-02-11,Death by Chocolate,180,4,720
2019-02-11,Hot Chocolate Fudge,120,2,240
2019-02-11,Vanilla Double Scoop,80,5,400
2019-02-11,Cafe Caramel,160,5,800
2019-02-11,Cake Fudge,150,2,300
2019-02-11,Cake Fudge,150,1,150
2019-02-11,Vanilla Single Scoop,50,5,250
2019-02-11,Hot Chocolate Fudge,120,4,480
2019-02-11,Butterscotch Single Scoop,60,2,120
2019-02-11,Dry Fruit Double Scoop,90,3,270
2019-02-11,Vanilla Single Scoop,50,3,150
2019-02-11,Butterscotch Single Scoop,60,2,120
2019-02-11,Chocolate Europa Single Scoop,70,1,70
2019-02-11,Hot Chocolate Fudge,120,2,240
2019-02-11,Butterscotch Single Scoop,60,4,240
2019-02-11,Vanilla Double Scoop,80,1,80
2019-02-11,Vanilla Single Scoop,50,4,200
2019-02-11,Butterscotch Single Scoop,60,5,300
2019-02-11,Butterscotch Single Scoop,60,2,120
2019-02-11,Dry Fruit Double Scoop,90,3,270
2019-02-11,Trilogy,160,1,160
2019-02-11,Rocky Road Double Scoop,80,3,240
2019-02-11,Vanilla Double Scoop,80,4,320
2019-02-11,Cake Fudge,150,3,450
2019-02-11,Hot Chocolate Fudge,120,1,120
2019-02-11,Butterscotch Single Scoop,60,5,300
2019-02-11,Butterscotch Single Scoop,60,1,60
2019-02-11,Hot Chocolate Fudge,120,4,480
2019-02-11,Vanilla Double Scoop,80,1,80
2019-02-11,Dry Fruit Double Scoop,90,5,450
2019-02-11,Cake Fudge,150,3,450
2019-02-11,Vanilla Double Scoop,80,5,400
2019-02-11,Cake Fudge,150,4,600
2019-02-11,Pista Double Scoop,90,5,450
2019-02-11,Rocky Road Double Scoop,80,1,80
2019-02-11,Cake Fudge,150,5,750
2019-02-11,Cake Fudge,150,1,150
2019-02-11,Hot Chocolate Fudge,120,5,600
2019-02-11,Rocky Road Double Scoop,80,4,320
2019-02-11,Cake Fudge,150,3,450
2019-02-11,Death by Chocolate,180,5,900
2019-02-11,Fig and Honey Single Scoop,60,4,240
2019-02-11,Butterscotch Single Scoop,60,5,300
2019-02-11,Vanilla Double Scoop,80,2,160
2019-02-11,Pista Double Scoop,90,4,360
2019-02-11,Rocky Road Single Scoop,50,4,200
2019-02-11,Hot Chocolate Fudge,120,3,360
2019-02-11,Butterscotch Single Scoop,60,1,60
2019-02-11,Vanilla Double Scoop,80,4,320
2019-02-11,Butterscotch Single Scoop,60,4,240
2019-02-11,Butterscotch Single Scoop,60,3,180
2019-02-11,Death by Chocolate,180,5,900
2019-02-12,Vanilla Double Scoop,80,5,400
2019-02-12,Chocolate Europa Double Scoop,100,2,200
2019-02-12,Rocky Road Double Scoop,80,1,80
2019-02-12,Cafe Caramel,160,4,640
2019-02-12,Hot Chocolate Fudge,120,4,480
2019-02-12,Hot Chocolate Fudge,120,4,480
2019-02-12,Vanilla Double Scoop,80,5,400
2019-02-12,Chocolate Europa Double Scoop,100,3,300
2019-02-12,Hot Chocolate Fudge,120,1,120
2019-02-12,Cake Fudge,150,3,450
2019-02-12,Hot Chocolate Fudge,120,4,480
2019-02-12,Vanilla Double Scoop,80,4,320
2019-02-12,Vanilla Double Scoop,80,5,400
2019-02-12,Death by Chocolate,180,2,360
2019-02-12,Cafe Caramel,160,3,480
2019-02-12,Vanilla Single Scoop,50,2,100
2019-02-12,Death by Chocolate,180,1,180
2019-02-12,Hot Chocolate Fudge,120,4,480
2019-02-12,Cake Fudge,150,4,600
2019-02-12,Hot Chocolate Fudge,120,3,360
2019-02-12,Hot Chocolate Fudge,120,1,120
2019-02-12,Vanilla Double Scoop,80,2,160
2019-02-12,Butterscotch Single Scoop,60,5,300
2019-02-12,Death by Chocolate,180,4,720
2019-02-12,Cafe Caramel,160,1,160
2019-02-12,Vanilla Single Scoop,50,1,50
2019-02-12,Vanilla Double Scoop,80,2,160
2019-02-12,Hot Chocolate Fudge,120,3,360
2019-02-12,Butterscotch Single Scoop,60,4,240
2019-02-12,Vanilla Single Scoop,50,2,100
2019-02-12,Butterscotch Single Scoop,60,4,240
2019-02-12,Hot Chocolate Fudge,120,2,240
2019-02-12,Death by Chocolate,180,5,900
2019-02-12,Vanilla Double Scoop,80,4,320
2019-02-12,Vanilla Double Scoop,80,5,400
2019-02-12,Death by Chocolate,180,5,900
2019-02-12,Cake Fudge,150,4,600
2019-02-12,Vanilla Single Scoop,50,2,100
2019-02-12,Death by Chocolate,180,5,900
2019-02-12,Death by Chocolate,180,2,360
2019-02-12,Vanilla Single Scoop,50,3,150
2019-02-12,Dew Drop Sundae,150,1,150
2019-02-12,Butterscotch Single Scoop,60,5,300
2019-02-12,Death by Chocolate,180,2,360
2019-02-12,Cake Fudge,150,4,600
2019-02-12,Butterscotch Single Scoop,60,3,180
2019-02-12,Hot Chocolate Fudge,120,5,600
2019-02-12,Hot Chocolate Fudge,120,3,360
2019-02-12,Vanilla Single Scoop,50,5,250
2019-02-12,Vanilla Single Scoop,50,3,150
2019-02-12,Hot Chocolate Fudge,120,2,240
2019-02-12,Cake Fudge,150,4,600
2019-02-12,Butterscotch Single Scoop,60,4,240
2019-02-12,Hot Chocolate Fudge,120,1,120
2019-02-12,Vanilla Double Scoop,80,5,400
2019-02-12,Death by Chocolate,180,3,540
2019-02-12,Cafe Caramel,160,4,640
2019-02-12,Death by Chocolate,180,1,180
2019-02-12,Cake Fudge,150,3,450
2019-02-12,Hot Chocolate Fudge,120,5,600
2019-02-12,Rocky Road Single Scoop,50,5,250
2019-02-12,Death by Chocolate,180,5,900
2019-02-12,Cafe Caramel,160,4,640
2019-02-12,Mint Fudge,120,2,240
2019-02-12,Caramel Crunch Single Scoop,70,1,70
2019-02-12,Hot Chocolate Fudge,120,4,480
2019-02-12,Hot Chocolate Fudge,120,4,480
2019-02-12,Vanilla Single Scoop,50,2,100
2019-02-12,Vanilla Single Scoop,50,4,200
2019-02-12,Vanilla Double Scoop,80,4,320
2019-02-12,Death by Chocolate,180,3,540
2019-02-12,Hot Chocolate Fudge,120,4,480
2019-02-12,Butterscotch Single Scoop,60,3,180
2019-02-12,Hot Chocolate Fudge,120,3,360
2019-02-12,Death by Chocolate,180,5,900
2019-02-12,Butterscotch Single Scoop,60,2,120
2019-02-12,Vanilla Double Scoop,80,3,240
2019-02-12,Butterscotch Single Scoop,60,4,240
2019-02-12,Rocky Road Single Scoop,50,1,50
2019-02-12,Chocolate Europa Double Scoop,100,5,500
2019-02-12,Vanilla Single Scoop,50,4,200
2019-02-12,Butterscotch Single Scoop,60,5,300
2019-02-12,Hot Chocolate Fudge,120,2,240
2019-02-12,Vanilla Double Scoop,80,1,80
2019-02-12,Cake Fudge,150,1,150
2019-02-12,Butterscotch Single Scoop,60,1,60
2019-02-12,Cake Fudge,150,3,450
2019-02-12,Vanilla Double Scoop,80,3,240
2019-02-12,Cake Fudge,150,5,750
2019-02-12,Vanilla Double Scoop,80,3,240
2019-02-12,Butterscotch Single Scoop,60,2,120
2019-02-12,Vanilla Double Scoop,80,4,320
2019-02-12,Banana Split,140,5,700
2019-02-12,Chocolate Europa Single Scoop,70,1,70
2019-02-12,Vanilla Single Scoop,50,3,150
2019-02-12,Fig and Honey Double Scoop,90,2,180
2019-02-12,Cake Fudge,150,4,600
2019-02-12,Cake Fudge,150,4,600
2019-02-12,Fig and Honey Single Scoop,60,2,120
2019-02-12,Hot Chocolate Fudge,120,4,480
2019-02-12,Cake Fudge,150,4,600
2019-02-12,Vanilla Single Scoop,50,4,200
2019-02-12,Pista Double Scoop,90,4,360
2019-02-12,Death by Chocolate,180,4,720
2019-02-12,Hot Chocolate Fudge,120,5,600
2019-02-12,Cake Fudge,150,3,450
2019-02-12,Death by Chocolate,180,1,180
2019-02-12,Vanilla Double Scoop,80,2,160
2019-02-12,Hot Chocolate Fudge,120,2,240
2019-02-12,Cafe Caramel,160,4,640
2019-02-12,Hot Chocolate Fudge,120,5,600
2019-02-12,Vanilla Double Scoop,80,4,320
2019-02-12,Cake Fudge,150,5,750
2019-02-12,Death by Chocolate,180,5,900
2019-02-12,Cafe Caramel,160,2,320
2019-02-12,Death by Chocolate,180,1,180
2019-02-12,Hot Chocolate Fudge,120,5,600
2019-02-12,Hot Chocolate Fudge,120,3,360
2019-02-12,Cake Fudge,150,2,300
2019-02-12,Vanilla Single Scoop,50,3,150
2019-02-12,Butterscotch Double Scoop,90,4,360
2019-02-12,Cake Fudge,150,2,300
2019-02-12,Vanilla Double Scoop,80,5,400
2019-02-12,Cake Fudge,150,3,450
2019-02-12,Butterscotch Single Scoop,60,1,60
2019-02-12,Vanilla Double Scoop,80,3,240
2019-02-12,Vanilla Single Scoop,50,5,250
2019-02-12,Vanilla Double Scoop,80,4,320
2019-02-12,Fig and Honey Single Scoop,60,3,180
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Vanilla Single Scoop,50,1,50
2019-02-13,Death by Chocolate,180,2,360
2019-02-13,Cake Fudge,150,4,600
2019-02-13,Cake Fudge,150,1,150
2019-02-13,Vanilla Double Scoop,80,3,240
2019-02-13,Butterscotch Single Scoop,60,2,120
2019-02-13,Butterscotch Single Scoop,60,2,120
2019-02-13,Death by Chocolate,180,5,900
2019-02-13,Rocky Road Single Scoop,50,3,150
2019-02-13,Vanilla Double Scoop,80,1,80
2019-02-13,Vanilla Single Scoop,50,1,50
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Vanilla Double Scoop,80,1,80
2019-02-13,Hot Chocolate Fudge,120,2,240
2019-02-13,Vanilla Double Scoop,80,1,80
2019-02-13,Vanilla Double Scoop,80,4,320
2019-02-13,Butterscotch Single Scoop,60,1,60
2019-02-13,Cake Fudge,150,2,300
2019-02-13,Caramel Crunch Single Scoop,70,5,350
2019-02-13,Death by Chocolate,180,2,360
2019-02-13,Fig and Honey Single Scoop,60,3,180
2019-02-13,Cafe Caramel,160,3,480
2019-02-13,Cake Fudge,150,2,300
2019-02-13,Cake Fudge,150,3,450
2019-02-13,Death by Chocolate,180,1,180
2019-02-13,Hot Chocolate Fudge,120,3,360
2019-02-13,Caramel Crunch Single Scoop,70,3,210
2019-02-13,Butterscotch Single Scoop,60,2,120
2019-02-13,Mint Fudge,120,4,480
2019-02-13,Vanilla Double Scoop,80,5,400
2019-02-13,Vanilla Double Scoop,80,5,400
2019-02-13,Cafe Caramel,160,3,480
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Butterscotch Single Scoop,60,3,180
2019-02-13,Hot Chocolate Fudge,120,2,240
2019-02-13,Caramel Crunch Double Scoop,100,1,100
2019-02-13,Butterscotch Single Scoop,60,2,120
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Vanilla Double Scoop,80,3,240
2019-02-13,Caramel Crunch Double Scoop,100,4,400
2019-02-13,Butterscotch Single Scoop,60,3,180
2019-02-13,Vanilla Single Scoop,50,2,100
2019-02-13,Chocolate Europa Double Scoop,100,2,200
2019-02-13,Cafe Caramel,160,5,800
2019-02-13,Vanilla Double Scoop,80,1,80
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Vanilla Double Scoop,80,1,80
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Vanilla Double Scoop,80,4,320
2019-02-13,Vanilla Double Scoop,80,4,320
2019-02-13,Chocolate Europa Single Scoop,70,3,210
2019-02-13,Butterscotch Single Scoop,60,3,180
2019-02-13,Hot Chocolate Fudge,120,5,600
2019-02-13,Vanilla Double Scoop,80,5,400
2019-02-13,Vanilla Double Scoop,80,2,160
2019-02-13,Cafe Caramel,160,2,320
2019-02-13,Vanilla Double Scoop,80,1,80
2019-02-13,Death by Chocolate,180,4,720
2019-02-13,Death by Chocolate,180,5,900
2019-02-13,Vanilla Single Scoop,50,2,100
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Hot Chocolate Fudge,120,3,360
2019-02-13,Cafe Caramel,160,2,320
2019-02-13,Vanilla Single Scoop,50,5,250
2019-02-13,Dry Fruit Single Scoop,60,2,120
2019-02-13,Hot Chocolate Fudge,120,5,600
2019-02-13,Vanilla Single Scoop,50,4,200
2019-02-13,Vanilla Double Scoop,80,3,240
2019-02-13,Vanilla Single Scoop,50,4,200
2019-02-13,Cake Fudge,150,2,300
2019-02-13,Vanilla Single Scoop,50,4,200
2019-02-13,Death by Chocolate,180,1,180
2019-02-13,Cake Fudge,150,2,300
2019-02-13,Cafe Caramel,160,3,480
2019-02-13,Cake Fudge,150,1,150
2019-02-13,Vanilla Single Scoop,50,3,150
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Hot Chocolate Fudge,120,5,600
2019-02-13,Pista Double Scoop,90,2,180
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Vanilla Double Scoop,80,3,240
2019-02-13,Hot Chocolate Fudge,120,3,360
2019-02-13,Vanilla Single Scoop,50,1,50
2019-02-13,Hot Chocolate Fudge,120,5,600
2019-02-13,Dry Fruit Single Scoop,60,2,120
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Vanilla Single Scoop,50,2,100
2019-02-13,Vanilla Double Scoop,80,5,400
2019-02-13,Banana Split,140,2,280
2019-02-13,Cake Fudge,150,2,300
2019-02-13,Vanilla Single Scoop,50,4,200
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Cake Fudge,150,3,450
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Vanilla Single Scoop,50,5,250
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Vanilla Double Scoop,80,5,400
2019-02-13,Cake Fudge,150,4,600
2019-02-13,Vanilla Double Scoop,80,3,240
2019-02-13,Cake Fudge,150,5,750
2019-02-13,Vanilla Double Scoop,80,2,160
2019-02-13,Vanilla Single Scoop,50,5,250
2019-02-13,Hot Chocolate Fudge,120,5,600
2019-02-13,Fig and Honey Double Scoop,90,4,360
2019-02-13,Hot Chocolate Fudge,120,5,600
2019-02-13,Hot Chocolate Fudge,120,3,360
2019-02-13,Vanilla Double Scoop,80,1,80
2019-02-13,Vanilla Single Scoop,50,1,50
2019-02-13,Vanilla Single Scoop,50,1,50
2019-02-13,Cake Fudge,150,2,300
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Cake Fudge,150,3,450
2019-02-13,Butterscotch Single Scoop,60,5,300
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Butterscotch Single Scoop,60,5,300
2019-02-13,Vanilla Single Scoop,50,4,200
2019-02-13,Death by Chocolate,180,1,180
2019-02-13,Cake Fudge,150,1,150
2019-02-13,Vanilla Double Scoop,80,4,320
2019-02-13,Fig and Honey Single Scoop,60,3,180
2019-02-13,Butterscotch Single Scoop,60,4,240
2019-02-13,Vanilla Single Scoop,50,4,200
2019-02-13,Death by Chocolate,180,2,360
2019-02-13,Death by Chocolate,180,4,720
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Hot Chocolate Fudge,120,5,600
2019-02-13,Butterscotch Single Scoop,60,5,300
2019-02-13,Vanilla Double Scoop,80,3,240
2019-02-13,Hot Chocolate Fudge,120,1,120
2019-02-13,Death by Chocolate,180,2,360
2019-02-13,Vanilla Double Scoop,80,5,400
2019-02-13,Vanilla Single Scoop,50,4,200
2019-02-13,Death by Chocolate,180,3,540
2019-02-13,Rocky Road Double Scoop,80,4,320
2019-02-13,Cake Fudge,150,2,300
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Vanilla Double Scoop,80,3,240
2019-02-13,Death by Chocolate,180,2,360
2019-02-13,Cake Fudge,150,4,600
2019-02-13,Death by Chocolate,180,1,180
2019-02-13,Cake Fudge,150,4,600
2019-02-13,Cake Fudge,150,5,750
2019-02-13,Hot Chocolate Fudge,120,4,480
2019-02-13,Cake Fudge,150,4,600
2019-02-13,Vanilla Single Scoop,50,5,250
2019-02-13,Cake Fudge,150,4,600
2019-02-13,Cake Fudge,150,2,300
2019-02-13,Cafe Caramel,160,5,800
2019-02-13,Almond Fudge,150,2,300
2019-02-13,Caramel Crunch Double Scoop,100,2,200
2019-02-13,Dry Fruit Single Scoop,60,3,180
2019-02-13,Hot Chocolate Fudge,120,3,360
2019-02-13,Fig and Honey Double Scoop,90,3,270
2019-02-14,Chocolate Europa Double Scoop,100,3,300
2019-02-14,Vanilla Double Scoop,80,3,240
2019-02-14,Cake Fudge,150,5,750
2019-02-14,Vanilla Single Scoop,50,4,200
2019-02-14,Hot Chocolate Fudge,120,3,360
2019-02-14,Butterscotch Single Scoop,60,2,120
2019-02-14,Hot Chocolate Fudge,120,2,240
2019-02-14,Hot Chocolate Fudge,120,3,360
2019-02-14,Vanilla Double Scoop,80,5,400
2019-02-14,Butterscotch Single Scoop,60,3,180
2019-02-14,Death by Chocolate,180,1,180
2019-02-14,Hot Chocolate Fudge,120,4,480
2019-02-14,Vanilla Double Scoop,80,3,240
2019-02-14,Banana Split,140,1,140
2019-02-14,Vanilla Double Scoop,80,2,160
2019-02-14,Butterscotch Single Scoop,60,5,300
2019-02-14,Hot Chocolate Fudge,120,4,480
2019-02-14,Hot Chocolate Fudge,120,3,360
2019-02-14,Butterscotch Single Scoop,60,5,300
2019-02-14,Cafe Caramel,160,2,320
2019-02-14,Vanilla Double Scoop,80,5,400
2019-02-14,Hot Chocolate Fudge,120,4,480
2019-02-14,Vanilla Double Scoop,80,1,80
2019-02-14,Death by Chocolate,180,2,360
2019-02-14,Fig and Honey Single Scoop,60,3,180
2019-02-14,Vanilla Double Scoop,80,4,320
2019-02-14,Dry Fruit Double Scoop,90,3,270
2019-02-14,Death by Chocolate,180,4,720
2019-02-14,Dry Fruit Single Scoop,60,1,60
2019-02-14,Cake Fudge,150,4,600
2019-02-14,Butterscotch Single Scoop,60,3,180
2019-02-14,Butterscotch Single Scoop,60,4,240
2019-02-14,Dry Fruit Double Scoop,90,2,180
2019-02-14,Vanilla Double Scoop,80,3,240
2019-02-14,Pista Double Scoop,90,4,360
2019-02-14,Vanilla Double Scoop,80,4,320
2019-02-14,Butterscotch Single Scoop,60,4,240
2019-02-14,Vanilla Single Scoop,50,1,50
2019-02-14,Vanilla Single Scoop,50,1,50
2019-02-14,Dry Fruit Single Scoop,60,5,300
2019-02-14,Dew Drop Sundae,150,3,450
2019-02-14,Vanilla Single Scoop,50,4,200
2019-02-14,Death by Chocolate,180,2,360
2019-02-14,Vanilla Single Scoop,50,1,50
2019-02-14,Vanilla Single Scoop,50,1,50
2019-02-14,Mint Fudge,120,3,360
2019-02-14,Butterscotch Single Scoop,60,3,180
2019-02-14,Cake Fudge,150,4,600
2019-02-14,Fig and Honey Double Scoop,90,3,270
2019-02-14,Butterscotch Single Scoop,60,3,180
2019-02-14,Vanilla Double Scoop,80,5,400
2019-02-14,Cake Fudge,150,1,150
2019-02-14,Cake Fudge,150,1,150
2019-02-14,Cake Fudge,150,5,750
2019-02-14,Vanilla Single Scoop,50,3,150
2019-02-14,Rocky Road Single Scoop,50,5,250
2019-02-14,Hot Chocolate Fudge,120,5,600
2019-02-14,Butterscotch Single Scoop,60,1,60
2019-02-14,Butterscotch Single Scoop,60,3,180
2019-02-14,Fig and Honey Single Scoop,60,3,180
2019-02-14,Butterscotch Single Scoop,60,2,120
2019-02-14,Vanilla Double Scoop,80,1,80
2019-02-14,Dry Fruit Double Scoop,90,2,180
2019-02-14,Banana Split,140,4,560
2019-02-14,Rocky Road Single Scoop,50,2,100
2019-02-14,Vanilla Single Scoop,50,3,150
2019-02-14,Hot Chocolate Fudge,120,3,360
2019-02-14,Cake Fudge,150,1,150
2019-02-14,Chocolate Europa Double Scoop,100,1,100
2019-02-14,Death by Chocolate,180,2,360
2019-02-14,Hot Chocolate Fudge,120,1,120
2019-02-14,Hot Chocolate Fudge,120,3,360
2019-02-14,Death by Chocolate,180,5,900
2019-02-14,Butterscotch Single Scoop,60,1,60
2019-02-14,Vanilla Double Scoop,80,5,400
2019-02-14,Vanilla Double Scoop,80,2,160
2019-02-14,Hot Chocolate Fudge,120,2,240
2019-02-14,Cake Fudge,150,4,600
2019-02-14,Cafe Caramel,160,2,320
2019-02-14,Cafe Caramel,160,2,320
2019-02-14,Hot Chocolate Fudge,120,2,240
2019-02-14,Cake Fudge,150,5,750
2019-02-14,Death by Chocolate,180,1,180
2019-02-14,Hot Chocolate Fudge,120,2,240
2019-02-14,Dry Fruit Single Scoop,60,3,180
2019-02-14,Dry Fruit Double Scoop,90,2,180
2019-02-14,Cake Fudge,150,3,450
2019-02-14,Death by Chocolate,180,3,540
2019-02-14,Vanilla Double Scoop,80,5,400
2019-02-14,Death by Chocolate,180,1,180
2019-02-14,Vanilla Single Scoop,50,4,200
2019-02-14,Fig and Honey Double Scoop,90,2,180
2019-02-14,Hot Chocolate Fudge,120,2,240
2019-02-14,Vanilla Double Scoop,80,5,400
2019-02-14,Cake Fudge,150,5,750
2019-02-14,Cafe Caramel,160,3,480
2019-02-14,Vanilla Single Scoop,50,4,200
2019-02-14,Death by Chocolate,180,2,360
2019-02-14,Death by Chocolate,180,4,720
2019-02-14,Pista Double Scoop,90,5,450
2019-02-14,Death by Chocolate,180,1,180
2019-02-14,Cafe Caramel,160,4,640
2019-02-14,Cake Fudge,150,4,600
2019-02-14,Cake Fudge,150,5,750
2019-02-14,Vanilla Double Scoop,80,4,320
2019-02-14,Cafe Caramel,160,5,800
2019-02-14,Fig and Honey Double Scoop,90,2,180
2019-02-14,Hot Chocolate Fudge,120,1,120
2019-02-14,Fig and Honey Single Scoop,60,2,120
2019-02-14,Cafe Caramel,160,4,640
2019-02-14,Death by Chocolate,180,1,180
2019-02-14,Vanilla Double Scoop,80,2,160
2019-02-14,Cake Fudge,150,1,150
2019-02-14,Death by Chocolate,180,3,540
2019-02-14,Death by Chocolate,180,3,540
2019-02-14,Butterscotch Single Scoop,60,1,60
2019-02-14,Hot Chocolate Fudge,120,1,120
2019-02-14,Vanilla Double Scoop,80,5,400
2019-02-14,Hot Chocolate Fudge,120,5,600
2019-02-14,Banana Split,140,1,140
2019-02-14,Cake Fudge,150,5,750
2019-02-14,Vanilla Double Scoop,80,5,400
2019-02-14,Hot Chocolate Fudge,120,1,120
2019-02-15,Butterscotch Single Scoop,60,4,240
2019-02-15,Rocky Road Single Scoop,50,5,250
2019-02-15,Hot Chocolate Fudge,120,1,120
2019-02-15,Vanilla Single Scoop,50,4,200
2019-02-15,Vanilla Double Scoop,80,1,80
2019-02-15,Hot Chocolate Fudge,120,5,600
2019-02-15,Hot Chocolate Fudge,120,2,240
2019-02-15,Hot Chocolate Fudge,120,5,600
2019-02-15,Butterscotch Single Scoop,60,2,120
2019-02-15,Vanilla Double Scoop,80,4,320
2019-02-15,Vanilla Single Scoop,50,4,200
2019-02-15,Death by Chocolate,180,5,900
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Vanilla Double Scoop,80,1,80
2019-02-15,Butterscotch Single Scoop,60,5,300
2019-02-15,Chocolate Europa Single Scoop,70,1,70
2019-02-15,Hot Chocolate Fudge,120,1,120
2019-02-15,Cake Fudge,150,4,600
2019-02-15,Hot Chocolate Fudge,120,4,480
2019-02-15,Cake Fudge,150,3,450
2019-02-15,Cake Fudge,150,5,750
2019-02-15,Dry Fruit Double Scoop,90,3,270
2019-02-15,Cafe Caramel,160,1,160
2019-02-15,Hot Chocolate Fudge,120,5,600
2019-02-15,Cake Fudge,150,2,300
2019-02-15,Hot Chocolate Fudge,120,2,240
2019-02-15,Death by Chocolate,180,3,540
2019-02-15,Death by Chocolate,180,2,360
2019-02-15,Vanilla Single Scoop,50,3,150
2019-02-15,Hot Chocolate Fudge,120,4,480
2019-02-15,Caramel Crunch Single Scoop,70,4,280
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Hot Chocolate Fudge,120,1,120
2019-02-15,Death by Chocolate,180,1,180
2019-02-15,Fig and Honey Single Scoop,60,1,60
2019-02-15,Cake Fudge,150,5,750
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Cake Fudge,150,2,300
2019-02-15,Cake Fudge,150,4,600
2019-02-15,Vanilla Double Scoop,80,4,320
2019-02-15,Butterscotch Single Scoop,60,2,120
2019-02-15,Cake Fudge,150,1,150
2019-02-15,Vanilla Double Scoop,80,3,240
2019-02-15,Death by Chocolate,180,4,720
2019-02-15,Vanilla Single Scoop,50,2,100
2019-02-15,Rocky Road Single Scoop,50,4,200
2019-02-15,Death by Chocolate,180,3,540
2019-02-15,Death by Chocolate,180,2,360
2019-02-15,Vanilla Single Scoop,50,3,150
2019-02-15,Cafe Caramel,160,3,480
2019-02-15,Vanilla Double Scoop,80,3,240
2019-02-15,Death by Chocolate,180,2,360
2019-02-15,Butterscotch Single Scoop,60,2,120
2019-02-15,Hot Chocolate Fudge,120,2,240
2019-02-15,Vanilla Double Scoop,80,1,80
2019-02-15,Rocky Road Single Scoop,50,3,150
2019-02-15,Butterscotch Single Scoop,60,4,240
2019-02-15,Death by Chocolate,180,3,540
2019-02-15,Hot Chocolate Fudge,120,2,240
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Vanilla Double Scoop,80,3,240
2019-02-15,Butterscotch Single Scoop,60,3,180
2019-02-15,Death by Chocolate,180,5,900
2019-02-15,Butterscotch Single Scoop,60,2,120
2019-02-15,Hot Chocolate Fudge,120,2,240
2019-02-15,Vanilla Double Scoop,80,1,80
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Vanilla Single Scoop,50,2,100
2019-02-15,Vanilla Double Scoop,80,1,80
2019-02-15,Dew Drop Sundae,150,3,450
2019-02-15,Hot Chocolate Fudge,120,1,120
2019-02-15,Death by Chocolate,180,5,900
2019-02-15,Hot Chocolate Fudge,120,5,600
2019-02-15,Cake Fudge,150,5,750
2019-02-15,Butterscotch Single Scoop,60,2,120
2019-02-15,Cake Fudge,150,3,450
2019-02-15,Butterscotch Single Scoop,60,5,300
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Hot Chocolate Fudge,120,5,600
2019-02-15,Chocolate Europa Double Scoop,100,2,200
2019-02-15,Cake Fudge,150,4,600
2019-02-15,Cake Fudge,150,4,600
2019-02-15,Cake Fudge,150,3,450
2019-02-15,Vanilla Single Scoop,50,2,100
2019-02-15,Cafe Caramel,160,2,320
2019-02-15,Rocky Road Double Scoop,80,2,160
2019-02-15,Cake Fudge,150,1,150
2019-02-15,Cake Fudge,150,5,750
2019-02-15,Hot Chocolate Fudge,120,2,240
2019-02-15,Fig and Honey Double Scoop,90,4,360
2019-02-15,Hot Chocolate Fudge,120,2,240
2019-02-15,Cake Fudge,150,1,150
2019-02-15,Butterscotch Single Scoop,60,2,120
2019-02-15,Vanilla Double Scoop,80,3,240
2019-02-15,Butterscotch Single Scoop,60,3,180
2019-02-15,Cafe Caramel,160,2,320
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Cafe Caramel,160,3,480
2019-02-15,Butterscotch Single Scoop,60,1,60
2019-02-15,Vanilla Double Scoop,80,5,400
2019-02-15,Vanilla Double Scoop,80,1,80
2019-02-15,Death by Chocolate,180,4,720
2019-02-15,Butterscotch Single Scoop,60,4,240
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Pista Double Scoop,90,1,90
2019-02-15,Cake Fudge,150,4,600
2019-02-15,Butterscotch Single Scoop,60,5,300
2019-02-15,Fig and Honey Single Scoop,60,4,240
2019-02-15,Vanilla Single Scoop,50,5,250
2019-02-15,Cake Fudge,150,1,150
2019-02-15,Hot Chocolate Fudge,120,4,480
2019-02-15,Cafe Caramel,160,1,160
2019-02-15,Hot Chocolate Fudge,120,1,120
2019-02-15,Vanilla Single Scoop,50,4,200
2019-02-15,Vanilla Single Scoop,50,4,200
2019-02-15,Butterscotch Single Scoop,60,2,120
2019-02-15,Cake Fudge,150,4,600
2019-02-15,Vanilla Single Scoop,50,3,150
2019-02-15,Death by Chocolate,180,5,900
2019-02-15,Cake Fudge,150,2,300
2019-02-15,Cake Fudge,150,2,300
2019-02-15,Vanilla Single Scoop,50,3,150
2019-02-15,Butterscotch Single Scoop,60,4,240
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Vanilla Double Scoop,80,5,400
2019-02-15,Cake Fudge,150,2,300
2019-02-15,Butterscotch Single Scoop,60,3,180
2019-02-15,Cafe Caramel,160,1,160
2019-02-15,Cafe Caramel,160,5,800
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Hot Chocolate Fudge,120,1,120
2019-02-15,Banana Split,140,3,420
2019-02-15,Vanilla Double Scoop,80,5,400
2019-02-15,Cafe Caramel,160,4,640
2019-02-15,Hot Chocolate Fudge,120,2,240
2019-02-15,Death by Chocolate,180,5,900
2019-02-15,Death by Chocolate,180,5,900
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Caramel Crunch Double Scoop,100,4,400
2019-02-15,Mint Fudge,120,3,360
2019-02-15,Cake Fudge,150,3,450
2019-02-15,Banana Split,140,5,700
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Cake Fudge,150,3,450
2019-02-15,Vanilla Double Scoop,80,3,240
2019-02-15,Vanilla Double Scoop,80,3,240
2019-02-15,Vanilla Single Scoop,50,5,250
2019-02-15,Vanilla Single Scoop,50,3,150
2019-02-15,Fig and Honey Single Scoop,60,1,60
2019-02-15,Cake Fudge,150,2,300
2019-02-15,Vanilla Double Scoop,80,4,320
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Hot Chocolate Fudge,120,4,480
2019-02-15,Butterscotch Single Scoop,60,5,300
2019-02-15,Death by Chocolate,180,3,540
2019-02-15,Hot Chocolate Fudge,120,5,600
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Butterscotch Single Scoop,60,1,60
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Hot Chocolate Fudge,120,3,360
2019-02-15,Hot Chocolate Fudge,120,1,120
2019-02-15,Butterscotch Single Scoop,60,2,120
2019-02-15,Vanilla Single Scoop,50,3,150
2019-02-15,Vanilla Double Scoop,80,3,240
2019-02-15,Vanilla Double Scoop,80,4,320
2019-02-15,Vanilla Double Scoop,80,4,320
2019-02-15,Death by Chocolate,180,4,720
2019-02-15,Vanilla Double Scoop,80,2,160
2019-02-15,Hot Chocolate Fudge,120,5,600
2019-02-15,Pista Double Scoop,90,3,270
2019-02-15,Vanilla Single Scoop,50,2,100
2019-02-15,Cake Fudge,150,4,600
2019-02-15,Cake Fudge,150,4,600
2019-02-15,Vanilla Double Scoop,80,1,80
2019-02-16,Hot Chocolate Fudge,120,1,120
2019-02-16,Hot Chocolate Fudge,120,3,360
2019-02-16,Vanilla Double Scoop,80,4,320
2019-02-16,Butterscotch Single Scoop,60,5,300
2019-02-16,Death by Chocolate,180,4,720
2019-02-16,Death by Chocolate,180,5,900
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Pista Single Scoop,60,1,60
2019-02-16,Vanilla Double Scoop,80,4,320
2019-02-16,Death by Chocolate,180,2,360
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Vanilla Double Scoop,80,4,320
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Cafe Caramel,160,5,800
2019-02-16,Almond Fudge,150,2,300
2019-02-16,Vanilla Single Scoop,50,3,150
2019-02-16,Vanilla Double Scoop,80,1,80
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Vanilla Double Scoop,80,2,160
2019-02-16,Vanilla Double Scoop,80,5,400
2019-02-16,Death by Chocolate,180,1,180
2019-02-16,Death by Chocolate,180,5,900
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Fig and Honey Double Scoop,90,5,450
2019-02-16,Butterscotch Single Scoop,60,2,120
2019-02-16,Vanilla Single Scoop,50,1,50
2019-02-16,Death by Chocolate,180,3,540
2019-02-16,Trilogy,160,1,160
2019-02-16,Death by Chocolate,180,4,720
2019-02-16,Caramel Crunch Double Scoop,100,3,300
2019-02-16,Cafe Caramel,160,1,160
2019-02-16,Death by Chocolate,180,1,180
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Vanilla Single Scoop,50,4,200
2019-02-16,Cafe Caramel,160,5,800
2019-02-16,Vanilla Double Scoop,80,2,160
2019-02-16,Vanilla Single Scoop,50,2,100
2019-02-16,Butterscotch Single Scoop,60,5,300
2019-02-16,Vanilla Double Scoop,80,1,80
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Cake Fudge,150,4,600
2019-02-16,Vanilla Single Scoop,50,2,100
2019-02-16,Cake Fudge,150,4,600
2019-02-16,Vanilla Single Scoop,50,1,50
2019-02-16,Butterscotch Single Scoop,60,4,240
2019-02-16,Cake Fudge,150,5,750
2019-02-16,Banana Split,140,2,280
2019-02-16,Vanilla Single Scoop,50,1,50
2019-02-16,Cake Fudge,150,3,450
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Vanilla Double Scoop,80,1,80
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Vanilla Double Scoop,80,5,400
2019-02-16,Fig and Honey Single Scoop,60,5,300
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Vanilla Single Scoop,50,3,150
2019-02-16,Butterscotch Single Scoop,60,4,240
2019-02-16,Vanilla Double Scoop,80,5,400
2019-02-16,Hot Chocolate Fudge,120,3,360
2019-02-16,Vanilla Single Scoop,50,2,100
2019-02-16,Pista Single Scoop,60,5,300
2019-02-16,Pista Double Scoop,90,1,90
2019-02-16,Death by Chocolate,180,4,720
2019-02-16,Butterscotch Single Scoop,60,5,300
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Dry Fruit Double Scoop,90,2,180
2019-02-16,Cake Fudge,150,3,450
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Caramel Crunch Single Scoop,70,4,280
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Vanilla Single Scoop,50,3,150
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Vanilla Single Scoop,50,3,150
2019-02-16,Mint Fudge,120,5,600
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Vanilla Double Scoop,80,5,400
2019-02-16,Cafe Caramel,160,3,480
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Vanilla Double Scoop,80,4,320
2019-02-16,Death by Chocolate,180,3,540
2019-02-16,Chocolate Europa Single Scoop,70,5,350
2019-02-16,Dry Fruit Double Scoop,90,1,90
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Chocolate Europa Single Scoop,70,3,210
2019-02-16,Dry Fruit Single Scoop,60,5,300
2019-02-16,Vanilla Single Scoop,50,1,50
2019-02-16,Vanilla Single Scoop,50,1,50
2019-02-16,Butterscotch Single Scoop,60,5,300
2019-02-16,Vanilla Double Scoop,80,4,320
2019-02-16,Butterscotch Single Scoop,60,1,60
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Death by Chocolate,180,3,540
2019-02-16,Cake Fudge,150,5,750
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Butterscotch Single Scoop,60,5,300
2019-02-16,Dew Drop Sundae,150,4,600
2019-02-16,Vanilla Double Scoop,80,5,400
2019-02-16,Dry Fruit Single Scoop,60,1,60
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Hot Chocolate Fudge,120,1,120
2019-02-16,Cake Fudge,150,4,600
2019-02-16,Vanilla Double Scoop,80,4,320
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Cake Fudge,150,2,300
2019-02-16,Vanilla Single Scoop,50,4,200
2019-02-16,Cake Fudge,150,3,450
2019-02-16,Rocky Road Single Scoop,50,1,50
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Caramel Crunch Double Scoop,100,2,200
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Vanilla Single Scoop,50,3,150
2019-02-16,Rocky Road Single Scoop,50,5,250
2019-02-16,Cake Fudge,150,2,300
2019-02-16,Butterscotch Single Scoop,60,1,60
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Trilogy,160,2,320
2019-02-16,Cake Fudge,150,2,300
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Hot Chocolate Fudge,120,1,120
2019-02-16,Death by Chocolate,180,3,540
2019-02-16,Death by Chocolate,180,1,180
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Chocolate Europa Double Scoop,100,4,400
2019-02-16,Fig and Honey Single Scoop,60,2,120
2019-02-16,Death by Chocolate,180,4,720
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Vanilla Double Scoop,80,5,400
2019-02-16,Cafe Caramel,160,2,320
2019-02-16,Butterscotch Single Scoop,60,5,300
2019-02-16,Vanilla Single Scoop,50,2,100
2019-02-16,Hot Chocolate Fudge,120,1,120
2019-02-16,Chocolate Europa Double Scoop,100,2,200
2019-02-16,Vanilla Double Scoop,80,4,320
2019-02-16,Death by Chocolate,180,1,180
2019-02-16,Butterscotch Double Scoop,90,3,270
2019-02-16,Vanilla Double Scoop,80,4,320
2019-02-16,Hot Chocolate Fudge,120,1,120
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Hot Chocolate Fudge,120,3,360
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Butterscotch Single Scoop,60,4,240
2019-02-16,Hot Chocolate Fudge,120,3,360
2019-02-16,Vanilla Double Scoop,80,5,400
2019-02-16,Hot Chocolate Fudge,120,1,120
2019-02-16,Butterscotch Single Scoop,60,1,60
2019-02-16,Death by Chocolate,180,1,180
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Cake Fudge,150,5,750
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Vanilla Single Scoop,50,5,250
2019-02-16,Butterscotch Single Scoop,60,4,240
2019-02-16,Vanilla Single Scoop,50,5,250
2019-02-16,Vanilla Double Scoop,80,1,80
2019-02-16,Vanilla Single Scoop,50,3,150
2019-02-16,Cake Fudge,150,4,600
2019-02-16,Dry Fruit Single Scoop,60,2,120
2019-02-16,Cake Fudge,150,2,300
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Vanilla Single Scoop,50,2,100
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Vanilla Double Scoop,80,2,160
2019-02-16,Chocolate Europa Single Scoop,70,1,70
2019-02-16,Vanilla Double Scoop,80,2,160
2019-02-16,Vanilla Double Scoop,80,5,400
2019-02-16,Cake Fudge,150,5,750
2019-02-16,Hot Chocolate Fudge,120,3,360
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Vanilla Single Scoop,50,1,50
2019-02-16,Death by Chocolate,180,2,360
2019-02-16,Cafe Caramel,160,5,800
2019-02-16,Hot Chocolate Fudge,120,1,120
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Cake Fudge,150,1,150
2019-02-16,Vanilla Double Scoop,80,1,80
2019-02-16,Cafe Caramel,160,5,800
2019-02-16,Butterscotch Single Scoop,60,5,300
2019-02-16,Butterscotch Single Scoop,60,5,300
2019-02-16,Death by Chocolate,180,4,720
2019-02-16,Pista Single Scoop,60,5,300
2019-02-16,Hot Chocolate Fudge,120,5,600
2019-02-16,Vanilla Double Scoop,80,2,160
2019-02-16,Hot Chocolate Fudge,120,2,240
2019-02-16,Death by Chocolate,180,4,720
2019-02-16,Cafe Caramel,160,3,480
2019-02-16,Hot Chocolate Fudge,120,3,360
2019-02-16,Vanilla Double Scoop,80,3,240
2019-02-16,Death by Chocolate,180,5,900
2019-02-16,Caramel Crunch Single Scoop,70,4,280
2019-02-16,Butterscotch Single Scoop,60,3,180
2019-02-16,Fig and Honey Single Scoop,60,5,300
2019-02-16,Cake Fudge,150,3,450
2019-02-17,Vanilla Single Scoop,50,1,50
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Butterscotch Single Scoop,60,1,60
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Vanilla Single Scoop,50,3,150
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Vanilla Single Scoop,50,4,200
2019-02-17,Cafe Caramel,160,5,800
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Chocolate Europa Single Scoop,70,3,210
2019-02-17,Vanilla Single Scoop,50,4,200
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Vanilla Single Scoop,50,1,50
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Chocolate Europa Single Scoop,70,4,280
2019-02-17,Vanilla Double Scoop,80,5,400
2019-02-17,Cake Fudge,150,2,300
2019-02-17,Cafe Caramel,160,1,160
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Pista Single Scoop,60,3,180
2019-02-17,Pista Single Scoop,60,4,240
2019-02-17,Cake Fudge,150,4,600
2019-02-17,Hot Chocolate Fudge,120,1,120
2019-02-17,Chocolate Europa Single Scoop,70,5,350
2019-02-17,Cake Fudge,150,4,600
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Butterscotch Single Scoop,60,3,180
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Vanilla Double Scoop,80,5,400
2019-02-17,Dry Fruit Single Scoop,60,5,300
2019-02-17,Cafe Caramel,160,5,800
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Vanilla Single Scoop,50,1,50
2019-02-17,Death by Chocolate,180,2,360
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Vanilla Double Scoop,80,2,160
2019-02-17,Cake Fudge,150,2,300
2019-02-17,Almond Fudge,150,5,750
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Vanilla Double Scoop,80,3,240
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Butterscotch Single Scoop,60,1,60
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Death by Chocolate,180,4,720
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Dew Drop Sundae,150,2,300
2019-02-17,Butterscotch Single Scoop,60,5,300
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Cake Fudge,150,3,450
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Butterscotch Single Scoop,60,2,120
2019-02-17,Vanilla Single Scoop,50,2,100
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Dry Fruit Double Scoop,90,4,360
2019-02-17,Vanilla Single Scoop,50,2,100
2019-02-17,Fig and Honey Single Scoop,60,1,60
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Dry Fruit Single Scoop,60,2,120
2019-02-17,Death by Chocolate,180,5,900
2019-02-17,Almond Fudge,150,4,600
2019-02-17,Death by Chocolate,180,4,720
2019-02-17,Cake Fudge,150,1,150
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Vanilla Double Scoop,80,3,240
2019-02-17,Death by Chocolate,180,2,360
2019-02-17,Butterscotch Single Scoop,60,2,120
2019-02-17,Butterscotch Single Scoop,60,5,300
2019-02-17,Butterscotch Single Scoop,60,3,180
2019-02-17,Vanilla Single Scoop,50,1,50
2019-02-17,Death by Chocolate,180,5,900
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Death by Chocolate,180,5,900
2019-02-17,Butterscotch Single Scoop,60,1,60
2019-02-17,Cake Fudge,150,3,450
2019-02-17,Death by Chocolate,180,3,540
2019-02-17,Death by Chocolate,180,1,180
2019-02-17,Vanilla Double Scoop,80,4,320
2019-02-17,Chocolate Europa Double Scoop,100,2,200
2019-02-17,Cafe Caramel,160,4,640
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Rocky Road Double Scoop,80,4,320
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Vanilla Double Scoop,80,3,240
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Butterscotch Double Scoop,90,2,180
2019-02-17,Vanilla Double Scoop,80,2,160
2019-02-17,Vanilla Single Scoop,50,3,150
2019-02-17,Vanilla Double Scoop,80,2,160
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Fig and Honey Single Scoop,60,5,300
2019-02-17,Butterscotch Single Scoop,60,1,60
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Vanilla Single Scoop,50,2,100
2019-02-17,Cake Fudge,150,4,600
2019-02-17,Cake Fudge,150,1,150
2019-02-17,Pista Single Scoop,60,4,240
2019-02-17,Vanilla Double Scoop,80,3,240
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Death by Chocolate,180,2,360
2019-02-17,Cafe Caramel,160,2,320
2019-02-17,Cake Fudge,150,2,300
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Dry Fruit Single Scoop,60,4,240
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Death by Chocolate,180,2,360
2019-02-17,Butterscotch Double Scoop,90,5,450
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Butterscotch Single Scoop,60,1,60
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Butterscotch Double Scoop,90,3,270
2019-02-17,Cake Fudge,150,3,450
2019-02-17,Vanilla Single Scoop,50,4,200
2019-02-17,Fig and Honey Single Scoop,60,3,180
2019-02-17,Vanilla Double Scoop,80,2,160
2019-02-17,Vanilla Double Scoop,80,5,400
2019-02-17,Fig and Honey Single Scoop,60,1,60
2019-02-17,Cake Fudge,150,2,300
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Cafe Caramel,160,3,480
2019-02-17,Cafe Caramel,160,4,640
2019-02-17,Vanilla Double Scoop,80,2,160
2019-02-17,Vanilla Double Scoop,80,5,400
2019-02-17,Death by Chocolate,180,2,360
2019-02-17,Butterscotch Double Scoop,90,1,90
2019-02-17,Vanilla Double Scoop,80,3,240
2019-02-17,Death by Chocolate,180,5,900
2019-02-17,Vanilla Double Scoop,80,4,320
2019-02-17,Banana Split,140,1,140
2019-02-17,Vanilla Double Scoop,80,2,160
2019-02-17,Dew Drop Sundae,150,1,150
2019-02-17,Death by Chocolate,180,1,180
2019-02-17,Death by Chocolate,180,1,180
2019-02-17,Butterscotch Single Scoop,60,1,60
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Cake Fudge,150,4,600
2019-02-17,Butterscotch Single Scoop,60,2,120
2019-02-17,Death by Chocolate,180,5,900
2019-02-17,Vanilla Double Scoop,80,3,240
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Death by Chocolate,180,4,720
2019-02-17,Vanilla Double Scoop,80,4,320
2019-02-17,Vanilla Double Scoop,80,4,320
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Dry Fruit Single Scoop,60,4,240
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Vanilla Single Scoop,50,5,250
2019-02-17,Death by Chocolate,180,3,540
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Cake Fudge,150,2,300
2019-02-17,Cafe Caramel,160,5,800
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Death by Chocolate,180,4,720
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Cafe Caramel,160,2,320
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Hot Chocolate Fudge,120,1,120
2019-02-17,Vanilla Single Scoop,50,3,150
2019-02-17,Vanilla Double Scoop,80,4,320
2019-02-17,Chocolate Europa Single Scoop,70,4,280
2019-02-17,Butterscotch Single Scoop,60,2,120
2019-02-17,Death by Chocolate,180,1,180
2019-02-17,Vanilla Single Scoop,50,4,200
2019-02-17,Butterscotch Single Scoop,60,3,180
2019-02-17,Vanilla Single Scoop,50,4,200
2019-02-17,Death by Chocolate,180,2,360
2019-02-17,Cake Fudge,150,4,600
2019-02-17,Vanilla Single Scoop,50,4,200
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Pista Double Scoop,90,3,270
2019-02-17,Vanilla Single Scoop,50,1,50
2019-02-17,Vanilla Single Scoop,50,4,200
2019-02-17,Cake Fudge,150,2,300
2019-02-17,Hot Chocolate Fudge,120,1,120
2019-02-17,Banana Split,140,2,280
2019-02-17,Death by Chocolate,180,4,720
2019-02-17,Vanilla Single Scoop,50,3,150
2019-02-17,Pista Single Scoop,60,5,300
2019-02-17,Vanilla Double Scoop,80,2,160
2019-02-17,Chocolate Europa Single Scoop,70,4,280
2019-02-17,Banana Split,140,5,700
2019-02-17,Death by Chocolate,180,3,540
2019-02-17,Vanilla Single Scoop,50,1,50
2019-02-17,Mint Fudge,120,1,120
2019-02-17,Cafe Caramel,160,1,160
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Chocolate Europa Single Scoop,70,3,210
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Rocky Road Single Scoop,50,2,100
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Fig and Honey Double Scoop,90,2,180
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Cake Fudge,150,4,600
2019-02-17,Butterscotch Single Scoop,60,2,120
2019-02-17,Hot Chocolate Fudge,120,1,120
2019-02-17,Vanilla Single Scoop,50,1,50
2019-02-17,Butterscotch Single Scoop,60,5,300
2019-02-17,Death by Chocolate,180,4,720
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Death by Chocolate,180,2,360
2019-02-17,Hot Chocolate Fudge,120,2,240
2019-02-17,Cafe Caramel,160,4,640
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Hot Chocolate Fudge,120,3,360
2019-02-17,Cake Fudge,150,2,300
2019-02-17,Cake Fudge,150,5,750
2019-02-17,Butterscotch Single Scoop,60,1,60
2019-02-17,Vanilla Single Scoop,50,2,100
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Vanilla Double Scoop,80,2,160
2019-02-17,Cake Fudge,150,3,450
2019-02-17,Vanilla Double Scoop,80,5,400
2019-02-17,Hot Chocolate Fudge,120,1,120
2019-02-17,Hot Chocolate Fudge,120,4,480
2019-02-17,Caramel Crunch Double Scoop,100,5,500
2019-02-17,Butterscotch Double Scoop,90,1,90
2019-02-17,Vanilla Single Scoop,50,3,150
2019-02-17,Fig and Honey Single Scoop,60,5,300
2019-02-17,Vanilla Double Scoop,80,1,80
2019-02-17,Death by Chocolate,180,4,720
2019-02-17,Hot Chocolate Fudge,120,1,120
2019-02-17,Hot Chocolate Fudge,120,5,600
2019-02-17,Cake Fudge,150,4,600
2019-02-18,Hot Chocolate Fudge,120,3,360
2019-02-18,Death by Chocolate,180,5,900
2019-02-18,Vanilla Single Scoop,50,4,200
2019-02-18,Hot Chocolate Fudge,120,4,480
2019-02-18,Dry Fruit Single Scoop,60,4,240
2019-02-18,Trilogy,160,4,640
2019-02-18,Dry Fruit Single Scoop,60,3,180
2019-02-18,Cake Fudge,150,1,150
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Vanilla Double Scoop,80,4,320
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Vanilla Single Scoop,50,1,50
2019-02-18,Butterscotch Single Scoop,60,5,300
2019-02-18,Cake Fudge,150,1,150
2019-02-18,Butterscotch Single Scoop,60,1,60
2019-02-18,Hot Chocolate Fudge,120,1,120
2019-02-18,Cake Fudge,150,1,150
2019-02-18,Cafe Caramel,160,3,480
2019-02-18,Pista Double Scoop,90,5,450
2019-02-18,Butterscotch Single Scoop,60,3,180
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Vanilla Single Scoop,50,1,50
2019-02-18,Vanilla Double Scoop,80,3,240
2019-02-18,Death by Chocolate,180,1,180
2019-02-18,Pista Single Scoop,60,3,180
2019-02-18,Hot Chocolate Fudge,120,1,120
2019-02-18,Vanilla Double Scoop,80,5,400
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Vanilla Double Scoop,80,2,160
2019-02-18,Death by Chocolate,180,3,540
2019-02-18,Butterscotch Double Scoop,90,5,450
2019-02-18,Death by Chocolate,180,5,900
2019-02-18,Vanilla Single Scoop,50,3,150
2019-02-18,Hot Chocolate Fudge,120,4,480
2019-02-18,Death by Chocolate,180,2,360
2019-02-18,Vanilla Single Scoop,50,1,50
2019-02-18,Vanilla Single Scoop,50,4,200
2019-02-18,Caramel Crunch Double Scoop,100,4,400
2019-02-18,Death by Chocolate,180,1,180
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Vanilla Single Scoop,50,1,50
2019-02-18,Hot Chocolate Fudge,120,4,480
2019-02-18,Vanilla Double Scoop,80,2,160
2019-02-18,Vanilla Double Scoop,80,3,240
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Dry Fruit Double Scoop,90,5,450
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Butterscotch Single Scoop,60,1,60
2019-02-18,Vanilla Double Scoop,80,1,80
2019-02-18,Butterscotch Single Scoop,60,5,300
2019-02-18,Pista Double Scoop,90,1,90
2019-02-18,Hot Chocolate Fudge,120,3,360
2019-02-18,Vanilla Double Scoop,80,4,320
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Hot Chocolate Fudge,120,3,360
2019-02-18,Caramel Crunch Double Scoop,100,5,500
2019-02-18,Vanilla Double Scoop,80,2,160
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Vanilla Double Scoop,80,1,80
2019-02-18,Hot Chocolate Fudge,120,3,360
2019-02-18,Vanilla Double Scoop,80,3,240
2019-02-18,Vanilla Single Scoop,50,4,200
2019-02-18,Cake Fudge,150,1,150
2019-02-18,Vanilla Double Scoop,80,5,400
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Cafe Caramel,160,1,160
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Vanilla Double Scoop,80,5,400
2019-02-18,Cake Fudge,150,3,450
2019-02-18,Death by Chocolate,180,4,720
2019-02-18,Death by Chocolate,180,3,540
2019-02-18,Hot Chocolate Fudge,120,2,240
2019-02-18,Caramel Crunch Double Scoop,100,3,300
2019-02-18,Cake Fudge,150,5,750
2019-02-18,Cake Fudge,150,1,150
2019-02-18,Cafe Caramel,160,1,160
2019-02-18,Vanilla Single Scoop,50,1,50
2019-02-18,Cafe Caramel,160,3,480
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Cafe Caramel,160,2,320
2019-02-18,Cafe Caramel,160,5,800
2019-02-18,Cake Fudge,150,5,750
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Butterscotch Single Scoop,60,4,240
2019-02-18,Fig and Honey Double Scoop,90,5,450
2019-02-18,Vanilla Single Scoop,50,1,50
2019-02-18,Cake Fudge,150,3,450
2019-02-18,Almond Fudge,150,4,600
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Pista Double Scoop,90,1,90
2019-02-18,Vanilla Double Scoop,80,2,160
2019-02-18,Cake Fudge,150,3,450
2019-02-18,Death by Chocolate,180,1,180
2019-02-18,Death by Chocolate,180,2,360
2019-02-18,Vanilla Single Scoop,50,5,250
2019-02-18,Cafe Caramel,160,1,160
2019-02-18,Vanilla Single Scoop,50,3,150
2019-02-18,Butterscotch Double Scoop,90,1,90
2019-02-18,Death by Chocolate,180,2,360
2019-02-18,Vanilla Single Scoop,50,5,250
2019-02-18,Vanilla Double Scoop,80,3,240
2019-02-18,Butterscotch Double Scoop,90,2,180
2019-02-18,Butterscotch Single Scoop,60,5,300
2019-02-18,Caramel Crunch Double Scoop,100,5,500
2019-02-18,Fig and Honey Double Scoop,90,2,180
2019-02-18,Cafe Caramel,160,3,480
2019-02-18,Death by Chocolate,180,2,360
2019-02-18,Cake Fudge,150,3,450
2019-02-18,Vanilla Double Scoop,80,4,320
2019-02-18,Death by Chocolate,180,5,900
2019-02-18,Hot Chocolate Fudge,120,1,120
2019-02-18,Hot Chocolate Fudge,120,3,360
2019-02-18,Hot Chocolate Fudge,120,5,600
2019-02-18,Death by Chocolate,180,5,900
2019-02-18,Hot Chocolate Fudge,120,3,360
2019-02-18,Caramel Crunch Double Scoop,100,2,200
2019-02-18,Dry Fruit Double Scoop,90,5,450
2019-02-18,Cake Fudge,150,4,600
2019-02-18,Hot Chocolate Fudge,120,3,360
2019-02-18,Hot Chocolate Fudge,120,4,480
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Vanilla Single Scoop,50,1,50
2019-02-18,Caramel Crunch Double Scoop,100,2,200
2019-02-18,Vanilla Double Scoop,80,1,80
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Death by Chocolate,180,5,900
2019-02-18,Butterscotch Single Scoop,60,3,180
2019-02-18,Hot Chocolate Fudge,120,3,360
2019-02-18,Cake Fudge,150,2,300
2019-02-18,Vanilla Double Scoop,80,5,400
2019-02-18,Hot Chocolate Fudge,120,4,480
2019-02-19,Death by Chocolate,180,3,540
2019-02-19,Vanilla Single Scoop,50,3,150
2019-02-19,Cake Fudge,150,4,600
2019-02-19,Caramel Crunch Single Scoop,70,5,350
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-19,Hot Chocolate Fudge,120,3,360
2019-02-19,Butterscotch Single Scoop,60,3,180
2019-02-19,Vanilla Double Scoop,80,2,160
2019-02-19,Cake Fudge,150,4,600
2019-02-19,Butterscotch Double Scoop,90,1,90
2019-02-19,Cake Fudge,150,4,600
2019-02-19,Hot Chocolate Fudge,120,4,480
2019-02-19,Cafe Caramel,160,1,160
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-19,Death by Chocolate,180,1,180
2019-02-19,Cake Fudge,150,3,450
2019-02-19,Hot Chocolate Fudge,120,1,120
2019-02-19,Hot Chocolate Fudge,120,4,480
2019-02-19,Vanilla Double Scoop,80,2,160
2019-02-19,Caramel Crunch Double Scoop,100,2,200
2019-02-19,Vanilla Double Scoop,80,2,160
2019-02-19,Vanilla Single Scoop,50,2,100
2019-02-19,Butterscotch Single Scoop,60,3,180
2019-02-19,Death by Chocolate,180,5,900
2019-02-19,Rocky Road Double Scoop,80,5,400
2019-02-19,Pista Single Scoop,60,5,300
2019-02-19,Vanilla Double Scoop,80,2,160
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-19,Vanilla Single Scoop,50,4,200
2019-02-19,Hot Chocolate Fudge,120,1,120
2019-02-19,Vanilla Single Scoop,50,1,50
2019-02-19,Death by Chocolate,180,4,720
2019-02-19,Hot Chocolate Fudge,120,1,120
2019-02-19,Cake Fudge,150,2,300
2019-02-19,Death by Chocolate,180,3,540
2019-02-19,Hot Chocolate Fudge,120,4,480
2019-02-19,Cake Fudge,150,4,600
2019-02-19,Cafe Caramel,160,1,160
2019-02-19,Vanilla Double Scoop,80,1,80
2019-02-19,Death by Chocolate,180,4,720
2019-02-19,Death by Chocolate,180,4,720
2019-02-19,Death by Chocolate,180,5,900
2019-02-19,Butterscotch Single Scoop,60,3,180
2019-02-19,Death by Chocolate,180,2,360
2019-02-19,Cake Fudge,150,5,750
2019-02-19,Vanilla Double Scoop,80,1,80
2019-02-19,Cake Fudge,150,3,450
2019-02-19,Death by Chocolate,180,1,180
2019-02-19,Butterscotch Double Scoop,90,3,270
2019-02-19,Fig and Honey Double Scoop,90,3,270
2019-02-19,Hot Chocolate Fudge,120,2,240
2019-02-19,Death by Chocolate,180,4,720
2019-02-19,Vanilla Double Scoop,80,2,160
2019-02-19,Death by Chocolate,180,3,540
2019-02-19,Butterscotch Single Scoop,60,4,240
2019-02-19,Hot Chocolate Fudge,120,1,120
2019-02-19,Cake Fudge,150,1,150
2019-02-19,Vanilla Single Scoop,50,2,100
2019-02-19,Death by Chocolate,180,3,540
2019-02-19,Vanilla Double Scoop,80,2,160
2019-02-19,Cake Fudge,150,2,300
2019-02-19,Vanilla Double Scoop,80,5,400
2019-02-19,Hot Chocolate Fudge,120,2,240
2019-02-19,Vanilla Single Scoop,50,5,250
2019-02-19,Butterscotch Single Scoop,60,4,240
2019-02-19,Cake Fudge,150,2,300
2019-02-19,Death by Chocolate,180,3,540
2019-02-19,Vanilla Single Scoop,50,4,200
2019-02-19,Hot Chocolate Fudge,120,4,480
2019-02-19,Vanilla Double Scoop,80,1,80
2019-02-19,Vanilla Double Scoop,80,5,400
2019-02-19,Butterscotch Single Scoop,60,1,60
2019-02-19,Hot Chocolate Fudge,120,5,600
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-19,Hot Chocolate Fudge,120,3,360
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-19,Vanilla Single Scoop,50,2,100
2019-02-19,Death by Chocolate,180,3,540
2019-02-19,Cake Fudge,150,5,750
2019-02-19,Hot Chocolate Fudge,120,2,240
2019-02-19,Cake Fudge,150,4,600
2019-02-19,Cake Fudge,150,1,150
2019-02-19,Fig and Honey Single Scoop,60,5,300
2019-02-19,Hot Chocolate Fudge,120,3,360
2019-02-19,Vanilla Double Scoop,80,5,400
2019-02-19,Hot Chocolate Fudge,120,4,480
2019-02-19,Butterscotch Single Scoop,60,4,240
2019-02-19,Vanilla Single Scoop,50,2,100
2019-02-19,Death by Chocolate,180,4,720
2019-02-19,Vanilla Double Scoop,80,1,80
2019-02-19,Death by Chocolate,180,5,900
2019-02-19,Death by Chocolate,180,1,180
2019-02-19,Vanilla Double Scoop,80,5,400
2019-02-19,Cake Fudge,150,3,450
2019-02-19,Vanilla Single Scoop,50,5,250
2019-02-19,Vanilla Double Scoop,80,2,160
2019-02-19,Cake Fudge,150,4,600
2019-02-19,Death by Chocolate,180,2,360
2019-02-19,Butterscotch Single Scoop,60,3,180
2019-02-19,Caramel Crunch Double Scoop,100,3,300
2019-02-19,Cake Fudge,150,1,150
2019-02-19,Death by Chocolate,180,2,360
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-19,Vanilla Single Scoop,50,4,200
2019-02-19,Vanilla Double Scoop,80,1,80
2019-02-19,Vanilla Single Scoop,50,5,250
2019-02-19,Hot Chocolate Fudge,120,3,360
2019-02-19,Vanilla Double Scoop,80,1,80
2019-02-19,Vanilla Double Scoop,80,5,400
2019-02-19,Hot Chocolate Fudge,120,2,240
2019-02-19,Hot Chocolate Fudge,120,1,120
2019-02-19,Death by Chocolate,180,4,720
2019-02-19,Hot Chocolate Fudge,120,5,600
2019-02-19,Vanilla Double Scoop,80,1,80
2019-02-19,Dry Fruit Single Scoop,60,3,180
2019-02-19,Dry Fruit Single Scoop,60,3,180
2019-02-19,Cake Fudge,150,2,300
2019-02-19,Hot Chocolate Fudge,120,4,480
2019-02-19,Hot Chocolate Fudge,120,1,120
2019-02-19,Hot Chocolate Fudge,120,3,360
2019-02-19,Pista Single Scoop,60,4,240
2019-02-19,Hot Chocolate Fudge,120,1,120
2019-02-19,Cake Fudge,150,5,750
2019-02-19,Butterscotch Single Scoop,60,2,120
2019-02-19,Vanilla Single Scoop,50,1,50
2019-02-19,Death by Chocolate,180,2,360
2019-02-19,Death by Chocolate,180,1,180
2019-02-19,Butterscotch Single Scoop,60,4,240
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-19,Vanilla Single Scoop,50,1,50
2019-02-19,Almond Fudge,150,5,750
2019-02-19,Cake Fudge,150,5,750
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-19,Cake Fudge,150,1,150
2019-02-19,Chocolate Europa Double Scoop,100,1,100
2019-02-19,Butterscotch Single Scoop,60,3,180
2019-02-19,Cake Fudge,150,2,300
2019-02-19,Hot Chocolate Fudge,120,4,480
2019-02-19,Rocky Road Double Scoop,80,1,80
2019-02-19,Vanilla Double Scoop,80,4,320
2019-02-20,Death by Chocolate,180,4,720
2019-02-20,Vanilla Double Scoop,80,2,160
2019-02-20,Vanilla Double Scoop,80,5,400
2019-02-20,Vanilla Double Scoop,80,4,320
2019-02-20,Cake Fudge,150,2,300
2019-02-20,Butterscotch Single Scoop,60,5,300
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Cafe Caramel,160,5,800
2019-02-20,Butterscotch Single Scoop,60,1,60
2019-02-20,Cake Fudge,150,4,600
2019-02-20,Cake Fudge,150,2,300
2019-02-20,Cafe Caramel,160,5,800
2019-02-20,Butterscotch Single Scoop,60,2,120
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Butterscotch Single Scoop,60,1,60
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Butterscotch Single Scoop,60,5,300
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Hot Chocolate Fudge,120,3,360
2019-02-20,Cake Fudge,150,2,300
2019-02-20,Hot Chocolate Fudge,120,5,600
2019-02-20,Hot Chocolate Fudge,120,3,360
2019-02-20,Butterscotch Single Scoop,60,2,120
2019-02-20,Butterscotch Single Scoop,60,3,180
2019-02-20,Cake Fudge,150,5,750
2019-02-20,Cake Fudge,150,2,300
2019-02-20,Butterscotch Double Scoop,90,4,360
2019-02-20,Cake Fudge,150,1,150
2019-02-20,Vanilla Double Scoop,80,2,160
2019-02-20,Cake Fudge,150,1,150
2019-02-20,Cake Fudge,150,3,450
2019-02-20,Death by Chocolate,180,4,720
2019-02-20,Hot Chocolate Fudge,120,4,480
2019-02-20,Vanilla Single Scoop,50,4,200
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Hot Chocolate Fudge,120,4,480
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Butterscotch Single Scoop,60,5,300
2019-02-20,Death by Chocolate,180,5,900
2019-02-20,Butterscotch Single Scoop,60,1,60
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Dry Fruit Single Scoop,60,5,300
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Butterscotch Single Scoop,60,5,300
2019-02-20,Hot Chocolate Fudge,120,4,480
2019-02-20,Cake Fudge,150,2,300
2019-02-20,Hot Chocolate Fudge,120,3,360
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Cake Fudge,150,2,300
2019-02-20,Cake Fudge,150,5,750
2019-02-20,Butterscotch Single Scoop,60,3,180
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Butterscotch Single Scoop,60,5,300
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Hot Chocolate Fudge,120,3,360
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Butterscotch Single Scoop,60,5,300
2019-02-20,Vanilla Double Scoop,80,4,320
2019-02-20,Cake Fudge,150,4,600
2019-02-20,Fig and Honey Double Scoop,90,3,270
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Death by Chocolate,180,1,180
2019-02-20,Butterscotch Single Scoop,60,3,180
2019-02-20,Cafe Caramel,160,5,800
2019-02-20,Hot Chocolate Fudge,120,3,360
2019-02-20,Pista Double Scoop,90,2,180
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Dry Fruit Double Scoop,90,4,360
2019-02-20,Death by Chocolate,180,4,720
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Butterscotch Double Scoop,90,3,270
2019-02-20,Vanilla Double Scoop,80,1,80
2019-02-20,Death by Chocolate,180,4,720
2019-02-20,Caramel Crunch Double Scoop,100,1,100
2019-02-20,Hot Chocolate Fudge,120,5,600
2019-02-20,Death by Chocolate,180,4,720
2019-02-20,Hot Chocolate Fudge,120,3,360
2019-02-20,Vanilla Double Scoop,80,4,320
2019-02-20,Hot Chocolate Fudge,120,4,480
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Butterscotch Single Scoop,60,3,180
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Butterscotch Single Scoop,60,4,240
2019-02-20,Fig and Honey Single Scoop,60,1,60
2019-02-20,Cake Fudge,150,1,150
2019-02-20,Cake Fudge,150,4,600
2019-02-20,Cafe Caramel,160,4,640
2019-02-20,Death by Chocolate,180,1,180
2019-02-20,Hot Chocolate Fudge,120,4,480
2019-02-20,Hot Chocolate Fudge,120,4,480
2019-02-20,Hot Chocolate Fudge,120,5,600
2019-02-20,Fig and Honey Single Scoop,60,5,300
2019-02-20,Vanilla Double Scoop,80,4,320
2019-02-20,Dry Fruit Double Scoop,90,5,450
2019-02-20,Hot Chocolate Fudge,120,5,600
2019-02-20,Chocolate Europa Single Scoop,70,4,280
2019-02-20,Cake Fudge,150,3,450
2019-02-20,Fig and Honey Single Scoop,60,2,120
2019-02-20,Vanilla Double Scoop,80,2,160
2019-02-20,Hot Chocolate Fudge,120,3,360
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Cake Fudge,150,4,600
2019-02-20,Chocolate Europa Double Scoop,100,2,200
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Death by Chocolate,180,5,900
2019-02-20,Vanilla Double Scoop,80,4,320
2019-02-20,Vanilla Double Scoop,80,3,240
2019-02-20,Vanilla Double Scoop,80,4,320
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Vanilla Double Scoop,80,1,80
2019-02-20,Death by Chocolate,180,2,360
2019-02-20,Hot Chocolate Fudge,120,1,120
2019-02-20,Vanilla Double Scoop,80,1,80
2019-02-20,Vanilla Single Scoop,50,1,50
2019-02-20,Vanilla Double Scoop,80,4,320
2019-02-20,Death by Chocolate,180,5,900
2019-02-20,Rocky Road Single Scoop,50,4,200
2019-02-20,Cafe Caramel,160,4,640
2019-02-20,Vanilla Double Scoop,80,4,320
2019-02-20,Butterscotch Single Scoop,60,5,300
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Death by Chocolate,180,5,900
2019-02-20,Vanilla Double Scoop,80,1,80
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Hot Chocolate Fudge,120,2,240
2019-02-20,Cafe Caramel,160,1,160
2019-02-20,Cake Fudge,150,1,150
2019-02-21,Cake Fudge,150,1,150
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Vanilla Double Scoop,80,4,320
2019-02-21,Cafe Caramel,160,2,320
2019-02-21,Death by Chocolate,180,5,900
2019-02-21,Death by Chocolate,180,5,900
2019-02-21,Cake Fudge,150,1,150
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Death by Chocolate,180,4,720
2019-02-21,Vanilla Single Scoop,50,5,250
2019-02-21,Vanilla Single Scoop,50,5,250
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Vanilla Single Scoop,50,2,100
2019-02-21,Butterscotch Single Scoop,60,2,120
2019-02-21,Vanilla Double Scoop,80,3,240
2019-02-21,Vanilla Double Scoop,80,1,80
2019-02-21,Death by Chocolate,180,2,360
2019-02-21,Butterscotch Single Scoop,60,5,300
2019-02-21,Cake Fudge,150,3,450
2019-02-21,Cake Fudge,150,1,150
2019-02-21,Butterscotch Single Scoop,60,5,300
2019-02-21,Vanilla Double Scoop,80,1,80
2019-02-21,Hot Chocolate Fudge,120,5,600
2019-02-21,Cake Fudge,150,4,600
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Hot Chocolate Fudge,120,1,120
2019-02-21,Fig and Honey Double Scoop,90,2,180
2019-02-21,Hot Chocolate Fudge,120,1,120
2019-02-21,Vanilla Single Scoop,50,1,50
2019-02-21,Death by Chocolate,180,4,720
2019-02-21,Dry Fruit Single Scoop,60,2,120
2019-02-21,Dry Fruit Double Scoop,90,5,450
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Cake Fudge,150,2,300
2019-02-21,Cake Fudge,150,2,300
2019-02-21,Vanilla Double Scoop,80,4,320
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Vanilla Double Scoop,80,1,80
2019-02-21,Hot Chocolate Fudge,120,3,360
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Hot Chocolate Fudge,120,3,360
2019-02-21,Cake Fudge,150,4,600
2019-02-21,Hot Chocolate Fudge,120,3,360
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Hot Chocolate Fudge,120,1,120
2019-02-21,Butterscotch Single Scoop,60,3,180
2019-02-21,Butterscotch Single Scoop,60,2,120
2019-02-21,Vanilla Double Scoop,80,1,80
2019-02-21,Fig and Honey Single Scoop,60,2,120
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Cafe Caramel,160,2,320
2019-02-21,Hot Chocolate Fudge,120,3,360
2019-02-21,Death by Chocolate,180,2,360
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Vanilla Single Scoop,50,4,200
2019-02-21,Vanilla Single Scoop,50,5,250
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Cake Fudge,150,2,300
2019-02-21,Cafe Caramel,160,4,640
2019-02-21,Butterscotch Single Scoop,60,4,240
2019-02-21,Cafe Caramel,160,3,480
2019-02-21,Cake Fudge,150,2,300
2019-02-21,Butterscotch Single Scoop,60,2,120
2019-02-21,Cake Fudge,150,4,600
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Hot Chocolate Fudge,120,4,480
2019-02-21,Death by Chocolate,180,3,540
2019-02-21,Hot Chocolate Fudge,120,3,360
2019-02-21,Vanilla Double Scoop,80,5,400
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Mint Fudge,120,4,480
2019-02-21,Butterscotch Single Scoop,60,4,240
2019-02-21,Rocky Road Double Scoop,80,1,80
2019-02-21,Hot Chocolate Fudge,120,4,480
2019-02-21,Hot Chocolate Fudge,120,1,120
2019-02-21,Hot Chocolate Fudge,120,3,360
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Cake Fudge,150,1,150
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Death by Chocolate,180,4,720
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Cake Fudge,150,4,600
2019-02-21,Vanilla Double Scoop,80,5,400
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Death by Chocolate,180,4,720
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Cake Fudge,150,4,600
2019-02-21,Death by Chocolate,180,5,900
2019-02-21,Cafe Caramel,160,3,480
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Cafe Caramel,160,5,800
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Vanilla Single Scoop,50,5,250
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Hot Chocolate Fudge,120,5,600
2019-02-21,Chocolate Europa Double Scoop,100,4,400
2019-02-21,Vanilla Double Scoop,80,5,400
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Vanilla Single Scoop,50,5,250
2019-02-21,Death by Chocolate,180,5,900
2019-02-21,Cake Fudge,150,1,150
2019-02-21,Cafe Caramel,160,5,800
2019-02-21,Butterscotch Single Scoop,60,2,120
2019-02-21,Butterscotch Single Scoop,60,5,300
2019-02-21,Butterscotch Single Scoop,60,3,180
2019-02-21,Vanilla Single Scoop,50,2,100
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Vanilla Double Scoop,80,4,320
2019-02-21,Vanilla Double Scoop,80,4,320
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Hot Chocolate Fudge,120,1,120
2019-02-21,Pista Double Scoop,90,4,360
2019-02-21,Death by Chocolate,180,1,180
2019-02-21,Dry Fruit Double Scoop,90,2,180
2019-02-21,Cake Fudge,150,2,300
2019-02-21,Fig and Honey Double Scoop,90,5,450
2019-02-21,Death by Chocolate,180,4,720
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Cafe Caramel,160,5,800
2019-02-21,Hot Chocolate Fudge,120,5,600
2019-02-21,Cake Fudge,150,1,150
2019-02-21,Butterscotch Single Scoop,60,5,300
2019-02-21,Cake Fudge,150,2,300
2019-02-21,Vanilla Double Scoop,80,3,240
2019-02-21,Cafe Caramel,160,1,160
2019-02-21,Vanilla Single Scoop,50,1,50
2019-02-21,Rocky Road Single Scoop,50,1,50
2019-02-21,Vanilla Single Scoop,50,3,150
2019-02-21,Cake Fudge,150,2,300
2019-02-21,Butterscotch Single Scoop,60,5,300
2019-02-21,Rocky Road Single Scoop,50,3,150
2019-02-21,Rocky Road Single Scoop,50,1,50
2019-02-21,Vanilla Double Scoop,80,4,320
2019-02-21,Vanilla Single Scoop,50,3,150
2019-02-21,Vanilla Double Scoop,80,5,400
2019-02-21,Vanilla Double Scoop,80,5,400
2019-02-21,Hot Chocolate Fudge,120,1,120
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Death by Chocolate,180,3,540
2019-02-21,Death by Chocolate,180,4,720
2019-02-21,Vanilla Single Scoop,50,4,200
2019-02-21,Hot Chocolate Fudge,120,3,360
2019-02-21,Vanilla Double Scoop,80,4,320
2019-02-21,Almond Fudge,150,1,150
2019-02-21,Hot Chocolate Fudge,120,1,120
2019-02-21,Butterscotch Single Scoop,60,2,120
2019-02-21,Hot Chocolate Fudge,120,2,240
2019-02-21,Vanilla Double Scoop,80,4,320
2019-02-21,Hot Chocolate Fudge,120,4,480
2019-02-21,Cake Fudge,150,5,750
2019-02-21,Butterscotch Single Scoop,60,5,300
2019-02-21,Vanilla Double Scoop,80,1,80
2019-02-21,Vanilla Double Scoop,80,4,320
2019-02-21,Butterscotch Single Scoop,60,1,60
2019-02-21,Mint Fudge,120,5,600
2019-02-21,Vanilla Double Scoop,80,2,160
2019-02-21,Vanilla Single Scoop,50,4,200
2019-02-21,Vanilla Double Scoop,80,5,400
2019-02-21,Vanilla Double Scoop,80,3,240
2019-02-22,Trilogy,160,1,160
2019-02-22,Vanilla Double Scoop,80,4,320
2019-02-22,Vanilla Double Scoop,80,2,160
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Cake Fudge,150,3,450
2019-02-22,Chocolate Europa Single Scoop,70,3,210
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Butterscotch Single Scoop,60,4,240
2019-02-22,Butterscotch Single Scoop,60,1,60
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Vanilla Double Scoop,80,4,320
2019-02-22,Cake Fudge,150,4,600
2019-02-22,Butterscotch Single Scoop,60,5,300
2019-02-22,Cake Fudge,150,3,450
2019-02-22,Cake Fudge,150,5,750
2019-02-22,Butterscotch Single Scoop,60,1,60
2019-02-22,Vanilla Double Scoop,80,2,160
2019-02-22,Death by Chocolate,180,1,180
2019-02-22,Cake Fudge,150,5,750
2019-02-22,Cafe Caramel,160,1,160
2019-02-22,Butterscotch Single Scoop,60,4,240
2019-02-22,Hot Chocolate Fudge,120,3,360
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Trilogy,160,5,800
2019-02-22,Death by Chocolate,180,5,900
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Butterscotch Single Scoop,60,4,240
2019-02-22,Dry Fruit Single Scoop,60,4,240
2019-02-22,Vanilla Double Scoop,80,2,160
2019-02-22,Cafe Caramel,160,4,640
2019-02-22,Cake Fudge,150,3,450
2019-02-22,Death by Chocolate,180,2,360
2019-02-22,Hot Chocolate Fudge,120,1,120
2019-02-22,Cake Fudge,150,2,300
2019-02-22,Death by Chocolate,180,5,900
2019-02-22,Vanilla Double Scoop,80,2,160
2019-02-22,Butterscotch Single Scoop,60,3,180
2019-02-22,Hot Chocolate Fudge,120,4,480
2019-02-22,Cake Fudge,150,1,150
2019-02-22,Vanilla Single Scoop,50,5,250
2019-02-22,Cake Fudge,150,1,150
2019-02-22,Hot Chocolate Fudge,120,3,360
2019-02-22,Dry Fruit Single Scoop,60,1,60
2019-02-22,Chocolate Europa Single Scoop,70,4,280
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Butterscotch Single Scoop,60,1,60
2019-02-22,Vanilla Single Scoop,50,1,50
2019-02-22,Vanilla Single Scoop,50,3,150
2019-02-22,Vanilla Single Scoop,50,3,150
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Fig and Honey Double Scoop,90,4,360
2019-02-22,Vanilla Double Scoop,80,3,240
2019-02-22,Vanilla Double Scoop,80,1,80
2019-02-22,Butterscotch Single Scoop,60,3,180
2019-02-22,Cake Fudge,150,4,600
2019-02-22,Vanilla Double Scoop,80,4,320
2019-02-22,Vanilla Double Scoop,80,1,80
2019-02-22,Death by Chocolate,180,5,900
2019-02-22,Hot Chocolate Fudge,120,1,120
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Butterscotch Single Scoop,60,3,180
2019-02-22,Cafe Caramel,160,3,480
2019-02-22,Cafe Caramel,160,5,800
2019-02-22,Vanilla Double Scoop,80,5,400
2019-02-22,Vanilla Single Scoop,50,5,250
2019-02-22,Hot Chocolate Fudge,120,3,360
2019-02-22,Vanilla Double Scoop,80,1,80
2019-02-22,Cafe Caramel,160,4,640
2019-02-22,Almond Fudge,150,5,750
2019-02-22,Caramel Crunch Single Scoop,70,5,350
2019-02-22,Vanilla Single Scoop,50,3,150
2019-02-22,Vanilla Single Scoop,50,4,200
2019-02-22,Trilogy,160,3,480
2019-02-22,Cake Fudge,150,2,300
2019-02-22,Butterscotch Single Scoop,60,3,180
2019-02-22,Butterscotch Single Scoop,60,2,120
2019-02-22,Vanilla Single Scoop,50,2,100
2019-02-22,Vanilla Single Scoop,50,3,150
2019-02-22,Vanilla Double Scoop,80,3,240
2019-02-22,Vanilla Double Scoop,80,4,320
2019-02-22,Caramel Crunch Double Scoop,100,4,400
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Hot Chocolate Fudge,120,3,360
2019-02-22,Cake Fudge,150,2,300
2019-02-22,Cake Fudge,150,1,150
2019-02-22,Cake Fudge,150,4,600
2019-02-22,Death by Chocolate,180,4,720
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Death by Chocolate,180,2,360
2019-02-22,Vanilla Double Scoop,80,1,80
2019-02-22,Fig and Honey Single Scoop,60,2,120
2019-02-22,Death by Chocolate,180,2,360
2019-02-22,Cake Fudge,150,3,450
2019-02-22,Fig and Honey Single Scoop,60,1,60
2019-02-22,Caramel Crunch Double Scoop,100,4,400
2019-02-22,Hot Chocolate Fudge,120,1,120
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Death by Chocolate,180,1,180
2019-02-22,Vanilla Double Scoop,80,2,160
2019-02-22,Cake Fudge,150,5,750
2019-02-22,Vanilla Single Scoop,50,3,150
2019-02-22,Cake Fudge,150,4,600
2019-02-22,Vanilla Single Scoop,50,3,150
2019-02-22,Butterscotch Single Scoop,60,4,240
2019-02-22,Cafe Caramel,160,2,320
2019-02-22,Death by Chocolate,180,5,900
2019-02-22,Cake Fudge,150,2,300
2019-02-22,Butterscotch Single Scoop,60,5,300
2019-02-22,Butterscotch Single Scoop,60,5,300
2019-02-22,Vanilla Double Scoop,80,2,160
2019-02-22,Butterscotch Single Scoop,60,1,60
2019-02-22,Vanilla Double Scoop,80,5,400
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Butterscotch Double Scoop,90,3,270
2019-02-22,Butterscotch Single Scoop,60,1,60
2019-02-22,Vanilla Double Scoop,80,5,400
2019-02-22,Dry Fruit Single Scoop,60,4,240
2019-02-22,Hot Chocolate Fudge,120,1,120
2019-02-22,Vanilla Double Scoop,80,4,320
2019-02-22,Fig and Honey Double Scoop,90,5,450
2019-02-22,Chocolate Europa Double Scoop,100,4,400
2019-02-22,Vanilla Double Scoop,80,1,80
2019-02-22,Cafe Caramel,160,4,640
2019-02-22,Cafe Caramel,160,3,480
2019-02-22,Vanilla Double Scoop,80,1,80
2019-02-22,Almond Fudge,150,2,300
2019-02-22,Fig and Honey Double Scoop,90,4,360
2019-02-22,Butterscotch Single Scoop,60,5,300
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Dry Fruit Double Scoop,90,2,180
2019-02-22,Cake Fudge,150,3,450
2019-02-22,Vanilla Double Scoop,80,3,240
2019-02-22,Cake Fudge,150,5,750
2019-02-22,Cake Fudge,150,1,150
2019-02-22,Death by Chocolate,180,2,360
2019-02-22,Fig and Honey Single Scoop,60,3,180
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Cake Fudge,150,2,300
2019-02-22,Vanilla Double Scoop,80,4,320
2019-02-22,Almond Fudge,150,5,750
2019-02-22,Hot Chocolate Fudge,120,1,120
2019-02-22,Hot Chocolate Fudge,120,3,360
2019-02-22,Vanilla Single Scoop,50,4,200
2019-02-22,Death by Chocolate,180,4,720
2019-02-22,Vanilla Double Scoop,80,1,80
2019-02-22,Cafe Caramel,160,1,160
2019-02-22,Cafe Caramel,160,3,480
2019-02-22,Dry Fruit Double Scoop,90,1,90
2019-02-22,Butterscotch Single Scoop,60,4,240
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Pista Double Scoop,90,5,450
2019-02-22,Fig and Honey Single Scoop,60,1,60
2019-02-22,Cafe Caramel,160,3,480
2019-02-22,Hot Chocolate Fudge,120,4,480
2019-02-22,Cake Fudge,150,3,450
2019-02-22,Cake Fudge,150,2,300
2019-02-22,Hot Chocolate Fudge,120,2,240
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Vanilla Double Scoop,80,3,240
2019-02-22,Death by Chocolate,180,4,720
2019-02-22,Cake Fudge,150,4,600
2019-02-22,Cake Fudge,150,1,150
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-22,Vanilla Double Scoop,80,4,320
2019-02-22,Vanilla Double Scoop,80,4,320
2019-02-22,Cake Fudge,150,3,450
2019-02-22,Butterscotch Single Scoop,60,4,240
2019-02-22,Hot Chocolate Fudge,120,1,120
2019-02-22,Hot Chocolate Fudge,120,5,600
2019-02-23,Cafe Caramel,160,3,480
2019-02-23,Cake Fudge,150,5,750
2019-02-23,Fig and Honey Single Scoop,60,4,240
2019-02-23,Hot Chocolate Fudge,120,5,600
2019-02-23,Death by Chocolate,180,3,540
2019-02-23,Vanilla Single Scoop,50,1,50
2019-02-23,Cafe Caramel,160,3,480
2019-02-23,Cake Fudge,150,2,300
2019-02-23,Pista Single Scoop,60,5,300
2019-02-23,Dry Fruit Double Scoop,90,3,270
2019-02-23,Cake Fudge,150,3,450
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Fig and Honey Single Scoop,60,3,180
2019-02-23,Death by Chocolate,180,2,360
2019-02-23,Hot Chocolate Fudge,120,3,360
2019-02-23,Vanilla Double Scoop,80,4,320
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Butterscotch Single Scoop,60,1,60
2019-02-23,Vanilla Double Scoop,80,5,400
2019-02-23,Hot Chocolate Fudge,120,3,360
2019-02-23,Vanilla Single Scoop,50,5,250
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Butterscotch Single Scoop,60,2,120
2019-02-23,Hot Chocolate Fudge,120,2,240
2019-02-23,Vanilla Single Scoop,50,2,100
2019-02-23,Vanilla Single Scoop,50,4,200
2019-02-23,Vanilla Double Scoop,80,2,160
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Death by Chocolate,180,2,360
2019-02-23,Caramel Crunch Single Scoop,70,2,140
2019-02-23,Cafe Caramel,160,2,320
2019-02-23,Cake Fudge,150,5,750
2019-02-23,Hot Chocolate Fudge,120,3,360
2019-02-23,Hot Chocolate Fudge,120,2,240
2019-02-23,Chocolate Europa Double Scoop,100,1,100
2019-02-23,Hot Chocolate Fudge,120,1,120
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Cake Fudge,150,3,450
2019-02-23,Dry Fruit Double Scoop,90,4,360
2019-02-23,Death by Chocolate,180,5,900
2019-02-23,Chocolate Europa Double Scoop,100,4,400
2019-02-23,Butterscotch Single Scoop,60,1,60
2019-02-23,Vanilla Double Scoop,80,3,240
2019-02-23,Pista Single Scoop,60,4,240
2019-02-23,Cake Fudge,150,5,750
2019-02-23,Vanilla Single Scoop,50,5,250
2019-02-23,Vanilla Single Scoop,50,4,200
2019-02-23,Butterscotch Single Scoop,60,1,60
2019-02-23,Hot Chocolate Fudge,120,2,240
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Cake Fudge,150,4,600
2019-02-23,Death by Chocolate,180,5,900
2019-02-23,Hot Chocolate Fudge,120,5,600
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Butterscotch Single Scoop,60,1,60
2019-02-23,Death by Chocolate,180,5,900
2019-02-23,Butterscotch Single Scoop,60,1,60
2019-02-23,Butterscotch Single Scoop,60,2,120
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Chocolate Europa Single Scoop,70,5,350
2019-02-23,Butterscotch Single Scoop,60,1,60
2019-02-23,Death by Chocolate,180,1,180
2019-02-23,Vanilla Double Scoop,80,4,320
2019-02-23,Dry Fruit Double Scoop,90,3,270
2019-02-23,Vanilla Single Scoop,50,1,50
2019-02-23,Cake Fudge,150,5,750
2019-02-23,Vanilla Single Scoop,50,4,200
2019-02-23,Vanilla Double Scoop,80,2,160
2019-02-23,Death by Chocolate,180,5,900
2019-02-23,Butterscotch Single Scoop,60,3,180
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Vanilla Single Scoop,50,5,250
2019-02-23,Hot Chocolate Fudge,120,2,240
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Dry Fruit Double Scoop,90,1,90
2019-02-23,Pista Single Scoop,60,3,180
2019-02-23,Dry Fruit Double Scoop,90,3,270
2019-02-23,Pista Double Scoop,90,4,360
2019-02-23,Vanilla Double Scoop,80,2,160
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Vanilla Double Scoop,80,2,160
2019-02-23,Hot Chocolate Fudge,120,5,600
2019-02-23,Vanilla Double Scoop,80,4,320
2019-02-23,Pista Double Scoop,90,3,270
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Cake Fudge,150,5,750
2019-02-23,Butterscotch Double Scoop,90,4,360
2019-02-23,Butterscotch Single Scoop,60,4,240
2019-02-23,Pista Single Scoop,60,5,300
2019-02-23,Vanilla Single Scoop,50,2,100
2019-02-23,Butterscotch Double Scoop,90,4,360
2019-02-23,Hot Chocolate Fudge,120,5,600
2019-02-23,Cafe Caramel,160,5,800
2019-02-23,Cafe Caramel,160,4,640
2019-02-23,Death by Chocolate,180,2,360
2019-02-23,Vanilla Double Scoop,80,4,320
2019-02-23,Butterscotch Single Scoop,60,2,120
2019-02-23,Butterscotch Double Scoop,90,4,360
2019-02-23,Hot Chocolate Fudge,120,2,240
2019-02-23,Vanilla Double Scoop,80,5,400
2019-02-23,Vanilla Single Scoop,50,1,50
2019-02-23,Vanilla Double Scoop,80,2,160
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Butterscotch Single Scoop,60,3,180
2019-02-23,Hot Chocolate Fudge,120,5,600
2019-02-23,Vanilla Single Scoop,50,2,100
2019-02-23,Butterscotch Single Scoop,60,1,60
2019-02-23,Cake Fudge,150,2,300
2019-02-23,Pista Double Scoop,90,3,270
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Vanilla Double Scoop,80,5,400
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Death by Chocolate,180,1,180
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Caramel Crunch Double Scoop,100,2,200
2019-02-23,Pista Double Scoop,90,2,180
2019-02-23,Death by Chocolate,180,4,720
2019-02-23,Vanilla Double Scoop,80,4,320
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Vanilla Single Scoop,50,1,50
2019-02-23,Cake Fudge,150,5,750
2019-02-23,Fig and Honey Double Scoop,90,4,360
2019-02-23,Cake Fudge,150,1,150
2019-02-23,Cafe Caramel,160,4,640
2019-02-23,Death by Chocolate,180,1,180
2019-02-23,Chocolate Europa Single Scoop,70,4,280
2019-02-23,Death by Chocolate,180,1,180
2019-02-23,Hot Chocolate Fudge,120,2,240
2019-02-23,Fig and Honey Single Scoop,60,3,180
2019-02-23,Cafe Caramel,160,3,480
2019-02-23,Death by Chocolate,180,4,720
2019-02-23,Butterscotch Single Scoop,60,5,300
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Vanilla Single Scoop,50,5,250
2019-02-23,Cake Fudge,150,3,450
2019-02-23,Vanilla Single Scoop,50,2,100
2019-02-23,Hot Chocolate Fudge,120,2,240
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Butterscotch Single Scoop,60,2,120
2019-02-23,Vanilla Single Scoop,50,3,150
2019-02-23,Hot Chocolate Fudge,120,5,600
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Death by Chocolate,180,1,180
2019-02-23,Fig and Honey Single Scoop,60,4,240
2019-02-23,Butterscotch Single Scoop,60,4,240
2019-02-23,Pista Double Scoop,90,5,450
2019-02-23,Cake Fudge,150,2,300
2019-02-23,Hot Chocolate Fudge,120,3,360
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Hot Chocolate Fudge,120,1,120
2019-02-23,Vanilla Single Scoop,50,5,250
2019-02-23,Pista Double Scoop,90,3,270
2019-02-23,Butterscotch Single Scoop,60,2,120
2019-02-23,Vanilla Single Scoop,50,4,200
2019-02-23,Death by Chocolate,180,1,180
2019-02-23,Vanilla Single Scoop,50,3,150
2019-02-23,Vanilla Double Scoop,80,5,400
2019-02-23,Cake Fudge,150,5,750
2019-02-23,Cake Fudge,150,3,450
2019-02-23,Cake Fudge,150,2,300
2019-02-23,Death by Chocolate,180,3,540
2019-02-23,Chocolate Europa Double Scoop,100,3,300
2019-02-23,Caramel Crunch Single Scoop,70,5,350
2019-02-23,Vanilla Single Scoop,50,1,50
2019-02-23,Butterscotch Single Scoop,60,5,300
2019-02-23,Vanilla Double Scoop,80,3,240
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Vanilla Double Scoop,80,2,160
2019-02-23,Vanilla Double Scoop,80,3,240
2019-02-23,Vanilla Double Scoop,80,2,160
2019-02-23,Caramel Crunch Single Scoop,70,1,70
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Vanilla Double Scoop,80,5,400
2019-02-23,Hot Chocolate Fudge,120,3,360
2019-02-23,Vanilla Double Scoop,80,2,160
2019-02-23,Vanilla Double Scoop,80,1,80
2019-02-23,Hot Chocolate Fudge,120,1,120
2019-02-23,Hot Chocolate Fudge,120,1,120
2019-02-23,Cake Fudge,150,4,600
2019-02-23,Cake Fudge,150,3,450
2019-02-23,Cake Fudge,150,3,450
2019-02-23,Vanilla Single Scoop,50,3,150
2019-02-23,Chocolate Europa Double Scoop,100,5,500
2019-02-23,Butterscotch Single Scoop,60,1,60
2019-02-23,Hot Chocolate Fudge,120,3,360
2019-02-23,Vanilla Double Scoop,80,4,320
2019-02-23,Vanilla Single Scoop,50,1,50
2019-02-23,Dry Fruit Single Scoop,60,2,120
2019-02-23,Death by Chocolate,180,4,720
2019-02-23,Almond Fudge,150,2,300
2019-02-23,Cake Fudge,150,5,750
2019-02-23,Pista Single Scoop,60,3,180
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-23,Fig and Honey Single Scoop,60,2,120
2019-02-23,Fig and Honey Single Scoop,60,3,180
2019-02-23,Vanilla Double Scoop,80,5,400
2019-02-23,Vanilla Single Scoop,50,5,250
2019-02-23,Butterscotch Single Scoop,60,5,300
2019-02-23,Dry Fruit Single Scoop,60,2,120
2019-02-23,Almond Fudge,150,5,750
2019-02-23,Cake Fudge,150,4,600
2019-02-23,Hot Chocolate Fudge,120,3,360
2019-02-23,Cake Fudge,150,3,450
2019-02-23,Death by Chocolate,180,2,360
2019-02-23,Hot Chocolate Fudge,120,2,240
2019-02-23,Butterscotch Single Scoop,60,3,180
2019-02-23,Hot Chocolate Fudge,120,4,480
2019-02-24,Vanilla Single Scoop,50,4,200
2019-02-24,Cake Fudge,150,5,750
2019-02-24,Butterscotch Single Scoop,60,4,240
2019-02-24,Pista Single Scoop,60,2,120
2019-02-24,Cake Fudge,150,4,600
2019-02-24,Hot Chocolate Fudge,120,4,480
2019-02-24,Dew Drop Sundae,150,1,150
2019-02-24,Vanilla Single Scoop,50,2,100
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-24,Cafe Caramel,160,5,800
2019-02-24,Hot Chocolate Fudge,120,2,240
2019-02-24,Butterscotch Single Scoop,60,3,180
2019-02-24,Hot Chocolate Fudge,120,1,120
2019-02-24,Death by Chocolate,180,4,720
2019-02-24,Hot Chocolate Fudge,120,4,480
2019-02-24,Cake Fudge,150,4,600
2019-02-24,Vanilla Double Scoop,80,1,80
2019-02-24,Butterscotch Single Scoop,60,3,180
2019-02-24,Butterscotch Single Scoop,60,3,180
2019-02-24,Death by Chocolate,180,3,540
2019-02-24,Butterscotch Single Scoop,60,1,60
2019-02-24,Hot Chocolate Fudge,120,2,240
2019-02-24,Death by Chocolate,180,4,720
2019-02-24,Vanilla Double Scoop,80,4,320
2019-02-24,Vanilla Double Scoop,80,1,80
2019-02-24,Pista Single Scoop,60,5,300
2019-02-24,Butterscotch Single Scoop,60,4,240
2019-02-24,Death by Chocolate,180,4,720
2019-02-24,Death by Chocolate,180,3,540
2019-02-24,Hot Chocolate Fudge,120,5,600
2019-02-24,Hot Chocolate Fudge,120,5,600
2019-02-24,Butterscotch Single Scoop,60,4,240
2019-02-24,Vanilla Double Scoop,80,4,320
2019-02-24,Cafe Caramel,160,3,480
2019-02-24,Hot Chocolate Fudge,120,4,480
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Cake Fudge,150,4,600
2019-02-24,Cafe Caramel,160,3,480
2019-02-24,Vanilla Single Scoop,50,1,50
2019-02-24,Caramel Crunch Double Scoop,100,4,400
2019-02-24,Rocky Road Double Scoop,80,2,160
2019-02-24,Death by Chocolate,180,1,180
2019-02-24,Butterscotch Single Scoop,60,2,120
2019-02-24,Caramel Crunch Double Scoop,100,4,400
2019-02-24,Vanilla Double Scoop,80,4,320
2019-02-24,Cake Fudge,150,4,600
2019-02-24,Rocky Road Single Scoop,50,1,50
2019-02-24,Cake Fudge,150,1,150
2019-02-24,Death by Chocolate,180,1,180
2019-02-24,Pista Double Scoop,90,4,360
2019-02-24,Hot Chocolate Fudge,120,5,600
2019-02-24,Dry Fruit Double Scoop,90,1,90
2019-02-24,Death by Chocolate,180,3,540
2019-02-24,Cafe Caramel,160,1,160
2019-02-24,Cake Fudge,150,4,600
2019-02-24,Almond Fudge,150,1,150
2019-02-24,Death by Chocolate,180,2,360
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Hot Chocolate Fudge,120,4,480
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Death by Chocolate,180,5,900
2019-02-24,Hot Chocolate Fudge,120,5,600
2019-02-24,Death by Chocolate,180,1,180
2019-02-24,Vanilla Single Scoop,50,3,150
2019-02-24,Almond Fudge,150,1,150
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-24,Cake Fudge,150,2,300
2019-02-24,Death by Chocolate,180,1,180
2019-02-24,Vanilla Double Scoop,80,5,400
2019-02-24,Rocky Road Double Scoop,80,4,320
2019-02-24,Death by Chocolate,180,1,180
2019-02-24,Pista Single Scoop,60,4,240
2019-02-24,Vanilla Double Scoop,80,1,80
2019-02-24,Vanilla Double Scoop,80,3,240
2019-02-24,Cake Fudge,150,1,150
2019-02-24,Butterscotch Single Scoop,60,5,300
2019-02-24,Vanilla Double Scoop,80,1,80
2019-02-24,Death by Chocolate,180,2,360
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Vanilla Single Scoop,50,1,50
2019-02-24,Vanilla Double Scoop,80,3,240
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-24,Vanilla Double Scoop,80,3,240
2019-02-24,Vanilla Double Scoop,80,3,240
2019-02-24,Cake Fudge,150,1,150
2019-02-24,Cafe Caramel,160,4,640
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Vanilla Double Scoop,80,1,80
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Vanilla Single Scoop,50,3,150
2019-02-24,Hot Chocolate Fudge,120,2,240
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Cake Fudge,150,3,450
2019-02-24,Hot Chocolate Fudge,120,2,240
2019-02-24,Vanilla Single Scoop,50,5,250
2019-02-24,Death by Chocolate,180,1,180
2019-02-24,Butterscotch Single Scoop,60,2,120
2019-02-24,Death by Chocolate,180,2,360
2019-02-24,Vanilla Single Scoop,50,2,100
2019-02-24,Hot Chocolate Fudge,120,5,600
2019-02-24,Death by Chocolate,180,2,360
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-24,Vanilla Double Scoop,80,5,400
2019-02-24,Vanilla Double Scoop,80,1,80
2019-02-24,Cake Fudge,150,4,600
2019-02-24,Hot Chocolate Fudge,120,2,240
2019-02-24,Dry Fruit Single Scoop,60,1,60
2019-02-24,Hot Chocolate Fudge,120,5,600
2019-02-24,Hot Chocolate Fudge,120,2,240
2019-02-24,Hot Chocolate Fudge,120,5,600
2019-02-24,Hot Chocolate Fudge,120,4,480
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-24,Cake Fudge,150,4,600
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Vanilla Single Scoop,50,2,100
2019-02-24,Vanilla Double Scoop,80,5,400
2019-02-24,Caramel Crunch Double Scoop,100,4,400
2019-02-24,Vanilla Double Scoop,80,1,80
2019-02-24,Rocky Road Single Scoop,50,5,250
2019-02-24,Hot Chocolate Fudge,120,2,240
2019-02-24,Hot Chocolate Fudge,120,5,600
2019-02-24,Vanilla Single Scoop,50,5,250
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-24,Hot Chocolate Fudge,120,1,120
2019-02-24,Vanilla Single Scoop,50,1,50
2019-02-24,Banana Split,140,5,700
2019-02-24,Hot Chocolate Fudge,120,1,120
2019-02-24,Cake Fudge,150,4,600
2019-02-24,Hot Chocolate Fudge,120,1,120
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-24,Vanilla Double Scoop,80,5,400
2019-02-24,Butterscotch Single Scoop,60,2,120
2019-02-24,Cake Fudge,150,2,300
2019-02-24,Caramel Crunch Single Scoop,70,2,140
2019-02-24,Vanilla Double Scoop,80,4,320
2019-02-24,Rocky Road Single Scoop,50,1,50
2019-02-24,Pista Double Scoop,90,2,180
2019-02-24,Hot Chocolate Fudge,120,1,120
2019-02-24,Vanilla Double Scoop,80,1,80
2019-02-24,Cafe Caramel,160,1,160
2019-02-24,Cafe Caramel,160,1,160
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-24,Butterscotch Single Scoop,60,4,240
2019-02-24,Chocolate Europa Single Scoop,70,5,350
2019-02-24,Death by Chocolate,180,2,360
2019-02-24,Cake Fudge,150,1,150
2019-02-24,Vanilla Double Scoop,80,5,400
2019-02-24,Death by Chocolate,180,1,180
2019-02-24,Cafe Caramel,160,5,800
2019-02-24,Butterscotch Double Scoop,90,5,450
2019-02-24,Cafe Caramel,160,1,160
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Caramel Crunch Double Scoop,100,4,400
2019-02-24,Butterscotch Single Scoop,60,3,180
2019-02-24,Death by Chocolate,180,2,360
2019-02-24,Death by Chocolate,180,4,720
2019-02-24,Butterscotch Single Scoop,60,5,300
2019-02-24,Vanilla Double Scoop,80,5,400
2019-02-24,Hot Chocolate Fudge,120,4,480
2019-02-24,Cake Fudge,150,3,450
2019-02-24,Vanilla Single Scoop,50,2,100
2019-02-24,Trilogy,160,2,320
2019-02-24,Hot Chocolate Fudge,120,3,360
2019-02-24,Butterscotch Single Scoop,60,5,300
2019-02-24,Butterscotch Single Scoop,60,5,300
2019-02-24,Vanilla Double Scoop,80,2,160
2019-02-25,Vanilla Single Scoop,50,4,200
2019-02-25,Butterscotch Single Scoop,60,2,120
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Butterscotch Single Scoop,60,2,120
2019-02-25,Hot Chocolate Fudge,120,4,480
2019-02-25,Rocky Road Single Scoop,50,2,100
2019-02-25,Cake Fudge,150,5,750
2019-02-25,Vanilla Single Scoop,50,4,200
2019-02-25,Butterscotch Single Scoop,60,1,60
2019-02-25,Butterscotch Single Scoop,60,2,120
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Fig and Honey Double Scoop,90,3,270
2019-02-25,Pista Double Scoop,90,1,90
2019-02-25,Butterscotch Single Scoop,60,1,60
2019-02-25,Cake Fudge,150,5,750
2019-02-25,Cake Fudge,150,2,300
2019-02-25,Death by Chocolate,180,2,360
2019-02-25,Vanilla Double Scoop,80,4,320
2019-02-25,Butterscotch Single Scoop,60,4,240
2019-02-25,Vanilla Double Scoop,80,4,320
2019-02-25,Chocolate Europa Double Scoop,100,5,500
2019-02-25,Vanilla Double Scoop,80,2,160
2019-02-25,Vanilla Single Scoop,50,3,150
2019-02-25,Vanilla Double Scoop,80,1,80
2019-02-25,Vanilla Double Scoop,80,1,80
2019-02-25,Vanilla Double Scoop,80,4,320
2019-02-25,Butterscotch Single Scoop,60,4,240
2019-02-25,Vanilla Single Scoop,50,2,100
2019-02-25,Death by Chocolate,180,3,540
2019-02-25,Pista Double Scoop,90,4,360
2019-02-25,Butterscotch Single Scoop,60,5,300
2019-02-25,Butterscotch Single Scoop,60,1,60
2019-02-25,Hot Chocolate Fudge,120,1,120
2019-02-25,Hot Chocolate Fudge,120,2,240
2019-02-25,Death by Chocolate,180,1,180
2019-02-25,Vanilla Double Scoop,80,4,320
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Vanilla Single Scoop,50,1,50
2019-02-25,Vanilla Double Scoop,80,2,160
2019-02-25,Cake Fudge,150,3,450
2019-02-25,Hot Chocolate Fudge,120,1,120
2019-02-25,Cake Fudge,150,5,750
2019-02-25,Butterscotch Single Scoop,60,3,180
2019-02-25,Cake Fudge,150,1,150
2019-02-25,Vanilla Double Scoop,80,5,400
2019-02-25,Chocolate Europa Single Scoop,70,1,70
2019-02-25,Death by Chocolate,180,1,180
2019-02-25,Cake Fudge,150,4,600
2019-02-25,Pista Single Scoop,60,4,240
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Hot Chocolate Fudge,120,1,120
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Vanilla Double Scoop,80,4,320
2019-02-25,Dry Fruit Single Scoop,60,4,240
2019-02-25,Hot Chocolate Fudge,120,2,240
2019-02-25,Hot Chocolate Fudge,120,4,480
2019-02-25,Butterscotch Single Scoop,60,5,300
2019-02-25,Dry Fruit Double Scoop,90,5,450
2019-02-25,Hot Chocolate Fudge,120,2,240
2019-02-25,Butterscotch Single Scoop,60,4,240
2019-02-25,Cake Fudge,150,2,300
2019-02-25,Chocolate Europa Single Scoop,70,2,140
2019-02-25,Death by Chocolate,180,3,540
2019-02-25,Hot Chocolate Fudge,120,4,480
2019-02-25,Chocolate Europa Double Scoop,100,4,400
2019-02-25,Vanilla Single Scoop,50,4,200
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Hot Chocolate Fudge,120,1,120
2019-02-25,Death by Chocolate,180,4,720
2019-02-25,Vanilla Double Scoop,80,2,160
2019-02-25,Vanilla Double Scoop,80,3,240
2019-02-25,Vanilla Double Scoop,80,1,80
2019-02-25,Hot Chocolate Fudge,120,4,480
2019-02-25,Dry Fruit Double Scoop,90,5,450
2019-02-25,Cake Fudge,150,4,600
2019-02-25,Butterscotch Single Scoop,60,2,120
2019-02-25,Butterscotch Single Scoop,60,4,240
2019-02-25,Vanilla Double Scoop,80,4,320
2019-02-25,Cake Fudge,150,4,600
2019-02-25,Hot Chocolate Fudge,120,4,480
2019-02-25,Hot Chocolate Fudge,120,4,480
2019-02-25,Cake Fudge,150,1,150
2019-02-25,Vanilla Single Scoop,50,2,100
2019-02-25,Butterscotch Single Scoop,60,1,60
2019-02-25,Vanilla Single Scoop,50,2,100
2019-02-25,Cake Fudge,150,2,300
2019-02-25,Cake Fudge,150,1,150
2019-02-25,Rocky Road Double Scoop,80,1,80
2019-02-25,Cake Fudge,150,1,150
2019-02-25,Cafe Caramel,160,5,800
2019-02-25,Rocky Road Single Scoop,50,3,150
2019-02-25,Hot Chocolate Fudge,120,1,120
2019-02-25,Vanilla Single Scoop,50,2,100
2019-02-25,Vanilla Single Scoop,50,4,200
2019-02-25,Hot Chocolate Fudge,120,2,240
2019-02-25,Death by Chocolate,180,3,540
2019-02-25,Death by Chocolate,180,3,540
2019-02-25,Butterscotch Single Scoop,60,2,120
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Vanilla Single Scoop,50,2,100
2019-02-25,Butterscotch Single Scoop,60,5,300
2019-02-25,Cake Fudge,150,2,300
2019-02-25,Dry Fruit Double Scoop,90,4,360
2019-02-25,Hot Chocolate Fudge,120,2,240
2019-02-25,Cafe Caramel,160,3,480
2019-02-25,Hot Chocolate Fudge,120,1,120
2019-02-25,Hot Chocolate Fudge,120,3,360
2019-02-25,Vanilla Double Scoop,80,5,400
2019-02-25,Cake Fudge,150,2,300
2019-02-25,Butterscotch Single Scoop,60,1,60
2019-02-25,Butterscotch Single Scoop,60,5,300
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Butterscotch Single Scoop,60,1,60
2019-02-25,Caramel Crunch Single Scoop,70,2,140
2019-02-25,Hot Chocolate Fudge,120,5,600
2019-02-25,Rocky Road Single Scoop,50,1,50
2019-02-25,Almond Fudge,150,5,750
2019-02-25,Pista Double Scoop,90,5,450
2019-02-25,Butterscotch Single Scoop,60,1,60
2019-02-25,Cake Fudge,150,1,150
2019-02-25,Cafe Caramel,160,3,480
2019-02-25,Cake Fudge,150,1,150
2019-02-25,Death by Chocolate,180,3,540
2019-02-25,Cafe Caramel,160,3,480
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Banana Split,140,2,280
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Butterscotch Single Scoop,60,3,180
2019-02-26,Cafe Caramel,160,4,640
2019-02-26,Death by Chocolate,180,2,360
2019-02-26,Chocolate Europa Single Scoop,70,3,210
2019-02-26,Vanilla Single Scoop,50,2,100
2019-02-26,Vanilla Double Scoop,80,3,240
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Dry Fruit Single Scoop,60,3,180
2019-02-26,Vanilla Single Scoop,50,5,250
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Hot Chocolate Fudge,120,2,240
2019-02-26,Vanilla Single Scoop,50,3,150
2019-02-26,Banana Split,140,2,280
2019-02-26,Hot Chocolate Fudge,120,1,120
2019-02-26,Cafe Caramel,160,5,800
2019-02-26,Cake Fudge,150,5,750
2019-02-26,Rocky Road Double Scoop,80,3,240
2019-02-26,Fig and Honey Single Scoop,60,2,120
2019-02-26,Hot Chocolate Fudge,120,1,120
2019-02-26,Vanilla Single Scoop,50,2,100
2019-02-26,Cake Fudge,150,4,600
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Vanilla Single Scoop,50,4,200
2019-02-26,Hot Chocolate Fudge,120,3,360
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Vanilla Single Scoop,50,5,250
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Vanilla Double Scoop,80,2,160
2019-02-26,Cafe Caramel,160,3,480
2019-02-26,Death by Chocolate,180,4,720
2019-02-26,Death by Chocolate,180,3,540
2019-02-26,Vanilla Double Scoop,80,3,240
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Hot Chocolate Fudge,120,2,240
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Vanilla Single Scoop,50,5,250
2019-02-26,Hot Chocolate Fudge,120,3,360
2019-02-26,Vanilla Double Scoop,80,4,320
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Hot Chocolate Fudge,120,1,120
2019-02-26,Vanilla Single Scoop,50,4,200
2019-02-26,Vanilla Double Scoop,80,5,400
2019-02-26,Pista Single Scoop,60,1,60
2019-02-26,Vanilla Single Scoop,50,4,200
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Death by Chocolate,180,1,180
2019-02-26,Butterscotch Single Scoop,60,3,180
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Vanilla Single Scoop,50,3,150
2019-02-26,Death by Chocolate,180,2,360
2019-02-26,Vanilla Double Scoop,80,3,240
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Death by Chocolate,180,1,180
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Caramel Crunch Single Scoop,70,2,140
2019-02-26,Vanilla Double Scoop,80,2,160
2019-02-26,Cake Fudge,150,2,300
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Vanilla Double Scoop,80,5,400
2019-02-26,Caramel Crunch Single Scoop,70,5,350
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Vanilla Double Scoop,80,3,240
2019-02-26,Cafe Caramel,160,2,320
2019-02-26,Butterscotch Double Scoop,90,5,450
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Butterscotch Single Scoop,60,2,120
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Cafe Caramel,160,2,320
2019-02-26,Cake Fudge,150,2,300
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Vanilla Double Scoop,80,2,160
2019-02-26,Vanilla Double Scoop,80,4,320
2019-02-26,Vanilla Double Scoop,80,4,320
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Chocolate Europa Double Scoop,100,5,500
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Vanilla Double Scoop,80,4,320
2019-02-26,Fig and Honey Single Scoop,60,3,180
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Cake Fudge,150,2,300
2019-02-26,Death by Chocolate,180,1,180
2019-02-26,Cake Fudge,150,2,300
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Cake Fudge,150,5,750
2019-02-26,Cake Fudge,150,1,150
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Death by Chocolate,180,2,360
2019-02-26,Cake Fudge,150,5,750
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Vanilla Single Scoop,50,1,50
2019-02-26,Mint Fudge,120,5,600
2019-02-26,Cake Fudge,150,5,750
2019-02-26,Hot Chocolate Fudge,120,3,360
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Vanilla Double Scoop,80,1,80
2019-02-26,Vanilla Double Scoop,80,1,80
2019-02-26,Vanilla Single Scoop,50,5,250
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Vanilla Double Scoop,80,4,320
2019-02-26,Hot Chocolate Fudge,120,5,600
2019-02-26,Vanilla Double Scoop,80,3,240
2019-02-26,Hot Chocolate Fudge,120,1,120
2019-02-26,Vanilla Double Scoop,80,4,320
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Dry Fruit Single Scoop,60,3,180
2019-02-26,Hot Chocolate Fudge,120,1,120
2019-02-26,Death by Chocolate,180,5,900
2019-02-26,Vanilla Double Scoop,80,3,240
2019-02-26,Vanilla Double Scoop,80,3,240
2019-02-26,Cake Fudge,150,4,600
2019-02-26,Vanilla Single Scoop,50,3,150
2019-02-26,Butterscotch Single Scoop,60,5,300
2019-02-26,Death by Chocolate,180,1,180
2019-02-26,Hot Chocolate Fudge,120,1,120
2019-02-26,Vanilla Single Scoop,50,4,200
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Fig and Honey Single Scoop,60,3,180
2019-02-26,Death by Chocolate,180,3,540
2019-02-26,Pista Single Scoop,60,5,300
2019-02-26,Cake Fudge,150,4,600
2019-02-26,Hot Chocolate Fudge,120,1,120
2019-02-26,Dry Fruit Double Scoop,90,1,90
2019-02-26,Pista Single Scoop,60,4,240
2019-02-26,Vanilla Double Scoop,80,2,160
2019-02-26,Cake Fudge,150,3,450
2019-02-26,Hot Chocolate Fudge,120,3,360
2019-02-26,Vanilla Double Scoop,80,5,400
2019-02-26,Cake Fudge,150,5,750
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Cake Fudge,150,2,300
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Cafe Caramel,160,3,480
2019-02-26,Butterscotch Single Scoop,60,2,120
2019-02-26,Death by Chocolate,180,2,360
2019-02-26,Hot Chocolate Fudge,120,2,240
2019-02-26,Death by Chocolate,180,5,900
2019-02-26,Hot Chocolate Fudge,120,4,480
2019-02-26,Cake Fudge,150,5,750
2019-02-26,Vanilla Double Scoop,80,3,240
2019-02-26,Death by Chocolate,180,2,360
2019-02-26,Cake Fudge,150,2,300
2019-02-26,Hot Chocolate Fudge,120,2,240
2019-02-26,Cafe Caramel,160,5,800
2019-02-26,Vanilla Double Scoop,80,4,320
2019-02-26,Pista Double Scoop,90,3,270
2019-02-26,Cafe Caramel,160,5,800
2019-02-27,Cake Fudge,150,3,450
2019-02-27,Vanilla Single Scoop,50,4,200
2019-02-27,Cake Fudge,150,1,150
2019-02-27,Cake Fudge,150,4,600
2019-02-27,Death by Chocolate,180,3,540
2019-02-27,Vanilla Double Scoop,80,3,240
2019-02-27,Butterscotch Single Scoop,60,2,120
2019-02-27,Chocolate Europa Double Scoop,100,5,500
2019-02-27,Chocolate Europa Single Scoop,70,5,350
2019-02-27,Butterscotch Double Scoop,90,3,270
2019-02-27,Cafe Caramel,160,2,320
2019-02-27,Vanilla Single Scoop,50,3,150
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Hot Chocolate Fudge,120,3,360
2019-02-27,Butterscotch Single Scoop,60,5,300
2019-02-27,Death by Chocolate,180,1,180
2019-02-27,Cafe Caramel,160,4,640
2019-02-27,Butterscotch Single Scoop,60,2,120
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Cafe Caramel,160,3,480
2019-02-27,Cake Fudge,150,5,750
2019-02-27,Trilogy,160,4,640
2019-02-27,Butterscotch Single Scoop,60,5,300
2019-02-27,Vanilla Double Scoop,80,5,400
2019-02-27,Vanilla Double Scoop,80,5,400
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Cafe Caramel,160,2,320
2019-02-27,Hot Chocolate Fudge,120,3,360
2019-02-27,Dry Fruit Single Scoop,60,5,300
2019-02-27,Rocky Road Single Scoop,50,3,150
2019-02-27,Cake Fudge,150,5,750
2019-02-27,Vanilla Double Scoop,80,2,160
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Butterscotch Double Scoop,90,1,90
2019-02-27,Caramel Crunch Single Scoop,70,4,280
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Butterscotch Single Scoop,60,1,60
2019-02-27,Cake Fudge,150,5,750
2019-02-27,Butterscotch Single Scoop,60,4,240
2019-02-27,Butterscotch Single Scoop,60,5,300
2019-02-27,Cafe Caramel,160,4,640
2019-02-27,Death by Chocolate,180,1,180
2019-02-27,Pista Double Scoop,90,4,360
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Vanilla Single Scoop,50,4,200
2019-02-27,Vanilla Single Scoop,50,5,250
2019-02-27,Cake Fudge,150,1,150
2019-02-27,Death by Chocolate,180,4,720
2019-02-27,Caramel Crunch Single Scoop,70,5,350
2019-02-27,Fig and Honey Double Scoop,90,5,450
2019-02-27,Hot Chocolate Fudge,120,2,240
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Hot Chocolate Fudge,120,2,240
2019-02-27,Cake Fudge,150,4,600
2019-02-27,Vanilla Single Scoop,50,1,50
2019-02-27,Death by Chocolate,180,3,540
2019-02-27,Cake Fudge,150,1,150
2019-02-27,Cake Fudge,150,5,750
2019-02-27,Vanilla Double Scoop,80,2,160
2019-02-27,Vanilla Single Scoop,50,5,250
2019-02-27,Vanilla Double Scoop,80,4,320
2019-02-27,Vanilla Double Scoop,80,3,240
2019-02-27,Cake Fudge,150,1,150
2019-02-27,Dew Drop Sundae,150,5,750
2019-02-27,Vanilla Double Scoop,80,3,240
2019-02-27,Vanilla Double Scoop,80,4,320
2019-02-27,Death by Chocolate,180,4,720
2019-02-27,Death by Chocolate,180,1,180
2019-02-27,Cafe Caramel,160,1,160
2019-02-27,Hot Chocolate Fudge,120,2,240
2019-02-27,Cake Fudge,150,2,300
2019-02-27,Butterscotch Single Scoop,60,5,300
2019-02-27,Vanilla Single Scoop,50,2,100
2019-02-27,Cake Fudge,150,3,450
2019-02-27,Caramel Crunch Single Scoop,70,1,70
2019-02-27,Vanilla Double Scoop,80,3,240
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Vanilla Double Scoop,80,4,320
2019-02-27,Chocolate Europa Single Scoop,70,1,70
2019-02-27,Cake Fudge,150,1,150
2019-02-27,Butterscotch Single Scoop,60,3,180
2019-02-27,Vanilla Double Scoop,80,5,400
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Death by Chocolate,180,3,540
2019-02-27,Death by Chocolate,180,2,360
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Cake Fudge,150,1,150
2019-02-27,Cake Fudge,150,1,150
2019-02-27,Death by Chocolate,180,1,180
2019-02-27,Butterscotch Single Scoop,60,1,60
2019-02-27,Cake Fudge,150,3,450
2019-02-27,Hot Chocolate Fudge,120,2,240
2019-02-27,Cake Fudge,150,5,750
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Death by Chocolate,180,2,360
2019-02-27,Hot Chocolate Fudge,120,2,240
2019-02-27,Vanilla Single Scoop,50,4,200
2019-02-27,Fig and Honey Single Scoop,60,1,60
2019-02-27,Butterscotch Double Scoop,90,5,450
2019-02-27,Vanilla Double Scoop,80,4,320
2019-02-27,Butterscotch Single Scoop,60,5,300
2019-02-27,Hot Chocolate Fudge,120,3,360
2019-02-27,Vanilla Single Scoop,50,3,150
2019-02-27,Vanilla Double Scoop,80,3,240
2019-02-27,Vanilla Single Scoop,50,5,250
2019-02-27,Cake Fudge,150,2,300
2019-02-27,Butterscotch Single Scoop,60,5,300
2019-02-27,Cake Fudge,150,1,150
2019-02-27,Cake Fudge,150,3,450
2019-02-27,Vanilla Double Scoop,80,5,400
2019-02-27,Butterscotch Single Scoop,60,3,180
2019-02-27,Vanilla Double Scoop,80,1,80
2019-02-27,Vanilla Single Scoop,50,1,50
2019-02-27,Butterscotch Single Scoop,60,3,180
2019-02-27,Death by Chocolate,180,4,720
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Vanilla Single Scoop,50,1,50
2019-02-27,Butterscotch Single Scoop,60,2,120
2019-02-27,Vanilla Single Scoop,50,5,250
2019-02-27,Vanilla Single Scoop,50,2,100
2019-02-27,Vanilla Double Scoop,80,5,400
2019-02-27,Vanilla Double Scoop,80,2,160
2019-02-27,Chocolate Europa Single Scoop,70,1,70
2019-02-27,Rocky Road Double Scoop,80,4,320
2019-02-27,Vanilla Single Scoop,50,5,250
2019-02-27,Cafe Caramel,160,5,800
2019-02-27,Hot Chocolate Fudge,120,4,480
2019-02-27,Hot Chocolate Fudge,120,5,600
2019-02-27,Vanilla Single Scoop,50,1,50
2019-02-28,Hot Chocolate Fudge,120,4,480
2019-02-28,Vanilla Double Scoop,80,1,80
2019-02-28,Vanilla Double Scoop,80,3,240
2019-02-28,Butterscotch Single Scoop,60,3,180
2019-02-28,Death by Chocolate,180,5,900
2019-02-28,Cake Fudge,150,4,600
2019-02-28,Hot Chocolate Fudge,120,1,120
2019-02-28,Chocolate Europa Single Scoop,70,4,280
2019-02-28,Caramel Crunch Single Scoop,70,2,140
2019-02-28,Cake Fudge,150,3,450
2019-02-28,Hot Chocolate Fudge,120,5,600
2019-02-28,Death by Chocolate,180,5,900
2019-02-28,Rocky Road Single Scoop,50,2,100
2019-02-28,Hot Chocolate Fudge,120,5,600
2019-02-28,Death by Chocolate,180,2,360
2019-02-28,Vanilla Single Scoop,50,2,100
2019-02-28,Cake Fudge,150,3,450
2019-02-28,Mint Fudge,120,2,240
2019-02-28,Vanilla Single Scoop,50,4,200
2019-02-28,Vanilla Double Scoop,80,1,80
2019-02-28,Cake Fudge,150,1,150
2019-02-28,Death by Chocolate,180,4,720
2019-02-28,Vanilla Single Scoop,50,4,200
2019-02-28,Dry Fruit Double Scoop,90,3,270
2019-02-28,Cafe Caramel,160,3,480
2019-02-28,Vanilla Double Scoop,80,4,320
2019-02-28,Vanilla Single Scoop,50,1,50
2019-02-28,Butterscotch Single Scoop,60,5,300
2019-02-28,Vanilla Double Scoop,80,5,400
2019-02-28,Cake Fudge,150,4,600
2019-02-28,Vanilla Single Scoop,50,4,200
2019-02-28,Vanilla Single Scoop,50,1,50
2019-02-28,Vanilla Single Scoop,50,1,50
2019-02-28,Vanilla Single Scoop,50,3,150
2019-02-28,Cafe Caramel,160,2,320
2019-02-28,Death by Chocolate,180,2,360
2019-02-28,Hot Chocolate Fudge,120,5,600
2019-02-28,Death by Chocolate,180,4,720
2019-02-28,Chocolate Europa Single Scoop,70,5,350
2019-02-28,Cafe Caramel,160,4,640
2019-02-28,Cafe Caramel,160,1,160
2019-02-28,Hot Chocolate Fudge,120,2,240
2019-02-28,Vanilla Double Scoop,80,5,400
2019-02-28,Vanilla Double Scoop,80,3,240
2019-02-28,Rocky Road Single Scoop,50,5,250
2019-02-28,Cake Fudge,150,3,450
2019-02-28,Vanilla Double Scoop,80,3,240
2019-02-28,Butterscotch Single Scoop,60,1,60
2019-02-28,Cake Fudge,150,4,600
2019-02-28,Butterscotch Double Scoop,90,2,180
2019-02-28,Butterscotch Single Scoop,60,5,300
2019-02-28,Cake Fudge,150,2,300
2019-02-28,Hot Chocolate Fudge,120,2,240
2019-02-28,Hot Chocolate Fudge,120,2,240
2019-02-28,Fig and Honey Double Scoop,90,4,360
2019-02-28,Cake Fudge,150,5,750
2019-02-28,Cake Fudge,150,5,750
2019-02-28,Cafe Caramel,160,1,160
2019-02-28,Vanilla Double Scoop,80,2,160
2019-02-28,Vanilla Single Scoop,50,3,150
2019-02-28,Vanilla Double Scoop,80,1,80
2019-02-28,Cake Fudge,150,1,150
2019-02-28,Hot Chocolate Fudge,120,2,240
2019-02-28,Hot Chocolate Fudge,120,3,360
2019-02-28,Butterscotch Single Scoop,60,4,240
2019-02-28,Death by Chocolate,180,4,720
2019-02-28,Hot Chocolate Fudge,120,3,360
2019-02-28,Death by Chocolate,180,5,900
2019-02-28,Cake Fudge,150,5,750
2019-02-28,Butterscotch Single Scoop,60,2,120
2019-02-28,Butterscotch Single Scoop,60,3,180
2019-02-28,Rocky Road Single Scoop,50,4,200
2019-02-28,Death by Chocolate,180,3,540
2019-02-28,Vanilla Double Scoop,80,5,400
2019-02-28,Death by Chocolate,180,5,900
2019-02-28,Vanilla Double Scoop,80,2,160
2019-02-28,Cake Fudge,150,4,600
2019-02-28,Cake Fudge,150,5,750
2019-02-28,Vanilla Single Scoop,50,3,150
2019-02-28,Vanilla Single Scoop,50,3,150
2019-02-28,Hot Chocolate Fudge,120,4,480
2019-02-28,Vanilla Double Scoop,80,5,400
2019-02-28,Vanilla Single Scoop,50,5,250
2019-02-28,Death by Chocolate,180,1,180
2019-02-28,Death by Chocolate,180,4,720
2019-02-28,Pista Single Scoop,60,3,180
2019-02-28,Pista Double Scoop,90,5,450
2019-02-28,Hot Chocolate Fudge,120,2,240
2019-02-28,Butterscotch Single Scoop,60,4,240
2019-02-28,Death by Chocolate,180,3,540
2019-02-28,Hot Chocolate Fudge,120,5,600
2019-02-28,Butterscotch Single Scoop,60,1,60
2019-02-28,Hot Chocolate Fudge,120,4,480
2019-02-28,Vanilla Single Scoop,50,5,250
2019-02-28,Cake Fudge,150,1,150
2019-02-28,Butterscotch Single Scoop,60,1,60
2019-02-28,Cake Fudge,150,5,750
2019-02-28,Hot Chocolate Fudge,120,5,600
2019-02-28,Cake Fudge,150,1,150
2019-02-28,Hot Chocolate Fudge,120,3,360
2019-02-28,Death by Chocolate,180,3,540
2019-02-28,Chocolate Europa Single Scoop,70,2,140
2019-02-28,Chocolate Europa Double Scoop,100,2,200
2019-02-28,Dry Fruit Double Scoop,90,3,270
2019-02-28,Vanilla Single Scoop,50,3,150
2019-02-28,Hot Chocolate Fudge,120,3,360
2019-02-28,Pista Single Scoop,60,5,300
2019-02-28,Vanilla Double Scoop,80,4,320
2019-02-28,Death by Chocolate,180,3,540
2019-02-28,Dry Fruit Double Scoop,90,4,360
2019-02-28,Death by Chocolate,180,2,360
2019-02-28,Dry Fruit Single Scoop,60,1,60
2019-02-28,Death by Chocolate,180,4,720
2019-02-28,Chocolate Europa Single Scoop,70,2,140
2019-02-28,Cafe Caramel,160,2,320
2019-02-28,Butterscotch Single Scoop,60,3,180
2019-02-28,Fig and Honey Double Scoop,90,5,450
2019-02-28,Cake Fudge,150,5,750
2019-02-28,Cafe Caramel,160,2,320
2019-02-28,Cake Fudge,150,4,600
2019-02-28,Dry Fruit Single Scoop,60,5,300
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Pista Double Scoop,90,5,450
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Death by Chocolate,180,5,900
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Vanilla Single Scoop,50,5,250
2019-03-01,Dry Fruit Double Scoop,90,4,360
2019-03-01,Vanilla Double Scoop,80,3,240
2019-03-01,Death by Chocolate,180,3,540
2019-03-01,Vanilla Single Scoop,50,2,100
2019-03-01,Vanilla Single Scoop,50,2,100
2019-03-01,Cake Fudge,150,3,450
2019-03-01,Vanilla Single Scoop,50,2,100
2019-03-01,Death by Chocolate,180,1,180
2019-03-01,Chocolate Europa Double Scoop,100,5,500
2019-03-01,Vanilla Single Scoop,50,1,50
2019-03-01,Death by Chocolate,180,4,720
2019-03-01,Vanilla Single Scoop,50,2,100
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Vanilla Double Scoop,80,1,80
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Death by Chocolate,180,5,900
2019-03-01,Fig and Honey Single Scoop,60,1,60
2019-03-01,Death by Chocolate,180,2,360
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Butterscotch Single Scoop,60,4,240
2019-03-01,Vanilla Single Scoop,50,1,50
2019-03-01,Butterscotch Single Scoop,60,2,120
2019-03-01,Chocolate Europa Double Scoop,100,3,300
2019-03-01,Hot Chocolate Fudge,120,5,600
2019-03-01,Butterscotch Single Scoop,60,2,120
2019-03-01,Cake Fudge,150,4,600
2019-03-01,Vanilla Single Scoop,50,2,100
2019-03-01,Chocolate Europa Double Scoop,100,2,200
2019-03-01,Vanilla Single Scoop,50,5,250
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Hot Chocolate Fudge,120,5,600
2019-03-01,Butterscotch Single Scoop,60,1,60
2019-03-01,Cake Fudge,150,4,600
2019-03-01,Butterscotch Single Scoop,60,4,240
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Cafe Caramel,160,4,640
2019-03-01,Butterscotch Single Scoop,60,4,240
2019-03-01,Death by Chocolate,180,1,180
2019-03-01,Butterscotch Single Scoop,60,3,180
2019-03-01,Hot Chocolate Fudge,120,1,120
2019-03-01,Death by Chocolate,180,4,720
2019-03-01,Vanilla Double Scoop,80,1,80
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Cake Fudge,150,5,750
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Butterscotch Single Scoop,60,2,120
2019-03-01,Cake Fudge,150,3,450
2019-03-01,Butterscotch Single Scoop,60,2,120
2019-03-01,Caramel Crunch Double Scoop,100,3,300
2019-03-01,Hot Chocolate Fudge,120,1,120
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Butterscotch Double Scoop,90,1,90
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Cake Fudge,150,2,300
2019-03-01,Butterscotch Single Scoop,60,2,120
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Hot Chocolate Fudge,120,5,600
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Hot Chocolate Fudge,120,1,120
2019-03-01,Vanilla Double Scoop,80,3,240
2019-03-01,Vanilla Double Scoop,80,3,240
2019-03-01,Butterscotch Single Scoop,60,4,240
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Fig and Honey Double Scoop,90,5,450
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Vanilla Double Scoop,80,1,80
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Mint Fudge,120,1,120
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Vanilla Double Scoop,80,3,240
2019-03-01,Vanilla Single Scoop,50,4,200
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Vanilla Single Scoop,50,1,50
2019-03-01,Dry Fruit Single Scoop,60,4,240
2019-03-01,Caramel Crunch Double Scoop,100,5,500
2019-03-01,Death by Chocolate,180,1,180
2019-03-01,Cake Fudge,150,2,300
2019-03-01,Butterscotch Single Scoop,60,5,300
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Vanilla Double Scoop,80,3,240
2019-03-01,Butterscotch Single Scoop,60,2,120
2019-03-01,Death by Chocolate,180,3,540
2019-03-01,Hot Chocolate Fudge,120,1,120
2019-03-01,Vanilla Single Scoop,50,1,50
2019-03-01,Butterscotch Double Scoop,90,3,270
2019-03-01,Fig and Honey Double Scoop,90,1,90
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Pista Double Scoop,90,4,360
2019-03-01,Death by Chocolate,180,5,900
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Banana Split,140,1,140
2019-03-01,Cafe Caramel,160,1,160
2019-03-01,Vanilla Single Scoop,50,1,50
2019-03-01,Caramel Crunch Double Scoop,100,3,300
2019-03-01,Vanilla Single Scoop,50,2,100
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Dry Fruit Double Scoop,90,3,270
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Butterscotch Single Scoop,60,4,240
2019-03-01,Cake Fudge,150,3,450
2019-03-01,Vanilla Single Scoop,50,3,150
2019-03-01,Vanilla Double Scoop,80,3,240
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Vanilla Single Scoop,50,1,50
2019-03-01,Fig and Honey Double Scoop,90,3,270
2019-03-01,Vanilla Single Scoop,50,3,150
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Death by Chocolate,180,5,900
2019-03-01,Vanilla Double Scoop,80,4,320
2019-03-01,Caramel Crunch Double Scoop,100,1,100
2019-03-01,Hot Chocolate Fudge,120,1,120
2019-03-01,Trilogy,160,3,480
2019-03-01,Cake Fudge,150,2,300
2019-03-01,Chocolate Europa Single Scoop,70,2,140
2019-03-01,Butterscotch Single Scoop,60,4,240
2019-03-01,Vanilla Single Scoop,50,4,200
2019-03-01,Fig and Honey Double Scoop,90,1,90
2019-03-01,Hot Chocolate Fudge,120,5,600
2019-03-01,Death by Chocolate,180,3,540
2019-03-01,Hot Chocolate Fudge,120,5,600
2019-03-01,Vanilla Double Scoop,80,2,160
2019-03-01,Death by Chocolate,180,2,360
2019-03-01,Vanilla Single Scoop,50,4,200
2019-03-01,Chocolate Europa Double Scoop,100,4,400
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Vanilla Single Scoop,50,3,150
2019-03-01,Vanilla Single Scoop,50,2,100
2019-03-01,Butterscotch Single Scoop,60,1,60
2019-03-01,Hot Chocolate Fudge,120,1,120
2019-03-01,Death by Chocolate,180,3,540
2019-03-01,Butterscotch Single Scoop,60,3,180
2019-03-01,Cafe Caramel,160,3,480
2019-03-01,Butterscotch Single Scoop,60,2,120
2019-03-01,Dry Fruit Double Scoop,90,4,360
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Vanilla Double Scoop,80,5,400
2019-03-01,Dry Fruit Single Scoop,60,4,240
2019-03-01,Cake Fudge,150,2,300
2019-03-01,Cake Fudge,150,4,600
2019-03-01,Vanilla Double Scoop,80,1,80
2019-03-01,Cake Fudge,150,3,450
2019-03-01,Cafe Caramel,160,3,480
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Cafe Caramel,160,1,160
2019-03-01,Vanilla Double Scoop,80,2,160
2019-03-01,Cake Fudge,150,2,300
2019-03-01,Vanilla Single Scoop,50,5,250
2019-03-01,Butterscotch Single Scoop,60,5,300
2019-03-01,Vanilla Single Scoop,50,4,200
2019-03-01,Cafe Caramel,160,3,480
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Cafe Caramel,160,1,160
2019-03-01,Vanilla Double Scoop,80,1,80
2019-03-01,Vanilla Double Scoop,80,3,240
2019-03-01,Cake Fudge,150,3,450
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Hot Chocolate Fudge,120,1,120
2019-03-01,Death by Chocolate,180,3,540
2019-03-01,Vanilla Double Scoop,80,5,400
2019-03-01,Butterscotch Single Scoop,60,5,300
2019-03-01,Cake Fudge,150,4,600
2019-03-01,Banana Split,140,2,280
2019-03-01,Cake Fudge,150,4,600
2019-03-01,Butterscotch Single Scoop,60,5,300
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Caramel Crunch Double Scoop,100,1,100
2019-03-01,Cafe Caramel,160,3,480
2019-03-01,Vanilla Double Scoop,80,5,400
2019-03-01,Death by Chocolate,180,5,900
2019-03-01,Vanilla Single Scoop,50,4,200
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Death by Chocolate,180,4,720
2019-03-01,Cafe Caramel,160,5,800
2019-03-01,Dry Fruit Single Scoop,60,5,300
2019-03-01,Pista Single Scoop,60,3,180
2019-03-01,Cake Fudge,150,4,600
2019-03-01,Cake Fudge,150,1,150
2019-03-01,Cake Fudge,150,5,750
2019-03-01,Cafe Caramel,160,2,320
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Dew Drop Sundae,150,2,300
2019-03-01,Cafe Caramel,160,1,160
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-02,Hot Chocolate Fudge,120,3,360
2019-03-02,Death by Chocolate,180,1,180
2019-03-02,Death by Chocolate,180,2,360
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Cafe Caramel,160,3,480
2019-03-02,Vanilla Double Scoop,80,2,160
2019-03-02,Dry Fruit Single Scoop,60,3,180
2019-03-02,Vanilla Double Scoop,80,1,80
2019-03-02,Death by Chocolate,180,1,180
2019-03-02,Rocky Road Single Scoop,50,2,100
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Caramel Crunch Double Scoop,100,2,200
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Butterscotch Single Scoop,60,4,240
2019-03-02,Cake Fudge,150,4,600
2019-03-02,Dry Fruit Double Scoop,90,5,450
2019-03-02,Trilogy,160,5,800
2019-03-02,Butterscotch Single Scoop,60,3,180
2019-03-02,Cake Fudge,150,3,450
2019-03-02,Death by Chocolate,180,1,180
2019-03-02,Death by Chocolate,180,2,360
2019-03-02,Vanilla Single Scoop,50,3,150
2019-03-02,Butterscotch Single Scoop,60,4,240
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Chocolate Europa Single Scoop,70,5,350
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Butterscotch Single Scoop,60,3,180
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Cake Fudge,150,3,450
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Vanilla Double Scoop,80,2,160
2019-03-02,Death by Chocolate,180,2,360
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Vanilla Double Scoop,80,4,320
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Cake Fudge,150,3,450
2019-03-02,Death by Chocolate,180,2,360
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Vanilla Double Scoop,80,1,80
2019-03-02,Butterscotch Single Scoop,60,4,240
2019-03-02,Chocolate Europa Double Scoop,100,4,400
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Hot Chocolate Fudge,120,5,600
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Banana Split,140,3,420
2019-03-02,Fig and Honey Double Scoop,90,2,180
2019-03-02,Caramel Crunch Double Scoop,100,2,200
2019-03-02,Cafe Caramel,160,5,800
2019-03-02,Death by Chocolate,180,5,900
2019-03-02,Butterscotch Single Scoop,60,4,240
2019-03-02,Vanilla Single Scoop,50,3,150
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Vanilla Single Scoop,50,2,100
2019-03-02,Vanilla Double Scoop,80,1,80
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Butterscotch Single Scoop,60,1,60
2019-03-02,Cake Fudge,150,3,450
2019-03-02,Cafe Caramel,160,3,480
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Hot Chocolate Fudge,120,5,600
2019-03-02,Caramel Crunch Single Scoop,70,4,280
2019-03-02,Chocolate Europa Single Scoop,70,4,280
2019-03-02,Vanilla Double Scoop,80,1,80
2019-03-02,Death by Chocolate,180,5,900
2019-03-02,Cake Fudge,150,5,750
2019-03-02,Vanilla Double Scoop,80,4,320
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Vanilla Double Scoop,80,2,160
2019-03-02,Vanilla Double Scoop,80,2,160
2019-03-02,Hot Chocolate Fudge,120,5,600
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Vanilla Double Scoop,80,1,80
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Banana Split,140,1,140
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Pista Single Scoop,60,3,180
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Cafe Caramel,160,3,480
2019-03-02,Vanilla Double Scoop,80,5,400
2019-03-02,Chocolate Europa Double Scoop,100,3,300
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Death by Chocolate,180,5,900
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Chocolate Europa Double Scoop,100,1,100
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Vanilla Double Scoop,80,5,400
2019-03-02,Butterscotch Single Scoop,60,5,300
2019-03-02,Chocolate Europa Single Scoop,70,1,70
2019-03-02,Vanilla Single Scoop,50,2,100
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Butterscotch Single Scoop,60,1,60
2019-03-02,Hot Chocolate Fudge,120,5,600
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Vanilla Double Scoop,80,5,400
2019-03-02,Vanilla Single Scoop,50,1,50
2019-03-02,Vanilla Double Scoop,80,4,320
2019-03-02,Butterscotch Single Scoop,60,4,240
2019-03-02,Butterscotch Single Scoop,60,4,240
2019-03-02,Vanilla Double Scoop,80,5,400
2019-03-02,Cafe Caramel,160,4,640
2019-03-02,Butterscotch Single Scoop,60,5,300
2019-03-02,Butterscotch Single Scoop,60,1,60
2019-03-02,Death by Chocolate,180,5,900
2019-03-02,Chocolate Europa Double Scoop,100,2,200
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Chocolate Europa Double Scoop,100,5,500
2019-03-02,Butterscotch Single Scoop,60,3,180
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Vanilla Double Scoop,80,4,320
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Cafe Caramel,160,4,640
2019-03-02,Fig and Honey Single Scoop,60,1,60
2019-03-02,Butterscotch Single Scoop,60,4,240
2019-03-02,Caramel Crunch Double Scoop,100,4,400
2019-03-02,Hot Chocolate Fudge,120,5,600
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Vanilla Double Scoop,80,1,80
2019-03-02,Vanilla Double Scoop,80,2,160
2019-03-02,Hot Chocolate Fudge,120,3,360
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Fig and Honey Double Scoop,90,4,360
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Cafe Caramel,160,4,640
2019-03-02,Hot Chocolate Fudge,120,3,360
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Pista Double Scoop,90,2,180
2019-03-02,Death by Chocolate,180,2,360
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Butterscotch Single Scoop,60,2,120
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Vanilla Double Scoop,80,2,160
2019-03-02,Vanilla Single Scoop,50,3,150
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Butterscotch Single Scoop,60,1,60
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Vanilla Double Scoop,80,4,320
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Butterscotch Single Scoop,60,3,180
2019-03-02,Caramel Crunch Single Scoop,70,4,280
2019-03-02,Caramel Crunch Double Scoop,100,5,500
2019-03-02,Butterscotch Single Scoop,60,1,60
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Death by Chocolate,180,5,900
2019-03-02,Hot Chocolate Fudge,120,5,600
2019-03-02,Hot Chocolate Fudge,120,5,600
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Vanilla Single Scoop,50,4,200
2019-03-02,Cake Fudge,150,5,750
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Cake Fudge,150,4,600
2019-03-02,Hot Chocolate Fudge,120,3,360
2019-03-02,Vanilla Double Scoop,80,2,160
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Cake Fudge,150,3,450
2019-03-02,Death by Chocolate,180,5,900
2019-03-02,Rocky Road Single Scoop,50,2,100
2019-03-02,Death by Chocolate,180,1,180
2019-03-02,Death by Chocolate,180,1,180
2019-03-02,Cake Fudge,150,4,600
2019-03-02,Vanilla Double Scoop,80,1,80
2019-03-02,Cake Fudge,150,4,600
2019-03-02,Chocolate Europa Single Scoop,70,1,70
2019-03-02,Vanilla Double Scoop,80,4,320
2019-03-02,Hot Chocolate Fudge,120,3,360
2019-03-02,Death by Chocolate,180,2,360
2019-03-02,Almond Fudge,150,2,300
2019-03-02,Butterscotch Double Scoop,90,4,360
2019-03-02,Death by Chocolate,180,3,540
2019-03-02,Butterscotch Single Scoop,60,3,180
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Cake Fudge,150,4,600
2019-03-02,Hot Chocolate Fudge,120,5,600
2019-03-02,Butterscotch Single Scoop,60,2,120
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Chocolate Europa Double Scoop,100,3,300
2019-03-02,Butterscotch Single Scoop,60,5,300
2019-03-02,Hot Chocolate Fudge,120,2,240
2019-03-02,Cake Fudge,150,5,750
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Pista Single Scoop,60,5,300
2019-03-02,Vanilla Single Scoop,50,1,50
2019-03-02,Vanilla Double Scoop,80,3,240
2019-03-02,Almond Fudge,150,5,750
2019-03-02,Vanilla Single Scoop,50,5,250
2019-03-02,Caramel Crunch Single Scoop,70,2,140
2019-03-02,Hot Chocolate Fudge,120,3,360
2019-03-02,Cake Fudge,150,5,750
2019-03-02,Vanilla Single Scoop,50,2,100
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Butterscotch Single Scoop,60,2,120
2019-03-02,Butterscotch Single Scoop,60,4,240
2019-03-02,Hot Chocolate Fudge,120,3,360
2019-03-02,Cafe Caramel,160,3,480
2019-03-02,Vanilla Double Scoop,80,2,160
2019-03-02,Pista Single Scoop,60,5,300
2019-03-02,Butterscotch Single Scoop,60,5,300
2019-03-02,Vanilla Single Scoop,50,2,100
2019-03-02,Hot Chocolate Fudge,120,4,480
2019-03-02,Cake Fudge,150,2,300
2019-03-02,Caramel Crunch Single Scoop,70,5,350
2019-03-02,Vanilla Single Scoop,50,3,150
2019-03-02,Hot Chocolate Fudge,120,1,120
2019-03-02,Cake Fudge,150,1,150
2019-03-02,Butterscotch Single Scoop,60,3,180
2019-03-02,Death by Chocolate,180,4,720
2019-03-02,Cafe Caramel,160,3,480
2019-03-02,Fig and Honey Single Scoop,60,4,240
2019-03-02,Death by Chocolate,180,1,180
2019-03-02,Chocolate Europa Single Scoop,70,5,350
2019-03-03,Cafe Caramel,160,4,640
2019-03-03,Cafe Caramel,160,4,640
2019-03-03,Cake Fudge,150,3,450
2019-03-03,Vanilla Double Scoop,80,3,240
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Caramel Crunch Single Scoop,70,2,140
2019-03-03,Vanilla Double Scoop,80,2,160
2019-03-03,Chocolate Europa Double Scoop,100,4,400
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Death by Chocolate,180,4,720
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Butterscotch Single Scoop,60,1,60
2019-03-03,Death by Chocolate,180,1,180
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Cafe Caramel,160,5,800
2019-03-03,Death by Chocolate,180,5,900
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Cafe Caramel,160,5,800
2019-03-03,Cake Fudge,150,2,300
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Hot Chocolate Fudge,120,3,360
2019-03-03,Vanilla Double Scoop,80,5,400
2019-03-03,Cake Fudge,150,5,750
2019-03-03,Death by Chocolate,180,2,360
2019-03-03,Vanilla Double Scoop,80,5,400
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Death by Chocolate,180,2,360
2019-03-03,Cake Fudge,150,2,300
2019-03-03,Cake Fudge,150,1,150
2019-03-03,Death by Chocolate,180,5,900
2019-03-03,Trilogy,160,4,640
2019-03-03,Butterscotch Single Scoop,60,3,180
2019-03-03,Cafe Caramel,160,1,160
2019-03-03,Butterscotch Single Scoop,60,5,300
2019-03-03,Death by Chocolate,180,1,180
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Butterscotch Single Scoop,60,1,60
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Vanilla Single Scoop,50,2,100
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Vanilla Single Scoop,50,2,100
2019-03-03,Vanilla Double Scoop,80,1,80
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Butterscotch Single Scoop,60,2,120
2019-03-03,Vanilla Single Scoop,50,1,50
2019-03-03,Butterscotch Single Scoop,60,2,120
2019-03-03,Vanilla Single Scoop,50,5,250
2019-03-03,Almond Fudge,150,4,600
2019-03-03,Fig and Honey Single Scoop,60,2,120
2019-03-03,Cake Fudge,150,3,450
2019-03-03,Cake Fudge,150,5,750
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Death by Chocolate,180,5,900
2019-03-03,Cake Fudge,150,2,300
2019-03-03,Vanilla Single Scoop,50,4,200
2019-03-03,Vanilla Single Scoop,50,3,150
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Vanilla Single Scoop,50,1,50
2019-03-03,Butterscotch Single Scoop,60,5,300
2019-03-03,Butterscotch Single Scoop,60,3,180
2019-03-03,Death by Chocolate,180,1,180
2019-03-03,Cafe Caramel,160,3,480
2019-03-03,Butterscotch Single Scoop,60,1,60
2019-03-03,Vanilla Single Scoop,50,3,150
2019-03-03,Cake Fudge,150,3,450
2019-03-03,Death by Chocolate,180,4,720
2019-03-03,Cake Fudge,150,2,300
2019-03-03,Caramel Crunch Double Scoop,100,3,300
2019-03-03,Fig and Honey Double Scoop,90,4,360
2019-03-03,Hot Chocolate Fudge,120,5,600
2019-03-03,Butterscotch Single Scoop,60,1,60
2019-03-03,Hot Chocolate Fudge,120,1,120
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Vanilla Double Scoop,80,3,240
2019-03-03,Cake Fudge,150,3,450
2019-03-03,Cake Fudge,150,3,450
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Vanilla Double Scoop,80,2,160
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Cake Fudge,150,2,300
2019-03-03,Cake Fudge,150,3,450
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Vanilla Double Scoop,80,3,240
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Hot Chocolate Fudge,120,5,600
2019-03-03,Cake Fudge,150,3,450
2019-03-03,Vanilla Single Scoop,50,2,100
2019-03-03,Vanilla Double Scoop,80,2,160
2019-03-03,Death by Chocolate,180,3,540
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Dew Drop Sundae,150,1,150
2019-03-03,Hot Chocolate Fudge,120,3,360
2019-03-03,Hot Chocolate Fudge,120,5,600
2019-03-03,Vanilla Single Scoop,50,5,250
2019-03-03,Hot Chocolate Fudge,120,1,120
2019-03-03,Death by Chocolate,180,5,900
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Cafe Caramel,160,5,800
2019-03-03,Mint Fudge,120,4,480
2019-03-03,Vanilla Single Scoop,50,4,200
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Cafe Caramel,160,3,480
2019-03-03,Death by Chocolate,180,3,540
2019-03-03,Pista Single Scoop,60,2,120
2019-03-03,Butterscotch Single Scoop,60,5,300
2019-03-03,Cake Fudge,150,1,150
2019-03-03,Hot Chocolate Fudge,120,1,120
2019-03-03,Death by Chocolate,180,4,720
2019-03-03,Death by Chocolate,180,3,540
2019-03-03,Pista Double Scoop,90,3,270
2019-03-03,Hot Chocolate Fudge,120,1,120
2019-03-03,Cake Fudge,150,2,300
2019-03-03,Death by Chocolate,180,2,360
2019-03-03,Hot Chocolate Fudge,120,1,120
2019-03-03,Caramel Crunch Single Scoop,70,2,140
2019-03-03,Rocky Road Single Scoop,50,4,200
2019-03-03,Butterscotch Single Scoop,60,3,180
2019-03-03,Hot Chocolate Fudge,120,1,120
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Cake Fudge,150,1,150
2019-03-03,Banana Split,140,1,140
2019-03-03,Vanilla Double Scoop,80,5,400
2019-03-03,Death by Chocolate,180,4,720
2019-03-03,Vanilla Double Scoop,80,5,400
2019-03-03,Death by Chocolate,180,3,540
2019-03-03,Death by Chocolate,180,3,540
2019-03-03,Cake Fudge,150,1,150
2019-03-03,Death by Chocolate,180,3,540
2019-03-03,Vanilla Double Scoop,80,5,400
2019-03-03,Vanilla Single Scoop,50,4,200
2019-03-03,Vanilla Double Scoop,80,2,160
2019-03-03,Death by Chocolate,180,5,900
2019-03-03,Vanilla Double Scoop,80,5,400
2019-03-03,Vanilla Single Scoop,50,2,100
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Rocky Road Single Scoop,50,1,50
2019-03-03,Cake Fudge,150,5,750
2019-03-03,Butterscotch Single Scoop,60,3,180
2019-03-03,Vanilla Double Scoop,80,2,160
2019-03-03,Vanilla Double Scoop,80,1,80
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Fig and Honey Double Scoop,90,5,450
2019-03-03,Butterscotch Single Scoop,60,3,180
2019-03-03,Vanilla Double Scoop,80,5,400
2019-03-03,Chocolate Europa Double Scoop,100,3,300
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Vanilla Double Scoop,80,2,160
2019-03-03,Dry Fruit Single Scoop,60,4,240
2019-03-03,Cafe Caramel,160,1,160
2019-03-03,Vanilla Single Scoop,50,2,100
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Pista Double Scoop,90,5,450
2019-03-03,Cafe Caramel,160,3,480
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Dry Fruit Double Scoop,90,2,180
2019-03-03,Vanilla Double Scoop,80,4,320
2019-03-03,Hot Chocolate Fudge,120,1,120
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Butterscotch Single Scoop,60,1,60
2019-03-03,Cake Fudge,150,1,150
2019-03-03,Hot Chocolate Fudge,120,1,120
2019-03-03,Cake Fudge,150,5,750
2019-03-03,Vanilla Single Scoop,50,5,250
2019-03-03,Hot Chocolate Fudge,120,3,360
2019-03-03,Cake Fudge,150,4,600
2019-03-03,Vanilla Single Scoop,50,4,200
2019-03-03,Death by Chocolate,180,1,180
2019-03-03,Cafe Caramel,160,3,480
2019-03-03,Hot Chocolate Fudge,120,4,480
2019-03-03,Pista Single Scoop,60,5,300
2019-03-03,Dew Drop Sundae,150,4,600
2019-03-03,Vanilla Single Scoop,50,3,150
2019-03-03,Butterscotch Single Scoop,60,3,180
2019-03-03,Death by Chocolate,180,3,540
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Pista Single Scoop,60,1,60
2019-03-03,Hot Chocolate Fudge,120,2,240
2019-03-03,Vanilla Single Scoop,50,1,50
2019-03-03,Hot Chocolate Fudge,120,3,360
2019-03-03,Cake Fudge,150,1,150
2019-03-04,Rocky Road Single Scoop,50,4,200
2019-03-04,Hot Chocolate Fudge,120,4,480
2019-03-04,Hot Chocolate Fudge,120,3,360
2019-03-04,Chocolate Europa Single Scoop,70,5,350
2019-03-04,Butterscotch Double Scoop,90,5,450
2019-03-04,Vanilla Double Scoop,80,2,160
2019-03-04,Vanilla Single Scoop,50,5,250
2019-03-04,Butterscotch Single Scoop,60,3,180
2019-03-04,Vanilla Single Scoop,50,1,50
2019-03-04,Dry Fruit Single Scoop,60,5,300
2019-03-04,Butterscotch Single Scoop,60,4,240
2019-03-04,Vanilla Single Scoop,50,1,50
2019-03-04,Trilogy,160,3,480
2019-03-04,Cake Fudge,150,3,450
2019-03-04,Butterscotch Single Scoop,60,4,240
2019-03-04,Hot Chocolate Fudge,120,5,600
2019-03-04,Fig and Honey Double Scoop,90,4,360
2019-03-04,Caramel Crunch Single Scoop,70,1,70
2019-03-04,Vanilla Double Scoop,80,2,160
2019-03-04,Hot Chocolate Fudge,120,5,600
2019-03-04,Vanilla Double Scoop,80,3,240
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Chocolate Europa Double Scoop,100,3,300
2019-03-04,Cake Fudge,150,1,150
2019-03-04,Cake Fudge,150,1,150
2019-03-04,Caramel Crunch Double Scoop,100,2,200
2019-03-04,Vanilla Double Scoop,80,2,160
2019-03-04,Caramel Crunch Double Scoop,100,1,100
2019-03-04,Vanilla Single Scoop,50,4,200
2019-03-04,Hot Chocolate Fudge,120,2,240
2019-03-04,Vanilla Single Scoop,50,3,150
2019-03-04,Vanilla Double Scoop,80,1,80
2019-03-04,Vanilla Double Scoop,80,4,320
2019-03-04,Butterscotch Single Scoop,60,2,120
2019-03-04,Hot Chocolate Fudge,120,4,480
2019-03-04,Chocolate Europa Single Scoop,70,5,350
2019-03-04,Cake Fudge,150,2,300
2019-03-04,Vanilla Single Scoop,50,3,150
2019-03-04,Butterscotch Single Scoop,60,2,120
2019-03-04,Butterscotch Single Scoop,60,5,300
2019-03-04,Vanilla Single Scoop,50,5,250
2019-03-04,Pista Double Scoop,90,3,270
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Death by Chocolate,180,1,180
2019-03-04,Cafe Caramel,160,1,160
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Cake Fudge,150,4,600
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Fig and Honey Double Scoop,90,2,180
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Chocolate Europa Double Scoop,100,3,300
2019-03-04,Hot Chocolate Fudge,120,3,360
2019-03-04,Hot Chocolate Fudge,120,4,480
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Vanilla Single Scoop,50,3,150
2019-03-04,Banana Split,140,3,420
2019-03-04,Vanilla Single Scoop,50,4,200
2019-03-04,Cake Fudge,150,2,300
2019-03-04,Death by Chocolate,180,5,900
2019-03-04,Cafe Caramel,160,4,640
2019-03-04,Hot Chocolate Fudge,120,4,480
2019-03-04,Vanilla Single Scoop,50,2,100
2019-03-04,Fig and Honey Single Scoop,60,3,180
2019-03-04,Hot Chocolate Fudge,120,5,600
2019-03-04,Hot Chocolate Fudge,120,2,240
2019-03-04,Cafe Caramel,160,1,160
2019-03-04,Hot Chocolate Fudge,120,5,600
2019-03-04,Death by Chocolate,180,2,360
2019-03-04,Vanilla Double Scoop,80,1,80
2019-03-04,Cake Fudge,150,3,450
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Hot Chocolate Fudge,120,5,600
2019-03-04,Death by Chocolate,180,5,900
2019-03-04,Vanilla Double Scoop,80,3,240
2019-03-04,Caramel Crunch Double Scoop,100,2,200
2019-03-04,Vanilla Double Scoop,80,5,400
2019-03-04,Cake Fudge,150,4,600
2019-03-04,Vanilla Single Scoop,50,2,100
2019-03-04,Hot Chocolate Fudge,120,4,480
2019-03-04,Death by Chocolate,180,4,720
2019-03-04,Butterscotch Single Scoop,60,5,300
2019-03-04,Death by Chocolate,180,5,900
2019-03-04,Fig and Honey Double Scoop,90,1,90
2019-03-04,Cake Fudge,150,3,450
2019-03-04,Cake Fudge,150,1,150
2019-03-04,Cafe Caramel,160,5,800
2019-03-04,Pista Single Scoop,60,3,180
2019-03-04,Vanilla Single Scoop,50,2,100
2019-03-04,Cake Fudge,150,5,750
2019-03-04,Vanilla Single Scoop,50,5,250
2019-03-04,Cake Fudge,150,3,450
2019-03-04,Butterscotch Single Scoop,60,1,60
2019-03-04,Cake Fudge,150,4,600
2019-03-04,Cake Fudge,150,2,300
2019-03-04,Vanilla Double Scoop,80,3,240
2019-03-04,Caramel Crunch Double Scoop,100,1,100
2019-03-04,Hot Chocolate Fudge,120,4,480
2019-03-04,Hot Chocolate Fudge,120,2,240
2019-03-04,Vanilla Single Scoop,50,2,100
2019-03-04,Hot Chocolate Fudge,120,3,360
2019-03-04,Vanilla Double Scoop,80,1,80
2019-03-04,Vanilla Double Scoop,80,1,80
2019-03-04,Cake Fudge,150,2,300
2019-03-04,Butterscotch Double Scoop,90,5,450
2019-03-04,Death by Chocolate,180,3,540
2019-03-04,Cafe Caramel,160,1,160
2019-03-04,Hot Chocolate Fudge,120,4,480
2019-03-04,Cake Fudge,150,3,450
2019-03-04,Butterscotch Single Scoop,60,1,60
2019-03-04,Banana Split,140,4,560
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Cake Fudge,150,2,300
2019-03-04,Vanilla Double Scoop,80,2,160
2019-03-04,Vanilla Double Scoop,80,3,240
2019-03-04,Cake Fudge,150,2,300
2019-03-04,Vanilla Single Scoop,50,2,100
2019-03-04,Butterscotch Single Scoop,60,3,180
2019-03-04,Death by Chocolate,180,1,180
2019-03-04,Hot Chocolate Fudge,120,5,600
2019-03-04,Caramel Crunch Single Scoop,70,1,70
2019-03-04,Butterscotch Single Scoop,60,2,120
2019-03-04,Cake Fudge,150,2,300
2019-03-04,Vanilla Single Scoop,50,1,50
2019-03-04,Death by Chocolate,180,3,540
2019-03-04,Vanilla Double Scoop,80,3,240
2019-03-04,Rocky Road Double Scoop,80,5,400
2019-03-04,Hot Chocolate Fudge,120,3,360
2019-03-04,Cake Fudge,150,3,450
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Hot Chocolate Fudge,120,1,120
2019-03-04,Butterscotch Single Scoop,60,4,240
2019-03-04,Hot Chocolate Fudge,120,2,240
2019-03-04,Butterscotch Single Scoop,60,2,120
2019-03-04,Vanilla Single Scoop,50,2,100
2019-03-04,Butterscotch Double Scoop,90,5,450
2019-03-04,Fig and Honey Single Scoop,60,4,240
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-05,Cake Fudge,150,2,300
2019-03-05,Vanilla Double Scoop,80,1,80
2019-03-05,Hot Chocolate Fudge,120,3,360
2019-03-05,Death by Chocolate,180,5,900
2019-03-05,Vanilla Double Scoop,80,1,80
2019-03-05,Butterscotch Single Scoop,60,5,300
2019-03-05,Butterscotch Single Scoop,60,4,240
2019-03-05,Rocky Road Single Scoop,50,3,150
2019-03-05,Chocolate Europa Single Scoop,70,4,280
2019-03-05,Death by Chocolate,180,1,180
2019-03-05,Cake Fudge,150,4,600
2019-03-05,Vanilla Single Scoop,50,3,150
2019-03-05,Cake Fudge,150,3,450
2019-03-05,Dry Fruit Single Scoop,60,5,300
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-05,Cake Fudge,150,4,600
2019-03-05,Death by Chocolate,180,2,360
2019-03-05,Cake Fudge,150,4,600
2019-03-05,Vanilla Double Scoop,80,1,80
2019-03-05,Hot Chocolate Fudge,120,4,480
2019-03-05,Dew Drop Sundae,150,2,300
2019-03-05,Vanilla Double Scoop,80,1,80
2019-03-05,Hot Chocolate Fudge,120,5,600
2019-03-05,Death by Chocolate,180,1,180
2019-03-05,Vanilla Single Scoop,50,4,200
2019-03-05,Vanilla Double Scoop,80,5,400
2019-03-05,Cake Fudge,150,4,600
2019-03-05,Cake Fudge,150,3,450
2019-03-05,Death by Chocolate,180,4,720
2019-03-05,Hot Chocolate Fudge,120,1,120
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-05,Hot Chocolate Fudge,120,1,120
2019-03-05,Chocolate Europa Single Scoop,70,4,280
2019-03-05,Vanilla Double Scoop,80,1,80
2019-03-05,Vanilla Double Scoop,80,3,240
2019-03-05,Death by Chocolate,180,2,360
2019-03-05,Mint Fudge,120,1,120
2019-03-05,Butterscotch Single Scoop,60,5,300
2019-03-05,Vanilla Double Scoop,80,4,320
2019-03-05,Cake Fudge,150,1,150
2019-03-05,Cafe Caramel,160,4,640
2019-03-05,Hot Chocolate Fudge,120,1,120
2019-03-05,Vanilla Double Scoop,80,5,400
2019-03-05,Cake Fudge,150,1,150
2019-03-05,Hot Chocolate Fudge,120,5,600
2019-03-05,Vanilla Single Scoop,50,4,200
2019-03-05,Cake Fudge,150,4,600
2019-03-05,Butterscotch Single Scoop,60,2,120
2019-03-05,Caramel Crunch Double Scoop,100,5,500
2019-03-05,Dry Fruit Single Scoop,60,3,180
2019-03-05,Death by Chocolate,180,4,720
2019-03-05,Vanilla Double Scoop,80,5,400
2019-03-05,Trilogy,160,2,320
2019-03-05,Hot Chocolate Fudge,120,1,120
2019-03-05,Death by Chocolate,180,4,720
2019-03-05,Death by Chocolate,180,1,180
2019-03-05,Vanilla Double Scoop,80,4,320
2019-03-05,Vanilla Double Scoop,80,3,240
2019-03-05,Vanilla Single Scoop,50,3,150
2019-03-05,Death by Chocolate,180,5,900
2019-03-05,Butterscotch Single Scoop,60,5,300
2019-03-05,Pista Single Scoop,60,3,180
2019-03-05,Butterscotch Single Scoop,60,5,300
2019-03-05,Cafe Caramel,160,5,800
2019-03-05,Pista Single Scoop,60,4,240
2019-03-05,Cake Fudge,150,5,750
2019-03-05,Vanilla Double Scoop,80,1,80
2019-03-05,Vanilla Double Scoop,80,1,80
2019-03-05,Hot Chocolate Fudge,120,4,480
2019-03-05,Hot Chocolate Fudge,120,4,480
2019-03-05,Cafe Caramel,160,4,640
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-05,Vanilla Single Scoop,50,2,100
2019-03-05,Cafe Caramel,160,3,480
2019-03-05,Cafe Caramel,160,4,640
2019-03-05,Death by Chocolate,180,5,900
2019-03-05,Death by Chocolate,180,4,720
2019-03-05,Hot Chocolate Fudge,120,5,600
2019-03-05,Cake Fudge,150,4,600
2019-03-05,Hot Chocolate Fudge,120,5,600
2019-03-05,Death by Chocolate,180,5,900
2019-03-05,Cafe Caramel,160,2,320
2019-03-05,Vanilla Double Scoop,80,5,400
2019-03-05,Hot Chocolate Fudge,120,3,360
2019-03-05,Vanilla Double Scoop,80,1,80
2019-03-05,Vanilla Double Scoop,80,4,320
2019-03-05,Pista Single Scoop,60,4,240
2019-03-05,Cake Fudge,150,4,600
2019-03-05,Hot Chocolate Fudge,120,5,600
2019-03-05,Dry Fruit Single Scoop,60,4,240
2019-03-05,Vanilla Double Scoop,80,3,240
2019-03-05,Cake Fudge,150,3,450
2019-03-05,Pista Double Scoop,90,4,360
2019-03-05,Butterscotch Single Scoop,60,2,120
2019-03-05,Vanilla Single Scoop,50,5,250
2019-03-05,Cake Fudge,150,4,600
2019-03-05,Cake Fudge,150,2,300
2019-03-05,Vanilla Double Scoop,80,5,400
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-05,Rocky Road Single Scoop,50,5,250
2019-03-05,Cafe Caramel,160,1,160
2019-03-05,Vanilla Double Scoop,80,3,240
2019-03-05,Hot Chocolate Fudge,120,1,120
2019-03-05,Cake Fudge,150,5,750
2019-03-05,Vanilla Single Scoop,50,3,150
2019-03-05,Cafe Caramel,160,5,800
2019-03-05,Cake Fudge,150,3,450
2019-03-05,Cake Fudge,150,5,750
2019-03-05,Hot Chocolate Fudge,120,1,120
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-05,Rocky Road Single Scoop,50,4,200
2019-03-05,Hot Chocolate Fudge,120,5,600
2019-03-05,Cake Fudge,150,5,750
2019-03-05,Death by Chocolate,180,3,540
2019-03-05,Vanilla Single Scoop,50,3,150
2019-03-05,Cake Fudge,150,1,150
2019-03-05,Trilogy,160,3,480
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-05,Vanilla Double Scoop,80,4,320
2019-03-05,Hot Chocolate Fudge,120,2,240
2019-03-06,Hot Chocolate Fudge,120,5,600
2019-03-06,Cake Fudge,150,3,450
2019-03-06,Pista Double Scoop,90,2,180
2019-03-06,Hot Chocolate Fudge,120,3,360
2019-03-06,Vanilla Double Scoop,80,3,240
2019-03-06,Dry Fruit Single Scoop,60,5,300
2019-03-06,Hot Chocolate Fudge,120,2,240
2019-03-06,Butterscotch Single Scoop,60,4,240
2019-03-06,Cake Fudge,150,1,150
2019-03-06,Cake Fudge,150,4,600
2019-03-06,Vanilla Single Scoop,50,1,50
2019-03-06,Vanilla Double Scoop,80,5,400
2019-03-06,Hot Chocolate Fudge,120,3,360
2019-03-06,Butterscotch Single Scoop,60,5,300
2019-03-06,Hot Chocolate Fudge,120,5,600
2019-03-06,Death by Chocolate,180,2,360
2019-03-06,Cake Fudge,150,3,450
2019-03-06,Mint Fudge,120,3,360
2019-03-06,Vanilla Single Scoop,50,1,50
2019-03-06,Cake Fudge,150,2,300
2019-03-06,Butterscotch Single Scoop,60,5,300
2019-03-06,Caramel Crunch Double Scoop,100,4,400
2019-03-06,Vanilla Single Scoop,50,5,250
2019-03-06,Vanilla Single Scoop,50,4,200
2019-03-06,Pista Double Scoop,90,5,450
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Hot Chocolate Fudge,120,2,240
2019-03-06,Vanilla Single Scoop,50,4,200
2019-03-06,Cake Fudge,150,2,300
2019-03-06,Vanilla Double Scoop,80,5,400
2019-03-06,Hot Chocolate Fudge,120,4,480
2019-03-06,Hot Chocolate Fudge,120,4,480
2019-03-06,Caramel Crunch Double Scoop,100,2,200
2019-03-06,Vanilla Single Scoop,50,3,150
2019-03-06,Hot Chocolate Fudge,120,4,480
2019-03-06,Butterscotch Single Scoop,60,4,240
2019-03-06,Vanilla Double Scoop,80,5,400
2019-03-06,Cake Fudge,150,1,150
2019-03-06,Cafe Caramel,160,4,640
2019-03-06,Vanilla Double Scoop,80,3,240
2019-03-06,Cake Fudge,150,2,300
2019-03-06,Vanilla Single Scoop,50,5,250
2019-03-06,Butterscotch Single Scoop,60,2,120
2019-03-06,Hot Chocolate Fudge,120,4,480
2019-03-06,Cake Fudge,150,3,450
2019-03-06,Vanilla Single Scoop,50,5,250
2019-03-06,Death by Chocolate,180,2,360
2019-03-06,Vanilla Double Scoop,80,5,400
2019-03-06,Vanilla Single Scoop,50,5,250
2019-03-06,Death by Chocolate,180,3,540
2019-03-06,Vanilla Single Scoop,50,1,50
2019-03-06,Banana Split,140,1,140
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Vanilla Double Scoop,80,1,80
2019-03-06,Death by Chocolate,180,4,720
2019-03-06,Vanilla Double Scoop,80,1,80
2019-03-06,Rocky Road Double Scoop,80,2,160
2019-03-06,Vanilla Double Scoop,80,4,320
2019-03-06,Cake Fudge,150,5,750
2019-03-06,Cake Fudge,150,2,300
2019-03-06,Fig and Honey Double Scoop,90,3,270
2019-03-06,Rocky Road Single Scoop,50,2,100
2019-03-06,Cake Fudge,150,4,600
2019-03-06,Hot Chocolate Fudge,120,4,480
2019-03-06,Cake Fudge,150,5,750
2019-03-06,Caramel Crunch Single Scoop,70,3,210
2019-03-06,Vanilla Double Scoop,80,1,80
2019-03-06,Hot Chocolate Fudge,120,5,600
2019-03-06,Death by Chocolate,180,2,360
2019-03-06,Cake Fudge,150,2,300
2019-03-06,Chocolate Europa Double Scoop,100,4,400
2019-03-06,Butterscotch Single Scoop,60,4,240
2019-03-06,Chocolate Europa Double Scoop,100,3,300
2019-03-06,Pista Double Scoop,90,1,90
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Vanilla Double Scoop,80,3,240
2019-03-06,Dry Fruit Single Scoop,60,1,60
2019-03-06,Cake Fudge,150,2,300
2019-03-06,Vanilla Single Scoop,50,2,100
2019-03-06,Death by Chocolate,180,1,180
2019-03-06,Hot Chocolate Fudge,120,5,600
2019-03-06,Hot Chocolate Fudge,120,3,360
2019-03-06,Fig and Honey Single Scoop,60,3,180
2019-03-06,Death by Chocolate,180,3,540
2019-03-06,Vanilla Double Scoop,80,3,240
2019-03-06,Butterscotch Single Scoop,60,2,120
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Cafe Caramel,160,2,320
2019-03-06,Hot Chocolate Fudge,120,5,600
2019-03-06,Caramel Crunch Single Scoop,70,2,140
2019-03-06,Death by Chocolate,180,2,360
2019-03-06,Butterscotch Single Scoop,60,1,60
2019-03-06,Death by Chocolate,180,5,900
2019-03-06,Cake Fudge,150,1,150
2019-03-06,Caramel Crunch Single Scoop,70,1,70
2019-03-06,Vanilla Single Scoop,50,4,200
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Butterscotch Single Scoop,60,1,60
2019-03-06,Vanilla Single Scoop,50,1,50
2019-03-06,Vanilla Single Scoop,50,3,150
2019-03-06,Cafe Caramel,160,3,480
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Cake Fudge,150,1,150
2019-03-06,Butterscotch Single Scoop,60,3,180
2019-03-06,Cake Fudge,150,5,750
2019-03-06,Death by Chocolate,180,5,900
2019-03-06,Vanilla Single Scoop,50,5,250
2019-03-06,Caramel Crunch Single Scoop,70,1,70
2019-03-06,Rocky Road Double Scoop,80,2,160
2019-03-06,Chocolate Europa Double Scoop,100,3,300
2019-03-06,Hot Chocolate Fudge,120,2,240
2019-03-06,Fig and Honey Single Scoop,60,5,300
2019-03-06,Cake Fudge,150,4,600
2019-03-06,Death by Chocolate,180,3,540
2019-03-06,Hot Chocolate Fudge,120,4,480
2019-03-06,Vanilla Single Scoop,50,1,50
2019-03-06,Mint Fudge,120,1,120
2019-03-06,Cake Fudge,150,3,450
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Rocky Road Double Scoop,80,3,240
2019-03-06,Cake Fudge,150,2,300
2019-03-06,Mint Fudge,120,2,240
2019-03-06,Hot Chocolate Fudge,120,1,120
2019-03-06,Butterscotch Single Scoop,60,3,180
2019-03-06,Cake Fudge,150,1,150
2019-03-06,Butterscotch Double Scoop,90,4,360
2019-03-06,Vanilla Single Scoop,50,2,100
2019-03-06,Cake Fudge,150,4,600
2019-03-06,Vanilla Double Scoop,80,4,320
2019-03-06,Vanilla Double Scoop,80,1,80
2019-03-06,Death by Chocolate,180,2,360
2019-03-06,Butterscotch Single Scoop,60,4,240
2019-03-06,Cake Fudge,150,4,600
2019-03-06,Hot Chocolate Fudge,120,5,600
2019-03-06,Hot Chocolate Fudge,120,2,240
2019-03-06,Cake Fudge,150,3,450
2019-03-06,Vanilla Double Scoop,80,2,160
2019-03-06,Cake Fudge,150,3,450
2019-03-06,Almond Fudge,150,2,300
2019-03-06,Cake Fudge,150,5,750
2019-03-06,Death by Chocolate,180,3,540
2019-03-06,Death by Chocolate,180,3,540
2019-03-06,Cake Fudge,150,5,750
2019-03-06,Cafe Caramel,160,5,800
2019-03-06,Cake Fudge,150,1,150
2019-03-06,Hot Chocolate Fudge,120,2,240
2019-03-06,Almond Fudge,150,2,300
2019-03-06,Butterscotch Single Scoop,60,3,180
2019-03-06,Cake Fudge,150,5,750
2019-03-07,Banana Split,140,4,560
2019-03-07,Cafe Caramel,160,4,640
2019-03-07,Vanilla Double Scoop,80,2,160
2019-03-07,Fig and Honey Double Scoop,90,5,450
2019-03-07,Caramel Crunch Single Scoop,70,4,280
2019-03-07,Hot Chocolate Fudge,120,3,360
2019-03-07,Fig and Honey Single Scoop,60,1,60
2019-03-07,Vanilla Double Scoop,80,1,80
2019-03-07,Butterscotch Single Scoop,60,1,60
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Pista Double Scoop,90,3,270
2019-03-07,Banana Split,140,2,280
2019-03-07,Death by Chocolate,180,5,900
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Hot Chocolate Fudge,120,2,240
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Death by Chocolate,180,4,720
2019-03-07,Caramel Crunch Single Scoop,70,5,350
2019-03-07,Butterscotch Single Scoop,60,2,120
2019-03-07,Hot Chocolate Fudge,120,1,120
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Hot Chocolate Fudge,120,3,360
2019-03-07,Vanilla Double Scoop,80,5,400
2019-03-07,Vanilla Double Scoop,80,3,240
2019-03-07,Vanilla Single Scoop,50,4,200
2019-03-07,Dry Fruit Single Scoop,60,1,60
2019-03-07,Hot Chocolate Fudge,120,1,120
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Hot Chocolate Fudge,120,3,360
2019-03-07,Vanilla Double Scoop,80,3,240
2019-03-07,Vanilla Single Scoop,50,4,200
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Hot Chocolate Fudge,120,2,240
2019-03-07,Cake Fudge,150,3,450
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Vanilla Single Scoop,50,4,200
2019-03-07,Death by Chocolate,180,2,360
2019-03-07,Pista Single Scoop,60,2,120
2019-03-07,Death by Chocolate,180,1,180
2019-03-07,Hot Chocolate Fudge,120,1,120
2019-03-07,Death by Chocolate,180,5,900
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Hot Chocolate Fudge,120,4,480
2019-03-07,Cake Fudge,150,1,150
2019-03-07,Butterscotch Single Scoop,60,5,300
2019-03-07,Butterscotch Single Scoop,60,4,240
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Butterscotch Single Scoop,60,2,120
2019-03-07,Chocolate Europa Single Scoop,70,3,210
2019-03-07,Cake Fudge,150,4,600
2019-03-07,Cake Fudge,150,4,600
2019-03-07,Vanilla Single Scoop,50,5,250
2019-03-07,Butterscotch Single Scoop,60,5,300
2019-03-07,Cake Fudge,150,4,600
2019-03-07,Cafe Caramel,160,5,800
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Cake Fudge,150,4,600
2019-03-07,Vanilla Double Scoop,80,2,160
2019-03-07,Hot Chocolate Fudge,120,4,480
2019-03-07,Cake Fudge,150,3,450
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Cake Fudge,150,3,450
2019-03-07,Death by Chocolate,180,5,900
2019-03-07,Hot Chocolate Fudge,120,2,240
2019-03-07,Vanilla Double Scoop,80,4,320
2019-03-07,Hot Chocolate Fudge,120,2,240
2019-03-07,Death by Chocolate,180,4,720
2019-03-07,Cake Fudge,150,4,600
2019-03-07,Hot Chocolate Fudge,120,3,360
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Death by Chocolate,180,5,900
2019-03-07,Pista Double Scoop,90,4,360
2019-03-07,Hot Chocolate Fudge,120,4,480
2019-03-07,Vanilla Double Scoop,80,2,160
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Hot Chocolate Fudge,120,1,120
2019-03-07,Butterscotch Double Scoop,90,5,450
2019-03-07,Banana Split,140,1,140
2019-03-07,Cafe Caramel,160,4,640
2019-03-07,Death by Chocolate,180,3,540
2019-03-07,Cake Fudge,150,3,450
2019-03-07,Death by Chocolate,180,3,540
2019-03-07,Death by Chocolate,180,5,900
2019-03-07,Vanilla Single Scoop,50,4,200
2019-03-07,Cake Fudge,150,3,450
2019-03-07,Cake Fudge,150,2,300
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Vanilla Double Scoop,80,1,80
2019-03-07,Death by Chocolate,180,4,720
2019-03-07,Butterscotch Single Scoop,60,4,240
2019-03-07,Butterscotch Single Scoop,60,1,60
2019-03-07,Butterscotch Single Scoop,60,4,240
2019-03-07,Dew Drop Sundae,150,3,450
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Vanilla Double Scoop,80,3,240
2019-03-07,Hot Chocolate Fudge,120,4,480
2019-03-07,Vanilla Double Scoop,80,1,80
2019-03-07,Butterscotch Single Scoop,60,4,240
2019-03-07,Vanilla Single Scoop,50,5,250
2019-03-07,Vanilla Single Scoop,50,5,250
2019-03-07,Hot Chocolate Fudge,120,1,120
2019-03-07,Butterscotch Single Scoop,60,1,60
2019-03-07,Vanilla Double Scoop,80,3,240
2019-03-07,Hot Chocolate Fudge,120,3,360
2019-03-07,Cake Fudge,150,2,300
2019-03-07,Vanilla Single Scoop,50,4,200
2019-03-07,Vanilla Single Scoop,50,1,50
2019-03-07,Butterscotch Single Scoop,60,5,300
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Hot Chocolate Fudge,120,2,240
2019-03-07,Vanilla Double Scoop,80,2,160
2019-03-07,Cake Fudge,150,4,600
2019-03-07,Butterscotch Single Scoop,60,2,120
2019-03-07,Chocolate Europa Single Scoop,70,3,210
2019-03-07,Hot Chocolate Fudge,120,1,120
2019-03-07,Trilogy,160,4,640
2019-03-07,Butterscotch Single Scoop,60,2,120
2019-03-07,Hot Chocolate Fudge,120,2,240
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Dew Drop Sundae,150,4,600
2019-03-07,Vanilla Double Scoop,80,1,80
2019-03-07,Death by Chocolate,180,3,540
2019-03-07,Vanilla Single Scoop,50,2,100
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Death by Chocolate,180,5,900
2019-03-07,Death by Chocolate,180,5,900
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Vanilla Single Scoop,50,3,150
2019-03-07,Butterscotch Single Scoop,60,5,300
2019-03-07,Vanilla Double Scoop,80,5,400
2019-03-07,Pista Double Scoop,90,2,180
2019-03-07,Vanilla Single Scoop,50,1,50
2019-03-07,Vanilla Double Scoop,80,4,320
2019-03-07,Cake Fudge,150,3,450
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Rocky Road Single Scoop,50,5,250
2019-03-07,Death by Chocolate,180,3,540
2019-03-07,Butterscotch Single Scoop,60,1,60
2019-03-07,Butterscotch Single Scoop,60,1,60
2019-03-07,Vanilla Single Scoop,50,4,200
2019-03-07,Cake Fudge,150,5,750
2019-03-07,Butterscotch Single Scoop,60,3,180
2019-03-07,Hot Chocolate Fudge,120,3,360
2019-03-07,Vanilla Single Scoop,50,5,250
2019-03-07,Death by Chocolate,180,5,900
2019-03-07,Death by Chocolate,180,1,180
2019-03-07,Vanilla Single Scoop,50,2,100
2019-03-07,Cake Fudge,150,1,150
2019-03-07,Vanilla Double Scoop,80,1,80
2019-03-07,Hot Chocolate Fudge,120,4,480
2019-03-07,Vanilla Single Scoop,50,5,250
2019-03-07,Vanilla Double Scoop,80,2,160
2019-03-07,Chocolate Europa Single Scoop,70,2,140
2019-03-07,Hot Chocolate Fudge,120,1,120
2019-03-07,Caramel Crunch Double Scoop,100,5,500
2019-03-07,Hot Chocolate Fudge,120,5,600
2019-03-07,Vanilla Double Scoop,80,4,320
2019-03-07,Death by Chocolate,180,2,360
2019-03-07,Trilogy,160,3,480
2019-03-07,Vanilla Double Scoop,80,2,160
2019-03-07,Caramel Crunch Double Scoop,100,1,100
2019-03-07,Rocky Road Single Scoop,50,4,200
2019-03-07,Vanilla Single Scoop,50,2,100
2019-03-07,Hot Chocolate Fudge,120,2,240
2019-03-07,Vanilla Double Scoop,80,4,320
2019-03-07,Vanilla Double Scoop,80,2,160
2019-03-08,Hot Chocolate Fudge,120,5,600
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Cake Fudge,150,1,150
2019-03-08,Death by Chocolate,180,2,360
2019-03-08,Hot Chocolate Fudge,120,1,120
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Butterscotch Single Scoop,60,4,240
2019-03-08,Vanilla Double Scoop,80,5,400
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Hot Chocolate Fudge,120,5,600
2019-03-08,Butterscotch Single Scoop,60,5,300
2019-03-08,Vanilla Double Scoop,80,5,400
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Dry Fruit Double Scoop,90,1,90
2019-03-08,Cake Fudge,150,1,150
2019-03-08,Vanilla Double Scoop,80,2,160
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Cake Fudge,150,4,600
2019-03-08,Cafe Caramel,160,4,640
2019-03-08,Vanilla Double Scoop,80,2,160
2019-03-08,Vanilla Double Scoop,80,4,320
2019-03-08,Butterscotch Single Scoop,60,4,240
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Death by Chocolate,180,1,180
2019-03-08,Vanilla Double Scoop,80,1,80
2019-03-08,Cake Fudge,150,3,450
2019-03-08,Pista Double Scoop,90,4,360
2019-03-08,Chocolate Europa Double Scoop,100,2,200
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Butterscotch Single Scoop,60,5,300
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Vanilla Double Scoop,80,1,80
2019-03-08,Vanilla Single Scoop,50,2,100
2019-03-08,Vanilla Double Scoop,80,5,400
2019-03-08,Cake Fudge,150,4,600
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Hot Chocolate Fudge,120,4,480
2019-03-08,Death by Chocolate,180,3,540
2019-03-08,Butterscotch Single Scoop,60,3,180
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Chocolate Europa Single Scoop,70,5,350
2019-03-08,Chocolate Europa Double Scoop,100,3,300
2019-03-08,Butterscotch Single Scoop,60,5,300
2019-03-08,Butterscotch Single Scoop,60,1,60
2019-03-08,Vanilla Single Scoop,50,4,200
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Fig and Honey Single Scoop,60,4,240
2019-03-08,Vanilla Double Scoop,80,3,240
2019-03-08,Butterscotch Double Scoop,90,2,180
2019-03-08,Cafe Caramel,160,5,800
2019-03-08,Fig and Honey Single Scoop,60,1,60
2019-03-08,Death by Chocolate,180,2,360
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Death by Chocolate,180,3,540
2019-03-08,Hot Chocolate Fudge,120,5,600
2019-03-08,Death by Chocolate,180,2,360
2019-03-08,Butterscotch Single Scoop,60,4,240
2019-03-08,Cafe Caramel,160,1,160
2019-03-08,Hot Chocolate Fudge,120,1,120
2019-03-08,Chocolate Europa Double Scoop,100,1,100
2019-03-08,Cake Fudge,150,2,300
2019-03-08,Butterscotch Single Scoop,60,5,300
2019-03-08,Cake Fudge,150,1,150
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Dry Fruit Double Scoop,90,5,450
2019-03-08,Vanilla Single Scoop,50,1,50
2019-03-08,Cake Fudge,150,3,450
2019-03-08,Cafe Caramel,160,2,320
2019-03-08,Cake Fudge,150,2,300
2019-03-08,Cake Fudge,150,2,300
2019-03-08,Vanilla Double Scoop,80,4,320
2019-03-08,Cake Fudge,150,1,150
2019-03-08,Cafe Caramel,160,2,320
2019-03-08,Vanilla Double Scoop,80,2,160
2019-03-08,Death by Chocolate,180,1,180
2019-03-08,Cake Fudge,150,4,600
2019-03-08,Cake Fudge,150,1,150
2019-03-08,Cafe Caramel,160,5,800
2019-03-08,Cake Fudge,150,3,450
2019-03-08,Rocky Road Single Scoop,50,1,50
2019-03-08,Vanilla Single Scoop,50,5,250
2019-03-08,Butterscotch Single Scoop,60,3,180
2019-03-08,Butterscotch Single Scoop,60,4,240
2019-03-08,Butterscotch Single Scoop,60,2,120
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Butterscotch Single Scoop,60,2,120
2019-03-08,Death by Chocolate,180,4,720
2019-03-08,Pista Double Scoop,90,5,450
2019-03-08,Hot Chocolate Fudge,120,1,120
2019-03-08,Vanilla Double Scoop,80,3,240
2019-03-08,Caramel Crunch Double Scoop,100,2,200
2019-03-08,Cake Fudge,150,4,600
2019-03-08,Death by Chocolate,180,4,720
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Rocky Road Single Scoop,50,5,250
2019-03-08,Cake Fudge,150,2,300
2019-03-08,Vanilla Single Scoop,50,1,50
2019-03-08,Hot Chocolate Fudge,120,1,120
2019-03-08,Cake Fudge,150,2,300
2019-03-08,Hot Chocolate Fudge,120,5,600
2019-03-08,Cake Fudge,150,4,600
2019-03-08,Hot Chocolate Fudge,120,4,480
2019-03-08,Death by Chocolate,180,5,900
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Butterscotch Double Scoop,90,4,360
2019-03-08,Cake Fudge,150,3,450
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Hot Chocolate Fudge,120,4,480
2019-03-08,Rocky Road Single Scoop,50,3,150
2019-03-08,Fig and Honey Single Scoop,60,5,300
2019-03-08,Vanilla Single Scoop,50,5,250
2019-03-08,Hot Chocolate Fudge,120,5,600
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Vanilla Double Scoop,80,3,240
2019-03-08,Death by Chocolate,180,1,180
2019-03-08,Dry Fruit Single Scoop,60,4,240
2019-03-08,Cake Fudge,150,3,450
2019-03-08,Death by Chocolate,180,5,900
2019-03-08,Butterscotch Single Scoop,60,4,240
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Vanilla Single Scoop,50,3,150
2019-03-08,Death by Chocolate,180,1,180
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Dry Fruit Double Scoop,90,5,450
2019-03-08,Butterscotch Single Scoop,60,2,120
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Cake Fudge,150,3,450
2019-03-08,Vanilla Double Scoop,80,5,400
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Vanilla Double Scoop,80,3,240
2019-03-08,Cake Fudge,150,2,300
2019-03-08,Hot Chocolate Fudge,120,1,120
2019-03-08,Cake Fudge,150,3,450
2019-03-08,Vanilla Single Scoop,50,4,200
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Caramel Crunch Double Scoop,100,1,100
2019-03-08,Cafe Caramel,160,4,640
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Vanilla Double Scoop,80,4,320
2019-03-08,Cake Fudge,150,1,150
2019-03-08,Cake Fudge,150,5,750
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Cake Fudge,150,3,450
2019-03-08,Chocolate Europa Double Scoop,100,2,200
2019-03-08,Death by Chocolate,180,3,540
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Butterscotch Single Scoop,60,2,120
2019-03-08,Hot Chocolate Fudge,120,5,600
2019-03-08,Vanilla Single Scoop,50,2,100
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Vanilla Double Scoop,80,1,80
2019-03-08,Cafe Caramel,160,4,640
2019-03-08,Hot Chocolate Fudge,120,4,480
2019-03-08,Pista Single Scoop,60,4,240
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Cake Fudge,150,2,300
2019-03-08,Caramel Crunch Double Scoop,100,3,300
2019-03-08,Cafe Caramel,160,5,800
2019-03-08,Butterscotch Single Scoop,60,3,180
2019-03-08,Vanilla Double Scoop,80,5,400
2019-03-08,Death by Chocolate,180,1,180
2019-03-08,Cafe Caramel,160,1,160
2019-03-08,Butterscotch Single Scoop,60,2,120
2019-03-08,Caramel Crunch Single Scoop,70,2,140
2019-03-08,Vanilla Double Scoop,80,2,160
2019-03-08,Chocolate Europa Single Scoop,70,2,140
2019-03-08,Vanilla Double Scoop,80,3,240
2019-03-08,Cake Fudge,150,1,150
2019-03-08,Hot Chocolate Fudge,120,3,360
2019-03-08,Vanilla Double Scoop,80,4,320
2019-03-08,Fig and Honey Single Scoop,60,5,300
2019-03-08,Hot Chocolate Fudge,120,1,120
2019-03-08,Butterscotch Single Scoop,60,2,120
2019-03-08,Hot Chocolate Fudge,120,2,240
2019-03-09,Vanilla Double Scoop,80,4,320
2019-03-09,Cake Fudge,150,2,300
2019-03-09,Butterscotch Single Scoop,60,3,180
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Pista Single Scoop,60,5,300
2019-03-09,Vanilla Single Scoop,50,5,250
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Vanilla Double Scoop,80,3,240
2019-03-09,Dry Fruit Double Scoop,90,4,360
2019-03-09,Vanilla Single Scoop,50,3,150
2019-03-09,Cake Fudge,150,5,750
2019-03-09,Butterscotch Single Scoop,60,5,300
2019-03-09,Death by Chocolate,180,5,900
2019-03-09,Cake Fudge,150,2,300
2019-03-09,Vanilla Double Scoop,80,2,160
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Death by Chocolate,180,1,180
2019-03-09,Death by Chocolate,180,2,360
2019-03-09,Hot Chocolate Fudge,120,1,120
2019-03-09,Cake Fudge,150,4,600
2019-03-09,Vanilla Double Scoop,80,5,400
2019-03-09,Butterscotch Single Scoop,60,3,180
2019-03-09,Cake Fudge,150,4,600
2019-03-09,Cafe Caramel,160,1,160
2019-03-09,Death by Chocolate,180,5,900
2019-03-09,Vanilla Double Scoop,80,1,80
2019-03-09,Cafe Caramel,160,1,160
2019-03-09,Death by Chocolate,180,4,720
2019-03-09,Death by Chocolate,180,4,720
2019-03-09,Vanilla Single Scoop,50,4,200
2019-03-09,Vanilla Single Scoop,50,3,150
2019-03-09,Pista Single Scoop,60,4,240
2019-03-09,Vanilla Double Scoop,80,4,320
2019-03-09,Cake Fudge,150,2,300
2019-03-09,Death by Chocolate,180,1,180
2019-03-09,Cafe Caramel,160,2,320
2019-03-09,Cake Fudge,150,4,600
2019-03-09,Vanilla Double Scoop,80,4,320
2019-03-09,Cake Fudge,150,5,750
2019-03-09,Vanilla Single Scoop,50,3,150
2019-03-09,Vanilla Double Scoop,80,5,400
2019-03-09,Hot Chocolate Fudge,120,5,600
2019-03-09,Vanilla Double Scoop,80,2,160
2019-03-09,Vanilla Single Scoop,50,4,200
2019-03-09,Mint Fudge,120,4,480
2019-03-09,Vanilla Double Scoop,80,4,320
2019-03-09,Vanilla Single Scoop,50,4,200
2019-03-09,Dry Fruit Single Scoop,60,2,120
2019-03-09,Vanilla Double Scoop,80,5,400
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Vanilla Double Scoop,80,5,400
2019-03-09,Death by Chocolate,180,3,540
2019-03-09,Hot Chocolate Fudge,120,5,600
2019-03-09,Vanilla Double Scoop,80,3,240
2019-03-09,Vanilla Double Scoop,80,5,400
2019-03-09,Vanilla Double Scoop,80,2,160
2019-03-09,Vanilla Single Scoop,50,5,250
2019-03-09,Vanilla Single Scoop,50,4,200
2019-03-09,Death by Chocolate,180,4,720
2019-03-09,Vanilla Single Scoop,50,2,100
2019-03-09,Death by Chocolate,180,4,720
2019-03-09,Hot Chocolate Fudge,120,1,120
2019-03-09,Vanilla Double Scoop,80,4,320
2019-03-09,Butterscotch Single Scoop,60,2,120
2019-03-09,Death by Chocolate,180,4,720
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Chocolate Europa Double Scoop,100,4,400
2019-03-09,Cake Fudge,150,4,600
2019-03-09,Death by Chocolate,180,3,540
2019-03-09,Vanilla Double Scoop,80,1,80
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Butterscotch Single Scoop,60,4,240
2019-03-09,Almond Fudge,150,3,450
2019-03-09,Death by Chocolate,180,3,540
2019-03-09,Butterscotch Single Scoop,60,4,240
2019-03-09,Cake Fudge,150,2,300
2019-03-09,Butterscotch Single Scoop,60,4,240
2019-03-09,Death by Chocolate,180,1,180
2019-03-09,Vanilla Double Scoop,80,3,240
2019-03-09,Death by Chocolate,180,1,180
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Vanilla Double Scoop,80,2,160
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Vanilla Double Scoop,80,4,320
2019-03-09,Butterscotch Single Scoop,60,3,180
2019-03-09,Vanilla Double Scoop,80,2,160
2019-03-09,Hot Chocolate Fudge,120,1,120
2019-03-09,Vanilla Double Scoop,80,1,80
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Death by Chocolate,180,4,720
2019-03-09,Hot Chocolate Fudge,120,1,120
2019-03-09,Cafe Caramel,160,3,480
2019-03-09,Hot Chocolate Fudge,120,1,120
2019-03-09,Cake Fudge,150,2,300
2019-03-09,Vanilla Single Scoop,50,1,50
2019-03-09,Death by Chocolate,180,3,540
2019-03-09,Cafe Caramel,160,5,800
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Vanilla Double Scoop,80,5,400
2019-03-09,Cake Fudge,150,3,450
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Chocolate Europa Double Scoop,100,4,400
2019-03-09,Cafe Caramel,160,3,480
2019-03-09,Cafe Caramel,160,4,640
2019-03-09,Chocolate Europa Single Scoop,70,1,70
2019-03-09,Vanilla Single Scoop,50,5,250
2019-03-09,Mint Fudge,120,5,600
2019-03-09,Vanilla Single Scoop,50,4,200
2019-03-09,Vanilla Double Scoop,80,2,160
2019-03-09,Vanilla Double Scoop,80,3,240
2019-03-09,Death by Chocolate,180,5,900
2019-03-09,Vanilla Single Scoop,50,4,200
2019-03-09,Butterscotch Double Scoop,90,2,180
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Hot Chocolate Fudge,120,1,120
2019-03-09,Death by Chocolate,180,4,720
2019-03-09,Chocolate Europa Single Scoop,70,1,70
2019-03-09,Cake Fudge,150,5,750
2019-03-09,Death by Chocolate,180,3,540
2019-03-09,Vanilla Single Scoop,50,4,200
2019-03-09,Hot Chocolate Fudge,120,4,480
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Vanilla Double Scoop,80,3,240
2019-03-09,Fig and Honey Double Scoop,90,4,360
2019-03-09,Vanilla Double Scoop,80,3,240
2019-03-09,Butterscotch Single Scoop,60,4,240
2019-03-09,Hot Chocolate Fudge,120,4,480
2019-03-09,Chocolate Europa Double Scoop,100,1,100
2019-03-09,Vanilla Single Scoop,50,2,100
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Butterscotch Single Scoop,60,5,300
2019-03-09,Death by Chocolate,180,3,540
2019-03-09,Cake Fudge,150,5,750
2019-03-09,Chocolate Europa Double Scoop,100,5,500
2019-03-09,Hot Chocolate Fudge,120,5,600
2019-03-09,Death by Chocolate,180,4,720
2019-03-09,Cake Fudge,150,2,300
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Death by Chocolate,180,5,900
2019-03-09,Vanilla Double Scoop,80,3,240
2019-03-09,Vanilla Single Scoop,50,4,200
2019-03-09,Death by Chocolate,180,5,900
2019-03-09,Cake Fudge,150,4,600
2019-03-09,Death by Chocolate,180,3,540
2019-03-09,Cafe Caramel,160,5,800
2019-03-09,Death by Chocolate,180,5,900
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Hot Chocolate Fudge,120,4,480
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Butterscotch Single Scoop,60,2,120
2019-03-09,Dry Fruit Single Scoop,60,4,240
2019-03-09,Hot Chocolate Fudge,120,4,480
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Hot Chocolate Fudge,120,3,360
2019-03-09,Dry Fruit Single Scoop,60,4,240
2019-03-09,Vanilla Double Scoop,80,1,80
2019-03-09,Butterscotch Single Scoop,60,1,60
2019-03-09,Cake Fudge,150,2,300
2019-03-09,Cake Fudge,150,3,450
2019-03-09,Cake Fudge,150,1,150
2019-03-09,Cake Fudge,150,5,750
2019-03-09,Mint Fudge,120,1,120
2019-03-09,Hot Chocolate Fudge,120,5,600
2019-03-09,Caramel Crunch Double Scoop,100,5,500
2019-03-09,Death by Chocolate,180,3,540
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Cake Fudge,150,4,600
2019-03-09,Butterscotch Single Scoop,60,1,60
2019-03-09,Cake Fudge,150,2,300
2019-03-09,Hot Chocolate Fudge,120,4,480
2019-03-09,Butterscotch Single Scoop,60,3,180
2019-03-09,Vanilla Double Scoop,80,1,80
2019-03-09,Butterscotch Single Scoop,60,4,240
2019-03-09,Chocolate Europa Double Scoop,100,5,500
2019-03-09,Hot Chocolate Fudge,120,2,240
2019-03-09,Vanilla Double Scoop,80,1,80
2019-03-09,Vanilla Double Scoop,80,1,80
2019-03-09,Cake Fudge,150,3,450
2019-03-09,Vanilla Single Scoop,50,5,250
2019-03-10,Death by Chocolate,180,2,360
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Vanilla Double Scoop,80,3,240
2019-03-10,Hot Chocolate Fudge,120,4,480
2019-03-10,Hot Chocolate Fudge,120,1,120
2019-03-10,Cake Fudge,150,4,600
2019-03-10,Vanilla Single Scoop,50,4,200
2019-03-10,Hot Chocolate Fudge,120,4,480
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Butterscotch Single Scoop,60,5,300
2019-03-10,Butterscotch Single Scoop,60,4,240
2019-03-10,Butterscotch Single Scoop,60,2,120
2019-03-10,Dry Fruit Single Scoop,60,1,60
2019-03-10,Death by Chocolate,180,4,720
2019-03-10,Death by Chocolate,180,2,360
2019-03-10,Vanilla Double Scoop,80,4,320
2019-03-10,Butterscotch Single Scoop,60,3,180
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Vanilla Single Scoop,50,4,200
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Death by Chocolate,180,1,180
2019-03-10,Cake Fudge,150,1,150
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Death by Chocolate,180,1,180
2019-03-10,Vanilla Single Scoop,50,5,250
2019-03-10,Vanilla Double Scoop,80,4,320
2019-03-10,Vanilla Single Scoop,50,5,250
2019-03-10,Vanilla Single Scoop,50,5,250
2019-03-10,Dry Fruit Double Scoop,90,2,180
2019-03-10,Butterscotch Single Scoop,60,4,240
2019-03-10,Vanilla Double Scoop,80,1,80
2019-03-10,Cafe Caramel,160,2,320
2019-03-10,Rocky Road Single Scoop,50,1,50
2019-03-10,Vanilla Single Scoop,50,2,100
2019-03-10,Vanilla Double Scoop,80,1,80
2019-03-10,Butterscotch Single Scoop,60,3,180
2019-03-10,Almond Fudge,150,5,750
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Vanilla Single Scoop,50,4,200
2019-03-10,Rocky Road Double Scoop,80,4,320
2019-03-10,Chocolate Europa Single Scoop,70,4,280
2019-03-10,Vanilla Single Scoop,50,2,100
2019-03-10,Dry Fruit Single Scoop,60,5,300
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Cake Fudge,150,3,450
2019-03-10,Cake Fudge,150,5,750
2019-03-10,Cake Fudge,150,3,450
2019-03-10,Hot Chocolate Fudge,120,4,480
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Death by Chocolate,180,5,900
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Rocky Road Double Scoop,80,1,80
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Hot Chocolate Fudge,120,1,120
2019-03-10,Death by Chocolate,180,3,540
2019-03-10,Butterscotch Single Scoop,60,1,60
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Cake Fudge,150,3,450
2019-03-10,Cake Fudge,150,4,600
2019-03-10,Rocky Road Single Scoop,50,5,250
2019-03-10,Vanilla Double Scoop,80,3,240
2019-03-10,Cafe Caramel,160,2,320
2019-03-10,Butterscotch Single Scoop,60,5,300
2019-03-10,Chocolate Europa Double Scoop,100,4,400
2019-03-10,Butterscotch Single Scoop,60,2,120
2019-03-10,Vanilla Double Scoop,80,4,320
2019-03-10,Vanilla Single Scoop,50,5,250
2019-03-10,Hot Chocolate Fudge,120,3,360
2019-03-10,Butterscotch Single Scoop,60,1,60
2019-03-10,Fig and Honey Double Scoop,90,4,360
2019-03-10,Butterscotch Single Scoop,60,3,180
2019-03-10,Death by Chocolate,180,3,540
2019-03-10,Vanilla Single Scoop,50,2,100
2019-03-10,Butterscotch Single Scoop,60,5,300
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Death by Chocolate,180,2,360
2019-03-10,Cake Fudge,150,2,300
2019-03-10,Vanilla Double Scoop,80,3,240
2019-03-10,Cake Fudge,150,3,450
2019-03-10,Hot Chocolate Fudge,120,1,120
2019-03-10,Butterscotch Single Scoop,60,2,120
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Vanilla Single Scoop,50,4,200
2019-03-10,Vanilla Double Scoop,80,5,400
2019-03-10,Hot Chocolate Fudge,120,1,120
2019-03-10,Vanilla Double Scoop,80,5,400
2019-03-10,Cafe Caramel,160,1,160
2019-03-10,Butterscotch Single Scoop,60,5,300
2019-03-10,Cake Fudge,150,2,300
2019-03-10,Hot Chocolate Fudge,120,1,120
2019-03-10,Vanilla Double Scoop,80,1,80
2019-03-10,Vanilla Double Scoop,80,5,400
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Cake Fudge,150,2,300
2019-03-10,Vanilla Double Scoop,80,5,400
2019-03-10,Vanilla Single Scoop,50,2,100
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Vanilla Double Scoop,80,1,80
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Vanilla Single Scoop,50,5,250
2019-03-10,Fig and Honey Single Scoop,60,5,300
2019-03-10,Death by Chocolate,180,4,720
2019-03-10,Cafe Caramel,160,1,160
2019-03-10,Hot Chocolate Fudge,120,3,360
2019-03-10,Rocky Road Single Scoop,50,4,200
2019-03-10,Vanilla Double Scoop,80,1,80
2019-03-10,Butterscotch Single Scoop,60,3,180
2019-03-10,Hot Chocolate Fudge,120,4,480
2019-03-10,Butterscotch Single Scoop,60,5,300
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Butterscotch Single Scoop,60,5,300
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Vanilla Double Scoop,80,5,400
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Death by Chocolate,180,3,540
2019-03-10,Fig and Honey Double Scoop,90,5,450
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Chocolate Europa Single Scoop,70,5,350
2019-03-10,Fig and Honey Double Scoop,90,3,270
2019-03-10,Butterscotch Single Scoop,60,3,180
2019-03-10,Death by Chocolate,180,4,720
2019-03-10,Vanilla Double Scoop,80,3,240
2019-03-10,Hot Chocolate Fudge,120,4,480
2019-03-10,Vanilla Single Scoop,50,2,100
2019-03-10,Fig and Honey Double Scoop,90,1,90
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Caramel Crunch Double Scoop,100,3,300
2019-03-10,Cake Fudge,150,2,300
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Butterscotch Single Scoop,60,3,180
2019-03-10,Vanilla Double Scoop,80,5,400
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Cake Fudge,150,5,750
2019-03-10,Butterscotch Single Scoop,60,3,180
2019-03-10,Hot Chocolate Fudge,120,1,120
2019-03-10,Hot Chocolate Fudge,120,1,120
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Caramel Crunch Double Scoop,100,5,500
2019-03-10,Cake Fudge,150,3,450
2019-03-10,Vanilla Single Scoop,50,3,150
2019-03-10,Vanilla Single Scoop,50,5,250
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Butterscotch Double Scoop,90,2,180
2019-03-10,Vanilla Single Scoop,50,2,100
2019-03-10,Cake Fudge,150,4,600
2019-03-10,Death by Chocolate,180,2,360
2019-03-10,Hot Chocolate Fudge,120,3,360
2019-03-10,Vanilla Single Scoop,50,5,250
2019-03-10,Cafe Caramel,160,1,160
2019-03-10,Cake Fudge,150,2,300
2019-03-10,Butterscotch Single Scoop,60,5,300
2019-03-10,Chocolate Europa Single Scoop,70,4,280
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Hot Chocolate Fudge,120,5,600
2019-03-10,Death by Chocolate,180,3,540
2019-03-10,Vanilla Single Scoop,50,3,150
2019-03-10,Caramel Crunch Double Scoop,100,2,200
2019-03-10,Butterscotch Single Scoop,60,4,240
2019-03-10,Cake Fudge,150,1,150
2019-03-10,Dry Fruit Double Scoop,90,3,270
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Cake Fudge,150,1,150
2019-03-10,Death by Chocolate,180,2,360
2019-03-10,Vanilla Double Scoop,80,1,80
2019-03-10,Hot Chocolate Fudge,120,1,120
2019-03-10,Cake Fudge,150,4,600
2019-03-10,Death by Chocolate,180,2,360
2019-03-10,Hot Chocolate Fudge,120,3,360
2019-03-10,Hot Chocolate Fudge,120,2,240
2019-03-10,Hot Chocolate Fudge,120,3,360
2019-03-10,Hot Chocolate Fudge,120,4,480
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Death by Chocolate,180,5,900
2019-03-10,Cake Fudge,150,3,450
2019-03-10,Hot Chocolate Fudge,120,3,360
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Death by Chocolate,180,4,720
2019-03-10,Cake Fudge,150,4,600
2019-03-10,Cafe Caramel,160,4,640
2019-03-10,Chocolate Europa Single Scoop,70,1,70
2019-03-10,Hot Chocolate Fudge,120,3,360
2019-03-10,Vanilla Single Scoop,50,2,100
2019-03-10,Cake Fudge,150,4,600
2019-03-10,Rocky Road Single Scoop,50,4,200
2019-03-10,Vanilla Double Scoop,80,2,160
2019-03-10,Mint Fudge,120,5,600
2019-03-10,Butterscotch Single Scoop,60,3,180
2019-03-10,Butterscotch Single Scoop,60,1,60
2019-03-10,Death by Chocolate,180,1,180
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Cake Fudge,150,1,150
2019-03-10,Vanilla Single Scoop,50,1,50
2019-03-10,Butterscotch Single Scoop,60,1,60
2019-03-10,Vanilla Double Scoop,80,5,400
2019-03-10,Death by Chocolate,180,3,540
2019-03-11,Rocky Road Single Scoop,50,1,50
2019-03-11,Vanilla Double Scoop,80,2,160
2019-03-11,Chocolate Europa Double Scoop,100,2,200
2019-03-11,Cafe Caramel,160,3,480
2019-03-11,Cafe Caramel,160,5,800
2019-03-11,Death by Chocolate,180,3,540
2019-03-11,Hot Chocolate Fudge,120,3,360
2019-03-11,Vanilla Single Scoop,50,5,250
2019-03-11,Hot Chocolate Fudge,120,4,480
2019-03-11,Death by Chocolate,180,3,540
2019-03-11,Cake Fudge,150,5,750
2019-03-11,Vanilla Double Scoop,80,5,400
2019-03-11,Butterscotch Single Scoop,60,3,180
2019-03-11,Cafe Caramel,160,1,160
2019-03-11,Butterscotch Single Scoop,60,1,60
2019-03-11,Cafe Caramel,160,5,800
2019-03-11,Cake Fudge,150,3,450
2019-03-11,Vanilla Single Scoop,50,2,100
2019-03-11,Vanilla Single Scoop,50,1,50
2019-03-11,Death by Chocolate,180,3,540
2019-03-11,Hot Chocolate Fudge,120,3,360
2019-03-11,Hot Chocolate Fudge,120,2,240
2019-03-11,Cafe Caramel,160,2,320
2019-03-11,Mint Fudge,120,5,600
2019-03-11,Cake Fudge,150,2,300
2019-03-11,Vanilla Double Scoop,80,5,400
2019-03-11,Hot Chocolate Fudge,120,5,600
2019-03-11,Vanilla Double Scoop,80,4,320
2019-03-11,Vanilla Single Scoop,50,1,50
2019-03-11,Death by Chocolate,180,4,720
2019-03-11,Hot Chocolate Fudge,120,2,240
2019-03-11,Cake Fudge,150,2,300
2019-03-11,Butterscotch Single Scoop,60,1,60
2019-03-11,Hot Chocolate Fudge,120,4,480
2019-03-11,Hot Chocolate Fudge,120,3,360
2019-03-11,Death by Chocolate,180,4,720
2019-03-11,Death by Chocolate,180,5,900
2019-03-11,Death by Chocolate,180,5,900
2019-03-11,Death by Chocolate,180,4,720
2019-03-11,Cake Fudge,150,4,600
2019-03-11,Hot Chocolate Fudge,120,1,120
2019-03-11,Vanilla Double Scoop,80,1,80
2019-03-11,Hot Chocolate Fudge,120,1,120
2019-03-11,Butterscotch Single Scoop,60,3,180
2019-03-11,Pista Double Scoop,90,2,180
2019-03-11,Vanilla Double Scoop,80,2,160
2019-03-11,Cake Fudge,150,2,300
2019-03-11,Hot Chocolate Fudge,120,5,600
2019-03-11,Vanilla Single Scoop,50,1,50
2019-03-11,Banana Split,140,1,140
2019-03-11,Vanilla Double Scoop,80,5,400
2019-03-11,Vanilla Single Scoop,50,5,250
2019-03-11,Pista Double Scoop,90,3,270
2019-03-11,Vanilla Double Scoop,80,2,160
2019-03-11,Dew Drop Sundae,150,3,450
2019-03-11,Vanilla Single Scoop,50,4,200
2019-03-11,Vanilla Double Scoop,80,1,80
2019-03-11,Butterscotch Single Scoop,60,2,120
2019-03-11,Vanilla Double Scoop,80,3,240
2019-03-11,Vanilla Single Scoop,50,2,100
2019-03-11,Fig and Honey Single Scoop,60,3,180
2019-03-11,Butterscotch Single Scoop,60,2,120
2019-03-11,Rocky Road Single Scoop,50,3,150
2019-03-11,Hot Chocolate Fudge,120,4,480
2019-03-11,Death by Chocolate,180,2,360
2019-03-11,Butterscotch Single Scoop,60,3,180
2019-03-11,Mint Fudge,120,3,360
2019-03-11,Cake Fudge,150,5,750
2019-03-11,Butterscotch Single Scoop,60,5,300
2019-03-11,Hot Chocolate Fudge,120,3,360
2019-03-11,Vanilla Single Scoop,50,4,200
2019-03-11,Vanilla Double Scoop,80,2,160
2019-03-11,Dry Fruit Single Scoop,60,4,240
2019-03-11,Hot Chocolate Fudge,120,5,600
2019-03-11,Death by Chocolate,180,2,360
2019-03-11,Cake Fudge,150,2,300
2019-03-11,Death by Chocolate,180,1,180
2019-03-11,Hot Chocolate Fudge,120,5,600
2019-03-11,Hot Chocolate Fudge,120,1,120
2019-03-11,Cake Fudge,150,3,450
2019-03-11,Cake Fudge,150,2,300
2019-03-11,Dry Fruit Double Scoop,90,5,450
2019-03-11,Vanilla Double Scoop,80,2,160
2019-03-11,Cake Fudge,150,5,750
2019-03-11,Hot Chocolate Fudge,120,5,600
2019-03-11,Butterscotch Single Scoop,60,4,240
2019-03-11,Cake Fudge,150,4,600
2019-03-11,Cake Fudge,150,4,600
2019-03-11,Cake Fudge,150,2,300
2019-03-11,Hot Chocolate Fudge,120,3,360
2019-03-11,Vanilla Single Scoop,50,5,250
2019-03-11,Vanilla Single Scoop,50,2,100
2019-03-11,Vanilla Double Scoop,80,5,400
2019-03-11,Butterscotch Single Scoop,60,2,120
2019-03-11,Vanilla Double Scoop,80,4,320
2019-03-11,Death by Chocolate,180,2,360
2019-03-11,Mint Fudge,120,2,240
2019-03-11,Butterscotch Single Scoop,60,5,300
2019-03-11,Cafe Caramel,160,1,160
2019-03-11,Cake Fudge,150,2,300
2019-03-11,Butterscotch Single Scoop,60,2,120
2019-03-11,Death by Chocolate,180,5,900
2019-03-11,Cafe Caramel,160,3,480
2019-03-11,Vanilla Double Scoop,80,3,240
2019-03-11,Hot Chocolate Fudge,120,5,600
2019-03-11,Vanilla Double Scoop,80,3,240
2019-03-11,Hot Chocolate Fudge,120,5,600
2019-03-11,Chocolate Europa Single Scoop,70,1,70
2019-03-11,Chocolate Europa Double Scoop,100,5,500
2019-03-11,Hot Chocolate Fudge,120,4,480
2019-03-11,Hot Chocolate Fudge,120,3,360
2019-03-11,Dew Drop Sundae,150,2,300
2019-03-11,Vanilla Double Scoop,80,1,80
2019-03-11,Vanilla Double Scoop,80,3,240
2019-03-11,Hot Chocolate Fudge,120,3,360
2019-03-11,Vanilla Single Scoop,50,5,250
2019-03-11,Cafe Caramel,160,3,480
2019-03-11,Vanilla Single Scoop,50,5,250
2019-03-11,Butterscotch Single Scoop,60,5,300
2019-03-11,Vanilla Double Scoop,80,5,400
2019-03-11,Cake Fudge,150,1,150
2019-03-11,Vanilla Double Scoop,80,2,160
2019-03-11,Death by Chocolate,180,2,360
2019-03-11,Death by Chocolate,180,4,720
2019-03-11,Hot Chocolate Fudge,120,1,120
2019-03-11,Hot Chocolate Fudge,120,1,120
2019-03-12,Butterscotch Single Scoop,60,4,240
2019-03-12,Hot Chocolate Fudge,120,4,480
2019-03-12,Death by Chocolate,180,1,180
2019-03-12,Vanilla Single Scoop,50,5,250
2019-03-12,Fig and Honey Double Scoop,90,4,360
2019-03-12,Chocolate Europa Single Scoop,70,4,280
2019-03-12,Pista Single Scoop,60,3,180
2019-03-12,Caramel Crunch Single Scoop,70,1,70
2019-03-12,Trilogy,160,3,480
2019-03-12,Hot Chocolate Fudge,120,2,240
2019-03-12,Vanilla Double Scoop,80,3,240
2019-03-12,Death by Chocolate,180,4,720
2019-03-12,Death by Chocolate,180,5,900
2019-03-12,Chocolate Europa Single Scoop,70,3,210
2019-03-12,Cafe Caramel,160,1,160
2019-03-12,Fig and Honey Double Scoop,90,1,90
2019-03-12,Vanilla Double Scoop,80,2,160
2019-03-12,Almond Fudge,150,4,600
2019-03-12,Fig and Honey Single Scoop,60,5,300
2019-03-12,Vanilla Single Scoop,50,3,150
2019-03-12,Butterscotch Single Scoop,60,4,240
2019-03-12,Cake Fudge,150,2,300
2019-03-12,Caramel Crunch Single Scoop,70,1,70
2019-03-12,Butterscotch Single Scoop,60,4,240
2019-03-12,Death by Chocolate,180,5,900
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Cake Fudge,150,1,150
2019-03-12,Hot Chocolate Fudge,120,5,600
2019-03-12,Vanilla Single Scoop,50,4,200
2019-03-12,Cake Fudge,150,3,450
2019-03-12,Cafe Caramel,160,4,640
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Vanilla Double Scoop,80,1,80
2019-03-12,Hot Chocolate Fudge,120,5,600
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Butterscotch Single Scoop,60,4,240
2019-03-12,Hot Chocolate Fudge,120,1,120
2019-03-12,Death by Chocolate,180,3,540
2019-03-12,Caramel Crunch Double Scoop,100,5,500
2019-03-12,Cafe Caramel,160,1,160
2019-03-12,Butterscotch Single Scoop,60,5,300
2019-03-12,Vanilla Single Scoop,50,2,100
2019-03-12,Death by Chocolate,180,3,540
2019-03-12,Cafe Caramel,160,3,480
2019-03-12,Vanilla Single Scoop,50,4,200
2019-03-12,Dry Fruit Single Scoop,60,3,180
2019-03-12,Vanilla Single Scoop,50,4,200
2019-03-12,Cafe Caramel,160,5,800
2019-03-12,Death by Chocolate,180,1,180
2019-03-12,Butterscotch Single Scoop,60,5,300
2019-03-12,Death by Chocolate,180,5,900
2019-03-12,Dry Fruit Single Scoop,60,3,180
2019-03-12,Vanilla Double Scoop,80,1,80
2019-03-12,Cake Fudge,150,4,600
2019-03-12,Butterscotch Double Scoop,90,1,90
2019-03-12,Cake Fudge,150,2,300
2019-03-12,Hot Chocolate Fudge,120,5,600
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Hot Chocolate Fudge,120,4,480
2019-03-12,Cake Fudge,150,3,450
2019-03-12,Hot Chocolate Fudge,120,2,240
2019-03-12,Caramel Crunch Double Scoop,100,1,100
2019-03-12,Vanilla Single Scoop,50,3,150
2019-03-12,Cake Fudge,150,4,600
2019-03-12,Vanilla Single Scoop,50,1,50
2019-03-12,Vanilla Single Scoop,50,5,250
2019-03-12,Cafe Caramel,160,5,800
2019-03-12,Almond Fudge,150,1,150
2019-03-12,Butterscotch Single Scoop,60,3,180
2019-03-12,Vanilla Single Scoop,50,1,50
2019-03-12,Cake Fudge,150,1,150
2019-03-12,Vanilla Single Scoop,50,4,200
2019-03-12,Vanilla Double Scoop,80,5,400
2019-03-12,Hot Chocolate Fudge,120,1,120
2019-03-12,Vanilla Double Scoop,80,2,160
2019-03-12,Cake Fudge,150,3,450
2019-03-12,Vanilla Single Scoop,50,3,150
2019-03-12,Cake Fudge,150,4,600
2019-03-12,Death by Chocolate,180,2,360
2019-03-12,Vanilla Double Scoop,80,4,320
2019-03-12,Hot Chocolate Fudge,120,1,120
2019-03-12,Hot Chocolate Fudge,120,5,600
2019-03-12,Vanilla Single Scoop,50,5,250
2019-03-12,Vanilla Single Scoop,50,5,250
2019-03-12,Butterscotch Single Scoop,60,5,300
2019-03-12,Vanilla Single Scoop,50,4,200
2019-03-12,Cake Fudge,150,2,300
2019-03-12,Cake Fudge,150,4,600
2019-03-12,Butterscotch Single Scoop,60,1,60
2019-03-12,Banana Split,140,4,560
2019-03-12,Vanilla Double Scoop,80,2,160
2019-03-12,Butterscotch Single Scoop,60,1,60
2019-03-12,Death by Chocolate,180,4,720
2019-03-12,Hot Chocolate Fudge,120,4,480
2019-03-12,Death by Chocolate,180,2,360
2019-03-12,Vanilla Single Scoop,50,2,100
2019-03-12,Vanilla Single Scoop,50,5,250
2019-03-12,Butterscotch Single Scoop,60,4,240
2019-03-12,Hot Chocolate Fudge,120,4,480
2019-03-12,Dry Fruit Single Scoop,60,5,300
2019-03-12,Butterscotch Single Scoop,60,1,60
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Caramel Crunch Double Scoop,100,1,100
2019-03-12,Cake Fudge,150,4,600
2019-03-12,Vanilla Double Scoop,80,3,240
2019-03-12,Hot Chocolate Fudge,120,5,600
2019-03-12,Mint Fudge,120,5,600
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Vanilla Single Scoop,50,1,50
2019-03-12,Death by Chocolate,180,3,540
2019-03-12,Cake Fudge,150,2,300
2019-03-12,Cake Fudge,150,5,750
2019-03-12,Hot Chocolate Fudge,120,2,240
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Butterscotch Single Scoop,60,2,120
2019-03-12,Butterscotch Single Scoop,60,5,300
2019-03-12,Rocky Road Single Scoop,50,4,200
2019-03-12,Cake Fudge,150,2,300
2019-03-12,Vanilla Single Scoop,50,2,100
2019-03-12,Cake Fudge,150,4,600
2019-03-12,Chocolate Europa Double Scoop,100,1,100
2019-03-12,Hot Chocolate Fudge,120,3,360
2019-03-12,Chocolate Europa Double Scoop,100,3,300
2019-03-12,Vanilla Double Scoop,80,5,400
2019-03-12,Death by Chocolate,180,3,540
2019-03-12,Hot Chocolate Fudge,120,1,120
2019-03-12,Vanilla Double Scoop,80,2,160
2019-03-12,Vanilla Double Scoop,80,3,240
2019-03-12,Vanilla Double Scoop,80,1,80
2019-03-12,Hot Chocolate Fudge,120,5,600
2019-03-12,Butterscotch Single Scoop,60,5,300
2019-03-12,Hot Chocolate Fudge,120,4,480
2019-03-12,Hot Chocolate Fudge,120,5,600
2019-03-12,Mint Fudge,120,5,600
2019-03-12,Pista Double Scoop,90,3,270
2019-03-12,Cake Fudge,150,4,600
2019-03-12,Butterscotch Single Scoop,60,5,300
2019-03-12,Dry Fruit Double Scoop,90,3,270
2019-03-12,Almond Fudge,150,4,600
2019-03-12,Trilogy,160,4,640
2019-03-12,Cake Fudge,150,4,600
2019-03-12,Hot Chocolate Fudge,120,4,480
2019-03-12,Butterscotch Single Scoop,60,1,60
2019-03-12,Cake Fudge,150,2,300
2019-03-13,Vanilla Double Scoop,80,1,80
2019-03-13,Hot Chocolate Fudge,120,3,360
2019-03-13,Cake Fudge,150,5,750
2019-03-13,Butterscotch Single Scoop,60,5,300
2019-03-13,Vanilla Double Scoop,80,5,400
2019-03-13,Hot Chocolate Fudge,120,5,600
2019-03-13,Vanilla Double Scoop,80,2,160
2019-03-13,Vanilla Double Scoop,80,5,400
2019-03-13,Hot Chocolate Fudge,120,5,600
2019-03-13,Vanilla Single Scoop,50,2,100
2019-03-13,Vanilla Double Scoop,80,4,320
2019-03-13,Butterscotch Single Scoop,60,4,240
2019-03-13,Hot Chocolate Fudge,120,1,120
2019-03-13,Vanilla Double Scoop,80,4,320
2019-03-13,Hot Chocolate Fudge,120,1,120
2019-03-13,Caramel Crunch Double Scoop,100,1,100
2019-03-13,Vanilla Single Scoop,50,5,250
2019-03-13,Caramel Crunch Single Scoop,70,4,280
2019-03-13,Cafe Caramel,160,5,800
2019-03-13,Hot Chocolate Fudge,120,5,600
2019-03-13,Cake Fudge,150,3,450
2019-03-13,Fig and Honey Single Scoop,60,2,120
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Cake Fudge,150,5,750
2019-03-13,Butterscotch Single Scoop,60,1,60
2019-03-13,Hot Chocolate Fudge,120,3,360
2019-03-13,Death by Chocolate,180,5,900
2019-03-13,Butterscotch Single Scoop,60,2,120
2019-03-13,Death by Chocolate,180,4,720
2019-03-13,Death by Chocolate,180,5,900
2019-03-13,Rocky Road Double Scoop,80,2,160
2019-03-13,Dew Drop Sundae,150,5,750
2019-03-13,Cake Fudge,150,2,300
2019-03-13,Death by Chocolate,180,4,720
2019-03-13,Hot Chocolate Fudge,120,5,600
2019-03-13,Butterscotch Single Scoop,60,4,240
2019-03-13,Hot Chocolate Fudge,120,2,240
2019-03-13,Vanilla Single Scoop,50,4,200
2019-03-13,Vanilla Single Scoop,50,5,250
2019-03-13,Vanilla Single Scoop,50,1,50
2019-03-13,Almond Fudge,150,2,300
2019-03-13,Vanilla Double Scoop,80,4,320
2019-03-13,Death by Chocolate,180,3,540
2019-03-13,Hot Chocolate Fudge,120,3,360
2019-03-13,Trilogy,160,4,640
2019-03-13,Butterscotch Single Scoop,60,1,60
2019-03-13,Butterscotch Single Scoop,60,3,180
2019-03-13,Cake Fudge,150,3,450
2019-03-13,Death by Chocolate,180,4,720
2019-03-13,Hot Chocolate Fudge,120,2,240
2019-03-13,Caramel Crunch Single Scoop,70,3,210
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Vanilla Single Scoop,50,3,150
2019-03-13,Vanilla Single Scoop,50,5,250
2019-03-13,Death by Chocolate,180,3,540
2019-03-13,Rocky Road Single Scoop,50,3,150
2019-03-13,Vanilla Single Scoop,50,2,100
2019-03-13,Vanilla Double Scoop,80,2,160
2019-03-13,Vanilla Double Scoop,80,3,240
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Butterscotch Single Scoop,60,5,300
2019-03-13,Cake Fudge,150,1,150
2019-03-13,Butterscotch Single Scoop,60,4,240
2019-03-13,Cake Fudge,150,3,450
2019-03-13,Hot Chocolate Fudge,120,5,600
2019-03-13,Cafe Caramel,160,4,640
2019-03-13,Vanilla Double Scoop,80,3,240
2019-03-13,Vanilla Single Scoop,50,4,200
2019-03-13,Cake Fudge,150,2,300
2019-03-13,Death by Chocolate,180,3,540
2019-03-13,Butterscotch Single Scoop,60,2,120
2019-03-13,Hot Chocolate Fudge,120,5,600
2019-03-13,Almond Fudge,150,1,150
2019-03-13,Rocky Road Single Scoop,50,1,50
2019-03-13,Chocolate Europa Single Scoop,70,5,350
2019-03-13,Mint Fudge,120,5,600
2019-03-13,Cafe Caramel,160,1,160
2019-03-13,Vanilla Single Scoop,50,5,250
2019-03-13,Cake Fudge,150,4,600
2019-03-13,Vanilla Double Scoop,80,2,160
2019-03-13,Cake Fudge,150,2,300
2019-03-13,Hot Chocolate Fudge,120,2,240
2019-03-13,Cake Fudge,150,4,600
2019-03-13,Mint Fudge,120,5,600
2019-03-13,Vanilla Double Scoop,80,4,320
2019-03-13,Hot Chocolate Fudge,120,3,360
2019-03-13,Vanilla Double Scoop,80,4,320
2019-03-13,Cafe Caramel,160,1,160
2019-03-13,Hot Chocolate Fudge,120,3,360
2019-03-13,Vanilla Single Scoop,50,4,200
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Vanilla Double Scoop,80,2,160
2019-03-13,Vanilla Single Scoop,50,3,150
2019-03-13,Hot Chocolate Fudge,120,3,360
2019-03-13,Vanilla Single Scoop,50,3,150
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Pista Double Scoop,90,3,270
2019-03-13,Death by Chocolate,180,3,540
2019-03-13,Death by Chocolate,180,1,180
2019-03-13,Cafe Caramel,160,3,480
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Cake Fudge,150,1,150
2019-03-13,Vanilla Double Scoop,80,2,160
2019-03-13,Vanilla Double Scoop,80,1,80
2019-03-13,Butterscotch Single Scoop,60,5,300
2019-03-13,Butterscotch Single Scoop,60,3,180
2019-03-13,Vanilla Single Scoop,50,1,50
2019-03-13,Butterscotch Single Scoop,60,1,60
2019-03-13,Butterscotch Double Scoop,90,2,180
2019-03-13,Chocolate Europa Double Scoop,100,5,500
2019-03-13,Death by Chocolate,180,4,720
2019-03-13,Vanilla Double Scoop,80,5,400
2019-03-13,Cafe Caramel,160,2,320
2019-03-13,Cake Fudge,150,5,750
2019-03-13,Hot Chocolate Fudge,120,5,600
2019-03-13,Dry Fruit Single Scoop,60,2,120
2019-03-13,Cake Fudge,150,4,600
2019-03-13,Butterscotch Single Scoop,60,5,300
2019-03-13,Pista Single Scoop,60,3,180
2019-03-13,Cake Fudge,150,2,300
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Vanilla Single Scoop,50,1,50
2019-03-13,Cake Fudge,150,5,750
2019-03-13,Cake Fudge,150,5,750
2019-03-13,Death by Chocolate,180,3,540
2019-03-13,Cake Fudge,150,3,450
2019-03-13,Caramel Crunch Single Scoop,70,1,70
2019-03-13,Death by Chocolate,180,4,720
2019-03-13,Death by Chocolate,180,1,180
2019-03-13,Cake Fudge,150,2,300
2019-03-13,Cake Fudge,150,2,300
2019-03-13,Hot Chocolate Fudge,120,3,360
2019-03-13,Hot Chocolate Fudge,120,4,480
2019-03-13,Death by Chocolate,180,1,180
2019-03-13,Dry Fruit Single Scoop,60,5,300
2019-03-13,Hot Chocolate Fudge,120,1,120
2019-03-13,Fig and Honey Double Scoop,90,1,90
2019-03-13,Chocolate Europa Double Scoop,100,4,400
2019-03-13,Vanilla Single Scoop,50,1,50
2019-03-13,Vanilla Double Scoop,80,5,400
2019-03-13,Butterscotch Single Scoop,60,5,300
2019-03-13,Vanilla Single Scoop,50,5,250
2019-03-13,Fig and Honey Double Scoop,90,4,360
2019-03-13,Dry Fruit Double Scoop,90,4,360
2019-03-13,Cake Fudge,150,4,600
2019-03-13,Vanilla Double Scoop,80,5,400
2019-03-13,Hot Chocolate Fudge,120,3,360
2019-03-13,Vanilla Single Scoop,50,1,50
2019-03-13,Cake Fudge,150,2,300
2019-03-13,Vanilla Single Scoop,50,4,200
2019-03-13,Vanilla Double Scoop,80,2,160
2019-03-13,Pista Double Scoop,90,3,270
2019-03-13,Butterscotch Single Scoop,60,4,240
2019-03-13,Cafe Caramel,160,3,480
2019-03-13,Cake Fudge,150,2,300
2019-03-13,Death by Chocolate,180,4,720
2019-03-13,Fig and Honey Single Scoop,60,1,60
2019-03-13,Vanilla Double Scoop,80,5,400
2019-03-13,Vanilla Double Scoop,80,4,320
2019-03-13,Vanilla Single Scoop,50,1,50
2019-03-13,Butterscotch Single Scoop,60,3,180
2019-03-14,Chocolate Europa Single Scoop,70,2,140
2019-03-14,Vanilla Single Scoop,50,2,100
2019-03-14,Butterscotch Single Scoop,60,2,120
2019-03-14,Dry Fruit Double Scoop,90,4,360
2019-03-14,Hot Chocolate Fudge,120,5,600
2019-03-14,Vanilla Double Scoop,80,5,400
2019-03-14,Death by Chocolate,180,1,180
2019-03-14,Cake Fudge,150,5,750
2019-03-14,Vanilla Single Scoop,50,2,100
2019-03-14,Hot Chocolate Fudge,120,1,120
2019-03-14,Cake Fudge,150,3,450
2019-03-14,Butterscotch Single Scoop,60,4,240
2019-03-14,Cake Fudge,150,4,600
2019-03-14,Fig and Honey Double Scoop,90,4,360
2019-03-14,Death by Chocolate,180,5,900
2019-03-14,Vanilla Double Scoop,80,5,400
2019-03-14,Hot Chocolate Fudge,120,4,480
2019-03-14,Cake Fudge,150,5,750
2019-03-14,Cake Fudge,150,1,150
2019-03-14,Vanilla Single Scoop,50,4,200
2019-03-14,Vanilla Single Scoop,50,3,150
2019-03-14,Cafe Caramel,160,1,160
2019-03-14,Death by Chocolate,180,1,180
2019-03-14,Hot Chocolate Fudge,120,5,600
2019-03-14,Death by Chocolate,180,1,180
2019-03-14,Butterscotch Single Scoop,60,2,120
2019-03-14,Vanilla Double Scoop,80,1,80
2019-03-14,Vanilla Single Scoop,50,5,250
2019-03-14,Pista Single Scoop,60,5,300
2019-03-14,Hot Chocolate Fudge,120,3,360
2019-03-14,Butterscotch Single Scoop,60,3,180
2019-03-14,Cafe Caramel,160,2,320
2019-03-14,Vanilla Single Scoop,50,1,50
2019-03-14,Vanilla Double Scoop,80,1,80
2019-03-14,Hot Chocolate Fudge,120,5,600
2019-03-14,Death by Chocolate,180,1,180
2019-03-14,Death by Chocolate,180,5,900
2019-03-14,Cafe Caramel,160,3,480
2019-03-14,Vanilla Double Scoop,80,2,160
2019-03-14,Butterscotch Single Scoop,60,3,180
2019-03-14,Vanilla Double Scoop,80,1,80
2019-03-14,Vanilla Single Scoop,50,3,150
2019-03-14,Vanilla Single Scoop,50,3,150
2019-03-14,Vanilla Double Scoop,80,3,240
2019-03-14,Death by Chocolate,180,3,540
2019-03-14,Cake Fudge,150,1,150
2019-03-14,Cake Fudge,150,3,450
2019-03-14,Fig and Honey Single Scoop,60,5,300
2019-03-14,Hot Chocolate Fudge,120,4,480
2019-03-14,Vanilla Double Scoop,80,4,320
2019-03-14,Hot Chocolate Fudge,120,3,360
2019-03-14,Chocolate Europa Double Scoop,100,4,400
2019-03-14,Pista Double Scoop,90,3,270
2019-03-14,Vanilla Single Scoop,50,1,50
2019-03-14,Vanilla Double Scoop,80,3,240
2019-03-14,Vanilla Single Scoop,50,4,200
2019-03-14,Death by Chocolate,180,5,900
2019-03-14,Mint Fudge,120,1,120
2019-03-14,Cake Fudge,150,1,150
2019-03-14,Vanilla Single Scoop,50,2,100
2019-03-14,Mint Fudge,120,5,600
2019-03-14,Hot Chocolate Fudge,120,5,600
2019-03-14,Cake Fudge,150,4,600
2019-03-14,Vanilla Single Scoop,50,2,100
2019-03-14,Cake Fudge,150,4,600
2019-03-14,Rocky Road Single Scoop,50,1,50
2019-03-14,Cake Fudge,150,1,150
2019-03-14,Vanilla Single Scoop,50,1,50
2019-03-14,Vanilla Double Scoop,80,1,80
2019-03-14,Pista Double Scoop,90,2,180
2019-03-14,Hot Chocolate Fudge,120,3,360
2019-03-14,Butterscotch Single Scoop,60,3,180
2019-03-14,Banana Split,140,2,280
2019-03-14,Banana Split,140,3,420
2019-03-14,Hot Chocolate Fudge,120,2,240
2019-03-14,Hot Chocolate Fudge,120,3,360
2019-03-14,Rocky Road Double Scoop,80,2,160
2019-03-14,Fig and Honey Double Scoop,90,3,270
2019-03-14,Cake Fudge,150,3,450
2019-03-14,Butterscotch Single Scoop,60,5,300
2019-03-14,Vanilla Single Scoop,50,2,100
2019-03-14,Cafe Caramel,160,5,800
2019-03-14,Death by Chocolate,180,3,540
2019-03-14,Vanilla Double Scoop,80,4,320
2019-03-14,Cake Fudge,150,5,750
2019-03-14,Cake Fudge,150,3,450
2019-03-14,Cafe Caramel,160,4,640
2019-03-14,Death by Chocolate,180,1,180
2019-03-14,Hot Chocolate Fudge,120,1,120
2019-03-14,Cafe Caramel,160,3,480
2019-03-14,Cafe Caramel,160,1,160
2019-03-14,Vanilla Single Scoop,50,3,150
2019-03-14,Cake Fudge,150,5,750
2019-03-14,Hot Chocolate Fudge,120,4,480
2019-03-14,Butterscotch Single Scoop,60,5,300
2019-03-14,Vanilla Double Scoop,80,2,160
2019-03-14,Hot Chocolate Fudge,120,2,240
2019-03-14,Vanilla Double Scoop,80,2,160
2019-03-14,Butterscotch Single Scoop,60,1,60
2019-03-14,Vanilla Single Scoop,50,2,100
2019-03-14,Death by Chocolate,180,5,900
2019-03-14,Dew Drop Sundae,150,4,600
2019-03-14,Caramel Crunch Double Scoop,100,1,100
2019-03-14,Dry Fruit Double Scoop,90,3,270
2019-03-14,Vanilla Single Scoop,50,5,250
2019-03-14,Hot Chocolate Fudge,120,1,120
2019-03-14,Hot Chocolate Fudge,120,3,360
2019-03-14,Hot Chocolate Fudge,120,1,120
2019-03-14,Vanilla Double Scoop,80,2,160
2019-03-14,Butterscotch Single Scoop,60,5,300
2019-03-14,Hot Chocolate Fudge,120,2,240
2019-03-14,Hot Chocolate Fudge,120,3,360
2019-03-14,Cafe Caramel,160,2,320
2019-03-14,Vanilla Single Scoop,50,4,200
2019-03-14,Cake Fudge,150,4,600
2019-03-14,Death by Chocolate,180,5,900
2019-03-14,Vanilla Double Scoop,80,3,240
2019-03-14,Hot Chocolate Fudge,120,1,120
2019-03-14,Vanilla Double Scoop,80,1,80
2019-03-14,Cafe Caramel,160,4,640
2019-03-14,Hot Chocolate Fudge,120,1,120
2019-03-14,Almond Fudge,150,5,750
2019-03-14,Vanilla Single Scoop,50,4,200
2019-03-14,Hot Chocolate Fudge,120,2,240
2019-03-14,Vanilla Double Scoop,80,4,320
2019-03-14,Cake Fudge,150,5,750
2019-03-14,Death by Chocolate,180,4,720
2019-03-14,Caramel Crunch Double Scoop,100,5,500
2019-03-14,Cafe Caramel,160,3,480
2019-03-14,Cake Fudge,150,4,600
2019-03-14,Vanilla Double Scoop,80,3,240
2019-03-14,Hot Chocolate Fudge,120,4,480
2019-03-14,Vanilla Double Scoop,80,4,320
2019-03-14,Cafe Caramel,160,2,320
2019-03-14,Hot Chocolate Fudge,120,2,240
2019-03-14,Vanilla Single Scoop,50,5,250
2019-03-14,Death by Chocolate,180,5,900
2019-03-14,Hot Chocolate Fudge,120,3,360
2019-03-14,Vanilla Single Scoop,50,1,50
2019-03-14,Vanilla Double Scoop,80,2,160
2019-03-14,Butterscotch Double Scoop,90,5,450
2019-03-14,Cake Fudge,150,1,150
2019-03-14,Cafe Caramel,160,3,480
2019-03-14,Hot Chocolate Fudge,120,1,120
2019-03-15,Cake Fudge,150,3,450
2019-03-15,Dry Fruit Single Scoop,60,3,180
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Cake Fudge,150,2,300
2019-03-15,Vanilla Double Scoop,80,2,160
2019-03-15,Vanilla Single Scoop,50,1,50
2019-03-15,Vanilla Double Scoop,80,4,320
2019-03-15,Cafe Caramel,160,1,160
2019-03-15,Rocky Road Single Scoop,50,1,50
2019-03-15,Death by Chocolate,180,1,180
2019-03-15,Cake Fudge,150,2,300
2019-03-15,Cake Fudge,150,2,300
2019-03-15,Vanilla Double Scoop,80,3,240
2019-03-15,Vanilla Double Scoop,80,5,400
2019-03-15,Butterscotch Single Scoop,60,4,240
2019-03-15,Vanilla Double Scoop,80,1,80
2019-03-15,Butterscotch Double Scoop,90,3,270
2019-03-15,Butterscotch Single Scoop,60,2,120
2019-03-15,Death by Chocolate,180,4,720
2019-03-15,Hot Chocolate Fudge,120,4,480
2019-03-15,Cafe Caramel,160,2,320
2019-03-15,Vanilla Single Scoop,50,1,50
2019-03-15,Cake Fudge,150,5,750
2019-03-15,Cafe Caramel,160,4,640
2019-03-15,Hot Chocolate Fudge,120,4,480
2019-03-15,Hot Chocolate Fudge,120,3,360
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Vanilla Single Scoop,50,2,100
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Death by Chocolate,180,5,900
2019-03-15,Death by Chocolate,180,2,360
2019-03-15,Vanilla Single Scoop,50,1,50
2019-03-15,Chocolate Europa Double Scoop,100,2,200
2019-03-15,Chocolate Europa Single Scoop,70,1,70
2019-03-15,Death by Chocolate,180,3,540
2019-03-15,Vanilla Single Scoop,50,5,250
2019-03-15,Hot Chocolate Fudge,120,1,120
2019-03-15,Butterscotch Double Scoop,90,1,90
2019-03-15,Vanilla Double Scoop,80,2,160
2019-03-15,Butterscotch Single Scoop,60,3,180
2019-03-15,Fig and Honey Single Scoop,60,2,120
2019-03-15,Vanilla Double Scoop,80,3,240
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Death by Chocolate,180,5,900
2019-03-15,Butterscotch Single Scoop,60,5,300
2019-03-15,Vanilla Double Scoop,80,3,240
2019-03-15,Cake Fudge,150,5,750
2019-03-15,Vanilla Single Scoop,50,1,50
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Cafe Caramel,160,1,160
2019-03-15,Death by Chocolate,180,1,180
2019-03-15,Cake Fudge,150,5,750
2019-03-15,Vanilla Double Scoop,80,2,160
2019-03-15,Death by Chocolate,180,1,180
2019-03-15,Vanilla Single Scoop,50,1,50
2019-03-15,Hot Chocolate Fudge,120,4,480
2019-03-15,Cake Fudge,150,4,600
2019-03-15,Cafe Caramel,160,4,640
2019-03-15,Vanilla Double Scoop,80,3,240
2019-03-15,Vanilla Double Scoop,80,4,320
2019-03-15,Butterscotch Single Scoop,60,5,300
2019-03-15,Vanilla Double Scoop,80,1,80
2019-03-15,Vanilla Double Scoop,80,1,80
2019-03-15,Vanilla Double Scoop,80,1,80
2019-03-15,Hot Chocolate Fudge,120,2,240
2019-03-15,Vanilla Single Scoop,50,5,250
2019-03-15,Vanilla Single Scoop,50,5,250
2019-03-15,Dry Fruit Double Scoop,90,3,270
2019-03-15,Butterscotch Single Scoop,60,1,60
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Trilogy,160,3,480
2019-03-15,Butterscotch Single Scoop,60,5,300
2019-03-15,Dry Fruit Single Scoop,60,3,180
2019-03-15,Hot Chocolate Fudge,120,2,240
2019-03-15,Hot Chocolate Fudge,120,4,480
2019-03-15,Cafe Caramel,160,5,800
2019-03-15,Hot Chocolate Fudge,120,1,120
2019-03-15,Vanilla Double Scoop,80,4,320
2019-03-15,Dew Drop Sundae,150,1,150
2019-03-15,Fig and Honey Double Scoop,90,2,180
2019-03-15,Death by Chocolate,180,2,360
2019-03-15,Butterscotch Single Scoop,60,5,300
2019-03-15,Pista Single Scoop,60,3,180
2019-03-15,Vanilla Single Scoop,50,4,200
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Death by Chocolate,180,2,360
2019-03-15,Vanilla Single Scoop,50,4,200
2019-03-15,Butterscotch Single Scoop,60,4,240
2019-03-15,Dry Fruit Single Scoop,60,2,120
2019-03-15,Butterscotch Single Scoop,60,2,120
2019-03-15,Vanilla Single Scoop,50,4,200
2019-03-15,Trilogy,160,3,480
2019-03-15,Death by Chocolate,180,5,900
2019-03-15,Vanilla Double Scoop,80,4,320
2019-03-15,Cake Fudge,150,2,300
2019-03-15,Cake Fudge,150,4,600
2019-03-15,Hot Chocolate Fudge,120,4,480
2019-03-15,Butterscotch Single Scoop,60,5,300
2019-03-15,Cafe Caramel,160,5,800
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Chocolate Europa Single Scoop,70,2,140
2019-03-15,Vanilla Single Scoop,50,2,100
2019-03-15,Rocky Road Single Scoop,50,3,150
2019-03-15,Cake Fudge,150,4,600
2019-03-15,Death by Chocolate,180,1,180
2019-03-15,Cake Fudge,150,3,450
2019-03-15,Vanilla Double Scoop,80,2,160
2019-03-15,Death by Chocolate,180,2,360
2019-03-15,Death by Chocolate,180,4,720
2019-03-15,Butterscotch Single Scoop,60,5,300
2019-03-15,Butterscotch Single Scoop,60,4,240
2019-03-15,Hot Chocolate Fudge,120,5,600
2019-03-15,Hot Chocolate Fudge,120,3,360
2019-03-15,Butterscotch Single Scoop,60,4,240
2019-03-15,Hot Chocolate Fudge,120,3,360
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Hot Chocolate Fudge,120,4,480
2019-03-15,Hot Chocolate Fudge,120,4,480
2019-03-15,Death by Chocolate,180,3,540
2019-03-15,Vanilla Single Scoop,50,2,100
2019-03-15,Butterscotch Single Scoop,60,2,120
2019-03-15,Hot Chocolate Fudge,120,3,360
2019-03-15,Death by Chocolate,180,4,720
2019-03-15,Vanilla Double Scoop,80,1,80
2019-03-15,Butterscotch Single Scoop,60,4,240
2019-03-15,Vanilla Double Scoop,80,3,240
2019-03-15,Cake Fudge,150,4,600
2019-03-15,Cake Fudge,150,5,750
2019-03-15,Cake Fudge,150,2,300
2019-03-15,Hot Chocolate Fudge,120,1,120
2019-03-15,Butterscotch Single Scoop,60,4,240
2019-03-15,Cake Fudge,150,4,600
2019-03-15,Vanilla Double Scoop,80,2,160
2019-03-15,Caramel Crunch Single Scoop,70,5,350
2019-03-15,Death by Chocolate,180,3,540
2019-03-15,Cake Fudge,150,1,150
2019-03-15,Butterscotch Single Scoop,60,5,300
2019-03-15,Butterscotch Single Scoop,60,1,60
2019-03-15,Hot Chocolate Fudge,120,2,240
2019-03-15,Hot Chocolate Fudge,120,5,600
2019-03-15,Vanilla Single Scoop,50,2,100
2019-03-15,Vanilla Single Scoop,50,5,250
2019-03-15,Cake Fudge,150,3,450
2019-03-15,Vanilla Double Scoop,80,1,80
2019-03-15,Death by Chocolate,180,5,900
2019-03-15,Hot Chocolate Fudge,120,2,240
2019-03-15,Death by Chocolate,180,3,540
2019-03-15,Dry Fruit Double Scoop,90,5,450
2019-03-15,Cafe Caramel,160,3,480
2019-03-15,Dry Fruit Single Scoop,60,2,120
2019-03-15,Cake Fudge,150,2,300
2019-03-15,Butterscotch Single Scoop,60,4,240
2019-03-15,Hot Chocolate Fudge,120,3,360
2019-03-15,Vanilla Double Scoop,80,5,400
2019-03-15,Hot Chocolate Fudge,120,3,360
2019-03-15,Death by Chocolate,180,5,900
2019-03-15,Vanilla Single Scoop,50,3,150
2019-03-15,Butterscotch Single Scoop,60,3,180
2019-03-15,Hot Chocolate Fudge,120,3,360
2019-03-15,Pista Double Scoop,90,2,180
2019-03-15,Cafe Caramel,160,3,480
2019-03-15,Butterscotch Single Scoop,60,5,300
2019-03-15,Vanilla Double Scoop,80,5,400
2019-03-15,Cafe Caramel,160,3,480
2019-03-15,Cafe Caramel,160,3,480
2019-03-15,Vanilla Single Scoop,50,3,150
2019-03-15,Vanilla Single Scoop,50,1,50
2019-03-15,Vanilla Double Scoop,80,3,240
2019-03-15,Pista Double Scoop,90,3,270
2019-03-15,Vanilla Double Scoop,80,5,400
2019-03-15,Vanilla Double Scoop,80,3,240
2019-03-15,Butterscotch Single Scoop,60,3,180
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Vanilla Single Scoop,50,2,100
2019-03-16,Cake Fudge,150,1,150
2019-03-16,Cake Fudge,150,2,300
2019-03-16,Butterscotch Single Scoop,60,2,120
2019-03-16,Cake Fudge,150,2,300
2019-03-16,Death by Chocolate,180,5,900
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Butterscotch Single Scoop,60,1,60
2019-03-16,Butterscotch Single Scoop,60,2,120
2019-03-16,Death by Chocolate,180,4,720
2019-03-16,Cake Fudge,150,2,300
2019-03-16,Cake Fudge,150,4,600
2019-03-16,Vanilla Double Scoop,80,2,160
2019-03-16,Vanilla Double Scoop,80,2,160
2019-03-16,Cafe Caramel,160,2,320
2019-03-16,Vanilla Double Scoop,80,2,160
2019-03-16,Pista Double Scoop,90,3,270
2019-03-16,Death by Chocolate,180,2,360
2019-03-16,Pista Single Scoop,60,3,180
2019-03-16,Cake Fudge,150,3,450
2019-03-16,Cake Fudge,150,4,600
2019-03-16,Vanilla Single Scoop,50,1,50
2019-03-16,Trilogy,160,3,480
2019-03-16,Hot Chocolate Fudge,120,5,600
2019-03-16,Pista Single Scoop,60,5,300
2019-03-16,Caramel Crunch Double Scoop,100,5,500
2019-03-16,Hot Chocolate Fudge,120,1,120
2019-03-16,Cake Fudge,150,2,300
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Cake Fudge,150,2,300
2019-03-16,Cake Fudge,150,3,450
2019-03-16,Vanilla Single Scoop,50,1,50
2019-03-16,Vanilla Double Scoop,80,5,400
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Hot Chocolate Fudge,120,1,120
2019-03-16,Vanilla Single Scoop,50,3,150
2019-03-16,Cake Fudge,150,4,600
2019-03-16,Vanilla Double Scoop,80,5,400
2019-03-16,Vanilla Single Scoop,50,3,150
2019-03-16,Banana Split,140,5,700
2019-03-16,Banana Split,140,1,140
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Butterscotch Single Scoop,60,1,60
2019-03-16,Butterscotch Single Scoop,60,5,300
2019-03-16,Butterscotch Single Scoop,60,5,300
2019-03-16,Vanilla Single Scoop,50,4,200
2019-03-16,Chocolate Europa Double Scoop,100,2,200
2019-03-16,Dry Fruit Double Scoop,90,1,90
2019-03-16,Vanilla Single Scoop,50,5,250
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Butterscotch Single Scoop,60,2,120
2019-03-16,Death by Chocolate,180,2,360
2019-03-16,Cafe Caramel,160,4,640
2019-03-16,Vanilla Double Scoop,80,5,400
2019-03-16,Death by Chocolate,180,5,900
2019-03-16,Cake Fudge,150,1,150
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Death by Chocolate,180,5,900
2019-03-16,Cafe Caramel,160,5,800
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Cake Fudge,150,4,600
2019-03-16,Vanilla Double Scoop,80,5,400
2019-03-16,Vanilla Single Scoop,50,1,50
2019-03-16,Dry Fruit Double Scoop,90,5,450
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Cake Fudge,150,4,600
2019-03-16,Butterscotch Double Scoop,90,5,450
2019-03-16,Vanilla Single Scoop,50,5,250
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Cake Fudge,150,1,150
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Vanilla Double Scoop,80,5,400
2019-03-16,Death by Chocolate,180,5,900
2019-03-16,Butterscotch Single Scoop,60,4,240
2019-03-16,Death by Chocolate,180,1,180
2019-03-16,Dry Fruit Single Scoop,60,3,180
2019-03-16,Hot Chocolate Fudge,120,1,120
2019-03-16,Cake Fudge,150,1,150
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Vanilla Single Scoop,50,1,50
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Trilogy,160,3,480
2019-03-16,Dry Fruit Double Scoop,90,5,450
2019-03-16,Chocolate Europa Double Scoop,100,2,200
2019-03-16,Death by Chocolate,180,4,720
2019-03-16,Pista Double Scoop,90,5,450
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Vanilla Single Scoop,50,3,150
2019-03-16,Hot Chocolate Fudge,120,5,600
2019-03-16,Cafe Caramel,160,5,800
2019-03-16,Butterscotch Single Scoop,60,1,60
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Vanilla Single Scoop,50,2,100
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Death by Chocolate,180,3,540
2019-03-16,Fig and Honey Single Scoop,60,4,240
2019-03-16,Hot Chocolate Fudge,120,1,120
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Hot Chocolate Fudge,120,1,120
2019-03-16,Butterscotch Single Scoop,60,5,300
2019-03-16,Pista Single Scoop,60,3,180
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Fig and Honey Double Scoop,90,3,270
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Dew Drop Sundae,150,1,150
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Hot Chocolate Fudge,120,5,600
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Hot Chocolate Fudge,120,1,120
2019-03-16,Cafe Caramel,160,1,160
2019-03-16,Butterscotch Single Scoop,60,2,120
2019-03-16,Cake Fudge,150,3,450
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Hot Chocolate Fudge,120,5,600
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Hot Chocolate Fudge,120,5,600
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Butterscotch Single Scoop,60,5,300
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Cafe Caramel,160,3,480
2019-03-16,Death by Chocolate,180,2,360
2019-03-16,Hot Chocolate Fudge,120,5,600
2019-03-16,Butterscotch Double Scoop,90,3,270
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Death by Chocolate,180,3,540
2019-03-16,Vanilla Single Scoop,50,2,100
2019-03-16,Vanilla Double Scoop,80,2,160
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Cake Fudge,150,4,600
2019-03-16,Death by Chocolate,180,2,360
2019-03-16,Vanilla Single Scoop,50,2,100
2019-03-16,Vanilla Single Scoop,50,1,50
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Vanilla Double Scoop,80,2,160
2019-03-16,Cafe Caramel,160,3,480
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Rocky Road Single Scoop,50,5,250
2019-03-16,Vanilla Single Scoop,50,4,200
2019-03-16,Death by Chocolate,180,5,900
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Vanilla Double Scoop,80,2,160
2019-03-16,Butterscotch Single Scoop,60,2,120
2019-03-16,Vanilla Single Scoop,50,3,150
2019-03-16,Death by Chocolate,180,5,900
2019-03-16,Fig and Honey Single Scoop,60,2,120
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Death by Chocolate,180,3,540
2019-03-16,Caramel Crunch Double Scoop,100,3,300
2019-03-16,Butterscotch Single Scoop,60,1,60
2019-03-16,Butterscotch Single Scoop,60,5,300
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Pista Double Scoop,90,2,180
2019-03-16,Butterscotch Single Scoop,60,3,180
2019-03-16,Butterscotch Single Scoop,60,2,120
2019-03-16,Butterscotch Single Scoop,60,3,180
2019-03-16,Butterscotch Single Scoop,60,2,120
2019-03-16,Cake Fudge,150,3,450
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Vanilla Double Scoop,80,1,80
2019-03-16,Death by Chocolate,180,3,540
2019-03-16,Caramel Crunch Double Scoop,100,4,400
2019-03-16,Vanilla Double Scoop,80,5,400
2019-03-16,Hot Chocolate Fudge,120,1,120
2019-03-16,Butterscotch Single Scoop,60,5,300
2019-03-16,Cake Fudge,150,5,750
2019-03-16,Cake Fudge,150,3,450
2019-03-16,Death by Chocolate,180,5,900
2019-03-16,Butterscotch Single Scoop,60,3,180
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Butterscotch Single Scoop,60,2,120
2019-03-16,Vanilla Double Scoop,80,5,400
2019-03-16,Vanilla Double Scoop,80,5,400
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Butterscotch Single Scoop,60,1,60
2019-03-16,Hot Chocolate Fudge,120,1,120
2019-03-16,Vanilla Single Scoop,50,4,200
2019-03-16,Cafe Caramel,160,2,320
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Vanilla Single Scoop,50,1,50
2019-03-16,Pista Double Scoop,90,2,180
2019-03-16,Death by Chocolate,180,4,720
2019-03-16,Butterscotch Single Scoop,60,1,60
2019-03-16,Cake Fudge,150,1,150
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Caramel Crunch Single Scoop,70,5,350
2019-03-16,Dew Drop Sundae,150,3,450
2019-03-16,Butterscotch Single Scoop,60,5,300
2019-03-16,Hot Chocolate Fudge,120,4,480
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Cake Fudge,150,3,450
2019-03-16,Vanilla Double Scoop,80,3,240
2019-03-16,Cake Fudge,150,4,600
2019-03-16,Butterscotch Single Scoop,60,3,180
2019-03-16,Hot Chocolate Fudge,120,2,240
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Vanilla Double Scoop,80,4,320
2019-03-16,Butterscotch Single Scoop,60,1,60
2019-03-16,Cake Fudge,150,1,150
2019-03-16,Vanilla Single Scoop,50,1,50
2019-03-16,Cake Fudge,150,4,600
2019-03-16,Death by Chocolate,180,5,900
2019-03-16,Hot Chocolate Fudge,120,3,360
2019-03-16,Butterscotch Single Scoop,60,1,60
2019-03-17,Cake Fudge,150,1,150
2019-03-17,Cake Fudge,150,5,750
2019-03-17,Hot Chocolate Fudge,120,4,480
2019-03-17,Vanilla Double Scoop,80,1,80
2019-03-17,Cake Fudge,150,2,300
2019-03-17,Death by Chocolate,180,2,360
2019-03-17,Vanilla Double Scoop,80,3,240
2019-03-17,Death by Chocolate,180,1,180
2019-03-17,Pista Single Scoop,60,2,120
2019-03-17,Caramel Crunch Double Scoop,100,4,400
2019-03-17,Vanilla Single Scoop,50,5,250
2019-03-17,Butterscotch Double Scoop,90,3,270
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Vanilla Double Scoop,80,2,160
2019-03-17,Caramel Crunch Single Scoop,70,2,140
2019-03-17,Vanilla Double Scoop,80,1,80
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Cake Fudge,150,5,750
2019-03-17,Rocky Road Double Scoop,80,2,160
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Death by Chocolate,180,4,720
2019-03-17,Vanilla Double Scoop,80,5,400
2019-03-17,Hot Chocolate Fudge,120,5,600
2019-03-17,Death by Chocolate,180,4,720
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Cake Fudge,150,5,750
2019-03-17,Hot Chocolate Fudge,120,4,480
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Cake Fudge,150,4,600
2019-03-17,Vanilla Single Scoop,50,1,50
2019-03-17,Fig and Honey Single Scoop,60,2,120
2019-03-17,Cake Fudge,150,4,600
2019-03-17,Cake Fudge,150,4,600
2019-03-17,Death by Chocolate,180,5,900
2019-03-17,Vanilla Double Scoop,80,1,80
2019-03-17,Vanilla Double Scoop,80,2,160
2019-03-17,Vanilla Single Scoop,50,3,150
2019-03-17,Dry Fruit Single Scoop,60,5,300
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Vanilla Double Scoop,80,2,160
2019-03-17,Cake Fudge,150,4,600
2019-03-17,Caramel Crunch Single Scoop,70,4,280
2019-03-17,Death by Chocolate,180,5,900
2019-03-17,Vanilla Single Scoop,50,4,200
2019-03-17,Cake Fudge,150,3,450
2019-03-17,Dry Fruit Double Scoop,90,3,270
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Cake Fudge,150,3,450
2019-03-17,Hot Chocolate Fudge,120,5,600
2019-03-17,Hot Chocolate Fudge,120,4,480
2019-03-17,Dry Fruit Single Scoop,60,2,120
2019-03-17,Hot Chocolate Fudge,120,4,480
2019-03-17,Vanilla Double Scoop,80,4,320
2019-03-17,Cafe Caramel,160,5,800
2019-03-17,Hot Chocolate Fudge,120,4,480
2019-03-17,Butterscotch Single Scoop,60,4,240
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Rocky Road Single Scoop,50,1,50
2019-03-17,Vanilla Single Scoop,50,5,250
2019-03-17,Rocky Road Double Scoop,80,2,160
2019-03-17,Vanilla Single Scoop,50,5,250
2019-03-17,Death by Chocolate,180,4,720
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Cafe Caramel,160,3,480
2019-03-17,Death by Chocolate,180,1,180
2019-03-17,Cafe Caramel,160,3,480
2019-03-17,Pista Double Scoop,90,2,180
2019-03-17,Hot Chocolate Fudge,120,1,120
2019-03-17,Cake Fudge,150,3,450
2019-03-17,Vanilla Double Scoop,80,2,160
2019-03-17,Death by Chocolate,180,5,900
2019-03-17,Vanilla Double Scoop,80,1,80
2019-03-17,Vanilla Double Scoop,80,5,400
2019-03-17,Cafe Caramel,160,4,640
2019-03-17,Death by Chocolate,180,2,360
2019-03-17,Cake Fudge,150,5,750
2019-03-17,Vanilla Double Scoop,80,3,240
2019-03-17,Hot Chocolate Fudge,120,5,600
2019-03-17,Death by Chocolate,180,4,720
2019-03-17,Butterscotch Single Scoop,60,4,240
2019-03-17,Cake Fudge,150,5,750
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Cake Fudge,150,5,750
2019-03-17,Butterscotch Single Scoop,60,4,240
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Cake Fudge,150,3,450
2019-03-17,Death by Chocolate,180,2,360
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Cake Fudge,150,4,600
2019-03-17,Vanilla Single Scoop,50,1,50
2019-03-17,Butterscotch Single Scoop,60,2,120
2019-03-17,Death by Chocolate,180,5,900
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Hot Chocolate Fudge,120,1,120
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Cake Fudge,150,1,150
2019-03-17,Cake Fudge,150,3,450
2019-03-17,Vanilla Double Scoop,80,5,400
2019-03-17,Rocky Road Single Scoop,50,2,100
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Vanilla Double Scoop,80,2,160
2019-03-17,Hot Chocolate Fudge,120,5,600
2019-03-17,Vanilla Double Scoop,80,2,160
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Death by Chocolate,180,5,900
2019-03-17,Death by Chocolate,180,2,360
2019-03-17,Pista Single Scoop,60,1,60
2019-03-17,Cake Fudge,150,2,300
2019-03-17,Vanilla Single Scoop,50,2,100
2019-03-17,Cafe Caramel,160,1,160
2019-03-17,Hot Chocolate Fudge,120,1,120
2019-03-17,Cake Fudge,150,1,150
2019-03-17,Vanilla Double Scoop,80,1,80
2019-03-17,Dry Fruit Double Scoop,90,3,270
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Hot Chocolate Fudge,120,5,600
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Dry Fruit Single Scoop,60,3,180
2019-03-17,Cake Fudge,150,2,300
2019-03-17,Death by Chocolate,180,1,180
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Hot Chocolate Fudge,120,5,600
2019-03-17,Vanilla Single Scoop,50,3,150
2019-03-17,Hot Chocolate Fudge,120,1,120
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Mint Fudge,120,4,480
2019-03-17,Dry Fruit Double Scoop,90,3,270
2019-03-17,Vanilla Double Scoop,80,4,320
2019-03-17,Vanilla Double Scoop,80,5,400
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Chocolate Europa Single Scoop,70,1,70
2019-03-17,Death by Chocolate,180,2,360
2019-03-17,Dry Fruit Double Scoop,90,4,360
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Vanilla Single Scoop,50,5,250
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Cake Fudge,150,3,450
2019-03-17,Caramel Crunch Double Scoop,100,3,300
2019-03-17,Hot Chocolate Fudge,120,1,120
2019-03-17,Vanilla Double Scoop,80,4,320
2019-03-17,Hot Chocolate Fudge,120,5,600
2019-03-17,Cafe Caramel,160,2,320
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Chocolate Europa Single Scoop,70,5,350
2019-03-17,Hot Chocolate Fudge,120,1,120
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Butterscotch Single Scoop,60,2,120
2019-03-17,Butterscotch Single Scoop,60,3,180
2019-03-17,Cake Fudge,150,2,300
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Hot Chocolate Fudge,120,5,600
2019-03-17,Vanilla Single Scoop,50,1,50
2019-03-17,Dew Drop Sundae,150,2,300
2019-03-17,Cake Fudge,150,2,300
2019-03-17,Hot Chocolate Fudge,120,1,120
2019-03-17,Vanilla Single Scoop,50,4,200
2019-03-17,Hot Chocolate Fudge,120,4,480
2019-03-17,Cake Fudge,150,4,600
2019-03-17,Vanilla Single Scoop,50,3,150
2019-03-17,Death by Chocolate,180,2,360
2019-03-17,Cake Fudge,150,3,450
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Butterscotch Single Scoop,60,1,60
2019-03-17,Hot Chocolate Fudge,120,4,480
2019-03-17,Cake Fudge,150,1,150
2019-03-17,Death by Chocolate,180,1,180
2019-03-17,Cake Fudge,150,2,300
2019-03-17,Caramel Crunch Single Scoop,70,5,350
2019-03-17,Fig and Honey Single Scoop,60,3,180
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Death by Chocolate,180,1,180
2019-03-17,Hot Chocolate Fudge,120,4,480
2019-03-17,Cake Fudge,150,2,300
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Chocolate Europa Single Scoop,70,4,280
2019-03-17,Vanilla Double Scoop,80,3,240
2019-03-17,Butterscotch Single Scoop,60,4,240
2019-03-17,Vanilla Double Scoop,80,2,160
2019-03-17,Vanilla Double Scoop,80,4,320
2019-03-17,Death by Chocolate,180,5,900
2019-03-17,Hot Chocolate Fudge,120,1,120
2019-03-17,Vanilla Single Scoop,50,3,150
2019-03-17,Cake Fudge,150,1,150
2019-03-17,Chocolate Europa Single Scoop,70,1,70
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Death by Chocolate,180,2,360
2019-03-17,Vanilla Double Scoop,80,4,320
2019-03-17,Cake Fudge,150,3,450
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Caramel Crunch Single Scoop,70,5,350
2019-03-17,Butterscotch Double Scoop,90,5,450
2019-03-17,Trilogy,160,3,480
2019-03-17,Cake Fudge,150,1,150
2019-03-17,Fig and Honey Single Scoop,60,4,240
2019-03-17,Vanilla Double Scoop,80,1,80
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Hot Chocolate Fudge,120,2,240
2019-03-17,Vanilla Single Scoop,50,4,200
2019-03-17,Caramel Crunch Single Scoop,70,5,350
2019-03-17,Vanilla Double Scoop,80,5,400
2019-03-17,Hot Chocolate Fudge,120,3,360
2019-03-17,Vanilla Double Scoop,80,4,320
2019-03-17,Butterscotch Single Scoop,60,1,60
2019-03-17,Butterscotch Single Scoop,60,1,60
2019-03-17,Death by Chocolate,180,3,540
2019-03-17,Cake Fudge,150,5,750
2019-03-17,Cafe Caramel,160,4,640
2019-03-18,Hot Chocolate Fudge,120,5,600
2019-03-18,Butterscotch Single Scoop,60,2,120
2019-03-18,Hot Chocolate Fudge,120,5,600
2019-03-18,Cake Fudge,150,4,600
2019-03-18,Caramel Crunch Single Scoop,70,4,280
2019-03-18,Hot Chocolate Fudge,120,4,480
2019-03-18,Hot Chocolate Fudge,120,1,120
2019-03-18,Hot Chocolate Fudge,120,1,120
2019-03-18,Vanilla Single Scoop,50,2,100
2019-03-18,Hot Chocolate Fudge,120,2,240
2019-03-18,Rocky Road Single Scoop,50,2,100
2019-03-18,Hot Chocolate Fudge,120,2,240
2019-03-18,Hot Chocolate Fudge,120,3,360
2019-03-18,Rocky Road Single Scoop,50,2,100
2019-03-18,Butterscotch Single Scoop,60,3,180
2019-03-18,Death by Chocolate,180,2,360
2019-03-18,Vanilla Single Scoop,50,3,150
2019-03-18,Hot Chocolate Fudge,120,5,600
2019-03-18,Cake Fudge,150,4,600
2019-03-18,Death by Chocolate,180,5,900
2019-03-18,Hot Chocolate Fudge,120,5,600
2019-03-18,Butterscotch Single Scoop,60,3,180
2019-03-18,Butterscotch Single Scoop,60,4,240
2019-03-18,Cafe Caramel,160,3,480
2019-03-18,Fig and Honey Single Scoop,60,1,60
2019-03-18,Caramel Crunch Single Scoop,70,2,140
2019-03-18,Vanilla Single Scoop,50,2,100
2019-03-18,Vanilla Double Scoop,80,2,160
2019-03-18,Cafe Caramel,160,2,320
2019-03-18,Vanilla Double Scoop,80,1,80
2019-03-18,Death by Chocolate,180,5,900
2019-03-18,Hot Chocolate Fudge,120,2,240
2019-03-18,Hot Chocolate Fudge,120,5,600
2019-03-18,Chocolate Europa Double Scoop,100,4,400
2019-03-18,Cake Fudge,150,3,450
2019-03-18,Death by Chocolate,180,1,180
2019-03-18,Dry Fruit Single Scoop,60,5,300
2019-03-18,Hot Chocolate Fudge,120,4,480
2019-03-18,Cafe Caramel,160,5,800
2019-03-18,Rocky Road Double Scoop,80,5,400
2019-03-18,Fig and Honey Single Scoop,60,3,180
2019-03-18,Vanilla Single Scoop,50,3,150
2019-03-18,Butterscotch Single Scoop,60,4,240
2019-03-18,Hot Chocolate Fudge,120,5,600
2019-03-18,Cake Fudge,150,1,150
2019-03-18,Dry Fruit Double Scoop,90,3,270
2019-03-18,Cafe Caramel,160,4,640
2019-03-18,Death by Chocolate,180,4,720
2019-03-18,Vanilla Single Scoop,50,3,150
2019-03-18,Cake Fudge,150,5,750
2019-03-18,Hot Chocolate Fudge,120,4,480
2019-03-18,Rocky Road Single Scoop,50,3,150
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Vanilla Single Scoop,50,1,50
2019-03-18,Cake Fudge,150,4,600
2019-03-18,Hot Chocolate Fudge,120,2,240
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Hot Chocolate Fudge,120,1,120
2019-03-18,Vanilla Double Scoop,80,3,240
2019-03-18,Butterscotch Single Scoop,60,3,180
2019-03-18,Cake Fudge,150,1,150
2019-03-18,Cake Fudge,150,3,450
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Death by Chocolate,180,4,720
2019-03-18,Vanilla Double Scoop,80,5,400
2019-03-18,Fig and Honey Double Scoop,90,2,180
2019-03-18,Cafe Caramel,160,2,320
2019-03-18,Vanilla Single Scoop,50,5,250
2019-03-18,Death by Chocolate,180,3,540
2019-03-18,Butterscotch Single Scoop,60,2,120
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Vanilla Single Scoop,50,3,150
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Vanilla Double Scoop,80,1,80
2019-03-18,Hot Chocolate Fudge,120,2,240
2019-03-18,Fig and Honey Double Scoop,90,3,270
2019-03-18,Hot Chocolate Fudge,120,2,240
2019-03-18,Vanilla Double Scoop,80,1,80
2019-03-18,Vanilla Single Scoop,50,4,200
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Vanilla Double Scoop,80,1,80
2019-03-18,Fig and Honey Single Scoop,60,2,120
2019-03-18,Fig and Honey Double Scoop,90,5,450
2019-03-18,Dry Fruit Double Scoop,90,4,360
2019-03-18,Hot Chocolate Fudge,120,3,360
2019-03-18,Vanilla Double Scoop,80,1,80
2019-03-18,Butterscotch Single Scoop,60,2,120
2019-03-18,Hot Chocolate Fudge,120,3,360
2019-03-18,Death by Chocolate,180,5,900
2019-03-18,Butterscotch Single Scoop,60,2,120
2019-03-18,Hot Chocolate Fudge,120,1,120
2019-03-18,Vanilla Double Scoop,80,2,160
2019-03-18,Cafe Caramel,160,4,640
2019-03-18,Hot Chocolate Fudge,120,2,240
2019-03-18,Chocolate Europa Single Scoop,70,2,140
2019-03-18,Cake Fudge,150,5,750
2019-03-18,Hot Chocolate Fudge,120,3,360
2019-03-18,Vanilla Double Scoop,80,4,320
2019-03-18,Hot Chocolate Fudge,120,1,120
2019-03-18,Vanilla Single Scoop,50,5,250
2019-03-18,Rocky Road Single Scoop,50,1,50
2019-03-18,Dry Fruit Single Scoop,60,2,120
2019-03-18,Hot Chocolate Fudge,120,3,360
2019-03-18,Vanilla Single Scoop,50,1,50
2019-03-18,Butterscotch Single Scoop,60,3,180
2019-03-18,Vanilla Double Scoop,80,4,320
2019-03-18,Vanilla Single Scoop,50,3,150
2019-03-18,Vanilla Double Scoop,80,3,240
2019-03-18,Cake Fudge,150,4,600
2019-03-18,Dry Fruit Single Scoop,60,1,60
2019-03-18,Pista Single Scoop,60,5,300
2019-03-18,Butterscotch Single Scoop,60,2,120
2019-03-18,Cake Fudge,150,4,600
2019-03-18,Vanilla Double Scoop,80,3,240
2019-03-18,Cake Fudge,150,3,450
2019-03-18,Vanilla Double Scoop,80,5,400
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Vanilla Double Scoop,80,5,400
2019-03-18,Death by Chocolate,180,3,540
2019-03-18,Death by Chocolate,180,3,540
2019-03-18,Vanilla Single Scoop,50,1,50
2019-03-18,Cafe Caramel,160,5,800
2019-03-18,Caramel Crunch Double Scoop,100,5,500
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Vanilla Single Scoop,50,3,150
2019-03-18,Cafe Caramel,160,3,480
2019-03-18,Death by Chocolate,180,1,180
2019-03-18,Caramel Crunch Single Scoop,70,4,280
2019-03-18,Death by Chocolate,180,4,720
2019-03-18,Death by Chocolate,180,1,180
2019-03-18,Vanilla Double Scoop,80,2,160
2019-03-18,Cafe Caramel,160,2,320
2019-03-18,Death by Chocolate,180,4,720
2019-03-18,Cake Fudge,150,2,300
2019-03-18,Cafe Caramel,160,1,160
2019-03-18,Death by Chocolate,180,4,720
2019-03-18,Cake Fudge,150,5,750
2019-03-18,Vanilla Double Scoop,80,1,80
2019-03-18,Cake Fudge,150,1,150
2019-03-19,Vanilla Single Scoop,50,4,200
2019-03-19,Trilogy,160,2,320
2019-03-19,Butterscotch Single Scoop,60,5,300
2019-03-19,Caramel Crunch Double Scoop,100,1,100
2019-03-19,Caramel Crunch Single Scoop,70,2,140
2019-03-19,Cafe Caramel,160,5,800
2019-03-19,Cake Fudge,150,3,450
2019-03-19,Hot Chocolate Fudge,120,2,240
2019-03-19,Cake Fudge,150,4,600
2019-03-19,Vanilla Double Scoop,80,2,160
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Vanilla Double Scoop,80,3,240
2019-03-19,Cake Fudge,150,2,300
2019-03-19,Cake Fudge,150,5,750
2019-03-19,Cake Fudge,150,4,600
2019-03-19,Vanilla Double Scoop,80,3,240
2019-03-19,Vanilla Double Scoop,80,2,160
2019-03-19,Vanilla Double Scoop,80,2,160
2019-03-19,Cake Fudge,150,2,300
2019-03-19,Butterscotch Double Scoop,90,3,270
2019-03-19,Vanilla Single Scoop,50,4,200
2019-03-19,Cafe Caramel,160,4,640
2019-03-19,Cake Fudge,150,2,300
2019-03-19,Cake Fudge,150,1,150
2019-03-19,Vanilla Single Scoop,50,4,200
2019-03-19,Hot Chocolate Fudge,120,1,120
2019-03-19,Death by Chocolate,180,4,720
2019-03-19,Cake Fudge,150,2,300
2019-03-19,Hot Chocolate Fudge,120,2,240
2019-03-19,Butterscotch Single Scoop,60,5,300
2019-03-19,Cafe Caramel,160,1,160
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Butterscotch Single Scoop,60,4,240
2019-03-19,Vanilla Single Scoop,50,2,100
2019-03-19,Death by Chocolate,180,1,180
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Vanilla Double Scoop,80,1,80
2019-03-19,Vanilla Double Scoop,80,1,80
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Hot Chocolate Fudge,120,5,600
2019-03-19,Death by Chocolate,180,1,180
2019-03-19,Cake Fudge,150,2,300
2019-03-19,Rocky Road Single Scoop,50,1,50
2019-03-19,Hot Chocolate Fudge,120,1,120
2019-03-19,Fig and Honey Double Scoop,90,1,90
2019-03-19,Hot Chocolate Fudge,120,4,480
2019-03-19,Hot Chocolate Fudge,120,2,240
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Vanilla Double Scoop,80,1,80
2019-03-19,Fig and Honey Single Scoop,60,1,60
2019-03-19,Hot Chocolate Fudge,120,1,120
2019-03-19,Vanilla Single Scoop,50,4,200
2019-03-19,Chocolate Europa Single Scoop,70,4,280
2019-03-19,Cake Fudge,150,5,750
2019-03-19,Butterscotch Double Scoop,90,4,360
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Hot Chocolate Fudge,120,3,360
2019-03-19,Hot Chocolate Fudge,120,3,360
2019-03-19,Hot Chocolate Fudge,120,1,120
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Vanilla Double Scoop,80,2,160
2019-03-19,Butterscotch Single Scoop,60,3,180
2019-03-19,Chocolate Europa Single Scoop,70,2,140
2019-03-19,Hot Chocolate Fudge,120,3,360
2019-03-19,Death by Chocolate,180,2,360
2019-03-19,Vanilla Double Scoop,80,2,160
2019-03-19,Death by Chocolate,180,4,720
2019-03-19,Hot Chocolate Fudge,120,4,480
2019-03-19,Death by Chocolate,180,4,720
2019-03-19,Hot Chocolate Fudge,120,2,240
2019-03-19,Cake Fudge,150,1,150
2019-03-19,Cake Fudge,150,1,150
2019-03-19,Vanilla Single Scoop,50,4,200
2019-03-19,Cake Fudge,150,1,150
2019-03-19,Cake Fudge,150,3,450
2019-03-19,Cafe Caramel,160,4,640
2019-03-19,Vanilla Double Scoop,80,2,160
2019-03-19,Chocolate Europa Single Scoop,70,2,140
2019-03-19,Cake Fudge,150,2,300
2019-03-19,Vanilla Single Scoop,50,4,200
2019-03-19,Butterscotch Single Scoop,60,3,180
2019-03-19,Vanilla Double Scoop,80,1,80
2019-03-19,Death by Chocolate,180,2,360
2019-03-19,Hot Chocolate Fudge,120,4,480
2019-03-19,Cafe Caramel,160,1,160
2019-03-19,Death by Chocolate,180,2,360
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Cake Fudge,150,3,450
2019-03-19,Death by Chocolate,180,1,180
2019-03-19,Cake Fudge,150,2,300
2019-03-19,Hot Chocolate Fudge,120,5,600
2019-03-19,Cake Fudge,150,3,450
2019-03-19,Vanilla Single Scoop,50,3,150
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Vanilla Single Scoop,50,4,200
2019-03-19,Butterscotch Single Scoop,60,1,60
2019-03-19,Death by Chocolate,180,5,900
2019-03-19,Death by Chocolate,180,4,720
2019-03-19,Death by Chocolate,180,3,540
2019-03-19,Hot Chocolate Fudge,120,5,600
2019-03-19,Cake Fudge,150,5,750
2019-03-19,Butterscotch Single Scoop,60,2,120
2019-03-19,Rocky Road Single Scoop,50,3,150
2019-03-19,Hot Chocolate Fudge,120,1,120
2019-03-19,Caramel Crunch Single Scoop,70,3,210
2019-03-19,Banana Split,140,2,280
2019-03-19,Vanilla Double Scoop,80,4,320
2019-03-19,Vanilla Single Scoop,50,4,200
2019-03-19,Cake Fudge,150,4,600
2019-03-19,Vanilla Single Scoop,50,5,250
2019-03-19,Butterscotch Single Scoop,60,5,300
2019-03-19,Hot Chocolate Fudge,120,3,360
2019-03-19,Cake Fudge,150,1,150
2019-03-19,Butterscotch Single Scoop,60,1,60
2019-03-19,Vanilla Double Scoop,80,2,160
2019-03-19,Butterscotch Single Scoop,60,2,120
2019-03-19,Death by Chocolate,180,3,540
2019-03-19,Cake Fudge,150,5,750
2019-03-19,Butterscotch Single Scoop,60,4,240
2019-03-19,Vanilla Double Scoop,80,5,400
2019-03-19,Cake Fudge,150,4,600
2019-03-19,Death by Chocolate,180,5,900
2019-03-19,Caramel Crunch Double Scoop,100,2,200
2019-03-19,Fig and Honey Single Scoop,60,3,180
2019-03-20,Fig and Honey Single Scoop,60,3,180
2019-03-20,Hot Chocolate Fudge,120,4,480
2019-03-20,Hot Chocolate Fudge,120,2,240
2019-03-20,Hot Chocolate Fudge,120,2,240
2019-03-20,Vanilla Double Scoop,80,1,80
2019-03-20,Hot Chocolate Fudge,120,1,120
2019-03-20,Hot Chocolate Fudge,120,1,120
2019-03-20,Vanilla Single Scoop,50,3,150
2019-03-20,Hot Chocolate Fudge,120,3,360
2019-03-20,Death by Chocolate,180,4,720
2019-03-20,Cake Fudge,150,1,150
2019-03-20,Vanilla Double Scoop,80,2,160
2019-03-20,Death by Chocolate,180,5,900
2019-03-20,Vanilla Double Scoop,80,5,400
2019-03-20,Butterscotch Single Scoop,60,3,180
2019-03-20,Hot Chocolate Fudge,120,2,240
2019-03-20,Cake Fudge,150,2,300
2019-03-20,Cake Fudge,150,1,150
2019-03-20,Butterscotch Single Scoop,60,2,120
2019-03-20,Cafe Caramel,160,5,800
2019-03-20,Death by Chocolate,180,5,900
2019-03-20,Butterscotch Single Scoop,60,2,120
2019-03-20,Hot Chocolate Fudge,120,3,360
2019-03-20,Vanilla Double Scoop,80,3,240
2019-03-20,Dew Drop Sundae,150,1,150
2019-03-20,Butterscotch Single Scoop,60,1,60
2019-03-20,Cake Fudge,150,2,300
2019-03-20,Cafe Caramel,160,5,800
2019-03-20,Rocky Road Single Scoop,50,1,50
2019-03-20,Cake Fudge,150,1,150
2019-03-20,Dry Fruit Double Scoop,90,3,270
2019-03-20,Hot Chocolate Fudge,120,3,360
2019-03-20,Butterscotch Single Scoop,60,1,60
2019-03-20,Caramel Crunch Double Scoop,100,5,500
2019-03-20,Dew Drop Sundae,150,5,750
2019-03-20,Vanilla Single Scoop,50,3,150
2019-03-20,Hot Chocolate Fudge,120,1,120
2019-03-20,Vanilla Single Scoop,50,5,250
2019-03-20,Butterscotch Single Scoop,60,3,180
2019-03-20,Vanilla Double Scoop,80,1,80
2019-03-20,Hot Chocolate Fudge,120,1,120
2019-03-20,Rocky Road Double Scoop,80,3,240
2019-03-20,Vanilla Double Scoop,80,5,400
2019-03-20,Death by Chocolate,180,1,180
2019-03-20,Butterscotch Double Scoop,90,3,270
2019-03-20,Death by Chocolate,180,2,360
2019-03-20,Butterscotch Single Scoop,60,5,300
2019-03-20,Vanilla Double Scoop,80,3,240
2019-03-20,Vanilla Single Scoop,50,3,150
2019-03-20,Almond Fudge,150,3,450
2019-03-20,Butterscotch Single Scoop,60,5,300
2019-03-20,Cake Fudge,150,2,300
2019-03-20,Hot Chocolate Fudge,120,4,480
2019-03-20,Hot Chocolate Fudge,120,2,240
2019-03-20,Hot Chocolate Fudge,120,1,120
2019-03-20,Cake Fudge,150,1,150
2019-03-20,Butterscotch Single Scoop,60,4,240
2019-03-20,Cafe Caramel,160,3,480
2019-03-20,Hot Chocolate Fudge,120,2,240
2019-03-20,Chocolate Europa Single Scoop,70,4,280
2019-03-20,Vanilla Double Scoop,80,5,400
2019-03-20,Vanilla Double Scoop,80,2,160
2019-03-20,Death by Chocolate,180,4,720
2019-03-20,Hot Chocolate Fudge,120,3,360
2019-03-20,Chocolate Europa Single Scoop,70,3,210
2019-03-20,Hot Chocolate Fudge,120,5,600
2019-03-20,Cafe Caramel,160,5,800
2019-03-20,Vanilla Double Scoop,80,4,320
2019-03-20,Vanilla Single Scoop,50,4,200
2019-03-20,Fig and Honey Single Scoop,60,1,60
2019-03-20,Butterscotch Double Scoop,90,2,180
2019-03-20,Trilogy,160,4,640
2019-03-20,Cake Fudge,150,4,600
2019-03-20,Cake Fudge,150,5,750
2019-03-20,Vanilla Single Scoop,50,5,250
2019-03-20,Chocolate Europa Single Scoop,70,3,210
2019-03-20,Hot Chocolate Fudge,120,5,600
2019-03-20,Cake Fudge,150,5,750
2019-03-20,Hot Chocolate Fudge,120,3,360
2019-03-20,Cake Fudge,150,4,600
2019-03-20,Butterscotch Single Scoop,60,2,120
2019-03-20,Butterscotch Single Scoop,60,1,60
2019-03-20,Hot Chocolate Fudge,120,2,240
2019-03-20,Death by Chocolate,180,3,540
2019-03-20,Death by Chocolate,180,3,540
2019-03-20,Cafe Caramel,160,5,800
2019-03-20,Hot Chocolate Fudge,120,3,360
2019-03-20,Cake Fudge,150,5,750
2019-03-20,Pista Single Scoop,60,4,240
2019-03-20,Death by Chocolate,180,3,540
2019-03-20,Vanilla Double Scoop,80,2,160
2019-03-20,Butterscotch Double Scoop,90,1,90
2019-03-20,Vanilla Double Scoop,80,5,400
2019-03-20,Butterscotch Single Scoop,60,2,120
2019-03-20,Vanilla Double Scoop,80,5,400
2019-03-20,Dry Fruit Double Scoop,90,4,360
2019-03-20,Caramel Crunch Single Scoop,70,2,140
2019-03-20,Rocky Road Single Scoop,50,4,200
2019-03-20,Vanilla Double Scoop,80,4,320
2019-03-20,Cake Fudge,150,5,750
2019-03-20,Hot Chocolate Fudge,120,2,240
2019-03-20,Vanilla Double Scoop,80,3,240
2019-03-20,Cake Fudge,150,3,450
2019-03-20,Butterscotch Single Scoop,60,4,240
2019-03-20,Vanilla Double Scoop,80,3,240
2019-03-20,Cake Fudge,150,1,150
2019-03-20,Cake Fudge,150,4,600
2019-03-20,Vanilla Double Scoop,80,2,160
2019-03-20,Vanilla Single Scoop,50,5,250
2019-03-20,Cafe Caramel,160,2,320
2019-03-20,Pista Single Scoop,60,4,240
2019-03-20,Vanilla Double Scoop,80,4,320
2019-03-20,Butterscotch Single Scoop,60,2,120
2019-03-20,Cake Fudge,150,4,600
2019-03-20,Chocolate Europa Double Scoop,100,2,200
2019-03-20,Vanilla Double Scoop,80,3,240
2019-03-20,Hot Chocolate Fudge,120,1,120
2019-03-20,Cake Fudge,150,1,150
2019-03-20,Vanilla Single Scoop,50,3,150
2019-03-20,Vanilla Single Scoop,50,4,200
2019-03-20,Fig and Honey Double Scoop,90,1,90
2019-03-20,Hot Chocolate Fudge,120,4,480
2019-03-20,Butterscotch Single Scoop,60,4,240
2019-03-20,Hot Chocolate Fudge,120,1,120
2019-03-20,Hot Chocolate Fudge,120,3,360
2019-03-20,Hot Chocolate Fudge,120,5,600
2019-03-20,Vanilla Double Scoop,80,5,400
2019-03-20,Hot Chocolate Fudge,120,2,240
2019-03-20,Chocolate Europa Double Scoop,100,2,200
2019-03-20,Vanilla Double Scoop,80,1,80
2019-03-20,Cake Fudge,150,1,150
2019-03-20,Vanilla Single Scoop,50,4,200
2019-03-20,Hot Chocolate Fudge,120,3,360
2019-03-20,Butterscotch Single Scoop,60,5,300
2019-03-20,Rocky Road Double Scoop,80,5,400
2019-03-20,Vanilla Double Scoop,80,4,320
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Dry Fruit Single Scoop,60,5,300
2019-03-21,Hot Chocolate Fudge,120,5,600
2019-03-21,Mint Fudge,120,1,120
2019-03-21,Butterscotch Double Scoop,90,5,450
2019-03-21,Caramel Crunch Double Scoop,100,3,300
2019-03-21,Butterscotch Single Scoop,60,1,60
2019-03-21,Cake Fudge,150,4,600
2019-03-21,Cafe Caramel,160,5,800
2019-03-21,Vanilla Double Scoop,80,3,240
2019-03-21,Cake Fudge,150,4,600
2019-03-21,Vanilla Single Scoop,50,3,150
2019-03-21,Cake Fudge,150,4,600
2019-03-21,Hot Chocolate Fudge,120,1,120
2019-03-21,Butterscotch Single Scoop,60,2,120
2019-03-21,Chocolate Europa Double Scoop,100,5,500
2019-03-21,Vanilla Single Scoop,50,4,200
2019-03-21,Vanilla Double Scoop,80,4,320
2019-03-21,Dry Fruit Double Scoop,90,2,180
2019-03-21,Hot Chocolate Fudge,120,5,600
2019-03-21,Cafe Caramel,160,3,480
2019-03-21,Pista Double Scoop,90,1,90
2019-03-21,Hot Chocolate Fudge,120,1,120
2019-03-21,Vanilla Double Scoop,80,4,320
2019-03-21,Hot Chocolate Fudge,120,1,120
2019-03-21,Vanilla Double Scoop,80,3,240
2019-03-21,Cake Fudge,150,3,450
2019-03-21,Butterscotch Single Scoop,60,5,300
2019-03-21,Hot Chocolate Fudge,120,2,240
2019-03-21,Hot Chocolate Fudge,120,4,480
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Vanilla Single Scoop,50,4,200
2019-03-21,Hot Chocolate Fudge,120,1,120
2019-03-21,Vanilla Single Scoop,50,1,50
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Death by Chocolate,180,2,360
2019-03-21,Butterscotch Single Scoop,60,3,180
2019-03-21,Hot Chocolate Fudge,120,1,120
2019-03-21,Vanilla Double Scoop,80,5,400
2019-03-21,Butterscotch Single Scoop,60,3,180
2019-03-21,Pista Double Scoop,90,5,450
2019-03-21,Cake Fudge,150,4,600
2019-03-21,Butterscotch Single Scoop,60,3,180
2019-03-21,Dry Fruit Double Scoop,90,3,270
2019-03-21,Fig and Honey Single Scoop,60,2,120
2019-03-21,Hot Chocolate Fudge,120,2,240
2019-03-21,Vanilla Double Scoop,80,1,80
2019-03-21,Death by Chocolate,180,3,540
2019-03-21,Cake Fudge,150,2,300
2019-03-21,Cake Fudge,150,4,600
2019-03-21,Vanilla Double Scoop,80,3,240
2019-03-21,Cafe Caramel,160,1,160
2019-03-21,Death by Chocolate,180,2,360
2019-03-21,Vanilla Single Scoop,50,4,200
2019-03-21,Hot Chocolate Fudge,120,5,600
2019-03-21,Vanilla Single Scoop,50,1,50
2019-03-21,Cake Fudge,150,1,150
2019-03-21,Butterscotch Single Scoop,60,1,60
2019-03-21,Cake Fudge,150,3,450
2019-03-21,Hot Chocolate Fudge,120,1,120
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Dry Fruit Single Scoop,60,4,240
2019-03-21,Fig and Honey Single Scoop,60,1,60
2019-03-21,Vanilla Single Scoop,50,2,100
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Caramel Crunch Double Scoop,100,3,300
2019-03-21,Hot Chocolate Fudge,120,5,600
2019-03-21,Vanilla Single Scoop,50,2,100
2019-03-21,Dew Drop Sundae,150,1,150
2019-03-21,Butterscotch Single Scoop,60,5,300
2019-03-21,Butterscotch Single Scoop,60,2,120
2019-03-21,Death by Chocolate,180,3,540
2019-03-21,Hot Chocolate Fudge,120,5,600
2019-03-21,Cake Fudge,150,2,300
2019-03-21,Death by Chocolate,180,5,900
2019-03-21,Butterscotch Single Scoop,60,3,180
2019-03-21,Caramel Crunch Double Scoop,100,4,400
2019-03-21,Fig and Honey Single Scoop,60,3,180
2019-03-21,Cake Fudge,150,2,300
2019-03-21,Hot Chocolate Fudge,120,4,480
2019-03-21,Cake Fudge,150,4,600
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Butterscotch Single Scoop,60,1,60
2019-03-21,Pista Double Scoop,90,5,450
2019-03-21,Fig and Honey Double Scoop,90,4,360
2019-03-21,Cafe Caramel,160,5,800
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Cafe Caramel,160,3,480
2019-03-21,Cake Fudge,150,1,150
2019-03-21,Fig and Honey Double Scoop,90,3,270
2019-03-21,Hot Chocolate Fudge,120,5,600
2019-03-21,Death by Chocolate,180,4,720
2019-03-21,Death by Chocolate,180,1,180
2019-03-21,Vanilla Double Scoop,80,2,160
2019-03-21,Vanilla Double Scoop,80,4,320
2019-03-21,Butterscotch Double Scoop,90,3,270
2019-03-21,Vanilla Double Scoop,80,1,80
2019-03-21,Pista Double Scoop,90,5,450
2019-03-21,Cafe Caramel,160,5,800
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Fig and Honey Double Scoop,90,4,360
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Butterscotch Single Scoop,60,2,120
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Vanilla Double Scoop,80,3,240
2019-03-21,Vanilla Double Scoop,80,2,160
2019-03-21,Dew Drop Sundae,150,1,150
2019-03-21,Fig and Honey Double Scoop,90,5,450
2019-03-21,Cake Fudge,150,1,150
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Death by Chocolate,180,2,360
2019-03-21,Cafe Caramel,160,4,640
2019-03-21,Hot Chocolate Fudge,120,5,600
2019-03-21,Cafe Caramel,160,1,160
2019-03-21,Hot Chocolate Fudge,120,2,240
2019-03-21,Cake Fudge,150,3,450
2019-03-21,Pista Single Scoop,60,3,180
2019-03-21,Caramel Crunch Double Scoop,100,3,300
2019-03-21,Dry Fruit Single Scoop,60,1,60
2019-03-21,Death by Chocolate,180,2,360
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Hot Chocolate Fudge,120,4,480
2019-03-21,Vanilla Double Scoop,80,2,160
2019-03-21,Chocolate Europa Single Scoop,70,3,210
2019-03-21,Death by Chocolate,180,5,900
2019-03-21,Hot Chocolate Fudge,120,4,480
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Vanilla Single Scoop,50,2,100
2019-03-21,Vanilla Double Scoop,80,5,400
2019-03-21,Vanilla Single Scoop,50,5,250
2019-03-21,Dew Drop Sundae,150,5,750
2019-03-21,Cake Fudge,150,2,300
2019-03-21,Vanilla Double Scoop,80,1,80
2019-03-21,Cake Fudge,150,5,750
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Hot Chocolate Fudge,120,4,480
2019-03-21,Vanilla Double Scoop,80,4,320
2019-03-21,Vanilla Double Scoop,80,3,240
2019-03-21,Chocolate Europa Double Scoop,100,3,300
2019-03-21,Vanilla Double Scoop,80,4,320
2019-03-21,Vanilla Double Scoop,80,3,240
2019-03-21,Cafe Caramel,160,1,160
2019-03-21,Death by Chocolate,180,4,720
2019-03-21,Pista Double Scoop,90,1,90
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Death by Chocolate,180,2,360
2019-03-21,Vanilla Double Scoop,80,2,160
2019-03-21,Butterscotch Single Scoop,60,3,180
2019-03-21,Death by Chocolate,180,3,540
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Vanilla Double Scoop,80,2,160
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Vanilla Single Scoop,50,1,50
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Rocky Road Single Scoop,50,3,150
2019-03-21,Trilogy,160,3,480
2019-03-21,Cafe Caramel,160,1,160
2019-03-21,Hot Chocolate Fudge,120,1,120
2019-03-21,Butterscotch Single Scoop,60,5,300
2019-03-21,Hot Chocolate Fudge,120,1,120
2019-03-21,Vanilla Single Scoop,50,3,150
2019-03-21,Dry Fruit Double Scoop,90,4,360
2019-03-21,Vanilla Double Scoop,80,1,80
2019-03-21,Hot Chocolate Fudge,120,2,240
2019-03-21,Vanilla Double Scoop,80,3,240
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Vanilla Double Scoop,80,2,160
2019-03-21,Vanilla Single Scoop,50,4,200
2019-03-21,Hot Chocolate Fudge,120,3,360
2019-03-21,Death by Chocolate,180,2,360
2019-03-22,Vanilla Single Scoop,50,2,100
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Death by Chocolate,180,3,540
2019-03-22,Vanilla Double Scoop,80,3,240
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Cake Fudge,150,2,300
2019-03-22,Vanilla Single Scoop,50,5,250
2019-03-22,Vanilla Double Scoop,80,2,160
2019-03-22,Hot Chocolate Fudge,120,1,120
2019-03-22,Vanilla Double Scoop,80,5,400
2019-03-22,Mint Fudge,120,3,360
2019-03-22,Vanilla Double Scoop,80,1,80
2019-03-22,Vanilla Double Scoop,80,2,160
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Vanilla Double Scoop,80,1,80
2019-03-22,Cake Fudge,150,1,150
2019-03-22,Cake Fudge,150,2,300
2019-03-22,Vanilla Single Scoop,50,2,100
2019-03-22,Dry Fruit Single Scoop,60,3,180
2019-03-22,Vanilla Double Scoop,80,3,240
2019-03-22,Vanilla Double Scoop,80,4,320
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Hot Chocolate Fudge,120,1,120
2019-03-22,Vanilla Double Scoop,80,2,160
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Death by Chocolate,180,1,180
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Almond Fudge,150,2,300
2019-03-22,Vanilla Single Scoop,50,4,200
2019-03-22,Vanilla Single Scoop,50,5,250
2019-03-22,Butterscotch Double Scoop,90,4,360
2019-03-22,Cake Fudge,150,1,150
2019-03-22,Vanilla Single Scoop,50,2,100
2019-03-22,Vanilla Single Scoop,50,2,100
2019-03-22,Hot Chocolate Fudge,120,3,360
2019-03-22,Hot Chocolate Fudge,120,4,480
2019-03-22,Butterscotch Single Scoop,60,5,300
2019-03-22,Hot Chocolate Fudge,120,1,120
2019-03-22,Cafe Caramel,160,4,640
2019-03-22,Vanilla Double Scoop,80,4,320
2019-03-22,Hot Chocolate Fudge,120,3,360
2019-03-22,Vanilla Double Scoop,80,4,320
2019-03-22,Death by Chocolate,180,2,360
2019-03-22,Cafe Caramel,160,3,480
2019-03-22,Banana Split,140,2,280
2019-03-22,Caramel Crunch Single Scoop,70,4,280
2019-03-22,Butterscotch Single Scoop,60,3,180
2019-03-22,Cake Fudge,150,3,450
2019-03-22,Vanilla Double Scoop,80,5,400
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Vanilla Double Scoop,80,3,240
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Vanilla Single Scoop,50,5,250
2019-03-22,Cafe Caramel,160,4,640
2019-03-22,Vanilla Double Scoop,80,4,320
2019-03-22,Cake Fudge,150,1,150
2019-03-22,Butterscotch Double Scoop,90,5,450
2019-03-22,Vanilla Double Scoop,80,5,400
2019-03-22,Cafe Caramel,160,4,640
2019-03-22,Vanilla Double Scoop,80,1,80
2019-03-22,Dry Fruit Double Scoop,90,3,270
2019-03-22,Hot Chocolate Fudge,120,1,120
2019-03-22,Vanilla Single Scoop,50,4,200
2019-03-22,Vanilla Double Scoop,80,1,80
2019-03-22,Cake Fudge,150,2,300
2019-03-22,Butterscotch Single Scoop,60,5,300
2019-03-22,Vanilla Single Scoop,50,5,250
2019-03-22,Dry Fruit Single Scoop,60,1,60
2019-03-22,Cafe Caramel,160,5,800
2019-03-22,Dry Fruit Single Scoop,60,2,120
2019-03-22,Rocky Road Single Scoop,50,4,200
2019-03-22,Vanilla Double Scoop,80,2,160
2019-03-22,Hot Chocolate Fudge,120,3,360
2019-03-22,Cake Fudge,150,3,450
2019-03-22,Dry Fruit Double Scoop,90,5,450
2019-03-22,Cake Fudge,150,1,150
2019-03-22,Dry Fruit Double Scoop,90,5,450
2019-03-22,Vanilla Single Scoop,50,1,50
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Vanilla Single Scoop,50,3,150
2019-03-22,Butterscotch Single Scoop,60,5,300
2019-03-22,Hot Chocolate Fudge,120,4,480
2019-03-22,Hot Chocolate Fudge,120,4,480
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Vanilla Single Scoop,50,3,150
2019-03-22,Death by Chocolate,180,5,900
2019-03-22,Dry Fruit Single Scoop,60,2,120
2019-03-22,Hot Chocolate Fudge,120,4,480
2019-03-22,Butterscotch Single Scoop,60,2,120
2019-03-22,Vanilla Single Scoop,50,2,100
2019-03-22,Butterscotch Single Scoop,60,3,180
2019-03-22,Vanilla Double Scoop,80,5,400
2019-03-22,Death by Chocolate,180,1,180
2019-03-22,Hot Chocolate Fudge,120,3,360
2019-03-22,Butterscotch Single Scoop,60,3,180
2019-03-22,Butterscotch Single Scoop,60,3,180
2019-03-22,Cake Fudge,150,4,600
2019-03-22,Trilogy,160,4,640
2019-03-22,Vanilla Double Scoop,80,4,320
2019-03-22,Death by Chocolate,180,4,720
2019-03-22,Cafe Caramel,160,2,320
2019-03-22,Fig and Honey Single Scoop,60,3,180
2019-03-22,Dry Fruit Single Scoop,60,4,240
2019-03-22,Butterscotch Single Scoop,60,5,300
2019-03-22,Cafe Caramel,160,5,800
2019-03-22,Hot Chocolate Fudge,120,1,120
2019-03-22,Death by Chocolate,180,3,540
2019-03-22,Vanilla Double Scoop,80,1,80
2019-03-22,Butterscotch Double Scoop,90,3,270
2019-03-22,Dew Drop Sundae,150,2,300
2019-03-22,Vanilla Single Scoop,50,2,100
2019-03-22,Cake Fudge,150,5,750
2019-03-22,Death by Chocolate,180,4,720
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Death by Chocolate,180,4,720
2019-03-22,Cake Fudge,150,2,300
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Fig and Honey Double Scoop,90,3,270
2019-03-22,Cake Fudge,150,1,150
2019-03-22,Death by Chocolate,180,5,900
2019-03-22,Cake Fudge,150,3,450
2019-03-22,Vanilla Double Scoop,80,3,240
2019-03-22,Vanilla Double Scoop,80,1,80
2019-03-22,Butterscotch Single Scoop,60,5,300
2019-03-22,Vanilla Double Scoop,80,2,160
2019-03-22,Vanilla Double Scoop,80,4,320
2019-03-22,Vanilla Single Scoop,50,2,100
2019-03-22,Chocolate Europa Double Scoop,100,1,100
2019-03-22,Fig and Honey Double Scoop,90,2,180
2019-03-22,Hot Chocolate Fudge,120,1,120
2019-03-22,Death by Chocolate,180,4,720
2019-03-22,Hot Chocolate Fudge,120,3,360
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Death by Chocolate,180,1,180
2019-03-22,Vanilla Single Scoop,50,2,100
2019-03-22,Cake Fudge,150,3,450
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Death by Chocolate,180,2,360
2019-03-22,Cake Fudge,150,4,600
2019-03-22,Death by Chocolate,180,1,180
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Vanilla Double Scoop,80,3,240
2019-03-22,Death by Chocolate,180,3,540
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Dew Drop Sundae,150,1,150
2019-03-22,Pista Double Scoop,90,4,360
2019-03-22,Cake Fudge,150,2,300
2019-03-22,Cake Fudge,150,2,300
2019-03-22,Hot Chocolate Fudge,120,4,480
2019-03-22,Hot Chocolate Fudge,120,5,600
2019-03-22,Butterscotch Single Scoop,60,4,240
2019-03-22,Hot Chocolate Fudge,120,2,240
2019-03-22,Vanilla Double Scoop,80,5,400
2019-03-22,Hot Chocolate Fudge,120,3,360
2019-03-22,Hot Chocolate Fudge,120,1,120
2019-03-22,Cafe Caramel,160,5,800
2019-03-22,Butterscotch Single Scoop,60,5,300
2019-03-22,Vanilla Single Scoop,50,1,50
2019-03-22,Cafe Caramel,160,4,640
2019-03-22,Vanilla Double Scoop,80,4,320
2019-03-23,Death by Chocolate,180,2,360
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Death by Chocolate,180,1,180
2019-03-23,Butterscotch Single Scoop,60,3,180
2019-03-23,Butterscotch Double Scoop,90,2,180
2019-03-23,Cafe Caramel,160,4,640
2019-03-23,Cake Fudge,150,2,300
2019-03-23,Butterscotch Single Scoop,60,3,180
2019-03-23,Dry Fruit Double Scoop,90,3,270
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Vanilla Single Scoop,50,5,250
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Hot Chocolate Fudge,120,1,120
2019-03-23,Butterscotch Single Scoop,60,5,300
2019-03-23,Chocolate Europa Double Scoop,100,1,100
2019-03-23,Rocky Road Single Scoop,50,1,50
2019-03-23,Vanilla Double Scoop,80,2,160
2019-03-23,Death by Chocolate,180,3,540
2019-03-23,Vanilla Double Scoop,80,1,80
2019-03-23,Cake Fudge,150,4,600
2019-03-23,Hot Chocolate Fudge,120,3,360
2019-03-23,Caramel Crunch Double Scoop,100,3,300
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Hot Chocolate Fudge,120,3,360
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Vanilla Single Scoop,50,2,100
2019-03-23,Caramel Crunch Double Scoop,100,4,400
2019-03-23,Vanilla Double Scoop,80,3,240
2019-03-23,Death by Chocolate,180,2,360
2019-03-23,Vanilla Single Scoop,50,4,200
2019-03-23,Vanilla Single Scoop,50,1,50
2019-03-23,Butterscotch Single Scoop,60,3,180
2019-03-23,Vanilla Double Scoop,80,4,320
2019-03-23,Butterscotch Single Scoop,60,3,180
2019-03-23,Death by Chocolate,180,5,900
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Vanilla Double Scoop,80,3,240
2019-03-23,Pista Double Scoop,90,3,270
2019-03-23,Cake Fudge,150,3,450
2019-03-23,Vanilla Single Scoop,50,1,50
2019-03-23,Rocky Road Single Scoop,50,1,50
2019-03-23,Fig and Honey Double Scoop,90,4,360
2019-03-23,Hot Chocolate Fudge,120,1,120
2019-03-23,Cake Fudge,150,2,300
2019-03-23,Vanilla Double Scoop,80,1,80
2019-03-23,Vanilla Double Scoop,80,3,240
2019-03-23,Vanilla Single Scoop,50,2,100
2019-03-23,Caramel Crunch Single Scoop,70,5,350
2019-03-23,Hot Chocolate Fudge,120,3,360
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Vanilla Double Scoop,80,1,80
2019-03-23,Pista Double Scoop,90,5,450
2019-03-23,Chocolate Europa Single Scoop,70,5,350
2019-03-23,Vanilla Single Scoop,50,3,150
2019-03-23,Butterscotch Single Scoop,60,3,180
2019-03-23,Vanilla Single Scoop,50,4,200
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Dry Fruit Double Scoop,90,3,270
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Butterscotch Double Scoop,90,4,360
2019-03-23,Cake Fudge,150,4,600
2019-03-23,Butterscotch Single Scoop,60,5,300
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Death by Chocolate,180,4,720
2019-03-23,Hot Chocolate Fudge,120,2,240
2019-03-23,Death by Chocolate,180,4,720
2019-03-23,Butterscotch Single Scoop,60,2,120
2019-03-23,Cafe Caramel,160,2,320
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Butterscotch Double Scoop,90,2,180
2019-03-23,Butterscotch Single Scoop,60,2,120
2019-03-23,Death by Chocolate,180,1,180
2019-03-23,Vanilla Double Scoop,80,3,240
2019-03-23,Butterscotch Single Scoop,60,3,180
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Hot Chocolate Fudge,120,2,240
2019-03-23,Death by Chocolate,180,3,540
2019-03-23,Dry Fruit Double Scoop,90,5,450
2019-03-23,Hot Chocolate Fudge,120,1,120
2019-03-23,Hot Chocolate Fudge,120,2,240
2019-03-23,Cafe Caramel,160,2,320
2019-03-23,Banana Split,140,2,280
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Vanilla Double Scoop,80,1,80
2019-03-23,Fig and Honey Single Scoop,60,5,300
2019-03-23,Death by Chocolate,180,4,720
2019-03-23,Cafe Caramel,160,2,320
2019-03-23,Death by Chocolate,180,2,360
2019-03-23,Vanilla Single Scoop,50,2,100
2019-03-23,Death by Chocolate,180,4,720
2019-03-23,Pista Double Scoop,90,4,360
2019-03-23,Vanilla Single Scoop,50,4,200
2019-03-23,Caramel Crunch Single Scoop,70,3,210
2019-03-23,Vanilla Single Scoop,50,5,250
2019-03-23,Cake Fudge,150,1,150
2019-03-23,Butterscotch Single Scoop,60,2,120
2019-03-23,Hot Chocolate Fudge,120,1,120
2019-03-23,Vanilla Double Scoop,80,1,80
2019-03-23,Vanilla Double Scoop,80,3,240
2019-03-23,Death by Chocolate,180,5,900
2019-03-23,Butterscotch Double Scoop,90,2,180
2019-03-23,Vanilla Single Scoop,50,1,50
2019-03-23,Hot Chocolate Fudge,120,3,360
2019-03-23,Vanilla Single Scoop,50,5,250
2019-03-23,Cake Fudge,150,4,600
2019-03-23,Death by Chocolate,180,2,360
2019-03-23,Vanilla Single Scoop,50,2,100
2019-03-23,Hot Chocolate Fudge,120,1,120
2019-03-23,Butterscotch Single Scoop,60,5,300
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Hot Chocolate Fudge,120,5,600
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Cake Fudge,150,3,450
2019-03-23,Cake Fudge,150,3,450
2019-03-23,Butterscotch Single Scoop,60,5,300
2019-03-23,Vanilla Single Scoop,50,5,250
2019-03-23,Hot Chocolate Fudge,120,1,120
2019-03-23,Cafe Caramel,160,2,320
2019-03-23,Vanilla Single Scoop,50,3,150
2019-03-23,Chocolate Europa Single Scoop,70,2,140
2019-03-23,Vanilla Single Scoop,50,4,200
2019-03-23,Caramel Crunch Single Scoop,70,5,350
2019-03-23,Vanilla Single Scoop,50,4,200
2019-03-23,Hot Chocolate Fudge,120,3,360
2019-03-23,Cake Fudge,150,5,750
2019-03-23,Vanilla Double Scoop,80,1,80
2019-03-23,Dew Drop Sundae,150,3,450
2019-03-23,Vanilla Double Scoop,80,1,80
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Vanilla Double Scoop,80,4,320
2019-03-23,Death by Chocolate,180,2,360
2019-03-23,Vanilla Double Scoop,80,3,240
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Hot Chocolate Fudge,120,5,600
2019-03-23,Hot Chocolate Fudge,120,2,240
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Hot Chocolate Fudge,120,1,120
2019-03-23,Fig and Honey Double Scoop,90,1,90
2019-03-23,Cake Fudge,150,4,600
2019-03-23,Death by Chocolate,180,1,180
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Cake Fudge,150,1,150
2019-03-23,Vanilla Double Scoop,80,2,160
2019-03-23,Butterscotch Single Scoop,60,4,240
2019-03-23,Vanilla Double Scoop,80,3,240
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Vanilla Double Scoop,80,1,80
2019-03-23,Cake Fudge,150,4,600
2019-03-23,Vanilla Double Scoop,80,5,400
2019-03-23,Vanilla Single Scoop,50,3,150
2019-03-23,Hot Chocolate Fudge,120,4,480
2019-03-23,Pista Double Scoop,90,3,270
2019-03-23,Vanilla Double Scoop,80,2,160
2019-03-23,Vanilla Single Scoop,50,5,250
2019-03-23,Death by Chocolate,180,2,360
2019-03-23,Death by Chocolate,180,4,720
2019-03-23,Hot Chocolate Fudge,120,3,360
2019-03-23,Vanilla Single Scoop,50,4,200
2019-03-23,Vanilla Single Scoop,50,2,100
2019-03-23,Fig and Honey Double Scoop,90,2,180
2019-03-23,Banana Split,140,4,560
2019-03-23,Death by Chocolate,180,4,720
2019-03-23,Cake Fudge,150,4,600
2019-03-23,Death by Chocolate,180,5,900
2019-03-23,Fig and Honey Single Scoop,60,5,300
2019-03-23,Death by Chocolate,180,5,900
2019-03-23,Hot Chocolate Fudge,120,5,600
2019-03-23,Caramel Crunch Single Scoop,70,2,140
2019-03-24,Cafe Caramel,160,4,640
2019-03-24,Cake Fudge,150,4,600
2019-03-24,Hot Chocolate Fudge,120,3,360
2019-03-24,Vanilla Single Scoop,50,5,250
2019-03-24,Cake Fudge,150,3,450
2019-03-24,Cafe Caramel,160,1,160
2019-03-24,Hot Chocolate Fudge,120,2,240
2019-03-24,Fig and Honey Single Scoop,60,5,300
2019-03-24,Butterscotch Single Scoop,60,2,120
2019-03-24,Cafe Caramel,160,5,800
2019-03-24,Cafe Caramel,160,2,320
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Vanilla Single Scoop,50,2,100
2019-03-24,Vanilla Single Scoop,50,4,200
2019-03-24,Vanilla Double Scoop,80,5,400
2019-03-24,Vanilla Single Scoop,50,5,250
2019-03-24,Butterscotch Single Scoop,60,3,180
2019-03-24,Hot Chocolate Fudge,120,3,360
2019-03-24,Vanilla Single Scoop,50,1,50
2019-03-24,Butterscotch Single Scoop,60,1,60
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Vanilla Double Scoop,80,2,160
2019-03-24,Hot Chocolate Fudge,120,3,360
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Death by Chocolate,180,1,180
2019-03-24,Chocolate Europa Double Scoop,100,2,200
2019-03-24,Vanilla Double Scoop,80,3,240
2019-03-24,Vanilla Single Scoop,50,5,250
2019-03-24,Butterscotch Single Scoop,60,1,60
2019-03-24,Butterscotch Single Scoop,60,4,240
2019-03-24,Vanilla Double Scoop,80,3,240
2019-03-24,Cake Fudge,150,2,300
2019-03-24,Butterscotch Single Scoop,60,5,300
2019-03-24,Death by Chocolate,180,4,720
2019-03-24,Death by Chocolate,180,4,720
2019-03-24,Hot Chocolate Fudge,120,4,480
2019-03-24,Dew Drop Sundae,150,1,150
2019-03-24,Vanilla Single Scoop,50,5,250
2019-03-24,Death by Chocolate,180,5,900
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Cafe Caramel,160,2,320
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Dry Fruit Single Scoop,60,1,60
2019-03-24,Hot Chocolate Fudge,120,2,240
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Hot Chocolate Fudge,120,3,360
2019-03-24,Vanilla Double Scoop,80,5,400
2019-03-24,Cafe Caramel,160,4,640
2019-03-24,Cafe Caramel,160,3,480
2019-03-24,Hot Chocolate Fudge,120,3,360
2019-03-24,Cake Fudge,150,2,300
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Mint Fudge,120,3,360
2019-03-24,Pista Single Scoop,60,5,300
2019-03-24,Chocolate Europa Double Scoop,100,2,200
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Hot Chocolate Fudge,120,2,240
2019-03-24,Pista Double Scoop,90,5,450
2019-03-24,Dew Drop Sundae,150,2,300
2019-03-24,Rocky Road Single Scoop,50,3,150
2019-03-24,Butterscotch Single Scoop,60,4,240
2019-03-24,Hot Chocolate Fudge,120,2,240
2019-03-24,Vanilla Double Scoop,80,2,160
2019-03-24,Death by Chocolate,180,2,360
2019-03-24,Butterscotch Single Scoop,60,3,180
2019-03-24,Butterscotch Single Scoop,60,3,180
2019-03-24,Dry Fruit Single Scoop,60,4,240
2019-03-24,Butterscotch Single Scoop,60,2,120
2019-03-24,Caramel Crunch Single Scoop,70,5,350
2019-03-24,Vanilla Single Scoop,50,1,50
2019-03-24,Hot Chocolate Fudge,120,4,480
2019-03-24,Butterscotch Single Scoop,60,5,300
2019-03-24,Butterscotch Single Scoop,60,5,300
2019-03-24,Hot Chocolate Fudge,120,3,360
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Chocolate Europa Single Scoop,70,4,280
2019-03-24,Chocolate Europa Double Scoop,100,2,200
2019-03-24,Cake Fudge,150,3,450
2019-03-24,Death by Chocolate,180,1,180
2019-03-24,Vanilla Double Scoop,80,5,400
2019-03-24,Butterscotch Single Scoop,60,4,240
2019-03-24,Butterscotch Single Scoop,60,3,180
2019-03-24,Butterscotch Single Scoop,60,3,180
2019-03-24,Pista Single Scoop,60,3,180
2019-03-24,Death by Chocolate,180,1,180
2019-03-24,Hot Chocolate Fudge,120,1,120
2019-03-24,Hot Chocolate Fudge,120,4,480
2019-03-24,Cafe Caramel,160,2,320
2019-03-24,Vanilla Double Scoop,80,4,320
2019-03-24,Chocolate Europa Single Scoop,70,1,70
2019-03-24,Cake Fudge,150,2,300
2019-03-24,Hot Chocolate Fudge,120,3,360
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Vanilla Single Scoop,50,5,250
2019-03-24,Vanilla Single Scoop,50,1,50
2019-03-24,Cake Fudge,150,4,600
2019-03-24,Death by Chocolate,180,4,720
2019-03-24,Hot Chocolate Fudge,120,4,480
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Vanilla Double Scoop,80,4,320
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Vanilla Single Scoop,50,3,150
2019-03-24,Banana Split,140,3,420
2019-03-24,Butterscotch Single Scoop,60,1,60
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Vanilla Single Scoop,50,3,150
2019-03-24,Hot Chocolate Fudge,120,1,120
2019-03-24,Butterscotch Single Scoop,60,4,240
2019-03-24,Vanilla Single Scoop,50,3,150
2019-03-24,Death by Chocolate,180,5,900
2019-03-24,Cake Fudge,150,5,750
2019-03-24,Dew Drop Sundae,150,2,300
2019-03-24,Vanilla Single Scoop,50,3,150
2019-03-24,Cafe Caramel,160,3,480
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Butterscotch Single Scoop,60,5,300
2019-03-24,Vanilla Double Scoop,80,3,240
2019-03-24,Cake Fudge,150,3,450
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Death by Chocolate,180,1,180
2019-03-24,Chocolate Europa Double Scoop,100,2,200
2019-03-24,Pista Single Scoop,60,1,60
2019-03-24,Mint Fudge,120,3,360
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Hot Chocolate Fudge,120,4,480
2019-03-24,Cafe Caramel,160,4,640
2019-03-24,Hot Chocolate Fudge,120,1,120
2019-03-24,Vanilla Double Scoop,80,3,240
2019-03-24,Vanilla Single Scoop,50,2,100
2019-03-24,Death by Chocolate,180,2,360
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Butterscotch Single Scoop,60,2,120
2019-03-24,Death by Chocolate,180,3,540
2019-03-24,Vanilla Single Scoop,50,2,100
2019-03-24,Hot Chocolate Fudge,120,1,120
2019-03-24,Hot Chocolate Fudge,120,2,240
2019-03-24,Butterscotch Double Scoop,90,1,90
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Death by Chocolate,180,4,720
2019-03-24,Butterscotch Single Scoop,60,1,60
2019-03-24,Mint Fudge,120,3,360
2019-03-24,Butterscotch Single Scoop,60,3,180
2019-03-24,Death by Chocolate,180,5,900
2019-03-24,Pista Single Scoop,60,3,180
2019-03-24,Butterscotch Single Scoop,60,5,300
2019-03-24,Death by Chocolate,180,2,360
2019-03-24,Death by Chocolate,180,2,360
2019-03-24,Dew Drop Sundae,150,5,750
2019-03-24,Cake Fudge,150,5,750
2019-03-24,Pista Double Scoop,90,2,180
2019-03-24,Vanilla Single Scoop,50,1,50
2019-03-24,Fig and Honey Single Scoop,60,3,180
2019-03-24,Vanilla Single Scoop,50,1,50
2019-03-24,Cake Fudge,150,2,300
2019-03-24,Vanilla Single Scoop,50,2,100
2019-03-24,Butterscotch Single Scoop,60,2,120
2019-03-24,Butterscotch Single Scoop,60,4,240
2019-03-24,Cake Fudge,150,2,300
2019-03-24,Vanilla Double Scoop,80,5,400
2019-03-24,Vanilla Single Scoop,50,4,200
2019-03-24,Death by Chocolate,180,2,360
2019-03-24,Vanilla Double Scoop,80,3,240
2019-03-24,Vanilla Double Scoop,80,2,160
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Butterscotch Single Scoop,60,3,180
2019-03-24,Butterscotch Single Scoop,60,4,240
2019-03-24,Hot Chocolate Fudge,120,2,240
2019-03-24,Butterscotch Single Scoop,60,4,240
2019-03-24,Cake Fudge,150,4,600
2019-03-24,Fig and Honey Double Scoop,90,3,270
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Death by Chocolate,180,1,180
2019-03-24,Cake Fudge,150,3,450
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Caramel Crunch Single Scoop,70,1,70
2019-03-24,Vanilla Double Scoop,80,4,320
2019-03-24,Fig and Honey Single Scoop,60,1,60
2019-03-24,Vanilla Single Scoop,50,3,150
2019-03-24,Cake Fudge,150,5,750
2019-03-24,Chocolate Europa Double Scoop,100,5,500
2019-03-24,Rocky Road Single Scoop,50,1,50
2019-03-24,Vanilla Double Scoop,80,2,160
2019-03-24,Dry Fruit Single Scoop,60,4,240
2019-03-24,Death by Chocolate,180,2,360
2019-03-24,Vanilla Double Scoop,80,3,240
2019-03-24,Hot Chocolate Fudge,120,2,240
2019-03-24,Butterscotch Double Scoop,90,4,360
2019-03-24,Vanilla Double Scoop,80,1,80
2019-03-24,Hot Chocolate Fudge,120,5,600
2019-03-24,Cake Fudge,150,5,750
2019-03-24,Cafe Caramel,160,2,320
2019-03-24,Vanilla Double Scoop,80,2,160
2019-03-24,Death by Chocolate,180,2,360
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Death by Chocolate,180,5,900
2019-03-24,Vanilla Double Scoop,80,4,320
2019-03-24,Vanilla Single Scoop,50,3,150
2019-03-24,Cafe Caramel,160,2,320
2019-03-24,Cafe Caramel,160,3,480
2019-03-24,Vanilla Single Scoop,50,5,250
2019-03-24,Vanilla Double Scoop,80,4,320
2019-03-24,Vanilla Single Scoop,50,1,50
2019-03-24,Death by Chocolate,180,2,360
2019-03-24,Butterscotch Single Scoop,60,3,180
2019-03-24,Butterscotch Single Scoop,60,5,300
2019-03-24,Cake Fudge,150,1,150
2019-03-24,Cake Fudge,150,2,300
2019-03-24,Cake Fudge,150,2,300
2019-03-24,Vanilla Double Scoop,80,4,320
2019-03-24,Pista Double Scoop,90,3,270
2019-03-24,Vanilla Single Scoop,50,1,50
2019-03-25,Butterscotch Single Scoop,60,5,300
2019-03-25,Cake Fudge,150,2,300
2019-03-25,Pista Single Scoop,60,3,180
2019-03-25,Hot Chocolate Fudge,120,3,360
2019-03-25,Butterscotch Single Scoop,60,2,120
2019-03-25,Death by Chocolate,180,2,360
2019-03-25,Vanilla Single Scoop,50,1,50
2019-03-25,Butterscotch Single Scoop,60,5,300
2019-03-25,Cake Fudge,150,5,750
2019-03-25,Fig and Honey Single Scoop,60,1,60
2019-03-25,Cake Fudge,150,1,150
2019-03-25,Vanilla Double Scoop,80,2,160
2019-03-25,Fig and Honey Double Scoop,90,3,270
2019-03-25,Vanilla Double Scoop,80,1,80
2019-03-25,Hot Chocolate Fudge,120,2,240
2019-03-25,Hot Chocolate Fudge,120,4,480
2019-03-25,Cake Fudge,150,2,300
2019-03-25,Cake Fudge,150,5,750
2019-03-25,Vanilla Single Scoop,50,5,250
2019-03-25,Butterscotch Single Scoop,60,3,180
2019-03-25,Hot Chocolate Fudge,120,2,240
2019-03-25,Fig and Honey Single Scoop,60,1,60
2019-03-25,Hot Chocolate Fudge,120,4,480
2019-03-25,Death by Chocolate,180,3,540
2019-03-25,Butterscotch Single Scoop,60,3,180
2019-03-25,Vanilla Single Scoop,50,5,250
2019-03-25,Cake Fudge,150,5,750
2019-03-25,Vanilla Double Scoop,80,3,240
2019-03-25,Cake Fudge,150,1,150
2019-03-25,Cake Fudge,150,5,750
2019-03-25,Butterscotch Single Scoop,60,3,180
2019-03-25,Butterscotch Single Scoop,60,4,240
2019-03-25,Hot Chocolate Fudge,120,4,480
2019-03-25,Dry Fruit Double Scoop,90,5,450
2019-03-25,Butterscotch Single Scoop,60,5,300
2019-03-25,Vanilla Double Scoop,80,3,240
2019-03-25,Butterscotch Single Scoop,60,2,120
2019-03-25,Butterscotch Single Scoop,60,5,300
2019-03-25,Vanilla Double Scoop,80,5,400
2019-03-25,Fig and Honey Single Scoop,60,2,120
2019-03-25,Hot Chocolate Fudge,120,3,360
2019-03-25,Cake Fudge,150,3,450
2019-03-25,Cake Fudge,150,1,150
2019-03-25,Death by Chocolate,180,2,360
2019-03-25,Vanilla Double Scoop,80,2,160
2019-03-25,Death by Chocolate,180,4,720
2019-03-25,Vanilla Single Scoop,50,5,250
2019-03-25,Cafe Caramel,160,5,800
2019-03-25,Vanilla Double Scoop,80,1,80
2019-03-25,Death by Chocolate,180,2,360
2019-03-25,Dry Fruit Double Scoop,90,1,90
2019-03-25,Cafe Caramel,160,2,320
2019-03-25,Hot Chocolate Fudge,120,2,240
2019-03-25,Vanilla Double Scoop,80,4,320
2019-03-25,Vanilla Single Scoop,50,3,150
2019-03-25,Caramel Crunch Single Scoop,70,4,280
2019-03-25,Vanilla Double Scoop,80,2,160
2019-03-25,Butterscotch Single Scoop,60,5,300
2019-03-25,Hot Chocolate Fudge,120,1,120
2019-03-25,Vanilla Single Scoop,50,1,50
2019-03-25,Cake Fudge,150,5,750
2019-03-25,Vanilla Single Scoop,50,3,150
2019-03-25,Butterscotch Single Scoop,60,3,180
2019-03-25,Hot Chocolate Fudge,120,2,240
2019-03-25,Cake Fudge,150,5,750
2019-03-25,Chocolate Europa Double Scoop,100,4,400
2019-03-25,Cafe Caramel,160,2,320
2019-03-25,Dry Fruit Double Scoop,90,3,270
2019-03-25,Vanilla Single Scoop,50,5,250
2019-03-25,Hot Chocolate Fudge,120,5,600
2019-03-25,Cake Fudge,150,3,450
2019-03-25,Death by Chocolate,180,2,360
2019-03-25,Butterscotch Single Scoop,60,2,120
2019-03-25,Death by Chocolate,180,3,540
2019-03-25,Cafe Caramel,160,3,480
2019-03-25,Hot Chocolate Fudge,120,3,360
2019-03-25,Vanilla Single Scoop,50,2,100
2019-03-25,Cake Fudge,150,3,450
2019-03-25,Dry Fruit Double Scoop,90,5,450
2019-03-25,Dew Drop Sundae,150,1,150
2019-03-25,Hot Chocolate Fudge,120,1,120
2019-03-25,Vanilla Double Scoop,80,2,160
2019-03-25,Butterscotch Single Scoop,60,3,180
2019-03-25,Vanilla Single Scoop,50,4,200
2019-03-25,Cake Fudge,150,2,300
2019-03-25,Caramel Crunch Single Scoop,70,5,350
2019-03-25,Trilogy,160,2,320
2019-03-25,Death by Chocolate,180,1,180
2019-03-25,Hot Chocolate Fudge,120,3,360
2019-03-25,Caramel Crunch Double Scoop,100,4,400
2019-03-25,Chocolate Europa Double Scoop,100,1,100
2019-03-25,Chocolate Europa Single Scoop,70,4,280
2019-03-25,Vanilla Double Scoop,80,2,160
2019-03-25,Death by Chocolate,180,5,900
2019-03-25,Butterscotch Single Scoop,60,3,180
2019-03-25,Death by Chocolate,180,2,360
2019-03-25,Cake Fudge,150,4,600
2019-03-25,Hot Chocolate Fudge,120,2,240
2019-03-25,Vanilla Single Scoop,50,5,250
2019-03-25,Vanilla Double Scoop,80,4,320
2019-03-25,Hot Chocolate Fudge,120,4,480
2019-03-25,Hot Chocolate Fudge,120,1,120
2019-03-25,Vanilla Double Scoop,80,1,80
2019-03-25,Trilogy,160,3,480
2019-03-25,Butterscotch Single Scoop,60,2,120
2019-03-25,Vanilla Double Scoop,80,1,80
2019-03-25,Vanilla Double Scoop,80,2,160
2019-03-25,Hot Chocolate Fudge,120,4,480
2019-03-25,Hot Chocolate Fudge,120,4,480
2019-03-25,Pista Double Scoop,90,3,270
2019-03-25,Pista Double Scoop,90,2,180
2019-03-25,Hot Chocolate Fudge,120,5,600
2019-03-25,Vanilla Double Scoop,80,1,80
2019-03-25,Death by Chocolate,180,4,720
2019-03-25,Mint Fudge,120,5,600
2019-03-25,Butterscotch Single Scoop,60,1,60
2019-03-25,Death by Chocolate,180,4,720
2019-03-25,Hot Chocolate Fudge,120,2,240
2019-03-25,Hot Chocolate Fudge,120,4,480
2019-03-25,Hot Chocolate Fudge,120,3,360
2019-03-25,Vanilla Double Scoop,80,4,320
2019-03-25,Death by Chocolate,180,4,720
2019-03-25,Caramel Crunch Single Scoop,70,2,140
2019-03-25,Hot Chocolate Fudge,120,3,360
2019-03-25,Vanilla Double Scoop,80,2,160
2019-03-25,Hot Chocolate Fudge,120,1,120
2019-03-25,Butterscotch Single Scoop,60,5,300
2019-03-25,Vanilla Double Scoop,80,5,400
2019-03-25,Vanilla Single Scoop,50,4,200
2019-03-25,Hot Chocolate Fudge,120,2,240
2019-03-25,Hot Chocolate Fudge,120,4,480
2019-03-25,Fig and Honey Double Scoop,90,3,270
2019-03-25,Death by Chocolate,180,4,720
2019-03-25,Vanilla Double Scoop,80,5,400
2019-03-25,Banana Split,140,5,700
2019-03-25,Vanilla Single Scoop,50,4,200
2019-03-25,Butterscotch Single Scoop,60,1,60
2019-03-25,Cake Fudge,150,4,600
2019-03-25,Cafe Caramel,160,4,640
2019-03-25,Hot Chocolate Fudge,120,3,360
2019-03-25,Butterscotch Single Scoop,60,5,300
2019-03-25,Hot Chocolate Fudge,120,1,120
2019-03-25,Vanilla Single Scoop,50,4,200
2019-03-25,Vanilla Double Scoop,80,1,80
2019-03-25,Pista Double Scoop,90,5,450
2019-03-25,Butterscotch Single Scoop,60,3,180
2019-03-25,Cake Fudge,150,4,600
2019-03-25,Vanilla Double Scoop,80,4,320
2019-03-25,Cake Fudge,150,2,300
2019-03-25,Hot Chocolate Fudge,120,5,600
2019-03-25,Cake Fudge,150,4,600
2019-03-26,Vanilla Double Scoop,80,5,400
2019-03-26,Vanilla Single Scoop,50,5,250
2019-03-26,Cake Fudge,150,4,600
2019-03-26,Death by Chocolate,180,5,900
2019-03-26,Vanilla Single Scoop,50,4,200
2019-03-26,Chocolate Europa Single Scoop,70,4,280
2019-03-26,Hot Chocolate Fudge,120,5,600
2019-03-26,Vanilla Double Scoop,80,1,80
2019-03-26,Cake Fudge,150,4,600
2019-03-26,Cake Fudge,150,1,150
2019-03-26,Fig and Honey Single Scoop,60,5,300
2019-03-26,Butterscotch Single Scoop,60,1,60
2019-03-26,Dew Drop Sundae,150,4,600
2019-03-26,Vanilla Double Scoop,80,4,320
2019-03-26,Hot Chocolate Fudge,120,4,480
2019-03-26,Vanilla Double Scoop,80,4,320
2019-03-26,Cafe Caramel,160,1,160
2019-03-26,Cake Fudge,150,5,750
2019-03-26,Hot Chocolate Fudge,120,1,120
2019-03-26,Fig and Honey Double Scoop,90,5,450
2019-03-26,Cake Fudge,150,5,750
2019-03-26,Hot Chocolate Fudge,120,3,360
2019-03-26,Vanilla Single Scoop,50,1,50
2019-03-26,Hot Chocolate Fudge,120,4,480
2019-03-26,Cake Fudge,150,4,600
2019-03-26,Death by Chocolate,180,4,720
2019-03-26,Vanilla Double Scoop,80,1,80
2019-03-26,Butterscotch Single Scoop,60,5,300
2019-03-26,Vanilla Double Scoop,80,1,80
2019-03-26,Cake Fudge,150,4,600
2019-03-26,Hot Chocolate Fudge,120,4,480
2019-03-26,Cake Fudge,150,5,750
2019-03-26,Hot Chocolate Fudge,120,2,240
2019-03-26,Cake Fudge,150,5,750
2019-03-26,Chocolate Europa Double Scoop,100,5,500
2019-03-26,Pista Single Scoop,60,5,300
2019-03-26,Vanilla Double Scoop,80,3,240
2019-03-26,Vanilla Double Scoop,80,5,400
2019-03-26,Cake Fudge,150,1,150
2019-03-26,Hot Chocolate Fudge,120,3,360
2019-03-26,Cake Fudge,150,5,750
2019-03-26,Butterscotch Single Scoop,60,3,180
2019-03-26,Hot Chocolate Fudge,120,5,600
2019-03-26,Cake Fudge,150,3,450
2019-03-26,Death by Chocolate,180,3,540
2019-03-26,Vanilla Single Scoop,50,2,100
2019-03-26,Hot Chocolate Fudge,120,1,120
2019-03-26,Butterscotch Single Scoop,60,3,180
2019-03-26,Cafe Caramel,160,5,800
2019-03-26,Vanilla Double Scoop,80,2,160
2019-03-26,Cafe Caramel,160,3,480
2019-03-26,Cafe Caramel,160,4,640
2019-03-26,Vanilla Double Scoop,80,2,160
2019-03-26,Death by Chocolate,180,3,540
2019-03-26,Death by Chocolate,180,5,900
2019-03-26,Cake Fudge,150,2,300
2019-03-26,Vanilla Double Scoop,80,5,400
2019-03-26,Butterscotch Single Scoop,60,1,60
2019-03-26,Chocolate Europa Double Scoop,100,1,100
2019-03-26,Fig and Honey Single Scoop,60,3,180
2019-03-26,Cake Fudge,150,1,150
2019-03-26,Cake Fudge,150,2,300
2019-03-26,Cake Fudge,150,2,300
2019-03-26,Vanilla Single Scoop,50,5,250
2019-03-26,Death by Chocolate,180,2,360
2019-03-26,Hot Chocolate Fudge,120,4,480
2019-03-26,Vanilla Single Scoop,50,2,100
2019-03-26,Dew Drop Sundae,150,4,600
2019-03-26,Cake Fudge,150,1,150
2019-03-26,Butterscotch Single Scoop,60,2,120
2019-03-26,Vanilla Double Scoop,80,5,400
2019-03-26,Vanilla Double Scoop,80,5,400
2019-03-26,Butterscotch Single Scoop,60,3,180
2019-03-26,Dew Drop Sundae,150,1,150
2019-03-26,Hot Chocolate Fudge,120,1,120
2019-03-26,Vanilla Single Scoop,50,3,150
2019-03-26,Vanilla Single Scoop,50,5,250
2019-03-26,Hot Chocolate Fudge,120,3,360
2019-03-26,Hot Chocolate Fudge,120,1,120
2019-03-26,Pista Single Scoop,60,4,240
2019-03-26,Vanilla Double Scoop,80,5,400
2019-03-26,Hot Chocolate Fudge,120,2,240
2019-03-26,Vanilla Double Scoop,80,4,320
2019-03-26,Cake Fudge,150,5,750
2019-03-26,Vanilla Double Scoop,80,4,320
2019-03-26,Cake Fudge,150,4,600
2019-03-26,Death by Chocolate,180,2,360
2019-03-26,Pista Single Scoop,60,3,180
2019-03-26,Rocky Road Double Scoop,80,4,320
2019-03-26,Hot Chocolate Fudge,120,2,240
2019-03-26,Vanilla Single Scoop,50,5,250
2019-03-26,Cafe Caramel,160,3,480
2019-03-26,Butterscotch Double Scoop,90,4,360
2019-03-26,Butterscotch Single Scoop,60,2,120
2019-03-26,Hot Chocolate Fudge,120,4,480
2019-03-26,Vanilla Single Scoop,50,2,100
2019-03-26,Vanilla Double Scoop,80,3,240
2019-03-26,Hot Chocolate Fudge,120,4,480
2019-03-26,Trilogy,160,3,480
2019-03-26,Cake Fudge,150,3,450
2019-03-26,Cafe Caramel,160,3,480
2019-03-26,Cake Fudge,150,5,750
2019-03-26,Death by Chocolate,180,4,720
2019-03-26,Butterscotch Single Scoop,60,5,300
2019-03-26,Butterscotch Single Scoop,60,4,240
2019-03-26,Vanilla Double Scoop,80,2,160
2019-03-26,Cake Fudge,150,1,150
2019-03-26,Chocolate Europa Single Scoop,70,3,210
2019-03-26,Death by Chocolate,180,5,900
2019-03-26,Cake Fudge,150,3,450
2019-03-26,Butterscotch Single Scoop,60,4,240
2019-03-26,Cake Fudge,150,5,750
2019-03-26,Vanilla Double Scoop,80,4,320
2019-03-26,Hot Chocolate Fudge,120,3,360
2019-03-26,Hot Chocolate Fudge,120,3,360
2019-03-26,Vanilla Double Scoop,80,1,80
2019-03-26,Hot Chocolate Fudge,120,4,480
2019-03-26,Caramel Crunch Single Scoop,70,4,280
2019-03-26,Vanilla Double Scoop,80,3,240
2019-03-26,Hot Chocolate Fudge,120,2,240
2019-03-27,Butterscotch Single Scoop,60,5,300
2019-03-27,Vanilla Single Scoop,50,5,250
2019-03-27,Dry Fruit Double Scoop,90,1,90
2019-03-27,Hot Chocolate Fudge,120,1,120
2019-03-27,Vanilla Single Scoop,50,3,150
2019-03-27,Death by Chocolate,180,2,360
2019-03-27,Hot Chocolate Fudge,120,1,120
2019-03-27,Cake Fudge,150,2,300
2019-03-27,Cake Fudge,150,1,150
2019-03-27,Dry Fruit Single Scoop,60,3,180
2019-03-27,Vanilla Single Scoop,50,2,100
2019-03-27,Butterscotch Single Scoop,60,5,300
2019-03-27,Death by Chocolate,180,5,900
2019-03-27,Cake Fudge,150,1,150
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Vanilla Single Scoop,50,2,100
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Hot Chocolate Fudge,120,4,480
2019-03-27,Butterscotch Single Scoop,60,5,300
2019-03-27,Vanilla Double Scoop,80,4,320
2019-03-27,Cake Fudge,150,1,150
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Dry Fruit Double Scoop,90,3,270
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Dry Fruit Double Scoop,90,4,360
2019-03-27,Death by Chocolate,180,3,540
2019-03-27,Dry Fruit Double Scoop,90,5,450
2019-03-27,Cake Fudge,150,1,150
2019-03-27,Death by Chocolate,180,4,720
2019-03-27,Hot Chocolate Fudge,120,1,120
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Vanilla Single Scoop,50,2,100
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Caramel Crunch Single Scoop,70,3,210
2019-03-27,Death by Chocolate,180,2,360
2019-03-27,Rocky Road Single Scoop,50,2,100
2019-03-27,Hot Chocolate Fudge,120,4,480
2019-03-27,Butterscotch Single Scoop,60,4,240
2019-03-27,Rocky Road Single Scoop,50,1,50
2019-03-27,Vanilla Single Scoop,50,1,50
2019-03-27,Vanilla Single Scoop,50,2,100
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Vanilla Double Scoop,80,4,320
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Dry Fruit Double Scoop,90,3,270
2019-03-27,Chocolate Europa Single Scoop,70,4,280
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Caramel Crunch Single Scoop,70,2,140
2019-03-27,Vanilla Single Scoop,50,5,250
2019-03-27,Cake Fudge,150,3,450
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Butterscotch Single Scoop,60,5,300
2019-03-27,Vanilla Single Scoop,50,1,50
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Dry Fruit Single Scoop,60,1,60
2019-03-27,Vanilla Double Scoop,80,1,80
2019-03-27,Vanilla Single Scoop,50,5,250
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Death by Chocolate,180,4,720
2019-03-27,Hot Chocolate Fudge,120,4,480
2019-03-27,Vanilla Double Scoop,80,1,80
2019-03-27,Hot Chocolate Fudge,120,1,120
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Vanilla Double Scoop,80,3,240
2019-03-27,Rocky Road Single Scoop,50,3,150
2019-03-27,Cake Fudge,150,2,300
2019-03-27,Chocolate Europa Single Scoop,70,3,210
2019-03-27,Hot Chocolate Fudge,120,1,120
2019-03-27,Butterscotch Single Scoop,60,5,300
2019-03-27,Cake Fudge,150,3,450
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Vanilla Single Scoop,50,3,150
2019-03-27,Cafe Caramel,160,4,640
2019-03-27,Vanilla Double Scoop,80,1,80
2019-03-27,Cafe Caramel,160,3,480
2019-03-27,Butterscotch Double Scoop,90,5,450
2019-03-27,Cafe Caramel,160,5,800
2019-03-27,Hot Chocolate Fudge,120,4,480
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Butterscotch Single Scoop,60,2,120
2019-03-27,Cake Fudge,150,1,150
2019-03-27,Butterscotch Single Scoop,60,2,120
2019-03-27,Cafe Caramel,160,2,320
2019-03-27,Butterscotch Single Scoop,60,3,180
2019-03-27,Fig and Honey Double Scoop,90,5,450
2019-03-27,Butterscotch Single Scoop,60,5,300
2019-03-27,Death by Chocolate,180,1,180
2019-03-27,Dry Fruit Single Scoop,60,3,180
2019-03-27,Hot Chocolate Fudge,120,4,480
2019-03-27,Rocky Road Single Scoop,50,5,250
2019-03-27,Dry Fruit Single Scoop,60,2,120
2019-03-27,Chocolate Europa Double Scoop,100,2,200
2019-03-27,Cake Fudge,150,2,300
2019-03-27,Vanilla Single Scoop,50,3,150
2019-03-27,Cake Fudge,150,5,750
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Hot Chocolate Fudge,120,4,480
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Butterscotch Single Scoop,60,1,60
2019-03-27,Dew Drop Sundae,150,5,750
2019-03-27,Hot Chocolate Fudge,120,5,600
2019-03-27,Hot Chocolate Fudge,120,5,600
2019-03-27,Hot Chocolate Fudge,120,4,480
2019-03-27,Cafe Caramel,160,2,320
2019-03-27,Rocky Road Single Scoop,50,5,250
2019-03-27,Butterscotch Single Scoop,60,5,300
2019-03-27,Butterscotch Single Scoop,60,3,180
2019-03-27,Hot Chocolate Fudge,120,5,600
2019-03-27,Cake Fudge,150,5,750
2019-03-27,Cake Fudge,150,5,750
2019-03-27,Cake Fudge,150,5,750
2019-03-27,Butterscotch Single Scoop,60,2,120
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Cake Fudge,150,5,750
2019-03-27,Cafe Caramel,160,2,320
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Chocolate Europa Double Scoop,100,2,200
2019-03-27,Caramel Crunch Double Scoop,100,1,100
2019-03-27,Vanilla Single Scoop,50,5,250
2019-03-27,Death by Chocolate,180,4,720
2019-03-27,Butterscotch Single Scoop,60,3,180
2019-03-27,Death by Chocolate,180,4,720
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Vanilla Double Scoop,80,4,320
2019-03-27,Death by Chocolate,180,3,540
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Fig and Honey Single Scoop,60,3,180
2019-03-27,Cafe Caramel,160,2,320
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Death by Chocolate,180,5,900
2019-03-27,Butterscotch Single Scoop,60,1,60
2019-03-27,Vanilla Single Scoop,50,5,250
2019-03-27,Vanilla Single Scoop,50,4,200
2019-03-27,Cafe Caramel,160,5,800
2019-03-27,Vanilla Single Scoop,50,4,200
2019-03-27,Butterscotch Single Scoop,60,5,300
2019-03-27,Butterscotch Single Scoop,60,2,120
2019-03-27,Death by Chocolate,180,1,180
2019-03-27,Death by Chocolate,180,4,720
2019-03-27,Cake Fudge,150,1,150
2019-03-27,Pista Double Scoop,90,1,90
2019-03-27,Vanilla Single Scoop,50,3,150
2019-03-27,Dry Fruit Double Scoop,90,1,90
2019-03-27,Caramel Crunch Double Scoop,100,1,100
2019-03-27,Dry Fruit Single Scoop,60,1,60
2019-03-27,Hot Chocolate Fudge,120,4,480
2019-03-27,Cake Fudge,150,2,300
2019-03-27,Hot Chocolate Fudge,120,3,360
2019-03-27,Vanilla Double Scoop,80,5,400
2019-03-27,Death by Chocolate,180,3,540
2019-03-27,Vanilla Single Scoop,50,5,250
2019-03-27,Hot Chocolate Fudge,120,5,600
2019-03-27,Cafe Caramel,160,1,160
2019-03-27,Cafe Caramel,160,1,160
2019-03-27,Cake Fudge,150,2,300
2019-03-27,Fig and Honey Single Scoop,60,2,120
2019-03-27,Cake Fudge,150,5,750
2019-03-27,Cafe Caramel,160,4,640
2019-03-27,Vanilla Single Scoop,50,3,150
2019-03-27,Caramel Crunch Double Scoop,100,2,200
2019-03-27,Death by Chocolate,180,2,360
2019-03-27,Vanilla Double Scoop,80,5,400
2019-03-27,Cafe Caramel,160,4,640
2019-03-27,Hot Chocolate Fudge,120,2,240
2019-03-27,Cake Fudge,150,4,600
2019-03-27,Butterscotch Single Scoop,60,2,120
2019-03-27,Cake Fudge,150,5,750
2019-03-28,Death by Chocolate,180,4,720
2019-03-28,Death by Chocolate,180,3,540
2019-03-28,Cake Fudge,150,3,450
2019-03-28,Hot Chocolate Fudge,120,5,600
2019-03-28,Caramel Crunch Single Scoop,70,1,70
2019-03-28,Vanilla Single Scoop,50,3,150
2019-03-28,Cake Fudge,150,5,750
2019-03-28,Vanilla Double Scoop,80,3,240
2019-03-28,Vanilla Double Scoop,80,2,160
2019-03-28,Cake Fudge,150,5,750
2019-03-28,Hot Chocolate Fudge,120,5,600
2019-03-28,Hot Chocolate Fudge,120,4,480
2019-03-28,Death by Chocolate,180,2,360
2019-03-28,Cake Fudge,150,3,450
2019-03-28,Vanilla Single Scoop,50,2,100
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Cake Fudge,150,4,600
2019-03-28,Death by Chocolate,180,2,360
2019-03-28,Caramel Crunch Single Scoop,70,5,350
2019-03-28,Death by Chocolate,180,3,540
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Hot Chocolate Fudge,120,5,600
2019-03-28,Butterscotch Single Scoop,60,4,240
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Pista Single Scoop,60,5,300
2019-03-28,Cake Fudge,150,4,600
2019-03-28,Vanilla Double Scoop,80,5,400
2019-03-28,Vanilla Double Scoop,80,3,240
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Vanilla Double Scoop,80,4,320
2019-03-28,Vanilla Single Scoop,50,4,200
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Pista Double Scoop,90,4,360
2019-03-28,Fig and Honey Double Scoop,90,2,180
2019-03-28,Vanilla Single Scoop,50,3,150
2019-03-28,Cafe Caramel,160,5,800
2019-03-28,Vanilla Double Scoop,80,1,80
2019-03-28,Vanilla Single Scoop,50,1,50
2019-03-28,Pista Single Scoop,60,4,240
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Cafe Caramel,160,1,160
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Vanilla Single Scoop,50,3,150
2019-03-28,Butterscotch Single Scoop,60,5,300
2019-03-28,Cake Fudge,150,4,600
2019-03-28,Cake Fudge,150,4,600
2019-03-28,Rocky Road Single Scoop,50,2,100
2019-03-28,Butterscotch Single Scoop,60,4,240
2019-03-28,Death by Chocolate,180,3,540
2019-03-28,Death by Chocolate,180,1,180
2019-03-28,Dew Drop Sundae,150,4,600
2019-03-28,Cake Fudge,150,4,600
2019-03-28,Butterscotch Single Scoop,60,1,60
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Vanilla Single Scoop,50,2,100
2019-03-28,Vanilla Double Scoop,80,3,240
2019-03-28,Caramel Crunch Double Scoop,100,1,100
2019-03-28,Hot Chocolate Fudge,120,5,600
2019-03-28,Cake Fudge,150,3,450
2019-03-28,Cafe Caramel,160,2,320
2019-03-28,Vanilla Double Scoop,80,4,320
2019-03-28,Death by Chocolate,180,2,360
2019-03-28,Cake Fudge,150,5,750
2019-03-28,Vanilla Single Scoop,50,5,250
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Cake Fudge,150,1,150
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Vanilla Double Scoop,80,2,160
2019-03-28,Death by Chocolate,180,5,900
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Hot Chocolate Fudge,120,4,480
2019-03-28,Vanilla Double Scoop,80,5,400
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Vanilla Single Scoop,50,5,250
2019-03-28,Butterscotch Single Scoop,60,1,60
2019-03-28,Vanilla Double Scoop,80,5,400
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Almond Fudge,150,5,750
2019-03-28,Hot Chocolate Fudge,120,4,480
2019-03-28,Vanilla Single Scoop,50,2,100
2019-03-28,Vanilla Single Scoop,50,3,150
2019-03-28,Caramel Crunch Single Scoop,70,3,210
2019-03-28,Butterscotch Single Scoop,60,3,180
2019-03-28,Vanilla Single Scoop,50,4,200
2019-03-28,Vanilla Double Scoop,80,3,240
2019-03-28,Chocolate Europa Single Scoop,70,1,70
2019-03-28,Vanilla Single Scoop,50,1,50
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Vanilla Single Scoop,50,3,150
2019-03-28,Death by Chocolate,180,1,180
2019-03-28,Death by Chocolate,180,3,540
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Vanilla Double Scoop,80,5,400
2019-03-28,Butterscotch Single Scoop,60,5,300
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Death by Chocolate,180,4,720
2019-03-28,Death by Chocolate,180,2,360
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Dry Fruit Double Scoop,90,4,360
2019-03-28,Vanilla Single Scoop,50,5,250
2019-03-28,Vanilla Single Scoop,50,2,100
2019-03-28,Hot Chocolate Fudge,120,4,480
2019-03-28,Chocolate Europa Double Scoop,100,1,100
2019-03-28,Vanilla Single Scoop,50,4,200
2019-03-28,Hot Chocolate Fudge,120,4,480
2019-03-28,Butterscotch Single Scoop,60,2,120
2019-03-28,Cake Fudge,150,1,150
2019-03-28,Dry Fruit Single Scoop,60,5,300
2019-03-28,Caramel Crunch Single Scoop,70,3,210
2019-03-28,Butterscotch Single Scoop,60,5,300
2019-03-28,Death by Chocolate,180,5,900
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Death by Chocolate,180,2,360
2019-03-28,Cake Fudge,150,5,750
2019-03-28,Vanilla Double Scoop,80,4,320
2019-03-28,Vanilla Double Scoop,80,2,160
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Vanilla Single Scoop,50,4,200
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Vanilla Double Scoop,80,5,400
2019-03-28,Butterscotch Single Scoop,60,5,300
2019-03-28,Vanilla Single Scoop,50,1,50
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Butterscotch Single Scoop,60,3,180
2019-03-28,Fig and Honey Double Scoop,90,3,270
2019-03-28,Cafe Caramel,160,3,480
2019-03-28,Death by Chocolate,180,2,360
2019-03-28,Hot Chocolate Fudge,120,4,480
2019-03-28,Pista Single Scoop,60,2,120
2019-03-28,Death by Chocolate,180,3,540
2019-03-28,Death by Chocolate,180,1,180
2019-03-28,Vanilla Single Scoop,50,4,200
2019-03-28,Almond Fudge,150,5,750
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Rocky Road Single Scoop,50,4,200
2019-03-28,Hot Chocolate Fudge,120,4,480
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Hot Chocolate Fudge,120,4,480
2019-03-28,Cafe Caramel,160,5,800
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Almond Fudge,150,1,150
2019-03-28,Caramel Crunch Double Scoop,100,1,100
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Cake Fudge,150,1,150
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Almond Fudge,150,4,600
2019-03-28,Cake Fudge,150,5,750
2019-03-28,Chocolate Europa Double Scoop,100,5,500
2019-03-28,Butterscotch Single Scoop,60,3,180
2019-03-28,Vanilla Single Scoop,50,5,250
2019-03-28,Cafe Caramel,160,3,480
2019-03-28,Hot Chocolate Fudge,120,2,240
2019-03-28,Vanilla Single Scoop,50,3,150
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-28,Butterscotch Single Scoop,60,4,240
2019-03-28,Butterscotch Single Scoop,60,1,60
2019-03-28,Cafe Caramel,160,3,480
2019-03-28,Cake Fudge,150,2,300
2019-03-28,Hot Chocolate Fudge,120,3,360
2019-03-28,Vanilla Double Scoop,80,2,160
2019-03-28,Hot Chocolate Fudge,120,5,600
2019-03-28,Vanilla Double Scoop,80,3,240
2019-03-28,Vanilla Double Scoop,80,1,80
2019-03-28,Dry Fruit Single Scoop,60,2,120
2019-03-28,Butterscotch Single Scoop,60,2,120
2019-03-28,Butterscotch Single Scoop,60,4,240
2019-03-28,Hot Chocolate Fudge,120,1,120
2019-03-29,Vanilla Single Scoop,50,4,200
2019-03-29,Cafe Caramel,160,1,160
2019-03-29,Vanilla Single Scoop,50,4,200
2019-03-29,Almond Fudge,150,5,750
2019-03-29,Cake Fudge,150,3,450
2019-03-29,Vanilla Single Scoop,50,5,250
2019-03-29,Butterscotch Single Scoop,60,2,120
2019-03-29,Vanilla Single Scoop,50,3,150
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Cafe Caramel,160,3,480
2019-03-29,Cake Fudge,150,5,750
2019-03-29,Cafe Caramel,160,4,640
2019-03-29,Butterscotch Single Scoop,60,1,60
2019-03-29,Pista Double Scoop,90,5,450
2019-03-29,Death by Chocolate,180,2,360
2019-03-29,Butterscotch Single Scoop,60,2,120
2019-03-29,Dry Fruit Double Scoop,90,2,180
2019-03-29,Chocolate Europa Single Scoop,70,3,210
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Butterscotch Double Scoop,90,3,270
2019-03-29,Vanilla Double Scoop,80,3,240
2019-03-29,Death by Chocolate,180,5,900
2019-03-29,Cafe Caramel,160,5,800
2019-03-29,Hot Chocolate Fudge,120,5,600
2019-03-29,Vanilla Double Scoop,80,3,240
2019-03-29,Hot Chocolate Fudge,120,4,480
2019-03-29,Death by Chocolate,180,2,360
2019-03-29,Hot Chocolate Fudge,120,4,480
2019-03-29,Vanilla Single Scoop,50,3,150
2019-03-29,Butterscotch Single Scoop,60,1,60
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Vanilla Single Scoop,50,4,200
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Pista Single Scoop,60,4,240
2019-03-29,Butterscotch Single Scoop,60,4,240
2019-03-29,Vanilla Single Scoop,50,5,250
2019-03-29,Cafe Caramel,160,4,640
2019-03-29,Caramel Crunch Single Scoop,70,5,350
2019-03-29,Death by Chocolate,180,3,540
2019-03-29,Fig and Honey Single Scoop,60,1,60
2019-03-29,Vanilla Double Scoop,80,2,160
2019-03-29,Death by Chocolate,180,5,900
2019-03-29,Hot Chocolate Fudge,120,1,120
2019-03-29,Death by Chocolate,180,4,720
2019-03-29,Cake Fudge,150,3,450
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Cake Fudge,150,3,450
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Hot Chocolate Fudge,120,4,480
2019-03-29,Butterscotch Single Scoop,60,5,300
2019-03-29,Cake Fudge,150,2,300
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Hot Chocolate Fudge,120,4,480
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Cafe Caramel,160,2,320
2019-03-29,Death by Chocolate,180,1,180
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Cake Fudge,150,3,450
2019-03-29,Vanilla Single Scoop,50,5,250
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Pista Double Scoop,90,5,450
2019-03-29,Death by Chocolate,180,1,180
2019-03-29,Vanilla Single Scoop,50,5,250
2019-03-29,Cake Fudge,150,5,750
2019-03-29,Dew Drop Sundae,150,2,300
2019-03-29,Vanilla Double Scoop,80,2,160
2019-03-29,Butterscotch Single Scoop,60,4,240
2019-03-29,Vanilla Double Scoop,80,4,320
2019-03-29,Butterscotch Single Scoop,60,2,120
2019-03-29,Butterscotch Single Scoop,60,1,60
2019-03-29,Vanilla Single Scoop,50,3,150
2019-03-29,Caramel Crunch Single Scoop,70,5,350
2019-03-29,Fig and Honey Single Scoop,60,5,300
2019-03-29,Butterscotch Single Scoop,60,3,180
2019-03-29,Hot Chocolate Fudge,120,2,240
2019-03-29,Death by Chocolate,180,2,360
2019-03-29,Butterscotch Single Scoop,60,1,60
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Butterscotch Double Scoop,90,4,360
2019-03-29,Butterscotch Single Scoop,60,4,240
2019-03-29,Rocky Road Double Scoop,80,5,400
2019-03-29,Hot Chocolate Fudge,120,2,240
2019-03-29,Cake Fudge,150,3,450
2019-03-29,Butterscotch Double Scoop,90,2,180
2019-03-29,Cake Fudge,150,2,300
2019-03-29,Caramel Crunch Double Scoop,100,2,200
2019-03-29,Death by Chocolate,180,3,540
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Hot Chocolate Fudge,120,1,120
2019-03-29,Chocolate Europa Double Scoop,100,1,100
2019-03-29,Trilogy,160,3,480
2019-03-29,Vanilla Single Scoop,50,2,100
2019-03-29,Vanilla Single Scoop,50,1,50
2019-03-29,Death by Chocolate,180,3,540
2019-03-29,Cake Fudge,150,5,750
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Cake Fudge,150,5,750
2019-03-29,Death by Chocolate,180,1,180
2019-03-29,Vanilla Single Scoop,50,4,200
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Vanilla Single Scoop,50,4,200
2019-03-29,Butterscotch Single Scoop,60,5,300
2019-03-29,Death by Chocolate,180,2,360
2019-03-29,Fig and Honey Single Scoop,60,1,60
2019-03-29,Cake Fudge,150,4,600
2019-03-29,Butterscotch Single Scoop,60,5,300
2019-03-29,Cake Fudge,150,4,600
2019-03-29,Hot Chocolate Fudge,120,5,600
2019-03-29,Pista Single Scoop,60,2,120
2019-03-29,Fig and Honey Single Scoop,60,2,120
2019-03-29,Fig and Honey Double Scoop,90,1,90
2019-03-29,Death by Chocolate,180,3,540
2019-03-29,Vanilla Double Scoop,80,4,320
2019-03-29,Hot Chocolate Fudge,120,2,240
2019-03-29,Butterscotch Single Scoop,60,2,120
2019-03-29,Hot Chocolate Fudge,120,1,120
2019-03-29,Dry Fruit Single Scoop,60,5,300
2019-03-29,Vanilla Double Scoop,80,3,240
2019-03-29,Vanilla Single Scoop,50,3,150
2019-03-29,Hot Chocolate Fudge,120,1,120
2019-03-29,Caramel Crunch Double Scoop,100,3,300
2019-03-29,Vanilla Double Scoop,80,5,400
2019-03-29,Cafe Caramel,160,1,160
2019-03-29,Cafe Caramel,160,3,480
2019-03-29,Hot Chocolate Fudge,120,2,240
2019-03-29,Cake Fudge,150,4,600
2019-03-29,Chocolate Europa Single Scoop,70,1,70
2019-03-29,Cake Fudge,150,5,750
2019-03-29,Hot Chocolate Fudge,120,1,120
2019-03-29,Vanilla Double Scoop,80,5,400
2019-03-29,Hot Chocolate Fudge,120,5,600
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Cake Fudge,150,2,300
2019-03-29,Death by Chocolate,180,4,720
2019-03-29,Hot Chocolate Fudge,120,1,120
2019-03-29,Vanilla Double Scoop,80,3,240
2019-03-29,Vanilla Single Scoop,50,1,50
2019-03-29,Death by Chocolate,180,3,540
2019-03-29,Vanilla Single Scoop,50,2,100
2019-03-29,Hot Chocolate Fudge,120,5,600
2019-03-29,Caramel Crunch Single Scoop,70,3,210
2019-03-29,Vanilla Single Scoop,50,2,100
2019-03-29,Cake Fudge,150,3,450
2019-03-29,Cafe Caramel,160,2,320
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Death by Chocolate,180,1,180
2019-03-29,Cake Fudge,150,4,600
2019-03-29,Vanilla Single Scoop,50,3,150
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Rocky Road Single Scoop,50,5,250
2019-03-29,Death by Chocolate,180,4,720
2019-03-29,Cafe Caramel,160,4,640
2019-03-29,Cafe Caramel,160,5,800
2019-03-29,Cake Fudge,150,4,600
2019-03-29,Cake Fudge,150,2,300
2019-03-29,Vanilla Single Scoop,50,3,150
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Death by Chocolate,180,3,540
2019-03-29,Butterscotch Single Scoop,60,2,120
2019-03-29,Hot Chocolate Fudge,120,4,480
2019-03-29,Death by Chocolate,180,3,540
2019-03-29,Cake Fudge,150,2,300
2019-03-29,Vanilla Double Scoop,80,4,320
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Vanilla Single Scoop,50,2,100
2019-03-29,Vanilla Single Scoop,50,3,150
2019-03-29,Vanilla Double Scoop,80,3,240
2019-03-29,Butterscotch Single Scoop,60,5,300
2019-03-29,Vanilla Double Scoop,80,5,400
2019-03-29,Chocolate Europa Single Scoop,70,4,280
2019-03-29,Butterscotch Single Scoop,60,4,240
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Death by Chocolate,180,5,900
2019-03-29,Cake Fudge,150,2,300
2019-03-29,Butterscotch Double Scoop,90,3,270
2019-03-29,Vanilla Double Scoop,80,5,400
2019-03-29,Cake Fudge,150,2,300
2019-03-29,Vanilla Double Scoop,80,5,400
2019-03-29,Vanilla Single Scoop,50,5,250
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Cafe Caramel,160,1,160
2019-03-29,Dry Fruit Single Scoop,60,1,60
2019-03-29,Cake Fudge,150,5,750
2019-03-29,Hot Chocolate Fudge,120,1,120
2019-03-29,Death by Chocolate,180,1,180
2019-03-29,Vanilla Single Scoop,50,3,150
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Cake Fudge,150,2,300
2019-03-29,Death by Chocolate,180,3,540
2019-03-29,Rocky Road Double Scoop,80,3,240
2019-03-29,Vanilla Double Scoop,80,5,400
2019-03-29,Dry Fruit Double Scoop,90,1,90
2019-03-29,Vanilla Double Scoop,80,1,80
2019-03-29,Hot Chocolate Fudge,120,2,240
2019-03-29,Vanilla Double Scoop,80,2,160
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Vanilla Double Scoop,80,5,400
2019-03-29,Hot Chocolate Fudge,120,1,120
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Hot Chocolate Fudge,120,5,600
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Hot Chocolate Fudge,120,3,360
2019-03-29,Fig and Honey Double Scoop,90,4,360
2019-03-29,Cake Fudge,150,1,150
2019-03-29,Dry Fruit Single Scoop,60,1,60
2019-03-29,Death by Chocolate,180,2,360
2019-03-29,Banana Split,140,4,560
2019-03-29,Vanilla Single Scoop,50,5,250
2019-03-29,Butterscotch Single Scoop,60,5,300
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Cafe Caramel,160,5,800
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Almond Fudge,150,4,600
2019-03-30,Butterscotch Single Scoop,60,5,300
2019-03-30,Cafe Caramel,160,5,800
2019-03-30,Vanilla Double Scoop,80,2,160
2019-03-30,Butterscotch Double Scoop,90,2,180
2019-03-30,Vanilla Double Scoop,80,3,240
2019-03-30,Vanilla Single Scoop,50,2,100
2019-03-30,Hot Chocolate Fudge,120,3,360
2019-03-30,Dry Fruit Single Scoop,60,5,300
2019-03-30,Caramel Crunch Single Scoop,70,5,350
2019-03-30,Death by Chocolate,180,5,900
2019-03-30,Vanilla Double Scoop,80,2,160
2019-03-30,Hot Chocolate Fudge,120,2,240
2019-03-30,Vanilla Single Scoop,50,5,250
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Vanilla Double Scoop,80,2,160
2019-03-30,Cake Fudge,150,3,450
2019-03-30,Butterscotch Single Scoop,60,2,120
2019-03-30,Dry Fruit Single Scoop,60,5,300
2019-03-30,Chocolate Europa Double Scoop,100,5,500
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Vanilla Single Scoop,50,1,50
2019-03-30,Vanilla Single Scoop,50,5,250
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Death by Chocolate,180,4,720
2019-03-30,Vanilla Single Scoop,50,1,50
2019-03-30,Trilogy,160,5,800
2019-03-30,Death by Chocolate,180,1,180
2019-03-30,Death by Chocolate,180,2,360
2019-03-30,Cake Fudge,150,2,300
2019-03-30,Vanilla Double Scoop,80,5,400
2019-03-30,Butterscotch Single Scoop,60,4,240
2019-03-30,Death by Chocolate,180,4,720
2019-03-30,Rocky Road Double Scoop,80,3,240
2019-03-30,Hot Chocolate Fudge,120,2,240
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Death by Chocolate,180,3,540
2019-03-30,Vanilla Single Scoop,50,2,100
2019-03-30,Vanilla Double Scoop,80,4,320
2019-03-30,Butterscotch Single Scoop,60,4,240
2019-03-30,Cake Fudge,150,3,450
2019-03-30,Cake Fudge,150,4,600
2019-03-30,Butterscotch Single Scoop,60,5,300
2019-03-30,Vanilla Double Scoop,80,3,240
2019-03-30,Cake Fudge,150,1,150
2019-03-30,Pista Single Scoop,60,3,180
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Vanilla Single Scoop,50,4,200
2019-03-30,Cafe Caramel,160,5,800
2019-03-30,Butterscotch Single Scoop,60,5,300
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Butterscotch Single Scoop,60,2,120
2019-03-30,Hot Chocolate Fudge,120,2,240
2019-03-30,Death by Chocolate,180,3,540
2019-03-30,Dry Fruit Single Scoop,60,1,60
2019-03-30,Cafe Caramel,160,2,320
2019-03-30,Cafe Caramel,160,1,160
2019-03-30,Hot Chocolate Fudge,120,3,360
2019-03-30,Vanilla Double Scoop,80,3,240
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Cake Fudge,150,4,600
2019-03-30,Vanilla Single Scoop,50,3,150
2019-03-30,Cake Fudge,150,2,300
2019-03-30,Vanilla Double Scoop,80,4,320
2019-03-30,Cake Fudge,150,3,450
2019-03-30,Cake Fudge,150,3,450
2019-03-30,Cafe Caramel,160,5,800
2019-03-30,Vanilla Single Scoop,50,5,250
2019-03-30,Butterscotch Single Scoop,60,1,60
2019-03-30,Caramel Crunch Double Scoop,100,5,500
2019-03-30,Fig and Honey Double Scoop,90,2,180
2019-03-30,Vanilla Double Scoop,80,4,320
2019-03-30,Vanilla Double Scoop,80,5,400
2019-03-30,Cake Fudge,150,4,600
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Vanilla Double Scoop,80,5,400
2019-03-30,Cake Fudge,150,4,600
2019-03-30,Vanilla Single Scoop,50,5,250
2019-03-30,Pista Single Scoop,60,3,180
2019-03-30,Cafe Caramel,160,2,320
2019-03-30,Vanilla Single Scoop,50,5,250
2019-03-30,Vanilla Single Scoop,50,2,100
2019-03-30,Pista Single Scoop,60,4,240
2019-03-30,Hot Chocolate Fudge,120,2,240
2019-03-30,Cake Fudge,150,1,150
2019-03-30,Dry Fruit Double Scoop,90,1,90
2019-03-30,Vanilla Single Scoop,50,2,100
2019-03-30,Hot Chocolate Fudge,120,3,360
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Cake Fudge,150,4,600
2019-03-30,Death by Chocolate,180,3,540
2019-03-30,Death by Chocolate,180,2,360
2019-03-30,Death by Chocolate,180,4,720
2019-03-30,Vanilla Double Scoop,80,4,320
2019-03-30,Fig and Honey Double Scoop,90,3,270
2019-03-30,Vanilla Single Scoop,50,4,200
2019-03-30,Butterscotch Single Scoop,60,2,120
2019-03-30,Butterscotch Single Scoop,60,3,180
2019-03-30,Hot Chocolate Fudge,120,3,360
2019-03-30,Caramel Crunch Double Scoop,100,1,100
2019-03-30,Butterscotch Single Scoop,60,5,300
2019-03-30,Death by Chocolate,180,3,540
2019-03-30,Vanilla Double Scoop,80,1,80
2019-03-30,Cake Fudge,150,3,450
2019-03-30,Vanilla Single Scoop,50,2,100
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Death by Chocolate,180,3,540
2019-03-30,Vanilla Double Scoop,80,3,240
2019-03-30,Butterscotch Single Scoop,60,4,240
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Vanilla Double Scoop,80,3,240
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Dry Fruit Double Scoop,90,2,180
2019-03-30,Cake Fudge,150,1,150
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Cafe Caramel,160,2,320
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Trilogy,160,3,480
2019-03-30,Vanilla Single Scoop,50,4,200
2019-03-30,Rocky Road Single Scoop,50,1,50
2019-03-30,Death by Chocolate,180,1,180
2019-03-30,Cake Fudge,150,4,600
2019-03-30,Chocolate Europa Double Scoop,100,3,300
2019-03-30,Rocky Road Single Scoop,50,2,100
2019-03-30,Cake Fudge,150,2,300
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Vanilla Single Scoop,50,2,100
2019-03-30,Death by Chocolate,180,3,540
2019-03-30,Death by Chocolate,180,1,180
2019-03-30,Death by Chocolate,180,3,540
2019-03-30,Vanilla Double Scoop,80,1,80
2019-03-30,Banana Split,140,5,700
2019-03-30,Fig and Honey Double Scoop,90,2,180
2019-03-30,Death by Chocolate,180,1,180
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Butterscotch Double Scoop,90,2,180
2019-03-30,Death by Chocolate,180,4,720
2019-03-30,Pista Double Scoop,90,2,180
2019-03-30,Vanilla Double Scoop,80,4,320
2019-03-30,Cake Fudge,150,2,300
2019-03-30,Cake Fudge,150,1,150
2019-03-30,Caramel Crunch Single Scoop,70,2,140
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Vanilla Double Scoop,80,5,400
2019-03-30,Dry Fruit Double Scoop,90,1,90
2019-03-30,Vanilla Double Scoop,80,4,320
2019-03-30,Vanilla Double Scoop,80,5,400
2019-03-30,Hot Chocolate Fudge,120,3,360
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Chocolate Europa Single Scoop,70,3,210
2019-03-30,Dry Fruit Double Scoop,90,2,180
2019-03-30,Cake Fudge,150,1,150
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Vanilla Double Scoop,80,2,160
2019-03-30,Butterscotch Single Scoop,60,1,60
2019-03-30,Death by Chocolate,180,2,360
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Death by Chocolate,180,1,180
2019-03-30,Cake Fudge,150,4,600
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Butterscotch Single Scoop,60,2,120
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Vanilla Double Scoop,80,4,320
2019-03-30,Vanilla Single Scoop,50,5,250
2019-03-30,Death by Chocolate,180,4,720
2019-03-30,Cake Fudge,150,1,150
2019-03-30,Cafe Caramel,160,3,480
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Hot Chocolate Fudge,120,2,240
2019-03-30,Butterscotch Single Scoop,60,3,180
2019-03-30,Cafe Caramel,160,3,480
2019-03-30,Vanilla Single Scoop,50,2,100
2019-03-30,Butterscotch Single Scoop,60,5,300
2019-03-30,Caramel Crunch Double Scoop,100,4,400
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Cake Fudge,150,5,750
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Vanilla Double Scoop,80,5,400
2019-03-30,Dry Fruit Single Scoop,60,3,180
2019-03-30,Cake Fudge,150,1,150
2019-03-30,Hot Chocolate Fudge,120,5,600
2019-03-30,Hot Chocolate Fudge,120,3,360
2019-03-30,Vanilla Double Scoop,80,3,240
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Fig and Honey Single Scoop,60,4,240
2019-03-30,Hot Chocolate Fudge,120,4,480
2019-03-30,Butterscotch Single Scoop,60,2,120
2019-03-30,Cake Fudge,150,2,300
2019-03-30,Chocolate Europa Single Scoop,70,3,210
2019-03-30,Death by Chocolate,180,2,360
2019-03-30,Death by Chocolate,180,4,720
2019-03-30,Hot Chocolate Fudge,120,1,120
2019-03-30,Vanilla Single Scoop,50,1,50
2019-03-30,Butterscotch Single Scoop,60,3,180
2019-03-31,Pista Single Scoop,60,2,120
2019-03-31,Death by Chocolate,180,5,900
2019-03-31,Vanilla Double Scoop,80,3,240
2019-03-31,Fig and Honey Double Scoop,90,4,360
2019-03-31,Hot Chocolate Fudge,120,3,360
2019-03-31,Rocky Road Single Scoop,50,1,50
2019-03-31,Hot Chocolate Fudge,120,4,480
2019-03-31,Cake Fudge,150,5,750
2019-03-31,Cake Fudge,150,1,150
2019-03-31,Death by Chocolate,180,2,360
2019-03-31,Hot Chocolate Fudge,120,1,120
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Hot Chocolate Fudge,120,3,360
2019-03-31,Vanilla Single Scoop,50,5,250
2019-03-31,Chocolate Europa Single Scoop,70,5,350
2019-03-31,Hot Chocolate Fudge,120,4,480
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Vanilla Single Scoop,50,3,150
2019-03-31,Hot Chocolate Fudge,120,3,360
2019-03-31,Vanilla Single Scoop,50,1,50
2019-03-31,Butterscotch Single Scoop,60,2,120
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Death by Chocolate,180,1,180
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Cafe Caramel,160,1,160
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Hot Chocolate Fudge,120,2,240
2019-03-31,Butterscotch Single Scoop,60,1,60
2019-03-31,Dry Fruit Single Scoop,60,3,180
2019-03-31,Butterscotch Single Scoop,60,5,300
2019-03-31,Death by Chocolate,180,4,720
2019-03-31,Vanilla Single Scoop,50,4,200
2019-03-31,Hot Chocolate Fudge,120,2,240
2019-03-31,Rocky Road Single Scoop,50,4,200
2019-03-31,Vanilla Single Scoop,50,5,250
2019-03-31,Dry Fruit Single Scoop,60,2,120
2019-03-31,Caramel Crunch Double Scoop,100,3,300
2019-03-31,Hot Chocolate Fudge,120,4,480
2019-03-31,Vanilla Double Scoop,80,2,160
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Vanilla Double Scoop,80,4,320
2019-03-31,Vanilla Double Scoop,80,5,400
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Hot Chocolate Fudge,120,3,360
2019-03-31,Cake Fudge,150,3,450
2019-03-31,Vanilla Double Scoop,80,4,320
2019-03-31,Death by Chocolate,180,5,900
2019-03-31,Vanilla Double Scoop,80,3,240
2019-03-31,Cafe Caramel,160,5,800
2019-03-31,Hot Chocolate Fudge,120,2,240
2019-03-31,Vanilla Single Scoop,50,1,50
2019-03-31,Cake Fudge,150,3,450
2019-03-31,Vanilla Single Scoop,50,3,150
2019-03-31,Hot Chocolate Fudge,120,3,360
2019-03-31,Cafe Caramel,160,3,480
2019-03-31,Vanilla Double Scoop,80,2,160
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Hot Chocolate Fudge,120,4,480
2019-03-31,Hot Chocolate Fudge,120,1,120
2019-03-31,Cake Fudge,150,5,750
2019-03-31,Butterscotch Single Scoop,60,5,300
2019-03-31,Vanilla Single Scoop,50,4,200
2019-03-31,Butterscotch Single Scoop,60,5,300
2019-03-31,Dry Fruit Double Scoop,90,1,90
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Vanilla Double Scoop,80,2,160
2019-03-31,Cafe Caramel,160,4,640
2019-03-31,Death by Chocolate,180,5,900
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Cake Fudge,150,1,150
2019-03-31,Butterscotch Single Scoop,60,3,180
2019-03-31,Death by Chocolate,180,1,180
2019-03-31,Rocky Road Double Scoop,80,4,320
2019-03-31,Hot Chocolate Fudge,120,2,240
2019-03-31,Hot Chocolate Fudge,120,3,360
2019-03-31,Vanilla Single Scoop,50,4,200
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Vanilla Double Scoop,80,4,320
2019-03-31,Dew Drop Sundae,150,1,150
2019-03-31,Vanilla Single Scoop,50,1,50
2019-03-31,Almond Fudge,150,2,300
2019-03-31,Vanilla Double Scoop,80,1,80
2019-03-31,Pista Double Scoop,90,3,270
2019-03-31,Cake Fudge,150,3,450
2019-03-31,Vanilla Single Scoop,50,2,100
2019-03-31,Death by Chocolate,180,1,180
2019-03-31,Banana Split,140,5,700
2019-03-31,Cake Fudge,150,4,600
2019-03-31,Dry Fruit Double Scoop,90,4,360
2019-03-31,Vanilla Double Scoop,80,3,240
2019-03-31,Vanilla Double Scoop,80,5,400
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Cake Fudge,150,1,150
2019-03-31,Butterscotch Single Scoop,60,1,60
2019-03-31,Hot Chocolate Fudge,120,3,360
2019-03-31,Cake Fudge,150,1,150
2019-03-31,Cafe Caramel,160,2,320
2019-03-31,Death by Chocolate,180,1,180
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Vanilla Single Scoop,50,2,100
2019-03-31,Hot Chocolate Fudge,120,4,480
2019-03-31,Banana Split,140,3,420
2019-03-31,Butterscotch Single Scoop,60,1,60
2019-03-31,Vanilla Double Scoop,80,1,80
2019-03-31,Vanilla Double Scoop,80,5,400
2019-03-31,Chocolate Europa Single Scoop,70,4,280
2019-03-31,Hot Chocolate Fudge,120,3,360
2019-03-31,Vanilla Double Scoop,80,1,80
2019-03-31,Vanilla Double Scoop,80,2,160
2019-03-31,Vanilla Single Scoop,50,5,250
2019-03-31,Death by Chocolate,180,4,720
2019-03-31,Death by Chocolate,180,2,360
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Chocolate Europa Single Scoop,70,1,70
2019-03-31,Cake Fudge,150,1,150
2019-03-31,Vanilla Single Scoop,50,3,150
2019-03-31,Vanilla Single Scoop,50,2,100
2019-03-31,Vanilla Double Scoop,80,1,80
2019-03-31,Butterscotch Single Scoop,60,3,180
2019-03-31,Caramel Crunch Single Scoop,70,1,70
2019-03-31,Cafe Caramel,160,2,320
2019-03-31,Butterscotch Single Scoop,60,5,300
2019-03-31,Hot Chocolate Fudge,120,1,120
2019-03-31,Vanilla Double Scoop,80,4,320
2019-03-31,Rocky Road Single Scoop,50,1,50
2019-03-31,Vanilla Double Scoop,80,1,80
2019-03-31,Cake Fudge,150,4,600
2019-03-31,Cake Fudge,150,5,750
2019-03-31,Hot Chocolate Fudge,120,4,480
2019-03-31,Cake Fudge,150,5,750
2019-03-31,Vanilla Double Scoop,80,1,80
2019-03-31,Cake Fudge,150,5,750
2019-03-31,Cake Fudge,150,3,450
2019-03-31,Vanilla Single Scoop,50,3,150
2019-03-31,Hot Chocolate Fudge,120,2,240
2019-03-31,Cake Fudge,150,5,750
2019-03-31,Death by Chocolate,180,4,720
2019-03-31,Death by Chocolate,180,5,900
2019-03-31,Hot Chocolate Fudge,120,4,480
2019-03-31,Vanilla Double Scoop,80,5,400
2019-03-31,Vanilla Double Scoop,80,3,240
2019-03-31,Vanilla Double Scoop,80,3,240
2019-03-31,Cake Fudge,150,2,300
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Cake Fudge,150,1,150
2019-03-31,Vanilla Double Scoop,80,1,80
2019-03-31,Butterscotch Single Scoop,60,1,60
2019-03-31,Vanilla Double Scoop,80,1,80
2019-03-31,Vanilla Double Scoop,80,4,320
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Hot Chocolate Fudge,120,5,600
2019-03-31,Butterscotch Single Scoop,60,2,120`;

module.exports = salesData;