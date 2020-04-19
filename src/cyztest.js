// //ES3,ES5中 函数的写法
// {
//     var factory = function () {
//         this.a = "a";
//         this.b = {
//             a: "a+",
//             c: function () {
//                 return this.a;
//             }
//         }
//     }
//     console.log(new factory().b.c())
// }

// //Es6中的写法
// {
//     var factory = function () {
//         this.a = "a";
//         this.b = {
//             a: "a+",
//             c: () => {
//                 return this.a;
//             }
//         }
//     }
//     console.log(new factory().b.c())
// }
// //== 和 ====
// {
//     console.log(1 === "1")
// }


// //ES6中必填参数的判断和处理
// {
//     function check(x) {
//         if (x === undefined) {
//             throw new Error("参数必填");
//         }
//     }
//     function f(x = check(x), y = 1) {
//         return x + y;
//     }
//     try {
//         console.log(f());
//     } catch (e) {
//         console.log(e)
//     }
// }

// //ES3,ES5中 可变参数的处理
// {
//     function func() {
//         var a = Array.prototype.slice.call(arguments);
//         var sum = 0;
//         a.forEach(function (item) {
//             sum += item;
//         })
//         return sum;
//     }
//     console.log(func(1, 2, 3))
// }
// //ES6 中可变参数
// {
//     function func(...a) {
//         var sum = 0;
//         a.forEach(item => { sum += item });
//         return sum;
//     }
//     console.log(func(1, 2, 3))
// }

// //ES5中 数组合并
// {
//     var arr1 = [1, 2];
//     var arr2 = [3, 4];
//     console.log(arr1.concat(arr2));
// }
// //ES6 中数组合并
// {
//     let arr1 = [1, 2];
//     let arr2 = [...arr1, 3, 4];
//     console.log(arr2)

// }


// //ES3 数据保护
// {
//     var Person = function () {
//         var arr = {
//             name: "zhangsan",
//             age: 15,
//             sex: "male"
//         };
//         this.get = function (key) {
//             return arr[key];
//         }
//         this.set = function (key, value) {
//             if (key != "sex") {
//                 arr[key] = value;
//             }
//         }
//     }
//     var person = new Person();
//     person.set("sex", "femal");
//     console.table(
//         { "name": person.get("name"), "age": person.get("age"), "sex": person.get("sex") }
//     );
// }
// //ES5
// {
//     var Person = {
//         name:"zhangsan",
//         age:15
//     }
//     Object.defineProperty(Person,"sex",{
//         value:"male",
//         writable:false
//     })
//     try{
//         Person.name = "new name";
//         console.table(
//             { "name": Person.name, "age": Person.age, "sex": Person.sex }
//         );
//     }catch(e){

//     }
    
// }
//ES6 数据保护
{
    //使用代理
    // let Person = {
    //     name:"张三",
    //     age:14,
    //     sex:"male"
    // };
    
    // let person = new Proxy( Person,{
    //     get(target,key){
    //         return target[key];
    //     },
    //     set(target,key,value){
    //         if( key !== "sex" ){
    //             target[key] = value;
    //         }
    //     }
    // } );
    let Person = {
        name: 'es6',
        sex: 'male',
        age: 15
      };
    let person = new Proxy(Person, {
        get(target, key) {
          return target[key]
        },
        set(target,key,value){
          if(key!=='sex'){
            target[key]=value;
          }
          
          return true;
        }
      });
    person.name = "sss";
    console.table(
        {name:person.name,age:person.age,sex:person.sex}
    );
      alert("ddde")
}