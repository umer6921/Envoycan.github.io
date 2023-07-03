document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const inboxList = document.getElementById('inboxList');
    const messageItems = inboxList.getElementsByClassName('inbox-msg');
    const hrElements = inboxList.getElementsByTagName('hr');
  
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
  
      for (let i = 0; i < messageItems.length; i++) {
        const messageItem = messageItems[i];
        const messageText = messageItem.innerText.toLowerCase();
        const hrElement = hrElements[i];
  
        if (messageText.includes(searchTerm)) {
          messageItem.classList.remove('d-none');
          hrElement.classList.remove('d-none');
        } else {
          messageItem.classList.add('d-none');
          hrElement.classList.add('d-none');
        }
      }
    });
  });
  