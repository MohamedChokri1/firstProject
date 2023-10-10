function createIdRoom(){
    var counter=0
    return function(){
        counter++
        return counter
    }
    }
    var id=createIdRoom()
  
    
    function createroom(size,price,luxury,type,images){
       return {
        size:size,
        price:price,
        luxury:luxury,
        type:type,
        id:id(),
        images:images
        
    }
    }
    room1=createroom( '120m²',300,'Open view To sea','S1',['https://cf.bstatic.com/xdata/images/hotel/max1280x900/262837952.jpg?k=17246bbef97f6e738e02e458c6af368d1aedf1ff498f4d684800c9941b7a90df&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/340798615.jpg?k=909370a8a8ab9b2cb8fd79bf915dd805e5b1ff21e461b8c936b9dd32de1a71d5&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/340796777.jpg?k=a50fd10425574e4228962f9af0069bfe4b61cf4a37e6c11b399b0123903b7ef0&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/466551191.jpg?k=e4a94af1eeac022419094388785e916c599c5688abe0a9a8268e7c4e2d41e685&o=&hp=1'])
    room2=createroom ('200m²',700,'Terrace','S2',['https://cf.bstatic.com/xdata/images/hotel/max1280x900/495019281.jpg?k=5018af7120171655010f3339806492522039e621d8128e9d558763611313454f&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/478237965.jpg?k=920331e0a8557a68ba6954fed052fa4f8476e4f748ec768fe2fc365ccc04ff2c&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/478265327.jpg?k=8548a60da6e2522a7ea0aac1581a115a5b322209464282158ca267ccb2028f33&o=&hp=1'])
    room3=createroom('250m²', 900,'none','S3',['https://cf.bstatic.com/xdata/images/hotel/max1280x900/474770904.jpg?k=b4ef59fd872562a7281fb0e91861f4b8b736b632aad3b4aee9e284726e266e49&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/474770965.jpg?k=bb388db14c1690279a131278a5d4e30560faf4e60661269147e6157febe24629&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/474770968.jpg?k=bf67f954d404d62bf4ec6dbba340c9fd9cf86aafd8a1b0e4048cc08291f1cee8&o=&hp=1'])
    room4=createroom('150m²', 250,'none','S1+',['https://cf.bstatic.com/xdata/images/hotel/max1280x900/461957063.jpg?k=277053a980d82c69b0d0f7c76caf1f494e68cf3b7151f2fdb2e60206ddd74c1b&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/461957080.jpg?k=0d05bebec3719332e437ad6b5886c34f4ed9f2460139094945f38eab511e6ff1&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/461957084.jpg?k=12d65d1a3eb082e260c5f3be86658c141fa6d93ba9317d168c70a31480089f66&o=&hp=1'])
    
    console.log(room2.images[0])
    console.log(room1.id)

function Agency(name){
    var obj={}
    obj.name=name
    obj.addroom=addroom
    obj.list=[]
    obj.numberOfrooms=numberOfrooms
    obj.removee=removee
    obj.display=display

    return obj
}

function addroom(room){
 this.list.push(room)
 return 'your target has been added'
}
function numberOfrooms(){
    return 'you have '+this.list.length+'rooms'
}
function removee(targetId){
    var result=this.list.length
    for(var i=0;i<this.list.length;i++){
        if(targetId===this.list[i].id){
        this.list.splice(i,1)
        }

    }
    if(result===this.list.length){
        return 'theres no room with this id'
    }
    return 'the room with the id : '+targetId +' has been removed'
}
function display(targetId){
    var result
    for(var i=0;i<this.list.length;i++){
        if(targetId===this.list[i].id){
         this.list[i]=result
        }

    }
    if(result===undefined){return 'theres no room with this id'}
    return result
}

var Agency1=Agency('The clueless guy ;-;')
Agency1.addroom(room1)
Agency1.addroom(room2)
Agency1.addroom(room3)
Agency1.addroom(room4)
console.log(Agency1.list)

//$('body').append(`<p><img src=${room2.images[0]} /></p>`)


function each(obj,func){
    for (key in obj){
        func(key,obj[key])
    }
}
var counter=0
var i=-1
$('#bt2').click(function(){
    counter=0
i++

    if(i===Agency1.list.length){i=0}
    $('#room').empty()
    displayy(Agency1.list[i])
})

$('#bt1').click(function(){
    counter++
    if (counter===Agency1.list[i].images.length){counter=0}
    
    console.log(counter)

    $('#room').empty()
    displayy(Agency1.list[i])
})
console.log(Agency1.list[i])



function displayy(roomy){
    
   
    var room=roomy

   

  each(room,function(key,val){
if (key!=='images'){
    $('#room').append(` <tr><td>${key}</td> <td>${val}</td></tr>`)}
else { $('#room').append(` <tr><td>${key}</td> <td><img id="imgur" width="300" hieght="300" src=${val[counter]}></td></tr>`)}})


}




 










    
