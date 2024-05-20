// Tính tiền lương

let tienLuong ;
document.getElementById('btnClick1').onclick = () => { 
    // input : người dùng nhập số tiền lương 
    let soTienLuong = document.getElementById("soTienLuong").value*1;
    // input : người dùng nhập số giờ làm 
    
    let soGioLam = document.getElementById("soGioLam").value*1;
    // Xử lý tính tiền lương
    tienLuong = soTienLuong * soGioLam;

    // output: Xuất ra thông báo tiền lương cho người dùng
    document.getElementById("ketQua1").innerHTML = `Lương của bạn là ${tienLuong.toLocaleString('vi',{
        style: "currency",
        currency: "VND"
    })}`
}

//Tính Giá Trị Trung Bình
document.getElementById("btnClick2").onclick = () => {
    // input : người dùng nhập lần lượt các giá trị để tính giá trị trung bình
    let number1 = document.getElementById("number1").value*1;
    let number2 = document.getElementById("number2").value*1;
    let number3 = document.getElementById("number3").value*1;
    let number4 = document.getElementById("number4").value*1;
    let number5 = document.getElementById("number5").value*1;

    // xử lý : 
    const giaTriTB = (number1 + number2 + number3 + number4 + number5 ) / 5;
    // output : Xuất ra thông báo giấ trị trung bình cho người dùng.
    document.getElementById("ketQua2").innerHTML = `Gía Trị Trung Bình Là ${giaTriTB}`;
}

// Quy Đổi tiền
document.getElementById("btnClick3").onclick = () => {
    // input : Lấy số tiền người dùng muốn quy đổi nhập vào.
    let soTien = document.getElementById("soTien").value*1;
    // Xử lý
    let quyDoi = soTien * 23500;
    // output: xuất ra thông báo cho người dùng sau khi quy đổi
    document.getElementById("ketQua3").innerHTML = `Tiền quy đổi được là ${quyDoi.toLocaleString("vi",{
        style: "currency",
        currency: "VND"
    })}`;

}

// Tính Chu Vi Và Diện Tích hình chủ nhật
document.getElementById("btnClick4").onclick = () => {
    // input : lấy các giá trị chiều rộng và chiều dài người dùng nhập vào;
    let chieuDai = document.getElementById('chieuDai').value*1;
    let chieuRong = document.getElementById('chieuRong').value*1;
    // Xử lý:
    let dienTich = chieuDai * chieuRong;
    let chuVi = (chieuDai + chieuRong) * 2
    //output: Xuất ra thông báo kết quả cho người dùng
    document.getElementById("ketQua4").innerHTML = `Chu vi là ${chuVi} và Chiều Rộng là ${dienTich}`;


}
// Tính tổng 2 ký số
document.getElementById('btnClick5').onclick = () => {
    // input : nhận vào chuổi số khi người dùng nhập vào
    let number = document.getElementById("number").value
    // xử lý: sử dụng hàm split để chuyển đổi chuổi người dùng nhập vào thành mãng
    // sử dụng hàm map để lập qua mãng và sử dụng biến sum để lưu lại giá trị mỗi lần lặp qua
    let arr = number.split('');
    let sum = 0;
    arr.map((item) => {
        sum+= item*1;
    }) 
    // output: xuất ra thông báo kết quả cho người dùng
    document.getElementById("ketQua5").innerHTML = `tổng ký số là ${sum}`;
    
}