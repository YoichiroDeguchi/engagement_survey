//次へボタンを押したら画面切り替え



//----------ローカルストレージへ保存----------

const allData = [];
// 属性の値取得
$("#end_btn").on("click", function () {
    const GetDataGender = $('input:radio[name="gender"]:checked').val();
    const GetDataAge = $('input:radio[name="age"]:checked').val();
    const GetDataAffiliation = $('input:radio[name="affiliation"]:checked').val();
    const GetDataOccupation = $('input:radio[name="occupation"]:checked').val();
    const GetDataLength = $('input:radio[name="length"]:checked').val();
    // 設問の値取得
    const GetDataQ1 = $('input:radio[name="q1"]:checked').val();
    const GetDataQ2 = $('input:radio[name="q2"]:checked').val();
    const GetDataQ3 = $('input:radio[name="q3"]:checked').val();
    const GetDataQ4 = $('input:radio[name="q4"]:checked').val();
    const GetDataQ5 = $('input:radio[name="q5"]:checked').val();
    const GetDataQ6 = $('input:radio[name="q6"]:checked').val();
    const GetDataQ7 = $('input:radio[name="q7"]:checked').val();
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
    localStorage.setItem("mainData", jsonGetData);
});


//----------ローカルストレージから情報を受け取る----------
if (localStorage.getItem("mainData")) {
    const jsonGetData = localStorage.getItem("mainData");
    const GetData = JSON.parse(jsonGetData);
    console.log(GetData);

    // Q1
    const dataQ1Arr = [];
    GetData.forEach(elm => {
        console.log(elm);
        const answerQ1 = elm.GetDataQ1;
        dataQ1Arr.push(answerQ1);
    });
    console.log(dataQ1Arr);

    // Q1の平均点を取得
    const q1Total = dataQ1Arr.reduce(function (sum, element) {
        return sum + element;
    }, 0);
    const q1Average = q1Total / dataQ1Arr.length
    console.log(q1Average);

    // Q2

    // Q3

    // Q4

    // Q5

    // Q6

    // Q7



    // 結果画面への表示
    // document.getElementById("GetDataQ1").innerHTML = GetData.GetDataQ1;
    // document.getElementById("GetDataQ2").innerHTML = GetData.GetDataQ2;
    // document.getElementById("GetDataQ3").innerHTML = GetData.GetDataQ3;
    // document.getElementById("GetDataQ4").innerHTML = GetData.GetDataQ4;
    // document.getElementById("GetDataQ5").innerHTML = GetData.GetDataQ5;
    // document.getElementById("GetDataQ6").innerHTML = GetData.GetDataQ6;
    // document.getElementById("GetDataQ7").innerHTML = GetData.GetDataQ7;
}








// ローカルストレージから情報を受け取る
// const localStorageQ2 = JSON.parse((localStorage.getItem("GetDataQ2")));
// document.getElementById("GetDataQ2").innerHTML = localStorageQ2;
// const localStorageQ3 = JSON.parse((localStorage.getItem("GetDataQ3")));
// document.getElementById("GetDataQ3").innerHTML = localStorageQ3;
// const localStorageQ4 = JSON.parse((localStorage.getItem("GetDataQ4")));
// document.getElementById("GetDataQ4").innerHTML = localStorageQ4;
// const localStorageQ5 = JSON.parse((localStorage.getItem("GetDataQ5")));
// document.getElementById("GetDataQ5").innerHTML = localStorageQ5;
// const localStorageQ6 = JSON.parse((localStorage.getItem("GetDataQ6")));
// document.getElementById("GetDataQ6").innerHTML = localStorageQ6;
// const localStorageQ7 = JSON.parse((localStorage.getItem("GetDataQ7")));
// document.getElementById("GetDataQ7").innerHTML = localStorageQ7;






    // ---配列が機能しなかったら以下の個別を使う-------------------------------------------------------------------------------
    // ローカルストレージへ保存
    // const JsonGetDataGender = JSON.stringify(GetDataGender);
    // localStorage.setItem("GetDataGender", JsonGetDataGender);
    // const JsonGetDataAge = JSON.stringify(GetDataAge);
    // localStorage.setItem("GetDataAge", JsonGetDataAge);
    // const JsonGetDataAffiliation = JSON.stringify(GetDataAffiliation);
    // localStorage.setItem("GetDataAffiliation", JsonGetDataAffiliation);
    // const JsonGetDataOccupation = JSON.stringify(GetDataOccupation);
    // localStorage.setItem("GetDataOccupation", JsonGetDataOccupation);
    // const JsonGetDataLength = JSON.stringify(GetDataLength);
    // localStorage.setItem("GetDataLength", JsonGetDataLength);

    // const JsonGetDataQ1 = JSON.stringify(GetDataQ1);
    // localStorage.setItem("GetDataQ1", JsonGetDataQ1);
    // const JsonGetDataQ2 = JSON.stringify(GetDataQ2);
    // localStorage.setItem("GetDataQ2", JsonGetDataQ2);
    // const JsonGetDataQ3 = JSON.stringify(GetDataQ3);
    // localStorage.setItem("GetDataQ3", JsonGetDataQ3);
    // const JsonGetDataQ4 = JSON.stringify(GetDataQ4);
    // localStorage.setItem("GetDataQ4", JsonGetDataQ4);
    // const JsonGetDataQ5 = JSON.stringify(GetDataQ5);
    // localStorage.setItem("GetDataQ5", JsonGetDataQ5);
    // const JsonGetDataQ6 = JSON.stringify(GetDataQ6);
    // localStorage.setItem("GetDataQ6", JsonGetDataQ6);
    // const JsonGetDataQ7 = JSON.stringify(GetDataQ7);
    // localStorage.setItem("GetDataQ7", JsonGetDataQ7);
// });
