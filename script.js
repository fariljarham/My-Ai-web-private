// Ambil chatlog dari localStorage kalau ada
let chatlog = JSON.parse(localStorage.getItem("chatlog")) || [];

function updateChat() {
    const chatDiv = document.getElementById("chatlog");
    chatDiv.innerHTML = "";
    chatlog.forEach(msg => {
        let p = document.createElement("p");
        p.textContent = msg;
        chatDiv.appendChild(p);
    });
    chatDiv.scrollTop = chatDiv.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("userInput");
    let message = input.value.trim();
    if (message === "") return;

    // Tambahkan pesan user
    chatlog.push("Kamu: " + message);

    // AI respon sederhana (bisa dikembangkan)
    let response = "AI: Aku masih belajar, tapi aku ingat kata-katamu: " + message;
    chatlog.push(response);

    // Simpan ke localStorage
    localStorage.setItem("chatlog", JSON.stringify(chatlog));

    // Update tampilan
    updateChat();
    input.value = "";
}

updateChat();
