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
function updateRecord() {
    class Request {
        constructor(requestId, title, status, priority, requestedDate, requestDeadline, confidentialFlag, specialNote, content) {
            this.requestId = requestId
            this.title = title
            this.status = status
            this.priority = priority
            this.requestedDate = requestedDate
            this.requestDeadline = requestDeadline
            this.confidentialFlag = confidentialFlag
            this.specialNote = specialNote
            this.content = content
        }
    }
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add('was-validated');
            }
            else {
                form.classList.remove('was-validated');
                let title = document.getElementById("requestTitle").value
                let status = document.getElementById("requestStatus").value
                let priority = document.getElementById("requestPriority").value
                let requestedDate = document.getElementById("requestedDate").value
                let requestDeadline = document.getElementById("requestDeadline").value
                let confidentialFlag = document.getElementById("confidentialCheck").value
                let specialNote = document.getElementById("requestNote").value
                let content = document.getElementById("requestContent").value

                let createRequest = new Request(requestId, title, status, priority, requestedDate, requestDeadline, confidentialFlag, specialNote, content);
                requestsStorage.push(createRequest)
                localStorage.setItem('requestId', requestId);
                localStorage.setItem('requests', JSON.stringify(requestsStorage))
                window.location.href = "/site-customer/pages/detail/index.html"
            }
        }
        )
    }, false);
}