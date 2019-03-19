!function(){
    var duration = 20
    var code = `/*我要开始画皮卡丘咯~*/
/*首先准备皮卡丘的皮*/

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
    var id;
    
    /* 1.将画皮卡丘的主要代码分别写入pre标签和style标签 */
    writeCode('',code,()=>{})

    /* 2.按键动作 */
    $('#actions').on('click','button',function(e){
        let $button = $(e.currentTarget) //这才是jQuery对象,e.currentTarget是dom对象
        console.log($button)
        let option = $button.attr('data') //slow fast 
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(option){
            case 'slow': 
                duration=60
                break
            case 'normal': 
                duration=25
                break
            case 'fast': 
                duration=8
                break
            case 'replay':
                clearTimeout(id)
                writeCode('',code,()=>{})
                break
            case 'review':
                clearTimeout(id)
                $('#styleTag').text(code)
                break
        }
        
    })

    function writeCode(prefix,code,fn){
        let n = 0;
        id = setTimeout(function run(){
            n+=1;
            $('#code').text(code.substring(0,n))
            $('#code').scrollTop($('#code').prop("scrollHeight"))
            $('#styleTag').text(code.substring(0,n))
            if(n < code.length){
                id = setTimeout(run,duration) //id总是为最新setTimeout值
                fn.call()
            }            
        },duration)
    }
}.call()