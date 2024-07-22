var teamMembers = [
    "We are pleased to invite Mr. Nguyen Huu Thuan to be seated at Table 1",
"We are pleased to invite Ms. Nguyen Thu Trang to be seated at Table 1",
"We are pleased to invite Ms. Do Thi Minh Nguyet to be seated at Table 1",
"We are pleased to invite Mr. Tran The Anh to be seated at Table 1",
"We are pleased to invite Ms. Vu Hong Ha to be seated at Table 1",
"We are pleased to invite Ms. Bui Thi Thu to be seated at Table 1",
"We are pleased to invite Mr. Nguyen Xuan Do to be seated at Table 1",
"We are pleased to invite Mr. Nguyen Xuan Dung to be seated at Table 2",
"We are pleased to invite Ms. Tran Thanh Hoa to be seated at Table 2",
"We are pleased to invite Ms. Nguyen Thi Hong Nhung to be seated at Table 2",
"We are pleased to invite Mr. Pham Tuan Anh to be seated at Table 2",
"We are pleased to invite Mr. Do Thai Binh to be seated at Table 2",
"We are pleased to invite Mr. Mai Thanh Binh to be seated at Table 2",
"We are pleased to invite Ms. Pham Thi Ly to be seated at Table 2",
"We are pleased to invite Mr. Ngo Xuan Dung to be seated at Table 3",
"We are pleased to invite Ms. Nguyen Thi Thanh Hoa to be seated at Table 3",
"We are pleased to invite Mr. Tran Quang Hung to be seated at Table 3",
"We are pleased to invite Ms. Diep Thi Hoa to be seated at Table 3",
"We are pleased to invite Ms. Nguyen Thi Thuc Trang to be seated at Table 3",
"We are pleased to invite Ms. Le Thi Thu Thuy to be seated at Table 3",
"We are pleased to invite Ms. Nguyen Tran Minh Tu to be seated at Table 3",
"We are pleased to invite Mr. Dang Tung Hung to be seated at Table 4",
"We are pleased to invite Mr. Hoang Nguyen Danh to be seated at Table 4",
"We are pleased to invite Ms. Le Thi Thanh Tam to be seated at Table 4",
"We are pleased to invite Ms. Pham Tu Quynh to be seated at Table 4",
"We are pleased to invite Mr. Hoang Van Thieu to be seated at Table 4",
"We are pleased to invite Mr. Tran Chi Linh to be seated at Table 4",
"We are pleased to invite Mr. Tran Van Chinh to be seated at Table 4",
"We are pleased to invite Mr. Vu Huy Binh to be seated at Table 5",
"We are pleased to invite Mr. Le Tran Hai to be seated at Table 5",
"We are pleased to invite Mr. Nguyen Giang Nam to be seated at Table 5",
"We are pleased to invite Mr. Nguyen The Quoc Bao to be seated at Table 5",
"We are pleased to invite Mr. Nguyen Thi Tham to be seated at Table 5",
"We are pleased to invite Mr. Nguyen Xuan Truong to be seated at Table 5",
"We are pleased to invite Ms. Dang Thi Kim Cuong to be seated at Table 5",
"We are pleased to invite Mr. Phi Van Bao to be seated at Table 6",
"We are pleased to invite Ms. Le Thi Kim Thoa to be seated at Table 6",
"We are pleased to invite Ms. Tran Ngoc Tuyet Anh to be seated at Table 6",
"We are pleased to invite Mr. Dao Viet Trung to be seated at Table 6",
"We are pleased to invite Mr. Nguyen Xuan Dung QN to be seated at Table 6",
"We are pleased to invite Mr. Vo Hoang Lan to be seated at Table 6",
"We are pleased to invite Ms. Cung Thi Thanh Thuy to be seated at Table 6",
"We are pleased to invite Mr. Pham Hoang Tuan to be seated at Table 6",
"We are pleased to invite Mr. Ho Van Nen to be seated at Table 7",
"We are pleased to invite Mr. Ly Van Vu to be seated at Table 7",
"We are pleased to invite Ms. Vu Thi Tuyet to be seated at Table 7",
"We are pleased to invite Mr. Nguyen Van Tiep to be seated at Table 7",
"We are pleased to invite Mr. Nguyen Vinh Nguyen to be seated at Table 7",
"We are pleased to invite Mr. Vo Tan Dat to be seated at Table 7",
"We are pleased to invite Mr. Pham Tien Dung to be seated at Table 7",
"We are pleased to invite Ms. Nguyen Ngoc Ha to be seated at Table 7",
"We are pleased to invite Mr. Dang Hoang Phuong Quang to be seated at Table 8",
"We are pleased to invite Mr. Ha Huy Giap to be seated at Table 8",
"We are pleased to invite Mr. Le Anh Tuan to be seated at Table 8",
"We are pleased to invite Mr. Tran Dang Trung to be seated at Table 8",
"We are pleased to invite Mr. Le Quy Phuc to be seated at Table 8",
"We are pleased to invite Mr. Vu Xuan Toan to be seated at Table 8",
"We are pleased to invite Ms. Nguyen Hong Hanh to be seated at Table 8",


];

function table() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    if (searchTerm === "") {
        resultDiv.innerHTML = "<p>Vui lòng nhập tên để tìm kiếm.</p>";
        return;
    }

    var foundMembers = teamMembers.filter(function(member) {
        return member.toLowerCase().includes(searchTerm);
    });

    if (foundMembers.length === 0) {
        resultDiv.innerHTML = "<p>Không tìm thấy thành viên nào có tên này.</p>";
    } else {
        foundMembers.forEach(function(member) {
            resultDiv.innerHTML += "<p>" + member + "</p>";
        });
    }
}
