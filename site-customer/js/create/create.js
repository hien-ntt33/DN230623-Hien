//Text editor
tinymce.init({
  selector: 'textarea#requestContent'
});

window.onload = function () {
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
        let requestId = 'RID'+ Math.floor((Math.random() * 1000) + 100)
        let title = document.getElementById("requestTitle").value
        let status = document.getElementById("requestStatus").value
        let priority = document.getElementById("requestPriority").value
        let requestedDate = document.getElementById("requestedDate").value
        let requestDeadline = document.getElementById("requestDeadline").value
        let confidentialFlag = document.getElementById("confidentialCheck").value
        let specialNote = document.getElementById("requestNote").value
        let content = document.getElementById("requestContent").value

        let createRequest = new Request(requestId, title, status, priority, requestedDate, requestDeadline, confidentialFlag, specialNote, content);
        let requestsStorage = localStorage.getItem('requests')
          if (!requestsStorage) {
            requestsStorage = new Array();
          }
          else {
            requestsStorage = JSON.parse(requestsStorage)
          }
          requestsStorage.push(createRequest)
          localStorage.setItem('requestId', requestId);
          localStorage.setItem('requests', JSON.stringify(requestsStorage))
          window.location.href = "/site-customer/pages/detail/index.html"
        }
      }
    )
  }, false);
  };

