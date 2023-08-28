window.onload = function () {
    let requestsStorage = localStorage.getItem('requests')
    var strContent = '';

    if (!requestsStorage) {
        requestsStorage = new Array();
    }
    else {
        requestsStorage = JSON.parse(requestsStorage)
    }

    for (var i = 0; i < requestsStorage.length; i++) {
        strContent += `<tr>
                            <td style="display: none">` + requestsStorage[i].requestId + `</td>
                            <td>` + requestsStorage[i].requestedDate + `</td>
                            <td>` + requestsStorage[i].status + `</td>
                            <td>` + requestsStorage[i].priority + `</td>
                            <td>` + requestsStorage[i].title + `</td>
                            <td>` + requestsStorage[i].requestDeadline + `</td>
                            <td>` + requestsStorage[i].confidentialFlag + `</td>
                            <td>
                                <div class="row row-cols-lg-auto g-3 align-items-center">
                                    <button type="button" class="col btn btn-info btn-sm btn-round" onclick=movePage(\'` + requestsStorage[i].requestId + `\')>
                                        <span class="btn-label"><i class="fa fa-share"></i></span></button>
                                    <button type="button" class="col btn btn-warning btn-sm btn-round" onclick=editRequest(\'` + requestsStorage[i].requestId + `\')>
                                        <span class="btn-label"><i class="fa fa-edit"></i></span></button>
                                    <button type="button" class="col btn btn-danger btn-sm btn-round" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <span class="btn-label"><i class="fa fa-trash"></i></span></button>
                                </div>
                            </td>
                        </tr>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                     <div class="modal-header">
                                         <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirm dialog</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                     </div>
                                <div class="modal-body">
                                      Are you sure you want to delete this request?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteRecord(\'` + requestsStorage[i].requestId + `\')">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    }
    console.log(requestsStorage);
    document.getElementById('layoutSidenav_tableContent').innerHTML += strContent;
}

function movePage(requestId) {
    let requestsStorage = localStorage.getItem('requests')
    localStorage.setItem("requestId", requestId)
    requestsStorage = JSON.parse(requestsStorage)
    location.href = "/site-customer/pages/detail/index.html"
}

function deleteRecord(requestId) {
    let requestsStorage = localStorage.getItem('requests')
    requestsStorage = JSON.parse(requestsStorage)
    let requestIndex = requestsStorage.findIndex(v => v.requestId) === requestId
    if (requestIndex != -1) {
        //  xoá data trong  localStorage
        requestsStorage.splice(requestId, 1);
        localStorage.setItem('requests', JSON.stringify(requestsStorage))

        // xoá Element hiển thị trên web
        let button_remove = deleteRecord.target
        button_remove?.parentElement?.parentElement.remove()
    }
}

function editRequest(requestId){
    let requestsStorage = localStorage.getItem('requests')
    localStorage.setItem("requestId", requestId)
    requestsStorage = JSON.parse(requestsStorage)
    location.href = "/site-customer/pages/edit/index.html"
}

document.getElementById("btn-logout").addEventListener("click", onLogout);
function onLogout() {
    localStorage.clear()
    location.href = "/site-customer/pages/login/login.html"
}