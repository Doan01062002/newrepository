let bigImg = document.getElementById("bigImg");

let images = ["https://xwatch.vn/upload_images/images/2023/03/29/anh-chill-bau-troi.jpg","https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?cs=srgb&dl=pexels-todd-trapani-2754200.jpg&fm=jpg","https://images2.thanhnien.vn/528068263637045248/2023/5/11/base64-1683774325033593425735.png","https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://bizweb.dktcdn.net/100/438/408/files/anh-dep-3d-yodyvn.jpg?v=1683534873601","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQK8bVbO1yuylDuLLloKVbsRnFmC1bDnWaA&usqp=CAU","https://vcdn-dulich.vnecdn.net/2021/12/24/An-Giang-0-jpeg-1470-1640315739.jpg"];

function renderImage(){
    let text ="";
    for(let i=0;i<images.length;i++){
        if (i == 3) {
            text +=
        `
        <li class = "changeBackground"; ><img src="${images[i]}" alt=""></li>
        `
        continue;
        };
        text +=
        `
        <li><img onclick = "show(${i})"; src="${images[i]}" alt=""></li>
        `
    };
    let element = document.getElementById("smallImg");
    element.innerHTML = 
    `
    <span onclick="back()" class="material-symbols-outlined">arrow_back_ios</span> ${text} <span onclick="forward()" class="material-symbols-outlined">arrow_forward_ios</span>
    `
};

renderImage();

function forward(){
    let result = images.pop();
    images.unshift(result);
    //gọi hàm render để cập nhật UI
    bigImg.innerHTML = `<img src="${images[3]}" alt="">`;
    renderImage();
};

function back(){
    let result = images.shift();
    images.push(result);
    //gọi hàm render để cập nhật UI
    bigImg.innerHTML = `<img src="${images[3]}" alt="">`;
    renderImage();
};

function show(index) {
    if (index >= 0 && index <= 2 || index >=3 && index<=7) {
      // Lấy hình ảnh tại chỉ số được nhấp vào
      const clickedImage = images[index];
      
      // Di chuyển hình ảnh được nhấp vào đến vị trí thứ 3 trong mảng
      images.splice(index, 1);
      images.splice(3, 0, clickedImage);
      
      // Cập nhật giao diện
      bigImg.innerHTML = `<img src="${images[3]}" alt="">`;
      renderImage();
    };
};