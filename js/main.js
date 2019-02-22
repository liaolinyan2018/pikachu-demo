!function(){
    function writeCode(prefix,code,fn){
        let codeDom = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0;
        let id=setInterval(()=>{
            n+=1;
            codeDom.innerHTML = code.substring(0,n)
            codeDom.scrollTop = codeDom.scrollHeight //自动滚到最大高度
            styleTag.innerHTML = code.substring(0,n)
            if(n >= code.length){
                window.clearInterval(id)
                fn.call()
            }            
        },10)
    }
    let code = `/*首先准备皮卡丘的皮*/
    .preview_wrapper{
        flex: 1;
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pikachu{
        width: 315px;
        height: 176.25px;
        position: relative;
    }

    /*先画皮卡丘的鼻子*/

    .nose{
        border-top: 6.75px solid black;
        border-left: 8.25px solid transparent;
        border-right: 8.25px solid transparent;
        width: 0px;
        height: 0px;
        position: absolute;
        left: 50%;
        margin-left: -8.25px;
        margin-top: 28.5px;
    }
    .nose::before{
        content: '';
        width: 16.5px;
        height: 3.75px;
        background: black;
        border-top-left-radius: 8.25px 3.75px;
        border-top-right-radius: 8.25px 3.75px;
        position: absolute;
        left: -9px;
        top: -10.5px;
    }

    /*接下来画皮卡丘的两只眼睛*/

    .eye{
        width: 42.75px;
        height: 42.75px;
        border: 2.25px solid black;
        border-radius: 100%;
        background: #2e2e2e;
        position: absolute;
    }
    /*左眼放左边*/
    .eye.left{
        left: 45px;
    }
    /*右眼放右边*/
    .eye.right{
        right: 45px;
    }
    .eye::after{
        content: '';
        width: 23.25px;
        height: 23.25px;
        background: #fff;
        border: 2.25px solid black;
        border-radius: 100%;
        position: absolute;
        margin-left: 5.25px;
        margin-top: -1.5px;
    }

    /*画皮卡丘可爱的脸颊*/

    .face{
        width: 66px;
        height: 66px;
        border: 2px solid black;
        border-radius: 50%;
        background: #f00;
        position: absolute;
        top: 82.5px;
    }
    /*左脸颊*/
    .face.left{
        left: 0px;
    }
    /*右脸颊*/
    .face.right{
        right:0px;
    }

    /*最后画皮卡丘的嘴*/

    .mouse{
        width: 171px;
        height: 135px;
        overflow: hidden;
        position: absolute;
        left: 69px;
        bottom: 0px;
    }
    .mouse::before{
        content: '';
        width: 60px;
        height: 18.75px;
        background: #FFE600;
        border-bottom:3px solid black;
        border-left: 3px solid black;
        border-bottom-left-radius: 45px 22.5px;/*厉害了*/
        transform: rotate(-25deg);
        position: absolute;
        left: 27px;
    }
    .mouse::after{
        content: '';
        width: 60px;
        height: 18.75px;
        background: #ffe600;
        border-bottom:3px solid black;
        border-right: 3px solid black;
        border-bottom-right-radius: 45px 22.5px;/*厉害了*/
        transform: rotate(25deg);
        position: absolute;
        right: 25px;   
    }
    .shelter{
        position: absolute;
        width: 20px;
        height: 10px;
        background: #FFE600;
    }
    .shelter.left{
        left: 35px;
    }
    .shelter.right{
        right: 34px;
    }   
    /*加上可爱的舌头*/
    .lowerLip{
        overflow: hidden;
        position: absolute;
        bottom: 0px;
        left: 36.75px;
        width: 100px;
        height: 400px;
        border: 2px solid black;
        border-radius: 50%;
        background: #9B000A;
        z-index: -1;
    }
    .lowerLip::after{
        content: '';
        width: 100px;
        height: 128px;
        background: #ff485f;
        border-radius: 50%;
        /*z-index: -2;*/
        position: absolute;
        bottom: -15px;
    }
    
    /*好啦，这只可爱的皮卡丘送给你哟~~*/
    `
    writeCode('',code,()=>{console.log('皮卡丘画好啦!')})
}.call()