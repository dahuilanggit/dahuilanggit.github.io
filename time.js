
window.onload=function(){ 


    /**
     *��ӡjs������ϸ��Ϣ
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
     *ͨ��class���ͱ�ǩ����ȡcss��ʽ������
     */
    function getClassNames(classStr, tagName)
    {
        if (document.getElementsByClassName)
        {
            return document.getElementsByClassName(classStr)
        } else
        {
            //Ϊ�˼���ie8�������°汾�ķ���
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
     *�жϽڵ�class������
     */
    function hasClass(tagStr, classStr)
    {
        //���������ʽ����Ϊclass�����ж��,�ж��Ƿ���� 
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

	
	//��ȡ��ǰʱ�䣬��ʽYYYY-MM-DD
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
	
        //���ڼ���˳��,��ȡ����Ĵ���Ӧд�ڶ����Ѽ���֮��
        var divs = getClassNames('ds-time', 'span');
        if (null != divs)
        {
            
            //��������,����css��ʽ
            for ( var i = 0; i < divs.length; i++)
            {
                divs[i].innerHTML = getNowFormatDate();
            }
        }
		 }