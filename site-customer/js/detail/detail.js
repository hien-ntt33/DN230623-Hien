window.onload = function () {
    const requestId = localStorage.getItem("requestId");
    let requestsStorage = localStorage.getItem('requests')
    requestsStorage = JSON.parse(requestsStorage)
    let detail = requestsStorage.find(request => request.requestId === requestId);

    document.getElementById('title').innerHTML = detail.title;
    document.getElementById('requestStatus').innerHTML = detail.status;
    document.getElementById('requestPriority').innerHTML = detail.priority;
    document.getElementById('requestdate').innerHTML = detail.requestedDate;
    document.getElementById('deadline').innerHTML = detail.requestDeadline;
    document.getElementById('confidentialCheck').innerHTML = detail.confidentialFlag;
    document.getElementById('requestNote').innerHTML = detail.specialNote;
    document.getElementById('requestContent').innerHTML = detail.content;
}

document.getElementById("btn-edit").addEventListener("click", updateRecord);
function updateRecord(){
    location.href = "/site-customer/pages/edit/index.html"
}