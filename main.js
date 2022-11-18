//次へボタンを押したら画面切り替え



//----------ローカルストレージへ保存----------

const allData = [];

// 値の取得
$("#end_btn").on("click", function () {
    // 属性
    const GetDataGender = $('input:radio[name="gender"]:checked').val();
    const GetDataAge = $('input:radio[name="age"]:checked').val();
    const GetDataAffiliation = $('input:radio[name="affiliation"]:checked').val();
    const GetDataOccupation = $('input:radio[name="occupation"]:checked').val();
    const GetDataLength = $('input:radio[name="length"]:checked').val();
    // 設問 → 文字列を数値に変換
    const GetDataQ1 = Number($('input:radio[name="q1"]:checked').val());
    const GetDataQ2 = Number($('input:radio[name="q2"]:checked').val());
    const GetDataQ3 = Number($('input:radio[name="q3"]:checked').val());
    const GetDataQ4 = Number($('input:radio[name="q4"]:checked').val());
    const GetDataQ5 = Number($('input:radio[name="q5"]:checked').val());
    const GetDataQ6 = Number($('input:radio[name="q6"]:checked').val());
    const GetDataQ7 = Number($('input:radio[name="q7"]:checked').val());
    // 配列
    const GetData = {
        GetDataGender: GetDataGender,
        GetDataAge: GetDataAge,
        GetDataAffiliation: GetDataAffiliation,
        GetDataOccupation: GetDataOccupation,
        GetDataLength: GetDataLength,
        GetDataQ1: GetDataQ1,
        GetDataQ2: GetDataQ2,
        GetDataQ3: GetDataQ3,
        GetDataQ4: GetDataQ4,
        GetDataQ5: GetDataQ5,
        GetDataQ6: GetDataQ6,
        GetDataQ7: GetDataQ7,
    };

    allData.push(GetData);
    console.log(GetData);

    // ローカルストレージへ保存
    const jsonGetData = JSON.stringify(allData);
    localStorage.setItem("allData", jsonGetData);
});


//----------ローカルストレージから情報を受け取る----------
if (localStorage.getItem("allData")) {
    const jsonGetData = localStorage.getItem("allData");
    const GetData = JSON.parse(jsonGetData);
    console.log(GetData);

    // Q1
    const dataQ1Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ1 = elm.GetDataQ1; //GetDataの中のQ1の値を取得
        dataQ1Arr.push(answerQ1);
    });
    console.log(dataQ1Arr);
    // 平均点を取得
    let sumQ1 = dataQ1Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ1 = sumQ1 / dataQ1Arr.length //平均点の算出
    console.log(averageQ1);
    // 結果画面への表示
    document.getElementById("GetDataQ1").innerHTML = averageQ1;

    // Q2
    const dataQ2Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ2 = elm.GetDataQ2; //GetDataの中のQ1の値を取得
        dataQ2Arr.push(answerQ2);
    });
    console.log(dataQ2Arr);
    // 平均点を取得
    let sumQ2 = dataQ2Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ2 = sumQ2 / dataQ2Arr.length //平均点の算出
    console.log(averageQ2);
    // 結果画面への表示
    document.getElementById("GetDataQ2").innerHTML = averageQ2;

    // Q3
    const dataQ3Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ3 = elm.GetDataQ3; //GetDataの中のQ1の値を取得
        dataQ3Arr.push(answerQ3);
    });
    console.log(dataQ3Arr);
    // 平均点を取得
    let sumQ3 = dataQ3Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ3 = sumQ3 / dataQ3Arr.length //平均点の算出
    console.log(averageQ3);
    // 結果画面への表示
    document.getElementById("GetDataQ3").innerHTML = averageQ3;

    // Q4
    const dataQ4Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ4 = elm.GetDataQ4; //GetDataの中のQ1の値を取得
        dataQ4Arr.push(answerQ4);
    });
    console.log(dataQ4Arr);
    // 平均点を取得
    let sumQ4 = dataQ4Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ4 = sumQ4 / dataQ4Arr.length //平均点の算出
    console.log(averageQ4);
    // 結果画面への表示
    document.getElementById("GetDataQ4").innerHTML = averageQ4;

    // Q5
    const dataQ5Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ5 = elm.GetDataQ5; //GetDataの中のQ1の値を取得
        dataQ5Arr.push(answerQ5);
    });
    console.log(dataQ5Arr);
    // 平均点を取得
    let sumQ5 = dataQ5Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ5 = sumQ5 / dataQ5Arr.length //平均点の算出
    console.log(averageQ5);
    // 結果画面への表示
    document.getElementById("GetDataQ5").innerHTML = averageQ5;

    // Q6
    const dataQ6Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ6 = elm.GetDataQ6; //GetDataの中のQ1の値を取得
        dataQ6Arr.push(answerQ6);
    });
    console.log(dataQ6Arr);
    // 平均点を取得
    let sumQ6 = dataQ6Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ6 = sumQ6 / dataQ6Arr.length //平均点の算出
    console.log(averageQ6);
    // 結果画面への表示
    document.getElementById("GetDataQ6").innerHTML = averageQ6;

    // Q7
    const dataQ7Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ7 = elm.GetDataQ7; //GetDataの中のQ1の値を取得
        dataQ7Arr.push(answerQ7);
    });
    console.log(dataQ7Arr);
    // 平均点を取得
    let sumQ7 = dataQ7Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ7 = sumQ7 / dataQ7Arr.length //平均点の算出
    console.log(averageQ7);
    // 結果画面への表示
    document.getElementById("GetDataQ7").innerHTML = averageQ7;
}
