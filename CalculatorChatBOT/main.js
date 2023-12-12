const chatContainer = document.getElementById('chatContainer');



function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}





function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        const userMessageContainer = document.createElement('div');
        userMessageContainer.className = 'message-container';
        const userMessage = document.createElement('div');
        userMessage.className = 'message right';
        userMessage.innerHTML = `<div class="sender">PDM Student</div>${message}`;
        userMessageContainer.appendChild(userMessage);
        chatContainer.appendChild(userMessageContainer);

        messageInput.value = '';
        calculateExpression(message);

        scrollToBottom();
    }
}






function calculateExpression(expression) {
    const operators = {
        '+': '+',
        '-': '-',
        '×': '*',
        '÷': '/'
    };

    const sanitizedExpression = expression.replace('÷', '/');

    let result;
    try {
        if (sanitizedExpression.includes('×')) {
            const updatedExpression = sanitizedExpression.replace('×', '*');
            result = eval(updatedExpression);
        } else {
            result = eval(sanitizedExpression);
        }
    } catch (error) {
        result = 'Error: You Can Only Calculate Numbers Using ( + , - , × , ÷) these signs ';
    }




    const appResponseContainer = document.createElement('div');
    appResponseContainer.className = 'message-container';
    const appResponse = document.createElement('div');
    appResponse.className = 'message left';
    appResponse.innerHTML = `<div class="sender">PDM [BOT]</div><img id="copyImg" src="W-copy.png"/>${result}`;
    appResponseContainer.appendChild(appResponse);
    chatContainer.appendChild(appResponseContainer);

    scrollToBottom();
}




const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', sendMessage);

const messageInput = document.getElementById('messageInput');
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});



chatContainer.addEventListener('scroll', function() {
    const isScrolledToBottom = chatContainer.scrollHeight - chatContainer.scrollTop <= chatContainer.clientHeight;
    if (isScrolledToBottom) {
        scrollToBottom();
    }
});




function refreshPage() {
    location.reload();
  }
  
  
  
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}




function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




document.addEventListener("DOMContentLoaded", function() {
  var dialog = document.getElementById("dialog");
  var sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", function() {
    dialog.classList.add("hidden"); // Ocultar o diálogo ao clicar no botão
  });
});



function refreshPage() {
    location.reload();
  }



document.addEventListener('DOMContentLoaded', function() {
      var sendButton = document.getElementById('sendButton');
      var progressContainer = document.querySelector('.progress-container');

      sendButton.addEventListener('click', function() {
        progressContainer.style.display = 'block'; // Exibir o div progress-container

        setTimeout(function() {
          progressContainer.style.display = 'none'; // Ocultar o div progress-container após 4 segundos
        }, 4000);
      });
    });