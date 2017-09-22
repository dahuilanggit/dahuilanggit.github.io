
window.onload=function(){ 


    /**
     *打印js对象详细信息
     */
    function alertObj(obj)
    {
        var description = "";
        for ( var i in obj)
        {
            var property = obj[i];
            description += i + " = " + property + "\n";
        }
        alert(description);
    }

    /**
     *通过class名和标签名获取css样式对象组
     */
    function getClassNames(classStr, tagName)
    {
        if (document.getElementsByClassName)
        {
            return document.getElementsByClassName(classStr)
        } else
        {
            //为了兼容ie8及其以下版本的方法
            var nodes = document.getElementsByTagName(tagName), ret = [];
            for (i = 0; i < nodes.length; i++)
            {
                if (hasClass(nodes[i], classStr))
                {
                    ret.push(nodes[i])
                }
            }
            return ret;
        }
    }

    /**
     *判断节点class存在性
     */
    function hasClass(tagStr, classStr)
    {
        //这个正则表达式是因为class可以有多个,判断是否包含 
        var arr = tagStr.className.split(/\s+/);
        for ( var i = 0; i < arr.length; i++)
        {
            if (arr[i] == classStr)
            {
                return true;
            }
        }
        return false;
    }

	
	//获取当前时间，格式YYYY-MM-DD
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
	
        //由于加载顺序,获取对象的代码应写在对象已加载之后
        var divs = getClassNames('ds-time', 'span');
        if (null != divs)
        {
            
            //遍历对象,改其css样式
            for ( var i = 0; i < divs.length; i++)
            {
                divs[i].innerHTML = getNowFormatDate();
            }
        }
		 }