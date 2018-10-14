const formDateTime = date => {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    // var h = date.getHours();
    // h = h < 10 ? "0" + h : h;
    // var minute = date.getMinutes();
    // minute = minute < 10 ? "0" + minute : minute;
    // var second = date.getSeconds();
    // second = second < 10 ? "0" + second : second;
    // return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    return y + "-" + m + "-" + d;
};
export default (dateStr, separator) => {
    if (!separator) {
        separator = "-";
    }
    console.log(dateStr, "dateStr");
    var dateArr = dateStr.split(separator);
    var year = parseInt(dateArr[0]);
    var month;
    //处理月份为04这样的情况
    if (dateArr[1].indexOf("0") == 0) {
        month = parseInt(dateArr[1].substring(1));
    } else {
        month = parseInt(dateArr[1]);
    }
    var day = parseInt(dateArr[2]);
    var date = new Date(year, month - 1, day);
    return formDateTime(date);
};

export const formDateByString = (dateStr, separator) => {
    if (!separator) {
        separator = "-";
    }
    console.log(dateStr, "dateStr");
    var dateArr = dateStr.split(separator);
    var year = parseInt(dateArr[0]);
    var month;
    //处理月份为04这样的情况
    if (dateArr[1].indexOf("0") == 0) {
        month = parseInt(dateArr[1].substring(1));
    } else {
        month = parseInt(dateArr[1]);
    }
    var day = parseInt(dateArr[2]);
    var date = new Date(year, month - 1, day);
    return date;
};
